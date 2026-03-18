/**
 * Progress persistence — Firestore-backed with in-memory cache and SRS integration.
 * Types are level-qualified: "n2-kanji", "n1-grammar", etc.
 */
const Progress = (() => {
  const LEARNED_THRESHOLD = 2;
  const ALL_TYPES = ['n1-kanji', 'n1-grammar', 'n2-kanji', 'n2-grammar', 'n3-kanji', 'n3-grammar'];
  let cache = {};
  let profile = null;
  let loaded = false;

  function initCache() {
    cache = {};
    ALL_TYPES.forEach(t => { cache[t] = {}; });
  }
  initCache();

  function userDoc() {
    return window.db.collection('users').doc(Auth.getUid());
  }

  function progressDoc(type) {
    return userDoc().collection('progress').doc(type);
  }

  async function migrateOldData() {
    // Migrate old "kanji" → "n2-kanji" and "grammar" → "n2-grammar"
    const [oldKanjiSnap, oldGrammarSnap] = await Promise.all([
      progressDoc('kanji').get(),
      progressDoc('grammar').get()
    ]);

    const migrations = [];
    if (oldKanjiSnap.exists && oldKanjiSnap.data().items && Object.keys(oldKanjiSnap.data().items).length > 0) {
      cache['n2-kanji'] = oldKanjiSnap.data().items;
      migrations.push(
        progressDoc('n2-kanji').set({ items: cache['n2-kanji'] }, { merge: true }),
        progressDoc('kanji').delete()
      );
    }
    if (oldGrammarSnap.exists && oldGrammarSnap.data().items && Object.keys(oldGrammarSnap.data().items).length > 0) {
      cache['n2-grammar'] = oldGrammarSnap.data().items;
      migrations.push(
        progressDoc('n2-grammar').set({ items: cache['n2-grammar'] }, { merge: true }),
        progressDoc('grammar').delete()
      );
    }
    if (migrations.length > 0) {
      await Promise.all(migrations);
    }
  }

  async function loadAll() {
    if (loaded) return;
    const uid = Auth.getUid();
    if (!uid) return;

    // Try migration first
    await migrateOldData();

    // Load all level-qualified progress docs + profile
    const promises = ALL_TYPES.map(t => progressDoc(t).get());
    promises.push(userDoc().get());

    const results = await Promise.all(promises);
    const profileSnap = results[results.length - 1];

    ALL_TYPES.forEach((t, i) => {
      const snap = results[i];
      cache[t] = (snap.exists && snap.data().items) || {};
    });

    profile = profileSnap.exists ? profileSnap.data() : defaultProfile();
    loaded = true;
  }

  function defaultProfile() {
    const user = Auth.getUser();
    return {
      displayName: user ? user.displayName : '',
      email: user ? user.email : '',
      photoURL: user ? user.photoURL : '',
      createdAt: Date.now(),
      lastStudyDate: null,
      currentStreak: 0,
      longestStreak: 0,
      totalSessions: 0,
      totalCorrect: 0,
      totalIncorrect: 0
    };
  }

  function clearCache() {
    initCache();
    profile = null;
    loaded = false;
  }

  function getType(mode) {
    return getProgressType(mode);
  }

  async function recordAnswer(type, key, isCorrect) {
    await loadAll();
    if (!cache[type]) cache[type] = {};
    if (!cache[type][key]) {
      cache[type][key] = { correct: 0, incorrect: 0, lastSeen: 0, ...SRS.defaultItem() };
    }
    const entry = cache[type][key];
    if (isCorrect) {
      entry.correct++;
    } else {
      entry.incorrect++;
    }
    entry.lastSeen = Date.now();

    // SRS update
    const srsResult = SRS.calculate(entry, isCorrect);
    entry.interval = srsResult.interval;
    entry.easeFactor = srsResult.easeFactor;
    entry.nextReview = srsResult.nextReview;
    entry.repetitions = srsResult.repetitions;

    // Write-through to Firestore
    progressDoc(type).set({ items: cache[type] }, { merge: true });
  }

  function getAllKeys(type) {
    // type is "n2-kanji", "n1-grammar", etc.
    const parts = type.split('-');
    const level = parts[0];
    const kind = parts[1];
    const reg = DATA_REGISTRY[level];
    if (!reg || !reg[kind]) return [];
    const entry = reg[kind];
    return entry.data().map(item => item[entry.keyProp]);
  }

  async function getStats(type) {
    await loadAll();
    const store = cache[type] || {};
    const allKeys = getAllKeys(type);
    const total = allKeys.length;
    let studied = 0;
    let weak = 0;

    allKeys.forEach(key => {
      const entry = store[key];
      if (!entry) return;
      studied++;
      if (entry.incorrect > 0 && entry.correct < LEARNED_THRESHOLD) {
        weak++;
      }
    });

    return { total, studied, weak, unseen: total - studied };
  }

  async function getWeakItems(type) {
    await loadAll();
    const store = cache[type] || {};
    const allKeys = getAllKeys(type);
    return allKeys.filter(key => {
      const entry = store[key];
      return entry && entry.incorrect > 0 && entry.correct < LEARNED_THRESHOLD;
    });
  }

  async function getUnseenItems(type) {
    await loadAll();
    const store = cache[type] || {};
    const allKeys = getAllKeys(type);
    return allKeys.filter(key => !store[key]);
  }

  async function getDueItems(type) {
    await loadAll();
    const store = cache[type] || {};
    const allKeys = getAllKeys(type);
    return allKeys.filter(key => {
      const entry = store[key];
      if (!entry) return true; // unseen items are due
      return SRS.isDue(entry);
    });
  }

  async function updateStats(correct, incorrect) {
    await loadAll();
    if (!profile) profile = defaultProfile();

    profile.totalCorrect += correct;
    profile.totalIncorrect += incorrect;
    profile.totalSessions++;

    // Streak logic
    const today = new Date().toISOString().slice(0, 10);
    if (profile.lastStudyDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      if (profile.lastStudyDate === yesterday) {
        profile.currentStreak++;
      } else {
        profile.currentStreak = 1;
      }
      profile.lastStudyDate = today;
    }
    profile.longestStreak = Math.max(profile.longestStreak, profile.currentStreak);

    userDoc().set(profile, { merge: true });
  }

  async function getProfile() {
    await loadAll();
    return profile || defaultProfile();
  }

  async function reset() {
    initCache();
    profile = defaultProfile();
    loaded = true;
    const promises = ALL_TYPES.map(t => progressDoc(t).set({ items: {} }));
    promises.push(userDoc().set(profile));
    // Also clean up old format docs if they exist
    promises.push(progressDoc('kanji').delete().catch(() => {}));
    promises.push(progressDoc('grammar').delete().catch(() => {}));
    await Promise.all(promises);
  }

  return {
    recordAnswer, getStats, getWeakItems, getUnseenItems, getType,
    getDueItems, updateStats, getProfile, reset, loadAll, clearCache,
    ALL_TYPES
  };
})();

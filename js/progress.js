/**
 * Progress persistence — Firestore-backed with in-memory cache and SRS integration.
 */
const Progress = (() => {
  const LEARNED_THRESHOLD = 2;
  let cache = { kanji: {}, grammar: {} };
  let profile = null;
  let loaded = false;

  function userDoc() {
    return window.db.collection('users').doc(Auth.getUid());
  }

  function progressDoc(type) {
    return userDoc().collection('progress').doc(type);
  }

  async function loadAll() {
    if (loaded) return;
    const uid = Auth.getUid();
    if (!uid) return;

    const [kanjiSnap, grammarSnap, profileSnap] = await Promise.all([
      progressDoc('kanji').get(),
      progressDoc('grammar').get(),
      userDoc().get()
    ]);

    cache.kanji = (kanjiSnap.exists && kanjiSnap.data().items) || {};
    cache.grammar = (grammarSnap.exists && grammarSnap.data().items) || {};
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
    cache = { kanji: {}, grammar: {} };
    profile = null;
    loaded = false;
  }

  function getType(mode) {
    return mode.startsWith('kanji') ? 'kanji' : 'grammar';
  }

  async function recordAnswer(type, key, isCorrect) {
    await loadAll();
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
    if (type === 'kanji') return KANJI_N2.map(k => k.kanji);
    return GRAMMAR_N2.map(g => g.japanese);
  }

  async function getStats(type) {
    await loadAll();
    const store = cache[type] || {};
    const allKeys = getAllKeys(type);
    const total = allKeys.length;
    let learned = 0;
    let weak = 0;

    allKeys.forEach(key => {
      const entry = store[key];
      if (!entry) return;
      if (entry.correct >= LEARNED_THRESHOLD) {
        learned++;
      } else {
        weak++;
      }
    });

    return { total, learned, weak, unseen: total - learned - weak };
  }

  async function getWeakItems(type) {
    await loadAll();
    const store = cache[type] || {};
    const allKeys = getAllKeys(type);
    return allKeys.filter(key => {
      const entry = store[key];
      return entry && entry.correct < LEARNED_THRESHOLD;
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
    cache = { kanji: {}, grammar: {} };
    profile = defaultProfile();
    loaded = true;
    await Promise.all([
      progressDoc('kanji').set({ items: {} }),
      progressDoc('grammar').set({ items: {} }),
      userDoc().set(profile)
    ]);
  }

  return {
    recordAnswer, getStats, getWeakItems, getUnseenItems, getType,
    getDueItems, updateStats, getProfile, reset, loadAll, clearCache
  };
})();

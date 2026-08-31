/**
 * Progress persistence — localStorage-backed with in-memory cache and SRS integration.
 * Types are level-qualified: "n2-kanji", "n1-grammar", etc.
 */
const Progress = (() => {
  const LEARNED_THRESHOLD = 2;
  const ALL_TYPES = ['n1-kanji', 'n1-grammar', 'n2-kanji', 'n2-grammar', 'n3-kanji', 'n3-grammar'];
  const KEY_PREFIX = 'jlpt:progress:';
  const PROFILE_KEY = 'jlpt:profile';

  let cache = {};
  let profile = null;
  let loaded = false;

  // Private browsing and locked-down storage settings can make localStorage throw
  // on access. Fall back to memory-only so a session still works, just unsaved.
  function read(key) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function write(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // memory-only for this session
    }
  }

  function initCache() {
    cache = {};
    ALL_TYPES.forEach(t => { cache[t] = {}; });
  }
  initCache();

  function defaultProfile() {
    return {
      createdAt: Date.now(),
      lastStudyDate: null,
      currentStreak: 0,
      longestStreak: 0,
      totalSessions: 0,
      totalCorrect: 0,
      totalIncorrect: 0
    };
  }

  async function loadAll() {
    if (loaded) return;
    ALL_TYPES.forEach(t => {
      const stored = read(KEY_PREFIX + t);
      cache[t] = (stored && stored.items) || {};
    });
    profile = read(PROFILE_KEY) || defaultProfile();
    loaded = true;
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

    write(KEY_PREFIX + type, { items: cache[type] });
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
    return getAllKeys(type).filter(key => {
      const entry = store[key];
      return entry && entry.incorrect > 0 && entry.correct < LEARNED_THRESHOLD;
    });
  }

  async function getUnseenItems(type) {
    await loadAll();
    const store = cache[type] || {};
    return getAllKeys(type).filter(key => !store[key]);
  }

  async function getDueItems(type) {
    await loadAll();
    const store = cache[type] || {};
    return getAllKeys(type).filter(key => {
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

    write(PROFILE_KEY, profile);
  }

  async function getProfile() {
    await loadAll();
    return profile || defaultProfile();
  }

  async function reset() {
    initCache();
    profile = defaultProfile();
    loaded = true;
    ALL_TYPES.forEach(t => write(KEY_PREFIX + t, { items: {} }));
    write(PROFILE_KEY, profile);
  }

  return {
    recordAnswer, getStats, getWeakItems, getUnseenItems, getType,
    getDueItems, updateStats, getProfile, reset, loadAll,
    ALL_TYPES
  };
})();

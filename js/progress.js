/**
 * Progress persistence — tracks learned/weak/unseen items via localStorage.
 */
const Progress = (() => {
  const STORAGE_KEY = 'jlpt-progress';
  const LEARNED_THRESHOLD = 2;

  function load() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { kanji: {}, grammar: {} };
    } catch {
      return { kanji: {}, grammar: {} };
    }
  }

  function save(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function getType(mode) {
    return mode.startsWith('kanji') ? 'kanji' : 'grammar';
  }

  function recordAnswer(type, key, isCorrect) {
    const data = load();
    if (!data[type]) data[type] = {};
    if (!data[type][key]) data[type][key] = { correct: 0, incorrect: 0, lastSeen: 0 };
    const entry = data[type][key];
    if (isCorrect) {
      entry.correct++;
    } else {
      entry.incorrect++;
    }
    entry.lastSeen = Date.now();
    save(data);
  }

  function getAllKeys(type) {
    if (type === 'kanji') return KANJI_N2.map(k => k.kanji);
    return GRAMMAR_N2.map(g => g.japanese);
  }

  function getStats(type) {
    const data = load();
    const store = data[type] || {};
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

  function getItemStatus(type, key) {
    const data = load();
    const entry = (data[type] || {})[key];
    if (!entry) return 'unseen';
    return entry.correct >= LEARNED_THRESHOLD ? 'learned' : 'weak';
  }

  function getWeakItems(type) {
    const data = load();
    const store = data[type] || {};
    const allKeys = getAllKeys(type);
    return allKeys.filter(key => {
      const entry = store[key];
      return entry && entry.correct < LEARNED_THRESHOLD;
    });
  }

  function getUnseenItems(type) {
    const data = load();
    const store = data[type] || {};
    const allKeys = getAllKeys(type);
    return allKeys.filter(key => !store[key]);
  }

  function reset() {
    localStorage.removeItem(STORAGE_KEY);
  }

  return { recordAnswer, getStats, getItemStatus, getWeakItems, getUnseenItems, getType, reset };
})();

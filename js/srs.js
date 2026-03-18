/**
 * SRS module — Simplified SM-2 spaced repetition algorithm.
 */
const SRS = (() => {
  const DAY_MS = 86400000;

  function defaultItem() {
    return { interval: 0, easeFactor: 2.5, nextReview: 0, repetitions: 0 };
  }

  function calculate(item, isCorrect) {
    const result = Object.assign({}, item);

    if (isCorrect) {
      result.repetitions++;
      if (result.repetitions === 1) {
        result.interval = 1;
      } else if (result.repetitions === 2) {
        result.interval = 6;
      } else {
        result.interval = Math.round(result.interval * result.easeFactor);
      }
      result.easeFactor = Math.max(1.3, result.easeFactor + 0.05);
    } else {
      result.repetitions = 0;
      result.interval = 0;
      result.easeFactor = Math.max(1.3, result.easeFactor - 0.2);
    }

    result.nextReview = Date.now() + result.interval * DAY_MS;
    return result;
  }

  function isDue(item) {
    return !item.nextReview || item.nextReview <= Date.now();
  }

  return { defaultItem, calculate, isDue };
})();

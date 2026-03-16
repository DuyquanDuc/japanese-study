/**
 * Quiz engine — generates questions, tracks score, manages state.
 */
const Quiz = (() => {
  let pool = [];
  let fullPool = [];
  let mode = '';
  let questions = [];
  let currentIndex = 0;
  let score = 0;
  let missed = [];

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function pickRandom(arr, count, exclude) {
    const filtered = arr.filter(item => item !== exclude);
    return shuffle(filtered).slice(0, count);
  }

  function getPrompt(item) {
    if (mode === 'kanji-meaning' || mode === 'kanji-reading') {
      return item.kanji;
    }
    return item.japanese;
  }

  function getCorrectAnswer(item) {
    if (mode === 'kanji-meaning') {
      return item.meanings.join('; ');
    }
    if (mode === 'kanji-reading') {
      const parts = [];
      if (item.onyomi) parts.push(item.onyomi);
      if (item.kunyomi) parts.push(item.kunyomi);
      return parts.join(' / ') || '—';
    }
    return item.english;
  }

  function getDistractorText(item) {
    return getCorrectAnswer(item);
  }

  function buildQuestion(correctItem) {
    const distractors = pickRandom(fullPool, 3, correctItem);
    const options = shuffle([
      { text: getCorrectAnswer(correctItem), correct: true },
      ...distractors.map(d => ({ text: getDistractorText(d), correct: false }))
    ]);
    return {
      item: correctItem,
      prompt: getPrompt(correctItem),
      correctAnswer: getCorrectAnswer(correctItem),
      options
    };
  }

  function init(quizMode, length, customPool) {
    mode = quizMode;
    score = 0;
    currentIndex = 0;
    missed = [];

    if (mode === 'kanji-meaning' || mode === 'kanji-reading') {
      fullPool = KANJI_N2;
    } else {
      fullPool = GRAMMAR_N2;
    }

    pool = customPool || fullPool;

    const shuffled = shuffle(pool);
    const count = length === 'all' ? shuffled.length : Math.min(length, shuffled.length);
    questions = shuffled.slice(0, count).map(item => buildQuestion(item));
  }

  function current() {
    return questions[currentIndex] || null;
  }

  function answer(optionIndex) {
    const q = questions[currentIndex];
    if (!q) return null;
    const chosen = q.options[optionIndex];
    const isCorrect = chosen.correct;
    if (isCorrect) {
      score++;
    } else {
      missed.push(q);
    }
    return { isCorrect, correctIndex: q.options.findIndex(o => o.correct), item: q.item };
  }

  function next() {
    currentIndex++;
    return currentIndex < questions.length;
  }

  function getScore() { return score; }
  function getTotal() { return questions.length; }
  function getCurrentNumber() { return currentIndex + 1; }
  function getMissed() { return missed; }
  function getMode() { return mode; }
  function isFinished() { return currentIndex >= questions.length; }

  return { init, current, answer, next, getScore, getTotal, getCurrentNumber, getMissed, getMode, isFinished };
})();

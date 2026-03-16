/**
 * App shell — screen navigation, event listeners, rendering.
 */
(() => {
  const screens = {
    home: document.getElementById('screen-home'),
    quiz: document.getElementById('screen-quiz'),
    results: document.getElementById('screen-results')
  };

  const prompt = document.getElementById('quiz-prompt');
  const answerGrid = document.getElementById('answer-grid');
  const answerBtns = answerGrid.querySelectorAll('.answer-btn');
  const scoreCorrect = document.getElementById('score-correct');
  const scoreTotal = document.getElementById('score-total');
  const hint = document.getElementById('quiz-hint');
  const btnNext = document.getElementById('btn-next');
  const btnQuit = document.getElementById('btn-quit');
  const btnRetry = document.getElementById('btn-retry');
  const btnMenu = document.getElementById('btn-menu');
  const explanation = document.getElementById('explanation');
  const resultsScore = document.getElementById('results-score');
  const resultsMissed = document.getElementById('results-missed');

  let selectedLength = 10;
  let lastMode = '';
  let answered = false;

  // Screen navigation
  function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
  }

  // Quiz length selector
  document.querySelectorAll('.length-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.length-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const val = btn.dataset.length;
      selectedLength = val === 'all' ? 'all' : parseInt(val);
    });
  });

  // Start quiz buttons
  document.querySelectorAll('[data-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
      lastMode = btn.dataset.mode;
      startQuiz(lastMode, selectedLength);
    });
  });

  function startQuiz(mode, length) {
    Quiz.init(mode, length);
    showScreen('quiz');
    renderQuestion();
  }

  function renderQuestion() {
    const q = Quiz.current();
    if (!q) {
      showResults();
      return;
    }

    answered = false;
    btnNext.classList.add('hidden');
    explanation.classList.add('hidden');
    hint.textContent = `${Quiz.getCurrentNumber()} / ${Quiz.getTotal()}`;

    // Set prompt style
    const isKanji = Quiz.getMode().startsWith('kanji');
    prompt.className = 'quiz-prompt ' + (isKanji ? 'kanji-prompt' : 'grammar-prompt');
    prompt.textContent = q.prompt;

    // Score
    scoreCorrect.textContent = Quiz.getScore();
    scoreTotal.textContent = Quiz.getCurrentNumber() - 1;

    // Options
    answerBtns.forEach((btn, i) => {
      btn.textContent = q.options[i].text;
      btn.className = 'answer-btn';
      // Add keyboard hint
      const keyHint = document.createElement('span');
      keyHint.className = 'key-hint';
      keyHint.textContent = i + 1;
      btn.prepend(keyHint);
      btn.prepend(document.createTextNode(' '));
      // Reorder: key hint first
      btn.innerHTML = `<span class="key-hint">${i + 1}</span> ${q.options[i].text}`;
    });
  }

  function handleAnswer(index) {
    if (answered) return;
    answered = true;

    const result = Quiz.answer(index);
    answerBtns.forEach(b => b.classList.add('answered'));
    answerBtns[index].classList.add(result.isCorrect ? 'correct' : 'incorrect');
    if (!result.isCorrect) {
      answerBtns[result.correctIndex].classList.add('revealed');
    }

    scoreCorrect.textContent = Quiz.getScore();
    scoreTotal.textContent = Quiz.getCurrentNumber();

    showExplanation(Quiz.current().item);
    btnNext.classList.remove('hidden');
    btnNext.textContent = Quiz.getCurrentNumber() >= Quiz.getTotal() ? 'See Results →' : 'Next →';
  }

  function showExplanation(item) {
    const mode = Quiz.getMode();
    let html = '<h3>Explanation</h3>';

    if (mode.startsWith('kanji')) {
      html += `<div class="explain-row"><span class="explain-label">Kanji</span><span class="explain-value" style="font-size:1.5rem;font-weight:700">${item.kanji}</span></div>`;
      html += `<div class="explain-row"><span class="explain-label">Meanings</span><span class="explain-value">${item.meanings.join('; ')}</span></div>`;
      if (item.onyomi) html += `<div class="explain-row"><span class="explain-label">On'yomi</span><span class="explain-value">${item.onyomi}</span></div>`;
      if (item.kunyomi) html += `<div class="explain-row"><span class="explain-label">Kun'yomi</span><span class="explain-value">${item.kunyomi}</span></div>`;

      const examples = KANJI_EXAMPLES[item.kanji];
      if (examples && examples.length > 0) {
        html += '<div class="explain-examples"><h4>Example Words</h4>';
        examples.forEach(ex => {
          html += `<div class="example-word">
            <span class="ex-word">${ex.word}</span>
            <span class="ex-reading">${ex.reading}</span>
            <span class="ex-meaning">${ex.meaning}</span>
          </div>`;
        });
        html += '</div>';
      }
    } else {
      html += `<div class="explain-row"><span class="explain-label">Grammar</span><span class="explain-value" style="font-size:1.2rem;font-weight:700">${item.japanese}</span></div>`;
      html += `<div class="explain-row"><span class="explain-label">Romaji</span><span class="explain-value">${item.romaji}</span></div>`;
      html += `<div class="explain-row"><span class="explain-label">Meaning</span><span class="explain-value">${item.english}</span></div>`;

      const gExamples = GRAMMAR_EXAMPLES[item.japanese] || GRAMMAR_EXAMPLES_2[item.japanese];
      if (gExamples && gExamples.length > 0) {
        html += '<div class="explain-examples"><h4>Example Sentences</h4>';
        gExamples.forEach(ex => {
          html += `<div class="example-sentence">
            <div class="ex-jp">${ex.japanese}</div>
            <div class="ex-en">${ex.english}</div>
          </div>`;
        });
        html += '</div>';
      }
    }

    explanation.innerHTML = html;
    explanation.classList.remove('hidden');
  }

  // Answer button clicks
  answerBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => handleAnswer(i));
  });

  // Next button
  btnNext.addEventListener('click', () => {
    if (!Quiz.next()) {
      showResults();
    } else {
      renderQuestion();
    }
  });

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (!screens.quiz.classList.contains('active')) return;

    if (e.key >= '1' && e.key <= '4') {
      handleAnswer(parseInt(e.key) - 1);
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (answered) {
        e.preventDefault();
        btnNext.click();
      }
    }
  });

  // Quit
  btnQuit.addEventListener('click', () => showScreen('home'));

  // Results
  function showResults() {
    showScreen('results');
    const score = Quiz.getScore();
    const total = Quiz.getTotal();
    const pct = total > 0 ? Math.round((score / total) * 100) : 0;

    resultsScore.innerHTML = `${score} / ${total}<span class="percent">${pct}%</span>`;

    const missed = Quiz.getMissed();
    if (missed.length === 0) {
      resultsMissed.innerHTML = '<p style="color: var(--correct); font-size: 1.2rem;">Perfect score!</p>';
    } else {
      let html = `<h3>Missed (${missed.length})</h3>`;
      missed.forEach(q => {
        html += `<div class="missed-item">
          <span class="prompt">${q.prompt}</span>
          <span class="answer">${q.correctAnswer}</span>
        </div>`;
      });
      resultsMissed.innerHTML = html;
    }
  }

  // Retry & Menu
  btnRetry.addEventListener('click', () => startQuiz(lastMode, selectedLength));
  btnMenu.addEventListener('click', () => showScreen('home'));
})();

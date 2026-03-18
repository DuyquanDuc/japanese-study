/**
 * App shell — screen navigation, event listeners, rendering.
 * Gated on Firebase Auth; all Progress calls are async.
 */
(() => {
  const screens = {
    login: document.getElementById('screen-login'),
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
  const loadingOverlay = document.getElementById('loading-overlay');
  const toast = document.getElementById('toast');

  let selectedLength = 10;
  let lastMode = '';
  let answered = false;
  let isReviewMode = false;
  let isSRSMode = false;
  let sessionCorrect = 0;
  let sessionIncorrect = 0;

  // --- Utilities ---
  function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
  }

  function showLoading() { loadingOverlay.classList.remove('hidden'); }
  function hideLoading() { loadingOverlay.classList.add('hidden'); }

  function showToast(msg, duration) {
    toast.textContent = msg;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), duration || 3000);
  }

  // --- Auth ---
  const btnSignIn = document.getElementById('btn-google-signin');
  const btnSignOut = document.getElementById('btn-signout');
  const loginSpinner = document.getElementById('login-spinner');
  const loginError = document.getElementById('login-error');

  btnSignIn.addEventListener('click', async () => {
    loginSpinner.classList.remove('hidden');
    loginError.classList.add('hidden');
    try {
      await Auth.signIn();
    } catch (err) {
      loginError.textContent = 'Sign-in failed. Please try again.';
      loginError.classList.remove('hidden');
      loginSpinner.classList.add('hidden');
    }
  });

  btnSignOut.addEventListener('click', async () => {
    Progress.clearCache();
    await Auth.signOut();
    showScreen('login');
  });

  Auth.onReady(async (user) => {
    if (user) {
      showLoading();
      try {
        await Progress.loadAll();
        populateUserBar(user);
        await renderStats();
        await renderProgress();
        showScreen('home');
      } catch (err) {
        showToast('Failed to load data. Please refresh.');
      } finally {
        hideLoading();
      }
    } else {
      showScreen('login');
    }
  });

  function populateUserBar(user) {
    const avatar = document.getElementById('user-avatar');
    const name = document.getElementById('user-name');
    avatar.src = user.photoURL || '';
    avatar.style.display = user.photoURL ? 'block' : 'none';
    name.textContent = user.displayName || user.email || '';
  }

  // --- Stats ---
  async function renderStats() {
    try {
      const p = await Progress.getProfile();
      document.getElementById('stat-streak').textContent = p.currentStreak || 0;
      document.getElementById('stat-sessions').textContent = p.totalSessions || 0;
      const total = (p.totalCorrect || 0) + (p.totalIncorrect || 0);
      const acc = total > 0 ? Math.round((p.totalCorrect / total) * 100) : 0;
      document.getElementById('stat-accuracy').textContent = acc + '%';
    } catch {
      // stats not critical
    }
  }

  // --- Quiz length selector ---
  document.querySelectorAll('.length-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.length-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const val = btn.dataset.length;
      selectedLength = val === 'all' ? 'all' : parseInt(val);
    });
  });

  // --- Start quiz ---
  document.querySelectorAll('[data-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
      isReviewMode = false;
      isSRSMode = false;
      lastMode = btn.dataset.mode;
      startQuiz(lastMode, selectedLength);
    });
  });

  function startQuiz(mode, length, customPool) {
    sessionCorrect = 0;
    sessionIncorrect = 0;
    Quiz.init(mode, length, customPool);
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

    const isKanji = Quiz.getMode().startsWith('kanji');
    prompt.className = 'quiz-prompt ' + (isKanji ? 'kanji-prompt' : 'grammar-prompt');
    prompt.textContent = q.prompt;

    scoreCorrect.textContent = Quiz.getScore();
    scoreTotal.textContent = Quiz.getCurrentNumber() - 1;

    answerBtns.forEach((btn, i) => {
      btn.className = 'answer-btn';
      btn.innerHTML = `<span class="key-hint">${i + 1}</span> ${q.options[i].text}`;
    });
  }

  async function handleAnswer(index) {
    if (answered) return;
    answered = true;

    const result = Quiz.answer(index);
    const type = Progress.getType(Quiz.getMode());
    const key = type === 'kanji' ? result.item.kanji : result.item.japanese;

    if (result.isCorrect) sessionCorrect++;
    else sessionIncorrect++;

    try {
      await Progress.recordAnswer(type, key, result.isCorrect);
    } catch {
      showToast('Failed to save progress');
    }

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
  btnQuit.addEventListener('click', async () => {
    showScreen('home');
    await renderProgress();
    await renderStats();
  });

  // Results
  async function showResults() {
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

    // Update session stats
    try {
      await Progress.updateStats(sessionCorrect, sessionIncorrect);
    } catch {
      showToast('Failed to update stats');
    }
  }

  // Retry & Menu
  btnRetry.addEventListener('click', () => {
    if (isSRSMode) {
      startSRSReview(lastMode);
    } else if (isReviewMode) {
      startReviewQuiz(lastMode);
    } else {
      startQuiz(lastMode, selectedLength);
    }
  });
  btnMenu.addEventListener('click', async () => {
    showScreen('home');
    await renderProgress();
    await renderStats();
  });

  // Progress rendering
  async function renderProgress() {
    for (const type of ['kanji', 'grammar']) {
      try {
        const stats = await Progress.getStats(type);
        const bar = document.getElementById(`progress-bar-${type}`);
        const text = document.getElementById(`progress-text-${type}`);
        if (bar && text) {
          const pct = stats.total > 0 ? (stats.learned / stats.total) * 100 : 0;
          bar.style.width = pct + '%';
          text.textContent = `${stats.learned} / ${stats.total} learned`;
        }
      } catch {
        // non-critical
      }
    }
  }

  // Review mode (weak + unseen)
  async function startReviewQuiz(mode) {
    const type = Progress.getType(mode);
    try {
      const [weakKeys, unseenKeys] = await Promise.all([
        Progress.getWeakItems(type),
        Progress.getUnseenItems(type)
      ]);
      const reviewKeys = new Set([...weakKeys, ...unseenKeys]);

      const dataset = type === 'kanji' ? KANJI_N2 : GRAMMAR_N2;
      const keyProp = type === 'kanji' ? 'kanji' : 'japanese';
      const customPool = dataset.filter(item => reviewKeys.has(item[keyProp]));

      if (customPool.length === 0) {
        showToast('All items learned! Nothing to review.');
        return;
      }

      isReviewMode = true;
      isSRSMode = false;
      lastMode = mode;
      startQuiz(mode, selectedLength, customPool);
    } catch {
      showToast('Failed to load review items');
    }
  }

  // SRS review mode (due items)
  async function startSRSReview(mode) {
    const type = Progress.getType(mode);
    try {
      const dueKeys = await Progress.getDueItems(type);

      const dataset = type === 'kanji' ? KANJI_N2 : GRAMMAR_N2;
      const keyProp = type === 'kanji' ? 'kanji' : 'japanese';
      const customPool = dataset.filter(item => dueKeys.includes(item[keyProp]));

      if (customPool.length === 0) {
        showToast('No items due for review!');
        return;
      }

      isSRSMode = true;
      isReviewMode = false;
      lastMode = mode;
      startQuiz(mode, selectedLength, customPool);
    } catch {
      showToast('Failed to load SRS items');
    }
  }

  // Review button listeners
  document.querySelectorAll('[data-review]').forEach(btn => {
    btn.addEventListener('click', () => {
      startReviewQuiz(btn.dataset.review);
    });
  });

  // SRS button listeners
  document.querySelectorAll('[data-srs]').forEach(btn => {
    btn.addEventListener('click', () => {
      startSRSReview(btn.dataset.srs);
    });
  });

  // Reset button
  const btnReset = document.getElementById('btn-reset');
  if (btnReset) {
    btnReset.addEventListener('click', async () => {
      if (confirm('Reset all progress? This cannot be undone.')) {
        try {
          await Progress.reset();
          await renderProgress();
          await renderStats();
          showToast('Progress reset');
        } catch {
          showToast('Failed to reset progress');
        }
      }
    });
  }
})();

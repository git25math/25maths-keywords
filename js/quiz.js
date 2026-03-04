/* ══════════════════════════════════════════════════════════════
   quiz.js — Multiple choice quiz mode (4 options, bidirectional)
   ══════════════════════════════════════════════════════════════ */

var Q = { pairs: [], idx: 0, correct: 0, lvl: 0, locked: false, dir: 'en2zh' };

function startQuiz(li) {
  var lv = LEVELS[li];
  if (validate(lv, li)) return;

  currentLvl = li;
  Q.pairs = shuffle(getPairs(lv.vocabulary));
  Q.idx = 0;
  Q.correct = 0;
  Q.lvl = li;
  Q.locked = false;
  Q.dir = 'en2zh';

  showPanel('quiz');
  renderQuizCard();
}

function setQuizDir(dir) {
  Q.dir = dir;
  Q.locked = false;
  renderQuizCard();
}

function renderQuizCard() {
  if (Q.idx >= Q.pairs.length) { finishQuiz(); return; }

  var p = Q.pairs[Q.idx];
  var progress = Q.pairs.length > 0 ? Math.round(Q.idx / Q.pairs.length * 100) : 0;

  /* Direction-dependent question/answer/options */
  var questionText, correctAnswer, hintText;
  var distractors = [];

  if (Q.dir === 'en2zh') {
    questionText = p.word;
    correctAnswer = p.def;
    hintText = t('Choose the correct definition', '\u9009\u62e9\u6b63\u786e\u7684\u4e2d\u6587\u91ca\u4e49');
    LEVELS.forEach(function(lv) {
      getPairs(lv.vocabulary).forEach(function(pp) {
        if (pp.def !== p.def) distractors.push(pp.def);
      });
    });
  } else {
    questionText = p.def;
    correctAnswer = p.word;
    hintText = t('Choose the correct English word', '\u9009\u62e9\u6b63\u786e\u7684\u82f1\u6587\u5355\u8bcd');
    LEVELS.forEach(function(lv) {
      getPairs(lv.vocabulary).forEach(function(pp) {
        if (pp.word !== p.word) distractors.push(pp.word);
      });
    });
  }

  /* Deduplicate distractors */
  var seen = {};
  seen[correctAnswer] = true;
  var uniqueDistractors = [];
  for (var d = 0; d < distractors.length; d++) {
    if (!seen[distractors[d]]) {
      seen[distractors[d]] = true;
      uniqueDistractors.push(distractors[d]);
    }
  }
  uniqueDistractors = shuffle(uniqueDistractors).slice(0, 3);
  var options = shuffle([correctAnswer].concat(uniqueDistractors));

  var html = '';

  /* Top bar */
  html += '<div class="study-topbar">';
  html += '<button class="back-btn" onclick="openDeck(' + Q.lvl + ')">\u2190</button>';
  html += '<div class="study-progress"><div class="study-progress-fill" style="width:' + progress + '%"></div></div>';
  html += '<div class="study-count">' + (Q.idx + 1) + ' / ' + Q.pairs.length + '</div>';
  html += '</div>';

  /* Direction bar */
  html += '<div class="quiz-dir-bar">';
  html += '<button class="quiz-dir-btn' + (Q.dir === 'en2zh' ? ' active' : '') + '" onclick="setQuizDir(\'en2zh\')">EN \u2192 ' + t('CN', '\u4e2d') + '</button>';
  html += '<button class="quiz-dir-btn' + (Q.dir === 'zh2en' ? ' active' : '') + '" onclick="setQuizDir(\'zh2en\')">' + t('CN', '\u4e2d') + ' \u2192 EN</button>';
  html += '</div>';

  /* Question */
  html += '<div class="quiz-question">';
  html += '<div class="quiz-word">' + questionText + '</div>';
  html += '<div class="quiz-hint">' + hintText + '</div>';
  html += '</div>';

  /* Options */
  html += '<div class="quiz-options" id="quiz-options">';
  options.forEach(function(opt, i) {
    html += '<button class="quiz-opt" data-idx="' + i + '" data-correct="' + (opt === correctAnswer ? '1' : '0') + '" onclick="pickQuizOpt(this)">' + opt + '</button>';
  });
  html += '</div>';

  E('panel-quiz').innerHTML = html;
  Q.locked = false;
}

function pickQuizOpt(btn) {
  if (Q.locked) return;
  Q.locked = true;

  var isCorrect = btn.dataset.correct === '1';
  var p = Q.pairs[Q.idx];
  var key = wordKey(Q.lvl, p.lid);

  if (isCorrect) {
    btn.classList.add('correct');
    Q.correct++;
    setWordStatus(key, Q.correct >= 2 ? 'mastered' : 'learning', isCorrect ? 7 : 0.5, true);
    playCorrect();
  } else {
    btn.classList.add('wrong');
    setWordStatus(key, 'learning', 0.15, false);
    playWrong();
    /* Highlight correct answer */
    document.querySelectorAll('#quiz-options .quiz-opt').forEach(function(o) {
      if (o.dataset.correct === '1') o.classList.add('correct');
    });
  }

  setTimeout(function() {
    Q.idx++;
    renderQuizCard();
  }, 900);
}

function finishQuiz() {
  var total = Q.pairs.length;
  var html = '<div class="text-center">';
  html += resultScreenHTML(Q.correct, total,
    'startQuiz(' + currentLvl + ')',
    'openDeck(' + currentLvl + ')');
  html += '</div>';
  E('panel-quiz').innerHTML = html;
  updateSidebar();
}

/* ══════════════════════════════════════════════════════════════
   DAILY CHALLENGE — 10-word timed quiz (60s)
   ══════════════════════════════════════════════════════════════ */

var DC = { words: [], idx: 0, score: 0, locked: false, timer: null, remaining: 60, startTime: 0 };

function getDailySeed() {
  var d = new Date().toLocaleDateString('en-CA');
  var h = 0;
  for (var i = 0; i < d.length; i++) { h = ((h << 5) - h + d.charCodeAt(i)) | 0; }
  return Math.abs(h);
}

function seededShuffle(arr, seed) {
  var a = arr.slice();
  var s = seed;
  for (var i = a.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0x7fffffff; /* LCG */
    var j = s % (i + 1);
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function getDailyData() {
  var s = loadS();
  if (!s.daily) return null;
  var today = new Date().toLocaleDateString('en-CA');
  return s.daily.date === today ? s.daily : null;
}

function saveDailyResult(score, time) {
  var s = loadS();
  var today = new Date().toLocaleDateString('en-CA');
  var prev = (s.daily && s.daily.date === today) ? s.daily : null;
  s.daily = {
    date: today,
    score: prev ? Math.max(prev.score, score) : score,
    time: prev ? (score > prev.score ? time : (score === prev.score ? Math.min(prev.time, time) : prev.time)) : time,
    plays: prev ? prev.plays + 1 : 1
  };
  writeS(s);
  syncToCloud();
}

function startDaily() {
  var all = getAllWords();
  if (all.length < 10) {
    showToast(t('Need at least 10 words', '至少需要 10 个词汇'));
    return;
  }

  var seed = getDailySeed();
  var picked = seededShuffle(all, seed).slice(0, 10);

  DC.words = picked;
  DC.idx = 0;
  DC.score = 0;
  DC.locked = false;
  DC.remaining = 60;
  DC.startTime = Date.now();

  showPanel('daily');
  renderDailyCard();
  startDailyTimer();
}

function startDailyTimer() {
  clearInterval(DC.timer);
  DC.timer = setInterval(function() {
    DC.remaining = Math.max(0, 60 - Math.floor((Date.now() - DC.startTime) / 1000));
    var bar = document.getElementById('dc-timebar');
    var timeEl = document.getElementById('dc-time');
    if (bar) bar.style.width = (DC.remaining / 60 * 100) + '%';
    if (timeEl) timeEl.textContent = DC.remaining + 's';
    if (DC.remaining <= 0) { clearInterval(DC.timer); finishDaily(); }
  }, 250);
}

function renderDailyCard() {
  if (DC.idx >= DC.words.length) { finishDaily(); return; }

  var w = DC.words[DC.idx];
  var seed = getDailySeed();
  /* Deterministic direction per question: seed XOR question index */
  var dirSeed = (seed * 31 + DC.idx * 7) & 0x7fffffff;
  var dir = (dirSeed % 2 === 0) ? 'en2zh' : 'zh2en';

  var questionText, correctAnswer, hintText;
  var distractors = [];

  if (dir === 'en2zh') {
    questionText = w.word;
    correctAnswer = w.def;
    hintText = t('Choose the correct definition', '选择正确的中文释义');
    LEVELS.forEach(function(lv) {
      getPairs(lv.vocabulary).forEach(function(pp) {
        if (pp.def !== w.def) distractors.push(pp.def);
      });
    });
  } else {
    questionText = w.def;
    correctAnswer = w.word;
    hintText = t('Choose the correct English word', '选择正确的英文单词');
    LEVELS.forEach(function(lv) {
      getPairs(lv.vocabulary).forEach(function(pp) {
        if (pp.word !== w.word) distractors.push(pp.word);
      });
    });
  }

  /* Deduplicate distractors */
  var seen = {};
  seen[correctAnswer] = true;
  var uniq = [];
  for (var d = 0; d < distractors.length; d++) {
    if (!seen[distractors[d]]) { seen[distractors[d]] = true; uniq.push(distractors[d]); }
  }
  uniq = shuffle(uniq).slice(0, 3);
  var options = shuffle([correctAnswer].concat(uniq));

  var html = '';

  /* HUD: timer + score + progress */
  html += '<div class="dc-hud">';
  html += '<button class="back-btn" onclick="endDailyEarly()">\u2190</button>';
  html += '<div class="dc-timebar-wrap"><div class="dc-timebar" id="dc-timebar" style="width:' + (DC.remaining / 60 * 100) + '%"></div></div>';
  html += '<span class="dc-time" id="dc-time">' + DC.remaining + 's</span>';
  html += '<span class="dc-score">' + DC.score + '/' + DC.words.length + '</span>';
  html += '</div>';

  /* Progress dots */
  html += '<div class="dc-progress">';
  for (var i = 0; i < DC.words.length; i++) {
    var cls = i < DC.idx ? 'done' : (i === DC.idx ? 'cur' : '');
    html += '<span class="dc-dot ' + cls + '"></span>';
  }
  html += '</div>';

  /* Question */
  html += '<div class="quiz-question">';
  html += '<div class="quiz-word">' + questionText + '</div>';
  html += '<div class="quiz-hint">' + hintText + '</div>';
  html += '</div>';

  /* Options */
  html += '<div class="quiz-options" id="dc-options">';
  options.forEach(function(opt, i) {
    html += '<button class="quiz-opt" data-correct="' + (opt === correctAnswer ? '1' : '0') + '" onclick="pickDailyOpt(this)">' + opt + '</button>';
  });
  html += '</div>';

  E('panel-daily').innerHTML = html;
  DC.locked = false;
}

function pickDailyOpt(btn) {
  if (DC.locked) return;
  DC.locked = true;

  var isCorrect = btn.dataset.correct === '1';
  var w = DC.words[DC.idx];

  if (isCorrect) {
    btn.classList.add('correct');
    DC.score++;
    setWordStatus(w.key, 'learning', 7, true);
    playCorrect();
  } else {
    btn.classList.add('wrong');
    setWordStatus(w.key, 'learning', 0.15, false);
    playWrong();
    document.querySelectorAll('#dc-options .quiz-opt').forEach(function(o) {
      if (o.dataset.correct === '1') o.classList.add('correct');
    });
  }

  setTimeout(function() {
    DC.idx++;
    renderDailyCard();
  }, 700);
}

function endDailyEarly() {
  clearInterval(DC.timer);
  finishDaily();
}

function finishDaily() {
  clearInterval(DC.timer);
  var elapsed = Math.min(60, Math.floor((Date.now() - DC.startTime) / 1000));
  saveDailyResult(DC.score, elapsed);

  var data = getDailyData();
  var pct = Math.round(DC.score / DC.words.length * 100);
  var emoji, title;
  if (pct >= 90) { emoji = '\ud83c\udfc6'; title = t('Excellent!', '太棒了！'); }
  else if (pct >= 70) { emoji = '\ud83c\udf89'; title = t('Well done!', '做得好！'); }
  else if (pct >= 50) { emoji = '\ud83d\udcaa'; title = t('Keep going!', '继续加油！'); }
  else { emoji = '\ud83d\udcda'; title = t('Try again!', '再练练！'); }

  var html = '<div class="text-center" style="padding-top:48px">';
  html += '<div class="result-emoji">' + emoji + '</div>';
  html += '<div class="result-title">' + title + '</div>';
  html += '<div class="result-score">' + DC.score + ' / ' + DC.words.length + '</div>';
  html += '<div class="result-detail">' + t('Time: ' + elapsed + 's', '用时：' + elapsed + ' 秒') + '</div>';
  if (data && data.plays > 1) {
    html += '<div class="result-detail" style="margin-top:8px;color:var(--c-streak)">';
    html += t('Best: ' + data.score + '/' + DC.words.length + ' in ' + data.time + 's', '最佳：' + data.score + '/' + DC.words.length + '，' + data.time + ' 秒');
    html += '</div>';
  }
  html += '<div class="result-actions">';
  html += '<button class="btn btn-primary" onclick="startDaily()">' + t('Try Again', '再来一次') + '</button>';
  html += '<button class="btn btn-ghost" onclick="navTo(\'home\')">' + t('Home', '返回首页') + '</button>';
  html += '</div>';
  html += '</div>';

  E('panel-daily').innerHTML = html;
}

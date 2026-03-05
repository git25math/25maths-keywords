/* ══════════════════════════════════════════════════════════════
   syllabus.js — CIE syllabus-driven navigation + section detail
   Loaded after mastery.js, before practice.js
   ══════════════════════════════════════════════════════════════ */

/* ═══ GLOBALS ═══ */
var CIE_SYLLABUS = null;        /* parsed syllabus-cie.json */
var CIE_VOCAB = null;           /* parsed vocabulary-cie.json */
var _cieSectionLevelMap = {};   /* sectionId → LEVELS index cache */
var _cieDataReady = false;
var _cieDataLoading = false;

/* Chapter collapse state (default all collapsed) */
var cieChapterCollapsed = {};

/* ═══ DATA LOADING ═══ */
var _cieSyllabusRaw = null; /* raw fetch result, waiting for LEVELS */

function loadCIESyllabus() {
  if (_cieDataReady) return Promise.resolve();
  if (_cieDataLoading) return _cieDataLoading;
  _cieDataLoading = Promise.all([
    fetch('data/syllabus-cie.json').then(function(r) { return r.json(); }),
    fetch('data/vocabulary-cie.json').then(function(r) { return r.json(); })
  ]).then(function(results) {
    CIE_SYLLABUS = results[0];
    CIE_VOCAB = results[1];
    /* Wait for levels to be ready before creating virtual levels */
    if (typeof _levelsReady !== 'undefined' && _levelsReady) {
      _cieDataReady = true;
      _initCIELevels();
    } else if (typeof onLevelsReady === 'function') {
      onLevelsReady(function() {
        _cieDataReady = true;
        _initCIELevels();
        /* Re-render home if already visible */
        if (appView === 'home' && typeof renderHome === 'function') renderHome();
      });
    } else {
      _cieDataReady = true;
      _initCIELevels();
    }
  }).catch(function(e) {
    console.error('Failed to load CIE syllabus data:', e);
  });
  return _cieDataLoading;
}

/* ═══ VIRTUAL LEVELS CREATION ═══ */
/* Convert vocabulary-cie.json format to LEVELS vocabulary format */
function _vocabToLevelsFormat(words) {
  var result = [];
  for (var i = 0; i < words.length; i++) {
    var w = words[i];
    result.push({ id: w.id, type: 'word', content: w.word });
    result.push({ id: w.id, type: 'def', content: w.def });
  }
  return result;
}

/* Mark old CIE levels as hidden and create new virtual levels (idempotent) */
function _initCIELevels() {
  /* Clear previous virtual levels from LEVELS */
  var cleaned = [];
  for (var i = 0; i < LEVELS.length; i++) {
    if (!LEVELS[i]._isSection) {
      cleaned.push(LEVELS[i]);
    }
  }
  LEVELS.length = 0;
  for (var ci = 0; ci < cleaned.length; ci++) LEVELS.push(cleaned[ci]);
  _cieSectionLevelMap = {};

  /* Hide old CIE levels from rendering */
  for (var j = 0; j < LEVELS.length; j++) {
    if (LEVELS[j].board === 'cie' && !LEVELS[j]._isSection) {
      LEVELS[j]._cieOld = true;
    }
  }

  /* Create virtual levels for each syllabus section with vocabulary */
  if (!CIE_SYLLABUS || !CIE_VOCAB) return;
  CIE_SYLLABUS.chapters.forEach(function(ch) {
    ch.sections.forEach(function(sec) {
      var words = CIE_VOCAB[sec.id];
      if (!words || words.length === 0) return;
      var timer = Math.max(40, words.length * 7);
      var newLevel = {
        board: 'cie',
        slug: sec.slug,
        category: 'ch' + ch.num,
        title: sec.id + ' ' + sec.title,
        titleZh: sec.title_zh,
        timer: timer,
        comboBonus: 2,
        vocabulary: _vocabToLevelsFormat(words),
        _section: sec.id,
        _isSection: true
      };
      var idx = LEVELS.length;
      LEVELS.push(newLevel);
      _cieSectionLevelMap[sec.id] = idx;
    });
  });
  /* Invalidate guest cache since LEVELS changed */
  if (typeof invalidateGuestCache === 'function') invalidateGuestCache();
}

/* Get LEVELS index for a given section, creating if needed */
function getSectionLevelIdx(sectionId) {
  return _cieSectionLevelMap[sectionId] || -1;
}

/* Get section info from syllabus by ID */
function getSectionInfo(sectionId) {
  if (!CIE_SYLLABUS) return null;
  for (var i = 0; i < CIE_SYLLABUS.chapters.length; i++) {
    var ch = CIE_SYLLABUS.chapters[i];
    for (var j = 0; j < ch.sections.length; j++) {
      if (ch.sections[j].id === sectionId) {
        return { chapter: ch, section: ch.sections[j], sectionIndex: j };
      }
    }
  }
  return null;
}

/* ═══ CIE HOME RENDERING ═══ */
/* Returns HTML for CIE board in the home dashboard */
function renderCIEHome() {
  if (!_cieDataReady || !CIE_SYLLABUS) return '';

  var html = '';

  CIE_SYLLABUS.chapters.forEach(function(ch) {
    var catKey = 'cie-ch' + ch.num;
    if (!(catKey in cieChapterCollapsed)) cieChapterCollapsed[catKey] = true;
    var collapsed = appSearch ? false : cieChapterCollapsed[catKey];

    /* Compute chapter-level stats */
    var chTotalWords = 0, chMastered = 0, chTotalStars = 0, chMaxStars = 0;
    var visibleSections = [];

    ch.sections.forEach(function(sec) {
      var words = CIE_VOCAB[sec.id];
      var wordCount = words ? words.length : 0;

      /* Apply search filter */
      if (appSearch) {
        var match = false;
        if (sec.title.toLowerCase().indexOf(appSearch) >= 0) match = true;
        if (sec.title_zh && sec.title_zh.indexOf(appSearch) >= 0) match = true;
        if (sec.id.indexOf(appSearch) >= 0) match = true;
        if (!match && words) {
          for (var wi = 0; wi < words.length; wi++) {
            if (words[wi].word.toLowerCase().indexOf(appSearch) >= 0 ||
                words[wi].def.indexOf(appSearch) >= 0) { match = true; break; }
          }
        }
        if (!match) return;
      }

      visibleSections.push(sec);

      /* Stats from virtual level */
      var li = getSectionLevelIdx(sec.id);
      if (li >= 0) {
        var stats = getDeckStats(li);
        chTotalWords += stats.total;
        chMastered += stats.mastered;
        chTotalStars += Math.round(stats.learningPct * stats.total * 4 / 100);
        chMaxStars += stats.total * 4;
      }
    });

    if (visibleSections.length === 0) return;

    var chPct = chMaxStars > 0 ? Math.round(chTotalStars / chMaxStars * 100) : 0;

    html += '<div class="category-section' + (collapsed ? ' collapsed' : '') + '" id="cat-' + catKey + '">';
    html += '<div class="category-header" onclick="toggleCIEChapter(\'' + catKey + '\')">';
    html += '<span class="category-emoji">' + _chapterEmoji(ch.num) + '</span>';
    html += '<span class="category-name">' + ch.num + '. ' + ch.title;
    if (appLang !== 'en') html += ' ' + ch.title_zh;
    html += '</span>';
    html += '<span class="category-count">' + ch.sections.length + ' ' + t('sections', '节') + '</span>';
    html += '<span class="category-chevron">\u25bc</span>';
    html += '</div>';

    html += '<div class="deck-list category-body">';

    /* Practice actions for the chapter */
    var firstSec = visibleSections[0];
    var firstLi = getSectionLevelIdx(firstSec.id);
    if (firstLi >= 0) {
      html += '<div class="pq-cat-actions">';
      html += '<button class="sort-btn" onclick="startPracticeByChapter(' + ch.num + ')">\ud83d\udcdd ' + t('Practice', '练习') + '</button>';
      html += '</div>';
    }

    visibleSections.forEach(function(sec) {
      html += _renderSectionRow(sec, ch);
    });

    html += '</div></div>';
  });

  return html;
}

/* Helper: chapter emoji */
function _chapterEmoji(num) {
  var emojis = ['', '\ud83d\udd22', '\ud83d\udcdd', '\ud83d\udccd', '\ud83d\udcd0', '\ud83d\udccf', '\ud83d\udcd0', '\u27a1\ufe0f', '\ud83c\udfb2', '\ud83d\udcc8'];
  return emojis[num] || '\ud83d\udcda';
}

/* Render a single section row in the home view */
function _renderSectionRow(sec, ch) {
  var li = getSectionLevelIdx(sec.id);
  var words = CIE_VOCAB[sec.id] || [];
  var stats = li >= 0 ? getDeckStats(li) : { pct: 0, started: 0, total: words.length, learningPct: 0, masteryPct: 0 };

  var tierBadge = '';
  if (sec.tier === 'extended') tierBadge = ' <span class="tier-badge tier-ext">E</span>';
  else if (sec.tier === 'core') tierBadge = ' <span class="tier-badge tier-core">C</span>';

  var h = '';
  h += '<div class="deck-row" onclick="openSection(\'' + sec.id + '\')">';
  h += '<span class="deck-row-tag sec-tag">' + sec.id + '</span>';
  h += '<span class="deck-row-name">' + escapeHtml(sec.title);
  if (appLang !== 'en') h += ' ' + escapeHtml(sec.title_zh);
  h += tierBadge + '</span>';
  h += '<span class="deck-row-count">' + (words.length > 0 ? stats.started + '/' + stats.total : '-') + '</span>';
  if (words.length > 0) {
    h += '<span class="deck-row-progress"><span class="deck-row-progress-fill" style="width:' + stats.pct + '%"></span></span>';
    h += '<span class="deck-row-pct">' + stats.pct + '%</span>';
  }
  h += '</div>';
  return h;
}

/* Toggle chapter collapse */
function toggleCIEChapter(catKey) {
  cieChapterCollapsed[catKey] = !cieChapterCollapsed[catKey];
  var el = document.getElementById('cat-' + catKey);
  if (el) el.classList.toggle('collapsed', cieChapterCollapsed[catKey]);
}

/* ═══ SECTION DETAIL PAGE ═══ */
function openSection(sectionId) {
  var info = getSectionInfo(sectionId);
  if (!info) return;
  renderSectionDetail(info.chapter, info.section, info.sectionIndex);
  showPanel('section');
}

function renderSectionDetail(ch, sec, secIdx) {
  var li = getSectionLevelIdx(sec.id);
  var words = CIE_VOCAB[sec.id] || [];
  var stats = li >= 0 ? getDeckStats(li) : { pct: 0, started: 0, total: words.length, learningPct: 0, masteryPct: 0, mastered: 0 };

  /* Count practice questions for this section */
  var qCount = 0;
  if (typeof _pqData !== 'undefined' && _pqData && _pqData.cie) {
    _pqData.cie.forEach(function(q) { if (q.s === sec.id) qCount++; });
  }

  var html = '';

  /* Header */
  html += '<div class="deck-header">';
  html += '<button class="back-btn" onclick="navTo(\'home\')">\u2190</button>';
  html += '<div class="deck-title">' + ch.num + '. ' + ch.title;
  if (appLang !== 'en') html += ' ' + ch.title_zh;
  html += '</div>';
  html += '<div class="sec-position">' + sec.id + ' / ' + ch.sections.length + '</div>';
  html += '</div>';

  /* Section title + overall progress */
  html += '<div class="sec-hero">';
  html += '<div class="sec-id">' + sec.id + '</div>';
  html += '<div class="sec-title">' + escapeHtml(sec.title) + '</div>';
  if (appLang !== 'en') {
    html += '<div class="sec-title-zh">' + escapeHtml(sec.title_zh) + '</div>';
  }

  /* Tier badge */
  if (sec.tier === 'extended') {
    html += '<span class="tier-badge tier-ext" style="margin-top:8px">Extended Only</span>';
  } else if (sec.tier === 'core') {
    html += '<span class="tier-badge tier-core" style="margin-top:8px">Core Only</span>';
  }

  /* Progress bar */
  html += '<div class="sec-progress-bar">';
  html += '<div class="sec-progress-fill" style="width:' + stats.pct + '%"></div>';
  html += '</div>';
  html += '<div class="sec-progress-label">' + stats.pct + '% · ' + stats.mastered + '/' + stats.total + ' ' + t('mastered', '已掌握') + '</div>';
  html += '</div>';

  /* Module cards */
  html += '<div class="sec-modules">';

  /* Vocabulary module */
  if (words.length > 0 && li >= 0) {
    html += '<div class="sec-module" onclick="openDeck(' + li + ')">';
    html += '<div class="sec-module-icon">\ud83d\udcdd</div>';
    html += '<div class="sec-module-info">';
    html += '<div class="sec-module-title">' + t('Vocabulary', '核心词汇') + '</div>';
    html += '<div class="sec-module-sub">' + words.length + ' ' + t('words', '词') + ' · ';
    html += _renderMiniStars(stats.pct);
    html += '</div></div>';
    html += '<div class="sec-module-arrow">\u2192</div>';
    html += '</div>';
  } else if (words.length === 0) {
    html += '<div class="sec-module sec-module-empty">';
    html += '<div class="sec-module-icon">\ud83d\udcdd</div>';
    html += '<div class="sec-module-info">';
    html += '<div class="sec-module-title">' + t('Vocabulary', '核心词汇') + '</div>';
    html += '<div class="sec-module-sub">' + t('Coming soon', '即将推出') + '</div>';
    html += '</div></div>';
  }

  /* Practice module */
  if (qCount > 0) {
    html += '<div class="sec-module" onclick="startPracticeBySection(\'' + sec.id + '\')">';
    html += '<div class="sec-module-icon">\u270f\ufe0f</div>';
    html += '<div class="sec-module-info">';
    html += '<div class="sec-module-title">' + t('Practice', '练习') + '</div>';
    html += '<div class="sec-module-sub">' + qCount + ' ' + t('questions', '题') + '</div>';
    html += '</div>';
    html += '<div class="sec-module-arrow">\u2192</div>';
    html += '</div>';
  }

  /* Knowledge card placeholder (Phase C) */
  html += '<div class="sec-module sec-module-coming">';
  html += '<div class="sec-module-icon">\ud83d\udcd8</div>';
  html += '<div class="sec-module-info">';
  html += '<div class="sec-module-title">' + t('Knowledge Card', '知识卡片') + '</div>';
  html += '<div class="sec-module-sub">' + t('Coming soon', '即将推出') + '</div>';
  html += '</div></div>';

  /* Examples placeholder (Phase B) */
  html += '<div class="sec-module sec-module-coming">';
  html += '<div class="sec-module-icon">\ud83d\udcd6</div>';
  html += '<div class="sec-module-info">';
  html += '<div class="sec-module-title">' + t('Worked Examples', '经典例题') + '</div>';
  html += '<div class="sec-module-sub">' + t('Coming soon', '即将推出') + '</div>';
  html += '</div></div>';

  html += '</div>'; /* close sec-modules */

  /* Syllabus requirements */
  html += '<div class="sec-syllabus">';
  html += '<div class="sec-syllabus-title">' + t('Syllabus Requirements', '考纲要求') + '</div>';
  if (sec.core_content) {
    html += '<div class="sec-syllabus-block">';
    html += '<span class="sec-syllabus-label">Core:</span> ' + escapeHtml(sec.core_content);
    html += '</div>';
  }
  if (sec.extended_content) {
    html += '<div class="sec-syllabus-block">';
    html += '<span class="sec-syllabus-label">Extended:</span> ' + escapeHtml(sec.extended_content);
    html += '</div>';
  }
  html += '</div>';

  /* Navigation: prev/next section */
  html += '<div class="sec-nav">';
  if (secIdx > 0) {
    var prevSec = ch.sections[secIdx - 1];
    html += '<button class="btn btn-ghost" onclick="openSection(\'' + prevSec.id + '\')">\u2190 ' + prevSec.id + ' ' + escapeHtml(prevSec.title) + '</button>';
  } else {
    html += '<span></span>';
  }
  if (secIdx < ch.sections.length - 1) {
    var nextSec = ch.sections[secIdx + 1];
    html += '<button class="btn btn-ghost" onclick="openSection(\'' + nextSec.id + '\')">' + nextSec.id + ' ' + escapeHtml(nextSec.title) + ' \u2192</button>';
  }
  html += '</div>';

  E('panel-section').innerHTML = html;
}

/* Mini star display helper */
function _renderMiniStars(pct) {
  var filled = Math.round(pct / 25);
  var s = '';
  for (var i = 0; i < 4; i++) {
    s += '<span class="star-dot' + (i < filled ? ' filled' : '') + '" style="width:6px;height:6px"></span>';
  }
  return s;
}

/* ═══ PRACTICE BY SECTION/CHAPTER ═══ */
function startPracticeBySection(sectionId) {
  /* Get first level in this section for reference */
  var li = getSectionLevelIdx(sectionId);
  if (li < 0) li = 0;
  currentLvl = li;
  /* Store section filter for practice.js */
  window._practiceSection = sectionId;
  window._practiceChapter = null;
  if (typeof startPractice === 'function') startPractice(li);
}

function startPracticeByChapter(chNum) {
  /* Find first section in this chapter with a level */
  if (!CIE_SYLLABUS) return;
  var ch = CIE_SYLLABUS.chapters[chNum - 1];
  if (!ch) return;
  var li = -1;
  for (var i = 0; i < ch.sections.length; i++) {
    li = getSectionLevelIdx(ch.sections[i].id);
    if (li >= 0) break;
  }
  if (li < 0) li = 0;
  currentLvl = li;
  window._practiceSection = null;
  window._practiceChapter = chNum;
  if (typeof startPractice === 'function') startPractice(li);
}

/* ═══ INIT ═══ */
/* Auto-load CIE data on script load */
loadCIESyllabus();

/* ============================================================
   INTERFEJS: router i ekrany
   ============================================================ */
(function () {
  'use strict';
  var U = UA.U, G = UA.G, S = G.S, SRS = UA.SRS, SP = UA.SP;
  var esc = U.esc, st = U.st, strip = U.strip, norm = U.norm, shuffle = U.shuffle;
  var main = document.getElementById('main');
  function $(s, r) { return (r || main).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || main).querySelectorAll(s)); }

  /* ---------- Ikony (obrys 24×24, w stylu Lucide) ---------- */
  var IC = {
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    cards: '<rect x="2" y="6" width="14" height="16" rx="2"/><path d="M8 2h12a2 2 0 0 1 2 2v14"/>',
    ear: '<path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"/><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"/>',
    chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>',
    abc: '<path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/>',
    alert: '<path d="m21.7 18-8-14a2 2 0 0 0-3.4 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    pen: '<path d="M12 20h9"/><path d="M16.4 3.6a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    gear: '<path d="M12.2 2h-.4a2 2 0 0 0-2 2v.2a2 2 0 0 1-1 1.7l-.4.3a2 2 0 0 1-2 0l-.2-.1a2 2 0 0 0-2.7.7l-.2.4a2 2 0 0 0 .7 2.7l.2.1a2 2 0 0 1 1 1.7v.5a2 2 0 0 1-1 1.7l-.2.1a2 2 0 0 0-.7 2.7l.2.4a2 2 0 0 0 2.7.7l.2-.1a2 2 0 0 1 2 0l.4.3a2 2 0 0 1 1 1.7v.2a2 2 0 0 0 2 2h.4a2 2 0 0 0 2-2v-.2a2 2 0 0 1 1-1.7l.4-.3a2 2 0 0 1 2 0l.2.1a2 2 0 0 0 2.7-.7l.2-.4a2 2 0 0 0-.7-2.7l-.2-.1a2 2 0 0 1-1-1.7v-.5a2 2 0 0 1 1-1.7l.2-.1a2 2 0 0 0 .7-2.7l-.2-.4a2 2 0 0 0-2.7-.7l-.2.1a2 2 0 0 1-2 0l-.4-.3a2 2 0 0 1-1-1.7V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    vol: '<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/>',
    slow: '<path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/>',
    mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><path d="M12 18v4"/>',
    stop: '<rect x="6" y="6" width="12" height="12" rx="2"/>',
    play: '<path d="m6 3 14 9-14 9z"/>',
    swap: '<path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3.4.3 1.5 1.5 2.9 2.5 2.9"/>',
    star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.7V17c0 .6-.5 1-1 1.2-1.2.5-2 2-2 3.8"/><path d="M14 14.7V17c0 .6.5 1 1 1.2 1.2.5 2 2 2 3.8"/><path d="M18 2H6v7a6 6 0 0 0 12 0z"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    back: '<path d="m15 18-6-6 6-6"/>',
    next: '<path d="m9 18 6-6-6-6"/>',
    kb: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M6 12h.01M10 12h.01M14 12h.01M18 12h.01M7 16h10"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    user: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
    route: '<circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/>',
    headphones: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
    tag: '<path d="M12 2H2v10l9.29 9.29a1 1 0 0 0 1.42 0l8.58-8.58a1 1 0 0 0 0-1.42z"/><circle cx="7" cy="7" r="1.5"/>',
    phrase: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 12a2 2 0 0 0 2-2V8H8"/><path d="M14 12a2 2 0 0 0 2-2V8h-2"/>',
    talk: '<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>',
    utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>',
    train: '<rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
  };
  function ic(n, c) { return '<svg class="ic ' + (c || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (IC[n] || '') + '</svg>'; }
  UA.ic = ic;

  var POS = { 'ч': 'rzecz. r. męski', 'ж': 'rzecz. r. żeński', 'с': 'rzecz. r. nijaki', 'мн': 'rzecz. tylko l. mnoga', 'д': 'czasownik', 'п': 'przymiotnik', 'пр': 'przysłówek', 'ф': 'zwrot', 'з': 'słowo funkcyjne' };
  var SIM = { t: ['przezroczyste', 'sim-t'], p: ['podobne z różnicą', 'sim-p'], f: ['fałszywy przyjaciel', 'sim-f'], o: ['zupełnie obce', 'sim-o'] };
  function topicName(id) { for (var i = 0; i < UA.TOPICS.length; i++) if (UA.TOPICS[i].id === id) return UA.TOPICS[i].name; return ''; }
  function say(text, cls) { return '<button type="button" class="say ' + (cls || '') + '" data-say="' + esc(text) + '" aria-label="Odsłuchaj">' + ic('vol') + '</button>'; }
  function sayBoth(text) { return say(text) + '<button type="button" class="say slow" data-say="' + esc(text) + '" data-rate="0.7" aria-label="Odsłuchaj wolno">' + ic('slow') + '<small>0,7</small></button>'; }
  function uaw(text, cls) { return '<span class="ua ' + (cls || '') + '" lang="it">' + st(text) + '</span>'; }
  // rzeczownik z rodzajnikiem → { art, n }
  // rzeczownik z rodzajnikiem il / lo / la (bez l’ – tam rodzajnik nic nie zdradza)
  function nounParts(w) { var m = /^(il|lo|la) (.+)$/.exec(w.ua); return m && 'чж'.indexOf(w.pos) >= 0 ? { art: m[1], n: m[2] } : null; }
  function plural(w) { var m = /^lm\. (i|gli|le) ([^·,(]+)/.exec(w.forms || ''); return m ? { art: m[1], w: m[2].trim() } : null; }
  function lvLabel(lv) { return lv === 'TR' ? 'Podróż' : lv; }
  function days(n) { return n <= 0 ? 'dziś' : n < 30 ? n + ' d' : n < 365 ? (Math.round(n / 3) / 10).toString().replace('.', ',') + ' mies.' : Math.round(n / 365) + ' l.'; }
  function head(title, sub, back) {
    return '<header class="phead">' + (back ? '<a class="backl" href="' + back + '">' + ic('back') + '<span>Wróć</span></a>' : '') + '<h1>' + title + '</h1>' + (sub ? '<p class="lead">' + sub + '</p>' : '') + '</header>';
  }
  function bar(v, max, cls) { return '<div class="bar ' + (cls || '') + '"><i style="width:' + Math.round(100 * Math.min(1, max ? v / max : 0)) + '%"></i></div>'; }

  /* ---------- Nawigacja ---------- */
  var NAV = [
    ['start', 'Start', 'home', 1], ['sciezka', 'Ścieżka', 'route', 1], ['rozmowki', 'Rozmówki', 'phrase', 1], ['symulacje', 'Rozmowy', 'talk', 1],
    ['sluchanie', 'Słuchanie', 'headphones'], ['menu', 'Dekoder menu', 'utensils'], ['zycie', 'Z życia: dworzec i ceny', 'train'], ['wymowa', 'Wymowa', 'ear'],
    ['rodzajniki', 'Il · lo · la', 'tag'], ['dialogi', 'Dialogi', 'chat'], ['alfabet', 'Litery i dźwięki', 'abc'], ['przyjaciele', 'Fałszywi przyjaciele', 'alert'], ['gramatyka', 'Gramatyka', 'book'],
    ['dyktando', 'Dyktando', 'pen'], ['slownik', 'Słownik', 'search'], ['ustawienia', 'Ustawienia', 'gear']
  ];
  function renderNav(cur) {
    document.getElementById('nav').innerHTML = NAV.map(function (n) {
      return '<a href="#/' + n[0] + '" class="' + (cur === n[0] ? 'on' : '') + '">' + ic(n[2]) + '<span>' + n[1] + '</span></a>';
    }).join('');
    var more = NAV.filter(function (n) { return !n[3]; }).some(function (n) { return n[0] === cur; }) || cur === 'wiecej';
    document.getElementById('bnav').innerHTML = NAV.filter(function (n) { return n[3]; }).map(function (n) {
      return '<a href="#/' + n[0] + '" class="' + (cur === n[0] ? 'on' : '') + '">' + ic(n[2]) + '<span>' + n[1] + '</span></a>';
    }).join('') + '<a href="#/wiecej" class="' + (more ? 'on' : '') + '">' + ic('grid') + '<span>Więcej</span></a>';
  }
  function renderStatus() {
    var L = G.level(), x = G.xpToday(), goal = S.settings.goal;
    document.getElementById('status').innerHTML =
      '<a href="#/start" class="lv" title="' + esc(L.pl) + '"><span class="lvn" lang="it">' + esc(strip(L.name)) + '</span>' + bar(G.S.xp - L.from, L.to - L.from, 'thin') + '</a>' +
      '<span class="pill ' + (G.streak() ? 'hot' : '') + '" title="Seria dni nauki">' + ic('flame') + G.streak() + '</span>' +
      '<span class="pill goal ' + (x >= goal ? 'done' : '') + '" title="Cel dzienny">' + ic('target') + Math.min(x, goal) + '/' + goal + '</span>';
  }
  G.onChange(renderStatus);

  /* ---------- Globalne kliknięcia: odsłuch ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-say]');
    if (b) { e.preventDefault(); b.classList.add('speaking'); SP.speak(b.getAttribute('data-say'), { rate: b.getAttribute('data-rate') ? +b.getAttribute('data-rate') : null, onend: function () { b.classList.remove('speaking'); } }); }
  });

  /* ---------- Router ---------- */
  var V = {};
  var cleanup = null;
  var NAVMAP = { nauka: 'sciezka', scena: 'symulacje', trening: 'sciezka', etap: 'sciezka', test: 'sciezka', slowka: 'sciezka', dialog: 'dialogi', lekcja: 'gramatyka', czytanka: 'sluchanie' };
  function route() {
    if (cleanup) { try { cleanup(); } catch (e) { } cleanup = null; }
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    var h = (location.hash || '#/start').slice(2).split('/');
    var name = h[0] || 'start';
    if (!V[name]) name = 'start';
    renderNav(NAVMAP[name] || name);
    renderStatus();
    main.innerHTML = '';
    V[name].apply(null, h.slice(1));
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);

  /* ============================================================
     POZIOMY I ŚCIEŻKA A1 → C2
     ============================================================ */
  var LEVELS = ['TR', 'A2', 'B1', 'B2', 'C1', 'C2'];
  var LEVEL_NAME = { TR: 'ścieżka podróży', A1: 'początkujący', A2: 'podstawowy', B1: 'średni', B2: 'średnio zaawansowany', C1: 'zaawansowany', C2: 'biegły' };
  S.unlocked = S.unlocked || {};
  S.stats.listen = S.stats.listen || 0;
  S.stats.texts = S.stats.texts || {};
  function unitWords(id) { return UA.WORDS.filter(function (w) { return w.topic === id; }); }
  function seen(w) { var c = SRS.card(w, 'r'); return !!(c && c.n >= 1); }
  function unitProg(u) { var ws = unitWords(u.id); return ws.length ? ws.filter(seen).length / ws.length : 0; }
  function unitById(id) { return UA.TOPICS.filter(function (t) { return t.id === id; })[0]; }
  // etapy podróży są otwarte od razu (uczysz się tego, czego potrzebujesz na wyjeździe);
  // dalsza ścieżka otwiera się po poznaniu połowy zwrotów podróżnych albo po teście
  function trProg() { var ws = levelWords('TR'); return ws.length ? ws.filter(seen).length / ws.length : 0; }
  function unlocked(u) {
    var i = UA.TOPICS.indexOf(u);
    if (i <= 0 || u.level === 'TR' || S.unlocked[u.id]) return true;
    var prev = UA.TOPICS[i - 1];
    if (prev.level === 'TR') return trProg() >= 0.5;
    return unlocked(prev) && unitProg(prev) >= 0.7;
  }
  function currentUnit() {
    for (var i = 0; i < UA.TOPICS.length; i++) { var u = UA.TOPICS[i]; if (unlocked(u) && unitProg(u) < 1) return u; }
    return UA.TOPICS[UA.TOPICS.length - 1];
  }
  function levelUnlocked(lv) { return UA.TOPICS.some(function (t) { return t.level === lv && unlocked(t); }); }
  function levelWords(lv) { return UA.WORDS.filter(function (w) { var t = unitById(w.topic); return t && t.level === lv; }); }
  function ring(p, label) {
    var r = 21, c = 2 * Math.PI * r;
    return '<span class="ring"><svg viewBox="0 0 50 50" aria-hidden="true"><circle cx="25" cy="25" r="' + r + '" class="rbg"/><circle cx="25" cy="25" r="' + r + '" class="rfg" stroke-dasharray="' + c + '" stroke-dashoffset="' + (c * (1 - p)) + '"/></svg><b>' + label + '</b></span>';
  }
  G.BADGES.push(['ucho', 'Ascoltatore', '30 trafnych odpowiedzi w ćwiczeniach ze słuchu', function () { return S.stats.listen >= 30; }]);
  G.BADGES.push(['lvB1', 'Livello B1', 'Odblokowany poziom B1', function () { return levelUnlocked('B1'); }]);
  G.BADGES.push(['lvC1', 'Livello C1', 'Odblokowany poziom C1', function () { return levelUnlocked('C1'); }]);

  /* ============================================================
     START
     ============================================================ */
  V.start = function () {
    var hr = new Date().getHours(), hello = hr < 13 ? 'Buongiorno!' : hr < 17 ? 'Buon pomeriggio!' : 'Buonasera!';
    var L = G.level(), vs = SP.voiceStatus(), cu = currentUnit(), q = buildQueue('all');
    var dueN = q.filter(function (e) { return !e.isNew; }).length, newN = q.length - dueN;
    var r = SRS.mastery('r'), p = SRS.mastery('p');
    var h = '<section class="hero"><div><p class="kicker">Włoski w podróży · buon viaggio!</p><h1 lang="it">' + st(hello) + '</h1><p class="lead">' +
      (q.length ? 'Na dziś: <b>' + dueN + '</b> powtórek i <b>' + newN + '</b> nowych zwrotów. Aplikacja sama sprawdzi, co już umiesz.' : 'Wszystko na dziś zrobione. Perfetto! Przećwicz rozmowę albo posłuchaj komunikatów z dworca.') + '</p>' +
      '<div class="row"><a class="btn primary" href="#/trening/all">' + ic('play') + (q.length ? 'Ucz się (' + q.length + ')' : 'Trening') + '</a><a class="btn" href="#/symulacje">' + ic('talk') + 'Rozmowy</a><a class="btn" href="#/rozmowki">' + ic('phrase') + 'Rozmówki</a></div></div>' +
      '<div class="lvcard"><span class="lvbadge">' + ic('star') + '</span><div><b lang="it">' + st(L.name) + '</b><small>' + esc(L.pl) + ' · ' + S.xp + ' XP</small>' + bar(S.xp - L.from, L.to - L.from) + '<small>' + (L.next ? 'do awansu: ' + (L.to - S.xp) + ' XP' : 'najwyższy stopień') + '</small></div></div></section>';
    if (!vs.ok) h += voiceHelp(vs);
    if (!S.seenIntro2) h += '<section class="card intro"><h2>Jak to działa</h2><p><b>Ścieżka podróży</b>: 18 sytuacji z wyjazdu – od baru i restauracji po pociąg, plażę i aptekę. Wszystkie są otwarte, zacznij od tej, której potrzebujesz. Potem dalsze poziomy A2–C2.</p><p><b>Trening bez samooceny</b>: najpierw poznajesz zwrot, potem aplikacja sama sprawdza, czy go znasz – ABCD, zdanie z luką, ze słuchu, wpisywanie.</p><p><b>Rozmowy</b>: aplikacja mówi jako kelner, konduktor czy recepcjonista, a Ty odpowiadasz – wybierając, pisząc albo mówiąc.</p><p><b>Rozmówki</b>: wszystkie zwroty offline, ulubione i tryb „Pokaż” – duży napis dla kelnera czy kierowcy.</p><div class="row"><a class="btn primary" href="#/sciezka">Zobacz ścieżkę</a><button class="btn ghost" id="hideIntro">Rozumiem</button></div></section>';
    h += '<a class="card nextunit" href="#/etap/' + cu.id + '">' + ring(unitProg(cu), Math.round(unitProg(cu) * 100) + '%') + '<div><p class="kicker">Twój etap · ' + lvLabel(cu.level) + '</p><b>' + esc(cu.name) + '</b><small>' + unitWords(cu.id).filter(seen).length + ' z ' + unitWords(cu.id).length + ' zwrotów poznanych</small></div>' + ic('next') + '</a>';
    h += '<section class="kpis"><div class="kpi"><b>' + r.learning + '</b><small>zwrotów rozpoznajesz</small></div><div class="kpi"><b>' + p.learning + '</b><small>potrafisz powiedzieć</small></div><div class="kpi"><b>' + Object.keys(S.scenes || {}).length + '/' + UA.SCENES.length + '</b><small>rozmów przećwiczonych</small></div><div class="kpi"><b>' + S.stats.listen + '</b><small>trafień ze słuchu</small></div></section>';
    h += '<h2 class="sec">W podróży</h2><section class="tiles">' + [
      ['sciezka', 'route', 'Ścieżka podróży', '18 sytuacji + A2–C2'], ['symulacje', 'talk', 'Rozmowy', 'kelner, konduktor, recepcja'],
      ['rozmowki', 'phrase', 'Rozmówki', 'offline, ulubione, „Pokaż”'], ['menu', 'utensils', 'Dekoder menu', UA.MENU.length + ' dań z całych Włoch'],
      ['zycie', 'train', 'Z życia', 'perony, godziny, ceny ze słuchu'], ['sluchanie', 'headphones', 'Słuchanie', 'słowa, zdania, czytanki']
    ].map(function (t) { return '<a class="tile" href="#/' + t[0] + '">' + ic(t[1]) + '<b>' + t[2] + '</b><small>' + t[3] + '</small></a>'; }).join('') + '</section>';
    h += '<h2 class="sec">Język</h2><section class="tiles">' + [
      ['wymowa', 'ear', 'Wymowa', 'podwójne spółgłoski, gli, gn'], ['rodzajniki', 'tag', 'Il · lo · la', 'rodzajnik i liczba mnoga'], ['dialogi', 'chat', 'Dialogi', Object.keys(S.dialogs).length + '/' + UA.DIALOGS.length + ' przećwiczone'],
      ['przyjaciele', 'alert', 'Fałszywi przyjaciele', S.stats.ff + ' trafień'], ['gramatyka', 'book', 'Gramatyka', 'tylko to, co inne'],
      ['alfabet', 'abc', 'Litery i dźwięki', 'c/ch, g/gh, gli, gn, sc…'], ['dyktando', 'pen', 'Dyktando', 'słuchaj i pisz']
    ].map(function (t) { return '<a class="tile" href="#/' + t[0] + '">' + ic(t[1]) + '<b>' + t[2] + '</b><small>' + t[3] + '</small></a>'; }).join('') + '</section>';
    h += '<h2 class="sec">Odznaki</h2><section class="badges">' + G.BADGES.map(function (b) {
      return '<div class="bdg ' + (S.badges[b[0]] ? 'got' : '') + '" title="' + esc(b[2]) + '">' + ic('trophy') + '<b lang="it">' + st(b[1]) + '</b><small>' + esc(b[2]) + '</small></div>';
    }).join('') + '</section>';
    main.innerHTML = h;
    var hi = $('#hideIntro'); if (hi) hi.onclick = function () { S.seenIntro = true; S.seenIntro2 = true; G.save(); route(); };
  };
  function voiceHelp(vs) {
    return '<section class="card warn"><h2>' + ic('vol') + ' Głos włoski</h2><p>' + esc(vs.msg) + ' Bez niego aplikacja działa, ale nie usłyszysz wymowy (ćwiczenia ze słuchu i rozmowy będą niepełne).</p><ul>' +
      '<li><b>Android:</b> Ustawienia → System → Zamiana tekstu na mowę → Usługi Google → Zainstaluj dane głosowe → <i>Italiano</i>.</li>' +
      '<li><b>iPhone:</b> Ustawienia → Dostępność → Treść mówiona → Głosy → Włoski.</li>' +
      '<li><b>Windows:</b> najwygodniej w przeglądarce <b>Edge</b> lub <b>Chrome</b> (mają głosy it-IT). Inaczej: Ustawienia Windows → Czas i język → Mowa → Dodaj głosy → Italiano.</li></ul></section>';
  }

  /* ============================================================
     ŚCIEŻKA
     ============================================================ */
  V.slowka = function () { location.replace('#/sciezka'); };
  V.nauka = function () { location.replace('#/trening/all'); };
  V.sciezka = function () {
    var cu = currentUnit();
    var h = head('Ścieżka', 'Najpierw podróż: 18 sytuacji z wyjazdu, wszystkie otwarte – zacznij od tej, której potrzebujesz. Dalsze poziomy A2–C2 otwierają się po poznaniu połowy zwrotów podróżnych (albo po zdanym teście lekcji).');
    h += '<div class="row"><a class="btn primary" href="#/trening/all">' + ic('play') + 'Codzienny trening</a><a class="btn" href="#/test">' + ic('check') + 'Test wejściowy (słowa podobne do polskich)</a></div>';
    LEVELS.forEach(function (lv) {
      var units = UA.TOPICS.filter(function (t) { return t.level === lv; }), ws = levelWords(lv), kn = ws.filter(seen).length, text = (UA.TEXTS || []).filter(function (t) { return t.level === lv; })[0];
      h += '<section class="lvl ' + (levelUnlocked(lv) ? '' : 'locked') + '"><div class="lvlh"><span class="lvtag lv-' + lv + '">' + lvLabel(lv) + '</span><div><b>' + (lv === 'TR' ? 'Podróż – zwroty na wyjazd' : 'Poziom ' + lv + ' – ' + LEVEL_NAME[lv]) + '</b><small>' + kn + ' / ' + ws.length + ' słów · ' + units.length + ' lekcji</small></div></div>' + bar(kn, ws.length) +
        '<div class="units">' + units.map(function (u) {
          var ok = unlocked(u), p = unitProg(u);
          return '<a class="unode ' + (ok ? '' : 'lock') + (u === cu ? ' cur' : '') + (p >= 1 ? ' done' : '') + '" href="#/etap/' + u.id + '">' + (ok ? ring(p, p >= 1 ? '✓' : Math.round(p * 100) + '%') : '<span class="ring lockic">' + ic('lock') + '</span>') + '<span class="uname">' + esc(u.name) + '</span><small>' + unitWords(u.id).length + ' słów</small></a>';
        }).join('') + (text ? '<a class="unode text ' + (levelUnlocked(lv) ? '' : 'lock') + '" href="#/czytanka/' + text.id + '"><span class="ring lockic">' + ic('headphones') + '</span><span class="uname">Czytanka: ' + esc(text.t) + '</span><small>słuchanie + pytania</small></a>' : '') + '</div></section>';
    });
    main.innerHTML = h;
    var c = $('.unode.cur'); if (c && c.scrollIntoView && location.hash === '#/sciezka') setTimeout(function () { c.scrollIntoView({ block: 'center', behavior: 'smooth' }); }, 60);
  };
  V.etap = function (id) {
    var u = unitById(id); if (!u) return location.replace('#/sciezka');
    var ws = unitWords(id), ok = unlocked(u), p = unitProg(u), idx = UA.TOPICS.indexOf(u), nxt = UA.TOPICS[idx + 1];
    var fresh = ws.filter(function (w) { return !SRS.card(w, 'r'); }).length, due = ws.filter(function (w) { return ['r', 'p'].some(function (d) { var c = SRS.card(w, d); return c && c.d <= U.today(); }); }).length;
    var h = head('<span class="lvtag lv-' + u.level + '\">' + lvLabel(u.level) + '</span> ' + esc(u.name), ws.length + (u.level === 'TR' ? ' zwrotów' : ' słów') + ' · poznane: ' + Math.round(p * 100) + '%', '#/sciezka');
    if (!ok) h += '<section class="card warn"><h2>' + ic('lock') + ' Lekcja zablokowana</h2><p>Otworzy się, gdy poznasz 70% słów poprzedniej lekcji. Jeśli znasz już ten materiał – zdaj test lekcji (min. 80%), a odblokujesz ją od razu.</p></section>';
    h += '<section class="card unithead">' + ring(p, Math.round(p * 100) + '%') + '<div class="row">' +
      (ok ? '<a class="btn primary" href="#/trening/' + id + '">' + ic('play') + (fresh ? 'Ucz się (' + fresh + ' nowych)' : 'Trening lekcji') + '</a>' : '') +
      '<button class="btn" id="utest">' + ic('target') + 'Test lekcji (10 pytań)</button>' + (due ? '<span class="muted small">' + due + ' słów czeka na powtórkę</span>' : '') + '</div></section>';
    var tips = (UA.TIPS || {})[id], dls = UA.DIALOGS.filter(function (d) { return d.unit === id; }), scs = UA.SCENES.filter(function (x) { return x.unit === id; });
    if (scs.length || dls.length) h += '<div class="row">' + scs.map(function (x) { return '<a class="btn" href="#/symulacje/' + x.id + '">' + ic('talk') + 'Rozmowa: ' + esc(x.t) + '</a>'; }).join('') + dls.map(function (d) { return '<a class="btn" href="#/dialog/' + d.id + '">' + ic('chat') + 'Dialog: ' + esc(d.t) + '</a>'; }).join('') + '</div>';
    if (tips) h += '<section class="card tipcard"><h2>' + ic('alert') + ' Dobrze wiedzieć</h2><ul>' + tips.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul></section>';
    h += '<section class="wlist">' + ws.map(function (w) {
      var r = SRS.card(w, 'r'), pc = SRS.card(w, 'p');
      return '<div class="wrow">' + say(w.ua) + '<div class="wmain"><div>' + uaw(w.ua) + '</div><div class="pl">' + esc(w.pl) + '</div>' + (w.ex ? '<div class="forms" lang="it">' + st(w.ex) + '</div>' : '') + '</div><div class="wside"><span class="tag ' + SIM[w.sim][1] + '">' + SIM[w.sim][0] + '</span><span class="dots" title="rozpoznawanie / produkcja"><i class="' + (r && r.n ? (r.i >= 21 ? 'k' : 'l') : '') + '"></i><i class="' + (pc && pc.n ? (pc.i >= 21 ? 'k' : 'l') : '') + '"></i></span></div></div>';
    }).join('') + '</section>';
    main.innerHTML = h;
    $('#utest').onclick = function () {
      var items = shuffle(ws).slice(0, 10).map(function (w, i) { return [exUa2pl, exPl2ua, exCloze, exListen][i % 4](w) || exPl2ua(w); });
      runMC({ title: 'Test lekcji: ' + u.name, back: '#/etap/' + id, items: items, onEnd: function (good, n) {
        if (good / n >= 0.8) {
          var t = U.today();
          ws.forEach(function (w) { var k = SRS.wid(w) + ':r'; if (!S.srs[k] || !S.srs[k].n) S.srs[k] = { e: 2.5, i: 7, n: 2, d: t + 7, l: 0 }; });
          S.unlocked[id] = true; if (nxt) S.unlocked[nxt.id] = true; G.save(); G.confetti(); G.checkBadges();
          return '<div class="fb ok"><b>Lekcja zaliczona!</b><p>Słowa trafiły do powtórek' + (nxt ? ', a lekcja „' + esc(nxt.name) + '” jest odblokowana.' : '.') + '</p></div>';
        }
        return '<div class="fb bad"><b>Zabrakło do 80%.</b><p>Przećwicz słowa w treningu lekcji i spróbuj ponownie.</p></div>';
      } });
    };
  };

  /* ============================================================
     GENERATORY ĆWICZEŃ (aplikacja sama sprawdza znajomość słowa)
     ============================================================ */
  function lvOf(w) { var t = unitById(w.topic); return t ? t.level : 'A1'; }
  function pickOthers(w, keyFn, n, filter) {
    var own = keyFn(w), lv = lvOf(w), seenKeys = {}; seenKeys[own] = 1;
    var cand = shuffle(UA.WORDS.filter(function (x) { return x !== w && (!filter || filter(x)); }));
    cand.sort(function (a, b) { return score(b) - score(a); });
    function score(x) { return (x.pos === w.pos ? 2 : 0) + (lvOf(x) === lv ? 1 : 0) + (x.topic === w.topic ? 0.5 : 0); }
    var out = [];
    for (var i = 0; i < cand.length && out.length < n; i++) { var k = keyFn(cand[i]); if (!seenKeys[k] && k) { seenKeys[k] = 1; out.push(cand[i]); } }
    return out;
  }
  function mc(correct, others, keyFn) { var all = shuffle([correct].concat(others)); return { opts: all.map(keyFn), a: all.indexOf(correct) }; }
  function wordReveal(w) {
    return '<div class="reveal"><div class="big sm">' + uaw(w.ua) + '</div><div class="sayrow">' + sayBoth(w.ua) + '</div><div class="pl">' + esc(w.pl) + '</div>' + (w.ex ? '<div class="ex"><p lang="it">' + st(w.ex) + ' ' + say(w.ex) + '</p><p class="muted">' + esc(w.exPl) + '</p></div>' : '') + '</div>';
  }
  function exUa2pl(w) {
    var o = mc(w, pickOthers(w, function (x) { return x.pl; }, 3), function (x) { return esc(x.pl); });
    return { kind: 'ua2pl', dir: 'r', w: w, title: 'Co to znaczy?', prompt: '<div class="big">' + uaw(w.ua) + '</div><div class="sayrow">' + sayBoth(w.ua) + '</div>', say: w.ua, opts: o.opts, a: o.a, reveal: wordReveal(w) };
  }
  function exListen(w) {
    var o = mc(w, pickOthers(w, function (x) { return x.pl; }, 3), function (x) { return esc(x.pl); });
    return { kind: 'listen', dir: 'r', w: w, title: 'Posłuchaj – co to znaczy?', prompt: listenBtn(w.ua), say: w.ua, listen: true, opts: o.opts, a: o.a, reveal: wordReveal(w) };
  }
  function exSpell(w) {
    var len = strip(w.ua).length;
    var o = mc(w, pickOthers(w, function (x) { return strip(x.ua); }, 3, function (x) { return Math.abs(strip(x.ua).length - len) <= 3; }), function (x) { return '<span lang="it" class="ua">' + esc(strip(x.ua)) + '</span>'; });
    return { kind: 'spell', dir: 'r', w: w, title: 'Które słowo słyszysz?', prompt: listenBtn(w.ua), say: w.ua, listen: true, opts: o.opts, a: o.a, reveal: wordReveal(w) };
  }
  function exPl2ua(w) {
    var o = mc(w, pickOthers(w, function (x) { return strip(x.ua); }, 3), function (x) { return '<span lang="it" class="ua">' + st(x.ua) + '</span>'; });
    return { kind: 'pl2ua', dir: 'p', w: w, title: 'Jak to powiedzieć po włosku?', prompt: '<div class="big pl">' + esc(w.pl) + '</div><div class="meta">' + esc(POS[w.pos] || '') + '</div>', opts: o.opts, a: o.a, sayAfter: w.ua, reveal: wordReveal(w) };
  }
  function exCloze(w) {
    var cz = w._cz; if (!cz) return null;
    var others = pickOthers(w, function (x) { return x._cz ? strip(x._cz.t).toLowerCase() : ''; }, 3, function (x) { return !!x._cz; });
    if (others.length < 3) return null;
    var all = shuffle([w].concat(others));
    return { kind: 'cloze', dir: 'p', w: w, title: 'Uzupełnij zdanie', prompt: '<p class="cloze" lang="it">' + st(cz.pre) + '<span class="gap">…</span>' + st(cz.post) + '</p><p class="muted">' + esc(w.exPl) + '</p>', opts: all.map(function (x) { return '<span lang="it" class="ua">' + st(x._cz.t) + '</span>'; }), a: all.indexOf(w), sayAfter: w.ex, reveal: wordReveal(w) };
  }
  function exType(w) { return { kind: 'type', dir: 'p', w: w, title: 'Napisz po włosku' + (nounParts(w) ? ' (z rodzajnikiem)' : ''), reveal: wordReveal(w) }; }
  function exArtikel(w) {
    var np = nounParts(w); if (!np) return null;
    var arts = ['il', 'lo', 'la'];
    return { kind: 'art', dir: 'p', w: w, title: 'Który rodzajnik?', prompt: '<div class="big"><span class="gap">___</span> <span lang="it">' + esc(np.n) + '</span></div><div class="meta">' + esc(w.pl) + '</div>', opts: arts.map(function (a) { return '<span class="' + (a === 'la' ? 'g-f' : 'g-m') + ' artopt">' + a + '</span>'; }), a: arts.indexOf(np.art), sayAfter: w.ua, reveal: wordReveal(w) };
  }
  function listenBtn(text) { return '<div class="listenbox"><button type="button" class="bigplay" data-say="' + esc(text) + '" aria-label="Odtwórz">' + ic('vol') + '</button><button type="button" class="say slow" data-say="' + esc(text) + '" data-rate="0.65" aria-label="Wolniej">' + ic('slow') + '<small>wolniej</small></button></div>'; }
  function chooseEx(e) {
    var w = e.w, c = SRS.card(w, e.dir), n = c ? c.n : 0, x;
    if (e.dir === 'r') {
      if (e.isNew || n === 0) return exUa2pl(w);
      if (n === 1) return exListen(w);
      return U.pick([exUa2pl, exListen, exSpell])(w);
    }
    if (e.followUp) return exCloze(w) || exPl2ua(w);
    if (n === 0) return exPl2ua(w);
    if (n === 1) return (nounParts(w) && Math.random() < .5 ? exArtikel(w) : exCloze(w)) || exPl2ua(w);
    var pool = w._cz ? [exCloze, exType, exPl2ua, exCloze] : [exType, exPl2ua]; if (nounParts(w)) pool.push(exArtikel, exArtikel);
    x = U.pick(pool)(w);
    return x || exPl2ua(w);
  }

  /* ---------- Kolejka treningu ---------- */
  function buildQueue(scope) {
    var t = U.today(), inScope = scope === 'all' ? function () { return true; } : function (w) { return w.topic === scope; };
    var due = [], fresh = [];
    UA.WORDS.forEach(function (w) {
      if (!inScope(w)) return;
      ['r', 'p'].forEach(function (d) { var c = SRS.card(w, d); if (c && c.d <= t) due.push({ w: w, dir: d }); });
    });
    due = shuffle(due).slice(0, 50);
    var limR = scope === 'all' ? SRS.newLeft('r') : 12, limP = scope === 'all' ? SRS.newLeft('p') : 12;
    var order = scope === 'all' ? UA.TOPICS.filter(unlocked) : [unitById(scope)];
    order.forEach(function (u) { unitWords(u.id).forEach(function (w) { if (!SRS.card(w, 'r') && fresh.length < limR) fresh.push({ w: w, dir: 'r', isNew: true }); }); });
    var freshP = UA.WORDS.filter(function (w) { return inScope(w) && seen(w) && !SRS.card(w, 'p'); }).slice(0, limP).map(function (w) { return { w: w, dir: 'p', firstP: true }; });
    var q = [], i = 0, j = 0, k = 0;
    while (i < due.length || j < fresh.length || k < freshP.length) {
      if (i < due.length) q.push(due[i++]); if (i < due.length) q.push(due[i++]);
      if (j < fresh.length) q.push(fresh[j++]);
      if (k < freshP.length) q.push(freshP[k++]);
    }
    return q;
  }

  /* ============================================================
     WSPÓLNY WIDOK PYTANIA (ABCD) + combo
     ============================================================ */
  function askMC(stage, q, done) {
    stage.innerHTML = '<div class="card fc qcard"><p class="qtitle">' + esc(q.title) + '</p>' + q.prompt + '</div><div class="opts' + (q.opts.length === 2 ? ' two' : '') + '">' + q.opts.map(function (o, i) { return '<button class="btn opt" data-i="' + i + '"><kbd>' + (i + 1) + '</kbd><span>' + o + '</span></button>'; }).join('') + '</div><div id="fb"></div>';
    if (q.say && (q.listen || S.settings.autoplay)) setTimeout(function () { SP.speak(q.say); }, 250);
    var answered = false;
    function pick(i, b) {
      if (answered) return; answered = true;
      var ok = i === q.a;
      $$('.opt', stage).forEach(function (x) { x.disabled = true; if (+x.getAttribute('data-i') === q.a) x.classList.add('right'); });
      if (!ok) b.classList.add('wrong'); else b.classList.add('pop');
      G.sfx(ok ? 'ok' : 'bad');
      if (q.sayAfter) SP.speak(q.sayAfter);
      $('#fb', stage).innerHTML = '<div class="verdict ' + (ok ? 'ok' : 'bad') + '"><b>' + (ok ? G.praise() : 'Niezupełnie.') + '</b></div>' + (q.reveal || '') + (q.extra || '') + '<button class="btn primary block" id="nx">Dalej <kbd>Enter</kbd></button>';
      $('#nx', stage).onclick = function () { done(ok, b); };
      $('#nx', stage).focus({ preventScroll: true });
      if (q.onAnswer) q.onAnswer(ok, b);
    }
    $$('.opt', stage).forEach(function (b) { b.onclick = function () { pick(+b.getAttribute('data-i'), b); }; });
    return function key(e) { var n = +e.key; if (n >= 1 && n <= q.opts.length) { var b = $$('.opt', stage)[n - 1]; if (b && !b.disabled) b.click(); } if (e.key === 'Enter') { var nx = $('#nx', stage); if (nx) { e.preventDefault(); nx.click(); } } };
  }
  function askType(stage, q, done) {
    var w = q.w, pair = w.ua.indexOf('/') > 0;
    stage.innerHTML = '<div class="card fc qcard"><p class="qtitle">' + esc(q.title) + '</p><div class="big pl">' + esc(w.pl) + '</div><div class="meta">' + esc(POS[w.pos] || '') + (pair ? ' – wpisz parę: niedokonany / dokonany' : '') + '</div>' +
      '<div class="ansrow"><input id="ans" class="answer" placeholder="po włosku…"><button class="btn primary" id="chk">Sprawdź</button></div><div id="kbh"></div></div><div id="fb"></div>';
    var inp = $('#ans', stage), finished = false;
    $('#kbh', stage).appendChild(UA.KB(inp, check));
    if (!('ontouchstart' in window) || S.settings.sysKb) inp.focus();
    $('#chk', stage).onclick = check;
    function check() {
      if (finished) { var nx = $('#nx', stage); if (nx) nx.click(); return; }
      var a = norm(inp.value); if (!a) return;
      var exp = norm(w.ua.replace(/\s*\(Pl\.\)/, '')), ep = exp.split('/').map(function (s) { return s.trim(); }), ap = a.split(/\s*[\/,]\s*/).filter(Boolean);
      var ok = a === exp || (ap.length === ep.length && ap.every(function (x, k) { return x === ep[k]; }));
      var near = !ok && U.lev(a.replace(/\s*\/\s*/g, '/'), exp.replace(/\s*\/\s*/g, '/')) <= 1 && exp.length > 4;
      var np = nounParts(w), half = !ok && !near && np && (a === norm(np.n) || ['il', 'lo', 'la'].some(function (r) { return r !== np.art && a === norm(r + ' ' + np.n); }));
      finished = true; inp.disabled = true; $('#kbh', stage).innerHTML = '';
      G.sfx(ok || near ? 'ok' : 'bad'); SP.speak(w.ua);
      var msg = ok ? '<b>' + G.praise() + '</b>' : near ? '<b>Prawie – literówka.</b> Zaliczam, ale popraw zapis.' : half ? (a === norm(np.n) ? '<b>Brakuje rodzajnika:</b> <span class="g-' + np.art + '">' + np.art + '</span>' : '<b>Zły rodzajnik.</b> Poprawnie: <span class="g-' + np.art + '">' + np.art + '</span>') : '<b>Niezupełnie.</b> Wpisałeś: <span lang="it">' + esc(inp.value) + '</span>';
      $('#fb', stage).innerHTML = '<div class="verdict ' + (ok ? 'ok' : near || half ? 'typo' : 'bad') + '">' + msg + '</div>' + q.reveal + '<button class="btn primary block" id="nx">Dalej <kbd>Enter</kbd></button>';
      $('#nx', stage).onclick = function () { done(ok || near, $('#chk', stage)); };
    }
    return function key(e) { if (e.key === 'Enter' && finished) { var nx = $('#nx', stage); if (nx) { e.preventDefault(); nx.click(); } } };
  }

  /* ============================================================
     TRENING – nauka słów z automatycznym sprawdzaniem
     ============================================================ */
  V.trening = function (scope) {
    scope = scope || 'all';
    var u = scope === 'all' ? null : unitById(scope);
    var queue = buildQueue(scope), pos = 0, done = 0, okc = 0, combo = 0, best = 0, retries = {}, keyH = null;
    var back = u ? '#/etap/' + scope : '#/sciezka', title = u ? 'Trening: ' + u.name : 'Codzienny trening';
    if (!queue.length) {
      main.innerHTML = head(title, '', back) + '<section class="card empty"><h2>Na dziś wszystko!</h2><p>Brak powtórek i nowych słów w tym zakresie. Wróć jutro, zwiększ limit nowych słów w ustawieniach albo poćwicz słuchanie.</p><div class="row center"><a class="btn primary" href="#/sluchanie">Słuchanie</a><a class="btn" href="#/sciezka">Ścieżka</a></div></section>';
      return;
    }
    main.innerHTML = head(title, '', back) + '<div class="sessbar"></div><div id="stage"></div>';
    function onKey(e) { if (e.target.tagName === 'INPUT' && e.key !== 'Enter') return; if (keyH) keyH(e); }
    document.addEventListener('keydown', onKey);
    cleanup = function () { document.removeEventListener('keydown', onKey); };
    function bar2() { $('.sessbar').innerHTML = bar(pos, queue.length) + '<span>' + Math.min(pos + 1, queue.length) + '/' + queue.length + '</span>' + (combo >= 3 ? '<span class="combo">' + ic('flame') + combo + '</span>' : ''); }
    function next() {
      if (pos >= queue.length) return finish();
      bar2();
      var e = queue[pos];
      if (e.isNew && !e.shown) return intro(e);
      var q = chooseEx(e);
      keyH = (q.kind === 'type' ? askType : askMC)($('#stage'), q, function (ok, b) { result(e, ok, b); });
    }
    function intro(e) {
      e.shown = true; var w = e.w;
      $('#stage').innerHTML = '<div class="card fc introcard"><span class="newtag">nowy zwrot</span><div class="meta">' + esc(POS[w.pos] || '') + ' · ' + lvLabel(lvOf(w)) + '</div><div class="big">' + uaw(w.ua) + '</div><div class="sayrow">' + sayBoth(w.ua) + '</div><div class="pl bigpl">' + esc(w.pl) + '</div>' +
        (w.forms ? '<div class="forms" lang="it">' + st(w.forms) + '</div>' : '') + '<div class="tags"><span class="tag ' + SIM[w.sim][1] + '">' + SIM[w.sim][0] + '</span></div>' +
        (w.ex ? '<div class="ex"><p lang="it">' + st(w.ex) + ' ' + say(w.ex) + '</p><p class="muted">' + esc(w.exPl) + '</p></div>' : '') + '</div><div class="actions"><button class="btn primary block" id="gotit">Zapamiętane – sprawdź mnie <kbd>Enter</kbd></button></div>';
      if (S.settings.autoplay) SP.speak(w.ua);
      $('#gotit').onclick = next;
      keyH = function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); next(); } };
    }
    function result(e, ok, b) {
      var isNewCard = !SRS.card(e.w, e.dir);
      if (isNewCard) SRS.countNew(e.dir);
      SRS.grade(e.w, e.dir, ok ? 4 : 1);
      done++;
      if (ok) {
        okc++; combo++; best = Math.max(best, combo);
        var mult = 1 + Math.min(2, Math.floor(combo / 4)), r = b ? b.getBoundingClientRect() : null;
        G.addXP((e.dir === 'p' ? 8 : 5) * mult);
        if (r) floatXP('+' + (e.dir === 'p' ? 8 : 5) * mult, r.left + r.width / 2, r.top);
        if (e.dir === 'p') { S.stats.prodOk++; G.save(); }
        // nowe słowo: drugie sprawdzenie w tej samej sesji, ale w innej formie (zdanie z luką / PL → UA)
        if (e.isNew && !SRS.card(e.w, 'p')) queue.splice(Math.min(queue.length, pos + 4), 0, { w: e.w, dir: 'p', followUp: true });
      } else {
        combo = 0;
        var k = SRS.wid(e.w) + e.dir; retries[k] = (retries[k] || 0) + 1;
        if (retries[k] <= 2) queue.splice(Math.min(queue.length, pos + 3), 0, { w: e.w, dir: e.dir });
      }
      pos++; next();
    }
    function finish() {
      keyH = null; document.removeEventListener('keydown', onKey);
      var pct = done ? Math.round(100 * okc / done) : 0;
      $('.sessbar').innerHTML = '';
      $('#stage').innerHTML = '<section class="card empty"><h2 lang="it">' + st(pct >= 80 ? 'Ottimo!' : 'Bene!') + '</h2><p>' + done + ' odpowiedzi, ' + pct + '% poprawnych · najdłuższa seria: ' + best + '.</p><p class="muted">Kolejne powtórki aplikacja zaplanowała sama – na podstawie tego, jak Ci poszło.</p><div class="row center"><a class="btn primary" href="#/sciezka">Ścieżka</a><a class="btn" href="#/sluchanie">Słuchanie</a></div></section>';
      if (pct >= 80 && done >= 6) G.confetti();
      G.checkBadges();
    }
    next();
  };
  function floatXP(text, x, y) {
    if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var el = document.createElement('div'); el.className = 'xpfloat'; el.textContent = text; el.style.left = x + 'px'; el.style.top = y + 'px';
    document.body.appendChild(el); setTimeout(function () { el.remove(); }, 1100);
  }

  /* ============================================================
     RUNDA PYTAŃ (testy lekcji, słuchanie)
     ============================================================ */
  function runMC(o) {
    var items = o.items.filter(Boolean), k = 0, good = 0, combo = 0, keyH = null;
    main.innerHTML = head(esc(o.title), o.sub || '', o.back) + '<div class="sessbar"></div><div id="stage"></div>';
    function onKey(e) { if (e.target.tagName === 'INPUT') return; if (keyH) keyH(e); }
    document.addEventListener('keydown', onKey);
    cleanup = function () { document.removeEventListener('keydown', onKey); };
    function show() {
      if (k >= items.length) return end();
      $('.sessbar').innerHTML = bar(k, items.length) + '<span>' + (k + 1) + '/' + items.length + '</span>' + (combo >= 3 ? '<span class="combo">' + ic('flame') + combo + '</span>' : '');
      var q = items[k];
      keyH = askMC($('#stage'), q, function (ok, b) {
        if (ok) { good++; combo++; var r = b.getBoundingClientRect(); G.addXP(4, r.left, r.top); floatXP('+4', r.left + r.width / 2, r.top); if (o.counter) { S.stats[o.counter] = (S.stats[o.counter] || 0) + 1; G.save(); } }
        else combo = 0;
        k++; show();
      });
    }
    function end() {
      keyH = null; document.removeEventListener('keydown', onKey);
      $('.sessbar').innerHTML = '';
      var extra = o.onEnd ? o.onEnd(good, items.length) || '' : '';
      $('#stage').innerHTML = '<section class="card empty"><h2>' + good + '/' + items.length + '</h2>' + extra + '<div class="row center"><a class="btn primary" href="' + o.back + '">Wróć</a>' + (o.again ? '<button class="btn" id="again">Jeszcze raz</button>' : '') + '</div></section>';
      if (good === items.length && items.length >= 8) G.confetti();
      if (o.again) $('#again').onclick = o.again;
      G.checkBadges();
    }
    show();
  }

  /* ============================================================
     SŁUCHANIE
     ============================================================ */
  function listenPool(lv) {
    if (lv === 'moje') { var m = UA.WORDS.filter(seen); return m.length >= 12 ? m : levelWords('A1'); }
    return levelWords(lv);
  }
  function defaultLv() { var lv = 'TR'; LEVELS.forEach(function (l) { if (levelUnlocked(l) && levelWords(l).some(seen)) lv = l; }); return lv; }
  V.sluchanie = function (mode, lv) {
    lv = lv || defaultLv();
    if (mode) return listenRun(mode, lv);
    var vs = SP.voiceStatus();
    var h = head('Słuchanie', 'Aplikacja czyta na głos słowa, zdania i teksty – Ty sprawdzasz, czy zrozumiałeś. Przycisk „wolniej” odtwarza nagranie w tempie 0,65×.');
    if (!vs.ok) h += voiceHelp(vs);
    h += '<div class="chips" role="group" aria-label="Poziom">' + LEVELS.concat(['moje']).map(function (l) { return '<a class="chip ' + (l === lv ? 'on' : '') + '" href="#/sluchanie//' + l + '">' + (l === 'moje' ? 'Moje słowa' : lvLabel(l)) + '</a>'; }).join('') + '</div>';
    h += '<section class="tiles">' + [
      ['slowa', 'headphones', 'Usłysz i zrozum', 'słowo → tłumaczenie'], ['pisownia', 'pen', 'Pisownia ze słuchu', 'które słowo słyszysz?'],
      ['zdania', 'chat', 'Zdania', 'co znaczy usłyszane zdanie?'], ['prawda', 'check', 'Prawda czy fałsz?', 'czy tłumaczenie pasuje?']
    ].map(function (t) { return '<a class="tile" href="#/sluchanie/' + t[0] + '/' + lv + '">' + ic(t[1]) + '<b>' + t[2] + '</b><small>' + t[3] + ' · ' + (lv === 'moje' ? 'moje słowa' : lvLabel(lv)) + '</small></a>'; }).join('') + '</section>';
    h += '<h2 class="sec">Czytanki ze słuchu</h2><section class="dlist">' + (UA.TEXTS || []).map(function (t) {
      var okL = levelUnlocked(t.level), sc = S.stats.texts[t.id];
      return '<a class="card dl" href="#/czytanka/' + t.id + '"><span class="lvtag lv-' + t.level + '\">' + lvLabel(t.level) + '</span><div><b>' + esc(t.t) + '</b><small lang="it">' + st(t.ua) + (okL ? '' : ' · poziom jeszcze zablokowany – możesz spróbować') + '</small></div>' + (sc != null ? '<span class="tag sim-t">' + sc + '/3</span>' : '') + '</a>';
    }).join('') + '</section>';
    h += '<h2 class="sec">Więcej ze słuchu</h2><section class="row"><a class="btn" href="#/dyktando">' + ic('pen') + 'Dyktando</a><a class="btn" href="#/zycie">' + ic('train') + 'Z życia: dworzec i ceny</a><a class="btn" href="#/wymowa/pary/doppie">' + ic('ear') + 'Spółgłoski podwójne</a><a class="btn" href="#/dialogi">' + ic('chat') + 'Dialogi</a></section>';
    main.innerHTML = h;
  };
  function listenRun(mode, lv) {
    var pool = listenPool(lv), items = [], back = '#/sluchanie//' + lv;
    var withEx = pool.filter(function (w) { return w.ex; });
    if (mode === 'slowa') items = shuffle(pool).slice(0, 10).map(exListen);
    if (mode === 'pisownia') items = shuffle(pool).slice(0, 10).map(exSpell);
    if (mode === 'zdania') items = shuffle(withEx).slice(0, 8).map(function (w) {
      var others = pickOthers(w, function (x) { return x.exPl; }, 3, function (x) { return !!x.ex; }), all = shuffle([w].concat(others));
      return { title: 'Co znaczy usłyszane zdanie?', prompt: listenBtn(w.ex), say: w.ex, listen: true, opts: all.map(function (x) { return esc(x.exPl); }), a: all.indexOf(w), reveal: '<div class="ex"><p lang="it">' + st(w.ex) + ' ' + say(w.ex) + '</p><p class="muted">' + esc(w.exPl) + '</p></div>' };
    });
    if (mode === 'prawda') items = shuffle(withEx).slice(0, 10).map(function (w) {
      var truth = Math.random() < 0.5, shown = truth ? w : pickOthers(w, function (x) { return x.exPl; }, 1, function (x) { return !!x.ex; })[0];
      if (!shown) { shown = w; truth = true; }
      return { title: 'Czy tłumaczenie pasuje do nagrania?', prompt: listenBtn(w.ex) + '<p class="trq">„' + esc(shown.exPl) + '”</p>', say: w.ex, listen: true, opts: ['Tak, pasuje', 'Nie, nie pasuje'], a: truth ? 0 : 1, reveal: '<div class="ex"><p lang="it">' + st(w.ex) + ' ' + say(w.ex) + '</p><p class="muted">' + esc(w.exPl) + '</p></div>' };
    });
    var names = { slowa: 'Usłysz i zrozum', pisownia: 'Pisownia ze słuchu', zdania: 'Zdania ze słuchu', prawda: 'Prawda czy fałsz?' };
    runMC({ title: names[mode] + ' · ' + (lv === 'moje' ? 'moje słowa' : lvLabel(lv)), back: back, items: items, counter: 'listen', again: function () { listenRun(mode, lv); } });
  }
  V.czytanka = function (id) {
    var t = (UA.TEXTS || []).filter(function (x) { return x.id === id; })[0]; if (!t) return location.replace('#/sluchanie');
    var showT = false, showP = false, rate = S.settings.rate;
    var h = head('<span class="lvtag lv-' + t.level + '\">' + lvLabel(t.level) + '</span> ' + esc(t.t), '<span lang="it">' + st(t.ua) + '</span> · najpierw posłuchaj, potem odpowiedz na pytania. Tekst możesz odsłonić.', '#/sluchanie');
    h += '<section class="card"><div class="row"><button class="btn primary" id="play">' + ic('play') + 'Odtwórz tekst</button><button class="btn" id="slow">' + ic('slow') + 'Wolniej</button><button class="btn" id="tt">' + ic('eye') + 'Pokaż tekst</button><button class="btn ghost" id="tp">Tłumaczenie</button></div><div id="txt"></div></section>';
    h += '<h2 class="sec">Pytania</h2>' + t.qs.map(function (q, i) { return '<div class="card qz" data-q="' + i + '"><p><b>' + (i + 1) + '.</b> ' + esc(q[0]) + '</p><div class="opts">' + q[1].map(function (o, k) { return '<button class="btn opt" data-k="' + k + '"><span>' + esc(o) + '</span></button>'; }).join('') + '</div></div>'; }).join('') + '<div id="sum"></div>';
    main.innerHTML = h;
    function drawTxt() { $('#txt').innerHTML = (showT ? '<p class="readtext" lang="it">' + st(t.text) + '</p>' : '') + (showP ? '<p class="muted">' + esc(t.pl) + '</p>' : ''); }
    $('#play').onclick = function () { SP.speak(t.text, { rate: rate }); };
    $('#slow').onclick = function () { SP.speak(t.text, { rate: 0.7 }); };
    $('#tt').onclick = function () { showT = !showT; drawTxt(); this.innerHTML = ic('eye') + (showT ? 'Ukryj tekst' : 'Pokaż tekst'); };
    $('#tp').onclick = function () { showP = !showP; drawTxt(); };
    var answered = 0, good = 0;
    $$('.qz').forEach(function (box) {
      var q = t.qs[+box.getAttribute('data-q')];
      $$('.opt', box).forEach(function (b) {
        b.onclick = function () {
          var k = +b.getAttribute('data-k');
          $$('.opt', box).forEach(function (x) { x.disabled = true; if (+x.getAttribute('data-k') === q[2]) x.classList.add('right'); });
          if (k === q[2]) { good++; S.stats.listen++; G.addXP(6); G.sfx('ok'); } else { b.classList.add('wrong'); G.sfx('bad'); }
          answered++;
          if (answered === t.qs.length) {
            S.stats.texts[t.id] = Math.max(S.stats.texts[t.id] || 0, good); G.save(); G.checkBadges();
            if (good === t.qs.length) G.confetti();
            $('#sum').innerHTML = '<section class="card empty"><h2>' + good + '/' + t.qs.length + '</h2><p>' + (good === t.qs.length ? 'Wszystko zrozumiane!' : 'Odsłoń tekst i tłumaczenie, posłuchaj jeszcze raz.') + '</p></section>';
          }
        };
      });
    });
  };

  /* ============================================================
     TEST WEJŚCIOWY – zaliczanie słów przezroczystych hurtem
     ============================================================ */
  V.test = function (topic) {
    topic = topic || UA.TOPICS[0].id;
    var ws = UA.WORDS.filter(function (w) { return w.topic === topic && (w.sim === 't' || w.sim === 'p') && !SRS.card(w, 'r'); });
    var h = head('Test wejściowy', 'Słowa przezroczyste i podobne nie muszą być wbijane pojedynczo. Dotknij słowa, które od razu rozumiesz – zobaczysz tłumaczenie, żeby się sprawdzić. Zaznaczone trafią do powtórek z długim odstępem (rozpoznawanie). Produkcję nadal przećwiczysz.', '#/sciezka');
    h += '<div class="chips">' + UA.TOPICS.map(function (t) { return '<a class="chip ' + (t.id === topic ? 'on' : '') + '" href="#/test/' + t.id + '">' + t.level + ' · ' + esc(t.name) + '</a>'; }).join('') + '</div>';
    if (!ws.length) h += '<section class="card empty"><p>W tym temacie nie ma już słów do zaliczenia testem.</p></section>';
    else h += '<section class="tgrid">' + ws.map(function (w, i) { return '<button class="tw" data-i="' + i + '"><span class="ua" lang="it">' + st(w.ua) + '</span><small>' + esc(w.pl) + '</small></button>'; }).join('') + '</section>' +
      '<div class="actions sticky"><button class="btn primary block" id="pass" disabled>Zalicz zaznaczone (0)</button></div>';
    main.innerHTML = h;
    var sel = {};
    $$('.tw').forEach(function (b) {
      b.onclick = function () {
        var i = b.getAttribute('data-i'); sel[i] = !sel[i]; b.classList.toggle('on', !!sel[i]);
        var n = Object.keys(sel).filter(function (k) { return sel[k]; }).length;
        var p = $('#pass'); p.disabled = !n; p.textContent = 'Zalicz zaznaczone (' + n + ')';
      };
    });
    var p = $('#pass');
    if (p) p.onclick = function () {
      var t = U.today(), n = 0;
      Object.keys(sel).forEach(function (k) { if (!sel[k]) return; var w = ws[k]; S.srs[SRS.wid(w) + ':r'] = { e: 2.6, i: 21, n: 3, d: t + 21, l: 0 }; n++; });
      G.save(); G.addXP(n); G.toast('Zaliczono ' + n + ' słów', 'Wrócą w powtórkach za 3 tygodnie'); route();
    };
  };

  /* ============================================================
     SŁOWNIK
     ============================================================ */
  V.slownik = function (topic) {
    var h = head('Słownik', UA.WORDS.length + ' zwrotów i słów. Szukaj po włosku (akcenty można pomijać) lub po polsku.');
    h += '<div class="filters"><input id="q" type="search" placeholder="Szukaj…" aria-label="Szukaj"><select id="ft" aria-label="Temat"><option value="">Wszystkie tematy</option>' + UA.TOPICS.map(function (t) { return '<option value="' + t.id + '"' + (t.id === topic ? ' selected' : '') + '>' + lvLabel(t.level) + ' · ' + esc(t.name) + '</option>'; }).join('') + '</select>' +
      '<select id="fs" aria-label="Podobieństwo"><option value="">Każde podobieństwo</option>' + Object.keys(SIM).map(function (k) { return '<option value="' + k + '">' + SIM[k][0] + '</option>'; }).join('') + '</select></div><div id="list" class="wlist"></div>';
    main.innerHTML = h;
    function draw() {
      var q = norm($('#q').value), ft = $('#ft').value, fs = $('#fs').value;
      var ws = UA.WORDS.filter(function (w) { return (!ft || w.topic === ft) && (!fs || w.sim === fs) && (!q || norm(w.ua).indexOf(q) >= 0 || w.pl.toLowerCase().indexOf(q) >= 0); });
      $('#list').innerHTML = ws.slice(0, 400).map(function (w) {
        var r = SRS.card(w, 'r'), p = SRS.card(w, 'p');
        return '<div class="wrow">' + say(w.ua) + '<div class="wmain"><div>' + uaw(w.ua) + '</div><div class="pl">' + esc(w.pl) + '</div>' + (w.forms ? '<div class="forms" lang="it">' + st(w.forms) + '</div>' : '') + '</div>' +
          '<div class="wside"><span class="tag ' + SIM[w.sim][1] + '">' + SIM[w.sim][0] + '</span><span class="dots" title="rozpoznawanie / produkcja"><i class="' + (r && r.n ? (r.i >= 21 ? 'k' : 'l') : '') + '"></i><i class="' + (p && p.n ? (p.i >= 21 ? 'k' : 'l') : '') + '"></i></span></div></div>';
      }).join('') || '<p class="muted">Brak wyników.</p>';
    }
    $('#q').oninput = draw; $('#ft').onchange = draw; $('#fs').onchange = draw; draw();
  };

  /* ============================================================
     FAŁSZYWI PRZYJACIELE
     ============================================================ */
  V.przyjaciele = function (mode) {
    if (mode === 'quiz') return friendsQuiz();
    var h = head('Fałszywi przyjaciele', 'Słowa, które wyglądają znajomo, a znaczą coś innego. Typowo polski problem: „przecież wiadomo, co to znaczy”.');
    h += '<div class="row"><a class="btn primary" href="#/przyjaciele/quiz">' + ic('target') + ' Quiz (10 pytań)</a><span class="muted">Trafienia: ' + S.stats.ff + '</span></div>';
    h += '<section class="ff">' + UA.FRIENDS.map(function (f) {
      return '<div class="card ffc"><div class="ffh">' + say(f[0]) + uaw(f[0], 'bigish') + '</div><p class="eq"><b>= ' + esc(f[1]) + '</b></p><p class="neq">≠ ' + esc(f[2]) + (f[3] && f[3] !== '–' ? ' <span class="muted">→ po wł.</span> <span lang="it">' + st(f[3]) + '</span>' : '') + '</p>' +
        '<p class="ex" lang="it">' + st(f[4]) + ' ' + say(f[4]) + '</p><p class="muted small">' + esc(f[5]) + '</p></div>';
    }).join('') + '</section>';
    main.innerHTML = h;
  };
  function friendsQuiz() {
    var qs = U.shuffle(UA.FRIENDS).slice(0, 10), k = 0, good = 0;
    main.innerHTML = head('Quiz: fałszywi przyjaciele', 'Co naprawdę znaczy to słowo?', '#/przyjaciele') + '<div class="sessbar"></div><div id="stage"></div>';
    function q() {
      if (k >= qs.length) {
        $('#stage').innerHTML = '<section class="card empty"><h2>' + good + '/' + qs.length + '</h2><p>' + (good >= 8 ? 'Nie dasz się nabrać!' : 'Te pułapki wracają – warto powtórzyć.') + '</p><div class="row"><a class="btn primary" href="#/przyjaciele/quiz" id="again">Jeszcze raz</a><a class="btn" href="#/przyjaciele">Lista</a></div></section>';
        $('#again').onclick = function (e) { e.preventDefault(); friendsQuiz(); };
        return;
      }
      var f = qs[k];
      var other = U.pick(UA.FRIENDS.filter(function (x) { return x !== f; }));
      var opts = U.shuffle([[f[1], 1], [f[2], 0], [other[1], 0]]);
      $('.sessbar').innerHTML = bar(k, qs.length) + '<span>' + (k + 1) + '/' + qs.length + '</span>';
      $('#stage').innerHTML = '<div class="card fc"><div class="big">' + uaw(f[0]) + '</div><div class="sayrow">' + say(f[0]) + '</div></div><div class="opts">' +
        opts.map(function (o, i) { return '<button class="btn opt" data-i="' + i + '">' + esc(o[0]) + '</button>'; }).join('') + '</div><div id="fb"></div>';
      SP.speak(f[0]);
      $$('.opt').forEach(function (b) {
        b.onclick = function () {
          var o = opts[+b.getAttribute('data-i')];
          $$('.opt').forEach(function (x) { x.disabled = true; if (opts[+x.getAttribute('data-i')][1]) x.classList.add('right'); });
          if (o[1]) { good++; S.stats.ff++; G.save(); G.addXP(4); G.sfx('ok'); } else { b.classList.add('wrong'); G.sfx('bad'); }
          $('#fb').innerHTML = '<div class="card note"><p><b lang="it">' + st(f[0]) + '</b> = ' + esc(f[1]) + '. ' + (f[3] && f[3] !== '–' ? 'Polskie „' + esc(f[2]) + '” to po włosku <b lang="it">' + st(f[3]) + '</b>.' : '') + '</p><p lang="it">' + st(f[4]) + '</p><p class="muted small">' + esc(f[5]) + '</p><button class="btn primary block" id="nx">Dalej</button></div>';
          $('#nx').onclick = function () { k++; q(); };
        };
      });
    }
    q();
  }

  /* ============================================================
     WYMOWA
     ============================================================ */
  V.wymowa = function (sub, id) {
    if (sub === 'zasady') return rules();
    if (sub === 'pary') return pairsQuiz(id);
    if (sub === 'doppie') return doubleQuiz();
    var h = head('Wymowa', 'Włoski czyta się prawie tak, jak się pisze – ale kilka reguł trzeba znać: c/ch, g/gh, gli, gn, sc i przede wszystkim spółgłoski podwójne.');
    h += '<section class="tiles">' + [
      ['#/wymowa/zasady', 'book', 'Zasady wymowy', UA.RULES.length + ' kart z przykładami'],
      ['#/wymowa/pary/doppie', 'ear', 'Pojedyncza czy podwójna?', 'sete – sette · ' + S.stats.pairs + ' trafień'],
      ['#/wymowa/doppie', 'pen', 'Pisownia: l czy ll?', 'usłysz i wybierz zapis'],
      ['#/wymowa/pary/gli', 'ear', 'gli / gn czy l / n?', 'figlio – filo'],
      ['#/alfabet/quiz', 'target', 'Usłysz i wybierz zapis', 'c/ch, g/gh, sc…'],
      ['#/dialogi', 'mic', 'Shadowing', 'w dialogach: nagraj się i porównaj']
    ].map(function (t) { return '<a class="tile" href="' + t[0] + '">' + ic(t[1]) + '<b>' + t[2] + '</b><small>' + t[3] + '</small></a>'; }).join('') + '</section>';
    var vs = SP.voiceStatus(); if (!vs.ok) h += voiceHelp(vs);
    h += '<p class="muted small">Ćwiczenia słuchowe korzystają z syntezy mowy urządzenia. Głosy it-IT są zwykle bardzo dobre, ale wzorem niech będą też żywi Włosi – w barze, na targu, w pociągu.</p>';
    main.innerHTML = h;
  };
  function doubleQuiz() {
    var items = U.shuffle(UA.DOUBLE).slice(0, 12), k = 0, good = 0, V5 = 'aeiouàèéìòù';
    main.innerHTML = head('Pojedyncza czy podwójna?', 'Posłuchaj słowa i wybierz, czy spółgłoska jest pojedyncza, czy podwójna. Podwójna brzmi dłużej.', '#/wymowa') + '<div class="sessbar"></div><div id="stage"></div>';
    function q() {
      if (k >= items.length) { $('#stage').innerHTML = '<section class="card empty"><h2>' + good + '/' + items.length + '</h2><div class="row center"><button class="btn primary" id="again">Jeszcze raz</button><a class="btn" href="#/wymowa">Wymowa</a></div></section>'; $('#again').onclick = doubleQuiz; return; }
      var p = items[k].split('|'), word = p[0], at = -1, dbl = false, i;
      for (i = 1; i < word.length - 1; i++) if (word[i] === word[i + 1] && V5.indexOf(word[i]) < 0) { at = i; dbl = true; break; }
      if (at < 0) for (i = 1; i < word.length - 1; i++) if (V5.indexOf(word[i]) < 0 && V5.indexOf(word[i - 1]) >= 0 && V5.indexOf(word[i + 1]) >= 0) { at = i; break; }
      var L1 = word[at], gap = esc(word.slice(0, at)) + '<span class="gap">_</span>' + esc(word.slice(at + (dbl ? 2 : 1)));
      $('.sessbar').innerHTML = bar(k, items.length) + '<span>' + (k + 1) + '/' + items.length + '</span>';
      $('#stage').innerHTML = '<div class="card fc"><div class="big ua" lang="it">' + gap + '</div><p class="muted">' + esc(p[1]) + '</p>' + listenBtn(word) + '</div><div class="opts two"><button class="btn opt" data-d="0"><span class="ua bigish">' + L1 + '</span></button><button class="btn opt" data-d="1"><span class="ua bigish">' + L1 + L1 + '</span></button></div><div id="fb"></div>';
      setTimeout(function () { SP.speak(word); }, 250);
      $$('.opt').forEach(function (b) {
        b.onclick = function () {
          var ok = (b.getAttribute('data-d') === '1') === dbl;
          $$('.opt').forEach(function (x) { x.disabled = true; if ((x.getAttribute('data-d') === '1') === dbl) x.classList.add('right'); });
          if (ok) { good++; S.stats.pairs++; G.save(); G.addXP(2); G.sfx('ok'); } else { b.classList.add('wrong'); G.sfx('bad'); }
          $('.big.ua').innerHTML = esc(word); SP.speak(word);
          $('#fb').innerHTML = '<button class="btn primary block" id="nx">Dalej</button>'; $('#nx').onclick = function () { k++; q(); };
        };
      });
    }
    q();
  }
  function rules() {
    main.innerHTML = head('Zasady wymowy', 'Dotknij przykładu, żeby go usłyszeć.', '#/wymowa') + '<section class="rules">' + UA.RULES.map(function (r) {
      return '<div class="card rule"><h2>' + esc(r.t) + '</h2><p>' + esc(r.b) + '</p><div class="exs">' + r.ex.map(function (x) { return '<button class="chip say-chip" data-say="' + esc(x) + '">' + ic('vol') + '<span lang="it">' + st(x) + '</span></button>'; }).join('') + '</div></div>';
    }).join('') + '</section>';
  }
  function pairsQuiz(id) {
    var set = UA.PAIRS.filter(function (p) { return p.id === id; })[0] || UA.PAIRS[0];
    var k = 0, good = 0, N = 10, cur;
    main.innerHTML = head(esc(set.name), 'Posłuchaj i wybierz słowo, które słyszysz.', '#/wymowa') + '<div class="sessbar"></div><div id="stage"></div>';
    function q() {
      if (k >= N) { $('#stage').innerHTML = '<section class="card empty"><h2>' + good + '/' + N + '</h2><div class="row"><button class="btn primary" id="again">Jeszcze raz</button><a class="btn" href="#/wymowa">Wymowa</a></div></section>'; $('#again').onclick = function () { pairsQuiz(id); }; return; }
      var it = U.pick(set.items), side = Math.random() < .5 ? 0 : 2; cur = { it: it, side: side };
      $('.sessbar').innerHTML = bar(k, N) + '<span>' + (k + 1) + '/' + N + '</span>';
      $('#stage').innerHTML = '<div class="card fc"><button class="btn big-say" id="rep">' + ic('vol') + ' Odsłuchaj</button><button class="btn ghost" id="slow">' + ic('slow') + ' wolniej</button></div><div class="opts two">' +
        [0, 2].map(function (s) { return '<button class="btn opt" data-s="' + s + '"><span class="ua bigish" lang="it">' + st(it[s]) + '</span><small>' + esc(it[s + 1]) + '</small></button>'; }).join('') + '</div><div id="fb"></div>';
      var w = it[side];
      $('#rep').onclick = function () { SP.speak(w); }; $('#slow').onclick = function () { SP.speak(w, { rate: .65 }); };
      setTimeout(function () { SP.speak(w); }, 250);
      $$('.opt').forEach(function (b) {
        b.onclick = function () {
          var s = +b.getAttribute('data-s');
          $$('.opt').forEach(function (x) { x.disabled = true; if (+x.getAttribute('data-s') === side) x.classList.add('right'); });
          if (s === side) { good++; S.stats.pairs++; G.save(); G.addXP(2); G.sfx('ok'); } else { b.classList.add('wrong'); G.sfx('bad'); }
          $('#fb').innerHTML = '<div class="row center">' + say(it[0]) + '<span lang="it">' + st(it[0]) + '</span><span class="muted">vs</span><span lang="it">' + st(it[2]) + '</span>' + say(it[2]) + '</div><button class="btn primary block" id="nx">Dalej</button>';
          $('#nx').onclick = function () { k++; q(); };
        };
      });
    }
    q();
  }
  /* ============================================================
     DER · DIE · DAS – rodzajnik i liczba mnoga
     ============================================================ */
  function nounPool() {
    var open = UA.WORDS.filter(function (w) { var t = unitById(w.topic); return nounParts(w) && t && unlocked(t); });
    var known = open.filter(seen);
    if (known.length >= 15) return known;
    if (open.length >= 15) return open;
    return UA.WORDS.filter(function (w) { var t = unitById(w.topic); return nounParts(w) && t && t.level === 'A1'; });
  }
  V.rodzajniki = function (mode) {
    if (mode === 'quiz') return artQuiz();
    if (mode === 'lm') return plurQuiz();
    var h = head('Il · lo · la', 'Rodzajnik zależy od rodzaju i pierwszej litery słowa. Kolory pomagają: <span class="g-m">il / lo</span> – męski, <span class="g-f">la</span> – żeński.');
    h += '<section class="tiles">' +
      '<a class="tile" href="#/rodzajniki/quiz">' + ic('tag') + '<b>Który rodzajnik?</b><small>15 rzeczowników · ' + S.stats.art + ' trafień</small></a>' +
      '<a class="tile" href="#/rodzajniki/lm">' + ic('target') + '<b>Liczba mnoga</b><small>wybierz poprawną formę · ' + S.stats.plur + ' trafień</small></a>' +
      '<a class="tile" href="#/lekcja/articoli">' + ic('book') + '<b>Lekcja</b><small>il, lo, la, l’, i, gli, le</small></a></section>';
    h += '<section class="card note"><h2>Ściąga</h2><table class="tbl"><tr><td><span class="g-m">il</span> → <span class="g-m">i</span></td><td>męskie przed zwykłą spółgłoską: il treno – i treni</td></tr><tr><td><span class="g-m">lo</span> → <span class="g-m">gli</span></td><td>męskie przed s+spółgłoska, z, gn, ps: lo scontrino – gli scontrini</td></tr><tr><td>l’ → <span class="g-m">gli</span></td><td>męskie przed samogłoską: l’aeroporto – gli aeroporti</td></tr><tr><td><span class="g-f">la</span> → <span class="g-f">le</span></td><td>żeńskie: la stazione – le stazioni; przed samogłoską l’: l’uscita – le uscite</td></tr></table><p class="muted small">Liczba mnoga: -o → -i, -a → -e, -e → -i (il treno – i treni, la camera – le camere, la stazione – le stazioni). Słowa zakończone akcentem lub obce się nie zmieniają (il caffè – i caffè, il bar – i bar).</p></section>';
    main.innerHTML = h;
  };
  function nounPool() {
    var open = UA.WORDS.filter(function (w) { var t = unitById(w.topic); return nounParts(w) && t && unlocked(t); });
    var known = open.filter(seen);
    return known.length >= 15 ? known : open;
  }
  function artQuiz() {
    var pool = U.shuffle(nounPool()).slice(0, 15), k = 0, good = 0, arts = ['il', 'lo', 'la'];
    main.innerHTML = head('Który rodzajnik?', 'Klawisze 1–3 też działają.', '#/rodzajniki') + '<div class="sessbar"></div><div id="stage"></div>';
    function keyh(e) { var n = +e.key; if (n >= 1 && n <= 3) { var b = $$('.opt')[n - 1]; if (b && !b.disabled) b.click(); } if (e.key === 'Enter') { var nx = $('#nx'); if (nx) { e.preventDefault(); nx.click(); } } }
    document.addEventListener('keydown', keyh); cleanup = function () { document.removeEventListener('keydown', keyh); };
    function q() {
      if (k >= pool.length) { $('#stage').innerHTML = '<section class="card empty"><h2>' + good + '/' + pool.length + '</h2><p>' + (good >= pool.length - 2 ? 'Bravissimo! Rodzajniki masz w małym palcu.' : 'Rodzajniki wymagają czasu – wracaj tu regularnie.') + '</p><div class="row center"><button class="btn primary" id="again">Jeszcze raz</button><a class="btn" href="#/rodzajniki">Wróć</a></div></section>'; $('#again').onclick = artQuiz; return; }
      var w = pool[k], np = nounParts(w);
      $('.sessbar').innerHTML = bar(k, pool.length) + '<span>' + (k + 1) + '/' + pool.length + '</span>';
      $('#stage').innerHTML = '<div class="card fc qcard"><div class="big"><span class="gap">___</span> <span lang="it">' + esc(np.n) + '</span></div><p class="muted">' + esc(w.pl) + '</p></div><div class="opts three">' +
        arts.map(function (a, i) { return '<button class="btn opt artbtn" data-a="' + a + '"><kbd>' + (i + 1) + '</kbd><span class="' + (a === 'la' ? 'g-f' : 'g-m') + ' artopt">' + a + '</span></button>'; }).join('') + '</div><div id="fb"></div>';
      $$('.opt').forEach(function (b) {
        b.onclick = function () {
          var a = b.getAttribute('data-a'), ok = a === np.art;
          $$('.opt').forEach(function (x) { x.disabled = true; if (x.getAttribute('data-a') === np.art) x.classList.add('right'); });
          if (ok) { good++; S.stats.art++; G.save(); G.addXP(2); G.sfx('ok'); b.classList.add('pop'); } else { b.classList.add('wrong'); G.sfx('bad'); }
          SP.speak(w.ua);
          var pl = plural(w);
          $('#fb').innerHTML = '<div class="verdict ' + (ok ? 'ok' : 'bad') + '"><b>' + (ok ? G.praise() : 'Niezupełnie.') + '</b></div><div class="reveal"><div class="big sm">' + uaw(w.ua) + '</div>' + (pl ? '<div class="muted">lm. <span lang="it">' + st(pl.art + ' ' + pl.w) + '</span></div>' : '') + '</div><button class="btn primary block" id="nx">Dalej <kbd>Enter</kbd></button>';
          $('#nx').onclick = function () { k++; q(); };
        };
      });
    }
    q();
  }
  function plurOptions(sing, right) {
    var stem = sing.replace(/[aeio]$/, ''), c = [stem + 'i', stem + 'e', stem + 'a', sing];
    if (/[cg][oa]$/.test(sing)) c.push(stem + 'hi', stem + 'he');
    var seenO = {}; seenO[right] = 1;
    return U.shuffle(c.filter(function (x) { if (seenO[x]) return false; seenO[x] = 1; return true; })).slice(0, 3);
  }
  function plurQuiz() {
    var pool = U.shuffle(nounPool().filter(function (w) { var p = plural(w); return p && p.w.indexOf(' ') < 0; })).slice(0, 12), k = 0, good = 0;
    main.innerHTML = head('Liczba mnoga', 'Zwykle: -o → -i, -a → -e, -e → -i. Uwaga na wyjątki i słowa nieodmienne. Wybierz poprawną formę.', '#/rodzajniki') + '<div class="sessbar"></div><div id="stage"></div>';
    function q() {
      if (k >= pool.length) { $('#stage').innerHTML = '<section class="card empty"><h2>' + good + '/' + pool.length + '</h2><div class="row center"><button class="btn primary" id="again">Jeszcze raz</button><a class="btn" href="#/rodzajniki">Wróć</a></div></section>'; $('#again').onclick = plurQuiz; return; }
      var w = pool[k], np = nounParts(w), pl = plural(w), right = pl.w, opts = U.shuffle([right].concat(plurOptions(np.n, right)));
      $('.sessbar').innerHTML = bar(k, pool.length) + '<span>' + (k + 1) + '/' + pool.length + '</span>';
      $('#stage').innerHTML = '<div class="card fc qcard"><div class="big">' + uaw(w.ua) + '</div><p class="muted">' + esc(w.pl) + ' → liczba mnoga?</p></div><div class="opts">' +
        opts.map(function (o) { return '<button class="btn opt" data-o="' + esc(o) + '"><span lang="it" class="ua">' + st(pl.art + ' ' + o) + '</span></button>'; }).join('') + '</div><div id="fb"></div>';
      $$('.opt').forEach(function (b) {
        b.onclick = function () {
          var ok = b.getAttribute('data-o') === right;
          $$('.opt').forEach(function (x) { x.disabled = true; if (x.getAttribute('data-o') === right) x.classList.add('right'); });
          if (ok) { good++; S.stats.plur++; G.save(); G.addXP(2); G.sfx('ok'); } else { b.classList.add('wrong'); G.sfx('bad'); }
          SP.speak(pl.art + ' ' + right);
          $('#fb').innerHTML = '<button class="btn primary block" id="nx">Dalej</button>'; $('#nx').onclick = function () { k++; q(); };
        };
      });
    }
    q();
  }

  /* ============================================================
     ROZMÓWKI – offline, ulubione, tryb „Pokaż”
     ============================================================ */
  V.rozmowki = function () {
    S.fav = S.fav || {};
    var units = UA.TOPICS.filter(function (t) { return t.level === 'TR'; });
    var h = head('Rozmówki', 'Wszystkie zwroty na wyjazd – działają bez internetu. ★ dodaje do ulubionych, ' + ic('eye') + ' wyświetla zwrot dużymi literami, żeby pokazać go kelnerowi, kierowcy czy farmaceucie.');
    h += '<div class="filters"><input id="q" type="search" placeholder="Szukaj po polsku lub po włosku…" aria-label="Szukaj"><select id="fu" aria-label="Sytuacja"><option value="">Wszystkie sytuacje</option><option value="fav">★ Ulubione</option>' +
      units.map(function (u) { return '<option value="' + u.id + '">' + esc(u.name) + '</option>'; }).join('') + '</select></div><div id="list"></div>';
    main.innerHTML = h;
    function row(w) {
      var id = SRS.wid(w);
      return '<div class="wrow phr">' + say(w.ua) + '<div class="wmain"><div>' + uaw(w.ua) + '</div><div class="pl">' + esc(w.pl) + '</div></div><div class="wside"><button class="iconbtn fav' + (S.fav[id] ? ' on' : '') + '" data-fav="' + esc(id) + '" aria-label="Ulubione">' + ic('star') + '</button><button class="iconbtn" data-show="' + UA.WORDS.indexOf(w) + '" aria-label="Pokaż dużymi literami">' + ic('eye') + '</button></div></div>';
    }
    function draw() {
      var q = norm($('#q').value), fu = $('#fu').value, out = '';
      if (q || fu === 'fav') {
        var ws = UA.WORDS.filter(function (w) { return (fu !== 'fav' || S.fav[SRS.wid(w)]) && (!q || norm(w.ua).indexOf(q) >= 0 || norm(w.pl).indexOf(q) >= 0); });
        out = ws.slice(0, 200).map(row).join('') || '<p class="muted">' + (fu === 'fav' && !q ? 'Brak ulubionych – dotknij ★ przy zwrocie.' : 'Brak wyników.') + '</p>';
      } else {
        (fu ? units.filter(function (u) { return u.id === fu; }) : units).forEach(function (u) {
          out += '<h2 class="sec">' + esc(u.name) + '</h2>' + unitWords(u.id).map(row).join('');
        });
      }
      $('#list').innerHTML = out;
    }
    $('#q').oninput = draw; $('#fu').onchange = draw; draw();
    $('#list').addEventListener('click', function (e) {
      var f = e.target.closest('[data-fav]'), sh = e.target.closest('[data-show]');
      if (f) { var id = f.getAttribute('data-fav'); if (S.fav[id]) delete S.fav[id]; else S.fav[id] = 1; G.save(); f.classList.toggle('on', !!S.fav[id]); }
      if (sh) showCard(UA.WORDS[+sh.getAttribute('data-show')]);
    });
    cleanup = function () { var c = document.querySelector('.showcard'); if (c) c.remove(); };
  };
  function showCard(w) {
    var d = document.createElement('div'); d.className = 'showcard';
    d.innerHTML = '<div class="sc-in"><p class="sc-it" lang="it">' + esc(w.ua.replace(/\s*…\s*/g, ' … ').trim()) + '</p><p class="sc-pl">' + esc(w.pl) + '</p><div class="row center"><button class="btn primary" data-say="' + esc(w.ua) + '">' + ic('vol') + ' Odtwórz</button><button class="btn" id="scx">Zamknij</button></div></div>';
    document.body.appendChild(d);
    d.addEventListener('click', function (e) { if (e.target === d || e.target.id === 'scx') d.remove(); });
    SP.speak(w.ua);
  }

  /* ============================================================
     ROZMOWY – symulacje: aplikacja mówi jako rozmówca, Ty odpowiadasz
     ============================================================ */
  function wordScore(expected, got) {
    var exp = norm(expected).split(' ').filter(Boolean), g = norm(got).split(' ').filter(Boolean);
    if (!exp.length || !g.length) return 0;
    var m = exp.length, n = g.length, L = [], i, j;
    for (i = 0; i <= m; i++) { L[i] = []; for (j = 0; j <= n; j++) L[i][j] = 0; }
    for (i = m - 1; i >= 0; i--) for (j = n - 1; j >= 0; j--) L[i][j] = exp[i] === g[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    return L[0][0] / Math.max(m, n * 0.8);
  }
  V.symulacje = function (id, mode) {
    S.scenes = S.scenes || {};
    var sc = UA.SCENES.filter(function (x) { return x.id === id; })[0];
    if (sc && mode) return runScene(sc, mode);
    if (sc) {
      var h0 = head(esc(sc.t), 'Rozmówca: <b lang="it">' + esc(sc.npc) + '</b> · ' + sc.steps.length + ' wymian. Wybierz poziom trudności:', '#/symulacje');
      h0 += '<section class="tiles">' + [
        ['wybor', 'check', '1. Wybierz odpowiedź', 'słuchasz i wybierasz z trzech'], ['pisz', 'pen', '2. Napisz odpowiedź', 'widzisz, co chcesz powiedzieć, piszesz po włosku'],
        ['mow', 'mic', '3. Powiedz na głos', SP.canRecognize() ? 'rozpoznawanie mowy' : 'w tej przeglądarce bez rozpoznawania – sprawdzisz się sam']
      ].map(function (t) { return '<a class="tile" href="#/symulacje/' + sc.id + '/' + t[0] + '">' + ic(t[1]) + '<b>' + t[2] + '</b><small>' + t[3] + '</small></a>'; }).join('') + '</section>';
      var dl = UA.DIALOGS.filter(function (d) { return d.unit === sc.unit; })[0];
      if (dl) h0 += '<p class="muted">Najpierw posłuchaj całej sceny? <a href="#/dialog/' + dl.id + '">Dialog: ' + esc(dl.t) + '</a></p>';
      main.innerHTML = h0; return;
    }
    var h = head('Rozmowy', 'Aplikacja mówi jako kelner, konduktor czy recepcjonista – Ty odpowiadasz. Każda scena ma trzy poziomy: wybór, pisanie i mówienie.');
    h += '<section class="dlist">' + UA.SCENES.map(function (x) {
      var best = S.scenes[x.id], u = unitById(x.unit);
      return '<a class="card dl" href="#/symulacje/' + x.id + '">' + ic('talk') + '<div><b>' + esc(x.t) + '</b><small>' + esc(u ? u.name : '') + ' · ' + x.steps.length + ' wymian · rozmówca: ' + esc(x.npc) + '</small></div>' + (best ? '<span class="tag sim-t">' + ic('check') + 'poziom ' + best + '</span>' : '') + '</a>';
    }).join('') + '</section>';
    main.innerHTML = h;
  };
  function runScene(sc, mode) {
    var k = 0, good = 0, log = [], LV = { wybor: 1, pisz: 2, mow: 3 }[mode] || 1;
    main.innerHTML = head(esc(sc.t), { wybor: 'Posłuchaj i wybierz odpowiedź.', pisz: 'Posłuchaj i napisz odpowiedź po włosku.', mow: 'Posłuchaj i odpowiedz na głos.' }[mode], '#/symulacje/' + sc.id) + '<div class="sessbar"></div><div class="chatlog" id="log"></div><div id="stage"></div>';
    function drawLog() {
      $('#log').innerHTML = log.map(function (l) { return '<div class="bub r' + l[0] + '"><div class="who" lang="it">' + (l[0] ? 'Ty' : esc(sc.npc)) + '</div><div class="utt" lang="it">' + esc(l[1]) + '</div>' + (l[2] ? '<div class="plt">' + esc(l[2]) + '</div>' : '') + '</div>'; }).join('');
      var b = $$('.bub', $('#log')).pop(); if (b && b.scrollIntoView) b.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
    function finish() {
      var pct = Math.round(100 * good / sc.steps.length);
      if (pct >= 60) { S.scenes[sc.id] = Math.max(S.scenes[sc.id] || 0, LV); G.save(); }
      G.addXP(good * (LV + 1)); if (pct >= 80) G.confetti();
      $('#stage').innerHTML = '<section class="card empty"><h2 lang="it">' + (pct >= 80 ? 'Perfetto!' : pct >= 60 ? 'Bene!' : 'Ancora una volta?') + '</h2><p>' + good + ' z ' + sc.steps.length + ' odpowiedzi dobrze (' + pct + '%).</p><div class="row center">' +
        (LV < 3 && pct >= 60 ? '<a class="btn primary" href="#/symulacje/' + sc.id + '/' + ['', 'pisz', 'mow'][LV] + '">Następny poziom</a>' : '') + '<button class="btn" id="again">Jeszcze raz</button><a class="btn" href="#/symulacje">Inne rozmowy</a></div></section>';
      $('#again').onclick = function () { runScene(sc, mode); };
    }
    function step() {
      if (k >= sc.steps.length) return finish();
      var st0 = sc.steps[k]; $('.sessbar').innerHTML = bar(k, sc.steps.length) + '<span>' + (k + 1) + '/' + sc.steps.length + '</span>';
      log.push([0, st0[0], '']); drawLog(); SP.speak(st0[0]);
      var tools = '<div class="row center"><button class="btn ghost" id="rep">' + ic('vol') + ' Powtórz</button><button class="btn ghost" id="slowb">' + ic('slow') + ' Wolniej</button><button class="btn ghost" id="trb">Tłumaczenie</button></div><p class="muted center" id="trx"></p>';
      function done(ok, said) {
        if (ok) { good++; G.sfx('ok'); } else G.sfx('bad');
        log[log.length - 1][2] = st0[1];
        log.push([1, st0[2], ok ? '' : (said ? 'Ty: „' + said + '” – lepiej tak jak wyżej.' : '')]); drawLog(); SP.speak(st0[2]);
        $('#stage').innerHTML = '<div class="verdict ' + (ok ? 'ok' : 'bad') + '"><b>' + (ok ? G.praise() : 'Poprawna odpowiedź:') + '</b> ' + (ok ? '' : '<span lang="it">' + esc(st0[2]) + '</span>') + '</div><p class="muted center">' + esc(st0[4]) + '</p><button class="btn primary block" id="nx">Dalej <kbd>Enter</kbd></button>';
        $('#nx').focus({ preventScroll: true }); $('#nx').onclick = function () { k++; step(); };
      }
      if (mode === 'wybor') {
        var opts = U.shuffle([st0[2]].concat(st0[3]));
        $('#stage').innerHTML = tools + '<div class="opts">' + opts.map(function (o, i) { return '<button class="btn opt" data-i="' + i + '"><kbd>' + (i + 1) + '</kbd><span lang="it">' + esc(o) + '</span></button>'; }).join('') + '</div>';
        $$('.opt').forEach(function (b) { b.onclick = function () { var o = opts[+b.getAttribute('data-i')]; done(o === st0[2], o === st0[2] ? '' : o); }; });
      } else {
        $('#stage').innerHTML = tools + '<div class="card fc"><p class="qtitle">Powiedz po włosku</p><p class="bigpl">' + esc(st0[4]) + '</p>' +
          (mode === 'pisz' ? '<div class="ansrow"><input id="ans" class="answer" placeholder="po włosku…"><button class="btn primary" id="chk">Sprawdź</button></div><div id="kbh"></div>'
            : '<div class="row center">' + (SP.canRecognize() ? '<button class="btn primary" id="mic">' + ic('mic') + ' Mów</button>' : '') + '<button class="btn" id="self">Pokaż odpowiedź</button></div><p class="muted center" id="srx"></p>') + '</div>';
        if (mode === 'pisz') {
          var inp = $('#ans'); $('#kbh').appendChild(UA.KB(inp, chk)); $('#chk').onclick = chk;
          if (!('ontouchstart' in window) || S.settings.sysKb) inp.focus();
          function chk() { if (!inp.value.trim()) return; done(wordScore(st0[2], inp.value) >= 0.75, inp.value); }
        } else {
          if ($('#mic')) $('#mic').onclick = function () {
            $('#srx').textContent = 'Słucham… mów teraz.';
            try { SP.recognize(function (err, alts) {
              if (err) { $('#srx').textContent = 'Nie udało się rozpoznać (' + err + '). Spróbuj jeszcze raz albo pokaż odpowiedź.'; return; }
              var best = 0, bestAlt = alts[0]; alts.forEach(function (a) { var sc2 = wordScore(st0[2], a); if (sc2 > best) { best = sc2; bestAlt = a; } });
              done(best >= 0.6, bestAlt);
            }); } catch (e) { $('#srx').textContent = 'Rozpoznawanie mowy niedostępne.'; }
          };
          $('#self').onclick = function () {
            $('#srx').innerHTML = '<span lang="it" class="ua">' + esc(st0[2]) + '</span><br><span class="muted">Powiedziałeś tak (lub podobnie)?</span><div class="row center"><button class="btn primary" id="yes">Tak</button><button class="btn" id="no">Nie</button></div>';
            SP.speak(st0[2]); $('#yes').onclick = function () { done(true, ''); }; $('#no').onclick = function () { done(false, ''); };
          };
        }
      }
      $('#rep').onclick = function () { SP.speak(st0[0]); }; $('#slowb').onclick = function () { SP.speak(st0[0], { rate: .65 }); };
      $('#trb').onclick = function () { $('#trx').textContent = st0[1]; };
    }
    function keyh(e) { var n = +e.key; if (mode === 'wybor' && n >= 1 && n <= 3) { var b = $$('.opt')[n - 1]; if (b && !b.disabled) b.click(); } if (e.key === 'Enter') { var nx = $('#nx'); if (nx) { e.preventDefault(); nx.click(); } } }
    document.addEventListener('keydown', keyh); cleanup = function () { document.removeEventListener('keydown', keyh); };
    step();
  }

  /* ============================================================
     DEKODER MENU
     ============================================================ */
  var MENU_CAT = { antipasto: 'Antipasti – przystawki', primo: 'Primi – pierwsze dania', secondo: 'Secondi – drugie dania', contorno: 'Contorni – dodatki', dolce: 'Dolci – desery', pizza: 'Pizze', 'street food': 'Street food' };
  V.menu = function (mode) {
    if (mode === 'quiz') return menuQuiz('co');
    if (mode === 'kat') return menuQuiz('kat');
    var h = head('Dekoder menu', 'Typowe dania z całych Włoch – co to jest i skąd pochodzi. Kolejność obiadu: antipasto → primo → secondo + contorno → dolce → caffè.');
    h += '<div class="row"><a class="btn primary" href="#/menu/quiz">' + ic('target') + ' Quiz: co zamówiłem?</a><a class="btn" href="#/menu/kat">' + ic('utensils') + ' Które to danie w menu?</a></div>';
    Object.keys(MENU_CAT).forEach(function (c) {
      var items = UA.MENU.filter(function (m) { return m[2] === c; }); if (!items.length) return;
      h += '<h2 class="sec">' + MENU_CAT[c] + '</h2><section class="wlist">' + items.map(function (m) {
        return '<div class="wrow">' + say(m[0]) + '<div class="wmain"><div><span class="ua" lang="it">' + esc(m[0]) + '</span></div><div class="pl">' + esc(m[1]) + '</div></div><div class="wside"><span class="tag sim-p">' + esc(m[3]) + '</span></div></div>';
      }).join('') + '</section>';
    });
    main.innerHTML = h;
  };
  function menuQuiz(kind) {
    var pool = U.shuffle(UA.MENU).slice(0, 10), items = pool.map(function (m) {
      if (kind === 'co') {
        var others = U.shuffle(UA.MENU.filter(function (x) { return x !== m; })).slice(0, 3), all = U.shuffle([m].concat(others));
        return { title: 'Co to za danie?', prompt: '<div class="big"><span class="ua" lang="it">' + esc(m[0]) + '</span></div><div class="meta">' + esc(m[3]) + '</div>', say: m[0], opts: all.map(function (x) { return esc(x[1]); }), a: all.indexOf(m), reveal: '' };
      }
      var cats = Object.keys(MENU_CAT), all2 = U.shuffle([m[2]].concat(U.shuffle(cats.filter(function (c) { return c !== m[2]; })).slice(0, 2)));
      return { title: 'W której części menu?', prompt: '<div class="big"><span class="ua" lang="it">' + esc(m[0]) + '</span></div><div class="meta">' + esc(m[1]) + '</div>', say: m[0], opts: all2.map(function (c) { return MENU_CAT[c]; }), a: all2.indexOf(m[2]), reveal: '' };
    });
    runMC({ title: kind === 'co' ? 'Co zamówiłem?' : 'Które to danie w menu?', back: '#/menu', items: items, again: function () { menuQuiz(kind); }, onEnd: function (good, n) { return good / n >= 0.8 ? '<div class="fb ok"><b>Buon appetito!</b><p>Menu nie ma przed tobą tajemnic.</p></div>' : ''; } });
  }

  /* ============================================================
     Z ŻYCIA – komunikaty: perony, godziny, opóźnienia, ceny
     ============================================================ */
  function lifeNums() {
    function r(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
    return { h: r(6, 22), m: U.pick(['10', '15', '20', '30', '40', '45', '50']), b: r(1, 18), d: r(1, 12) * 5, e: r(2, 49), c: U.pick(['10', '20', '30', '50', '80', '90']), r: r(101, 450), h2: r(6, 8) };
  }
  V.zycie = function () {
    var items = [], i;
    for (i = 0; i < 10; i++) {
      var t = U.pick(UA.LIFE), got = t.make(lifeNums()), opts = [got[1]], guard = 0;
      while (opts.length < 4 && guard++ < 40) { var alt = t.make(lifeNums())[1]; if (opts.indexOf(alt) < 0) opts.push(alt); }
      opts = U.shuffle(opts);
      items.push({ title: t.q, prompt: listenBtn(got[0]), say: got[0], listen: true, opts: opts.map(esc), a: opts.indexOf(got[1]), reveal: '<div class="ex"><p lang="it">' + esc(got[0]) + ' ' + say(got[0]) + '</p></div>' });
    }
    runMC({ title: 'Z życia: dworzec, hotel, kasa', back: '#/sluchanie', items: items, again: function () { V.zycie(); }, onEnd: function (good) { S.stats.listen += good; G.save(); G.checkBadges(); return ''; } });
  };

  /* ============================================================
     DIALOGI
     ============================================================ */
  V.dialogi = function () {
    var h = head('Dialogi', 'Krótkie scenki z życia: odsłuch, tekst do odkrycia, odgrywanie ról, shadowing z nagrywaniem i dyktando.');
    h += '<section class="dlist">' + UA.DIALOGS.map(function (d) {
      return '<a class="card dl" href="#/dialog/' + d.id + '">' + ic('chat') + '<div><b>' + esc(d.t) + '</b><small lang="it">' + st(d.ua) + ' · ' + d.lines.length + ' kwestii</small></div>' + (S.dialogs[d.id] ? '<span class="tag sim-t">' + ic('check') + 'przećwiczony</span>' : '') + '</a>';
    }).join('') + '</section>';
    h += '<section class="card note"><h2>' + ic('mic') + ' Shadowing</h2><p>Posłuchaj kwestii, nagraj własną wersję i odtwórz obie po kolei – usłyszysz różnicę w akcencie i melodii. Nagrania zostają tylko w przeglądarce, nic nie jest wysyłane.</p></section>';
    main.innerHTML = h;
  };
  V.dialog = function (id) {
    var d = UA.DIALOGS.filter(function (x) { return x.id === id; })[0]; if (!d) { location.hash = '#/dialogi'; return; }
    var showText = true, showPl = false, rate = S.settings.rate, mine = {}, recIdx = -1, stopFlag = false, running = false;
    function render() {
      var h = head(esc(d.t), '<span lang="it">' + st(d.ua) + '</span>', '#/dialogi');
      h += '<div class="dctl"><button class="btn primary" id="all">' + ic('play') + ' Cały dialog</button>' +
        '<button class="btn" id="rate">' + ic('slow') + ' Tempo ' + (rate < 1 ? '0,75×' : '1×') + '</button>' +
        '<button class="btn" id="tt">' + ic('eye') + (showText ? ' Ukryj tekst' : ' Pokaż tekst') + '</button>' +
        '<button class="btn" id="tp">' + (showPl ? 'Ukryj tłumaczenie' : 'Tłumaczenie') + '</button></div>' +
        '<div class="dctl"><span class="muted">Odegraj rolę:</span>' + d.roles.map(function (r, i) { return '<button class="btn role" data-r="' + i + '">' + ic('user') + '<span lang="it">' + st(r) + '</span></button>'; }).join('') +
        '<a class="btn ghost" href="#/dyktando/' + d.id + '">' + ic('pen') + ' Dyktando</a></div>';
      h += '<div class="chatlog">' + d.lines.map(function (l, i) {
        return '<div class="bub r' + l[0] + '" data-i="' + i + '"><div class="who" lang="it">' + st(d.roles[l[0]]) + '</div>' +
          '<div class="utt" lang="it">' + (showText ? st(l[1]) : '<button class="reveal" data-i="' + i + '">• • • pokaż</button>') + '</div>' +
          (showPl ? '<div class="plt">' + esc(l[2]) + '</div>' : '') +
          '<div class="tools">' + '<button class="tb1" data-a="say" data-i="' + i + '" aria-label="Odsłuchaj">' + ic('vol') + '</button>' +
          (SP.canRecord() ? '<button class="tb1 ' + (recIdx === i ? 'rec' : '') + '" data-a="rec" data-i="' + i + '" aria-label="Nagraj się">' + ic(recIdx === i ? 'stop' : 'mic') + '</button>' : '') +
          (mine[i] ? '<button class="tb1" data-a="mine" data-i="' + i + '" aria-label="Moje nagranie">' + ic('play') + '<small>ja</small></button><button class="tb1" data-a="cmp" data-i="' + i + '" aria-label="Wzór, potem ja">' + ic('swap') + '<small>porównaj</small></button>' : '') +
          (SP.canRecognize() ? '<button class="tb1" data-a="sr" data-i="' + i + '" aria-label="Rozpoznawanie mowy">' + ic('target') + '<small>rozpoznaj</small></button>' : '') +
          '</div><div class="srres" id="sr' + i + '"></div></div>';
      }).join('') + '</div><div id="rp"></div>';
      if (SP.canRecognize()) h += '<p class="muted small">„Rozpoznaj” sprawdza tylko, czy system rozpoznał słowa – nie ocenia poprawności wymowy (zaliczy np. „nono” zamiast „nonno”). Traktuj to jako zabawę.</p>';
      main.innerHTML = h;
      bind();
    }
    function bind() {
      $('#all').onclick = function () { if (running) { stop(); return; } playSeq(0, -1); };
      $('#rate').onclick = function () { rate = rate < 1 ? 1 : 0.75; render(); };
      $('#tt').onclick = function () { showText = !showText; render(); };
      $('#tp').onclick = function () { showPl = !showPl; render(); };
      $$('.reveal').forEach(function (b) { b.onclick = function () { var i = +b.getAttribute('data-i'); b.parentNode.innerHTML = st(d.lines[i][1]); }; });
      $$('.role').forEach(function (b) { b.onclick = function () { roleplay(+b.getAttribute('data-r')); }; });
      $$('.tb1').forEach(function (b) {
        b.onclick = function () {
          var i = +b.getAttribute('data-i'), a = b.getAttribute('data-a'), line = d.lines[i][1];
          if (a === 'say') { hl(i); SP.speak(line, { rate: rate, onend: function () { hl(-1); } }); }
          if (a === 'rec') {
            if (recIdx === i) { SP.stopRec().then(function (url) { mine[i] = url; recIdx = -1; render(); }); }
            else { SP.startRec().then(function () { recIdx = i; render(); }).catch(function () { G.toast('Brak dostępu do mikrofonu', 'Zezwól przeglądarce na mikrofon'); }); }
          }
          if (a === 'mine') SP.playUrl(mine[i]);
          if (a === 'cmp') { hl(i); SP.speak(line, { rate: rate, onend: function () { setTimeout(function () { SP.playUrl(mine[i], function () { hl(-1); }); }, 300); } }); markDone(); }
          if (a === 'sr') {
            var box = $('#sr' + i); box.innerHTML = '<span class="muted">Słucham… powiedz kwestię.</span>';
            try {
              SP.recognize(function (err, alts) {
                if (err) { box.innerHTML = '<span class="badc">Nie udało się (' + esc(err) + ').</span>'; return; }
                var exp = norm(line).split(' '), best = 0, bestAlt = alts[0];
                alts.forEach(function (al) { var got = norm(al).split(' '), hit = exp.filter(function (w) { return got.indexOf(w) >= 0; }).length / exp.length; if (hit > best) { best = hit; bestAlt = al; } });
                box.innerHTML = 'Rozpoznano: <span lang="it">„' + esc(bestAlt) + '”</span> – ' + (best >= 1 ? '<b class="okc">wszystkie słowa</b>' : '<b class="mid">' + Math.round(best * 100) + '% słów</b>');
                if (best >= .8) G.addXP(2);
              });
            } catch (e) { box.innerHTML = '<span class="badc">Rozpoznawanie niedostępne.</span>'; }
          }
        };
      });
    }
    function hl(i) { $$('.bub').forEach(function (b) { b.classList.toggle('now', +b.getAttribute('data-i') === i); }); var el = $('.bub.now'); if (el && el.scrollIntoView) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
    function stop() { stopFlag = true; running = false; if ('speechSynthesis' in window) speechSynthesis.cancel(); hl(-1); $('#all').innerHTML = ic('play') + ' Cały dialog'; $('#rp').innerHTML = ''; }
    function playSeq(i, userRole) {
      stopFlag = false; running = true; $('#all').innerHTML = ic('stop') + ' Zatrzymaj';
      (function step(i) {
        if (stopFlag) return;
        if (i >= d.lines.length) { running = false; hl(-1); $('#all').innerHTML = ic('play') + ' Cały dialog'; $('#rp').innerHTML = userRole >= 0 ? '<div class="card note"><b>Koniec scenki.</b> Spróbuj teraz drugiej roli albo ukryj tekst.</div>' : ''; markDone(); return; }
        var l = d.lines[i]; hl(i);
        if (l[0] === userRole) {
          $('#rp').innerHTML = '<div class="card yourturn"><b>Twoja kwestia</b><p>' + esc(l[2]) + '</p><p class="muted small">Powiedz ją na głos po włosku.</p><div class="row"><button class="btn" id="hint">Pokaż tekst</button><button class="btn primary" id="go">Dalej</button></div><div id="hintx"></div></div>';
          $('#hint').onclick = function () { $('#hintx').innerHTML = '<p lang="it" class="ua">' + st(l[1]) + '</p>' + say(l[1]); };
          $('#go').onclick = function () { $('#rp').innerHTML = ''; step(i + 1); };
          $('#rp').scrollIntoView && $('#rp').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        } else SP.speak(l[1], { rate: rate, onend: function () { setTimeout(function () { step(i + 1); }, 450); } });
      })(i);
    }
    function roleplay(r) { showText = false; render(); playSeq(0, r); }
    function markDone() { if (!S.dialogs[d.id]) { S.dialogs[d.id] = U.today(); G.save(); G.addXP(15); G.checkBadges(); } else G.addXP(3); }
    cleanup = function () { stopFlag = true; if (recIdx >= 0) SP.stopRec(); };
    render();
  };

  /* ============================================================
     DYKTANDO
     ============================================================ */
  V.dyktando = function (dlg) {
    var pool = [];
    UA.DIALOGS.forEach(function (d) { if (!dlg || d.id === dlg) d.lines.forEach(function (l) { pool.push([l[1], l[2]]); }); });
    if (!dlg) UA.WORDS.forEach(function (w) { if (w.ex) pool.push([w.ex, w.exPl]); });
    var item, tries = 0;
    var h = head('Dyktando', 'Posłuchaj zdania i wpisz, co słyszysz. Interpunkcja, wielkość liter i akcenty (à, è…) nie są oceniane.' + (dlg ? ' Zdania z jednego dialogu.' : ''), dlg ? '#/dialog/' + dlg : null);
    h += '<div class="card fc"><div class="row center"><button class="btn primary big-say" id="p1">' + ic('vol') + ' Odsłuchaj</button><button class="btn" id="p2">' + ic('slow') + ' wolno</button><button class="btn ghost" id="hintb">Podpowiedź (PL)</button></div><p id="hint" class="muted center"></p>' +
      '<div class="ansrow"><input id="ans" class="answer" placeholder="wpisz po włosku…"><button class="btn primary" id="chk">Sprawdź</button></div><div id="kbh"></div><div id="res"></div></div>' +
      '<p class="muted small">Zrobione dyktanda (≥ 90%): ' + S.stats.dict + '</p>';
    main.innerHTML = h;
    var inp = $('#ans');
    $('#kbh').appendChild(UA.KB(inp, check));
    function newItem() { item = U.pick(pool); tries = 0; inp.value = ''; inp.disabled = false; $('#res').innerHTML = ''; $('#hint').textContent = ''; $('#chk').textContent = 'Sprawdź'; $('#chk').onclick = check; $('#kbh').style.display = ''; setTimeout(function () { SP.speak(item[0]); }, 300); }
    $('#p1').onclick = function () { SP.speak(item[0]); };
    $('#p2').onclick = function () { SP.speak(item[0], { rate: .65 }); };
    $('#hintb').onclick = function () { $('#hint').textContent = item[1]; };
    function check() {
      var exp = norm(item[0]).split(' '), got = norm(inp.value).split(' ').filter(Boolean);
      if (!got.length) return;
      // najdłuższy wspólny podciąg słów
      var m = exp.length, n = got.length, L = [], i, j;
      for (i = 0; i <= m; i++) { L[i] = []; for (j = 0; j <= n; j++) L[i][j] = 0; }
      for (i = m - 1; i >= 0; i--) for (j = n - 1; j >= 0; j--) L[i][j] = exp[i] === got[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
      var hit = {}; i = 0; j = 0; while (i < m && j < n) { if (exp[i] === got[j]) { hit[i] = 1; i++; j++; } else if (L[i + 1][j] >= L[i][j + 1]) i++; else j++; }
      var score = Object.keys(hit).length / exp.length;
      var words = strip(item[0]).split(/\s+/), sw = item[0].split(/\s+/);
      $('#res').innerHTML = '<div class="verdict ' + (score >= .9 ? 'ok' : score >= .6 ? 'typo' : 'bad') + '"><b>' + Math.round(score * 100) + '%</b> ' + (score >= .9 ? G.praise() : 'Porównaj z wzorem:') + '</div>' +
        '<p class="dict" lang="it">' + sw.map(function (w, k) { return '<span class="' + (hit[k] ? 'okw' : 'badw') + '">' + st(w) + '</span>'; }).join(' ') + ' ' + say(item[0]) + '</p><p class="muted">' + esc(item[1]) + '</p>';
      inp.disabled = true; $('#kbh').style.display = 'none';
      G.addXP(Math.round(score * 8)); G.sfx(score >= .9 ? 'ok' : 'bad');
      if (score >= .9) { S.stats.dict++; G.save(); G.checkBadges(); }
      $('#chk').textContent = 'Następne'; $('#chk').onclick = newItem;
      void words;
    }
    newItem();
  };

  /* ============================================================
     GRAMATYKA KONTRASTOWA
     ============================================================ */
  V.gramatyka = function () {
    var h = head('Gramatyka', 'Bez pełnego kursu – tylko to, co działa inaczej niż w polskim i gdzie Polak się myli: rodzajnik, szyk, przypadki, Perfekt.');
    h += '<section class="dlist">' + UA.GRAMMAR.map(function (g, i) {
      var sc = S.grammar[g.id];
      return '<a class="card dl" href="#/lekcja/' + g.id + '"><span class="num">' + (i + 1) + '</span><div><b>' + esc(g.t) + '</b><small>' + g.quiz.length + ' pytań</small></div>' + (sc != null ? '<span class="tag ' + (sc >= .75 ? 'sim-t' : 'sim-p') + '">' + Math.round(sc * 100) + '%</span>' : '') + '</a>';
    }).join('') + '</section>';
    main.innerHTML = h;
  };
  V.lekcja = function (id) {
    var g = UA.GRAMMAR.filter(function (x) { return x.id === id; })[0]; if (!g) { location.hash = '#/gramatyka'; return; }
    var idx = UA.GRAMMAR.indexOf(g), nxt = UA.GRAMMAR[idx + 1];
    var h = head(esc(g.t), '', '#/gramatyka') + '<section class="card lesson" lang="pl">' + g.b + '</section>';
    h += '<h2 class="sec">Sprawdź się</h2>' + g.quiz.map(function (q, i) {
      return '<div class="card qz" data-q="' + i + '"><p><b>' + (i + 1) + '.</b> ' + esc(q[0]) + '</p><div class="opts">' + q[1].map(function (o, k) { return '<button class="btn opt" data-k="' + k + '" lang="it">' + st(o) + '</button>'; }).join('') + '</div></div>';
    }).join('') + '<div id="sum"></div>';
    main.innerHTML = h;
    var answered = 0, good = 0;
    $$('.qz').forEach(function (box) {
      var q = g.quiz[+box.getAttribute('data-q')];
      $$('.opt', box).forEach(function (b) {
        b.onclick = function () {
          var k = +b.getAttribute('data-k');
          $$('.opt', box).forEach(function (x) { x.disabled = true; if (+x.getAttribute('data-k') === q[2]) x.classList.add('right'); });
          if (k === q[2]) { good++; G.addXP(3); G.sfx('ok'); } else { b.classList.add('wrong'); G.sfx('bad'); }
          SP.speak(q[1][q[2]]);
          answered++;
          if (answered === g.quiz.length) {
            var sc = good / g.quiz.length; S.grammar[g.id] = Math.max(S.grammar[g.id] || 0, sc); G.save(); G.checkBadges();
            $('#sum').innerHTML = '<section class="card empty"><h2>' + good + '/' + g.quiz.length + '</h2><p>' + (sc >= .75 ? 'Lekcja zaliczona.' : 'Przeczytaj jeszcze raz tabelę i spróbuj ponownie.') + '</p><div class="row">' + (nxt ? '<a class="btn primary" href="#/lekcja/' + nxt.id + '">Następna: ' + esc(nxt.t) + '</a>' : '<a class="btn primary" href="#/gramatyka">Lista lekcji</a>') + '<button class="btn" id="redo">Powtórz</button></div></section>';
            $('#redo').onclick = route;
          }
        };
      });
    });
  };

  /* ============================================================
     ALFABET
     ============================================================ */
  V.alfabet = function (mode) {
    if (mode === 'quiz') return abcQuiz();
    var h = head('Litery i dźwięki', 'Włoski czyta się prawie tak, jak się pisze – ale c, g, h, gli, gn, sc i z działają inaczej niż po polsku. Kropka oznacza pułapkę dla Polaka.');
    h += '<div class="row"><a class="btn primary" href="#/alfabet/quiz">' + ic('target') + ' Ćwiczenie: usłysz i wybierz zapis</a><span class="muted">Obejrzane: ' + Object.keys(S.stats.abc).length + '/' + UA.ALPHABET.length + '</span></div>';
    h += '<div id="det"></div><section class="abc de">' + UA.ALPHABET.map(function (a, i) {
      return '<button class="lt-tile ' + (S.stats.abc[i] ? 'seen' : '') + '" data-i="' + i + '">' + (a[6] ? '<i class="dot" title="inaczej niż po polsku"></i>' : '') + '<b lang="it">' + esc(a[0].replace(/ \(.*\)$/, '')) + '</b><small>' + esc(a[1]) + '</small></button>';
    }).join('') + '</section>';
    main.innerHTML = h;
    $$('.lt-tile').forEach(function (b) {
      b.onclick = function () {
        var i = +b.getAttribute('data-i'), a = UA.ALPHABET[i];
        if (!S.stats.abc[i]) { S.stats.abc[i] = 1; G.save(); G.addXP(1); }
        b.classList.add('seen');
        $$('.lt-tile').forEach(function (x) { x.classList.toggle('on', x === b); });
        $('#det').innerHTML = '<div class="card letter"><div class="lbig" lang="it">' + esc(a[0].replace(/ \(.*\)$/, '')) + '</div><div><p><b>' + esc(a[0]) + '</b> → <b>' + esc(a[1]) + '</b> <span class="ipa">[' + esc(a[2]) + ']</span></p><p>' + esc(a[3]) + '</p>' +
          '<p class="exw">' + say(a[4]) + uaw(a[4], 'bigish') + ' <span class="muted">– ' + esc(a[5]) + '</span></p></div></div>';
        SP.speak(a[4]);
        $('#det').scrollIntoView && $('#det').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      };
    });
  };
  function abcQuiz() {
    function bare(w) { var np = nounParts(w); return np ? np.n : w.ua; }
    var pool = UA.WORDS.filter(function (w) { var s = bare(w); return s.indexOf(' ') < 0 && s.length >= 3 && s.length <= 11 && w.pos !== 'ф'; });
    var k = 0, good = 0, N = 10;
    main.innerHTML = head('Usłysz i wybierz zapis', 'Posłuchaj słowa i wybierz, jak się je pisze. Ćwiczy c/ch, g/gh, gli, gn, sc i spółgłoski podwójne.', '#/alfabet') + '<div class="sessbar"></div><div id="stage"></div>';
    function q() {
      if (k >= N) { $('#stage').innerHTML = '<section class="card empty"><h2>' + good + '/' + N + '</h2><div class="row"><button class="btn primary" id="again">Jeszcze raz</button><a class="btn" href="#/alfabet">Litery i dźwięki</a></div></section>'; $('#again').onclick = abcQuiz; return; }
      var w = U.pick(pool), right = bare(w);
      var others = U.shuffle(pool.filter(function (x) { return x !== w && Math.abs(bare(x).length - right.length) <= 2 && bare(x)[0].toLowerCase() === right[0].toLowerCase(); }).concat(U.shuffle(pool).slice(0, 6))).map(bare).filter(function (t, i, a) { return t !== right && a.indexOf(t) === i; }).slice(0, 3);
      var opts = U.shuffle([right].concat(others));
      $('.sessbar').innerHTML = bar(k, N) + '<span>' + (k + 1) + '/' + N + '</span>';
      $('#stage').innerHTML = '<div class="card fc qcard">' + listenBtn(right) + '</div><div class="opts">' + opts.map(function (o) { return '<button class="btn opt" data-o="' + esc(o) + '"><span lang="it" class="ua">' + esc(o) + '</span></button>'; }).join('') + '</div><div id="fb"></div>';
      setTimeout(function () { SP.speak(right); }, 250);
      $$('.opt').forEach(function (b) {
        b.onclick = function () {
          $$('.opt').forEach(function (x) { x.disabled = true; if (x.getAttribute('data-o') === right) x.classList.add('right'); });
          if (b.getAttribute('data-o') === right) { good++; G.addXP(2); G.sfx('ok'); } else { b.classList.add('wrong'); G.sfx('bad'); }
          SP.speak(right);
          $('#fb').innerHTML = '<p class="center">' + uaw(w.ua) + ' – ' + esc(w.pl) + '</p><button class="btn primary block" id="nx">Dalej</button>'; $('#nx').onclick = function () { k++; q(); };
        };
      });
    }
    q();
  }

  /* ============================================================
     WIĘCEJ (menu na telefonie) i USTAWIENIA
     ============================================================ */
  V.wiecej = function () {
    main.innerHTML = head('Więcej') + '<section class="dlist">' + NAV.filter(function (n) { return !n[3]; }).map(function (n) {
      return '<a class="card dl" href="#/' + n[0] + '">' + ic(n[2]) + '<div><b>' + n[1] + '</b></div>' + ic('next') + '</a>';
    }).join('') + '</section>';
  };
  V.ustawienia = function () {
    var s = S.settings, vs = SP.voiceStatus();
    var h = head('Ustawienia');
    h += '<section class="card form">' +
      '<label>Nowe słowa dziennie <input type="number" id="npd" min="0" max="50" value="' + s.newPerDay + '"></label>' +
      '<label>Cel dzienny (XP) <input type="number" id="goal" min="10" max="500" step="10" value="' + s.goal + '"></label>' +
      '<label class="sw"><input type="checkbox" id="gen"' + (s.gender !== false ? ' checked' : '') + '> Kolory rodzajników (il / la)</label>' +
      '<label class="sw"><input type="checkbox" id="ap"' + (s.autoplay ? ' checked' : '') + '> Automatycznie czytaj słowo na karcie</label>' +
      '<label class="sw"><input type="checkbox" id="kb"' + (s.sysKb ? ' checked' : '') + '> Używaj klawiatury systemowej (pasek à è é ì ò ù zostaje)</label>' +
      '<label class="sw"><input type="checkbox" id="snd"' + (s.sound ? ' checked' : '') + '> Dźwięki</label>' +
      '<label>Tempo mowy <select id="rate"><option value="0.75"' + (s.rate < 1 ? ' selected' : '') + '>0,75×</option><option value="1"' + (s.rate >= 1 ? ' selected' : '') + '>1×</option></select></label>' +
      '<label>Motyw <select id="th"><option value="">jasny śródziemnomorski</option><option value="dark"' + (s.theme === 'dark' ? ' selected' : '') + '>ciemny (wieczór w Toskanii)</option></select></label></section>';
    h += '<section class="card"><h2>' + ic('vol') + ' Głos</h2><p>' + (vs.ok ? 'Używany głos: <b>' + esc(vs.name) + '</b>' : esc(vs.msg)) + '</p><button class="btn" data-say="Ciao! Questa è la lingua italiana.">' + ic('play') + ' Test głosu</button></section>';
    if (!vs.ok) h += voiceHelp(vs);
    h += '<section class="card"><h2>Postęp</h2><p class="muted">Postęp jest zapisany tylko w tej przeglądarce. Zrób kopię, żeby przenieść go na inne urządzenie.</p><div class="row"><button class="btn" id="exp">Eksportuj (plik)</button><label class="btn">Importuj<input type="file" id="imp" accept=".json,application/json" hidden></label><button class="btn danger" id="rst">Wyzeruj wszystko</button></div></section>';
    h += '<section class="card note"><h2>O treściach</h2><p>' + UA.WORDS.length + ' zwrotów i słów w ' + UA.TOPICS.length + ' lekcjach (18 etapów podróży + A2–C2), ' + UA.SCENES.length + ' rozmów, ' + UA.DIALOGS.length + ' dialogów, ' + UA.MENU.length + ' dań w dekoderze menu, ' + (UA.TEXTS || []).length + ' czytanek, ' + UA.FRIENDS.length + ' fałszywych przyjaciół, ' + UA.GRAMMAR.length + ' lekcji gramatyki.</p><p><b>Ważne:</b> treść przygotowano bez udziału native speakera. Zasady (np. kasowanie biletów, ZTL, opłaty) mogą się zmieniać i różnić między regionami – przed wyjazdem sprawdź aktualne informacje.</p></section>';
    main.innerHTML = h;
    function upd(k, v) { s[k] = v; G.save(); }
    $('#npd').onchange = function () { upd('newPerDay', Math.max(0, Math.min(50, +this.value || 0))); };
    $('#goal').onchange = function () { upd('goal', Math.max(10, +this.value || 50)); renderStatus(); };
    $('#gen').onchange = function () { upd('gender', this.checked); };
    $('#ap').onchange = function () { upd('autoplay', this.checked); };
    $('#kb').onchange = function () { upd('sysKb', this.checked); };
    $('#snd').onchange = function () { upd('sound', this.checked); };
    $('#rate').onchange = function () { upd('rate', +this.value); };
    $('#th').onchange = function () { upd('theme', this.value); applyTheme(); };
    $('#exp').onclick = function () {
      var blob = new Blob([JSON.stringify(S)], { type: 'application/json' }), a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = 'wloski-postep-' + new Date().toISOString().slice(0, 10) + '.json'; a.click();
    };
    $('#imp').onchange = function () {
      var f = this.files[0]; if (!f) return;
      f.text().then(function (t) { var o = JSON.parse(t); if (!o.srs) throw 0; localStorage.setItem(G.KEY, JSON.stringify(o)); location.reload(); }).catch(function () { G.toast('Nieprawidłowy plik', 'To nie jest kopia postępu z tej aplikacji'); });
    };
    $('#rst').onclick = function () { if (confirm('Na pewno usunąć cały postęp? Tego nie da się cofnąć.')) { localStorage.removeItem(G.KEY); location.reload(); } };
  };

  function applyTheme() { var dark = S.settings.theme === 'dark'; document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light'); var m = document.querySelector('meta[name=theme-color]'); if (m) m.setAttribute('content', dark ? '#17120e' : '#f7f1e6'); }
  applyTheme();
  route();
})();

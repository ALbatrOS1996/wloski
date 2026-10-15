/* ============================================================
   TREŚCI: dźwięki, fałszywi przyjaciele, wymowa, gramatyka, dialogi,
   ściągi „Dobrze wiedzieć”, symulacje rozmów, dekoder menu
   ============================================================ */
var UA = window.UA || (window.UA = {});

/* ---------- Litery i dźwięki ----------
   [zapis, jak czytać (PL), IPA, opis dla Polaka, przykład, znaczenie, pułapka dla Polaka?] */
UA.ALPHABET = [
  ['c + e, i', 'cz', 'tʃ', 'przed e, i litera c to miękkie „cz” (bliżej polskiego ć)', 'ciao', 'cześć', 1],
  ['c + a, o, u', 'k', 'k', 'przed a, o, u i spółgłoskami – k', 'casa', 'dom'],
  ['ch', 'k', 'k', 'ch to zawsze k (nie polskie ch!)', 'chiesa', 'kościół', 1],
  ['g + e, i', 'dż', 'dʒ', 'przed e, i litera g to „dż”', 'gelato', 'lody', 1],
  ['gh', 'g', 'g', 'gh to twarde g przed e, i', 'spaghetti', 'spaghetti', 1],
  ['gli', 'li (miękkie)', 'ʎ', 'miękkie „l” – jak „lj” wymówione razem, nie „gli”', 'figlio', 'syn', 1],
  ['gn', 'ń', 'ɲ', 'jak polskie ń', 'gnocchi', 'kluski', 1],
  ['sc + e, i', 'sz', 'ʃ', 'przed e, i – „sz”', 'pesce', 'ryba', 1],
  ['sch', 'sk', 'sk', 'sch to „sk”', 'scherzo', 'żart', 1],
  ['z', 'c / dz', 'ts / dz', 'raz jak c (pizza [pittsa]), raz jak dz (zero) – trzeba osłuchać', 'pizza', 'pizza', 1],
  ['s', 's / z', 's / z', 'między samogłoskami często jak z (casa [kaza] na północy)', 'rosa', 'róża'],
  ['h', '(nieme)', '', 'h nigdy nie jest wymawiane: ho [o], hanno [anno]', 'ho', 'mam', 1],
  ['qu', 'kw', 'kw', 'jak polskie „kw”', 'questo', 'ten'],
  ['r', 'r', 'r', 'drżące r, jak polskie – tu Polak ma łatwo', 'Roma', 'Rzym'],
  ['spółgłoski podwójne', 'dłużej', 'ːː', 'podwojona spółgłoska trwa dłużej (pala – palla). To zmienia znaczenie!', 'nonno', 'dziadek', 1],
  ['e (otwarte / zamknięte)', 'e', 'ɛ / e', 'é zamknięte (perché), è otwarte (caffè) – akcent na końcu wyrazu zawsze pisany', 'caffè', 'kawa'],
  ['akcent', '–', 'ˈ', 'zwykle na przedostatniej sylabie (jak w polskim!), ale bywa na 3. od końca: tàvolo, mùsica', 'tavolo', 'stół', 1],
  ['ci + a, o, u', 'cz', 'tʃ', 'i po c/g przed a, o, u jest nieme – tylko zmiękcza: ciao [czao], giorno [dżorno]', 'giorno', 'dzień', 1]
];

/* ---------- Fałszywi przyjaciele ----------
   [włoski, prawdziwe znaczenie, mylące polskie skojarzenie, jak powiedzieć to polskie słowo po włosku, przykład, przykład PL] */
UA.FRIENDS = [
  ['la camera', 'pokój', 'kamera', 'la videocamera', 'La camera è al terzo piano.', 'Pokój jest na trzecim piętrze.'],
  ['la fermata', 'przystanek', 'fermata (w muzyce)', '–', 'Scendo alla prossima fermata.', 'Wysiadam na następnym przystanku.'],
  ['la pasta', 'makaron; ciastko', 'pasta (do zębów)', 'il dentifricio', 'Due paste alla crema, per favore.', 'Dwa ciastka z kremem, proszę.'],
  ['la fattoria', 'gospodarstwo rolne', 'faktura', 'la fattura', 'Compriamo il formaggio in fattoria.', 'Kupujemy ser w gospodarstwie.'],
  ['il cantiere', 'plac budowy', 'kantor', 'il cambio', 'C’è un cantiere davanti all’hotel.', 'Przed hotelem jest plac budowy.'],
  ['la libreria', 'księgarnia', 'biblioteka', 'la biblioteca', 'La libreria vende anche mappe.', 'Księgarnia sprzedaje też mapy.'],
  ['la firma', 'podpis', 'firma', 'l’azienda, la ditta', 'Qui ci vuole la sua firma.', 'Tu potrzebny jest pana podpis.'],
  ['il preservativo', 'prezerwatywa', 'konserwant', 'il conservante', 'Senza conservanti, per favore!', 'Bez konserwantów, proszę!'],
  ['la macchina', 'samochód (też maszyna)', 'tylko maszyna', '–', 'Abbiamo noleggiato una macchina.', 'Wynajęliśmy samochód.'],
  ['il latte', 'mleko', 'latte (kawa z mlekiem)', 'il latte macchiato / il caffellatte', 'Un latte macchiato, per favore.', 'Poproszę latte macchiato.'],
  ['la coincidenza', 'połączenie przesiadkowe; zbieg okoliczności', 'tylko zbieg okoliczności', '–', 'Ho perso la coincidenza a Bologna.', 'Uciekło mi połączenie w Bolonii.'],
  ['la patente', 'prawo jazdy', 'patent', 'il brevetto', 'Ho dimenticato la patente.', 'Zapomniałem prawa jazdy.'],
  ['l’autista', 'kierowca', 'autysta', 'autistico', 'L’autista del taxi è simpatico.', 'Taksówkarz jest sympatyczny.'],
  ['bravo', 'zdolny, dobry w czymś', 'brawurowy', 'audace', 'È un cuoco bravissimo.', 'To świetny kucharz.'],
  ['la cura', 'leczenie; troska', 'kura (ptak)', 'la gallina', 'La cura è lunga.', 'Leczenie jest długie.'],
  ['i parenti', 'krewni', 'rodzice', 'i genitori', 'A Natale vengono tutti i parenti.', 'Na Boże Narodzenie przyjeżdżają wszyscy krewni.'],
  ['la materia', 'przedmiot szkolny; materia', 'tylko materia (tkanina)', 'la stoffa', 'La mia materia preferita è la storia.', 'Mój ulubiony przedmiot to historia.'],
  ['morbido', 'miękki', 'morbid, chorobliwy', 'morboso', 'Il cuscino è morbido.', 'Poduszka jest miękka.'],
  ['la pensione', 'emerytura; pensjonat', 'pensja', 'lo stipendio', 'Dormiamo in una piccola pensione.', 'Śpimy w małym pensjonacie.'],
  ['il romanzo', 'powieść', 'romans', 'la storia d’amore', 'Leggo un romanzo di Elena Ferrante.', 'Czytam powieść Eleny Ferrante.'],
  ['la bufala', 'fake news; bawolica (mozzarella di bufala)', 'bufon', 'il buffone', 'Questa notizia è una bufala!', 'Ta wiadomość to fejk!'],
  ['la cassa', 'kasa (w sklepie)', 'kasa = pieniądze', 'i soldi', 'Si paga alla cassa.', 'Płaci się przy kasie.'],
  ['il camino', 'kominek', 'komin', 'il comignolo', 'Accendiamo il camino.', 'Rozpalmy w kominku.']
];

/* ---------- Pary minimalne (słuchanie) ---------- */
UA.PAIRS = [
  { id: 'doppie', name: 'Pojedyncza czy podwójna spółgłoska?', items: [
    ['caro', 'drogi', 'carro', 'wóz'], ['sete', 'pragnienie', 'sette', 'siedem'], ['nono', 'dziewiąty', 'nonno', 'dziadek'],
    ['pala', 'łopata', 'palla', 'piłka'], ['papa', 'papież', 'pappa', 'papka'], ['capello', 'włos', 'cappello', 'kapelusz'],
    ['fato', 'los', 'fatto', 'zrobiony; fakt'], ['casa', 'dom', 'cassa', 'kasa'], ['camino', 'kominek', 'cammino', 'droga, marsz']
  ]},
  { id: 'gli', name: 'gli / gn czy l / n?', items: [
    ['figlio', 'syn', 'filo', 'nić'], ['moglie', 'żona', 'molle', 'miękki'], ['vegli', 'czuwasz', 'veli', 'welony'], ['sogno', 'sen', 'sono', 'jestem']
  ]}
];

/* Pojedyncza czy podwójna? – pisownia (słowo|znaczenie) */
UA.DOUBLE = ['nonno|dziadek', 'sette|siedem', 'palla|piłka', 'cappello|kapelusz', 'fatto|zrobiony', 'cassa|kasa', 'carro|wóz', 'pappa|papka',
  'caro|drogi', 'sete|pragnienie', 'pala|łopata', 'capello|włos', 'casa|dom', 'nono|dziewiąty', 'pizza|pizza', 'mozzarella|mozzarella',
  'spaghetti|spaghetti', 'cappuccino|cappuccino', 'biglietto|bilet', 'treno|pociąg', 'ragazzo|chłopak', 'piazza|plac', 'pane|chleb', 'panna|bita śmietana'];

/* ---------- Zasady wymowy (karty) ---------- */
UA.RULES = [
  { t: 'c i g: twarde czy miękkie?', b: 'Przed e, i litery c i g brzmią miękko: ciao [czao], gelato [dżelato]. Przed a, o, u – twardo: casa, gatto. Żeby zmiękczyć przed a, o, u, dodaje się nieme i (giorno, ciao); żeby utwardzić przed e, i – dodaje się h (che [ke], spaghetti).', ex: ['ciao', 'casa', 'gelato', 'spaghetti'] },
  { t: 'ch to k, h jest nieme', b: 'Polskie oko czyta ch jak „h”, a po włosku to k: chiesa [kjeza], chi [ki]. Samo h nigdy nie jest wymawiane: ho [o], hanno [anno].', ex: ['chiesa', 'che', 'ho', 'hanno'] },
  { t: 'Spółgłoski podwójne trwają dłużej', b: 'To najważniejsza różnica brzmieniowa: pala – palla, sete – sette, nono – nonno. Podwójną spółgłoskę wymawiaj z lekkim „zatrzymaniem” – jak w polskim „lekko” czy „Anna”. Pomylenie zmienia sens (anno – rok, ano – odbyt!).', ex: ['sette', 'nonno', 'palla', 'anno'] },
  { t: 'gli i gn', b: 'gli to miękkie l [ʎ] (figlio, famiglia) – nie czytaj „g-li”. gn to polskie ń: gnocchi [ńokki], bagno [bańo].', ex: ['figlio', 'famiglia', 'gnocchi', 'bagno'] },
  { t: 'sc + e, i = sz', b: 'scena, pesce, uscita – sz. Ale sch to sk: scherzo, schiena.', ex: ['pesce', 'uscita', 'scherzo', 'scendere'] },
  { t: 'z: c czy dz?', b: 'Litera z to raz [ts] jak polskie c (pizza, grazie), raz [dz] (zero, zanzara). Reguł jest mało – warto osłuchać się ze słowami.', ex: ['pizza', 'grazie', 'zero', 'zucchero'] },
  { t: 'Akcent – zwykle jak po polsku', b: 'Najczęściej na przedostatniej sylabie (amìco), ale sporo słów ma akcent na trzeciej od końca (tàvolo, mùsica, àbito). Akcent na ostatniej sylabie zawsze się pisze: caffè, città, perché.', ex: ['amico', 'tavolo', 'musica', 'città'] },
  { t: 'Samogłoski czyste i pełne', b: 'Włoskie samogłoski są wyraźne, także na końcu wyrazu: nie „połykaj” końcówek (grazie to [gratsje], nie „graci”). Nie ma redukcji jak w rosyjskim.', ex: ['grazie', 'prego', 'arrivederci', 'buongiorno'] },
  { t: 'Melodia pytania', b: 'Pytanie często różni się od zdania oznajmującego tylko intonacją: Parli italiano. – Parli italiano? Ton idzie w górę na końcu, jak w polskim.', ex: ['Parli italiano?', 'È lontano?', 'C’è un bagno?'] }
];

/* ---------- Gramatyka kontrastowa ---------- */
UA.GRAMMAR = [
  { id: 'articoli', t: 'Rodzajniki: il, lo, la, l’',
    b: '<p>Polski nie ma rodzajników, włoski używa ich prawie zawsze. Forma zależy od rodzaju i <b>pierwszej litery</b> wyrazu:</p><table class="tbl"><tr><td><span class="g-der">il</span> treno / i treni</td><td>męski, przed zwykłą spółgłoską</td></tr><tr><td><span class="g-der">lo</span> scontrino / gli scontrini</td><td>męski, przed s+spółgłoska, z, gn, ps, y</td></tr><tr><td>l’aeroporto / gli aeroporti</td><td>męski, przed samogłoską</td></tr><tr><td><span class="g-die">la</span> stazione / le stazioni</td><td>żeński</td></tr><tr><td>l’uscita / le uscite</td><td>żeński, przed samogłoską</td></tr></table><p>Nieokreślone: <b>un</b> treno, <b>uno</b> scontrino, <b>una</b> camera, <b>un’</b>uscita. Rzeczowniki na <b>-o</b> to zwykle rodzaj męski, na <b>-a</b> – żeński, na <b>-e</b> – trzeba zapamiętać (il pane, la stazione).</p>',
    quiz: [
      ['___ zucchero', ['il zucchero', 'lo zucchero', 'la zucchero'], 1],
      ['___ biglietti (lm.)', ['i biglietti', 'gli biglietti', 'le biglietti'], 0],
      ['___ uscita', ['lo uscita', 'la uscita', 'l’uscita'], 2],
      ['___ stazione', ['il stazione', 'la stazione', 'lo stazione'], 1]
    ] },
  { id: 'preposizioni', t: 'Przyimki z rodzajnikiem: al, nel, dal…',
    b: '<p>Przyimki <b>a, di, da, in, su</b> zlewają się z rodzajnikiem:</p><table class="tbl"><tr><td>a + il = <b>al</b></td><td>al mare, al bar</td></tr><tr><td>in + la = <b>nella</b></td><td>nella camera</td></tr><tr><td>di + il = <b>del</b></td><td>il prezzo del biglietto</td></tr><tr><td>da + il = <b>dal</b></td><td>dal binario 3</td></tr><tr><td>su + la = <b>sulla</b></td><td>sulla mappa</td></tr></table><p>Pułapka: kierunek do miasta to <b>a</b> (vado a Roma), do kraju lub regionu <b>in</b> (vado in Italia, in Toscana), do osoby <b>da</b> (vado dal medico).</p>',
    quiz: [
      ['Jadę do Rzymu.', ['Vado in Roma.', 'Vado a Roma.', 'Vado da Roma.'], 1],
      ['Idę do lekarza.', ['Vado al medico.', 'Vado dal medico.', 'Vado nel medico.'], 1],
      ['Pociąg odjeżdża z peronu 5.', ['Il treno parte dal binario 5.', 'Il treno parte del binario 5.', 'Il treno parte al binario 5.'], 0],
      ['Jedziemy do Toskanii.', ['Andiamo a Toscana.', 'Andiamo in Toscana.', 'Andiamo da Toscana.'], 1]
    ] },
  { id: 'lei', t: 'Lei – forma grzecznościowa',
    b: '<p>Do obcych dorosłych (kelner, recepcja, konduktor) mówi się <b>Lei</b> + czasownik w 3. osobie lp. – bardzo podobnie jak polskie „pan/pani”:</p><table class="tbl"><tr><td>Parla inglese?</td><td>Czy pan mówi po angielsku?</td></tr><tr><td>Come si chiama?</td><td>Jak się pan(i) nazywa?</td></tr><tr><td>Scusi! / Mi scusi!</td><td>Przepraszam (pana/panią)!</td></tr><tr><td>Può ripetere?</td><td>Może pan powtórzyć?</td></tr></table><p>Na „ty” (<b>tu</b>) mówi się do młodych, w barze wśród rówieśników i gdy ktoś zaproponuje: <i>Diamoci del tu!</i> Zwróć uwagę na różnicę: <b>scusa</b> (do kolegi) – <b>scusi</b> (do obcego).</p>',
    quiz: [
      ['Do kelnera: „Przepraszam!”', ['Scusa!', 'Scusi!', 'Scusate!'], 1],
      ['Czy może pan powtórzyć?', ['Puoi ripetere?', 'Può ripetere?', 'Potete ripetere?'], 1],
      ['Do kolegi: „Skąd jesteś?”', ['Di dov’è?', 'Di dove sei?', 'Di dove siete?'], 1]
    ] },
  { id: 'passato', t: 'Passato prossimo: avere czy essere?',
    b: '<p>Przeszłość w mowie tworzy się z <b>avere</b> lub <b>essere</b> + imiesłów:</p><table class="tbl"><tr><td>Ho mangiato la pizza.</td><td>Zjadłem pizzę.</td></tr><tr><td>Siamo andati a Roma.</td><td>Pojechaliśmy do Rzymu.</td></tr></table><p><b>essere</b> biorą czasowniki ruchu i zmiany stanu: andare, venire, arrivare, partire, uscire, entrare, salire, scendere, restare, nascere, morire, oraz zwrotne (mi sono alzato). Wtedy imiesłów zgadza się z podmiotem: <i>Anna è arrivat<b>a</b>, siamo partit<b>i</b></i>. Reszta – <b>avere</b>.</p>',
    quiz: [
      ['Przyjechaliśmy wczoraj.', ['Abbiamo arrivato ieri.', 'Siamo arrivati ieri.', 'Siamo arrivato ieri.'], 1],
      ['Zjadłam za dużo.', ['Ho mangiato troppo.', 'Sono mangiata troppo.', 'Ho mangiata troppo.'], 0],
      ['Anna wyjechała.', ['Anna ha partito.', 'Anna è partito.', 'Anna è partita.'], 2],
      ['Wstałem o siódmej.', ['Ho alzato alle sette.', 'Mi sono alzato alle sette.', 'Sono alzato alle sette.'], 1]
    ] },
  { id: 'piacere', t: 'Mi piace – „podoba mi się”',
    b: '<p><b>piacere</b> działa jak polskie „podobać się”: to, co się podoba, jest podmiotem. Dlatego przy liczbie mnogiej mówimy <b>piacciono</b>:</p><table class="tbl"><tr><td>Mi piace la pizza.</td><td>Lubię pizzę (podoba mi się).</td></tr><tr><td>Mi piacciono gli spaghetti.</td><td>Lubię spaghetti (lm.).</td></tr><tr><td>Ti piace viaggiare?</td><td>Lubisz podróżować?</td></tr><tr><td>Le piace?</td><td>Czy panu/pani się podoba?</td></tr><tr><td>Non mi è piaciuto.</td><td>Nie podobało mi się.</td></tr></table>',
    quiz: [
      ['Lubię lody.', ['Mi piace il gelato.', 'Io piaccio il gelato.', 'Mi piacciono il gelato.'], 0],
      ['Podobają mi się te buty.', ['Mi piace queste scarpe.', 'Mi piacciono queste scarpe.', 'Io piaccio queste scarpe.'], 1],
      ['Czy panu smakowało? (podobało się)', ['Le è piaciuto?', 'Ti piace?', 'Lei piace?'], 0]
    ] },
  { id: 'cine', t: 'Ci i ne – małe słowa, duża rola',
    b: '<p><b>ci</b> = „tam, tu”: <i>C’è un bar? – Sì, ci sono due bar.</i> <i>Vai a Roma? – Sì, ci vado domani.</i></p><p><b>ne</b> = „tego, z tego” (ilość): <i>Quante pizze? – Ne prendo due.</i> (Biorę dwie [z nich].) <i>Vuoi del vino? – Sì, ne voglio un po’.</i></p><table class="tbl"><tr><td>Ci vuole un’ora.</td><td>Potrzeba godziny.</td></tr><tr><td>Ne ho due.</td><td>Mam dwa (z nich).</td></tr><tr><td>Non ce n’è più.</td><td>Już tego nie ma.</td></tr></table>',
    quiz: [
      ['Ile biletów? – Biorę trzy.', ['Ci prendo tre.', 'Ne prendo tre.', 'Prendo tre ne.'], 1],
      ['Jedziesz do Wenecji? – Tak, jadę tam jutro.', ['Sì, ne vado domani.', 'Sì, ci vado domani.', 'Sì, vado ci domani.'], 1],
      ['Ile to zajmie? – Potrzeba dwóch godzin.', ['Ci vogliono due ore.', 'Ne vogliono due ore.', 'Ci vuole due ore.'], 0]
    ] },
  { id: 'vorrei', t: 'Grzeczne prośby: vorrei, posso, mi dà',
    b: '<p>W podróży najczęściej prosisz. Tryb warunkowy brzmi uprzejmiej niż „chcę”:</p><table class="tbl"><tr><td>Voglio un caffè.</td><td>Chcę kawę. (zbyt bezpośrednio)</td></tr><tr><td><b>Vorrei</b> un caffè.</td><td>Poproszę kawę.</td></tr><tr><td><b>Mi dà</b> un etto di prosciutto?</td><td>Poproszę 10 dag szynki.</td></tr><tr><td><b>Potrebbe</b> chiamare un taxi?</td><td>Czy mógłby pan wezwać taksówkę?</td></tr><tr><td><b>Posso</b> pagare con la carta?</td><td>Czy mogę zapłacić kartą?</td></tr></table><p>Przy ladzie w barze bardzo naturalne jest też po prostu <i>Un caffè, per favore</i> albo <i>Per me un cappuccino</i>.</p>',
    quiz: [
      ['Najgrzeczniej: „Poproszę pokój dwuosobowy.”', ['Voglio una camera doppia.', 'Vorrei una camera doppia.', 'Dammi una camera doppia.'], 1],
      ['Czy mógłby pan mi pomóc?', ['Potrebbe aiutarmi?', 'Puoi aiutarmi, signore?', 'Aiutami!'], 0],
      ['Czy mogę tu usiąść?', ['Posso sedermi qui?', 'Vorrei sedermi qui posso?', 'Mi dà sedermi qui?'], 0]
    ] },
  { id: 'congiuntivo', t: 'Congiuntivo – tryb „wydaje mi się”',
    b: '<p>Po wyrażeniach opinii, życzenia i niepewności włoski używa trybu <b>congiuntivo</b> – po polsku zwykle nic się nie zmienia:</p><table class="tbl"><tr><td>Penso che <b>sia</b> chiuso.</td><td>Myślę, że jest zamknięte.</td></tr><tr><td>Spero che <b>faccia</b> bel tempo.</td><td>Mam nadzieję, że będzie ładna pogoda.</td></tr><tr><td>È meglio che <b>prendiamo</b> il treno.</td><td>Lepiej, żebyśmy pojechali pociągiem.</td></tr><tr><td>Benché <b>sia</b> tardi…</td><td>Chociaż jest późno…</td></tr></table><p>Najczęstsze formy: essere → <b>sia</b>, avere → <b>abbia</b>, fare → <b>faccia</b>, andare → <b>vada</b>.</p>',
    quiz: [
      ['Myślę, że muzeum jest otwarte.', ['Penso che il museo è aperto.', 'Penso che il museo sia aperto.', 'Penso il museo sia aperto.'], 1],
      ['Mam nadzieję, że masz czas.', ['Spero che tu abbia tempo.', 'Spero che tu hai tempo.', 'Spero tu avere tempo.'], 0],
      ['Chociaż pada, idziemy.', ['Benché piove, andiamo.', 'Benché piova, andiamo.', 'Benché piovere, andiamo.'], 1]
    ] }
];

/* ---------- Dialogi (linie: [rola, włoski, polski]) ---------- */
UA.DIALOGS = [
  { id: 'bar', unit: 'tr_bar', t: 'W barze rano', ua: 'Al bar', roles: ['Barista', 'Turista'], lines: [
    [0, 'Buongiorno! Cosa le preparo?', 'Dzień dobry! Co podać?'],
    [1, 'Buongiorno! Un cappuccino e un cornetto alla crema, per favore.', 'Dzień dobry! Cappuccino i rogalik z kremem, proszę.'],
    [0, 'Al banco o al tavolo?', 'Przy ladzie czy przy stoliku?'],
    [1, 'Al banco, grazie. Quant’è?', 'Przy ladzie, dziękuję. Ile płacę?'],
    [0, 'Sono tre euro. Lo scontrino lo fa alla cassa.', 'Trzy euro. Paragon w kasie.'],
    [1, 'Va bene. Posso pagare con la carta?', 'Dobrze. Mogę zapłacić kartą?'],
    [0, 'Certo. Ecco il cappuccino.', 'Oczywiście. Proszę, cappuccino.'],
    [1, 'Grazie mille, buona giornata!', 'Bardzo dziękuję, miłego dnia!']
  ]},
  { id: 'ristorante', unit: 'tr_restauracja', t: 'W restauracji', ua: 'Al ristorante', roles: ['Cameriere', 'Cliente'], lines: [
    [0, 'Buonasera! Avete prenotato?', 'Dobry wieczór! Mają państwo rezerwację?'],
    [1, 'Sì, a nome Nowak, per due persone.', 'Tak, na nazwisko Nowak, dla dwóch osób.'],
    [0, 'Prego, accomodatevi. Cosa vi porto da bere?', 'Proszę, siadajcie. Co podać do picia?'],
    [1, 'Mezzo litro di vino rosso della casa e una bottiglia d’acqua naturale.', 'Pół litra czerwonego wina domowego i butelkę wody niegazowanej.'],
    [0, 'Avete già scelto?', 'Czy już państwo wybrali?'],
    [1, 'Come primo le tagliatelle al ragù, e poi una tagliata di manzo.', 'Na pierwsze tagliatelle z ragù, a potem plastry wołowiny.'],
    [1, 'Mia moglie è allergica alle noci. Ci sono noci nel dolce?', 'Moja żona ma alergię na orzechy. Czy w deserze są orzechy?'],
    [0, 'Nel tiramisù no, non si preoccupi.', 'W tiramisu nie, proszę się nie martwić.'],
    [1, 'Perfetto. E alla fine il conto, per favore.', 'Świetnie. A na koniec rachunek, proszę.'],
    [0, 'Certo. Il coperto è di due euro a persona.', 'Oczywiście. Opłata za nakrycie to dwa euro od osoby.']
  ]},
  { id: 'stazione', unit: 'tr_pociag', t: 'Na dworcu', ua: 'In stazione', roles: ['Bigliettaio', 'Viaggiatore'], lines: [
    [1, 'Buongiorno, un biglietto per Firenze, per favore.', 'Dzień dobry, jeden bilet do Florencji, proszę.'],
    [0, 'Solo andata o andata e ritorno?', 'W jedną stronę czy w obie?'],
    [1, 'Solo andata. A che ora parte il prossimo treno?', 'W jedną stronę. O której odjeżdża najbliższy pociąg?'],
    [0, 'C’è un regionale alle dieci e un Frecciarossa alle dieci e un quarto.', 'Jest regionalny o dziesiątej i Frecciarossa o dziesiątej piętnaście.'],
    [1, 'Il regionale, grazie. Da quale binario parte?', 'Regionalny, dziękuję. Z którego peronu odjeżdża?'],
    [0, 'Dal binario sette. Si ricordi di convalidare il biglietto!', 'Z peronu siódmego. Proszę pamiętać o skasowaniu biletu!'],
    [1, 'Devo cambiare?', 'Czy muszę się przesiadać?'],
    [0, 'No, è diretto. Buon viaggio!', 'Nie, to pociąg bezpośredni. Szczęśliwej podróży!']
  ]},
  { id: 'hotel', unit: 'tr_nocleg', t: 'Zameldowanie w hotelu', ua: 'In albergo', roles: ['Receptionist', 'Ospite'], lines: [
    [1, 'Buonasera, ho una prenotazione a nome Nowak.', 'Dobry wieczór, mam rezerwację na nazwisko Nowak.'],
    [0, 'Benvenuti! Una camera matrimoniale per tre notti, giusto?', 'Witamy! Pokój z łóżkiem małżeńskim na trzy noce, zgadza się?'],
    [1, 'Sì. La colazione è inclusa?', 'Tak. Czy śniadanie jest w cenie?'],
    [0, 'Sì, dalle sette alle dieci. Mi serve un documento, per favore.', 'Tak, od siódmej do dziesiątej. Potrzebuję dokumentu.'],
    [1, 'Ecco il passaporto. Qual è la password del Wi-Fi?', 'Oto paszport. Jakie jest hasło do Wi-Fi?'],
    [0, 'È scritta sulla chiave. La tassa di soggiorno si paga alla partenza.', 'Jest na kluczu. Opłatę miejscową płaci się przy wyjeździe.'],
    [1, 'Possiamo lasciare i bagagli dopo il check-out?', 'Możemy zostawić bagaże po wymeldowaniu?'],
    [0, 'Certo, nel deposito. La camera è al secondo piano, l’ascensore è a destra.', 'Oczywiście, w przechowalni. Pokój jest na drugim piętrze, winda po prawej.']
  ]},
  { id: 'strada', unit: 'tr_droga', t: 'Pytanie o drogę', ua: 'Chiedere la strada', roles: ['Turista', 'Passante'], lines: [
    [0, 'Scusi, come arrivo al Pantheon?', 'Przepraszam, jak dojdę do Panteonu?'],
    [1, 'Vada sempre dritto fino alla piazza, poi giri a sinistra.', 'Proszę iść prosto do placu, potem skręcić w lewo.'],
    [0, 'È lontano?', 'Czy to daleko?'],
    [1, 'No, dieci minuti a piedi.', 'Nie, dziesięć minut pieszo.'],
    [0, 'Me lo può mostrare sulla mappa?', 'Może mi pan pokazać na mapie?'],
    [1, 'Certo: noi siamo qui, il Pantheon è qui, accanto alla fontana.', 'Oczywiście: my jesteśmy tu, Panteon jest tu, obok fontanny.'],
    [0, 'Grazie mille, molto gentile!', 'Bardzo dziękuję, bardzo pan uprzejmy!'],
    [1, 'Prego, buona passeggiata!', 'Proszę bardzo, miłego spaceru!']
  ]},
  { id: 'farmacia', unit: 'tr_apteka', t: 'W aptece', ua: 'In farmacia', roles: ['Farmacista', 'Cliente'], lines: [
    [0, 'Buongiorno, mi dica.', 'Dzień dobry, słucham.'],
    [1, 'Buongiorno, ho una brutta scottatura e mi fa male la testa.', 'Dzień dobry, mam paskudne oparzenie słoneczne i boli mnie głowa.'],
    [0, 'Ha anche la febbre?', 'Ma pan też gorączkę?'],
    [1, 'Un po’, credo. Serve la ricetta?', 'Chyba trochę. Potrzebna jest recepta?'],
    [0, 'No. Le do una crema doposole e un antidolorifico.', 'Nie. Dam panu balsam po opalaniu i coś przeciwbólowego.'],
    [1, 'Quante volte al giorno lo devo prendere?', 'Ile razy dziennie mam to brać?'],
    [0, 'Una compressa ogni otto ore, dopo i pasti. E stia all’ombra!', 'Jedną tabletkę co osiem godzin, po posiłku. I proszę zostać w cieniu!'],
    [1, 'Grazie, quant’è?', 'Dziękuję, ile płacę?']
  ]},
  { id: 'spiaggia', unit: 'tr_plaza', t: 'Na płatnej plaży', ua: 'Al lido', roles: ['Bagnino', 'Turista'], lines: [
    [1, 'Buongiorno, quanto costa un ombrellone con due lettini?', 'Dzień dobry, ile kosztuje parasol z dwoma leżakami?'],
    [0, 'Venticinque euro al giorno, in prima fila trenta.', 'Dwadzieścia pięć euro za dzień, w pierwszym rzędzie trzydzieści.'],
    [1, 'Va bene la seconda fila. Si può fare il bagno oggi?', 'Drugi rząd wystarczy. Można się dziś kąpać?'],
    [0, 'Sì, ma il mare è un po’ mosso. Attenzione alla bandiera rossa.', 'Tak, ale morze jest trochę wzburzone. Uwaga na czerwoną flagę.'],
    [1, 'Ci sono meduse?', 'Są meduzy?'],
    [0, 'Oggi no, per fortuna!', 'Dziś na szczęście nie!']
  ]},
  { id: 'chiacchiere', unit: 'tr_rozmowa', t: 'Rozmowa przy aperitivo', ua: 'Due chiacchiere', roles: ['Giulia', 'Marcin'], lines: [
    [0, 'Ciao! Non sei italiano, vero? Di dove sei?', 'Cześć! Nie jesteś Włochem, prawda? Skąd jesteś?'],
    [1, 'Sono polacco, di Varsavia. Sono qui in vacanza.', 'Jestem Polakiem, z Warszawy. Jestem tu na wakacjach.'],
    [0, 'Che bello! È la prima volta in Italia?', 'Super! Pierwszy raz we Włoszech?'],
    [1, 'No, la terza. Mi piace tantissimo la vostra cucina.', 'Nie, trzeci. Bardzo lubię waszą kuchnię.'],
    [0, 'Parli bene l’italiano! Che lavoro fai?', 'Dobrze mówisz po włosku! Czym się zajmujesz?'],
    [1, 'Faccio l’insegnante di storia. E tu?', 'Jestem nauczycielem historii. A ty?'],
    [0, 'Io lavoro in un museo. Dai, ti offro uno spritz!', 'Pracuję w muzeum. No to stawiam ci spritza!'],
    [1, 'Grazie! Allora alla salute! Cin cin!', 'Dzięki! No to na zdrowie! Cin cin!']
  ]}
];

/* ---------- Dobrze wiedzieć: ściągi kulturowe dla etapów podróży ---------- */
UA.TIPS = {
  tr_podstawy: ['<b>Buongiorno</b> mówi się mniej więcej do 15–16, potem <b>buonasera</b>. <b>Salve</b> pasuje zawsze, gdy nie wiesz, czy być formalnym.', 'Wchodząc do małego sklepu czy baru, zawsze się przywitaj, a wychodząc pożegnaj – to tu standard.', '<b>Prego</b> ma wiele znaczeń: „proszę bardzo”, „słucham?”, „proszę wejść”, „nie ma za co”.'],
  tr_liczby: ['Godziny podaje się często w systemie 24-godzinnym (alle 17:30 – alle diciassette e trenta).', 'Wiele sklepów i kościołów ma przerwę w środku dnia (ok. 13–16), zwłaszcza na południu.', 'W cenach przecinek oddziela centy: 3,50 € = tre euro e cinquanta.'],
  tr_lotnisko: ['Na lotniskach są autobusy dowozowe (<b>navetta</b>) do centrum – zwykle tańsze niż taksówka.', 'Taksówki z lotnisk w Rzymie i Florencji mają często stałą opłatę do centrum – zapytaj przed kursem.'],
  tr_pociag: ['Papierowy bilet na pociąg regionalny trzeba <b>skasować</b> w zielono-białym kasowniku przed wejściem do pociągu (zwykle ważny potem ok. 4 godziny). Bilety cyfrowe aktywują się same w chwili odjazdu.', 'Frecciarossa i Italo to szybkie pociągi z miejscówkami – kupuj wcześniej, będzie taniej.', 'Strajki (<b>sciopero</b>) są ogłaszane z wyprzedzeniem – sprawdź komunikaty przed podróżą.'],
  tr_miasto: ['Bilety na autobus i metro kupuje się zwykle w kiosku <b>Tabacchi</b> (litera T) lub w aplikacji, rzadko u kierowcy.', 'Bilet trzeba skasować w autobusie – kontrole są częste, a mandaty wysokie.', 'W Wenecji poruszasz się tramwajem wodnym (<b>vaporetto</b>) – bilet jest drogi, warto wziąć wielodniowy.'],
  tr_auto: ['<b>ZTL</b> (Zona a Traffico Limitato) to strefy w centrach miast, do których nie wolno wjeżdżać bez pozwolenia. Kamera robi zdjęcie, a mandat przychodzi pocztą nawet po miesiącach.', 'Autostrady są płatne: przy wjeździe bierzesz bilet, przy wyjeździe płacisz na bramce (<b>casello</b>).', 'Niebieskie linie – płatne parkowanie, białe – zwykle bezpłatne, żółte – zastrzeżone (np. dla mieszkańców).'],
  tr_nocleg: ['Prawie wszędzie płaci się <b>opłatę miejscową</b> (tassa di soggiorno) – często gotówką, na miejscu.', 'Recepcja zwykle prosi o dokument tożsamości przy zameldowaniu – to wymóg prawa.', '<b>Agriturismo</b> to gospodarstwo z noclegami i często pysznymi kolacjami z własnych produktów.'],
  tr_bar: ['„Un caffè” to <b>espresso</b>. Zamówienie „latte” da ci szklankę mleka.', 'Kawa <b>przy ladzie</b> (al banco) jest tańsza niż przy stoliku – Włosi piją ją szybko, na stojąco.', 'W wielu barach najpierw płacisz w kasie, potem z paragonem (<b>scontrino</b>) zamawiasz przy ladzie.', 'Cappuccino pije się głównie rano – po obiedzie Włosi zamawiają espresso.'],
  tr_restauracja: ['<b>Coperto</b> (1–3 € od osoby) to opłata za nakrycie i chleb – to nie napiwek.', 'Napiwek nie jest obowiązkowy; zwykle zaokrągla się rachunek lub zostawia kilka euro za bardzo dobrą obsługę.', 'Rachunek nie przychodzi sam – trzeba o niego poprosić: <b>Il conto, per favore</b>.', 'Kolację je się późno – restauracje otwierają się często dopiero ok. 19–19:30.'],
  tr_menu: ['Klasyczny obiad: <b>antipasto → primo</b> (makaron, risotto, zupa) <b>→ secondo</b> (mięso lub ryba) <b>+ contorno</b> (dodatek, zamawiany osobno) <b>→ dolce → caffè</b>. Nie trzeba zamawiać wszystkiego.', 'Dania regionalne: Rzym – carbonara, cacio e pepe; Bolonia – tagliatelle al ragù; Mediolan – risotto alla milanese; Neapol – pizza; Sycylia – arancini, cannoli; Wenecja – sarde in saor.'],
  tr_pizza: ['Na pizzę neapolitańską do pizzerii z piecem opalanym drewnem; pizzę na kawałki (<b>al taglio</b>) kupisz w ciągu dnia.', '<b>Aperitivo</b> (ok. 18–20): drink, do którego często podają przekąski w cenie.', 'Na Sycylii na śniadanie je się <b>granitę z brioszką</b>. W Palermo mówi się „arancina”, w Katanii „arancino”.', 'Lody: najpierw płacisz w kasie za rozmiar (cono/coppetta), potem wybierasz smaki.'],
  tr_zakupy: ['Na targu ważysz w <b>etti</b> (100 g): un etto, due etti.', 'Wiele sklepów ma przerwę w porze obiadowej i bywa zamkniętych w niedzielę.', 'W sklepie odzieżowym i na targu delikatne targowanie bywa możliwe, w supermarkecie – nie.'],
  tr_apteka: ['Apteki oznacza zielony krzyż. W nocy i w święta działa <b>farmacia di turno</b> – lista jest na drzwiach każdej apteki.', 'Z kartą EKUZ masz prawo do leczenia na takich zasadach jak Włosi. Latem w miejscowościach turystycznych działa <b>guardia medica turistica</b>.'],
  tr_zwiedzanie: ['W kościołach (np. Bazylika św. Piotra) obowiązują <b>zakryte ramiona i kolana</b> – miej przy sobie chustę.', 'W wielu muzeach w pierwszą niedzielę miesiąca wstęp jest bezpłatny (np. w muzeach państwowych) – ale kolejki są ogromne.', 'Do Galerii Uffizi, Koloseum czy Ostatniej Wieczerzy kupuj bilety z wyprzedzeniem.'],
  tr_plaza: ['<b>Stabilimento / lido</b> to płatna plaża z parasolami i leżakami; <b>spiaggia libera</b> – bezpłatna.', 'Czerwona flaga oznacza zakaz kąpieli; żółta – ostrożność.', 'Sierpień (zwłaszcza okolice <b>Ferragosto</b>, 15.08) to szczyt sezonu – wszystko jest pełne i droższe.'],
  tr_droga: ['Włosi chętnie pomagają, ale wskazówki bywają ogólne („sempre dritto!”). Poproś o pokazanie na mapie.', 'Ulica to <b>via</b>, plac – <b>piazza</b>, aleja – <b>viale</b>, nadbrzeże – <b>lungomare / lungarno</b>.'],
  tr_rozmowa: ['Gesty są częścią rozmowy – złączone palce uniesione w górę znaczą „o co ci chodzi?!”.', 'Włosi szybko przechodzą na „ty” w nieformalnych sytuacjach, ale do starszych i obsługi lepiej zacząć od <b>Lei</b>.', '<b>Magari</b>, <b>dai</b>, <b>boh</b>, <b>allora</b> – usłyszysz je co chwilę.'],
  tr_problemy: ['Numer alarmowy w całej UE: <b>112</b>.', 'Kradzież zgłoś na policji (<b>Polizia</b> lub <b>Carabinieri</b>) – zgłoszenie (<b>denuncia</b>) przyda się do ubezpieczenia i nowych dokumentów.', 'Uważaj na kieszonkowców w zatłoczonych miejscach: metro, autobusy 64 i 40 w Rzymie, okolice zabytków.', 'Ambasada RP w Rzymie pomoże przy utracie paszportu (paszport tymczasowy).']
};

/* ---------- Symulacje rozmów ----------
   kroki: [kwestia rozmówcy, tłumaczenie, poprawna odpowiedź, [złe odpowiedzi], tłumaczenie odpowiedzi] */
UA.SCENES = [
  { id: 's_bar', unit: 'tr_bar', t: 'Kawa przy ladzie', npc: 'Barista', steps: [
    ['Buongiorno! Cosa prende?', 'Dzień dobry! Co pan bierze?', 'Un caffè e un cornetto, per favore.', ['Una camera doppia, per favore.', 'Il conto, per favore.'], 'Espresso i rogalik, proszę.'],
    ['Al banco o al tavolo?', 'Przy ladzie czy przy stoliku?', 'Al banco, grazie.', ['Sì, grazie.', 'Al binario tre.'], 'Przy ladzie, dziękuję.'],
    ['Il cornetto vuoto o alla crema?', 'Rogalik pusty czy z kremem?', 'Alla crema, grazie.', ['Andata e ritorno.', 'Ben cotto.'], 'Z kremem, dziękuję.'],
    ['Ecco a lei. Altro?', 'Proszę. Coś jeszcze?', 'No, basta così. Quant’è?', ['Sì, sono polacco.', 'Mi sono perso.'], 'Nie, to wszystko. Ile płacę?'],
    ['Due euro e cinquanta.', 'Dwa euro pięćdziesiąt.', 'Ecco a lei. Buona giornata!', ['Buonanotte!', 'Aiuto!'], 'Proszę bardzo. Miłego dnia!']
  ]},
  { id: 's_ristorante', unit: 'tr_restauracja', t: 'Kolacja w trattorii', npc: 'Cameriere', steps: [
    ['Buonasera! Avete prenotato?', 'Dobry wieczór! Mają państwo rezerwację?', 'No, non abbiamo prenotato. Avete un tavolo per due?', ['Sì, solo andata.', 'No, non funziona.'], 'Nie mamy rezerwacji. Macie stolik dla dwojga?'],
    ['Sì, prego. Cosa vi porto da bere?', 'Tak, proszę. Co podać do picia?', 'Una bottiglia d’acqua naturale e mezzo litro di vino rosso.', ['Un ombrellone e due lettini.', 'Un biglietto per Roma.'], 'Butelkę wody niegazowanej i pół litra czerwonego wina.'],
    ['Avete scelto?', 'Czy państwo wybrali?', 'Sì, come primo le lasagne e come secondo il pesce alla griglia.', ['Sì, a destra.', 'Sì, sono allergico.'], 'Tak, na pierwsze lasagne, a na drugie rybę z grilla.'],
    ['Il pesce con contorno?', 'Ryba z dodatkiem?', 'Sì, con un’insalata mista, grazie.', ['No, è in ritardo.', 'Sì, al terzo piano.'], 'Tak, z mieszaną sałatką, dziękuję.'],
    ['Va tutto bene?', 'Czy wszystko w porządku?', 'Sì, è tutto squisito!', ['Sì, il treno è soppresso.', 'No, ho perso il passaporto.'], 'Tak, wszystko jest wyśmienite!'],
    ['Desiderate un dolce o un caffè?', 'Życzą sobie państwo deser albo kawę?', 'Due caffè e poi il conto, per favore.', ['Due biglietti ridotti.', 'Due lettini, per favore.'], 'Dwie kawy, a potem rachunek, proszę.']
  ]},
  { id: 's_treno', unit: 'tr_pociag', t: 'Bilet na pociąg', npc: 'Bigliettaio', steps: [
    ['Buongiorno, mi dica.', 'Dzień dobry, słucham.', 'Buongiorno, un biglietto per Pisa, per favore.', ['Buongiorno, un cappuccino.', 'Buongiorno, ho la febbre.'], 'Dzień dobry, bilet do Pizy, proszę.'],
    ['Solo andata o andata e ritorno?', 'W jedną stronę czy w obie?', 'Andata e ritorno, per favore.', ['Al sangue, per favore.', 'Con la panna, per favore.'], 'W obie strony, proszę.'],
    ['Per oggi?', 'Na dziś?', 'Sì, con il prossimo treno.', ['Sì, sono sposato.', 'Sì, ho prenotato un tavolo.'], 'Tak, na najbliższy pociąg.'],
    ['Sono diciotto euro. Il treno parte alle 11:20 dal binario 4.', 'Osiemnaście euro. Pociąg odjeżdża o 11:20 z peronu 4.', 'Devo convalidare il biglietto?', ['Posso provare la taglia più grande?', 'Mi porta il menù?'], 'Czy muszę skasować bilet?'],
    ['Sì, prima di salire, nella macchinetta verde.', 'Tak, przed wejściem, w zielonym kasowniku.', 'Perfetto, grazie mille!', ['Mi dispiace, non mangio carne.', 'Aiuto!'], 'Świetnie, bardzo dziękuję!']
  ]},
  { id: 's_hotel', unit: 'tr_nocleg', t: 'Problem w hotelu', npc: 'Receptionist', steps: [
    ['Buonasera, posso aiutarla?', 'Dobry wieczór, w czym mogę pomóc?', 'Sì, nella mia camera l’aria condizionata non funziona.', ['Sì, vorrei un gelato al pistacchio.', 'Sì, scendo alla prossima.'], 'Tak, w moim pokoju nie działa klimatyzacja.'],
    ['Mi dispiace molto. Qual è il numero della camera?', 'Bardzo mi przykro. Jaki jest numer pokoju?', 'È la camera 214, al secondo piano.', ['È il binario 214.', 'Sono 214 euro.'], 'To pokój 214, na drugim piętrze.'],
    ['Mando subito il tecnico. Le serve altro?', 'Zaraz wyślę technika. Potrzebuje pan czegoś jeszcze?', 'Sì, potremmo avere altri due asciugamani?', ['Sì, un tavolo per due.', 'Sì, un biglietto ridotto.'], 'Tak, czy moglibyśmy dostać jeszcze dwa ręczniki?'],
    ['Certo. Domani a che ora fate il check-out?', 'Oczywiście. O której jutro się wymeldowujecie?', 'Alle dieci. Possiamo lasciare i bagagli qui fino al pomeriggio?', ['Alle dieci. Il conto, per favore.', 'Alle dieci. Mi sono perso.'], 'O dziesiątej. Możemy zostawić bagaże do popołudnia?'],
    ['Nessun problema. Buona serata!', 'Żaden problem. Miłego wieczoru!', 'Grazie, molto gentile. Buonanotte!', ['Prego, quant’è?', 'Salute!'], 'Dziękuję, bardzo pan uprzejmy. Dobranoc!']
  ]},
  { id: 's_gelato', unit: 'tr_pizza', t: 'W lodziarni', npc: 'Gelataio', steps: [
    ['Ciao! Cono o coppetta?', 'Cześć! Rożek czy kubeczek?', 'Un cono medio, per favore.', ['Un biglietto medio.', 'Un ombrellone medio.'], 'Średni rożek, proszę.'],
    ['Quanti gusti?', 'Ile smaków?', 'Due gusti: pistacchio e cioccolato.', ['Due notti, grazie.', 'Due binari.'], 'Dwa smaki: pistacjowy i czekoladowy.'],
    ['Panna sopra?', 'Bita śmietana na wierzch?', 'Sì, grazie, un po’ di panna.', ['Sì, sono vegetariano.', 'Sì, a sinistra.'], 'Tak, poproszę trochę bitej śmietany.'],
    ['Sono tre euro e cinquanta.', 'Trzy euro pięćdziesiąt.', 'Ecco a lei. Grazie, ciao!', ['Il coperto è incluso?', 'Dov’è il binario?'], 'Proszę. Dzięki, cześć!']
  ]},
  { id: 's_strada', unit: 'tr_droga', t: 'Zgubiłem się', npc: 'Passante', steps: [
    ['Tutto bene? Ha bisogno di aiuto?', 'Wszystko w porządku? Potrzebuje pan pomocy?', 'Sì, grazie. Mi sono perso. Dov’è la stazione?', ['Sì, un cappuccino, grazie.', 'No, sono allergico.'], 'Tak, dziękuję. Zgubiłem się. Gdzie jest dworzec?'],
    ['La stazione? Vada sempre dritto e poi giri a destra al semaforo.', 'Dworzec? Proszę iść prosto, a potem na światłach skręcić w prawo.', 'È lontano?', ['È piccante?', 'È incluso?'], 'Czy to daleko?'],
    ['No, cinque minuti a piedi.', 'Nie, pięć minut pieszo.', 'Me lo può mostrare sulla mappa?', ['Mi porta il conto?', 'Mi fa il pieno?'], 'Może mi pan to pokazać na mapie?'],
    ['Certo, siamo qui, e la stazione è qui.', 'Oczywiście, jesteśmy tu, a dworzec jest tu.', 'Grazie mille, molto gentile!', ['Mi dispiace, non capisco il menù.', 'Ci vediamo in spiaggia!'], 'Bardzo dziękuję, bardzo pan uprzejmy!']
  ]},
  { id: 's_farmacia', unit: 'tr_apteka', t: 'W aptece', npc: 'Farmacista', steps: [
    ['Buongiorno, mi dica.', 'Dzień dobry, słucham.', 'Buongiorno, ho mal di gola e un po’ di febbre.', ['Buongiorno, un tavolo per due.', 'Buongiorno, vorrei noleggiare una barca.'], 'Dzień dobry, boli mnie gardło i mam trochę gorączki.'],
    ['Da quando?', 'Od kiedy?', 'Da ieri sera.', ['Dal binario due.', 'Da Varsavia.'], 'Od wczoraj wieczorem.'],
    ['È allergico a qualche medicina?', 'Ma pan alergię na jakiś lek?', 'No, non sono allergico a niente.', ['No, non ho prenotato.', 'No, non è lontano.'], 'Nie, nie mam alergii na nic.'],
    ['Allora prenda queste pastiglie tre volte al giorno.', 'W takim razie proszę brać te pastylki trzy razy dziennie.', 'Grazie. Serve la ricetta?', ['Grazie. Avete il Wi-Fi?', 'Grazie. Quanti gusti?'], 'Dziękuję. Potrzebna jest recepta?'],
    ['No, non serve. Sono otto euro.', 'Nie, nie trzeba. Osiem euro.', 'Ecco a lei. Arrivederci!', ['Salute! Cin cin!', 'Buon appetito!'], 'Proszę. Do widzenia!']
  ]},
  { id: 's_taxi', unit: 'tr_miasto', t: 'Taksówką na lotnisko', npc: 'Tassista', steps: [
    ['Buongiorno, dove andiamo?', 'Dzień dobry, dokąd jedziemy?', 'All’aeroporto di Fiumicino, per favore.', ['Al ristorante, un tavolo per due.', 'In farmacia, ho la febbre.'], 'Na lotnisko Fiumicino, proszę.'],
    ['Va bene. Ha bagagli?', 'Dobrze. Ma pan bagaże?', 'Sì, due valigie.', ['Sì, due gusti.', 'Sì, due caffè.'], 'Tak, dwie walizki.'],
    ['Le metto nel bagagliaio.', 'Włożę je do bagażnika.', 'Quanto costa fino all’aeroporto?', ['Quanto costa l’ombrellone?', 'Quanto costa un etto di prosciutto?'], 'Ile kosztuje kurs na lotnisko?'],
    ['C’è la tariffa fissa: cinquanta euro.', 'Jest stała stawka: pięćdziesiąt euro.', 'Posso pagare con la carta?', ['Posso provare la giacca?', 'Posso fare il bagno?'], 'Mogę zapłacić kartą?'],
    ['Sì, certo. Siamo arrivati!', 'Tak, oczywiście. Jesteśmy na miejscu!', 'Grazie, mi può fare la ricevuta?', ['Grazie, un cono medio.', 'Grazie, ho perso la coincidenza.'], 'Dziękuję, może mi pan wystawić pokwitowanie?']
  ]}
];

/* ---------- Dekoder menu ----------
   [nazwa, co to jest, kategoria, region] */
UA.MENU = [
  ['bruschetta', 'grzanka z pomidorami, czosnkiem i oliwą', 'antipasto', 'cała Italia'],
  ['caprese', 'pomidory z mozzarellą i bazylią', 'antipasto', 'Kampania'],
  ['prosciutto e melone', 'szynka dojrzewająca z melonem', 'antipasto', 'cała Italia'],
  ['vitello tonnato', 'cielęcina w sosie tuńczykowym', 'antipasto', 'Piemont'],
  ['carpaccio', 'cieniutkie plastry surowej wołowiny', 'antipasto', 'Wenecja'],
  ['supplì', 'smażona kulka ryżowa z mozzarellą', 'antipasto', 'Rzym'],
  ['spaghetti alla carbonara', 'spaghetti z jajkiem, guanciale i pecorino (bez śmietany!)', 'primo', 'Rzym'],
  ['cacio e pepe', 'makaron z serem pecorino i pieprzem', 'primo', 'Rzym'],
  ['bucatini all’amatriciana', 'makaron w sosie pomidorowym z guanciale', 'primo', 'Lacjum'],
  ['tagliatelle al ragù', 'wstążki z mięsnym sosem (tzw. „bolognese”)', 'primo', 'Emilia-Romania'],
  ['risotto alla milanese', 'risotto z szafranem', 'primo', 'Lombardia'],
  ['trofie al pesto', 'skręcony makaron z pesto bazyliowym', 'primo', 'Liguria'],
  ['spaghetti alle vongole', 'spaghetti z małżami', 'primo', 'Kampania'],
  ['pasta alla Norma', 'makaron z bakłażanem, pomidorami i ricottą', 'primo', 'Sycylia'],
  ['orecchiette con le cime di rapa', 'makaron „uszka” z liśćmi rzepy', 'primo', 'Apulia'],
  ['ribollita', 'gęsta zupa z chleba i warzyw', 'primo', 'Toskania'],
  ['minestrone', 'zupa jarzynowa', 'primo', 'cała Italia'],
  ['gnocchi', 'kluski ziemniaczane', 'primo', 'cała Italia'],
  ['bistecca alla fiorentina', 'gruby stek wołowy z kością (na wagę)', 'secondo', 'Toskania'],
  ['saltimbocca alla romana', 'cielęcina z szynką i szałwią', 'secondo', 'Rzym'],
  ['ossobuco', 'duszona golonka cielęca', 'secondo', 'Lombardia'],
  ['cotoletta alla milanese', 'kotlet cielęcy panierowany', 'secondo', 'Lombardia'],
  ['fritto misto', 'smażone owoce morza i ryby', 'secondo', 'wybrzeże'],
  ['parmigiana di melanzane', 'zapiekanka z bakłażana, pomidorów i sera', 'secondo', 'południe'],
  ['baccalà', 'solony dorsz', 'secondo', 'Wenecja / południe'],
  ['sarde in saor', 'sardynki w słodko-kwaśnej cebuli', 'antipasto', 'Wenecja'],
  ['patate al forno', 'pieczone ziemniaki', 'contorno', 'cała Italia'],
  ['verdure grigliate', 'warzywa z grilla', 'contorno', 'cała Italia'],
  ['spinaci al burro', 'szpinak na maśle', 'contorno', 'cała Italia'],
  ['tiramisù', 'deser z mascarpone, biszkoptami i kawą', 'dolce', 'Wenecja Euganejska'],
  ['panna cotta', 'deser ze śmietanki („gotowana śmietanka”)', 'dolce', 'Piemont'],
  ['cannolo', 'rurka z kruchego ciasta z ricottą', 'dolce', 'Sycylia'],
  ['cantucci e vin santo', 'migdałowe ciasteczka do maczania w winie deserowym', 'dolce', 'Toskania'],
  ['sfogliatella', 'muszelka z ciasta francuskiego z ricottą', 'dolce', 'Neapol'],
  ['affogato', 'lody waniliowe zalane espresso', 'dolce', 'cała Italia'],
  ['pizza marinara', 'pizza z pomidorami, czosnkiem i oregano (bez sera!)', 'pizza', 'Neapol'],
  ['pizza diavola', 'pizza z ostrym salami', 'pizza', 'cała Italia'],
  ['pizza capricciosa', 'pizza z szynką, karczochami, pieczarkami i oliwkami', 'pizza', 'cała Italia'],
  ['calzone', 'pizza złożona na pół (pieróg)', 'pizza', 'Neapol'],
  ['piadina', 'płaski placek z nadzieniem', 'street food', 'Romania'],
  ['arancino', 'smażona kula ryżowa z ragù lub szynką', 'street food', 'Sycylia'],
  ['lampredotto', 'kanapka z flakami wołowymi', 'street food', 'Florencja'],
  ['pane e panelle', 'bułka z plackami z mąki z ciecierzycy', 'street food', 'Palermo']
];

/* ---------- Słuchanie „z życia”: szablony komunikatów ---------- */
UA.LIFE = [
  { q: 'Z którego peronu?', kind: 'bin', make: function (n) { return ['Il treno regionale per Firenze delle ore ' + n.h + ' e ' + n.m + ' partirà dal binario ' + n.b + '.', n.b, 'peron']; } },
  { q: 'O której odjeżdża pociąg?', kind: 'time', make: function (n) { return ['Il treno per Roma Termini partirà alle ore ' + n.h + ' e ' + n.m + '.', n.h + ':' + n.m, 'godzina']; } },
  { q: 'Ile minut opóźnienia?', kind: 'delay', make: function (n) { return ['Il Frecciarossa per Milano viaggia con un ritardo di ' + n.d + ' minuti.', String(n.d), 'minut']; } },
  { q: 'Ile płacisz?', kind: 'price', make: function (n) { return ['Sono ' + n.e + ' euro e ' + n.c + '.', n.e + ',' + n.c + ' €', 'cena']; } },
  { q: 'Który numer pokoju?', kind: 'room', make: function (n) { return ['La sua camera è la numero ' + n.r + '.', String(n.r), 'pokój']; } },
  { q: 'O której jest śniadanie?', kind: 'time2', make: function (n) { return ['La colazione è servita dalle ' + n.h2 + ' alle ' + (n.h2 + 3) + '.', 'od ' + n.h2 + ' do ' + (n.h2 + 3), 'godzina']; } }
];

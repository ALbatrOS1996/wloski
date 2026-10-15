/* ============================================================
   DALSZA ŚCIEŻKA A2–C2 – lekcje ułożone progresywnie
   L(poziom, id, nazwa) – nowa lekcja; W(...) jak w words.js.
   ============================================================ */
var UA = window.UA || (window.UA = {});
(function () {
  var cur;
  function L(level, id, name) { cur = id; UA.TOPICS.push({ id: id, name: name, level: level }); }
  function W(ua, pos, pl, forms, sim, ex, exPl) {
    UA.WORDS.push({ ua: ua, pos: pos, pl: pl, forms: forms || '', sim: sim, ex: ex || '', exPl: exPl || '', topic: cur });
  }

  /* ===================== A2 ===================== */
  L('A2', 'a2_famiglia', 'Rodzina i ludzie');
  W('la famiglia', 'ж', 'rodzina', 'lm. le famiglie', 'p', 'La mia {famiglia} è numerosa.', 'Moja rodzina jest liczna.');
  W('i genitori', 'мн', 'rodzice', '', 'o', 'I miei {genitori} vivono a Danzica.', 'Moi rodzice mieszkają w Gdańsku.');
  W('il fratello', 'ч', 'brat', 'lm. i fratelli', 'o', 'Ho un {fratello} più piccolo.', 'Mam młodszego brata.');
  W('la sorella', 'ж', 'siostra', 'lm. le sorelle', 'o', 'Mia {sorella} vive a Roma.', 'Moja siostra mieszka w Rzymie.');
  W('il figlio', 'ч', 'syn', 'lm. i figli (też: dzieci)', 'o', 'Hai {figli}?', 'Masz dzieci?');
  W('la figlia', 'ж', 'córka', 'lm. le figlie', 'o', 'Mia {figlia} studia medicina.', 'Moja córka studiuje medycynę.');
  W('il marito', 'ч', 'mąż', 'lm. i mariti', 'o', 'Mio {marito} cucina benissimo.', 'Mój mąż świetnie gotuje.');
  W('la moglie', 'ж', 'żona', 'lm. le mogli', 'o', 'Questa è mia {moglie}, Anna.', 'To moja żona, Anna.');
  W('il nonno', 'ч', 'dziadek', 'la nonna – babcia', 'o', 'Il {nonno} racconta storie della guerra.', 'Dziadek opowiada historie z wojny.');
  W('il ragazzo', 'ч', 'chłopak; chłopiec', 'la ragazza – dziewczyna', 'o', 'Il suo {ragazzo} è napoletano.', 'Jej chłopak jest z Neapolu.');
  W('l’amico', 'ч', 'przyjaciel, kolega', 'lm. gli amici · l’amica', 'p', 'Vado al mare con gli {amici}.', 'Jadę nad morze z przyjaciółmi.');
  W('sposato', 'п', 'żonaty, zamężna', 'sposata', 'o', 'Sei {sposato}?', 'Jesteś żonaty?');

  L('A2', 'a2_casa', 'Dom i codzienność');
  W('la casa', 'ж', 'dom', 'a casa – w domu', 'p', 'Torno a {casa} alle sei.', 'Wracam do domu o szóstej.');
  W('l’appartamento', 'ч', 'mieszkanie', 'lm. gli appartamenti', 'p', 'Abbiamo un {appartamento} in centro.', 'Mamy mieszkanie w centrum.');
  W('la cucina', 'ж', 'kuchnia', '', 'p', 'La {cucina} italiana è famosa.', 'Kuchnia włoska jest sławna.');
  W('alzarsi', 'д', 'wstawać', 'mi alzo · si alza · mi sono alzato', 'o', 'La mattina {mi alzo} alle sette.', 'Rano wstaję o siódmej.');
  W('lavarsi', 'д', 'myć się', 'mi lavo · si lava · mi sono lavato', 'o', 'I bambini devono {lavarsi} le mani.', 'Dzieci muszą umyć ręce.');
  W('cucinare', 'д', 'gotować', 'cucino · cucina · ho cucinato', 'o', 'Stasera {cucino} io.', 'Dziś wieczorem ja gotuję.');
  W('fare la spesa', 'ф', 'robić zakupy (spożywcze)', '', 'o', 'Il sabato {facciamo la spesa} al mercato.', 'W sobotę robimy zakupy na targu.');
  W('la lavatrice', 'ж', 'pralka', '', 'o', 'La {lavatrice} è rotta.', 'Pralka jest zepsuta.');
  W('l’affitto', 'ч', 'czynsz, najem', 'in affitto – do wynajęcia', 'o', 'L’{affitto} è molto alto.', 'Czynsz jest bardzo wysoki.');
  W('traslocare', 'д', 'przeprowadzać się', 'trasloco · trasloca · ho traslocato', 'o', 'Il mese prossimo {traslochiamo}.', 'W przyszłym miesiącu się przeprowadzamy.');
  W('il giardino', 'ч', 'ogród', '', 'p', 'I bambini giocano in {giardino}.', 'Dzieci bawią się w ogrodzie.');
  W('stanco', 'п', 'zmęczony', 'stanca, stanchi', 'o', 'Stasera sono molto {stanco}.', 'Dziś wieczorem jestem bardzo zmęczony.');

  L('A2', 'a2_tempo', 'Czas wolny i sport');
  W('il tempo libero', 'ч', 'czas wolny', '', 'o', 'Nel {tempo libero} leggo molto.', 'W czasie wolnym dużo czytam.');
  W('la partita', 'ж', 'mecz', 'lm. le partite', 'p', 'Stasera c’è la {partita} della Roma.', 'Dziś wieczorem jest mecz Romy.');
  W('la squadra', 'ж', 'drużyna', '', 'o', 'Per quale {squadra} tifi?', 'Komu kibicujesz?');
  W('vincere', 'д', 'wygrywać', 'vinco · vince · ho vinto', 'o', 'Chi ha {vinto}?', 'Kto wygrał?');
  W('perdere', 'д', 'przegrywać; gubić', 'perdo · perde · ho perso', 'o', 'Abbiamo {perso} due a uno.', 'Przegraliśmy dwa do jednego.');
  W('nuotare', 'д', 'pływać', 'nuoto · nuota · ho nuotato', 'o', 'D’estate {nuotiamo} nel lago.', 'Latem pływamy w jeziorze.');
  W('camminare', 'д', 'chodzić, spacerować; wędrować', 'cammino · cammina · ho camminato', 'o', 'Ci piace {camminare} in montagna.', 'Lubimy wędrować po górach.');
  W('il cinema', 'ч', 'kino', 'nieodmienne', 't', 'Andiamo al {cinema} stasera?', 'Idziemy dziś do kina?');
  W('il concerto', 'ч', 'koncert', '', 'p', 'Il {concerto} inizia alle nove.', 'Koncert zaczyna się o dziewiątej.');
  W('il fine settimana', 'ч', 'weekend', 'też: il weekend', 'o', 'Cosa fai nel {fine settimana}?', 'Co robisz w weekend?');
  W('divertirsi', 'д', 'bawić się (dobrze)', 'mi diverto · si diverte · mi sono divertito', 'o', 'Ci siamo {divertiti} molto!', 'Świetnie się bawiliśmy!');
  W('la passeggiata', 'ж', 'spacer', 'fare una passeggiata', 'o', 'Facciamo una {passeggiata} sul lungomare.', 'Chodźmy na spacer bulwarem nad morzem.');

  L('A2', 'a2_lavoro', 'Praca');
  W('il lavoro', 'ч', 'praca', '', 'o', 'Vado al {lavoro} in bici.', 'Jeżdżę do pracy rowerem.');
  W('l’ufficio', 'ч', 'biuro', 'lm. gli uffici', 'o', 'Sono in {ufficio} fino alle cinque.', 'Jestem w biurze do piątej.');
  W('il capo', 'ч', 'szef', '', 'o', 'Il mio {capo} è in ferie.', 'Mój szef jest na urlopie.');
  W('il collega', 'ч', 'kolega z pracy', 'lm. i colleghi · la collega', 'p', 'Il mio {collega} mi aiuta spesso.', 'Mój kolega często mi pomaga.');
  W('lo stipendio', 'ч', 'pensja', '', 'p', 'Lo {stipendio} arriva a fine mese.', 'Pensja przychodzi pod koniec miesiąca.');
  W('la riunione', 'ж', 'zebranie, narada', '', 'o', 'La {riunione} dura un’ora.', 'Zebranie trwa godzinę.');
  W('il colloquio', 'ч', 'rozmowa kwalifikacyjna; rozmowa', '', 'p', 'Domani ho un {colloquio} di lavoro.', 'Jutro mam rozmowę o pracę.');
  W('le ferie', 'мн', 'urlop', 'in ferie – na urlopie', 'o', 'Ad agosto siamo in {ferie}.', 'W sierpniu jesteśmy na urlopie.');
  W('guadagnare', 'д', 'zarabiać', 'guadagno · guadagna · ho guadagnato', 'o', 'Lui {guadagna} bene.', 'On dobrze zarabia.');
  W('l’insegnante', 'ч', 'nauczyciel(ka)', 'lm. gli/le insegnanti', 'o', 'Faccio l’{insegnante} di storia.', 'Jestem nauczycielem historii.');
  W('il curriculum', 'ч', 'CV, życiorys', '', 't', 'Mandi il suo {curriculum}.', 'Proszę przesłać swoje CV.');
  W('lo straordinario', 'ч', 'nadgodziny', 'fare gli straordinari', 'o', 'Questa settimana ho fatto molti {straordinari}.', 'W tym tygodniu zrobiłem dużo nadgodzin.');

  L('A2', 'a2_sentimenti', 'Uczucia i charakter');
  W('felice', 'п', 'szczęśliwy', '', 'o', 'Sono {felice} di vederti.', 'Cieszę się, że cię widzę.');
  W('triste', 'п', 'smutny', '', 'p', 'Perché sei così {triste}?', 'Dlaczego jesteś taki smutny?');
  W('arrabbiato', 'п', 'zły, rozgniewany', 'arrabbiata', 'o', 'Era molto {arrabbiato} con me.', 'Był na mnie bardzo zły.');
  W('preoccupato', 'п', 'zmartwiony', 'preoccupata', 'o', 'Sono {preoccupato} per l’esame.', 'Martwię się egzaminem.');
  W('la paura', 'ж', 'strach', 'avere paura di', 'o', 'Ho {paura} dei cani.', 'Boję się psów.');
  W('l’amore', 'ч', 'miłość', '', 'o', 'È stato {amore} a prima vista.', 'To była miłość od pierwszego wejrzenia.');
  W('simpatico', 'п', 'sympatyczny, miły', 'simpatica, simpatici', 'p', 'Tua sorella è molto {simpatica}.', 'Twoja siostra jest bardzo sympatyczna.');
  W('gentile', 'п', 'uprzejmy', '', 'o', 'Grazie, è molto {gentile}.', 'Dziękuję, to bardzo uprzejme.');
  W('onesto', 'п', 'uczciwy', 'onesta', 'p', 'Sii {onesto} con me.', 'Bądź ze mną szczery.');
  W('pigro', 'п', 'leniwy', 'pigra', 'o', 'La domenica sono {pigro}.', 'W niedzielę jestem leniwy.');
  W('bravo', 'п', 'zdolny, dobry (w czymś)', 'brava · Bravo! – brawo!', 'f', 'È una studentessa molto {brava}.', 'To bardzo zdolna studentka.');
  W('innamorarsi', 'д', 'zakochać się', 'mi innamoro · si è innamorato', 'o', 'Si è {innamorato} di lei.', 'Zakochał się w niej.');

  L('A2', 'a2_tecnologia', 'Technologia');
  W('il cellulare', 'ч', 'telefon komórkowy', 'też: il telefonino', 'p', 'Il mio {cellulare} è scarico.', 'Mój telefon jest rozładowany.');
  W('il computer', 'ч', 'komputer', '', 't', 'Il {computer} è lentissimo.', 'Komputer jest bardzo wolny.');
  W('la password', 'ж', 'hasło', '', 't', 'Ho dimenticato la {password}.', 'Zapomniałem hasła.');
  W('scaricare', 'д', 'pobierać (z sieci); rozładowywać', 'scarico · scarica · ho scaricato', 'o', 'Puoi {scaricare} l’app gratis.', 'Możesz pobrać aplikację za darmo.');
  W('il messaggio', 'ч', 'wiadomość', 'lm. i messaggi', 'p', 'Mandami un {messaggio}!', 'Wyślij mi wiadomość!');
  W('lo schermo', 'ч', 'ekran', '', 'o', 'Lo {schermo} è troppo scuro.', 'Ekran jest za ciemny.');
  W('la rete', 'ж', 'sieć; zasięg', '', 'o', 'Qui non c’è {rete}.', 'Tu nie ma zasięgu.');
  W('caricare', 'д', 'ładować', 'carico · carica · ho caricato', 'o', 'Devo {caricare} il telefono.', 'Muszę naładować telefon.');
  W('salvare', 'д', 'zapisywać (plik); ratować', 'salvo · salva · ho salvato', 'o', 'Non dimenticare di {salvare} il file!', 'Nie zapomnij zapisać pliku!');
  W('il file', 'ч', 'plik', '', 't', 'Ti mando il {file} per email.', 'Wyślę ci plik mailem.');
  W('stampare', 'д', 'drukować', 'stampo · stampa · ho stampato', 'p', 'Puoi {stampare} i biglietti?', 'Możesz wydrukować bilety?');
  W('rotto', 'п', 'zepsuty', 'rotta', 'o', 'La stampante è di nuovo {rotta}.', 'Drukarka znowu jest zepsuta.');

  /* ===================== B1 ===================== */
  L('B1', 'b1_media', 'Media i informacja');
  W('il giornale', 'ч', 'gazeta', 'lm. i giornali', 'o', 'Leggo il {giornale} ogni mattina.', 'Czytam gazetę każdego ranka.');
  W('la notizia', 'ж', 'wiadomość, news', 'lm. le notizie', 'o', 'Hai sentito la {notizia}?', 'Słyszałeś wiadomość?');
  W('il telegiornale', 'ч', 'dziennik telewizyjny', 'potocznie: il tg', 'o', 'Guardiamo il {telegiornale} delle otto.', 'Oglądamy dziennik o ósmej.');
  W('la pubblicità', 'ж', 'reklama', '', 'p', 'In tv c’è troppa {pubblicità}.', 'W telewizji jest za dużo reklam.');
  W('il titolo', 'ч', 'tytuł; nagłówek', '', 'p', 'Il {titolo} dell’articolo è fuorviante.', 'Tytuł artykułu wprowadza w błąd.');
  W('pubblicare', 'д', 'publikować', 'pubblico · pubblica · ho pubblicato', 'p', 'Il giornale ha {pubblicato} l’intervista.', 'Gazeta opublikowała wywiad.');
  W('la fonte', 'ж', 'źródło', 'lm. le fonti', 'o', 'Controlla sempre la {fonte}!', 'Zawsze sprawdzaj źródło!');
  W('la bufala', 'ж', 'fake news (dosł. bawolica)', '', 'f', 'Questa notizia è una {bufala}.', 'Ta wiadomość to fake news.');
  W('lo spettatore', 'ч', 'widz', 'lm. gli spettatori', 'o', 'Gli {spettatori} erano entusiasti.', 'Widzowie byli zachwyceni.');
  W('l’opinione', 'ж', 'opinia', 'secondo me – moim zdaniem', 'p', 'Qual è la tua {opinione}?', 'Jakie jest twoje zdanie?');
  W('attuale', 'п', 'aktualny', '', 'p', 'È un tema molto {attuale}.', 'To bardzo aktualny temat.');
  W('la censura', 'ж', 'cenzura', '', 't', 'In democrazia non c’è {censura}.', 'W demokracji nie ma cenzury.');

  L('B1', 'b1_societa', 'Społeczeństwo');
  W('la società', 'ж', 'społeczeństwo; spółka', '', 'p', 'La {società} italiana sta invecchiando.', 'Włoskie społeczeństwo się starzeje.');
  W('la popolazione', 'ж', 'ludność', '', 'p', 'La {popolazione} diminuisce.', 'Ludność się zmniejsza.');
  W('il cittadino', 'ч', 'obywatel', 'lm. i cittadini', 'o', 'Ogni {cittadino} ha diritti e doveri.', 'Każdy obywatel ma prawa i obowiązki.');
  W('la disoccupazione', 'ж', 'bezrobocie', '', 'o', 'La {disoccupazione} giovanile è alta.', 'Bezrobocie wśród młodych jest wysokie.');
  W('la pensione', 'ж', 'emerytura; pensjonat', 'in pensione – na emeryturze', 'f', 'Mio padre è in {pensione}.', 'Mój ojciec jest na emeryturze.');
  W('la povertà', 'ж', 'bieda, ubóstwo', '', 'o', 'Molte famiglie vivono in {povertà}.', 'Wiele rodzin żyje w biedzie.');
  W('l’immigrato', 'ч', 'imigrant', 'lm. gli immigrati', 'p', 'In Italia ci sono molti {immigrati}.', 'We Włoszech jest wielu imigrantów.');
  W('l’emigrazione', 'ж', 'emigracja', '', 't', 'L’{emigrazione} dal Sud verso il Nord è stata enorme.', 'Emigracja z Południa na Północ była ogromna.');
  W('il volontariato', 'ч', 'wolontariat', '', 'p', 'Fa {volontariato} in un canile.', 'Jest wolontariuszem w schronisku dla psów.');
  W('le tasse', 'мн', 'podatki', 'pagare le tasse', 'p', 'In Italia le {tasse} sono alte.', 'We Włoszech podatki są wysokie.');
  W('la giustizia', 'ж', 'sprawiedliwość; wymiar sprawiedliwości', '', 'o', 'Si tratta di {giustizia} sociale.', 'Chodzi o sprawiedliwość społeczną.');
  W('il divario Nord-Sud', 'ч', 'przepaść między Północą a Południem', '', 'o', 'Il {divario Nord-Sud} è ancora forte.', 'Przepaść między Północą a Południem jest wciąż duża.');

  L('B1', 'b1_ambiente', 'Środowisko');
  W('l’ambiente', 'ч', 'środowisko', '', 'o', 'Dobbiamo proteggere l’{ambiente}.', 'Musimy chronić środowisko.');
  W('il cambiamento climatico', 'ч', 'zmiana klimatu', '', 'p', 'Il {cambiamento climatico} riguarda tutti.', 'Zmiana klimatu dotyczy wszystkich.');
  W('l’inquinamento', 'ч', 'zanieczyszczenie', '', 'o', 'L’{inquinamento} dell’aria è pericoloso.', 'Zanieczyszczenie powietrza jest niebezpieczne.');
  W('i rifiuti', 'мн', 'odpady, śmieci', '', 'o', 'Separiamo i {rifiuti}.', 'Segregujemy odpady.');
  W('la raccolta differenziata', 'ж', 'segregacja śmieci', '', 'o', 'La {raccolta differenziata} è obbligatoria.', 'Segregacja śmieci jest obowiązkowa.');
  W('l’energia rinnovabile', 'ж', 'energia odnawialna', '', 'p', 'L’{energia rinnovabile} è il futuro.', 'Energia odnawialna to przyszłość.');
  W('la siccità', 'ж', 'susza', '', 'o', 'La {siccità} ha distrutto il raccolto.', 'Susza zniszczyła plony.');
  W('l’alluvione', 'ж', 'powódź', '', 'o', 'Dopo le piogge c’è stata un’{alluvione}.', 'Po deszczach nastąpiła powódź.');
  W('sostenibile', 'п', 'zrównoważony', '', 'o', 'Vogliamo un turismo {sostenibile}.', 'Chcemy zrównoważonej turystyki.');
  W('sprecare', 'д', 'marnować', 'spreco · spreca · ho sprecato', 'o', 'Non {sprecare} l’acqua!', 'Nie marnuj wody!');
  W('il parco nazionale', 'ч', 'park narodowy', '', 'p', 'Il {parco nazionale} del Gran Paradiso è il più antico.', 'Park Narodowy Gran Paradiso jest najstarszy.');
  W('il vulcano', 'ч', 'wulkan', 'l’Etna, il Vesuvio', 'p', 'L’Etna è un {vulcano} attivo.', 'Etna jest czynnym wulkanem.');

  L('B1', 'b1_studio', 'Edukacja');
  W('l’università', 'ж', 'uniwersytet', '', 'p', 'Studia all’{università} di Bologna.', 'Studiuje na Uniwersytecie Bolońskim.');
  W('la laurea', 'ж', 'dyplom ukończenia studiów', 'laurearsi – obronić dyplom', 'o', 'Ha preso la {laurea} in storia.', 'Ukończył studia historyczne.');
  W('la materia', 'ж', 'przedmiot (szkolny)', '', 'f', 'La mia {materia} preferita è la storia.', 'Mój ulubiony przedmiot to historia.');
  W('la lezione', 'ж', 'lekcja; wykład', '', 'p', 'Oggi la {lezione} è annullata.', 'Dziś zajęcia są odwołane.');
  W('la borsa di studio', 'ж', 'stypendium', '', 'o', 'Ha vinto una {borsa di studio}.', 'Dostała stypendium.');
  W('superare un esame', 'ф', 'zdać egzamin', 'essere bocciato – oblać', 'o', 'Ho {superato} l’{esame}!', 'Zdałem egzamin!');
  W('il voto', 'ч', 'ocena; głos (w wyborach)', '', 'o', 'Ho preso un bel {voto}.', 'Dostałem dobrą ocenę.');
  W('la maturità', 'ж', 'matura', '', 'p', 'Dopo la {maturità} vuole andare all’estero.', 'Po maturze chce wyjechać za granicę.');
  W('il liceo', 'ч', 'liceum', '', 'p', 'Mia figlia frequenta il {liceo} classico.', 'Moja córka chodzi do liceum klasycznego.');
  W('la biblioteca', 'ж', 'biblioteka', '', 't', 'Studio in {biblioteca}.', 'Uczę się w bibliotece.');
  W('il professore', 'ч', 'nauczyciel (w szkole średniej), profesor', 'la professoressa', 'p', 'Il {professore} di latino è severo.', 'Nauczyciel łaciny jest surowy.');
  W('imparare', 'д', 'uczyć się (czegoś)', 'imparo · impara · ho imparato', 'o', 'Sto {imparando} l’italiano.', 'Uczę się włoskiego.');

  L('B1', 'b1_salute', 'Zdrowie');
  W('la malattia', 'ж', 'choroba', '', 'o', 'Non è una {malattia} grave.', 'To nie jest poważna choroba.');
  W('il raffreddore', 'ч', 'katar, przeziębienie', '', 'o', 'Ho un forte {raffreddore}.', 'Mam silne przeziębienie.');
  W('la tosse', 'ж', 'kaszel', '', 'o', 'La {tosse} non passa.', 'Kaszel nie mija.');
  W('la ferita', 'ж', 'rana', '', 'o', 'La {ferita} non è profonda.', 'Rana nie jest głęboka.');
  W('prescrivere', 'д', 'przepisywać (lek)', 'prescrivo · prescrive · ho prescritto', 'p', 'Il medico mi ha {prescritto} un antibiotico.', 'Lekarz przepisał mi antybiotyk.');
  W('la cura', 'ж', 'leczenie, kuracja; troska', '', 'f', 'La {cura} dura due settimane.', 'Leczenie trwa dwa tygodnie.');
  W('riposare', 'д', 'odpoczywać', 'riposo · riposa · ho riposato', 'o', 'Devi {riposare}.', 'Musisz odpocząć.');
  W('l’alimentazione', 'ж', 'odżywianie', '', 'o', 'Una sana {alimentazione} è fondamentale.', 'Zdrowe odżywianie jest kluczowe.');
  W('il dolore', 'ч', 'ból', '', 'o', 'Ho un {dolore} alla schiena.', 'Mam ból pleców.');
  W('il vaccino', 'ч', 'szczepionka', 'vaccinarsi – zaszczepić się', 'p', 'Hai fatto il {vaccino} antinfluenzale?', 'Zaszczepiłeś się na grypę?');
  W('la dieta mediterranea', 'ж', 'dieta śródziemnomorska', '', 'p', 'La {dieta mediterranea} è patrimonio UNESCO.', 'Dieta śródziemnomorska jest wpisana na listę UNESCO.');
  W('guarire', 'д', 'wyzdrowieć; wyleczyć', 'guarisco · guarisce · sono guarito', 'o', 'Spero che tu {guarisca} presto.', 'Mam nadzieję, że szybko wyzdrowiejesz.');

  L('B1', 'b1_opinioni', 'Wyrażanie opinii');
  W('secondo me', 'ф', 'moim zdaniem', '', 'o', '{Secondo me} è troppo caro.', 'Moim zdaniem to za drogie.');
  W('penso che …', 'ф', 'myślę, że… (+ congiuntivo)', '', 'o', '{Penso che} tu abbia ragione.', 'Myślę, że masz rację.');
  W('sono d’accordo', 'ф', 'zgadzam się', 'non sono d’accordo', 'o', '{Sono d’accordo} con te.', 'Zgadzam się z tobą.');
  W('avere ragione', 'ф', 'mieć rację', 'avere torto – nie mieć racji', 'o', 'Hai {ragione}.', 'Masz rację.');
  W('il vantaggio', 'ч', 'zaleta, korzyść', 'lo svantaggio – wada', 'o', 'Il grande {vantaggio} è il prezzo.', 'Dużą zaletą jest cena.');
  W('convincere', 'д', 'przekonywać', 'convinco · convince · ho convinto', 'o', 'L’argomento mi ha {convinto}.', 'Ten argument mnie przekonał.');
  W('da un lato … dall’altro', 'ф', 'z jednej strony… z drugiej', '', 'o', '{Da un lato} è comodo, dall’altro è caro.', 'Z jednej strony to wygodne, z drugiej drogie.');
  W('comunque', 'пр', 'tak czy inaczej, jednak', '', 'o', 'Piove, ma usciamo {comunque}.', 'Pada, ale i tak wychodzimy.');
  W('inoltre', 'пр', 'ponadto', '', 'o', 'È economico e {inoltre} sano.', 'To tanie, a ponadto zdrowe.');
  W('quindi', 'пр', 'więc, zatem', '', 'o', 'Sono malato, {quindi} resto a casa.', 'Jestem chory, więc zostaję w domu.');
  W('però', 'з', 'jednak, ale', '', 'o', 'È bello, {però} costa troppo.', 'Jest ładne, ale za dużo kosztuje.');
  W('insomma', 'пр', 'krótko mówiąc; no cóż', '', 'o', '{Insomma}, è andata bene.', 'Krótko mówiąc, poszło dobrze.');

  L('B1', 'b1_relazioni', 'Relacje');
  W('il rapporto', 'ч', 'relacja, stosunek', '', 'p', 'Hanno un buon {rapporto}.', 'Mają dobrą relację.');
  W('sposarsi', 'д', 'pobrać się, wziąć ślub', 'mi sposo · si sono sposati', 'o', 'Si sono {sposati} a giugno.', 'Pobrali się w czerwcu.');
  W('il matrimonio', 'ч', 'ślub, wesele; małżeństwo', '', 'p', 'Siamo invitati al {matrimonio}.', 'Jesteśmy zaproszeni na ślub.');
  W('lasciarsi', 'д', 'rozstać się', 'ci lasciamo · si sono lasciati', 'o', 'Si sono {lasciati} dopo dieci anni.', 'Rozstali się po dziesięciu latach.');
  W('litigare', 'д', 'kłócić się', 'litigo · litiga · ho litigato', 'o', 'Abbiamo {litigato} per una sciocchezza.', 'Pokłóciliśmy się o drobiazg.');
  W('fare pace', 'ф', 'pogodzić się', '', 'o', 'Dopo il litigio abbiamo {fatto pace}.', 'Po kłótni się pogodziliśmy.');
  W('fidarsi', 'д', 'ufać (di)', 'mi fido · si fida · mi sono fidato', 'o', 'Mi {fido} di te.', 'Ufam ci.');
  W('geloso', 'п', 'zazdrosny', 'gelosa', 'o', 'È molto {geloso}.', 'Jest bardzo zazdrosny.');
  W('i parenti', 'мн', 'krewni (nie: rodzice!)', '', 'f', 'A Natale visitiamo i {parenti}.', 'W Boże Narodzenie odwiedzamy krewnych.');
  W('il conoscente', 'ч', 'znajomy', '', 'o', 'Un {conoscente} mi ha consigliato questo ristorante.', 'Znajomy polecił mi tę restaurację.');
  W('andare d’accordo', 'ф', 'dogadywać się', '', 'o', 'Andiamo molto {d’accordo}.', 'Bardzo dobrze się dogadujemy.');
  W('mancare', 'д', 'brakować; tęsknić (mi manchi – tęsknię za tobą)', 'mi manca · mi è mancato', 'o', 'Mi {manchi} tanto.', 'Bardzo za tobą tęsknię.');

  /* ===================== B2 ===================== */
  L('B2', 'b2_economia', 'Gospodarka');
  W('l’economia', 'ж', 'gospodarka, ekonomia', '', 'p', 'L’{economia} cresce lentamente.', 'Gospodarka rośnie powoli.');
  W('l’azienda', 'ж', 'przedsiębiorstwo, firma', 'lm. le aziende', 'o', 'L’{azienda} ha cinquecento dipendenti.', 'Firma ma pięciuset pracowników.');
  W('il fatturato', 'ч', 'obrót, przychód', '', 'o', 'Il {fatturato} è cresciuto del dieci per cento.', 'Obroty wzrosły o dziesięć procent.');
  W('il guadagno', 'ч', 'zysk, zarobek', '', 'o', 'L’azienda non fa {guadagni}.', 'Firma nie przynosi zysków.');
  W('l’inflazione', 'ж', 'inflacja', '', 't', 'L’{inflazione} è alta.', 'Inflacja jest wysoka.');
  W('il mercato del lavoro', 'ч', 'rynek pracy', '', 'p', 'Il {mercato del lavoro} è difficile per i giovani.', 'Rynek pracy jest trudny dla młodych.');
  W('investire', 'д', 'inwestować', 'investo · investe · ho investito', 'p', 'Il governo {investe} nell’istruzione.', 'Rząd inwestuje w edukację.');
  W('la concorrenza', 'ж', 'konkurencja', '', 'p', 'La {concorrenza} è forte.', 'Konkurencja jest silna.');
  W('il fallimento', 'ч', 'bankructwo; porażka', '', 'o', 'L’azienda è andata in {fallimento}.', 'Firma zbankrutowała.');
  W('il consumatore', 'ч', 'konsument', '', 'p', 'I {consumatori} comprano meno.', 'Konsumenci kupują mniej.');
  W('la domanda', 'ж', 'popyt; pytanie', 'l’offerta – podaż', 'o', 'La {domanda} di case è in aumento.', 'Popyt na domy rośnie.');
  W('il made in Italy', 'ч', 'włoska marka/produkcja (moda, design, jedzenie)', '', 't', 'Il {made in Italy} è famoso nel mondo.', 'Włoskie produkty są sławne na świecie.');

  L('B2', 'b2_politica', 'Polityka');
  W('il governo', 'ч', 'rząd', '', 'o', 'Il {governo} prepara una riforma.', 'Rząd przygotowuje reformę.');
  W('il Parlamento', 'ч', 'parlament (Camera + Senato)', '', 't', 'Il {Parlamento} ha approvato la legge.', 'Parlament przyjął ustawę.');
  W('il presidente del Consiglio', 'ч', 'premier Włoch', '', 'p', 'Il {presidente del Consiglio} ha parlato in tv.', 'Premier przemówił w telewizji.');
  W('le elezioni', 'мн', 'wybory', '', 'p', 'Le {elezioni} sono a settembre.', 'Wybory są we wrześniu.');
  W('votare', 'д', 'głosować', 'voto · vota · ho votato', 'o', 'Per chi hai {votato}?', 'Na kogo głosowałeś?');
  W('il partito', 'ч', 'partia', '', 'p', 'Quale {partito} ha vinto?', 'Która partia wygrała?');
  W('l’opposizione', 'ж', 'opozycja', '', 't', 'L’{opposizione} critica il piano.', 'Opozycja krytykuje plan.');
  W('la legge', 'ж', 'ustawa, prawo', 'lm. le leggi', 'o', 'La nuova {legge} entra in vigore a gennaio.', 'Nowa ustawa wchodzi w życie w styczniu.');
  W('la Costituzione', 'ж', 'konstytucja (z 1948 r.)', '', 'p', 'La {Costituzione} italiana è del 1948.', 'Konstytucja Włoch pochodzi z 1948 roku.');
  W('la coalizione', 'ж', 'koalicja', '', 't', 'La {coalizione} si è rotta.', 'Koalicja się rozpadła.');
  W('il deputato', 'ч', 'poseł', 'il senatore – senator', 'p', 'Il {deputato} ha votato contro.', 'Poseł głosował przeciw.');
  W('il referendum', 'ч', 'referendum', '', 't', 'Nel 1946 un {referendum} ha scelto la Repubblica.', 'W 1946 roku referendum wybrało republikę.');

  L('B2', 'b2_cultura', 'Kultura i sztuka');
  W('l’opera d’arte', 'ж', 'dzieło sztuki', '', 'p', 'Gli Uffizi custodiscono migliaia di {opere d’arte}.', 'Uffizi przechowują tysiące dzieł sztuki.');
  W('il quadro', 'ч', 'obraz', '', 'o', 'Il {quadro} è di Botticelli.', 'Obraz jest autorstwa Botticellego.');
  W('l’affresco', 'ч', 'fresk', 'lm. gli affreschi', 'p', 'Gli {affreschi} della Cappella Sistina sono di Michelangelo.', 'Freski Kaplicy Sykstyńskiej są dziełem Michała Anioła.');
  W('lo scrittore', 'ч', 'pisarz', 'la scrittrice', 'o', 'Italo Calvino è un grande {scrittore}.', 'Italo Calvino to wielki pisarz.');
  W('il romanzo', 'ч', 'powieść', '', 'f', '„Il nome della rosa” è un {romanzo} di Umberto Eco.', '„Imię róży” to powieść Umberto Eco.');
  W('lo spettacolo', 'ч', 'przedstawienie, spektakl', '', 'p', 'Lo {spettacolo} è esaurito.', 'Przedstawienie jest wyprzedane.');
  W('il palcoscenico', 'ч', 'scena', '', 'o', 'L’attore è sul {palcoscenico}.', 'Aktor jest na scenie.');
  W('il monumento', 'ч', 'pomnik; zabytek', '', 'p', 'Roma è piena di {monumenti}.', 'Rzym jest pełen zabytków.');
  W('il Rinascimento', 'ч', 'renesans', '', 'o', 'Firenze è la culla del {Rinascimento}.', 'Florencja jest kolebką renesansu.');
  W('rappresentare', 'д', 'przedstawiać', 'rappresento · rappresenta · ho rappresentato', 'p', 'Il quadro {rappresenta} una battaglia.', 'Obraz przedstawia bitwę.');
  W('il patrimonio', 'ч', 'dziedzictwo', '', 'o', 'L’Italia ha il più grande {patrimonio} UNESCO.', 'Włochy mają największe dziedzictwo UNESCO.');
  W('il regista', 'ч', 'reżyser', 'lm. i registi', 'o', 'Fellini è un {regista} leggendario.', 'Fellini to legendarny reżyser.');

  L('B2', 'b2_connettivi', 'Spójniki i łączniki');
  W('benché', 'з', 'chociaż (+ congiuntivo)', 'też: sebbene', 'o', 'È venuto, {benché} fosse malato.', 'Przyszedł, chociaż był chory.');
  W('mentre', 'з', 'podczas gdy', '', 'o', '{Mentre} cucino, lui legge.', 'Podczas gdy gotuję, on czyta.');
  W('dopo che', 'з', 'po tym, jak', '', 'o', '{Dopo che} abbiamo mangiato, siamo usciti.', 'Po tym, jak zjedliśmy, wyszliśmy.');
  W('prima che', 'з', 'zanim (+ congiuntivo)', 'prima di + bezokolicznik', 'o', 'Chiamami {prima che} parta il treno.', 'Zadzwoń, zanim odjedzie pociąg.');
  W('affinché', 'з', 'aby, żeby (+ congiuntivo)', 'też: perché', 'o', 'Parlo piano {affinché} tu capisca.', 'Mówię powoli, żebyś zrozumiał.');
  W('così che', 'з', 'tak że', '', 'o', 'Pioveva, {così che} siamo rimasti a casa.', 'Padało, tak że zostaliśmy w domu.');
  W('nel caso in cui', 'з', 'w razie gdyby', '', 'o', '{Nel caso in cui} servisse aiuto, chiamami.', 'Gdyby potrzebna była pomoc, zadzwoń.');
  W('più … più', 'з', 'im… tym', '', 'o', '{Più} studio, più capisco.', 'Im więcej się uczę, tym więcej rozumiem.');
  W('sia … sia', 'з', 'zarówno… jak i', '', 'o', 'Parla {sia} italiano sia polacco.', 'Mówi zarówno po włosku, jak i po polsku.');
  W('né … né', 'з', 'ani… ani', '', 'o', 'Non ho {né} tempo né voglia.', 'Nie mam ani czasu, ani ochoty.');
  W('invece', 'пр', 'natomiast; zamiast tego', 'invece di – zamiast', 'o', 'Non ha telefonato, {invece} ha scritto.', 'Nie zadzwonił, natomiast napisał.');
  W('pertanto', 'пр', 'zatem, w związku z tym', '', 'o', 'I prezzi salgono, {pertanto} la domanda scende.', 'Ceny rosną, zatem popyt spada.');

  L('B2', 'b2_diritto', 'Prawo i urzędy');
  W('il tribunale', 'ч', 'sąd', '', 'p', 'Il caso va in {tribunale}.', 'Sprawa trafi do sądu.');
  W('il giudice', 'ч', 'sędzia', '', 'o', 'Il {giudice} ha letto la sentenza.', 'Sędzia odczytał wyrok.');
  W('la sentenza', 'ж', 'wyrok', '', 'p', 'La {sentenza} è definitiva.', 'Wyrok jest prawomocny.');
  W('l’avvocato', 'ч', 'adwokat', '', 'p', 'Prima parlo con il mio {avvocato}.', 'Najpierw porozmawiam ze swoim adwokatem.');
  W('il contratto', 'ч', 'umowa', '', 'p', 'Legga bene il {contratto}.', 'Proszę uważnie przeczytać umowę.');
  W('firmare', 'д', 'podpisywać', 'firmo · firma · ho firmato', 'o', '{Firmi} qui, per favore.', 'Proszę tu podpisać.');
  W('il comune', 'ч', 'urząd gminy/miasta, gmina', '', 'o', 'Devo andare in {comune} per il certificato.', 'Muszę iść do urzędu po zaświadczenie.');
  W('la domanda (ufficiale)', 'ж', 'wniosek, podanie', 'fare domanda', 'o', 'Ho presentato la {domanda} di permesso.', 'Złożyłem wniosek o pozwolenie.');
  W('il permesso', 'ч', 'pozwolenie, zezwolenie', 'permesso di soggiorno – karta pobytu', 'p', 'Serve un {permesso} speciale.', 'Potrzebne jest specjalne pozwolenie.');
  W('vietare', 'д', 'zabraniać', 'vieto · vieta · ho vietato', 'o', 'Qui è {vietato} fumare.', 'Tu nie wolno palić.');
  W('il testimone', 'ч', 'świadek', '', 'o', 'Il {testimone} ha deposto in tribunale.', 'Świadek zeznawał w sądzie.');
  W('il codice fiscale', 'ч', 'włoski numer podatkowy (jak PESEL)', '', 'o', 'Per il contratto serve il {codice fiscale}.', 'Do umowy potrzebny jest numer podatkowy.');

  L('B2', 'b2_astratto', 'Pojęcia abstrakcyjne');
  W('lo sviluppo', 'ч', 'rozwój', '', 'o', 'Lo {sviluppo} della tecnologia è rapidissimo.', 'Rozwój technologii jest bardzo szybki.');
  W('la causa', 'ж', 'przyczyna; sprawa (sądowa)', '', 'p', 'Qual è la {causa} del problema?', 'Jaka jest przyczyna problemu?');
  W('la conseguenza', 'ж', 'skutek, konsekwencja', '', 'p', 'La guerra ha avuto {conseguenze} terribili.', 'Wojna miała straszne skutki.');
  W('la responsabilità', 'ж', 'odpowiedzialność', '', 'o', 'Abbiamo la {responsabilità} dei nostri figli.', 'Ponosimy odpowiedzialność za nasze dzieci.');
  W('la libertà', 'ж', 'wolność', '', 'o', 'La {libertà} è un bene prezioso.', 'Wolność to cenne dobro.');
  W('la sfida', 'ж', 'wyzwanie', '', 'o', 'È una grande {sfida}.', 'To wielkie wyzwanie.');
  W('la soluzione', 'ж', 'rozwiązanie', '', 'p', 'Cerchiamo una {soluzione}.', 'Szukamy rozwiązania.');
  W('l’influenza', 'ж', 'wpływ; grypa', '', 'p', 'I social hanno una grande {influenza}.', 'Media społecznościowe mają duży wpływ.');
  W('l’intenzione', 'ж', 'zamiar', '', 'p', 'Non era mia {intenzione}.', 'To nie był mój zamiar.');
  W('l’abitudine', 'ж', 'nawyk, przyzwyczajenie', '', 'o', 'È una cattiva {abitudine}.', 'To zły nawyk.');
  W('l’esperienza', 'ж', 'doświadczenie', '', 'p', 'Ha molta {esperienza} nell’insegnamento.', 'Ma duże doświadczenie w nauczaniu.');
  W('il pregiudizio', 'ч', 'uprzedzenie', '', 'o', 'Bisogna combattere i {pregiudizi}.', 'Trzeba walczyć z uprzedzeniami.');

  /* ===================== C1 ===================== */
  L('C1', 'c1_modi', 'Idiomy (1)');
  W('in bocca al lupo', 'ф', 'powodzenia (dosł. w paszczę wilka)', 'odp.: Crepi!', 'o', 'Domani hai l’esame? {In bocca al lupo}!', 'Jutro masz egzamin? Powodzenia!');
  W('avere le mani bucate', 'ф', 'mieć dziurawe ręce (rozrzutność)', '', 'o', 'Mio fratello {ha le mani bucate}.', 'Mój brat ma dziurawe ręce.');
  W('non vedere l’ora', 'ф', 'nie móc się doczekać', '', 'o', '{Non vedo l’ora} di partire!', 'Nie mogę się doczekać wyjazdu!');
  W('essere al verde', 'ф', 'być spłukanym', '', 'o', 'Fine mese, {sono al verde}.', 'Koniec miesiąca, jestem spłukany.');
  W('prendere in giro', 'ф', 'nabijać się z kogoś, robić w balona', '', 'o', 'Mi stai {prendendo in giro}?', 'Nabijasz się ze mnie?');
  W('costare un occhio della testa', 'ф', 'kosztować majątek', '', 'o', 'Questa borsa {costa un occhio della testa}.', 'Ta torebka kosztuje majątek.');
  W('acqua in bocca!', 'ф', 'ani słowa! (zachowaj tajemnicę)', '', 'o', 'È una sorpresa: {acqua in bocca}!', 'To niespodzianka: ani słowa!');
  W('fare la scarpetta', 'ф', 'wycierać talerz z sosu chlebem', '', 'o', 'Il sugo era buonissimo, ho {fatto la scarpetta}.', 'Sos był pyszny, wytarłem talerz chlebem.');
  W('avere un diavolo per capello', 'ф', 'być wściekłym', '', 'o', 'Oggi il capo {ha un diavolo per capello}.', 'Szef jest dziś wściekły.');
  W('menare il can per l’aia', 'ф', 'owijać w bawełnę', '', 'o', 'Smettila di {menare il can per l’aia}!', 'Przestań owijać w bawełnę!');
  W('a occhio e croce', 'ф', 'na oko, mniej więcej', '', 'o', '{A occhio e croce} saranno cento persone.', 'Na oko będzie ze sto osób.');
  W('non avere peli sulla lingua', 'ф', 'mówić bez ogródek', '', 'o', 'Mia nonna {non ha peli sulla lingua}.', 'Moja babcia mówi bez ogródek.');

  L('C1', 'c1_burocrazia', 'Język urzędowy');
  W('il modulo', 'ч', 'formularz', '', 'o', 'Compili il {modulo}, per favore.', 'Proszę wypełnić formularz.');
  W('la scadenza', 'ж', 'termin (ostateczny); data ważności', '', 'o', 'La {scadenza} è il 31 maggio.', 'Termin upływa 31 maja.');
  W('il certificato', 'ч', 'zaświadczenie', '', 'p', 'Mi serve un {certificato} di residenza.', 'Potrzebuję zaświadczenia o zamieszkaniu.');
  W('la residenza', 'ж', 'meldunek, miejsce zamieszkania', '', 'p', 'Ha la {residenza} a Milano.', 'Jest zameldowany w Mediolanie.');
  W('fare ricorso', 'ф', 'odwołać się', '', 'o', 'Contro la multa si può {fare ricorso}.', 'Od mandatu można się odwołać.');
  W('competente', 'п', 'właściwy (urząd); kompetentny', '', 'p', 'Chi è l’ufficio {competente}?', 'Który urząd jest właściwy?');
  W('la documentazione', 'ж', 'dokumentacja', '', 'p', 'Porti tutta la {documentazione}.', 'Proszę przynieść całą dokumentację.');
  W('compilare', 'д', 'wypełniać (formularz)', 'compilo · compila · ho compilato', 'p', 'Devo {compilare} questo modulo?', 'Mam wypełnić ten formularz?');
  W('ai sensi di', 'з', 'na mocy, zgodnie z (przepisem)', '', 'o', '{Ai sensi del} decreto n. 5…', 'Na mocy dekretu nr 5…');
  W('in merito a', 'з', 'w sprawie, odnośnie do', '', 'o', '{In merito al}la sua richiesta…', 'W sprawie pana prośby…');
  W('la delega', 'ж', 'upoważnienie, pełnomocnictwo', '', 'o', 'Senza {delega} non posso darle i documenti.', 'Bez upoważnienia nie mogę wydać panu dokumentów.');
  W('lo sportello', 'ч', 'okienko (w urzędzie, banku)', '', 'o', 'Si rivolga allo {sportello} numero 3.', 'Proszę się zgłosić do okienka nr 3.');

  L('C1', 'c1_verbi', 'Czasowniki zaawansowane');
  W('influenzare', 'д', 'wpływać na', 'influenzo · ha influenzato', 'p', 'La pubblicità {influenza} le nostre scelte.', 'Reklama wpływa na nasze wybory.');
  W('tenere conto di', 'ф', 'brać pod uwagę', '', 'o', 'Bisogna {tenere conto di} tutti i fattori.', 'Trzeba wziąć pod uwagę wszystkie czynniki.');
  W('rinunciare a', 'д', 'zrezygnować z', 'rinuncio · ha rinunciato', 'o', 'Ho {rinunciato} allo zucchero.', 'Zrezygnowałem z cukru.');
  W('evitare', 'д', 'unikać', 'evito · ha evitato', 'o', 'Dobbiamo {evitare} gli errori.', 'Musimy unikać błędów.');
  W('richiedere', 'д', 'wymagać; prosić o', 'richiedo · ha richiesto', 'o', 'Questo lavoro {richiede} pazienza.', 'Ta praca wymaga cierpliwości.');
  W('garantire', 'д', 'gwarantować, zapewniać', 'garantisco · ha garantito', 'p', 'Bisogna {garantire} la sicurezza.', 'Trzeba zapewnić bezpieczeństwo.');
  W('affrontare', 'д', 'stawić czoła, zmierzyć się z', 'affronto · ha affrontato', 'o', 'Dobbiamo {affrontare} il problema.', 'Musimy zmierzyć się z problemem.');
  W('sottolineare', 'д', 'podkreślać', 'sottolineo · ha sottolineato', 'o', 'Vorrei {sottolineare} un punto.', 'Chciałbym podkreślić jedną kwestię.');
  W('superare', 'д', 'przezwyciężyć; przekroczyć; zdać', 'supero · ha superato', 'o', 'Abbiamo {superato} la crisi.', 'Przezwyciężyliśmy kryzys.');
  W('contribuire', 'д', 'przyczyniać się', 'contribuisco · ha contribuito', 'p', 'Ognuno può {contribuire} alla tutela dell’ambiente.', 'Każdy może przyczynić się do ochrony środowiska.');
  W('respingere', 'д', 'odrzucać', 'respingo · ha respinto', 'o', 'Ha {respinto} l’offerta.', 'Odrzucił ofertę.');
  W('presupporre', 'д', 'zakładać (jako warunek)', 'presuppongo · ha presupposto', 'o', 'Il lavoro {presuppone} l’inglese.', 'Praca zakłada znajomość angielskiego.');

  L('C1', 'c1_aggettivi', 'Przymiotniki zaawansowane');
  W('controverso', 'п', 'kontrowersyjny', '', 'p', 'È una riforma {controversa}.', 'To kontrowersyjna reforma.');
  W('comprensibile', 'п', 'zrozumiały', '', 'p', 'La sua decisione è {comprensibile}.', 'Jego decyzja jest zrozumiała.');
  W('notevole', 'п', 'znaczny, godny uwagi', '', 'o', 'I costi sono aumentati in modo {notevole}.', 'Koszty znacznie wzrosły.');
  W('provvisorio', 'п', 'tymczasowy', '', 'p', 'È solo un risultato {provvisorio}.', 'To tylko wynik tymczasowy.');
  W('dubbio', 'п', 'wątpliwy', 'il dubbio – wątpliwość', 'o', 'Il successo è {dubbio}.', 'Sukces jest wątpliwy.');
  W('impegnativo', 'п', 'wymagający, absorbujący', '', 'o', 'È un compito {impegnativo}.', 'To wymagające zadanie.');
  W('variegato', 'п', 'różnorodny', '', 'o', 'Il pubblico è molto {variegato}.', 'Publiczność jest bardzo różnorodna.');
  W('preoccupante', 'п', 'niepokojący', '', 'o', 'La situazione è {preoccupante}.', 'Sytuacja jest niepokojąca.');
  W('inevitabile', 'п', 'nieunikniony', '', 'p', 'Il conflitto era {inevitabile}.', 'Konflikt był nieunikniony.');
  W('ovvio', 'п', 'oczywisty', '', 'o', 'È {ovvio}!', 'To oczywiste!');
  W('determinante', 'п', 'decydujący', '', 'p', 'Il prezzo è stato {determinante}.', 'Cena była decydująca.');
  W('affidabile', 'п', 'niezawodny, wiarygodny', '', 'o', 'È un collega {affidabile}.', 'To niezawodny kolega.');

  L('C1', 'c1_storia', 'Historia Włoch');
  W('l’Impero romano', 'ч', 'Cesarstwo Rzymskie', '', 'p', 'L’{Impero romano} d’Occidente cadde nel 476.', 'Cesarstwo zachodniorzymskie upadło w 476 roku.');
  W('il Comune medievale', 'ч', 'średniowieczna komuna miejska', '', 'o', 'Firenze era un potente {Comune medievale}.', 'Florencja była potężną komuną średniowieczną.');
  W('la Repubblica di Venezia', 'ж', 'Republika Wenecka (Serenissima)', '', 'p', 'La {Repubblica di Venezia} durò più di mille anni.', 'Republika Wenecka przetrwała ponad tysiąc lat.');
  W('il Risorgimento', 'ч', 'Risorgimento – zjednoczenie Włoch (XIX w.)', '', 'o', 'Garibaldi è l’eroe del {Risorgimento}.', 'Garibaldi to bohater Risorgimento.');
  W('l’Unità d’Italia', 'ж', 'zjednoczenie Włoch (1861)', '', 'p', 'L’{Unità d’Italia} fu proclamata nel 1861.', 'Zjednoczenie Włoch proklamowano w 1861 roku.');
  W('il fascismo', 'ч', 'faszyzm', '', 't', 'Il {fascismo} governò l’Italia dal 1922 al 1943.', 'Faszyzm rządził Włochami od 1922 do 1943 roku.');
  W('la Resistenza', 'ж', 'ruch oporu (1943–1945)', '', 'p', 'Il 25 aprile si festeggia la Liberazione e la {Resistenza}.', '25 kwietnia świętuje się Wyzwolenie i ruch oporu.');
  W('la Repubblica', 'ж', 'republika', 'Festa della Repubblica – 2 czerwca', 'p', 'La {Repubblica} italiana nacque nel 1946.', 'Republika Włoska powstała w 1946 roku.');
  W('il boom economico', 'ч', 'cud gospodarczy (lata 50.–60.)', '', 'p', 'Negli anni Sessanta c’è stato il {boom economico}.', 'W latach 60. nastąpił cud gospodarczy.');
  W('gli anni di piombo', 'мн', 'ołowiane lata (terroryzm lat 70.)', '', 'o', 'Gli {anni di piombo} furono segnati dal terrorismo.', 'Ołowiane lata naznaczył terroryzm.');
  W('la mafia', 'ж', 'mafia', '', 't', 'Falcone e Borsellino combatterono la {mafia}.', 'Falcone i Borsellino walczyli z mafią.');
  W('Montecassino', 'ч', 'Monte Cassino (bitwa 1944, udział Polaków)', '', 'p', 'Nel cimitero di {Montecassino} riposano soldati polacchi.', 'Na cmentarzu na Monte Cassino spoczywają polscy żołnierze.');

  /* ===================== C2 ===================== */
  L('C2', 'c2_letteratura', 'Język literacki');
  W('la nostalgia', 'ж', 'tęsknota, nostalgia', '', 'p', 'Lo prese una profonda {nostalgia} di casa.', 'Ogarnęła go głęboka tęsknota za domem.');
  W('il crepuscolo', 'ч', 'zmierzch', '', 'o', 'Al {crepuscolo} tornò a casa.', 'O zmierzchu wrócił do domu.');
  W('effimero', 'п', 'ulotny', '', 'o', 'La gloria è {effimera}.', 'Sława jest ulotna.');
  W('la malinconia', 'ж', 'melancholia', '', 'p', 'Pensava all’infanzia con {malinconia}.', 'Myślał o dzieciństwie z melancholią.');
  W('scintillare', 'д', 'migotać, iskrzyć się', '', 'o', 'Il lago {scintillava} al chiaro di luna.', 'Jezioro migotało w świetle księżyca.');
  W('il destino', 'ч', 'los, przeznaczenie', '', 'p', 'Il suo {destino} era segnato.', 'Jego los był przesądzony.');
  W('la solitudine', 'ж', 'samotność', '', 'o', 'La {solitudine} del poeta era voluta.', 'Samotność poety była zamierzona.');
  W('l’abisso', 'ч', 'otchłań', '', 'p', 'Guardò nell’{abisso}.', 'Spojrzał w otchłań.');
  W('la dolce vita', 'ж', 'słodkie życie (beztroska)', '', 'o', 'Sogniamo la {dolce vita} a Roma.', 'Marzymy o słodkim życiu w Rzymie.');
  W('il dolce far niente', 'ч', 'słodkie nicnierobienie', '', 'o', 'In vacanza pratico il {dolce far niente}.', 'Na wakacjach uprawiam słodkie nicnierobienie.');
  W('la sprezzatura', 'ж', 'nonszalancja, elegancka swoboda (Castiglione)', '', 'o', 'Si veste con una certa {sprezzatura}.', 'Ubiera się z pewną elegancką nonszalancją.');
  W('lo struggimento', 'ч', 'rozdzierająca tęsknota', '', 'o', 'Ricordava quei giorni con {struggimento}.', 'Wspominał te dni z rozdzierającą tęsknotą.');

  L('C2', 'c2_formale', 'Styl formalny');
  W('dunque', 'пр', 'zatem, a więc', '', 'o', 'Le condizioni sono soddisfatte; {dunque} il contratto è valido.', 'Warunki są spełnione, przeto umowa jest ważna.');
  W('nondimeno', 'пр', 'niemniej jednak', '', 'o', 'Il compito era arduo; {nondimeno} fu portato a termine.', 'Zadanie było trudne, niemniej zostało wykonane.');
  W('talvolta', 'пр', 'niekiedy', '', 'o', '{Talvolta} visitava la tomba del padre.', 'Niekiedy odwiedzał grób ojca.');
  W('qualora', 'з', 'w przypadku gdyby (+ congiuntivo)', '', 'o', '{Qualora} fosse necessario, la contatteremo.', 'Gdyby było to konieczne, skontaktujemy się z panią.');
  W('ritenere', 'д', 'uważać (za)', 'ritengo · ha ritenuto', 'o', '{Ritengo} opportuno aggiungere quanto segue.', 'Uważam za stosowne dodać, co następuje.');
  W('spettare a', 'д', 'należeć do (kompetencji)', 'spetta · è spettato', 'o', 'La decisione {spetta} al direttore.', 'Decyzja należy do dyrektora.');
  W('ovvero', 'з', 'czyli; albo', '', 'o', 'Il capoluogo, {ovvero} la città principale.', 'Stolica regionu, czyli główne miasto.');
  W('altresì', 'пр', 'również, ponadto (urzędowe)', '', 'o', 'Si comunica {altresì} che…', 'Informuje się ponadto, że…');
  W('decadere', 'д', 'wygasnąć, utracić ważność', '', 'o', 'Il permesso è {decaduto}.', 'Pozwolenie wygasło.');
  W('codesto', 'з', 'ten (przy rozmówcy – urzędowe, toskańskie)', '', 'o', 'Si prega {codesto} ufficio di rispondere.', 'Uprasza się ten urząd o odpowiedź.');
  W('in ottemperanza a', 'ф', 'w wykonaniu (przepisu)', '', 'o', '{In ottemperanza a} quanto previsto dalla legge…', 'W wykonaniu przepisów ustawy…');
  W('esimersi da', 'д', 'uchylać się od', '', 'o', 'Non posso {esimermi da} un commento.', 'Nie mogę uchylić się od komentarza.');

  L('C2', 'c2_modi2', 'Idiomy (2)');
  W('cadere a fagiolo', 'ф', 'trafić w sam raz', '', 'o', 'Il tuo aiuto {cade a fagiolo}.', 'Twoja pomoc trafia w sam raz.');
  W('rompere le scatole', 'ф', 'zawracać głowę, działać na nerwy', '', 'o', 'Smettila di {rompere le scatole}!', 'Przestań zawracać głowę!');
  W('fare il ponte', 'ф', 'zrobić sobie długi weekend (wolny dzień między świętem a weekendem)', '', 'o', 'Il primo maggio {facciamo il ponte}.', 'Na pierwszego maja robimy sobie długi weekend.');
  W('avere la testa fra le nuvole', 'ф', 'bujać w obłokach', '', 'o', 'Oggi {hai la testa fra le nuvole}.', 'Dziś bujasz w obłokach.');
  W('tirare acqua al proprio mulino', 'ф', 'ciągnąć wodę na swój młyn', '', 'p', 'Ognuno {tira acqua al proprio mulino}.', 'Każdy ciągnie wodę na swój młyn.');
  W('chi dorme non piglia pesci', 'ф', 'kto rano wstaje, temu Pan Bóg daje (dosł. kto śpi, nie łowi ryb)', '', 'o', 'Alzati! {Chi dorme non piglia pesci}.', 'Wstawaj! Kto rano wstaje…');
  W('tutto fa brodo', 'ф', 'wszystko się przyda', '', 'o', 'Sono solo dieci euro, ma {tutto fa brodo}.', 'To tylko dziesięć euro, ale wszystko się przyda.');
  W('essere in gamba', 'ф', 'być zdolnym, ogarniętym', '', 'o', 'Tua figlia {è} davvero {in gamba}.', 'Twoja córka jest naprawdę zdolna.');
  W('piove sul bagnato', 'ф', 'nieszczęścia chodzą parami (lub: bogatym zawsze więcej)', '', 'o', 'Ha vinto di nuovo: {piove sul bagnato}.', 'Znowu wygrał: pieniądz do pieniądza.');
  W('l’abito non fa il monaco', 'ф', 'nie szata zdobi człowieka', '', 'p', 'Non giudicarlo: {l’abito non fa il monaco}.', 'Nie oceniaj go: nie szata zdobi człowieka.');
  W('far venire il latte alle ginocchia', 'ф', 'nudzić śmiertelnie', '', 'o', 'Quel film {fa venire il latte alle ginocchia}.', 'Ten film śmiertelnie nudzi.');
  W('qui casca l’asino', 'ф', 'tu jest pies pogrzebany', '', 'o', 'Sembra facile, ma {qui casca l’asino}.', 'Wydaje się łatwe, ale tu jest pies pogrzebany.');

  L('C2', 'c2_trappole', 'Pułapki dla Polaków');
  W('il camino', 'ч', 'kominek (komin = il comignolo)', '', 'f', 'D’inverno accendiamo il {camino}.', 'Zimą rozpalamy w kominku.');
  W('la fattoria', 'ж', 'gospodarstwo rolne (nie faktura!)', 'faktura – la fattura', 'f', 'Abbiamo dormito in una {fattoria}.', 'Spaliśmy w gospodarstwie.');
  W('il cantiere', 'ч', 'plac budowy (nie kantor!)', 'kantor – il cambio', 'f', 'Davanti all’hotel c’è un {cantiere}.', 'Przed hotelem jest plac budowy.');
  W('la libreria', 'ж', 'księgarnia (biblioteka = biblioteca)', '', 'f', 'Ho comprato il libro in {libreria}.', 'Kupiłem książkę w księgarni.');
  W('il magazzino', 'ч', 'magazyn (sklep = negozio)', '', 'p', 'La merce è in {magazzino}.', 'Towar jest w magazynie.');
  W('il preservativo', 'ч', 'prezerwatywa (konserwant = il conservante!)', '', 'f', 'Attenzione: il {preservativo} non è un conservante!', 'Uwaga: „preservativo” to nie konserwant!');
  W('la firma', 'ж', 'podpis (firma = azienda, ditta)', '', 'f', 'Manca la sua {firma}.', 'Brakuje pana podpisu.');
  W('la bravura', 'ж', 'zręczność, talent', '', 'f', 'Ha suonato con grande {bravura}.', 'Zagrał z wielkim kunsztem.');
  W('morbido', 'п', 'miękki (nie morbid!)', '', 'f', 'Il pane è {morbido}.', 'Chleb jest miękki.');
  W('il salotto', 'ч', 'salon, pokój dzienny', '', 'p', 'Ci sediamo in {salotto}.', 'Usiądźmy w salonie.');
  W('l’autista', 'ч', 'kierowca (nie autysta!)', '', 'f', 'L’{autista} del pullman è gentile.', 'Kierowca autokaru jest miły.');
  W('la lettera', 'ж', 'list; litera', '', 'p', 'Ti ho scritto una {lettera}.', 'Napisałem do ciebie list.');
})();

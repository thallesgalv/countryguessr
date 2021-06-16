const dataPhrases = [
  {
    iso639_1: "ar",
    phrases: [
      "أحب ترك العمل بعد ثماني ساعات من استراحة الشاي.",
      "كان يرتدي نظارته الشمسية دائمًا في الليل.",
      "كانت الحافلة السياحية مليئة بالفتيات المراهقات المتجهات نحو مغامرتهن التالية.",
    ],
  },
  {
    iso639_1: "am",
    phrases: [
      "የሚሆነውን ቢያውቅ ኖሮ በጭራሽ ወደ ገላ መታጠቢያ ባልወጣ ነበር ፡፡",
      "ዜናውን ካቀረበች በኋላ ይጠብቃታል ብላ ባሰበችው ደስታ እየታጠበች ገላዋን ውስጥ ስትዘፍን ትሰማዋለች ፡፡",
    ],
  },
  {
    iso639_1: "az",
    phrases: [
      "Duşda onu xəbəri çatdırdıqdan sonra saxlayacağını ümid etdiyi bir sevinclə oxuyurdu.",
      "Qapı qarpızın üstünə çırpıldı.",
      "Yerə düşdüyü dəqiqə bunun səbəbinin uçma vəziyyəti olduğunu anladı.",
    ],
  },
  {
    iso639_1: "be",
    phrases: [
      "У той момант, калі яна прызямлілася, яна зразумела, што прычына ў гэтым - пералёт.",
      "Я з'еў шкарпэтку, бо людзі ў Інтэрнэце сказалі мне.",
      "Яна адкрыла сваю трэцюю бутэльку віна за ноч.",
    ],
  },
  {
    iso639_1: "bg",
    phrases: [
      "Тя отвори третата си бутилка вино за нощта.",
      "Я з'еў шкарпэтку, бо людзі ў Інтэрнэце сказалі мне.",
      "Яна адкрыла сваю трэцюю бутэльку віна за ноч.",
      "Във фризера нямаше сладолед, нито имаха пари да отидат до магазина.",
      "Той влезе в мазето с филма на ужасите от вечерта, преди да играе в главата си.",
    ],
  },
  {
    iso639_1: "bn",
    phrases: [
      "তিনি রাতের তার তৃতীয় বোতল মদ খুললেন।",
      "হট ডগ বানসে তার কলা খেতে তিনি পছন্দ করতেন।",
      "মাথায় বাজানোর আগে রাত থেকেই তিনি হরর মুভিটি দিয়ে বেসমেন্টে চলে গেলেন।",
      "ফ্রিজে কোনও আইসক্রিম ছিল না, বা দোকানে যাওয়ার জন্য তাদের কাছে টাকাও ছিল না।",
    ],
  },
  {
    iso639_1: "bs",
    phrases: [
      "Otvorila je svoju treću bocu vina te noći.",
      "Volio je jesti svoje banane u lepinjama sa hrenovkama.",
      "Ušao je u podrum s horor filmom iz večeri prije igranja u glavi.",
      "U zamrzivaču nije bilo sladoleda, niti su imali novca za odlazak u trgovinu.",
    ],
  },
  {
    iso639_1: "ca",
    phrases: [
      "Va obrir la seva tercera ampolla de vi de la nit.",
      "Li encantava menjar-se els plàtans en panets de gossos calents.",
      "Va entrar al soterrani amb la pel·lícula de terror de la nit abans de jugar al cap.",
      "Al congelador no hi havia gelat ni tenien diners per anar a la botiga.",
    ],
  },
  {
    iso639_1: "cs",
    phrases: [
      "Otevřela svou třetí noční láhev vína.",
      "Miloval jíst své banány v houskách.",
      "Vešel do sklepa s hororem z noci, než si zahrál v hlavě.",
      "V mrazáku nebyla zmrzlina ani neměli peníze, aby šli do obchodu.",
    ],
  },
  {
    iso639_1: "da",
    phrases: [
      "Hun åbnede sin tredje flaske vin om natten.",
      "Han elskede at spise sine bananer i hotdogsboller.",
      "Han gik ind i kælderen med gyserfilmen fra natten før han spillede i hovedet.",
      "Der var ingen is i fryseren, og de havde heller ikke penge til at gå i butikken.",
    ],
  },
  {
    iso639_1: "de",
    phrases: [
      "Sie öffnete ihre dritte Flasche Wein des Abends.",
      "Er liebte es, seine Bananen in Hot-Dog-Brötchen zu essen.",
      "Er ging in den Keller mit dem Horrorfilm aus der Nacht vor dem Spielen in seinem Kopf.",
      "Es gab kein Eis in der Gefriertruhe, und sie hatten auch kein Geld, um in den Laden zu gehen.",
    ],
  },
  {
    iso639_1: "de",
    phrases: [
      "Sie öffnete ihre dritte Flasche Wein des Abends.",
      "Er liebte es, seine Bananen in Hot-Dog-Brötchen zu essen.",
      "Er ging in den Keller mit dem Horrorfilm aus der Nacht vor dem Spielen in seinem Kopf.",
      "Es gab kein Eis in der Gefriertruhe, und sie hatten auch kein Geld, um in den Laden zu gehen.",
    ],
  },
  {
    iso639_1: "el",
    phrases: [
      "Άνοιξε το τρίτο μπουκάλι κρασί της νύχτας.",
      "Του άρεσε να τρώει τις μπανάνες του σε κουλουράκια χοτ-ντογκ.",
      "Μπήκε στο υπόγειο με την ταινία τρόμου από τη νύχτα πριν παίξει στο κεφάλι του.",
      "Δεν υπήρχε παγωτό στην κατάψυξη, ούτε είχαν χρήματα για να πάνε στο κατάστημα.",
    ],
  },
  {
    iso639_1: "el",
    phrases: [
      "Άνοιξε το τρίτο μπουκάλι κρασί της νύχτας.",
      "Του άρεσε να τρώει τις μπανάνες του σε κουλουράκια χοτ-ντογκ.",
      "Μπήκε στο υπόγειο με την ταινία τρόμου από τη νύχτα πριν παίξει στο κεφάλι του.",
      "Δεν υπήρχε παγωτό στην κατάψυξη, ούτε είχαν χρήματα για να πάνε στο κατάστημα.",
    ],
  },
  {
    iso639_1: "en",
    phrases: [
      "She had the gift of being able to paint songs.",
      "His mind was blown that there was nothing in space except space itself",
      "Writing a list of random sentences is harder than I initially thought it would be.",
    ],
  },
  {
    iso639_1: "es",
    phrases: [
      "Mi nueva casa está en una calle ancha que tiene muchos árboles. El piso de arriba de mi casa tiene tres dormitorios y un despacho para trabajar.",
      "Cuando era niño, mi mamá pensaba que los jóvenes debían practicar un deporte y tocar un instrumento. Esto me incentivó a jugar futbol y me enseñó a trabajar en equipo, generar confianza y buscar una meta común.",
    ],
  },
  {
    iso639_1: "et",
    phrases: [
      "Ta avas oma kolmanda veini pudeli öösel.",
      "Ta armastas oma banaane süüa hot dogi kuklites.",
      "Ta kõndis keldrisse koos õudusfilmiga öösel enne peas mängimist.",
      "Sügavkülmas ei olnud jäätist, samuti polnud neil raha poodi minekuks.",
    ],
  },
  {
    iso639_1: "fa",
    phrases: [
      "سومین بطری شراب شب خود را باز کرد.",
      "او عاشق خوردن موز خود در نان های هات داگ بود.",
      "او از شب قبل از بازی در ذهنش با فیلم ترسناک وارد زیرزمین شد.",
      "نه بستنی در فریزر بود و نه آنها پول داشتند که به فروشگاه بروند.",
    ],
  },
  {
    iso639_1: "fi",
    phrases: [
      "Hän avasi kolmannen pullonsa viiniä.",
      "Hän rakasti syödä banaanejaan hot dog-pullissa.",
      "Hän käveli kellarissa kauhuelokuvan kanssa edellisenä iltana ennen pelaamista päähänsä.",
      "Pakastimessa ei ollut jäätelöä, eikä heillä ollut rahaa mennä kauppaan.",
    ],
  },
  {
    iso639_1: "fr",
    phrases: [
      "Elle a ouvert sa troisième bouteille de vin de la nuit.",
      "Il aimait manger ses bananes dans des pains à hot-dog.",
      "Il est entré dans le sous-sol avec le film d'horreur de la nuit avant de jouer dans sa tête.",
      "Il n'y avait pas de glace dans le congélateur et ils n'avaient pas d'argent pour aller au magasin.",
    ],
  },
  {
    iso639_1: "fy",
    phrases: [
      "Se iepene har tredde flesse wyn fan 'e nacht.",
      "Hy hâlde fan it iten fan syn bananen yn hotdogbuns.",
      "Hy rûn de kelder yn mei de horrorfilm fan 'e nacht foardat hy yn syn holle spielde.",
      "D'r siet gjin iis yn 'e friezer, en se hienen ek gjin jild om nei de winkel te gean.",
    ],
  },
  {
    iso639_1: "ga",
    phrases: [
      "D’oscail sí a tríú buidéal fíona den oíche.",
      "Ba bhreá leis a chuid bananaí a ithe i borróga madraí te.",
      "Shiúil sé isteach san íoslach leis an scannán uafáis ón oíche sular imir sé ina chloigeann.",
      "Ní raibh uachtar reoite sa reoiteoir, ná ní raibh airgead acu le dul chuig an siopa.",
    ],
  },
  {
    iso639_1: "gd",
    phrases: [
      "Dh ’fhosgail i an treas botal fìon aice den oidhche.",
      "Bha e dèidheil air a bhith ag ithe a bhananathan ann am bunan coin teth.",
      "Choisich e a-steach don làr ìseal leis an fhilm uamhasach bhon oidhche mus do chluich e na cheann.",
      "Cha robh reòiteag anns an reothadair, agus cha robh airgead aca airson a dhol don bhùth.",
    ],
  },
  {
    iso639_1: "gl",
    phrases: [
      "Abriu a súa terceira botella de viño da noite.",
      "Encantáballe comer os seus plátanos en bollos de hot dog.",
      "Entrou no soto coa película de terror da noite anterior a xogar na cabeza.",
      "No conxelador non había xeado nin tiñan cartos para ir á tenda.",
    ],
  },
  {
    iso639_1: "gu",
    phrases: [
      "તેણે રાત્રે તેની દારૂની ત્રીજી બોટલ ખોલી.",
      "તેને હોટ ડોગ બનમાં તેની કેળા ખાવાનું ખૂબ ગમતું હતું.",
      "તે તેના મગજમાં રમતા પહેલા રાતથી હોરર મૂવી લઈને બેસમેન્ટમાં ગયો.",
      "ફ્રીઝરમાં આઈસ્ક્રીમ નહોતો, કે તેમની પાસે સ્ટોર પર જવા માટે પૈસા નહોતા.",
    ],
  },
  {
    iso639_1: "ha",
    phrases: [
      "Ta bude kwalban giya na uku na dare.",
      "Ya ƙaunaci cin ayabarsa a cikin buns na kare mai zafi.",
      "Ya shiga cikin ginshiki tare da fim mai ban tsoro daga dare kafin ya buga wasa a kansa.",
    ],
  },
  {
    iso639_1: "gl",
    phrases: [
      "Abriu a súa terceira botella de viño da noite.",
      "Encantáballe comer os seus plátanos en bollos de hot dog.",
      "Entrou no soto coa película de terror da noite anterior a xogar na cabeza.",
      "No conxelador non había xeado nin tiñan cartos para ir á tenda.",
    ],
  },
  {
    iso639_1: "hi",
    phrases: [
      "उसने रात की अपनी तीसरी शराब की बोतल खोली।",
      "उन्हें अपने केले को हॉट डॉग बन्स में खाना बहुत पसंद था।",
      "वह अपने सिर में खेलने से पहले रात से डरावनी फिल्म के साथ तहखाने में चला गया।",
      "फ्रीजर में आइसक्रीम नहीं थी और न ही उनके पास स्टोर जाने के लिए पैसे थे।",
    ],
  },
  {
    iso639_1: "hi",
    phrases: [
      "उसने रात की अपनी तीसरी शराब की बोतल खोली।",
      "उन्हें अपने केले को हॉट डॉग बन्स में खाना बहुत पसंद था।",
      "वह अपने सिर में खेलने से पहले रात से डरावनी फिल्म के साथ तहखाने में चला गया।",
      "फ्रीजर में आइसक्रीम नहीं थी और न ही उनके पास स्टोर जाने के लिए पैसे थे।",
    ],
  },
  {
    iso639_1: "hr",
    phrases: [
      "Otvorila je svoju treću bocu vina noći.",
      "Volio je jesti svoje banane u lepinjama s hrenovkama.",
      "Ušao je u podrum s horor filmom iz večeri prije igranja u glavi.",
      "U zamrzivaču nije bilo sladoleda, niti su imali novca za odlazak u trgovinu.",
    ],
  },
  {
    iso639_1: "hr",
    phrases: [
      "Otvorila je svoju treću bocu vina noći.",
      "Volio je jesti svoje banane u lepinjama s hrenovkama.",
      "Ušao je u podrum s horor filmom iz večeri prije igranja u glavi.",
      "U zamrzivaču nije bilo sladoleda, niti su imali novca za odlazak u trgovinu.",
    ],
  },
  {
    iso639_1: "ht",
    phrases: [
      "Li louvri twazyèm boutèy diven li lannwit lan.",
      "Li te renmen manje bannann li nan pen chen cho.",
      "Li te mache nan sousòl la ak fim nan laterè soti nan nwit lan la anvan jwe nan tèt li.",
      "Pa te gen okenn krèm glase nan frizè a, ni yo pa t 'gen lajan pou yo ale nan magazen an.",
    ],
  },
  {
    iso639_1: "hu",
    phrases: [
      "Kinyitotta az éjszaka harmadik üveg borát.",
      "Szerette a banánját hot-dog zsemlében enni.",
      "A fejében játszott éjszaka horrorfilmjével sétált be az alagsora.",
      "A fagyasztóban nem volt fagylalt, és pénzük sem volt a boltba menni.",
    ],
  },
  {
    iso639_1: "hy",
    phrases: [
      "Նա բացեց գիշերվա իր երրորդ շիշ գինին:",
      "Նա սիրում էր ուտել իր բանանը հոթ-դոգի բլիթներով:",
      "Նա մտավ նկուղ դեպի սարսափ ֆիլմը իր գլխում խաղալուց առաջ նախորդ գիշերվանից:",
      "Սառնարանում պաղպաղակ չկար, ոչ էլ փող ունեին խանութ գնալու համար:",
    ],
  },
  {
    iso639_1: "hy",
    phrases: [
      "Նա բացեց գիշերվա իր երրորդ շիշ գինին:",
      "Նա սիրում էր ուտել իր բանանը հոթ-դոգի բլիթներով:",
      "Նա մտավ նկուղ դեպի սարսափ ֆիլմը իր գլխում խաղալուց առաջ նախորդ գիշերվանից:",
      "Սառնարանում պաղպաղակ չկար, ոչ էլ փող ունեին խանութ գնալու համար:",
    ],
  },
  {
    iso639_1: "id",
    phrases: [
      "Dia membuka botol anggur ketiganya malam itu.",
      "Dia suka makan pisang di roti hot dog.",
      "Dia berjalan ke ruang bawah tanah dengan film horor dari malam sebelum bermain di kepalanya.",
      "Tidak ada es krim di lemari es, mereka juga tidak punya uang untuk pergi ke toko.",
    ],
  },
  {
    iso639_1: "id",
    phrases: [
      "Dia membuka botol anggur ketiganya malam itu.",
      "Dia suka makan pisang di roti hot dog.",
      "Dia berjalan ke ruang bawah tanah dengan film horor dari malam sebelum bermain di kepalanya.",
      "Tidak ada es krim di lemari es, mereka juga tidak punya uang untuk pergi ke toko.",
    ],
  },
  {
    iso639_1: "ig",
    phrases: [
      "O mepere karama mmanya ya nke atọ n’abalị.",
      "Ọ hụrụ iri unere ya na nkịta ọkụ.",
      "Ya na ihe nkiri dị egwu jere banye na okpuru ulo site n'abalị ahụ tupu ọ kpọọ isi ya.",
      "Enweghị ice cream dị na friza, ha enweghịkwa ego ha ga-eji gaa ụlọ ahịa.",
    ],
  },
  {
    iso639_1: "ii",
    phrases: [
      "O mepere karama mmanya ya nke atọ n’abalị.",
      "Ọ hụrụ iri unere ya na nkịta ọkụ.",
      "Ya na ihe nkiri dị egwu jere banye na okpuru ulo site n'abalị ahụ tupu ọ kpọọ isi ya.",
      "Enweghị ice cream dị na friza, ha enweghịkwa ego ha ga-eji gaa ụlọ ahịa.",
    ],
  },
  {
    iso639_1: "is",
    phrases: [
      "Hún opnaði sína þriðju vínflösku um nóttina.",
      "Hann elskaði að borða banana sína í pylsubollum.",
      "Hann gekk inn í kjallarann með hryllingsmyndina frá kvöldinu áður en hann lék í höfðinu á honum.",
      "Það var enginn ís í frystinum, né höfðu þeir peninga til að fara í búðina.",
    ],
  },
  {
    iso639_1: "it",
    phrases: [
      "Ha aperto la sua terza bottiglia di vino della notte",
      "Adorava mangiare le sue banane nei panini per hot dog",
      "Entrò nel seminterrato con il film dell'orrore della sera prima che giocasse nella sua testa.",
      "Non c'era il gelato nel congelatore, né avevano soldi per andare al negozio.",
    ],
  },
  {
    iso639_1: "ja",
    phrases: [
      "彼女はその夜の3本目のワインを開けた",
      "彼はバナナをホットドッグ バンズに入れて食べるのが大好きでした",
      "彼は頭の中で遊ぶ前夜からホラー映画と一緒に地下室に足を踏み入れた",
      "冷凍庫にはアイスクリームがなく、店に行くお金もありませんでした",
    ],
  },
  {
    iso639_1: "ja",
    phrases: [
      "彼女はその夜の3本目のワインを開けた",
      "彼はバナナをホットドッグ バンズに入れて食べるのが大好きでした",
      "彼は頭の中で遊ぶ前夜からホラー映画と一緒に地下室に足を踏み入れた",
      "冷凍庫にはアイスクリームがなく、店に行くお金もありませんでした",
    ],
  },
  {
    iso639_1: "ka",
    phrases: [
      "მან ღამის მესამე ბოთლი ღვინო გახსნა.",
      "მას უყვარდა ბანანის ჭამა ცხელი ძაღლის ფუნთუშაში.",
      "ის საშინელებათა ფილმით შევიდა სარდაფში წინა ღამის თავში თამაშის დროს.",
      "არც საყინულეში იყო ნაყინი და არც ფული ჰქონდათ მაღაზიაში წასასვლელად.",
    ],
  },
  {
    iso639_1: "kk",
    phrases: [
      "Ол түнгі шараптың үшінші бөтелкесін ашты.",
      "Ол банандарын хот-дог тоқаштарында жегенді ұнататын.",
      "Ол басында ойнағанға дейінгі түннен бастап қорқынышты фильммен бірге жертөлеге кірді.",
      "Мұздатқышта балмұздақ та болған жоқ, дүкенге баруға ақшалары да болған жоқ.",
    ],
  },
  {
    iso639_1: "kn",
    phrases: [
      "ಅವಳು ರಾತ್ರಿಯ ಮೂರನೆಯ ಬಾಟಲಿ ವೈನ್ ಅನ್ನು ತೆರೆದಳು.",
      "ಹಾಟ್ ಡಾಗ್ ಬನ್‌ಗಳಲ್ಲಿ ತನ್ನ ಬಾಳೆಹಣ್ಣನ್ನು ತಿನ್ನುವುದನ್ನು ಅವನು ಇಷ್ಟಪಟ್ಟನು.",
      "ಅವನು ತನ್ನ ತಲೆಯಲ್ಲಿ ಆಡುವ ಮೊದಲು ರಾತ್ರಿಯಿಂದ ಭಯಾನಕ ಚಲನಚಿತ್ರದೊಂದಿಗೆ ನೆಲಮಾಳಿಗೆಗೆ ನಡೆದನು.",
      "ಫ್ರೀಜರ್‌ನಲ್ಲಿ ಐಸ್ ಕ್ರೀಮ್ ಇರಲಿಲ್ಲ, ಅಂಗಡಿಗೆ ಹೋಗಲು ಅವರ ಬಳಿ ಹಣವೂ ಇರಲಿಲ್ಲ.",
    ],
  },
  {
    iso639_1: "km",
    phrases: [
      "នាងបើកដបស្រាទី ៣ នៅពេលយប់។",
      "គាត់ចូលចិត្តញ៉ាំចេករបស់គាត់នៅក្នុងនំឆ្កែក្តៅ។",
      "គាត់បានដើរចូលទៅក្នុងបន្ទប់ក្រោមដីជាមួយខ្សែភាពយន្តភ័យរន្ធត់ពីយប់មុនពេលលេងនៅក្នុងក្បាលរបស់គាត់។",
      "មិនមានការ៉េមនៅក្នុងម៉ាសីនតឹកកកហើយក៏មិនមានលុយដើម្បីទៅហាងនេះដែរ។",
    ],
  },
  {
    iso639_1: "ko",
    phrases: [
      "그녀는 밤에 세 번째 와인 한 병을 열었습니다.",
      "그는 핫도그 빵에 바나나를 먹는 것을 좋아했습니다.",
      "그는 머릿속에서 놀기 전 밤부터 공포 영화를 보며 지하로 들어갔다.",
      "냉동실에는 아이스크림이 없었고 가게에 갈 돈도 없었습니다.",
    ],
  },
  {
    iso639_1: "ku",
    phrases: [
      "Wê şûşeya xweya sêyemîn a şeraba şevê vekir.",
      "Wî hez dikir ku mûzên xwe di kulîlkên hot dog de bixwe.",
      "Ew ji şevê ve berî ku bi serê xwe bilîze bi fîlimê tirsnak kete jêrzemînê.",
      "Ne cemedek di cemedê de hebû, ne jî perê wan hebû ku biçin firoşgehê.",
    ],
  },
  {
    iso639_1: "kv",
    phrases: [
      "Wê şûşeya xweya sêyemîn a şeraba şevê vekir.",
      "Wî hez dikir ku mûzên xwe di kulîlkên hot dog de bixwe.",
      "Ew ji şevê ve berî ku bi serê xwe bilîze bi fîlimê tirsnak kete jêrzemînê.",
      "Ne cemedek di cemedê de hebû, ne jî perê wan hebû ku biçin firoşgehê.",
    ],
  },
  {
    iso639_1: "ky",
    phrases: [
      "Ал түндөгү үчүнчү бөтөлкө шарабын ачты.",
      "Ал бананды хот-дог булочкасында жегенди жакшы көрчү.",
      "Ал башына ойногондон мурунку түнү болгон үрөй учурган кинотасма менен подвалга кирген.",
      "Муздаткычта балмуздак болгон эмес, дүкөнгө барууга акчалары да жок болчу.",
    ],
  },
  {
    iso639_1: "lb",
    phrases: [
      "Si huet hir drëtt Fläsch Wäin vun der Nuecht opgemaach.",
      "Hien huet seng Bananne gär a Hot Dog Buns giess.",
      "Hien ass mam Horrorfilm vun der Nuecht an de Keller gaang ier en a sengem Kapp gespillt huet.",
      "Et war keng Glace am Tiefkühler, an och keng Suen fir an de Buttek ze goen.",
    ],
  },
  {
    iso639_1: "lo",
    phrases: [
      "ນາງໄດ້ເປີດເຫຼົ້າແວງທີສາມຂອງຄືນ.",
      "ລາວມັກກິນກ້ວຍຂອງລາວໃນເຂົ້າ ໜົມ ຮ້ອນ.",
      "ລາວຍ່າງເຂົ້າໄປໃນຫ້ອງໃຕ້ດິນດ້ວຍຮູບເງົາທີ່ຫນ້າຢ້ານກົວຈາກຄືນກ່ອນທີ່ຈະຫຼີ້ນຢູ່ໃນຫົວຂອງລາວ.",
      "ຢູ່ໃນຕູ້ແຊ່ແຂງບໍ່ມີເງິນກ້ອນ, ແລະພວກເຂົາກໍ່ບໍ່ມີເງິນທີ່ຈະໄປຮ້ານ.",
    ],
  },
  {
    iso639_1: "lt",
    phrases: [
      "Ji atidarė trečią nakties butelį vyno.",
      "Jis mėgo valgyti savo bananus dešrelių bandelėse.",
      "Jis žengė į rūsį su siaubo filmu iš vakaro, prieš žaisdamas savo galva.",
      "Šaldiklyje nebuvo nei ledų, nei jie turėjo pinigų eiti į parduotuvę.",
    ],
  },
  {
    iso639_1: "lv",
    phrases: [
      "Viņa atvēra savu trešo nakts vīna pudeli.",
      "Viņam ļoti patika ēst savus banānus cīsiņos.",
      "Viņš gāja pagrabā ar šausmu filmu no nakts, pirms spēlēja galvā.",
      "Saldētavā nebija saldējuma, un arī viņiem nebija naudas, lai dotos uz veikalu.",
    ],
  },
  {
    iso639_1: "mg",
    phrases: [
      "Nosokafany ny tavoahanginy divay fahatelo tamin'ny alina.",
      "Tiany ny mihinana ny akondro am-pisotroana alika mafana.",
      "Niditra tao ambany rihana izy niaraka tamin'ilay sarimihetsika mahatsiravina nanomboka ny alina talohan'ny nilalaovany tao an-dohany.",
      "Tsy nisy gilasy tao anaty vata fampangatsiahana, ary tsy nanam-bola handeha hamonjy ilay fivarotana.",
    ],
  },
  {
    iso639_1: "mi",
    phrases: [
      "I whakatuwherahia e ia tana ipu pounamu tuatoru o te po.",
      "He pai ki a ia te kai i ana panana i roto i nga peepi kuri wera.",
      "I haere ia ki te papararo me te kiriata whakamataku mai i te po i mua i tana takaro i tona mahunga.",
      "Kaore he aihikiriimi i te pouaka tio, kaore hoki a raatau moni ki te haere ki te toa.",
    ],
  },
  {
    iso639_1: "mk",
    phrases: [
      "Таа го отвори третото шише вино на ноќта.",
      "Тој обожаваше да ги јаде своите банани во бухти хот дог.",
      "Тој влегол во подрумот со хорор филмот од ноќта пред да си игра во главата.",
      "Немаше сладолед во замрзнувачот, ниту имаа пари да одат во продавницата.",
    ],
  },
  {
    iso639_1: "ml",
    phrases: [
      "രാത്രിയിലെ മൂന്നാമത്തെ കുപ്പി വീഞ്ഞ് അവൾ തുറന്നു.",
      "ഹോട്ട് ഡോഗ് ബണ്ണുകളിൽ വാഴപ്പഴം കഴിക്കുന്നത് അദ്ദേഹത്തിന് വളരെ ഇഷ്ടമായിരുന്നു.",
      "തലയിൽ കളിക്കുന്നതിനുമുമ്പ് രാത്രി മുതൽ ഹൊറർ സിനിമയുമായി അദ്ദേഹം ബേസ്മെന്റിലേക്ക് നടന്നു.",
      "ഫ്രീസറിൽ ഐസ്ക്രീം ഇല്ല, കടയിലേക്ക് പോകാൻ അവർക്ക് പണവുമില്ല.",
    ],
  },
  {
    iso639_1: "mn",
    phrases: [
      "Тэр шөнийнхөө гурав дахь дарсыг задлав.",
      "Тэрээр гадилаа хот-догны талханд хийж идэх дуртай байв.",
      "Тэрээр толгойдоо тоглохын өмнөх шөнийн аймшгийн киноны хамт подвал руу алхав.",
      "Хөлдөөгчинд зайрмаг ч байгаагүй, дэлгүүрт орох мөнгө ч тэдэнд байсангүй.",
    ],
  },
  {
    iso639_1: "mr",
    phrases: [
      "तिने रात्रीची तिसरी बाटली दार उघडली.",
      "त्याला केळी हॉट डॉग बनमध्ये खायला आवडत.",
      "डोक्यात खेळण्यापूर्वी रात्रीपासून तो हॉरर सिनेमा घेऊन तळघरात गेला.",
      "फ्रीजरमध्ये आईस्क्रीम नव्हतं, किंवा त्यांच्याकडे दुकानात जाण्यासाठी पैसे नव्हते.",
    ],
  },
  {
    iso639_1: "ms",
    phrases: [
      "Dia membuka sebotol wain ketiganya malam itu.",
      "Dia gemar memakan pisangnya dalam roti hot dog.",
      "Dia berjalan ke ruang bawah tanah dengan filem seram dari malam sebelum bermain di kepalanya.",
      "Tidak ada ais krim di dalam peti sejuk, dan mereka juga tidak mempunyai wang untuk pergi ke kedai.",
    ],
  },
  {
    iso639_1: "mt",
    phrases: [
      "Hija fetħet it-tielet flixkun inbid tal-lejl tagħha.",
      "Kien iħobb jiekol il-banana tiegħu f'buns hot dog.",
      "Huwa mexa fil-kantina bil-film tal-orrur mil-lejl ta 'qabel ma lagħab f'rasu.",
      "Ma kienx hemm ġelat fil-friża, u lanqas ma kellhom flus biex imorru fil-maħżen.",
    ],
  },
  {
    iso639_1: "my",
    phrases: [
      "သူမသည်ည၏တတိယမြောက်စပျစ်ရည်ပုလင်းကိုဖွင့်လိုက်သည်။",
      "သူသည်ပူပြင်းလှသောခွေးစားတော၌သူ၏ငှက်ပျောသီးစားခြင်းကိုနှစ်သက်သည်။",
      "သူသည်ညဥ့်နက်မှကြောက်မက်ဖွယ်ကောင်းသောရုပ်ရှင်ဖြင့်မြေအောက်ခန်းသို့ ဝင်၍ သူ၏ ဦး ခေါင်း၌မကစားမီသွားခဲ့သည်။",
      "ရေခဲသေတ္တာထဲမှာရေခဲမုန့်မရှိ၊ စတိုးဆိုင်ကိုသွားဖို့ပိုက်ဆံလည်းမရှိဘူး။",
    ],
  },
  {
    iso639_1: "ne",
    phrases: [
      "उनले रातको आफ्नो तेस्रो बोतल खोले।",
      "उसलाई तातो कुकुरको रोटीमा केरा खान मन पर्थ्यो।",
      "उनी आफ्नो टाउकोमा खेल्नु अघि रात देखि डरलाग्दो फिल्मको साथ तहखानेमा हिडे।",
      "त्यहाँ फ्रिजरमा कुनै आइसक्रिम थिएन, न त स्टोरमा जानको लागि उनीहरूसँग पैसा थियो।",
    ],
  },
  {
    iso639_1: "nl",
    phrases: [
      "Ze opende haar derde fles wijn van de avond.",
      "Hij vond het heerlijk om zijn bananen in hotdogbroodjes te eten.",
      "Hij liep de kelder in met de horrorfilm van de avond voor het spelen in zijn hoofd.",
      "Er was geen ijsje in de vriezer en ze hadden ook geen geld om naar de winkel te gaan.",
    ],
  },
  {
    iso639_1: "no",
    phrases: [
      "Hun åpnet nattens tredje flaske vin.",
      "Han elsket å spise bananene sine i pølseboller.",
      "Han gikk inn i kjelleren med skrekkfilmen fra kvelden før han spilte i hodet.",
      "Det var ingen is i fryseren, og de hadde heller ikke penger til å gå i butikken.",
    ],
  },
  {
    iso639_1: "ny",
    phrases: [
      "Anatsegula botolo lake lachitatu la vinyo usiku.",
      "Amakonda kudya nthochi zake mumagulu otentha agalu.",
      "Analowa mchipinda chapansi ndi kanema wowopsa kuyambira usiku asanafike pamutu pake.",
      "Kunalibe ayisikilimu mufiriji, komanso analibe ndalama zoti apite kusitolo.",
    ],
  },
  {
    iso639_1: "or",
    phrases: [
      "ସେ ରାତିର ତୃତୀୟ ବୋତଲ ମଦ ଖୋଲିଦେଲା |",
      "ସେ ହଟ୍ ଡଗ୍ ବନ୍ରେ ନିଜର କଦଳୀ ଖାଇବାକୁ ଭଲ ପାଉଥିଲେ |",
      "ସେ ତାଙ୍କ ମୁଣ୍ଡରେ ଖେଳିବା ପୂର୍ବରୁ ରାତିରୁ ଭୟଙ୍କର ଚଳଚ୍ଚିତ୍ର ସହିତ ବେସମେଣ୍ଟକୁ ଯାଇଥିଲେ |",
      "ଫ୍ରିଜରେ କ ice ଣସି ଆଇସ୍କ୍ରିମ୍ ନଥିଲା କିମ୍ବା ଦୋକାନକୁ ଯିବାକୁ ସେମାନଙ୍କ ପାଖରେ ଟଙ୍କା ନଥିଲା |",
    ],
  },
  {
    iso639_1: "pa",
    phrases: [
      "ਉਸਨੇ ਰਾਤ ਦੀ ਆਪਣੀ ਤੀਜੀ ਬੋਤਲ ਖੋਲ੍ਹ ਦਿੱਤੀ.",
      "ਉਸਨੂੰ ਆਪਣੇ ਕੇਲੇ ਗਰਮ ਕੁੱਤੇ ਦੇ ਬੰਨਿਆਂ ਵਿੱਚ ਖਾਣਾ ਪਸੰਦ ਸੀ.",
      "ਉਹ ਆਪਣੇ ਦਿਮਾਗ ਵਿਚ ਖੇਡਣ ਤੋਂ ਪਹਿਲਾਂ ਰਾਤ ਤੋਂ ਹੀ ਡਰਾਉਣੀ ਫਿਲਮ ਨਾਲ ਬੇਸਮੈਂਟ ਵਿਚ ਚਲਾ ਗਿਆ.",
      "ਫ੍ਰੀਜ਼ਰ ਵਿਚ ਨਾ ਕੋਈ ਆਈਸ ਕਰੀਮ ਸੀ ਅਤੇ ਨਾ ਹੀ ਉਨ੍ਹਾਂ ਕੋਲ ਸਟੋਰ 'ਤੇ ਜਾਣ ਲਈ ਪੈਸੇ ਸਨ.",
    ],
  },
  {
    iso639_1: "pl",
    phrases: [
      "Otworzyła swoją trzecią butelkę wina tego wieczoru.",
      "Uwielbiał jeść banany w bułkach z hot dogami.",
      "Wszedł do piwnicy z horrorem z nocy, zanim zaczął grać w swojej głowie.",
      "W zamrażarce nie było lodów ani pieniędzy na zakupy.",
    ],
  },
  {
    iso639_1: "ps",
    phrases: [
      "هغه د شپې دریم بوتل شراب خلاص کړل.",
      "هغه د کیلي په ګرمو سپي بنس کې خوړل خوښ کړل.",
      "هغه د شپې راهیسې د هغه په سر کې لوبې کولو دمخه د وحشتناکه فلم سره تشناب ته لاړ.",
      "په فریزر کې هیڅ آیس کریم شتون نه درلود ، او نه یې پلورنځي ته د تګ لپاره پیسې درلودې.",
    ],
  },
  {
    iso639_1: "pt",
    phrases: [
      "Ela abriu sua terceira garrafa de vinho da noite.",
      "Ele adorava comer suas bananas em pãezinhos de cachorro-quente.",
      "Ele entrou no porão com o filme de terror da noite anterior passando em sua cabeça.",
      "Não havia sorvete no freezer, nem eles tinham dinheiro para ir ao armazém.",
    ],
  },
  {
    iso639_1: "ro",
    phrases: [
      "Își deschise a treia sticlă de vin din noapte.",
      "Îi plăcea să-și mănânce bananele în chifle cu hot dog.",
      "A intrat în subsol cu filmul de groază din noaptea dinainte de a juca în cap.",
      "Nu era înghețată în congelator și nici nu aveau bani pentru a merge la magazin.",
    ],
  },
  {
    iso639_1: "ru",
    phrases: [
      "Она открыла третью за ночь бутылку вина.",
      "Он любил есть свои бананы в булочках для хот-догов.",
      "Он вошел в подвал с фильмом ужасов из ночи, прежде чем играть в его голове.",
      "В морозилке не было ни мороженого, ни денег на магазин.",
    ],
  },
  {
    iso639_1: "rw",
    phrases: [
      "Yakinguye icupa rye rya gatatu rya vino yijoro.",
      "Yakundaga kurya ibitoki bye mumashyi ashyushye.",
      "Yinjiye mu nsi yo hasi hamwe na firime iteye ubwoba kuva nijoro mbere yo gukina mumutwe.",
      "Nta ice cream yari muri firigo, nta n'amafaranga bari bafite yo kujya mu iduka.",
    ],
  },
  {
    iso639_1: "sd",
    phrases: [
      "هوءَ رات جي شراب جي ٽين بوتل کوليندي",
      "هن پنهنجي ڪتن کي گرم ڪتن جي بنڪن ۾ کائڻ پسند ڪيو.",
      "هو پنهنجي سر ۾ راند ڪرڻ کان پهريان رات کان خوفناڪ فلم سان گڏ بيسمينٽ ۾ هليو ويو.",
    ],
  },
  {
    iso639_1: "si",
    phrases: [
      "ඇය රාත්‍රියේ ඇගේ තුන්වන වයින් බෝතලය විවෘත කළාය.",
      "ඔහු තම කෙසෙල් හොට් ඩෝග් බනිස් ආහාරයට ගැනීමට ප්‍රිය කළේය.",
      "ඔහු හිසේ සෙල්ලම් කිරීමට පෙර රාත්‍රියේ සිට ත්‍රාසජනක චිත්‍රපටය සමඟ පහළම මාලය තුළට ගියේය.",
      "ශීතකරණය තුළ අයිස්ක්‍රීම් නොතිබූ අතර ගබඩාවට යාමට ඔවුන්ට මුදල්ද නොතිබුණි.",
    ],
  },
  {
    iso639_1: "sk",
    phrases: [
      "Otvorila svoju tretiu nočnú fľašu vína.",
      "Veľmi rád jedol svoje banány v buchtách s párkami v rožku.",
      "Vošiel do suterénu s hororom z noci a potom si zahral v hlave.",
      "V mrazničke nebola zmrzlina, nemali ani peniaze na to, aby šli do obchodu.",
    ],
  },
  {
    iso639_1: "sl",
    phrases: [
      "Odprla je svojo tretjo steklenico nočnega vina.",
      "Zelo rad je jedel svoje banane v žemljicah s hrenovkami.",
      "Pred igranjem v glavi je v klet vstopil z grozljivko iz noči.",
      "V zamrzovalniku ni bilo sladoleda, niti niso imeli denarja, da bi šli v trgovino.",
    ],
  },
  {
    iso639_1: "sm",
    phrases: [
      "Sa ia tatala lana fagu uaina lona tolu o le po.",
      "Na fiafia o ia e 'ai ana faʻi i totonu o' ai vevela taʻifau.",
      "Na savali o ia i le potu i lalo ma le ata mataga mai le po ae le i taalo i lona ulu.",
      "E leai se aisa kulimi i totonu o le pusaaisa, e leai foi ni a latou tupe e o ai i le faleoloa.",
    ],
  },
  {
    iso639_1: "sn",
    phrases: [
      "Akavhura bhodhoro rake rechitatu rewaini yehusiku.",
      "Aifarira kudya mabhanana ake mumoto unopisa wembwa.",
      "Akafamba achipinda mukamuri repasi nefirimu rinotyisa kubva manheru asati atamba mumusoro wake.",
      "Pakanga pasina ice cream mufiriji, uye vaive vasina mari yekuenda kuchitoro.",
    ],
  },
  {
    iso639_1: "so",
    phrases: [
      "Waxay furtay dhalada saddexaad ee khamriga ee habeenka.",
      "Wuxuu jeclaa inuu cuno mooskiisa rootida eyga kulul.",
      "Wuxuu la galay qeybta hoose ee filimka naxdinta leh habeenkii ka hor inta uusan ku ciyaarin madaxiisa.",
      "Jalaatada kuma jirin qaboojiyaha, mana haysan lacag ay ku aadaan dukaanka.",
    ],
  },
  {
    iso639_1: "sq",
    phrases: [
      "Ajo hapi shishen e saj të tretë me verë të natës.",
      "Ai pëlqente të hante banane në tufa hot dog.",
      "Ai hyri në bodrum me filmin horror nga një natë para se të luante në kokën e tij.",
      "Nuk kishte akullore në frigorifer, dhe as nuk kishin para për të shkuar në dyqan.",
    ],
  },
  {
    iso639_1: "sr",
    phrases: [
      "Отворила је своју трећу флашу вина те ноћи.",
      "Волео је да једе своје банане у лепињама са виршлама.",
      "Ушао је у подрум са хорор филмом из вечери пре играња у глави.",
      "У замрзивачу није било сладоледа, нити су имали новца за одлазак у продавницу.",
    ],
  },
  {
    iso639_1: "st",
    phrases: [
      "O ile a bula botlolo ea hae ea boraro ea veine bosiu.",
      "O ne a rata ho ja libanana tsa hae ka libanse tse chesang tsa lintja.",
      "O kene ka kamoreng e ka tlase ka filimi e tšosang ho tloha bosiung ba pele a bapala hloohong ea hae.",
      "Ho ne ho se na ice cream ka sehatsetsing, hape ba se na chelete ea ho ea lebenkeleng.",
    ],
  },
  {
    iso639_1: "su",
    phrases: [
      "Anjeunna muka botol anggur anu katilu dina wengi.",
      "Anjeunna resep tuang cau na dina roti anjing panas.",
      "Anjeunna lebet ka kolong bawah sareng pilem horor ti wengi sateuacan maén dina sirahna.",
      "Teu aya és krim dina freezer, ogé teu ngagaduhan artos kanggo angkat ka toko.",
    ],
  },
  {
    iso639_1: "sv",
    phrases: [
      "Hon öppnade upp sin tredje flaska vin på natten.",
      "Han älskade att äta sina bananer i korvbullar.",
      "Han gick in i källaren med skräckfilmen från natten innan han spelade i huvudet.",
      "Det fanns ingen glass i frysen och de hade inte heller pengar att gå till affären.",
    ],
  },
  {
    iso639_1: "sw",
    phrases: [
      "Alifungua chupa yake ya tatu ya divai ya usiku.",
      "Alipenda kula ndizi zake kwenye buns moto mbwa.",
      "Aliingia ndani ya chumba cha chini na sinema ya kutisha kutoka usiku kabla ya kucheza kichwani mwake.",
      "Hakukuwa na ice cream kwenye friza, wala hawakuwa na pesa za kwenda dukani.",
    ],
  },
  {
    iso639_1: "ta",
    phrases: [
      "அவள் இரவின் மூன்றாவது மது பாட்டிலைத் திறந்தாள்.",
      "அவர் தனது வாழைப்பழங்களை ஹாட் டாக் பன்களில் சாப்பிடுவதை விரும்பினார்.",
      "அவர் தலையில் விளையாடுவதற்கு முன்பு இரவு முதல் திகில் படத்துடன் அடித்தளத்தில் நுழைந்தார்.",
      "உறைவிப்பான் பகுதியில் ஐஸ்கிரீம் இல்லை, கடைக்குச் செல்ல அவர்களிடம் பணம் இல்லை.",
    ],
  },
  {
    iso639_1: "te",
    phrases: [
      "ఆమె రాత్రి తన మూడవ బాటిల్ వైన్ తెరిచింది.",
      "అతను తన అరటిని హాట్ డాగ్ బన్స్‌లో తినడం ఇష్టపడ్డాడు.",
      "అతను తన తలలో ఆడటానికి ముందు రాత్రి నుండి హర్రర్ సినిమాతో నేలమాళిగలోకి నడిచాడు.",
      "ఫ్రీజర్‌లో ఐస్ క్రీం లేదు, దుకాణానికి వెళ్ళడానికి వారికి డబ్బు లేదు.",
    ],
  },
  {
    iso639_1: "tg",
    phrases: [
      "Вай шишаи сеюми шароби шабро кушодааст.",
      "Ӯ дӯст медошт, ки бананҳояшро дар булочкаҳои хот-дог хурад.",
      "Вай бо филми даҳшатнок аз шаби пеш аз бозӣ дар сари худ ба таҳхона даромад.",
      "Дар яхдон яхмос набуд ва онҳо барои ба мағоза рафтан пул надоштанд.",
    ],
  },
  {
    iso639_1: "th",
    phrases: [
      "เธอเปิดไวน์ขวดที่สามในคืนนั้น",
      "เขาชอบกินกล้วยในขนมปังฮอทดอก",
      "เขาเดินเข้าไปในห้องใต้ดินพร้อมกับหนังสยองขวัญเมื่อคืนก่อนจะเล่นอยู่ในหัว",
      "ไม่มีไอศกรีมอยู่ในช่องแช่แข็ง และพวกเขาไม่มีเงินไปที่ร้าน",
    ],
  },
  {
    iso639_1: "tk",
    phrases: [
      "Gijäniň üçünji çüýşesini açdy.",
      "Bananlaryny gyzgyn itlerde iýmegi gowy görýärdi.",
      "Kellesinde oýnamazdan gijeden gorkunç film bilen ýerzemine girdi.",
      "Doňduryjyda doňdurma ýokdy, dükana gitmäge pul ýokdy.",
    ],
  },
  {
    iso639_1: "tl",
    phrases: [
      "Binuksan niya ang kanyang pangatlong bote ng alak ng gabi.",
      "Gustung-gusto niya ang pagkain ng kanyang mga saging sa mainit na mga buns ng aso.",
      "Lumakad siya sa silong kasama ang nakakatakot na pelikula mula sa gabi bago tumugtog sa kanyang ulo.",
      "Walang ice cream sa freezer, o wala silang pera upang mapunta sa tindahan.",
    ],
  },
  {
    iso639_1: "tn",
    phrases: [
      "",
      "",
      "",
      "",
    ],
  },
  {
    iso639_1: "tr",
    phrases: [
      "Gecenin üçüncü şişe şarabını açtı.",
      "Muzlarını sosisli çöreklerde yemeyi severdi.",
      "Kafasında oynamadan önceki geceki korku filmiyle bodruma girdi.",
      "Dondurucuda dondurma yoktu, markete gidecek paraları da yoktu.",
    ],
  },
  {
    iso639_1: "tt",
    phrases: [
      "Ул төнге өченче шешә шәрабын ачты.",
      "Ул үзенең бананнарын кайнар эт пешкәләрендә ашарга ярата иде.",
      "Ул башында уйнаганчы төннән куркыныч кино белән подвалга керде.",
      "Суыткычта туңдырма юк иде, кибеткә барыр өчен акчалары да юк иде.",
    ],
  },
  {
    iso639_1: "ug",
    phrases: [
      "ئۇ كېچىدىكى ئۈچىنچى بوتۇلكا ھاراقنى ئاچتى.",
      "ئۇ باناننى قىزىق ئىت بولكىسىدا يېيىشنى ياخشى كۆرەتتى.",
    ],
  },
  {
    iso639_1: "uk",
    phrases: [
      "Вона відкрила свою третю пляшку вина за ніч.",
      "Він любив їсти свої банани в булочках з хот-догами.",
      "Він зайшов у підвал з фільмом жахів з ночі перед тим, як грати в його голові.",
      "У морозильній камері морозива не було, ані грошей, щоб сходити в магазин, у них не було.",
    ],
  },
  {
    iso639_1: "ur",
    phrases: [
      "اس نے رات کی شراب کی تیسری بوتل کھولی۔",
      "اسے ہاٹ ڈاگ بنس میں اپنے کیلے کھانا پسند تھا۔",
    ],
  },
  {
    iso639_1: "uz",
    phrases: [
      "U tunning uchinchi shishasini ochdi.",
      "U bananlarini hot-dog bulkalarida eyishni yaxshi ko'rardi.",
      "U kecha boshida o'ynashdan oldin dahshatli film bilan podvalga kirdi.",
      "Muzlatgichda na muzqaymoq bor edi, na do'konga borishga pullari yo'q edi.",
    ],
  },
  {
    iso639_1: "vi",
    phrases: [
      "Cô mở chai rượu thứ ba trong đêm.",
      "Anh ấy thích ăn chuối của mình trong bánh xúc xích.",
      "Anh bước vào tầng hầm với bộ phim kinh dị đêm trước cứ lởn vởn trong đầu.",
      "Không có kem trong tủ đông, họ cũng không có tiền để ra cửa hàng.",
    ],
  },
  {
    iso639_1: "xh",
    phrases: [
      "Wavula ibhotile yakhe yesithathu yewayini yasebusuku.",
      "Wayekuthanda ukutya iibhanana zakhe kwiibhokhwe ezishushu.",
      "Ungene kwigumbi elingaphantsi kunye nomdlalo bhanyabhanya owoyikisayo wasebusuku ngaphambi kokudlala entlokweni yakhe.",
      "Kwakungekho ice cream kwisikhenkcezisi, kwaye babengenayo imali yokuya evenkileni.",
    ],
  },
  {
    iso639_1: "yi",
    phrases: [
      "זי האָט געעפֿנט איר דריטן פֿלאַש ווײַן פֿון דער נאַכט.",
      "ער געגאנגען אין די קעלער מיט די גרויל פֿילם פון די נאַכט איידער פּלייינג אין זיין קאָפּ.",
    ],
  },
  {
    iso639_1: "yo",
    phrases: [
      "O ṣii igo ọti-waini kẹta ti alẹ.",
      "O fẹran jijẹ banan rẹ ninu awọn buns aja ti o gbona.",
      "O rin si isalẹ ile pẹlu fiimu ẹru lati alẹ ṣaaju ki o to dun ni ori rẹ.",
    ],
  },
  {
    iso639_1: "zu",
    phrases: [
      "Uvule ibhodlela lakhe lesithathu lewayini ebusuku.",
      "Wayekuthanda ukudla ubhanana wakhe ngamabhanisi wezinja ezishisayo.",
      "Wangena egumbini elingaphansi nge-movie ethusayo kusukela ebusuku ngaphambi kokudlala ekhanda lakhe.",
      "Kwakungekho ice cream efrijini, futhi babengenayo imali yokuya esitolo.",
    ],
  },
  {
    iso639_1: "zh",
    phrases: [
      "她打开了她今晚的第三瓶酒",
      "他喜欢吃热狗面包里的香蕉",
      "他带着前一天晚上的恐怖电影走进地下室，在脑海里播放",
      "冰箱里没有冰淇淋，他们也没有钱去商店",
    ],
  },
];

export { dataPhrases };

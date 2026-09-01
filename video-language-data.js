/*
 * Seven 原创动画多语言旁白包
 *
 * 使用方式：
 *   const pack = window.SEVEN_VIDEO_LANGUAGE_PACKS.videos[videoId][languageName];
 *
 * 每个 chapters 数组都与 app.js 中同 ID 视频的原始章节一一对应。
 * 章节时间继续使用 app.js 的原始 time，这里只提供字幕和旁白文本。
 */
(function exposeSevenVideoLanguagePacks(global) {
  "use strict";

  const packs = {
    version: 1,
    updatedAt: "2026-09-01",
    defaultLanguage: "zh-CN",
    languages: {
      "en-US": { label: "英语", nativeLabel: "English", speechRate: 0.86 },
      "ja-JP": { label: "日语", nativeLabel: "日本語", speechRate: 0.84 },
      "es-ES": { label: "西班牙语", nativeLabel: "Español", speechRate: 0.84 },
      "fr-FR": { label: "法语", nativeLabel: "Français", speechRate: 0.84 },
      "de-DE": { label: "德语", nativeLabel: "Deutsch", speechRate: 0.82 },
    },
    bilingualStrategy: {
      id: "zh-en",
      label: "中英双语",
      primaryLanguage: "zh-CN",
      companionLanguage: "en-US",
      chapterMode: "primary-then-companion",
      talkMode: "primary-then-companion",
    },
    videos: {
      "color-parade": {
        "en-US": {
          talk: "Where can you find red, blue, or yellow today?",
          chapters: [
            { caption: "Color friends, come and play!", narration: "Color friends, come and play!" },
            { caption: "A red apple. Red!", narration: "A red apple. Red. Red!" },
            { caption: "A blue balloon. Blue!", narration: "A blue balloon. Blue. Blue!" },
            { caption: "A yellow sun. Yellow!", narration: "A yellow sun. Yellow. Yellow!" },
            { caption: "Red, blue, yellow. Pretty colors!", narration: "Red, blue, yellow. Do you remember them?" },
          ],
        },
        "ja-JP": {
          talk: "きょう、あか、あお、きいろをどこで見つけた？",
          chapters: [
            { caption: "いろのお友だち、あつまれ！", narration: "いろのお友だち、あつまれ！" },
            { caption: "あかいりんご。あか！", narration: "あかいりんご。あか、あか！" },
            { caption: "あおいふうせん。あお！", narration: "あおいふうせん。あお、あお！" },
            { caption: "きいろいおひさま。きいろ！", narration: "きいろいおひさま。きいろ、きいろ！" },
            { caption: "あか、あお、きいろ。きれいだね！", narration: "あか、あお、きいろ。おぼえたかな？" },
          ],
        },
        "es-ES": {
          talk: "¿Dónde ves hoy rojo, azul o amarillo?",
          chapters: [
            { caption: "¡Amigos de colores, venid!", narration: "¡Amigos de colores, venid a jugar!" },
            { caption: "Una manzana roja. ¡Rojo!", narration: "Una manzana roja. Rojo, rojo." },
            { caption: "Un globo azul. ¡Azul!", narration: "Un globo azul. Azul, azul." },
            { caption: "Un sol amarillo. ¡Amarillo!", narration: "Un sol amarillo. Amarillo, amarillo." },
            { caption: "Rojo, azul y amarillo. ¡Qué bonitos!", narration: "Rojo, azul y amarillo. ¿Los recuerdas?" },
          ],
        },
        "fr-FR": {
          talk: "Où vois-tu du rouge, du bleu ou du jaune aujourd'hui ?",
          chapters: [
            { caption: "Les couleurs, venez jouer !", narration: "Les couleurs, venez jouer avec nous !" },
            { caption: "Une pomme rouge. Rouge !", narration: "Une pomme rouge. Rouge, rouge !" },
            { caption: "Un ballon bleu. Bleu !", narration: "Un ballon bleu. Bleu, bleu !" },
            { caption: "Un soleil jaune. Jaune !", narration: "Un soleil jaune. Jaune, jaune !" },
            { caption: "Rouge, bleu, jaune. Que c'est joli !", narration: "Rouge, bleu, jaune. Tu t'en souviens ?" },
          ],
        },
        "de-DE": {
          talk: "Wo siehst du heute Rot, Blau oder Gelb?",
          chapters: [
            { caption: "Farbenfreunde, kommt her!", narration: "Farbenfreunde, kommt und spielt mit!" },
            { caption: "Ein roter Apfel. Rot!", narration: "Ein roter Apfel. Rot, rot!" },
            { caption: "Ein blauer Ballon. Blau!", narration: "Ein blauer Ballon. Blau, blau!" },
            { caption: "Eine gelbe Sonne. Gelb!", narration: "Eine gelbe Sonne. Gelb, gelb!" },
            { caption: "Rot, Blau, Gelb. Schöne Farben!", narration: "Rot, Blau, Gelb. Weißt du sie noch?" },
          ],
        },
      },

      "mountain-character": {
        "en-US": {
          talk: "Why is the middle of 山 tall and the sides low?",
          chapters: [
            { caption: "Long ago, people drew what they saw.", narration: "Long ago, people drew the things they saw." },
            { caption: "Look! Three mountain peaks, high and low.", narration: "Look! Three mountain peaks, high and low." },
            { caption: "Tall in the middle, low on both sides. It became 山.", narration: "Tall in the middle, low on both sides. It became the Chinese character shan." },
            { caption: "When you see 山, think of tall peaks!", narration: "When you see shan, think of tall mountain peaks!" },
          ],
        },
        "ja-JP": {
          talk: "「山」は、どうしてまん中が高くて、りょうがわが低いの？",
          chapters: [
            { caption: "むかしの人は、見たものを絵にしました。", narration: "むかしの人は、見たものを絵にしました。" },
            { caption: "見て！ 三つの山が、高く低くならんでいます。", narration: "見て！ 三つの山が、高く低くならんでいます。" },
            { caption: "まん中が高く、りょうがわが低くて、「山」になりました。", narration: "まん中が高く、りょうがわが低くて、漢字の山になりました。" },
            { caption: "「山」を見たら、高い山を思い出そう！", narration: "山の字を見たら、高い山を思い出そう！" },
          ],
        },
        "es-ES": {
          talk: "¿Por qué 山 es alto en medio y bajo a los lados?",
          chapters: [
            { caption: "Hace mucho, la gente dibujaba lo que veía.", narration: "Hace mucho tiempo, la gente dibujaba lo que veía." },
            { caption: "¡Mira! Tres picos, altos y bajos.", narration: "¡Mira! Tres picos de montaña, altos y bajos." },
            { caption: "Alto en medio y bajo a los lados. Así nació 山.", narration: "Alto en medio y bajo a los lados. Así nació el carácter chino shan." },
            { caption: "Cuando veas 山, piensa en montañas altas.", narration: "Cuando veas shan, piensa en picos altos." },
          ],
        },
        "fr-FR": {
          talk: "Pourquoi 山 est-il haut au milieu et bas sur les côtés ?",
          chapters: [
            { caption: "Autrefois, on dessinait ce que l'on voyait.", narration: "Il y a longtemps, on dessinait ce que l'on voyait." },
            { caption: "Regarde ! Trois sommets, hauts et bas.", narration: "Regarde ! Trois sommets de montagne, hauts et bas." },
            { caption: "Haut au milieu, bas sur les côtés. C'est devenu 山.", narration: "Haut au milieu, bas sur les côtés. C'est devenu le caractère chinois shan." },
            { caption: "Quand tu vois 山, pense aux hauts sommets !", narration: "Quand tu vois shan, pense aux hauts sommets !" },
          ],
        },
        "de-DE": {
          talk: "Warum ist 山 in der Mitte hoch und an den Seiten niedrig?",
          chapters: [
            { caption: "Früher malten Menschen, was sie sahen.", narration: "Vor langer Zeit malten Menschen die Dinge, die sie sahen." },
            { caption: "Schau! Drei Bergspitzen, hoch und niedrig.", narration: "Schau! Drei Bergspitzen, hoch und niedrig." },
            { caption: "In der Mitte hoch, außen niedrig. So wurde es 山.", narration: "In der Mitte hoch, außen niedrig. So entstand das chinesische Zeichen Schan." },
            { caption: "Siehst du 山, denk an hohe Berge!", narration: "Wenn du Schan siehst, denk an hohe Bergspitzen!" },
          ],
        },
      },

      "five-stars": {
        "en-US": {
          talk: "Can you hold up five fingers and count to five?",
          chapters: [
            { caption: "The sky is dark. Who will shine?", narration: "The night sky is dark. Who will shine?" },
            { caption: "One, two. Two stars are here!", narration: "One, two. Here come two stars." },
            { caption: "Three, four. Two more stars!", narration: "Three, four. Here come two more stars." },
            { caption: "Five! Five bright stars in all.", narration: "Five! Now we have five bright stars." },
            { caption: "Count with me: one, two, three, four, five!", narration: "Let's count. One, two, three, four, five!" },
          ],
        },
        "ja-JP": {
          talk: "ゆびを五本出して、五までかぞえられる？",
          chapters: [
            { caption: "くらい夜空。だれが光るかな？", narration: "夜空はまっくら。だれが光るかな？" },
            { caption: "いち、に。星が二つきたよ！", narration: "いち、に。星が二つきたよ。" },
            { caption: "さん、よん。もう二つきたよ！", narration: "さん、よん。もう二つの星がきたよ。" },
            { caption: "ご！ 星はぜんぶで五つ。", narration: "ご！ きらきら星は、ぜんぶで五つ。" },
            { caption: "いっしょに、いち、に、さん、よん、ご！", narration: "いっしょにかぞえよう。いち、に、さん、よん、ご！" },
          ],
        },
        "es-ES": {
          talk: "¿Puedes levantar cinco dedos y contar hasta cinco?",
          chapters: [
            { caption: "El cielo está oscuro. ¿Quién brillará?", narration: "La noche está oscura. ¿Quién brillará?" },
            { caption: "Uno, dos. ¡Llegan dos estrellas!", narration: "Uno, dos. Ya tenemos dos estrellas." },
            { caption: "Tres, cuatro. ¡Llegan dos más!", narration: "Tres, cuatro. Llegan otras dos estrellas." },
            { caption: "¡Cinco! Hay cinco estrellas brillantes.", narration: "¡Cinco! Ya hay cinco estrellas brillantes." },
            { caption: "Cuenta: uno, dos, tres, cuatro, cinco.", narration: "Contemos juntos. Uno, dos, tres, cuatro, cinco." },
          ],
        },
        "fr-FR": {
          talk: "Peux-tu lever cinq doigts et compter jusqu'à cinq ?",
          chapters: [
            { caption: "Le ciel est noir. Qui va briller ?", narration: "La nuit est sombre. Qui va briller ?" },
            { caption: "Un, deux. Deux étoiles arrivent !", narration: "Un, deux. Voici deux étoiles." },
            { caption: "Trois, quatre. Deux étoiles de plus !", narration: "Trois, quatre. Deux autres étoiles arrivent." },
            { caption: "Cinq ! Cinq étoiles brillent.", narration: "Cinq ! Nous avons cinq étoiles brillantes." },
            { caption: "Compte : un, deux, trois, quatre, cinq !", narration: "Comptons ensemble. Un, deux, trois, quatre, cinq !" },
          ],
        },
        "de-DE": {
          talk: "Kannst du fünf Finger zeigen und bis fünf zählen?",
          chapters: [
            { caption: "Der Himmel ist dunkel. Wer leuchtet?", narration: "Der Nachthimmel ist dunkel. Wer wird leuchten?" },
            { caption: "Eins, zwei. Zwei Sterne kommen!", narration: "Eins, zwei. Da sind zwei Sterne." },
            { caption: "Drei, vier. Zwei Sterne mehr!", narration: "Drei, vier. Noch zwei Sterne kommen dazu." },
            { caption: "Fünf! Fünf helle Sterne.", narration: "Fünf! Jetzt leuchten fünf Sterne." },
            { caption: "Zähl mit: eins, zwei, drei, vier, fünf!", narration: "Zählen wir. Eins, zwei, drei, vier, fünf!" },
          ],
        },
      },

      "seed-adventure": {
        "en-US": {
          talk: "Which three friends help a seed grow?",
          chapters: [
            { caption: "A little seed sleeps in soft soil.", narration: "A little seed is sleeping in soft soil." },
            { caption: "Drip, drop! The rain makes the soil wet.", narration: "Drip, drop! The rain makes the soil nice and wet." },
            { caption: "The seed drinks and grows a tiny sprout.", narration: "The seed drinks the water and pops out a tiny sprout." },
            { caption: "Warm sun helps the little leaves open.", narration: "The sun is warm. The little leaves slowly open." },
            { caption: "Soil, water, and sun help the seed grow!", narration: "With soil, water, and sun, the little seed grows!" },
          ],
        },
        "ja-JP": {
          talk: "たねを大きくする三つのお友だちは、なあに？",
          chapters: [
            { caption: "小さなたねが、やわらかい土でねています。", narration: "小さなたねが、やわらかい土の中でねています。" },
            { caption: "ぽつぽつ。雨で土がぬれました。", narration: "ぽつぽつ。雨がふって、土がしっとりぬれました。" },
            { caption: "水をのんで、小さなめが出ました。", narration: "たねは水をのんで、小さなめを出しました。" },
            { caption: "あたたかいおひさまで、葉っぱがひらきます。", narration: "おひさまはぽかぽか。小さな葉っぱがゆっくりひらきます。" },
            { caption: "土、水、おひさまで、大きくなったよ！", narration: "土と水とおひさまで、小さなたねが大きくなったよ！" },
          ],
        },
        "es-ES": {
          talk: "¿Qué tres amigos ayudan a crecer a la semilla?",
          chapters: [
            { caption: "Una semillita duerme en tierra blandita.", narration: "Una semillita duerme en la tierra blandita." },
            { caption: "¡Plic, plac! La lluvia moja la tierra.", narration: "¡Plic, plac! La lluvia deja la tierra húmeda." },
            { caption: "La semilla bebe y saca un brote.", narration: "La semilla bebe agua y saca un brote pequeñito." },
            { caption: "El sol calienta y las hojas se abren.", narration: "El sol está calentito. Las hojitas se abren despacio." },
            { caption: "¡Con tierra, agua y sol, la semilla crece!", narration: "Con tierra, agua y sol, la semillita crece." },
          ],
        },
        "fr-FR": {
          talk: "Quels sont les trois amis qui aident la graine à pousser ?",
          chapters: [
            { caption: "Une petite graine dort dans la terre douce.", narration: "Une petite graine dort dans la terre toute douce." },
            { caption: "Plic, ploc ! La pluie mouille la terre.", narration: "Plic, ploc ! La pluie rend la terre bien humide." },
            { caption: "La graine boit et une pousse sort.", narration: "La graine boit de l'eau et une petite pousse sort." },
            { caption: "Le soleil chauffe et les feuilles s'ouvrent.", narration: "Le soleil est chaud. Les petites feuilles s'ouvrent doucement." },
            { caption: "Terre, eau et soleil font pousser la graine !", narration: "Avec la terre, l'eau et le soleil, la petite graine pousse !" },
          ],
        },
        "de-DE": {
          talk: "Welche drei Freunde helfen dem Samen beim Wachsen?",
          chapters: [
            { caption: "Ein kleiner Samen schläft in weicher Erde.", narration: "Ein kleiner Samen schläft in der weichen Erde." },
            { caption: "Plitsch, platsch! Der Regen macht die Erde nass.", narration: "Plitsch, platsch! Der Regen macht die Erde schön feucht." },
            { caption: "Der Samen trinkt und ein Keim kommt heraus.", narration: "Der Samen trinkt Wasser. Ein kleiner Keim kommt heraus." },
            { caption: "Die Sonne wärmt. Kleine Blätter öffnen sich.", narration: "Die Sonne ist warm. Die kleinen Blätter öffnen sich langsam." },
            { caption: "Mit Erde, Wasser und Sonne wächst der Samen!", narration: "Mit Erde, Wasser und Sonne wächst der kleine Samen!" },
          ],
        },
      },

      "rhythm-train": {
        "en-US": {
          talk: "Can you clap slow, slow, fast-fast-fast?",
          chapters: [
            { caption: "The rhythm train is ready to go!", narration: "The rhythm train is ready to go! Get your hands ready." },
            { caption: "Clap slowly: boom... boom...", narration: "First, a slow beat. Boom, boom. Clap two times." },
            { caption: "Clap fast: boom-boom-boom!", narration: "Now a fast beat. Boom-boom-boom! Clap three times." },
            { caption: "Slow, slow, fast-fast-fast!", narration: "Put it together. Slow, slow, fast-fast-fast!" },
            { caption: "You are a little musician!", narration: "Great rhythm! You are a little musician." },
          ],
        },
        "ja-JP": {
          talk: "ゆっくり、ゆっくり、はやく三回、手をたたける？",
          chapters: [
            { caption: "リズムれっしゃ、しゅっぱつ！", narration: "リズムれっしゃ、しゅっぱつ！ 小さな手をじゅんびしてね。" },
            { caption: "ゆっくりたたこう。ドン、ドン。", narration: "まずは、ゆっくり。ドン、ドン。二回たたこう。" },
            { caption: "はやくたたこう。ドンドンドン！", narration: "こんどは、はやく。ドンドンドン！ 三回たたこう。" },
            { caption: "ゆっくり、ゆっくり、はやく三回！", narration: "つなげるよ。ゆっくり、ゆっくり、はやく三回！" },
            { caption: "きみは小さな音楽家！", narration: "いいリズム！ きみは小さな音楽家だね。" },
          ],
        },
        "es-ES": {
          talk: "¿Puedes aplaudir lento, lento, rápido-rápido-rápido?",
          chapters: [
            { caption: "¡El tren del ritmo va a salir!", narration: "¡El tren del ritmo va a salir! Prepara tus manos." },
            { caption: "Aplaude lento: pom... pom...", narration: "Primero, un ritmo lento. Pom, pom. Da dos palmas." },
            { caption: "Aplaude rápido: pom-pom-pom.", narration: "Ahora, un ritmo rápido. Pom-pom-pom. Da tres palmas." },
            { caption: "Lento, lento, rápido-rápido-rápido.", narration: "Todo junto. Lento, lento, rápido-rápido-rápido." },
            { caption: "¡Eres un pequeño músico!", narration: "¡Muy buen ritmo! Eres un pequeño músico." },
          ],
        },
        "fr-FR": {
          talk: "Peux-tu taper lent, lent, vite-vite-vite ?",
          chapters: [
            { caption: "Le train du rythme va partir !", narration: "Le train du rythme va partir ! Prépare tes petites mains." },
            { caption: "Tape lentement : boum... boum...", narration: "D'abord, un rythme lent. Boum, boum. Tape deux fois." },
            { caption: "Tape vite : boum-boum-boum !", narration: "Maintenant, un rythme rapide. Boum-boum-boum ! Tape trois fois." },
            { caption: "Lent, lent, vite-vite-vite !", narration: "Tout ensemble. Lent, lent, vite-vite-vite !" },
            { caption: "Tu es un petit musicien !", narration: "Bravo pour le rythme ! Tu es un petit musicien." },
          ],
        },
        "de-DE": {
          talk: "Kannst du langsam, langsam, schnell-schnell-schnell klatschen?",
          chapters: [
            { caption: "Der Rhythmuszug fährt los!", narration: "Der Rhythmuszug fährt los! Mach deine Hände bereit." },
            { caption: "Klatsch langsam: bum... bum...", narration: "Zuerst langsam. Bum, bum. Klatsch zweimal." },
            { caption: "Klatsch schnell: bum-bum-bum!", narration: "Jetzt schnell. Bum-bum-bum! Klatsch dreimal." },
            { caption: "Langsam, langsam, schnell-schnell-schnell!", narration: "Alles zusammen. Langsam, langsam, schnell-schnell-schnell!" },
            { caption: "Du bist ein kleiner Musiker!", narration: "Toller Rhythmus! Du bist ein kleiner Musiker." },
          ],
        },
      },

      "animal-move": {
        "en-US": {
          talk: "Which move makes your body feel strong?",
          chapters: [
            { caption: "Stand steady. Animal moves begin!", narration: "Find a safe space and stand steady. Animal moves begin!" },
            { caption: "Bunny: jump softly three times.", narration: "Jump softly like a bunny. One, two, three." },
            { caption: "Bird: open your wings and stretch.", narration: "Open your arms like a bird. Stretch them out wide." },
            { caption: "Bear: lift your knees and walk.", narration: "Walk like a bear. Lift your knees for four steady steps." },
            { caption: "Take a deep breath. All done!", narration: "Breathe in, breathe out. Animal moves are all done!" },
          ],
        },
        "ja-JP": {
          talk: "どのうごきが、いちばん元気になった？",
          chapters: [
            { caption: "しっかり立って、どうぶつ体操スタート！", narration: "あんぜんな場所で、しっかり立とう。どうぶつ体操スタート！" },
            { caption: "うさぎさん。やさしく三回ジャンプ。", narration: "うさぎさんみたいに、やさしくジャンプ。いち、に、さん。" },
            { caption: "ことりさん。つばさをひろげよう。", narration: "ことりさんみたいに、うでを大きくひろげよう。" },
            { caption: "くまさん。ひざを上げて歩こう。", narration: "くまさんみたいに、ひざを上げて、ゆっくり四歩。" },
            { caption: "大きくいきをして、おしまい！", narration: "すって、はいて。どうぶつ体操、おしまい！" },
          ],
        },
        "es-ES": {
          talk: "¿Qué movimiento hace fuerte tu cuerpo?",
          chapters: [
            { caption: "Ponte firme. ¡Empiezan los animales!", narration: "Busca un lugar seguro y ponte firme. ¡Empezamos!" },
            { caption: "Conejito: salta suave tres veces.", narration: "Salta suave como un conejito. Uno, dos, tres." },
            { caption: "Pájaro: abre las alas y estira.", narration: "Abre los brazos como un pájaro. Estíralos bien." },
            { caption: "Oso: levanta las rodillas y camina.", narration: "Camina como un oso. Levanta las rodillas y da cuatro pasos." },
            { caption: "Respira hondo. ¡Terminamos!", narration: "Inspira y suelta el aire. ¡Los movimientos terminaron!" },
          ],
        },
        "fr-FR": {
          talk: "Quel mouvement rend ton corps plus fort ?",
          chapters: [
            { caption: "Tiens-toi droit. Les animaux commencent !", narration: "Trouve un endroit sûr et tiens-toi droit. On commence !" },
            { caption: "Lapin : saute doucement trois fois.", narration: "Saute doucement comme un lapin. Un, deux, trois." },
            { caption: "Oiseau : ouvre tes ailes et étire-toi.", narration: "Ouvre les bras comme un oiseau. Étire-les bien." },
            { caption: "Ours : lève les genoux et marche.", narration: "Marche comme un ours. Lève les genoux et fais quatre pas." },
            { caption: "Respire bien. C'est fini !", narration: "Inspire, puis expire. Les mouvements sont finis !" },
          ],
        },
        "de-DE": {
          talk: "Welche Bewegung macht deinen Körper stark?",
          chapters: [
            { caption: "Steh fest. Die Tierturnstunde beginnt!", narration: "Such dir einen sicheren Platz und steh fest. Los geht's!" },
            { caption: "Hase: Spring dreimal ganz sanft.", narration: "Spring sanft wie ein Hase. Eins, zwei, drei." },
            { caption: "Vogel: Breite deine Flügel aus.", narration: "Breite deine Arme wie ein Vogel weit aus." },
            { caption: "Bär: Heb die Knie und geh los.", narration: "Geh wie ein Bär. Heb die Knie und mach vier feste Schritte." },
            { caption: "Atme tief. Fertig!", narration: "Atme ein, atme aus. Die Tierturnstunde ist fertig!" },
          ],
        },
      },

      "morning-routine": {
        "en-US": {
          talk: "What else does Seven do every morning?",
          chapters: [
            { caption: "The sun is up. A new day begins!", narration: "The sun is up. A new day begins. What do we do this morning?" },
            { caption: "First: get up and tidy the blanket.", narration: "First, get up and tidy your little blanket." },
            { caption: "Second: brush teeth and wash your face.", narration: "Second, brush your teeth and wash your face." },
            { caption: "Third: put on clothes and shoes.", narration: "Third, put on your clothes and shoes." },
            { caption: "Fourth: eat breakfast. Ready to go!", narration: "Fourth, eat a healthy breakfast. Now you are ready to go!" },
          ],
        },
        "ja-JP": {
          talk: "Sevenは、まいあさほかに何をする？",
          chapters: [
            { caption: "おひさまが出たよ。新しい一日！", narration: "おひさまが出たよ。新しい一日のはじまり。朝は何をするかな？" },
            { caption: "一ばん。おきて、おふとんをなおそう。", narration: "一ばん。おきて、小さなおふとんをきれいにしよう。" },
            { caption: "二ばん。はみがき、かおあらい。", narration: "二ばん。はをみがいて、かおをきれいにあらおう。" },
            { caption: "三ばん。ふくとくつをきよう。", narration: "三ばん。ふくをきて、くつをはこう。" },
            { caption: "四ばん。あさごはん。しゅっぱつ！", narration: "四ばん。元気なあさごはんを食べよう。しゅっぱつじゅんび、できた！" },
          ],
        },
        "es-ES": {
          talk: "¿Qué más hace Seven cada mañana?",
          chapters: [
            { caption: "Sale el sol. ¡Empieza un nuevo día!", narration: "Sale el sol. Empieza un nuevo día. ¿Qué hacemos esta mañana?" },
            { caption: "Primero: levantarse y doblar la mantita.", narration: "Primero, levántate y ordena tu mantita." },
            { caption: "Segundo: lavarse los dientes y la cara.", narration: "Segundo, lávate los dientes y después la cara." },
            { caption: "Tercero: ponerse la ropa y los zapatos.", narration: "Tercero, ponte la ropa y los zapatos." },
            { caption: "Cuarto: desayunar. ¡Listos para salir!", narration: "Cuarto, toma un desayuno sano. ¡Ya puedes salir!" },
          ],
        },
        "fr-FR": {
          talk: "Que fait encore Seven chaque matin ?",
          chapters: [
            { caption: "Le soleil se lève. Une nouvelle journée !", narration: "Le soleil se lève. Une nouvelle journée commence. Que fait-on ce matin ?" },
            { caption: "D'abord : se lever et ranger la couverture.", narration: "D'abord, lève-toi et range ta petite couverture." },
            { caption: "Ensuite : les dents et le visage.", narration: "Ensuite, brosse tes dents et lave ton visage." },
            { caption: "Puis : mettre ses habits et ses chaussures.", narration: "Puis, mets tes habits et tes chaussures." },
            { caption: "Enfin : le petit déjeuner. On peut partir !", narration: "Enfin, mange un bon petit déjeuner. Tu es prêt à partir !" },
          ],
        },
        "de-DE": {
          talk: "Was macht Seven jeden Morgen noch?",
          chapters: [
            { caption: "Die Sonne ist da. Ein neuer Tag beginnt!", narration: "Die Sonne ist da. Ein neuer Tag beginnt. Was machen wir am Morgen?" },
            { caption: "Erstens: Aufstehen und die Decke richten.", narration: "Erstens, steh auf und richte deine kleine Decke." },
            { caption: "Zweitens: Zähne putzen und Gesicht waschen.", narration: "Zweitens, putz deine Zähne und wasch dein Gesicht." },
            { caption: "Drittens: Kleidung und Schuhe anziehen.", narration: "Drittens, zieh deine Kleidung und deine Schuhe an." },
            { caption: "Viertens: Frühstücken. Los geht's!", narration: "Viertens, iss ein gesundes Frühstück. Jetzt kannst du losgehen!" },
          ],
        },
      },
    },
  };

  const languageNames = {
    "en-US": "英语",
    "ja-JP": "日语",
    "es-ES": "西班牙语",
    "fr-FR": "法语",
    "de-DE": "德语",
  };

  Object.values(packs.videos).forEach((videoPacks) => {
    Object.entries(videoPacks).forEach(([lang, pack]) => {
      const languageName = languageNames[lang];
      videoPacks[languageName] = { lang, ...pack };
      delete videoPacks[lang];
    });
  });

  global.SEVEN_VIDEO_LANGUAGE_PACKS = packs;
})(window);

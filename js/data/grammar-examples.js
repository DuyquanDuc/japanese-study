const GRAMMAR_EXAMPLES = {
  "あげく": [
    { japanese: "長時間話し合ったあげく、結論が出なかった。", english: "After discussing for a long time, we couldn't reach a conclusion." },
    { japanese: "散々迷ったあげく、転職することに決めた。", english: "After agonizing over it, I decided to change jobs." },
    { japanese: "何度も修理したあげく、結局新しいパソコンを買った。", english: "After repairing it many times, I ended up buying a new computer." },
    { japanese: "口論のあげく、二人は別れてしまった。", english: "After arguing, the two ended up breaking up." }
  ],
  "あるいは": [
    { japanese: "電話、あるいはメールでご連絡ください。", english: "Please contact us by phone or email." },
    { japanese: "彼は病気、あるいは疲れているのかもしれない。", english: "He might be sick, or perhaps just tired." },
    { japanese: "バスあるいは電車で行くことができます。", english: "You can go by bus or by train." },
    { japanese: "今年中、あるいは来年の初めに完成する予定です。", english: "It's scheduled to be completed this year, or perhaps at the beginning of next year." }
  ],
  "ばかり": [
    { japanese: "さっき起きたばかりだから、まだ眠い。", english: "I just woke up a moment ago, so I'm still sleepy." },
    { japanese: "日本に来たばかりの頃は、何も分からなかった。", english: "When I had just come to Japan, I didn't understand anything." },
    { japanese: "昼ご飯を食べたばかりなのに、もうお腹が空いた。", english: "Even though I just ate lunch, I'm already hungry." },
    { japanese: "彼女は引っ越してきたばかりで、まだ道に迷う。", english: "She just moved here, so she still gets lost." }
  ],
  "ばかりだ": [
    { japanese: "最近、物価が上がるばかりだ。", english: "Recently, prices just keep going up." },
    { japanese: "薬を飲んでいるのに、体調は悪くなるばかりだ。", english: "Even though I'm taking medicine, my condition just keeps getting worse." },
    { japanese: "練習しないと、成績は下がるばかりだ。", english: "If you don't practice, your grades will only continue to drop." },
    { japanese: "人口が減るばかりで、町は寂しくなった。", english: "The population just keeps declining, and the town has become lonely." }
  ],
  "ばかりか": [
    { japanese: "彼は英語ばかりか、フランス語も話せる。", english: "He can speak not only English but also French." },
    { japanese: "雨ばかりか、雷まで鳴り始めた。", english: "Not only was it raining, but thunder started too." },
    { japanese: "成績が良いばかりか、スポーツも得意だ。", english: "Not only are her grades good, but she's also good at sports." },
    { japanese: "遅刻したばかりか、宿題も忘れてきた。", english: "Not only was he late, but he also forgot his homework." }
  ],
  "ばかりに": [
    { japanese: "一言余計なことを言ったばかりに、友達を怒らせてしまった。", english: "Simply because I said one unnecessary thing, I made my friend angry." },
    { japanese: "お金がないばかりに、留学を諦めた。", english: "Simply because I had no money, I gave up studying abroad." },
    { japanese: "日本語ができないばかりに、仕事が見つからない。", english: "Simply because I can't speak Japanese, I can't find a job." },
    { japanese: "嘘をついたばかりに、信用を失ってしまった。", english: "Simply because I told a lie, I lost people's trust." }
  ],
  "ちなみに": [
    { japanese: "来週の会議は月曜日です。ちなみに、場所は第三会議室です。", english: "Next week's meeting is on Monday. By the way, the location is Conference Room 3." },
    { japanese: "この料理はイタリアのものです。ちなみに、私はイタリアに三年住んでいました。", english: "This dish is Italian. Incidentally, I lived in Italy for three years." },
    { japanese: "新しいプロジェクトが始まります。ちなみに、リーダーは田中さんです。", english: "A new project is starting. By the way, the leader is Tanaka." },
    { japanese: "彼は有名な作家です。ちなみに、彼の奥さんも作家です。", english: "He is a famous author. Incidentally, his wife is also an author." }
  ],
  "ちっとも～ない": [
    { japanese: "説明を聞いたが、ちっとも分からなかった。", english: "I listened to the explanation, but I didn't understand at all." },
    { japanese: "このドラマはちっとも面白くない。", english: "This drama is not interesting at all." },
    { japanese: "彼はちっとも反省していない。", english: "He isn't reflecting on his actions at all." },
    { japanese: "薬を飲んだのに、ちっとも良くならない。", english: "Even though I took medicine, I haven't gotten better at all." }
  ],
  "だけあって": [
    { japanese: "さすが一流レストランだけあって、料理がとても美味しい。", english: "As expected of a first-class restaurant, the food is delicious." },
    { japanese: "十年も練習しただけあって、彼のピアノは上手だ。", english: "Having practiced for ten years, his piano playing is excellent." },
    { japanese: "有名な大学だけあって、設備が充実している。", english: "Being a famous university, the facilities are well-equipped." },
    { japanese: "プロだけあって、彼女の仕事は完璧だ。", english: "Being a professional, her work is flawless." }
  ],
  "だけましだ": [
    { japanese: "給料は低いが、仕事があるだけましだ。", english: "The salary is low, but at least I have a job." },
    { japanese: "怪我はしたが、命があるだけましだ。", english: "I got injured, but I should be grateful to be alive." },
    { japanese: "電車は遅れたが、来ただけましだ。", english: "The train was late, but at least it came." },
    { japanese: "テストは難しかったが、合格しただけましだ。", english: "The test was hard, but at least I passed." }
  ],
  "だけに": [
    { japanese: "期待が大きかっただけに、失望も大きかった。", english: "Precisely because the expectations were high, the disappointment was also great." },
    { japanese: "人気のある店だけに、いつも混んでいる。", english: "Being a popular shop, it's always crowded." },
    { japanese: "経験が豊富なだけに、彼の意見は説得力がある。", english: "Precisely because he has a lot of experience, his opinions are persuasive." },
    { japanese: "子供が小さいだけに、心配が絶えない。", english: "Because the children are still small, the worries never end." }
  ],
  "だけのことはある": [
    { japanese: "毎日練習しただけのことはあって、試合に勝った。", english: "It was worth practicing every day — we won the match." },
    { japanese: "高いだけのことはある。品質が素晴らしい。", english: "It's expensive for a reason. The quality is wonderful." },
    { japanese: "留学しただけのことはあって、英語がペラペラだ。", english: "Having studied abroad paid off — her English is fluent." },
    { japanese: "有名なシェフが作っただけのことはある。", english: "As expected of something made by a famous chef." }
  ],
  "だけは": [
    { japanese: "できるだけはやってみたが、間に合わなかった。", english: "I did everything I could, but I didn't make it in time." },
    { japanese: "言うだけは言ったので、後悔はない。", english: "I said what I had to say, so I have no regrets." },
    { japanese: "努力だけはした。結果はどうなるか分からない。", english: "I did all I could in terms of effort. I don't know what the result will be." },
    { japanese: "準備だけはしておこう。", english: "Let's at least get the preparations done." }
  ],
  "だって": [
    { japanese: "だって、誰も教えてくれなかったんだもん。", english: "But, nobody told me!" },
    { japanese: "子供だって、そのくらいのことは分かる。", english: "Even a child can understand something like that." },
    { japanese: "「なんで食べないの？」「だって、お腹が痛いんだもん。」", english: "'Why aren't you eating?' 'Because my stomach hurts.'" },
    { japanese: "先生だって間違えることがある。", english: "Even teachers make mistakes sometimes." }
  ],
  "でしかない": [
    { japanese: "それは単なる言い訳でしかない。", english: "That is nothing but an excuse." },
    { japanese: "私は一人の学生でしかない。", english: "I am merely a student." },
    { japanese: "この数字は推測でしかない。", english: "This figure is nothing more than a guess." },
    { japanese: "彼の言葉は理想論でしかない。", english: "His words are nothing but idealism." }
  ],
  "どころではない": [
    { japanese: "忙しくて旅行どころではない。", english: "I'm so busy that this is not the time for travel." },
    { japanese: "熱があって、勉強どころではなかった。", english: "I had a fever, so studying was out of the question." },
    { japanese: "地震の後は、仕事どころではなかった。", english: "After the earthquake, work was the last thing on my mind." },
    { japanese: "借金があるから、遊びどころではない。", english: "I have debts, so having fun is far from my mind." }
  ],
  "どころか": [
    { japanese: "彼は英語どころか、日本語も上手に話せない。", english: "Far from English, he can't even speak Japanese well." },
    { japanese: "痩せるどころか、さらに太ってしまった。", english: "Far from losing weight, I gained even more." },
    { japanese: "感謝されるどころか、文句を言われた。", english: "Far from being thanked, I was complained at." },
    { japanese: "簡単どころか、とても難しかった。", english: "Far from being easy, it was very difficult." }
  ],
  "どうやら": [
    { japanese: "どうやら雨が降りそうだ。", english: "It seems like it's going to rain." },
    { japanese: "どうやら彼は来ないらしい。", english: "Apparently, he's not coming." },
    { japanese: "どうやら間に合ったようだ。", english: "It seems we made it in time." },
    { japanese: "どうやら風邪を引いたみたいだ。", english: "It seems like I've caught a cold." }
  ],
  "どうせ": [
    { japanese: "どうせ行くなら、早く行こう。", english: "If we're going anyway, let's go early." },
    { japanese: "どうせ誰も来ないだろう。", english: "Nobody's going to come anyway." },
    { japanese: "どうせ無理だと思っていたが、合格した。", english: "I thought it was impossible anyway, but I passed." },
    { japanese: "どうせ買うなら、いいものを買いたい。", english: "If I'm going to buy it anyway, I want to buy something good." }
  ],
  "得ない": [
    { japanese: "彼の行動は理解し得ない。", english: "His behavior is impossible to understand." },
    { japanese: "そんなことはあり得ない。", english: "Such a thing is impossible." },
    { japanese: "この問題は解決し得ないかもしれない。", english: "This problem may be impossible to solve." },
    { japanese: "彼女の気持ちは計り得ない。", english: "Her feelings cannot be measured." }
  ],
  "得る": [
    { japanese: "そのようなことは起こり得る。", english: "Such a thing can happen." },
    { japanese: "努力すれば、成功し得る。", english: "If you put in effort, success is possible." },
    { japanese: "誰にでもミスはあり得る。", english: "Anyone can make a mistake." },
    { japanese: "この計画は実現し得ると思う。", english: "I think this plan can be realized." }
  ],
  "再び": [
    { japanese: "彼は再び日本を訪れた。", english: "He visited Japan once again." },
    { japanese: "再び同じ失敗を繰り返してはいけない。", english: "You must not repeat the same mistake again." },
    { japanese: "春が来て、花が再び咲き始めた。", english: "Spring came, and the flowers began to bloom again." },
    { japanese: "再びチャンスが巡ってきた。", english: "An opportunity has come around once more." }
  ],
  "ふうに": [
    { japanese: "彼女はそんなふうに考えているのか。", english: "Is that the way she thinks about it?" },
    { japanese: "先生が言ったふうにやってみてください。", english: "Please try doing it the way the teacher said." },
    { japanese: "どんなふうに料理すればいいですか。", english: "In what way should I cook it?" },
    { japanese: "こんなふうに書けば分かりやすい。", english: "If you write it this way, it's easy to understand." }
  ],
  "がきっかけで": [
    { japanese: "留学がきっかけで、日本語に興味を持った。", english: "Studying abroad was what sparked my interest in Japanese." },
    { japanese: "友人の紹介がきっかけで、この仕事を始めた。", english: "A friend's introduction led me to start this job." },
    { japanese: "病気がきっかけで、健康に気をつけるようになった。", english: "Getting sick made me start paying attention to my health." },
    { japanese: "一冊の本がきっかけで、作家を目指すようになった。", english: "One book inspired me to aim to become a writer." }
  ],
  "げ": [
    { japanese: "彼女は悲しげな顔をしていた。", english: "She had a sad-looking expression." },
    { japanese: "彼は楽しげに歌っていた。", english: "He was singing as if he were having fun." },
    { japanese: "子供たちは退屈げにしていた。", english: "The children looked bored." },
    { japanese: "彼は自信ありげに話した。", english: "He spoke as if he were confident." }
  ],
  "逆に": [
    { japanese: "薬を飲んだのに、逆に体調が悪くなった。", english: "Even though I took medicine, my condition got worse instead." },
    { japanese: "節約しようとしたが、逆にお金を使ってしまった。", english: "I tried to save money, but on the contrary, I ended up spending more." },
    { japanese: "怒るかと思ったが、逆に笑い出した。", english: "I thought he'd get angry, but on the contrary, he started laughing." },
    { japanese: "逆に質問してもいいですか。", english: "May I ask you a question in return?" }
  ],
  "反面": [
    { japanese: "都会は便利な反面、空気が汚い。", english: "While the city is convenient, the air is dirty." },
    { japanese: "彼は優しい反面、厳しいところもある。", english: "While he is kind, he also has a strict side." },
    { japanese: "この薬は効果がある反面、副作用もある。", english: "While this medicine is effective, it also has side effects." },
    { japanese: "一人暮らしは自由な反面、寂しいこともある。", english: "Living alone is freeing, but on the other hand, it can be lonely." }
  ],
  "果たして": [
    { japanese: "果たして彼の言っていることは本当だろうか。", english: "Is what he's saying really true?" },
    { japanese: "果たして予想通り、彼が優勝した。", english: "Sure enough, as expected, he won the championship." },
    { japanese: "果たしてこの計画はうまくいくのだろうか。", english: "Will this plan really work out?" },
    { japanese: "心配していたが、果たして試験に合格した。", english: "I was worried, but sure enough, I passed the exam." }
  ],
  "一応": [
    { japanese: "一応確認しておいたほうがいい。", english: "You should confirm it just in case." },
    { japanese: "一応準備はしたが、自信がない。", english: "I've more or less prepared, but I'm not confident." },
    { japanese: "一応日本語は話せるが、まだまだだ。", english: "I can speak Japanese to some extent, but I still have a long way to go." },
    { japanese: "一応連絡しておきます。", english: "I'll contact them just to be safe." }
  ],
  "以外": [
    { japanese: "日曜日以外は毎日働いている。", english: "I work every day except Sunday." },
    { japanese: "彼以外に誰もこの問題を解けなかった。", english: "Nobody other than him could solve this problem." },
    { japanese: "日本語以外の言語も勉強したい。", english: "I want to study languages other than Japanese too." },
    { japanese: "関係者以外、立ち入り禁止です。", english: "No entry except for authorized personnel." }
  ],
  "以上に": [
    { japanese: "予想以上に難しかった。", english: "It was more difficult than expected." },
    { japanese: "思った以上に時間がかかった。", english: "It took more time than I thought." },
    { japanese: "彼女は見た目以上に強い人だ。", english: "She is stronger than she looks." },
    { japanese: "想像以上に素晴らしい景色だった。", english: "The scenery was more wonderful than I had imagined." }
  ],
  "以上は": [
    { japanese: "約束した以上は、守らなければならない。", english: "Since I made a promise, I must keep it." },
    { japanese: "引き受けた以上は、最後までやる。", english: "Since I've taken it on, I'll see it through to the end." },
    { japanese: "日本に住んでいる以上は、日本語を覚えたい。", english: "Since I'm living in Japan, I want to learn Japanese." },
    { japanese: "学生である以上は、勉強が第一だ。", english: "Since you are a student, studying comes first." }
  ],
  "いきなり": [
    { japanese: "彼はいきなり大声で叫んだ。", english: "He suddenly shouted loudly." },
    { japanese: "いきなり雨が降り出した。", english: "It suddenly started raining." },
    { japanese: "いきなり難しい問題を出さないでください。", english: "Please don't suddenly give us difficult problems." },
    { japanese: "彼女はいきなり泣き出した。", english: "She suddenly burst into tears." }
  ],
  "一気に": [
    { japanese: "この小説を一気に読み終えた。", english: "I finished reading this novel in one go." },
    { japanese: "暑かったので、水を一気に飲んだ。", english: "It was hot, so I drank the water all at once." },
    { japanese: "気温が一気に下がった。", english: "The temperature dropped all at once." },
    { japanese: "階段を一気に駆け上がった。", english: "I ran up the stairs in one go." }
  ],
  "一方で": [
    { japanese: "経済は成長している一方で、環境問題が深刻化している。", english: "While the economy is growing, environmental problems are getting worse." },
    { japanese: "彼は仕事に厳しい一方で、プライベートでは優しい。", english: "He is strict at work, but on the other hand, he's kind in private." },
    { japanese: "都会に住む人が増えている一方で、地方の人口は減っている。", english: "While more people are living in cities, rural populations are declining." },
    { japanese: "技術が進歩する一方で、新たな問題も生まれている。", english: "While technology advances, new problems are also emerging." }
  ],
  "いわゆる": [
    { japanese: "彼はいわゆる天才だ。", english: "He is what you'd call a genius." },
    { japanese: "これがいわゆる日本の「おもてなし」です。", english: "This is what is called Japanese 'omotenashi' (hospitality)." },
    { japanese: "いわゆるブラック企業で働いていた。", english: "I was working at a so-called 'black company' (exploitative company)." },
    { japanese: "彼女はいわゆるキャリアウーマンだ。", english: "She is what you'd call a career woman." }
  ],
  "いよいよ": [
    { japanese: "いよいよ明日が試験だ。", english: "At last, the exam is tomorrow." },
    { japanese: "いよいよ夏休みが始まる。", english: "Summer vacation is finally starting." },
    { japanese: "天気がいよいよ悪くなってきた。", english: "The weather has gotten even worse." },
    { japanese: "いよいよ新しい生活が始まる。", english: "A new life is finally beginning." }
  ],
  "上": [
    { japanese: "仕事の上では、彼はとても信頼できる。", english: "In terms of work, he is very reliable." },
    { japanese: "契約の上で、重要な点をいくつか確認したい。", english: "From the standpoint of the contract, I'd like to confirm a few important points." },
    { japanese: "歴史の上で、この事件は非常に重要だ。", english: "In terms of history, this event is very important." },
    { japanese: "法律の上では問題ないが、道徳的にはどうだろう。", english: "Legally there's no problem, but morally, I wonder." }
  ],
  "かのように": [
    { japanese: "彼はまるで何も知らないかのように振る舞った。", english: "He acted as if he didn't know anything." },
    { japanese: "彼女は女王であるかのように歩いた。", english: "She walked as if she were a queen." },
    { japanese: "時間が止まったかのように静かだった。", english: "It was quiet as if time had stopped." },
    { japanese: "子供たちは夢の中にいるかのように笑っていた。", english: "The children were smiling as if they were in a dream." }
  ],
  "かと思ったら": [
    { japanese: "晴れていたかと思ったら、急に雨が降ってきた。", english: "Just when I thought it was sunny, it suddenly started raining." },
    { japanese: "泣いていたかと思ったら、もう笑っている。", english: "Just when she was crying, she's already laughing." },
    { japanese: "帰ってきたかと思ったら、また出かけていった。", english: "Just when he came home, he went out again." },
    { japanese: "静かだったかと思ったら、急に騒がしくなった。", english: "Just when it was quiet, it suddenly got noisy." }
  ],
  "か～ないかのうちに": [
    { japanese: "ベッドに入るか入らないかのうちに、眠ってしまった。", english: "I fell asleep as soon as I got into bed." },
    { japanese: "席に着くか着かないかのうちに、会議が始まった。", english: "The meeting started just as I sat down." },
    { japanese: "ドアを開けるか開けないかのうちに、犬が飛び出してきた。", english: "Just as I opened the door, the dog came running out." },
    { japanese: "食べ始めるか始めないかのうちに、電話が鳴った。", english: "Right as I started eating, the phone rang." }
  ],
  "かえって": [
    { japanese: "手伝おうとしたが、かえって邪魔になった。", english: "I tried to help, but on the contrary, I got in the way." },
    { japanese: "説明したら、かえって混乱させてしまった。", english: "When I explained, I rather confused them instead." },
    { japanese: "近道をしたつもりが、かえって遠回りになった。", english: "I thought I took a shortcut, but it turned out to be a longer route instead." },
    { japanese: "安い物を買ったが、かえって高くついた。", english: "I bought something cheap, but it ended up costing more in the long run." }
  ],
  "限り": [
    { japanese: "健康である限り、働き続けたい。", english: "As long as I'm healthy, I want to keep working." },
    { japanese: "私が知っている限り、彼は嘘をついたことがない。", english: "As far as I know, he has never told a lie." },
    { japanese: "日本にいる限り、日本語を使う機会は多い。", english: "As long as you're in Japan, there are many opportunities to use Japanese." },
    { japanese: "努力する限り、成功の可能性はある。", english: "As long as you make an effort, there's a possibility of success." }
  ],
  "甲斐がある": [
    { japanese: "毎日練習した甲斐があって、大会で優勝した。", english: "The daily practice was worth it — I won the tournament." },
    { japanese: "苦労した甲斐があって、やっと夢が叶った。", english: "The hardships were worth it — my dream finally came true." },
    { japanese: "生きがいがあってこそ、人生は楽しい。", english: "Life is enjoyable precisely when there's something worth living for." },
    { japanese: "この仕事はやりがいがある。", english: "This job is worth doing." }
  ],
  "かねない": [
    { japanese: "彼なら、本当にそんなことをしかねない。", english: "Knowing him, he just might actually do something like that." },
    { japanese: "このまま放置すると、大事故になりかねない。", english: "If we leave it as is, it could lead to a major accident." },
    { japanese: "無理をすると、病気になりかねない。", english: "If you push yourself too hard, you might get sick." },
    { japanese: "その発言は誤解を招きかねない。", english: "That remark could lead to misunderstandings." }
  ],
  "かねる": [
    { japanese: "その質問にはお答えしかねます。", english: "I'm unable to answer that question." },
    { japanese: "その提案には賛成しかねる。", english: "I cannot agree with that proposal." },
    { japanese: "この条件では引き受けかねます。", english: "Under these conditions, I'm unable to accept." },
    { japanese: "見かねて、手伝うことにした。", english: "Unable to just watch, I decided to help." }
  ],
  "から言うと": [
    { japanese: "私の経験から言うと、早起きは体にいい。", english: "From my experience, waking up early is good for the body." },
    { japanese: "結果から言うと、このプロジェクトは成功だった。", english: "In terms of results, this project was a success." },
    { japanese: "栄養の面から言うと、この食事はバランスが悪い。", english: "From a nutritional standpoint, this meal is unbalanced." },
    { japanese: "コストの面から言うと、この案が一番いい。", english: "In terms of cost, this plan is the best." }
  ],
  "からこそ": [
    { japanese: "好きだからこそ、厳しいことも言う。", english: "Precisely because I care about you, I say harsh things too." },
    { japanese: "失敗したからこそ、成長できた。", english: "It was precisely because I failed that I was able to grow." },
    { japanese: "あなただからこそ、頼んでいるんです。", english: "I'm asking precisely because it's you." },
    { japanese: "苦労したからこそ、今の幸せを感じられる。", english: "It's precisely because I went through hardships that I can appreciate my current happiness." }
  ],
  "から見ると": [
    { japanese: "外国人の目から見ると、日本の文化は面白い。", english: "From a foreigner's perspective, Japanese culture is fascinating." },
    { japanese: "専門家から見ると、この問題は簡単だそうだ。", english: "From an expert's point of view, this problem is apparently easy." },
    { japanese: "親の立場から見ると、子供の安全が一番大切だ。", english: "From a parent's standpoint, a child's safety is the most important thing." },
    { japanese: "彼の表情から見ると、何か悪いことがあったようだ。", english: "Judging from his expression, something bad seems to have happened." }
  ],
  "からには": [
    { japanese: "やると決めたからには、最後まで頑張る。", english: "Now that I've decided to do it, I'll try my best until the end." },
    { japanese: "試験を受けるからには、合格したい。", english: "Since I'm taking the exam, I want to pass." },
    { japanese: "プロであるからには、責任を持つべきだ。", english: "Since you are a professional, you should take responsibility." },
    { japanese: "引き受けたからには、途中で投げ出すわけにはいかない。", english: "Now that I've taken it on, I can't abandon it halfway." }
  ],
  "からして": [
    { japanese: "彼は態度からして失礼だ。", english: "Judging from his attitude alone, he's rude." },
    { japanese: "名前からして外国人だと分かった。", english: "I could tell from the name alone that they were a foreigner." },
    { japanese: "見た目からして美味しそうだ。", english: "Just from the appearance, it looks delicious." },
    { japanese: "第一印象からして、彼女は信頼できると思った。", english: "From the first impression alone, I thought she was trustworthy." }
  ],
  "からすると": [
    { japanese: "彼の話からすると、事件は夜中に起きたらしい。", english: "Judging from his account, the incident apparently happened in the middle of the night." },
    { japanese: "天気予報からすると、明日は晴れるだろう。", english: "Judging from the weather forecast, it will probably be clear tomorrow." },
    { japanese: "この成績からすると、合格は難しいかもしれない。", english: "Considering these grades, passing might be difficult." },
    { japanese: "状況からすると、彼が犯人とは思えない。", english: "Judging from the situation, I can't believe he's the culprit." }
  ],
  "からと言って": [
    { japanese: "お金があるからと言って、幸せとは限らない。", english: "Just because you have money doesn't mean you're happy." },
    { japanese: "日本人だからと言って、全員が寿司を好きなわけではない。", english: "Just because someone is Japanese doesn't mean they all like sushi." },
    { japanese: "若いからと言って、無理をしてはいけない。", english: "Just because you're young doesn't mean you should overdo it." },
    { japanese: "安いからと言って、買いすぎてはいけない。", english: "Just because it's cheap doesn't mean you should buy too much." }
  ],
  "っこない": [
    { japanese: "あんな難しい試験、受かりっこない。", english: "There's no way I could pass such a difficult exam." },
    { japanese: "彼が約束を守るなんて、ありっこない。", english: "There's no chance he'll keep his promise." },
    { japanese: "こんな短い時間では終わりっこない。", english: "There's no way it'll be finished in such a short time." },
    { japanese: "彼女に勝てっこない。", english: "There's absolutely no way I can beat her." }
  ],
  "ことだ": [
    { japanese: "健康になりたければ、毎日運動することだ。", english: "If you want to be healthy, you should exercise every day." },
    { japanese: "日本語が上手になりたければ、たくさん話すことだ。", english: "If you want to get good at Japanese, you should speak a lot." },
    { japanese: "早く治りたかったら、しっかり休むことだ。", english: "If you want to recover quickly, you should rest properly." },
    { japanese: "成功したいなら、諦めないことだ。", english: "If you want to succeed, you shouldn't give up." }
  ],
  "ことだから": [
    { japanese: "真面目な彼のことだから、きっと約束を守るだろう。", english: "Since he's such a serious person, I'm sure he'll keep his promise." },
    { japanese: "心配性の母のことだから、きっと電話してくるだろう。", english: "Knowing my worrywart mother, she'll definitely call." },
    { japanese: "あの人のことだから、また遅刻するだろう。", english: "Knowing that person, they'll probably be late again." },
    { japanese: "優しい田中さんのことだから、頼めば手伝ってくれるだろう。", english: "Since Tanaka is such a kind person, if you ask, they'll probably help." }
  ],
  "ことか": [
    { japanese: "どれだけ心配したことか。", english: "How worried I was!" },
    { japanese: "あの映画は何度見たことか。", english: "How many times I've watched that movie!" },
    { japanese: "合格の知らせを聞いて、どれほど嬉しかったことか。", english: "When I heard the news of passing, how happy I was!" },
    { japanese: "この日をどんなに待ったことか。", english: "How long I waited for this day!" }
  ],
  "ことなく": [
    { japanese: "彼は一度も休むことなく、十年間働き続けた。", english: "He continued working for ten years without taking a single day off." },
    { japanese: "諦めることなく、最後まで挑戦した。", english: "Without giving up, I kept challenging myself until the end." },
    { japanese: "彼女は涙を見せることなく、笑顔で去っていった。", english: "Without showing tears, she left with a smile." },
    { japanese: "迷うことなく、すぐに決断した。", english: "Without hesitating, I made a decision immediately." }
  ],
  "ことに": [
    { japanese: "驚いたことに、彼はもう結婚していた。", english: "To my surprise, he was already married." },
    { japanese: "嬉しいことに、志望校に合格した。", english: "Happily, I was accepted to my first-choice school." },
    { japanese: "残念なことに、コンサートは中止になった。", english: "Unfortunately, the concert was canceled." },
    { japanese: "困ったことに、パスポートをなくしてしまった。", english: "To my dismay, I lost my passport." }
  ],
  "ことにはならない": [
    { japanese: "謝ったからといって、許されることにはならない。", english: "Just because you apologized doesn't mean you'll be forgiven." },
    { japanese: "本を読んだだけでは、理解したことにはならない。", english: "Just reading a book doesn't mean you've understood it." },
    { japanese: "お金を払えば解決することにはならない。", english: "Just paying money doesn't mean the problem is solved." },
    { japanese: "説明しただけでは、相手が納得したことにはならない。", english: "Just because you explained doesn't mean the other person is convinced." }
  ],
  "くせして": [
    { japanese: "知らないくせして、知っているふりをするな。", english: "Don't pretend to know when you don't." },
    { japanese: "自分もできないくせして、人の文句ばかり言う。", english: "Despite not being able to do it yourself, you only complain about others." },
    { japanese: "お金がないくせして、高い物ばかり買う。", english: "Despite having no money, you only buy expensive things." },
    { japanese: "料理が下手なくせして、レストランの批評をする。", english: "Despite being bad at cooking, you critique restaurants." }
  ],
  "まだしも": [
    { japanese: "子供ならまだしも、大人がそんなことをするなんて。", english: "It would be one thing for a child, but for an adult to do such a thing..." },
    { japanese: "冗談ならまだしも、本気で言っているとは。", english: "If it were a joke that'd be one thing, but to say it seriously..." },
    { japanese: "一回ならまだしも、何回も同じ間違いをするのは困る。", english: "Once would be understandable, but making the same mistake repeatedly is a problem." },
    { japanese: "近くならまだしも、こんな遠い場所まで通うのは大変だ。", english: "If it were nearby that'd be fine, but commuting to such a distant place is tough." }
  ],
  "まい": [
    { japanese: "二度とあんな失敗はするまいと思った。", english: "I resolved that I would never make such a mistake again." },
    { japanese: "もう甘いものは食べるまい。", english: "I will not eat sweets anymore." },
    { japanese: "彼はもう来るまい。", english: "He probably won't come anymore." },
    { japanese: "こんなことは二度と起こるまい。", english: "Such a thing will probably never happen again." }
  ],
  "ままに": [
    { japanese: "足の向くままに歩いた。", english: "I walked wherever my feet took me." },
    { japanese: "思うままに意見を述べてください。", english: "Please share your opinions freely as you wish." },
    { japanese: "彼女は気の向くままに旅をしている。", english: "She travels wherever her heart takes her." },
    { japanese: "先生に言われるままに練習した。", english: "I practiced just as the teacher told me to." }
  ],
  "全く～ない": [
    { japanese: "彼の言っていることが全く分からない。", english: "I don't understand what he's saying at all." },
    { japanese: "最近、全く運動していない。", english: "I haven't exercised at all lately." },
    { japanese: "彼女は全く変わっていない。", english: "She hasn't changed at all." },
    { japanese: "その件については全く知らなかった。", english: "I didn't know about that matter at all." }
  ],
  "もかまわず": [
    { japanese: "雨もかまわず、サッカーを続けた。", english: "Without caring about the rain, we continued playing soccer." },
    { japanese: "周りの目もかまわず、大声で笑った。", english: "Without worrying about the people around us, we laughed loudly." },
    { japanese: "危険もかまわず、彼は川に飛び込んだ。", english: "Without worrying about the danger, he jumped into the river." },
    { japanese: "服が汚れるのもかまわず、子供たちは泥遊びをした。", english: "Without caring about getting their clothes dirty, the children played in the mud." }
  ],
  "も当然だ": [
    { japanese: "あれだけ頑張ったのだから、合格しても当然だ。", english: "Given how hard they worked, it's only natural they passed." },
    { japanese: "約束を破ったのだから、怒られても当然だ。", english: "Since they broke their promise, it's no wonder they got scolded." },
    { japanese: "毎日練習しているのだから、上手になっても当然だ。", english: "Since they practice every day, it's only natural they've gotten better." },
    { japanese: "あんな失礼なことを言えば、嫌われても当然だ。", english: "If you say something that rude, it's no wonder people dislike you." }
  ],
  "もの / もん": [
    { japanese: "だって、本当のことなんだもの。", english: "But it's the truth!" },
    { japanese: "仕方ないでしょう。忙しかったんだもん。", english: "It can't be helped. I was busy, you know." },
    { japanese: "行きたくないもん。", english: "I don't want to go! (Because I just don't.)" },
    { japanese: "疲れたんだもの。少し休ませて。", english: "I'm tired, okay? Let me rest a bit." }
  ],
  "ものだ": [
    { japanese: "子供の頃はよくこの川で遊んだものだ。", english: "When I was a child, I used to play in this river a lot." },
    { japanese: "月日が経つのは早いものだ。", english: "How quickly time passes." },
    { japanese: "昔はこの辺りは静かだったものだ。", english: "This area used to be quiet." },
    { japanese: "人生とは不思議なものだ。", english: "Life is a mysterious thing, isn't it." }
  ],
  "ものだから": [
    { japanese: "急いでいたものだから、財布を忘れてしまった。", english: "I was in such a hurry that I forgot my wallet." },
    { japanese: "初めてだったものだから、緊張してしまった。", english: "Since it was my first time, I got nervous." },
    { japanese: "道が分からなかったものだから、遅刻してしまった。", english: "Since I didn't know the way, I ended up being late." },
    { japanese: "あまりに美味しかったものだから、つい食べ過ぎた。", english: "It was so delicious that I accidentally ate too much." }
  ],
  "ものではない": [
    { japanese: "人の悪口を言うものではない。", english: "You shouldn't speak ill of others." },
    { japanese: "嘘をつくものではない。", english: "You shouldn't tell lies." },
    { japanese: "年上の人に向かってそんな口をきくものではない。", english: "You shouldn't speak to your elders like that." },
    { japanese: "約束を簡単に破るものではない。", english: "You shouldn't easily break promises." }
  ],
  "ものがある": [
    { japanese: "彼の演奏には感動させるものがある。", english: "There is something moving about his performance." },
    { japanese: "この映画には考えさせられるものがある。", english: "There is something thought-provoking about this film." },
    { japanese: "彼女の作品には心を打つものがある。", english: "There is something touching about her work." },
    { japanese: "あの人の話し方には説得力を感じるものがある。", english: "There is something persuasive about the way that person speaks." }
  ],
  "ものか / もんか": [
    { japanese: "あんな店、二度と行くものか。", english: "As if I'd ever go to that shop again!" },
    { japanese: "彼に負けるもんか。", english: "There's no way I'll lose to him!" },
    { japanese: "こんな仕事、誰がやるものか。", english: "Who would ever do this kind of work!" },
    { japanese: "あんな人の言うことを聞くもんか。", english: "As if I'd listen to someone like that!" }
  ],
  "ものなら": [
    { japanese: "できるものなら、もう一度やり直したい。", english: "If it were possible, I'd want to start over again." },
    { japanese: "行けるものなら、行きたい。", english: "If I could go, I would." },
    { japanese: "戻れるものなら、学生時代に戻りたい。", english: "If I could go back, I'd want to return to my school days." },
    { japanese: "少しでも遅れようものなら、怒られる。", english: "If you're even a little late, you'll get scolded." }
  ],
  "ものの": [
    { japanese: "買ったものの、一度も使っていない。", english: "Although I bought it, I haven't used it even once." },
    { japanese: "日本語を勉強しているものの、まだあまり話せない。", english: "Although I'm studying Japanese, I still can't speak much." },
    { japanese: "薬を飲んだものの、効果はなかった。", english: "Although I took the medicine, it had no effect." },
    { japanese: "引き受けたものの、どうすればいいか分からない。", english: "Although I agreed to take it on, I don't know what to do." }
  ],
  "もっとも": [
    { japanese: "彼は来ると言っていた。もっとも、本当に来るかどうかは分からない。", english: "He said he would come. Although, I don't know if he'll actually come." },
    { japanese: "この店は美味しい。もっとも、値段は少し高いが。", english: "This restaurant is delicious. Though, the prices are a bit high." },
    { japanese: "旅行は楽しかった。もっとも、天気はあまり良くなかったが。", english: "The trip was fun. Although, the weather wasn't very good." },
    { japanese: "成績は上がった。もっとも、まだ十分とは言えないが。", english: "My grades went up. Though, I can't say they're sufficient yet." }
  ],
  "もう少しで": [
    { japanese: "もう少しで車にひかれるところだった。", english: "I was almost hit by a car." },
    { japanese: "もう少しで遅刻するところだった。", english: "I almost ended up being late." },
    { japanese: "もう少しで泣くところだった。", english: "I almost cried." },
    { japanese: "もう少しで完成する。", english: "It's almost finished." }
  ],
  "ないではいられない": [
    { japanese: "あの映画を見ると、泣かないではいられない。", english: "When I watch that movie, I can't help but cry." },
    { japanese: "彼の冗談を聞くと、笑わないではいられない。", english: "When I hear his jokes, I can't help but laugh." },
    { japanese: "この話を聞くと、心配しないではいられない。", english: "When I hear this story, I can't help but worry." },
    { japanese: "あの事件を思い出すと、怒りを感じないではいられない。", english: "When I think of that incident, I can't help but feel anger." }
  ],
  "ないことには～ない": [
    { japanese: "実際に見ないことには、信じられない。", english: "Unless I actually see it, I can't believe it." },
    { japanese: "やってみないことには、できるかどうか分からない。", english: "Unless you try, you won't know if you can do it." },
    { japanese: "本人に聞かないことには、真相は分からない。", english: "Unless we ask the person themselves, we won't know the truth." },
    { japanese: "食べてみないことには、美味しいかどうか分からない。", english: "Unless you try eating it, you won't know if it's good or not." }
  ],
  "中を / 中では": [
    { japanese: "雨の中を走って帰った。", english: "I ran home in the rain." },
    { japanese: "忙しい中を来てくれて、ありがとう。", english: "Thank you for coming despite being busy." },
    { japanese: "混乱の中では冷静な判断が難しい。", english: "In the midst of chaos, it's hard to make calm decisions." },
    { japanese: "暗闇の中を手探りで進んだ。", english: "I groped my way forward in the darkness." }
  ],
  "なくはない": [
    { japanese: "行きたくなくはないが、時間がない。", english: "It's not that I don't want to go, but I don't have time." },
    { japanese: "彼の意見も分からなくはない。", english: "It's not that I can't understand his opinion." },
    { japanese: "可能性がなくはないが、かなり難しい。", english: "It's not that there's no possibility, but it's quite difficult." },
    { japanese: "その料理が食べられなくはないが、あまり好きではない。", english: "It's not that I can't eat it, but I don't really like it." }
  ],
  "なくて済む": [
    { japanese: "バスが来たので、歩かなくて済んだ。", english: "The bus came, so I didn't have to walk." },
    { japanese: "保険に入っていたので、全額払わなくて済んだ。", english: "Since I had insurance, I didn't have to pay the full amount." },
    { japanese: "友達が手伝ってくれたおかげで、一人でやらなくて済んだ。", english: "Thanks to my friend helping, I didn't have to do it alone." },
    { japanese: "この方法なら、遠回りしなくて済む。", english: "With this method, you can avoid taking a detour." }
  ],
  "何も～ない": [
    { japanese: "冷蔵庫には何も入っていない。", english: "There's nothing in the refrigerator." },
    { japanese: "何も心配することはない。", english: "There's nothing to worry about." },
    { japanese: "彼について何も知らない。", english: "I don't know anything about him." },
    { japanese: "何も悪いことはしていない。", english: "I haven't done anything wrong." }
  ],
  "なお": [
    { japanese: "問題は解決したが、なお注意が必要だ。", english: "The problem has been resolved, but caution is still needed." },
    { japanese: "なお、詳しくはホームページをご覧ください。", english: "Furthermore, please see the website for details." },
    { japanese: "手術後も、なお痛みが続いている。", english: "Even after the surgery, the pain still continues." },
    { japanese: "なお、締め切りは来週の金曜日です。", english: "Additionally, the deadline is next Friday." }
  ],
  "ねばならない": [
    { japanese: "学生は勉強せねばならない。", english: "Students must study." },
    { japanese: "この書類は明日までに提出せねばならない。", english: "This document must be submitted by tomorrow." },
    { japanese: "約束は守らねばならない。", english: "Promises must be kept." },
    { japanese: "真実を伝えねばならない。", english: "The truth must be told." }
  ],
  "にあたって": [
    { japanese: "新しいプロジェクトを始めるにあたって、計画を立てた。", english: "On the occasion of starting a new project, we made a plan." },
    { japanese: "卒業にあたって、先生方にお礼を言いたい。", english: "On the occasion of graduation, I'd like to thank my teachers." },
    { japanese: "海外出張にあたって、いくつか準備が必要だ。", english: "In preparation for the overseas business trip, several things need to be prepared." },
    { japanese: "開会にあたって、一言ご挨拶申し上げます。", english: "On the occasion of the opening, I'd like to say a few words." }
  ],
  "にほかならない": [
    { japanese: "成功の原因は努力にほかならない。", english: "The reason for success is nothing other than effort." },
    { japanese: "彼が怒ったのは、心配しているからにほかならない。", english: "The reason he got angry is none other than because he's worried." },
    { japanese: "この結果は、チームワークの成果にほかならない。", english: "This result is nothing but the fruit of teamwork." },
    { japanese: "それは差別にほかならない。", english: "That is nothing other than discrimination." }
  ],
  "に限らず": [
    { japanese: "この問題は日本に限らず、世界中で起きている。", english: "This problem is happening not only in Japan but all over the world." },
    { japanese: "若者に限らず、お年寄りもスマホを使っている。", english: "Not only young people but also the elderly use smartphones." },
    { japanese: "平日に限らず、週末も営業しています。", english: "We're open not only on weekdays but on weekends too." },
    { japanese: "男性に限らず、女性もこのスポーツを楽しんでいる。", english: "Not only men but women also enjoy this sport." }
  ],
  "に限る": [
    { japanese: "暑い日はビールに限る。", english: "On a hot day, nothing beats beer." },
    { japanese: "風邪を引いたときは、寝るに限る。", english: "When you catch a cold, sleeping is the best thing to do." },
    { japanese: "疲れたときは温泉に限る。", english: "When you're tired, nothing is better than a hot spring." },
    { japanese: "ストレス解消には運動に限る。", english: "For stress relief, nothing beats exercise." }
  ],
  "に限って": [
    { japanese: "急いでいるときに限って、電車が遅れる。", english: "It's only when I'm in a hurry that the train is delayed." },
    { japanese: "傘を持っていないときに限って、雨が降る。", english: "It always rains precisely when I don't have an umbrella." },
    { japanese: "うちの子に限って、そんなことをするはずがない。", english: "My child in particular would never do such a thing." },
    { japanese: "大事な日に限って、体調が悪くなる。", english: "It's only on important days that I feel unwell." }
  ],
  "に関わらず": [
    { japanese: "天候に関わらず、イベントは開催されます。", english: "Regardless of the weather, the event will be held." },
    { japanese: "年齢に関わらず、誰でも参加できます。", english: "Regardless of age, anyone can participate." },
    { japanese: "結果に関わらず、やってみることが大切だ。", english: "Regardless of the outcome, trying is what matters." },
    { japanese: "経験の有無に関わらず、応募できます。", english: "You can apply regardless of whether you have experience." }
  ],
  "に関わる": [
    { japanese: "これは命に関わる問題だ。", english: "This is a matter that concerns life itself." },
    { japanese: "環境に関わる仕事がしたい。", english: "I want to do work related to the environment." },
    { japanese: "会社の信用に関わることだから、慎重に対応してください。", english: "Since this relates to the company's reputation, please handle it carefully." },
    { japanese: "国の未来に関わる重要な決定だ。", english: "It's an important decision that affects the country's future." }
  ],
  "に決まっている": [
    { japanese: "彼が犯人に決まっている。", english: "He's definitely the culprit." },
    { japanese: "こんなに勉強したんだから、合格に決まっている。", english: "I've studied this much, so I'll definitely pass." },
    { japanese: "あの映画は面白いに決まっている。", english: "That movie is certainly going to be interesting." },
    { japanese: "日曜日のディズニーランドは混んでいるに決まっている。", english: "Disneyland on a Sunday is sure to be crowded." }
  ],
  "に越したことはない": [
    { japanese: "健康に越したことはない。", english: "Nothing is better than being healthy." },
    { japanese: "準備は早いに越したことはない。", english: "When it comes to preparation, the earlier the better." },
    { japanese: "お金はあるに越したことはない。", english: "It's best to have money." },
    { japanese: "注意するに越したことはない。", english: "It's best to be careful." }
  ],
  "に応えて": [
    { japanese: "市民の要望に応えて、公園が作られた。", english: "In response to citizens' requests, a park was built." },
    { japanese: "ファンの声援に応えて、アンコールを歌った。", english: "In response to the fans' cheers, they sang an encore." },
    { japanese: "顧客のニーズに応えて、新商品を開発した。", english: "In response to customer needs, a new product was developed." },
    { japanese: "期待に応えて、素晴らしい成績を残した。", english: "Living up to expectations, they achieved excellent results." }
  ],
  "に加えて": [
    { japanese: "英語に加えて、中国語も勉強している。", english: "In addition to English, I'm also studying Chinese." },
    { japanese: "仕事に加えて、家事もしなければならない。", english: "In addition to work, I also have to do housework." },
    { japanese: "雨に加えて、風も強くなってきた。", english: "In addition to the rain, the wind has also gotten stronger." },
    { japanese: "経験に加えて、資格も求められている。", english: "In addition to experience, qualifications are also required." }
  ],
  "に基づいて": [
    { japanese: "データに基づいて判断する必要がある。", english: "We need to make judgments based on data." },
    { japanese: "法律に基づいて処罰される。", english: "They will be punished based on the law." },
    { japanese: "この映画は実話に基づいて作られた。", english: "This movie was made based on a true story." },
    { japanese: "調査結果に基づいて、報告書を作成した。", english: "Based on the survey results, a report was prepared." }
  ],
  "に向かって": [
    { japanese: "彼は目標に向かって努力している。", english: "He is working hard toward his goal." },
    { japanese: "船は港に向かって進んでいる。", english: "The ship is heading toward the port." },
    { japanese: "彼女はカメラに向かって笑顔を見せた。", english: "She smiled toward the camera." },
    { japanese: "先生に向かってそんな態度を取るべきではない。", english: "You shouldn't take that kind of attitude toward your teacher." }
  ]
};

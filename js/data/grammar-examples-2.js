/**
 * Example sentences for N2 grammar points (second half).
 * Maps grammar point Japanese text to an array of example sentences.
 */
const GRAMMAR_EXAMPLES_2 = {
  "に応じて": [
    { japanese: "お客様のご要望に応じて、メニューを変更いたします。", english: "We will change the menu in accordance with the customer's requests." },
    { japanese: "経験に応じて、給料が決まります。", english: "Salary is determined depending on experience." },
    { japanese: "状況に応じて、計画を柔軟に変えるべきだ。", english: "You should flexibly change the plan depending on the situation." },
    { japanese: "年齢に応じて、適切な運動量は異なる。", english: "The appropriate amount of exercise differs depending on age." }
  ],
  "に際して": [
    { japanese: "出発に際して、皆さんに一言ご挨拶を申し上げます。", english: "On the occasion of our departure, I would like to say a few words to everyone." },
    { japanese: "新製品の発売に際して、記者会見が開かれた。", english: "A press conference was held on the occasion of the new product launch." },
    { japanese: "契約に際して、いくつかの条件を確認してください。", english: "At the time of signing the contract, please confirm several conditions." },
    { japanese: "入学に際して、必要な書類を提出してください。", english: "On the occasion of enrollment, please submit the necessary documents." }
  ],
  "に先立ち": [
    { japanese: "会議に先立ち、資料を配布しておきます。", english: "Prior to the meeting, I will distribute the materials." },
    { japanese: "工事に先立ち、近隣住民への説明会が行われた。", english: "Before the construction, an information session was held for nearby residents." },
    { japanese: "公演に先立ち、出演者が挨拶をした。", english: "Prior to the performance, the cast gave a greeting." },
    { japanese: "試合開始に先立ち、両チームの選手が整列した。", english: "Before the start of the match, the players from both teams lined up." }
  ],
  "にせよ / にしろ": [
    { japanese: "冗談にせよ、そんなことを言うべきではない。", english: "Even if it's a joke, you shouldn't say such things." },
    { japanese: "理由が何にしろ、遅刻は許されない。", english: "Regardless of the reason, being late is unacceptable." },
    { japanese: "賛成にせよ反対にせよ、自分の意見をはっきり述べるべきだ。", english: "Whether you agree or disagree, you should state your opinion clearly." },
    { japanese: "忙しいにしろ、食事はきちんととったほうがいい。", english: "Even if you're busy, you should eat properly." }
  ],
  "にしろ～にしろ": [
    { japanese: "行くにしろ行かないにしろ、早めに返事をしてください。", english: "Whether you go or not, please reply early." },
    { japanese: "賛成にしろ反対にしろ、会議には出席してください。", english: "Whether you agree or disagree, please attend the meeting." },
    { japanese: "買うにしろ借りるにしろ、まずは予算を確認しよう。", english: "Whether we buy or rent, let's first check the budget." },
    { japanese: "電車にしろバスにしろ、一時間はかかる。", english: "Whether by train or by bus, it takes an hour." }
  ],
  "にしたら": [
    { japanese: "親にしたら、子供の将来が一番心配だ。", english: "From a parent's perspective, their child's future is the biggest worry." },
    { japanese: "学生にしたら、授業料の値上げは大きな問題だ。", english: "From a student's perspective, the tuition increase is a big problem." },
    { japanese: "彼にしたら、精一杯努力した結果なのだ。", english: "From his perspective, it was the result of his best effort." },
    { japanese: "被害者にしたら、この判決は納得できないだろう。", english: "From the victim's perspective, this verdict is probably unacceptable." }
  ],
  "にしても": [
    { japanese: "安いにしても、品質が悪ければ意味がない。", english: "Even if it's cheap, if the quality is bad, there's no point." },
    { japanese: "忙しいにしても、少しは休んだほうがいい。", english: "Even if you're busy, you should rest a little." },
    { japanese: "冗談にしても、言い過ぎだ。", english: "Even as a joke, that's going too far." },
    { japanese: "転職するにしても、もう少し考えてからにしよう。", english: "Even if you change jobs, let's think about it a bit more first." }
  ],
  "に沿って": [
    { japanese: "川に沿って、美しい桜並木が続いている。", english: "Beautiful rows of cherry trees continue along the river." },
    { japanese: "計画に沿って、プロジェクトを進めましょう。", english: "Let's proceed with the project in accordance with the plan." },
    { japanese: "方針に沿って、新しい制度が導入された。", english: "A new system was introduced in accordance with the policy." },
    { japanese: "海岸に沿って、ジョギングコースが整備されている。", english: "A jogging course has been set up along the coast." }
  ],
  "に相違ない": [
    { japanese: "この足跡から判断すると、犯人は男性に相違ない。", english: "Judging from these footprints, the culprit is certainly a man." },
    { japanese: "あの様子では、彼は何か隠しているに相違ない。", english: "From the look of things, he is without a doubt hiding something." },
    { japanese: "これだけの証拠があれば、彼が犯人に相違ない。", english: "With this much evidence, he is certainly the culprit." },
    { japanese: "彼女の実力なら、試験に合格するに相違ない。", english: "With her ability, she will without a doubt pass the exam." }
  ],
  "に過ぎない": [
    { japanese: "これは私の個人的な意見に過ぎない。", english: "This is merely my personal opinion." },
    { japanese: "彼はまだ学生に過ぎないのに、立派な研究をしている。", english: "He is just a student, yet he is doing impressive research." },
    { japanese: "それは噂に過ぎないから、信じないほうがいい。", english: "That is nothing more than a rumor, so you shouldn't believe it." },
    { japanese: "私が言えるのは、ここまでに過ぎません。", english: "What I can say is no more than this." }
  ],
  "に伴って": [
    { japanese: "経済の発展に伴って、環境問題が深刻になった。", english: "Along with economic development, environmental problems became serious." },
    { japanese: "人口の増加に伴って、住宅不足が起きている。", english: "As the population increases, a housing shortage is occurring." },
    { japanese: "技術の進歩に伴って、新しい仕事が生まれている。", english: "Along with technological progress, new jobs are being created." },
    { japanese: "気温の上昇に伴って、氷河が溶け始めた。", english: "As temperatures rise, glaciers have started to melt." }
  ],
  "につけ": [
    { japanese: "この曲を聞くにつけ、学生時代を思い出す。", english: "Every time I hear this song, I remember my student days." },
    { japanese: "嬉しいにつけ悲しいにつけ、母のことを思い出す。", english: "Whether happy or sad, I think of my mother." },
    { japanese: "彼の成功を見るにつけ、努力の大切さを感じる。", english: "Whenever I see his success, I feel the importance of effort." },
    { japanese: "ニュースを見るにつけ、世界の問題を考えさせられる。", english: "Every time I watch the news, I'm made to think about world problems." }
  ],
  "につき": [
    { japanese: "工事中につき、ご迷惑をおかけします。", english: "Due to construction, we apologize for the inconvenience." },
    { japanese: "一人につき、三つまで注文できます。", english: "You can order up to three per person." },
    { japanese: "本日は定休日につき、営業しておりません。", english: "Due to today being a regular holiday, we are not open." },
    { japanese: "一回につき、五百円の参加費がかかります。", english: "There is a participation fee of 500 yen per session." }
  ],
  "にわたって": [
    { japanese: "三日間にわたって、会議が行われた。", english: "The conference was held over a period of three days." },
    { japanese: "この問題は長期にわたって議論されてきた。", english: "This issue has been debated over a long period." },
    { japanese: "広い地域にわたって、被害が出ている。", english: "Damage has occurred throughout a wide area." },
    { japanese: "十年にわたって、この研究を続けてきた。", english: "I have continued this research over ten years." }
  ],
  "にも関わらず": [
    { japanese: "雨にも関わらず、大勢の人が集まった。", english: "Despite the rain, a large number of people gathered." },
    { japanese: "何度も注意したにも関わらず、彼は同じ間違いを繰り返す。", english: "Despite being warned many times, he repeats the same mistakes." },
    { japanese: "約束したにも関わらず、彼は来なかった。", english: "Despite having promised, he didn't come." },
    { japanese: "高額にも関わらず、このバッグは人気がある。", english: "Despite the high price, this bag is popular." }
  ],
  "にて": [
    { japanese: "会議は第三会議室にて行われます。", english: "The meeting will be held in Conference Room 3." },
    { japanese: "詳細はメールにてお知らせいたします。", english: "Details will be communicated by email." },
    { japanese: "本日をもちまして、当店にて最終営業とさせていただきます。", english: "As of today, this will be the final day of business at this store." },
    { japanese: "受付は一階ロビーにて行っております。", english: "Reception is being held in the first-floor lobby." }
  ],
  "のももっともだ": [
    { japanese: "あんなにひどいことを言われたら、怒るのももっともだ。", english: "If someone says such terrible things to you, it's only natural to be angry." },
    { japanese: "彼が反対するのももっともだ。計画には無理がある。", english: "No wonder he opposes it. The plan has flaws." },
    { japanese: "あれだけ練習したのだから、自信があるのももっともだ。", english: "Since she practiced that much, it's only natural she has confidence." },
    { japanese: "初めての海外旅行で緊張するのももっともだ。", english: "It's only natural to be nervous on your first trip abroad." }
  ],
  "の下で": [
    { japanese: "優秀な先生の下で、多くのことを学んだ。", english: "I learned many things under an excellent teacher." },
    { japanese: "厳しい条件の下で、彼らは研究を続けた。", english: "Under strict conditions, they continued their research." },
    { japanese: "青空の下で、ピクニックを楽しんだ。", english: "We enjoyed a picnic under the blue sky." },
    { japanese: "新しいリーダーの下で、チームは大きく変わった。", english: "Under the new leader, the team changed greatly." }
  ],
  "の上では": [
    { japanese: "法律の上では、男女は平等である。", english: "According to the law, men and women are equal." },
    { japanese: "書類の上では問題ないが、実際には課題が多い。", english: "On paper there are no problems, but in reality there are many issues." },
    { japanese: "理論の上では可能だが、実現は難しい。", english: "In theory it is possible, but achieving it is difficult." },
    { japanese: "データの上では、売上は順調に伸びている。", english: "According to the data, sales are growing steadily." }
  ],
  "のみならず": [
    { japanese: "この問題は日本のみならず、世界中で議論されている。", english: "This issue is being discussed not only in Japan but around the world." },
    { japanese: "彼は英語のみならず、フランス語も話せる。", english: "He can speak not only English but also French." },
    { japanese: "健康のみならず、経済面でも影響が出ている。", english: "There are effects not only on health but also on the economy." },
    { japanese: "大人のみならず、子供にも人気のある映画だ。", english: "It is a movie popular not only with adults but also with children." }
  ],
  "ぬ": [
    { japanese: "知らぬ間に、季節が変わっていた。", english: "Before I knew it, the season had changed." },
    { japanese: "彼の行方は誰も知らぬ。", english: "Nobody knows his whereabouts." },
    { japanese: "言わぬが花ということもある。", english: "Sometimes it's better left unsaid." },
    { japanese: "思わぬところで旧友に再会した。", english: "I reunited with an old friend in an unexpected place." }
  ],
  "抜きにして": [
    { japanese: "冗談は抜きにして、真剣に話し合おう。", english: "Joking aside, let's discuss this seriously." },
    { japanese: "お世辞は抜きにして、本当においしい料理だった。", english: "Flattery aside, it was truly delicious food." },
    { japanese: "形式は抜きにして、自由に意見を出してください。", english: "Without worrying about formalities, please share your opinions freely." },
    { japanese: "彼の努力を抜きにして、この成功は語れない。", english: "You cannot talk about this success without mentioning his effort." }
  ],
  "抜く": [
    { japanese: "彼はフルマラソンを最後まで走り抜いた。", english: "He ran the full marathon through to the end." },
    { japanese: "困難な時期を耐え抜いて、会社は復活した。", english: "Having endured through the difficult period, the company recovered." },
    { japanese: "徹夜で考え抜いた結果、良いアイデアが浮かんだ。", english: "As a result of thinking it through all night, a good idea came to me." },
    { japanese: "彼女はライバルを追い抜いて、一位でゴールした。", english: "She overtook her rival and finished in first place." }
  ],
  "を契機に": [
    { japanese: "留学を契機に、将来の目標が明確になった。", english: "Studying abroad was the opportunity that made my future goals clear." },
    { japanese: "その事故を契機に、安全基準が見直された。", english: "That accident served as the impetus for safety standards to be reviewed." },
    { japanese: "結婚を契機に、健康的な生活を始めた。", english: "Taking the opportunity of getting married, I started a healthy lifestyle." },
    { japanese: "震災を契機に、防災意識が高まった。", english: "The earthquake served as a catalyst for increased disaster awareness." }
  ],
  "をめぐって": [
    { japanese: "この土地の所有権をめぐって、裁判が行われている。", english: "A trial is being held concerning the ownership of this land." },
    { japanese: "新しい法案をめぐって、激しい議論が続いている。", english: "Intense debate continues concerning the new bill." },
    { japanese: "環境問題をめぐって、各国の意見が対立している。", english: "Opinions of various countries are divided over environmental issues." },
    { japanese: "後継者問題をめぐって、社内で争いが起きた。", english: "A dispute arose within the company concerning the succession issue." }
  ],
  "をもとに": [
    { japanese: "実話をもとに、この映画は作られた。", english: "This movie was made based on a true story." },
    { japanese: "アンケートの結果をもとに、商品を改良した。", english: "We improved the product based on the survey results." },
    { japanese: "過去のデータをもとに、将来の売上を予測する。", english: "We predict future sales based on past data." },
    { japanese: "彼の経験をもとに書かれた小説がベストセラーになった。", english: "A novel written based on his experiences became a bestseller." }
  ],
  "を除いて": [
    { japanese: "月曜日を除いて、毎日営業しています。", english: "We are open every day except Monday." },
    { japanese: "彼を除いて、全員が賛成した。", english: "Everyone agreed except him." },
    { japanese: "一部の地域を除いて、天気は晴れるでしょう。", english: "With the exception of some areas, the weather will be sunny." },
    { japanese: "週末を除いて、毎日六時に起きる。", english: "Except on weekends, I wake up at six every day." }
  ],
  "を問わず": [
    { japanese: "年齢を問わず、誰でも参加できます。", english: "Regardless of age, anyone can participate." },
    { japanese: "天候を問わず、試合は予定通り行われる。", english: "Regardless of the weather, the game will be held as scheduled." },
    { japanese: "経験の有無を問わず、応募を歓迎します。", english: "Regardless of whether you have experience, applications are welcome." },
    { japanese: "国籍を問わず、優秀な人材を採用する方針だ。", english: "Our policy is to hire excellent talent regardless of nationality." }
  ],
  "お～願う": [
    { japanese: "こちらの書類にお目通し願います。", english: "Could you please look over these documents." },
    { japanese: "少々お待ち願えますか。", english: "Could you please wait a moment?" },
    { japanese: "お手数ですが、お返事願います。", english: "I'm sorry to trouble you, but could you please reply." },
    { japanese: "この件について、お力添え願えないでしょうか。", english: "Could I ask for your assistance on this matter?" }
  ],
  "おまけに": [
    { japanese: "今日は電車が遅れた。おまけに雨まで降り出した。", english: "The train was late today. What's more, it even started raining." },
    { japanese: "道に迷った上に、おまけに財布を落としてしまった。", english: "I got lost, and to make matters worse, I dropped my wallet." },
    { japanese: "このレストランは安くておいしい。おまけにサービスもいい。", english: "This restaurant is cheap and delicious. On top of that, the service is good too." },
    { japanese: "風邪を引いた。おまけに熱まで出てきた。", english: "I caught a cold. To make matters worse, I even got a fever." }
  ],
  "恐らく": [
    { japanese: "恐らく、明日の試合は中止になるだろう。", english: "The game tomorrow will probably be cancelled." },
    { japanese: "恐らく彼は知っていたはずだ。", english: "He most likely knew about it." },
    { japanese: "恐らく、これが最後のチャンスだろう。", english: "This is probably the last chance." },
    { japanese: "恐らく原因は睡眠不足だと思われる。", english: "The cause is probably lack of sleep." }
  ],
  "恐れがある": [
    { japanese: "台風が接近しており、洪水の恐れがある。", english: "A typhoon is approaching, and there is a danger of flooding." },
    { japanese: "この薬には副作用が出る恐れがある。", english: "There is a risk that this medicine may cause side effects." },
    { japanese: "放置すると、症状が悪化する恐れがある。", english: "If left untreated, there is a risk the symptoms may worsen." },
    { japanese: "個人情報が流出する恐れがあるため、注意が必要だ。", english: "Caution is needed as there is a risk of personal information being leaked." }
  ],
  "及び": [
    { japanese: "氏名及び住所をご記入ください。", english: "Please fill in your name and address." },
    { japanese: "本校の教員及び学生は、この施設を利用できます。", english: "Teachers and students of this school can use this facility." },
    { japanese: "応募には履歴書及び職務経歴書が必要です。", english: "A resume and work history are required for the application." },
    { japanese: "東京及び大阪で説明会を開催いたします。", english: "Information sessions will be held in Tokyo and Osaka." }
  ],
  "ろくに～ない": [
    { japanese: "忙しくて、ろくに食事もとれない。", english: "I'm so busy I can't even eat properly." },
    { japanese: "昨日はろくに眠れなかった。", english: "I barely slept last night." },
    { japanese: "説明もろくに聞かずに、作業を始めてしまった。", english: "He started the work without even properly listening to the explanation." },
    { japanese: "ろくに練習もしないで、試合に出るなんて無謀だ。", english: "It's reckless to enter a match without practicing enough." }
  ],
  "幸いなことに": [
    { japanese: "幸いなことに、事故でけが人は出なかった。", english: "Fortunately, no one was injured in the accident." },
    { japanese: "幸いなことに、雨が止んで遠足に行けた。", english: "Luckily, the rain stopped and we could go on the excursion." },
    { japanese: "幸いなことに、締め切りに間に合った。", english: "Fortunately, I made it in time for the deadline." },
    { japanese: "幸いなことに、失くした財布が見つかった。", english: "Luckily, the wallet I lost was found." }
  ],
  "せいか": [
    { japanese: "疲れているせいか、集中できない。", english: "Perhaps because I'm tired, I can't concentrate." },
    { japanese: "風邪のせいか、頭がぼーっとする。", english: "Perhaps because of a cold, my head feels foggy." },
    { japanese: "年のせいか、最近物忘れが多くなった。", english: "Perhaps because of my age, I've been forgetting things more often lately." },
    { japanese: "天気が悪いせいか、客の数が少ない。", english: "Perhaps because the weather is bad, there are few customers." }
  ],
  "せっかく": [
    { japanese: "せっかく作ったのに、誰も食べてくれなかった。", english: "Even though I went to the trouble of making it, nobody ate it." },
    { japanese: "せっかくの休みだから、どこかに出かけよう。", english: "Since we have this rare day off, let's go somewhere." },
    { japanese: "せっかく日本に来たのだから、富士山を見に行きたい。", english: "Since I've come all the way to Japan, I want to go see Mt. Fuji." },
    { japanese: "せっかくのチャンスを無駄にしないでください。", english: "Please don't waste this valuable opportunity." }
  ],
  "せめて": [
    { japanese: "全部は無理でも、せめて半分は終わらせたい。", english: "Even if I can't finish all of it, I want to finish at least half." },
    { japanese: "せめて週に一回は運動するようにしている。", english: "I try to exercise at least once a week." },
    { japanese: "旅行は無理でも、せめて美味しいものを食べに行こう。", english: "Even if a trip is impossible, let's at least go eat something delicious." },
    { japanese: "せめてメールだけでも返事をください。", english: "Please at least reply by email." }
  ],
  "次第": [
    { japanese: "届き次第、ご連絡いたします。", english: "I will contact you as soon as it arrives." },
    { japanese: "準備でき次第、出発しましょう。", english: "Let's depart as soon as preparations are complete." },
    { japanese: "結果が分かり次第、お知らせします。", english: "I will let you know as soon as the results are available." },
    { japanese: "天候次第で、イベントは中止になる可能性がある。", english: "Depending on the weather, the event may be cancelled." }
  ],
  "次第で": [
    { japanese: "努力次第で、結果は変わる。", english: "Depending on your effort, the results will change." },
    { japanese: "やり方次第で、もっと効率的にできる。", english: "Depending on the approach, it can be done more efficiently." },
    { japanese: "考え方次第で、困難も成長のチャンスになる。", english: "Depending on how you think about it, difficulties can become opportunities for growth." },
    { japanese: "交渉次第で、条件は変わるかもしれない。", english: "Depending on negotiations, the conditions might change." }
  ],
  "次第に": [
    { japanese: "空が次第に暗くなってきた。", english: "The sky gradually became darker." },
    { japanese: "日本語が次第に上手になってきた。", english: "My Japanese has gradually gotten better." },
    { japanese: "最初は緊張していたが、次第にリラックスできた。", english: "I was nervous at first, but gradually I was able to relax." },
    { japanese: "秋になり、木の葉が次第に色づいてきた。", english: "Autumn came, and the leaves gradually began to change color." }
  ],
  "しかも": [
    { japanese: "彼は頭がいい。しかも、スポーツも得意だ。", english: "He is smart. Moreover, he is also good at sports." },
    { japanese: "この料理は簡単に作れる。しかも、おいしい。", english: "This dish is easy to make. Furthermore, it's delicious." },
    { japanese: "今日は残業だった。しかも、電車を乗り過ごしてしまった。", english: "I worked overtime today. What's more, I missed my train stop." },
    { japanese: "このホテルは駅から近い。しかも、料金も安い。", english: "This hotel is close to the station. Moreover, the rates are cheap." }
  ],
  "その上": [
    { japanese: "彼女は美人だ。その上、性格もいい。", english: "She is beautiful. In addition, she has a nice personality." },
    { japanese: "今月は出費が多かった。その上、車の修理代もかかった。", english: "I had a lot of expenses this month. On top of that, car repair costs also came up." },
    { japanese: "この仕事は給料がいい。その上、休みも多い。", english: "This job pays well. Furthermore, there are many days off." },
    { japanese: "風邪を引いてしまった。その上、明日は大事な試験がある。", english: "I caught a cold. Besides, I have an important exam tomorrow." }
  ],
  "それなのに": [
    { japanese: "一生懸命勉強した。それなのに、試験に落ちてしまった。", english: "I studied hard. And yet, I failed the exam." },
    { japanese: "約束した。それなのに、彼は来なかった。", english: "We made a promise. Despite that, he didn't come." },
    { japanese: "何度も説明した。それなのに、まだ分からないと言う。", english: "I explained many times. And yet, they say they still don't understand." },
    { japanese: "十分な準備をした。それなのに、うまくいかなかった。", english: "I prepared thoroughly. Despite this, it didn't go well." }
  ],
  "それなら": [
    { japanese: "明日は雨らしい。それなら、出かけるのはやめよう。", english: "It seems it will rain tomorrow. If that's the case, let's not go out." },
    { japanese: "「バスがないんです。」「それなら、タクシーで行きましょう。」", english: "'There are no buses.' 'If so, let's go by taxi.'" },
    { japanese: "日本語を勉強したいの？それなら、いい教科書を紹介するよ。", english: "You want to study Japanese? If that's the case, I'll recommend a good textbook." },
    { japanese: "予算が足りない？それなら、計画を見直そう。", english: "Not enough budget? If so, let's review the plan." }
  ],
  "それにしても": [
    { japanese: "忙しいのは分かるが、それにしても連絡ぐらいはしてほしい。", english: "I understand you're busy, but even so, I'd like you to at least get in touch." },
    { japanese: "冬だから寒いのは当然だが、それにしても今日は寒すぎる。", english: "It's natural for winter to be cold, but nevertheless, today is too cold." },
    { japanese: "難しい試験だったが、それにしてもこの点数は低すぎる。", english: "It was a difficult exam, but even so, this score is too low." },
    { japanese: "新人だから仕方ないが、それにしてもミスが多い。", english: "It can't be helped since he's new, but even so, there are too many mistakes." }
  ],
  "そう言えば": [
    { japanese: "そう言えば、来週は祝日だったね。", english: "Come to think of it, next week is a holiday." },
    { japanese: "そう言えば、昨日田中さんから電話があったよ。", english: "Come to think of it, Tanaka called yesterday." },
    { japanese: "そう言えば、あの店は先月閉店したらしい。", english: "Come to think of it, that shop apparently closed last month." },
    { japanese: "そう言えば、彼は最近見かけないね。", english: "Come to think of it, I haven't seen him lately." }
  ],
  "そうすると": [
    { japanese: "このボタンを押してください。そうすると、画面が切り替わります。", english: "Please press this button. Then the screen will switch." },
    { japanese: "毎日練習した。そうすると、だんだん上手になった。", english: "I practiced every day. As a result, I gradually got better." },
    { japanese: "窓を開けた。そうすると、涼しい風が入ってきた。", english: "I opened the window. Then a cool breeze came in." },
    { japanese: "薬を飲んだ。そうすると、すぐに痛みが治まった。", english: "I took the medicine. Then the pain quickly subsided." }
  ],
  "末に": [
    { japanese: "長い議論の末に、ようやく結論が出た。", english: "After long discussions, a conclusion was finally reached." },
    { japanese: "悩んだ末に、転職することを決めた。", english: "After much deliberation, I decided to change jobs." },
    { japanese: "苦労の末に、ついに夢を実現した。", english: "After much hardship, I finally realized my dream." },
    { japanese: "考えに考えた末に、留学することにした。", english: "After thinking long and hard, I decided to study abroad." }
  ],
  "少しも～ない": [
    { japanese: "彼の話は少しも面白くない。", english: "His stories are not interesting at all." },
    { japanese: "薬を飲んだが、少しも良くならない。", english: "I took medicine, but I haven't gotten better at all." },
    { japanese: "彼女は少しも悪いと思っていないようだ。", english: "She doesn't seem to feel bad about it at all." },
    { japanese: "説明を聞いたが、少しも分からなかった。", english: "I listened to the explanation, but I didn't understand it one bit." }
  ],
  "少なくとも": [
    { japanese: "少なくとも三十分前には到着してください。", english: "Please arrive at least thirty minutes early." },
    { japanese: "少なくとも百人は参加するだろう。", english: "At least a hundred people will probably participate." },
    { japanese: "少なくとも週に二回は運動したほうがいい。", english: "You should exercise at least twice a week." },
    { japanese: "少なくとも私はそう思っている。", english: "At least that's what I think." }
  ],
  "直ちに": [
    { japanese: "火災報知器が鳴ったら、直ちに避難してください。", english: "If the fire alarm goes off, evacuate immediately." },
    { japanese: "問題が発覚し、直ちに対応策が取られた。", english: "The problem was discovered, and countermeasures were taken at once." },
    { japanese: "社長は直ちに記者会見を開いた。", english: "The president held a press conference immediately." },
    { japanese: "異常を感じたら、直ちに使用を中止してください。", english: "If you feel anything abnormal, stop using it immediately." }
  ],
  "たまえ": [
    { japanese: "君、もっとしっかりしたまえ。", english: "You there, pull yourself together." },
    { japanese: "遠慮しないで、好きなだけ食べたまえ。", english: "Don't hold back; eat as much as you like." },
    { japanese: "この本を読んでみたまえ。きっと役に立つ。", english: "Try reading this book. It will surely be useful." },
    { japanese: "もう少し落ち着きたまえ。", english: "Calm down a bit." }
  ],
  "てばかりはいられない": [
    { japanese: "落ち込んでばかりはいられない。前に進まなければ。", english: "I can't keep feeling down. I have to move forward." },
    { japanese: "遊んでばかりはいられない。試験が近い。", english: "I can't keep playing around. The exam is near." },
    { japanese: "泣いてばかりはいられない。何か行動を起こさなければ。", english: "I can't keep crying. I have to take some action." },
    { japanese: "人に頼ってばかりはいられない。自分でやらなければ。", english: "I can't keep relying on others. I have to do it myself." }
  ],
  "てでも": [
    { japanese: "借金してでも、この家を買いたい。", english: "Even if I have to go into debt, I want to buy this house." },
    { japanese: "無理をしてでも、締め切りに間に合わせる。", english: "Even if I have to push myself, I'll meet the deadline." },
    { japanese: "嘘をついてでも、彼女を守りたい。", english: "Even if I have to lie, I want to protect her." },
    { japanese: "徹夜してでも、この仕事を終わらせる。", english: "Even if I have to stay up all night, I will finish this work." }
  ],
  "て以来": [
    { japanese: "日本に来て以来、毎日日本語を勉強している。", english: "Since coming to Japan, I have been studying Japanese every day." },
    { japanese: "大学を卒業して以来、彼とは会っていない。", english: "I haven't seen him since graduating from university." },
    { japanese: "この町に引っ越して以来、十年になる。", english: "It has been ten years since I moved to this town." },
    { japanese: "あの事件があって以来、セキュリティが強化された。", english: "Since that incident, security has been strengthened." }
  ],
  "ていては": [
    { japanese: "そんなに心配していては、何もできない。", english: "If you keep worrying that much, you won't be able to do anything." },
    { japanese: "毎日遅刻していては、クビになるよ。", english: "If you keep being late every day, you'll get fired." },
    { japanese: "甘いものばかり食べていては、健康に悪い。", english: "If you keep eating only sweets, it's bad for your health." },
    { japanese: "文句ばかり言っていては、状況は変わらない。", english: "If you keep just complaining, the situation won't change." }
  ],
  "てこそ": [
    { japanese: "失敗してこそ、人は成長できる。", english: "It is precisely by failing that people can grow." },
    { japanese: "自分で体験してこそ、本当の意味が分かる。", english: "It is only by experiencing it yourself that you understand its true meaning." },
    { japanese: "苦労してこそ、成功の喜びが味わえる。", english: "It is precisely by struggling that you can taste the joy of success." },
    { japanese: "練習してこそ、上達するものだ。", english: "It is only through practice that one improves." }
  ],
  "てまで": [
    { japanese: "健康を犠牲にしてまで、働く必要はない。", english: "There is no need to work to the point of sacrificing your health." },
    { japanese: "嘘をついてまで、人に好かれたくない。", english: "I don't want to be liked by people to the extent of telling lies." },
    { japanese: "借金してまで、ブランド品を買うのはおかしい。", english: "It's strange to go so far as to take on debt to buy brand-name goods." },
    { japanese: "家族を犠牲にしてまで、仕事をする意味があるのか。", english: "Is there meaning in working to the point of sacrificing your family?" }
  ],
  "てならない": [
    { japanese: "故郷のことが懐かしくてならない。", english: "I can't help but feel nostalgic about my hometown." },
    { japanese: "試験の結果が気になってならない。", english: "I can't help worrying about the exam results." },
    { japanese: "彼の将来が心配でならない。", english: "I'm extremely worried about his future." },
    { japanese: "この景色は美しくてならない。", english: "This scenery is unbearably beautiful." }
  ],
  "てたまらない": [
    { japanese: "のどが渇いてたまらない。", english: "I'm unbearably thirsty." },
    { japanese: "早く結果が知りたくてたまらない。", english: "I can't wait to know the results." },
    { japanese: "退屈でたまらないので、散歩に出かけた。", english: "I was so bored I couldn't stand it, so I went for a walk." },
    { japanese: "新しいゲームが楽しくてたまらない。", english: "The new game is so fun I can't get enough of it." }
  ],
  "て当然だ": [
    { japanese: "あれだけ練習すれば、上手になって当然だ。", english: "If you practice that much, it's natural to get good at it." },
    { japanese: "約束を破ったのだから、怒られて当然だ。", english: "Since you broke your promise, it's only natural to be scolded." },
    { japanese: "毎日遅刻していれば、クビになって当然だ。", english: "If you're late every day, it's natural to get fired." },
    { japanese: "そんな失礼なことを言えば、嫌われて当然だ。", english: "If you say such rude things, it's only natural to be disliked." }
  ],
  "ては / では": [
    { japanese: "食べては寝るという生活を続けている。", english: "I keep living a life of eating and then sleeping." },
    { japanese: "書いては消し、書いては消しを繰り返した。", english: "I kept writing and erasing, writing and erasing." },
    { japanese: "そんなことをしては困る。", english: "It would be a problem if you do such things." },
    { japanese: "この天気では、外出は無理だ。", english: "In this weather, going out is impossible." }
  ],
  "てはいられない": [
    { japanese: "もうのんびりしてはいられない。締め切りが近い。", english: "I can't afford to take it easy anymore. The deadline is close." },
    { japanese: "こんな状況で、黙ってはいられない。", english: "In a situation like this, I can't remain silent." },
    { japanese: "いつまでも親に甘えてはいられない。", english: "I can't keep relying on my parents forever." },
    { japanese: "試験前なので、遊んではいられない。", english: "Since exams are coming, I can't afford to play around." }
  ],
  "てはならない": [
    { japanese: "この秘密は誰にも話してはならない。", english: "You must not tell this secret to anyone." },
    { japanese: "歴史の過ちを繰り返してはならない。", english: "We must not repeat the mistakes of history." },
    { japanese: "子供の前で暴力を振るってはならない。", english: "You must not use violence in front of children." },
    { japanese: "命の大切さを忘れてはならない。", english: "We should not forget the importance of life." }
  ],
  "ては～ては": [
    { japanese: "転んでは起き、転んでは起きを繰り返した。", english: "I kept falling down and getting up, falling down and getting up." },
    { japanese: "読んでは忘れ、読んでは忘れの繰り返しだ。", english: "I keep reading and forgetting, reading and forgetting." },
    { japanese: "作っては壊し、作っては壊しを続けた。", english: "I kept building and breaking, building and breaking." },
    { japanese: "泣いては笑い、泣いては笑いの一日だった。", english: "It was a day of crying and laughing, crying and laughing." }
  ],
  "と同時に": [
    { japanese: "ベルが鳴ると同時に、生徒たちは教室を飛び出した。", english: "The moment the bell rang, the students rushed out of the classroom." },
    { japanese: "彼女は母であると同時に、優れた研究者でもある。", english: "She is a mother and at the same time an excellent researcher." },
    { japanese: "卒業すると同時に、就職が決まった。", english: "At the same time as graduating, my job was decided." },
    { japanese: "日が沈むと同時に、気温が急に下がった。", english: "At the same time as the sun set, the temperature dropped sharply." }
  ],
  "といった": [
    { japanese: "東京や大阪といった大都市は人口が多い。", english: "Large cities such as Tokyo and Osaka have large populations." },
    { japanese: "サッカーや野球といったスポーツが人気だ。", english: "Sports like soccer and baseball are popular." },
    { japanese: "漢字や文法といった基礎をしっかり学ぶべきだ。", english: "You should thoroughly study the basics, such as kanji and grammar." },
    { japanese: "寿司や天ぷらといった日本料理は世界中で愛されている。", english: "Japanese cuisine such as sushi and tempura is loved around the world." }
  ],
  "というふうに": [
    { japanese: "毎朝六時に起きるというふうに、規則正しい生活をしている。", english: "I live a regular life, waking up at six every morning and so on." },
    { japanese: "「まず計画を立てて、それから実行する」というふうに進めてください。", english: "Please proceed in such a way that you first make a plan, then carry it out." },
    { japanese: "彼は何でも前向きに考えるというふうに、楽観的な人だ。", english: "He is an optimistic person, thinking positively about everything." },
    { japanese: "先生が言ったというふうに、やってみてください。", english: "Please try doing it the way the teacher said." }
  ],
  "ということは": [
    { japanese: "電気がついている。ということは、誰かいるはずだ。", english: "The lights are on. That means someone must be there." },
    { japanese: "彼が来ないということは、何かあったのかもしれない。", english: "The fact that he's not coming means something may have happened." },
    { japanese: "試験に受かったということは、十分な実力があるということだ。", english: "The fact that you passed the exam means you have sufficient ability." },
    { japanese: "返事がないということは、賛成ということですね。", english: "No reply means you agree, right?" }
  ],
  "というものだ": [
    { japanese: "苦労して手に入れたからこそ、価値があるというものだ。", english: "It is precisely because it was obtained through hardship that it has value." },
    { japanese: "親が子供を心配するのは当たり前というものだ。", english: "It is only natural for parents to worry about their children." },
    { japanese: "努力なしに成功はないというものだ。", english: "There is no success without effort — that's just how it is." },
    { japanese: "お互い様というものだ。困ったときは助け合おう。", english: "It's a mutual thing. Let's help each other when in trouble." }
  ],
  "というものではない": [
    { japanese: "お金があれば幸せになれるというものではない。", english: "It's not necessarily the case that having money makes you happy." },
    { japanese: "たくさん食べれば健康になるというものではない。", english: "Eating a lot doesn't necessarily make you healthy." },
    { japanese: "高ければいいというものではない。", english: "It's not necessarily the case that expensive means good." },
    { japanese: "謝れば許されるというものではない。", english: "It's not necessarily the case that apologizing means you'll be forgiven." }
  ],
  "と考えられる": [
    { japanese: "この遺跡は千年以上前のものだと考えられる。", english: "These ruins are thought to be over a thousand years old." },
    { japanese: "ストレスが原因だと考えられる。", english: "It is believed that stress is the cause." },
    { japanese: "今後も需要が増えると考えられる。", english: "It is thought that demand will continue to increase." },
    { japanese: "この方法が最も効果的だと考えられる。", english: "This method is considered to be the most effective." }
  ],
  "とか（で）": [
    { japanese: "田中さんは来月結婚するとかで、とても嬉しそうだ。", english: "I heard Tanaka is getting married next month — she looks very happy." },
    { japanese: "あの店は来週閉店するとか。", english: "I heard that store is closing next week." },
    { japanese: "新しい部長はとても厳しい人だとか。", english: "I heard the new department head is a very strict person." },
    { japanese: "彼は海外に転勤になるとかで、送別会を開くことになった。", english: "I heard he's being transferred overseas, so we decided to hold a farewell party." }
  ],
  "とっくに": [
    { japanese: "そんなことはとっくに知っていたよ。", english: "I knew that a long time ago." },
    { japanese: "宿題はとっくに終わっている。", english: "I finished my homework a long time ago." },
    { japanese: "電車はとっくに出発してしまった。", english: "The train has long since departed." },
    { japanese: "彼女はとっくに帰ったよ。", english: "She left a long time ago." }
  ],
  "ところだった": [
    { japanese: "もう少しで電車に乗り遅れるところだった。", english: "I was just about to miss the train." },
    { japanese: "危うく交通事故に遭うところだった。", english: "I was just about to be in a traffic accident." },
    { japanese: "うっかり大事な会議を忘れるところだった。", english: "I almost forgot about the important meeting." },
    { japanese: "もう少しで財布を落とすところだった。", english: "I was just about to drop my wallet." }
  ],
  "ところに": [
    { japanese: "出かけようとしたところに、友達が訪ねてきた。", english: "Just as I was about to leave, a friend came to visit." },
    { japanese: "昼寝をしていたところに、電話が鳴った。", english: "Just as I was napping, the phone rang." },
    { japanese: "料理を作っているところに、子供が帰ってきた。", english: "Just as I was cooking, the children came home." },
    { japanese: "困っていたところに、彼が助けに来てくれた。", english: "Just when I was in trouble, he came to help." }
  ],
  "ところを見ると": [
    { japanese: "彼が黙っているところを見ると、何か隠しているに違いない。", english: "Seeing that he's keeping quiet, he must be hiding something." },
    { japanese: "あの行列ができているところを見ると、おいしい店に違いない。", english: "Judging from that line, it must be a delicious restaurant." },
    { japanese: "彼女が泣いているところを見ると、何かあったのだろう。", english: "Seeing that she's crying, something must have happened." },
    { japanese: "空が暗くなってきたところを見ると、もうすぐ雨が降りそうだ。", english: "Judging from the sky getting dark, it looks like it will rain soon." }
  ],
  "とも": [
    { japanese: "遅くとも五時までには終わらせる。", english: "I will finish by five o'clock at the latest." },
    { japanese: "少なくとも三人は必要だ。", english: "At least three people are needed." },
    { japanese: "何があろうとも、約束は守る。", english: "No matter what happens, I will keep my promise." },
    { japanese: "たとえ失敗しようとも、挑戦する価値はある。", english: "Even if I fail, it's worth trying." }
  ],
  "としても": [
    { japanese: "仮に宝くじに当たったとしても、仕事は続ける。", english: "Even if I were to win the lottery, I would continue working." },
    { japanese: "たとえ反対されたとしても、自分の意見は変えない。", english: "Even if opposed, I will not change my opinion." },
    { japanese: "今すぐ出発したとしても、間に合わないだろう。", english: "Even if we leave right now, we probably won't make it in time." },
    { japanese: "彼が本当のことを言っているとしても、証拠が必要だ。", english: "Even assuming he is telling the truth, evidence is needed." }
  ],
  "つつ": [
    { japanese: "悪いと思いつつ、つい甘いものを食べてしまう。", english: "Even though I know it's bad, I end up eating sweets." },
    { japanese: "ダイエット中だと分かりつつ、ケーキを食べた。", english: "Despite knowing I was on a diet, I ate cake." },
    { japanese: "音楽を聴きつつ、勉強する。", english: "I study while listening to music." },
    { japanese: "コーヒーを飲みつつ、新聞を読んだ。", english: "I read the newspaper while drinking coffee." }
  ],
  "つつある": [
    { japanese: "この町は急速に発展しつつある。", english: "This town is rapidly developing." },
    { japanese: "環境問題に対する意識が変わりつつある。", english: "Awareness of environmental issues is changing." },
    { japanese: "彼の病気は回復しつつある。", english: "His illness is in the process of recovering." },
    { japanese: "伝統的な文化が失われつつある。", english: "Traditional culture is being lost." }
  ],
  "上は": [
    { japanese: "引き受けた上は、最後まで責任を持つ。", english: "Now that I've taken it on, I will be responsible until the end." },
    { japanese: "約束した上は、必ず守らなければならない。", english: "Now that you've promised, you must keep it." },
    { japanese: "やると決めた上は、全力を尽くす。", english: "Now that I've decided to do it, I will give it my all." },
    { japanese: "入社した上は、会社の規則に従うべきだ。", english: "Now that you've joined the company, you should follow its rules." }
  ],
  "はもとより": [
    { japanese: "この辞書は学生はもとより、社会人にも役立つ。", english: "This dictionary is useful not only for students but also for working adults." },
    { japanese: "国内はもとより、海外でも人気がある歌手だ。", english: "She is a singer popular not only domestically but also overseas." },
    { japanese: "英語はもとより、中国語も話せる。", english: "He can speak not only English but also Chinese." },
    { japanese: "味はもとより、見た目も美しい料理だ。", english: "It is a dish that is beautiful in appearance, let alone in taste." }
  ],
  "はともかく": [
    { japanese: "値段はともかく、品質は最高だ。", english: "Regardless of the price, the quality is the best." },
    { japanese: "見た目はともかく、味はおいしい。", english: "Appearance aside, the taste is delicious." },
    { japanese: "結果はともかく、まずはやってみよう。", english: "Regardless of the result, let's try first." },
    { japanese: "冗談はともかく、本題に入りましょう。", english: "Joking aside, let's get to the main topic." }
  ],
  "わずかに": [
    { japanese: "わずかに残った食料で、数日間を過ごした。", english: "We got by for several days with the little food that remained." },
    { japanese: "気温がわずかに上昇した。", english: "The temperature rose slightly." },
    { japanese: "わずかに二名の応募者しかいなかった。", english: "There were only two applicants." },
    { japanese: "彼の声がわずかに震えていた。", english: "His voice was trembling slightly." }
  ],
  "やがて": [
    { japanese: "雨はやがて止むだろう。", english: "The rain will stop before long." },
    { japanese: "やがて春が来て、桜が咲き始めた。", english: "Eventually spring came, and the cherry blossoms began to bloom." },
    { japanese: "子供たちはやがて大人になる。", english: "Children will eventually become adults." },
    { japanese: "やがて日が暮れ、辺りは暗くなった。", english: "Before long the sun set, and the surroundings became dark." }
  ],
  "やら～やら": [
    { japanese: "引っ越しの準備やら片付けやらで忙しい。", english: "I'm busy with things like moving preparations and cleaning up." },
    { japanese: "嬉しいやら恥ずかしいやらで、顔が赤くなった。", english: "Between being happy and embarrassed, my face turned red." },
    { japanese: "仕事やら家事やらで、自分の時間がない。", english: "Between work and housework, I have no time for myself." },
    { japanese: "泣くやら笑うやらで、感情が忙しかった。", english: "Between crying and laughing, my emotions were all over the place." }
  ],
  "よほど / よっぽど": [
    { japanese: "よほど疲れていたのか、彼は電車の中で寝てしまった。", english: "He must have been very tired, as he fell asleep on the train." },
    { japanese: "よっぽどのことがない限り、予定は変更しない。", english: "Unless something very serious happens, the schedule won't change." },
    { japanese: "あの映画はよほど面白かったらしく、三回も見たそうだ。", english: "That movie must have been really interesting — I heard he watched it three times." },
    { japanese: "よっぽど嬉しかったのか、彼女は涙を流していた。", english: "She must have been extremely happy, as she was in tears." }
  ],
  "より": [
    { japanese: "会議は午前十時より開始いたします。", english: "The meeting will begin from 10 a.m." },
    { japanese: "本日より新しいサービスを開始します。", english: "Starting from today, we will begin a new service." },
    { japanese: "応募は当ウェブサイトよりお願いいたします。", english: "Please apply from our website." },
    { japanese: "心よりお詫び申し上げます。", english: "I sincerely apologize from the bottom of my heart." }
  ],
  "よりほかない": [
    { japanese: "バスがないので、歩いて行くよりほかない。", english: "Since there are no buses, there's no choice but to walk." },
    { japanese: "自分で解決するよりほかない。", english: "There's no choice but to solve it myself." },
    { japanese: "結果を待つよりほかない。", english: "There's nothing to do but wait for the results." },
    { japanese: "ここまで来たら、やるよりほかない。", english: "Having come this far, there's no choice but to do it." }
  ],
  "ようでは": [
    { japanese: "こんな簡単な問題もできないようでは、試験に受からない。", english: "If you can't even solve such a simple problem, you won't pass the exam." },
    { japanese: "毎日遅刻するようでは、信頼を失うだろう。", english: "If you keep being late every day, you will lose people's trust." },
    { japanese: "自分の意見も言えないようでは、社会では通用しない。", english: "If you can't even state your own opinion, you won't get by in society." },
    { japanese: "約束も守れないようでは、友達ができないよ。", english: "If you can't even keep promises, you won't make friends." }
  ],
  "ようではないか": [
    { japanese: "みんなで協力して、この問題を解決しようではないか。", english: "Let's all work together to solve this problem." },
    { japanese: "もっと積極的に意見を出そうではないか。", english: "Why don't we share our opinions more actively?" },
    { japanese: "新しい時代を共に築いていこうではないか。", english: "Let us build a new era together." },
    { japanese: "困っている人を助けようではないか。", english: "Let's help those who are in trouble." }
  ],
  "ようか～まいか": [
    { japanese: "転職しようかするまいか、悩んでいる。", english: "I'm agonizing over whether or not to change jobs." },
    { japanese: "彼に本当のことを話そうか話すまいか迷っている。", english: "I'm unsure whether to tell him the truth or not." },
    { japanese: "留学しようかしまいか、まだ決められない。", english: "I still can't decide whether or not to study abroad." },
    { japanese: "この提案を受け入れようか受け入れまいか、検討中だ。", english: "I'm considering whether or not to accept this proposal." }
  ],
  "要するに": [
    { japanese: "要するに、予算が足りないということですね。", english: "In short, you're saying the budget is insufficient." },
    { japanese: "彼の話は長かったが、要するに反対だということだ。", english: "His talk was long, but in short, he's saying he's against it." },
    { japanese: "要するに、もっと努力が必要だということだ。", english: "To sum up, more effort is needed." },
    { japanese: "要するに、計画を最初からやり直すべきだ。", english: "In a word, we should redo the plan from scratch." }
  ],
  "ざるを得ない": [
    { japanese: "証拠がある以上、認めざるを得ない。", english: "Since there is evidence, I have no choice but to admit it." },
    { japanese: "体調が悪いので、今日は休まざるを得ない。", english: "Since I'm not feeling well, I have no choice but to take the day off." },
    { japanese: "予算の都合で、計画を変更せざるを得ない。", english: "Due to budget constraints, we have no choice but to change the plan." },
    { japanese: "事実を知った以上、行動せざるを得ない。", english: "Now that I know the facts, I have no choice but to act." }
  ],
  "ずに済む": [
    { japanese: "傘を持っていたので、濡れずに済んだ。", english: "Since I had an umbrella, I got by without getting wet." },
    { japanese: "薬を飲んだおかげで、手術せずに済んだ。", english: "Thanks to taking medicine, I got by without surgery." },
    { japanese: "友達が手伝ってくれたので、一人でやらずに済んだ。", english: "Since a friend helped me, I got by without doing it alone." },
    { japanese: "早めに出発したので、遅刻せずに済んだ。", english: "Since I left early, I managed to avoid being late." },
    { japanese: "保険に入っていたので、高額な医療費を払わずに済んだ。", english: "Since I had insurance, I got by without paying expensive medical bills." }
  ]
};

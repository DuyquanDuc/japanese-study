const GRAMMAR_EXAMPLES_N1 = {
  "あっての": [
    { japanese: "お客様あっての商売です。", english: "Business exists only because of customers." },
    { japanese: "健康あっての人生だ。", english: "Life is only meaningful with good health." }
  ],
  "いかんでは": [
    { japanese: "結果いかんでは、計画を変更する。", english: "Depending on the results, we will change the plan." },
    { japanese: "天候いかんでは中止になる。", english: "Depending on the weather, it may be cancelled." }
  ],
  "いかんによらず": [
    { japanese: "理由いかんによらず、遅刻は許されない。", english: "Regardless of the reason, being late is not allowed." },
    { japanese: "結果いかんによらず、努力したことは評価する。", english: "Regardless of the outcome, the effort will be appreciated." }
  ],
  "いかんにかかわらず": [
    { japanese: "成績いかんにかかわらず、全員参加してください。", english: "Regardless of grades, everyone please participate." },
    { japanese: "国籍いかんにかかわらず、平等に扱う。", english: "Regardless of nationality, everyone is treated equally." }
  ],
  "うが〜うが": [
    { japanese: "雨が降ろうが雪が降ろうが、試合は行われる。", english: "Whether it rains or snows, the game will be held." },
    { japanese: "賛成しようが反対しようが、決定は変わらない。", english: "Whether you agree or disagree, the decision won't change." }
  ],
  "うにも〜ない": [
    { japanese: "泣こうにも涙が出ない。", english: "Even though I want to cry, no tears come out." },
    { japanese: "逃げようにも逃げられない。", english: "Even if I wanted to escape, I can't." }
  ],
  "かぎりだ": [
    { japanese: "一人で暮らすのは寂しいかぎりだ。", english: "Living alone is extremely lonely." },
    { japanese: "合格の知らせを聞いて、嬉しいかぎりだ。", english: "Hearing the news of passing, I'm extremely happy." }
  ],
  "かたがた": [
    { japanese: "お礼かたがた、先生のお宅を訪問した。", english: "I visited the teacher's home to express my gratitude." },
    { japanese: "散歩かたがた、買い物に出かけた。", english: "I went out shopping while also taking a walk." }
  ],
  "かたわら": [
    { japanese: "会社で働くかたわら、大学で教えている。", english: "While working at a company, I also teach at a university." },
    { japanese: "子育てのかたわら、小説を書いている。", english: "While raising children, she writes novels." }
  ],
  "がてら": [
    { japanese: "散歩がてら、コンビニに寄った。", english: "While taking a walk, I stopped by the convenience store." },
    { japanese: "買い物がてら、友達の家に立ち寄った。", english: "While out shopping, I dropped by a friend's house." }
  ],
  "が早いか": [
    { japanese: "ベルが鳴るが早いか、生徒たちは教室を飛び出した。", english: "As soon as the bell rang, the students dashed out of the classroom." },
    { japanese: "ドアが開くが早いか、猫が外に飛び出した。", english: "The moment the door opened, the cat jumped outside." }
  ],
  "からある": [
    { japanese: "百キロからある荷物を運んだ。", english: "I carried luggage weighing at least 100 kilograms." },
    { japanese: "三メートルからある大きな木が倒れた。", english: "A tree at least three meters tall fell over." }
  ],
  "きらいがある": [
    { japanese: "彼は物事を単純化するきらいがある。", english: "He has a tendency to oversimplify things." },
    { japanese: "この計画は楽観的に過ぎるきらいがある。", english: "This plan has a tendency to be overly optimistic." }
  ],
  "ことなしに": [
    { japanese: "努力することなしに、成功はない。", english: "There is no success without effort." },
    { japanese: "許可を得ることなしに、入室してはいけない。", english: "You must not enter the room without obtaining permission." }
  ],
  "ごとき": [
    { japanese: "私ごときが意見を言える立場ではない。", english: "Someone like me is not in a position to give opinions." },
    { japanese: "この程度の困難ごとき、乗り越えられる。", english: "A difficulty like this can be overcome." }
  ],
  "ごとく": [
    { japanese: "彼は風のごとく去っていった。", english: "He left like the wind." },
    { japanese: "光陰矢のごとし。", english: "Time flies like an arrow." }
  ],
  "ずくめ": [
    { japanese: "今年はいいことずくめだった。", english: "This year was filled with nothing but good things." },
    { japanese: "黒ずくめの男が立っていた。", english: "A man dressed entirely in black was standing there." }
  ],
  "ずにはおかない": [
    { japanese: "この映画は観客を感動させずにはおかない。", english: "This movie will inevitably move the audience." },
    { japanese: "彼の演説は人々を奮い立たせずにはおかない。", english: "His speech cannot help but inspire people." }
  ],
  "ずにはすまない": [
    { japanese: "約束した以上、行かずにはすまない。", english: "Since I promised, I must go." },
    { japanese: "壊してしまったので、弁償せずにはすまない。", english: "Since I broke it, I have to pay for it." }
  ],
  "そばから": [
    { japanese: "教えたそばから忘れてしまう。", english: "As soon as I teach him, he forgets." },
    { japanese: "片付けるそばから子供が散らかす。", english: "As soon as I tidy up, the kids make a mess again." }
  ],
  "たが最後": [
    { japanese: "彼に秘密を話したが最後、みんなに広まる。", english: "Once you tell him a secret, it will spread to everyone." },
    { japanese: "この沼にはまったが最後、抜け出せない。", english: "Once you get stuck in this swamp, you can't get out." }
  ],
  "たところで": [
    { japanese: "今さら謝ったところで、許してもらえない。", english: "Even if you apologize now, you won't be forgiven." },
    { japanese: "急いだところで、間に合わないだろう。", english: "Even if we hurry, we probably won't make it in time." }
  ],
  "ただ〜のみ": [
    { japanese: "ただ成功を信じるのみだ。", english: "All we can do is believe in success." },
    { japanese: "ただ祈るのみである。", english: "All we can do is pray." }
  ],
  "たりとも": [
    { japanese: "一秒たりとも無駄にしたくない。", english: "I don't want to waste even a single second." },
    { japanese: "一円たりとも貸すつもりはない。", english: "I don't intend to lend even a single yen." }
  ],
  "つ〜つ": [
    { japanese: "彼らは持ちつ持たれつの関係だ。", english: "They have a give-and-take relationship." },
    { japanese: "行きつ戻りつしながら考えた。", english: "I thought about it while going back and forth." }
  ],
  "であれ": [
    { japanese: "たとえ社長であれ、法律は守らなければならない。", english: "Even if you're the president, you must follow the law." },
    { japanese: "何人であれ、ここに入ることは許されない。", english: "No matter who you are, entering here is not permitted." }
  ],
  "てからというもの": [
    { japanese: "日本に来てからというもの、毎日が楽しい。", english: "Ever since I came to Japan, every day has been fun." },
    { japanese: "犬を飼ってからというもの、毎朝早起きしている。", english: "Ever since I got a dog, I've been waking up early every morning." }
  ],
  "てこそ": [
    { japanese: "失敗してこそ、成長できる。", english: "Only by failing can you grow." },
    { japanese: "自分で経験してこそ、わかることがある。", english: "There are things you only understand by experiencing them yourself." }
  ],
  "てすら": [
    { japanese: "専門家でてすら解けない問題だ。", english: "It's a problem that even experts can't solve." },
    { japanese: "名前てすら覚えていない。", english: "I don't even remember the name." }
  ],
  "てはかなわない": [
    { japanese: "毎日残業させられてはかなわない。", english: "I can't stand being made to work overtime every day." },
    { japanese: "こう暑くてはかなわない。", english: "I can't bear it being this hot." }
  ],
  "てもさしつかえない": [
    { japanese: "ここで写真を撮ってもさしつかえない。", english: "It doesn't matter if you take photos here." },
    { japanese: "明日でもさしつかえないですか。", english: "Would tomorrow be alright?" }
  ],
  "ても始まらない": [
    { japanese: "後悔しても始まらない。", english: "There's no point in regretting it." },
    { japanese: "文句を言っても始まらない。", english: "Complaining won't get us anywhere." }
  ],
  "てやまない": [
    { japanese: "皆様のご健康を祈ってやまない。", english: "I sincerely wish for everyone's good health." },
    { japanese: "彼の成功を願ってやまない。", english: "I ceaselessly hope for his success." }
  ],
  "ところを": [
    { japanese: "お忙しいところを申し訳ありません。", english: "I'm sorry to bother you when you're busy." },
    { japanese: "お休みのところをすみません。", english: "I'm sorry to disturb you during your rest." }
  ],
  "としたところで": [
    { japanese: "仮に合格したとしたところで、学費が払えない。", english: "Even if I were to pass, I can't pay the tuition." },
    { japanese: "彼が来たとしたところで、何も変わらない。", english: "Even if he came, nothing would change." }
  ],
  "ともあろう": [
    { japanese: "先生ともあろう人が、そんなことを言うとは。", english: "For someone of a teacher's standing to say such a thing." },
    { japanese: "大人ともあろう者が、子供のようなことをするな。", english: "Someone who's supposed to be an adult shouldn't act like a child." }
  ],
  "ともなく": [
    { japanese: "どこからともなく、いい匂いがしてきた。", english: "A nice smell came from somewhere unknown." },
    { japanese: "見るともなくテレビを見ていた。", english: "I was watching TV without really paying attention." }
  ],
  "ともなると": [
    { japanese: "夏ともなると、海水浴客が増える。", english: "When summer comes, the number of beachgoers increases." },
    { japanese: "部長ともなると、責任が重くなる。", english: "Once you become department head, the responsibilities grow heavier." }
  ],
  "ないではおかない": [
    { japanese: "この話は人を泣かせないではおかない。", english: "This story will inevitably make people cry." },
    { japanese: "その事件は社会に衝撃を与えないではおかない。", english: "That incident will inevitably shock society." }
  ],
  "ないまでも": [
    { japanese: "完璧でないまでも、十分な出来だ。", english: "Even if it's not perfect, it's a sufficient result." },
    { japanese: "毎日でないまでも、週に三回は運動している。", english: "Even if not every day, I exercise three times a week." }
  ],
  "ないものでもない": [
    { japanese: "工夫すれば、できないものでもない。", english: "If you get creative, it's not impossible." },
    { japanese: "条件次第では、考えないものでもない。", english: "Depending on the conditions, it's not impossible to consider." }
  ],
  "ながらに": [
    { japanese: "彼女は涙ながらに事情を説明した。", english: "She explained the situation in tears." },
    { japanese: "生まれながらにして才能がある。", english: "Having talent from birth." }
  ],
  "なくして": [
    { japanese: "努力なくして成功なし。", english: "There is no success without effort." },
    { japanese: "信頼なくして協力は得られない。", english: "Without trust, you cannot gain cooperation." }
  ],
  "なしに": [
    { japanese: "予約なしに来ても対応できません。", english: "We can't accommodate you if you come without a reservation." },
    { japanese: "連絡なしに休むのは困る。", english: "It's a problem if you take a day off without notice." }
  ],
  "なり": [
    { japanese: "家に帰るなり、すぐ寝てしまった。", english: "As soon as I got home, I fell right asleep." },
    { japanese: "電話を切るなり、彼は泣き出した。", english: "The moment he hung up the phone, he started crying." }
  ],
  "なりに": [
    { japanese: "子供は子供なりに考えている。", english: "Children think about things in their own way." },
    { japanese: "私なりに努力してみます。", english: "I'll try my best in my own way." }
  ],
  "にあたらない": [
    { japanese: "驚くにあたらない。", english: "It's not worth being surprised about." },
    { japanese: "そんなことは非難にあたらない。", english: "Such a thing doesn't warrant criticism." }
  ],
  "にあって": [
    { japanese: "困難な状況にあって、彼は冷静だった。", english: "Even in a difficult situation, he remained calm." },
    { japanese: "戦時下にあって、国民は苦しんでいた。", english: "Under wartime conditions, the people were suffering." }
  ],
  "にかたくない": [
    { japanese: "彼女の悲しみは想像にかたくない。", english: "It's not hard to imagine her sadness." },
    { japanese: "被害の大きさは推測にかたくない。", english: "It's easy to estimate the extent of the damage." }
  ],
  "にして": [
    { japanese: "彼にしてこの成績なら、私には無理だ。", english: "If even he gets these grades, it's impossible for me." },
    { japanese: "四十にして惑わず。", english: "At forty, one is free from doubt." }
  ],
  "にたえない": [
    { japanese: "見るにたえない光景だった。", english: "It was a sight too terrible to watch." },
    { japanese: "感謝にたえない。", english: "I cannot express enough gratitude." }
  ],
  "にたえる": [
    { japanese: "鑑賞にたえる作品だ。", english: "It's a work worthy of appreciation." },
    { japanese: "批判にたえる論文を書きたい。", english: "I want to write a paper that can withstand criticism." }
  ],
  "にとどまらず": [
    { japanese: "被害は東京にとどまらず、全国に広がった。", english: "The damage was not limited to Tokyo; it spread nationwide." },
    { japanese: "国内にとどまらず、海外でも活躍している。", english: "Not limited to domestically, she is active internationally too." }
  ],
  "にひきかえ": [
    { japanese: "兄にひきかえ、弟は真面目だ。", english: "In contrast to the older brother, the younger brother is serious." },
    { japanese: "去年にひきかえ、今年は売上が伸びた。", english: "In contrast to last year, sales grew this year." }
  ],
  "にほかならない": [
    { japanese: "成功は努力の結果にほかならない。", english: "Success is nothing other than the result of effort." },
    { japanese: "それは彼の優しさにほかならない。", english: "That is nothing but his kindness." }
  ],
  "にもほどがある": [
    { japanese: "冗談にもほどがある。", english: "There's a limit to joking around." },
    { japanese: "失礼にもほどがある。", english: "There's a limit to how rude you can be." }
  ],
  "にもまして": [
    { japanese: "去年にもまして、今年は忙しい。", english: "This year is even busier than last year." },
    { japanese: "何にもまして健康が大切だ。", english: "Health is more important than anything else." }
  ],
  "のきわみ": [
    { japanese: "贅沢のきわみを尽くした生活だ。", english: "It's a life of the utmost luxury." },
    { japanese: "感激のきわみです。", english: "I'm deeply moved beyond words." }
  ],
  "のもとで": [
    { japanese: "先生のご指導のもとで、研究を進めた。", english: "I advanced my research under the teacher's guidance." },
    { japanese: "法律のもとで、全員が平等である。", english: "Under the law, everyone is equal." }
  ],
  "のをいいことに": [
    { japanese: "先生がいないのをいいことに、生徒たちは騒いだ。", english: "Taking advantage of the teacher's absence, the students made noise." },
    { japanese: "親が優しいのをいいことに、わがままを言う。", english: "Taking advantage of the parents' kindness, the child acts spoiled." }
  ],
  "はおろか": [
    { japanese: "漢字はおろか、ひらがなも読めない。", english: "Let alone kanji, he can't even read hiragana." },
    { japanese: "旅行はおろか、外出もできない。", english: "Let alone traveling, I can't even go outside." }
  ],
  "はさておき": [
    { japanese: "冗談はさておき、本題に入ろう。", english: "Jokes aside, let's get to the main topic." },
    { japanese: "費用はさておき、まず計画を立てよう。", english: "Leaving costs aside, let's make a plan first." }
  ],
  "ばこそ": [
    { japanese: "あなたを思えばこそ、厳しいことを言うのだ。", english: "It's precisely because I care about you that I say harsh things." },
    { japanese: "努力すればこそ、成功できたのだ。", english: "It was precisely because of effort that success was achieved." }
  ],
  "ばそれまでだ": [
    { japanese: "本人がやる気がなければそれまでだ。", english: "If the person has no motivation, then that's the end of it." },
    { japanese: "証拠がなければそれまでだ。", english: "Without evidence, that's all there is to it." }
  ],
  "べからず": [
    { japanese: "ここでタバコを吸うべからず。", english: "Do not smoke here." },
    { japanese: "初心忘るべからず。", english: "One must not forget the beginner's spirit." }
  ],
  "べく": [
    { japanese: "成功すべく、毎日努力している。", english: "In order to succeed, I work hard every day." },
    { japanese: "真実を確かめるべく、現地に向かった。", english: "In order to verify the truth, I headed to the site." }
  ],
  "べくもない": [
    { japanese: "彼の実力には比べるべくもない。", english: "There's no way to compare with his ability." },
    { japanese: "昔の美しさは想像するべくもない。", english: "One cannot possibly imagine its former beauty." }
  ],
  "まじき": [
    { japanese: "教師にあるまじき行為だ。", english: "It's behavior unbecoming of a teacher." },
    { japanese: "許すまじき犯罪だ。", english: "It's an unforgivable crime." }
  ],
  "までだ": [
    { japanese: "バスがなければ歩くまでだ。", english: "If there's no bus, I'll just walk." },
    { japanese: "ダメなら諦めるまでだ。", english: "If it doesn't work, I'll just give up." }
  ],
  "までもない": [
    { japanese: "言うまでもないことだ。", english: "It goes without saying." },
    { japanese: "わざわざ行くまでもない。", english: "There's no need to go out of your way to go." }
  ],
  "もさることながら": [
    { japanese: "味もさることながら、見た目も美しい料理だ。", english: "The taste goes without saying, but the presentation is also beautiful." },
    { japanese: "デザインもさることながら、機能性も優れている。", english: "Not only the design, but the functionality is also excellent." }
  ],
  "ものを": [
    { japanese: "早く言えばいいものを、黙っていた。", english: "He should have said it sooner, but he kept quiet." },
    { japanese: "もう少し待てばよかったものを。", english: "If only I had waited a bit longer." }
  ],
  "ゆえに": [
    { japanese: "若さゆえに、失敗することもある。", english: "Because of youth, one sometimes fails." },
    { japanese: "我思う、ゆえに我あり。", english: "I think, therefore I am." }
  ],
  "をおいて": [
    { japanese: "彼をおいて、このプロジェクトを任せられる人はいない。", english: "Apart from him, there's no one who can be entrusted with this project." },
    { japanese: "今をおいて、チャンスはない。", english: "Other than now, there's no chance." }
  ],
  "をかぎりに": [
    { japanese: "今日をかぎりに、タバコをやめる。", english: "Starting today, I'm quitting smoking." },
    { japanese: "声をかぎりに叫んだ。", english: "I screamed at the top of my lungs." }
  ],
  "をかわきりに": [
    { japanese: "東京をかわきりに、全国ツアーが始まった。", english: "Starting with Tokyo, the national tour began." },
    { japanese: "この店をかわきりに、次々と支店を出した。", english: "Starting with this store, they opened branches one after another." }
  ],
  "をきんじえない": [
    { japanese: "その知らせに驚きをきんじえない。", english: "I cannot help but be surprised at the news." },
    { japanese: "彼の行動に怒りをきんじえない。", english: "I cannot suppress my anger at his behavior." }
  ],
  "をふまえて": [
    { japanese: "過去の失敗をふまえて、計画を立て直した。", english: "Based on past failures, we revised the plan." },
    { japanese: "調査結果をふまえて、方針を決める。", english: "We'll decide the policy based on the survey results." }
  ],
  "をもって": [
    { japanese: "本日をもって、閉店いたします。", english: "As of today, we are closing the store." },
    { japanese: "誠意をもって対応する。", english: "We will respond with sincerity." }
  ],
  "をものともせず": [
    { japanese: "強風をものともせず、登山を続けた。", english: "Undaunted by the strong wind, we continued climbing." },
    { japanese: "批判をものともせず、自分の道を進んだ。", english: "Regardless of criticism, he pursued his own path." }
  ],
  "をよぎなくされる": [
    { japanese: "計画の変更をよぎなくされた。", english: "We were forced to change the plan." },
    { japanese: "退職をよぎなくされた。", english: "I was compelled to resign." }
  ],
  "をよそに": [
    { japanese: "親の心配をよそに、彼は旅に出た。", english: "Ignoring his parents' worries, he set off on a trip." },
    { japanese: "周囲の反対をよそに、結婚を決めた。", english: "Regardless of opposition from those around them, they decided to marry." }
  ],
  "んがため": [
    { japanese: "勝たんがために、必死に練習した。", english: "In order to win, I practiced desperately." },
    { japanese: "生きんがため、懸命に働いた。", english: "In order to survive, I worked hard." }
  ],
  "んばかり": [
    { japanese: "彼は飛び上がらんばかりに喜んだ。", english: "He was so happy he looked like he might jump up." },
    { japanese: "涙がこぼれんばかりの表情だった。", english: "Her expression looked as if tears were about to spill." }
  ],
  "おそれがある": [
    { japanese: "台風が接近するおそれがある。", english: "There is a risk that a typhoon will approach." },
    { japanese: "情報が漏洩するおそれがある。", english: "There is a risk of information leaking." }
  ],
  "くせして": [
    { japanese: "何も知らないくせして、偉そうに言うな。", english: "Don't act all high and mighty when you don't know anything." },
    { japanese: "自分もできないくせして、人に文句を言う。", english: "He criticizes others even though he can't do it himself." }
  ],
  "しまつだ": [
    { japanese: "遅刻した上に、言い訳をするしまつだ。", english: "On top of being late, he ended up making excuses." },
    { japanese: "借金を重ねて、ついには家を売るしまつだ。", english: "He piled up debts and ended up selling his house." }
  ],
  "すら": [
    { japanese: "彼は自分の名前すら書けない。", english: "He can't even write his own name." },
    { japanese: "水すら飲めない状態だった。", english: "The condition was such that I couldn't even drink water." }
  ],
  "だに": [
    { japanese: "想像するだに恐ろしい。", english: "It's terrifying just to imagine." },
    { japanese: "思い出すだに腹が立つ。", english: "Just thinking about it makes me angry." }
  ],
  "てしかるべき": [
    { japanese: "謝罪してしかるべきだ。", english: "An apology is in order." },
    { japanese: "もっと注意してしかるべきだった。", english: "More caution should have been exercised." }
  ],
  "てなくてなんだろう": [
    { japanese: "これが愛でなくてなんだろう。", english: "If this isn't love, then what is it?" },
    { japanese: "これが奇跡でなくてなんだろう。", english: "If this isn't a miracle, then what is?" }
  ],
  "とあって": [
    { japanese: "連休とあって、どこも混んでいる。", english: "Since it's a holiday weekend, everywhere is crowded." },
    { japanese: "有名人が来るとあって、大勢が集まった。", english: "Since a celebrity was coming, a large crowd gathered." }
  ],
  "とあれば": [
    { japanese: "君のためとあれば、何でもする。", english: "If it's for you, I'll do anything." },
    { japanese: "必要とあれば、すぐに駆けつけます。", english: "If it's necessary, I'll rush over immediately." }
  ],
  "といい〜といい": [
    { japanese: "色といいデザインといい、完璧なドレスだ。", english: "Whether the color or the design, it's a perfect dress." },
    { japanese: "味といい見た目といい、最高の料理だ。", english: "Both in taste and appearance, it's the best dish." }
  ],
  "といえども": [
    { japanese: "いかなる理由があるといえども、暴力は許されない。", english: "No matter what reason there may be, violence is not permitted." },
    { japanese: "専門家といえども、間違えることはある。", english: "Even experts can make mistakes." }
  ],
  "ときたら": [
    { japanese: "うちの息子ときたら、全然勉強しない。", english: "When it comes to my son, he doesn't study at all." },
    { japanese: "最近の天気ときたら、まったく予測できない。", english: "Speaking of the recent weather, it's completely unpredictable." }
  ],
  "ともすれば": [
    { japanese: "ともすれば忘れがちな基本を確認しよう。", english: "Let's review the basics that we tend to forget." },
    { japanese: "ともすれば批判されることもある。", english: "It's liable to be criticized sometimes." }
  ],
  "とは": [
    { japanese: "まさか彼が裏切るとは思わなかった。", english: "I never thought he would betray us." },
    { japanese: "こんな所で会うとは驚いた。", english: "I was surprised to meet you in a place like this." }
  ],
  "とはいえ": [
    { japanese: "春とはいえ、まだ寒い日が続く。", english: "Although it's spring, cold days continue." },
    { japanese: "約束したとはいえ、無理なものは無理だ。", english: "Even though I promised, what's impossible is impossible." }
  ],
  "とばかりに": [
    { japanese: "待ってましたとばかりに、彼は話し始めた。", english: "As if he had been waiting, he started talking." },
    { japanese: "今だとばかりに、走り出した。", english: "As if saying 'now's the time,' he started running." }
  ],
  "ともすると": [
    { japanese: "ともすると楽な方に流されやすい。", english: "One tends to take the easy way out." },
    { japanese: "ともすると見落としがちなポイントだ。", english: "It's a point that one is apt to overlook." }
  ],
  "ないとも限らない": [
    { japanese: "地震が起きないとも限らない。", english: "It's possible that an earthquake might occur." },
    { japanese: "彼が嘘をついていないとも限らない。", english: "It's possible that he's lying." }
  ],
  "なくもない": [
    { japanese: "行きたくなくもないが、時間がない。", english: "It's not that I don't want to go, but I don't have time." },
    { japanese: "彼の言うこともわからなくもない。", english: "I can somewhat understand what he's saying." }
  ],
  "ならでは": [
    { japanese: "京都ならではの風景だ。", english: "It's a scene unique to Kyoto." },
    { japanese: "母ならではの味だ。", english: "It's a taste only my mother can create." }
  ],
  "なるべくして": [
    { japanese: "彼の成功はなるべくしてなったものだ。", english: "His success was meant to be." },
    { japanese: "この結果はなるべくしてなった。", english: "This outcome was inevitable." }
  ],
  "にかかわる": [
    { japanese: "命にかかわる問題だ。", english: "It's a matter of life and death." },
    { japanese: "会社の信用にかかわることだ。", english: "It's something that concerns the company's reputation." }
  ],
  "にかこつけて": [
    { japanese: "出張にかこつけて、観光を楽しんだ。", english: "Using the business trip as a pretext, I enjoyed sightseeing." },
    { japanese: "病気にかこつけて、仕事を休んだ。", english: "Using illness as an excuse, he took time off work." }
  ],
  "にして初めて": [
    { japanese: "親になってにして初めて、親の気持ちがわかった。", english: "Only after becoming a parent did I understand a parent's feelings." },
    { japanese: "失ってにして初めて、大切さに気づく。", english: "You only realize the importance of something after losing it." }
  ],
  "にそくして": [
    { japanese: "現実にそくして判断する。", english: "I'll make a judgment in line with reality." },
    { japanese: "法律にそくして処理する。", english: "We'll handle it in accordance with the law." }
  ],
  "に足る": [
    { japanese: "信頼に足る人物だ。", english: "He is a person worthy of trust." },
    { japanese: "注目に足る研究成果だ。", english: "It's a research result worthy of attention." }
  ],
  "のいたり": [
    { japanese: "光栄のいたりです。", english: "It is the greatest honor." },
    { japanese: "赤面のいたりだ。", english: "It's the height of embarrassment." }
  ],
  "のなんのって": [
    { japanese: "暑いのなんのって、外に出られない。", english: "It's so incredibly hot that I can't go outside." },
    { japanese: "痛いのなんのって、涙が出た。", english: "It was so incredibly painful that tears came out." }
  ],
  "はいざしらず": [
    { japanese: "子供はいざしらず、大人がそんなことをするとは。", english: "I don't know about kids, but for an adult to do such a thing." },
    { japanese: "昔はいざしらず、今はそんなことはない。", english: "I don't know about the past, but that's not the case now." }
  ],
  "ひとり〜だけでなく": [
    { japanese: "ひとり日本だけでなく、世界中で人気がある。", english: "It's popular not only in Japan but around the world." },
    { japanese: "ひとり学生だけでなく、社会人にも役立つ。", english: "It's useful not just for students, but for working adults too." }
  ],
  "ぶる": [
    { japanese: "彼はいつも偉ぶっている。", english: "He always acts important." },
    { japanese: "知ったかぶりはやめなさい。", english: "Stop pretending to know everything." }
  ],
  "まみれ": [
    { japanese: "泥まみれになって遊んだ。", english: "I played until I was covered in mud." },
    { japanese: "汗まみれで帰ってきた。", english: "I came back drenched in sweat." }
  ],
  "めく": [
    { japanese: "春めいてきた。", english: "It's starting to feel like spring." },
    { japanese: "彼の言葉は皮肉めいていた。", english: "His words had a hint of sarcasm." }
  ],
  "もかまわず": [
    { japanese: "人目もかまわず泣いた。", english: "I cried without caring about people watching." },
    { japanese: "雨もかまわず出かけた。", english: "I went out regardless of the rain." }
  ],
  "ものとして": [
    { japanese: "全員参加するものとして準備を進める。", english: "We'll proceed with preparations assuming everyone will participate." },
    { japanese: "予算が通ったものとして計画する。", english: "We'll plan on the assumption that the budget is approved." }
  ],
  "やいなや": [
    { japanese: "目が覚めるやいなや、飛び起きた。", english: "The moment I woke up, I jumped out of bed." },
    { japanese: "合図があるやいなや、走り出した。", english: "As soon as the signal was given, they started running." }
  ],
  "や否や": [
    { japanese: "チャイムが鳴るや否や、生徒たちは立ち上がった。", english: "The instant the bell rang, the students stood up." },
    { japanese: "扉が開くや否や、人々が押し寄せた。", english: "The moment the doors opened, people rushed in." }
  ],
  "よくも": [
    { japanese: "よくもそんなひどいことが言えるな。", english: "How dare you say such a terrible thing." },
    { japanese: "よくも私を裏切ったな。", english: "How dare you betray me." }
  ],
  "とて": [
    { japanese: "大人とて、間違えることはある。", english: "Even adults make mistakes sometimes." },
    { japanese: "いかなる理由とて、許されない。", english: "No matter what the reason, it cannot be forgiven." }
  ],
  "極まる": [
    { japanese: "危険極まる行為だ。", english: "It's an extremely dangerous act." },
    { japanese: "失礼極まる態度だ。", english: "It's an extremely rude attitude." }
  ],
  "極まりない": [
    { japanese: "不愉快極まりない。", english: "It's extremely unpleasant." },
    { japanese: "退屈極まりない授業だ。", english: "It's an endlessly boring class." }
  ],
  "たら最後": [
    { japanese: "この本を読み始めたら最後、止められない。", english: "Once you start reading this book, you can't stop." },
    { japanese: "彼に話したら最後、秘密は守られない。", english: "Once you tell him, the secret won't be kept." }
  ],
  "こととて": [
    { japanese: "知らぬこととて、失礼いたしました。", english: "Not knowing, I was rude. Please forgive me." },
    { japanese: "急なこととて、準備が間に合わなかった。", english: "Because it was sudden, the preparations weren't ready in time." }
  ],
  "かれ〜かれ": [
    { japanese: "遅かれ早かれ、真実は明らかになる。", english: "Sooner or later, the truth will come out." },
    { japanese: "多かれ少なかれ、誰でも悩みはある。", english: "To some degree or another, everyone has worries." }
  ],
  "がゆえに": [
    { japanese: "真面目がゆえに、苦しむこともある。", english: "Because of being too serious, one sometimes suffers." },
    { japanese: "愛するがゆえに、厳しくする。", english: "I'm strict precisely because I love you." }
  ],
  "ようが〜まいが": [
    { japanese: "雨が降ろうが降るまいが、出かける。", english: "Whether it rains or not, I'm going out." },
    { japanese: "信じようが信じまいが、事実だ。", english: "Whether you believe it or not, it's a fact." }
  ],
  "ようと〜まいと": [
    { japanese: "君が来ようと来まいと、パーティーは開く。", english: "Whether you come or not, the party will be held." },
    { japanese: "反対しようとしまいと、計画は進む。", english: "Whether they oppose it or not, the plan moves forward." }
  ],
  "をもってすれば": [
    { japanese: "彼の実力をもってすれば、合格は間違いない。", english: "With his ability, passing is certain." },
    { japanese: "最新技術をもってすれば、解決できる。", english: "With the latest technology, it can be solved." }
  ],
  "をもとに": [
    { japanese: "実話をもとに、映画が作られた。", english: "The movie was made based on a true story." },
    { japanese: "アンケートをもとに、改善策を考える。", english: "We'll think of improvements based on the survey." }
  ],
  "をかねて": [
    { japanese: "運動をかねて、自転車で通勤している。", english: "I commute by bicycle, also for the purpose of exercise." },
    { japanese: "挨拶をかねて、お土産を持って行った。", english: "I brought a souvenir, also serving as a greeting." }
  ],
  "にあるまじき": [
    { japanese: "医者にあるまじき発言だ。", english: "It's a remark unbecoming of a doctor." },
    { japanese: "政治家にあるまじき行動だ。", english: "It's behavior unbecoming of a politician." }
  ],
  "にかけては": [
    { japanese: "料理にかけては、彼女の右に出る者はいない。", english: "When it comes to cooking, no one can surpass her." },
    { japanese: "記憶力にかけては、彼は天才だ。", english: "When it comes to memory, he's a genius." }
  ],
  "にたる": [
    { japanese: "尊敬にたる人物だ。", english: "A person worthy of respect." },
    { japanese: "賞賛にたる業績だ。", english: "An achievement worthy of praise." }
  ],
  "にひとしい": [
    { japanese: "彼の行動は犯罪にひとしい。", english: "His behavior is tantamount to a crime." },
    { japanese: "黙認は賛成にひとしい。", english: "Tacit approval is practically the same as agreement." }
  ],
  "にもかかわらず": [
    { japanese: "努力したにもかかわらず、失敗した。", english: "Despite making an effort, I failed." },
    { japanese: "反対にもかかわらず、計画は実行された。", english: "Despite opposition, the plan was carried out." }
  ],
  "をはじめ": [
    { japanese: "社長をはじめ、全社員が参加した。", english: "Starting with the president, all employees participated." },
    { japanese: "東京をはじめ、大都市は人口が多い。", english: "Led by Tokyo, large cities have large populations." }
  ],
  "を経て": [
    { japanese: "長い議論を経て、結論に達した。", english: "After going through long discussions, we reached a conclusion." },
    { japanese: "多くの困難を経て、夢を実現した。", english: "After going through many difficulties, I realized my dream." }
  ],
  "を余儀なくさせる": [
    { japanese: "台風が住民に避難を余儀なくさせた。", english: "The typhoon forced residents to evacuate." },
    { japanese: "不況が企業にリストラを余儀なくさせた。", english: "The recession forced companies to restructure." }
  ],
  "を皮切りに": [
    { japanese: "大阪を皮切りに、全国公演が始まった。", english: "Starting with Osaka, the national tour began." },
    { japanese: "この製品を皮切りに、シリーズ化された。", english: "Starting with this product, it became a series." }
  ],
  "てまで": [
    { japanese: "嘘をついてまで、彼を守る必要はない。", english: "There's no need to go so far as to lie to protect him." },
    { japanese: "借金してまで買いたくない。", english: "I don't want to go so far as to borrow money to buy it." }
  ],
  "たる": [
    { japanese: "紳士たる者、礼儀を忘れてはならない。", english: "One who is a gentleman must not forget manners." },
    { japanese: "リーダーたる者、責任を持つべきだ。", english: "One who is a leader should take responsibility." }
  ],
  "ずじまい": [
    { japanese: "結局、彼に会えずじまいだった。", english: "In the end, I never got to see him." },
    { japanese: "買おうと思っていたが、買えずじまいだった。", english: "I intended to buy it, but I never got to." }
  ],
  "すべく": [
    { japanese: "問題を解決すべく、会議が開かれた。", english: "A meeting was held in order to solve the problem." },
    { japanese: "夢を叶えるすべく、上京した。", english: "In order to fulfill my dream, I moved to Tokyo." }
  ],
  "しめる": [
    { japanese: "その事件は人々を恐怖せしめた。", english: "That incident caused people to feel terror." },
    { japanese: "彼の発言は聴衆を感動せしめた。", english: "His speech made the audience deeply moved." }
  ],
  "かと思いきや": [
    { japanese: "晴れるかと思いきや、急に雨が降り出した。", english: "Just when I thought it would clear up, it suddenly started raining." },
    { japanese: "怒るかと思いきや、笑い出した。", english: "I thought he'd be angry, but instead he started laughing." }
  ],
  "いわんや": [
    { japanese: "大人でも難しい。いわんや子供には無理だ。", english: "It's difficult even for adults. Needless to say, it's impossible for children." },
    { japanese: "専門家でも手こずる。いわんや素人にはなおさらだ。", english: "Even experts struggle. Let alone amateurs, it's even more so." }
  ],
  "いざとなると": [
    { japanese: "いざとなると、なかなか言えない。", english: "When it comes down to it, I can't quite say it." },
    { japanese: "いざとなると、緊張してしまう。", english: "When push comes to shove, I get nervous." }
  ],
  "あいまって": [
    { japanese: "天気の良さと景色の美しさがあいまって、最高の旅行だった。", english: "The good weather combined with the beautiful scenery made it the best trip." },
    { japanese: "努力と才能があいまって、成功した。", english: "Effort combined with talent led to success." }
  ],
  "あまりの〜に": [
    { japanese: "あまりの寒さに、外に出られなかった。", english: "It was so cold that I couldn't go outside." },
    { japanese: "あまりの嬉しさに、涙が出た。", english: "I was so happy that tears came out." }
  ],
  "いずれにしても": [
    { japanese: "いずれにしても、明日までに返事をください。", english: "In any case, please reply by tomorrow." },
    { japanese: "いずれにしても、準備は必要だ。", english: "Either way, preparation is necessary." }
  ],
  "う（よう）ものなら": [
    { japanese: "遅刻しようものなら、クビになる。", english: "If you dare be late, you'll be fired." },
    { japanese: "彼に反論しようものなら、大変なことになる。", english: "If you were to argue with him, it would be terrible." }
  ],
  "かけだ": [
    { japanese: "読みかけの本がたくさんある。", english: "I have many half-read books." },
    { japanese: "食べかけのケーキを冷蔵庫に入れた。", english: "I put the half-eaten cake in the refrigerator." }
  ],
  "が故に": [
    { japanese: "優しさが故に、損をすることもある。", english: "Because of kindness, one sometimes loses out." },
    { japanese: "正直が故に、誤解されることがある。", english: "Because of honesty, one is sometimes misunderstood." }
  ],
  "こそあれ": [
    { japanese: "感謝こそあれ、恨みはない。", english: "There may be gratitude, but there is no resentment." },
    { japanese: "増えることこそあれ、減ることはない。", english: "It may increase, but it won't decrease." }
  ],
  "こそすれ": [
    { japanese: "応援こそすれ、批判するつもりはない。", english: "If anything, I'll support them; I have no intention of criticizing." },
    { japanese: "感謝こそすれ、文句を言う筋合いはない。", english: "If anything, I should be grateful; I have no grounds for complaint." }
  ],
  "ことだし": [
    { japanese: "天気もいいことだし、出かけよう。", english: "Since the weather is nice, let's go out." },
    { japanese: "せっかく来たことだし、楽しもう。", english: "Since we came all this way, let's enjoy ourselves." }
  ],
  "さもないと": [
    { japanese: "急ぎなさい。さもないと遅刻するよ。", english: "Hurry up. Otherwise you'll be late." },
    { japanese: "薬を飲みなさい。さもないと悪化するよ。", english: "Take the medicine. Otherwise it'll get worse." }
  ],
  "しかるに": [
    { japanese: "努力を続けた。しかるに、結果は出なかった。", english: "I continued to make efforts. However, results did not come." },
    { japanese: "約束した。しかるに、彼は来なかった。", english: "He promised. And yet, he didn't come." }
  ],
  "じみた": [
    { japanese: "年寄りじみたことを言うな。", english: "Don't say things that make you sound old." },
    { japanese: "子供じみた行動はやめなさい。", english: "Stop behaving in a childish manner." }
  ],
  "それなりに": [
    { japanese: "安い店だが、それなりにおいしい。", english: "It's a cheap restaurant, but it's reasonably tasty." },
    { japanese: "彼はそれなりに努力している。", english: "He's putting in effort in his own way." }
  ],
  "たいものだ": [
    { japanese: "一度はヨーロッパに行ってみたいものだ。", english: "I'd really like to visit Europe once." },
    { japanese: "平和な世界を見たいものだ。", english: "I truly wish to see a peaceful world." }
  ],
  "ただでさえ": [
    { japanese: "ただでさえ忙しいのに、仕事が増えた。", english: "I'm already busy as it is, and now I have more work." },
    { japanese: "ただでさえ狭い部屋なのに、荷物が多い。", english: "The room is already small as it is, and there's so much luggage." }
  ],
  "だの〜だの": [
    { japanese: "暑いだの寒いだの、文句ばかり言う。", english: "He just complains about it being too hot or too cold." },
    { japanese: "テレビだのゲームだの、遊んでばかりいる。", english: "He does nothing but play, watching TV or playing games." }
  ],
  "たものだ": [
    { japanese: "子供の頃、よく川で遊んだものだ。", english: "When I was a child, I used to play in the river." },
    { japanese: "学生時代は夜遅くまで勉強したものだ。", english: "During my student days, I used to study until late at night." }
  ],
  "つつある": [
    { japanese: "経済は回復しつつある。", english: "The economy is gradually recovering." },
    { japanese: "環境問題への意識が高まりつつある。", english: "Awareness of environmental issues is increasing." }
  ],
  "ていられない": [
    { japanese: "のんびりしていられない。", english: "I can't afford to take it easy." },
    { japanese: "泣いていられない。前に進まなければ。", english: "I can't keep crying. I have to move forward." }
  ],
  "てたまらない": [
    { japanese: "嬉しくてたまらない。", english: "I'm unbearably happy." },
    { japanese: "会いたくてたまらない。", english: "I miss you so much I can't stand it." }
  ],
  "てはいられない": [
    { japanese: "ぼんやりしてはいられない。", english: "I can't just sit around doing nothing." },
    { japanese: "いつまでも悲しんではいられない。", english: "I can't stay sad forever." }
  ],
  "てばかりはいられない": [
    { japanese: "嘆いてばかりはいられない。", english: "I can't just keep lamenting." },
    { japanese: "待ってばかりはいられない。", english: "I can't just keep waiting." }
  ],
  "ではあるまいし": [
    { japanese: "子供ではあるまいし、泣くのはやめなさい。", english: "You're not a child, so stop crying." },
    { japanese: "ロボットではあるまいし、休みなく働けるわけがない。", english: "It's not like I'm a robot; I can't work without rest." }
  ],
  "でなくてなんだろう": [
    { japanese: "これが運命でなくてなんだろう。", english: "If this isn't fate, then what is?" },
    { japanese: "彼の行為が勇気でなくてなんだろう。", english: "If his actions aren't courage, then what are they?" }
  ],
  "とあっては": [
    { japanese: "子供の頼みとあっては、断れない。", english: "Given that it's a child's request, I can't refuse." },
    { japanese: "社長の命令とあっては、従うしかない。", english: "Given that it's the president's order, I have no choice but to obey." }
  ],
  "というところだ": [
    { japanese: "準備は八割というところだ。", english: "Preparations are roughly eighty percent done." },
    { japanese: "参加者はせいぜい五十人というところだ。", english: "The number of participants is about fifty at most." }
  ],
  "ところから": [
    { japanese: "形が似ているところから、その名前がついた。", english: "It got its name from the fact that the shape is similar." },
    { japanese: "彼が最後に出たところから、彼が疑われた。", english: "From the fact that he was the last to leave, he was suspected." }
  ],
  "とみるや": [
    { japanese: "チャンスとみるや、すぐに行動した。", english: "Upon seeing the opportunity, he immediately took action." },
    { japanese: "危険とみるや、素早く逃げた。", english: "As soon as he noticed the danger, he quickly fled." }
  ],
  "ないものか": [
    { japanese: "もっと簡単な方法はないものか。", english: "Isn't there an easier method?" },
    { japanese: "何とかならないものか。", english: "Can't something be done about it?" }
  ],
  "にかぎったことではない": [
    { japanese: "この問題は日本にかぎったことではない。", english: "This problem is not limited to Japan." },
    { japanese: "若者にかぎったことではなく、高齢者にも多い。", english: "It's not limited to young people; it's common among the elderly too." }
  ],
  "にこしたことはない": [
    { japanese: "準備は早いにこしたことはない。", english: "There's nothing better than preparing early." },
    { japanese: "健康にこしたことはない。", english: "Nothing is better than good health." }
  ],
  "にしたって": [
    { japanese: "冗談にしたって、限度がある。", english: "Even for a joke, there's a limit." },
    { japanese: "忙しいにしたって、返事ぐらいはできるだろう。", english: "Even if you're busy, you can at least reply." }
  ],
  "のみか": [
    { japanese: "成績が上がったのみか、性格も明るくなった。", english: "Not only did grades improve, but the personality brightened too." },
    { japanese: "日本語のみか、中国語もできる。", english: "Not only Japanese, but she can also speak Chinese." }
  ],
  "のみならず": [
    { japanese: "国内のみならず、海外でも有名だ。", english: "Famous not only domestically but also abroad." },
    { japanese: "学業のみならず、スポーツにも秀でている。", english: "Excelling not only in academics but also in sports." }
  ],
  "はもとより": [
    { japanese: "英語はもとより、フランス語も話せる。", english: "Not only English, but she can also speak French." },
    { japanese: "本人はもとより、家族も喜んでいる。", english: "Not only the person themselves, but the family is also happy." }
  ],
  "ものなら": [
    { japanese: "できるものなら、やってみろ。", english: "If you can do it, go ahead and try." },
    { japanese: "戻れるものなら、学生時代に戻りたい。", english: "If I could go back, I'd want to return to my student days." }
  ],
  "わりに": [
    { japanese: "この店は値段のわりに、おいしい。", english: "For the price, this restaurant is quite good." },
    { japanese: "勉強したわりに、成績が上がらない。", english: "Despite studying, my grades haven't improved." }
  ]
};

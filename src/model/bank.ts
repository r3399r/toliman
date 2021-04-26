export type Question = {
  id: string;
  chapter: string[];
  question: string;
  answer: string;
  hasImage: boolean;
};

export const chapterList: string[] = [
  '數與式',
  '指數對數',
  '多項式函數',
  '直線與圓',
  '三角比',
  '數列級數',
  '數據分析',
  '排列組合與機率',
  '三角函數A',
  '三角函數B',
  '指數與對數函數',
  '平面向量',
  '空間概念',
  '空間向量',
  '空間中的平面與直線',
  '條件機率',
  '矩陣A',
  '矩陣B',
];

export const bank: Question[] = [
  {
    id: '178f776e6fd',
    chapter: ['排列組合與機率'],
    question:
      '學生 $$7$$ 人(甲、乙、丙、丁、戊、己、庚)參加接力賽跑，請回答下列問題各有多少種次序。\n(1)任意排棒有幾種？\n(2)甲、乙、丙必須是相鄰的三棒有幾種？\n(3)甲、乙、丙三人的棒次互不相連有幾種？',
    answer: '(1) $$5040$$ (2) $$720$$ (3) $$1440$$',
    hasImage: false,
  },
  {
    id: '178f777ce0b',
    chapter: ['排列組合與機率'],
    question:
      '一列火車有七節車廂，車廂號碼 $$1$$、$$2$$、$$3$$、$$4$$、$$5$$、$$6$$、$$7$$，今有兩對夫婦同時搭上火車。此四人剛好選坐兩節不同車廂而且是一對夫婦在一節車廂，另外一對夫婦選坐另一節車廂，則共有幾種選法？',
    answer: '$$42$$',
    hasImage: false,
  },
  {
    id: '178f7791d87',
    chapter: ['排列組合與機率'],
    question:
      '以 $$1$$、$$2$$、$$4$$、$$6$$、$$9$$ 等五個數不可重複排成一個五位數，將這些五位數由小排到大(如 $$12469$$、$$12496$$、...)後，則第 $$50$$ 個數為？',
    answer: '$$41296$$',
    hasImage: false,
  },
  {
    id: '178f779646a',
    chapter: ['排列組合與機率'],
    question:
      '用 $$0$$、$$0$$、$$1$$、$$1$$、$$1$$、$$2$$ 共 $$6$$ 個數字作成六位數，則共有幾種不同的數字？',
    answer: '$$40$$',
    hasImage: false,
  },
  {
    id: '178f779de67',
    chapter: ['排列組合與機率'],
    question: '某中學晚會共分成 $$7$$ 段，其中魔術、歌唱須在熱舞表演的前面，則共有幾種排法？',
    answer: '$$1680$$',
    hasImage: false,
  },
  {
    id: '178f77a38e2',
    chapter: ['排列組合與機率'],
    question: '將 $$abscissa$$ 八個字排成一列，任意排，則排法有多少種？',
    answer: '$$3360$$',
    hasImage: false,
  },
  {
    id: '178f77a66b0',
    chapter: ['排列組合與機率'],
    question: '由一樓上二樓的樓梯共有 $$8$$ 階，某人以每步踏一階或二階上樓，共有幾種走法？',
    answer: '$$34$$',
    hasImage: false,
  },
  {
    id: '178f77a9938',
    chapter: ['排列組合與機率'],
    question:
      '從 $$1$$、$$2$$、$$3$$、$$4$$、$$5$$、$$6$$ 這 $$6$$ 個數字中，任意挑選 $$3$$ 個相異的數字排成三位數，若將所有排成的三位數由小到大依序排列，則 $$345$$ 為第幾個三位數？',
    answer: '$$51$$',
    hasImage: false,
  },
  {
    id: '178f77ac93d',
    chapter: ['排列組合與機率'],
    question:
      '某班想從 $$7$$ 名學生中選派 $$4$$ 人分別參加演講、郎讀、作文、字音字形比賽，其中小宇不參加演講比賽，阿光不參加朗讀比賽，則有幾種選派方式？',
    answer: '$$620$$',
    hasImage: false,
  },
  {
    id: '178f77b0f54',
    chapter: ['排列組合與機率'],
    question:
      '甲、乙、丙、丁、戊、己六人排成一列，其中甲與乙為相鄰而且丙與乙分開，則可能的情形有幾種？',
    answer: '$$192$$',
    hasImage: false,
  },
  {
    id: '178f77b3896',
    chapter: ['排列組合與機率'],
    question:
      '由甲地至乙地是棋盤式的街道，某人以走捷徑的方式由甲地至乙地，求必須經過 $$P$$ 點或 $$Q$$ 點的方法有多少種？',
    answer: '$$154$$',
    hasImage: true,
  },
  {
    id: '178f77b6e66',
    chapter: ['排列組合與機率'],
    question:
      '將 $$1$$、$$2$$、$$3$$、$$4$$、$$5$$、$$6$$ 六個數字全取排成六位數，下列敘述何者正確？\n(A)六位數共有 $$720$$ 個\n(B)偶數有 $$360$$ 個\n(C) $$3$$ 的倍數有 $$240$$ 個\n(D) $$4$$ 的倍數有 $$192$$ 個\n(E) $$5$$ 的倍數有 $$120$$ 個',
    answer: '(A)(B)(D)(E)',
    hasImage: false,
  },
  {
    id: '178f9e3fc7b',
    chapter: ['排列組合與機率'],
    question:
      '將 $$5$$ 張不同面額的禮券分給甲、乙、丙三人，禮券必須全部分完，則甲恰得一張的方法有幾種？',
    answer: '$$80$$',
    hasImage: false,
  },
  {
    id: '178f9e85218',
    chapter: ['排列組合與機率'],
    question:
      '將 $$5$$ 本不同的書，分給甲、乙、丙三人，就以下情形的分法，選出正確的選項？\n(A)任意分為 $$125$$ 種\n(B)甲至少一本為 $$211$$ 種\n(C)乙恰得一本為 $$80$$ 種\n(D)三人均至少一本為 $$149$$ 種\n(E)恰有一人沒拿到書為 $$96$$ 種',
    answer: '(B)(C)',
    hasImage: false,
  },
  {
    id: '178fa340b81',
    chapter: ['排列組合與機率'],
    question:
      '有 $$t$$、$$e$$、$$e$$、$$e$$、$$e$$、$$n$$、$$n$$、$$s$$、$$s$$ 這 $$9$$ 張字母卡，欲從這 $$9$$ 張字母卡中任取 $$4$$ 張字母卡出來排列，則其排法有幾種？',
    answer: '$$163$$',
    hasImage: false,
  },
  {
    id: '178fa3eee69',
    chapter: ['排列組合與機率'],
    question:
      '某地區的車牌號碼共六碼，其中前兩碼為 $$O$$ 以外的英文大寫字母，後四碼為 $$0$$ 到 $$9$$ 的阿拉伯數字，但規定不能連續出現三個 $$4$$。例如：$$AA1234$$、$$AB4434$$ 為可出現的車牌號碼；而 $$AO1234$$，$$AB3444$$ 為不可出現的車牌號碼。則所有第一碼為 $$E$$ 且最後一碼為 $$4$$ 的車牌號碼個數為何？',
    answer: '$$24750$$',
    hasImage: false,
  },
  {
    id: '178fa4ccd10',
    chapter: ['排列組合與機率'],
    question:
      '六人搭三輛不同的計程車，每輛至少坐一名乘客，最多載四名乘客，超過四人即違規，求六人搭乘且不違規的搭乘情況下，有幾種搭乘方法？',
    answer: '$$540$$',
    hasImage: false,
  },
  {
    id: '178fa58b177',
    chapter: ['排列組合與機率'],
    question:
      '設有渡輪 $$3$$ 艘(分別標號為 $$A$$、$$B$$、$$C$$)，每艘船最多可載 $$5$$人，今有 $$7$$ 人過渡，但甲需乘 $$A$$ 船，且乙不乘 $$B$$ 船，有幾種安全過渡的方法？',
    answer: '$$473$$',
    hasImage: false,
  },
  {
    id: '178fa706cd1',
    chapter: ['排列組合與機率'],
    question:
      '甲、乙、丙、丁、戊、己、庚共 $$7$$ 人，從中選出 $$4$$ 人，則甲、乙不能同時入選的方法有幾種？',
    answer: '$$25$$',
    hasImage: false,
  },
  {
    id: '178fa7b2ef0',
    chapter: ['排列組合與機率'],
    question:
      '摩斯密碼是由「‧」與「—」兩種符號所排成一列的字串。若有一個摩斯密碼字串是由 $$3$$ 個「‧」符號及 $$8$$ 個「—」符號所組成，且 $$3$$ 個「‧」符號不相鄰，則可產生幾種不同的摩斯密碼字串？',
    answer: '$$84$$',
    hasImage: false,
  },
  {
    id: '178fa7e4b84',
    chapter: ['排列組合與機率'],
    question:
      '由甲、乙、丙、丁...等 $$10$$ 人中選出 $$4$$ 人，組成一代表團，則至少含甲、乙、丙、丁其中 $$1$$ 人的選法有幾種?',
    answer: '$$195$$',
    hasImage: false,
  },
  {
    id: '178fa9cba82',
    chapter: ['排列組合與機率'],
    question: '已知右圖為 $$16$$ 個矩形組成的大矩形，則圖中不包含 $$P$$ 點的矩形有幾個？',
    answer: '$$64$$',
    hasImage: true,
  },
  {
    id: '178fabee5c1',
    chapter: ['排列組合與機率'],
    question:
      '圖書館買進 $$6$$ 本不同的童書，請選出下列正確的選項：\n(A)平分成三堆，有 $$C^6_2\\cdot C^4_2\\cdot C^2_2$$ 種分法\n(B)平分給三人，每人兩本，有 $$C^6_2\\cdot C^4_2\\cdot C^2_2$$ 種分法\n(C)分給三人，一人四本，另兩人一人一本，有 $$C^6_4\\cdot C^2_1\\cdot C^1_1$$ 種分法\n(D)分給三人，有一人一本，有一人兩本，另一人三本，有 $$C^6_3\\cdot C^3_2\\cdot C^1_1\\cdot 3!$$ 種分法\n(E)分給三人每人至少一本，有 $$C^6_3\\cdot3!\\times 3^3$$ 種分法',
    answer: '(B)(D)',
    hasImage: false,
  },
  {
    id: '178fac14a06',
    chapter: ['排列組合與機率'],
    question:
      '舉辦班際籃球賽，某班選出甲、乙、丙...等 $$15$$ 個最強的同學上場比賽，若每隊需要 $$5$$ 個人且甲、乙、丙三人不同隊，則有幾種組隊方式？',
    answer: '$$34650$$',
    hasImage: false,
  },
  {
    id: '178fac261fc',
    chapter: ['排列組合與機率'],
    question: '$$\\left(2x^2-3y\\right)^5$$ 展開式中 $$x^4y^3$$ 項的係數為？',
    answer: '$$-1080$$',
    hasImage: false,
  },
  {
    id: '178fac331f4',
    chapter: ['排列組合與機率'],
    question: '$$\\left(3x^2+\\frac{1}{x}\\right)^6$$ 展開式中，常數項為？',
    answer: '$$135$$',
    hasImage: false,
  },
  {
    id: '178fac4d07c',
    chapter: ['排列組合與機率'],
    question:
      '計算各式的值：\n(1) $$C^3_3+C^4_3+C^5_3+C^6_3+\\dots+C^{10}_3=$$？\n(2) $$C^9_1+C^9_2+C^9_3+C^9_4+\\dots+C^9_8=$$？',
    answer: '(1) $$330$$ (2) $$510$$',
    hasImage: false,
  },
  {
    id: '178fac883bd',
    chapter: ['排列組合與機率'],
    question:
      '設 $$(1+\\sqrt{2})^6=a+b\\sqrt{2}$$，其中 $$a$$、$$b$$ 為實數。請問 $$b$$ 等於下列哪一個選項？\n(A) $$C^6_0+2C^6_2+2^2C^6_4+2^3C^6_6$$\n(B) $$2C^6_1+2^2C^6_3+2^3C^6_5$$\n(C) $$C^6_1+2C^6_3+2^2C^6_5$$\n(D) $$C^6_0+2C^6_1+2^2C^6_2+2^3C^6_3+2^4C^6_4+2^5C^6_5+2^6C^6_6$$\n(E) $$C^6_0+2^2C^6_2+2^4C^6_4+2^6C^6_6$$',
    answer: '(C)',
    hasImage: false,
  },
  {
    id: '17900fd2403',
    chapter: ['數列級數'],
    question:
      '一等差數列 $$\\langle a_n\\rangle$$，若 $$a_{11}=19$$，$$a_{20}=-26$$，且 $$S_n$$ 表前 $$n$$ 項和，則 $$S_n$$ 有最大值為？',
    answer: '$$511$$',
    hasImage: false,
  },
  {
    id: '17901003c6e',
    chapter: ['數列級數'],
    question:
      '設數列 $$\\langle a_n\\rangle$$ 之前 $$n$$ 項的和 $$S_n=a_1+a_2+\\dots+a_n=3n^2-2n-5$$，則下列選項何者正確？\n(A) $$a_1=-4$$\n(B) $$a_2=3$$\n(C) $$a_{20}=a_{19}+6$$\n(D) $$a_{34}>200$$\n(E) $$\\langle a_n\\rangle$$ 是等差數列',
    answer: '(A)(C)',
    hasImage: false,
  },
  {
    id: '17901015b15',
    chapter: ['數列級數'],
    question:
      '設數列 $$\\langle a_n\\rangle$$ 是等比數列，其公比為實數且 $$a_3=48$$，$$a_6=-384$$，則此數列前 $$10$$ 項之和為？',
    answer: '$$-4092$$',
    hasImage: false,
  },
  {
    id: '17901027cbd',
    chapter: ['數列級數'],
    question: '試求級數和：$$11^3+12^3+13^3+\\dots+20^3=$$？',
    answer: '$$41075$$',
    hasImage: false,
  },
  {
    id: '1790103334d',
    chapter: ['數列級數'],
    question: '求 $$1\\times2+2\\times3+3\\times4+\\dots+30\\times31=$$？',
    answer: '$$9920$$',
    hasImage: false,
  },
  {
    id: '1790106289d',
    chapter: ['數列級數'],
    question:
      '假設定期存款的年利率為 $$2\\%$$，小明每年初存進 $$1000$$ 元，定期存十五年\n(1)若單利計息，每年為一期，則期滿後之本利和為？\n(2)若複利計息，每年為一期，則期滿後之本利和為？($$1.02^{15}\\approx1.346$$)',
    answer: '(1) $$17400$$ 元 (2) $$17646$$ 元',
    hasImage: false,
  },
  {
    id: '17901070ba5',
    chapter: ['數列級數'],
    question: '若 $$200\\le n\\le900$$，且 $$n$$ 為自然數，則這些自然數中 $$7$$ 的倍數之和為？',
    answer: '$$54950$$',
    hasImage: false,
  },
  {
    id: '179010f94b5',
    chapter: ['數列級數'],
    question:
      '電影院裡相鄰兩排的座位，後排都比前排多 $$2$$ 個位子。已知最前排有 $$12$$ 個座位，且座位總數不超過 $$600$$ 個。若此電影院能容納最多的排數為 $$x$$，且最多的總座位數為 $$y$$，則 $$x+y=$$？',
    answer: '$$589$$',
    hasImage: false,
  },
  {
    id: '179011103d5',
    chapter: ['數列級數'],
    question:
      '設 $$\\langle a_n\\rangle$$ 為一個首項不為 $$0$$ 的等比數列，滿足 $$2a_1+a_2=0$$ 且 $$a_1+a_2+a_3=3$$，則前 $$10$$ 項的和為？',
    answer: '$$-341$$',
    hasImage: false,
  },
  {
    id: '1790111e4ab',
    chapter: ['數列級數'],
    question:
      '有一等比級數，前 $$5$$ 項的和為 $$60$$，前 $$10$$ 項的和為 $$180$$，試求第 $$16$$ 項至第 $$20$$ 項的和為？',
    answer: '$$480$$',
    hasImage: false,
  },
  {
    id: '1790112e430',
    chapter: ['數列級數'],
    question:
      '邊長為 $$1$$ 公分的正立方體積木堆疊如圖所示：第一層用 $$1$$ 個積木，第二層用 $$3$$ 個積木，第三層用 $$6$$ 個積木，以此類推，試問：\n(1)第二十層用了幾個積木？\n(2)如果堆完 $$20$$ 層，則此 $$20$$ 層總共剛好需要幾個積木？',
    answer: '(1) $$210$$ (2) $$1540$$',
    hasImage: true,
  },
  {
    id: '1790118bdaf',
    chapter: ['數列級數'],
    question:
      '在坐標平面上，螞蟻由原點出發。牠第一次向右移動 $$1$$ 單位，到達點 $$P_1(1,0)$$，第二次向上移動 $$\\frac{1}{2}$$ 單位，到達點 $$P_2\\left(1,\\frac{1}{2}\\right)$$，而後依照先向右再向上的方式移動，而且第 $$2k-1$$ 次向右移動 $$2k-1$$ 單位，第 $$2k$$ 次向上移動 $$\\left(\\frac{1}{2}\\right)^k$$ 單位，$$k$$ 為正整數。如此依序移動到點 $$P_3$$，$$P_4$$，$$P_5$$，...，則點 $$P_{11}$$ 的坐標為？',
    answer: '$$\\left(36,\\frac{31}{32}\\right)$$',
    hasImage: false,
  },
  {
    id: '179032bab5b',
    chapter: ['條件機率'],
    question:
      '有一個孩童猜拳，過去 $$20$$ 次中，此孩童出石頭和布的次數各有 $$8$$ 次，根據此這 $$20$$ 次的紀錄，下一次這位孩童出剪刀的機率為？',
    answer: '$$\\frac{1}{5}$$',
    hasImage: false,
  },
  {
    id: '179032cd151',
    chapter: ['條件機率'],
    question:
      '有一個不公正骰子，其點數分別為 $$1$$、$$2$$、$$3$$、$$4$$、$$5$$、$$6$$，而各點數發生的機率與其點數成正比，則出現 $$1$$ 點的機率為？',
    answer: '$$\\frac{1}{21}$$',
    hasImage: false,
  },
  {
    id: '179032e41d6',
    chapter: ['條件機率'],
    question:
      '擲一顆骰子兩次，若第一次出現 $$a$$ 點，第二次出現 $$b$$ 點，在 $$a+b=7$$ 的條件下，第二次出現 $$3$$ 點的機率為？',
    answer: '$$\\frac{1}{6}$$',
    hasImage: false,
  },
  {
    id: '179032ff4e6',
    chapter: ['條件機率'],
    question:
      '設一般家庭每胎生男生女的機率均為 $$\\frac{1}{2}$$，不考慮雙胞胎與三胞胎，在一個隨機取樣的家庭中，已知此家庭恰有三個小孩，且至少有一個女孩的條件下，則第一胎為男孩之機率為？',
    answer: '$$\\frac{3}{7}$$',
    hasImage: false,
  },
  {
    id: '179033094e9',
    chapter: ['條件機率'],
    question:
      '擲三枚相同且均勻的銅板一次，則在至少出現一個正面的條件下，恰好出現兩個正面的機率為？',
    answer: '$$\\frac{3}{7}$$',
    hasImage: false,
  },
  {
    id: '179033272c5',
    chapter: ['條件機率'],
    question:
      '已知在某城市的人口中，男性占 $$60\\%$$，又女性且抽菸的人占 $$10\\%$$。從此城市任選一人，已知此人為女性的條件下，此人有抽菸的機率為？',
    answer: '$$\\frac{1}{4}$$',
    hasImage: false,
  },
  {
    id: '1790334645d',
    chapter: ['條件機率'],
    question:
      '設 $$A$$，$$B$$ 為兩事件，且 $$P(A)=\\frac{2}{3}$$，$$P(B)=\\frac{2}{5}$$，$$P(A\\cup B)=\\frac{4}{5}$$，則 $$P(B|A)=$$？',
    answer: '$$\\frac{2}{5}$$',
    hasImage: false,
  },
  {
    id: '17903353520',
    chapter: ['條件機率'],
    question:
      '若 $$A$$、$$B$$ 為獨立事件，且 $$P(A)=\\frac{1}{3}$$，$$P(B)=\\frac{2}{5}$$，$$P(A\\cap B)=$$？',
    answer: '$$\\frac{2}{15}$$',
    hasImage: false,
  },
  {
    id: '1790336d2b8',
    chapter: ['條件機率'],
    question:
      '已知服用某藥物治療流行性感冒，治癒率為 $$\\frac{3}{5}$$，今有甲、乙兩人同時因流行性感冒服用此藥物，且兩人是否被治癒為獨立事件，則兩人都被治癒的機率為？',
    answer: '$$\\frac{9}{25}$$',
    hasImage: false,
  },
  {
    id: '17903380dda',
    chapter: ['條件機率'],
    question:
      "設 $$A$$、$$B$$ 為兩獨立事件，若 $$P(A)=P(B)$$，$$P(A'\\cap B')=\\frac{4}{9}$$，則 $$P(B)=$$？",
    answer: '$$\\frac{1}{3}$$',
    hasImage: false,
  },
  {
    id: '179033af1d1',
    chapter: ['條件機率'],
    question:
      '為推廣民眾騎乘自行車作為短程接駁交通工具，台中市政府辦理 YouBike 租賃服務。設甲、乙、丙三人獨立租賃自行車上學的機率分別為 $$0.8$$、$$0.6$$、$$0.5$$，且三人租賃與否為獨立事件，則至少有一人租賃自行車上學的機率為？',
    answer: '$$0.96$$',
    hasImage: false,
  },
  {
    id: '179033cd2cf',
    chapter: ['條件機率'],
    question:
      '丟一枚均勻硬幣 $$3$$ 次，已知第 $$3$$ 次出現正面，則 $$3$$ 次中出現 $$2$$ 次正面的機率為何？',
    answer: '$$\\frac{1}{2}$$',
    hasImage: false,
  },
  {
    id: '1790658dfdc',
    chapter: ['數據分析'],
    question:
      '有 $$n$$ 個數值，其算術平均數為 $$5$$，若再加上一數「$$14$$」，則算術平均數變為 $$6$$，則 $$n=$$？',
    answer: '$$8$$',
    hasImage: false,
  },
  {
    id: '1790659e4b8',
    chapter: ['數據分析'],
    question:
      '有十個數據 $$2$$，$$2$$，$$2$$，$$4$$，$$5$$，$$6$$，$$7$$，$$7$$，$$7$$，$$8$$，則此十個數據的標準差為？',
    answer: '$$\\sqrt{5}$$',
    hasImage: false,
  },
  {
    id: '179065c0fdf',
    chapter: ['數據分析'],
    question:
      '已知數值資料 $$x_1,x_2,\\dots,x_n$$ 之平均數為 $$15$$，標準差為 $$4$$，若 $$y_i=–3x_i+1$$ ($$i=1,2,\\dots,n$$)，則 $$y_1,y_2,\\dots,y_n$$ 之標準差為？',
    answer: '$$12$$',
    hasImage: false,
  },
  {
    id: '179065d6873',
    chapter: ['數據分析'],
    question:
      '有 $$n$$ 個整數，加入一個數「$$36$$」後，其算術平均數多 $$2$$；但從此 $$n$$ 個整數中去掉其中一個數「$$20$$」後，其算術平均數少 $$1$$，則 $$n=$$？',
    answer: '$$13$$',
    hasImage: false,
  },
  {
    id: '179065e0be4',
    chapter: ['數據分析'],
    question:
      '某一國家近四年的經濟年成長率分別為 $$60\\%$$、$$80\\%$$、$$–10\\%$$、$$–20\\%$$，則該國家近四年每一年的平均經濟成長率為多少 $$\\%$$？',
    answer: '$$20\\%$$',
    hasImage: false,
  },
  {
    id: '1790660b19a',
    chapter: ['數據分析'],
    question:
      '某公司 $$55$$ 位職員的月薪及人數分配如下表，則平均月薪為多少元？\n $$\\begin{array} {|c|c|}\\hline 月薪(萬) & 3 & 3.2 & 3.5 & 4 & 5.05 \\\\ \\hline 人數 & 5 & 10 & 20 & 18 & 2 \\\\ \\hline  \\end{array}$$',
    answer: '$$36200$$',
    hasImage: false,
  },
  {
    id: '1790661989e',
    chapter: ['數據分析'],
    question:
      '某班老師算出學生學期成績後，鑑於學生平時都很用功，決定每人各加 $$5$$ 分(加分後沒人超過 $$100$$分)，則加分前與加分後，下列哪些統計數值不變？\n(A)算術平均數\n(B)標準差\n(C)全距\n(D)中位數\n(E)變異數',
    answer: '(B)(C)(E)',
    hasImage: false,
  },
  {
    id: '17906631b9a',
    chapter: ['數據分析'],
    question:
      '觀察下列四組數據(每組 $$10$$ 筆)\n $$X_1: 1, 1, 1, 1, 1, –5, –5, –5, –5, –5$$\n $$X_2: –2, –2, –2, –2, –2, 10, 10, 10, 10, 10$$\n $$X_3: 2, 2, 2, 5, 5, 5, 5, 8, 8, 8$$\n $$X_4: –1, –1, –1, –1, –1, 1, 1, 1, 1, 1$$\n其標準差分別為 $$\\sigma_1,\\sigma_2,\\sigma_3,\\sigma_4$$，則這四者的大小關係為何？',
    answer: '$$\\sigma_2>\\sigma_1>\\sigma_3>\\sigma_4$$',
    hasImage: false,
  },
  {
    id: '179066679d7',
    chapter: ['數據分析'],
    question:
      '老師對兩個班學生實施測驗，結果如下表：\n $$\\begin{array} {|c|c|}\\hline & 人數 & 平均 & 標準差 \\\\ \\hline 甲班 & 30 & 60 & 10 \\\\ \\hline 乙班 & 20 & 70 & 5 \\\\ \\hline  \\end{array}$$\n現將學生共 $$50$$ 人的成績合併計算，則：\n(1)合併後的算術平均數為？\n(2)合併後的標準差為？',
    answer: '(1) $$64$$ (2) $$\\sqrt{94}$$',
    hasImage: false,
  },
  {
    id: '17906678a7e',
    chapter: ['數據分析'],
    question:
      '某班 $$41$$ 位學生成績不佳，平均 $$48$$ 分，標準差 $$8$$ 分，老師決定將成績以 $$y=ax+b$$ 的方式加分($$x$$ 為原分數，$$y$$ 為加分後分數，$$a>0$$)，將成績提高到平均 $$60$$ 分，標準差 $$9$$ 分，按照這個計算方式，該班學生小明加分後分數將超過 $$100$$ 分，則小明原分數至少為多少分？(原分數皆為整數)',
    answer: '$$84$$',
    hasImage: false,
  },
  {
    id: '179066936d3',
    chapter: ['數據分析'],
    question:
      '某科的學期成績計算方式如下：平時成績占 $$30\\%$$，兩次期中考各占 $$20\\%$$，期末考占 $$30\\%$$。已知小華的平時成績為 $$65$$ 分，兩次期中考分別為 $$35$$ 分及 $$37$$ 分，則他期末考至少須考幾分，學期成績才有 $$60$$ 分？',
    answer: '$$87$$',
    hasImage: false,
  },
  {
    id: '1790669db0d',
    chapter: ['數據分析'],
    question:
      '有 $$21$$ 個數據，其算術平均數為 $$32$$，標準差為 $$3$$。今發覺其中一數「$$32$$」必須剔除，則所剩的 $$20$$ 個數據之標準差為？',
    answer: '$$\\sqrt{9.45}$$',
    hasImage: false,
  },
];

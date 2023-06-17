export type Question = {
  id: string;
  chapter: string;
  question: string;
  answer: string;
  hasImage: boolean;
  imageOption?: string[];
  style?: { width?: string; height?: string };
};

export const chapterList: string[] = [
  '學測',
  '升高中銜接',
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
  '選修數甲',
  '選修數乙',
  '極限',
  '複數與複數平面',
  '二次曲線',
];

// 學測
const gsat: Question[] = [
  {
    id: '186823bac74',
    chapter: '學測',
    question:
      '某冰淇淋店最少需準備 $n$ 桶不同口味的冰淇淋，才能滿足廣告所稱「任選兩球不同口味冰淇淋的組合數超過 100 種」。試問來店顧客從 $n$ 桶中任選兩球 (可為同一口味) 共有幾種方法？\n(1) 101　　(2) 105　　(3) 115　　(4) 120　　(5) 225',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '186824ac3ce',
    chapter: '學測',
    question:
      '某品牌計算機在計算對數 $\\log_ab$ 時需按 $\\boxed\\log$、$\\boxed($、$\\boxed a$、$\\boxed,$、$\\boxed b$、$\\boxed)$。某生在計算 $\\log_ab$ 時 (其中 $a>1$ 且 $b>1$) 順序弄錯，誤按 $\\boxed\\log$、$\\boxed($、$\\boxed b$、$\\boxed,$、$\\boxed a$、$\\boxed)$，所得為正確值的 $\\dfrac94$ 倍。試選出 $a,b$ 間的關係式。\n(1) $a^2=b^3$　　(2) $a^3=b^2$　　(3) $a^4=b^9$　　(4) $2a=3b$　　(5) $3a=2b$',
    answer: '(1)',
    hasImage: false,
  },
  {
    id: '18682554aed',
    chapter: '學測',
    question:
      '在處理二維數據時，有種方法是將數據垂直投影到某一直線，並以該直線為數線，進而了解投影點所成一維數據的變異。下圖的一組二維數據，試問投影到哪一選項的直線，所得之一維投影數據的變異數會是最小？\n(1) $y=2x$\n(2) $y=-2x$\n(3) $y=-x$\n(4) $y=\\dfrac x2$\n(5) $y=-\\dfrac x2$',
    answer: '(5)',
    hasImage: true,
  },
  {
    id: '1868261d117',
    chapter: '學測',
    question:
      '設等差數列 $\\langle a_n\\rangle$ 之首項 $a_1$ 與公差 $d$ 皆為正數，且 $\\log a_1,\\log a_3,\\log a_6$ 依序也成等差數列。試選出數列 $\\log a_1,\\log a_3,\\log a_6$ 的公差。\n(1) $\\log d$　　(2) $\\log\\dfrac23$　　(3) $\\log\\dfrac32$　　(4) $\\log2d$　　(5) $\\log3d$',
    answer: '(3)',
    hasImage: false,
  },
  {
    id: '1868264a1b9',
    chapter: '學測',
    question:
      "已知某地區有 30% 的人口感染某傳染病。針對該傳染病的快篩試劑檢驗，有陽性或陰性兩結果。已知該試劑將染病者判為陽性的機率為 80%，將未染病者判為陰性的機率則為 60%。為降低該試劑將染病者誤判為陰性的情況，專家建議連續採檢三次。若單次採檢判為陰性者中，染病者的機率為 $P$；而連續採檢三次皆判為陰性者中，染病者的機率為 $P'$。試問 $\\dfrac P{P'}$ 最接近哪一選項？\n(1) 7　　(2) 8　　(3) 9　　(4) 10　　(5) 11",
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '1868266ca4a',
    chapter: '學測',
    question:
      '設坐標平面上兩直線 $L_1,L_2$ 的斜率皆為正，且 $L_1,L_2$ 有一夾角的平分線斜率為 $\\dfrac{11}9$。另一直線 $L$ 通過點 $(2,\\dfrac13)$ 且與 $L_1,L_2$ 所圍的有界區域為正三角形，試問 $L$ 的方程式為下列哪一選項？\n(1) $11x-9y=19$ 　 　(2) $9x+11y=25$　　(3) $11x+9y=25$\n(4) $27x-33y=43$　　(5) $27x+33y=65$',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '186826b502c',
    chapter: '學測',
    question:
      '設整數 $n$ 滿足 $|5n-21|\\ge7|n|$。試選出正確的選項。\n(1) $|5n-7n|\\ge21$ 　 　(2) $-1\\le\\dfrac{7n}{5n-21}\\le1$　　(3) $7n\\le5n-21$\n(4) $(5n-21)^2\\ge49n^2$　(5) 滿足題設不等式的整數 $n$ 有無窮多個',
    answer: '(2)(4)',
    hasImage: false,
  },
  {
    id: '186826fd317',
    chapter: '學測',
    question:
      '坐標平面上，$\\triangle ABC$ 三頂點的坐標分別為 $A(0,2)$，$B(1,0)$，$C(4,1)$，試選出正確的選項。\n(1) $\\triangle ABC$ 的三邊中，$\\overline{AC}$ 最長\n(2) $\\sin A<\\sin C$\n(3) $\\triangle ABC$ 為銳角三角形\n(4) $\\sin B=\\dfrac{7\\sqrt2}{10}$\n(5) $\\triangle ABC$ 的外接圓半徑比 2 小',
    answer: '(1)(4)',
    hasImage: false,
  },
  {
    id: '18682736964',
    chapter: '學測',
    question:
      '已知 $P$ 為 $\\triangle ABC$ 內一點，且 $\\xvector{AP}=a\\xvector{AB}+b\\xvector{AC}$，其中 $a,b$ 為相異實數。設 $Q,R$ 在同一平面上，且 $\\xvector{AQ}=b\\xvector{AB}+a\\xvector{AC}$，$\\xvector{AR}=a\\xvector{AB}+(b-0.05)\\xvector{AC}$。試選出正確的選項。\n(1) $Q,R$ 也都在 $\\triangle ABC$ 內部\n(2) $|\\xvector{AP}|=|\\xvector{AQ}|$\n(3) $\\triangle ABP$ 面積 $=\\triangle ACQ$ 面積\n(4) $\\triangle BCP$ 面積 $=\\triangle BCQ$ 面積\n(5) $\\triangle ABP$ 面積 $>\\triangle ABR$ 面積',
    answer: '(3)(4)',
    hasImage: false,
  },
  {
    id: '1868276c703',
    chapter: '學測',
    question:
      '給定一實係數三次多項式函數 $f(x)=ax^3+bx^2+cx+3$。令 $g(x)=f(-x)-3$，已知 $y=g(x)$ 圖形的對稱中心為 (1, 0) 且 $g(-1)<0$。試選出正確的選項。\n(1) $g(x)=0$ 有三相異整數根\n(2) $a<0$\n(3) $y=f(x)$ 圖形的對稱中心為 (-1, -3)\n(4) $f(100)<0$\n(5) $y=f(x)$ 的圖形在點 $(-1,f(-1))$ 附近會近似於一條斜率為 $a$ 的直線',
    answer: '(1)(2)',
    hasImage: false,
  },
  {
    id: '1868279a5a7',
    chapter: '學測',
    question:
      '下圖為一個積木的示意圖，其中 $ABC$ 為一直角三角形，$\\angle ACB=90\\du$，$\\overline{AC}=5$、$\\overline{BC}=6$，且 $ADEB$ 與 $ADFC$ 皆為矩形。試選出正確的選項。\n(1) 將此積木沿平面 $ACE$ 切下，可切得兩個四面體\n(2) 平面 $ADEB$ 與 $ADFC$ 所夾銳角大於 $45\\du$\n(3) $\\angle CEB<\\angle AEB$\n(4) $\\tan\\angle AEC<\\sin\\angle CEB$\n(5) $\\angle CEB<\\angle AEC$',
    answer: '(2)(3)(4)',
    hasImage: true,
  },
  {
    id: '186827e7f4f',
    chapter: '學測',
    question:
      '設 $f(x),g(x)$ 皆為實係數多項式，其中 $g(x)$ 是首項係數為正的二次式。已知 $(g(x))^2$ 除以 $f(x)$ 的餘式為 $g(x)$，且 $y=f(x)$ 的圖形與 $x$ 軸無交點。試選出不可能是 $y=g(x)$ 圖形頂點的 $y$ 坐標之選項。\n(1) $\\dfrac{\\sqrt2}2$　　(2) 1　　(3) $\\sqrt2$　　(4) 2　　(5) $\\pi$',
    answer: '(1)(2)',
    hasImage: false,
  },
  {
    id: '18682806494',
    chapter: '學測',
    question:
      '有一款線上遊戲推出「十連抽」的抽卡機制，「十連抽」意思為系統自動做十次的抽卡動作。若每次「十連抽」需用 1500 枚代幣，抽中金卡的機率在前九次皆為 2%，在第十次為 10%。今某生有代幣 23000 枚，且不斷使用「十連抽」，抽到不能再抽為止。則某生抽到金卡張數的期望值為 ＿＿ 張',
    answer: '4.2',
    hasImage: false,
  },
  {
    id: '186828488cf',
    chapter: '學測',
    question:
      '已知 $a,b$ 為實數，且方程組 $\\begin{cases}ax+5y+12z=4\\\\x+ay+\\dfrac83z=7\\\\3x+8y+az=1\\end{cases}$ 恰有一組解，又此方程組經過一系列的高斯消去法運算後，原來的增廣矩陣化為 $\\begin{bmatrix}1&2&b&7\\\\0&b&5&-5\\\\0&0&b&0\\end{bmatrix}$。則 $a=$ ＿＿，$b=$ ＿＿。(化為最簡分數)',
    answer: '2; $\\frac12$',
    hasImage: false,
  },
  {
    id: '1868286fb96',
    chapter: '學測',
    question:
      '如圖，王家有塊三角形土地 $\\triangle ABC$，其中 $\\overline{BC}=16$ 公尺。政府擬徵收其中梯形 $DBCE$ 部分，開闢以直線 $DE,BC$ 為邊線的馬路，其路寬為 $h$ 公尺，這讓王家土地只剩原有面積的 $\\dfrac9{16}$。經協商，改以開闢平行直線 $BE,FC$ 為邊線的馬路，且路寬不變，其中 $\\angle EBC=30\\du$，則只需徵收 $\\triangle BCE$ 區域。依此協商，王家剩餘的土地 $\\triangle ABE$ 有 ＿＿＿＿ 平方公尺。',
    answer: '192',
    hasImage: true,
  },
  {
    id: '18682de1ad3',
    chapter: '學測',
    question:
      "坐標空間中，平面 $x-y+2z=3$ 上有兩相異直線 $L:\\dfrac x2-1=y+1=-2z$ 與 $L'$。已知 $L$ 也在另一平面 $E$ 上，且 $L'$ 在 $E$ 的投影與 $L$ 重合。\n則 $E$ 的方程式為 $x+$ ＿＿ $y+$ ＿＿ $z=$ ＿＿。",
    answer: '-3; -2; 5',
    hasImage: false,
  },
  {
    id: '18682e06d63',
    chapter: '學測',
    question:
      '坐標空間中一平行六面體，某一底面的其中三頂點為 (-1, 2, 1), (-4, 1, 3), (2 ,0 , -3)，另一面之一頂點在 $xy$ 平面上且與原點距離為 1。滿足前述條件之平行六面體中，最大體積為 ＿＿。',
    answer: '21',
    hasImage: false,
  },
  {
    id: '18682e36751',
    chapter: '學測',
    question:
      "坐標平面上有一環狀區域由圓 $x^2+y^2=3$ 的外部與圓 $x^2+y^2=4$ 的內部交集而成。某甲欲用一支長度為 1 的筆直掃描棒來掃描此環狀區域之 $x$ 軸上方的某區域 $R$。他設計掃描棒黑、白兩端分別在半圓 $C_1:x^2+y^2=3$ ($y\\ge0$)、$C_2:x^2+y^2=4$ ($y\\ge0$) 上移動。開始時掃描棒黑端在點 $A(\\sqrt3,0)$，白端在 $C_2$ 的點 $B$。接著黑、白兩端各沿著 $C_1$、$C_2$ 逆時針移動，直至白端碰到 $C_2$ 的點 $B'(-2,0)$ 便停止掃描。",
    answer: '',
    hasImage: true,
  },
  {
    id: '18682e6285d',
    chapter: '學測',
    question:
      ' 試問點 $B$ 的坐標為下列哪一選項？\n(1) (0, 2)　　(2) $(1,\\sqrt3)$　　(3) $(\\sqrt2,\\sqrt2)$　　(4) $(\\sqrt3,1)$　　(5) (2, 0)',
    answer: '4',
    hasImage: false,
  },
  {
    id: '18682e71d80',
    chapter: '學測',
    question:
      "令 $O$ 為原點，掃描棒停止時黑、白兩端所在位置分別為 $A',B'$。試在答題卷上作圖區中以斜線標示掃描棒掃過的區域 $R$；並於求解區內求 $\\cos\\angle OA'B'$ 及點 $A'$ 的極坐標。",
    answer: '',
    hasImage: false,
  },
  {
    id: '18682e7bf02',
    chapter: '學測',
    question: '令 $\\Omega$ 表示掃描棒在第一象限所掃過的區域，試分別求 $\\Omega$ 與 $R$ 的面積。',
    answer: '',
    hasImage: false,
  },
];

// 升高中銜接
const beginner: Question[] = [
  {
    id: '181cc7a2693',
    chapter: '升高中銜接',
    question: '求 $|3-(-5)|-|5+(-2)|-3$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cc7b534d',
    chapter: '升高中銜接',
    question: '求 $-23-(-1+21)+(2-19)$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cc882e42',
    chapter: '升高中銜接',
    question: '(1) $-6\\times16\\div(-2)$\n(2) $-40\\div(-5)\\times(-45\\div3)$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cc8957d2',
    chapter: '升高中銜接',
    question: '(1) $-72\\div(-4)\\times(-3)$\n(2) $-15\\times8\\div(-3)\\times(-1)$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cc8a8a0c',
    chapter: '升高中銜接',
    question: '(1) $5\\times(-2)+8\\div(-4)$\n(2) $4-2\\times|(15-7)\\div4-2|$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cc8ba549',
    chapter: '升高中銜接',
    question:
      '(1) $[3-(-3)\\times7]\\div(-6)\\div(-2)$\n(2) $-8\\div2\\times(-3)-4\\times(-2)\\div2-(-2)$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cc8d3f9c',
    chapter: '升高中銜接',
    question: '(1) 若 $x\\times3=193$，求 $(1-x)\\times3$。\n(2) $48\\times(-53)+148\\times53$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cc8de9f4',
    chapter: '升高中銜接',
    question: '(1) $19\\times97+260\\times1.9-103\\times19$\n(2) $321\\times999$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181ccf8ebff',
    chapter: '升高中銜接',
    question: '求 $(-3)^3+(-3)^4-(-3)^5$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181ccf9ff6e',
    chapter: '升高中銜接',
    question: '求 $(-2)^5+(-3)^4+(-4)^3-(-5)^2$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181ccfdd7ef',
    chapter: '升高中銜接',
    question: '求 $(-8^2)\\times(-2)^2\\div(-4)^3\\times2^3$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181ccff362d',
    chapter: '升高中銜接',
    question: '求 $4^2\\times(-5)^2\\div(-2)^4$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd018076',
    chapter: '升高中銜接',
    question:
      '(1) 試比較分數 $\\frac75$、$\\frac97$、$\\frac{11}9$ 的大小。\n(2) 試比較分數 $-1\\frac45$、$-1\\frac34$、$-1\\frac23$ 的大小。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd026848',
    chapter: '升高中銜接',
    question: '試比較分數 $-\\frac{10}{11}$、$-\\frac{110}{111}$、$-\\frac{1110}{1111}$ 的大小。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd032736',
    chapter: '升高中銜接',
    question: '(1) $\\frac12+\\frac45-\\frac23$\n(2) $(-3\\frac25-\\frac25)-(7\\frac35+\\frac53)$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd04771c',
    chapter: '升高中銜接',
    question:
      '(1) $\\frac45-(-\\frac23+\\frac25)-\\frac23$\n(2) $2-(\\frac25-\\frac3{10})-4\\frac12$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd05db77',
    chapter: '升高中銜接',
    question:
      '(1) $(1-\\frac58\\div1\\frac9{16})\\div\\frac1{25}$\n(2) $(-3)^3\\times(1\\frac23)^2\\div(-2\\frac12)$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd076eba',
    chapter: '升高中銜接',
    question:
      '(1) $(-4)^2\\div2\\div6\\times\\frac13$\n(2) 若 $(-2)\\div(x\\div\\frac7{15})=-\\frac7{10}$，求 $x$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd0881e2',
    chapter: '升高中銜接',
    question:
      '(1) $(-\\frac23)^2\\times6\\div(-10)-\\frac25$\n(2) $\\frac23\\div(-\\frac16)\\times(-\\frac12)^2-3\\times(-2)$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd09da53',
    chapter: '升高中銜接',
    question:
      '(1) $-3\\div\\frac14\\times(-4\\frac23+2\\frac12)$\n(2) $2.5^2\\times(-10.7)-2.5^2\\times(-6.7)$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd24f6f3',
    chapter: '升高中銜接',
    question:
      '化簡：\n(1) $4a-8a-12-13$\n(2) $(-\\frac52+2a)-(4a-\\frac12)$\n(3) $\\dfrac{a-2}4-\\dfrac{2a+1}3$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd265b2a',
    chapter: '升高中銜接',
    question: '化簡：\n(1) $-\\frac12(1-x)$\n(2) $7(4x-1)-3(9x-5)$\n(3) $\\frac32x-(1-x)$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd27f16f',
    chapter: '升高中銜接',
    question:
      '(1) 若 $a=13$，求 $4a-3(a+7)$\n(2) 若 $b=-2$，求 $\\dfrac{b+1}{2b-1}$\n(3) 若 $c=3$，求 $\\dfrac{3c-1}2-\\dfrac{c^2}3$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd290c1b',
    chapter: '升高中銜接',
    question:
      '(1) 若 $x=\\frac12$，求 $4(x+3)+2$\n(2) 若 $y=-6$，求 $\\dfrac{y-1}2-\\dfrac{y+1}3$\n(3) 若 $z=-\\frac23$，求 $18z-\\dfrac{3z-6}4$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd2abc32',
    chapter: '升高中銜接',
    question: '解 $x$：\n(1) $-2(x+3)-4x+5=3$\n(2) $2-\\dfrac{5x-1}6=\\dfrac12$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd2b65af',
    chapter: '升高中銜接',
    question: '解 $x$：\n(1) $\\dfrac x3-\\dfrac{x-3}2=1$\n(2) $x+1=\\dfrac{5x-1}2$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd35e473',
    chapter: '升高中銜接',
    question: '解 $x$：\n(1) $(3x+1)-2(x+5)=(2x-4)+4(x-6)$\n(2) $2|x-1|-3=5$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd36b924',
    chapter: '升高中銜接',
    question: '解 $x$：\n(1) $\\dfrac{2x-1}3-1=\\dfrac{5x+1}8-\\dfrac{3x+1}6$\n(2) $|2x-1|=|x+5|$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd392814',
    chapter: '升高中銜接',
    question: '化簡：\n(1) $-(x-3y)+(y-3x)$\n(2) $\\dfrac{a-2b}3-\\dfrac{3a-4b}5$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd39d840',
    chapter: '升高中銜接',
    question: '化簡：\n(1) $(2x-6y)-(x-2y)$\n(2) $2x-\\dfrac{y-x-1}3$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd3b253f',
    chapter: '升高中銜接',
    question: '若 $x=3$、$y=a$ 與 $x=b$、$y=5$ 皆是 $x+3y=12$ 的解，求 $a+b$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd3c941d',
    chapter: '升高中銜接',
    question: '若 $x=a$、$y=a$ 是 $3x+4y=20$ 的解，求 $a$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd3ed6d1',
    chapter: '升高中銜接',
    question: '求解：$\\begin{cases}x+3y=14\\\\2x-y=0\\end{cases}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd3fd7bf',
    chapter: '升高中銜接',
    question: '求解：$\\begin{cases}2x-3y=-6\\\\x=y-1\\end{cases}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd40412b',
    chapter: '升高中銜接',
    question: '求解：$\\begin{cases}x-5y=2\\\\3x+2y=7\\end{cases}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd40cf18',
    chapter: '升高中銜接',
    question: '求解：$\\begin{cases}3y-\\frac{x-1}2=1\\\\2x=\\frac32y+5\\end{cases}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd423ce2',
    chapter: '升高中銜接',
    question: '求解：$\\begin{cases}4x+3y=2\\\\7x+4y=-4\\end{cases}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd431153',
    chapter: '升高中銜接',
    question: '求解：$(2x+y-3)^2+(x-y)^2=0$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd571aa3',
    chapter: '升高中銜接',
    question: '求解：\n(1) $3x+2\\le-(x-5)$\n(2) $-3\\le-2(x-5)$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd57e01b',
    chapter: '升高中銜接',
    question: '求解：\n(1) $-(x+1)<1-2x$\n(2) $2(x+1)+3<11$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd5874ed',
    chapter: '升高中銜接',
    question: '求解：\n(1) $2x>x+2$\n(2) $\\dfrac x3<x-1$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd58d259',
    chapter: '升高中銜接',
    question: '求解：\n(1) $-3x+4\\ge-2x+5$\n(2) $1-(2-3x)<5+2x$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd597097',
    chapter: '升高中銜接',
    question: '求解：\n(1) $-3(x-1)-x<15$\n(2) $-2(x+1)<\\dfrac13x+5$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd59f1fe',
    chapter: '升高中銜接',
    question: '求解：\n(1) $2x-1\\le3x+2$\n(2) $-\\dfrac14(5+x)>2(4x-3)$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd5bebc2',
    chapter: '升高中銜接',
    question: '求解：\n(1) $-5\\le2x-3<15$\n(2) $2x-1\\le6<3x+4$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181cd5d424a',
    chapter: '升高中銜接',
    question:
      '求解：$\\begin{cases}\\dfrac{x-1}2\\ge\\dfrac{x+2}5\\\\\\dfrac{x-2}2\\le\\dfrac{x+1}4\\end{cases}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d102c44e',
    chapter: '升高中銜接',
    question:
      '下列算式何者錯誤？\n(1) $3^2+3^2+3^2=3^3$\n(2) $0.4^2+0.4^2=0.8^2$\n(3) $(-2)^2\\times(-2)^2=(-2)^4$\n(4) $(-1)^{2021}\\times(-1)^{2022}=(-1)^{2023}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d1044138',
    chapter: '升高中銜接',
    question: '計算 $-48\\times53-53\\times152$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d104fcff',
    chapter: '升高中銜接',
    question: '計算 $3\\times[4\\times(-3)^2-2^2]-2^3$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d105cc41',
    chapter: '升高中銜接',
    question: '計算 $|(-3)^2-2^2|-$$[(-3)^3\\times(-2^2)-4\\times(-3)]\\div(-2)^3$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d10765e0',
    chapter: '升高中銜接',
    question: '若 $(x+2)\\times11=2019$，求 $(x-2)\\times11$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d10817ba',
    chapter: '升高中銜接',
    question: '計算 $2^0\\times(2^3+3^2)-(-4)^4$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d1124edb',
    chapter: '升高中銜接',
    question:
      '計算 $(\\dfrac{21}{26})^3\\times(\\dfrac{13}{14})^4\\times(\\dfrac43)^5$ 之值與下列何者相同？\n(1) $\\dfrac{13}{3^3}$ (2) $\\dfrac{13^2}{3^3}$ (3) $\\dfrac{2\\times13}{7\\times3}$ (4) $\\dfrac{13\\times2^3}{7\\times3^2}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d1136b34',
    chapter: '升高中銜接',
    question:
      '數線上，下列哪一個分數距離 -1 最近？\n(1) $-\\dfrac97$ (2) $-\\dfrac76$ (3) $-\\dfrac45$ (4) $-\\dfrac34$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d116194f',
    chapter: '升高中銜接',
    question:
      '下列算式何者錯誤？\n(1) $2^{101}+2^{101}=2^{102}$\n(2) $3^{101}-3^{100}-3^{100}=3^{100}$\n(3) $4^{101}\\times2^{101}=(4+4)^{101}$\n(4) $(5^2)^{101}\\div5^{101}\\times5^{101}=1$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d1171198',
    chapter: '升高中銜接',
    question: '求 $2\\dfrac13+\\dfrac23\\times(-0.5)^2\\div(-\\dfrac54)$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d11884bf',
    chapter: '升高中銜接',
    question:
      '有一繩長共 $100\\frac12$ 公尺，每 $3\\frac34$ 公尺剪成一段，若最多共可剪出 $a$ 段，此時會剩下 $b$ 公尺的繩子，求 $a+b$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d11986d6',
    chapter: '升高中銜接',
    question:
      '池中立有一竹竿，此竹竿全長的 $\\frac16$ 在池底下的泥中，剩下的 $\\frac35$ 在池水中，露出水面的有 $5$ 公尺，求此竹竿全長。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d11beb91',
    chapter: '升高中銜接',
    question:
      '當 $x=-6$ 時，代入下列何式其值最小？(1) $x+6$ (2) $10-x$\n(3) $-\\dfrac x3-1$ (4) $\\dfrac{2x+5}4$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d11d1f48',
    chapter: '升高中銜接',
    question:
      '判斷下列哪一個方程式的解不是整數？(1) $5x-2=2x-5$ (2) $4x=5x$\n(3) $x=\\dfrac{x+7}2$ (4) $3(x+1)=x-2$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d11e7ec7',
    chapter: '升高中銜接',
    question: '化簡 $\\dfrac14(x-1)-\\dfrac13(x+1)$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d11fd001',
    chapter: '升高中銜接',
    question: '若父現年是兒子年齡的 5 倍，9 年後父年齡為兒子的 3 倍，求父現年為幾歲？',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d120b5a8',
    chapter: '升高中銜接',
    question: '若方程式 $2-\\dfrac{x-a}3=\\dfrac{a-x}2$ 的解為 $x=-3$，求 $a$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d1214fd0',
    chapter: '升高中銜接',
    question: '化簡 $\\dfrac{2(x-5)}3-\\dfrac{1-x}2$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d1226d00',
    chapter: '升高中銜接',
    question:
      '某二位數，若個位數字為 $x$，十位數字比個位數字多 2，且十位數字與個位數字之和是這二位數的 $\\frac17$，求此二位數。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d1237e40',
    chapter: '升高中銜接',
    question: '若 $ax-4=5x+2$ 與 $\\dfrac32x+\\dfrac12=x+2$ 有相同的解，求 $a$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d1242011',
    chapter: '升高中銜接',
    question: '解一元一次方程式 $3-\\dfrac{5-x}4=\\dfrac x2$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d12a6f6c',
    chapter: '升高中銜接',
    question:
      '老王賣瓜，第一天賣出全部的一半多 2 個，第二天賣出剩下的一半少 2 個，結果剩下 30 個未賣出，求原先老王的瓜的個數。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d12c6348',
    chapter: '升高中銜接',
    question:
      '為測量井的深度，將一條繩子對摺後放入井中測量，繩子比井深多出 1.8 公尺，若三等分摺後放入井中，則繩子比井深多出 0.2 公尺，求繩長。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d12ead05',
    chapter: '升高中銜接',
    question:
      '已知麵包店的麵包一個 15 元，小明去此店買麵包，結帳時店員告訴小明：「如果你再多買一個麵包就可以打九折，價錢會比現在便宜 45 元。」根據此對話，判斷結帳時小明買了多少個麵包？',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d133422c',
    chapter: '升高中銜接',
    question: '化簡 $\\dfrac{2x-y}3-\\dfrac y2$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d1351757',
    chapter: '升高中銜接',
    question:
      '下列哪一組聯立方程式的解是 $x=-1$，$y=2$？\n(1) $\\begin{cases}x+3y=5\\\\-x+2y=1\\end{cases}$ (2) $\\begin{cases}2x+3y=4\\\\3x+y=-1\\end{cases}$\n(3) $\\begin{cases}2x-y=-4\\\\2x+3y=0\\end{cases}$ (4) $\\begin{cases}x+y=1\\\\3x-2y=4\\end{cases}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d1376d36',
    chapter: '升高中銜接',
    question:
      '若 $x=\\dfrac12$，$y=-\\dfrac13$ 時，求一元二次式 $\\dfrac{x+y}2-\\dfrac{3x-5y}3-3y$ 之值。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d139bf0e',
    chapter: '升高中銜接',
    question: '化簡 $2(4x-y)-7(2x-y-1)$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d13a7274',
    chapter: '升高中銜接',
    question: '若 $\\dfrac{x+4}2+\\dfrac{y-6}3=\\dfrac{x-5}5-\\dfrac{y-4}4=0$，求 $x+y$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d13b48d0',
    chapter: '升高中銜接',
    question: '解方程式 $\\begin{cases}6x+2y=5\\\\\\dfrac x2+\\dfrac y3=1\\end{cases}$，求 $x+y$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d13dee69',
    chapter: '升高中銜接',
    question:
      '若 $x=2$，$y=1$ 是聯立方程式 $\\begin{cases}ax-by+7=0\\\\6x+3ay-2b=0\\end{cases}$ 的解，求 $a+b$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d1401391',
    chapter: '升高中銜接',
    question: '已知 $4x-9y+5=2x-4y-6$$=x+y+1=a$，求 $a$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d142093a',
    chapter: '升高中銜接',
    question:
      '甲、乙兩人玩猜拳遊戲，每回猜拳贏的人可得 5 分，輸的人則扣 2 分，若不計平手的情況，遊戲結束後統計甲得 19 分，乙得 5 分，則共猜拳幾回？',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d1430461',
    chapter: '升高中銜接',
    question:
      '恐龍特展的門票費用，若 2 張全票及 3 張半票需 1800 元，4 張全票及 1 張半票需 2600 元，求 1 張全票及 1 張半票的費用。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d147f7e4',
    chapter: '升高中銜接',
    question:
      '試判斷 $x=-2$ 是下列哪一個不等式的解？(1) $-6x+1\\le4x+5$\n(2) $3x-2\\ge-2x+1$\n(3) $-x+2>7x+5$\n(4) $x+5<3x-2$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d1489442',
    chapter: '升高中銜接',
    question: '求解不等式 $-3x+7<2x+3$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d1494360',
    chapter: '升高中銜接',
    question: '滿足不等式 $-3(x-5)>3-2x$ 的整數解中，最大的值為何？',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d149d9f1',
    chapter: '升高中銜接',
    question: '若 $x=-2$ 是 $mx-5\\le x+3$ 的一個解，求 $m$ 的範圍。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d14a436f',
    chapter: '升高中銜接',
    question: '解不等式 $-2(x-3)>2$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d14abdec',
    chapter: '升高中銜接',
    question: '滿足 $8x+3<4x+50$ 的正整數共有幾個？',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d14b732b',
    chapter: '升高中銜接',
    question: '一元一次不等式 $\\dfrac{7x+2}3<\\dfrac{9x-4}5+2$ 的最大整數解為？',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d14dd65d',
    chapter: '升高中銜接',
    question: '若一元一次不等式 $2(x+3a)>-15$ 的解都是正數，求 $a$ 的最大值。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d1531cf1',
    chapter: '升高中銜接',
    question: '解方程式 $\\dfrac13(3x-4)-\\dfrac16(5x-7)=\\dfrac12(3x-4)$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d154f755',
    chapter: '升高中銜接',
    question: '解方程式 $3x-2\\{x-3[x-(5x-3)]\\}=0$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d156007d',
    chapter: '升高中銜接',
    question: '解不等式 $\\dfrac{2x+8}5-\\dfrac{3x-2}{15}>\\dfrac{x+2}3$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d156e1b5',
    chapter: '升高中銜接',
    question: '解不等式 $5(4x+5)+8<9(3x-1)-7$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d2788e2f',
    chapter: '升高中銜接',
    question:
      '計算並化簡：\n(1) $-\\sqrt{12}\\times\\sqrt7$\n(2) $\\sqrt{\\dfrac13}\\times3\\sqrt3$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d2794dcb',
    chapter: '升高中銜接',
    question:
      '計算並化簡：\n(1) $\\sqrt{18}\\times(-\\sqrt{\\dfrac{32}9})$\n(2) $-\\dfrac23\\sqrt5\\times(-\\dfrac34\\sqrt{15})$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d27ad6d7',
    chapter: '升高中銜接',
    question:
      '計算並化簡：\n(1) $\\sqrt{48}\\div\\sqrt3$\n(2) $-\\sqrt{10}\\div\\sqrt{45}$\n(3) $-\\sqrt{35}\\div\\sqrt{\\dfrac8{21}}\\times(-\\sqrt{\\dfrac{32}{49}})$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d27c56bb',
    chapter: '升高中銜接',
    question:
      '計算並化簡：\n(1) $-4\\sqrt3\\div\\sqrt6$\n(2) $\\sqrt{\\dfrac12}\\div\\sqrt{\\dfrac23}$\n(3) $\\sqrt{\\dfrac{48}{25}}\\times\\dfrac{\\sqrt{15}}{\\sqrt{18}}\\div(-\\sqrt{\\dfrac5{12}})$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d27da1fa',
    chapter: '升高中銜接',
    question:
      '化為最簡根式：\n(1) $\\sqrt{7^3}$ (2) $\\sqrt{24}$\n(3) $\\sqrt{35}\\times\\sqrt{48}$ (4) $\\sqrt{2^5\\times3^3\\times7}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d27f3bae',
    chapter: '升高中銜接',
    question:
      '化為最簡根式：\n(1) $-\\sqrt{72}$ (2) $-\\sqrt{1\\dfrac34}$\n(3) $-\\dfrac7{\\sqrt{21}}$ (4) $\\sqrt{2^3\\times3^4\\times5^2}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d281172c',
    chapter: '升高中銜接',
    question: '若 $\\sqrt{\\dfrac{32}3}\\div x\\times\\sqrt{\\dfrac{15}{16}}=\\dfrac23$，求 $x$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d282b2d1',
    chapter: '升高中銜接',
    question:
      '若 $x\\div\\dfrac{\\sqrt{15}}{\\sqrt{16}}\\times\\dfrac{\\sqrt{45}}{\\sqrt2}=\\dfrac{\\sqrt5}{\\sqrt{18}}$，求 $x$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d2875de4',
    chapter: '升高中銜接',
    question: '計算並化簡：\n(1) $5-3\\sqrt{25}$\n(2) $\\dfrac1{\\sqrt2}+\\sqrt{128}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d287e58d',
    chapter: '升高中銜接',
    question:
      '計算並化簡：\n(1) $\\sqrt{98}-\\sqrt{72}+\\sqrt{32}$\n(2) $\\dfrac4{2\\sqrt5}-\\dfrac{\\sqrt{80}}3+\\sqrt{125}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d288e091',
    chapter: '升高中銜接',
    question:
      '計算並化簡：\n(1) $-2\\sqrt2\\times(\\sqrt{14}-\\sqrt7)$\n(2) $(3\\sqrt2-2\\sqrt3)(\\sqrt6+2)$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d289ae85',
    chapter: '升高中銜接',
    question:
      '計算並化簡：\n(1) $(3\\sqrt5-\\sqrt{10})\\div\\sqrt{15}$\n(2) $\\sqrt3-\\sqrt{20}+\\sqrt{27}-\\sqrt5$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d28b0696',
    chapter: '升高中銜接',
    question:
      '利用乘法公式計算並化簡：\n(1) $(\\sqrt6-\\sqrt{10})(\\sqrt6+\\sqrt{10})$\n(2) $(2\\sqrt5+\\sqrt3)^2$\n(3) $(3\\sqrt2-\\sqrt6)^2$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d28c5aec',
    chapter: '升高中銜接',
    question:
      '利用乘法公式計算並化簡：\n(1) $(6\\sqrt2-4\\sqrt3)(6\\sqrt2+4\\sqrt3)$\n(2) $(2\\sqrt5+\\sqrt8)^2$\n(3) $(\\sqrt3-2\\sqrt6)^2$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d28d167a',
    chapter: '升高中銜接',
    question: '化簡：(1) $\\dfrac2{\\sqrt6+\\sqrt2}$ (2) $\\dfrac3{\\sqrt{11}-2\\sqrt5}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d28dffc5',
    chapter: '升高中銜接',
    question: '化簡：(1) $\\dfrac1{2-\\sqrt2}$ (2) $\\dfrac6{2\\sqrt3+3\\sqrt2}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d29a4cb9',
    chapter: '升高中銜接',
    question:
      '化簡：\n(1) $5\\sqrt{18}-7\\sqrt8+4\\sqrt{20}-2\\sqrt{45}$\n(2) $\\sqrt3(\\sqrt6-\\sqrt2)-\\sqrt2(-2-\\sqrt3)$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d29c17da',
    chapter: '升高中銜接',
    question:
      '化簡：\n(1) $\\dfrac{\\sqrt{54}}3+\\dfrac3{\\sqrt6}-\\dfrac8{\\sqrt{24}}$\n(2) $(4\\sqrt5-2\\sqrt6)\\times(\\sqrt5+4\\sqrt6)$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d29f1200',
    chapter: '升高中銜接',
    question:
      '化簡：$\\dfrac1{\\sqrt3+\\sqrt2}+\\dfrac2{\\sqrt5+\\sqrt3}+\\dfrac3{\\sqrt8+\\sqrt5}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d2a016b1',
    chapter: '升高中銜接',
    question:
      '化簡：$\\dfrac1{1+\\sqrt2}+\\dfrac1{\\sqrt2+\\sqrt3}+\\dfrac1{\\sqrt3+\\sqrt4}+$$\\cdots+\\dfrac1{\\sqrt9+\\sqrt{10}}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d4705890',
    chapter: '升高中銜接',
    question: '解方程式：\n(1) $3x(4x+2)=0$ (2) $9x^2=6x$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d4710393',
    chapter: '升高中銜接',
    question: '解方程式：\n(1) $(2x-3)(3x+10)=0$ (2) $-2x^2-7x=0$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d4728f61',
    chapter: '升高中銜接',
    question: '解方程式：\n(1) $(x+3)^2-(3x-2)(x+3)=0$\n(2) $(2x+1)(-x+2)=(3x-4)(-x+2)$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d4737871',
    chapter: '升高中銜接',
    question: '解方程式：\n(1) $(2x+3)^2=-(2x+3)(x+4)$\n(2) $(x-3)^2=(x-3)(3x+1)$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d4740b7f',
    chapter: '升高中銜接',
    question: '解方程式 $(x-2)(3-x)-6x(x-3)=0$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d4753b03',
    chapter: '升高中銜接',
    question: '解方程式 $(3x+2)(4x-3)=(x+3)(3-4x)$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d4766aa6',
    chapter: '升高中銜接',
    question: '解方程式：\n(1) $x^2-14x+24=0$ (2) $x^2+x-30=0$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d476e221',
    chapter: '升高中銜接',
    question: '解方程式：\n(1) $5x^2-7x+6=0$ (2) $-6x^2+15=x$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d477d55b',
    chapter: '升高中銜接',
    question: '解方程式：(1) $(x+2)(x-4)=7$\n(2) $(3x+1)^2=(2x-3)^2$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d478d7db',
    chapter: '升高中銜接',
    question: '解方程式：(1) $(x+5)(2x-3)=-21$\n(2) $(5x-4)^2=(4x-5)^2$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d47b44db',
    chapter: '升高中銜接',
    question: '若 $x$ 的一元二次方程式 $ax^2-bx+6=0$ 的兩個解為 2 和 -3，求 $a$、$b$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d47c9413',
    chapter: '升高中銜接',
    question: '若 $x$ 的一元二次方程式 $x^2+ax+b=0$ 的兩個解為 18 和 -3，求 $a$、$b$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d47ea80f',
    chapter: '升高中銜接',
    question: '解方程式：\n(1) $2x^2+3x-1=0$\n(2) $3x^2-x+4=0$\n(3) $3(x-7)(x+2)=x^2+x-30$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d47f951b',
    chapter: '升高中銜接',
    question: '解方程式：\n(1) $2x^2+x+3=0$\n(2) $3x^2+13x+7=0$\n(3) $4x^2+4x+1=3$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d4810cbc',
    chapter: '升高中銜接',
    question: '解方程式：\n(1) $(2x-1)^2-12x=9$\n(2) $\\dfrac4x+\\dfrac3{x+1}=-3$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d481bf70',
    chapter: '升高中銜接',
    question: '解方程式：\n(1) $(x+5)(x-2)=1$\n(2) $\\dfrac2x+\\dfrac3{x+1}=1$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d484b3c6',
    chapter: '升高中銜接',
    question: '試將二次式進行配方：\n(1) $x^2+8x-3$\n(2) $2x^2+6x-18$\n(3) $-x^2+6x+13$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d48604ff',
    chapter: '升高中銜接',
    question: '試將二次式進行配方：\n(1) $x^2-12x+5$\n(2) $2x^2+4x+1$\n(3) $-3x^2+20x+7$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d48836b7',
    chapter: '升高中銜接',
    question: '求二次函數的解及其頂點：\n(1) $f(x)=x^2-6x-16$\n(2) $g(x)=-2x^2-14x+36$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d4890601',
    chapter: '升高中銜接',
    question: '求二次函數的解及其頂點：\n(1) $f(x)=x^2+4x+3$\n(2) $g(x)=3x^2+20x+12$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d61ff798',
    chapter: '升高中銜接',
    question: '求二次函數的頂點坐標：\n(1) $f(x)=-x^2+2x$\n(2) $g(x)=3x^2+8x+2$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d6207b42',
    chapter: '升高中銜接',
    question: '求二次函數的頂點坐標：$f(x)=(x-1)(x+2)+(2-x)(3+2x)$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d630b6f9',
    chapter: '升高中銜接',
    question: '$\\sqrt{2+\\dfrac a{81}}=\\dfrac{13}9$，求 $a$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d6365cfa',
    chapter: '升高中銜接',
    question:
      '化簡：\n(1) $\\sqrt{\\dfrac1{12}}\\div\\sqrt{\\dfrac13}-\\sqrt{\\dfrac1{12}}\\times\\sqrt{\\dfrac13}$\n(2) $\\sqrt6\\times(\\dfrac1{\\sqrt3}-1)$\n(3) $\\dfrac4{\\sqrt7+3}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d632cc4d',
    chapter: '升高中銜接',
    question: '若 $\\sqrt{12}+\\sqrt{75}-\\sqrt{48}=\\sqrt a$，求 $a$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d6352607',
    chapter: '升高中銜接',
    question:
      '若 $x=\\dfrac{\\sqrt{15}+\\sqrt{11}}2$，$y=\\dfrac{\\sqrt{15}-\\sqrt{11}}2$，求 $x^2+y^2$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d6393b80',
    chapter: '升高中銜接',
    question: '求解：\n(1) $(2x+3)(x-1)=0$\n(2) $x(x+8)=20$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d63a7f1c',
    chapter: '升高中銜接',
    question: '求解：\n(1) $(3x-5)(5x-2)=(3x-5)(4x-9)$\n(2) $3x^2-12x=0$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d63b89ae',
    chapter: '升高中銜接',
    question: '求解：\n(1) $x^2-8x-33=0$\n(2) $\\dfrac{(x-2)(x-4)}4=\\dfrac{x(x-5)}3$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d63e3586',
    chapter: '升高中銜接',
    question: '求解：\n(1) $5x^2+6x-2=0$\n(2) $3x^2-4x-2=0$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d642a276',
    chapter: '升高中銜接',
    question: '求二次函數的頂點坐標：\n(1) $f(x)=-x^2-2x+99$\n(2) $f(x)=3x^2-6x-21$',
    answer: '',
    hasImage: false,
  },
  {
    id: '181d643230e',
    chapter: '升高中銜接',
    question: '求二次函數的頂點坐標：\n(1) $f(x)=4x^2-8x-3$\n(2) $f(x)=25x^2-10x-14$',
    answer: '',
    hasImage: false,
  },
];

// 數與式
const numAndEquation: Question[] = [
  {
    id: '18585487759',
    chapter: '數與式',
    question:
      '試求嘴巴部分的面積約為多少平方公分，請選出最接近的數值。(單選題，6 分)\n(1) 4700　(2) 5000　(3) 5300　(4) 5600　(5) 5900',
    answer: '3',
    hasImage: false,
  },
  {
    id: '1858547a7f5',
    chapter: '數與式',
    question:
      '小新他們班決定在校慶攤位上擺設一遊戲攤位，仿照義大利著名景點－真理之口的模樣。參加者若能夠將硬幣投入口中即可獲得獎品。嘴巴部分如圖，為 2D 示意圖，$\\arc{CD}$ 是以 $O$ 點為圓心，半徑為 60 公分的圓弧。$O$ 點為底邊 $\\overline{AB}$ 的中點，$\\overline{AD}$ 與 $\\overline{BC}$ 均與底邊 $\\overline{AB}$ 垂直，且 $\\overline{AD},\\overline{BC}$ 皆為 30 公分。則：',
    answer: '',
    hasImage: true,
  },
  {
    id: '185854a716d',
    chapter: '數與式',
    question:
      '小新打算在嘴巴上貼一張彩色玻璃紙，如圖中的 $\\triangle OEF$，參加者若能將玻璃紙擲落則可額外得到獎金。其中 $E,F$ 為圓弧上兩點，且 $\\overline{EF}$ 與底邊 $\\overline{AB}$ 平行。試求在滿足上述的條件下，玻璃紙的最大面積為多少平方公分？(非選擇題，9 分)',
    answer: '1800',
    hasImage: true,
  },
  {
    id: '1855e24305c',
    chapter: '數與式',
    question:
      '下列哪個函數的最小值與其他不同？\n(1) $f(x)=|x-1|+|x+3|$\n(2) $g(x)=(x+\\sqrt2)^2+(x-\\sqrt2)^2+x^2$\n(3) $p(x)=2^{x^2+2}$\n(4) $q(x)=2x+y$，其中 $x>0$，$y>0$，$xy=2$\n(5) $h(\\theta)=\\cos\\theta+\\dfrac4{\\cos\\theta}$，其中 $\\theta$ 為第一象限角',
    answer: '5',
    hasImage: false,
  },
  {
    id: '1853f34cd66',
    chapter: '數與式',
    question:
      '設 $x$ 為自然數，$y$ 為整數，且 $0\\le y\\le9$，若分數 $\\dfrac x{777}$ 可表示為循環小數 $0.\\overline{7y7}$，求 $y$。',
    answer: '4',
    hasImage: false,
  },
  {
    id: '1853f027ab6',
    chapter: '數與式',
    question:
      '已知 $x$ 是不為 0 的整數，且 $7^{\\frac1x}\\times7^{\\frac2x}\\times7^{\\frac3x}\\times7^{\\frac4x}\\times7^{\\frac5x}\\times7^{\\frac6x}$ 亦為整數，則符合條件的 $x$ 值共有幾個？\n(1) 0　(2) 2　(3) 4　(4) 6　(5) 8',
    answer: '(3)',
    hasImage: false,
  },
  {
    id: '18514fc31db',
    chapter: '數與式',
    question:
      '已知在數線上，$A$ 點的坐標為 $a$，$B$ 點的坐標為 $b$，且 $a\\ne b$。若有甲與乙兩質點分別由 $A$、$B$ 兩點相向移動，且甲質點移動的速度為乙質點移動速度的 2.5 倍。若甲與乙兩質點在 $P$ 點相遇，則 $P$ 點在數線上的坐標為下列哪一選項？\n(1) $\\dfrac{a+b}2$　(2) $\\dfrac{3a+2b}5$　(3) $\\dfrac{2a+3b}5$　(4) $\\dfrac{2a+5b}7$　(5) $\\dfrac{5a+2b}7$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '184efc72feb',
    chapter: '數與式',
    question:
      '已知 $a,m,n$ 為正實數。若函數 $f(x)=a^x+a^{-x}$ 且 $f(m)=5$，$f(n)=14$，則 $f(2m)\\times f(-\\dfrac n2)$ 之值為 $\\textcirc{5-1}\\textcirc{5-2}$。',
    answer: '92',
    hasImage: false,
  },
  {
    id: '184a78ec300',
    chapter: '數與式',
    question: '已知 $m$ 是 $\\sqrt2$ 的小數部分，求 $\\sqrt{m^2-\\dfrac1{m^2}+9}$ 之值。',
    answer: '$-1+2\\sqrt2$',
    hasImage: false,
  },
  {
    id: '184a5082fc7',
    chapter: '數與式',
    question:
      '台灣的房價普遍偏高，我們常用房價所得比與貸款負擔率來衡量某地區的房價是否合理。以下為房價所得比與貸款負擔率的定義：\n房價所得比 = 房屋總價 ÷ 家戶年可支配所得\n貸款負擔率 = 房屋價格貸款年攤還額 ÷ 家戶年可支配所得\na. 若房貸負擔率 < 30%，則表示可合理負擔\nb. 30% ≤ 房貸負擔率 < 40%，則表示房價負擔能力略低\nc. 40% ≤ 房貸負擔率 < 50%，則表示房價負擔能力偏低\nd. 房貸負擔率 ≥ 50%，則表示房價負擔能力過低\n住宅價格貸款年攤還額為以 20 年期本利平均攤還的方式，房屋貸款成數為房屋總價的 7 成，貸款年攤還額計算公式 = [貸款總額 × (1+ 年利率)$^{20}$] ÷ 20。',
    answer: '',
    hasImage: false,
  },
  {
    id: '184a50a38af',
    chapter: '數與式',
    question:
      '以新婚夫妻 (兩人) 為例 ，家戶年可支配所得為 75 萬元，若今天欲購買總價為 1000 萬的房屋，則房價所得比最接近下列哪一個選項？(單選題，3 分)\n(1) 11　(2) 11.6　(3) 12.5　(4) 13.3　(5) 14.5',
    answer: '4',
    hasImage: false,
  },
  {
    id: '184a50bd43e',
    chapter: '數與式',
    question:
      '若某銀行貸款年利率為 1.4%，請計算出此對新婚夫妻的房貸負擔率為幾 %？(四捨五入到小數點後第一位，$10^{0.00603}=1.014$，$10^{0.1206}=1.32$) (非選擇題，7 分)',
    answer: '61.6',
    hasImage: false,
  },
  {
    id: '184a50dcd51',
    chapter: '數與式',
    question:
      '若此對新婚夫妻希望控制房貸負擔率為可合理負擔與負擔能力略低的範圍內，則下列五間房屋的總價，哪些可列入考慮？(多選擇題，5 分)\n(1) 398 萬　(2) 420 萬　(3) 480 萬　(4) 606 萬　(5) 698 萬',
    answer: '1234',
    hasImage: false,
  },
  {
    id: '1848b8c160a',
    chapter: '數與式',
    question:
      '實數數線上 $A(\\sqrt{46-6\\sqrt5})$，$B(\\sqrt{14-6\\sqrt5})$，已知 $P$ 點在線段 $\\overline{AB}$ 上，且 $\\overline{AP}:\\overline{BP}=3:1$，求 $P$ 點坐標。',
    answer: '2',
    hasImage: false,
  },
  {
    id: '1848b8e1506',
    chapter: '數與式',
    question:
      '下列關於 2 的次方的運算何者正確？\n(1) $2^2+2^1=2^3$　(2) $2^{\\frac12}-2^{\\frac12}=2^0=0$\n(3) $2^{\\frac12}=2^{-1}$　(4) $(-\\sqrt2)^2=-(\\sqrt2)^2$\n(5) $2^{\\sqrt2}+2^{\\sqrt2}=2^{\\sqrt2+1}$',
    answer: '5',
    hasImage: false,
  },
  {
    id: '1848b94a1d4',
    chapter: '數與式',
    question:
      '某算命師號稱可以預測你的生日密碼，首先欲算命的人將出生年月日寫下來，這數字為 $a$，再把這數字順序倒過來寫為 $b$，首位數為 0 時自動忽略。例如 1998 年 1 月 20 日生，$a=19980120$，倒過來寫為 $02108991$，首位數的 0 自動忽略，可得 $b=2108991$。某算命師預測你的生日密碼 $|a-b|$ 為 $n$ 的倍數，此 $n$ 為何？\n(1) 11　(2) 5　(3) 9　(4) 33　(5) 6',
    answer: '(3)',
    hasImage: false,
  },
  {
    id: '1848b9cf1fb',
    chapter: '數與式',
    question:
      '已知有一個分子與分母的差為 4 的最簡分數，將其化為小數。此小數取四捨五入至小數點第 2 位的值為 0.4，求此最簡分數。',
    answer: '$\\frac37$',
    hasImage: false,
  },
  {
    id: '183d7727fb2',
    chapter: '數與式',
    question: '已知 $x$ 為正實數且滿足方程式 $2|x+2|+3|x-1|+4|x-3|=25$，則 $x=\\textcirc{11-1}$。',
    answer: '4',
    hasImage: false,
  },
  {
    id: '183d7391f35',
    chapter: '數與式',
    question:
      '有個老婆婆的二個兒子都是商人，大兒子賣雨傘，而小兒子賣草帽。雨傘賣的數量和草帽賣的數量是反比關係。如果大兒子賣出 140 把雨傘，則小兒子可以賣出 21 頂草帽。每天大兒子每賣出 1 把雨傘就會給媽媽 50 元，小兒子每賣出一頂草帽會給媽媽 30 元。則老婆婆一天最少可以得到 $\\textcirc{14-1}\\textcirc{14-2}\\textcirc{14-3}\\textcirc{14-4}$ 元',
    answer: '4200',
    hasImage: false,
  },
  {
    id: '183d7245365',
    chapter: '數與式',
    question:
      '下列哪些選項的值代入 $k$，可使得方程式 $|x+3|+|x-2|=k$ 有解？\n(1) $\\sqrt3$　(2) $4.\\overline9$　(3) $\\sqrt{17+\\sqrt{17}}$　(4) $2\\pi$　(5) 7',
    answer: '245',
    hasImage: false,
  },
  {
    id: '183d7164c81',
    chapter: '數與式',
    question:
      '請問滿足絕對值不等式 $|2x-3|\\le|x|$ 的實數 $x$ 所形成的區間，其長度為下列哪一個選項？\n(1) 1　(2) 2　(3) 3　(4) 4　(5) 5',
    answer: '2',
    hasImage: false,
  },
  {
    id: '18392cd9c64',
    chapter: '數與式',
    question:
      '若 $a(3-\\sqrt7)$ 為有理數，則 $a$ 可能為哪些種類的數？\n(A) 正整數　(B) 整數　(C) 有理數　(D) 無理數　(E) 實數',
    answer: 'BCDE',
    hasImage: false,
  },
  {
    id: '18392d0e202',
    chapter: '數與式',
    question:
      '下列哪些是無理數？\n(A) 5.2236　(B) $1.\\overline{23}$　(C) $\\sqrt2+1$　(D) $\\pi+5$　(E) $\\dfrac1{\\sqrt5-2}$',
    answer: 'CDE',
    hasImage: false,
  },
  {
    id: '18392d3d70e',
    chapter: '數與式',
    question:
      '已知 $a=5^{0.2}$，$b=5^{0.3}$，請選出正確的選項：\n(A) $a^5=5$　(B) $b^{10}=125$　(C) $a+b=5^{0.5}$　(D) $ab=\\sqrt5$　(E) $a^2=b^3$',
    answer: 'ABD',
    hasImage: false,
  },
  {
    id: '18392d6ffb5',
    chapter: '數與式',
    question:
      '已知 $a=2+\\sqrt5$ 且 $b$ 為 $a$ 的小數部分，請選出正確的選項\n(A) $a+a^{-1}=4$　(B) $b^{-1}=a$　(C) $a^2+b^2=14$　(D) $a^3-b^3=60$　(E) $b=a-4$',
    answer: 'BE',
    hasImage: false,
  },
  {
    id: '18392ea57cd',
    chapter: '數與式',
    question: '已知 $\\log a=5.26$，若 $b$ 為 $a$ 的 10 倍，求 $\\log b$。',
    answer: '6.26',
    hasImage: false,
  },
  {
    id: '18392ec653f',
    chapter: '數與式',
    question: '試化簡下列雙重根式\n(1) $\\sqrt{9+2\\sqrt{14}}$\n(2) $\\sqrt{5-\\sqrt{21}}$',
    answer: '(1) $\\sqrt7+\\sqrt2$ (2) $\\frac{\\sqrt{14}-\\sqrt6}2$',
    hasImage: false,
  },
  {
    id: '18392ed90dc',
    chapter: '數與式',
    question: '若對某數連續取兩次 $\\log$ 後會等於 3，試問這個數是幾位數？',
    answer: '1001',
    hasImage: false,
  },
  {
    id: '18392eee3ac',
    chapter: '數與式',
    question: '$\\sqrt{43-\\sqrt{27}}$ 介於整數 $n$ 與 $n-1$ 之間，求 $n$。',
    answer: '7',
    hasImage: false,
  },
  {
    id: '18392f3254c',
    chapter: '數與式',
    question:
      '放射性物質的半衰期 $T$ 定義為每經過時間 $T$，該物質的質量會衰退成原來的一半。鉛製容器中有兩種放射性物質 $A$、$B$，開始紀錄時容器中物質 $A$ 的質量為物質 $B$ 的兩倍，而 120 小時後兩種物質的質量相同。已知質量 $A$ 的半衰期為 7.5 小時，請問物質 $B$ 的半衰期為多少小時？',
    answer: '8',
    hasImage: false,
  },
  {
    id: '18392f4bb4b',
    chapter: '數與式',
    question:
      '設 $A(4)$、$B(11)$ 為數線上兩點，已知 $P$ 點在直線 $AB$ 上，且 $\\overline{AP}:\\overline{BP}=4:3$，求 $P$ 點坐標。(有兩解)',
    answer: '8 or 32',
    hasImage: false,
  },
  {
    id: '18392f6502d',
    chapter: '數與式',
    question: '設 $x,y$ 為實數，若 $25.7^x=0.0257^y=10000$，求 $\\dfrac1x-\\dfrac1y$。',
    answer: '$\\frac34$',
    hasImage: false,
  },
  {
    id: '18392f94459',
    chapter: '數與式',
    question:
      '如圖，一動物園欲將園區重新規劃成六個長方形的區域，設計師以美化的石牆 (實線部分) 分隔任意兩相鄰的長方形，並以鐵欄杆 (虛線部分) 隔離遊客。如果石牆共 1200 公尺 (不考慮高度與厚度)，而鐵欄杆的數量十分充足，試求鐵欄杆圍成的長方形最大面積。',
    answer: '180000',
    hasImage: true,
  },
  {
    id: '18392fa9861',
    chapter: '數與式',
    question: '求解 $\\sqrt2=1+\\dfrac1{2+\\dfrac1{2+x}}$。',
    answer: '$\\sqrt2-1$',
    hasImage: false,
  },
  {
    id: '18392fbcf43',
    chapter: '數與式',
    question: '求解不等式 $|x-1|+|x-2|\\ge4$。',
    answer: '$x\\le-\\frac12$ or $x\\ge\\frac72$',
    hasImage: false,
  },
  {
    id: '18392fd3e82',
    chapter: '數與式',
    question: '若 $a=0.2\\overline{75}+\\dfrac{18}{55}$，求將 $a$ 展開後小數點後的第 2000 位數字。',
    answer: '0',
    hasImage: false,
  },
  {
    id: '18392fe79cb',
    chapter: '數與式',
    question:
      '試比較下列實數大小：$a=\\sqrt{13}+\\sqrt5$，$b=\\sqrt{11}+\\sqrt7$，$c=\\sqrt{15}+\\sqrt3$。',
    answer: 'b>a>c',
    hasImage: false,
  },
  {
    id: '18392ff6952',
    chapter: '數與式',
    question: '$|ax-1|\\le b$ 之解為 $-5\\le x\\le3$，求 $a,b$。',
    answer: '-1；4',
    hasImage: false,
  },
  {
    id: '1839207686d',
    chapter: '數與式',
    question: '估計 $\\sqrt{50+\\sqrt{1230}}$ 在哪兩個整數之間？',
    answer: '9~10',
    hasImage: false,
  },
  {
    id: '1839208efa0',
    chapter: '數與式',
    question: '若 $a,b$ 為有理數且 $\\sqrt{a+15\\sqrt2}=5+b\\sqrt2$，求 $a,b$。',
    answer: '$\\frac{59}2$；$\\frac32$',
    hasImage: false,
  },
  {
    id: '183920ae2f0',
    chapter: '數與式',
    question: '已知實數 $a,b$ 滿足 $9a^2+16b^2=32$，求乘積 $ab$ 的最大值及最小值。',
    answer: '$\\frac43$；$-\\frac43$',
    hasImage: false,
  },
  {
    id: '183920cb7eb',
    chapter: '數與式',
    question:
      '數線上有 $A(a)$、$B(b)$、$C(c)$、$D(d)$ 四點，已知 $\\overline{AB}=1$、$\\overline{CD}=2$、$\\overline{AC}=5$，求 $|b-d|$ 的最大值。',
    answer: '8',
    hasImage: false,
  },
  {
    id: '183920dbb81',
    chapter: '數與式',
    question: '已知 $\\log2\\approx0.3010$，求 $\\log 4$、$\\log5$。',
    answer: '0.6020；0.6990',
    hasImage: false,
  },
  {
    id: '183920eae12',
    chapter: '數與式',
    question:
      '求滿足 $(\\dfrac32)^n>10000$ 的最小整數 $n$。\n($\\log2\\approx0.3010$、$\\log3\\approx0.4771$)',
    answer: '23',
    hasImage: false,
  },
  {
    id: '18391d37c69',
    chapter: '數與式',
    question: '設 $x=\\sqrt{5-\\sqrt{24}}$，求 $x^3+\\dfrac1{x^3}$。 ',
    answer: '$18\\sqrt3$',
    hasImage: false,
  },
  {
    id: '18391d49044',
    chapter: '數與式',
    question: '設 $x>0$，$y>0$，已知 $\\dfrac1x+\\dfrac2y=1$，求 $xy$ 的最小值。',
    answer: '8',
    hasImage: false,
  },
  {
    id: '18391d6d3dc',
    chapter: '數與式',
    question:
      '已知數線上有相異四點 $A(-2)$，$B(x)$，$C(5)$，$D(3x-1)$，且滿足 $\\overline{AB}+2\\overline{CD}=6$，求 $x$。',
    answer: '$\\frac85$ or $\\frac{16}7$',
    hasImage: false,
  },
  {
    id: '18391d93e74',
    chapter: '數與式',
    question: '設 $27^x=25^y=225$，求 $\\dfrac2x+\\dfrac3y$。',
    answer: '3',
    hasImage: false,
  },
  {
    id: '18391dabb4f',
    chapter: '數與式',
    question: '已知 $\\log a=-2.546$，$\\log b=-4.805$，$\\log c=-10.351$，求 $\\dfrac{ab}c$。',
    answer: '1000',
    hasImage: false,
  },
  {
    id: '1836aec7436',
    chapter: '數與式',
    question:
      '數線上 $A$、$B$ 兩點的坐標分別為 $0.\\overline{26}$、$0.3\\overline{27}$，$P$ 在 $A$、$B$ 之間，若 $\\overline{AP}:\\overline{BP}=5:9$，求 $P$。',
    answer: '$\\frac27$',
    hasImage: false,
  },
  {
    id: '1836aeea0ea',
    chapter: '數與式',
    question: '求解不等式 $\\begin{cases}|2x-1|<9\\\\|x+2|\\ge3\\end{cases}$。',
    answer: '$1\\le x<5$',
    hasImage: false,
  },
  {
    id: '1836aefd793',
    chapter: '數與式',
    question: '已知 $x-\\dfrac1x=4$，求：(1) $x^2+\\dfrac1{x^2}$ (2) $x^3-\\dfrac1{x^3}$',
    answer: '(1) 18 (2) 76',
    hasImage: false,
  },
  {
    id: '1836af129de',
    chapter: '數與式',
    question: '若 $\\sqrt{41-12\\sqrt5}$ 的整數部分為 $a$，小數部分為 $b$，$0\\le b<1$，求 $b$。',
    answer: '$3-\\sqrt5$',
    hasImage: false,
  },
  {
    id: '1836af32d83',
    chapter: '數與式',
    question: '設 $a,b>0$，且 $3a+2b=24$，求 $ab$ 的最大值及此時的 $(a,b)$。',
    answer: '24; (4,6)',
    hasImage: false,
  },
  {
    id: '1836af5aef1',
    chapter: '數與式',
    question: '比較 $a=\\sqrt5+\\sqrt{10}$，$b=\\sqrt6+3$，$c=\\sqrt{13}+\\sqrt2$ 的大小順序。',
    answer: '$b>a>c$',
    hasImage: false,
  },
  {
    id: '1836af73df6',
    chapter: '數與式',
    question: '求解不等式 $|1-x|-2x\\le3$。',
    answer: '$x\\ge-\\frac23$',
    hasImage: false,
  },
  {
    id: '1836af84a3d',
    chapter: '數與式',
    question: '若 $|ax+5|\\le b$ 之解為 $-1\\le x\\le6$，求數對 $(a,b)$。',
    answer: '(-2,7)',
    hasImage: false,
  },
  {
    id: '1836afa7324',
    chapter: '數與式',
    question: '若 $\\sqrt{11+4\\sqrt7}$ 的整數部分為 $a$，小數部分為 $b$，求 $\\dfrac{7a}{a+2b}$。',
    answer: '$2\\sqrt7$',
    hasImage: false,
  },
  {
    id: '1836b009b6e',
    chapter: '數與式',
    question: '試求 $(\\sqrt3)^{-2}\\cdot[(\\sqrt3)^3]^{-0.5}\\cdot(\\sqrt3)^{\\frac{11}2}$。',
    answer: '3',
    hasImage: false,
  },
  {
    id: '1836aff69b0',
    chapter: '數與式',
    question: '求 (1) $10^{2+\\log1.08}$ (2) $(\\sqrt{10})^{2-\\log16}$',
    answer: '(1) 108 (2) $\\frac52$',
    hasImage: false,
  },
  {
    id: '18321761d3e',
    chapter: '數與式',
    question: '若 $a^{2x}=1+\\sqrt2$，求 $\\dfrac{a^{3x}+a^{-3x}}{a^x+a^{-x}}$。',
    answer: '$-1+2\\sqrt2$',
    hasImage: false,
  },
  {
    id: '18321793206',
    chapter: '數與式',
    question: '若 $16^x=5^y=\\sqrt{10}$，則 $\\dfrac1x+\\dfrac4y$。',
    answer: '8',
    hasImage: false,
  },
  {
    id: '183217c06f5',
    chapter: '數與式',
    question: '若 $575^x=125$，$23^y=25$，則 $\\dfrac3x-\\dfrac2y$',
    answer: '2',
    hasImage: false,
  },
  {
    id: '18321843bb2',
    chapter: '數與式',
    question:
      '設 $a=2.1\\times10^{35}$，$b=7.2\\times10^{21}$，$c=5.4\\times10^{47}$，求 $\\dfrac{a^2b}c$ 及 $\\sqrt{3bc}$。\n(用科學記號表示)',
    answer: '$5.88\\times10^{44}$；$1.08\\times10^{35}$',
    hasImage: false,
  },
  {
    id: '183218ab274',
    chapter: '數與式',
    question:
      '「莫耳數」是計算個數的單位，一莫耳相當於 $6\\times10^{23}$ 個，已知一莫耳的水分子的體積為 18 立方公分，請問一座游泳池長為 50 公尺，寬為 30 公尺，水深為 1.5 公尺，池內共有多少莫耳的水分子？多少個水分子？(用科學記號表示)',
    answer: '$1.25\\times10^8$；$7.5\\times10^{31}$',
    hasImage: false,
  },
  {
    id: '183218c74ee',
    chapter: '數與式',
    question:
      '求：(1) $\\log100$ (2) $\\log\\dfrac1{10000}$\n(3) $\\log\\sqrt{10}$ (4) $\\log1000^{2.1}$',
    answer: '2；-4；$\\frac12$；6.3',
    hasImage: false,
  },
  {
    id: '183218e54eb',
    chapter: '數與式',
    question: '求：(1) $10^{\\log100}$ (2) $100^{\\log7}$ (3) $1000^{\\log2}$',
    answer: '100；49；8',
    hasImage: false,
  },
  {
    id: '183218f8575',
    chapter: '數與式',
    question: '求滿足 $2^n>100^{10}$ 的最小整數 $n$。\n($\\log2\\approx0.3010$)',
    answer: '67',
    hasImage: false,
  },
  {
    id: '18321931de0',
    chapter: '數與式',
    question:
      '在一個城市中，一旦有人得到某種傳染病，若沒有採取任何防疫措施，則全體市民在經過 $d$ 日後得到該傳染病的人數比率為 $(1-10^{-0.09d})\\times10\\%$，請問至少經過幾日 (取整數)，就會有 $90\\%$ 的市民得病？',
    answer: '12',
    hasImage: false,
  },
  {
    id: '18321960918',
    chapter: '數與式',
    question:
      '芮氏規模可量度地震強度，設 $I$ 為地震時所釋放的能量強度，芮氏規模 $r$ 定義為 $r=\\log I$。已知有兩次地震的芮氏規模分別為 7.3 和 6.4，就釋放能量的強度而言，芮氏規模 7.3 的地震約為芮氏規模 6.4 的多少倍？($\\log2\\approx0.3$)',
    answer: '8',
    hasImage: false,
  },
  {
    id: '1832198eac0',
    chapter: '數與式',
    question:
      '水溶液的氫離子濃度為 $M$，則酸鹼度 pH 值的定義為 $\\text{pH}=-\\log M$。若可樂的氫離子濃度為 $4\\times10^{-3}$，求其 pH 值。',
    answer: '2.4',
    hasImage: false,
  },
  {
    id: '183219d5ac0',
    chapter: '數與式',
    question:
      '設某支股票自今日起每天以 3% 的幅度下跌 (即每日的收盤價為前一日收盤價的 0.97 倍)，則至少經過幾日後，該股票的股價會跌超過今日股價的一半？\n($\\log0.97\\approx-0.0132$，$\\log2\\approx0.3$)',
    answer: '23',
    hasImage: false,
  },
  {
    id: '182f2ddcf59',
    chapter: '數與式',
    question: '解 $|x-1|+|x-2|=3$。',
    answer: '$0\\lor3$',
    hasImage: false,
  },
  {
    id: '182f2e1e32b',
    chapter: '數與式',
    question: '(1) 求解不等式 $|2x-5|\\le9$ 的範圍\n(2) 求解不等式 $|x-5|>3$ 的範圍',
    answer: '(1) $-2\\le x\\le7$ (2) $x>8\\lor x<2$',
    hasImage: false,
  },
  {
    id: '182f2e27bf1',
    chapter: '數與式',
    question: '解 $3<|2x+1|\\le7$。',
    answer: '$-4\\le x<-2\\lor1<x\\le3$',
    hasImage: false,
  },
  {
    id: '182f2e67906',
    chapter: '數與式',
    question: '解 $2|x+1|<x+7$。',
    answer: '$-3<x<5$',
    hasImage: false,
  },
  {
    id: '182f2e79837',
    chapter: '數與式',
    question: '滿足 $|ax+1|\\le b$ 的所有實數 $x$，其範圍為 $-1\\le x\\le5$，求 $a,b$。',
    answer: '$-\\frac12$；$\\frac32$',
    hasImage: false,
  },
  {
    id: '182f2ece54f',
    chapter: '數與式',
    question: '設 $a,b$ 為實數，若 $|x-a|<3$ 的解為 $-4<x<b$，求 $a,b$。',
    answer: '-1；2',
    hasImage: false,
  },
  {
    id: '182f2edd2db',
    chapter: '數與式',
    question:
      '若聯立不等式 $\\begin{cases}|x-a|<2\\\\|x-b|\\le3\\end{cases}$ 的解為 $6<x\\le7$，求 $a,b$。',
    answer: '8；4',
    hasImage: false,
  },
  {
    id: '182f2fbfe26',
    chapter: '數與式',
    question: '求 $0.25^{2.5}$ 及 $0.25^{-2.5}$。',
    answer: '$\\frac1{32}$；32',
    hasImage: false,
  },
  {
    id: '182f2fd3fcf',
    chapter: '數與式',
    question:
      '化簡 $(2^{\\frac52}+3^{\\frac32})^{\\frac72}\\cdot(2^{\\frac52}-3^{\\frac32})^{\\frac72}$。',
    answer: '$125\\sqrt5$',
    hasImage: false,
  },
  {
    id: '182f304f91e',
    chapter: '數與式',
    question:
      '化簡 $(\\dfrac{81}{16})^{-0.25}\\cdot(\\dfrac49)^{-\\frac12}\\cdot(0.25)^{-1.5}\\cdot(\\dfrac{27}8)^{-\\frac23}$。',
    answer: '$\\frac{32}9$',
    hasImage: false,
  },
  {
    id: '182f301404a',
    chapter: '數與式',
    question:
      '設 $a>0$ 且 $a\\ne1$，化簡 $\\sqrt[3]{\\sqrt[6]{a^5}}\\cdot(\\sqrt{\\sqrt[12]{a^7}})^4=a^x$，求 $x$。',
    answer: '$\\frac{13}9$',
    hasImage: false,
  },
  {
    id: '182f3037484',
    chapter: '數與式',
    question:
      '化簡 $(124+22\\sqrt3)^{\\frac12}-27^{\\frac16}-16^{\\frac34}-2(8^{-\\frac23})^{-1}+2^{\\frac15}(4^{-\\frac25})^{-1}$。',
    answer: '-3',
    hasImage: false,
  },
  {
    id: '182f1ca5587',
    chapter: '數與式',
    question:
      '設正整數 $m,n$ 滿足 $2^m\\times4^n=1024$，則 $m\\times n$ 的最大值為下列何者？\n(1) $\\dfrac{25}2$　　(2) 12　　(3) $\\dfrac{23}2$　　(4) 10　　(5) 8',
    answer: '2',
    hasImage: false,
  },
  {
    id: '182f21240b6',
    chapter: '數與式',
    question:
      '某路口的「閃黃燈秒數」是以公式\n$$\\frac v{10}+\\frac{250}v+1$$\n來規範，其中 $v$ (公里/小時) 為該路段的最高速限。當最高速限定為 $\\textcirc{14-1}\\textcirc{14-2}$ (公里/小時) 時，「閃黃燈秒數」有最小值。',
    answer: '50',
    hasImage: false,
  },
  {
    id: '182ddcea560',
    chapter: '數與式',
    question:
      '化簡：(1) $\\dfrac{3-\\sqrt2}{\\sqrt2+1}$ (2) $\\dfrac{15}{7+2\\sqrt3}$\n(3) $\\dfrac4{\\sqrt5-\\sqrt3}+\\dfrac{10}{\\sqrt5+\\sqrt3}$',
    answer: '(1) $-5+4\\sqrt2$ (2) $6\\sqrt3-3\\sqrt7$ (3) $7\\sqrt5-3\\sqrt3$',
    hasImage: false,
  },
  {
    id: '182ddd11d2a',
    chapter: '數與式',
    question:
      '求：(1) $(\\sqrt3+\\sqrt2)^{100}(\\sqrt3-\\sqrt2)^{102}$\n(2) $\\dfrac1{\\sqrt4+\\sqrt5}+\\dfrac2{\\sqrt5+\\sqrt7}+\\dfrac3{\\sqrt7+\\sqrt{10}}$$+\\dfrac6{\\sqrt{10}+\\sqrt{16}}$',
    answer: '(1) $5-2\\sqrt6$ (2) 2',
    hasImage: false,
  },
  {
    id: '182ddd25c5a',
    chapter: '數與式',
    question: '化簡：(1) $\\sqrt{11-4\\sqrt7}$\n(2) $\\sqrt{2-\\sqrt3}-\\sqrt{2+\\sqrt3}$',
    answer: '(1) $\\sqrt7-2$ (2) $-\\sqrt2$',
    hasImage: false,
  },
  {
    id: '182ddd3e6a9',
    chapter: '數與式',
    question: '若正數 $a$ 的小數部分為 $b$，且 $a^2+b=15$，求 $a$。',
    answer: '$\\dfrac{\\sqrt{73}-1}2$',
    hasImage: false,
  },
  {
    id: '182ddd52fe4',
    chapter: '數與式',
    question: '若 $x,y$ 為有理數，且 $(x+2\\sqrt3)(2-\\sqrt3)=6-y\\sqrt3$，求數對 $(a,b)$。',
    answer: '(6,2)',
    hasImage: false,
  },
  {
    id: '182ddd7f578',
    chapter: '數與式',
    question: '所有滿足 $ab=60$ 的正數 $a$ 與 $b$，求 $3a+5b$ 的最小值，及此時的 $a,b$。',
    answer: '60；10；6',
    hasImage: false,
  },
  {
    id: '182ddd8fae5',
    chapter: '數與式',
    question: '設 $x$ 為正數，求 $49x+\\dfrac9x$ 的最小值，及此時的 $x$。',
    answer: '42；$\\frac37$',
    hasImage: false,
  },
  {
    id: '182ddd9dad9',
    chapter: '數與式',
    question: '化簡 $|\\sqrt1-\\sqrt3|+|\\sqrt3-\\sqrt5|$$+|\\sqrt5-\\sqrt7|+|\\sqrt7-\\sqrt9|$',
    answer: '2',
    hasImage: false,
  },
  {
    id: '182dddaff7d',
    chapter: '數與式',
    question: '化簡 $|\\sqrt2+\\sqrt3-5|+|1-\\sqrt2|$$+|\\sqrt3+\\sqrt7|+|4-\\sqrt7|$',
    answer: '8',
    hasImage: false,
  },
  {
    id: '182de83a9d8',
    chapter: '數與式',
    question: '解 $|2x+3|=7$。',
    answer: '2 or -5',
    hasImage: false,
  },
  {
    id: '182de84497d',
    chapter: '數與式',
    question: '解 $||x+1|-3|=2$。',
    answer: '4 or -6 or 0 or -2',
    hasImage: false,
  },
  {
    id: '182de853d1a',
    chapter: '數與式',
    question: '解 $|x+2|=2x-7$。',
    answer: '9',
    hasImage: false,
  },
  {
    id: '182af18b972',
    chapter: '數與式',
    question: '因式分解 $8x^3-27y^3$',
    answer: '$(2x-3y)(4x^2+6xy+9y^2)$',
    hasImage: false,
  },
  {
    id: '182af19f91e',
    chapter: '數與式',
    question: '若 $a+b=7$，$a^2+b^2=39$，求 $ab$、$a^3+b^3$。',
    answer: '5；238',
    hasImage: false,
  },
  {
    id: '182af1c1c57',
    chapter: '數與式',
    question: '若 $a-b=2$，$ab=1$，求：\n(1) $a^2+b^2$ (2) $a^4+b^4$ (3) $a^6+b^6$。',
    answer: '(1) 6 (2) 34 (3) 198',
    hasImage: false,
  },
  {
    id: '182af1d6421',
    chapter: '數與式',
    question:
      '若 $x-\\dfrac1x=4$，求：\n(1) $x^2+\\dfrac1{x^2}$ (2) $x^3-\\dfrac1{x^3}$ (3) $x^4+\\dfrac1{x^4}$',
    answer: '(1) 18 (2) 76 (3) 322',
    hasImage: false,
  },
  {
    id: '182af24a857',
    chapter: '數與式',
    question:
      '將下列循環小數化成最簡分數：\n(1) $0.\\overline{25}$ (2) $1.3\\overline{24}$ (3) $3.21\\overline5$',
    answer: '(1) $\\frac{25}{99}$ (2) $\\frac{437}{330}$ (3) $\\frac{1447}{450}$',
    hasImage: false,
  },
  {
    id: '182af2597b0',
    chapter: '數與式',
    question: '化簡 $\\sqrt{1.\\overline7}\\times\\sqrt{7.\\overline7+8.\\overline8}$',
    answer: '$\\frac{20\\sqrt6}9$',
    hasImage: false,
  },
  {
    id: '182af269992',
    chapter: '數與式',
    question:
      '下列哪些數字可以化成無限循環小數？\n(1) $\\dfrac{27}8$ (2) $\\dfrac8{27}$ (3) $\\dfrac{25}{70}$ (4) $\\dfrac{15}{12}$ (5) $\\sqrt2$',
    answer: '(2)(3)',
    hasImage: false,
  },
  {
    id: '182af289888',
    chapter: '數與式',
    question:
      '數線上點 $A(1.\\overline2)$、$B(7.\\overline3)$，若點 $P(x)$ 在 $A$、$B$ 之間且 $\\overline{PA}:\\overline{PB}=3:2$，求 $x$。',
    answer: '$\\frac{44}9$',
    hasImage: false,
  },
  {
    id: '182af2aaf39',
    chapter: '數與式',
    question:
      '數線上，已知 $A(3)$、$B(11)$，若點 $P(x)$ 滿足 $\\overline{PA}:\\overline{PB}=2:5$，求 $P$ 點坐標。',
    answer: '$\\frac{37}7\\lor-\\frac73$',
    hasImage: false,
  },
  {
    id: '182af2bc169',
    chapter: '數與式',
    question:
      '數線上有 $A(x-3)$、$B(2x+7)$ 兩點，$P(5)$ 在 $A$、$B$ 之間且 $\\overline{PA}:\\overline{PB}=3:4$，求 $x$。',
    answer: '$\\frac{13}5$',
    hasImage: false,
  },
  {
    id: '182af2d8395',
    chapter: '數與式',
    question:
      '數線上有 $A(x)$ 與 $B(y)$ 兩點，若 $P(1)$ 在 $\\overline{AB}$ 內且 $\\overline{PA}:\\overline{PB}=2:3$，$Q(-13)$ 在 $\\overline{AB}$ 外且 $\\overline{QA}:\\overline{QB}=1:2$，求 $\\overline{AB}$。',
    answer: '10',
    hasImage: false,
  },
  {
    id: '182af2e8d4e',
    chapter: '數與式',
    question:
      '數線上有 $A(a)$ 與 $B(b)$ 兩點，$a<b$，另有一點 $P(\\dfrac{3a+4b}7)$，若 $\\overline{PA}=12$，求 $\\overline{PB}$。',
    answer: '9',
    hasImage: false,
  },
  {
    id: '1825344bd5c',
    chapter: '數與式',
    question:
      '已知 $x<y$，且 $a=\\dfrac{x+2y}3$，$b=\\dfrac{2x+y}3$，$c=\\dfrac{3x+2y}5$，$d=\\dfrac{7x-3y}4$，請比較 $a,b,c,d$ 的大小。',
    answer: '$d<b<c<a$',
    hasImage: false,
  },
  {
    id: '1825348f6f0',
    chapter: '數與式',
    question:
      '已知 $x<y$，且 $a=\\dfrac{x+y}2$，$b=\\dfrac{x+3y}4$，$c=\\dfrac{5x+y}6$，請選出下列哪些選項為真。\n(1) $x<a$　(2) $a<b$　(3) $b<c$\n(4) $a<c$　(5) $c<y$',
    answer: '(1)(2)(5)',
    hasImage: false,
  },
  {
    id: '182a7b3e360',
    chapter: '數與式',
    question:
      '化簡：(1) $\\sqrt{12-2\\sqrt{35}}$\n(2) $\\sqrt{8+4\\sqrt3}$　　(3) $\\sqrt{26-\\sqrt{192}}$',
    answer: '(1) $\\sqrt7-\\sqrt5$ (2) $\\sqrt6+\\sqrt2$ (3) $2\\sqrt6-\\sqrt2$',
    hasImage: false,
  },
  {
    id: '182a7b689e2',
    chapter: '數與式',
    question:
      '化簡：(1) $\\sqrt{8-2\\sqrt7}$\n(2) $\\sqrt{11+6\\sqrt2}$　　(3) $\\sqrt{11-\\sqrt{72}}$',
    answer: '(1) $\\sqrt7-1$ (2) $3+\\sqrt2$ (3) $3-\\sqrt2$',
    hasImage: false,
  },
  {
    id: '18253dc12a0',
    chapter: '數與式',
    question: '若 $\\sqrt{41+12\\sqrt5}$ 的整數部分為 $a$，小數部分為 $b$，求 $a+\\dfrac1b$。',
    answer: '$10+\\sqrt5$',
    hasImage: false,
  },
  {
    id: '182547b6289',
    chapter: '數與式',
    question:
      '若 $\\sqrt{11+\\sqrt{112}}$ 的整數部分為 $a$，小數部分為 $b$，求 $\\dfrac{2a+b+1}{a-b-6}$。',
    answer: '$-\\sqrt7-1$',
    hasImage: false,
  },
  {
    id: '18254860518',
    chapter: '數與式',
    question:
      '請選出正確的選項。\n(1) 若 $a,b\\notin\\mathbb Q$，則 $a+b$ 必為無理數\n(2) 若 $a\\in\\mathbb Q$，$b\\notin\\mathbb Q$，則 $a+b$ 必為無理數\n(3) 若 $a\\in\\mathbb Q$，$b\\notin\\mathbb Q$，則 $ab$ 必為無理數\n(4) $a,b\\notin\\mathbb Q$，$c,d\\in\\mathbb Q$，若 $a+c=b+d$，則 $a=b$ 且 $c=d$\n(5) $a,b,c,d\\in\\mathbb Q$，若 $a+b\\sqrt2=c+d\\sqrt2$，則 $a=c$ 且 $b=d$',
    answer: '(2)(5)',
    hasImage: false,
  },
  {
    id: '182553ac6ad',
    chapter: '數與式',
    question:
      '若 $a,b$ 為正有理數，$x,y$ 為正無理數，請選出下列各選項何者為真。\n(1) $\\sqrt a+x$ 必為無理數\n(2) $x+y$ 有可能是有理數\n(3) $\\dfrac ax$ 必為無理數\n(4) $\\sqrt{xy}$ 必為無理數\n(5) $x\\sqrt y$ 有可能是有理數',
    answer: '(2)(3)(5)',
    hasImage: false,
  },
  {
    id: '182553cc452',
    chapter: '數與式',
    question: '設 $a=\\sqrt3-\\sqrt{11}$，$b=2-\\sqrt{10}$，$c=\\sqrt5-3$，試比較 $a,b,c$ 的大小。',
    answer: '$a<b<c$',
    hasImage: false,
  },
  {
    id: '182553d9163',
    chapter: '數與式',
    question: '設 $a=\\sqrt7+\\sqrt2$，$b=\\sqrt6+\\sqrt3$，$c=\\sqrt5+2$，試比較 $a,b,c$ 的大小。',
    answer: '$a<b<c$',
    hasImage: false,
  },
  {
    id: '1825540969f',
    chapter: '數與式',
    question: '設 $a>0$，$b>0$，且 $3a+4b=10$，求 $ab$ 的最大值及此時的 $(a,b)$。',
    answer: '$\\frac{25}{12}$；$(\\frac53,\\frac54)$',
    hasImage: false,
  },
  {
    id: '1825544e283',
    chapter: '數與式',
    question:
      '半圓的直徑為 6，內接矩形 $ABCD$，其中 $\\overline{AB}$ 落在直徑上，如圖，試求矩形 $ABCD$ 的最大面積。',
    answer: '9',
    hasImage: true,
    style: { width: '4cm' },
  },
  {
    id: '1825547733e',
    chapter: '數與式',
    question: '若 $a,b$ 為正數，且 $a+2b=8$，求 $ab$ 的最大值及此時的 $(a,b)$。',
    answer: '8；(4,2)',
    hasImage: false,
  },
  {
    id: '182554b378e',
    chapter: '數與式',
    question:
      '用 24 公尺的鐵絲圍出一個六邊形，如圖(虛線部分不需圍起)，此區域若按照虛線可分為面積相等的五塊矩形，試求圍出的六邊形之最大面積。',
    answer: '30 平方公尺',
    hasImage: true,
  },
  {
    id: '1825551e13b',
    chapter: '數與式',
    question:
      '已知 $x,y$ 為實數，滿足 $-2\\le x\\le3$，$1\\le y\\le2$，在這些範圍限制之下，請問：\n(1) $2x+3y$ 的最大值與最小值\n(2) $x-y$ 的最大值與最小值\n(3) $xy$ 的最大值與最小值',
    answer: '(1) 12；-1 (2) 2；-4 (2) 6；-4',
    hasImage: false,
  },
  {
    id: '182555363da',
    chapter: '數與式',
    question:
      '若 $x,y$ 滿足 $2\\le x\\le4$，$1\\le y\\le5$，試求：\n(1) $2x-3y$ 的最大值與最小值\n(2) $xy$ 的最大值與最小值',
    answer: '(1) 5；-11 (2) 20；2',
    hasImage: false,
  },
  {
    id: '18255547db9',
    chapter: '數與式',
    question: '試解 $|2x-1|=5$，求 $x$。',
    answer: '$3\\lor-2$',
    hasImage: false,
  },
  {
    id: '1825555eef4',
    chapter: '數與式',
    question: '設 $x,y$ 為整數，滿足 $2|x-3|+3|y-5|=10$，求數對 $(x,y)$ 共有幾組解。',
    answer: '6',
    hasImage: false,
  },
  {
    id: '1825558ad4b',
    chapter: '數與式',
    question: '試解下列各式：\n(1) $|3x+4|=5$　(2) $2|2x-1|+5=11$',
    answer: '(1) $\\frac13\\lor-3$ (2) $2\\lor-1$',
    hasImage: false,
  },
  {
    id: '1825559febb',
    chapter: '數與式',
    question: '設 $a,b,c$ 為整數，滿足 $|a|+2|b+3|+3|c-2|=4$ 的序組共有幾組。',
    answer: '12',
    hasImage: false,
  },
  {
    id: '182555b6ded',
    chapter: '數與式',
    question: '試求 $|x-7|+|x-1|\\le18$ 之解。',
    answer: '$-5\\le x\\le13$',
    hasImage: false,
  },
  {
    id: '182555c1f06',
    chapter: '數與式',
    question: '試求 $|x+5|+|x-7|\\le20$ 之解。',
    answer: '$-9\\le x\\le11$',
    hasImage: false,
  },
  {
    id: '182555dea8b',
    chapter: '數與式',
    question: '若不等式 $|ax+7|\\le b$ 的解為 $-1\\le x\\le5$，試求數對 $(a,b)$。',
    answer: '$(-\\frac72,\\frac{21}2)$',
    hasImage: false,
  },
  {
    id: '1825560c2b0',
    chapter: '數與式',
    question:
      '(1) 若 $|ax+6|\\le b$ 的解為 $1\\le x\\le5$，試求數對 $(a,b)$\n(2) 若 $|3x+a|\\ge b$ 的解為 $x\\le5$ 或 $x\\ge11$，試求數對 $(a,b)$',
    answer: '(1) (-2,4) (2) (-24,9)',
    hasImage: false,
  },
  {
    id: '18255647dfe',
    chapter: '數與式',
    question:
      '化簡下列各指數式為最簡分數：\n(1) $2^{-3}$　(2) $16^{\\frac12}$　(3) $8^{-\\frac13}$　(4) $(\\dfrac{27}8)^{-\\frac23}$',
    answer: '(1) $\\frac18$ (2) 4 (3) $\\frac12$ (4) $\\frac49$',
    hasImage: false,
  },
  {
    id: '182556659e7',
    chapter: '數與式',
    question:
      '化簡求值：\n(1) $3^{-2}$　(2) $64^{\\frac13}$　(3) $(\\dfrac{16}{81})^{\\frac14}$　(4) $(\\dfrac{243}{32})^{-\\frac35}$',
    answer: '(1) $\\frac19$ (2) 4 (3) $\\frac23$ (4) $\\frac8{27}$ ',
    hasImage: false,
  },
  {
    id: '182556a77b3',
    chapter: '數與式',
    question:
      '設 $\\sqrt[3]4\\cdot\\sqrt[4]8\\cdot\\sqrt[5]{16}=\\sqrt[a]{2^{b}}$，其中 $a$ 與 $b$ 為互質的正整數，求數對 $(a,b)$。',
    answer: '(60,133)',
    hasImage: false,
  },
  {
    id: '182556e3786',
    chapter: '數與式',
    question:
      '設 $a=(2\\dfrac79)^{0.5}$，$b=\\dfrac{10^{1+\\sqrt2}}{0.1^{1-\\sqrt2}}$，$c=(3^{\\sqrt2})^{\\frac{\\sqrt2}2}$，$d=(\\sqrt5+1)^{\\frac32}(\\sqrt5-1)^{\\frac32}$，求 $a+b+c+d$',
    answer: '110',
    hasImage: false,
  },
  {
    id: '1825570630b',
    chapter: '數與式',
    question: '若 $67^x=27$，$603^y=81$，求 $\\dfrac3x-\\dfrac4y$。',
    answer: '-2',
    hasImage: false,
  },
  {
    id: '1825572bb3b',
    chapter: '數與式',
    question: '設 $2^x=5^y=3$，求：(1) $3^{\\frac4x}$　(2) $3^{\\frac2x-\\frac3y}$。',
    answer: '(1) 16 (2) $\\frac4{125}$',
    hasImage: false,
  },
  {
    id: '18255741868',
    chapter: '數與式',
    question: '若 $11.2^a=0.0112^b=10$，求 $\\dfrac1a-\\dfrac1b$。',
    answer: '3',
    hasImage: false,
  },
  {
    id: '18252d8edcd',
    chapter: '數與式',
    question: '若 $a^{2x}=3$，求 $ \\dfrac{a^x-a^{-x}}{a^{3x}+a^{-5x}}$。',
    answer: '$\\frac9{41}$',
    hasImage: false,
  },
  {
    id: '1825338a7a6',
    chapter: '數與式',
    question: '設 $3^x-3^{-x}=4$，求 $27^x-27^{-x}$。',
    answer: '76',
    hasImage: false,
  },
  {
    id: '182533ad2ff',
    chapter: '數與式',
    question: '若 $a^{2x}=2$，求 $\\dfrac{a^{x}+a^{-x}}{a^{3x}-a^{-3x}}$。',
    answer: '$\\frac67$',
    hasImage: false,
  },
  {
    id: '182533ba210',
    chapter: '數與式',
    question: '若 $2^x+2^{-x}=10$，求：\n(1) $4^x+4^{-x}$　(2) $8^x+8^{-x}$',
    answer: '(1) 98 (2) 970',
    hasImage: false,
  },
  {
    id: '182533d8fe3',
    chapter: '數與式',
    question:
      '有天文學家估計宇宙的年齡約 200 億年，請問 200 億年換算成秒為？(以科學記號表示，取三位有效數字，一年為 365 天) 請問該數字是幾位數字？最高數字為何？',
    answer: '$6.31\\times10^{17}$ 秒；18；6',
    hasImage: false,
  },
  {
    id: '182533e6b13',
    chapter: '數與式',
    question:
      '在顯微鏡下測得一個球菌的直徑是 0.6 微米 $(\\mu m)$，已知 $1\\mu m=10^{-6}m$，球體的體積公式是 $V=\\frac43\\pi r^3$，其中 $r$ 為球半徑，$\\pi\\approx3.14$。請問此球菌的體積多少立方公尺？(以科學記號表示，取四位有效數字) 此數字在小數點後第幾位出現不為 0 的數字？該數字為何？',
    answer: '$1.130\\times10^{-19}$ 立方公尺；19；1',
    hasImage: false,
  },
  {
    id: '1825340b341',
    chapter: '數與式',
    question:
      '已知 $a=6\\times10^{-7}$、$b=9\\times10^{-10}$、$c=3.2\\times10^{-16}$，求：\n(1) $ab-c$　(2) $abc$ (均以科學記號表示)',
    answer: '(1) $2.2\\times10^{-16}$ (2) $1.728\\times10^{-31}$',
    hasImage: false,
  },
  {
    id: '18253420bea',
    chapter: '數與式',
    question:
      '銀河系光年直徑約為 150000 光年 (光每秒走 $3\\times10^8$ 公尺，一年約為 31536000 秒)，請問銀河系的直徑換算成公尺為何？(以科學記號表示，取三位有效數字) 此數字為幾位數字？',
    answer: '$1.42\\times10^{21}$ 公尺；22',
    hasImage: false,
  },
  {
    id: '18253428533',
    chapter: '數與式',
    question:
      '已知氫原子核的密度約為 $2.31\\times10^{14}$ 克/立方公分，質量約為 $1.67 \\times10^{-24}$ 克，請問氫原子核的體積為多少立方公分？(取三位有效數字) 此數字自小數點後第幾位開始不為 0？',
    answer: '$7.23\\times10^{-39}$；39',
    hasImage: false,
  },
  {
    id: '1825343d1e5',
    chapter: '數與式',
    question:
      '求下列各對數值：\n(1) $\\log100000$　(2) $\\log\\frac1{10000}$\n(3) $\\log\\sqrt[3]{10}$　(4)$\\log100\\sqrt{10}$',
    answer: '(1) 5 (2) -4 (3)$\\frac13$ (4) $\\frac52$\n',
    hasImage: false,
  },
  {
    id: '18253445b60',
    chapter: '數與式',
    question:
      '簡化下列各指數式：\n(1) $10^{\\log234}$　(2)$100^{\\log13}$　(3)$\\sqrt{10}^{\\log64}$',
    answer: '(1) 234 (2) 169 (3) 8',
    hasImage: false,
  },
  {
    id: '1825349ad1b',
    chapter: '數與式',
    question:
      '求下列各對數值：\n(1) $\\log10000$　(2) $\\log\\frac1{100}$\n(3) $\\log10^{12}$　(4) $\\log\\sqrt[3]{100}$\n(5) $\\log10\\sqrt{10}$　(6) $\\log(\\sqrt{10}\\cdot\\sqrt[3]{10})$',
    answer: '(1) 4 (2) -2 (3) 12 (4) $\\frac23$ (5) $\\frac32$ (6) $\\frac56$',
    hasImage: false,
  },
  {
    id: '182534ba324',
    chapter: '數與式',
    question:
      '簡化下列各指數式：\n(1) $1000^{\\log2}$　(2)$100^{\\log\\sqrt3}$\n(3) $\\sqrt{10}^{\\log25}$　(4) $(10\\sqrt{10})^{\\log4}$\n(5) $\\sqrt[3]{100}^{\\log\\frac{64}{125}}$',
    answer: '(1) 8 (2) 3 (3) 5 (4) 8 (5) $\\frac{16}{25}$',
    hasImage: false,
  },
  {
    id: '182534c2155',
    chapter: '數與式',
    question: '設 $\\log3456700$ 介於整數 $n$ 與 $n+1$ 之間，求 $n$。',
    answer: '6',
    hasImage: false,
  },
  {
    id: '182534d02b8',
    chapter: '數與式',
    question:
      '若整數 $n$ 是六位數，則 $\\log n$ 介於整數 $k$ 與 $k+1$ 之間 (包含 $k$ 但不含 $k+1$)，求 $k$。',
    answer: '5',
    hasImage: false,
  },
  {
    id: '182534d6f9f',
    chapter: '數與式',
    question:
      '若正整數 $n$ 滿足 $3^n>2^{100}$，求最小的 $n$。\n($\\log2\\approx0.3010，\\log3\\approx0.4771$)',
    answer: '64',
    hasImage: false,
  },
  {
    id: '182534ea30e',
    chapter: '數與式',
    question: '求滿足 $2^n>10^{20}$ 的最小正整數 $n$。\n($\\log2\\approx0.3010$)',
    answer: '67',
    hasImage: false,
  },
  {
    id: '182534f1779',
    chapter: '數與式',
    question:
      '已知 $\\log2\\approx0.3010$，$\\log3\\approx0.4771$，$\\log6\\approx0.7781$，請回答下列問題：\n(1) $6^{100}$ 乘開為幾位數？最高位數字為？\n(2) $(\\frac23)^{100}$ 自小數點後第幾位數開始不為 0？此不為 0 數字為？',
    answer: '(1) 78；6 (2) 18；2',
    hasImage: false,
  },
  {
    id: '18253504b95',
    chapter: '數與式',
    question:
      '已知 $\\log3\\approx0.4771$，$\\log5\\approx0.6990$，$(\\frac35)^{100}$ 自小數點後第幾位數開始不為 0？此不為 0 的數字為何？',
    answer: '23；6',
    hasImage: false,
  },
  {
    id: '1825353a634',
    chapter: '數與式',
    question:
      '聲音的強度是用每平方多少瓦特 $(W/m^2)$ 來衡量，一般人能感覺出聲音的最小強度為 $I_0=10^{-12}(W/m^2)$，若測得的聲音強度為  $I(W/m^2)$ 時，所產生的聲音分貝數 $d$ 為 $d(I)=10\\cdot\\log\\frac{I}{I_0}$。今棒球比賽場中，已知 1 支瓦斯汽笛獨鳴，測得的噪音為 70 分貝，則 200 支瓦斯汽笛同時同地合鳴，聲音強度增為 200 倍，請問測得的噪音大約為多少分貝？($\\log2\\approx0.3010$，小數點以下四捨五入至整數)',
    answer: '93',
    hasImage: false,
  },
  {
    id: '1825355a364',
    chapter: '數與式',
    question:
      '聲音的強度是每平方公尺多少能量(單位：$W/m^2$，$W$ 為瓦特)，若某一發聲體的強度為 $I(W/m^2)$，將它換算成分貝 $d$ 表示時，其公式為 $d(I)=10\\cdot\\log(10^{12}\\times I)$。若有一支 70 分貝的汽笛和二十支 60 分貝的汽笛齊響，測得的音量為幾分貝？(四捨五入至小數點後第一位，$\\log3\\approx0.4771$)',
    answer: '74.8',
    hasImage: false,
  },
  {
    id: '182406b30eb',
    chapter: '數與式',
    question: '乘開 $(2a+3b)^3$。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '182406cb62d',
    chapter: '數與式',
    question: '乘開：(1) $(3a-b)^3$　　(2) $(x^2-\\dfrac2x)^3$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '182406dc4f1',
    chapter: '數與式',
    question: '因式分解 $x^6+8$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '182406e85d1',
    chapter: '數與式',
    question: '因式分解 (1) $8x^3-27$　(2) $x^3+2x^2+2x+1$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '1824070506d',
    chapter: '數與式',
    question: '若 $a+b=5$，$ab=2$，求：\n(1) $a^2+b^2$　　(2) $a^3+b^3$',
    answer: '(1) 21 (2) 95',
    hasImage: false,
  },
  {
    id: '182407138ec',
    chapter: '數與式',
    question: '若 $a-b=7$，$ab=3$，求：\n(1) $a^2+b^2$　　(2) $a^3-b^3$',
    answer: '(1) 55 (2) 406',
    hasImage: false,
  },
  {
    id: '1824072402b',
    chapter: '數與式',
    question: '若 $a+b=5$，$ab=3$，且 $a>b$，求 $a-b$。',
    answer: '$\\sqrt{13}$',
    hasImage: false,
  },
  {
    id: '1824072ddd6',
    chapter: '數與式',
    question: '若 $a-b=3$，$ab=5$，求 $a+b$。',
    answer: '$\\sqrt{29}$',
    hasImage: false,
  },
  {
    id: '1824073e6a8',
    chapter: '數與式',
    question: '若 $x+\\dfrac1x=4$，求：\n(1) $x^2+\\dfrac1{x^2}$　　(2) $x^3+\\dfrac1{x^3}$',
    answer: '(1) 14 (2) 52',
    hasImage: false,
  },
  {
    id: '1824074e224',
    chapter: '數與式',
    question: '若 $x-\\dfrac1x=4$，求：\n(1) $x^2+\\dfrac1{x^2}$　　(2) $x^3-\\dfrac1{x^3}$',
    answer: '(1) 18 (2) 76',
    hasImage: false,
  },
  {
    id: '18240764c41',
    chapter: '數與式',
    question:
      '下列哪些選項的數值可以化成有限小數？\n(1) $\\dfrac{13}4$ (2) $\\dfrac{79}{625}$ (3) $\\dfrac{77}{66}$ (4) $\\dfrac{343}{56}$ (5) $\\dfrac{\\sqrt3}8$',
    answer: '(1)(2)(4)',
    hasImage: false,
  },
  {
    id: '18240777cb0',
    chapter: '數與式',
    question:
      '下列哪些選項可以化為有限小數？\n(1) $\\dfrac7{32}$ (2) $\\dfrac{114}{625}$ (3) $\\dfrac{21}{12}$ (4) $\\dfrac{15}{72}$ (5) $\\dfrac{3^{2012}}{2^{99}\\cdot5^{43}}$',
    answer: '(1)(2)(3)(5)',
    hasImage: false,
  },
  {
    id: '182407927fb',
    chapter: '數與式',
    question:
      '將有理數 $\\dfrac{18}{55}$ 表成小數會有無限多位，若小數點後第 $n$ 位的數字記為 $a_n$，其中 $n$ 為正整數。求 $a_1+a_2+a_3+\\cdots+a_{100}$。',
    answer: '446',
    hasImage: false,
  },
  {
    id: '182407a0590',
    chapter: '數與式',
    question: '若 $\\dfrac3{28}$ 在小數點後第 $n$ 位數字 $f(n)=4$，且 $n>200$，求最小 $n$ 值。',
    answer: '203',
    hasImage: false,
  },
  {
    id: '182407d3766',
    chapter: '數與式',
    question: '化成最簡分數：(1) $0.\\overline{27}$　(2) $3.1\\overline{45}$',
    answer: '(1) $\\frac{3}{11}$ (2) $\\frac{173}{55}$',
    hasImage: false,
  },
  {
    id: '182407eba69',
    chapter: '數與式',
    question: '化成最簡分數：(1) $2.\\overline{14}$　(2) $0.2\\overline8$　(3) $4.3\\overline{21}$',
    answer: '(1) $\\frac{212}{99}$ (2) $\\frac{13}{35}$ (3) $\\frac{713}{165}$',
    hasImage: false,
  },
  {
    id: '182407fdd7c',
    chapter: '數與式',
    question: '化簡 $0.\\overline{73}+1.\\overline{36}\\times2.3\\overline8$',
    answer: '$\\frac{791}{198}$',
    hasImage: false,
  },
  {
    id: '18240816d62',
    chapter: '數與式',
    question:
      '化簡 $3.2\\overline5+4.\\overline3-(11\\times0.\\overline{27}-0.0\\overline6\\div\\dfrac3{10})$',
    answer: '$\\frac{433}{90}$',
    hasImage: false,
  },
  {
    id: '18240835833',
    chapter: '數與式',
    question:
      '數線上，已知 $A(-1)$、$B(5)$，點 $P$ 滿足 $\\overline{PA}:\\overline{PB}=4:3$，試問：\n(1) 若 $P$ 在線段 $\\overline{AB}$ 上，求 $P$ 坐標\n(2) 若 $P$ 在線段 $\\overline{AB}$ 外，求 $P$ 坐標',
    answer: '(1) $\\frac{17}7$ (2) 23',
    hasImage: false,
  },
  {
    id: '182408482b0',
    chapter: '數與式',
    question:
      '數線上，已知 $P(4)$、$Q(-7)$，點 $R$ 滿足 $\\overline{PR}:\\overline{PQ}=2:3$，試問：\n(1) 若 $R$ 在 $\\overline{PQ}$ 上，求 $R$ 坐標\n(2) 若 $R$ 在 $\\overline{PQ}$ 外，求 $R$ 坐標',
    answer: '(1) $-\\frac25$ (2) 26',
    hasImage: false,
  },
  {
    id: '1824086d367',
    chapter: '數與式',
    question:
      '數線上有 $A(a)$、$B(b)$ 兩點，其中 $a<b$，且在 $A$、$B$ 之間有 $P(1)$、$Q(8)$ 兩點，已知 $\\overline{PA}:\\overline{PB}=2:3$，$\\overline{QA}:\\overline{QB}=5:4$，求 $a$、$b$',
    answer: '-17；28',
    hasImage: false,
  },
  {
    id: '1824088d061',
    chapter: '數與式',
    question:
      '數線上，已知 $A(7)$、$B(-4)$，若 $P$、$Q$ 在 $\\overline{AB}$ 上且 $\\overline{AP}:\\overline{PQ}:\\overline{QB}=2:1:3$，求 $P$、$Q$ 坐標。',
    answer: '$\\frac{10}3$；$-\\frac{13}6$',
    hasImage: false,
  },

  {
    id: '18207a82d82',
    chapter: '數與式',
    question:
      '若 $x<0$，則下列何者必為正數？\n(1) $\\dfrac x{|x|}$　 (2) $x^3$　 (3) $-(\\dfrac12)^x$　 (4) $-x^{-1}$　 (5) $\\log(-x)$',
    answer: '4',
    hasImage: false,
  },
  {
    id: '18207be6601',
    chapter: '數與式',
    question:
      '若 $|x-1|\\le3$，$|y+1|\\le1$，$x,y$ 為實數，試選出正確的選項。\n(1) $-4\\le x\\le2$\n(2) $-2\\le y\\le0$\n(3) $-4\\le x+y\\le4$\n(4) $0\\le x^2+y^2\\le16$\n(5) $xy-3x+4y+5$ 最大值為 15',
    answer: '23',
    hasImage: false,
  },
  {
    id: '181e21d1e58',
    chapter: '數與式',
    question:
      '若已知 $x+\\dfrac1 x=2\\sqrt2$，則 $|x^3+\\dfrac1{x^3}|-9$ 之值為下列何者？\n(1) 4　 (2) 5　 (3) 6　 (4) 7　 (5) 8',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '181e22266b0',
    chapter: '數與式',
    question:
      '已知 $f(x)=x^2-53x+196+|x^2-53x+196|$，則 $f(20)+f(14)$ 的值為哪個選項？\n(1) -928　 (2) -300　 (3) 0　 (4) 300　 (5) 928',
    answer: '(3)',
    hasImage: false,
  },
  {
    id: '181e22c1aa9',
    chapter: '數與式',
    question:
      '西元前 4 世紀，管子一書記載了音階形成術－三分損益法。由此法可推出「宮」、「商」、「角」、「徵」、「羽」五聲音階。已知弦長 $l$ 的琴弦發出的音為「宮」，而弦長 $\\dfrac{2^6}{3^4}l$ 的琴弦發出的音為「角」(頻率 330 Hz)，請問下列哪一個弦長發出的音為「羽」(頻率 440 Hz)？(註：弦振動的頻率與弦長成反比)\n(1) $\\dfrac{2^3}{3^2}l$　 (2) $\\dfrac23l$　 (3) $\\dfrac{2^7}{3^5}l$　 (4) $\\dfrac{2^4}{3^3}l$　 (5) $\\dfrac{2^3}{3^4}l$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '181e22eb423',
    chapter: '數與式',
    question:
      '設 $a,b$ 為實數，若不等式 $|ax-1|\\le b$ 的解為 $-5\\le x\\le2$，則數對 $(a,b)=$？\n(1) $(\\dfrac23,\\dfrac73)$　 (2) $(-\\dfrac23,\\dfrac73)$　 (3) $(-\\dfrac23,-\\dfrac73)$　 (4) $(\\dfrac73,-\\dfrac23)$　 (5) $(\\dfrac73,\\dfrac23)$',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '181e23076a5',
    chapter: '數與式',
    question:
      '設 $a,b$ 皆為大於 0 的實數，已知 $2a+b=6$，求 $3ab$ 的最大值為何？\n(1) 9　 (2) $\\dfrac92$　 (3) $\\dfrac{27}2$　 (4) 18　 (5) 27',
    answer: '(3)',
    hasImage: false,
  },
  {
    id: '181e232cb0c',
    chapter: '數與式',
    question:
      '試選出正確的選項。\n(1) $(\\sqrt3)^{-1}=-\\sqrt3$\n(2) $(\\sqrt3)^{\\frac12}=\\dfrac1{\\sqrt3}$\n(3) $2\\times10^3+8\\times10^3=10^5$\n(4) $8\\times10^3-2\\times10^3=6$\n(5) $(10^{\\log10^2})^{-1}=\\dfrac1{100}$',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '181e23a2ffb',
    chapter: '數與式',
    question:
      '已知 $x,y$ 為實數，下列哪些敘述恆成立？\n(1) $x^2+y^2\\ge6(x+y-3)$\n(2) 若 $x\\ge y$，則 $x\\ge\\dfrac{x+2y}3\\ge y$\n(3) 若 $x\\ge0$，$y\\ge0$，則 $2\\sqrt x+\\sqrt y\\ge\\sqrt{4x+y}$\n(4) $|x+1|+|x-3|$ 之最小值為 4\n(5) $|x+1|-|x+3|$ 之最小值為 -4',
    answer: '(1)(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '181e23f52d1',
    chapter: '數與式',
    question:
      '若對任意實數 $x$，$t^2+5t\\le|2x-4|-|x-2|$ 恆成立，下列哪些 $t$ 值滿足此條件？\n(1) 0　 (2) -1　 (3) $-\\pi$　 (4) $-\\dfrac{11}3$　 (5) $-\\dfrac{17}4$',
    answer: '(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '181e243dc24',
    chapter: '數與式',
    question:
      '如圖，數線上五點 $A(a),B(b),C(c),D(d),E(e)$，若 $\\overline{AB}:\\overline{BC}:\\overline{CD}:\\overline{DE}=2:3:1:4$，請選出正確的選項。\n(1) $d=\\dfrac{b+e}2$　 (2) $b=\\dfrac{2a+3c}5$　 (3) $c=\\dfrac{b+3d}4$　 (4) $e=\\dfrac{4c-d}5$　 (5) $a=\\dfrac{5b+2c}3$',
    answer: '(1)(3)',
    hasImage: true,
    style: { width: '6.5cm' },
  },
  {
    id: '181e2459e50',
    chapter: '數與式',
    question:
      '若 $10^{\\frac52a}=243$，且 $a$ 為實數，試選出正確的選項。\n(1) $10^a=3$　 (2) $100^a=81$　 (3) $0<a<1$　 (4) $\\dfrac12a=\\log\\sqrt3$　 (5) $0.01^a=\\dfrac19$',
    answer: '(2)(3)',
    hasImage: false,
  },
  {
    id: '181e24ae73f',
    chapter: '數與式',
    question:
      '設 $a,b,c,d$ 為實數，則下列選項哪些是正確的？\n(1) $\\dfrac{10549}{385}$ 可化為有限小數\n(2) 若 $a+b$ 為有理數、$a-b$ 為無理數，則 $a^2-b^2$ 必為無理數\n(3) 若 $a+\\sqrt b=c+\\sqrt d$，則 $a=c$ 且 $b=d$\n(4) 若 $a^2<b^2$，則 $|a|<|b|$\n(5) 若 $|a-2|:|a+6|=1:3$，則 $a=0$',
    answer: '(1)(4)',
    hasImage: false,
  },
  {
    id: '181e259532c',
    chapter: '數與式',
    question:
      '設 $-2\\le x\\le3$，$1\\le y\\le4$，若 $xy+y$ 的最大值為 $M$，最小值為 $m$，則數對 $(M,m)=(\\textcirc{12-1}\\textcirc{12-2},\\textcirc{12-3}\\textcirc{12-4})$。',
    answer: '16-4',
    hasImage: false,
  },
  {
    id: '181e25cd818',
    chapter: '數與式',
    question:
      '已知 $a,b$ 皆為正實數，若 $y=|x-a|+b|x-2|$ 的圖形通過 (0,3) 及 (1,2) 兩點，則數對 $(a,b)=(\\dfrac{\\textcirc{13-1}}{\\textcirc{13-2}},\\dfrac{\\textcirc{13-3}}{\\textcirc{13-4}})$。',
    answer: '1343',
    hasImage: false,
  },
  {
    id: '181e25f2e1f',
    chapter: '數與式',
    question:
      '某種有害人體的 Y 病菌在人體內每小時會由 1 個分裂成 2 個。當人體內的 Y 病菌達 1000 萬個時，身體便會出現不適症狀。若某人一開始將 100 個 Y 病菌吸入體內，則將在 $\\textcirc{14-1}\\textcirc{14-2}$ 小時後身體開始出現不適症狀。(四捨五入到整數位)',
    answer: '17',
    hasImage: false,
  },
  {
    id: '181e2637c5f',
    chapter: '數與式',
    question:
      '放射性物質每過一段固定的時間，質量會變為原來的一半，則稱此固定的時間為該放射性物質的「半衰期」。若放射性物質 A 的半衰期為 2 年，放射性物質 B 的半衰期為 3 年。現有同質量的物質 A 與物質 B，則至少 $\\textcirc{15-1}\\textcirc{15-2}$ 年後，物質 B 的質量會是物質 A 的 10 倍以上。',
    answer: '20',
    hasImage: false,
  },
  {
    id: '181e2697128',
    chapter: '數與式',
    question:
      '不等式 $|x-1|+2|x-3|\\le4$ 的解為 $\\textcirc{16-1}\\le x\\le\\dfrac{\\textcirc{16-2}\\textcirc{16-3}}{\\textcirc{16-4}}$。(化為最簡分數）',
    answer: '1113',
    hasImage: false,
  },
  {
    id: '181e26c651a',
    chapter: '數與式',
    question:
      '如圖，直角 $\\triangle ABC$ 中，$\\overline{AB}=20$，$\\overline{AC}=15$，$\\overline{BC}=25$。在 $\\overline{AB}$ 邊上取一點 $P$，在 $\\overline{BC}$ 邊上取兩點 $Q$、$R$，在 $\\overline{AC}$ 邊上取一點 $S$，使得 $PQRS$ 為矩形，求矩形 $PQRS$ 面積的最大值為 $\\textcirc{17-1}\\textcirc{17-2}$。',
    answer: '75',
    hasImage: true,
  },
  {
    id: '181e271596b',
    chapter: '數與式',
    question:
      '南迴公路是台灣著名的環島道路，連接了屏東與台東與無數美麗的景點。由於電動綠能機車環島經過南迴公路時，常常續航力不足以致拋錨於蜿蜒的山路上，廠商於南迴公路里程 18 與 42 處設置了 A、B 兩處換電站，並提供拋錨救援服務。救援規則如下：「拋錨處的里程處與 A 的距離」加上 3 倍的「拋錨處的里程處與 B 的距離」不大於 80 公里時，則可以免費救援，若超過 80 公里，則每公里加收費用 50 元，且未滿 1 公里以 1 公里收費。',
    answer: '',
    hasImage: true,
    style: { width: '12cm' },
  },
  {
    id: '181e27380a2',
    chapter: '數與式',
    question:
      '某天小華騎乘電動綠能機車環島經過南迴公路從屏東往台東方向前進時，經過 B 換電站後，拋錨於整數處，經救援至換電站時被收費 200 元，則小華拋錨處的里程為 $\\textcirc{18-1}\\textcirc{18-2}$。(選填題，6 分)',
    answer: '57',
    hasImage: false,
  },
  {
    id: '181e365094a',
    chapter: '數與式',
    question: '試問免費救援的里程範圍為何？(非選擇題，9 分)',
    answer: '$16\\le x\\le56$',
    hasImage: false,
  },
  {
    id: '17da24d4535',
    chapter: '數與式',
    question:
      '試求滿足 $5^{|x+2|-|x-3|}\\ge5^{\\frac32}$ 的 $x$ 值的範圍。\n(1) $x\\ge\\frac52$\n(2) $x\\le\\frac52$\n(3) $x\\le\\frac54$\n(4) $x\\ge\\frac54$\n(5) $x\\ge-\\frac54$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17da247200f',
    chapter: '數與式',
    question:
      '農夫有一塊田地，前方為矩形 $ABCD$，其中 $\\overline{AB}=10$，$\\overline{BC}=3$，$E$ 為 $\\overline{CD}$ 邊上一點，直線 $\\overline{AE}$ 交 $\\overline{BC}$ 的延長線於 $F$ 點。農夫規劃其中兩塊三角型田地 $\\triangle ADE$ 與 $\\triangle CEF$ 種香蕉，其餘的四邊形 $ABCE$ 田地種柚子。\na. 下列敘述何者正確？(單選)\n(1) 圖中恰有兩個三角形相似\n(2) 種香蕉的田地面積可能與種柚子的田地面積相等\n(3) 種香蕉的田地面積有最大值\n(4) 當 $\\triangle ADE$ 與 $\\triangle CEF$ 面積相等時，種香蕉的面積為最小\n(5) 種柚子面積必大於種香蕉的面積\nb. 種植香蕉的面積最小值為何？',
    answer: 'a. (2) b. $30\\sqrt2-30$',
    hasImage: false,
  },
  {
    id: '17d7efc3583',
    chapter: '數與式',
    question:
      '如圖，以 $\\overline{AC}$ 為直徑作一半圓，$B$ 為 $\\overline{AC}$ 上一點，過 $B$ 作 $\\overline{AC}$ 垂直線交半圓於 $D$。若 $\\overline{BD}=2$，$\\overline{BC}=\\sqrt{10+\\sqrt{84}}$，而 $\\overline{AB}=\\sqrt a-\\sqrt b$，其中 $a,b\\in\\mathbb N$，求數對 $(a,b)$。',
    answer: '$(7,3)$',
    hasImage: true,
  },
  {
    id: '17d7e696c75',
    chapter: '數與式',
    question:
      '如圖，已知 $\\overline{AB}=8$，在 $\\overline{AB}$ 上的八等分點為 $A_1$、$A_2$、...、$A_7$，分別以 $\\overline{AB}$、$\\overline{AA_5}$、$\\overline{A_5B}$ 為直徑各作一半圓，若 $C$、$D$、$E$ 各為三個半圓上的一點，且 $\\overline{CA_1}\\perp\\overline{AB}$，$\\overline{DA_3}\\perp\\overline{AB}$，$\\overline{EA_6}\\perp\\overline{AB}$，則 $\\overline{CA_1}\\times\\overline{DA_3}\\times\\overline{EA_6}$ 之值介於下列哪兩個整數之間？\n(1) $7$ 與 $8$ 之間\n(2) $8$ 與 $9$ 之間\n(3) $9$ 與 $10$ 之間\n(4) $10$ 與 $11$ 之間\n(5) $11$ 與 $12$ 之間',
    answer: '(3)',
    hasImage: true,
  },
  {
    id: '17c681c22b4',
    chapter: '數與式',
    question: '設 $\\sqrt[3]{4}\\cdot\\sqrt[4]{8}\\cdot\\sqrt[5]{16}=2^x$，求 $x$。',
    answer: '$\\frac{133}{60}$',
    hasImage: false,
  },
  {
    id: '17c681e332d',
    chapter: '數與式',
    question:
      '設 $a>0$ 且 $a\\neq1$，化簡 $\\sqrt[5]{\\sqrt[4]{a^{-3}}\\cdot\\sqrt[8]{\\dfrac{a^4}{\\sqrt{a^5}}}}=a^x$，求 $x$。',
    answer: '$-\\frac{9}{80}$',
    hasImage: false,
  },
  {
    id: '17c68242598',
    chapter: '數與式',
    question:
      '求 $(\\frac{25}{9})^{0.5}+\\dfrac{10^{1+\\sqrt{2}}}{0.1^{1-\\sqrt{2}}}+3^{-1}+$\n$(\\sqrt{5}+1)^\\frac{3}{2}(\\sqrt{5}-1)^\\frac{3}{2}$。',
    answer: '$110$',
    hasImage: false,
  },
  {
    id: '17c68265fa4',
    chapter: '數與式',
    question: '化簡 $(\\sqrt{7}+\\sqrt{3})^\\frac{3}{2}(\\sqrt{7}-\\sqrt{3})^{-\\frac{3}{2}}$。',
    answer: '$2\\sqrt{7}+3\\sqrt{3}$',
    hasImage: false,
  },
  {
    id: '17c6827ea0b',
    chapter: '數與式',
    question:
      '設 $a>0$ 且 $a\\neq1$，化簡 $\\sqrt[3]{a^\\frac{9}{2}\\sqrt{a^{-3}}}\\cdot\\sqrt{\\sqrt[3]{a^{-7}}\\sqrt[6]{a^2}}$。',
    answer: '$1$',
    hasImage: false,
  },
  {
    id: '17c682ae29c',
    chapter: '數與式',
    question: '求 $0.25^{2.5}\\times0.25^{-2.5}$。',
    answer: '$1$',
    hasImage: false,
  },
  {
    id: '17c682c4fe7',
    chapter: '數與式',
    question:
      '求 $(2^\\frac{5}{2}+3^\\frac{3}{2})^\\frac{7}{2}\\cdot(2^\\frac{5}{2}-3^\\frac{3}{2})^\\frac{7}{2}$。',
    answer: '$125\\sqrt{5}$',
    hasImage: false,
  },
  {
    id: '17c682e7f64',
    chapter: '數與式',
    question:
      '化簡 $(\\dfrac{81}{16})^{-0.25}\\cdot(\\dfrac49)^{-\\frac12}\\cdot(0.25)^{-1.5}\\cdot(\\frac{27}8)^{-\\frac23}$。',
    answer: '$\\frac{32}9$',
    hasImage: false,
  },
  {
    id: '17c68306838',
    chapter: '數與式',
    question:
      '設 $a>0$ 且 $a\\neq1$，化簡 $\\sqrt[3]{\\sqrt[6]{a^5}}\\cdot(\\sqrt{\\sqrt[12]{a^7}})^4=a^x$，求 $x$。',
    answer: '$\\frac{13}{9}$',
    hasImage: false,
  },
  {
    id: '17c6831d740',
    chapter: '數與式',
    question:
      '設 $a>0$ 且 $a\\neq1$，化簡 $\\sqrt[7]{\\sqrt[5]{a}\\cdot\\sqrt[4]{\\dfrac{a}{\\sqrt[3]{a^2}}}}=a^x$，求 $x$。',
    answer: '$\\frac{17}{420}$',
    hasImage: false,
  },
  {
    id: '17c6833e719',
    chapter: '數與式',
    question:
      '化簡 $16^\\frac{3}{4}-2(8^{-\\frac{2}{3}})^{-1}+2^\\frac{1}{5}(4^{-\\frac{2}{5}})^{-1}$',
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '17c2b915c10',
    chapter: '數與式',
    question: '試求 $|x-3|=2x+5$ 的解。',
    answer: '$-\\frac23$',
    hasImage: false,
  },
  {
    id: '17c2b924fe6',
    chapter: '數與式',
    question: '試求 $|x+1|+|x-5|=x+3$ 的解。',
    answer: '$7\\lor3$',
    hasImage: false,
  },
  {
    id: '17c2b92fc44',
    chapter: '數與式',
    question: '試求 $|x-1|-x-5=0$ 的解。',
    answer: '-2',
    hasImage: false,
  },
  {
    id: '17c2b93c90b',
    chapter: '數與式',
    question: '試求 $|4x+3|=|2x|+1$ 的解。',
    answer: '$-\\frac13\\lor-2$',
    hasImage: false,
  },
  {
    id: '17c2b0f8115',
    chapter: '數與式',
    question: '試求 $2|5x-1|-7\\le3$ 的解。',
    answer: '$-\\frac45\\le x\\le-\\frac65$',
    hasImage: false,
  },
  {
    id: '17c2b519174',
    chapter: '數與式',
    question: '試求 $2\\le|x+4|<5$ 的解並求其整數解個數。',
    answer: '$-2\\le x<1\\lor-9< x\\le-6$；$6$',
    hasImage: false,
  },
  {
    id: '17c2b22ab34',
    chapter: '數與式',
    question: '試求 $|3x-1|<8$ 的解並求其整數解個數。',
    answer: '$-\\frac73<x<3$；$5$',
    hasImage: false,
  },
  {
    id: '17c2b245f7f',
    chapter: '數與式',
    question: '試求 $|2x+3|>9$ 的解。',
    answer: '$x<-6\\lor x>3$',
    hasImage: false,
  },
  {
    id: '17c2b2a519f',
    chapter: '數與式',
    question: '化簡 $(\\dfrac{81}{16})^{-0.25}+0.25^{-2.5}$',
    answer: '$32\\frac23$',
    hasImage: false,
  },
  {
    id: '17c2b34ea1a',
    chapter: '數與式',
    question:
      '化簡 $(3^\\sqrt{2})^\\sqrt{2}+2^{\\pi+1}\\cdot2^{-\\pi}+\\dfrac{36^\\sqrt{5}}{6^\\sqrt{20}}+$\n$(\\sqrt{3}+\\sqrt{2})^{\\pi}(\\sqrt{3}-\\sqrt{2})^{\\pi}$。',
    answer: '13',
    hasImage: false,
  },
  {
    id: '17c2b38b1a4',
    chapter: '數與式',
    question: '設 $2^x=5$，$3^y=25$，求 $5^{\\frac{3}{x}+\\frac{4}{y}}$。',
    answer: '72',
    hasImage: false,
  },
  {
    id: '17c2b3d2484',
    chapter: '數與式',
    question:
      '設 $a=8\\times10^{12}$、$b=9\\times10^{10}$、$c=7.5\\times10^{23}$，求 $ab+c$。\n(以科學記號表示)',
    answer: '$1.47\\times10^{24}$',
    hasImage: false,
  },
  {
    id: '17be233d0b5',
    chapter: '數與式',
    question:
      '小明最近整理房間，覺得自己的東西太多，想用厚紙板自製一個無蓋子的長方體收納箱。若不考慮紙板厚度，小明希望收納箱的體積有 $18000$ 立方公分且高度為 $20$ 公分，則小明自製收容內箱的外部表面積最小值為？',
    answer: '$3300$',
    hasImage: false,
  },
  {
    id: '17be21bee6a',
    chapter: '數與式',
    question: '滿足絕對值不等式 $|2x-13|\\le9$ 的所有實數 $x$ 所形成的區間之長度為？',
    answer: '$9$',
    hasImage: false,
  },
  {
    id: '17a20445a4b',
    chapter: '數與式',
    question: '求 $10^{\\log7}+\\log10^7$',
    answer: '$14$',
    hasImage: false,
  },
  {
    id: '17a20463ef2',
    chapter: '數與式',
    question:
      '若 $a,b\\in\\mathbb{Q}$ 且 $(1+2\\sqrt{2})a+(3+4\\sqrt{2})b=5+6\\sqrt{2}$，求 $7a+8b$。',
    answer: '$9$',
    hasImage: false,
  },
  {
    id: '17a2049be60',
    chapter: '數與式',
    question: '設 $a$、$b$ 為正數，且 $3a+4b=26$，求當數對 $(a,b)$ 為何時，$ab$ 有最大值。',
    answer: '$\\left(\\frac{13}{3},\\frac{13}{4}\\right)$',
    hasImage: false,
  },
  {
    id: '17a204ba275',
    chapter: '數與式',
    question:
      '數線上給定兩點 $A(1)$、$B(5)$，已知兩相異點 $P_1$，$P_2$ 滿足 $\\overline{AP_1}:\\overline{BP_1}=\\overline{AP_2}:\\overline{BP_2}=1:3$，求 $\\overline{P_1P_2}$。',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '17a204ca2ab',
    chapter: '數與式',
    question: '若 $5^x+4\\cdot5^{x+1}=525$，求 $x$。',
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '17a204db218',
    chapter: '數與式',
    question: '設 $a,b\\in\\mathbb{R}$，若 $|ax+2|\\le b$ 之解為 $-3\\le x\\le5$，求 $a+b$。',
    answer: '$6$',
    hasImage: false,
  },
  {
    id: '17a0dc85372',
    chapter: '數與式',
    question:
      '下列哪些分數可化成有限小數？\n(1) $\\dfrac78$ (2) $\\dfrac87$ (3) $\\dfrac{21}{75}$ (4) $\\dfrac3{2^{10}}$',
    answer: '(1)(3)(4)',
    hasImage: false,
  },
  {
    id: '17a0dca2b5e',
    chapter: '數與式',
    question:
      '將 $\\frac{1234}{9999}$ 化成小數形式為 $0.\\overline{1234}$，設小數點後第 $n$ 位的數字為 $f(n)$，求 $f(1)+f(2)+\\cdots+f(99)$。',
    answer: '246',
    hasImage: false,
  },
  {
    id: '17a0dd2a34c',
    chapter: '數與式',
    question: '求 $0.2\\overline{7}\\times9.\\overline{54}$。',
    answer: '$\\frac{175}{66}$',
    hasImage: false,
  },
  {
    id: '17a0dd42c25',
    chapter: '數與式',
    question: '設 $a$、$b$ 為循環小數，$a=0.\\overline{12}$，$b=0.\\overline{01}$，求 $a-b$。',
    answer: '$\\frac19$',
    hasImage: false,
  },
  {
    id: '181525558a2',
    chapter: '數與式',
    question:
      '選出正確的選項。\n(1) $0.3\\overline{43}$ 不是有理數 (2) $0.\\overline{34}>\\frac13$\n(3) $0.\\overline{34}>0.343$ (4) $0.\\overline{34}>0.35$\n(5) $0.\\overline{34}=0.3\\overline{43}$',
    answer: '(2)(3)(4)(5)',
    hasImage: false,
  },
  {
    id: '17a0ddf5269',
    chapter: '數與式',
    question:
      '設 $a,b,c\\in\\mathbb Q$，$x,y\\notin\\mathbb Q$，下列何者正確？\n(1) $ab+c\\in\\mathbb Q$ (2) $x+y\\notin\\mathbb Q$\n(3) $a+x\\notin\\mathbb Q$ (4) $ax\\notin\\mathbb Q$',
    answer: '(1)(3)',
    hasImage: false,
  },
  {
    id: '17a0de2821c',
    chapter: '數與式',
    question: '試問 $\\sqrt{7+\\sqrt{47}}$ 在哪兩個連續整數之間？',
    answer: '3,4',
    hasImage: false,
  },
  {
    id: '1815259a744',
    chapter: '數與式',
    question: '$x,y\\in\\mathbb Z$，若 $|x-7|+3(y-4)^2=2$，求數對 $(x,y)$。',
    answer: '$(9,4)\\lor(5,4)$',
    hasImage: false,
  },
  {
    id: '17a0df3d2da',
    chapter: '數與式',
    question:
      '點 $P(x)$ 在 $A(5)$、$B(11)$ 之間，且 $\\overline{AP}:\\overline{PB}=\\sqrt{3}:\\sqrt{2}$，則 $x=a+b\\sqrt{6}$，其中 $a,b\\in\\mathbb{Z}$，求 $a$、$b$。',
    answer: '23；-6',
    hasImage: false,
  },
  {
    id: '181525f5385',
    chapter: '數與式',
    question:
      '已知 $a,b\\in\\mathbb R$ 且 $a>b$，則下列哪些大小關係必定成立？\n(1) $\\frac{a+b}3<\\frac{a+b}2$ (2) $\\frac{4a+b}5<\\frac{3a+b}4$\n(3) 若 $b>0$，則 $\\frac{2a-b}5<\\frac{a-b}4$\n(4) 若 $b<0$，則 $\\frac{2a-b}5<\\frac{a-b}4$',
    answer: '(2)(4)',
    hasImage: false,
  },
  {
    id: '17a0df8d0dc',
    chapter: '數與式',
    question: '化簡：(1) $\\sqrt{5+2\\sqrt{6}}$ (2) $\\sqrt{6+2\\sqrt{5}}$。',
    answer: '(1) $1+\\sqrt2$ (2) $\\sqrt3+\\sqrt5$',
    hasImage: false,
  },
  {
    id: '17a0df9ff9f',
    chapter: '數與式',
    question: '無理數 $\\sqrt{14+\\sqrt{180}}$ 的整數部分為？小數部分為？',
    answer: '$5$；$\\sqrt{5}-2$',
    hasImage: false,
  },
  {
    id: '17a0e014770',
    chapter: '數與式',
    question: '已知 $x>0$，$y>0$，且 $xy=225$，求 $4x+9y$ 的最小值及此時的 $x$、$y$。',
    answer: '180；$\\frac{45}2$；10',
    hasImage: false,
  },
  {
    id: '17a0e043512',
    chapter: '數與式',
    question: '設 $x>0$，求 $f(x)=x+\\frac{16}{x+1}$ 的最小值及此時的 $x$。',
    answer: '7；3',
    hasImage: false,
  },
  {
    id: '17a0e0fafec',
    chapter: '數與式',
    question: '化簡 $(4+\\sqrt{10})^3+(4-\\sqrt{10})^3$。',
    answer: '368',
    hasImage: false,
  },
  {
    id: '17a0e1064a1',
    chapter: '數與式',
    question: '若 $x+\\dfrac1 x=5$，求 $x^3+\\dfrac1{x^3}$。',
    answer: '110',
    hasImage: false,
  },
  {
    id: '17a0e14abac',
    chapter: '數與式',
    question: '求方程式 $|2x+1|=9$ 的解。',
    answer: '$4\\lor-5$',
    hasImage: false,
  },
  {
    id: '17a0e15a742',
    chapter: '數與式',
    question: '求不等式 $|-2x+7|\\le10$ 的解。',
    answer: '$\\frac{-3}{2}\\le x\\le\\frac{17}{2}$',
    hasImage: false,
  },
  {
    id: '17a0e1de5e1',
    chapter: '數與式',
    question:
      '下列哪一個選項是正確的？\n(1) $(-2)^{-3}=8$ (2) $3^{-1}=\\frac{1}{3}$\n(3) $16^{-\\frac{3}{4}}=-8$ (4) $\\left(-\\frac{1}{8}\\right)^\\frac{1}{3}=-\\frac{1}{2}$',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '17a0e1f7aea',
    chapter: '數與式',
    question: '求 $\\left(\\frac{8}{27}\\right)^{-\\frac{2}{3}}\\times(0.25)^{-2.5}$',
    answer: '72',
    hasImage: false,
  },
  {
    id: '17a0e447974',
    chapter: '數與式',
    question: '求 $(3+\\sqrt7)^{10}(3-\\sqrt7)^{10}$',
    answer: '1024',
    hasImage: false,
  },
  {
    id: '17a0e46db1a',
    chapter: '數與式',
    question: '$\\dfrac{(2^{-5})^{-\\frac73}}{8^\\frac49}=16^x$，求 $x$。',
    answer: '$-\\frac{13}4$',
    hasImage: false,
  },
  {
    id: '18153600d6d',
    chapter: '數與式',
    question:
      '亞佛加厥數是一莫耳物質所含的粒子數，數值為 $6.022\\times10^{23}$，此數值寫成整數為幾位數？最高位數字為？',
    answer: '24；6',
    hasImage: false,
  },
  {
    id: '181536175e7',
    chapter: '數與式',
    question:
      '一個電子的質量約為 $9.11\\times10^{-28}$ 公克，自小數點後第幾位開始出現不為 0 的數字？此數字為？',
    answer: '28；9',
    hasImage: false,
  },
  {
    id: '181536f48b4',
    chapter: '數與式',
    question:
      '已知 $\\log2\\approx0.3010$，$\\log3\\approx0.4771$，若 $10^k=6$，試估計 $k$ 的大小。',
    answer: '0.7781',
    hasImage: false,
  },
  {
    id: '17a0e4d25e0',
    chapter: '數與式',
    question: '已知 $\\log3\\approx0.4771$，試問 $3^{100}$ 乘開後為幾位數？',
    answer: '$48$',
    hasImage: false,
  },
  {
    id: '17a0ef24961',
    chapter: '數與式',
    question:
      '請問下列哪些選項正確？\n(1) $9\\sqrt5<20$ (2) $\\sqrt7+\\sqrt2>4$\n(3) $\\sqrt{13}-\\sqrt{10}<\\sqrt{11}-2\\sqrt2$\n(4) 若 $-1\\le x\\le3$，則 $1\\le x^2\\le9$\n(5) 若 $-2\\le x\\le5$ 且 $2\\le y\\le3$，則 $-6\\le x-2y\\le-1$',
    answer: '(2)(3)',
    hasImage: false,
  },
  {
    id: '17a0ef528bf',
    chapter: '數與式',
    question:
      '$x,y\\in\\mathbb R$，若 $|2x-1|\\le7$，$|y-4|\\le2$，則下列選項哪些必成立？\n(1) $-5\\le x-y\\le2$ (2) $9\\le x^2\\le16$\n(3) $-27\\le x^3\\le64$ (4) $-6\\le xy\\le24$\n(5) $\\frac16\\le\\frac1y\\le\\frac12$',
    answer: '(3)(5)',
    hasImage: false,
  },
  {
    id: '181539745ee',
    chapter: '數與式',
    question:
      '選出正確的選項。\n(1) $\\sqrt{13}>3.5$ (2) $\\sqrt{13}<3.6$\n(3) $\\sqrt{13}-\\sqrt3>\\sqrt{10}$ (4) $\\sqrt{13}+\\sqrt3>\\sqrt{16}$\n(5) $\\frac1{\\sqrt{13}-\\sqrt3}>0.6$',
    answer: '(1)(4)',
    hasImage: false,
  },
  {
    id: '181539a9517',
    chapter: '數與式',
    question:
      '考慮有理數 $\\frac n m$，其中 $m$、$n$ 為正整數且 $1\\le mn\\le8$。則這樣的數值有共有幾個？\n(例如 $\\frac12$ 和 $\\frac24$ 同值，只算一個)',
    answer: '17',
    hasImage: false,
  },
  {
    id: '17a0efa578f',
    chapter: '數與式',
    question:
      '數線上 $P(3)$、$Q(6)$、$R(x)$ 三點都在 $A$、$B$ 兩點之間，已知 $\\overline{PA}:\\overline{PB}=2:3$，$\\overline{QA}:\\overline{QB}=4:9$，$\\overline{RA}:\\overline{RB}=6:5$，求 $x$。',
    answer: '$-\\frac{19}{11}$',
    hasImage: false,
  },
  {
    id: '17a0efc748e',
    chapter: '數與式',
    question:
      '數線上由 $A(-4)$ 出發朝右步行到達 $P(x)$，再騎上單車朝右駛抵達 $B(88)$，已知步行的速度是每秒 3 單位，騎單車的速度是每秒 10 單位，且 $A$ 到 $P$ 的時間是 $P$ 到 $B$ 的一半，求 $\\overline{PA}:\\overline{PB}$ 及 $x$。',
    answer: '3:20；8',
    hasImage: false,
  },
  {
    id: '17a0f5dd109',
    chapter: '數與式',
    question:
      '設 $\\sqrt{7+4\\sqrt3}$ 的整數部分為 $a$，純小數部分為 $b$，求 $a+\\dfrac{b^2}{1-b}$。',
    answer: '5',
    hasImage: false,
  },
  {
    id: '17a0f616066',
    chapter: '數與式',
    question:
      '介於 $\\dfrac4{2+\\sqrt3}$ 與 $\\dfrac{11}{\\sqrt{13-4\\sqrt3}}$ 之間的整數共有幾個？($\\sqrt3\\approx1.732$)',
    answer: '3',
    hasImage: false,
  },
  {
    id: '17a0f6382ae',
    chapter: '數與式',
    question: '已知 $2x+y=3$，求 $9^x+3^y$ 的最小值。',
    answer: '$6\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17a0f66cd40',
    chapter: '數與式',
    question: '若實數 $x$、$y$ 滿足 $9x^4+25y^4=270$，求 $xy$ 的最大值。',
    answer: '3',
    hasImage: false,
  },
  {
    id: '17a0f68d778',
    chapter: '數與式',
    question: '求 $2^{15}+1$ 的最大質因數。',
    answer: '331',
    hasImage: false,
  },
  {
    id: '17a0f6a214a',
    chapter: '數與式',
    question: '實係數方程式 $x^3+ax^2+bx+8=0$ 有三根相同，求 $b$。',
    answer: '12',
    hasImage: false,
  },
  {
    id: '17a0f6e35e5',
    chapter: '數與式',
    question:
      '下列各方程式中，請選出有實數解的選項。\n(1) $|x|+|x-5|=1$ (2) $|x|+|x-5|=6$\n(3) $|x|-|x-5|=1$ (4) $|x|-|x-5|=6$\n(5) $|x|-|x-5|=-1$',
    answer: '(2)(3)(5)',
    hasImage: false,
  },
  {
    id: '17a0f700535',
    chapter: '數與式',
    question:
      '試問數線上有多少個整數點與點 $\\sqrt{101}$ 的距離小於 5，但與點 $\\sqrt{38}$ 的距離大於 3？',
    answer: '6',
    hasImage: false,
  },
  {
    id: '17a0f72f269',
    chapter: '數與式',
    question:
      '設 $a=\\left(\\frac12\\right)^{\\frac12}$，$b=\\left(\\frac13\\right)^{\\frac13}$，$c=\\left(\\frac14\\right)^{\\frac14}$，試比較三者的大小關係。',
    answer: '$a=c>b$',
    hasImage: false,
  },
  {
    id: '17a0f78f52f',
    chapter: '數與式',
    question:
      '某個手機程式，每次點擊螢幕上的數 $a$ 後，螢幕上的數會變成 $a^2$。當一開始時螢幕上的數 $b$ 為正且連續點擊螢幕三次後，螢幕上的數接近 $81^3$。試問實數 $b$ 最接近下列哪一個選項？($\\sqrt3\\approx1.732$)\n(1) 1.7 (2) 3 (3) 5.2 (4) 9 (5) 81',
    answer: '(3)',
    hasImage: false,
  },
  {
    id: '17a0f7cb255',
    chapter: '數與式',
    question:
      '已知 $\\log278\\approx2.44404$，$\\log2.5351\\approx0.40400$，請利用這兩個對數值，求 $278^{100}$ 乘開後的科學記號表法，取三位有效數字。',
    answer: '$2.54\\times10^{244}$',
    hasImage: false,
  },
  {
    id: '17a0f7ed607',
    chapter: '數與式',
    question:
      '觀察 2 的次方所形成的等比數列：$2,2^2,2^3,\\cdots$，設其中出現的第一個 13 位數為 $2^n$，求 $n$。($\\log2\\approx0.3010$)',
    answer: '40',
    hasImage: false,
  },
  {
    id: '17966d95335',
    chapter: '數與式',
    question: '化簡 $(3a-2b)^3$',
    answer: '$27a^3-18a^2b+12ab^2-8b^3$',
    hasImage: false,
  },
  {
    id: '17966da3a45',
    chapter: '數與式',
    question: '化簡 $(2x+3)(4x^2-6x+9)$',
    answer: '$8x^3+27$',
    hasImage: false,
  },
  {
    id: '17966db0d85',
    chapter: '數與式',
    question: '化簡 $(a-b+3)(a-b-3)$',
    answer: '$a^2-2ab+b^2-9$',
    hasImage: false,
  },
  {
    id: '17966e46808',
    chapter: '數與式',
    question: '因式分解 $x^3+6x^2+12xy^2+8y^3$',
    answer: '$(x+2y)^3$',
    hasImage: false,
  },
  {
    id: '17966e50e90',
    chapter: '數與式',
    question: '因式分解 $x^4-y^4$',
    answer: '$(x^2+y^2)(x+y)(x-y)$',
    hasImage: false,
  },
  {
    id: '17966e6cae0',
    chapter: '數與式',
    question: '化簡 $(a-3)(a+3)(a^2-3a+9)(a^2+3a+9)$',
    answer: '$a^6-729$',
    hasImage: false,
  },
  {
    id: '179670b1cf0',
    chapter: '數與式',
    question:
      '化簡下列各式：\n(1) $\\frac{1}{x-3}-\\frac{2}{x^2-4x+3}$ (2) $\\frac{2}{x+5}-\\frac{x+25}{x^2-25}$',
    answer: '(1) $\\frac{1}{x-1}$ (2) $\\frac{3}{x-5}$',
    hasImage: false,
  },
  {
    id: '1796711996f',
    chapter: '數與式',
    question:
      '化簡下列各式：\n(1) $\\frac{1}{x+2}-\\frac{2x+5}{x^2+3x+2}$ (2) $\\frac{x^2+3x}{x^2+5x+6}\\div\\frac{x}{x-2}$',
    answer: '(1) $\\frac{3}{x+1}$ (2) $\\frac{x-2}{x+2}$',
    hasImage: false,
  },
  {
    id: '1796721257b',
    chapter: '數與式',
    question:
      '設 $a+b=5$，$a^2+b^2=33$，則：\n(1) $a^3+b^3$ (2) $\\frac{a}{b}+\\frac{b}{a}$ (3) $a^2-b^2$',
    answer: '(1) $185$ (2) $-\\frac{33}{4}$ (3) $\\pm\\sqrt{41}$',
    hasImage: false,
  },
  {
    id: '1796722b7b6',
    chapter: '數與式',
    question: '設 $a+b=3$，$ab=1$，則：\n(1) $a^2+b^2$ (2) $a^2-b^2$ (3) $a^3+b^3$',
    answer: '(1) $7$ (2) $\\pm3\\sqrt{5}$ (3) $18$',
    hasImage: false,
  },
  {
    id: '17967250e4f',
    chapter: '數與式',
    question:
      '已知 $x+\\frac{1}{x}=5$，試求下列各式之值：\n(1) $x^2+\\frac{1}{x^2}$ (2) $x^3+\\frac{1}{x^3}$',
    answer: '(1) $23$ (2) $110$',
    hasImage: false,
  },
  {
    id: '1796725f6d0',
    chapter: '數與式',
    question:
      '已知 $x-\\frac{1}{x}=3$，試求下列各式之值：\n(1) $x^2+\\frac{1}{x^2}$ (2) $x^3-\\frac{1}{x^3}$',
    answer: '(1) $11$ (2) $36$',
    hasImage: false,
  },
  {
    id: '17971323175',
    chapter: '數與式',
    question: '$16$ 的平方根為？',
    answer: '$\\pm4$',
    hasImage: false,
  },
  {
    id: '179713341f3',
    chapter: '數與式',
    question: '$2x-1$ 是 $64$ 的平方根，則 $x=$？',
    answer: '$\\frac{9}{2}$ 或 $-\\frac{7}{2}$',
    hasImage: false,
  },
  {
    id: '179713f505b',
    chapter: '數與式',
    question: '化簡 $(2\\sqrt{3}+5\\sqrt{6})(2\\sqrt{6}-\\sqrt{3})$',
    answer: '$54-3\\sqrt{2}$',
    hasImage: false,
  },
  {
    id: '17971404754',
    chapter: '數與式',
    question: '化簡 $(\\sqrt{6}+\\sqrt{2})^2$',
    answer: '$8+4\\sqrt{3}$',
    hasImage: false,
  },
  {
    id: '17971414438',
    chapter: '數與式',
    question: '化簡 $\\frac{2\\sqrt{3}}{\\sqrt{6}}+\\frac{4}{\\sqrt{2}}$',
    answer: '$3\\sqrt{2}$',
    hasImage: false,
  },
  {
    id: '1797146a9d6',
    chapter: '數與式',
    question:
      '化簡 $\\frac{\\sqrt{2}}{\\sqrt{3}+\\sqrt{2}}-\\frac{\\sqrt{2}}{\\sqrt{3}-\\sqrt{2}}$',
    answer: '$-4$',
    hasImage: false,
  },
  {
    id: '17971430035',
    chapter: '數與式',
    question: '化簡 $\\sqrt{3+2\\sqrt{2}}$',
    answer: '$1+\\sqrt{2}$',
    hasImage: false,
  },
  {
    id: '1797143dff1',
    chapter: '數與式',
    question: '化簡 $\\sqrt{11-\\sqrt{72}}$',
    answer: '$3-\\sqrt{2}$',
    hasImage: false,
  },
  {
    id: '17971486cd5',
    chapter: '數與式',
    question: '化簡 $\\sqrt{28-10\\sqrt{3}}$',
    answer: '$5-\\sqrt{3}$',
    hasImage: false,
  },
  {
    id: '1797144b8ac',
    chapter: '數與式',
    question: '化簡 $\\sqrt{2+\\sqrt{3}}$',
    answer: '$\\frac{\\sqrt{6}+\\sqrt{2}}{2}$',
    hasImage: false,
  },
  {
    id: '179714ae086',
    chapter: '數與式',
    question:
      '設 $\\sqrt{4+2\\sqrt{3}}$ 之整數部分為 $a$，小數部分為 $b$ ($0\\le b\\le1$)，試求 $\\frac{1}{b}-\\frac{1}{a+b}=$？',
    answer: '$1$',
    hasImage: false,
  },
  {
    id: '179714bed16',
    chapter: '數與式',
    question:
      '設 $a=\\sqrt{41-12\\sqrt{5}}$，且 $b$ 為 $a$ 的純小數部分，則 $\\frac{a}{4}+\\frac{1}{b}=$？',
    answer: '$\\frac{9}{4}$',
    hasImage: false,
  },
  {
    id: '179714e1972',
    chapter: '數與式',
    question: '試比較 $a=\\sqrt{20}+\\sqrt{10}$，$b=\\sqrt{19}+\\sqrt{11}$ 的大小關係。',
    answer: '$b>a$',
    hasImage: false,
  },
  {
    id: '17971508a12',
    chapter: '數與式',
    question:
      '設 $a=2\\sqrt{2}+\\sqrt{3}$，$b=\\sqrt{7}+2$，$c=\\sqrt{6}+\\sqrt{5}$，則 $a$，$b$，$c$ 的大小關係為？',
    answer: '$c>b>a$',
    hasImage: false,
  },
  {
    id: '179734d440d',
    chapter: '數與式',
    question:
      '化簡 $\\frac{1}{1+\\sqrt{2}}+\\frac{1}{\\sqrt{2}+\\sqrt{3}}+\\frac{1}{\\sqrt{3}+\\sqrt{4}}+\\dots$\n$+\\frac{1}{\\sqrt{99}+\\sqrt{100}}=$？',
    answer: '$9$',
    hasImage: false,
  },
  {
    id: '179734ed12b',
    chapter: '數與式',
    question:
      '化簡 $\\frac{1}{1+\\sqrt{3}}+\\frac{1}{\\sqrt{3}+\\sqrt{5}}+\\frac{1}{\\sqrt{5}+\\sqrt{7}}+\\frac{1}{\\sqrt{7}+\\sqrt{9}}=$？',
    answer: '$1$',
    hasImage: false,
  },
  {
    id: '17973e3e4c0',
    chapter: '數與式',
    question: '六位數 $92a92b$ 可被 $9$ 整除，則 $a+b=$？',
    answer: '$5$ 或 $14$',
    hasImage: false,
  },
  {
    id: '17973e5d9f2',
    chapter: '數與式',
    question: '$247023846$ 是否為 $6$ 的倍數？',
    answer: '是',
    hasImage: false,
  },
  {
    id: '17974036c15',
    chapter: '數與式',
    question: '將分數化為小數：(1) $\\frac{1}{8}$ (2) $\\frac{3}{7}$ ',
    answer: '(1) $0.125$ (2) $0.\\overline{428571}$',
    hasImage: false,
  },
  {
    id: '17974071318',
    chapter: '數與式',
    question:
      '將下列循環小數化為分數：\n(1) $0.\\overline{4}$ (2) $0.\\overline{45}$ (3) $0.2\\overline{75}$ ',
    answer: '(1) $\\frac{4}{9}$ (2) $\\frac{5}{11}$ (3) $\\frac{91}{330}$',
    hasImage: false,
  },
  {
    id: '1797416af7c',
    chapter: '數與式',
    question:
      '下列哪些分數可化成有限小數？(多選)\n(A) $\\frac{7}{25}$ (B) $\\frac{5}{32}$ (C) $\\frac{3}{48}$ (D) $\\frac{224}{175}$ (E) $\\frac{5}{60}$',
    answer: '(A)(B)(C)(D)',
    hasImage: false,
  },
  {
    id: '179742106b6',
    chapter: '數與式',
    question:
      '設 $a=\\frac{50}{37}$、$b=\\frac{59}{46}$、$c=\\frac{86}{73}$，則 $a$、$b$、$c$ 的大小關係為？',
    answer: '$a>b>c$',
    hasImage: false,
  },
  {
    id: '17974229355',
    chapter: '數與式',
    question:
      '設 $a=\\frac{128}{123}$、$b=\\frac{461}{456}$、$c=\\frac{794}{789}$，則 $a$、$b$、$c$ 的大小關係為？',
    answer: '$a>b>c$',
    hasImage: false,
  },
  {
    id: '1797429c954',
    chapter: '數與式',
    question:
      '下列選項，哪些是正確的？(多選)\n(A)若 $a,b\\in\\mathbb{Q}$，則 $a+b\\in\\mathbb{Q}$\n(B)若 $a,b\\notin\\mathbb{Q}$，則 $a+b\\notin\\mathbb{Q}$\n(C)若 $a\\in\\mathbb{Q}$，$b\\notin\\mathbb{Q}$，則 $ab\\notin\\mathbb{Q}$\n(D)若 $a,b\\notin\\mathbb{Q}$，則 $ab\\notin\\mathbb{Q}$\n(E)設 $a,b\\in\\mathbb{Q}$，$a,b\\neq0$，則 $a+b\\sqrt{2}\\notin\\mathbb{Q}$',
    answer: '(A)(E)',
    hasImage: false,
  },
  {
    id: '179742f217d',
    chapter: '數與式',
    question:
      '$a,b\\notin\\mathbb{Q}$，$c\\in\\mathbb{Q}$，則下列何者正確？(單選)\n(A) $a\\times b\\notin\\mathbb{Q}$\n(B) $a+b\\notin\\mathbb{Q}$\n(C) $a\\times c\\notin\\mathbb{Q}$\n(D) $a+c\\notin\\mathbb{Q}$\n(E) $a\\times b$ 與 $a+b$ 至少有一個是無理數',
    answer: '(D)',
    hasImage: false,
  },
  {
    id: '1797447ff23',
    chapter: '數與式',
    question:
      '設實數 $a$、$b$ 滿足 $0<a<1$，$0<b<1$，則下列選項哪些必定為真？(多選)\n(A) $0<a+b<2$\n(B) $0<ab<1$\n(C) $-1<b-a<0$\n(D) $0<\\frac{a}{b}<1$\n(E) $|a-b|<1$',
    answer: '(A)(B)(E)',
    hasImage: false,
  },
  {
    id: '179744adbca',
    chapter: '數與式',
    question:
      '$a,b,c,d\\in\\mathbb{R}$，則下列選項哪些正確？(多選)\n(A) 若 $a>b$，則 $ac>bc$\n(B) 若 $a>b$，$c>d$，則 $a-c>b-d$\n(C) 若 $a>b$，$c>d$，則 $ac>bd$\n(D) 若 $a>b$，$c>d$，則 $a+c>b+d$\n(E) 若 $|a|<|b|$，則 $a+|b|>0$',
    answer: '(D)(E)',
    hasImage: false,
  },
  {
    id: '1797456a8ad',
    chapter: '數與式',
    question: '在數線上標出範圍：\n(1) $x>3$ (2) $-2\\le x<4$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17974577c58',
    chapter: '數與式',
    question: '在數線上標出範圍：\n(1) $[-1,2)$ (2) $(-\\infty,2]$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '179747194d1',
    chapter: '數與式',
    question:
      '數線上 $A$、$B$ 兩點的坐標分別為 $-5$、$9$，且 $P$ 點在 $\\overline{AB}$ 上，若 $\\overline{AP}:\\overline{BP}=3:4$，則 $P$ 點的坐標為？',
    answer: '$1$',
    hasImage: false,
  },
  {
    id: '1797473e1e3',
    chapter: '數與式',
    question:
      '數線上 $A$、$B$ 兩點的坐標分別為 $-\\frac{7}{3}$、$\\frac{11}{2}$，$P$ 點為 $A$、$B$ 中點，則 $P$ 點的坐標為？',
    answer: '$\\frac{19}{12}$',
    hasImage: false,
  },
  {
    id: '1797476bcdb',
    chapter: '數與式',
    question:
      '數線上 $A$、$B$ 兩點的坐標分別為 $3$、$-7$，若 $P$ 點在 $AB$ 直線上，且 $\\overline{AP}:\\overline{PB}=2:3$，則 $P$ 點坐標為？',
    answer: '$-1$ 或 $23$',
    hasImage: false,
  },
  {
    id: '1797479e4e0',
    chapter: '數與式',
    question:
      '數線上 $A$、$B$、$P$、$Q$ 四點，坐標分別是 $-6$、$9$、$1$、$-5$，若 $C$ 點在 $\\overline{AB}$ 上且 $\\overline{AC}:\\overline{CB}=3:2$，$R$ 點是 $\\overline{PQ}$ 的中點，則 $\\overline{CR}=$？',
    answer: '$5$',
    hasImage: false,
  },
  {
    id: '179747bfde7',
    chapter: '數與式',
    question:
      '$r,s\\in\\mathbb{R}$，$r<s$，$a=\\frac{r+3s}{4}$，$b=\\frac{r+5s}{6}$，$c=\\frac{5r+s}{6}$，則 $a$、$b$、$c$ 的大小依序為？',
    answer: '$c<a<b$',
    hasImage: false,
  },
  {
    id: '1797480949e',
    chapter: '數與式',
    question:
      '$a,b\\in\\mathbb{R}$，$a<b$，下列何數最大？(單選)\n(A) $\\frac{a+b}{2}\\quad$(B) $\\frac{a+2b}{3}\\quad$(C) $\\frac{2a+b}{3}$\n(D) $\\frac{3a+2b}{5}\\quad$(E) $\\frac{a+4b}{5}$',
    answer: '(E)',
    hasImage: false,
  },
  {
    id: '179757a606e',
    chapter: '數與式',
    question: '求 $|x|=5$ 並將解描繪在數線上',
    answer: '$\\pm5$',
    hasImage: false,
  },
  {
    id: '179757bb299',
    chapter: '數與式',
    question: '求 $|x+4|=6$ 並將解描繪在數線上',
    answer: '$-10$ 或 $2$',
    hasImage: false,
  },
  {
    id: '179757f30b3',
    chapter: '數與式',
    question:
      '數線上 $A$、$B$、$C$、$D$ 四點，$A$ 點的坐標為 $-2$，$B$ 點的坐標為 $7$，$C$ 點的坐標為 $24$，若 $\\overline{AB}=\\overline{CD}$，試求 $D$ 點的坐標',
    answer: '$15$ 或 $33$',
    hasImage: false,
  },
  {
    id: '17975876dfa',
    chapter: '數與式',
    question:
      '數線上三點 $A$、$B$、$C$，所代表的數分別為 $3$、$5$、$8$，今將 $\\overline{AB}$ 十等分，由左至右其第三個等分點 $P$；將 $\\overline{BC}$ 五等分，由左至右其第二個等分點 $Q$，則 $\\overline{PQ}=$？',
    answer: '$2.6$',
    hasImage: false,
  },
  {
    id: '1797fcf4177',
    chapter: '數與式',
    question: '設 $|2x-1|=|x+3|$，則 $x=$？',
    answer: '$-\\frac{2}{3}$ 或 $4$',
    hasImage: false,
  },
  {
    id: '1797fd09764',
    chapter: '數與式',
    question: '設 $|x-1|+|x-2|=4$，則 $x=$？',
    answer: '$-\\frac{1}{2}$ 或 $\\frac{7}{2}$',
    hasImage: false,
  },
  {
    id: '1797fd30bb4',
    chapter: '數與式',
    question: '解下列不等式：\n(1) $|2x-1|>3$ (2) $3<|3x-2|\\le8$',
    answer: '(1) $x>2$ 或 $x<-1$ (2) $\\frac{5}{3}<x\\le\\frac{10}{3}$ 或 $-2\\le x<-\\frac{1}{3}$',
    hasImage: false,
  },
  {
    id: '1797fd9a454',
    chapter: '數與式',
    question: '不等式 $2<|3x+1|\\le7$ 之解為？',
    answer: '$-\\frac{8}{3}\\le x<-1$ 或 $\\frac{1}{3}<x\\le2$',
    hasImage: false,
  },
  {
    id: '1797fd59820',
    chapter: '數與式',
    question: '若 $|ax+1|\\le b$ 的解為 $-2\\le x\\le6$，則數對 $(a,b)=$？',
    answer: '$\\left(-\\frac{1}{2},2\\right)$',
    hasImage: false,
  },
  {
    id: '1797fd78e76',
    chapter: '數與式',
    question: '若 $|-3x+a|\\le b$ 的解為 $-1\\le x\\le5$，則數對 $(a,b)=$？',
    answer: '$(6,9)$',
    hasImage: false,
  },
  {
    id: '1797fdd1fa4',
    chapter: '數與式',
    question: '不等式 $|x-5|>|2x-4|$ 之解為？',
    answer: '$-1<x<3$',
    hasImage: false,
  },
  {
    id: '1797fdeaccf',
    chapter: '數與式',
    question: '不等式 $|x|+2|x-2|>5$ 之解為？',
    answer: '$x>3$ 或 $x<-\\frac{1}{3}$',
    hasImage: false,
  },
  {
    id: '1798b050aba',
    chapter: '數與式',
    question:
      '已知 $x$，$y$ 為實數，且滿足 $-1\\le x\\le2$，$1\\le y\\le3$，則：\n(1) $x-2y$ 的最大值為？最小值為？\n(2) $x^2+y^2$ 的最大值為？最小值為？\n(3) $\\frac{x}{y}$ 的最大值為？最小值為？',
    answer: '(1) $0$；$-7$ (2) $13$；$1$ (3) $2$；$-1$',
    hasImage: false,
  },
  {
    id: '1798b07214b',
    chapter: '數與式',
    question:
      '設 $x$，$y$ 為實數，$|x+1|\\le3$，$|y-3|\\le3$，則：\n(1) $-2x+3y$ 的最大值為？最小值為？\n(2) $xy$ 的最大值為？最小值為？',
    answer: '(1) $26$；$-4$ (2) $12$；$-24$',
    hasImage: false,
  },
  {
    id: '1798b109339',
    chapter: '數與式',
    question: '設 $a,b\\ge0$，且 $a+2b=8$，則 $ab$ 之最大值為？此時 $(a,b)=$？',
    answer: '$8$；$(4,2)$',
    hasImage: false,
  },
  {
    id: '1798b1374e2',
    chapter: '數與式',
    question: '設 $a,b\\ge0$，且 $ab=16$，求 $a+b$ 的最小值為？此時 $(a,b)=$？',
    answer: '$8$；$(4,4)$',
    hasImage: false,
  },
  {
    id: '1798b16b101',
    chapter: '數與式',
    question: '用一條長 $24$ 公尺的繩子，所能圍出的矩形面積最大是多少？',
    answer: '$36$ 平方公尺',
    hasImage: false,
  },
  {
    id: '1798b184ce6',
    chapter: '數與式',
    question:
      '用一條長 $40$ 公尺的繩子在河邊圍一矩形草地(只圍三邊，靠河那邊不圍)，則此矩形草地的最大面積為？',
    answer: '$200$ 平方公尺',
    hasImage: false,
  },
];

// 指數對數
const expAndLog: Question[] = [
  {
    id: '17c97d881f4',
    chapter: '指數對數',
    question: '若 $\\log a=0.2$，求 $a^5$。',
    answer: '$10$',
    hasImage: false,
  },
  {
    id: '17c97d98bb6',
    chapter: '指數對數',
    question: '若 $\\log 3=b$，求 $1000^b$。',
    answer: '$27$',
    hasImage: false,
  },
  {
    id: '17c97dbd874',
    chapter: '指數對數',
    question:
      '甲數的常用對數值是 $1.23$，試問：\n(1) 若乙數為甲數的 $10$ 倍，求乙數的常用對數值。\n(2) 若丙數為甲數的 $\\frac1{100}$ 倍，求丙數的常用對數值。',
    answer: '(1) $2.23$ (2) $-0.77$',
    hasImage: false,
  },
  {
    id: '17c97dd4cb5',
    chapter: '指數對數',
    question: '$\\log(\\log x)=1$，試問 $x$ 是幾位數？',
    answer: '$11$',
    hasImage: false,
  },
  {
    id: '17c97e02e77',
    chapter: '指數對數',
    question: '$(\\log1000)(10^{\\log2})=$？',
    answer: '$6$',
    hasImage: false,
  },
  {
    id: '17c97e16def',
    chapter: '指數對數',
    question: '已知 $\\log a=3.425$，$\\log b=-0.575$，請問 $a$ 是 $b$ 的幾倍？',
    answer: '$10000$',
    hasImage: false,
  },
  {
    id: '17c97e4be96',
    chapter: '指數對數',
    question: '已知 $10^{\\log a}=2.6$ 且 $10^{\\log 3}=b$，求 $ab$。',
    answer: '$7.8$',
    hasImage: false,
  },
  {
    id: '17c97e62db0',
    chapter: '指數對數',
    question: '已知 $x$ 為四位數，$n<\\log x<n+1$，求 $n$。',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '17ca910f903',
    chapter: '指數對數',
    question: '求 $\\log\\frac7{36}+2\\log3-\\log\\frac{14}{25}+5\\log2$。',
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '17ca9127311',
    chapter: '指數對數',
    question: '求 $(\\log_25+\\log_4125)\\cdot\\log_564$。',
    answer: '$15$',
    hasImage: false,
  },
  {
    id: '17ca913919d',
    chapter: '指數對數',
    question:
      '設 $\\log_23=a$，$\\log_37=b$，試以 $a$、$b$ 表示：(1) $\\log_27$ (2) $\\log_{14}63$',
    answer: '(1) $ab$ (2) $\\frac{ab+2a}{ab+1}$',
    hasImage: false,
  },
  {
    id: '17ca9150924',
    chapter: '指數對數',
    question: '已知 $\\log_{(a-1)}(3+2a-a^2)$ 有意義，求 $a$ 的範圍。',
    answer: '$-1<a<3$，$a\\ne2$',
    hasImage: false,
  },
  {
    id: '17ca91604bf',
    chapter: '指數對數',
    question: '求 $\\log_4(\\log_29)+3\\log_{64}(\\log_34)$。',
    answer: '$1$',
    hasImage: false,
  },
  {
    id: '17ca9170a4c',
    chapter: '指數對數',
    question: '設 $\\log_52=x$，$\\log_45=y$，求 $5^{3x-\\frac2y+1}$ 之值。',
    answer: '$\\frac52$',
    hasImage: false,
  },
  {
    id: '17ca91820bd',
    chapter: '指數對數',
    question: '方程式 $-x+2=\\log_\\frac12x$ 有多少個實根？',
    answer: '$3$ 個',
    hasImage: false,
  },
  {
    id: '17ca9193313',
    chapter: '指數對數',
    question: '方程式 $\\log_\\frac12(x+3)-2\\log_\\frac12(x-1)=1$，求 $x$。',
    answer: '$5$',
    hasImage: false,
  },
  {
    id: '17ca919de87',
    chapter: '指數對數',
    question: '求不等式 $\\log_\\frac12x>-2$ 之解。',
    answer: '$0<x<4$',
    hasImage: false,
  },
  {
    id: '17ca91c424b',
    chapter: '指數對數',
    question:
      '已知 $\\log2\\approx0.3010$，$\\log7\\approx0.8451$，試求滿足 $(\\frac27)^n<\\frac1{1000}$ 的最小自然數 $n$。',
    answer: '$6$',
    hasImage: false,
  },
  {
    id: '17ca91d99bf',
    chapter: '指數對數',
    question:
      '已知 $\\log2\\approx0.3010$，$\\log3\\approx0.4771$，$\\log7\\approx0.8451$，將 $3^{90}$ 乘開之後是幾位數？最高位數字是？',
    answer: '$43$；$8$',
    hasImage: false,
  },
  {
    id: '17ca920a850',
    chapter: '指數對數',
    question:
      '某種濾過性病毒有害人體，某人將此病毒 $100$ 個吸進體內，已知此病毒在人體內每隔 $6$ 小時就會分裂成 $2$ 個，當體內達到 $1$ 億個病毒時身體就會出現異常反應，此期間稱為潛伏期，請問此病毒在體內的潛伏期大約有幾天？\n(1) $3$ 天 (2) $5$ 天 (3) $8$ 天 (4) $10$ 天 (5) $15$ 天',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '179c5a8681e',
    chapter: '指數對數',
    question:
      '求 $\\frac{(2^2\\times3^2)\\times(2^5\\times3^2\\times5^3)}{(2^4\\times3^3)\\times(3\\times5^2)}$。',
    answer: '$40$',
    hasImage: false,
  },
  {
    id: '179c5bb1a92',
    chapter: '指數對數',
    question:
      '求 $\\left(\\frac{5}{2}\\right)^3\\times\\left(\\frac{6}{5}\\right)^4\\times\\left(\\frac{4}{3}\\right)^2$。',
    answer: '$\\frac{288}{5}$',
    hasImage: false,
  },
  {
    id: '179c5bad9e9',
    chapter: '指數對數',
    question: '求 $\\left(\\frac{1}{4}\\right)^{-2}\\times2^{-3}$。',
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '179c5be5558',
    chapter: '指數對數',
    question: '求 $(\\sqrt{3}+1)^{-4}\\times(\\sqrt{3}-1)^{-3}$。',
    answer: '$\\frac{\\sqrt{3}-1}{16}$',
    hasImage: false,
  },
  {
    id: '179c5c443f0',
    chapter: '指數對數',
    question:
      '已知在某項新實驗中，細菌數 $1$ 日後增加 $k$ 倍，且 $3$ 日後細菌數為 $200$，$5$ 日後細菌數為 $1800$，試問：\n(1) $k=$？\n(2) 若 $n$ 日後的細菌數為 $48600$，求 $n$。',
    answer: '(1) $3$ (2) $8$',
    hasImage: false,
  },
  {
    id: '179c5c685a9',
    chapter: '指數對數',
    question:
      '一張 A4 的影印紙厚度大約 $0.01$ 公分，若對摺一次變成 $0.01\\times2$ 公分，再對摺一次變成 $0.01\\times2^2$ 公分，以此類推。若將這張 A4 的紙對摺 $15$ 次，試計算出它的厚度大約為幾公分。(四捨五入至整數位)',
    answer: '$328$',
    hasImage: false,
  },
];

// 多項式函數
const polynomial: Question[] = [
  {
    id: '184efea335c',
    chapter: '多項式函數',
    question:
      '蟋蟀是會隨著周遭溫度改變體溫的變溫動物，當溫度升高時，蟋蟀翅膀的摩擦速度會變快，所以固定時間內的鳴叫次數也會增加。科學家發現，將蟋蟀 13.5 秒內鳴叫的次數，加上 41 所得的數字，就是目前的華氏溫度，即 $f(t)=13.5t+41$，其中 $t$ 為蟋蟀每秒鳴叫的次數，$f(t)$ 為目前的華氏溫度。例如：$f(2)=68$，即當每秒鳴叫 2 次時的華氏溫度為 68 度。若有另一個函數 $g(t)=at+b$，其中 $t$ 為蟋蟀每秒鳴叫的次數，$g(t)$ 為目前的攝氏溫度。已知攝氏溫度＝(華氏溫度-32)$\\times\\dfrac59$，求 $a+b$ 。',
    answer: '12.5',
    hasImage: false,
  },
  {
    id: '184efe4ba51',
    chapter: '多項式函數',
    question:
      '如圖，設三次多項式函數 $y=f(x)$ 的圖形上的兩點 $A(0,10)$，$B(\\dfrac43,0)$，若 $f(x)=0$ 的另兩個根皆為整數，且 $f(x)\\le0$ 的正整數解恰有 2 個，$f(x)\\ge0$ 的負整數解恰有 5 個，求 $f(x)$ 除以 $x-10$ 的餘式。',
    answer: '455',
    hasImage: true,
  },
  {
    id: '1858b283fc8',
    chapter: '多項式函數',
    question: '已知二次函數 $f(x)=-2x^2+8x+(k-3)$ 之值恆為負數或 0，求實數 $k$ 的範圍。',
    answer: '$k\\le5$',
    hasImage: false,
  },
  {
    id: '1858b299b71',
    chapter: '多項式函數',
    question: '不等式 $(x^2+x+2)(x-5)(2x-25)\\le0$ 有幾個整數解？',
    answer: '8',
    hasImage: false,
  },
  {
    id: '1858b2a8c4b',
    chapter: '多項式函數',
    question:
      '設 $f(x)=ax^2+4x+11$，其中 $a$ 為實數，若 $f(x)$ 除以 $x+1$ 的餘式為 4，求 $f(x)$ 除以 $x-3$ 的餘式。',
    answer: '-4',
    hasImage: false,
  },
  {
    id: '1858b2b4847',
    chapter: '多項式函數',
    question: '二次函數 $y=9x^2+7x-1$ 圖形頂點位於第幾象限？',
    answer: '三',
    hasImage: false,
  },
  {
    id: '1858b2c5a4f',
    chapter: '多項式函數',
    question: '設 $f(x)=7x^5-40x^4+28x^3-25x^2$$+57x-15$，求 $f(5)$。',
    answer: '20',
    hasImage: false,
  },
  {
    id: '1858b2d7915',
    chapter: '多項式函數',
    question: '設 $a$ 為實數，若二次不等式 $(2a-3)x^2-2ax+(a+2)<0$ 沒有實數解，試求 $a$ 的範圍。',
    answer: '$a\\ge2$',
    hasImage: false,
  },
  {
    id: '1858b2f022d',
    chapter: '多項式函數',
    question:
      '設 $y=f(x)$ 為三次實係數多項式，若 $f(-2)=f(1)=f(3)=0$，且圖形過點 (2, 4)，求不等式 $f(x)>0$ 的解。',
    answer: '$x<-2$ or $1<x<3$',
    hasImage: false,
  },
  {
    id: '1858b301a9f',
    chapter: '多項式函數',
    question: '當 $2\\le x\\le4$ 時，$y=-2x^2+4x+5$ 有最大值 $M$，求 $M$。',
    answer: '5',
    hasImage: false,
  },
  {
    id: '185853517f0',
    chapter: '多項式函數',
    question:
      '設 $f(x)=x^4+ax^3+bx^2+cx+d$，其中 $a,b,c,d$ 為實數。若 $f(x)$ 分別除以 $x-4$、$x+2$、$x-7$、$x+8$ 時所得的餘數皆為 2020，則常數項 $d=\\textcirc{6-1}\\textcirc{6-2}\\textcirc{6-3}\\textcirc{6-4}$。',
    answer: '2468',
    hasImage: false,
  },
  {
    id: '1855ea457da',
    chapter: '多項式函數',
    question:
      '設多項式 $f(x)$ 除以 $x+1$、$x+2$ 的餘式分別為 -1、2，且 $f(x)$ 除以 $x^2+3x+2$ 的餘式為 $px+q$，求數對 $(p,q)$。',
    answer: '(-3, -4)',
    hasImage: false,
  },
  {
    id: '1855ea2e3a4',
    chapter: '多項式函數',
    question:
      '已知三次函數 $y=f(x)$ 的對稱中心為 (1, 2) 且點 (2, 1) 與點 (3, -12) 在此三次函數圖形上，求 $f(0)$。',
    answer: '3',
    hasImage: false,
  },
  {
    id: '1855ea1849e',
    chapter: '多項式函數',
    question: '已知多項式函數 $f(x)=(x^4-9x^2+4)(x+2)-5$，求 $f(x)$ 除以 $x+3$ 的餘式。',
    answer: '-9',
    hasImage: false,
  },
  {
    id: '1855e9f1218',
    chapter: '多項式函數',
    question:
      '已知 $f(x)=x^3+ax^2+bx+c$ 的圖形過三點 (1, 0), (0, 0), (-1, 0)，則將 $y=f(x)$ 的圖形向左平移 2 單位得 $y=g(x)$ 的圖形，求不等式 $g(x)>0$ 的解。',
    answer: '$-3<x<-2$ or $x>-1$',
    hasImage: false,
  },
  {
    id: '1855e9b97ad',
    chapter: '多項式函數',
    question: '不等式 $(x+2)^{105}(x^2-2x-4)(x^2-2x+5)\\le0$ 的整數解有幾個？',
    answer: '4',
    hasImage: false,
  },
  {
    id: '1855e9a82e8',
    chapter: '多項式函數',
    question: '求不等式 $x^2(x+5)(x+1)(x-4)$$<(2x-3)(x+5)(x+1)(x-4)$ 的解。',
    answer: '$x<-5$ or $-1<x<4$',
    hasImage: false,
  },
  {
    id: '1855e99ba58',
    chapter: '多項式函數',
    question:
      '已知三次函數 $y=f(x)$ 與 $x$ 軸交於點 $P(-1,0)$、$Q(2,0)$，且函數圖形也過 $(0, -6)$、(4, -50) 兩點，求不等式 $f(x)>0$ 的解。',
    answer: '$x<-1$ or $\\frac32<x<2$',
    hasImage: true,
  },
  {
    id: '1855e9837a8',
    chapter: '多項式函數',
    question: '已知二次函數 $y=ax^2+8x-5$ 的圖形恆在直線 $y=2x+4$ 的下方，求 $a$ 的範圍。',
    answer: '$a<-1$',
    hasImage: false,
  },
  {
    id: '1855e97653f',
    chapter: '多項式函數',
    question:
      '設 $f(x)=mx^2+(2m-3)x+(m-1)$，其中 $m\\ne0$，若對任意實數 $f(x)>0$ 恆成立，求 $m$ 的範圍。',
    answer: '$m>\\frac98$',
    hasImage: false,
  },
  {
    id: '1855e962b8c',
    chapter: '多項式函數',
    question: '滿足不等式 $(x-2)(3x+20)(x-6)(2x+3)<0$ 的整數解有幾個？',
    answer: '8',
    hasImage: false,
  },
  {
    id: '1855e959f66',
    chapter: '多項式函數',
    question: '求不等式 $3(x+1)^2(x-1)>0$ 的解。',
    answer: '$x>1$',
    hasImage: false,
  },
  {
    id: '1855e94dd45',
    chapter: '多項式函數',
    question: '設二次函數 $f(x)=ax^2+5x+a>0$ 恆成立，求 $a$ 的範圍。',
    answer: '$a>\\frac52$',
    hasImage: false,
  },
  {
    id: '1853f46ee20',
    chapter: '多項式函數',
    question:
      '關於三次函數 $y=(x-1)^3+3(x-1)+2$ 圖形的敘述，下列選項哪些是正確的？\n(1) (0, 0) 為對稱中心\n(2) (1, 2) 為對稱中心\n(3) 圖形可經由 $y=x^3+3x$ 平移得到\n(4) 圖形可經由 $y=x^3+3x+2$ 平移得到\n(5) 圖形可經由 $y=x^3$ 平移得到',
    answer: '(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '1853f3985a6',
    chapter: '多項式函數',
    question:
      '已知 $a$ 為實數，多項式 $f(x)$ 滿足 $\\dfrac{f(x)}{(x-3)^2}=\\dfrac3{(x-3)^2}+\\dfrac a{x-3}+2$，且在 $x=2$ 時，$f(x)$ 有最小值 1，試求 $f(x)$ 除以 $x-1$ 的餘式為何？',
    answer: '3',
    hasImage: false,
  },
  {
    id: '1853f4cb5b5',
    chapter: '多項式函數',
    question:
      '關於三次函數 $y=-x^3+3x^2-x+2$ 圖形的敘述，下列選項哪些是正確的？\n(1) $y=f(x)$ 圖形的最右方是上升的\n(2) 若 $g(x)=-(x+2)^3+3(x+2)^2-(x+2)+2$，則將 $y=f(x)$ 的圖形向右平移 2 單位可得 $y=g(x)$ 的圖形\n(3) 若 $y=f(x)$ 的圖形可由 $y=ax^3+px$ 的圖形經適當平移後得到，則 $a=-1$\n(4) 若 $y=f(x)$ 的圖形可由 $y=ax^3+px$ 的圖形經適當平移後得到，則 $p=3$\n(5) $y=f(x)$ 的圖形為點對稱圖形',
    answer: '(3)(5)',
    hasImage: false,
  },
  {
    id: '1853f50f9a9',
    chapter: '多項式函數',
    question:
      '設三次函數 $y=f(x)=a(x+1)^3+b(x+1)+c$。已知廣域看 $y=f(x)$ 的圖形會很接近 $y=-2x^3$ 的圖形，而局部看 $y=f(x)$ 在 $x=-1$ 附近的圖形卻近似於直線 $y=5x+3$，求序組 $(a,b,c)$。',
    answer: '(-2,5,-2)',
    hasImage: false,
  },
  {
    id: '1853f51f711',
    chapter: '多項式函數',
    question:
      '給定三次函數 $y=f(x)=2x^3+6x^2+3x+2$，設 $y=f(x)$ 在 $x=-1$ 附近的一次近似為 $y=ax+b$，求數對 $(a,b)$。',
    answer: '(-3,0)',
    hasImage: false,
  },
  {
    id: '1853f54cabe',
    chapter: '多項式函數',
    question: '解一次不等式 $x-\\dfrac15\\le 1+\\dfrac x2$。',
    answer: '$x\\le\\dfrac{12}5$',
    hasImage: false,
  },
  {
    id: '1853f55503a',
    chapter: '多項式函數',
    question: '求解 $x^2-x-6>0$。',
    answer: '$x>3$ 或 $x<-2$',
    hasImage: false,
  },
  {
    id: '1853f55bb93',
    chapter: '多項式函數',
    question: '求解 $6-5x-x^2>0$。',
    answer: '$-6<x<1$',
    hasImage: false,
  },
  {
    id: '1853f564d9d',
    chapter: '多項式函數',
    question: '求解 $(x-1)(x-4)<x-5$。',
    answer: '無解',
    hasImage: false,
  },
  {
    id: '1853f579d85',
    chapter: '多項式函數',
    question:
      '下列各一元二次不等式何者的解為無解？\n(1) $x^2+x-1>0$\n(2) $x^2-x-3\\le0$\n(3) $x^2+4x+4\\le0$\n(4) $x^2-x+1\\ge0$\n(5) $x^2+x+3\\le0$',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '1853f58b825',
    chapter: '多項式函數',
    question: '圖為四次多項式 $y=f(x)$ 的部分圖形，求不等式 $f(x)\\ge0$ 的解。',
    answer: '$x\\le0$ 或 $x\\ge1$',
    hasImage: true,
  },
  {
    id: '1853f5a3641',
    chapter: '多項式函數',
    question:
      '下列哪些函數圖形對稱於原點？\n(1) $y=x^3+1$\n(2) $y=-0.01x^3$\n(3) $y=x(x+1)(x-1)$\n(4) $y=-\\sqrt3x^3+2x$\n(5) $y=(x-1)^3+2(x-1)+3$',
    answer: '(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '1853f5cbeea',
    chapter: '多項式函數',
    question: '將 $f(x)=2x^2+4x$ 向右平移 3 單位，再向下平移 5 單位，得 $g(x)$，求 $g(x)$。',
    answer: '$2x^2-8x+1$',
    hasImage: false,
  },
  {
    id: '1851f132eb1',
    chapter: '多項式函數',
    question: '已知二次函數 $f(x)=ax^2+bx+c$ 頂點為 (1, -3) 且過點 (2, -1)，求 $a-b+c$。',
    answer: '5',
    hasImage: false,
  },
  {
    id: '1851f14e0ef',
    chapter: '多項式函數',
    question: '已知函數 $y=ax^2+bx+c$，$a\\ne0$，通過 (-6, 3)、(0, 3) 兩點，求其對稱軸方程式。',
    answer: '$x=-3$',
    hasImage: false,
  },
  {
    id: '1851f16e21a',
    chapter: '多項式函數',
    question:
      '圖為二次函數 $y=ax^2+bx+c$ 的圖形。試判定下列數值的正負。\n(1) $a$　(2) $b$　(3) $c$　(4) $b^2-4ac$',
    answer: '(1) - (2) - (3) + (4) +',
    hasImage: true,
  },
  {
    id: '1851f17af9a',
    chapter: '多項式函數',
    question:
      '設 $f(x)=x^2-4x+k$，若不論 $x$ 為任何實數，對應的 $f(x)$ 值恆為正數，求實數 $k$ 的範圍。',
    answer: '$k>4$',
    hasImage: false,
  },
  {
    id: '1851f190c53',
    chapter: '多項式函數',
    question: '已知二次函數 $f(x)=ax^2+bx+\\dfrac1a$ 在 $x=2$ 時有最大值 3，求數對 $(a,b)$。',
    answer: '(-1, 4)',
    hasImage: false,
  },
  {
    id: '1851f1eba63',
    chapter: '多項式函數',
    question: '設函數 $f(x)=x^2+bx+5$ 的對稱軸為 $x=3$，求 $y=f(x)$ 的最小值。',
    answer: '-4',
    hasImage: false,
  },
  {
    id: '1851f1fa335',
    chapter: '多項式函數',
    question: '若二次函數圖形通過 (-2, 11)、(-1, 1)、(2, -5) 三點，求此二次函數。',
    answer: '$2x^2-4x-5$',
    hasImage: false,
  },
  {
    id: '1851f206659',
    chapter: '多項式函數',
    question: '若二次函數圖形以 (-1, 2) 為頂點，又過點 (0, 5)，求此二次函數。',
    answer: '$3x^2+6x+5$',
    hasImage: false,
  },
  {
    id: '1851f21348f',
    chapter: '多項式函數',
    question: '圖為二次函數 $f(x)$ 的部分圖形，求 $f(4)$',
    answer: '-10',
    hasImage: true,
  },
  {
    id: '1851f22ddc1',
    chapter: '多項式函數',
    question:
      '二次函數 $f(x)=x^2+6x+2$ 經向右平移 $h$ 單位、向上平移 $k$ 單位，得一新函數 $g(x)=x^2-10x+22$，試求數對 $(h,k)$。',
    answer: '(8, 4)',
    hasImage: false,
  },
  {
    id: '1851f24bb97',
    chapter: '多項式函數',
    question: '求 $f(x)=x^3+3x^2+5x+7$ 圖形的對稱中心。',
    answer: '(-1, 4)',
    hasImage: false,
  },
  {
    id: '1851f25dfc2',
    chapter: '多項式函數',
    question: '若 $y=ax^3+px$ 的圖形如右，試問 $a$、$p$ 的正負。',
    answer: '$a<0$；$p>0$',
    hasImage: true,
  },
  {
    id: '184fb42781b',
    chapter: '多項式函數',
    question: '設 $f(x)=ax^5+bx^3+cx-3$，若 $f(-3)=7$，求 $f(3)$。',
    answer: '-13',
    hasImage: false,
  },
  {
    id: '184fb442b7e',
    chapter: '多項式函數',
    question: '已知 $x^3+x^2+ax+2$ 除以 $x^2+2x+b$ 的商式為 $x-1$，餘式為 $x+5$，求 $a,b$。',
    answer: '2; 3',
    hasImage: false,
  },
  {
    id: '184fb450156',
    chapter: '多項式函數',
    question: '若多項式 $x^3+4x^2+5x-3$ 除以 $f(x)$ 的商式為 $x+2$，餘式為 $2x-1$，求 $f(x)$。',
    answer: '$x^2+2x-1$',
    hasImage: false,
  },
  {
    id: '184fb46b5a8',
    chapter: '多項式函數',
    question:
      '已知多項式 $f(x)=(x^2-x+1)(x^2+3x-2)+$$x^2-2x+5$，若 $f(x)$ 除以 $x^2-x+1$ 的商式為 $q(x)$，餘式為 $h(x)$，求 $h(x)$。',
    answer: '$-x+4$',
    hasImage: false,
  },
  {
    id: '184fb4bf4ae',
    chapter: '多項式函數',
    question:
      '將多項式 $f(x)=2x^3-13x^2+30x-19$ 改寫成 $f(x)=a_3(x-2)^3+a_2(x-2)^2+$$a_1(x-2)+a_0$，試求 $a_3$、$a_2$、$a_1$、$a_0$、$f(2+\\sqrt3)$。',
    answer: '2; -1; 2; 5; $2+8\\sqrt3$',
    hasImage: false,
  },
  {
    id: '184fb4d569e',
    chapter: '多項式函數',
    question: '試求 $11^5-4\\times11^4-72\\times11^3$$-56\\times11^2+5\\times11+8$。',
    answer: '-58',
    hasImage: false,
  },
  {
    id: '184fb4f0175',
    chapter: '多項式函數',
    question:
      '設多項式 $f(x)$ 除以 $x^2-1$ 的餘式為 $2x+5$，除以 $x^2-x-6$ 的餘式為 $3x+4$，求 $f(x)$ 除以 $x^2+x-2$ 的餘式。',
    answer: '$3x+4$',
    hasImage: false,
  },
  {
    id: '184fb53c2e7',
    chapter: '多項式函數',
    question:
      '某次數學測驗，班上同學最高 75 分，最低 25 分，於是老師想用一次函數 $f(x)=ax+b$ 來調整分數，使 75 分變成 100 分，25 分變成 60 分。今甲生原來考 55 分，試問調整後的成績。',
    answer: '84',
    hasImage: false,
  },
  {
    id: '184fb5525e3',
    chapter: '多項式函數',
    question: '將 $y=-3x^2$ 的圖形向左平移 1 且向上平移 2，得到 $y=ax^2+bx+c$，試求 $a+b+c$。',
    answer: '-10',
    hasImage: false,
  },
  {
    id: '184fb57de6a',
    chapter: '多項式函數',
    question: '已知二次函數 $f(x)=x^2-6x+2$，試求函數在 $0\\le x\\le8$ 的最大值、最小值。',
    answer: '18; -7',
    hasImage: false,
  },
  {
    id: '184fb590dd4',
    chapter: '多項式函數',
    question: '已知 $1\\le x\\le5$，求 $f(x)=3x^2-12x+11$ 的最大值、最小值。',
    answer: '26; -1',
    hasImage: false,
  },
  {
    id: '184fb5a035a',
    chapter: '多項式函數',
    question:
      '設 $k$ 為實數，若二次函數 $f(x)=x^2+2x+k$ 在 $-2\\le x\\le2$ 時，其最大值與最小值之和為 2020，求 $k$。',
    answer: '$\\frac{2013}2$',
    hasImage: false,
  },
  {
    id: '184eff7d1f5',
    chapter: '多項式函數',
    question: '已知 $x=\\sqrt2+1$，求 $x^4-x^3-2x^2-3x+7$。',
    answer: '8',
    hasImage: false,
  },
  {
    id: '184d399e260',
    chapter: '多項式函數',
    question:
      '三次實係數多項式函數 $f(x)=ax^3+bx^2+cx+d$，已知 $f(4)=-2$，$f(-3)=-1$，$f(2)=0$，$f(-2)=1$，試問下列選項哪些是正確的？\n(1) $y=f(x)$ 和 $x$ 軸有 3 個交點\n(2) $f(x)$ 除以 $x+2$ 的餘式為 4\n(3) $f(x)$ 除以 $x(x-1)$ 的餘式為 $4x+2$\n(4) $a=-\\dfrac72$\n(5) $f(2)=-20$',
    answer: '124',
    hasImage: false,
  },
  {
    id: '184a7ff1d0e',
    chapter: '多項式函數',
    question:
      '一年二班數學平時考成績並不理想，數學老師因考量同學上課認真，決定以二次函數 $f(x)=a(x-80)^2+c$ 幫同學調整平時分數。只要將原始分數 $x$ 代入函數即可得到調整後的分數。甲生原始分數為 60 分經調整後分數為 80 分，乙生原始分數為 80 分經調整後分數為 100 分，原始分數為 70 分的丙生經調整後分數應為？',
    answer: '95',
    hasImage: false,
  },
  {
    id: '184a7f7b62e',
    chapter: '多項式函數',
    question:
      '坐標平面上有相異三點 $A(2,1)$、$B(-1,-1)$、$C(k^2-5,k+3)$，其中 $k$ 為正實數，且 $k>2$。若已知二次函數 $f(x)=ax^2+bx+c$ 通過 $A,B$ 兩點，但必不通過 $C$ 點，求 $k$。',
    answer: '4',
    hasImage: false,
  },
  {
    id: '184a7f2668d',
    chapter: '多項式函數',
    question:
      '設三次多項式 $f(x)$ 滿足 $f(1)=f(-1)=f(2)=5$ 且 $f(0)=3$，試求 $(x^2+1)f(x)$ 除以 $x-3$ 的餘式。',
    answer: '-30',
    hasImage: false,
  },
  {
    id: '184a513ef59',
    chapter: '多項式函數',
    question:
      '已知 $p,q,r$ 為實數，設 $f(x)=px^2+qx+r$ 且滿足 $f(\\pi)=f(\\log\\pi)=f(2^\\pi)=2020$，則 $f(-2018)+f(-2019)+f(2020)+f(2019)+f(2018)$ 之值為何？\n(1) 0　(2) 2020　(3) 10100　(4) 100100　(5) 202',
    answer: '3',
    hasImage: false,
  },
  {
    id: '1848e427be5',
    chapter: '多項式函數',
    question: '已知 $f(x)=x^3+2x^2-4x+1$，$g(x)=x+2$，求 $f(x)$ 除以 $g(x)$ 的商式及餘式。',
    answer: '$x^2-4$; 9',
    hasImage: false,
  },
  {
    id: '1848e43bb2a',
    chapter: '多項式函數',
    question:
      '設 $f(x)=x^3-4x^2+7x-1$$=a(x-2)^3+b(x-2)^2+c(x-2)+d$，試求：(1) $a+b+c+d$\n(2) $f(1.98)$ 的近似值\n(四捨五入至小數點後第二位)',
    answer: '(1) 11 (2) 4.94',
    hasImage: false,
  },
  {
    id: '1848e4667bb',
    chapter: '多項式函數',
    question: '求多項式 $2x^{1001}-1$ 除以 $x+1$ 的餘式。',
    answer: '-3',
    hasImage: false,
  },
  {
    id: '1848e487f02',
    chapter: '多項式函數',
    question: '設 $f(x)=2x^3+4x^2-3x-k$ 有因式 $x+1$，求實數 $k$。',
    answer: '5',
    hasImage: false,
  },
  {
    id: '1848e475b2a',
    chapter: '多項式函數',
    question: '設 $f(x)=x^7-9x^6+11x^5-22x^4$$-18x^3+20x^2-99$，試求 $f(8)$。',
    answer: '157',
    hasImage: false,
  },
  {
    id: '1848e499efd',
    chapter: '多項式函數',
    question:
      '多項式 $f(x)$ 除以 $x-3$ 得餘式 12，除以 $x+2$ 得餘式 2，試求 $f(x)$ 除以 $(x-3)(x+2)$ 所得的餘式。',
    answer: '$2x+6$',
    hasImage: false,
  },
  {
    id: '1848b98acaf',
    chapter: '多項式函數',
    question:
      '一次多項式 $f(x)=ax+b$，若 $\\dfrac{f(2013)-f(1998)}{15}=4$，且 $y=f(x)$ 與 $y=x^2$ 的圖形交於 $A(-1,1)$，$B(m,n)$，求 $(m,n)$。',
    answer: '(5,25)',
    hasImage: false,
  },
  {
    id: '1848b8102b6',
    chapter: '多項式函數',
    question:
      "三次函數 $f(x)=x^3-9x^2+24x-18$ 的圖形如圖所示，已知此圖形為點對稱圖形，對稱中心點為 $P$ 點，函數上有一點 $A(1,-2)$，若 $A$ 點對 $P$ 點作對稱，對稱點為 $A'$，則：",
    answer: '',
    hasImage: true,
  },
  {
    id: '1848b822255',
    chapter: '多項式函數',
    question:
      "求 $A'$ 點的點坐標為何？(單選題，4 分)\n(1) (3, 0)　(2) (4, -2)　(3) (5, -2)　(4) (5, 2)　(5) (6, 18)",
    answer: '4',
    hasImage: false,
  },
  {
    id: '1848b83b746',
    chapter: '多項式函數',
    question:
      '函數圖形 $y=f(x)$ 在 $A$ 點附近圖形近似於直線 $L_1$，將直線 $L_1$ 向下平移 $k$ 單位後，使該直線通過 $P$ 點，則實數 $k=\\textcirc{9-1}\\textcirc{9-2}$。(選填題，5 分)',
    answer: '16',
    hasImage: false,
  },
  {
    id: '1848b853029',
    chapter: '多項式函數',
    question:
      '請利用函數圖形與第二題的結果，求解多項式不等式 $x^3-9x^2+24x-18\\ge9x-27$，其解為何？(非選擇題，6 分)',
    answer: '$3-2\\sqrt3\\le x\\le3$ or $x\\ge3+2\\sqrt3$',
    hasImage: false,
  },
  {
    id: '18467015c50',
    chapter: '多項式函數',
    question:
      '下列各函數哪些為 $x$ 的多項式？\n(1) $x^2+2^x$　(2) $\\sqrt{x^2}+1$　(3) $\\sqrt5x+\\sqrt3$　(4) $|x|$　(5) $\\dfrac{x+1}x$　(6) $\\pi$',
    answer: '(3)(6)',
    hasImage: false,
  },
  {
    id: '18467032fd7',
    chapter: '多項式函數',
    question: '若多項式 $f(x)=ax^3+5x^2+bx+(2b+3c)$ 與 $g(x)=dx^2-7x+4$ 相等，求 $a,b,c,d$。',
    answer: '0; -7; 6; 5',
    hasImage: false,
  },
  {
    id: '1846704ebc2',
    chapter: '多項式函數',
    question: '利用綜合除法求 $x^4-x^3+x^2+2x-5$ 除以 $x+2$ 的商及餘。',
    answer: '$x^3-3x^2+7x-12$; 19',
    hasImage: false,
  },
  {
    id: '18467074216',
    chapter: '多項式函數',
    question: '設 $f(x)=a(2x^3-4x^2)+b(3x^2-6x)$$+3x^2-4x+b$ 的次數為一次，求 $f(x)$。',
    answer: '$2x-1$',
    hasImage: false,
  },
  {
    id: '184670a88f0',
    chapter: '多項式函數',
    question: '設多項式 $f(x)=(2x^2-x+1)^4$，求：\n(1) 常數項 (2) 領導係數 (3) $f(x)$ 的次數',
    answer: '(1) 1 (2) 16 (3) 8',
    hasImage: false,
  },
  {
    id: '184670b48d9',
    chapter: '多項式函數',
    question: '已知 $2x^3-x^2+ax+b$ 可被 $x^2-2x-1$ 整除，求數對 $(a,b)$。',
    answer: '(-8,-3)',
    hasImage: false,
  },
  {
    id: '183d8d8d724',
    chapter: '多項式函數',
    question:
      'N 平台目前美人年費為 1000 元，經問卷調查結果得知，若每年調漲 $200a$ 元，$a$ 為實數且 $0\\le a\\le10$，則訂閱人數會下降 $10a\\%$。在不考慮其他收支的情況下，以此推論 N 平台明年年費定為多少錢，會有最大收益？(收益為訂閱總人數乘上每人須繳交的年費) (非選擇題，9 分)',
    answer: '1500',
    hasImage: false,
  },
  {
    id: '183d757525f',
    chapter: '多項式函數',
    question:
      '設點 $(a,b)$ 在函數 $y=-2x+3$ 上，若限制 $-2\\le a\\le1$，試求 $ab$ 的最大值為何？\n(1) $\\dfrac34$　(2) 1　(3) $\\dfrac98$　(4) 7　(5) 14',
    answer: '3',
    hasImage: false,
  },
  {
    id: '183d731a447',
    chapter: '多項式函數',
    question:
      '關於函數 $f(x)=2(x-1)^3+4(x-1)^2-7(x-1)+1$，下列何者正確？\n(1) $f(1.1)=0.24$　(2) $(x-2)$ 可以整除 $f(x)$\n(3) 1 為 $f(x)=0$ 的一個根　(4) $f(x)$ 展開的各項係數和為 1\n(5) $f(x)$ 展開的常數項為 11',
    answer: '24',
    hasImage: false,
  },
  {
    id: '1837d8c7896',
    chapter: '多項式函數',
    question: '解 $2x^2+3x+1\\ge 0$，求 $x$ 的範圍。',
    answer: '$x\\le-1$ or $x\\ge-\\frac12$',
    hasImage: false,
  },
  {
    id: '1837d8dc60f',
    chapter: '多項式函數',
    question: '解 $-2x^2+x+5>0$，求 $x$ 的範圍。',
    answer: '$\\frac{1-\\sqrt{41}}4<x<\\frac{1+\\sqrt{41}}4$',
    hasImage: false,
  },
  {
    id: '1837d8f249e',
    chapter: '多項式函數',
    question: '解 $x^2-3x+1> x-5$，求 $x$ 的範圍。',
    answer: '$x\\in\\mathbb R$',
    hasImage: false,
  },
  {
    id: '1837d90071f',
    chapter: '多項式函數',
    question: '解 $x^2+2x+5<0$，求 $x$ 的範圍。',
    answer: '無解',
    hasImage: false,
  },
  {
    id: '1837d90c5b6',
    chapter: '多項式函數',
    question: '解 $(x+3)(2x-1)\\le-3x-11$，求 $x$ 的範圍。',
    answer: '$x=-2$',
    hasImage: false,
  },
  {
    id: '1837d91e514',
    chapter: '多項式函數',
    question: '解 $5x^2-7x-6>0$，求 $x$ 的範圍。',
    answer: '$x<-\\frac35$ or $x>2$',
    hasImage: false,
  },
  {
    id: '1837d96421d',
    chapter: '多項式函數',
    question: '解 $x^2-3x+1\\le0$，求 $x$ 的範圍。',
    answer: '$\\frac{3-\\sqrt5}2\\le x\\le\\frac{3+\\sqrt5}2$',
    hasImage: false,
  },
  {
    id: '1837d99a6c9',
    chapter: '多項式函數',
    question: '(1) 解 $4x^2+4x+1>0$，求 $x$ 的範圍\n(2) 解 $4x^2+4x+1<0$，求 $x$ 的範圍',
    answer: '(1) $x\\ne-\\frac12$ (2) 無解',
    hasImage: false,
  },
  {
    id: '1837d981104',
    chapter: '多項式函數',
    question:
      '(1) 解 $(x-1)(x-4)\\le x-5$，求 $x$ 的範圍\n(2) 解 $(x-1)(x-4)\\ge x-5$，求 $x$ 的範圍',
    answer: '(1) $x=3$ (2) $x\\in\\mathbb R$',
    hasImage: false,
  },
  {
    id: '1837d9abd7e',
    chapter: '多項式函數',
    question: '(1) 解 $3x(x-1)+2< x-3$，求 $x$ 的範圍\n(2) 解 $3x(x-1)+2>x-3$，求 $x$ 的範圍',
    answer: '(1) 無解 (2) $x\\in\\mathbb R$',
    hasImage: false,
  },
  {
    id: '1837d9d3172',
    chapter: '多項式函數',
    question: '若 $y=x^2+2(2m-1)x+5m^2$ 的函數值恆正，求實數 $m$ 的範圍。',
    answer: '$m<-2-\\sqrt5$ or $m>-2+\\sqrt5$',
    hasImage: false,
  },
  {
    id: '1837d9e9bea',
    chapter: '多項式函數',
    question: '若 $kx^2+2x+k<0$ 對任意的 $x$ 恆成立，求實數 $k$ 的範圍。',
    answer: '$k<-1$',
    hasImage: false,
  },
  {
    id: '1837da0716e',
    chapter: '多項式函數',
    question: '求解不等式 $(x-1)(x-2)(x-5)<0$',
    answer: '$(-\\infty,1)$ or (2,5)',
    hasImage: false,
  },
  {
    id: '18462792134',
    chapter: '多項式函數',
    question: '求解不等式 $(x^2-4x+3)(x-6)(x-7)\\le0$',
    answer: '[1,3] or [6,7]',
    hasImage: false,
  },
  {
    id: '1837da1fc03',
    chapter: '多項式函數',
    question: '求不等式 $(x^2+x+1)(x^2+5)(2x+3)\\ge0$ 的解。',
    answer: '$x\\ge-\\frac32$',
    hasImage: false,
  },
  {
    id: '1837da5cc70',
    chapter: '多項式函數',
    question: '求解不等式 $(x+3)(x+2)(x+1)<0$',
    answer: '$(-\\infty,-3)$ or (-2,-1)',
    hasImage: false,
  },
  {
    id: '184627a6d1a',
    chapter: '多項式函數',
    question: '求解不等式 $x(x^2+2x-3)<0$。',
    answer: '(-3,0) or $(1,\\infty)$',
    hasImage: false,
  },
  {
    id: '1837da7cad4',
    chapter: '多項式函數',
    question: '解 $(x^2+x+3)(x+4)(x+2)(x-3)(x-4)\\ge0$',
    answer: '$x\\le-4$ or $-2\\le x\\le3$ or $x\\ge4$',
    hasImage: false,
  },
  {
    id: '1837da98f0c',
    chapter: '多項式函數',
    question: '解 $(x-1)^{10}(x-2)^{23}(x-5)^{100}<0$。',
    answer: '$x<1$ or $1<x<2$',
    hasImage: false,
  },
  {
    id: '1837daadbb1',
    chapter: '多項式函數',
    question: '解 $(x+1)^{2}(x-1)^{3}(x-3)(x-6)^{4}\\le0$。',
    answer: '$x=-1$ or $x=6$ or $1\\le x\\le3$',
    hasImage: false,
  },
  {
    id: '182f1f78deb',
    chapter: '多項式函數',
    question:
      '若三次函數 $y=f(x)$ 圖形的對稱中心為 (-3,2)，且圖形通過 (-2,0)，又其廣域特徵近似於 $y=-5x^3$ 的圖形，則下列哪些選項是正確的？\n(1) $y=f(x)=-5(x+3)^3+3(x+3)+2$\n(2) 一定可以找到實數 $k$ 滿足 $f(k)=2021$\n(3) $y=f(x)$ 圖形的對稱軸為 $x=-3$\n(4) $f(-8)+f(2)=4$\n(5) $y=f(x)$ 圖形在 $x=-2$ 的局部特徵會近似於 $y=-5x-10$',
    answer: '124',
    hasImage: false,
  },
  {
    id: '182f20e19f2',
    chapter: '多項式函數',
    question:
      '設 $f(x)=(3x-1)^4-4(3x-1)^3-15(3x-1)^2+60(3x-1)+9$，則 $f(x)$ 除以 $x-2$ 的餘式為 $\\textcirc{12-1}\\textcirc{12-2}$。',
    answer: '59',
    hasImage: false,
  },
  {
    id: '182c50491f3',
    chapter: '多項式函數',
    question:
      '下列哪些選項為 $x$ 的多項式？\n(1) $100\\pi$　(2) $\\dfrac{x^2}{\\sqrt2}+1$　(3) $x^{-2}+x$\n(4) $\\dfrac{x^2-1}{x+1}$　(5) $\\sqrt{x}+1$　(6) $|3x+1|$',
    answer: '(1)(2)',
    hasImage: false,
  },
  {
    id: '182c50797a6',
    chapter: '多項式函數',
    question:
      '下列何者為 $x$ 的多項式？\n(1) $x+\\dfrac1x$　(2) $\\dfrac x\\pi$　(3) $\\sqrt{x^2}$　(4) $|x^2-1|$',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '182c50b80c8',
    chapter: '多項式函數',
    question: '若 $f(x)=x^{4}+2x$，$g(x)=3x^{2}+x+7$，求：(1) $3f(x)+4g(x)$　(2) $f(x)\\cdot g(x)$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '182c51261ac',
    chapter: '多項式函數',
    question: '設 $f(x)$ 與 $g(x)$ 為 7 次與 4 次多項式，求 $[f(x)+g(x)]\\cdot[xg(x)+2]$ 次數。',
    answer: '12',
    hasImage: false,
  },
  {
    id: '182c519bad9',
    chapter: '多項式函數',
    question:
      '若 $f(x)=2x^{3}-4x^{2}-5x+1$$=a(x-2)(x-1)(x+3)$$+b(x-2)(x-1)+c(x-2)+d$，求 $a，b，c，d$。',
    answer: '$2$；$-4$；$-3$；$-9$',
    hasImage: false,
  },
  {
    id: '182c59bb5a5',
    chapter: '多項式函數',
    question: '若二次多項式 $f(x)=ax^2+bx+c$ 滿足 $f(1)=7，f(3)=1，f(4)=10$，求 $a，b，c$。',
    answer: '$4$；$-19$；$22$',
    hasImage: false,
  },
  {
    id: '182c59cfc9a',
    chapter: '多項式函數',
    question: '二次多項式 $f(x)$ 滿足 $f(1998)=3$，$f(2000)=1$，$f(2001)=6$，求 $f(2002)$。',
    answer: '15',
    hasImage: false,
  },
  {
    id: '182c59e6656',
    chapter: '多項式函數',
    question: '若 $f(x)=7x^2+2x-10=a(x+1)(x-2)+b(x+1)+c$，求 $a，b，c$。',
    answer: '$7$；$9$；$-5$',
    hasImage: false,
  },
  {
    id: '182c59fe482',
    chapter: '多項式函數',
    question: '二次函數 $f(x)$ 滿足 $f(2)=9$，$f(-1)=0$，$f(4)=5$，求 $f(x)$。',
    answer: '$-x^2+4x+5$',
    hasImage: false,
  },
  {
    id: '182c5a1665f',
    chapter: '多項式函數',
    question: '二次多項式 $f(x)$ 過點 $A(997,3)$、$B(999,-2)$、$C(1001,1)$，求 $f(1003)$。',
    answer: '12',
    hasImage: false,
  },
  {
    id: '182c5a3a89a',
    chapter: '多項式函數',
    question: '以 $x+3$ 除 $x^4+4x^3-x^2+30$，求商式及餘式。',
    answer: '$x^3+x^2-4x+12$；-6',
    hasImage: false,
  },
  {
    id: '182c5a5b249',
    chapter: '多項式函數',
    question: '以 $x+2$ 除 $x^5+2x^3+x^2-3$，求商式及餘式。',
    answer: '$x^4-2x^3+6x^2-11x+22$；-47',
    hasImage: false,
  },
  {
    id: '182c6228fbe',
    chapter: '多項式函數',
    question:
      '若 $f(x)=2x^3-x^2+4x-5$$=a(x-2)^3+b(x-2)^2+c(x-2)+d$，求 $a$，$b$，$c$，$d$，$f(1.99)$，$f(2+\\sqrt5)$。',
    answer: '2；11；24；15；14.761098；$70+34\\sqrt5$',
    hasImage: false,
  },
  {
    id: '182c6269548',
    chapter: '多項式函數',
    question:
      '若 $f(x)=x^4-8x^3+25x^2-30x+5$$=a(x-3)^4+b(x-3)^3+c(x-3)^2$$+d(x-3)+e$，求序組 $(a,b,c,d,e)$，$f(2.9)$。',
    answer: '(1, 4, 7, 12, 5)；6.73',
    hasImage: false,
  },
  {
    id: '182c62b9173',
    chapter: '多項式函數',
    question:
      '$f(x)=(2x^3+x+3)(x^2+2x-1)+(x^2+1)$，試求：\n(1) $f(x)$ 除以 $2x^3+x+3$ 的商，餘式。\n(2) $f(x)$ 除以 $x^2+2x-1$ 的商，餘式。',
    answer: '(1) $x^2+2x-1$；$x^2+1$ (2) $2x^3+x+4$；$-2x+2$',
    hasImage: false,
  },
  {
    id: '182c62effb7',
    chapter: '多項式函數',
    question:
      '若多項式 $f(x)$ 除以 $x^2+3x+1$ 的餘式為 $2x+5$，求 $x^2f(x)$ 除以 $x^2+3x+1$ 的餘式。',
    answer: '$x+1$',
    hasImage: false,
  },
  {
    id: '182c631e45b',
    chapter: '多項式函數',
    question:
      '設多項式 $f(x)=(x^4+2x+4)(x^2-5x+1)$$+2x^3-x^2+1$，試求：\n(1) $f(x)$ 除以 $x^4+2x+4$ 的商，餘式。\n(2) $f(x)$ 除以 $x^2-5x+1$ 的商，餘式。',
    answer: '(1) $x^2-5x+1$；$2x^3-x^2+1$ (2) $x^4+4x+13$；$43x-8$',
    hasImage: false,
  },
  {
    id: '182c63397c5',
    chapter: '多項式函數',
    question:
      '若多項式 $f(x)$ 除以 $x^2+2x+3$ 的餘式為 $x+8$，求 $x^2f(x)+4x-1$ 除以 $x^2+2x+3$ 的餘式。',
    answer: '$-11x-19$',
    hasImage: false,
  },
  {
    id: '182c6362739',
    chapter: '多項式函數',
    question:
      '若 $f(x)=5x^{95}+19x^2-7$，試求：\n(1) $f(x)$ 除以 $x+1$ 的餘式\n(2) 設 $g(x)=x^2+4x+4$，求 $f(g(x))$ 除以 $x+3$ 的餘式',
    answer: '(1) 7 (2) 17',
    hasImage: false,
  },
  {
    id: '182c6385b19',
    chapter: '多項式函數',
    question:
      '若 $f(x)=x^{36}-4x^8+5x^4+3x-1$，試求：\n(1) $f(x)$ 除以 $x+1$ 的餘式\n(2) $f(x^2+x-1)$ 除以 $x+2$ 的餘式',
    answer: '(1) -2 (2) 4',
    hasImage: false,
  },
  {
    id: '182c63a444d',
    chapter: '多項式函數',
    question: '若 $f(x)=1250x^6-2790x^5-3125x^4$$+707x^3+100x^2+45x-62$，求 $f(3)$。',
    answer: '217',
    hasImage: false,
  },
  {
    id: '182c63d0e8c',
    chapter: '多項式函數',
    question:
      '(1) 若 $f(x)=x^7-50x^5+6x^4+4x^3+26x^2$$+x-5$，求 $f(7)$。\n(2) 若 $f(x)=x^5-4x^4-72x^3-56x^2+20x$$+2$，求 $f(11)$。',
    answer: '(1) 247 (2) 101',
    hasImage: false,
  },
  {
    id: '182c63ef8b6',
    chapter: '多項式函數',
    question: '設 $f(x)=ax^{10}+8x^3-12x^2+4x+5$，若 $2x+1$ 是 $f(x)$ 的因式，求 $a$。',
    answer: '1024',
    hasImage: false,
  },
  {
    id: '182c63fc5fb',
    chapter: '多項式函數',
    question: '若 $x+3$ 是 $x^5+2x^4+ax+27$ 的因式，求 $a$。',
    answer: '-18',
    hasImage: false,
  },
  {
    id: '182c641fe76',
    chapter: '多項式函數',
    question:
      '若多項式 $f(x)$ 除以 $x-2$ 得餘式 7，除以 $x+3$ 得餘式 -8，求 $f(x)$ 除以 $(x-2)(x+3)$ 的餘式。',
    answer: '$3x+1$',
    hasImage: false,
  },
  {
    id: '182c643dcfd',
    chapter: '多項式函數',
    question:
      '設多項式 $f(x)$ 除以 $(x+1)(x-2)$ 得餘式為 $3x-1$，$f(x)$ 除以 $(x-1)(x+3)$ 得餘式為 $5x-10$，求 $f(x)$ 除以 $(x-2)(x+3)$ 的餘式。',
    answer: '$6x-7$',
    hasImage: false,
  },
  {
    id: '182c6491d92',
    chapter: '多項式函數',
    question:
      '若多項式 $f(x)$ 除以 $x-3$ 得餘式 16，且 $f(x)$ 除以 $x+4$ 得餘式 -19，求 $f(x)$ 除以 $(x-3)(x+4)$ 的餘式。',
    answer: '$5x+1$',
    hasImage: false,
  },
  {
    id: '182c64971da',
    chapter: '多項式函數',
    question:
      '設多項式 $f(x)$ 除以 $x^2-5x+4$，餘式為 $x+2$；除以 $x^2-5x+6$，餘式為 $3x+4$，求多項式 $f(x)$ 除以 $x^2-4x+3$ 的餘式。',
    answer: '$5x-2$',
    hasImage: false,
  },
  {
    id: '182c64c44f4',
    chapter: '多項式函數',
    question:
      '已知 $f(x)$ 不低於三次，若以 $x-1$ 除之餘 3，以 $x+1$ 除之餘 1，以 $x-2$ 除之餘 -2，求以 $(x-1)(x+1)(x-2)$ 除 $f(x)$ 的餘式。',
    answer: '$-2x^2+x+4$',
    hasImage: false,
  },
  {
    id: '182c64e379f',
    chapter: '多項式函數',
    question:
      '若多項式 $f(x)$ 以 $x-1$、$x-2$、$x-3$ 除之依次餘 -4、1、2，求以 $(x-1)(x-2)(x-3)$ 除之的餘式。',
    answer: '$-2x^2+11x-13$',
    hasImage: false,
  },
  {
    id: '182c650e595',
    chapter: '多項式函數',
    question:
      '設 $f(x)$ 為三次多項式，若 $f(x)$ 除以 $x^2-1$ 餘 $3x+1$，除以 $x^2+1$ 餘 $-x+3$，試求 $f(x)$。',
    answer: '$2x^3-x^2+x+2$',
    hasImage: false,
  },
  {
    id: '182c651fe31',
    chapter: '多項式函數',
    question:
      '設 $f(x)$ 為三次多項式，若 $f(x)$ 除以 $x^2-x-2$ 餘 $3x+12$，除以 $x^2+2$ 餘 $3x-6$，試求 $f(x)$。',
    answer: '$-x^3+5x^2+x+4$',
    hasImage: false,
  },
  {
    id: '182c0777e48',
    chapter: '多項式函數',
    question:
      '某次全班考試的成續均不佳，最高僅 50 分，老師想用一個線型函數來調整分數，使 50 分變成 100 分，20 分變為 60 分，則原來分數為 41 分的可調整為幾分？',
    answer: '88',
    hasImage: false,
  },
  {
    id: '182c079e6a2',
    chapter: '多項式函數',
    question:
      '線型函數 $y=f(x)$，已知 $f(7)=13$，$f(10)=7$，若 $f(m)=0$，$f(0)=n$，求數對 $(m,n)$、$f(f(1))$。',
    answer: '$(\\frac{27}2,27)$；-23',
    hasImage: false,
  },
  {
    id: '182c07aecea',
    chapter: '多項式函數',
    question:
      '請將下列二次式配方，並求頂點坐標：\n(1) $y=x^2+6x-1$\n(2) $y=x^2-x+1$\n (3) $y=-2x^2+8x+3$',
    answer: '(1) (-3,-10) (2) $(\\frac12,\\frac34)$ (3) (2,11)$',
    hasImage: false,
  },
  {
    id: '182c07daa5e',
    chapter: '多項式函數',
    question:
      '請將下列二次式配方，並求頂點坐標：\n(1) $y=x^2-10x+5$\n(2) $y=4x^2+16x+11$\n(3) $y=-3x^2+4x+5$',
    answer: '(1) (5,-20) (2) (-2,-5) (3) $(\\frac23,\\frac{19}3)$',
    hasImage: false,
  },
  {
    id: '182c07e3dba',
    chapter: '多項式函數',
    question: '將 $y=-5x^2+4x+1$ 的圖形先向右移 2，再向下移 3，所得圖形的函數關係式為？',
    answer: ' $y=-5x^2+24x-30$',
    hasImage: false,
  },
  {
    id: '182c082b620',
    chapter: '多項式函數',
    question: '將 $y=5x^2-17x+2$ 的圖形先向左移 1，再向下移 4，所得圖形的函數關係式為？',
    answer: ' $y=5x^2-7x-14$',
    hasImage: false,
  },
  {
    id: '18460ea0f9d',
    chapter: '多項式函數',
    question: '將 $y=\\sqrt x$ 的圖形先向右移 2，再向下移 3，所得圖形的函數關係式為？',
    answer: '$y=\\sqrt{x-2}-3$',
    hasImage: false,
  },
  {
    id: '18460ea8803',
    chapter: '多項式函數',
    question: '將 $y=2^x$ 的圖形先向左移 1，再向下移 4，所得圖形的函數關係式為？',
    answer: '$y=2^{x+1}-4$',
    hasImage: false,
  },
  {
    id: '182c084b7be',
    chapter: '多項式函數',
    question: '二次函數 $y=f(x)=3(x-5)^2+1$，請問當 $x$ 為何時，$y$ 有最小值為？',
    answer: '5；1',
    hasImage: false,
  },
  {
    id: '182c085f33d',
    chapter: '多項式函數',
    question: '求 $f(x)=x^2-2x+5$ 的最小值及此時的 $x$。',
    answer: '4；1',
    hasImage: false,
  },
  {
    id: '18460fb791c',
    chapter: '多項式函數',
    question:
      '若 $-5\\le x\\le5$，則 $y=-2(x+3)^2+5$ 在 $x$ 為何時，$y$ 有最大值為？在 $x$ 為何時，$y$ 有最小值為？',
    answer: '-3；5；5；-123',
    hasImage: false,
  },
  {
    id: '18460fd53a8',
    chapter: '多項式函數',
    question:
      '若 $0\\le x\\le4$，則 $y=f(x)=3(x-5)^2+1$ 在 $x$ 為何時，$y$ 有最大值為？在 $x$ 為何時，$y$ 有最小值為？',
    answer: '0；76；4；4',
    hasImage: false,
  },
  {
    id: '182c08894ba',
    chapter: '多項式函數',
    question: '若函數 $y=ax^2+12x+b$ 在 $x=3$ 時，有最大值 4，求 $a$、$b$。',
    answer: '-2；-14',
    hasImage: false,
  },
  {
    id: '182c0896c4e',
    chapter: '多項式函數',
    question: '若 $y=ax^2+bx+5$ 在 $x=2$ 時，有最小值為 1，求 $a$、$b$。',
    answer: '1；-4',
    hasImage: false,
  },
  {
    id: '182c08aa931',
    chapter: '多項式函數',
    question:
      '設 $a$、$b$、$c$ 為實數，$f(x)=ax^2+bx+c$ 的圖形如圖所示，判別各值的正負：\n(1) $a$　(2) $b$　(3) $c$　(4) $b^2-4ac$\n(5) $a+b+c$　(6) $4a+2b+c$',
    answer: '-；-；+；+；0；-',
    hasImage: true,
  },
  {
    id: '18461051e80',
    chapter: '多項式函數',
    question:
      '若 $y=ax^2+bx+c$ 的圖形如圖所示，下列選項哪些正確？\n(1) $a>0$　(2) $b>0$　(3) $c>0$\n(4) $b^2-4ac>0$　(5) $a+b+c>0$\n(6) $a-b+c>0$',
    answer: '(2)(3)(4)(5)',
    hasImage: true,
  },
  {
    id: '182c09045f1',
    chapter: '多項式函數',
    question: '若二次函數 $f(x)$ 過三點 $A(1,6)$、$B(4,-15)$、$C(3,-4)$，求 $f(x)$。',
    answer: '$-2x^2+3x+5$',
    hasImage: false,
  },
  {
    id: '182c0920e8c',
    chapter: '多項式函數',
    question: '若二次函數 $f(x)$ 的頂點為 (-2,13)，且過 (1,-5)，求 $f(x)$。',
    answer: '$-2x^2-8x+5$',
    hasImage: false,
  },
  {
    id: '182c09aa6fb',
    chapter: '多項式函數',
    question:
      '若二次函數 $f(x)$ 的圖形交 $x$ 軸於 (-4,0) 與 (-1,0) 兩點，且與 $y$ 軸交於 (0,3)，求 $f(x)$。',
    answer: '$\\frac34(x+4)(x+1)$',
    hasImage: false,
  },
  {
    id: '182c09fa603',
    chapter: '多項式函數',
    question: '二次函數 $f(x)$，若 $f(-1)=3$，$f(2)=6$，$f(3)=-1$，求 $f(x)$。',
    answer: '$-2x^2+3x+8$',
    hasImage: false,
  },
  {
    id: '182c09b4df4',
    chapter: '多項式函數',
    question: '若二次函數 $f(x)$ 的頂點 (2,1)，且過 (4,3)，求 $f(x)$。',
    answer: '$\\frac12(x-2)^2+1$',
    hasImage: false,
  },
  {
    id: '182c0a086ec',
    chapter: '多項式函數',
    question:
      '若二次函數 $f(x)$ 的圖形交 $x$ 軸於 (1,0) 與 (7,0) 兩點，且與 $y$ 軸交於 (0,-14)，求 $f(x)$。',
    answer: '$-2x^2+16x-14$',
    hasImage: false,
  },
  {
    id: '182c0a19bab',
    chapter: '多項式函數',
    question: '若 $f(x)=ax^3+bx$ 滿足 $f(-5)>0$ 且 $f(2)>0$，則 $y=ax+b$ 的圖形為下列哪一個選項？',
    answer: '(C)',
    hasImage: true,
  },
  {
    id: '182c0a258d8',
    chapter: '多項式函數',
    question: '若 $y=ax^3+bx$ 的圖形如 (B) 選項，則 $y=bx^3-ax$ 的圖形為下列哪一個選項？',
    answer: '(C)',
    hasImage: true,
  },
  {
    id: '182c0a48915',
    chapter: '多項式函數',
    question:
      '$y=f(x)=2x^3+5x$ 的圖形對稱於原點，試問 $f(x)$ 的圖形向左平移 1 再向上平移 3，所得圖形的函數關係式為？',
    answer: '$2(x+1)^3+5(x+1)+3$',
    hasImage: false,
  },
  {
    id: '182c0a5821b',
    chapter: '多項式函數',
    question:
      '$y=a(x-h)^3+b(x-h)+c$ 的圖形如圖所示，請問下列選項哪些為真？\n(1) $a>0$　(2) $b>0$　(3) $c>0$　(4) $h>0$',
    answer: '(1)(4)',
    hasImage: true,
  },
  {
    id: '182c0a67bdf',
    chapter: '多項式函數',
    question: '將 $y=-4x^3+5x$ 的函數圖形先向左平移 1 再向下平移 6，所得圖形之函數式為 $y$ 為？',
    answer: '$-4(x+1)^3+5(x+1)-6$',
    hasImage: false,
  },
  {
    id: '182c0a842ea',
    chapter: '多項式函數',
    question:
      '設 $a$、$b$、$p$、$q$ 均為非零實數，若 $f(x)=a(x-p)^3+b(x-p)+q$ 的圖形只通過第二及第四象限，請間下列哪些選項的推論為真？(1) $a<0$　(2) $b<0$\n(3) $p<0$　(4)$q<0$　(5) $pq<0$',
    answer: '(1)(5)',
    hasImage: false,
  },
  {
    id: '182c0ad07b9',
    chapter: '多項式函數',
    question: '求下列三次函數的對稱中心坐標：\n(1) $y=x^3+6x^2-x+1$\n(2) $y=2x^3-6x^2+7x+4$',
    answer: '(1) (-2,19) (2) (1,7)',
    hasImage: false,
  },
  {
    id: '182c0ae5956',
    chapter: '多項式函數',
    question: '求下列三次函數的對稱中心坐標：\n(1) $y=-x^3-9x^2+x+1$\n(2) $y=2x^3+18x^2-x-5$',
    answer: '(1) (-3,-56) (2) (-3,106)',
    hasImage: false,
  },
  {
    id: '182c0b1abdf',
    chapter: '多項式函數',
    question:
      '在 $x$ 很大時，$y=-4x^3+5x^2-x+7$ 的大域圖形會接近哪一個選項？\n(1) $y=-x^3$　(2) $y=-2x^3$　(3) $y=-3x^3$\n(4) $y=-4x^3$　(5) $y=-5x^3$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '182c0b29b5e',
    chapter: '多項式函數',
    question: '求在 $x$ 靠近 1 時，$y=x^3+2x^2-4x+1$ 的一次近似。',
    answer: '$y=3x-3$',
    hasImage: false,
  },
  {
    id: '1846151e92c',
    chapter: '多項式函數',
    question:
      '練習以區間符號表達：\n(1) $3<x<7$\n(2) $2\\le x\\le5$\n(3) $1<x\\le8$\n(4) $x<3$\n(5) $x<1$ 或 $x\\ge6$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '1846152c200',
    chapter: '多項式函數',
    question:
      '練習以區間符號表達：\n(1) $3<x<5$\n(2) $4\\le x\\le7$\n(3) $3<x\\le7$\n(4) $x<2$ 或 $x\\ge9$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '182c0bfe5a5',
    chapter: '多項式函數',
    question:
      '若 $y=f(x)$ 的函數圖形如圖所示，求：\n(1) 方程式 $f(x)=0$ 的解\n(2) 不等式 $f(x)>0$ 的解\n(3) 不等式 $f(x)\\ge0$ 的解\n(4) 不等式 $f(x)<0$ 的解\n(5) 不等式 $f(x)\\le0$ 的解',
    answer:
      '(1) -2 or 3 or 6 (2)$(-\\infty,-2)$ or (-2,3) or $(6,\\infty)$\n(3) $(\\infty,3]$ or $[6,\\infty)$ (4) (3,6) (5) -2 or [3,6]',
    hasImage: true,
  },
  {
    id: '182c0d34edb',
    chapter: '多項式函數',
    question:
      '若 $y=f(x)$ 的函數圖形如圖所示，求：\n(1) 方程式 $f(x)=0$ 的解\n(2) 不等式 $f(x)>0$ 的解 (3) 不等式 $f(x)<0$ 的解\n(4) 不等式 $f(x)\\le0$ 的解',
    answer: '(1) 1 or 5 (2) $(5,\\infty)$ (3) $(\\infty,1)$ or (1,5) (4) $(\\infty,5]$',
    hasImage: true,
  },
  {
    id: '1829fc38032',
    chapter: '多項式函數',
    question:
      '已知實係數多項式 $f(x)$ 除以 $(x^4+x^3-x-1)$ 的餘式為 $ax^2-3x+1$，若 $(x-1)$ 為多項式 $f(x)$ 的因式，則多項式 $f(x)$ 除以 $(x+1)$ 的餘式為 $\\textcirc{14-1}$。',
    answer: '6',
    hasImage: false,
  },
  {
    id: '18207c333b1',
    chapter: '多項式函數',
    question:
      '已知二次函數 $y=(3-k)x^2-kx$ 的圖形恆在 $y=k$ 的上方，則 $k$ 值有可能為下列何者？\n(1) 6　 (2) 2　 (3) -2　 (4) -6　 (5) -10',
    answer: '345',
    hasImage: false,
  },
  {
    id: '18206332abe',
    chapter: '多項式函數',
    question:
      '在坐標平面上，將 $\\Gamma_1:y=\\dfrac13x^2+x+1$ 的圖形沿水平方向右移 2 單位，再沿鉛直方向下移 1 單位，可得 $\\Gamma_2:y=g(x)$ 的圖形，則下列哪些敘述是正確的？\n(1) $\\Gamma_1$ 的頂點為 $(-\\dfrac32,\\dfrac14)$\n(2) $g(x)=\\dfrac13(x-\\dfrac72)^2-\\dfrac34$\n(3) 當 $-1\\le x\\le3$ 時，$y=g(x)$ 的最大值為 6\n(4) 當 $-1\\le x\\le3$ 時，$y=g(x)$ 的最小值為 $-\\dfrac34$\n(5) 點 $(-\\dfrac{20}9,-\\dfrac{103}{243})$ 是 $\\Gamma_1$ 與 $\\Gamma_2$ 的一個交點',
    answer: '14',
    hasImage: false,
  },
  {
    id: '182063bf53c',
    chapter: '多項式函數',
    question:
      '已知多項式 $f(x)$，經三次的除法運算，其結果分述如下：\na. $f(x)$ 除以 $x-2$，得商式為 $Q_1(x)$，餘式為 1\nb. $Q_1(x)$ 除以 $x-2$，得商式為 $Q_2(x)$，餘式為 2\nc. $Q_2(x)$ 除以 $x-2$，得商式為 $x-3$，餘式為 3\n試選出正確的選項。\n(1) $f(x)$ 是三次多項式\n(2) $f(2)=1$\n(3) $f(x)$ 除以 $Q_1(x)$ 的餘式為 1\n(4) $f(x)$ 除以 $(x-2)^2$ 的餘式為 $Q_2(x)$\n(5) $f(2+\\sqrt2)=11$',
    answer: '235',
    hasImage: false,
  },
  {
    id: '182063fe6b8',
    chapter: '多項式函數',
    question:
      '有一條高速公路符合三次實係數多項式函數，$f(x)=x^3-3x^2+5x$，其中有兩個交流道在 $A(0,0)$ 和 $B(2,6)$，試選出正確的選項。\n(1) $A(0,0)$ 為這條高速公路的對稱中心\n(2) 在 $0\\le x\\le2$ 時，$y=f(x)$ 的圖形為嚴格遞增\n(3) $y=f(x)$ 和所有的水平線恰交於一點\n(4) $y=f(x)$ 圖形的大域特徵近似於曲線 $y=x^3$\n(5) $y=f(x)$ 圖形在 $x=1$ 附近的圖形特徵近似於直線 $y=x$',
    answer: '234',
    hasImage: false,
  },
  {
    id: '1820645637d',
    chapter: '多項式函數',
    question:
      '設 $f(x)=x^4+ax^2+bx+c$，其中 $a,b,c$ 為實數。已知 $f(x)$ 除以 $x^2+1$ 得餘式為 $2x+1$，$f(x)$ 除以 $x+1$ 得餘式為 5，請選出正確的選項。\n(1) $a-b+c=-4$　 (2) $a=c$　 (3) $a=3$　 (4) $b=2$　 (5) $c=-3$',
    answer: '234',
    hasImage: false,
  },
  {
    id: '1820649fdce',
    chapter: '多項式函數',
    question:
      '關於多項式 $f(x)=\\dfrac{\\sqrt{5-2\\sqrt6}}2x(x-1)-\\dfrac{\\sqrt2+\\sqrt3}2(x-1)(x-2)+\\sqrt2x(x-2)$。試選出正確的選項。\n(1) $f(x)$ 的常數項為 $-\\sqrt2-\\sqrt3$　 (2) $f(x)$ 的各項係數總和為 $\\sqrt2$\n(3) $f(2)=\\sqrt2-\\sqrt3$　　　　　　 (4) $f(x)$ 是二次多項式\n(5) $f(4)=\\dfrac{f(3)+f(5)}2$',
    answer: '15',
    hasImage: false,
  },
  {
    id: '182064c2b3f',
    chapter: '多項式函數',
    question:
      '已知 $a,b,c$ 皆為實數，多項式 $x^3+ax^2+bx+c$ 同時可被 $x^2-3x+2$ 及 $x^2-5x+6$ 整除，則 $b=\\textcirc{12-1}\\textcirc{12-2}$。',
    answer: '11',
    hasImage: false,
  },
  {
    id: '182064ff955',
    chapter: '多項式函數',
    question:
      '在地面上有 $A,B,C$ 三點，且知 $\\overline{AB}=60$ 公尺，$\\overline{BC}=120$ 公尺，$\\angle ABC=90\\du$。今有甲、乙兩人，甲由 $A$ 沿著直線 $AB$ 等速走到 $B$，乙由 $B$ 沿著直線 $BC$ 等速走到 $C$，若兩人同時出發，也同時到達。則在行進過程中，甲、乙兩人之間的最短距離為 $\\textcirc{13-1}\\textcirc{13-2}\\sqrt{\\textcirc{13-3}}$ 公尺。(化為最簡根式)',
    answer: '245',
    hasImage: false,
  },
  {
    id: '182065333cc',
    chapter: '多項式函數',
    question:
      '設正實數 $a$ 的小數部分為 $b(0<b<1)$，且 $3a^2-2b^2=41$，求 $a=\\textcirc{14-1}\\textcirc{14-2}+\\sqrt{\\textcirc{14-3}\\textcirc{14-4}}$。',
    answer: '23',
    hasImage: false,
  },
  {
    id: '18206555620',
    chapter: '多項式函數',
    question:
      '若二次函數 $\\Gamma:y=x^2+ax+b$，$a,b$ 為實數且 $\\Gamma$ 與 $L_1:y=2x-4$、$\\Gamma$ 與 $L_2:y=-2x+4$ 均恰交於一點，則 $(a,b)=(\\textcirc{15-1}\\textcirc{15-2},\\textcirc{15-3})$。',
    answer: '-45',
    hasImage: false,
  },
  {
    id: '18206571fa1',
    chapter: '多項式函數',
    question:
      '如圖，$ABCDEF$ 為正六邊形，且 $B,C,D,E$ 皆在二次函數 $y=ax^2$ 上，若 $\\overline{AF}$ 在直線 $y=7$ 上，求 $a=\\dfrac{\\textcirc{16-1}}{\\textcirc{16-2}}$ 。(化為最簡分數)',
    answer: '13',
    hasImage: true,
  },
  {
    id: '1820659e7b5',
    chapter: '多項式函數',
    question:
      '設二次多項式函數 $f(x)$ 滿足以下三個條件：\na. 對所有實數 $t$，$f(4+t)=f(-2-t)$ 恆成立\nb. 當 $-3\\le x\\le10$ 時，$f(x)$ 有最大值 62，最小值 -100\nc. $f(-4)>f(9)$，\n則 $f(6)=\\textcirc{17-1}\\textcirc{17-2}$。',
    answer: '12',
    hasImage: false,
  },
  {
    id: '182065f04fc',
    chapter: '多項式函數',
    question:
      '如圖，為某賽車場的連續轉彎賽道，良良發現經由電腦分析，其平面圖於平面坐標上為三次函數 $f(x)$ 的一部分，經由電腦計算後，最好的入彎點為 $A(2,8)$ (即賽車手需開始踩煞車的位置)，出彎點為 $B(h,k)$ (即賽車手可以開始踩下油門的位置)，已知 $O(3,5)$ 為此三次函數的對稱中心，且 $A,B$ 對稱於 $O$ 點，則：',
    answer: '',
    hasImage: true,
    style: { width: '4cm' },
  },
  {
    id: '182065ff677',
    chapter: '多項式函數',
    question: '$h+k$ 之值為 $\\textcirc{18-1}$。(選填題，6 分)',
    answer: '6',
    hasImage: false,
  },
  {
    id: '18206615ddc',
    chapter: '多項式函數',
    question:
      '若在 $O$ 點附近的局部特徵 (即過 $O$ 點和圖形相切之直線)，近似於 $y=-5x+20$，則函數 $f(x)$ 為何？(非選擇題，9 分)',
    answer: '$f(x)=2x^3-18x^2+49x-34$',
    hasImage: false,
  },
  {
    id: '181ed7a9ed9',
    chapter: '多項式函數',
    question:
      '三次多項式函數 $f(x)=0.0002x^3-0.04x^2+2x$ 的圖形如圖，請問 $a$ 為下列何值？\n(1) 10　 (2) 20　 (3) 30　 (4) 50　 (5) 100',
    answer: '(5)',
    hasImage: true,
  },
  {
    id: '181ed74679d',
    chapter: '多項式函數',
    question:
      '已知多項式不等式 $(x-\\log5)(x-\\sqrt{26})(x+3^{-2})(7-3x)>0$，則滿足此不等式的整數解有幾個？\n(1) 1 個　 (2) 2 個　 (3) 3 個　 (4) 4 個　 (5) 5 個',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '181ed84aa34',
    chapter: '多項式函數',
    question:
      '有一密碼機設置如下，輸入或輸出皆以 $a*b*c...$ 表示多項式的係數，且由高次項至低次項呈現。如當輸入 $1*1*6$ 時，即表示 $f(x)$ 除以二次式 $x^2+x+6$，而密碼機則會輸出 $1*2$，即餘式為 $x+2$；如輸入 $*2$ 則表示 $f(x)$ 除以零次式 2。今有一謎題為三次式 $f(x)$，當輸入 $1*1*-6$ 時，密碼機會輸出 $4*-15$；而當輸入 $1*-1*-6$ 時，密碼機會輸出 $2*-3$。試求當輸入 $1*-1$ 時，密碼機顯示輸出結果為何？\n(1) $*1$　 (2) $*-1$　 (3) $*0$　 (4) $*-3$　 (5) $*-7$',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '181ed8c5f05',
    chapter: '多項式函數',
    question:
      '已知整係數多項式 $f(x)$ 滿足 $f(x)(x-1)=2x^6-x^5-x^3+2x-2$，試求 $f(-1)+f(1)$ 的值？\n(1) 0　 (2) 6　 (3) 1　 (4) -1　 (5) 3',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '181ed8e9185',
    chapter: '多項式函數',
    question:
      '設 $a,b$ 為實數，若 $f(x)=ax^3+2x^2-bx+7$ 且 $f(-5)=57$，則 $f(5)$ 之值為下列何者？\n(1) 0　 (2) 57　 (3) -57　 (4) 107　 (5) -107',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '181ed90a29b',
    chapter: '多項式函數',
    question:
      '高次不等式 $(x-1)(x-4)(x-8)^2(x-16)(x-32)\\le0$ 的正整數解共有幾個？\n(1) 17 個　 (2) 19 個　 (3) 21 個　 (4) 22 個　 (5) 24 個',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17e57ad15bc',
    chapter: '多項式函數',
    question:
      '已知二次函數 $y=ax^2+bx+c$ 的圖形如圖所示，則下列各式哪些為正數？\n(1) $a$ (2) $b$ (3) $c$ (4) $b^2-4ac$ (5) $a+b+c$',
    answer: '(2)(4)(5)',
    hasImage: true,
  },
  {
    id: '17e57ae841d',
    chapter: '多項式函數',
    question: '已知 $y=-2x^2+ax+b$，在 $x=-2$ 時有最大值 $1$，求數對 $(a,b)$。',
    answer: '$(-8,-7)$',
    hasImage: false,
  },
  {
    id: '17e57af6aae',
    chapter: '多項式函數',
    question: '設 $f(x)=x^5-9x^4+13x^3+32x+12$，試求 $f(7)$。',
    answer: '$-107$',
    hasImage: false,
  },
  {
    id: '17e57afffb4',
    chapter: '多項式函數',
    question: '若二次函數 $y=2x^2+x-k+1$ 恆在直線 $y=3x$ 的上方，求 $k$ 的範圍。',
    answer: '$k<\\frac12$',
    hasImage: false,
  },
  {
    id: '17e57b119f1',
    chapter: '多項式函數',
    question: '試求不等式 $(x-1)(x+2)^2(x-3)^3(x+4)^4\\le0$ 的解。',
    answer: '$1\\le x\\le3\\lor x=-2\\lor x=-4$',
    hasImage: false,
  },
  {
    id: '17e57b22a99',
    chapter: '多項式函數',
    question: '試求不等式 $(x^2+x-2)(x^2-4x+3)(x^2-x+2)(x^2-x-1)\\le0$ 的解。',
    answer: '$\\frac{1+\\sqrt5}2\\le x\\le3\\lor -2\\le x\\le\\frac{1-\\sqrt5}2\\lor x=1$',
    hasImage: false,
  },
  {
    id: '17e57b32b37',
    chapter: '多項式函數',
    question:
      '若三次函數 $f(x)=-2x^3+6x^2+3x+4$ 可寫成 $a(x-h)^3+p(x-h)+k$ 的形式，求 $f(x)$ 的對稱中心。',
    answer: '$(1,11)$',
    hasImage: false,
  },
  {
    id: '17e57b45929',
    chapter: '多項式函數',
    question:
      '將一多項式 $f(x)=x^3-3x^2+x+3$ 表示成 $a(x-2)^3+b(x-2)^2+c(x-2)+d$ 的形式，求序組 $(a,b,c,d)$。',
    answer: '$(1,3,1,1)$',
    hasImage: false,
  },
  {
    id: '17e57b567ab',
    chapter: '多項式函數',
    question:
      '若將 $y=2x^2+4x+3$ 之函數圖形向右平移 $h$ 單位，再向下平移 $k$ 單位，會與 $y=2(x-1)^2+4$ 圖形重合，求數對 $(h,k)$。',
    answer: '$(2,-3)$',
    hasImage: false,
  },
  {
    id: '17e2eb6f63c',
    chapter: '多項式函數',
    question: '描繪 $y=x^3-9x^2+29x-32$ 的圖形，並求其對稱中心。',
    answer: '$(3,1)$',
    hasImage: false,
  },
  {
    id: '17e2eb88e32',
    chapter: '多項式函數',
    question: '描繪 $y=-x^3+3x^2-2x-2$ 的圖形，並求其對稱中心。',
    answer: '$(1,-2)$',
    hasImage: false,
  },
  {
    id: '17e2eba374f',
    chapter: '多項式函數',
    question: '解不等式 $x-3>3x+5$。',
    answer: '$x<-4$',
    hasImage: false,
  },
  {
    id: '17e2ebaabff',
    chapter: '多項式函數',
    question: '解不等式 $2x+1>5x+10$。',
    answer: '$x<-3$',
    hasImage: false,
  },
  {
    id: '17e2ebb16b1',
    chapter: '多項式函數',
    question: '解不等式 $x^2-4x+3\\le0$。',
    answer: '$1\\le x\\le3$',
    hasImage: false,
  },
  {
    id: '17e2ebc9726',
    chapter: '多項式函數',
    question: '解不等式 $3+x-x^2<0$。',
    answer: '$x<\\frac{1-\\sqrt{13}}2\\lor x>\\frac{1+\\sqrt{13}}2$',
    hasImage: false,
  },
  {
    id: '17e2ebd58fd',
    chapter: '多項式函數',
    question: '解不等式 $6-5x-x^2<0$。',
    answer: '$x>1\\lor x<-6$',
    hasImage: false,
  },
  {
    id: '17e2ebe4bd4',
    chapter: '多項式函數',
    question: '解不等式 $3+5x\\ge x^2$。',
    answer: '$\\frac{5-\\sqrt{37}}2\\le x\\le\\frac{5+\\sqrt{37}}2$',
    hasImage: false,
  },
  {
    id: '17e2ebf4cc9',
    chapter: '多項式函數',
    question: '解不等式 $x^2+x+1>0$。',
    answer: '$x\\in\\mathbb R$',
    hasImage: false,
  },
  {
    id: '17e2ebfab2d',
    chapter: '多項式函數',
    question: '解不等式 $x^2-2\\sqrt3x+5<0$。',
    answer: '無解',
    hasImage: false,
  },
  {
    id: '17e2ec050bc',
    chapter: '多項式函數',
    question: '解不等式 $(x-1)(x-2)(x-3)>0$。',
    answer: '$1<x<2\\lor x>3$',
    hasImage: false,
  },
  {
    id: '17e2ec0b9e8',
    chapter: '多項式函數',
    question: '解不等式 $(x-1)^2(x-3)<0$。',
    answer: '$x<1\\lor1<x<3$',
    hasImage: false,
  },
  {
    id: '17debc9daeb',
    chapter: '多項式函數',
    question: '已知對任意實數 $x$，$2x^2+4x+a$ 的值恆為正數，求 $a$ 的範圍。',
    answer: '$a>2$',
    hasImage: false,
  },
  {
    id: '17debcac6db',
    chapter: '多項式函數',
    question: '已知對任意實數 $x$，$-3x^2+x+p$ 的值恆為負數，求 $p$ 的範圍。',
    answer: '$p<-\\frac1{12}$',
    hasImage: false,
  },
  {
    id: '17debcce9b0',
    chapter: '多項式函數',
    question: '已知二次函數 $y=ax^2+2x+4$ 的圖形恆在直線 $y=2$ 的上方，求 $a$ 的範圍。',
    answer: '$a>\\frac12$',
    hasImage: false,
  },
  {
    id: '17debcf1d3f',
    chapter: '多項式函數',
    question: '已知二次函數 $y=ax^2+5x-4$ 的圖形恆在直線 $y=2x+1$ 的下方，求 $a$ 的範圍。',
    answer: '$a<-\\frac9{20}$',
    hasImage: false,
  },
  {
    id: '17debd0cc3d',
    chapter: '多項式函數',
    question: '已知二次函數 $y=x^2+5x+a$ 的圖形恆在直線 $y=x+3$ 的上方，求 $a$ 的範圍。',
    answer: '$a>7$',
    hasImage: false,
  },
  {
    id: '17debd4b626',
    chapter: '多項式函數',
    question: '已知二次函數 $f(x)=(x-a)^2+3$ 滿足 $f(100)=f(200)$，求 $a$。',
    answer: '$150$',
    hasImage: false,
  },
  {
    id: '17debd81235',
    chapter: '多項式函數',
    question: '試描繪三次多項式 $f(x)=-3(x-9)^3+2(x-9)+7$ 的圖形，並求其對稱中心。',
    answer: '圖略；$(9,7)$',
    hasImage: false,
  },
  {
    id: '17debdc6bc7',
    chapter: '多項式函數',
    question: '求三次函數 $f(x)=-x^3-3x^2-x-3$ 的對稱中心。',
    answer: '$(-1,-4)$',
    hasImage: false,
  },
  {
    id: '17debdd76f0',
    chapter: '多項式函數',
    question: '求三次函數 $f(x)=2x^3-12x^2+25x+9$ 的對稱中心。',
    answer: '$(2,9)$',
    hasImage: false,
  },
  {
    id: '17dd5537b2e',
    chapter: '多項式函數',
    question: '設 $f(x)$ 為一次函數，且 $f(2)=1$，$f(5)=7$，求 $f(8)$。',
    answer: '$13$',
    hasImage: false,
  },
  {
    id: '17dd5540782',
    chapter: '多項式函數',
    question: '設 $f(x)$ 為一次函數，且 $f(-2)=0$，$f(1)=-6$，求 $f(4)$。',
    answer: '$-12$',
    hasImage: false,
  },
  {
    id: '17dd5576a9f',
    chapter: '多項式函數',
    question:
      '設一次函數 $f(x)$，當 $x$ 增加 $2$ 單位時，其對應的函數值增加 $3$ 單位，且 $f(0)=5$，求 $f(x)$。',
    answer: '$f(x)=\\frac32x+5$',
    hasImage: false,
  },
  {
    id: '17dd5570344',
    chapter: '多項式函數',
    question:
      '設一次函數 $f(x)=2x-3$，在 $-1\\le x\\le3$ 的範圍內，求函數 $f(x)$ 的最大值及最小值。',
    answer: '$3$；$-5$',
    hasImage: false,
  },
  {
    id: '17dd559ae06',
    chapter: '多項式函數',
    question:
      '將 $y=-2x^2$ 的圖形往左平移 $1$ 個單位，再向下平移 $3$ 個單位後，所得到的新圖形，求其頂點座標。',
    answer: '$(-1,-3)$',
    hasImage: false,
  },
  {
    id: '17dd55e37aa',
    chapter: '多項式函數',
    question:
      '求下列各拋物線的頂點坐標及對稱軸方程式。\n(1) $y=x^2+4x-2$\n(2) $y=2x^2-8x+5$\n(3) $y=-3x^2-x$',
    answer:
      '(1) $(-2,-6)$；$x=-2$ (2) $(2,-3)$；$x=2$ (3) $(-\\frac16,\\frac1{12})$；$x=-\\frac16$',
    hasImage: false,
  },
  {
    id: '17dd5746bd7',
    chapter: '多項式函數',
    question:
      '已知將 $y=-x^2+6x-5$ 的圖形向左平移 $h$ 單位，再向上平移 $k$ 單位後，恰與 $y=-x^2+2x+6$ 的圖形重合，求數對 $(h,k)$。',
    answer: '$(2,3)$',
    hasImage: false,
  },
  {
    id: '17dd575cf61',
    chapter: '多項式函數',
    question:
      '已知將 $y=2x^2+8x$ 的圖形向右平移 $h$ 單位，再向下平移 $k$ 單位後，恰與 $y=2x^2-12x+9$ 的圖形重合，求數對 $(h,k)$。',
    answer: '$(5,1)$',
    hasImage: false,
  },
  {
    id: '17dd5771817',
    chapter: '多項式函數',
    question: '求二次函數 $y=x^2+3x+5$ 的最小值及此時的 $x$。',
    answer: '$\\frac{11}4$；$-\\frac32$',
    hasImage: false,
  },
  {
    id: '17dd578072a',
    chapter: '多項式函數',
    question: '求二次函數 $y=x^2-2x+3$ 的最小值及此時的 $x$。',
    answer: '$2$；$1$',
    hasImage: false,
  },
  {
    id: '17dd57928ff',
    chapter: '多項式函數',
    question: '在 $-2\\le x\\le1$ 的範圍內，求二次函數 $y=-2x^2-4x$ 的最大值與最小值。',
    answer: '$2$；$-6$',
    hasImage: false,
  },
  {
    id: '17dd57b49a8',
    chapter: '多項式函數',
    question: '在 $2\\le x\\le3$ 的範圍內，求二次函數 $y=-3x^2+6x+1$ 的最大值與最小值。',
    answer: '$-1$；$-10$',
    hasImage: false,
  },
  {
    id: '17db6950035',
    chapter: '多項式函數',
    question:
      '請利用綜合除法求下列各小題的商式和餘式：\n(1) $-2x^4+3x^3+5x-3$ 除以 $x-2$\n(2) $3x^3+41x^2+25x-1$ 除以 $x+13$',
    answer: '(1) $-2x^3-x^2-2x+1$；$-1$ (2) $3x^2+2x-1$；$12$',
    hasImage: false,
  },
  {
    id: '17db6987f37',
    chapter: '多項式函數',
    question:
      '若多項式 $f(x)=2x^3+x^2-3x+1$ 可表示成 $a(x-2)^3+b(x-2)^2+c(x-2)+d$，求：\n(1) 序組 $(a,b,c,d)$\n(2) 計算 $f(2.01)$ 的近似值，四捨五入至小數點後第二位',
    answer: '(1) $(2,13,25,15)$ (2) $15.25$',
    hasImage: false,
  },
  {
    id: '17db69a01e4',
    chapter: '多項式函數',
    question:
      '設 $f(x)=x^3-8x^2+25x-32$，將 $f(x)$ 表成 $a(x-3)^3+b(x-3)^2+c(x-3)+d$，求：\n(1) 序組 $(a,b,c,d)$\n(2) $f(2.99)$ 的近似值，四捨五入至小數點後第二位',
    answer: '(1) $(1,1,4,-2)$ (2) $-2.04$',
    hasImage: false,
  },
  {
    id: '17db69c9751',
    chapter: '多項式函數',
    question: '設多項式 $f(x)=3x^{11}+7x^6-6x-8$，試求 $f(x)$ 除以 $x+1$ 之餘式。',
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '17db69d4f27',
    chapter: '多項式函數',
    question: '設 $f(x)=(9x^3-4x-2)^5$，試求 $f(x)$ 除以 $3x+2$ 之餘式。',
    answer: '$-32$',
    hasImage: false,
  },
  {
    id: '17db69e3379',
    chapter: '多項式函數',
    question: '設 $f(x)=x^{2010}+ax^{99}+7x-8$ 除以 $x+1$ 之餘式為 $6$，求 $a$。',
    answer: '$-20$',
    hasImage: false,
  },
  {
    id: '17db6a127df',
    chapter: '多項式函數',
    question: '已知 $f(x)=3x^5-22x^4+12x^3-33x^2$$-10x-5$，求 $f(7)$。',
    answer: '$23$',
    hasImage: false,
  },
  {
    id: '17db6a2a106',
    chapter: '多項式函數',
    question:
      '求 $3\\times(-\\frac23)^5-4\\times(-\\frac23)^4+5\\times(-\\frac23)^3$$+3\\times(-\\frac23)^2+7\\times(-\\frac23)+16$ 之值。',
    answer: '$10$',
    hasImage: false,
  },
  {
    id: '17db6a43a24',
    chapter: '多項式函數',
    question:
      '已知多項式 $f(x)$ 除以 $x+1$ 的餘式為 $-8$，除以 $x-2$ 的餘式為 $1$，求 $f(x)$ 除以 $(x+1)(x-2)$ 之餘式。',
    answer: '$3x-5$',
    hasImage: false,
  },
  {
    id: '17db6a58a3a',
    chapter: '多項式函數',
    question:
      '已知 $x^4+2x^3+5x-7$ 除以多項式 $g(x)$ 的商式為 $x^3-x^2+3x-4$，餘式為 $5$，求 $g(x)$。',
    answer: '$x+3$',
    hasImage: false,
  },
  {
    id: '17db6a65a45',
    chapter: '多項式函數',
    question:
      '下列何者是 $2x^4+x^3-8x^2-5x+2$ 的因式？\n(1) $x+1$ (2) $x-1$ (3) $x+2$\n(4) $x-2$ (5) $x+4$',
    answer: '(1)(4)',
    hasImage: false,
  },
  {
    id: '17db6a7ad09',
    chapter: '多項式函數',
    question: '設 $f(x)$ 為三次多項式，若 $f(-1)=f(3)=0$，且 $f(1)=-12$，$f(0)=-3$，求 $f(2)$。',
    answer: '$-15$',
    hasImage: false,
  },
  {
    id: '17da25ba285',
    chapter: '多項式函數',
    question:
      '設三次實係數多項式 $f(x)=x^3+ax+b$，已知不等式 $f(x)<52$ 的解為 $x<-\\sqrt3$ 或 $0<x<\\sqrt3$，求數對 $(a,b)$。',
    answer: '$(-3,52)$',
    hasImage: false,
  },
  {
    id: '17da24b9ca4',
    chapter: '多項式函數',
    question:
      '設 $a,b\\in\\mathbb R$，且二次函數 $f(x)=a(x-3)^2+b$ 滿足 $f(2)<0$，$f(1)>0$，若方程式 $f(x)=0$ 有兩個實根 $\\alpha,\\beta$，且 $\\alpha>\\beta$，則下列何者正確？',
    answer: '(3)',
    hasImage: false,
  },
  {
    id: '17d7efc8442',
    chapter: '多項式函數',
    question:
      '設 $f(x)$ 為一多項式，若 $(2x+1)f(x)$ 除以 $x^2+x-1$ 的餘式為 $4x-3$，求 $f(x)$ 除以 $x^2+x-1$ 的餘式。',
    answer: '$-2x+1$',
    hasImage: false,
  },
  {
    id: '17d7efeb202',
    chapter: '多項式函數',
    question:
      '已知二次函數 $f(x)=101x^2+197x+199$，若 $a$、$b$ 為兩相異實數且滿足 $f(a)=f(b)$，求 $f(a+b)$。',
    answer: '$199$',
    hasImage: false,
  },
  {
    id: '17d7ea25392',
    chapter: '多項式函數',
    question:
      '設 $f(x)=-x^2+2x+7$，$P(x_1,y_1)$、$Q(x_2,y_2)$ 兩點為 $f(x)$ 上動點，並滿足 $x_1<x_2$ 且 $\\overline{PQ}$ 斜率為 $1$，下列敘述中請選出正確的選項。\n(1) $x_1+x_2<\\frac32$ 恆成立\n(2) $\\overline{PQ}$ 過原點時，$y_2>3$\n(3) $x_1x_2=-4$ 時，$\\overline{PQ}>6$\n(4) $\\overline{PQ}=4$ 時，$x_1$、$x_2$ 均為整數\n(5) 將 $P$、$Q$ 移動到適當的位置，可以找到 $\\overline{PQ}$ 的最大值',
    answer: '(1)(2)',
    hasImage: false,
  },
  {
    id: '17d7ea6dd5a',
    chapter: '多項式函數',
    question:
      '設 $f(x)$ 是一個 $7$ 次實係數多項式，$a$、$b$ 為常數且 $a<b$，則下列何者正確？\n(1) 若 $f(a)f(b)>0$，則 $f(x)=0$ 在 $a$ 與 $b$ 之間沒有實根\n(2) 若 $f(x)=0$ 在 $a$ 與 $b$ 之間沒有實根，則 $f(a)f(b)\\ge0$\n(3) 若 $f(x)=0$ 有一個實根 $c$，且 $a<c<b$，則 $f(a)f(b)\\le0$\n(4) 若 $f(a)f(b)<0$，則 $f(x)=0$ 恰有一實根 $c$，且 $a<c<b$\n(5) $y=f(x)$ 的圖形與任何三次函數的圖形必有交點',
    answer: '(2)(5)',
    hasImage: false,
  },
  {
    id: '17d7e6712d7',
    chapter: '多項式函數',
    question:
      '若多項式 $f(x)$ 除以 $x-1$ 的商式為 $g(x)$，餘式為 $2$，且 $g(1)=-3$，試問 $f(x)$ 除以 $(x-1)^2$ 的餘式為？\n(1) $2$ (2) $-3$ (3) $0$ (4) $-3x$ (5) $-3x+5$',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '17be240b49d',
    chapter: '多項式函數',
    question:
      '已知實係數多項式函數 $f(x)=(x-1)(ax^2+bx+c)$，$a\\neq0$，下列關於此多項式的解，試選出正確的選項。\n(1) 若 $b^2-4ac=0$，則 $ax^2+bx+c=0$ 有兩相同實根，且 $f(x)=0$ 恰有兩相異實根\n(2) 若 $b^2-4ac>0$，且 $a+b+c<0$，則 $f(x)=0$ 有三個相異實根\n(3) 若 $b^2-4ac<0$，則  $ax^2+bx+c=0$ 無實根，且 $f(x)=0$ 只有一個實根\n(4) 若 $y=f(x)$ 的圖形與 $x$ 軸只有一個交點，則 $b^2-4ac<0$\n(5) 若 $y=f(x)$ 的圖形與 $x$ 軸的交點不只一個，則 $b^2-4ac\\ge0$',
    answer: '(2)(3)(5)',
    hasImage: false,
  },
  {
    id: '17be23827ca',
    chapter: '多項式函數',
    question:
      '有一個二次實係數多項式函數 $f(x)$，已知 $f(0)$、$f(1)$、$f(2)$ 均不為 $0$，且 $f(0)$、$f(1)$、$f(2)$ 為等比數列，$f(-1)=f(1)=3$，求 $f(x)$ 除以 $x-3$ 的餘式。',
    answer: '$19$',
    hasImage: false,
  },
  {
    id: '17be2299264',
    chapter: '多項式函數',
    question:
      '多項式 $f(x)=(x^2+4x+5)(x^2-5x+3)$，則下列何者為 $f(x)\\le0$ 的解？\n(1) $\\sqrt{10}$ (2) $-\\sqrt{10}$ (3) $0$ (4) $-3$ (5) $8$',
    answer: '(1)',
    hasImage: false,
  },
  {
    id: '17aa0e24f17',
    chapter: '多項式函數',
    question: '若多項式 $f(x)=2x^3+ax^2+9x-2$ 除以 $x^2+2x+3$，餘式為 $x+b$，求 $a-b$。',
    answer: '$10$',
    hasImage: false,
  },
  {
    id: '17aa0e47333',
    chapter: '多項式函數',
    question:
      '已知 $f(x)+g(x)=5x^3+7x^2-4x+3$，若 $g(x)$ 除以 $x^2-x-2$ 的餘式為 $3x+1$，求 $f(x)$ 除以 $x-2$ 的餘式。',
    answer: '$56$',
    hasImage: false,
  },
  {
    id: '17aa0e59c40',
    chapter: '多項式函數',
    question: '$f(x)=x^5-4x^4-72x^3-56x^2+15x+7$，求 $f(11)$。',
    answer: '$51$',
    hasImage: false,
  },
  {
    id: '17aa0e72c9d',
    chapter: '多項式函數',
    question:
      '若多項式 $f(x)$ 除以 $(x-2)(x-3)$ 的餘式為 $12x-16$，且多項式 $f(x)$ 有 $x-1$ 的因式，求 $f(x)$ 除以 $(x-1)(x-2)$ 的餘式。',
    answer: '$8x-8$',
    hasImage: false,
  },
  {
    id: '17aa0e89885',
    chapter: '多項式函數',
    question: '若多項式 $x^{20}+ax^{19}+7x+b$ 能被 $x^2-1$ 整除，求 $a^2+b^2$。',
    answer: '$50$',
    hasImage: false,
  },
  {
    id: '17aa0ea109c',
    chapter: '多項式函數',
    question:
      '設 $f(x)=x^3-4x^2+7x+1$\n$=a(x-2)^3+b(x-2)^2+c(x-2)+d$，求：\n(1) $a-b+c-d$\n(2) $f(1.99)$ 的近似值 (四捨五入至小數點後第二位)',
    answer: '(1) $-5$ (2) $6.97$',
    hasImage: false,
  },
  {
    id: '17aa0eb9850',
    chapter: '多項式函數',
    question:
      '已知二次函數 $y=f(x)$ 的圖形通過點 $(1,6)$、$(0,5)$、$(-1,2)$，且與 $x$ 軸交於 $A$、$B$ 兩點，求 $\\overline{AB}$。',
    answer: '$2\\sqrt{6}$',
    hasImage: false,
  },
  {
    id: '17aa0ecdfd4',
    chapter: '多項式函數',
    question:
      '設 $f(x)=ax^2+4ax-b$，其中 $a>0$，$-3\\le x\\le1$，且最大值為 $11$，最小值為 $-7$，求數對 $(a,b)$。',
    answer: '$(2,-1)$',
    hasImage: false,
  },
  {
    id: '17aa0ee0aac',
    chapter: '多項式函數',
    question: '$f(x)=kx^2+(k+1)x+k-1$ 恆為負，求 $k$ 的範圍。',
    answer: '$k<\\frac{3-2\\sqrt{3}}{3}$',
    hasImage: false,
  },
  {
    id: '17aa0ef5f01',
    chapter: '多項式函數',
    question:
      '若 $n\\in\\mathbb{N}$，且 $(x-4)(x-\\sqrt{n})<0$ 恰有一個整數解，則 $n$ 共有幾種可能的值？',
    answer: '$16$',
    hasImage: false,
  },
  {
    id: '17a2d6163e4',
    chapter: '多項式函數',
    question:
      '設 $a,b,c\\in\\mathbb R$，若二次函數 $f(x)=ax^2+bx+c$ 的圖形通過 (0,-1) 且與 $x$ 軸相切，則下列哪些正確？\n(1) $a<0$ (2) $b>0$ (3) $c=-1$\n(4) $b^2+4ac=0$ (5) $a+b+c\\le0$',
    answer: '(1)(3)(5)',
    hasImage: false,
  },
  {
    id: '17a2d6ebedf',
    chapter: '多項式函數',
    question: '函數 $y=ax+b$ 與 $y=ax^2+bx+c$ 在同一坐標系的圖形可能為下列哪些？',
    answer: '(2)(4)',
    hasImage: true,
    style: { width: '100%' },
  },
  {
    id: '17a2d790e42',
    chapter: '多項式函數',
    question:
      '設 $a,b\\in\\mathbb R$，已知坐標平面上拋物線 $y=x^2+ax+b$ 與 $x$ 軸交於 $P$、$Q$ 兩點，且 $\\overline{PQ}=7$，若拋物線 $y=x^2+ax+(b+2)$ 與 $x$ 軸的兩交點為 $R$、$S$，求 $\\overline{RS}$。',
    answer: '$\\sqrt{41}$',
    hasImage: false,
  },
  {
    id: '17a2da48070',
    chapter: '多項式函數',
    question:
      '設 $a,b\\in\\mathbb R$，若 $y=x^2+ax+b$ 的圖形被 $x$ 軸所截的弦長為 6，則此圖形沿 $y$ 軸正向平移 $k$ 後恰與 $x$ 軸相切，求 $k$。',
    answer: '9',
    hasImage: false,
  },
  {
    id: '17a2da5fdc6',
    chapter: '多項式函數',
    question:
      '設 $m\\in\\mathbb R$，二次函數 $y=mx^2+x+(m+1)$ 的圖形恆在直線 $3x+2y=1$ 的上方，求 $m$ 的範圍。',
    answer: '$m>\\frac{-1+\\sqrt{26}}4$',
    hasImage: false,
  },
  {
    id: '17a2db03ab8',
    chapter: '多項式函數',
    question:
      '二次函數 $f(x)=ax^2+bx+c$，已知 $f(2)=4$，$f(5)=1$，且 $y=f(x)$ 的函數值恆為正數，求二次項係數 $a$ 的範圍。',
    answer: '$\\frac19<a<1$',
    hasImage: false,
  },
  {
    id: '17a2db390e3',
    chapter: '多項式函數',
    question:
      '設 $a,b\\in\\mathbb R$ 且 $\\begin{cases}x^2-5x+a<0\\\\x^2+3x+b<0\\end{cases}$ 的解為 $1<x<2$，求數對 $(a,b)$。',
    answer: '(4,-10)',
    hasImage: false,
  },
  {
    id: '17a2db5f497',
    chapter: '多項式函數',
    question:
      '$f(x)$ 為三次多項式，若 $f(x)>0$ 的解為 $2<x<5$ 或 $x>6$，$f(x)>12$ 的解為 $x>8$，求 $f(0)$。',
    answer: '-20',
    hasImage: false,
  },
  {
    id: '17a2db8d3e7',
    chapter: '多項式函數',
    question:
      '不等式 $x^2(x+5)(x+1)(x-4)(x-7)<$$(2x-3)(x+5)(x+1)(x-4)(x-7)$，下列哪些選項是它的一個解？\n(1) $-2\\pi$ (2) $-\\pi$ (3) $\\pi$ (4) $2\\pi$',
    answer: '(2)(4)',
    hasImage: false,
  },
  {
    id: '17a2dbb5a10',
    chapter: '多項式函數',
    question: '求 $(x^2-4x+2)(2x-5)(2x-37)\\le0$ 的整數解個數。',
    answer: '17',
    hasImage: false,
  },
  {
    id: '17a204fcdcb',
    chapter: '多項式函數',
    question:
      '設 $f(x)=x^3-4x^2+7x-1$=a(x-2)^3+b(x-2)^2+c(x-2)+d$，試求：\n(1) $a+b+c+d$\n(2) $f(1.98)$ 的近似值 (四捨五入取到小數點後第二位)',
    answer: '(1) $11$ (2) $4.94$',
    hasImage: false,
  },
  {
    id: '17a2051a7ed',
    chapter: '多項式函數',
    question: '設 $f(x)=x^7-9x^6+11x^5-22x^4$-18x^3+20x^2-99$，試求 $f(8)$。',
    answer: '$157$',
    hasImage: false,
  },
  {
    id: '17a2053e759',
    chapter: '多項式函數',
    question:
      '多項式 $f(x)$ 除以 $x-3$ 得餘式 $12$，除以 $x+2$ 得餘式 $2$，試求 $f(x)$ 除以 $(x-3)(x+2)$ 所得之餘式。',
    answer: '$2x+6$',
    hasImage: false,
  },
  {
    id: '17a2055075c',
    chapter: '多項式函數',
    question:
      '設 $f(x)=x^2-4x+k$，若不論 $x$ 為任何實數，對應的 $f(x)$ 值恆為正數，求實數 $k$ 的範圍。',
    answer: '$k>4$',
    hasImage: false,
  },
  {
    id: '17a205692cf',
    chapter: '多項式函數',
    question: '求不等式 $(x^2+x+2)(x-5)(2x-25)\\le0$ 之解。',
    answer: '$5\\le x\\le\\frac{25}{2}$',
    hasImage: false,
  },
  {
    id: '17a20581f3b',
    chapter: '多項式函數',
    question: '當 $2\\le x\\le4$ 時，$y=-2x^2+4x+5$ 有最大值 $M$，求 $M$。',
    answer: '$5$',
    hasImage: false,
  },
  {
    id: '17a17f2a43b',
    chapter: '多項式函數',
    question: '設 $f(x)=ax^6-bx^4+3x-\\sqrt2$，其中 $a$、$b$ 為非零實數，求 $f(5)-f(-5)$。',
    answer: '30',
    hasImage: false,
  },
  {
    id: '17a17f48c08',
    chapter: '多項式函數',
    question:
      '$a\\in\\mathbb R$，多項式 $f(x)=(2x^7+ax^4-a)^5$ 的次數為？將 $f(x)$ 乘開後各項係數之和為？',
    answer: '35；32',
    hasImage: false,
  },
  {
    id: '17a17faa323',
    chapter: '多項式函數',
    question: '若多項式 $x^2+x+2$ 能整除 $x^5+x^4+x^3+px^2+2x+q$，求 $p$、$q$。',
    answer: '3；8',
    hasImage: false,
  },
  {
    id: '17a17fb7134',
    chapter: '多項式函數',
    question: '利用綜合除法求 $2x^3+x^2-7$ 除以 $x+3$ 的商與餘。',
    answer: '$2x^2-5x+15$；-52',
    hasImage: false,
  },
  {
    id: '17a17fea46a',
    chapter: '多項式函數',
    question: '多項式 $x^3+4x^2+5x-3$ 除以 $f(x)$ 的商式為 $x+2$，餘式 $2x-1$，求 $f(x)$。',
    answer: '$x^2+2x-1$',
    hasImage: false,
  },
  {
    id: '17a17ffc39c',
    chapter: '多項式函數',
    question:
      '$f(x)=(x^2+1)(x^3-2)\\cdot g(x)+x^2+x+3$，$g(x)$ 為某一多項式，求：\n(1) $f(x)$ 除以 $x^3-2$ 的餘式\n(2) $f(x)$ 除以 $x^2+1$ 的餘式',
    answer: '(1) $x^2+x+3$ (2) $x+2$',
    hasImage: false,
  },
  {
    id: '17a180799da',
    chapter: '多項式函數',
    question: '將 $f(x)=5x^3+x^2-2x+4$ 化為 $x-1$ 的多項式，並利用此結果求 $f(1.1)$。',
    answer: '9.665',
    hasImage: false,
  },
  {
    id: '18155c5e153',
    chapter: '多項式函數',
    question: '$f(x)=x^3-5x^2-6x+45$，求 $f(x)$ 在 $x=4$ 的一次近似。',
    answer: '$2x-3$',
    hasImage: false,
  },
  {
    id: '17a180d10c7',
    chapter: '多項式函數',
    question: '求 $x^{10}+3$ 除以 $x-2$ 的餘式。',
    answer: '1027',
    hasImage: false,
  },
  {
    id: '17a180dadba',
    chapter: '多項式函數',
    question: '$f(x)=x^5+6x^4-4x^3+25x^2+30x+20$，求 $f(-7)$。',
    answer: '6',
    hasImage: false,
  },
  {
    id: '17a181a61da',
    chapter: '多項式函數',
    question: '若 $x+2$ 為 $f(x)=x^7+ax^3$ 的因式，求 $a$。',
    answer: '-16',
    hasImage: false,
  },
  {
    id: '17a181b5061',
    chapter: '多項式函數',
    question:
      '$a\\in\\mathbb Z$，下列哪一個選項的一次式，有可能是 $f(x)=2x^3+ax^2-2ax+a$ 的因式？\n(1) $x+1$ (2) $x-1$ (3) $x+2$ (4) $x-2$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17a18286398',
    chapter: '多項式函數',
    question: '設 $f(x)$ 為三次多項式，若 $f(-2)=f(1)=0$，$f(0)=6$ 且 $f(3)=30$，求 $f(-1)$。',
    answer: '10',
    hasImage: false,
  },
  {
    id: '18155dc8999',
    chapter: '多項式函數',
    question: '$f(x)$ 為三次多項式，若 $f(1)=f(5)=f(6)=3$ 且 $f(0)=63$，求 $f(2)$。',
    answer: '-21',
    hasImage: false,
  },
  {
    id: '17a182b5deb',
    chapter: '多項式函數',
    question: '設 $f(x)$ 是二次多項式，若 $f(121)=1$，$f(122)=4$，$f(123)=11$，求 $f(125)$。',
    answer: '37',
    hasImage: false,
  },
  {
    id: '18155df085c',
    chapter: '多項式函數',
    question:
      '多項式 $f(x)$ 至少三次，除以 $x+1$ 的餘式為 6，除以 $x^2+x+2$ 的餘式為 $5x-3$，求 $f(x)$ 除以 $(x+1)(x^2+x+2)$ 的餘式。',
    answer: '$7x^2+12x+11$',
    hasImage: false,
  },
  {
    id: '17a183408c1',
    chapter: '多項式函數',
    question: '求方程式 $x^2+4x-6=0$ 的解。',
    answer: '$-2\\pm\\sqrt{10}$',
    hasImage: false,
  },
  {
    id: '17a18354981',
    chapter: '多項式函數',
    question:
      '設 $k$ 為實數使得方程式 $3x^2+15x+k=0$ 有兩個實根 $\\alpha$、$\\beta$，則：\n(1) $\\alpha+\\beta=$？ (2) 若 $\\alpha\\beta=2$，求 $k$。',
    answer: '(1) $-5$ (2) $6$',
    hasImage: false,
  },
  {
    id: '17a18414108',
    chapter: '多項式函數',
    question: '$f(x)$ 為一次函數，若 $f(1.27)=8.723$，$f(1.28)=8.783$，求 $f(1.29)$。',
    answer: '8.843',
    hasImage: false,
  },
  {
    id: '1815800314f',
    chapter: '多項式函數',
    question: '已知一次函數 $f(x)$ 滿足 $f(\\sqrt2)=2$，$f(\\sqrt7)=7$，$f(k)=5$，求 $k$。',
    answer: '$\\frac{2\\sqrt2+3\\sqrt7}5$',
    hasImage: false,
  },
  {
    id: '17a19a05422',
    chapter: '多項式函數',
    question:
      '設某沙漠地區某一段時間的溫度函數為 $f(t)=-t^2+10t+11$，其中 $1\\le t\\le10$，則這段時間內該地區的最大溫差為？',
    answer: '25',
    hasImage: false,
  },
  {
    id: '1815827492c',
    chapter: '多項式函數',
    question:
      '設 $f(x)=x^2+ax+b$，$a$、$b$ 為固定實數，若 $f(3+x)=f(3-x)$ 對任意實數 $x$ 均成立，求 $f(1)$、$f(3)$、$f(4)$ 的大小關係。',
    answer: '$f(1)>f(4)>f(3)$',
    hasImage: false,
  },
  {
    id: '17a19a1410c',
    chapter: '多項式函數',
    question: '設 $f(x)=x^2-2x+k$，對所有實數 $x$ 恆使 $f(x)>0$，求 $k$ 的範圍。',
    answer: '$k>1$',
    hasImage: false,
  },
  {
    id: '181582aa801',
    chapter: '多項式函數',
    question: '$f(x)=3(x-1)^2+2(x-2)^2+(x-5)^2$ 的最小值及此時的 $x$。',
    answer: '12；2',
    hasImage: false,
  },
  {
    id: '1815831939c',
    chapter: '多項式函數',
    question: '已知函數 $y=ax^2+bx=c$，$a\\ne0$，通過 (-6,3)，(0,3) 兩點，求其對稱軸方程式。',
    answer: '$x=-3$',
    hasImage: false,
  },
  {
    id: '1815833a34f',
    chapter: '多項式函數',
    question:
      '二次函數 $f(x)=ax^2+bx+c$ 的圖形通過四個象限，則點 $A\\left(\\dfrac c a,\\dfrac{4ac-b^2}{ac}\\right)$ 落在第幾象限？',
    answer: '二',
    hasImage: false,
  },
  {
    id: '17a19a9301f',
    chapter: '多項式函數',
    question: '$f(x)=x^3+12x^2+8x+7$\n$=(x-h)^3+p(x-h)+q$，求 $h$、$p$、$q$、對稱中心。',
    answer: '-4；-40；103；(-4,103)',
    hasImage: false,
  },
  {
    id: '17a19abbcc7',
    chapter: '多項式函數',
    question:
      '$a\\ne0$，$f(x)=a(x-9)^3+b(x-9)+7$ 的圖形與圓 $(x-9)^2+(y-7)^2=r^2$ 恰有兩個交點，其中一個交點的坐標是 (20,15)，求另一個交點的坐標。',
    answer: '(-2,-1)',
    hasImage: false,
  },
  {
    id: '181585ee75b',
    chapter: '多項式函數',
    question: '若 $f(x)$ 為五次多項式，試問 $f(x)=0$ 的解可能有幾個？',
    answer: '$1\\lor3\\lor5$',
    hasImage: false,
  },
  {
    id: '18158627ae9',
    chapter: '多項式函數',
    question:
      '$n$ 次多項式 $a_nx^n+a_{n-1}x^{n-1}+\\cdots+a_1x+a_0$，若圖為其大域圖形，則下列何者正確？\n(1) $a_n>0$　(2) $a_n<0$\n(3) $n$ 為奇數　(4) $n$ 為偶數',
    answer: '(2)(3)',
    hasImage: true,
    style: { height: '3.5cm' },
  },
  {
    id: '1815876f5b7',
    chapter: '多項式函數',
    question: '求 $x^2-x-2\\ge0$ 之解。',
    answer: '$x\\le-1\\lor x\\ge2$',
    hasImage: false,
  },
  {
    id: '181587a3095',
    chapter: '多項式函數',
    question: '求 $(x-1)(x-4)<x-5$ 之解。',
    answer: '無解',
    hasImage: false,
  },
  {
    id: '17a19bb02e6',
    chapter: '多項式函數',
    question: '求 $(x+1)(x-1)(x^2+x+1)<0$ 之解。',
    answer: '$-1<x<1$',
    hasImage: false,
  },
  {
    id: '17a19bbf61e',
    chapter: '多項式函數',
    question: '求 $(x-1)(x-2)^3(x-3)^2>0$ 之解。',
    answer: '$x<1\\lor x>2,x\\ne3$',
    hasImage: false,
  },
  {
    id: '17a19c2b55e',
    chapter: '多項式函數',
    question:
      '多項式 $f(x)$ 除以 $x^2-2x-3$ 的餘式為 $x+5$，則關於 $f(x)$ 的除法，哪些正確？\n(1) 除以 $x+1$ 的餘式必為 4\n(2) 除以 $x+3$ 的餘式必為 8\n(3) 除以 $x^2+3x+2$ 的餘式可能為 $3x+7$\n(4) 除以 $x^2-x-6$ 的餘式可能為 $2x+3$\n(5) 除以 $(x+1)(x-3)(x+2)$ 的餘式可能為 $2x^2-3x-1$',
    answer: '(1)(3)(5)',
    hasImage: false,
  },
  {
    id: '17a1ad46bf7',
    chapter: '多項式函數',
    question:
      '學生練習三次多項式 $f(x)$ 除以一次多項式 $g(x)$ 的餘式。已知 $f(x)$ 的三次項係數為 3，一次項係數為 2。甲生把 $f(x)$ 的三次項係數錯看成 2，乙生把 $f(x)$ 的一次項係數錯看成 -2。而甲生和乙生算出來的餘式剛好一樣。試問 $g(x)$ 可能等於以下列哪些一次式？\n(1) $x$ (2) $x-1$ (3) $x-2$ (4) $x+1$ (5) $x+2$',
    answer: '(1)(3)(5)',
    hasImage: false,
  },
  {
    id: '17a1adcc0ed',
    chapter: '多項式函數',
    question:
      '設多項式 $f(x)$ 除以 $x^2-5x+4$，餘式為 $x+2$；除以 $x^2-5x+6$，餘式為 $3x+4$，求 $f(x)$ 除以 $x^2-4x+3$ 之餘式。',
    answer: '$5x-2$',
    hasImage: false,
  },
  {
    id: '17a1ade3264',
    chapter: '多項式函數',
    question:
      '設 $f(x)$ 為三次多項式，若 $f(x)$ 除以 $(x+2)(x-3)$ 的餘式為 $4x-1$，除以 $x^2+1$ 的餘式為 $-9x+8$，求 $f(x)$。',
    answer: '$2x^3-3x^2-7x+5$',
    hasImage: false,
  },
  {
    id: '17a1aff775f',
    chapter: '多項式函數',
    question:
      '若多項式 $f(x)$、$g(x)$ 滿足 $f(x)-g(x)=x^3-5x^2+x+4$，且 $g(x)$ 除以 $x-1$ 的餘式為 8，求 $f(x)$ 除以 $x-1$ 的餘式。',
    answer: '9',
    hasImage: false,
  },
  {
    id: '17a1b0214d9',
    chapter: '多項式函數',
    question: '若 $f(x)=x^3-2x^2-x+5$，求多項式 $g(x)=f(f(x))$ 除以 $x-2$ 的餘式。',
    answer: '11',
    hasImage: false,
  },
  {
    id: '17a1b0543b3',
    chapter: '多項式函數',
    question:
      '設 $f(x)=6x^4+5x^3-16x^2-6x+17$，已知有四個相異實數 $p$、$q$、$r$、$s$ 滿足 $f(p)=f(q)=f(r)=f(s)=12$，求 $(p+1)(q+1)(r+1)(s+1)$。',
    answer: '$-\\frac23$',
    hasImage: false,
  },
  {
    id: '17a1b0ada5c',
    chapter: '多項式函數',
    question:
      '設 $p,q\\in\\mathbb R$，若多項式 $f(x)=x^{20}-4x^{18}+x^5+px+q$ 能被 $x^2+x-2$ 整除，請問下列選項哪些正確？\n(1) $p,q\\in\\mathbb{Z}$ (2) $p>q$ (3) $p+q>0$\n(4) $pq>0$ (5) $p^q>q^p$',
    answer: '(1)(3)(5)',
    hasImage: false,
  },
  {
    id: '17a1b0d869e',
    chapter: '多項式函數',
    question:
      '設二次實係數多項式函數 $f(x)=ax^2+2ax+b$ 在區間 $-1\\le x\\le1$ 的最大值為 7、最小值為 3，求數對 $(a,b)$。',
    answer: '$(1,4)\\lor(-1,6)$',
    hasImage: false,
  },
  {
    id: '17a1b10ab40',
    chapter: '多項式函數',
    question:
      '設 $a,b\\in\\mathbb R$ 且 $a\\ne0$，若 $f(x)=ax^2+bx+\\frac1a$ 在 $x=2$ 時有最大值為 -3，則點 $P(a,b)$ 在第幾象限？',
    answer: '二',
    hasImage: false,
  },
  {
    id: '181588e7b16',
    chapter: '多項式函數',
    question: '若 $a(x-4)^2+b<10$ 的解為 $k-8<x<2k+1$。求 $k$。',
    answer: '5',
    hasImage: false,
  },
  {
    id: '1815890a8b2',
    chapter: '多項式函數',
    question:
      '三次函數 $f(x)=a(x-5)^3+b(x-5)+7$，其中 $a$、$b$ 為實數且 $a\\ne0$，若不等式 $1\\le f(x)\\le13$ 的解為 $k-9\\le x\\le3k+7$，求 $k$。',
    answer: '3',
    hasImage: false,
  },
  {
    id: '1815892e7ec',
    chapter: '多項式函數',
    question: '設 $f(x)$ 為二次函數，且 $f(x)>0$ 之解為 $-2<x<4$，求 $f(2x)<0$ 之解。',
    answer: '$x<-1\\lor x>2$',
    hasImage: false,
  },
  {
    id: '181589436c7',
    chapter: '多項式函數',
    question: '若 $y=f(x)$ 的圖形如圖，求 $f(2x+5)<0$ 的解。',
    answer: '$-2<x<-1\\lor x>1$',
    hasImage: true,
    style: { height: '3cm' },
  },
  {
    id: '185a919114f',
    chapter: '多項式函數',
    question:
      '設 $f(x)=(x^3+2x^2+1)(x^2+x-1)+x^2+1$，下列敘述何者正確？\n(A) $f(x)$ 除以 $x-2$ 的餘式為 85\n(B) $f(x)$ 有 $x+1$ 的因式\n(C) $f(x)$ 除以 $x^2+x-1$ 的餘式為 $x-2$\n(D) $f(x)$ 除以 $x^3+2x^2+1$ 的餘式為 $x^2+1$',
    answer: '(B)(D)',
    hasImage: false,
  },
  {
    id: '185a91bf912',
    chapter: '多項式函數',
    question:
      '已知三次函數 $f(x)=-2x^3-6x^2-2x+k$ 圖形的對稱中心為 (-1, 7)，下列敘述何者正確？\n(A) $k=2$\n(B) 若點 $(r,s)$ 在 $y=f(x)$ 的圖形上，則點 $(r-2,s+14)$ 也在 $y=f(x)$ 的圖形上\n(C) 局部看 $y=f(x)$ 在 $x=-2$ 附近的圖形近似於直線 $y=-2x+1$\n(D) $f(-1.99)\\approx4.98$ (四捨五入至小數點下第二位)',
    answer: '(C)(D)',
    hasImage: false,
  },
  {
    id: '185a91d63c1',
    chapter: '多項式函數',
    question: '求三次函數 $f(x)=-x^3+3x^2-2x-2$ 圖形的對稱中心。',
    answer: '(1,-2)',
    hasImage: false,
  },
  {
    id: '185a91f6426',
    chapter: '多項式函數',
    question:
      '已知 $f(x)$ 是首項係數為 1 的三次多項式，且不等式 $f(x)>0$ 的解為 $0<x<1$ 或 $x>2$，求不等式 $f(x)>2x$ 的解。',
    answer: '$x>3$',
    hasImage: false,
  },
  {
    id: '185a920a8ad',
    chapter: '多項式函數',
    question: '若對任意實數 $x$，$f(x)=kx^2+kx+(k+1)$ 圖形恆在 $x$ 軸的上方，求 $k$ 的範圍。',
    answer: '$k>0$',
    hasImage: false,
  },
  {
    id: '185a92237b0',
    chapter: '多項式函數',
    question:
      '已知多項式 $f(x)$ 除以 $x-3$ 的餘式為 5，除以 $x+4$ 的餘式為 -9，求 $f(x)$ 除以 $x^2+x-12$ 的餘式。',
    answer: '$2x-1$',
    hasImage: false,
  },
  {
    id: '185a92360dd',
    chapter: '多項式函數',
    question: '設 $f(x)=x^3-x^2+x-9=a(x-1)^3+b(x-1)^2+c(x-1)+d$，求 $a-b+c-d$。',
    answer: '9',
    hasImage: false,
  },
  {
    id: '185a928fabc',
    chapter: '多項式函數',
    question:
      '已知 $f(x)=x^3+ax^2+bx+c$ 的圖形對稱中心為 (1, 5)，$g(x)=ax^2+bx+c$ 的圖形對稱於直線 $x=-1$，求 $g(x)$ 的頂點坐標。',
    answer: '(-1, 16)',
    hasImage: false,
  },
  {
    id: '185a92a929a',
    chapter: '多項式函數',
    question:
      '拋物線 $f(x)=x^2-2x+3$ 沿直線 $y=2x+7$ 向右上方移動 $3\\sqrt5$ 單位，得到另一拋物線 $g(x)=(x-h)^2+k$，求數對 $(h,k)$。',
    answer: '(4, 8)',
    hasImage: false,
  },
];

// 直線與圓
const lineAndCircle: Question[] = [
  {
    id: '185852cfcac',
    chapter: '直線與圓',
    question:
      '如圖，$A$ 點到 $\\overline{BH}$ 的最短距離 $\\overline{AB}$ 為 100，$F,G$ 為切點，$A,B,F$ 三點共線。圓的直徑 $\\overline{CE}$ 為 60 且 $D$ 為圓心，$A$ 點到圓的最短距離 $\\overline{AC}$ 為 30。試選出正確的選項。\n(1) $\\overline{AG}=60$\n(2) $\\angle GAF=60\\du$\n(3) $\\triangle ADF$ 的面積為 $900\\sqrt3$\n(4) $\\triangle ABH$ 的面積為 $5000\\sqrt3$\n(5) 灰色區域的面積為 $4100\\sqrt3-600\\pi$',
    answer: '245',
    hasImage: true,
  },
  {
    id: '1855e707146',
    chapter: '直線與圓',
    question:
      '坐標平面上有兩條平行直線距離為 36。它們的 $x$ 截距相差 60。則這兩條平行直線的 $y$ 截距相差？',
    answer: '45',
    hasImage: false,
  },
  {
    id: '18515257984',
    chapter: '直線與圓',
    question:
      '已知格子點為 $x$ 坐標和 $y$ 坐標皆為整數的點，則 $\\begin{cases}x>0\\\\y>0\\\\x-2y\\ge-8\\\\4x+y\\le20\\end{cases}$ 區域裡的格子點有幾個？',
    answer: '18',
    hasImage: false,
  },
  {
    id: '185150328a8',
    chapter: '直線與圓',
    question:
      '設 $k$ 為實數，已知圓方程式 $x^2+y^2+4kx-6ky+12k^2-4k-8=0$。試選出正確的選項。\n(1) 圓心的軌跡方程式為 $3x-2y=0$\n(2) 當此圓的圓心為 (0, 0) 時，圓的面積為 $8\\pi$\n(3) 當 $k=-2$ 時，圓的面積有最小值\n(4) 圓的面積最小值為 $4\\pi$\n(5) 存在 $k$，使得圓與 $y$ 軸相切',
    answer: '(2)(3)(5)',
    hasImage: false,
  },
  {
    id: '184efb55bc3',
    chapter: '直線與圓',
    question:
      '坐標平面上有一圓 $C:(x-1)^2+(y+1)^2=2$ 及兩條直線 $L_1:x-y=0$，$L_2:2x+y=3$，試選出正確的選項。\n(1) $L_1$ 和 $L_2$ 相交於一點，交點坐標為 (1, -1)\n(2) $L_1$ 和 $C$ 相切\n(3) $L_1$ 和 $C$ 的交點坐標為 (0, 0)\n(4) $C$ 的圓心和 $L_2$ 的距離為 $\\dfrac{2\\sqrt5}5$\n(5) 若 $L_2$ 和 $C$ 相交於 $A,B$ 兩點，則 $\\overline{AB}=\\dfrac{\\sqrt{30}}5$',
    answer: '234',
    hasImage: false,
  },
  {
    id: '184d371018e',
    chapter: '直線與圓',
    question:
      '與圓 $C:(x-2)^2+(y+3)^2=4$ 相切，且與 $\\dfrac x{12}+\\dfrac y5=1$ 平行的直線為 $5x+by+c=0$，已知此直線不過原點，則 $b+c$ 之值為 $\\textcirc{5-1}\\textcirc{5-2}$。',
    answer: '64',
    hasImage: false,
  },
  {
    id: '184a7df7eab',
    chapter: '直線與圓',
    question:
      '作圖：$\\begin{cases}x+2y+4\\ge0\\\\-3x+y+9\\ge0\\\\2x-3y+1>0\\end{cases}$。(實線、虛線請畫清楚)',
    answer: '略',
    hasImage: false,
  },
  {
    id: '184a7dac1f0',
    chapter: '直線與圓',
    question:
      '已知圓 $C:x^2+y^2-6x-6y-7=0$，點 $P(-4,4)$，求過 $P$ 點且與圓相切的直線方程式。(二解)',
    answer: '$4x+3y+4=0$ or $3x+4y+28=0$',
    hasImage: false,
  },
  {
    id: '184a7d87892',
    chapter: '直線與圓',
    question: '若直線 $L:x-y+a+1=0$ 與圓 $C:x^2+y^2-2x+4y-13=0$ 有交點，求 $a$ 的範圍。',
    answer: '$-10\\le a\\le2$',
    hasImage: false,
  },
  {
    id: '184a7d78af1',
    chapter: '直線與圓',
    question:
      '已知 $(a,b)$ 為圓 $C:(x+5)^2+(y-3)^2=9$ 上一點，若 $\\sqrt{(a+2)^2+(b+1)^2}$ 的最大值為 $M$，最小值為 $m$，求 $M+m$。',
    answer: '10',
    hasImage: false,
  },
  {
    id: '184a7d640de',
    chapter: '直線與圓',
    question: '已知 $k$ 為實數，方程式 $x^2+y^2+2kx-8y+k^2-k=0$ 的圖形為一圓，求 $k$ 的範圍。',
    answer: '$k>-16$',
    hasImage: false,
  },
  {
    id: '184a7cfdeea',
    chapter: '直線與圓',
    question:
      '設計師幫客戶設計一款寬 24 公分、高 32 公分的窗戶，內部是由兩組間隔為 3 公分的平行線交錯而成，每組各有一條通過中心點 (12, 16)，而且這兩條也會分別通過窗邊的點 (24, 32) 與 (24, 0)。圖為設計師將窗戶坐標化後的示意圖。問此款窗戶共有幾條裝飾線？',
    answer: '26',
    hasImage: true,
  },
  {
    id: '184a7cb5d51',
    chapter: '直線與圓',
    question:
      '已知三角形的三頂點為 $A(3,-2)$、$B(-1,0)$、$C(2,1)$，求三角形的垂心 (三角形三邊高的交點)。',
    answer: '(2,1)',
    hasImage: false,
  },
  {
    id: '184a7ca1b29',
    chapter: '直線與圓',
    question: '兩直線 $L_1:ax+2y+a=0$，$L_2:x+(a+1)y-(a+3)=0$，若 $L_1$ 與 $L_2$ 平行，求 $a$。',
    answer: '1',
    hasImage: false,
  },
  {
    id: '184a7c7d237',
    chapter: '直線與圓',
    question: '已知一直線 $L:mx-y-3m+2=0$ 必過 $P$ 點，求 $P$ 點坐標。',
    answer: '(3,2)',
    hasImage: false,
  },
  {
    id: '184a7c6bc11',
    chapter: '直線與圓',
    question:
      '已知圓 $C:(x-2)^2+(y+1)^2=5$ 的圓心為 $O$ 點，直線 $L:3x+4y=7$，設圓 $C$ 和直線 $L$ 交於 $A,B$ 兩點，過 $A,B$ 兩點分別做圓 $C$ 的切線，此兩切線交於 $D$ 點，$D$ 點的坐標為 (5, 3)，如圖。試問下列敘述哪些為真？\n(1) 圓 $C$ 的半徑為 5\n(2) $\\overline{AB}$ 的線段長為 4\n(3) 四邊形 $OABD$ 面積為 10\n(4) $\\triangle OAB$ 的外接圓方程式為 $x^2+y^2-5x-y+4=0$\n(5) 圓 $C$ 上到 $D$ 點的距離為正整數的點，共有 8 個',
    answer: '23',
    hasImage: true,
  },
  {
    id: '184a7c2a431',
    chapter: '直線與圓',
    question:
      '下列敘述何者正確？\n(1) 若 $ax^2+ay^2+dx+ey+f=0$ 之圖形為一圓，則圓心為 $(-\\dfrac d{2a},-\\dfrac e{2a})$，半徑為 $\\dfrac{\\sqrt{d^2+e^2-4af}}{2a}$\n(2) 若 $A,B$ 為二相異已知點，則坐標平面上滿足 $\\overline{PA}=k\\overline{PB}$ 之所有 $P$ 點所成的圖形為圓\n(3) 設 $A(3,2)$、$B(-1,3)$，則以 $\\overline{AB}$ 為直徑之圓恰有一個\n(4) 平面上過任意一點恰可對圓 $C$ 作一條切線\n(5) 若直線 $L$ 與圓 $C$ 恰有一交點，則 $L$ 到圓心之距離等於半徑',
    answer: '35',
    hasImage: false,
  },
  {
    id: '184a7be2a92',
    chapter: '直線與圓',
    question:
      '下列何者的圖形為一圓？\n(1) $x^2+y^2=0$\n(2) $x^2+y^2-2x-2y+3=0$\n(3) $x^2+y^2+4x-2y+5=0$\n(4) $x^2+y^2+4x+4y=0$\n(5) $2x^2+2y^2-24x-4y-35=0$',
    answer: '45',
    hasImage: false,
  },
  {
    id: '184a7bc4e0b',
    chapter: '直線與圓',
    question:
      '設三直線 $L_1:y=m_1x+b_1$，$L_2:y=m_2x+b_2$，$L_3:y=m_3x+b_3$，如圖。則下列選項，何者正確？\n(1) $m_3<m_1<m_2$　(2) $m_1<m_2<m_3$　(3) $b_2>b_3>b_1$\n(4) $b_3>b_2>b_1$　(5) $b_1>b_2>b_3$',
    answer: '14',
    hasImage: true,
  },
  {
    id: '184a78b0ff1',
    chapter: '直線與圓',
    question:
      '坐標平面上，紫柔沿著直線 $y=2x$ 上行走，走了一小段路後左轉，走了 5 單位再左轉，而後便在直線 $y=2x+k$ 上行走，求 $|k|$。',
    answer: '$5\\sqrt5$',
    hasImage: false,
  },
  {
    id: '184a5020796',
    chapter: '直線與圓',
    question:
      '在坐標平面上一圓方程式為 $(x-a)^2+(y-b)^2=25$，其中 $a$ 與 $b$ 為實數。若 $P$ 為圓外一點，試求圓上有 $\\textcirc{7-1}\\textcirc{7-2}$ 個點與 $P$ 點的距離正好是整數值。',
    answer: '20',
    hasImage: false,
  },
  {
    id: '1848e530c84',
    chapter: '直線與圓',
    question:
      '已知 $A(3,-1)$，$(-1,4)$，直線 $L:2x+3y-5=0$。若 $\\overline{AB}$ 交直線 $L$ 於 $P$ 點，試求 $\\overline{AP}:\\overline{BP}$。',
    answer: '2:5',
    hasImage: false,
  },
  {
    id: '1848e50de0a',
    chapter: '直線與圓',
    question:
      '一直線 $L_1$ 過 (1, 3)，(2, -1) 兩點，另一直線 $L_2$ 過 (3, -2) 且與 $L_1$ 垂直，求直線 $L_2$ 的方程式。',
    answer: '$x-4y=11$',
    hasImage: false,
  },
  {
    id: '1848e544dd7',
    chapter: '直線與圓',
    question: '已知 (2, 1)，(4, -1)，(-2, -3) 與 $(k,-5)$ 四點在同一圓上，求實數 $k$。',
    answer: '0 or 2',
    hasImage: false,
  },
  {
    id: '1848e55c165',
    chapter: '直線與圓',
    question:
      '已知圓 $C:x^2+y^2-x-3y-2=0$，若直線 $L:y=mx$ 和圓 $C$ 相交於相異兩點 $A$、$B$，且弦長 $\\overline{AB}=4$，求斜率 $m$。',
    answer: '-7 or 1',
    hasImage: false,
  },
  {
    id: '1848e56b7a9',
    chapter: '直線與圓',
    question: '已知圓 $C:x^2+y^2+x-7y+k=0$ 與直線 $L:x-2y=0$ 相切，求實數 $k$。',
    answer: '$\\frac54$',
    hasImage: false,
  },
  {
    id: '1848b618bdd',
    chapter: '直線與圓',
    question:
      '海面上有一圓形人工島，其圓周在坐標平面的方程式為 $x^2+y^2-6x-8y+16=0$，今一艘觀光遊艇欲從原點沿 $y=kx$ 路徑航行，若此觀光遊艇要在人工島靠岸，則在不計船身大小的情況下，實數 $k$ 的最小值為 $\\dfrac{\\textcirc{5-1}}{\\textcirc{5-2}\\textcirc{5-3}}$。',
    answer: '724',
    hasImage: false,
  },
  {
    id: '1846710ac29',
    chapter: '直線與圓',
    question: '已知直線 $L$ 平行 $2x+y+5=0$ 且 $x$ 截距為 3，求直線 $L$ 的方程式。',
    answer: '$2x+y=6$',
    hasImage: false,
  },
  {
    id: '18467130132',
    chapter: '直線與圓',
    question:
      '$L_1:x-2y+3=0$，$L_2:2x+3y=0$，$L_3:ax-y=1$，若 $L_1,L_2,L_3$ 不能圍成三角形，則 $a$ 可能為何？\n(1) $\\dfrac12$　(2) -2　(3) $-\\dfrac23$　(4) $-\\dfrac{13}9$　(5) 3',
    answer: '(1)(3)(4)',
    hasImage: false,
  },
  {
    id: '18467147e2a',
    chapter: '直線與圓',
    question: '試求兩平行線 $L_1:2x-3y=6$，$L_2:2x-3y=19$ 的距離。',
    answer: '$\\sqrt{13}$',
    hasImage: false,
  },
  {
    id: '1846715959f',
    chapter: '直線與圓',
    question: '設 $P(x,y)$ 為直線 $L:4x-3y-1=0$ 上的動點，求 $\\sqrt{(x-3)^2+(y-2)^2}$ 的最小值。',
    answer: '1',
    hasImage: false,
  },
  {
    id: '184672dcb60',
    chapter: '直線與圓',
    question: '已知圓 $C:(x-1)^2+(y-2)^2=5$ 與直線 $L:x-2y+k=0$ 交於一點，求實數 $k$。',
    answer: '-2 or 8',
    hasImage: false,
  },
  {
    id: '184672f18f1',
    chapter: '直線與圓',
    question: '通過 $A(4,-3)$、$B(-10,3)$ 兩點，且圓心在直線 $2x-y=0$ 上，求此圓的圓心坐標。',
    answer: '(-21,-42)',
    hasImage: false,
  },
  {
    id: '1844c33395f',
    chapter: '直線與圓',
    question: '兩相異直線 $L_1:x+(a-2)y+a=0$、$L_2:ax+3y+1=0$，若 $L_1$ 平行 $L_2$，求 $a$。',
    answer: '3',
    hasImage: false,
  },
  {
    id: '1844c348d81',
    chapter: '直線與圓',
    question:
      '已知 $A(3,-2)$，$B(-1,0)$，$C(2,k)$ 為 $\\triangle ABC$ 的三頂點，且 $\\angle A=90\\du$，求 $k$。',
    answer: '-4',
    hasImage: false,
  },
  {
    id: '1844c3636e6',
    chapter: '直線與圓',
    question:
      '$\\triangle ABC$ 中三頂點 $A(2,-1)$，$B(6,-3)$，$C(-1,-10)$，求：\n(1) 過 $A$ 點作 $\\overline{BC}$ 的高所在的直線方程式\n(2) 過 $A$ 點作 $\\overline{BC}$ 的高的垂足點坐標',
    answer: '(1) $x+y-1=0$ (2) (5, -4)',
    hasImage: false,
  },
  {
    id: '1844c39eba7',
    chapter: '直線與圓',
    question:
      '平面上有 $A(-1,2)$，$B(1,3)$，$C(4,0)$ 三點，若直線 $L:y+5=m(x-1)$ 與 $\\triangle ABC$ 的邊恰有兩個交點，求 $m$ 的範圍。',
    answer: '$m<-\\frac72$ or $m>\\frac53$',
    hasImage: false,
  },
  {
    id: '1844c3b545a',
    chapter: '直線與圓',
    question:
      '坐標平面上，給定一點 $P(6,8)$ 與一直線 $L:x-2y+5=0$，求 $P$ 點在 $L$ 上的投影點坐標。',
    answer: '(7, 6)',
    hasImage: false,
  },
  {
    id: '1844c3d5779',
    chapter: '直線與圓',
    question:
      '有一位農夫從住家 $A(-8,5)$ 處，牽著一隻牛到河邊 ($x$ 軸) $P$ 處喝水，然後再牽往田裡 $B(2,1)$ 處工作，則 $P$ 點 $x$ 坐標為何時，農夫所走的路徑 $\\overline{AP}+\\overline{BP}$ 最小。',
    answer: '$\\frac13$',
    hasImage: false,
  },
  {
    id: '1844c3f4848',
    chapter: '直線與圓',
    question: '求與直線 $L:5x-12y+1=0$ 平行，且相距 1 的直線方程式。',
    answer: '$5x-12y=12$ or $5x-12y=-14$',
    hasImage: false,
  },
  {
    id: '1844c40d0cc',
    chapter: '直線與圓',
    question:
      '設點 $P(x,y)$ 滿足聯立不等式 $\\begin{cases}x-y\\ge-1\\\\6x+y\\le30\\\\x\\ge0\\\\y\\ge0\\end{cases}$，求點 (1, 6) 與 $P$ 點的最大距離。',
    answer: '$2\\sqrt{13}$',
    hasImage: false,
  },
  {
    id: '1844c41e6e9',
    chapter: '直線與圓',
    question: '經過兩點 $A(1,4)$ 與 $B(0,3)$ 且圓心在 $x$ 軸上的圓方程式。',
    answer: '$(x-4)^2+y^2=25$',
    hasImage: false,
  },
  {
    id: '1844c431caa',
    chapter: '直線與圓',
    question:
      '已知圓 $S$ 與圓 $C:x^2+y^2-2x-4y+2=0$ 為同心圓，且圓 $S$ 與直線 $3x-4y=5$ 相切，求圓 $S$ 的方程式為。',
    answer: '$(x-1)^2+(y-2)^2=4$',
    hasImage: false,
  },
  {
    id: '1844c443bf8',
    chapter: '直線與圓',
    question: '過點 (3, -4) 且與圓 $x^2+(y-2)^2=9$ 相切的直線方程式。',
    answer: '$3x+4y+7=0$ or $x=3$',
    hasImage: false,
  },
  {
    id: '1844c4ae46d',
    chapter: '直線與圓',
    question:
      '已知 $A(2,1)$，$B(4,2)$，若有一圓通過 $A$、$B$ 兩點，求滿足此條件的圓中，面積最小的圓方程式。',
    answer: '$(x-3)^2+(y-\\frac32)^2=\\frac54$',
    hasImage: false,
  },
  {
    id: '1841f7a5356',
    chapter: '直線與圓',
    question: '方程式 $2x^2+2y^2-4x+5y-1=0$，求圖形被 $x$ 軸所截之弦長。',
    answer: '$\\sqrt6$',
    hasImage: false,
  },
  {
    id: '1841f7c0de9',
    chapter: '直線與圓',
    question: '設 $k$ 為實數，$C:x^2+y^2+4kx-2y+5=0$，若 $C$ 為一圓，求 $k$ 的範圍。',
    answer: '$k<-1$ or $k>1$',
    hasImage: false,
  },
  {
    id: '1841f7d146b',
    chapter: '直線與圓',
    question: '求平面上過三點 (-1, 2)、(0, 0)、(3, -2) 的圓方程式。',
    answer: '$x^2+y^2-9x-7y=0$',
    hasImage: false,
  },
  {
    id: '1841f7e0728',
    chapter: '直線與圓',
    question: '求圓 $x^2+y^2-2x-4y+1=0$ 對直線 $x+2y=10$ 的對稱圖形方程式。',
    answer: '$(x-3)^2+(y-6)^2=4$',
    hasImage: false,
  },
  {
    id: '1841f81ede8',
    chapter: '直線與圓',
    question:
      '平面上設 $A(-1,2)$、$B(5,-1)$，若 $\\overline{PA}=2\\overline{PB}$，求動點 $P$ 的軌跡方程式。',
    answer: '$x^2+y^2-14x+4y+33=0$',
    hasImage: false,
  },
  {
    id: '1841f8337e0',
    chapter: '直線與圓',
    question: '求平面上過 (0, 0) 與 (-1, 1) 兩點，且圓心在直線 $2x-y=1$ 上的圓方程式。',
    answer: '$(x-2)^2+(y-3)^2=13$',
    hasImage: false,
  },
  {
    id: '1841f849647',
    chapter: '直線與圓',
    question: '設點 $P(24,37)$，圓 $C:x^2+y^2-10y=0$，求 $C$ 上的點到 $P$ 的最近距離、最遠距離。',
    answer: '35；45',
    hasImage: false,
  },
  {
    id: '1841f871215',
    chapter: '直線與圓',
    question: '求平面上過兩點 $A(1,4)$ 與 $B(0,3)$ 且圓心在 $x$ 軸上的圓方程式。',
    answer: '$(x-4)^2+y^2=25$',
    hasImage: false,
  },
  {
    id: '1841f888adb',
    chapter: '直線與圓',
    question: '已知圓方程式 $x^2+ky^2+2x+4ky=0$，其中 $k$ 為實數，求此圓的半徑。',
    answer: '$\\sqrt5$',
    hasImage: false,
  },
  {
    id: '1841f8ac736',
    chapter: '直線與圓',
    question: '關於圓 $C:x^2+y^2-6x+5=0$，試問 (0, 0)、(2, 3)、(3, 2) 落在圓內、圓外或圓上？',
    answer: '圓外；圓外；圓上',
    hasImage: false,
  },
  {
    id: '1841f8ed964',
    chapter: '直線與圓',
    question:
      '若方程組 $\\begin{cases}2x+(5-a)y=a+3\\\\(5-a)x+2y=9-a\\end{cases}$ 無解，求實數 $a$。',
    answer: '7',
    hasImage: false,
  },
  {
    id: '1841f8fe765',
    chapter: '直線與圓',
    question:
      '已知 $A(4,2)$，$B(-2,-1)$，$P(1,-1)$ 三點，求通過 $P$ 點且與直線 $AB$ 平行的直線 $L$ 方程式。',
    answer: '$x-2y-3=0$',
    hasImage: false,
  },
  {
    id: '183fe0833e4',
    chapter: '直線與圓',
    question: '設 $A(-2,4)$，$B(4,2)$，求 $\\overline{AB}$ 的中垂線方程式。',
    answer: '$3x-y=0$',
    hasImage: false,
  },
  {
    id: '183fe0a0746',
    chapter: '直線與圓',
    question:
      '已知直線 $L:2x-y=3$ 將坐標平面分成兩個半平面，試問下列哪些點與原點 (0, 0) 位在相同的半平面？\n(1) (2, 1)　(2) (-1, 2)　(3) (4, -2)\n(4) (92, 1)　(5) (11, 33)',
    answer: '(2)(5)',
    hasImage: false,
  },
  {
    id: '183fe0bfa9a',
    chapter: '直線與圓',
    question:
      '試求聯立不等式 $\\begin{cases}x+2y\\le8\\\\3x+y\\ge9\\\\y\\ge0\\end{cases}$ 所圍成區域的面積。',
    answer: '$\\frac{15}2$',
    hasImage: false,
  },
  {
    id: '183fe0da532',
    chapter: '直線與圓',
    question: '試求圓 $3x^2+3y^2+9x-6y+1=0$ 的圓心坐標。',
    answer: '$(-\\frac32,1)$',
    hasImage: false,
  },
  {
    id: '183fe1145af',
    chapter: '直線與圓',
    question: '試求圓心坐標 (3, 5)，半徑為 4 的圓方程式。',
    answer: '$(x-3)^2+(y-5)^2=16$',
    hasImage: false,
  },
  {
    id: '183fe11fcab',
    chapter: '直線與圓',
    question: '試求圓心坐標 (-4, 2)，且過點 (-1, 6) 的圓方程式。',
    answer: '$(x+4)^2+(y-2)^2=25$',
    hasImage: false,
  },
  {
    id: '183fe14e555',
    chapter: '直線與圓',
    question: '求平面上 $3x+4y=7$ 與 $4x+3y=-2$ 的鈍角平分線方程式。',
    answer: '$x-y=-9$',
    hasImage: false,
  },
  {
    id: '183fe1665ee',
    chapter: '直線與圓',
    question:
      '平面上 $A(-2,1)$、$B(-4,9)$、$C(0,5)$，求 $\\triangle ABC$ 中過 $A$ 點的高的直線方程式。',
    answer: '$x-y=-3$',
    hasImage: false,
  },
  {
    id: '183fe181e64',
    chapter: '直線與圓',
    question:
      '下列哪一個聯立不等式無圖形？\n(1) $\\begin{cases}x-y\\ge0\\\\x+y\\ge0\\\\y\\ge3\\end{cases}$　(2) $\\begin{cases}x-y\\le0\\\\x+y\\le0\\\\y\\le3\\end{cases}$\n(3) $\\begin{cases}x-y\\le0\\\\x+y\\ge0\\\\y\\le3\\end{cases}$　(4) $\\begin{cases}x-y\\ge0\\\\x+y\\le0\\\\y\\ge3\\end{cases}$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '183fe192320',
    chapter: '直線與圓',
    question:
      '若聯立不等式 $\\begin{cases}y\\le ax+b\\\\y\\ge cx+d\\end{cases}$ 的圖形如右，求 $a,b,c,d$。',
    answer: '2；-4；-1；-1',
    hasImage: true,
  },
  {
    id: '183fe1aac81',
    chapter: '直線與圓',
    question: '設 $a(x^2+2xy-x)+b(2x^2+xy-y)$$+4xy+y^2+x+1=0$ 的圖形是圓，求 $a,b$。',
    answer: '-3；2',
    hasImage: false,
  },
  {
    id: '183fe1dec4e',
    chapter: '直線與圓',
    question: '平面上已知兩點 $A(5,-1)$、$B(-1,3)$，求以 $\\overline{AB}$ 為直徑的圓方程式。',
    answer: '$(x-2)^2+(y-1)^2=13$',
    hasImage: false,
  },
  {
    id: '183da733a68',
    chapter: '直線與圓',
    question: '求平面上過點 (5,7) 且斜率為 -3 的直線方程式。',
    answer: '$3x+y=22$',
    hasImage: false,
  },
  {
    id: '183da74766b',
    chapter: '直線與圓',
    question: '求平面上過兩點 (3, -1)、(2, 6) 的直線方程式。',
    answer: '$7x+y=20$',
    hasImage: false,
  },
  {
    id: '183da76f5c3',
    chapter: '直線與圓',
    question: '求平面上兩點 $A(3,4)$、$B(2,-5)$ 的垂直平分線方程式。',
    answer: '$x+9y=-2$',
    hasImage: false,
  },
  {
    id: '183da7810d2',
    chapter: '直線與圓',
    question: '平面上與 $2x+3y=7$ 平行，且兩軸截距之和為 8 的直線方程式。',
    answer: '$10x+15y=48$',
    hasImage: false,
  },
  {
    id: '183da7b1ef4',
    chapter: '直線與圓',
    question:
      '直線 $L:y=mx-2m+1$，其中 $m$ 為實數，點 $A(5,4)$、$B(1,6)$，若 $L$ 與 $\\overline{AB}$ 相交，求 $m$ 的範圍。',
    answer: '$m\\le-5\\lor m\\ge1$',
    hasImage: false,
  },
  {
    id: '183da7d3dc4',
    chapter: '直線與圓',
    question: '求平面上點 (2,3) 到直線 $5x-12y=3$ 的距離。',
    answer: '$\\frac{29}{13}$',
    hasImage: false,
  },
  {
    id: '183da7e3619',
    chapter: '直線與圓',
    question: '若點 $P(3,1)$ 對直線 $L:12x-5y+8=0$ 的對稱點 $Q$，求 $\\overline{PQ}$。',
    answer: '6',
    hasImage: false,
  },
  {
    id: '183da7fe912',
    chapter: '直線與圓',
    question: '求兩平行線 $2x+y=-3$ 與 $2x+y-7=0$ 的間距。',
    answer: '$2\\sqrt5$',
    hasImage: false,
  },
  {
    id: '183d76e9317',
    chapter: '直線與圓',
    question:
      '平面上有兩直線 $L_1:y=3x-6$，$L_2:y=-\\dfrac13x+4$。若 $L_1$ 與 $x$ 軸交於點 $A$，$L_1$ 與 $L_2$ 交於點 $B$，且 $L_2$ 與 $y$ 軸交於點 $C$。已知點 $O$ 為坐標原點，且 $O$、$A$、$B$、$C$ 的外接圓為 $K$，則下列哪些敘述是正確的？\n(1) $A(0,2)$　(2) $B(3,3)$　(3) $C(4,0)$　(4) $K$ 的半徑為 $2\\sqrt5$\n(5) 若點 $D$ 在 $\\arc{AC}$ 上，且 $D$、$B$ 在 $\\overleftrightarrow{AC}$ 的異側，則四邊形 $DABC$ 面積的最大值為 10',
    answer: '25',
    hasImage: false,
  },
  {
    id: '183d76522fb',
    chapter: '直線與圓',
    question:
      '坐標平面上四條直線 $L_1,L_2,L_3,L_4$ 與 $x$ 軸、$y$ 軸的相關位置如圖所示，其中 $L_2$  與 $L_4$ 垂直。設 $L_1:x=m_1y+a$，$L_2:x=m_2y+b$，$L_3:y=m_3x+c$，$L_4:y=m_4x+d$。試問下列哪些選項是正確的？\n(1) $m_3>m_2>m_1$　(2) $m_2+m_4=0$　(3) $m_2\\times m_4=-1$\n(4) $m_3\\times m_4<-1$　(5) $b-a>0$',
    answer: '25',
    hasImage: true,
  },
  {
    id: '183d721821f',
    chapter: '直線與圓',
    question:
      '如圖，公園內有一個圓形的水池，在水池內建造了四條觀賞人行道，步道 $\\overline{AB}$、$\\overline{BC}$、$\\overline{CD}$、$\\overline{DA}$，在公園架平面坐標得 $B(0,0)$、$D(4,2)$，又已知 $\\angle A=\\angle C=90\\du$，試選出正確的選項。\n(1) 圓心坐標為 (2,1)\n(2) 圓的半徑為 $\\sqrt5$\n(3) 圓的方程式為 $x^2+y^2-4x-2y=0$\n(4) 若小明沿著 $2x-y+6=0$ 直線跑，則他會掉進水池中\n(5) 過 $B$ 點與圓相切的直線為 $y=-2x$',
    answer: '1235',
    hasImage: true,
  },
  {
    id: '18391fd87c0',
    chapter: '直線與圓',
    question: '求平面上垂直於 $2x+y=3$，且 $y$ 截距為 -4 的直線方程式。',
    answer: '$x-2y=8$',
    hasImage: false,
  },
  {
    id: '18391fcd9fd',
    chapter: '直線與圓',
    question:
      '平面上有一點 $P(2,-1)$ 與 $L:4x+3y=1$，求：\n(1) 過 $P$ 且與 $L$ 平行的直線方程式\n(2) 過 $P$ 且與 $L$ 垂直的直線方程式',
    answer: '(1) $4x+3y=5$ (2) $3x-4y=10$',
    hasImage: false,
  },
  {
    id: '18391fb3721',
    chapter: '直線與圓',
    question: '平面上直線 $L$ 的 $x$ 截距為 3，$y$ 截距為 5，求直線 $L$ 的方程式。',
    answer: '$5x-3y=-15$',
    hasImage: false,
  },
  {
    id: '18391fa48db',
    chapter: '直線與圓',
    question: '求平面上點 $A(2,-3)$ 對直線 $L:5x+y=-6$ 的投影點與對稱點。',
    answer: '$(-\\frac12,-\\frac72)$；(-3,-4)',
    hasImage: false,
  },
  {
    id: '18391f96002',
    chapter: '直線與圓',
    question: '平面上點 $(k+1,2k-1)$ 到直線 $3x-4y=k+1$ 的距離為 12，求 $k$。',
    answer: '11 or -9',
    hasImage: false,
  },
  {
    id: '18391f869fb',
    chapter: '直線與圓',
    question: '求平面上與 $3x+4y=5$ 平行，且距離為 2 的直線方程式。',
    answer: '$3x+4y=15\\lor3x+4y=-5$',
    hasImage: false,
  },
  {
    id: '1836b0487b7',
    chapter: '直線與圓',
    question:
      '已知 $A(3,-2)$，$B(-1,0)$，$C(2,k)$ 為 $\\triangle ABC$ 的三頂點，且 $\\angle A=90\\du$，求 $k$。',
    answer: '-4',
    hasImage: false,
  },
  {
    id: '1836b05ec81',
    chapter: '直線與圓',
    question: '坐標平面上，若 $A(1,-2)$，$B(5,a-1)$，$C(a+1,1)$ 三點共線，求 $a$。',
    answer: '-4 or 3',
    hasImage: false,
  },
  {
    id: '1834acaccca',
    chapter: '直線與圓',
    question: '平面上有 $A(1,2)$、$B(12,7)$、$(5,-9)$ 三點，若 $ABCD$ 為平行四邊形，求 $D$。',
    answer: '(-6,-14)',
    hasImage: false,
  },
  {
    id: '1834acbe11c',
    chapter: '直線與圓',
    question:
      '平面上有 $A(1,2)$、$B(12,7)$、$(5,-9)$ 三點，若 $D$ 與 $A$、$B$、$C$ 可以連成平行四邊形，求 $D$。',
    answer: '(-6,-14) 或 (8,18) 或 (16,-4)',
    hasImage: false,
  },
  {
    id: '1834acdb025',
    chapter: '直線與圓',
    question:
      '坐標平面上 $A(1,4)$、$B(9,-2)$、$C(x,y)$ 依序在一直線上，且 $\\overline{AB}:\\overline{BC}=2:5$，求 $(x,y)$。',
    answer: '(29,-17)',
    hasImage: false,
  },
  {
    id: '1834ad03f5f',
    chapter: '直線與圓',
    question:
      '點 $A(k,k+1)$、$B(2k+1,5k-4)$，試問：\n(1) 若 $\\overline{AB}$ 的斜率為 $\\dfrac52$，求 $k$\n(2) 若 $\\overline{AB}$ 沒有斜率，求 $k$',
    answer: '5；-1',
    hasImage: false,
  },
  {
    id: '1834ad2261e',
    chapter: '直線與圓',
    question:
      '輪椅坡道所建議的最大斜率是 $\\dfrac1{12}$，一家公司安裝一個輪椅坡道，此處無障礙坡道高度為 0.8 公尺，請問此坡道之水平長度至少需要幾公尺才能合乎規定？(答案取至整數位)',
    answer: '10',
    hasImage: false,
  },
  {
    id: '1834ad37a5b',
    chapter: '直線與圓',
    question: '求平面上過點 (5,7) 且斜率為 -3 的直線方程式。',
    answer: '$3x+y=22$',
    hasImage: false,
  },
  {
    id: '1834ad45b45',
    chapter: '直線與圓',
    question: '求平面上過兩點 (3,-1)、(2,6) 的直線方程式。',
    answer: '$7x+y=20$',
    hasImage: false,
  },
  {
    id: '182f1e9f5db',
    chapter: '直線與圓',
    question:
      '在坐標平面上，已知由四個不等式 $x-y\\ge0$，$x-y\\le1$，$x+y\\ge0$，$x+y\\le1$ 所圍成的區域為 $\\Omega$，若有一圓 $\\Gamma$ 使得 $\\Omega$ 完全落在圓 $\\Gamma$ 內，則圓 $\\Gamma$ 的最小面積為下列哪一個選項？\n(1) $\\dfrac{\\pi}{16}$　　(2) $\\dfrac{\\pi}8$　　(3) $\\dfrac{\\pi}4$　　(4) $\\dfrac{\\pi}2$　　(5) $\\pi$',
    answer: '3',
    hasImage: false,
  },
  {
    id: '182f1ef62f9',
    chapter: '直線與圓',
    question:
      '如圖，已知直線 $y=-\\dfrac12x$ 與拋物線 $y=-\\dfrac14x^2+6$ 交於 $A,B$ 兩點 ($A$ 在 $B$ 的右側)。若取與線段 $\\overline{AB}$ 等長的一條橡皮筋，端點分別固定在 $A,B$ 兩點，用鉛筆拉著這條橡皮筋使筆尖 $P$ 在直線 $AB$ 上方的拋物線上移動，動點 $P$ 將與 $A,B$ 構成無數個三角形，試選出正確的選項。\n(1) $A$ 點的坐標為 (6, -3)\n(2) $B$ 點的坐標為 (-4, 2)\n(3) 線段 $\\overline{AB}$ 的垂直平分線之方程式為 $y=2x-\\dfrac32$\n(4) $\\triangle PAB$ 面積最大時的 $P$ 點坐標為 $(1,\\dfrac{23}4)$\n(5) $\\triangle PAB$ 的最大面積為 $\\dfrac{125}2$',
    answer: '124',
    hasImage: true,
    style: { width: '5cm' },
  },
  {
    id: '182b73a19ad',
    chapter: '直線與圓',
    question:
      '方程式 $(3a+2b)x^2+(a-b-11)xy$$+(b-3)y^2+(6-2b)x=0$ 的圖形為圓，求 $a$、$b$、圓心、半徑。',
    answer: '2；-9；(1,0)；1',
    hasImage: false,
  },
  {
    id: '182b73f316b',
    chapter: '直線與圓',
    question:
      '考慮 $x^2+y^2+x+2y+k=0$ 所表圖形：\n(1) 若為一圓，求 $k$ 的範圍\n(2) 若為一點，求 $k$、此點坐標\n(3) 若無圖形，求 $k$ 的範圍',
    answer: '(1) $k<\\frac54$ (2) $\\frac54$；$(-\\frac12,-1)$ (3) $k>\\frac54$',
    hasImage: false,
  },
  {
    id: '182b740b006',
    chapter: '直線與圓',
    question: '已知圓心坐標為 (3,-4)，且與 $x$ 軸相切，求其圓方程式。',
    answer: '$(x-3)^2+(y+4)^2=16$',
    hasImage: false,
  },
  {
    id: '182b741e3c9',
    chapter: '直線與圓',
    question: '求圓心 (-5,2)，與 $y$ 軸相切的圓方程式。',
    answer: '$(x+5)^2+(y-2)^2=25$',
    hasImage: false,
  },
  {
    id: '182b76131a8',
    chapter: '直線與圓',
    question:
      '已知兩點 $A(3,-1)$、$B(0,5)$，若 $P$ 點滿足 $\\overline{PA}:\\overline{PB}=1:2$，求動點 $P$ 的軌跡方程式。',
    answer: '$x^2+y^2-8x+6y+5=0$',
    hasImage: false,
  },
  {
    id: '182b760c59a',
    chapter: '直線與圓',
    question:
      '已知 $A(3,-4)$、$B(-2,6)$，若 $P$ 點滿足 $\\overline{PA}:\\overline{PB}=2:3$，求動點 $P$ 的軌跡方程式。',
    answer: '$x^2+y^2-14x+24y+13=0$',
    hasImage: false,
  },
  {
    id: '182b74754b7',
    chapter: '直線與圓',
    question:
      '三點 $A(5,-2)$、$B(1,0)$、$C(-2,-9)$ 在圓上，此圓即為 $\\triangle ABC$ 的外接圓，求其方程式。',
    answer: '$x^2+y^2-2x+10y+1=0$',
    hasImage: false,
  },
  {
    id: '182b7490438',
    chapter: '直線與圓',
    question: '已知圓心在 $x$ 軸上，且點 $A(1,-4)$、$B(7,2)$ 在圓上，求圓方程式。',
    answer: '$(x-3)^2+y^2=20$',
    hasImage: false,
  },
  {
    id: '182b74bc773',
    chapter: '直線與圓',
    question: '三直線 $x-y=0$、$x+y=0$、$x-2y=6$ 所圍成的三角形，試求其外接圓方程式。',
    answer: '$(x+2)^2+(y+4)^2=20$',
    hasImage: false,
  },
  {
    id: '182b74a34b4',
    chapter: '直線與圓',
    question: '圓心在 $y$ 軸上，且點 (7,1)、(-1,3) 在圓上，求圓方程式。',
    answer: '$x^2+(y+10)^2=170$',
    hasImage: false,
  },
  {
    id: '182b75fe882',
    chapter: '直線與圓',
    question:
      '已知點 $P(a,b)$ 為圓 $C:x^2+y^2-6x+8y+16=0$ 上的動點，試求：(1) $\\sqrt{a^2+b^2}$ 的最大值\n(2) $(a+2)^2+(b-1)^2$ 的最小值',
    answer: '(1) 8 (2) $5\\sqrt2-3$',
    hasImage: false,
  },
  {
    id: '182b7637fd5',
    chapter: '直線與圓',
    question:
      '點 $P(x,y)$ 在圓 $C:x^2+y^2-2x-4y-4=0$ 上，求：(1) $\\sqrt{(x-5)^2+(y+1)^2}$ 的最大值 (2) $(x-5)^2+(y+1)^2$ 的最小值',
    answer: '(1) 8 (2) 4',
    hasImage: false,
  },
  {
    id: '182b766b62e',
    chapter: '直線與圓',
    question:
      '點 $P(3,2)$ 與圓 $C:x^2+y^2-4x+2y+k=0$ 上，試問：\n(1) 若 $P$ 點在圓 $C$ 的內部，求 $k$ 的範圍\n(2) 若 $P$ 點在圓 $C$ 的外部，求 $k$ 的範圍',
    answer: '(1) $k<-5$ (2) $-5<k<5$',
    hasImage: false,
  },
  {
    id: '182c4a66798',
    chapter: '直線與圓',
    question: '點 $P(1,3)$ 在圓 $C:x^2+y^2+6x+8y+k=0$ 的外部，求 $k$ 的範圍。',
    answer: '$-40<k<25$',
    hasImage: false,
  },
  {
    id: '182c49dce7a',
    chapter: '直線與圓',
    question: '直線 $3x-4y=-11$ 與圓 $x^2+y^2+2y-24=0$ 交於兩點 $A$、$B$，求 $\\overline{AB}$。',
    answer: '8',
    hasImage: false,
  },
  {
    id: '182c4a5b884',
    chapter: '直線與圓',
    question: '若圓 $(x+2)^2+(y-3)^2=30$ 被直線 $L:3x+2y=k$ 截出的弦長為 10，求 $k$。',
    answer: '$\\pm\\sqrt{65}$',
    hasImage: false,
  },
  {
    id: '182c4a902ea',
    chapter: '直線與圓',
    question: '直線 $x+y=3$ 與 $(x-1)^2+(y+2)^2=10$ 交於 $A$、$B$ 兩點，求 $\\overline{AB}$。',
    answer: '$2\\sqrt2$',
    hasImage: false,
  },
  {
    id: '182c4aaf8c2',
    chapter: '直線與圓',
    question: '直線 $y=mx-m$ 截圓 $x^2+y^2-y=0$ 的弦長為 $\\dfrac{\\sqrt2}2$，求 $m$。',
    answer: '$-\\frac17$ 或 -1',
    hasImage: false,
  },
  {
    id: '182c4ade8ff',
    chapter: '直線與圓',
    question:
      '圓 $C:(x+1)^2+(y-3)^2=4$ 與直線 $L:3x+4y=k$，請問：\n(1) 若相交於兩點，求 $k$ 的範圍\n(2) 若相切，求 $k$',
    answer: '(1) $-1<k<19$ (2) $-1$ 或 19',
    hasImage: false,
  },
  {
    id: '182c4b154e1',
    chapter: '直線與圓',
    question:
      '直線 $L:ax-y+a+1=0$ 與圓 $C:x^2+y^2-2x+4y+1=0$，求：\n(1) 若交於相異兩點，求 $a$ 的範圍\n(2) 若相切，求 $a$\n(3) 若不相交，求 $a$ 的範圍',
    answer: '(1) $a<-\\frac5{12}$ (2) $-\\frac5{12}$ (3) $a>-\\frac5{12}$',
    hasImage: false,
  },
  {
    id: '182c4b3ba92',
    chapter: '直線與圓',
    question: '過圓 $(x-3)^2+(y+2)^2=29$ 上的點 (1,3) 所作的切線方程式。',
    answer: '$-2x+5y=13$',
    hasImage: false,
  },
  {
    id: '182c4b58fef',
    chapter: '直線與圓',
    question: '圓 $x^2+y^2+2x-4y-12=0$ 上有一點 $P(3,1)$，求過 $P$ 點所作圓的切線方程式。',
    answer: '$4x-y=11$',
    hasImage: false,
  },
  {
    id: '1833e9d6094',
    chapter: '直線與圓',
    question: '已知圓 $C:(x-1)^2+(y+2)^2=25$，求以 $\\dfrac34$ 為切線斜率所作切線方程式。',
    answer: '$3x-4y=-14$ 與 $3x-4y=36$',
    hasImage: false,
  },
  {
    id: '1833ea218e5',
    chapter: '直線與圓',
    question: '求與圓 $x^2+y^2-5x+2y+3=0$ 相切，且斜率為 4 的切線方程式。',
    answer: '$8x-2y=39$ 與 $8x-2y=5$',
    hasImage: false,
  },
  {
    id: '182c4f325f2',
    chapter: '直線與圓',
    question: '過圓 $C:(x-1)^2+(y+2)^2=25$ 外一點 $P(8,-1)$ 作圓 $C$ 的兩條切線，求切線方程式。',
    answer: '$3x+4y=20$ 與 $4x-3y=35$',
    hasImage: false,
  },
  {
    id: '182c4f2bc8c',
    chapter: '直線與圓',
    question: '求過 $P(5,1)$ 作圓 $x^2+y^2-4x-5=0$ 的切線方程式。',
    answer: '$4x+3y=23$ 與 $x=5$',
    hasImage: false,
  },
  {
    id: '182c4f5ea3e',
    chapter: '直線與圓',
    question: '自 $P(5,3)$ 作圓 $(x-1)^2+(y-2)^2=5$ 的切線切圓於 $M$ 與 $N$，求切線段長。',
    answer: '$2\\sqrt3$',
    hasImage: false,
  },
  {
    id: '182c4f95e4d',
    chapter: '直線與圓',
    question:
      '過點 $P(5,2)$，作圓 $(x-3)^2+(y+2)^2=10$ 的兩條切線，切圓於 $A$ 與 $B$，求：\n(1) 切線段長 (2) 弦長 $\\overline{AB}$',
    answer: '(1) $\\sqrt{10}$ (2) $2\\sqrt5$',
    hasImage: false,
  },
  {
    id: '182c4fed962',
    chapter: '直線與圓',
    question:
      '若兩圓 $C_1:x^2+y^2-2x-4y-4=0$ 與 $C_2:x^2+y^2-6x-12=0$ 的交點為 $A$、$B$，求 $\\overleftrightarrow{AB}$ 的直線方程式，並求公共弦 $\\overline{AB}$ 的長。',
    answer: '$x-y+2=0$；$\\sqrt{34}$',
    hasImage: false,
  },
  {
    id: '182c501a604',
    chapter: '直線與圓',
    question:
      '兩圓 $C_1:x^2+y^2-2x+6y-10=0$ 與 $C_2:x^2+y^2+2x+2y-6=0$ 的交點為 $A$、$B$，求 $\\overleftrightarrow{AB}$ 的直線方程式。',
    answer: '$x-y+1=0$',
    hasImage: false,
  },
  {
    id: '1829fb61cd1',
    chapter: '直線與圓',
    question:
      '圓 $x^2+y^2=4$ 的切線與 $x$ 軸正向、$y$ 軸正向圍成一個三角形，則該三角形面積最小值為 $\\textcirc{12-1}$。',
    answer: '4',
    hasImage: false,
  },
  {
    id: '1829fbea0f0',
    chapter: '直線與圓',
    question:
      '$L:y=mx+9$ 與 $y=-\\dfrac13x$ 互相垂直，將直線 $L$ 向右平移 $a$ 個單位或向下平移 $b$ 個單位都會與直線 $M:y=mx$ 重合，試求數對 $(a,b)=(\\textcirc{13-1},\\textcirc{13-2})$。',
    answer: '39',
    hasImage: false,
  },
  {
    id: '1829fc62869',
    chapter: '直線與圓',
    question:
      '設 $m$ 為實數，已知圓方程式 $C:x^2+y^2-2mx+(2m+4)y+3m^2-2m-3=0$，若此圓的半徑為整數。則滿足上述條件的所有 $m$ 值的和為 $\\textcirc{15-1}\\textcirc{15-2}$。',
    answer: '21',
    hasImage: false,
  },
  {
    id: '1829fd3e577',
    chapter: '直線與圓',
    question:
      '坐標平面上，甲、乙兩人站在 $A(0,0)$，甲從 $A$ 出發走到 $B(3,1)$ 花了 5 分鐘，若速度與方向均不變，再繼續走 15 分鐘到達 $C$ 點後，再依前進方向順時針轉 $90\\du$ 後，依相同速度繼續走 5 分鐘後到達 $P$ 點；乙從 $A$ 點出發沿直線 $3x+4y=0$ 移動 10 單位後抵達 $Q$ 點，已知 $Q$ 點在 $x$ 軸下方，則 $\\overleftrightarrow{PQ}$ 斜率為 $\\dfrac{\\textcirc{16-1}}{\\textcirc{16-2}}$。(化為最簡分數)',
    answer: '75',
    hasImage: false,
  },
  {
    id: '1829fda2890',
    chapter: '直線與圓',
    question:
      '有一吊車在水平地面上實施吊掛作業，要吊起吊鉤 $A$ 正下方的貨物，如圖。已知吊臂基部 $B$ 點離地面高 2 公尺，伸出的吊臂 $\\overline{BA}$ 長 20 公尺。今發現 $A$ 點正下方有一高壓電線 $L$，為確保作業安全，必須將吊臂縮短並降低高度至電線 $L$ 以下，即吊臂位置移動至線段 $\\overline{BC}$。在正常安全情況下，設線段 $\\overline{BA}$ 斜率為 $\\dfrac43$，若線段 $\\overline{BC}$ 斜率最大值為 $\\dfrac34$，吊臂最少須縮短超過 $n$ 公尺，則 $n=\\textcirc{17-1}$。($n$ 取整數)',
    answer: '5',
    hasImage: true,
    style: { width: '5.5cm' },
  },
  {
    id: '1829fc891e7',
    chapter: '直線與圓',
    question:
      '圖為投幣機的基本剖面構造，從右側硬幣投入口投入十元硬幣後，經由 $L_1$、$L_2$ 兩切線所構成的軌道由右至左往下滑，並經過直線型的感應器 $L_3$。如圖所示，在直角坐標平面上，三直線方程式分別為 $L_1:x-3y+8=0$、$L_2:x-3y=0$ 且 $L_3:3x-y-8=0$，設十元硬幣為一正圓，則：',
    answer: '',
    hasImage: true,
    style: { width: '6.5cm' },
  },
  {
    id: '1829fcc2dd1',
    chapter: '直線與圓',
    question:
      '十元硬幣下滑過程中圓心所成的直線方程式為 $x-\\textcirc{18-1}y+\\textcirc{18-2}=0$。(選填題，6 分)',
    answer: '34',
    hasImage: false,
  },
  {
    id: '1829fcd6f22',
    chapter: '直線與圓',
    question: '當十元硬幣滑動過程中與 $L_3$ 相切時，其圓心坐標為何？(非選擇題，9 分)',
    answer: '(5,3) or (2,2)',
    hasImage: false,
  },
  {
    id: '18286a8d994',
    chapter: '直線與圓',
    question: '坐標平面上有平行四邊形 $ABCD$，已知 $A(3,5)$、$B(6,1)$、$C(-2,3)$，求 $D$ 坐標。',
    answer: '(-5,7)',
    hasImage: false,
  },
  {
    id: '18286ab3268',
    chapter: '直線與圓',
    question: '如圖，正方形 $ABCD$ 在坐標平面上，已知 $A(2,1)$、$C(6,19)$，求 $B$、$D$ 坐標。',
    answer: '(13,8)；(-5,12)',
    hasImage: true,
  },
  {
    id: '18286ad47e5',
    chapter: '直線與圓',
    question: '已知菱形的三個頂點坐標為 (7,-2)、(10,2)、(14,5)，求第四個頂點坐標。',
    answer: '(11,1)',
    hasImage: false,
  },
  {
    id: '18286af2a3a',
    chapter: '直線與圓',
    question: '正方形 $ABCD$，已知 $A(3,2)$、$B(7,9)$，$D$ 在第二象限，求 $C$、$D$ 坐標。',
    answer: '(0,13)；(-4,6)',
    hasImage: false,
  },
  {
    id: '18286b152b0',
    chapter: '直線與圓',
    question:
      "設坐標平面上點 $A(3,-14)$ 對 $P$ 點的對稱點為 $A'(-7,6)$，求點 $B(8,5)$ 對 $P$ 點的對稱點。",
    answer: '(-12,-13)',
    hasImage: false,
  },
  {
    id: '18287f99617',
    chapter: '直線與圓',
    question: '求坐標平面上點 $P(9,4)$ 對 $y$ 軸的對稱點坐標以及對 $y=-3$ 的對稱點坐標。',
    answer: '(-9,4)；(9,-10)',
    hasImage: false,
  },
  {
    id: '1828816488f',
    chapter: '直線與圓',
    question:
      '平面上點 $P(3,-7)$ 對 $A(-4,1)$ 的對稱點為 $Q$，$Q$ 對 $B(2,5)$ 的對稱點為 $R$，求 $R$ 坐標。',
    answer: '(15,1)',
    hasImage: false,
  },
  {
    id: '1828836bcfa',
    chapter: '直線與圓',
    question:
      '坐標平面上點 $P(3,5)$ 對 $x$ 軸的對稱點為 $Q$，$Q$ 對 $x=-7$ 的對稱點為 $R$，求 $R$ 坐標。',
    answer: '(17,-5)',
    hasImage: false,
  },
  {
    id: '1828839875b',
    chapter: '直線與圓',
    question: '平面上兩點 $A(1,-3)$、$B(4,5)$，求 $\\overline{AB}$ 的斜率 $m$。',
    answer: '$\\frac83$',
    hasImage: false,
  },
  {
    id: '182883cb133',
    chapter: '直線與圓',
    question:
      '平面上 $\\triangle ABC$，已知 $A(1,7)$、$B(6,-2)$、$C(4,3)$，求 $\\overline{AB}$ 的斜率，$\\overline{BC}$ 的斜率，$\\overline{CA}$ 的斜率。',
    answer: '$-\\frac95$；$-\\frac52$；$-\\frac43$',
    hasImage: false,
  },
  {
    id: '1828840012a',
    chapter: '直線與圓',
    question:
      '(1) 線型函數 $y=f(x)=7x+3$ 的圖形為直線，求此直線的斜率。\n(2) 求平面上直線 $L：5x+4y=1$ 的斜率。',
    answer: '(1) 7 (2) $-\\frac54$',
    hasImage: false,
  },
  {
    id: '1828844af9c',
    chapter: '直線與圓',
    question:
      '$y=3x+1$ 的斜率為 $a$，$y=-2x+5$ 的斜率為 $b$，$3x-2y=1$ 的斜率為 $c$，$5x+y=2$ 的斜率為 $d$，比較 $a、b、c、d$ 的大小。',
    answer: '$d<b<c<a$',
    hasImage: false,
  },
  {
    id: '1828866b7b7',
    chapter: '直線與圓',
    question:
      '有甲、乙、丙、丁、戊、己、庚共 7 根牙籤散落在坐標平面上，如圖，求斜率為正的牙籤共有幾根，斜率為負的牙籤共有幾根，其中以何者的斜率為最大，何者的斜率為最小。',
    answer: '3；4；乙；丁',
    hasImage: true,
  },
  {
    id: '182886a6a58',
    chapter: '直線與圓',
    question:
      '如圖，坐標平面上正五邊形 $ABCDE$ 哪個邊的斜率最大？哪個邊的斜率最小？\n(1) $\\overline{AB}$ (2) $\\overline{BC}$ (3) $\\overline{CD}$ (4) $\\overline{DE}$ (5) $\\overline{EA}$',
    answer: '(4)；(2)',
    hasImage: true,
  },
  {
    id: '182886ca2cd',
    chapter: '直線與圓',
    question:
      '平面上相異三點 $A(1,3)$、$B(k,2k)$、$C(k+1,3k-1)$ 在同一條直線上，稱為「三點共線」，求 $k$。',
    answer: '2',
    hasImage: false,
  },
  {
    id: '182886fd275',
    chapter: '直線與圓',
    question:
      '平面上兩直線 $L_1:(a+1)x+2y=5$、$L_2:(a+2)x-3y=1$，則：\n(1) 若 $L_1$ 與 $L_2$ 平行，求 $a$\n(2) 若 $L_1$ 與 $L_2$ 垂直，求 $a$',
    answer: '(1) $-\\frac75$ (2) -4 或 1',
    hasImage: false,
  },
  {
    id: '1828871c199',
    chapter: '直線與圓',
    question: '若平面上三點 $A(3,5)$、$B(1,k)$、$C(-4,2k+1)$ 共線，求 $k$。',
    answer: '9',
    hasImage: false,
  },
  {
    id: '1828873ddb8',
    chapter: '直線與圓',
    question:
      '平面上兩直線 $ax+3y=1$ 與 $4x+(a+1)y=8$，則：\n(1) 若互相平行，求 $a$ (2) 若互相垂直，求 $a$',
    answer: '(1) -4 或 3 (2) $-\\frac37$',
    hasImage: false,
  },
  {
    id: '182887a4754',
    chapter: '直線與圓',
    question:
      '平面上直線 $L$ 通過點 $P(-3,7)$，則：\n(1) 求斜率為 2 的直線方程式。\n(2) 求斜率為 $-\\frac45$ 的直線方程式。',
    answer: '(1) $2x-y=-13$ (2) $4x+5y=23$',
    hasImage: false,
  },
  {
    id: '182887c2e70',
    chapter: '直線與圓',
    question: '求平面上過 (3,-1)、(7,2) 兩點的直線方程式。',
    answer: '$3x-4y=13$',
    hasImage: false,
  },
  {
    id: '182887ddc0c',
    chapter: '直線與圓',
    question: '兩點 $A(1,2)$、$B(-3,8)$，求 $\\overline{AB}$ 的垂直平分線方程式。',
    answer: '$2x-3y=-17$',
    hasImage: false,
  },
  {
    id: '182887f7529',
    chapter: '直線與圓',
    question: '求過點 (3,7)，斜率為 $\\frac54$ 的直線方程式。',
    answer: '$5x-4y=-13$',
    hasImage: false,
  },
  {
    id: '1828d742e0e',
    chapter: '直線與圓',
    question: '求過兩點 (8,4)、(5,-1) 的直線方程式。',
    answer: '$5x-3y=28$',
    hasImage: false,
  },
  {
    id: '1828d7f4b20',
    chapter: '直線與圓',
    question:
      '(1) 求到 $A(4,-2)$、$B(7,6)$ 等距離的動點軌跡方程式\n(2) 平面上點 $A(3,2)$ 與 $B(-5,-2)$ 對稱於直線 $L$，求 $L$ 的方程式\n(以上兩題都是在求垂直平分線)',
    answer: '(1) $6x+16y=65$ (2) $2x+y=-2$',
    hasImage: false,
  },
  {
    id: '1828d815a14',
    chapter: '直線與圓',
    question: '平面上點 $P(2,-3)$，直線 $L:5x-3y=1$，求過 $P$ 與 $L$ 平行的直線方程式。',
    answer: '$5x-3y=19$',
    hasImage: false,
  },
  {
    id: '1828d8455e1',
    chapter: '直線與圓',
    question:
      '已知平面上一點 $P(-1,4)$，試求：\n(1) 過 $P$ 且與 $5x+3y=1$ 垂直的直線方程式\n(2) 過 $P$ 且與 $2x-7y=3$ 垂直的直線方程式',
    answer: '(1) $3x-5y=-23$ (2) $7x+2y=1$',
    hasImage: false,
  },
  {
    id: '1828d8acd1d',
    chapter: '直線與圓',
    question:
      '(1) 求過點 $(3,-5)$，與 $4x+7y=12$ 平行的直線方程式\n(2) 與 $4x+5y=1$ 垂直且通過點 $(2,1)$ 的直線方程式',
    answer: '(1) $4x+7y=-23$ (2) $5x-4y=6$',
    hasImage: false,
  },
  {
    id: '1828d8d51e2',
    chapter: '直線與圓',
    question:
      '$\\triangle ABC$，已知 $A$ 點坐標為 (3,7)，直線 $BC$ 方程式為 $2x-5y=4$，求過 $A$ 的高所在直線之方程式。',
    answer: '$5x+2y=29$',
    hasImage: false,
  },
  {
    id: '1828d904ecc',
    chapter: '直線與圓',
    question:
      '兩直線 $L_1:ax-3y=5a+1$，$L_2:2x+(a-5)y=13-a$，若 $L_1$ 與 $L_2$：\n(1) 互相平行，求 $a$ (2) 互相重合，求 $a$',
    answer: '(1) 3 (2) 2',
    hasImage: false,
  },
  {
    id: '1828dc4b596',
    chapter: '直線與圓',
    question: '若三直線 $L_1:4x+y=5$，$L_2:3x-2y=12$，$L_3:x+ay+4=0$ 不能圍成三角形，求 $a$',
    answer: '$\\frac14$ 或 $-\\frac23$ 或 2',
    hasImage: false,
  },
  {
    id: '1828dcad8f5',
    chapter: '直線與圓',
    question:
      '平面上直線 $L_1:(k-1)x+ky=k+2$，$L_2:(k+1)x+2ky=10$，請問：\n(1) 若 $L_1$ 與 $L_2$ 重合，求 $k$\n(2) 若 $L_1$ 與 $L_2$ 平行，求 $k$',
    answer: '(1) 3 (2) 0',
    hasImage: false,
  },
  {
    id: '1828dcd8766',
    chapter: '直線與圓',
    question: '若三直線 $L_1:x+3y=1$，$L_2:x-y=-3$，$L_3:2x+ky=-1$ 不能圍成三角形，求 $k$',
    answer: '6 或 -2 或 3',
    hasImage: false,
  },
  {
    id: '1828dcf80a5',
    chapter: '直線與圓',
    question: '平面上直線 $L:2x-9y=72$，求 $x$ 截距、$y$ 截距、$L$ 與兩軸圍成的三角形面積。',
    answer: '36；-8；144',
    hasImage: false,
  },
  {
    id: '1828dd11baa',
    chapter: '直線與圓',
    question: '平面上，直線的 $x$ 截距為 -12，$y$ 截距為 15，求直線方程式。',
    answer: '$-5x+4y=60$',
    hasImage: false,
  },
  {
    id: '1828dd2d2c1',
    chapter: '直線與圓',
    question: '平面上直線 $L:4x+15y+120=0$，求兩軸的截距和、與兩軸圍成的三角形面積。',
    answer: '-38；120',
    hasImage: false,
  },
  {
    id: '1828dd3d654',
    chapter: '直線與圓',
    question: '求 $x$ 軸截距為 3，$y$ 軸截距為 -5 的直線方程式。',
    answer: '$5x-3y=15$',
    hasImage: false,
  },
  {
    id: '1828dd5906d',
    chapter: '直線與圓',
    question: '直線在兩軸的截距和為 3，與兩軸圍成的三角形面積為 9，求該直線方程式。',
    answer: '$-2x+y=6$ 或 $x-2y=6$',
    hasImage: false,
  },
  {
    id: '1828dd736b5',
    chapter: '直線與圓',
    question: '直線在兩軸的截距和為 -2，與兩坐標軸圍成的三角形面積為 4，求此直線方程式。',
    answer: '$-x+2y=4$ 或 $2x-y=4$',
    hasImage: false,
  },
  {
    id: '1828dd94f51',
    chapter: '直線與圓',
    question: '$k$ 為任意實數，直線 $(3k+2)x+(k-1)y-(4k+1)=0$ 恆過一定點，求此定點坐標。',
    answer: '(1,1)',
    hasImage: false,
  },
  {
    id: '1828ddce4de',
    chapter: '直線與圓',
    question:
      '設 $m$ 為實數，$\\triangle ABC$ 的頂點為 $A(-1,5)$、$B(-3,0)$、$C(1,1)$，若直線 $L:y=m(x-3)+2$ 與 $\\triangle ABC$ 有交點，求 $m$ 的範圍。',
    answer: '$-\\frac34\\le m\\le \\frac12$',
    hasImage: false,
  },
  {
    id: '1828ddfc1d8',
    chapter: '直線與圓',
    question: '設 $k$ 為任意實數，直線 $(2k+5)x+(k-2)y-2k+1=0$ 恆過一定點，求其坐標。',
    answer: '$(\\frac13,\\frac43)$',
    hasImage: false,
  },
  {
    id: '1828e167b8e',
    chapter: '直線與圓',
    question:
      '平面上有三點 $A(2,1)$、$B(3,7)$、$C(-5,4)$，直線 $L:y=mx+2m-1$：\n(1) 若 $L$ 與 $\\overline{AB}$ 相交，求 $m$ 的範圍\n(2) 若 $L$ 與 $\\overline{BC}$ 相交，求 $m$ 的範圍',
    answer: '(1) $\\frac12\\le m\\le \\frac85$ (2) $m\\le -\\frac53$ 或 $m\\ge \\frac85$',
    hasImage: false,
  },
  {
    id: '1828e18e697',
    chapter: '直線與圓',
    question: "求點 $A(1,4)$ 對直線 $L:3x-2y=8$ 的投影點 $A_0$，對稱點 $A'$。",
    answer: '(4,2)；(7,0)',
    hasImage: false,
  },
  {
    id: '1828e1a17a9',
    chapter: '直線與圓',
    question: "求點 $P(6,-7)$ 對 $3x-4y=-4$ 的投影點 $P_0$，對稱點 $P'$。",
    answer: '(0,1)；(-6,9)',
    hasImage: false,
  },
  {
    id: '1828e1cec96',
    chapter: '直線與圓',
    question:
      '坐標平面上的兩點 $A(1,5)$、$B(6,7)$，點 $P(x,0)$ 在 $x$ 軸上移動，求 $x$ 為何時，$\\overline{PA}+\\overline{PB}$ 有最小值？最小值為？',
    answer: '$\\frac{37}{12}$；13',
    hasImage: false,
  },
  {
    id: '1828e1effc4',
    chapter: '直線與圓',
    question:
      '平面上三點 $A(2,2)$、$B(6,4)$、$P(x,0)$，求 $x$ 為何時，使 $\\triangle PAB$ 周長最小？其最小值為？',
    answer: '$\\frac{10}3$；$2\\sqrt5+2\\sqrt{13}$',
    hasImage: false,
  },
  {
    id: '1828e2079f5',
    chapter: '直線與圓',
    question: '求點 $P(-3,5)$ 到直線 $L:3x-4y=6$ 的最近距離。',
    answer: '7',
    hasImage: false,
  },
  {
    id: '1828e224598',
    chapter: '直線與圓',
    question: '求點 $P(x,y)$ 在直線 $L:7x+24y-9=0$ 上，求 $\\sqrt{(x-1)^2+(y+2)^2}$ 的最小值。',
    answer: '2',
    hasImage: false,
  },
  {
    id: '1828e2376fd',
    chapter: '直線與圓',
    question: '點 (1,-4) 到直線 $5x+12y=k$ 的距離為 5，求 $k$。',
    answer: '-108 或 22',
    hasImage: false,
  },
  {
    id: '1828e252132',
    chapter: '直線與圓',
    question: '求點 (4,1) 到直線 $3x-4y=2$ 的距離。',
    answer: '$\\frac65$',
    hasImage: false,
  },
  {
    id: '1829276afdf',
    chapter: '直線與圓',
    question: '點 $(x,y)$ 在直線 $12x-5y-2=0$，求 $\\sqrt{(x+3)^2+(y+1)^2}$ 的最小值。',
    answer: '$\\frac{33}{13}$',
    hasImage: false,
  },
  {
    id: '1829278a2da',
    chapter: '直線與圓',
    question: '點 (2,5) 到直線 $4x+3y=k$ 的距離為 7，求 $k$。',
    answer: '28 或 -42',
    hasImage: false,
  },
  {
    id: '18292736eb9',
    chapter: '直線與圓',
    question: '求兩平行線 $L_1:3x-4y=4$、$L_2:6x-8y=7$ 之間的距離。',
    answer: '$\\frac1{10}$',
    hasImage: false,
  },
  {
    id: '182927905cc',
    chapter: '直線與圓',
    question: '求與直線 $L:3x-4y=-1$ 平行且間距為 3 單位的直線方程式。',
    answer: '$3x-4y=14\\lor3x-4y=-16$',
    hasImage: false,
  },
  {
    id: '1829279e1e9',
    chapter: '直線與圓',
    question: '求兩平行線 $L_1:5x-y-2=0$、$L_2:10x-2y-5=0$ 之間的距離。',
    answer: '$\\frac{\\sqrt{26}}{52}$',
    hasImage: false,
  },
  {
    id: '182927a97eb',
    chapter: '直線與圓',
    question: '求與直線 $L:4x-3y=1$ 平行且間距為 4 單位的直線方程式。',
    answer: '$4x-3y=21\\lor4x-3y=-19$',
    hasImage: false,
  },
  {
    id: '182927b3d49',
    chapter: '直線與圓',
    question: '求 $L_1:x-y=7$ 與 $L_2:7x+y=1$ 的角平分線方程式，並分辨何者為銳角角平分線。',
    answer: '鈍角 $x+3y=-17$；銳角 $3x-y=9$',
    hasImage: false,
  },
  {
    id: '182927c1bcd',
    chapter: '直線與圓',
    question: '求 $3x-4y+2=0$ 與 $4x-3y-5=0$ 之銳角平分線方程式。',
    answer: '$7x-7y=3$',
    hasImage: false,
  },
  {
    id: '182927d41c7',
    chapter: '直線與圓',
    question: '作圖：(1) $x-2y\\ge6$ (2) $-2x+3y>12$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '182927e5185',
    chapter: '直線與圓',
    question:
      '平面上點 $P(3,1)$，直線 $L:2x+y=5$，請問下列哪些點與 $P$ 位在 $L$ 的同側?\n(1) (0,0)　(2) (1,3)　(3) $(2,\\sqrt3)$\n(4) (100,-100)　(5) (-100,100)',
    answer: '(3)(4)',
    hasImage: false,
  },
  {
    id: '182927f0c13',
    chapter: '直線與圓',
    question: '作圖：(1) $2x+y\\le4$ (2) $-x-3y<6$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '18292825cfa',
    chapter: '直線與圓',
    question: '若 $ax+by\\le c$ 的圖形如圖所示，請選出正確的選項。(1) $a>0$　(2) $b>0$　(3) $c>0$',
    answer: '(2)(3)',
    hasImage: true,
  },
  {
    id: '1829280a5a1',
    chapter: '直線與圓',
    question:
      '作圖：(1) $\\begin{cases}x+y+1\\ge0\\\\x-y-2\\ge0\\end{cases}$\n(2) $(x+y+1)(x-y-2)>0$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '18292812c79',
    chapter: '直線與圓',
    question:
      '聯立不等式的圖形為三角形及其內部，圖形如圖所示，其中 $L_3$ 平行 $x$ 軸，請寫出該聯立不等式。',
    answer: '$\\begin{cases}3x-2y\\ge-6\\\\2x+y\\le3\\\\y\\ge-1\\end{cases}$',
    hasImage: true,
  },
  {
    id: '1829283fcf1',
    chapter: '直線與圓',
    question:
      '聯立不等式 $\\begin{cases}ax+by\\le c\\\\x+y\\ge d\\end{cases}$ 的圖如圖所示，則何者正確?\n(1) $a>0$　(2) $b>0$　(3) $c>0$　(4) $d>0$',
    answer: '(2)(3)',
    hasImage: true,
  },
  {
    id: '18292856c77',
    chapter: '直線與圓',
    question:
      '作圖：(1) $\\begin{cases}x+2y-4\\le0\\\\3x-y-6\\le0\\end{cases}$\n(2) $(x+2y-4)(3x-y-6)\\le0$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '18292861598',
    chapter: '直線與圓',
    question:
      '四邊形區域 (含邊界) 如圖所示，其四邊的直線方程式為 $x+y=7$、$x-y=3$、$2x+y=3$、$x-2y=-11$，試以聯立不等式組表示。',
    answer: '$\\begin{cases}2x+y\\ge3\\\\x-y\\le3\\\\x+y\\le7\\\\x-2y\\ge-11\\end{cases}$',
    hasImage: true,
  },
  {
    id: '18292872257',
    chapter: '直線與圓',
    question:
      '若 $\\begin{cases}5x+ay\\ge b\\\\cx+dy\\le e\\end{cases}$ 如圖所示，請選出正確的選項。(1) $a>0$　(2) $b>0$\n(3) $c>0$　(4) $d>0$　(5) $e>0$',
    answer: '(1)(3)',
    hasImage: true,
  },
  {
    id: '1829288068f',
    chapter: '直線與圓',
    question:
      '二元一次聯立不等式 $\\begin{cases}2x+y\\le6\\\\x+y\\ge2\\\\x\\ge0\\\\y\\ge0\\end{cases}$，求此區域共有幾個格子點？($x$、$y$ 坐標均為整數的點)',
    answer: '13 個',
    hasImage: false,
  },
  {
    id: '18292893ba6',
    chapter: '直線與圓',
    question:
      '已知可樂一杯 18 元，果汁一杯 30 元，小明用現有的 150 元去買飲料，在至少購買 2 杯飲料的情況下，請問小明共有幾種不同購買方式？',
    answer: '26 種',
    hasImage: false,
  },
  {
    id: '182928bfd14',
    chapter: '直線與圓',
    question:
      '有一個車輪緊靠台階，如圖所示，台階的高度為 25 公分，車輪與地面的接觸點距離台階 35 公分，請問此車輪的直徑為多少公分？',
    answer: '74 公分',
    hasImage: true,
  },
  {
    id: '182928cabc2',
    chapter: '直線與圓',
    question: '坐標平面上有一單位圓，圓心為 (7,4)，試求此圓方程式。',
    answer: '$(x-7)^2+(y-4)^2=1$',
    hasImage: false,
  },
  {
    id: '182928d33bd',
    chapter: '直線與圓',
    question: '坐標平面上有一圓以點 $A(3,-2)$ 為圓心，點 $B(-1,1)$ 在圓周上，試求此圓方程式。',
    answer: '$(x-3)^2+(y+2)^2=25$',
    hasImage: false,
  },
  {
    id: '182928ecc5e',
    chapter: '直線與圓',
    question: '求圓方程式 $2x^2+2y^2-8x+12y-15=0$ 的圓心與半徑。',
    answer: '(2,-3)；$\\frac{\\sqrt{82}}2$',
    hasImage: false,
  },
  {
    id: '182928f5481',
    chapter: '直線與圓',
    question: '試求以點 $(\\sqrt6,\\pi)$ 為圓心，半徑為 3 的圓方程式。',
    answer: '$(x-\\sqrt{6})^2+(y-\\pi)^2=9$',
    hasImage: false,
  },
  {
    id: '182929009f8',
    chapter: '直線與圓',
    question: '坐標平面上有一圓以點 (-4,1) 為圓心，點 (0,2) 在圓周上，求此圓方程式。',
    answer: '$(x+4)^2+(y-1)^2=17$',
    hasImage: false,
  },
  {
    id: '1829290af50',
    chapter: '直線與圓',
    question: '已知圓方程式 $2x^2+2y^2+ax+by-1=0$ 的圓心為 (-1,4)，試求 $a$、$b$、半徑。',
    answer: '4；-16；$\\frac{\\sqrt{70}}2$',
    hasImage: false,
  },
  {
    id: '1829291be5b',
    chapter: '直線與圓',
    question: '若方程式 $axy+bx(x+y-4)+2xy+3y^2=6y$ 的圖形為一圓，求數對 $(a,b)$ 與圓心、半徑。',
    answer: '(-5,3)；(2,1)；$\\sqrt5$',
    hasImage: false,
  },
  {
    id: '18292928531',
    chapter: '直線與圓',
    question: '設 $k$ 為實數，考慮方程式 $x^2+y^2+2x-6y+k=0$ 的圖形，若為一點，求 $k$ 與此點坐標。',
    answer: '10；(-1,3)',
    hasImage: false,
  },
  {
    id: '18207a17825',
    chapter: '直線與圓',
    question:
      '學校合作社販賣的香檳冰棒每枝 20 元，水果冰棒每枝 30 元，某生帶著 180 元欲購買五枝以上(含)的冰棒，錢可不必花完，則他會有幾種買法？\n(1) 13　 (2) 15　 (3) 22　 (4) 29　 (5) 36',
    answer: '3',
    hasImage: false,
  },
  {
    id: '182079f4012',
    chapter: '直線與圓',
    question:
      '小美欲設計一款月亮形狀的餅乾，如圖所示，點 $B(0,0)$ 為小圓的圓心，點 $C(1,0)$ 為大圓的圓心，點 $A(-1,0)$ 在圓 $O_1$ 上，點 $A,B,C$ 在同一直線上，利用適當的關係式表示此餅乾的區域。\n(1) $(x^2+y^2-1)[(x-1)^2+y^2-4]\\le0$\n(2) $(x^2+y^2-1)[(x-1)^2+y^2-4]\\ge0$\n(3) $(x^2+y^2-1)[(x-1)^2+y^2-1]\\le0$\n(4) $(x^2+y^2-1)[(x-1)^2+y^2-1]\\ge0$\n(5) $(x^2+y^2)[(x-1)^2+y^2-4]\\le0$',
    answer: '1',
    hasImage: true,
  },
  {
    id: '18207a67ec1',
    chapter: '直線與圓',
    question:
      '過點 (1,1) 的直線 L 將圓 $x^2+y^2=100$ 分成兩段弧，當較小的弧所對的圓心角最小時，則該直線的斜率為何？\n(1) -1　 (2) 1　 (3) $\\sqrt2$　 (4) $\\dfrac32$　 (5) 2',
    answer: '1',
    hasImage: false,
  },
  {
    id: '18207aa2b6f',
    chapter: '直線與圓',
    question:
      '在坐標平面上，一圓通過點 $P(-1,1)$，且與直線 $L:x-y=0$ 相切於 $Q(1,1)$，若此圓方程式為 $x^2+y^2+ax+by+c=0$，則 $a+b+c$ 的值為何？\n(1) -4　 (2) -2　 (3) 0　 (4) 2　 (5) 4',
    answer: '2',
    hasImage: false,
  },
  {
    id: '18207ac1316',
    chapter: '直線與圓',
    question:
      '在坐標平面上，求以 (0,0), (1,0), (0,1), (1,1) 四個點為頂點的正方形，與圓 $x^2+y^2-4x-4y+6=0$ 的交點個數為幾個？\n(1) 0　 (2) 1　 (3) 2　 (4) 3　 (5) 4',
    answer: '2',
    hasImage: false,
  },
  {
    id: '18207b021bf',
    chapter: '直線與圓',
    question:
      '設 $k$ 為實數，已知圓方程式 $x^2+y^2+4kx-6ky+12k^2-4k-8=0$。試選出正確的選項。\n(1) 圓心落在直線 $3x-2y=0$\n(2) 當此圓的圓心為 (0,0) 時，圓的面積為 $8\\pi$\n(3) 當 $k=-2$ 時，圓的面積有最小值\n(4) 圓的面積最小值為 $2\\pi$\n(5) 存在 $k$，使得圓與 $y$ 軸相切',
    answer: '235',
    hasImage: false,
  },
  {
    id: '18207bab427',
    chapter: '直線與圓',
    question:
      '陳老師想設計一個房間，提供給小孩及柴犬一個長方形活動的區域 $ODEF$。如圖所示小孩只在三角形 $OAB$ 區域內活動，柴犬則只在區域 $ODEF$ 內除了三角形 $OAB$ 以外的區域活動。令 $O(0,0)$, $A(4,2)$, $B(2,3)$, $D(0,4)$, $E(6,4)$, $F(6,0)$，試選出正確的選項。\n(1) 長方形 $ODEF$ 的區域(含邊界)可用不等式 $\\begin{cases}0\\le x\\le4\\\\0\\le y\\le6\\end{cases}$ 來表示\n(2) 三角形 $OAB$ 的區域(含邊界)可用不等式 $\\begin{cases}x-2y\\le0\\\\3x-2y\\ge0\\\\x+2y\\le8\\end{cases}$ 來表示\n(3) 柴犬活動的區域面積 : 小孩活動的區域面積 $=5:1$\n(4) 柴犬原本在 $E$ 點，聽到小孩叫喚聲，想跑去三角形 $OAB$ 區域，則 $E$ 點與三角形 $OAB$ 區域最近的距離為 $2\\sqrt2$\n(5) 此小孩跟柴犬會玩一種餵食的遊戲，因小孩活動區域邊界有柵欄，故當小孩在三角形 $OAB$ 區域內某點 $P$ 時，柴犬會在點 $P$ 以三角形各邊為對稱軸的對稱點接食物。若小孩在點 (3,2) 時，柴犬可能會在點 $Q(\\dfrac{17}5,\\dfrac{14}5)$ 接食物',
    answer: '345',
    hasImage: true,
  },
  {
    id: '18207c1ce55',
    chapter: '直線與圓',
    question:
      '考慮坐標平面上以 $O(0,0)$, $A(-8,0)$, $B(0,6)$ 為頂點的三角形，令 $C_1,C_2$ 分別為 $\\triangle OAB$ 的外接圓與內切圓，試選出正確的選項。\n(1) 圓 $C_1$ 的方程式為 $(x+4)^2+(y+3)^2=25$\n(2) 圓 $C_1$ 的圓心在直線 $x+y=0$ 上\n(3) 圓 $C_2$ 的圓心為 (-2,2)\n(4) 圓 $C_2$ 的圓心在直線 $x-y=0$ 上\n(5) 圓 $C_2$ 的半徑為 2',
    answer: '35',
    hasImage: false,
  },
  {
    id: '17da261e00a',
    chapter: '直線與圓',
    question:
      '已知一圓 $\\Gamma:x^2+y^2-10x-6y+25=0$ 和兩定點 $A(0,0)$、$B(10,0)$，今有一點 $C$，使得圓落在 $\\triangle ABC$ 內 (含邊界)，已知 $C$ 點的坐標為 $(5,k)$，求 $k$ 的最小值。',
    answer: '$\\frac{75}8$',
    hasImage: false,
  },
  {
    id: '17da242c625',
    chapter: '直線與圓',
    question:
      '有兩排相距 $40$ 公尺的公共住宅，在地圖上分別位於兩平行直線 $L_1$ 與 $L_2$ 上，如圖，已知在兩排住宅之間的 $E$ 點架設了一台天線，只要與天線之間的距離不超過 $50$ 公尺皆為有效的接收範圍。設兩排公共住宅的有效接收範圍，在地圖上分別位於 $\\overline{AB}$ 與 $\\overline{CD}$ 上，若 $\\frac{\\overline{AB}}{\\overline{CD}}=\\frac{\\sqrt6}2$，求此天線距離位於直線 $L_1$ 上的公共住宅最近為幾公尺？',
    answer: '$10$',
    hasImage: true,
  },
  {
    id: '17d7efc5467',
    chapter: '直線與圓',
    question:
      '坐標平面上有一個半圓形的建築物 $\\Gamma:y=\\sqrt{4-x^2}$，在第一象限內有一光源位於點 $P(3,a)$ 處，若欲使光源能照射到點 $A(-3,0)$，求 $a$ 的最小值。',
    answer: '$\\frac{12\\sqrt5}5$',
    hasImage: false,
  },
  {
    id: '17d7e5fc561',
    chapter: '直線與圓',
    question:
      '若點 $P$ 為圓 $(x-3)^2+y^2=4$ 上的動點，且點 $Q$ 為線段 $\\begin{cases}x=-2+3t\\\\y=1+3t\\end{cases},0\\le t\\le1$ 上的動點，則線段 $\\overline{PQ}$ 的範圍為何？\n(1) $1\\le\\overline{PQ}\\le7$\n(2) $2\\sqrt5-2\\le\\overline{PQ}\\le\\sqrt{26}$\n(3) $3\\sqrt2-2\\le\\overline{PQ}\\le\\sqrt{26}+2$\n(4) $2\\sqrt5\\le\\overline{PQ}\\le3\\sqrt2+2$\n(5) $5\\sqrt5-2\\le\\overline{PQ}\\le3\\sqrt5+2$',
    answer: '(3)',
    hasImage: false,
  },
  {
    id: '17d3ac2475f',
    chapter: '直線與圓',
    question: '若 $A(2,2)$、$B(m,3)$、$C(6,1)$、$D(-6,n)$ 四點共線，求數對 $(m,n)$。',
    answer: '$(-2,4)$',
    hasImage: false,
  },
  {
    id: '17d3ac3591d',
    chapter: '直線與圓',
    question:
      '下列五條直線，哪一條斜率最大？\n(1) $2x+5y=7$ (2) $y-2=0$ (3) $3x-6y+5=0$ (4) $3x-y=13$ (5) $x+3y=2$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17d3ac50996',
    chapter: '直線與圓',
    question:
      '$A(4,6)$、$B(5,1)$，若點 $P$ 在 $y=2x-1$ 上且 $\\overline{PA}=\\overline{PB}$，求 $P$。',
    answer: '$(2,3)$',
    hasImage: false,
  },
  {
    id: '17d3ac684a4',
    chapter: '直線與圓',
    question: '已知 $A(-2,6)$、$B(a,2)$，若線段 $AB$ 的中垂線 $L$ 為 $3x-2y+k=0$，求數對 $(a,k)$。',
    answer: '$(4,5)$',
    hasImage: false,
  },
  {
    id: '17d3ba551ce',
    chapter: '直線與圓',
    question: '求點 $(3,1)$ 到直線 $L:3x-4y+5=0$ 的距離。',
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '17d3b991b8e',
    chapter: '直線與圓',
    question: '若點 $(k,k)$ 與兩直線 $3x-y=0$，$x+3y=4$ 之距離相等，求 $k$。',
    answer: '$2\\lor\\frac23$',
    hasImage: false,
  },
  {
    id: '17d3b99e456',
    chapter: '直線與圓',
    question: '試求與直線 $L:3x+4y-7=0$ 平行且距離為 $\\frac{11}5$ 的直線方程式。',
    answer: '$3x+4y+4=0\\lor3x+4y-18=0$',
    hasImage: false,
  },
  {
    id: '17d3b9d9c69',
    chapter: '直線與圓',
    question:
      '設 $A(5,6)$、$B(-3,0)$、$C(2,-3)$ 為坐標平面上的三個點，則：\n(1) 請寫出 $\\triangle ABC$ 內部 (不含邊界) 的聯立不等式。\n(2) 若點 $P(k,2k-1)$ 為 $\\triangle ABC$ 內部任一點，求實數 $k$ 的範圍。',
    answer:
      '(1) $\\begin{cases}3x-4y>-9\\\\3x+5y>-9\\\\3x-y<9\\end{cases}$ (2) $-\\frac4{13}<k<\\frac{13}5$',
    hasImage: false,
  },
  {
    id: '17d3ba1541c',
    chapter: '直線與圓',
    question:
      '在坐標平面上，$S:x^2+y^2+2x-4y+k=0$，下列何者正確？\n(1) 若 $k=0$，則 $S$ 為一個圓\n(2) 若 $k=5$，則 $S$ 為一點\n(3) 若 $k=-5$，則 $S$ 無圖形\n(4) 若 $S$ 為一圓，則圓心為 $(-1,2)$\n(5) 若圓 $S$ 與 $x$ 軸相切，則 $k=1$',
    answer: '(1)(2)(4)(5)',
    hasImage: false,
  },
  {
    id: '17d3ba2549c',
    chapter: '直線與圓',
    question: '求過 $(5,1)$、$(3,1)$ 兩點且圓心在直線 $x+2y-2=0$ 上的圓方程式。',
    answer: '$(x-4)^2+(y+1)^2=5$',
    hasImage: false,
  },
  {
    id: '17d3ba2f6c1',
    chapter: '直線與圓',
    question: '求過 $(-3,5)$ 且與圓 $x^2+y^2=34$ 相切的切線方程式。',
    answer: '$3x-5y+34=0$',
    hasImage: false,
  },
  {
    id: '17d3ba47f2e',
    chapter: '直線與圓',
    question: '圓 $C:x^2+y^2-2x+6y+6=0$，過 $A(3,1)$ 作 $C$ 的切線，求切線方程式。',
    answer: '$3x-4y=5\\lor x=3$',
    hasImage: false,
  },
  {
    id: '17d2f0efd98',
    chapter: '直線與圓',
    question:
      '下列哪一個方程式在坐標平面上是「無圖形」？\n(1) $x^2+y^2+x+y+1=0$\n(2) $x^2+y^2+2x+2y+2=0$\n(3) $x^2+y^2+3x+3y+3=0$\n(4) $x^2+y^2+4x+4y+4=0$\n(5) $x^2+y^2+5x+5y+5=0$',
    answer: '(1)',
    hasImage: false,
  },
  {
    id: '17d2f101869',
    chapter: '直線與圓',
    question: '點 $P(4,1)$ 在圓 $(x-1)^2+(y+3)^2=4$ 的外部，求圓周上任意點到 $P$ 點的最近距離。',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '17d2f10d194',
    chapter: '直線與圓',
    question: '方程式 $x^2+y^2+8x-12y+3=0$ 的圖形是一個圓，求圓心及半徑。',
    answer: '$(-4,6)$；$7$',
    hasImage: false,
  },
  {
    id: '17d2f12aa0f',
    chapter: '直線與圓',
    question:
      '若圓 $(x+2)^2+(y-1)^2=36$ 與直線 $x+y=7$ 相交於 $A$、$B$ 兩點，求 $\\overline{AB}$。',
    answer: '$4$',
    hasImage: false,
  },
  {
    id: '17d2f13df97',
    chapter: '直線與圓',
    question: '求圓 $(x+2)^2+(y-3)^2=25$ 被 $x$ 軸截出的弦長。',
    answer: '$8$',
    hasImage: false,
  },
  {
    id: '17d2f1496b9',
    chapter: '直線與圓',
    question: '求過圓 $(x+4)^2+(y-2)^2=20$ 上的點 $P(0,4)$ 所作的切線方程式。',
    answer: '$2x+y=4$',
    hasImage: false,
  },
  {
    id: '17d2f16cbf3',
    chapter: '直線與圓',
    question: '若圓 $x^2+(y+k)^2=16$ 與直線 $4x+3y=k$ 不相交，求 $k$ 的範圍。',
    answer: '$k>5\\lor k<-5$',
    hasImage: false,
  },
  {
    id: '17d2f19c0fc',
    chapter: '直線與圓',
    question: '平面上圓 $x^2+y^2=5$，過 $P(3,1)$ 作圓的兩條切線，求切線方程式。',
    answer: '$x+2y=5$ 或 $2x-y=5$',
    hasImage: false,
  },
  {
    id: '17cbd26af8e',
    chapter: '直線與圓',
    question:
      '設直線 $L$ 通過 $A$、$B$ 兩點，若 $A$ 點坐標為 $(2,-1)$，$B$ 點坐標為 $(4,5)$，求 $L$ 之斜率。',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '17cbd281749',
    chapter: '直線與圓',
    question: '設 $P(2,4)$、$Q(a,0)$、$R(-2,8)$ 為共線之三點，求 $a$。',
    answer: '$6$',
    hasImage: false,
  },
  {
    id: '17cbd28f2a6',
    chapter: '直線與圓',
    question: '一直線通過 $A(\\sqrt3,2)$、$B(2\\sqrt3,-1)$ 兩點，求此直線的斜率。',
    answer: '$\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17cbd29b705',
    chapter: '直線與圓',
    question: '直線 $L$ 之斜率為 $-2$，且經過點 $(3,-1)$，求直線 $L$ 之方程式。',
    answer: '$y=-2x+5$',
    hasImage: false,
  },
  {
    id: '17cbd2ade43',
    chapter: '直線與圓',
    question: '一直線過點 $(2,-1)$ 且斜率為 $-\\frac57$，試求此直線方程式。',
    answer: '$5x+7y=3$',
    hasImage: false,
  },
  {
    id: '17cbd2d9505',
    chapter: '直線與圓',
    question:
      '已知直線 $L$ 的斜率為 $-\\frac25$ 且過點 $(-5,4)$，試求 $L$ 與二坐標軸所圍成的三角形面積。',
    answer: '$5$',
    hasImage: false,
  },
  {
    id: '17cbd2eafed',
    chapter: '直線與圓',
    question: '直線 $2x-3y=6$ 之 $y$ 截距為？',
    answer: '$-2$',
    hasImage: false,
  },
  {
    id: '17cbd3076d1',
    chapter: '直線與圓',
    question: '求斜率為 $2$，且 $x$ 截距為 $-5$ 的直線方程式。',
    answer: '$2x-y+10=0$',
    hasImage: false,
  },
  {
    id: '17cbd31afc6',
    chapter: '直線與圓',
    question: '若直線 $ax+y+k=0$ 之斜率為 $\\frac13$，$y$ 截距為 $2$，求序組 $(a,k)$。',
    answer: '$(-\\frac13,-2)$',
    hasImage: false,
  },
  {
    id: '17cbd332cfa',
    chapter: '直線與圓',
    question: '求 $x$ 截距為 $3$，$y$ 截距為 $-2$ 的直線方程式。',
    answer: '$2x-3y=6$',
    hasImage: false,
  },
  {
    id: '17a50c06452',
    chapter: '直線與圓',
    question:
      '坐標平面上四條直線 $L_1$、$L_2$、$L_3$、$L_4$ 與 $x$ 軸、$y$ 軸及直線 $ y=x$ 的相關位置如圖所示，其中 $L_1$ 與 $L_3$ 垂直，而 $L_3$ 與 $L_4$ 平行。設 $L_1$、$L_2$、$L_3$、$L_4$ 的方程式分別為 $y=m_1x$，$y=m_2x$，$y=m_3x$，$y=m_4x+c$。試問下列哪些正確。\n(1) $m_3>m_2>m_1$ (2) $m_1\\cdot m_4=-1$\n(3) $m_1<-1$ (4) $m_2\\cdot m_3<-1$ (5) $c>0$',
    answer: '(2)(3)(4)',
    hasImage: true,
    style: { height: '5.5cm' },
  },
  {
    id: '17a50c4a7d8',
    chapter: '直線與圓',
    question:
      '鳶形 $ABCD$ 如圖，其中 $A$、$C$ 在 $y$ 軸上，$B$、$D$ 在 $x$ 軸上，且 $\\overline{AB}=\\overline{AD}=2$，$\\overline{BC}=\\overline{CD}=4$，$\\overline{AC}=5$。令 $m_{AB}$、$m_{BC}$、$m_{CD}$、$m_{DA}$ 分別表各對應直線之斜率。試問以下哪些敘述成立？\n(1) 此四數值中以 $m_{AB}$ 為最大\n(2) 此四數值中以 $m_{BC}$ 為最小\n(3) $m_{BC}=-m_{CD}$\n(4) $m_{AB}\\times m_{BC}=-1$\n(5) $m_{CD}+m_{DA}>0$',
    answer: '(2)(3)(5)',
    hasImage: true,
  },
  {
    id: '17a50c8d3de',
    chapter: '直線與圓',
    question:
      '坐標平面上有一個菱形 $ABCD$，若 $A(1,1)$，$\\overleftrightarrow{AB}$ 方程式為 $4x-3y-1=0$，中心為 $M(5,3)$，求此菱形面積。',
    answer: '20',
    hasImage: false,
  },
  {
    id: '17a50ca5eea',
    chapter: '直線與圓',
    question:
      '平面上直線 $L_1$ 過 $A(4,5)$，$L_2$ 過 $B(7,-1)$，$L_1$ 與 $L_2$ 交於 $P$ 點，且 $L_1$ 的斜率比 $L_2$ 的斜率多 1，若 $\\angle ABP=90\\du$，求 $P$。',
    answer: '$(-\\frac72,-\\frac{25}4)$',
    hasImage: false,
  },
  {
    id: '17a50d16805',
    chapter: '直線與圓',
    question: '點 $(2,p)$ 對直線 $3x-y=q$ 的對稱點為 (8,-3)，求 $(p,q)$。',
    answer: '(-1,17)',
    hasImage: false,
  },
  {
    id: '17a50d68e5a',
    chapter: '直線與圓',
    question:
      '平面上有點 $A(7,1)$ 及直線 $L:5x-2y=4$，若有一點 $B$，使 $A$、$B$ 在 $L$ 的同側，滿足 $\\overleftrightarrow{AB}\\perp L$ 且 $A$ 到 $B$ 的距離與 $A$ 到 $L$ 的距離相等，求 $B$。',
    answer: '(12,-1)',
    hasImage: false,
  },
  {
    id: '17a50d82b17',
    chapter: '直線與圓',
    question: '平面上，$P(2k,1)$ 到直線 $L:x+ky=5$ 的最近距離為 $\\sqrt2$，求實數 $k$。',
    answer: '$\\frac{23}7\\lor1$',
    hasImage: false,
  },
  {
    id: '17a50da2521',
    chapter: '直線與圓',
    question:
      '已知直線 $L:3x+4y=12$，$P(2,6)$，$O(0,0)$，點 $P$ 在 $L$ 上之投影為 $A$ 點，點 $O$ 在 $L$ 上之投影為 $B$ 點，$\\overline{OP}$ 與 $L$ 交點為 $M$，求：(1) $\\overline{AM}:\\overline{MB}$ (2) $\\overline{AB}$',
    answer: '(1) 3:2 (2) 2',
    hasImage: false,
  },
  {
    id: '17a50dd5388',
    chapter: '直線與圓',
    question:
      '設 $a\\in\\mathbb R$，已知在第一象限滿足聯立不等式 $\\begin{cases}x-3y\\le a\\\\x+2y\\le14\\end{cases}$ 的所有點所形成之區域面積為 $\\frac{213}5$ 平方單位，求 $a$。',
    answer: '6',
    hasImage: false,
  },
  {
    id: '17a50def853',
    chapter: '直線與圓',
    question:
      '設 $a,b\\in\\mathbb R$，已知坐標平面上滿足聯立不等式 $\\begin{cases}x+y\\ge0\\\\x+y\\le6\\\\2x-y\\ge0\\\\y\\ge ax-b\\end{cases}$ 的區域是一個菱形，試求此菱形邊長、$a$、$b$。',
    answer: '$2\\sqrt5$；2；$3\\sqrt{10}$',
    hasImage: false,
  },
  {
    id: '17a50e0e6da',
    chapter: '直線與圓',
    question:
      '工匠在窗子外邊想做一個圓弧型的花臺，此花臺在窗口的中央往外伸 72 公分，窗口的寬度是 168 公分，求此圓弧的圓半徑。',
    answer: '85 公分',
    hasImage: true,
  },
  {
    id: '17a50e283b8',
    chapter: '直線與圓',
    question:
      '設圓 $O$ 之半徑為 24，$\\overline{OC}=26$，$\\overline{OC}$ 交圓 $O$ 於 $A$ 點，$\\overline{CD}$ 切圓 $O$ 於 $D$ 點，$B$ 為 $A$ 點到 $\\overline{OD}$ 的垂足，如示意圖，求 $\\overline{AB}$。',
    answer: '$\\frac{120}{13}$',
    hasImage: true,
  },
  {
    id: '17a50e42825',
    chapter: '直線與圓',
    question: '坐標平面上的圓 $(x-7)^2+(y-8)^2=9$ 上有幾個點與原點的距離正好是整數值？',
    answer: '12',
    hasImage: false,
  },
  {
    id: '17a50e5b817',
    chapter: '直線與圓',
    question:
      '點 $A(1,0)$ 在單位圓 $\\Gamma:x^2+y^2=1$ 上。試問 $\\Gamma$ 上除了 $A$ 點以外，還有幾個點到直線 $L:y=2x$ 的距離，等於 $A$ 點到 $L$ 的距離？',
    answer: '3',
    hasImage: false,
  },
  {
    id: '17a50e7342d',
    chapter: '直線與圓',
    question: '圓過 $A(0,2)$、$B(4,10)$ 且與 $x$ 軸正向相切，求此圓的方程式。',
    answer: '$(x-4)^2+(y-5)^2=25$',
    hasImage: false,
  },
  {
    id: '17a50e87ca3',
    chapter: '直線與圓',
    question:
      '若圓 $C$ 通過點 $A(4,2)$ 及點 $B(1,-5)$，且其圓心在直線 $L:x-3y-7=0$ 上，求圓 $C$ 方程式。',
    answer: '$(x-\\frac52)^2+(y+\\frac32)^2=\\frac{29}2$',
    hasImage: false,
  },
  {
    id: '17a50ebac7c',
    chapter: '直線與圓',
    question:
      '設 $\\Gamma$ 為坐標平面上通過 (7,0) 與 $(0,\\frac72)$ 兩點的圓。試選出正確的選項。\n(1) $\\Gamma$ 的半徑大於或等於 5\n(2) 當 $\\Gamma$ 的半徑達到最小值時，$\\Gamma$ 通過原點\n(3) $\\Gamma$ 與直線 $x+2y=6$ 有交點\n(4) $\\Gamma$ 的圓心不可能在第四象限\n(5) 若 $\\Gamma$ 圓心在第三象限，則 $\\Gamma$ 半徑大於 8',
    answer: '(2)(5)',
    hasImage: false,
  },
  {
    id: '17a50ee3140',
    chapter: '直線與圓',
    question:
      '設 $\\Gamma$ 為坐標平面上的圓，點 (0,0) 在 $\\Gamma$ 的外部且點 (2,6) 在 $\\Gamma$ 的內部。選出正確選項。\n(1) $\\Gamma$ 的圓心不可能在第二象限\n(2) $\\Gamma$ 的圓心可能在第三象限且此時 $\\Gamma$ 的半徑必大於 10\n(3) $\\Gamma$ 的圓心可能在第一象限且此時 $\\Gamma$ 的半徑必小於 10\n(4) $\\Gamma$ 的圓心可能在 $x$ 軸上且此時圓心的 $x$ 坐標必小於 10\n(5) $\\Gamma$ 的圓心可能在第四象限且此時 $\\Gamma$ 的半徑必大於 10',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '17a50f2d913',
    chapter: '直線與圓',
    question:
      '坐標平面上有一圓 $C$，圓心為 $P$ 點，恰在直線 $L$ 上。將 $L$ 向左或向右平移 12 單位之後恰與圓 $C$ 相切；將 $L$ 向上或向下平移 5 單位之後也可與圓 $C$ 相切。求：\n(1) 直線 $L$ 的斜率 (2) 圓 $C$ 的半徑 ',
    answer: '(1) $\\pm\\frac5{12}$ (2) $\\frac{60}{13}$',
    hasImage: false,
  },
  {
    id: '17a50f44f2b',
    chapter: '直線與圓',
    question:
      '坐標平面上圓 $C:x^2+y^2+14x+8y-16=0$ 向右移 $p$ 單位再向上移 $q$ 單位之後，可使圓心落在第一象限且與兩坐標軸都相切，求數對 $(p,q)$。',
    answer: '(16,13)',
    hasImage: false,
  },
  {
    id: '17a2dd2d0b1',
    chapter: '直線與圓',
    question: '正五邊形 $ABCDE$，如圖。試比較五個邊長中的斜率大小。',
    answer: '$m_{CD}>m_{AE}>m_{BC}>m_{DE}>m_{AB}$',
    hasImage: true,
  },
  {
    id: '17a2dd465e2',
    chapter: '直線與圓',
    question: '已知 $\\overline{AB}$ 斜率為 2，若 $A(3,7)$、$B(-1,b)$，求 $b$。',
    answer: '-1',
    hasImage: false,
  },
  {
    id: '17a2dd59cf5',
    chapter: '直線與圓',
    question: '由 $A$ 向右移 5，再向上移 $y$ 到達 $B$ 點，若 $\\overline{AB}$ 的斜率為 2，求 $y$。',
    answer: '10',
    hasImage: false,
  },
  {
    id: '17a2dd669cd',
    chapter: '直線與圓',
    question: '設直線方程式 $kx+(k-6)y=1$ 的斜率為 2，求 $k$。',
    answer: '4',
    hasImage: false,
  },
  {
    id: '17a348a3b3e',
    chapter: '直線與圓',
    question:
      '三點 $P(1,a)$，$Q(2,a+3)$，$R(-1,5)$，若：\n(1) 在同一直線上，求 $a$\n(2) $\\angle PQR=90\\du$，求 $a$',
    answer: '(1) 11 (2) 1',
    hasImage: false,
  },
  {
    id: '1815da6c177',
    chapter: '直線與圓',
    question: '求過點 $(3,4)$ 且與直線 $L:2x-5y=7$ 垂直的直線方程式。',
    answer: '$5x+2y=23$',
    hasImage: false,
  },
  {
    id: '17a34943d7f',
    chapter: '直線與圓',
    question: '已知 $A(3,4)$，$B(-5,2)$，求 $\\overline{AB}$ 的垂直平分線方程式。',
    answer: '$4x+y=-1$',
    hasImage: false,
  },
  {
    id: '17a3495873a',
    chapter: '直線與圓',
    question:
      '坐標平面上直線 $L$ 與 $x$ 軸交於 $(-k,0)$，與 $y$ 軸交於 $(0,2k)$，且點 $(9,8)$ 在 $L$ 上，求 $k$。',
    answer: '-5',
    hasImage: false,
  },
  {
    id: '17a349b3a65',
    chapter: '直線與圓',
    question:
      '平面上直線 $L:2x+6y=4$，請問下列哪一個選項的直線與 $L$ 相平行？哪一個選項的直線與 $L$ 相垂直？(1) $3x-9y=1$\n(2) $3x-y=1$ (3) $x+3y=1$ (4) $3x+9y=6$',
    answer: '(3)；(2)',
    hasImage: false,
  },
  {
    id: '1815dbfad29',
    chapter: '直線與圓',
    question: '直線 $ax+y=2$ 與 $4x-3y=b$ 重合，求數對 $(a,b)$。',
    answer: '$(-\\frac43,-6)$',
    hasImage: false,
  },
  {
    id: '17a34a1e673',
    chapter: '直線與圓',
    question: '點 $(2,k)$ 到直線 $3x-4y=1$ 的距離為 3，求 $k$。',
    answer: '$5\\lor-\\frac52$',
    hasImage: false,
  },
  {
    id: '17a34a4c710',
    chapter: '直線與圓',
    question: '求坐標平面上兩平行線 $L_1:5x+12y=3$ 與 $L_2:10x+24y=17$ 的距離。',
    answer: '$\\frac{11}{26}$',
    hasImage: false,
  },
  {
    id: '17a34abb772',
    chapter: '直線與圓',
    question: '不等式 $ax+by\\ge c$ 的圖形為下列哪一個選項，可使實數 $a$、$b$、$c$ 均小於 0？',
    answer: '(2)',
    hasImage: true,
    style: { width: '100%' },
  },
  {
    id: '1815dd688e8',
    chapter: '直線與圓',
    question:
      '坐標平面上，直線 $y=2x$ 與直線 $y=-3x+5$ 將坐標平面分割成四個區域。試問下列哪一個選項的點會和點 (1,1) 在同一個區域？(1) (20,-56) (2) (13,-33)\n(3) (-1,1) (4) (-15,-29) (5) (-20,-29)',
    answer: '(1)',
    hasImage: false,
  },
  {
    id: '17a36690e96',
    chapter: '直線與圓',
    question: '求圓心 (1,-3) 且半徑為 4 的圓方程式。',
    answer: '$(x-1)^2+(y+3)^2=16$',
    hasImage: false,
  },
  {
    id: '17a366ab9d9',
    chapter: '直線與圓',
    question: '已知 $x^2+pxy+qy^2+4x-6y-5=0$ 為圓，求 $p$、$q$、圓心、半徑。',
    answer: '0；1；(-2,3)；$3\\sqrt2$',
    hasImage: false,
  },
  {
    id: '17a3671805f',
    chapter: '直線與圓',
    question: '直線 $L:3x+5y=1$ 向右平移 4 單位再向上平移 7 單位，求所成圖形的方程式。',
    answer: '$3x+5y=-22$',
    hasImage: false,
  },
  {
    id: '17a36731378',
    chapter: '直線與圓',
    question:
      '圓 $x^2+y^2-6x+4y+1=0$ 向左移 $h$ 單位再向上移 $k$ 單位，所成圖形的方程式為 $x^2+y^2+2x-10y+p=0$，求 $h$、$k$、$p$。',
    answer: '4；7；14',
    hasImage: false,
  },
  {
    id: '17a3677e6c4',
    chapter: '直線與圓',
    question: '若點 $(a,-a)$ 在圓 $x^2+y^2+3x=0$ 的內部，求 $a$ 的範圍。',
    answer: '$-\\frac32<a<0$',
    hasImage: false,
  },
  {
    id: '17a3678cae7',
    chapter: '直線與圓',
    question: '滿足 $4\\le x^2+y^2\\le10$ 的點 $(x,y)$ 所成區域面積為？',
    answer: '$6\\pi$',
    hasImage: false,
  },
  {
    id: '17a367d7b20',
    chapter: '直線與圓',
    question: '若圓 $x^2+y^2+kx-3ky+k+4=0$ 與直線 $x-y=0$ 不相交，求 $k$ 的範圍。',
    answer: '$-2<k<4$',
    hasImage: false,
  },
  {
    id: '17a367e6585',
    chapter: '直線與圓',
    question: '圓 $x^2+y^2=9$ 與直線 $3x+4y=5$ 交於 $P$、$Q$ 兩點，求弦長 $\\overline{PQ}$。',
    answer: '$4\\sqrt2$',
    hasImage: false,
  },
  {
    id: '17a36834824',
    chapter: '直線與圓',
    question: '求點 $A(7,-2)$ 對圓 $(x-3)^2+(y+4)^2=5$ 所作的切線段長度。',
    answer: '$\\sqrt{15}$',
    hasImage: false,
  },
  {
    id: '17a36848471',
    chapter: '直線與圓',
    question: '點 $A(3,1)$ 在圓 $(x+2)^2+(y-5)^2=41$ 上，求過 $A$ 點且與圓相切的切線方程式。',
    answer: '$5x-4y=11$',
    hasImage: false,
  },
  {
    id: '1815e0b4e7b',
    chapter: '直線與圓',
    question: '在坐標平面上 (7,5) 處有一光源，將圓 $x^2+(y-1)^2=1$ 投影到 $x$ 軸的影長為？',
    answer: '$\\frac{16}3$',
    hasImage: false,
  },
  {
    id: '1815e0cac72',
    chapter: '直線與圓',
    question:
      '坐標平面上，一圓通過點 (-2,7)，與直線 $4x+3y-14=0$ 相切於點 (-1,6)，若圓方程式 $x^2+y^2+ax+by+c=0$，求 $a$、$b$、$c$。',
    answer: '10；-6；9',
    hasImage: false,
  },
  {
    id: '1815e15c070',
    chapter: '直線與圓',
    question:
      '設 $A(1,1)$、$B(3,5)$、$C(5,3)$、$D(0,-7)$、$E(2,-3)$ 及 $F(8,-6)$ 為坐標平面上的六個點。若直線 $L$ 分別與三角形 $ABC$ 及三角形 $DEF$ 各恰有一個交點，求 $L$ 的斜率之最小可能值。',
    answer: '-3',
    hasImage: false,
  },
  {
    id: '1815e187ec4',
    chapter: '直線與圓',
    question:
      '平面上有一個直角三角形，三邊的斜率為 $m_1$、$m_2$、$m_3$，若 $m_1>m_2>m_3$。則下列哪些必定為真？(1) $m_1m_2=-1$ (2) $m_1m_3=-1$\n(3) $m_1>0$ (4) $m_2\\le0$ (5) $m_3<0$',
    answer: '(3)(5)',
    hasImage: false,
  },
  {
    id: '1815e1af7c8',
    chapter: '直線與圓',
    question:
      '坐標平面上有兩條平行直線。它們的 $x$ 截距相差 20，$y$ 截距相差 15。求這兩條平行線的距離。',
    answer: '12',
    hasImage: false,
  },
  {
    id: '1815e1d140a',
    chapter: '直線與圓',
    question:
      '平面上兩平行線如圖，若 $L_2$ 的 $x$ 截距是 $L_1$ 的 $x$ 截距之 3 倍，$L_2$ 的 $y$ 截距比 $L_1$ 的 $y$ 截距多 10，且 $L_1$、$L_2$ 與兩坐標軸所圍成的梯形面積為 80，求 $L_1$ 的方程式。',
    answer: '$5x+4y=20$',
    hasImage: true,
  },
];

// 三角比
const trigonometric: Question[] = [
  {
    id: '1885b8c35f1',
    chapter: '三角比',
    question:
      '根據法令規定，無人機飛航高度須在 120 公尺以下。小明操縱一架無人機欲拍攝調查某聚落狀況，已知該無人機的遙控器最大操控距離為 1000 公尺，若小明欲得到最大範圍的拍攝視野 (即最大高度)，則小明與該聚落的距離不得大於幾公尺? (四捨五入至整數位，三角函數值可按計算機)',
    answer: '993',
    hasImage: false,
  },
  {
    id: '1885b906fa0',
    chapter: '三角比',
    question:
      '如圖，扇形 $OAB$ 的中心角 $\\angle AOB=90\\du$，$\\overline{OA}=\\overline{OB}=1$，$P$ 是 $\\arc{AB}$ 上的點，下列選項何者正確？(多選)\n(1) $\\overline{OM}=\\cos\\theta$\n(2) $\\overline{MP}=\\sin\\theta$\n(3) $\\overline{MN}=\\sin\\theta$\n(4) $\\overline{ON}=\\sin\\theta\\cos\\theta$\n(5) $\\overline{PN}=\\sin^2\\theta$',
    answer: '(1)(2)(5)',
    hasImage: true,
  },
  {
    id: '186f24d355a',
    chapter: '三角比',
    question: '已知兩點極坐標 $A[5,190\\du]$, $B[3,70\\du]$，求 $\\overline{AB}$。',
    answer: '7',
    hasImage: false,
  },
  {
    id: '1855e7422e3',
    chapter: '三角比',
    question: '圖為 7 個全等的正六邊形組成的圖形，試求 $\\cos\\theta$。',
    answer: '$\\frac{10}{\\sqrt{247}}$',
    hasImage: true,
  },
  {
    id: '1855e33adab',
    chapter: '三角比',
    question:
      '坐標平面上，$O$ 為原點，已知點 $C$ 為 $\\overline{AB}$ 中點，且 $A[2,\\theta_1]$，$B[4,\\theta_2]$，$\\cos\\theta_1=\\dfrac35$，$0\\du<\\theta_1<\\theta_2<180\\du$。若 $\\angle AOB=90\\du$，則點 $C$ 的直角坐標為 $(\\textcirc{5-1}\\textcirc{5-2},\\textcirc{5-3})$。',
    answer: '(-1,2)',
    hasImage: false,
  },
  {
    id: '1855e313f18',
    chapter: '三角比',
    question:
      '如圖，$\\triangle ABC$ 中，$\\angle C=90\\du$，$\\overline{AC}=8$，$\\overline{BC}=6$，$\\overline{CD}\\perp\\overline{AB}$，點 $E$ 在 $\\overline{AB}$ 上，試選出正確的選項。\n(1) $\\cos\\angle ACD=\\dfrac45$\n(2) 若 $E$ 為 $\\overline{AB}$ 中點，則 $\\sin\\angle CEB:\\sin\\angle ECB=6:5$\n(3) 若 $E$ 為 $\\overline{AB}$ 中點，則 $\\sin\\angle CEB=\\dfrac{24}{25}$\n(4) 若 $\\overline{CE}$ 為 $\\angle ACB$ 的角平分線，則 $\\overline{CE}=\\dfrac{12\\sqrt2}7$\n(5) $\\triangle ACE$、$\\triangle BCE$ 外接圓半徑比為 4:3',
    answer: '235',
    hasImage: true,
  },
  {
    id: '1855882edca',
    chapter: '三角比',
    question: '試求 $30\\du$、$45\\du$、$60\\du$ 的正弦值、餘弦值、正切值。',
    answer: '',
    hasImage: false,
  },
  {
    id: '185152cf2f8',
    chapter: '三角比',
    question:
      '在坐標平面上的原點上有一大樓，今小明在大樓附近散步，在第 $t$ 分鐘時的位置 $(x,y)$ 可表示成 $\\begin{cases}x=-1+2\\cos(60\\du t)\\\\y=2\\sin(60\\du t)\\end{cases}$。小明在第 3 分鐘時仰望大樓頂端，發現仰角為 $30\\du$，在第 5 分鐘時再度仰望大樓頂端，發現仰角為 $\\theta$，求 $\\tan\\theta$。',
    answer: '1',
    hasImage: false,
  },
  {
    id: '1851526f05b',
    chapter: '直線與圓',
    question:
      "設平面上 5 點 $A,B,C,B',C'$ 共圓，若 $\\angle ABC+\\angle AB'C'=90\\du$，$\\overline{AC}=1$ 且 $\\overline{AC'}=\\sqrt3$，則 $\\angle ABC=\\textcirc{5-1}\\textcirc{5-2}\\du$。",
    answer: '$30\\du$',
    hasImage: false,
  },
  {
    id: '184d388229b',
    chapter: '三角比',
    question:
      '於台東鹿野高台舉辦的熱氣球嘉年華，在台灣頗具盛名。為了簡化計算，因此假設熱氣球僅垂直於地面上升與下降，並不進行水平移動。熱氣球是藉由熱空氣上升的原理而升空的，上升的速度為每秒 5 公尺，今小良於地面 $O$ 點觀測熱氣球，試計算下列各小題：',
    answer: '',
    hasImage: false,
  },
  {
    id: '184d38c14c1',
    chapter: '三角比',
    question:
      '熱氣球 1 號從地面 $A$ 點上升，若 $O$ 點為觀測點且 $\\overline{OA}=50$，經過 10 秒後到達 $A_1$，再經過 10 秒後到達 $A_2$，如圖，則 $\\angle A_1OA_2$ 最接近下列哪一個選項？\n($\\tan^{-1}2=63.4\\du$) (單選題，6 分)\n(1) $15.3\\du$　(2) $16.6\\du$　(3) $17.2\\du$　(4) $18.5\\du$　(5) $19.7\\du$',
    answer: '4',
    hasImage: true,
  },
  {
    id: '184d39003c2',
    chapter: '三角比',
    question:
      '熱氣球 1 號從地面 $A$ 點上升，經過 10 秒後到達 $A_1$，熱氣球 2 號從地面 $B$ 點上升，經過 6 秒後，到達 $B_1$，小良於地面 $O$ 點 ($O$ 不在 $\\overline{AB}$ 上) 測得 $\\overline{OA}=50$ 公尺，$\\overline{OB}=40$ 公尺，若兩熱氣球在空中的距離為 105 公尺，求 $\\cos\\angle A_1OB_1$。(非選擇題，9 分)',
    answer: '$-\\frac{141\\sqrt2}{400}$',
    hasImage: false,
  },
  {
    id: '184a7faed1d',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，$a,b,c$ 分別為 $\\angle A,\\angle B,\\angle C$ 之對邊長。若 $\\triangle ABC$ 之面積為 $\\dfrac1{14}(b^2+c^2-a^2)$，求 $\\tan A$。',
    answer: '$\\frac27$',
    hasImage: false,
  },
  {
    id: '184a4fa0ea3',
    chapter: '三角比',
    question:
      '如圖，$P$ 為 $\\triangle ABC$ 內部一點，且 $\\angle ACB=\\angle BPC=90\\du$，若 $\\overline{BC}=5$，$\\overline{AC}=10$，$\\overline{BP}=4$，則 $\\overline{AP}$ 長為 $\\sqrt{\\textcirc{5-1}\\textcirc{5-2}}$。',
    answer: '61',
    hasImage: true,
  },
  {
    id: '1849312921a',
    chapter: '平面向量',
    question:
      '設 $\\theta_1$、$\\theta_2$、$\\theta_3$、$\\theta_4$ 分別為第一、二、三、四象限角，且都介於 0 與 $2\\pi$ 之間，已知 $|\\sin\\theta_1|=|\\sin\\theta_2|=a$，$|\\sin\\theta_3|=|\\sin\\theta_4|=b$。試選出正確的選項。\n(1) $\\cos\\theta_2=\\sqrt{1-a^2}$\n(2) $\\theta_1+\\theta_2=\\pi$\n(3) 若 $b=\\dfrac14$，則 $\\theta_3+\\dfrac\\pi2<\\theta_4$\n(4) 若 $a=b$，則 $\\theta_4-\\theta_2=\\pi$\n(5) 若 $a>b$，則 $\\theta_2-\\theta_1>\\theta_4-\\theta_3$',
    answer: '234',
    hasImage: false,
  },
  {
    id: '1848b7f615e',
    chapter: '三角比',
    question:
      '已知四邊形 $ABCD$ 為圓內接四邊形，$\\overline{AB}=4$，$\\overline{BC}=\\overline{CD}=2$，$\\overline{AD}=3$，則四邊形 $ABCD$ 面積為 $\\dfrac{\\textcirc{7-1}\\sqrt{\\textcirc{7-2}\\textcirc{7-3}}}{\\textcirc{7-4}}$。(化為最簡根式)',
    answer: '7154',
    hasImage: false,
  },
  {
    id: '183d8d2ca73',
    chapter: '三角比',
    question:
      '在 $\\triangle ABC$ 中，已知兩個邊長 $\\overline{AB}=4$，$\\overline{BC}=3$，若 $\\angle A$ 有最大值 $\\theta$，則 $\\sin\\theta=\\dfrac{\\textcirc{17-1}}{\\textcirc{17-2}}$。(化為最簡分數)',
    answer: '34',
    hasImage: false,
  },
  {
    id: '183d770fc17',
    chapter: '三角比',
    question:
      '設 $\\triangle ABC$ 中，$\\angle A=30\\du$ 且 $\\overline{AB}=8$，試選出正確的選項。\n(1) 若 $\\overline{AC}=4$，則可求出唯一的 $\\triangle ABC$ 面積\n(2) 若 $\\overline{BC}=4$，則可求出唯一的 $\\triangle ABC$ 面積\n(3) 若 $\\overline{BC}=5$，則可求出唯一的 $\\triangle ABC$ 面積\n(4) 若 $\\overline{BC}=6$，則可求出唯一的 $\\triangle ABC$ 面積\n(5) 若 $\\overline{BC}=8$，則可求出唯一的 $\\triangle ABC$ 面積',
    answer: '125',
    hasImage: false,
  },
  {
    id: '183d75a9217',
    chapter: '三角比',
    question:
      '如圖是一個圓形步道，小明用同樣的步伐由 B 點開始以逆時針繞著圓形步道健走，每走 360 步恰好可以繞完圓形步道一圈。小明預計每走 45 步就停下來喘口氣。當在 e 區內 (不包含 D、E) 停留的時候他都會吃一塊餅乾，試問小明從開始健走，到第 100 次停下來的時候，總共吃了幾塊餅乾？\n(1) 10　(2) 11　(3) 12　(4) 13　(5) 14',
    answer: '3',
    hasImage: true,
  },
  {
    id: '183d744c61e',
    chapter: '三角比',
    question:
      '在 $\\triangle ABC$ 中，$\\angle A=135\\du$，$\\overline{AB}=\\sqrt2$，$\\overline{AC}=2$。設 $G$ 為 $\\triangle ABC$ 的重心，則 $\\overline{AG}=\\dfrac{\\sqrt{\\textcirc{16-1}}}{\\textcirc{16-2}}$。(化為最簡根式)',
    answer: '23',
    hasImage: false,
  },
  {
    id: '183d72dcdd5',
    chapter: '三角比',
    question:
      '在 $\\triangle ABC$ 中，設 $\\overline{AB}=c$，$\\overline{BC}=a$，$\\overline{AC}=b$，且 $\\overline{AB}$、$\\overline{BC}$、$\\overline{AC}$ 上的高分別為 $h_c$、$h_a$、$h_b$，則下列哪些選項的條件有可能成立？\n(1) $a:b:c=2:3:4$\n(2) $\\sin A:\\sin B:\\sin C=\\sqrt7:\\sqrt{11}:(\\sqrt6+\\sqrt{12})$\n(3) $h_a:h_b:h_c=2:3:5$\n(4) $\\sin A$、$\\sin B$、$\\sin C$ 都大於 $\\dfrac{\\sqrt3}2$\n(5) $\\sin A=\\sin B=\\dfrac12$，$\\sin C=\\dfrac{\\sqrt3}2$',
    answer: '1235',
    hasImage: false,
  },
  {
    id: '17ea8dfc8d7',
    chapter: '三角比',
    question: '有向角 $\\theta=1250\\du$ 是第幾象限角？其最小正同界角為？',
    answer: '二；$170\\du$',
    hasImage: false,
  },
  {
    id: '17ea8e0314e',
    chapter: '三角比',
    question: '若 $\\theta$ 是第一象限角，則 $\\dfrac\\theta2$ 可為第幾象限角？',
    answer: '一或三',
    hasImage: false,
  },
  {
    id: '17ea8e074ad',
    chapter: '三角比',
    question: '$-19990\\du$ 是第幾象限角？其最小正同界角為？',
    answer: '二；$170\\du$',
    hasImage: false,
  },
  {
    id: '17ea8e0bef4',
    chapter: '三角比',
    question: '若 $\\theta$ 是第二象限角，則 $\\dfrac\\theta3$ 可為第幾象限角？',
    answer: '一或二或四',
    hasImage: false,
  },
  {
    id: '17ea8e129aa',
    chapter: '三角比',
    question:
      '將下列各點的極坐標換為直角坐標：\n(1) $[6,150\\du]$ (2) $[4,-300\\du]$ (3) $[3,270\\du]$',
    answer: '(1) $(-3\\sqrt3,3)$ (2) $(2,2\\sqrt3)$ (3) $(0,-3)$',
    hasImage: false,
  },
  {
    id: '17ea8e1812a',
    chapter: '三角比',
    question: '將下列各點的直角坐標換為極坐標：\n(1) $(-4,4)$ (2) $(\\sqrt3,-3)$ (3) $(0,3)$',
    answer: '(1) $[4\\sqrt2,135\\du]$ (2) $[2\\sqrt3,300\\du]$ (3) $[3,90\\du]$',
    hasImage: false,
  },
  {
    id: '17ea8e21395',
    chapter: '三角比',
    question: '將下列極坐標換為直角坐標：\n(1) $[2,60\\du]$ (2) $[8,-315\\du]$ (3) $[5,960\\du]$',
    answer: '(1) $(1,\\sqrt3)$ (2) $(4\\sqrt2,4\\sqrt2)$ (3) $(\\frac{-5}2,\\frac{-5\\sqrt3}2)$',
    hasImage: false,
  },
  {
    id: '17ea8e26b26',
    chapter: '三角比',
    question: '將下列直角坐標換為極坐標：\n(1) $(-3,0)$ (2) $(6,-6)$ (3) $(-3,3\\sqrt3)$',
    answer: '(1) $[3,180\\du]$ (2) $[6\\sqrt2,315\\du]$ (3) $[6,120\\du]$',
    hasImage: false,
  },
  {
    id: '17ea8e31e23',
    chapter: '三角比',
    question:
      '(1) 標準位置角 $\\theta$ 的終邊通過點 $P(4,-3)$，求 $\\sin\\theta$、$\\cos\\theta$、$\\tan\\theta$。\n(2) 標準位置角 $\\phi$ 的終邊通過點 $Q(-5,12)$，求 $\\sin\\phi$、$\\cos\\phi$、$\\tan\\phi$。',
    answer: '$-\\frac35$；$\\frac45$；$-\\frac34$',
    hasImage: false,
  },
  {
    id: '17ea8e39f4b',
    chapter: '三角比',
    question:
      '平面上點 $P(k,-4)$ 為有向角 $\\theta$ 終邊之一點，且 $\\cos\\theta=-\\dfrac45$，求 $k$、$\\tan\\theta$。',
    answer: '$-\\frac{16}3$；$\\frac34$',
    hasImage: false,
  },
  {
    id: '17ea8e4fbb4',
    chapter: '三角比',
    question:
      '標準位置角 $\\theta$ 的終邊通過：\n(1) 點 $(4,-3)$，求 $\\sin\\theta$、$\\cos\\theta$、$\\tan\\theta$\n(2) 點 $(-5,-12)$，求 $\\sin\\theta$、$\\cos\\theta$、$\\tan\\theta$',
    answer:
      '(1) $-\\frac35$；$\\frac45$；$-\\frac34$ (2) $-\\frac{12}{13}$；$-\\frac5{13}$；$\\frac{12}5$',
    hasImage: false,
  },
  {
    id: '17ea8e5514b',
    chapter: '三角比',
    question:
      '若角 $\\theta$ 的終邊上有一點 $P(x,4)$，且 $\\cos\\theta=-\\dfrac35$，求 $\\tan\\theta$。',
    answer: ' $-\\frac43$',
    hasImage: false,
  },
  {
    id: '17ea8e64eae',
    chapter: '三角比',
    question:
      '已知 $\\theta$ 為第三象限角且滿足 $\\cos\\theta=-\\dfrac23$，求 $\\sin\\theta$、$\\tan\\theta$。',
    answer: '$-\\frac{\\sqrt5}3$；$\\frac{\\sqrt5}2$',
    hasImage: false,
  },
  {
    id: '17ea8e86369',
    chapter: '三角比',
    question:
      '設 $\\theta$ 為有向角，若 $\\frac{3\\tan\\theta+1}{4\\tan\\theta-5}=15$，求 $2\\sin\\theta-\\cos\\theta$。',
    answer: '$\\pm1$',
    hasImage: false,
  },
  {
    id: '17ea8e8fefa',
    chapter: '三角比',
    question:
      '若點 $P(\\tan\\theta,\\cos\\theta)$ 在第二象限內，則：\n(1) $\\theta$ 是第幾象限角？\n(2) 點 $Q(\\dfrac{\\sin\\theta}{\\cos\\theta},\\dfrac1{\\sin\\theta})$ 在第幾象限？',
    answer: '(1) 四 (2) 三',
    hasImage: false,
  },
  {
    id: '17ea8e9b39f',
    chapter: '三角比',
    question:
      '已知 $\\cos\\theta=-\\dfrac23$，且 $\\theta$ 為第二象限角，求 $\\sin\\theta$、$\\tan\\theta$。',
    answer: '$\\frac{\\sqrt5}3$；$-\\frac{\\sqrt5}2$',
    hasImage: false,
  },
  {
    id: '17ea8ea165a',
    chapter: '三角比',
    question:
      '若有向角 $\\theta$ 滿足 $\\dfrac{2\\tan\\theta-1}{\\tan\\theta+2}=\\dfrac18$，求 $2\\sin\\theta+3\\cos\\theta$。',
    answer: '$\\pm\\sqrt{13}$',
    hasImage: false,
  },
  {
    id: '17ea8eaaabf',
    chapter: '三角比',
    question:
      '若點 $P(\\sin\\theta\\cos\\theta,\\dfrac{\\tan\\theta}{\\cos\\theta})$ 在第二象限內，則角 $\\theta$ 的終邊落在第幾象限？',
    answer: '二',
    hasImage: false,
  },
  {
    id: '17ea8eb060e',
    chapter: '三角比',
    question:
      '化簡 $\\sin120\\du\\times\\cos180\\du\\times\\tan300\\du$$-\\sin^245\\du\\times\\tan315\\du$。',
    answer: '2',
    hasImage: false,
  },
  {
    id: '17ea8eb7a51',
    chapter: '三角比',
    question:
      '求 $\\sin60\\du\\cos150\\du-\\cos135\\du\\sin225\\du$$+\\dfrac{\\tan300\\du}{\\cos180\\du}$。',
    answer: '$-\\frac54+\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17ea8ebe0bd',
    chapter: '三角比',
    question:
      '已知 $\\cos\\theta=-\\dfrac12$，則：\n(1) 若 $0\\du<\\theta<180\\du$，求 $\\theta$\n(2) 若 $0\\du<\\theta<360\\du$，求 $\\theta$',
    answer: '(1) $120\\du$ (2) $120\\du\\lor240\\du$',
    hasImage: false,
  },
  {
    id: '17ea8ec3cc7',
    chapter: '三角比',
    question: '已知 $\\sin\\theta=-\\dfrac{\\sqrt3}2$，若 $0\\du<\\theta<360\\du$，求 $\\theta$。',
    answer: '$240\\du\\lor300\\du$',
    hasImage: false,
  },
  {
    id: '17ea8ecd941',
    chapter: '三角比',
    question:
      '設 $60\\du\\le\\theta\\le150\\du$，求：\n(1) $\\sin\\theta$ 的最大值、最小值\n(2) $\\cos\\theta$ 的最大值、最小值',
    answer: '(1) $1$；$\\frac12$ (2) $\\frac12$；$-\\frac{\\sqrt3}2$',
    hasImage: false,
  },
  {
    id: '17ea8ed6ba2',
    chapter: '三角比',
    question:
      '設 $120\\du\\le\\theta\\le 225\\du$，求：\n(1) $\\sin\\theta$ 的最大值、最小值\n(2) $\\cos\\theta$ 的最大值、最小值\n(3) $\\tan\\theta$ 的最大值、最小值',
    answer: '(1) $\\frac{\\sqrt3}2$；$-\\frac12$ (2) $-\\frac12$；$-1$ (3) $1$；$-\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17ea8ee568c',
    chapter: '三角比',
    question:
      '請問下列各選項的敘述，哪些正確？\n(1) 若 $\\theta$ 為任意角度，則 $(\\sin\\theta-1)(\\cos\\theta+1)\\le0$\n(2) 若 $\\theta$ 為第一象限角，則 $\\sin\\theta>\\cos\\theta$\n(3) 若 $\\theta$ 為第二象限角，則 $\\sin\\theta>\\cos\\theta$\n(4) 若 $\\theta$ 為第三象限角，則 $\\cos\\theta>\\tan\\theta$',
    answer: '(1)(3)',
    hasImage: false,
  },
  {
    id: '17ea8ef12ab',
    chapter: '三角比',
    question:
      '銳角 $\\theta$ 緩慢變動使餘弦值由 $\\dfrac5{13}$ 遞增為 $\\dfrac35$，則下列哪些選項的敘述正確？\n(1) 角 $\\theta$ 的大小呈現遞增現象\n(2) 正弦值隨 $\\theta$ 的變動而遞增\n(3) 正切值隨 $\\theta$ 的變動而遞減\n(4) 角 $\\theta$ 的變動過程中會經過 $45\\du$ 角\n(5) 角 $\\theta$ 的變動過程中，有某個角 $\\theta=\\theta_0$ 使 $\\tan\\theta_0=\\sqrt3$',
    answer: '(3)(5)',
    hasImage: false,
  },
  {
    id: '17ea8ef9b39',
    chapter: '三角比',
    question:
      '兩圓互相外切，半徑分別為 2 與 8，若連心線與外公切線的夾角為 $\\theta$，如圖，求 $\\sin\\theta$、$\\cos\\theta$、$\\tan\\theta$。',
    answer: '$\\frac35$；$\\frac45$；$\\frac34$',
    hasImage: true,
  },
  {
    id: '17ea8f04310',
    chapter: '三角比',
    question:
      '銳角 $\\triangle ABC$，$\\overline{AB}=50$，若 $\\sin B=\\dfrac35$，$\\cos C=\\dfrac8{17}$，求：(1) $\\overline{BC}$ (2) $\\triangle ABC$ 的面積',
    answer: '(1) 56 (2) 840',
    hasImage: false,
  },
  {
    id: '17ea8f08a2a',
    chapter: '三角比',
    question: '正方形 $ABCD$，$M$ 為 $\\overline{BC}$ 中點，求 $\\tan\\angle MAC$。',
    answer: '$\\frac13$',
    hasImage: false,
  },
  {
    id: '17ea8f11a98',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 的 $\\angle B$ 與 $\\angle C$ 為銳角，$\\overline{AB}=10$，若 $\\sin B=\\dfrac45$，$\\cos C=\\dfrac{15}{17}$，求：\n(1) $\\overline{BC}$ (2) $\\triangle ABC$ 的面積',
    answer: '(1) 21 (2) 84',
    hasImage: false,
  },
  {
    id: '17ea8f20bdf',
    chapter: '三角比',
    question:
      '如圖，$\\theta$ 為 $\\triangle ABC$ 之中 $\\angle ACB$ 的外角，$\\overline{AB}=4$，$\\overline{BC}=4\\sqrt3$，求 $sin\\theta$、$\\cos\\theta$、$\\tan\\theta$。',
    answer: '$\\frac12$；$-\\frac{\\sqrt3}2$；$-\\frac1{\\sqrt3}$',
    hasImage: true,
  },
  {
    id: '17ea8f39219',
    chapter: '三角比',
    question:
      '等腰梯形 $ABCD$，上底 $\\overline{AB}$ 的長比下底 $\\overline{CD}$ 少 $6$，$\\overline{BC}=\\overline{AD}=5$，求 $\\sin\\angle ABC$、$\\cos\\angle ABC$、$\\tan\\angle ABC$。',
    answer: '$\\frac45$；$-\\frac35$；$-\\frac43$',
    hasImage: false,
  },
  {
    id: '17ea8f419e3',
    chapter: '三角比',
    question: '作圖求：(1) $\\sin15\\du$ (2) $\\sin75\\du$。',
    answer: '(1) $\\frac{\\sqrt6-\\sqrt2}4$ (2) $\\frac{\\sqrt6+\\sqrt2}4$',
    hasImage: false,
  },
  {
    id: '17ea8f4a1df',
    chapter: '三角比',
    question: '作圖求：(1) $\\sin22.5\\du$ (2) $\\tan22.5\\du$。',
    answer: '(1) $\\frac{\\sqrt{2-\\sqrt2}}2$ (2) $\\sqrt2-1$',
    hasImage: false,
  },
  {
    id: '17ea8f4fe4a',
    chapter: '三角比',
    question: '設 $\\theta$ 為有向角，滿足 $2\\sin\\theta+3\\cos\\theta=0$，求 $\\tan\\theta$。',
    answer: '$-\\frac32$',
    hasImage: false,
  },
  {
    id: '17ea8f55181',
    chapter: '三角比',
    question:
      '若 $\\tan\\theta=\\dfrac23$，求 $\\dfrac{2\\sin\\theta-5\\cos\\theta}{3\\sin\\theta+\\cos\\theta}$。',
    answer: '$-\\frac{11}9$',
    hasImage: false,
  },
  {
    id: '17ea8f58c06',
    chapter: '三角比',
    question: '若 $3\\sin\\theta+5\\cos\\theta=0$，求 $\\tan\\theta$。',
    answer: '$-\\frac53$',
    hasImage: false,
  },
  {
    id: '17ea8f5e597',
    chapter: '三角比',
    question:
      '若 $\\tan\\theta=2$，求 $\\dfrac{2\\sin\\theta+4\\cos\\theta}{2\\sin\\theta-\\cos\\theta}$。',
    answer: '$\\frac83$',
    hasImage: false,
  },
  {
    id: '17ea8f64f4f',
    chapter: '三角比',
    question:
      '求 $\\sin^210\\du+\\sin^250\\du+\\sin^2200\\du+\\cos^210\\du$$+\\cos^250\\du+\\cos^2200\\du$',
    answer: '3',
    hasImage: false,
  },
  {
    id: '186820bb0b5',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=\\sqrt5$，$\\overline{AC}=\\sqrt7$，$\\overline{BC}=4$，求：\n(1) $\\sin^2A$　　(2) $\\triangle ABC$ 的面積',
    answer: '(1) $\\frac{31}{35}$ (2) $\\frac{\\sqrt{31}}2$',
    hasImage: false,
  },
  {
    id: '17ea8f6bcf2',
    chapter: '三角比',
    question:
      '銳角 $\\theta$，若 $\\sin\\theta+\\cos\\theta=\\dfrac54$，求：\n(1) $\\sin\\theta\\cos\\theta$　(2) $\\sin^3\\theta+\\cos^3\\theta$',
    answer: '(1) $\\frac9{32}$ (2) $\\frac{115}{128}$',
    hasImage: false,
  },
  {
    id: '17ea8f6faeb',
    chapter: '三角比',
    question: '$\\sin^2110\\du-\\sin^2400\\du+\\cos^2110\\du-\\cos^2400\\du$',
    answer: '0',
    hasImage: false,
  },
  {
    id: '17ea8f89829',
    chapter: '三角比',
    question:
      '設 $\\theta$ 為有向角，若 $\\sin\\theta-\\cos\\theta=\\dfrac13$，求：\n(1) $\\sin\\theta\\cos\\theta$　(2) $\\sin^3\\theta-\\cos^3\\theta$',
    answer: '(1) $\\frac49$ (2) $\\frac{13}{27}$',
    hasImage: false,
  },
  {
    id: '17ea8f8e564',
    chapter: '三角比',
    question: '設 $\\theta$ 為有向角，若 $2\\sin\\theta-\\cos\\theta=1$，求 $\\cos\\theta$。',
    answer: '$\\frac35\\lor-1$',
    hasImage: false,
  },
  {
    id: '17ea8f94860',
    chapter: '三角比',
    question: '設 $\\theta$ 為有向角，滿足 $2\\sin\\theta+\\cos\\theta=-1$，求 $\\sin\\theta$。',
    answer: '$0\\lor\\frac{-4}5$',
    hasImage: false,
  },
  {
    id: '17ea8f9d104',
    chapter: '三角比',
    question:
      '化成 $\\theta$ 的三角比：(1) $\\sin(90\\du+\\theta)$ (2) $\\sin(270\\du-\\theta)$ (3) $\\cos(\\theta-270\\du)$。',
    answer: '(1) $\\cos\\theta$ (2) $-\\cos\\theta$ (3) $-\\sin\\theta$',
    hasImage: false,
  },
  {
    id: '17ea8fa29fa',
    chapter: '三角比',
    question:
      '設有向角 $\\theta$ 不是 $90\\du$ 的整數倍，化簡 $\\dfrac{\\sin(\\theta-90\\du)}{\\cos(\\theta-180\\du)}+\\dfrac{\\cos(\\theta+90\\du)}{\\sin(\\theta+270\\du)\\times\\tan(-\\theta)}$',
    answer: '$0$',
    hasImage: false,
  },
  {
    id: '17ea8fb935b',
    chapter: '三角比',
    question:
      '化成 $\\theta$ 的三角比：\n(1) $\\sin(180\\du-\\theta)$，$\\sin(90\\du-\\theta)$\n(2) $\\cos(270\\du+\\theta)$，$\\cos(360\\du-\\theta)$\n(3) $\\cos(\\theta+180\\du)$，$\\cos(\\theta+270\\du)$\n(4) $\\sin(270\\du-\\theta)$，$\\sin(\\theta-180\\du)$',
    answer:
      '(1) $\\sin\\theta$；$\\cos\\theta$ (2) $\\sin\\theta$；$\\cos\\theta$ (3) $-\\cos\\theta$；$\\sin\\theta$ (4) $-\\cos\\theta$；$-\\sin\\theta$ ',
    hasImage: false,
  },
  {
    id: '17ea8fc3d48',
    chapter: '三角比',
    question:
      '設有向角 $\\theta$ 不是 $90\\du$ 的整數倍，化簡 $\\dfrac{\\sin(-\\theta)}{\\sin(\\theta+180\\du)}+\\dfrac{\\cos(-\\theta)}{\\cos(\\theta-180\\du)}+\\dfrac{\\tan(-\\theta)}{\\tan(\\theta+180\\du)}$',
    answer: '$-1$',
    hasImage: false,
  },
  {
    id: '17ea8fc7abc',
    chapter: '三角比',
    question: '若 $\\cos(-123\\du)=k$，求：\n(1) $\\sin597\\du$　(2) $\\tan213\\du$。',
    answer: '(1) $-\\sqrt{1-k^2}$ (2) $\\frac{-k}{\\sqrt{1-k^2}}$',
    hasImage: false,
  },
  {
    id: '17ea8fce8e1',
    chapter: '三角比',
    question: '若 $\\cos100\\du=k$，求：\n(1) $\\sin(-80\\du)$　(2) $\\tan(-260\\du)$。',
    answer: '(1) $-\\sqrt{1-k^2}$ (2) $\\frac{\\sqrt{1-k^2}}k$',
    hasImage: false,
  },
  {
    id: '17ea8fd586c',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，已知 $\\overline{AB}=5$，$\\overline{AC}=8$，$\\angle A=135\\du$，求 $\\triangle ABC$ 的面積。',
    answer: '$10\\sqrt2$',
    hasImage: false,
  },
  {
    id: '17ea8fe0799',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 的面積為 $50$，$D$ 在 $\\overline{AB}$ 上，$\\overline{AD}:\\overline{DB}=2:3$，$E$ 在 $\\overline{AC}$ 上，$\\overline{AE}:\\overline{EC}=1:4$，求 $\\triangle ADE$ 的面積。',
    answer: '4',
    hasImage: false,
  },
  {
    id: '17ea8fe7ec9',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，已知 $\\overline{AB}=9$，$\\overline{AC}=4$，$\\angle A=120\\du$，求 $\\triangle ABC$ 的面積。',
    answer: '$9\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17ea8ff12ab',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 的面積為 75，$D$、$E$、$F$ 分別在 $\\overline{AB}$、$\\overline{BC}$、$\\overline{CA}$ 上，若 $\\overline{AD}:\\overline{DB}=3:2$，$\\overline{BE}:\\overline{EC}=4:1$、$\\overline{CF}:\\overline{FA}=1:2$，求 $\\triangle DEF$ 的面積。',
    answer: '16',
    hasImage: false,
  },
  {
    id: '17ea9003cab',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 如圖，$\\angle B=60\\du$，$\\angle C=45\\du$，$\\overline{AC}=6$，求：(1) $\\overline{AB}$ (2) $\\overline{BC}$ (3) 外接圓半徑',
    answer: '(1) $2\\sqrt6$ (2) $3\\sqrt2+\\sqrt6$ (3) $2\\sqrt3$',
    hasImage: true,
  },
  {
    id: '17ea9013ab1',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，若 $\\angle A:\\angle B:\\angle C=2:3:7$，$a=\\overline{BC}$，$b=\\overline{AC}$，$c=\\overline{AB}$，求邊長比 $a:b:c$。',
    answer: '$2:2\\sqrt2:(\\sqrt6+\\sqrt2)$',
    hasImage: false,
  },
  {
    id: '17ea901c4df',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，$\\angle B=45\\du$，$\\angle C=30\\du$，$\\overline{AC}=8$，求：(1) $\\overline{AB}$ (2) $\\overline{BC}$ (3) 外接圓半徑',
    answer: '(1) $4\\sqrt2$ (2) $4+4\\sqrt3$ (3) $4\\sqrt2$',
    hasImage: true,
  },
  {
    id: '17ea902635b',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，若 $\\angle A:\\angle B:\\angle C=4:1:7$，$a=\\overline{BC}$，$b=\\overline{AC}$，$c=\\overline{AB}$，求邊長比 $a:b:c$。',
    answer: '$2\\sqrt{3}：(\\sqrt{6}-\\sqrt{2})：(\\sqrt{6}+\\sqrt{2})$',
    hasImage: false,
  },
  {
    id: '17ea90aa075',
    chapter: '三角比',
    question:
      '圓內接四邊形 $ABCD$，若 $\\angle{A}=120\\du$，$\\angle{B}=45$，$\\overline{BD}=15$，求 $\\overline{AC}$ 的長。',
    answer: '$5\\sqrt{6}$',
    hasImage: false,
  },
  {
    id: '17ea90b0e2a',
    chapter: '三角比',
    question:
      '圓內接四邊形 $ABCD$，若 $\\overline{AC}=8$，$\\angle BAD=60\\du$，$\\angle ABC=45\\du$，求 $\\overline{BD}$。',
    answer: '$4\\sqrt6$',
    hasImage: false,
  },
  {
    id: '17ea90bca1b',
    chapter: '三角比',
    question:
      '設 $\\triangle ABC$ 的 $\\overline{AB}=6$，$\\angle A=45\\du$，$\\angle B=120\\du$，求：\n(1) $\\overline{AB}$ 在 $\\overline{AC}$ 的投影長度\n(2) $\\overline{AB}$ 在 $\\overleftrightarrow{BC}$ 上的投影長度',
    answer: '(1) $3\\sqrt2$ (2) $3$',
    hasImage: false,
  },
  {
    id: '17ea90c4455',
    chapter: '三角比',
    question:
      '設 $\\triangle ABC$ 的 $\\overline{AB}=4$，$\\overline{BC}=5\\sqrt2$，$\\angle B=45\\du$，求 $\\overline{AC}$ 在 $\\overline{BC}$ 上的投影長。',
    answer: '$3\\sqrt2$',
    hasImage: false,
  },
  {
    id: '17ea90cdd49',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=2$，$\\overline{AC}=3$，$\\angle A=60\\du$，求： (1) $\\overline{BC}$ (2) $\\cos B$',
    answer: '(1) $\\sqrt7$ (2) $\\frac{\\sqrt7}{14}$',
    hasImage: false,
  },
  {
    id: '17ea90d1e03',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 如圖，$\\overline{AB}=5$，$\\overline{BC}=8$，$D$ 在 $\\overline{BC}$ 上且 $\\overline{BD}=6$，$\\overline{AD}=4$，求 $x$。',
    answer: '$\\sqrt{29}$',
    hasImage: true,
  },
  {
    id: '17ea90d8ced',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 的 $\\overline{AB}=3$，$\\overline{AC}=5$，$\\angle A=60\\du$，求 $\\overline{BC}$。',
    answer: '$\\sqrt{19}$',
    hasImage: false,
  },
  {
    id: '17ea90e0267',
    chapter: '三角比',
    question:
      '三角形的三邊長為 $\\overline{AB}=6$，$\\overline{BC}=7$，$\\overline{CA}=8$，若最大內角為 $\\theta$，求 $\\cos\\theta$。',
    answer: '$\\frac14$',
    hasImage: false,
  },
  {
    id: '186820ddb5d',
    chapter: '三角比',
    question:
      '如圖，三角形 $ABC$ 之三邊長為 $\\overline{AB}=7$，$\\overline{BC}=8$，$\\overline{CA}=9$，若 $ABDE$、$ACFG$ 皆為正方形，求 $\\overline{EG}$。',
    answer: '14',
    hasImage: true,
  },
  {
    id: '17ea90e51a3',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 的三邊長為 $\\overline{AB}=12$，$\\overline{BC}=14$，$\\overline{CA}=16$，求 $\\angle A$ 的內角平分線段長。',
    answer: '12',
    hasImage: false,
  },
  {
    id: '17ea90eb0aa',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 的三邊長各為 $\\overline{AB}=4$，$\\overline{BC}=5$，$\\overline{CA}=6$，求 $\\angle A$ 的內角平分線長。',
    answer: '$3\\sqrt2$',
    hasImage: false,
  },
  {
    id: '17ea8927413',
    chapter: '三角比',
    question:
      '圓內接四邊形 $ABCD$ 的四邊長為 $\\overline{AB}=5$，$\\overline{BC}=3$，$\\overline{CD}=3$，$\\overline{DA}=4$，求：\n(1) $\\overline{AC}$ (2) 此圓半徑 (3) 四邊形 $ABCD$ 面積',
    answer: '(1) $\\sqrt{29}$ (2) $\\frac{3\\sqrt{29}}{\\sqrt{35}}$ (3) $\\frac{9\\sqrt{35}}4$',
    hasImage: false,
  },
  {
    id: '17ea8923f68',
    chapter: '三角比',
    question:
      '圓內接四邊形 $ABCD$ 的四邊長為 $\\overline{AB}=3$，$\\overline{BC}=4$，$\\overline{CD}=4$，$\\overline{DA}=6$，求：\n(1) $\\overline{AC}$ (2) 此圓半徑 (3) 四邊形 $ABCD$ 面積',
    answer: '(1) $\\sqrt{34}$ (2)$\\frac{4\\sqrt{34}}{\\sqrt{55}}$ (3)$\\frac{9\\sqrt{55}}4$',
    hasImage: false,
  },
  {
    id: '17ea89353bd',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，若 $\\overline{AB}=2$，$\\overline{AC}=\\sqrt2$，$\\angle B=30\\du$，求 $\\overline{BC}$。',
    answer: '$\\sqrt3\\pm1$',
    hasImage: false,
  },
  {
    id: '17ea893f1fa',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，若 $\\overline{AB}=6\\sqrt2$，$\\overline{AC}=4\\sqrt3$，$\\angle B=45\\du$，求 $\\overline{BC}$。',
    answer: '$6\\pm2\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17ea89512df',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，若 $\\overline{AB}=9$，$\\overline{BC}=6$，$\\overline{CA}=7$，求：(1) $\\triangle ABC$ 的面積\n(2) 以 $\\overline{BC}$ 為底的高 (3) 內切圓半徑',
    answer: '(1) $2\\sqrt{110}$ (2) $\\frac{2\\sqrt{110}}3$ (3) $\\frac{2\\sqrt{110}}{11}$',
    hasImage: false,
  },
  {
    id: '17ea8957593',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，過 $A$、$B$、$C$ 的三中線依次為 5、6、7，求 $\\triangle ABC$ 的面積。',
    answer: '$8\\sqrt6$',
    hasImage: false,
  },
  {
    id: '17ea58dea11',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=4，\\overline{BC}=5，\\overline{CA}=6$，求：(1) $\\triangle ABC$ 的面積 (2) 內切圓半徑',
    answer: '(1) $\\frac{15\\sqrt7}4$ (2) $\\frac{\\sqrt{7}}{2}$',
    hasImage: false,
  },
  {
    id: '17ea896b284',
    chapter: '三角比',
    question: '$\\triangle ABC$ 三中線長各為 7、8、9，求 $\\triangle ABC$ 的面積。',
    answer: '$16\\sqrt5$',
    hasImage: false,
  },
  {
    id: '17ea89807ee',
    chapter: '三角比',
    question: '化簡：(1) $\\sin^{-1}\\frac{\\sqrt3}2$ (2) $\\sin^{-1}(-\\frac12)$',
    answer: '(1) $60\\du$ (2) $-30\\du$',
    hasImage: false,
  },
  {
    id: '17ea898c29f',
    chapter: '三角比',
    question: '化簡：(1) $\\cos^{-1}\\frac{\\sqrt3}2$ (2) $\\cos^{-1}(-\\frac12)$',
    answer: '(1) $30\\du$ (2) $120\\du$',
    hasImage: false,
  },
  {
    id: '17ea8993dcc',
    chapter: '三角比',
    question: '化簡：(1) $\\tan^{-1}1$ (2) $\\tan^{-1}(-1)$',
    answer: '(1) $45\\du$ (2) $-45\\du$',
    hasImage: false,
  },
  {
    id: '17ea899eeea',
    chapter: '三角比',
    question:
      '化簡 $\\sin^{-1}(\\frac12)+\\sin^{-1}(-\\frac{\\sqrt2}2)+\\sin^{-1}\\frac{\\sqrt3}2$。',
    answer: '$45\\du$',
    hasImage: false,
  },
  {
    id: '17ea89a4ec7',
    chapter: '三角比',
    question: '化簡 $\\cos^{-1}0+\\cos^{-1}\\frac12+\\cos^{-1}(-\\frac{\\sqrt2}2)$。',
    answer: '$285\\du$',
    hasImage: false,
  },
  {
    id: '17ea89ac11d',
    chapter: '三角比',
    question: '化簡 $\\tan^{-1}\\frac1{\\sqrt3}+\\tan^{-1}1+\\tan^{-1}(-\\sqrt3)$。',
    answer: '$15\\du$',
    hasImage: false,
  },
  {
    id: '17ea89b26a0',
    chapter: '三角比',
    question:
      '一小島四周 7 公里內設有水雷，有一船向正東方行駛，初見小船在北 $60\\du$ 東，行駛 5 公里後見小島在東北方，若航向不變，此船是否有危險？',
    answer: '是',
    hasImage: false,
  },
  {
    id: '17ea89cc79c',
    chapter: '三角比',
    question:
      '根據氣象預報，某颱風於某日下午 2 時的中心位置在鵝鑾鼻燈塔正南方 300 公里處，暴風半徑為 250 公里，以每小時 50 公里的速率朝「北 $30\\du$ 西」等速直線前進。設此颱風的速度方向及暴風半徑都不變，求鵝鑾鼻燈塔在此暴風圈內前後共計有幾小時？',
    answer: '8',
    hasImage: false,
  },
  {
    id: '17ea89dba3a',
    chapter: '三角比',
    question:
      '一小島四周 3 浬內設有水雷，有一船向正東方行，初見小島在北 $69\\du$ 東，行駛 5 浬後看見小島在北 $18\\du$ 東，若航向不變，此船是否有危險？(可用計算機)',
    answer: '是',
    hasImage: false,
  },
  {
    id: '17ea89e4fbf',
    chapter: '三角比',
    question:
      '某颱風於午 9 時的中心位置在燈塔正北方 500 公里處，暴風半徑為 300 公里，以每小時 $10\\sqrt{11}$ 公里的速率朝「南 $30\\du$ 西」等速直線前進。設此颱風的速度方向及暴風半徑都不變，求燈塔在此暴風圈内前後共計有小時？',
    answer: '10',
    hasImage: false,
  },
  {
    id: '17ea89f0591',
    chapter: '三角比',
    question:
      '司令臺上有一旗座，旗座上豎一旗竿，已知旗竿長 4 公尺，在地面某處測得司令臺、旗座、竿頂的仰角分別為 $45\\du$、$60\\du$、$75\\du$，求司令台的高度。',
    answer: '2 公尺',
    hasImage: false,
  },
  {
    id: '17ea8a01b7b',
    chapter: '三角比',
    question:
      '房屋上有一塔，塔頂豎一天線鐵桿，已知天線鐵桿高 30 公尺，在地面測得屋頂、塔項、桿頂的仰角分别為 $30\\du$、$45\\du$、$60\\du$，求房屋高度。',
    answer: '$15+5\\sqrt3$ 公尺',
    hasImage: false,
  },
  {
    id: '17da23d8644',
    chapter: '三角比',
    question:
      '已知 $\\cos\\theta\\ne0$，若 $P(3\\cos\\theta-2,2\\sin\\theta)$ 為直線 $y=3x+6$ 上一點，求 $\\tan\\theta$。',
    answer: '$\\frac92$',
    hasImage: false,
  },
  {
    id: '17da2373a0b',
    chapter: '三角比',
    question:
      '如圖所示，已知 $\\angle BAC=90\\du$，$\\overline{AH}=3$，$\\overline{AC}=\\overline{CD}=5$，且 $\\overline{AH}\\perp\\overline{BD}$，試問下列哪些選項是正確的？\n(1) $\\cos\\angle ACD=-\\frac35$\n(2) $\\sin\\angle CAD=\\frac3{\\sqrt{10}}$\n(3) $\\cos\\angle BAD=-\\frac1{\\sqrt{10}}$\n(4) $\\overline{AB}<3.5$\n(5) $\\overline{BH}<2.5$',
    answer: '(3)(5)',
    hasImage: true,
  },
  {
    id: '17da21136b8',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，已知 $\\angle A=90\\du$，$\\overline{AB}=3$，$\\overline{AC}=4$，今分別以 $\\overline{BC}$ 與 $\\overline{AC}$ 為邊長往外作正方形 $BDEC$ 與 $ACFG$，如圖，請選出正確的選項。\n(1) $\\sin\\angle ACD=-\\frac{7\\sqrt2}{10}$\n(2) $\\cos\\angle ECF=-\\frac35$\n(3) $\\triangle ACE$ 的面積為 $8$\n(4) $\\triangle CEF$ 的面積為 $8$\n(5) $\\overline{EF}=\\sqrt{73}$',
    answer: '(5)',
    hasImage: true,
  },
  {
    id: '17da2301857',
    chapter: '三角比',
    question:
      '如圖，在坐標平面上的 $\\triangle ABC$ 中，以 $B$、$C$ 為直徑兩端點作一圓交 $\\overline{AC}$ 於 $D$ 點，並連接 $\\overline{BD}$，若 $\\overline{AB}\\times\\overline{BC}=65\\sqrt2$，且 $\\overline{BD}=5$，則 $\\triangle ABC$ 的外接圓半徑為？\n(1) $5\\sqrt2$ (2) $\\frac{17}2$ (3) $\\frac{13\\sqrt2}2$ (4) $\\frac{25\\sqrt2}2$ (5) $13\\sqrt2$',
    answer: '(3)',
    hasImage: true,
  },
  {
    id: '17d7f0de9a2',
    chapter: '三角比',
    question:
      '如圖，$\\angle A=60\\du$，$\\overline{AC}=4$，$\\overline{AB}=10$，已知 $\\overline{AB}$ 為一段可彎曲的繩子，今取 $\\overline{AB}$ 上其中一點 $M$，以 $M$ 為支點逆時針旋轉 $B$ 點，使其為成一個三角形 ($B$、$C$ 不一定重疊，圍出封閉三角形即可)，求 $\\overline{AM}$ 的最大長度。',
    answer: '$40-20\\sqrt3$',
    hasImage: true,
  },
  {
    id: '17be22560e0',
    chapter: '三角比',
    question:
      '已知銳角三角形 $ABC$ 中，$\\overline{AB}=2$ 且 $\\overline{AC}=4$ 。若 $\\triangle ABC$ 的外接圓半徑為 $\\frac{4\\sqrt{14}}{7}$，求 $\\overline{BC}$。',
    answer: '$3\\sqrt{2}$',
    hasImage: false,
  },
  {
    id: '17aca900411',
    chapter: '三角比',
    question:
      '$\\theta$ 為銳角，若 $\\sin\\theta=\\dfrac{3}{5}$，求 $\\cos\\theta$、$\\tan\\theta$。',
    answer: '$\\frac45$；$\\frac34$',
    hasImage: false,
  },
  {
    id: '17aca9268fc',
    chapter: '三角比',
    question:
      '有一等腰三角形底邊為 10，頂角 $72\\du$，下列何者可以表示腰長？\n(1) $5\\sin36\\du$　　(2) $5\\tan36\\du$　　(3) $\\dfrac5{\\tan36\\du}$\n(4) $\\dfrac5{\\cos36\\du}$　　(5) $\\dfrac5{\\sin36\\du}$',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '17aca95e33b',
    chapter: '三角比',
    question: '$950\\du$ 是第幾象限角？其最小正同界角為？',
    answer: '三；$230\\du$',
    hasImage: false,
  },
  {
    id: '17aca9748af',
    chapter: '三角比',
    question:
      '若有向角 $\\theta$ 如圖所示，則 $\\theta$ 最接近：\n(1) $40\\du$　(2) $400\\du$　(3) $-320\\du$　(4) $-680\\du$',
    answer: '(4)',
    hasImage: true,
  },
  {
    id: '17aca9badeb',
    chapter: '三角比',
    question: '求平面上兩點 $P[3,70\\du]$ 與 $Q[4,160\\du]$ 的距離。',
    answer: '5',
    hasImage: false,
  },
  {
    id: '17aca9d9f29',
    chapter: '三角比',
    question: '將直角坐標化為極坐標：\n(1) (0,4)　　(2) $(-\\pi,0)$　　(3) (1,-1)',
    answer: '(1) $[4,90\\du]$ (2) $[\\pi,180\\du]$ (3) $[\\sqrt{2},315\\du]$',
    hasImage: false,
  },
  {
    id: '17acaa46a2f',
    chapter: '三角比',
    question:
      '請問 $\\sin73\\du$、$\\sin146\\du$、$\\sin219\\du$、$\\sin292\\du$、$\\sin365\\du$ 這五個數值的中位數是哪一個？',
    answer: '$\\sin365\\du$',
    hasImage: false,
  },
  {
    id: '17acaa9ade9',
    chapter: '三角比',
    question:
      '$$\\begin{array} {|c|c|}\\hline \\theta & \\sin\\theta & \\cos\\theta & \\tan\\theta \\\\\\hline 0\\du \\\\\\hline 90\\du \\\\\\hline 180\\du \\\\\\hline 270\\du \\\\\\hline 120\\du \\\\\\hline 135\\du \\\\\\hline 150\\du \\\\\\hline 240\\du \\\\\\hline \\end{array}$$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17ad14cb94a',
    chapter: '三角比',
    question: '取餘角，$\\sin(90\\du-\\theta)$、$\\cos(90\\du-\\theta)$。',
    answer: '$\\cos\\theta$；$\\sin\\theta$',
    hasImage: false,
  },
  {
    id: '17ad14d8dde',
    chapter: '三角比',
    question: '取補角，$\\sin(180\\du-\\theta)$、$\\cos(180\\du-\\theta)$。',
    answer: '$\\sin\\theta$；$-\\cos\\theta$',
    hasImage: false,
  },
  {
    id: '17ad14e2208',
    chapter: '三角比',
    question: '角變號，$\\sin(-\\theta)$、$\\cos(-\\theta)$。',
    answer: '$-\\sin\\theta$；$\\cos\\theta$',
    hasImage: false,
  },
  {
    id: '17ad14f2801',
    chapter: '三角比',
    question: '任意的角度變換，$\\sin(\\theta+180\\du)$、$\\cos(270\\du-\\theta)$。',
    answer: '$-\\sin\\theta$；$-\\sin\\theta$',
    hasImage: false,
  },
  {
    id: '17ad15f1203',
    chapter: '三角比',
    question: '若 $\\sin x-\\cos x=\\dfrac12$，求 $\\sin x\\cos x$。',
    answer: '$\\frac38$',
    hasImage: false,
  },
  {
    id: '17ad16129f7',
    chapter: '三角比',
    question:
      '設 $180\\du<\\theta<270\\du$，若 $\\cos\\theta-\\sin\\theta=\\dfrac{\\sqrt2}2$，求 $\\cos\\theta+\\sin\\theta$。',
    answer: '$-\\frac{\\sqrt6}2$',
    hasImage: false,
  },
  {
    id: '17ad166ba0a',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，已知 $\\sin A=\\frac14$，$\\sin B=\\frac13$，$\\overline{BC}=6$，求：(1) $\\overline{AC}$　(2) 外接圓半徑 $R$',
    answer: '(1) 8 (2) 12',
    hasImage: false,
  },
  {
    id: '17ad1685100',
    chapter: '三角比',
    question:
      '如圖，$ABCD$ 為圓內接四邊形，若 $\\overline{CD}=6$，$\\angle DBC=30\\du$，$\\angle ABD=45\\du$，求 $\\overline{AD}$。',
    answer: '$6\\sqrt2$',
    hasImage: true,
  },
  {
    id: '17ad16ade0d',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，已知 $\\overline{AB}=4$，$\\overline{BC}=6$，$\\overline{CA}=7$，求 $\\cos A$。',
    answer: '$\\frac{29}{56}$',
    hasImage: false,
  },
  {
    id: '17ad16cc0f5',
    chapter: '三角比',
    question:
      '在 $\\triangle ABC$ 中，若 $D$ 點在 $\\overline{BC}$ 邊上，且 $\\overline{AB}=7$，$\\overline{AC}=13$，$\\overline{BD}=7$，$\\overline{CD}=8$，求 $\\overline{AD}$。',
    answer: '7',
    hasImage: false,
  },
  {
    id: '17ad175a609',
    chapter: '三角比',
    question:
      '$\\triangle ABC$，$\\overline{AB}=5$，$\\overline{AC}=4$，$\\angle A=60\\du$，求 $\\triangle ABC$ 面積。',
    answer: '$5\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17ad1771119',
    chapter: '三角比',
    question: '$\\triangle ABC$ 的邊長為 8、5、7，求面積、內切圓半徑、外切圓半徑。',
    answer: '$10\\sqrt3$；$\\sqrt3$；$\\frac{7\\sqrt3}3$',
    hasImage: false,
  },
  {
    id: '1823e5af102',
    chapter: '三角比',
    question:
      '$\\triangle ABC$，$\\overline{AB}=6$，$\\overline{AC}=10$，$\\angle BAC=120\\du$，點 $P$ 在 $\\overline{BC}$ 上且 $\\overline{AP}$ 平分 $\\angle BAC$，求 $\\overline{AP}$。',
    answer: '$\\frac{15}4$',
    hasImage: false,
  },
  {
    id: '1823e5cb932',
    chapter: '三角比',
    question:
      '如圖 $\\triangle ABC$ 中，$D$ 為 $\\overline{BC}$ 上一點且 $\\angle BAD=30\\du$，$\\angle CAD=90\\du$，已知 $\\overline{AB}=8$，$\\overline{AD}=3\\sqrt3$，求 $\\triangle ABD$ 與 $\\triangle ABC$ 面積的比值。',
    answer: '$\\frac14$',
    hasImage: true,
    style: { width: '5.5cm' },
  },
  {
    id: '17ad17cb39c',
    chapter: '三角比',
    question:
      '化簡 (1) $\\sin^{-1}\\dfrac{\\sqrt3}2$　　(2) $\\cos^{-1}\\dfrac{-1}2$　　(3) $\\tan^{-1}1$',
    answer: '(1) $60\\du$ (2) $120\\du$ (3) $45\\du$',
    hasImage: false,
  },
  {
    id: '17ad18548de',
    chapter: '三角比',
    question:
      '有艘船向南航行，在東 $30\\du$ 南的方位發現一燈塔後，繼續向前 20 浬，此時燈塔的方向在北 $30\\du$ 東，求此船航線與燈塔的最短距離。',
    answer: '$5\\sqrt3$ 浬',
    hasImage: false,
  },
  {
    id: '186f250818e',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，$\\overline{AH}\\perp\\overline{BC}$，若 $M$ 為 $\\overline{BC}$ 中點，且 $\\overline{MH}=2$，$\\cos B=\\dfrac45$，$\\tan C=\\dfrac12$，求 $\\overline{BC}$。',
    answer: '20',
    hasImage: true,
  },
  {
    id: '17ad187f99e',
    chapter: '三角比',
    question:
      '某人隔河測一山高，在 $A$ 點觀測山時，山的方位為東偏北 $60\\du$，山頂的仰角為 $45\\du$，某人自 $A$ 點向東行 600 公尺到達 $B$ 點，山的方位變成在西偏北 $60\\du$，求山高。',
    answer: '600 公尺',
    hasImage: false,
  },
  {
    id: '186f24ef2f2',
    chapter: '三角比',
    question:
      '小明測一高樓的仰角為 $30\\du$，她向著高樓直線前進 200 公尺後 (未超過高樓)，再測得高樓的仰角為 $60\\du$，求此高樓的高度。',
    answer: '$100\\sqrt3$ 公尺',
    hasImage: false,
  },
  {
    id: '186f251b180',
    chapter: '三角比',
    question:
      '如圖所示，設 $ABCD$ 為圓內接四邊形，已知 $\\overline{AB}=4$，$\\overline{BC}=5$，$\\overline{CD}=4$，$\\overline{AD}=4$，求對角線 $\\overline{AC}$。',
    answer: '6',
    hasImage: true,
  },
  {
    id: '186f2534e51',
    chapter: '三角比',
    question:
      '海岸上由觀測站 $A$ 測得一船 $C$ 在北 $15\\du$ 西，同時在 $A$ 之正西方 3 公里處的另一觀測站 $B$ 測得 $C$ 船在北 $45\\du$ 東，求此時 $A$ 站到 $C$ 船的距離。',
    answer: '$\\sqrt6$ 公里',
    hasImage: false,
  },
  {
    id: '17ad187f99f',
    chapter: '三角比',
    question:
      '某人隔著河，想測河對岸山高，在 $A$ 點觀測山時，山在 $A$ 的東 $60\\du$ 北，山頂的仰角為 $60\\du$，若自 $A$ 點向東行 600 公尺到達一點 $B$，測得山在 $B$ 的西 $60\\du$ 北，求山高。',
    answer: '600 公尺',
    hasImage: false,
  },
  {
    id: '17ad192e53e',
    chapter: '三角比',
    question:
      '在 $\\triangle ABC$ 中，$M$ 為 $\\overline{BC}$ 邊之中點，若 $\\overline{AB}=3$，$\\overline{AC}=5$，且 $\\angle BAC=120\\du$，求 $\\tan\\angle BAM$。',
    answer: '$5\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17ad195a9f7',
    chapter: '三角比',
    question:
      '有向角 $\\theta$ 以 $x$ 軸正向為始邊，終邊與直線 $2x+y+3=0$ 相交於 $P$，已知 $\\tan\\theta=\\frac34$，求 $\\sin\\theta$、$\\cos\\theta$、$P$ 點坐標。',
    answer: '$-\\frac35$；$-\\frac45$；$(-\\frac{12}{11},-\\frac9{11})$',
    hasImage: false,
  },
  {
    id: '17ad1986e1e',
    chapter: '三角比',
    question:
      '設 $\\theta$ 為三角形 $\\Gamma$ 的一個內角，且 $\\sin\\theta$、$\\cos\\theta$ 是 $3x^2-2x+k=0$ 的兩根，請問下列哪些選項的敘述為真？\n(1) $k<-0.7$　　(2) $k>-0.8$\n(3) $\\Gamma$ 為鈍角三角形　　(4) $\\cos\\theta>0$\n(5) $k$、$\\sin\\theta$、$\\cos\\theta$ 之值均為有理數',
    answer: '(1)(3)',
    hasImage: false,
  },
  {
    id: '17ad199eac9',
    chapter: '三角比',
    question: '方程式 $4x^2-5x+m=0$ 的兩根是直角三角形的兩銳角的正弦值，求 $m$。',
    answer: '$\\frac98$',
    hasImage: false,
  },
  {
    id: '17ad19d0a01',
    chapter: '三角比',
    question:
      '設 $\\theta_1,\\theta_2,\\theta_3,\\theta_4$ 分別為第一、第二、第三、第四象限角，且都介於 $0\\du$ 與 $360\\du$ 之間。已知 $|\\cos\\theta_1|=|\\cos\\theta_2|=|\\cos\\theta_3|=|\\cos\\theta_4|=\\frac13$，下列哪些選項是正確的？\n(1) $\\theta_1<45\\du$　　(2) $\\theta_1+\\theta_2=180\\du$\n(3) $\\cos\\theta_3=-\\frac13$　　(4) $\\sin\\theta_4=\\frac{2\\sqrt2}3$\n(5) $\\theta_4=\\theta_3+90\\du$',
    answer: '(2)(3)',
    hasImage: false,
  },
  {
    id: '17ad19fe25d',
    chapter: '三角比',
    question:
      '如圖，$\\angle BAC=\\theta$，$\\angle ABD=\\angle ACD=90\\du$，$\\overline{AB}=a$，$\\overline{BD}=b$，下列選項何者可以表示 $\\overline{CD}$？\n(1) $a\\sin\\theta+b\\cos\\theta$\n(2) $a\\sin\\theta-b\\cos\\theta$\n(3) $a\\cos\\theta-b\\sin\\theta$　　(4) $a\\cos\\theta+b\\sin\\theta$\n(5) $a\\sin\\theta+b\\tan\\theta$',
    answer: '(2)',
    hasImage: true,
  },
  {
    id: '17ad1a1d228',
    chapter: '三角比',
    question:
      '如圖，正三角形 $ABC$ 的邊長為 1，並且 $\\angle1=\\angle2=\\angle3=15\\du$。已知 $\\sin15\\du=\\frac{\\sqrt6-\\sqrt2}4$，求正三角形 $DEF$ 的邊長。',
    answer: '$\\frac{\\sqrt6-\\sqrt2}2$',
    hasImage: true,
  },
  {
    id: '17ad1a5d24f',
    chapter: '三角比',
    question:
      '在 $\\triangle ABC$ 中，已知 $\\overline{BC}=1$，$\\sin A<\\sin B$，$\\sin A$ 與 $\\sin B$ 為 $8x^2-4\\sqrt3x+1=0$ 的兩根，求 $\\triangle ABC$ 的外接圓半徑。',
    answer: '$1+\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17ad1a75088',
    chapter: '三角比',
    question:
      '在邊長為 13 的正三角形 $ABC$ 上各邊分別取一點 $P,Q,R$，使得 $APQR$ 形成一平行四邊形，如圖所示。若平行四邊形 $APQR$ 的面積為 $20\\sqrt3$，求 $\\overline{PR}$。',
    answer: '7',
    hasImage: true,
  },
  {
    id: '17ad1aa917e',
    chapter: '三角比',
    question:
      '如圖，在 $\\triangle ABC$ 中，$\\overline{AD}$ 交 $\\overline{BC}$ 於 $D$ 點， $\\overline{BE}$ 交 $\\overline{AD}$ 於 $E$ 點，且 $\\angle ACB=30\\du$，$\\angle EDB=60\\du$，$\\angle AEB=120\\du$。若 $\\overline{CD}=15$，$\\overline{ED}=7$，求 $\\overline{AB}$。',
    answer: '13',
    hasImage: true,
  },
  {
    id: '17ad1ac869f',
    chapter: '三角比',
    question:
      '四邊形 $ABCD$ 中，$\\overline{AB}=1$，$\\overline{BC}=5$，$\\overline{CD}=5$，$\\overline{DA}=7$，且 $\\angle DAB=\\angle BCD=90\\du$，求對角線 $\\overline{AC}$。',
    answer: '$4\\sqrt2$',
    hasImage: false,
  },
  {
    id: '17ad1af7240',
    chapter: '三角比',
    question:
      '圓內接四邊形 $ABCD$，已知 $\\overline{AB}=5$，$\\overline{BC}=3$，$\\overline{CD}=2$，$\\overline{DA}=3$，試求：\n(1) $\\overline{AC}$　(2) 此四邊形面積　(3) 此圓面積',
    answer: '(1) $\\sqrt{19}$ (2) $\\frac{21\\sqrt3}4$ (3) $\\frac{19}3\\pi$',
    hasImage: false,
  },
  {
    id: '17ad1b111d9',
    chapter: '三角比',
    question:
      '如圖，圓 $O$ 內切於 $\\triangle ABC$ 中，切點分別為 $D,E,F$，且 $\\overline{AD}=3$，$\\overline{BD}=2$，內切圓半徑為 $\\dfrac{2\\sqrt6}3$，求 $\\overline{AC}$。',
    answer: '7',
    hasImage: true,
  },
  {
    id: '17ad1b2ca8a',
    chapter: '三角比',
    question:
      '平面上有一箏形 $ABCD$，其中 $\\overline{AB}=\\overline{BC}=\\sqrt2$，$\\overline{AD}=\\overline{CD}=2$，$\\angle BAD=135\\du$，求 $\\overline{AC}$。',
    answer: '$\\frac{2\\sqrt{10}}5$',
    hasImage: false,
  },
  {
    id: '17ad1b3be5c',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，$\\angle ABC=60\\du$，$\\angle ABC$ 的角平分線交 $\\overline{AC}$ 於 $D$。已知 $\\overline{AB}=6$，$\\overline{BD}=2\\sqrt3$，求 $\\overline{AC}$。',
    answer: '$3\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17ad1b58388',
    chapter: '三角比',
    question: '如圖所示，求 $x$。',
    answer: '$\\frac{\\sqrt{210}}7$',
    hasImage: true,
  },
  {
    id: '17ad1ba3335',
    chapter: '三角比',
    question:
      '海面上有漁船發出求救訊號，此漁船在燈塔的南 $\\theta$ 東的方向，距離燈塔 15 浬處，救難艦則位在燈塔的東 $2\\theta$ 北的方向，距離燈塔 11 浬處，若救難艦收到求救信號後立刻以每小時 10 浬的速度趕赴漁船所在位置，已知 $\\theta=\\sin^{-1}\\frac13$，則該漁船約需等待幾分鐘才能得到救援？($\\sqrt{456}\\approx21.4$)\n(1) 100 分鐘　(2) 110 分鐘　(3) 120 分鐘\n(4) 130 分鐘　(5) 140 分鐘',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17ad1c0f6ba',
    chapter: '三角比',
    question:
      '莎韻觀測遠方等速率垂直上升的熱氣球。在上午 10:00 熱氣球的仰角為 $30\\du$，到上午 10:10 仰角變成 $34\\du$。請判斷到上午 10:30 時，熱氣球的仰角的正切值？\n($\\tan30\\du\\approx0.577$、$\\tan34\\du\\approx0.675$)',
    answer: '0.871',
    hasImage: false,
  },
  {
    id: '17ad1c5ea2f',
    chapter: '三角比',
    question:
      '自地面一點觀測甲、乙兩棟大樓，甲大樓在西北方向距離 60 公尺處，乙大樓在東北方向距離 80 公尺處，且先測得甲大樓樓頂的仰角為 $45\\du$，再登上甲大樓的樓頂並從樓頂測得乙大樓的樓頂仰角為 $60\\du$，求乙大樓的高度。\n($\\sqrt3\\approx1.732$，整數以下四捨五入)',
    answer: '233 公尺',
    hasImage: false,
  },
  {
    id: '17ad1c89c26',
    chapter: '三角比',
    question:
      '小明從旗桿底 $O$ 點的正西方 $A$ 點測得桿頂 $T$ 點的仰角為 $30\\du$。他向旗桿前進 30 公尺至 $B$ 點，再測得旗桿頂的仰角為 $60\\du$，求旗桿高。',
    answer: '$15\\sqrt3$ 公尺',
    hasImage: false,
  },
  {
    id: '17a24e0ae41',
    chapter: '三角比',
    question:
      '(多選) 從下列選項中，選出大於 $\\sin10\\du$ 的選項。\n(1) $\\sin5\\du$ (2) $\\frac{1}{2}$ (3) $\\sin180\\du$ (4) $\\cos340\\du$ (5) $\\tan135\\du$',
    answer: '(2)(4)',
    hasImage: false,
  },
  {
    id: '17a24e2bd7c',
    chapter: '三角比',
    question:
      '(多選) 如圖，下列選項何者正確？$\\left(\\sin75\\du=\\frac{\\sqrt{6}+\\sqrt{2}}{4}\\right)$\n(1) $\\overline{AB}=4\\sqrt{2}$\n(2) $\\overline{BC}=4(\\sqrt{3}+1)$\n(3) $\\triangle ABC$ 為鈍角三角形\n(4) $\\triangle ABC$ 之外接圓半徑為 $4\\sqrt{2}$\n(5) $\\triangle ABC$ 之外接圓面積為 $32\\pi$',
    answer: '(1)(2)(3)(4)(5)',
    hasImage: true,
  },
  {
    id: '17a24e3eecd',
    chapter: '三角比',
    question: '求 $\\sin870\\du+\\sin^2(-105\\du)+\\cos^2105\\du-\\tan540\\du$',
    answer: '$\\frac{3}{2}$',
    hasImage: false,
  },
  {
    id: '17a24e58da9',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=1$，$\\overline{BC}=\\sqrt{3}$，$\\overline{AC}=\\sqrt{7}$，求 $\\triangle ABC$ 最大的內角度數。',
    answer: '$150\\du$',
    hasImage: false,
  },
  {
    id: '17a24e6d768',
    chapter: '三角比',
    question: '如圖，$ABCD$ 為一等腰梯形，試求 $\\cos\\angle BAD$。',
    answer: '$-\\frac{2}{5}$',
    hasImage: true,
  },
  {
    id: '17a24e7a289',
    chapter: '三角比',
    question:
      '在極坐標中，$A$、$B$ 兩點的坐標分別為 $A[2,34\\du]$，$B[5,154\\du]$，求 $\\overline{AB}$。',
    answer: '$\\sqrt{39}$',
    hasImage: false,
  },
  {
    id: '17a24e8a188',
    chapter: '三角比',
    question:
      '已知 $270\\du<\\theta<360\\du$，且 $\\sin\\theta=-\\frac{1}{3}$，求 $\\cos\\theta+\\sin(270\\du-\\theta)+\\tan(180\\du+\\theta)$。',
    answer: '$-\\frac{\\sqrt{2}}{4}$',
    hasImage: false,
  },
  {
    id: '17a24eb0dfb',
    chapter: '三角比',
    question:
      '四邊形 $ABCD$ 中，已知 $\\overline{AB}=2$，$\\overline{BC}=7$，$\\overline{CD}=5$，$\\overline{BD}=6$，$\\angle ABD=30\\du$，求此四邊形面積。',
    answer: '$3+6\\sqrt{6}$',
    hasImage: false,
  },
  {
    id: '17a09173345',
    chapter: '三角比',
    question:
      '已知 $ABCD$ 為圓內接四邊形，且 $\\overline{AB}=3$，$\\overline{BC}=3$，$\\overline{CD}=5$，$\\overline{DA}=8$，求對角線 $\\overline{BD}$。',
    answer: '7',
    hasImage: false,
  },
  {
    id: '17a091aa2ec',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=5$，$\\overline{BC}=8$，$\\overline{CA}=7$，令 $M$ 為 $\\overline{BC}$ 邊上的中點，求中線 $\\overline{AM}$。',
    answer: '$\\sqrt{21}$',
    hasImage: true,
  },
  {
    id: '17a091da529',
    chapter: '三角比',
    question:
      '如圖所示，$\\triangle ABC$ 為一直角三角形，四邊形 $BDEC$ 是以 $\\overline{BC}$ 為一邊向外作出的正方形。已知 $\\overline{AB}=5$，$\\overline{AC}=12$，$\\overline{BC}=13$，求 $\\triangle ABD$ 的面積。',
    answer: '$\\frac{25}2$',
    hasImage: true,
  },
  {
    id: '17a0923d06f',
    chapter: '三角比',
    question:
      '如圖，兩圓交於 $P$、$Q$ 兩點，$A$、$B$ 分別在兩圓上，且 $A$、$Q$、$B$ 三點共線，若 $\\overline{PA}=3$，$\\overline{PB}=2$，求大圓面積：小圓面積。',
    answer: '9:4',
    hasImage: true,
  },
  {
    id: '17a0926212c',
    chapter: '三角比',
    question:
      '在 $\\triangle ABC$ 中，若 $\\overline{AB}=6$，$\\overline{AC}=4$，$\\angle A=60\\du$，求 $\\triangle ABC$ 之外接圓半徑 $R$。',
    answer: '$\\frac{2\\sqrt{21}}3$',
    hasImage: false,
  },
  {
    id: '17a0926ec6f',
    chapter: '三角比',
    question: '在銳角三角形中，有兩邊長分別為 5, 7，若三角形面積為 $6\\sqrt6$，求第三邊的邊長。',
    answer: '6',
    hasImage: false,
  },
  {
    id: '17a093d3cd1',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=8$，$\\overline{BC}=6$，$\\overline{CA}=4$，延長 $\\overleftrightarrow{BC}$ 至 $D$ 點，使得 $\\overline{CD}=3$，求 $\\overline{AD}$。',
    answer: '$\\sqrt{19}$',
    hasImage: true,
  },
  {
    id: '17a093f754e',
    chapter: '三角比',
    question:
      '圓內接四邊形 $ABCD$ 中，若 $\\overline{AB}=\\overline{AD}=2$，$\\angle C=60\\du$，$\\angle D=105\\du$，求 $\\overline{CD}$。',
    answer: '$2\\sqrt{2}$',
    hasImage: false,
  },
  {
    id: '17a0941ddcf',
    chapter: '三角比',
    question: '已知三角形的三邊長分別為 2、$\\sqrt3$、$\\sqrt5$，求此三角形的面積。',
    answer: '$\\frac{\\sqrt{11}}2$',
    hasImage: false,
  },
  {
    id: '17a0943a297',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=c$，$\\overline{BC}=a$，$\\overline{CA}=b$，若 $\\overline{AB}$ 邊上的高 $h_c=3$，$\\overline{BC}$ 邊上的高 $h_a=4$，$\\overline{CA}$ 邊上的高 $h_b=6$，試求：\n(1) $\\sin A:\\sin B:\\sin C$\n(2) $\\triangle ABC$ 的面積',
    answer: '(1) 3:2:4 (2) $\\frac{16\\sqrt{15}}5$',
    hasImage: false,
  },
  {
    id: '17a09459c56',
    chapter: '三角比',
    question:
      '$A$、$B$、$C$ 依序為地面一直線上的三點，$\\overline{AB}=300$ 公尺，$\\overline{BC}=200$ 公尺，今自 $A$、$B$、$C$ 三點測一旁的高山，其仰角分別為 $30\\du$、$45\\du$、$60\\du$，求山高。',
    answer: '$100\\sqrt{15}$ 公尺',
    hasImage: false,
  },
  {
    id: '17a0948e0bc',
    chapter: '三角比',
    question:
      '$A$、$B$、$C$ 三人想測量升旗桿最頂端的高度，於是三人分別於地面上三點仰視桿頂，發現仰角都是 $60\\du$，此時 $B$、$C$ 兩人相距 $25$ 公尺，$\\angle BAC=60\\du$，則他們所測得的旗桿頂高度為？',
    answer: '$25$ 公尺',
    hasImage: false,
  },
  {
    id: '179e0684ccc',
    chapter: '三角比',
    question:
      '設 $\\sin\\theta+\\cos\\theta=\\frac{1}{2}$，且 $180\\du\\le\\theta\\le360\\du$，求：\n(1) $\\sin\\theta\\cos\\theta$\n(2) $\\sin\\theta-\\cos\\theta$',
    answer: '(1) $-\\frac{3}{8}$ (2) $-\\frac{\\sqrt{7}}{2}$',
    hasImage: false,
  },
  {
    id: '179e0697edf',
    chapter: '三角比',
    question: '極坐標平面上有兩點 $A[2,120\\du]$，$B[4,210\\du]$，求 $\\overline{AB}$。',
    answer: '$2\\sqrt5$',
    hasImage: false,
  },
  {
    id: '179e06b1112',
    chapter: '三角比',
    question:
      '設直角三角形 $ABC$ 之三邊長為 $\\overline{AB}=5$，$\\overline{BC}=13$，$\\overline{CA}=12$，以斜邊 $\\overline{BC}$ 為一邊向外作出正方形 $BCDE$，如圖所示。令 $\\angle ACD=\\theta$，求 $\\sin\\theta+\\cos\\theta$。',
    answer: '$\\frac7{13}$',
    hasImage: true,
  },
  {
    id: '179e06c7fa3',
    chapter: '三角比',
    question:
      '已知兩直線 $L_1:y=\\frac{1}{2}x$ 與 $L_2:3x+y=5$ 的銳夾角為 $\\theta$，求 $\\theta$。(利用計算機，四捨五入至整數位)',
    answer: '$82\\du$',
    hasImage: false,
  },
  {
    id: '179e06ddeda',
    chapter: '三角比',
    question:
      '已知 $A$、$B$ 兩點的極坐標分別為 $A[1,60\\du]$，$B[\\sqrt3,150\\du]$，$\\overline{AB}$ 中點為 $C$，求 $C$ 點的極坐標。',
    answer: '$[1,120\\du]$',
    hasImage: false,
  },
  {
    id: '179e06f7815',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=1$，$\\overline{AC}=2$，$\\sin A=\\dfrac5{13}$，求 $\\triangle ABC$ 的面積。',
    answer: '$\\frac5{13}$',
    hasImage: false,
  },
  {
    id: '179e070c819',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=2$，$\\overline{AC}=6$，且 $\\angle A=120\\du$。若 $D$ 為 $\\overline{BC}$ 上一點，且滿足 $3\\overline{BD}=\\overline{CD}$，求 $\\triangle ACD$ 的面積。',
    answer: '$\\frac{9\\sqrt3}4$',
    hasImage: false,
  },
  {
    id: '179e071ffc3',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，$\\angle B=15\\du$，$\\angle C=30\\du$，$\\overline{BC}=4$，求 $\\triangle ABC$ 的外接圓面積。',
    answer: '$8\\pi$',
    hasImage: false,
  },
  {
    id: '179e073e656',
    chapter: '三角比',
    question:
      '四邊形 $ABCD$ 為圓內接四邊形，若 $\\angle ADB=60\\du$，$\\angle CBD=30\\du$，$\\overline{CD}=5$，求：\n(1) $\\overline{AB}$\n(2) 外接圓半徑',
    answer: '(1) $5\\sqrt3$ (2) 5',
    hasImage: true,
  },
  {
    id: '179e075c581',
    chapter: '三角比',
    question:
      '如圖 $\\triangle ABP$ 中，若 $\\angle PAB=30\\du$，$\\angle PBA=45\\du$，今於 $\\overline{AB}$ 上任取一點 $Q$，若 $\\triangle APQ$ 與 $\\triangle BPQ$ 的外接圓半徑分別為 $R_1$ 和 $R_2$，求 $\\dfrac{R_1}{R_2}$。',
    answer: '$\\sqrt2$',
    hasImage: true,
  },
  {
    id: '179e078a37b',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，$a,b,c$ 分別為 $\\angle A,\\angle B,\\angle C$ 的對邊長。若 $\\begin{cases}2a+2b-3c=0\\\\a-2b+c=0\\end{cases}$，求 $\\sin A:\\sin B:\\sin C$。',
    answer: '4:5:6',
    hasImage: false,
  },
  {
    id: '179e07a7752',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，$\\overline{AD}$ 平分 $\\angle BAC$ 並交 $\\overline{BC}$ 於 $D$。已知 $\\overline{BD}=5$、$\\overline{DC}=7$，且 $\\angle ABC=60\\du$，求 $\\sin\\angle ACD$。',
    answer: '$\\frac{5\\sqrt3}{14}$',
    hasImage: true,
  },
  {
    id: '179de60103a',
    chapter: '三角比',
    question:
      '利用計算機求出下列各值，並四捨五入至小數點後第一位：\n(1) 試求直線 $3x-2y+2=0$ 的斜角 $\\theta$。\n(2) 已知直線 $L_1:3x-y+2=0$，$L_2:2x-3y+6=0$，試求 $L_1$ 與 $L_2$ 的銳夾角。',
    answer: '(1) $71.6\\du$ (2) $37.9\\du$',
    hasImage: false,
  },
  {
    id: '179de647e52',
    chapter: '三角比',
    question:
      '試將下列直角坐標轉換成極坐標，利用計算機取角度介於 $0\\du$ 到 $360\\du$ 之間，並四捨五入至整數位：\n(1) $A(-5,0)$ (2) $B(-3-3)$ (3) $C(2,5)$',
    answer: '(1) $[5,180\\du]$ (2) $[3\\sqrt{2},225\\du]$ (3) $[\\sqrt{29},68\\du]$',
    hasImage: false,
  },
  {
    id: '179de65c7d8',
    chapter: '三角比',
    question:
      '如圖，$\\triangle ABC$ 中，$\\overline{AB}=4\\sqrt{2}$，$\\angle B=45\\du$，$\\angle C=30\\du$，求 $\\overline{BC}$。',
    answer: '$4+4\\sqrt{3}$',
    hasImage: true,
  },
  {
    id: '179de66ef94',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，若 $\\overline{AC}=12$，$\\overline{BC}=10$，$\\angle C=120\\du$，求 $\\triangle ABC$ 面積。',
    answer: '$30\\sqrt{3}$',
    hasImage: false,
  },
  {
    id: '179de685429',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，已知 $\\angle A=60\\du$，$\\overline{AB}=12$，$\\overline{AC}=6$，若 $\\angle A$ 的內角平分線交 $\\overline{BC}$ 於 $D$ 點，求 $\\overline{AD}$。',
    answer: '$4\\sqrt{3}$',
    hasImage: false,
  },
  {
    id: '179de69af3d',
    chapter: '三角比',
    question:
      '$\\triangle ABC$ 中，若 $\\angle A=45\\du$，$\\angle B=30\\du$，且 $\\overline{BC}=6$，求：\n(1) $\\overline{AC}$ (2) $\\triangle ABC$ 之外接圓半徑',
    answer: '(1) $3\\sqrt{2}$ (2) $3\\sqrt{2}$',
    hasImage: false,
  },
  {
    id: '179de6b2afc',
    chapter: '三角比',
    question:
      '在 $\\triangle ABC$ 中，若 $\\overline{BC}=2$，$\\overline{AC}=\\sqrt{3}+1$，$\\angle A=45\\du$，試求 $\\angle C$。',
    answer: '$60\\du$ 或 $30\\du$',
    hasImage: false,
  },
  {
    id: '179de6ca1c2',
    chapter: '三角比',
    question:
      '在 $\\triangle ABC$ 中，若 $\\angle A:\\angle B:\\angle C=3:4:5$，求 $\\overline{BC}:\\overline{AC}:\\overline{AB}$。',
    answer: '$2\\sqrt{2}:2\\sqrt{3}:(\\sqrt{6}+\\sqrt{2})$',
    hasImage: false,
  },
  {
    id: '179de6e9e9b',
    chapter: '三角比',
    question:
      '如圖，$ABCD$ 為圓內接四邊形，若 $\\angle DBC=30\\du$，$\\angle ABD=45\\du$，$\\overline{CD}=6$，求：\n(1) $\\overline{AD}$。\n(2) $\\triangle ABD$ 之外接圓半徑。',
    answer: '(1) $6\\sqrt{2}$ (2) $6$',
    hasImage: true,
  },
  {
    id: '179de701744',
    chapter: '三角比',
    question:
      '從岸上兩個瞭望臺 $A$，$B$ 觀測海上一船 $C$，測得 $\\angle ABC=102\\du$，$\\angle BAC=48\\du$，若 $A$，$B$ 相距 $100$ 公尺，則船 $C$ 與瞭望臺 $A$ 之距離為？(四捨五入至小數點後第一位)',
    answer: '$195.6$ 公尺',
    hasImage: false,
  },
  {
    id: '179de720da0',
    chapter: '三角比',
    question:
      '(1) 在 $\\triangle ABC$ 中，若 $\\overline{AB}=3$，$\\overline{AC}=5$，$\\angle A=120\\du$，求 $\\overline{BC}$。\n(2) 在 $\\triangle ABC$ 中，若 $\\overline{AC}=13$，$\\overline{BC}=8$，$\\overline{AB}=7$，求 $\\angle B$。',
    answer: '(1) $7$ (2) $120\\du$',
    hasImage: false,
  },
  {
    id: '179de7f01a8',
    chapter: '三角比',
    question:
      '如圖，$\\triangle ABC$ 中，$D$ 為 $\\overline{BC}$ 上一點，若 $\\overline{AB}=\\overline{AC}=10$，$\\overline{AD}=8$，$\\overline{BD}=9$，求 $\\overline{CD}$。',
    answer: '$4$',
    hasImage: true,
  },
  {
    id: '179de8089de',
    chapter: '三角比',
    question:
      '設 $\\triangle ABC$ 中，$\\angle A$、$\\angle B$、$\\angle C$ 的對邊邊長分別是 $a$、$b$、$c$，且滿足 $a^2+b^2-c^2=\\sqrt{2}ab$，求 $\\angle C$。',
    answer: '$45\\du$',
    hasImage: false,
  },
  {
    id: '179de81f990',
    chapter: '三角比',
    question:
      '圓內接四邊形 $ABCD$ 中，已知 $\\overline{AB}=5$，$\\overline{BC}=3$，$\\overline{CD}=2$，$\\angle B=60\\du$，求：\n(1) $\\overline{AC}$ (2) $\\overline{AD}$',
    answer: '(1) $\\sqrt{19}$ (2) $3$',
    hasImage: false,
  },
  {
    id: '179de84aeae',
    chapter: '三角比',
    question:
      '一漁船在湖上等速直線前進，已知上午 $9$ 時 $50$ 分，漁船在觀測點 $O$ 的北 $70\\du$ 西位置，離 $O$ 點 $2$ 浬處。上午 $10$ 時 $10$ 分，則在觀測點 $O$ 的北 $50\\du$ 東位置，離 $O$ 點 $1$ 浬處，求：\n(1) 此漁船的時速為多少浬/小時。\n(2) 此段時間內，漁船離觀測點 $O$ 的最近距離為多少浬。',
    answer: '(1) $3\\sqrt{7}$ (2) $\\frac{\\sqrt{21}}{7}$',
    hasImage: false,
  },
  {
    id: '179de862935',
    chapter: '三角比',
    question:
      '某大樓高 $100$ 公尺，在大樓的正東方 $A$ 點測得大樓樓頂 $C$ 之仰角為 $45\\du$，在大樓的正南方 $B$ 點測得大樓樓頂 $C$ 之仰角為 $30\\du$，求 $A$ 與 $B$ 相距幾公尺？',
    answer: '$200$',
    hasImage: false,
  },
  {
    id: '179de86f46f',
    chapter: '三角比',
    question:
      '已知 $\\triangle ABC$ 的三邊長分別為 $5$，$6$，$7$，求：\n(1) $\\triangle ABC$ 面積 (2) 外接圓半徑 $R$ (3) 內切圓半徑 $r$',
    answer: '$200$',
    hasImage: false,
  },
  {
    id: '179bc280c82',
    chapter: '三角比',
    question:
      '設 $0\\du<\\theta<90\\du$，$\\tan\\theta=100$，求 $\\dfrac{100\\cos\\theta+\\sin\\theta}{200\\cos\\theta}$。',
    answer: '1',
    hasImage: false,
  },
  {
    id: '179bc29b548',
    chapter: '三角比',
    question: '已知 $\\theta$ 角的終邊經過點 $(x,-6)$ 且 $\\cos\\theta=\\dfrac45$，求 $x$。',
    answer: '8',
    hasImage: false,
  },
  {
    id: '179bc2a940f',
    chapter: '三角比',
    question: '如圖，已知 $\\sin\\theta=\\dfrac35$，求 $\\cos\\angle CEA$。',
    answer: '$-\\frac45$',
    hasImage: true,
  },
  {
    id: '179bc2baac6',
    chapter: '三角比',
    question:
      '設 $\\theta$ 為第二象限角，若 $\\sin\\theta=\\dfrac45$，求 $\\sin(90\\du+\\theta)+\\sin(180\\du+\\theta)+\\sin(270\\du+\\theta)$',
    answer: '$-\\frac45$',
    hasImage: false,
  },
  {
    id: '179bc2d5ae7',
    chapter: '三角比',
    question: '若 $270\\du\\le\\theta\\le360\\du$ 且 $\\sin2020\\du=\\sin\\theta$，求 $\\theta$。',
    answer: '$320\\du$',
    hasImage: false,
  },
  {
    id: '179bc2e059e',
    chapter: '三角比',
    question: '標準位置角 $2020\\du$ 在哪一個象限？',
    answer: '三',
    hasImage: false,
  },
  {
    id: '179bc2ecb34',
    chapter: '三角比',
    question:
      '若 $P(\\cos\\theta,\\tan\\theta)$ 為第三象限的點，則 $Q(\\sin\\theta,\\cos\\theta)$ 為第幾象限的點？',
    answer: '四',
    hasImage: false,
  },
  {
    id: '179bc2f9816',
    chapter: '三角比',
    question: '已知 $\\sin\\theta=-\\dfrac15$，求 $\\cos(\\theta-1170\\du)$。',
    answer: '$-\\frac15$',
    hasImage: false,
  },
  {
    id: '179bc30c6bf',
    chapter: '三角比',
    question: '求 $\\sin(-300\\du)\\tan1830\\du$\n$+\\tan210\\du\\cos510\\du+2\\sin270\\du$。',
    answer: '-2',
    hasImage: false,
  },
  {
    id: '179bc322655',
    chapter: '三角比',
    question: '已知 $\\tan350\\du=k$，求 $\\sin1970\\du$。(以 $k$ 表示)',
    answer: '$\\frac{-k}{\\sqrt{1+k^2}}$',
    hasImage: false,
  },
  {
    id: '179bc33b270',
    chapter: '三角比',
    question: '求 $\\sin^21\\du+\\sin^22\\du+\\sin^23\\du+\\cdots$\n$+\\sin^2180\\du$。',
    answer: '90',
    hasImage: false,
  },
  {
    id: '179bc364ccb',
    chapter: '三角比',
    question: '求 $\\sin300\\du\\tan150\\du+\\sin150\\du\\cos120\\du$。',
    answer: '$\\frac14$',
    hasImage: false,
  },
  {
    id: '179ba8708bf',
    chapter: '三角比',
    question:
      '試求下列廣義角的同界角 $\\theta$，使 $0\\du<\\theta<360\\du$。\n(1) $980\\du$ (2) $-700\\du$',
    answer: '(1) $260\\du$ (2) $20\\du$',
    hasImage: false,
  },
  {
    id: '179ba8dda7e',
    chapter: '三角比',
    question:
      '下列何者是 $45\\du$ 的同界角？。\n(A) $2115\\du$ (B) $-2115\\du$ (C) $1215\\du$ (D) $-1215\\du$ (E) $405\\du$',
    answer: '(B)(E)',
    hasImage: false,
  },
  {
    id: '179ba90315d',
    chapter: '三角比',
    question:
      '設 $\\theta$ 為一標準位置角，$P(-12,5)$ 是 $\\theta$ 終邊上一點，求 $\\sin\\theta$、$\\cos\\theta$、$\\tan\\theta$。',
    answer: '$\\frac{5}{13}$；$-\\frac{12}{13}$；$-\\frac{5}{12}$',
    hasImage: false,
  },
  {
    id: '179ba918ba2',
    chapter: '三角比',
    question: '試求 $\\sin210\\du$、$\\cos210\\du$、$\\tan210\\du$。',
    answer: '$-\\frac{1}{2}$；$-\\frac{\\sqrt{3}}{2}$；$\\frac{\\sqrt{3}}{3}$',
    hasImage: false,
  },
  {
    id: '179ba926e2b',
    chapter: '三角比',
    question:
      '若已知一點 $P(\\sin\\theta,\\cos\\theta)$ 在第四象限，則 $Q(\\cos\\theta,\\tan\\theta)$ 在第幾象限？',
    answer: '三',
    hasImage: false,
  },
  {
    id: '179ba94727d',
    chapter: '三角比',
    question:
      '試求下列各式之值：\n(1) $\\tan225\\du-\\cos150\\du+\\sin330\\du$\n(2) $\\sin0\\du+\\cos270\\du+\\cos180\\du-\\tan180\\du\\sin270\\du$',
    answer: '(1) $\\frac{1}{2}+\\frac{\\sqrt{3}}{2} (2) $-1$',
    hasImage: false,
  },
  {
    id: '179ba96c098',
    chapter: '三角比',
    question:
      '已知 $\\cos\\theta=\\frac{3}{5}$ 且 $270\\du<\\theta<360\\du$，試求 $\\sin\\theta$、$\\tan\\theta$。',
    answer: '$-\\frac{4}{5}$；$-\\frac{4}{3}$',
    hasImage: false,
  },
  {
    id: '179ba984cb2',
    chapter: '三角比',
    question:
      '由廣義角三角比的性質，試求下列各值：\n(1) $\\sin150\\du$ (2) $\\cos225\\du$ (3) $\\tan(-240\\du)$',
    answer: '(1) $\\frac{1}{2}$ (2) $-\\frac{\\sqrt{2}}{2}$ (3) $-\\sqrt{3}$',
    hasImage: false,
  },
  {
    id: '179ba99c63e',
    chapter: '三角比',
    question:
      '計算下列各式之值：\n(1) $\\sin(-150\\du)\\times\\tan225\\du\\times\\cos(-300\\du)-\\sin135\\du\\times\\cos315\\du$\n(2) $\\sin90\\du+\\tan180\\du-\\cos270\\du+\\cos(-720\\du)$',
    answer: '(1) $\\frac{1}{2}$ (2) $-\\frac{\\sqrt{2}}{2}$ (3) $-\\sqrt{3}$',
    hasImage: false,
  },
  {
    id: '179ba9c9ba6',
    chapter: '三角比',
    question:
      '已知 $\\theta$ 為銳角，若 $\\sin\\theta=\\frac{1}{3}$，試求：\n(1) $\\sin(180\\du-\\theta)$ (2) $\\cos(180\\du+\\theta)$\n(3) $\\tan(180\\du+\\theta)$ (4) $\\cos(\\theta-270\\du)$',
    answer:
      '(1) $\\frac{1}{3}$ (2) $-\\frac{2\\sqrt{2}}{3}$ (3) $\\frac{\\sqrt{2}}{4}$ (4) $-\\frac{1}{3}$',
    hasImage: false,
  },
  {
    id: '179ba9e608a',
    chapter: '三角比',
    question:
      '已知 $\\theta$ 為第二象限角，且 $\\tan\\theta=-\\frac{2}{3}$，試求：\n$3\\sin(180\\du+\\theta)\\cos(90\\du+\\theta)-2\\sin(90\\du-\\theta)\\cos(180\\du-\\theta)$ ',
    answer: '$\\frac{30}{13}$',
    hasImage: false,
  },
  {
    id: '179baa133db',
    chapter: '三角比',
    question:
      '若 $\\cos130\\du=k$，試以 $k$ 表示下列各值：\n(1) $\\sin(-220\\du)$ (2) $\\tan230\\du$',
    answer: '(1) $-k$ (2) $-\\frac{\\sqrt{1-k^2}}{k}$',
    hasImage: false,
  },
  {
    id: '179baa2e921',
    chapter: '三角比',
    question:
      '已知 $\\sin\\theta+\\cos\\theta=\\frac{17}{25}$ 且 $90\\du<\\theta<180\\du$，試求：\n(1) $\\sin\\theta\\cos\\theta$ (2) $\\sin\\theta-\\cos\\theta$',
    answer: '(1) $-\\frac{168}{625}$ (2) $-\\frac{31}{25}$',
    hasImage: false,
  },
  {
    id: '179964bbaa7',
    chapter: '三角比',
    question: '試求：$\\frac{\\sin30\\du+\\cos45\\du}{\\sin30\\du-\\cos45\\du}$',
    answer: '$-3-2\\sqrt{2}$',
    hasImage: false,
  },
  {
    id: '179964e143a',
    chapter: '三角比',
    question:
      '設 $\\triangle ABC$ 是直角三角形，$\\angle C=90\\du$，$\\overline{AC}=3$，$\\overline{BC}=4$，求 $\\sin A$、$\\cos A$、$\\tan A$。',
    answer: '$\\frac{4}{5}$；$\\frac{3}{5}$；$\\frac{4}{3}$',
    hasImage: false,
  },
  {
    id: '17996591520',
    chapter: '三角比',
    question:
      '如右圖，在 $\\triangle ABC$ 中，$\\overline{BD}$ 垂直 $\\overline{AC}$，$\\overline{AB}=25$，$\\sin A=\\frac{24}{25}$，且 $\\tan C=\\frac{12}{5}$，則：\n(1) $\\overline{BD}$ (2) $\\overline{AC}$',
    answer: '(1) $24$ (2) $17$',
    hasImage: true,
  },
  {
    id: '179965c10c8',
    chapter: '三角比',
    question:
      '我們可以依如下的方法作出 $15\\du$ 角。先作一個 $30\\du-60\\du-90\\du$ 的直角 $\\triangle ABC$，延長 $\\overrightarrow{CA}$ 並在 $\\overrightarrow{CA}$ 上取 $\\overline{AD}=\\overline{AB}$，連接 $\\overline{BD}$，則 $\\angle D=15\\du$，如右圖所示，求：\n(1) $\\sin15\\du$ (2) $\\cos15\\du$ (3) $\\tan 15\\du$',
    answer:
      '(1) $\\frac{\\sqrt{6}-\\sqrt{2}}{4}$ (2) $\\frac{\\sqrt{6}+\\sqrt{2}}{4}$ (3) $2-\\sqrt{3}$',
    hasImage: true,
  },
  {
    id: '179965dfeed',
    chapter: '三角比',
    question:
      '如右圖，$\\theta$ 為銳角，圓 $O$ 為半徑 $1$ 的單位圓，且 $\\overline{AB}$ 與 $\\overline{CD}$ 為圓 $O$ 的切線段，則下列敘述哪些正確？\n(A) $\\overline{AB}=\\tan\\theta\\quad$ (B) $\\overline{OE}=\\sin\\theta$\n(C) $\\overline{CD}=\\tan\\theta\\quad$ (D) $\\overline{EF}=\\sin\\theta$\n(E) $\\overline{OD}=\\sin\\theta',
    answer: '(A)(D)',
    hasImage: true,
  },
  {
    id: '179965f4505',
    chapter: '三角比',
    question:
      '已知 $\\theta$ 為銳角，且 $\\cos\\theta=\\frac{15}{17}$，求：\n(1) $\\sin\\theta$ (2) $\\tan\\theta$',
    answer: '(1) $\\frac{8}{17}$ (2) $\\frac{8}{15}$',
    hasImage: true,
  },
  {
    id: '1799660a068',
    chapter: '三角比',
    question:
      '設 $\\theta$ 為銳角，且 $\\sin\\theta=2\\cos\\theta$，試求 $\\sin\\theta+\\cos\\theta=$？',
    answer: '$\\frac{3\\sqrt{5}}{5}$',
    hasImage: false,
  },
  {
    id: '17996638499',
    chapter: '三角比',
    question:
      '計算下列各式：\n(1) 設 $\\theta$ 為銳角，若 $\\cos40\\du=\\sin\\theta$，求 $\\theta$。\n(2) $\\cos^240\\du+\\cos^250\\du+\\cos^260\\du=$？\n(3) $\\sin^210\\du+\\sin^220\\du+\\sin^230\\du+\\sin^240\\du+\\sin^250\\du+\\sin^260\\du+\\sin^270\\du+\\sin^280\\du=$？',
    answer: '(1) $50$ (2) $\\frac{5}{4}$ (3) $4$',
    hasImage: false,
  },
  {
    id: '17996672891',
    chapter: '三角比',
    question:
      '設 $\\theta$ 為銳角，若 $\\sin\\theta+\\cos\\theta=\\frac{5}{4}$，求：\n(1) $\\sin\\theta\\cos\\theta\\quad$ (2) $\\sin\\theta-\\cos\\theta\\quad$ (3) $\\sin^3\\theta+\\cos^3\\theta$',
    answer: '(1) $\\frac{9}{32}$ (2) $\\pm\\frac{\\sqrt{7}}{4}$ (3) $\\frac{115}{128}$',
    hasImage: false,
  },
  {
    id: '17996695a20',
    chapter: '三角比',
    question:
      '設 $\\theta$ 為銳角，試證明下列各式：\n(1) $(\\sin\\theta+\\cos\\theta)^2=1+2\\sin\\theta\\cos\\theta$\n(2) $\\frac{1+\\sin\\theta}{\\cos\\theta}+\\frac{\\cos\\theta}{1+\\sin\\theta}=\\frac{2}{\\cos\\theta}\n(3) $\\tan\\theta+\\frac{1}{\\tan\\theta}=\\frac{1}{\\sin\\theta\\cos\\theta}$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '179966cda60',
    chapter: '三角比',
    question:
      '試比較下列之大小關係：\n(1) $\\sin65\\du$、$\\sin55\\du$ (2) $\\cos65\\du$、$\\cos55\\du$ (3) $\\sin46\\du$、$\\cos46\\du$\n(4) $\\sin35\\du$、$\\frac{1}{2}$ (5) $\\cos35\\du$、$\\frac{\\sqrt{3}}{2}$ (6) $\\tan46\\du$、$1$',
    answer:
      '(1) $\\sin65\\du>\\sin55\\du$ (2) $\\cos65\\du<\\cos55\\du$ (3) $\\sin46\\du>\\cos46\\du$ (4) $\\sin35\\du>\\frac{1}{2}$ (5) $\\cos35\\du<\\frac{\\sqrt{3}}{2}$ (6) $\\tan46\\du>1$',
    hasImage: false,
  },
  {
    id: '1799677886e',
    chapter: '三角比',
    question: '$\\triangle ABC$ 中，若 $\\angle C=90\\du$，且 $\\sin A=\\dfrac13$，求 $\\tan B$。',
    answer: '$2\\sqrt2$',
    hasImage: false,
  },
  {
    id: '1799678c5da',
    chapter: '三角比',
    question:
      '如圖，$\\triangle ABC$ 中，$\\overline{AD}\\perp\\overline{BC}$，已知 $\\overline{AB}=20$，$\\sin B=\\dfrac35$，$\\sin C=\\dfrac{12}{13}$，求 $\\overline{BC}$。',
    answer: '21',
    hasImage: true,
  },
  {
    id: '179967a4e21',
    chapter: '三角比',
    question:
      '如圖，$\\overline{BC}\\perp\\overline{AC}$，$\\overline{AD}=\\overline{BD}$，若 $\\cos\\angle BDC=\\dfrac23$，求 $\\tan A$。',
    answer: '$\\frac{\\sqrt5}5$',
    hasImage: true,
  },
  {
    id: '179967b9e90',
    chapter: '三角比',
    question: '求 $\\tan^230\\du\\times\\cos60\\du$',
    answer: '$\\frac16$',
    hasImage: false,
  },
  {
    id: '179967b9e91',
    chapter: '三角比',
    question: '求 $(1+\\sin30\\du+\\sin45\\du)(1-\\cos45\\du+\\cos60\\du)$',
    answer: '$\\frac74$',
    hasImage: false,
  },
  {
    id: '179967c79a3',
    chapter: '三角比',
    question: '化簡 $(\\sin87\\du+\\cos87\\du)^2+(\\sin87\\du-\\cos87\\du)^2$',
    answer: '2',
    hasImage: false,
  },
  {
    id: '179967d65a9',
    chapter: '三角比',
    question:
      '若 $\\theta$ 是一個銳角且 $\\tan\\theta=2$，則 $\\dfrac{2\\sin\\theta-\\cos\\theta}{2\\sin\\theta+\\cos\\theta}=$？',
    answer: '$\\frac35$',
    hasImage: false,
  },
  {
    id: '179967ee279',
    chapter: '三角比',
    question: '$\\sin^25\\du+\\sin^225\\du+\\sin^245\\du+\\sin^265\\du$ \n$+\\sin^285\\du=$？',
    answer: '$\\frac92$',
    hasImage: false,
  },
  {
    id: '179968447b6',
    chapter: '三角比',
    question:
      '已知 $0\\du<\\theta<90\\du$，若 $\\sin\\theta+\\cos\\theta=\\dfrac65$，求：\n(1) $\\sin\\theta\\cos\\theta$ (2) $\\sin\\theta-\\cos\\theta$ (兩解)',
    answer: '(1) $\\frac{11}{50}$ (2) $\\pm\\frac{\\sqrt{14}}{5}$',
    hasImage: false,
  },
  {
    id: '1865e3c41ed',
    chapter: '三角比',
    question:
      '設有一建築物高 20 公尺，站在頂端看另一塔頂端的仰角為 $\\alpha$，看塔底端的俯角為 $\\beta$，若 $\\sin\\alpha=\\dfrac35$，$\\cos\\beta=\\dfrac{12}{13}$，求另一塔的高度。',
    answer: '56 公尺',
    hasImage: false,
  },
  {
    id: '1863c409e36',
    chapter: '三角比',
    question:
      '阿杰從自己家的屋頂看遠方大樓樓頂的仰角為 $30\\du$，若阿杰家的高度為 9 公尺且阿杰家和大樓距離 12 公尺，求大樓的樓高。($\\sqrt3\\approx1.732$，四捨五入取至整數)',
    answer: '16 公尺',
    hasImage: false,
  },
  {
    id: '1863c4203c3',
    chapter: '三角比',
    question:
      '如圖，$\\triangle ABC$ 中，$\\overline{AD}\\perp\\overline{BC}$，已知 $\\overline{AB}=15$，$\\sin B=\\dfrac35$，$\\tan C=3$，求 $\\overline{BC}$',
    answer: '15',
    hasImage: true,
  },
  {
    id: '179968541c0',
    chapter: '三角比',
    question:
      '如圖，等腰直角 $\\triangle ABC$ 中，$\\overline{BM}$ 為 $\\overline{AC}$ 之中線，若 $\\angle CBM=\\theta$，求 $\\tan\\theta$。',
    answer: '$\\frac13$',
    hasImage: true,
  },
  {
    id: '1799685e5d3',
    chapter: '三角比',
    question: '求 $\\sqrt3(\\cos330\\du+\\sin120\\du)+\\sqrt2\\cos45\\du$',
    answer: '4',
    hasImage: false,
  },
  {
    id: '1799686d5ac',
    chapter: '三角比',
    question: '比較 $a=\\sin61\\du$、$b=\\cos11\\du$、$c=\\tan29\\du$ 之大小關係。',
    answer: '$b>a>c$',
    hasImage: false,
  },
  {
    id: '179968926c1',
    chapter: '三角比',
    question:
      '已知直角 $\\triangle ABC$ 中，$\\angle C=90\\du$，若 $3\\cos A+5\\cos B=5$，求 $\\sin A$。',
    answer: '$\\frac8{17}$',
    hasImage: false,
  },
];

// 數列級數
const series: Question[] = [
  {
    id: '186f25df1a1',
    chapter: '數列級數',
    question:
      '用白色方塊與黑色方塊按照規律交錯拼排如圖，正方形圖案各邊的方塊數每次增加兩個，如圖。若以 $a_n$ 表示第 $n$ 圖中黑色方塊的個數，求 $a_6$',
    answer: '61',
    hasImage: true,
  },
  {
    id: '186f2601c38',
    chapter: '數列級數',
    question:
      '已知等差數列 $\\langle a_n\\rangle$ 滿足 $a_9+a_{10}=\\dfrac13$，求 $2^{a_1}\\times2^{a_2}\\times2^{a_3}\\times\\cdots\\times2^{a_{18}}$。',
    answer: '8',
    hasImage: false,
  },
  {
    id: '186f2616b22',
    chapter: '數列級數',
    question:
      '如果要在牆壁上用彩帶和螢光貼紙貼成聖誕樹的樣子，如圖，第一層有 1 張貼紙，第二層有 2 張貼紙，依此類推。若將這些貼紙順著彩帶由上而下依序編號，求第 1001 張貼紙所在的層數。',
    answer: '45',
    hasImage: true,
  },
  {
    id: '1858530b9a0',
    chapter: '數列級數',
    question:
      '設兩數列 $\\langle a_n\\rangle=\\langle2n+3\\rangle$，$\\langle b_n\\rangle=\\langle2^n+3\\rangle$，試選出正確的選項。\n(1) 數列 $\\langle a_n\\rangle$ 為等差數列\n(2) 數列 $\\langle b_n\\rangle$ 為等比數列\n(3) 設 $c_n=\\log a_n$，則數列 $\\langle c_n\\rangle$ 為等比數列\n(4) 設 $d_n=\\log b_n$，則數列 $\\langle d_n\\rangle$ 為等差數列\n(5) 將數列 $\\langle a_n\\rangle$ 寫成遞迴關係式，則為 $\\begin{cases}a_1=5\\\\a_n=a_{n-1}+2, n\\ge2\\end{cases}$',
    answer: '15',
    hasImage: false,
  },
  {
    id: '1855e6ee478',
    chapter: '數列級數',
    question:
      '設等比數列 $\\langle a_n\\rangle$ 共有 108 項，且每一項都是不為 0 的實數，若公比為 $r$，$S_n$ 表示此數列前 $n$ 項的和。試選出正確的選項。\n(A) 若 $a_{99}<a_{100}$，則 $r>1$\n(B) $a_{99}^2=a_{97}\\times a_{101}$\n(C) 若 $S_{108}>0$，則 $r>0$\n(D) 若 $S_{108}=0$，則 $r<0$\n(E) $S_{10},S_{20},S_{30}$ 成等比',
    answer: '(B)(D)',
    hasImage: false,
  },
  {
    id: '1853f0a0904',
    chapter: '數列級數',
    question:
      '小樺每日使用某遊戲點數的策略為：先儲值，讓前一天的剩餘點數變為兩倍，然後再使用 60 點。當遊戲點數變為零或負值時，則停止遊戲。若小樺原先已有遊戲點數 $a$ 點 ($a$ 為正整數)，試選出正確的選項。\n(1) 每一日，小樺剩餘的遊戲點數一定為整數\n(2) 每一日，小樺剩餘的遊戲點數會較前一日減少\n(3) 若二日後，小樺剩餘的遊戲點數恰為 0 點，則 $a$ 之值為 45\n(4) 若每一日小樺剩餘的遊戲點數為一等差數列，則此等差數列的公差為 0\n(5) 若每一日小樺剩餘的遊戲點數為一等比數列，則此等比數列的公比為 1',
    answer: '(1)(3)(4)(5)',
    hasImage: false,
  },
  {
    id: '184efeba1fc',
    chapter: '數列級數',
    question: '若 $S_n=1+(1+2)+(1+2+2^2)+$$\\cdots+(1+2+\\cdots+2^n)$，求 $S_{10}$。',
    answer: '4083',
    hasImage: false,
  },
  {
    id: '184d3746fde',
    chapter: '數列級數',
    question:
      '數列 $\\langle a_n\\rangle$ 滿足 $\\begin{cases}a_1=10\\\\a_{n-1}+a_n=2n, n\\ge2\\end{cases}$，求此數列的第十一項 $a_{11}=\\textcirc{6-1}\\textcirc{6-2}$。',
    answer: '20',
    hasImage: false,
  },
  {
    id: '184a7f977bb',
    chapter: '數列級數',
    question:
      '圖為一隻狗狗的腳掌印，我們按照圖示那樣數數字，數到 100 即停止。試問此時左邊第 2 支腳趾 (前三個數字為 2, 6, 8) 的所有數字總和。',
    answer: '1666',
    hasImage: true,
  },
  {
    id: '1848b5b4daf',
    chapter: '數列級數',
    question:
      '設 $a_1,r$ 均為正數，已知數列 $\\langle a_n\\rangle$ 是首項為 $a_1$，公比為 $r$ 的等比數列。設 $b_n=\\log a_n$。試選出正確的選項。\n(1) 數列 $\\langle b_n\\rangle$ 為公差大於 0 的等差數列\n(2) 數列 $\\langle b_n\\rangle$ 為公差小於 0 的等差數列\n(3) 若 $b_n=1+\\dfrac n2$，則 $a_1=10\\sqrt{10}$\n(4) 若 $b_n=1+\\dfrac n2$，則 $a_1=10$\n(5) 若 $b_n=1+\\dfrac n2$，則 $r=\\sqrt{10}$',
    answer: '35',
    hasImage: false,
  },
  {
    id: '183d8cbecc6',
    chapter: '數據分析',
    question:
      '$S_n$ 代表等差數列前 $n$ 項的總和，若 $S_{10}=110$，$S_{20}=420$，求 $S_{15}=\\textcirc{14-1}\\textcirc{14-2}\\textcirc{14-3}$。',
    answer: '240',
    hasImage: false,
  },
  {
    id: '183d769ca93',
    chapter: '數列級數',
    question:
      '已知 $a,x,y,b$ 為一等差數列，而 $a,u,v,b$ 為一等比數列，且此六數皆為實數。試問下列哪些選項是正確的？\n(1) $a<x$ 與 $y>b$ 可能同時成立　(2) $a<u$ 與 $v>b$ 可能同時成立\n(3) 若 $a+x<0$，則 $y+b<0$　(4) 若 $au<0$，則 $vb<0$\n(5) $t^2-(x+y)t+uv=(t-a)(t-b)$',
    answer: '45',
    hasImage: false,
  },
  {
    id: '183d733a965',
    chapter: '數列級數',
    question:
      '設數列 $\\langle a_n\\rangle$ 滿足遞迴關係式：$\\sqrt{a_n}=\\dfrac{\\sqrt{a_{n+1}}+\\sqrt{a_{n-1}}}2$，其中 $n\\ge2$ 且 $n$ 為正整數，若 $a_1=4$，$a_2=25$，求 $a_8=\\textcirc{13-1}\\textcirc{13-2}\\textcirc{13-3}$',
    answer: '529',
    hasImage: false,
  },
  {
    id: '183d7150b4f',
    chapter: '數列級數',
    question:
      '已知公式：$1^2+2^2+\\cdots+n^2=\\dfrac{n(n+1)(2n+1)}6$，其中 $n$ 為正整數。設 $S=2^2+4^2+6^2+\\cdots+100^2$，則下列選項何者正確？\n(1) $70000<S<80000$　(2) $80000<S<90000$　(3) $90000<S<100000$\n(4) $170000<S<180000$　(5) $180000<S<190000$',
    answer: '4',
    hasImage: false,
  },
  {
    id: '182f1e4e0a6',
    chapter: '數列級數',
    question:
      '如圖所示，小宇拿了許多一樣長的鐵棒排列出下面圖形。第一圖使用了 5 根，第二圖使用了 16 根。依此規則排列，第十圖會使用幾根鐵棒？\n(1) 300　　(2) 320　　(3) 340　　(4) 350　　(5) 280',
    answer: '2',
    hasImage: true,
    style: { width: '10cm' },
  },
  {
    id: '182f2091033',
    chapter: '數列級數',
    question:
      '若 $\\langle a_n\\rangle$ 為一等比數列，且公比 $r\\ne1$，已知 $a_1=\\dfrac12$，試選出正確的選項。\n(1) 若 $r>0$，則 $a_{99}>1$\n(2) 若 $a_9>1$，則 $r>1$\n(3) 若 $a_{20}>1$，則 $r>1$\n(4) 若 $a_7>a_8$，則 $|a_9|>|a_{10}|$\n(5) 若 $a_{20}>a_{21}$，則 $|a_{99}|>|a_{100}|$',
    answer: '35',
    hasImage: false,
  },
  {
    id: '182f243d8da',
    chapter: '數列級數',
    question:
      '某高中童軍社每 3 年都會舉辦擴大社慶，並在學校操場搭建精神堡壘，象徵社運昌隆、蒸蒸日上。堡壘是以等長的竹子與童軍繩搭建而成，該社團第 3 年、第 6 年、第 9 年所搭建的堡壘分別如圖由左至右所示，為了象徵一代更勝一代，每一代的堡壘都比前一代的更高一層。竹子與竹子的連接處需要以童軍繩結固定。已知今年是第 36 年社慶，且有 10 位童軍社員會綁繩結，社員只能利用每天中午的 40 分鐘去綁，則他們至少要 $\\textcirc{15-1}\\textcirc{15-2}$ 天，才能夠完成今年的精神堡壘。',
    answer: '18',
    hasImage: true,
  },
  {
    id: '182f24f099e',
    chapter: '數列級數',
    question:
      '阿倫將 1 至 78 號的號碼牌，依照下列規律分成 $n$ 組：\n第 1 組：1\n第 2 組：2, 3\n第 3 組：4, 5, 6\n$\\vdots$\n第 $n$ 組：$\\dots$ , 77, 78',
    answer: '',
    hasImage: false,
  },
  {
    id: '182f2508076',
    chapter: '數列級數',
    question:
      '按照此規律，66 位於第 $a$ 組，由左而右第 $b$ 個，則 $(a,b)=(\\textcirc{18-1}\\textcirc{18-2},\\textcirc{18-3}\\textcirc{18-4})$。(選填題，6 分)\n',
    answer: '1111',
    hasImage: false,
  },
  {
    id: '17f1072d1bb',
    chapter: '數列級數',
    question:
      '設數列 $\\langle a_n\\rangle$ 的遞迴關係式為 $\\begin{cases}a_1=1\\\\a_n=3a_{n-1}+4,n\\ge2\\end{cases}$。使用數學歸納法證明：對於所有的正整數 $n$，$a_n=3^n-2$。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17f10743528',
    chapter: '數列級數',
    question: '已知一等差數列的首項為 20，公差為 3，求前 10 項的和。',
    answer: '335',
    hasImage: false,
  },
  {
    id: '17f1074f6e0',
    chapter: '數列級數',
    question:
      '已知 $\\langle a_n\\rangle$ 為等差數列，且首項為 -15，公差為 5，和為 735，求此等差數列的項數。',
    answer: '21',
    hasImage: false,
  },
  {
    id: '17f10759723',
    chapter: '數列級數',
    question: '求 1 到 110 之間，是 4 的倍數又是 6 的倍數的總和。',
    answer: '540',
    hasImage: false,
  },
  {
    id: '17f10763b85',
    chapter: '數列級數',
    question: '已知連續 100 個整數和為 6050，求此 100 個整數中最大的數。',
    answer: '110',
    hasImage: false,
  },
  {
    id: '17f1077cdac',
    chapter: '數列級數',
    question:
      '已知 $\\langle a_n\\rangle$ 是等差數列，且 $a_3=56$，$a_{10}=-7$，試問：\n(1) 求首項 $a_1$ 與公差 $d$\n(2) 設這等差數列的前 $n$ 項總和是 $S_n$，當 $n$ 的值為何時，$S_n$ 有最大值。',
    answer: '(1) $74$；$-9$ (2) $9$',
    hasImage: false,
  },
  {
    id: '17f1078a0f3',
    chapter: '數列級數',
    question: '已知 $\\langle a_n\\rangle$ 是等比數列，且 $a_4=16$，$a_7=128$，求前 10 項的和。',
    answer: '2046',
    hasImage: false,
  },
  {
    id: '17f10799d45',
    chapter: '數列級數',
    question:
      '已知 $\\langle a_n\\rangle$ 是等比數列，且前 $n$ 項和 $S_n$ 與第 $n$ 項 $a_n$ 滿足 $4S_n=4+a_n$，求此數列的公比。',
    answer: '$-\\frac13$',
    hasImage: false,
  },
  {
    id: '17f107a1e81',
    chapter: '數列級數',
    question: '求 $7^2+8^2+\\cdots+21^2$。',
    answer: '3220',
    hasImage: false,
  },
  {
    id: '17f107a7081',
    chapter: '數列級數',
    question: '求 $11^3+12^3+\\cdots+25^3$。',
    answer: '$102600$',
    hasImage: false,
  },
  {
    id: '17f107dce68',
    chapter: '數列級數',
    question:
      '某巨蛋球場 $E$ 區每一排的座位都比前一排多 $2$ 個座位。已知 $E$ 區的第一排有 $12$ 個座位，且座位總數不超過 $600$ 個，請問 $E$ 區座位最多的排數。',
    answer: '$19$',
    hasImage: false,
  },
  {
    id: '17f107fd3f0',
    chapter: '數列級數',
    question: '已知等比級數 $1+2+2^2+\\cdots+2^{n-1}$ 的和為 $1023$，求 $n$。',
    answer: '$10$',
    hasImage: false,
  },
  {
    id: '17eec334c05',
    chapter: '數列級數',
    question:
      '設數列 $\\langle a_n\\rangle$ 滿足 $a_2=16$ 且 $a_5=2$，\n(1) 若數列 $\\langle a_n\\rangle$ 為等差數列，求公差 $d$\n(2) 若數列 $\\langle a_n\\rangle$ 為等比數列，求公比 $r$',
    answer: '(1) $-\\frac{14}3$ (2) $\\frac12$',
    hasImage: false,
  },
  {
    id: '17eec342094',
    chapter: '數列級數',
    question: '已知一等差數列 $\\langle a_n\\rangle$ 的第 $51$ 項是 $20$，求 $a_2+a_{100}$。',
    answer: '$40$',
    hasImage: false,
  },
  {
    id: '17eec355280',
    chapter: '數列級數',
    question:
      '如圖，橫、直列均有 $7$ 格方格，若將每個方格內部都填入一個數字，使得橫列方格內的數字由左而右依序成等差數列；直列由上而下依序成等比數列，求數對 $(a,b)$。',
    answer: '$(18,8)$',
    hasImage: true,
  },
  {
    id: '17eec3651ce',
    chapter: '數列級數',
    question:
      '設 $\\langle a_n\\rangle$ 為等比數列，若 $a_1+a_2+a_3=3$ 且 $a_4+a_5+a_6=-24$，求 $a_7$。',
    answer: '$64$',
    hasImage: false,
  },
  {
    id: '17eec36f7fb',
    chapter: '數列級數',
    question: '已知四個正數 $6$、$x$、$y$、$16$ 中，前三項成等差數列，後三項為等比數列，求 $x+y$。',
    answer: '$21$',
    hasImage: false,
  },
  {
    id: '17eec5ce6dd',
    chapter: '數列級數',
    question:
      '將一個長度為 $1$ 的線段，剪去其長度的 $\\frac23$；再將剩下的線段，剪去其長度的 $\\frac23$；重複這樣的步驟如此繼續下去。設 $a_n$ 為剪了 $n$ 次後剩下的長度，\n(1) 寫出數列 $\\langle a_n\\rangle$ 的遞迴關係式\n(2) 求 $a_5$',
    answer:
      '(1) $\\begin{cases}a_1=\\frac13\\\\a_n=\\frac13a_{n-1},n\\ge2\\end{cases}$ (2) $\\frac1{243}$',
    hasImage: false,
  },
  {
    id: '17eec5f9f8c',
    chapter: '數列級數',
    question:
      '設等差數列 $\\langle a_n\\rangle$ 的第 3 項為 27，第 7 項為 -9，求此等差數列的第 15 項。',
    answer: '-81',
    hasImage: false,
  },
  {
    id: '17eec60348e',
    chapter: '數列級數',
    question:
      '設等比數列 $\\langle a_n\\rangle$，若 $a_2+a_4=10$，$a_3+a_5=\\dfrac{10}3$，求 $a_4+a_6$。',
    answer: '$\\frac{10}9$',
    hasImage: false,
  },
  {
    id: '17eec6134c0',
    chapter: '數列級數',
    question:
      '在 103 與 1003 之間插入 $a_1$、$a_2$、...、$a_8$ 等八個數，使它們形成 10 項的等差數列，求 $a_5$。',
    answer: '603',
    hasImage: false,
  },
  {
    id: '17eec62b9f9',
    chapter: '數列級數',
    question:
      '設三正數成等差數列，其和為 30，若三數依序加上 1、6、47，則成為等比數列，求此三數中最小的數。',
    answer: '3',
    hasImage: false,
  },
  {
    id: '17eec638fb0',
    chapter: '數列級數',
    question: '若一數列滿足 $a_1=3$ 且 $a_n=a_{n-1}+4$ ($n\\ge2$)，求 $a_{100}$。',
    answer: '399',
    hasImage: false,
  },
  {
    id: '17eec64b278',
    chapter: '數列級數',
    question:
      '用黑白兩種顏色的正方形地磚依如下規律拼成若干圖形，請問拼第 100 個圖形需要幾個白色地磚？',
    answer: '503',
    hasImage: true,
  },
  {
    id: '18681c22292',
    chapter: '數列級數',
    question:
      '用正三角形地磚依照規律拼圖形，設 $a_n$ 表第 $n$ 個圖中正三角形地磚總數，求 $a_{107}$。',
    answer: '644',
    hasImage: true,
  },
  {
    id: '17e435d9c5a',
    chapter: '數列級數',
    question:
      '觀察數列 $\\frac11,\\frac12,\\frac22,\\frac13,\\frac23,\\frac33,\\frac14,\\frac24,\\frac34,\\frac44,\\frac15,\\cdots$ 的規律，求：\n(1) $\\dfrac{13}{29}$ 為第幾項？\n(2) 第 $100$ 項為何？',
    answer: '(1) 419 (2)$\\frac9{14}$',
    hasImage: false,
  },
  {
    id: '17e435e7ba8',
    chapter: '數列級數',
    question:
      '數列 $(1),(2,3),(4,5,6),(7,8,9,10),\\cdots$，依此類推，每個括號的數字個數比前一個括號多一，求數列中第 $23$ 個括號中的第 $10$ 個數字。',
    answer: '$263$',
    hasImage: false,
  },
  {
    id: '17e435ef8a0',
    chapter: '數列級數',
    question: '等差數列的第 10 項為 37，第 25 項為 82，求首項、公差、第 40 項。',
    answer: '10；3；127',
    hasImage: false,
  },
  {
    id: '17e435f6dcc',
    chapter: '數列級數',
    question: '在 21 與 81 之間插入 10 個數使其成為等差數列，求所插入的第 7 個數。',
    answer: '63',
    hasImage: false,
  },
  {
    id: '17e436041fd',
    chapter: '數列級數',
    question: '若 $x,y,8,z,u,v,-20,\\cdots$ 成等差，求 $x$。',
    answer: '22',
    hasImage: false,
  },
  {
    id: '17e4360cb0f',
    chapter: '數列級數',
    question:
      '等差數列 $\\langle a_n\\rangle$，若 $a_2+a_5=28$，$a_3+a_6+a_{10}=59$，求首項、公差。',
    answer: '9；2',
    hasImage: false,
  },
  {
    id: '17e43614e40',
    chapter: '數列級數',
    question: '等比數列各項均為實數，第 6 項為 120，第 9 項為 405，求公比、首項。',
    answer: '$\\frac32$；$\\frac{1280}{81}$',
    hasImage: false,
  },
  {
    id: '17e4361d39a',
    chapter: '數列級數',
    question:
      '等比數列 $\\langle a_n\\rangle$，若 $a_1+a_2+a_3=-90$，$a_4+a_5+a_6=720$，求此數列的公比、首項。',
    answer: '-2；-30',
    hasImage: false,
  },
  {
    id: '17e43624a58',
    chapter: '數列級數',
    question: '若 $x,2x+2,3x+3,\\cdots$ 是等比數列，求此數列第五項。',
    answer: '$-\\frac{81}4$',
    hasImage: false,
  },
  {
    id: '17e4362ba4d',
    chapter: '數列級數',
    question: '數列 $x,y,\\dfrac{16}9,-\\dfrac83,z$ 成等比，求 $x$、$z$。',
    answer: '$\\frac{64}{81}$；4',
    hasImage: false,
  },
  {
    id: '17e43639b52',
    chapter: '數列級數',
    question:
      '等比數列 $\\langle a_n\\rangle$ 的各項均為負值，若 $a_4+a_6=-48$，$a_8+a_{10}=-3$，求首項、公比、第 9 項。',
    answer: '$-\\frac{1536}5$；$\\frac12$；$-\\frac65$',
    hasImage: false,
  },
  {
    id: '17e4363fd23',
    chapter: '數列級數',
    question: '若 20、50、100 各加上同一數後成為等比數列，求公比。',
    answer: '$\\frac53$',
    hasImage: false,
  },
  {
    id: '17e4365da05',
    chapter: '數列級數',
    question:
      '小明向小華借了 1600 元，每個月算一次利息，月利率為 50%，請依單利、複利兩種不同的計息方式，試算借滿一個月至五個月的月本利和，填入下表：\n$$\\begin{array}{|c|c|}\\hline&單利本利和&複利本利和\\\\\\hline借一個月\\\\\\hline借兩個月\\\\\\hline借三個月\\\\\\hline借四個月\\\\\\hline借五個月\\\\\\hline\\end{array}$$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17e4366f627',
    chapter: '數列級數',
    question:
      '在銀行存入一萬元，每年計息一次：\n(1) 若年利率 10%，單利計算，求 10 年後的利息。\n(2) 若年利率 8%，複利計算，求 10 年後的利息。($1.08^{10}\\approx2.1589$)',
    answer: '(1) 10000 元 (2) 11589 元',
    hasImage: false,
  },
  {
    id: '17e4367a1a7',
    chapter: '數列級數',
    question: '遞迴數列 $\\begin{cases}a_1=29\\\\a_n=a_{n-1}-3,n\\ge2\\end{cases}$，求第 $n$ 項。',
    answer: '$32-3n$',
    hasImage: false,
  },
  {
    id: '17e436ad9ad',
    chapter: '數列級數',
    question:
      '數列 $\\langle a_n\\rangle$ 滿足 $a_1=\\dfrac17$，$a_{n+1}=\\dfrac72a_n(1-a_n)$，求 $a_{101}+a_{202}$。',
    answer: '$\\frac97$',
    hasImage: false,
  },
  {
    id: '17e436b3ffd',
    chapter: '數列級數',
    question: '遞迴數列 $\\begin{cases}a_1=1\\\\a_n=a_{n-1}+3,n\\ge2\\end{cases}$，求第 $n$ 項。',
    answer: '$3n-2$',
    hasImage: false,
  },
  {
    id: '17e436c240c',
    chapter: '數列級數',
    question:
      '數列 $\\langle a_n\\rangle$ 的遞迴定義為 $a_1=1$，$a_{n+1}=\\dfrac{1-3a_n}{1-4a_n}$，求 $a_{20}$。',
    answer: '$\\frac{20}{39}$',
    hasImage: false,
  },
  {
    id: '17e436cdb31',
    chapter: '數列級數',
    question:
      '觀察數列 $\\langle a_n\\rangle=1,2,4,7,11,16,22,\\cdots$，依此規則求出第 $10$ 項、第 $n$ 項。',
    answer: '46；$\\frac{n^2-n+2}2$',
    hasImage: false,
  },
  {
    id: '17e436d6d3f',
    chapter: '數列級數',
    question: '數列 $\\langle a_n\\rangle$，若 $a_1=1$，$a_{n+1}=a_n+(2n-3)$，求 $a_n$。',
    answer: '$n^2-4n+4$',
    hasImage: false,
  },
  {
    id: '17e436de3cc',
    chapter: '數列級數',
    question: '觀察附圖，各相鄰兩點的邊長為 1 單位，求圖 $n$ 的線段總長度。',
    answer: '$\\frac{3n^2+3n}2$',
    hasImage: true,
  },
  {
    id: '17e436e88e2',
    chapter: '數列級數',
    question: '如圖，相鄰兩點的連線段長為 1 單位，設圖 $n$ 的線段總長度為 $a_n$，求一般項 $a_n$。',
    answer: '$\\frac{3n^2+7n}2$',
    hasImage: true,
  },
  {
    id: '17e436f8382',
    chapter: '數列級數',
    question:
      '數列 $\\langle a_n\\rangle$ 滿足 $\\begin{cases}a_1=7\\\\a_{n+1}=2a_n+5,n\\in\\mathbb N\\end{cases}$，證明 $a_n=6\\times2^n-5$ 為 $\\langle a_n\\rangle$ 的一般式。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17e436ffaa3',
    chapter: '數列級數',
    question: '證明：$n$ 為自然數，$1^2+2^2+3^2+\\cdots+n^2=\\dfrac{n(n+1)(2n+1)}6$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17e43708781',
    chapter: '數列級數',
    question: '$n$ 為自然數，證明 $3^{2n+1}+2^{n+2}$ 必為 7 的倍數。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17e38805738',
    chapter: '數列級數',
    question:
      '設對於所有的自然數 $n$，$\\begin{cases}a_1=1\\\\a_{n+1}=3a_n+2\\end{cases}$，請用數學歸納法證明：對於所有的自然數 $n$，$a_n=2\\cdot3^{n-1}-1$ 恆成立。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '18681bfe8b9',
    chapter: '數列級數',
    question:
      '設數列 $\\langle a_n\\rangle$ 的遞迴關係式為 $\\begin{cases}a_1=\\dfrac34\\\\a_n=\\dfrac1{2-a_{n-1}},n\\ge2\\end{cases}$，猜測 $a_n$ 為何？並以數學歸納法證明你的猜測是對的。',
    answer: '$a_n=\\frac{n+2}{n+3}$',
    hasImage: false,
  },
  {
    id: '17e43719f98',
    chapter: '數列級數',
    question: '證明：$n$ 為自然數，$1^3+2^3+3^3+\\cdots+n^3=[\\dfrac{n(n+1)}2]^2$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17e3883dd20',
    chapter: '數列級數',
    question: '$n$ 為自然數，證明 $3\\times 5^{2n+1}+2^{3n+1}$ 恆為 17 的倍數。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17e5b7d2e67',
    chapter: '數列級數',
    question: '若等差數列的第 8 項為 35，且前 20 項的和等於前 30 項的和，求首項、公差。',
    answer: '49；-2',
    hasImage: false,
  },
  {
    id: '17e38ced40c',
    chapter: '數列級數',
    question:
      '某戲院共 15 排座位，後一排比前一排多 2 個座位，已知最後一排有 40 個座位，求該戲院共有幾個座位。',
    answer: '390',
    hasImage: false,
  },
  {
    id: '17e5b7ffe2b',
    chapter: '數列級數',
    question: '求等比級數 $16-8+4-2+1-\\dfrac12+\\cdots-\\dfrac1{128}$。',
    answer: '$\\frac{1365}{128}$',
    hasImage: false,
  },
  {
    id: '17e5b80b592',
    chapter: '數列級數',
    question:
      '若等比級數的前 $n$ 項和為 $S_n=1+\\dfrac12+\\dfrac14+\\cdots+\\dfrac1{2^{n-1}}$，求滿足 $|S_n-2|\\le\\dfrac1{10000}$ 的最小正整數 $n$。',
    answer: '15',
    hasImage: false,
  },
  {
    id: '17e5b811b24',
    chapter: '數列級數',
    question: '等比級數共有 10 項，第 9 項為 $\\dfrac14$，第 10 項為 $\\dfrac18$，求該 10 項之和。',
    answer: '$\\frac{1023}8$',
    hasImage: false,
  },
  {
    id: '17e5b826d1a',
    chapter: '數列級數',
    question:
      '若等比級數 $\\dfrac1{16}+\\dfrac18+\\dfrac14+\\cdots+$ 第 $n$ 項，若其和大於 2000，則 $n$ 至少為？',
    answer: '15',
    hasImage: false,
  },
  {
    id: '17e5b830d54',
    chapter: '數列級數',
    question:
      '等差數列 $\\langle a_n\\rangle$，已知 $a_7+a_{11}+a_{15}+a_{19}+a_{23}=55$，求：\n(1) $a_{15}$　　(2) $a_{12}+a_{14}+a_{16}+a_{18}$',
    answer: '(1) 11 (2) 44',
    hasImage: false,
  },
  {
    id: '17e38f64acc',
    chapter: '數列級數',
    question: '等差級數前 10 項和 $S_{10}=5$，前 20 項和 $S_{20}=12$，求前 40 項和 $S_{40}$。',
    answer: '32',
    hasImage: false,
  },
  {
    id: '17e5b83d66e',
    chapter: '數列級數',
    question:
      '有一等差數列 $\\langle a_n\\rangle$，若 $a_{20}+a_{67}=15$，求 $a_{12}+a_{13}+\\cdots+a_{74}+a_{75}$。',
    answer: '480',
    hasImage: false,
  },
  {
    id: '17e38fd6c19',
    chapter: '數列級數',
    question: '等差級數前 $n$ 項和 $S_n=2$，前 $2n$ 項和 $S_{2n}=-8$，求前 $3n$ 項和 $S_{3n}$。',
    answer: '-30',
    hasImage: false,
  },
  {
    id: '17e5b8499f7',
    chapter: '數列級數',
    question:
      '銀行提供儲蓄方案，每年年初存入 5000 元，年利率 20%，每半年複利一次，求 10 年後全部領出可得本利和。($1.1^{20}\\approx6.7275$，整數以下四捨五入)',
    answer: '165007',
    hasImage: false,
  },
  {
    id: '17e5b854c38',
    chapter: '數列級數',
    question:
      '某人參加儲蓄存款，年利率 6%，每年複利一次，每年年初存入 10000 元，求 10 年後所得本利和。($1.06^{10}\\approx1.7908$)',
    answer: '165007',
    hasImage: false,
  },
  {
    id: '17e5b85e60a',
    chapter: '數列級數',
    question: '求 $10^3+11^3+12^3+13^3+\\cdots+20^3$。',
    answer: '42075',
    hasImage: false,
  },
  {
    id: '17e5b869e62',
    chapter: '數列級數',
    question: '求 (1) $1^2+2^2+3^2+\\cdots+18^2$\n(2) $19^2+20^2+21^2+\\cdots+30^2$',
    answer: '(1) 2109 (2) 7346',
    hasImage: false,
  },
  {
    id: '17e5b870850',
    chapter: '數列級數',
    question: '求 $11^2+13^2+15^2+\\cdots+29^2+31^2$。',
    answer: '5291',
    hasImage: false,
  },
  {
    id: '17e5b8762fc',
    chapter: '數列級數',
    question: '求 $1\\times3+2\\times5+3\\times7+\\cdots+n(2n+1)$$+\\cdots+20\\times41$。',
    answer: '5950',
    hasImage: false,
  },
  {
    id: '17e5b884a40',
    chapter: '數列級數',
    question:
      '數列 $\\langle a_n\\rangle$，已知前 $n$ 項和 $S_n=n^2+n+2$，$n\\in\\mathbb N$，求：(1) $S_5$　(2) $a_{10}$　(3) $a_n$',
    answer: '(1) 32 (2) 20 (3) $\\begin{cases}4,n=1\\\\2n,n\\ge2\\end{cases}$',
    hasImage: false,
  },
  {
    id: '17e5b895721',
    chapter: '數列級數',
    question:
      '數列 $\\langle a_n\\rangle$，已知前 $n$ 項和 $S_n=3n^2+4n-1$，求：(1) $a_1$　(2) $a_{10}$　(3) $a_n$',
    answer: '(1) 6 (2) 61 (3) $\\begin{cases}6,n=1\\\\6n+1,n\\ge2\\end{cases}$',
    hasImage: false,
  },
  {
    id: '17da2605950',
    chapter: '數列級數',
    question:
      '在 $109$ 與 $291$ 之間插入 $n$ 項，使所成的 $n+2$ 個數成一等差數列，若要使此數列的總和超過 $2020$，則 $n$ 至少為？',
    answer: '$9$',
    hasImage: false,
  },
  {
    id: '17da25a5907',
    chapter: '數列級數',
    question:
      '有一數列 $\\langle a_n\\rangle$，已知 $a_1=\\frac12$，$a_n a_{n-1}-5a_n+3a_{n-1}+1=0$，其中 $n$ 為大於 $1$ 的正整數，下列哪些正確？\n(1) $a_2+a_3>1$\n(2) $a_6=\\frac23$\n(3) $a_{108}<0.98$\n(4) $(a_{15}-5)(a_{16}+3)<-17$\n(5) $(a_{108}-5)(a_{109}+3)<110$',
    answer: '(1)(3)(5)',
    hasImage: false,
  },
  {
    id: '17da24eb67f',
    chapter: '數列級數',
    question:
      '設等差數列 $\\langle a_n\\rangle$，前 $56$ 項中，其奇數項的和為 $3346$，其偶數項的和為 $3360$，試求其前 $16$ 項的和。\n(1) $878$ (2) $1756$ (3) $1816$ (4) $2186$ (5) $3512$',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '17d7f130c2f',
    chapter: '數列級數',
    question:
      '等比級數和的公式是利用「移位對消法」，將整個級數縮減為頭尾兩項，如此可得形如 $S-rS=a_1-a_1r^n$ 之關係式，進而得到我們熟悉的級數和公式，這種技巧亦可以應用在其他的級數和問題。\n1. 已知級數 $S=1\\times2+2\\times2^2+3\\times2^3+\\cdots+99\\times2^{99}+100\\times2^{100}$，若想嘗試使用「移位對消法」來簡化題目，則應該使用的 $k$ 值為何，就能成功簡化 $S-kS$，進而化簡 $S$？\n(1) $1$ (2) $2$ (3) $3$ (4) $4$ (5) $5$\n2. 承上題，$S$ 為幾位數？',
    answer: '1. (2) 2. $33$',
    hasImage: false,
  },
  {
    id: '17d7e6bfc5a',
    chapter: '數列級數',
    question:
      '黃金之所以能夠用以衡量價值，甚至作為銀行儲蓄，一部分的原因在於它的價格漲跌幅小。假設黃金某一天的收盤價是每單位 $1000$ 元，已知接下來 $4$ 天交易日的漲跌幅都剛好是 $1\\%$，請問經過這 $4$ 天的交易日後，黃金的價格不可能是以下何者？(四捨五入取小數點後二位)\n(1) $960.60$ (2) $980.00$ (3) $1000.00$ (4) $1020.00$ (5) $1040.60$',
    answer: '(3)',
    hasImage: false,
  },
  {
    id: '17be22df448',
    chapter: '數列級數',
    question:
      '設數列 $\\langle a_n\\rangle$ 為等差數列，$S_n$ 為此數列前 $n$ 項的和，若 $a_{2020}=S_{2020}=2020$，則滿足 $a_n>S_n$ 的正整數 $n$ 有幾個？',
    answer: '$2018$',
    hasImage: false,
  },
  {
    id: '17be23101fb',
    chapter: '數列級數',
    question:
      '已知一等差數列 $\\langle a_n\\rangle$ 為 $5,8,11,\\cdots,a_{100}$，一等比數列 $\\langle b_n\\rangle$ 為 $2,4,8,\\cdots,b_{100}$，且兩數列都有的數稱為共同項，例如 $8$。試選出正確的選項。\n(1) $a_{23}=74$ (2) $b_7=128$\n(3) 共同項的數列亦為等差數列\n(4) $a_2$、$a_{10}$ 皆為共同項 (5) 有四個共同項',
    answer: '(2)(4)',
    hasImage: false,
  },
  {
    id: '17be21e2d87',
    chapter: '數列級數',
    question:
      '若第 1 天獲得 1 元、第 2 天獲得 2 元、第 3 天獲得 4 元、第 4 天獲得 8 元、依此每天所獲得的錢為前一天的兩倍，如此進行到第 30 天，試問這 30 天所獲得的錢之總數最接近下列哪一個選項？\n(1) $10^4$ (2) $10^6$ (3) $10^8$ (4) $10^9$ (5) $10^{12}$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17be2224b98',
    chapter: '數列級數',
    question:
      '已知三次實係數多項式函數 $f(x)=2x^3-6x^2+10x+k$ 的圖形之對稱中心為 $(1,5)$，試選出正確的選項。\n(1) $k=1$\n(2) 若點 $(r,s)$ 在 $y=f(x)$ 的圖形上，則點 $(r+2,s+10)$ 也在 $y=f(x)$ 的圖形上\n(3) $y=f(x)$ 的圖形在 $x=1$ 附近的近似直線為 $y=4(x-1)+5$\n(4) $y=f(x)$ 的圖形平移後可與 $y=2x^3+4x+5$ 的圖形重合\n(5) $y=f(x)$ 的圖形與 $y=2x^3+4x+5$ 的圖形有交點',
    answer: '(3)(4)',
    hasImage: false,
  },
  {
    id: '17a55c297af',
    chapter: '數列級數',
    question:
      '設各項都是實數的等差數列 $a_1,a_2,a_3\\cdots$ 之公差為正實數 $\\alpha$，試選出正確的選項。\n(1) 若 $b_n=-a_n$，則 $b_1>b_2>b_3>\\cdots$\n(2) 若 $c_n=a_n^2$，則 $c_1<c_2<c_3<\\cdots$\n(3) 若 $d_n=a_n+a_{n+1}$，則 $d_1,d_2,d_3\\cdots$ 是公差為 $\\alpha$ 的等差數列\n(4) 若 $e_n=a_n+n$，則 $e_1,e_2,e_3\\cdots$ 是公差為 $\\alpha+1$ 的等差數列\n(5) 若 $f_n$ 為 $a_1,a_2\\cdots a_n$ 的算術平均數，則 $f_1,f_2,f_3\\cdots$ 是公差為 $\\alpha$ 的等差數列',
    answer: '(1)(4)',
    hasImage: false,
  },
  {
    id: '17a55c5894d',
    chapter: '數列級數',
    question:
      '設 $a_1=1$ 且 $a_1,a_2,a_3\\cdots$ 為等差數列。請選出正確的選項。\n(1) 若 $a_{100}>0$，則 $a_{1000}>0$\n(2) 若 $a_{100}<0$，則 $a_{1000}<0$\n(3) 若 $a_{1000}>0$，則 $a_{100}>0$\n(4) 若 $a_{1000}<0$，則 $a_{100}<0$\n(5) $a_{1000}-a_{10}=10(a_{100}-a_1)$',
    answer: '(2)(3)(5)',
    hasImage: false,
  },
  {
    id: '17a55c7d6e2',
    chapter: '數列級數',
    question:
      '若一個等差數列前 5 項的和為 24，最後 5 項的和為 186，且所有項的和為 609，則這個數列共有幾項？',
    answer: '29',
    hasImage: false,
  },
  {
    id: '17a55ca2296',
    chapter: '數列級數',
    question:
      '一個 101 項的等差數列 $a_1,a_2,a_3,\\cdots,a_{101}$，其和為 0，且 $a_{71}=71$，下列哪些正確？\n(1) $a_1+a_{101}>0$　(2) $a_2+a_{101}<0$\n(3) $a_3+a_{99}=0$　(4) $a_{51}=51$　(5) $a_1<0$',
    answer: '(3)(5)',
    hasImage: false,
  },
  {
    id: '17a5605dcf4',
    chapter: '數列級數',
    question:
      '設 $a_1,a_2,a_3,\\cdots,a_{11}$ 為等比數列且均為正數，$a_{11}=\\dfrac1{a_1}$，$a_4=4$，求 $a_3$。',
    answer: '8',
    hasImage: false,
  },
  {
    id: '17a5606fee2',
    chapter: '數列級數',
    question:
      '在等比數列 $\\langle a_n\\rangle$ 中，$a_1=1$，$a_4=2-\\sqrt{5}$，$a_{n+2}=a_{n+1}+a_n$($n\\ge1$)求 $\\langle a_n\\rangle$ 的公比。',
    answer: '$\\frac{1-\\sqrt5}2$',
    hasImage: false,
  },
  {
    id: '17a560a8bbc',
    chapter: '數列級數',
    question:
      '若自然數 $n$ 使 $9^n$ 為 20 位數，則等比級數 $1+81+81^2+\\cdots+81^n$ 之和是幾位數？\n($\\log2\\approx0.301$，$\\log3\\approx0.477$)',
    answer: '39',
    hasImage: false,
  },
  {
    id: '17a560b9cb2',
    chapter: '數列級數',
    question:
      '一數列共 20 項，奇數項和為 24，偶數項和為 84，試問：\n(1) 若為等差數列，求公差。\n(2) 若為等比數列，求公比。',
    answer: '(1) 6 (2) $\\frac72$',
    hasImage: false,
  },
  {
    id: '17a560ec3d0',
    chapter: '數列級數',
    question:
      '假設實數 $a_1$、$a_2$、$a_3$、$a_4$ 是一個等差數列，且滿足 $0<a_1<2$ 及 $a_3=4$。若定義 $b_n=2^{a_n}$，則哪些選項是對的？\n(1) $b_1$、$b_2$、$b_3$、$b_4$ 是一個等比數列\n(2) $b_1<b_2$　　(3) $b_2>4$\n(4) $b_4>32$　　(5) $b_2\\times b_4=256$',
    answer: '(1)(2)(3)(4)(5)',
    hasImage: false,
  },
  {
    id: '17a5610d83d',
    chapter: '數列級數',
    question:
      '設實數組成的數列 $\\langle a_n\\rangle$ 是公比為 -0.8 的等比數列，實數組成的數列 $\\langle b_n\\rangle$ 是首項為 10 的等差數列。已知 $a_9>b_9$ 且 $a_{10}>b_{10}$。請選出正確的選項。\n(1) $a_9\\times a_{10}<0$　　(2) $b_{10}>0$\n(3) $b_9>b_{10}$　　(4) $a_9>a_{10}$　　(5) $a_8>b_8$',
    answer: '(1)(3)',
    hasImage: false,
  },
  {
    id: '17a57ce4c98',
    chapter: '數列級數',
    question:
      '小華準備向銀行貸款 300 萬元當做創業基金，其年利率為 3%，約定三年期滿一次還清貸款的本利和。銀行貸款一般以複利(每年複利一次)計息還款，但給小華創業優惠改以單利計息還款。試問在此優惠下，小華在三年期滿還款時可以比一般複利計息少繳多少元？',
    answer: '8181',
    hasImage: false,
  },
  {
    id: '17a57d3f244',
    chapter: '數列級數',
    question:
      '王小姐想利用銀行的薪資帳戶定時定額扣款，以年繳的方式參加儲蓄方案，希望在 10 年後存滿 10 萬元，若每年複利一次且年利率為 4%，請問她接下來這 10 年，每年年初會在帳戶固定提撥多少元給銀行？\n($1.04^{10}\\approx1.48$，整數以下四捨五入)',
    answer: '8013',
    hasImage: false,
  },
  {
    id: '17a57d7aeac',
    chapter: '數列級數',
    question:
      '酒杯一層一層往上堆疊，預計有 12 層，希望最上面的第一層 $3\\times5$ 個，第二層有 $4\\times6$ 個，第三層有 $5\\times7$ 個，依此類推。經過計算，應該準備多少個酒杯？',
    answer: '1214',
    hasImage: false,
  },
  {
    id: '17a57da7235',
    chapter: '數列級數',
    question:
      '一個袋子內有 1 號球 2 顆、2 號球 3 顆、3 號球 4 顆、$\\cdots$、$n$ 號球 $(n+1)$ 顆，若此袋內球號之總和為 1938，求 $n$。',
    answer: '17',
    hasImage: false,
  },
  {
    id: '17a57e93260',
    chapter: '數列級數',
    question:
      '設實數數列 $\\langle a_n\\rangle$ 對所有的正整數 $n$ 滿足 $a_{n+1}=\\dfrac{n(n+1)}2-a_n$。下列哪些選項正確。(1) 若 $a_1=1$，則 $a_2=1$\n(2) 若 $a_1$ 是整數，則此數列的每項都是整數\n(3) 若 $a_1$ 是無理數，則此數列的每項都是無理數\n(4) $a_2\\le a_4\\le\\cdots\\le a_{2n}\\le\\cdots$ ($n$ 為正整數)\n(5) 若 $a_k$ 是奇數，則 $a_{k+2}$、$a_{k+4}$、$\\cdots$、$a_{k+2n}$、$\\cdots$ 都是奇數 ($n$ 為正整數)',
    answer: '(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '18681c56895',
    chapter: '數列級數',
    question: '設 $a,b,c,d$ 四數依序成等比數列，若 $a+b=8$，$c+d=72$，求公比。',
    answer: '$\\pm3$',
    hasImage: false,
  },
  {
    id: '18681c63f4f',
    chapter: '數列級數',
    question: '等差數列 $\\langle a_n\\rangle$ 中，已知 $a_2=7$，$a_8=31$，若 $a_n=139$，求 $n$。',
    answer: '35',
    hasImage: false,
  },
  {
    id: '18681c8266c',
    chapter: '數列級數',
    question:
      '將兩等差數列 $\\langle7n-2\\rangle$、$\\langle11n-4\\rangle$ 中相同的數，依序取出形成一個新數列 $\\langle a_n\\rangle$，求 $a_{11}$。',
    answer: '810',
    hasImage: false,
  },
  {
    id: '18681c90a2f',
    chapter: '數列級數',
    question:
      '設 $a,b,c$ 三數成等比數列且此三數和為 49，又知 $a+1,b+1,c-3$ 成等差數列且 $a>b$，求 $a$。',
    answer: '25',
    hasImage: false,
  },
  {
    id: '17a57ee10a7',
    chapter: '數列級數',
    question:
      '實數數列 $\\langle a_n\\rangle$ 的各項均非 $0$，設 $a_3=a_2+a_1$，下列選項哪些為真？\n(1) 若 $a_1a_2>0$，則 $a_2a_3>0$\n(2) 若 $\\langle a_n\\rangle$ 成等差數列，則 $a_4=a_3+a_2$\n(3) 若 $\\langle a_n\\rangle$ 成等差數列，則 $a_4=4a_1$\n(4) 若 $\\langle a_n\\rangle$ 成等比數列，則 $a_4=a_3+a_2$\n(5) 若 $\\langle a_n\\rangle$ 成等比數列，則公比必為有理數',
    answer: '(1)(3)(4)',
    hasImage: false,
  },
  {
    id: '1823960c143',
    chapter: '數列級數',
    question:
      '用大小相同的圓點，一邊排 $n$ 個圓點的正六邊形，共需圓點 $a_n$ 個，如圖，例如 $a_3=19$，求 $a_{10}$。',
    answer: '271',
    hasImage: true,
  },
  {
    id: '1823963048a',
    chapter: '數列級數',
    question:
      '用單位長的不銹鋼條焊接如圖的四面體鐵架，圖中的小圈圈表示焊接點，兩層共 4 個焊接點，三層共 10 個焊接點，四層共 20 個焊接點。請問依此規律，推算六層共有幾個焊接點？',
    answer: '56',
    hasImage: true,
  },
  {
    id: '17a3872be1f',
    chapter: '數列級數',
    question: '等差數列 $\\langle a_n\\rangle$，若 $a_3=100$，$a_{10}=79$，求首項、前 20 項之和。',
    answer: '106；1550',
    hasImage: false,
  },
  {
    id: '17a3878a91c',
    chapter: '數列級數',
    question:
      '某巨蛋球場 $E$ 區共有 25 排座位，此區每一排都比其前一排多 2 個座位。小明坐在正中間那一排(即第 13 排)，發現此排共有 64 個座位，求此球場 $E$ 區的總座位數？',
    answer: '1600',
    hasImage: false,
  },
  {
    id: '17a38ef2658',
    chapter: '數列級數',
    question:
      '等比數列 $\\langle a_n\\rangle=1,6,36,216,\\cdots$，從第幾項開始會超過 $10^{10}$？\n($\\log2\\approx0.3010$，$\\log3\\approx0.4771$)',
    answer: '$14$',
    hasImage: false,
  },
  {
    id: '17a38f133a4',
    chapter: '數列級數',
    question: '等比級數 $\\dfrac1{16}+\\dfrac18+\\dfrac14+\\cdots+512$ 共有幾項？其和為？',
    answer: '14；$1023\\frac{15}{16}$',
    hasImage: false,
  },
  {
    id: '17a38f954aa',
    chapter: '數列級數',
    question: '某人存入銀行 10000 元，年利率 4%，半年計息，以單利計息，求滿一年本利和。',
    answer: '10400 元',
    hasImage: false,
  },
  {
    id: '17a38fa110e',
    chapter: '數列級數',
    question: '某人存入銀行 10000 元，年利率 4%，半年計息，以複利計息，求滿一年本利和。',
    answer: '10404 元',
    hasImage: false,
  },
  {
    id: '17a38ffc8f0',
    chapter: '數列級數',
    question:
      '(1) 求 $1+2+3+\\cdots+24$\n(2) 求 $1^2+2^2+3^2+\\cdots+24^2$\n(3) 求 $1^3+2^3+3^3+\\cdots+24^3$',
    answer: '(1) 300 (2) 4900 (3) 90000',
    hasImage: false,
  },
  {
    id: '17a39013d19',
    chapter: '數列級數',
    question: '求 $11^3+12^3+13^3+\\cdots+20^3$',
    answer: '41075',
    hasImage: false,
  },
  {
    id: '17a39109975',
    chapter: '數列級數',
    question:
      '下列各選項的遞迴關係式，哪一個所得的 $\\langle a_n\\rangle$ 為等差？哪一個所得的 $\\langle a_n\\rangle$ 為等比？\n(1) $a_{n+1}=a_n+n$　　(2) $a_{n+1}=3a_n$\n(3) $a_{n+1}=a_n+5$　　(4) $a_{n+1}=\\dfrac{a_n} n$\n(5) $a_{n+1}=2a_n+3$',
    answer: '(3)；(2)',
    hasImage: false,
  },
  {
    id: '17a3912f008',
    chapter: '數列級數',
    question:
      '數列 $\\langle a_n\\rangle$ 滿足 $a_1=\\dfrac17$，若 $n\\ge1$，則 $a_{n+1}=\\dfrac72a_n(1-a_n)$，求 $a_{100}$。',
    answer: '$\\frac37$',
    hasImage: false,
  },
  {
    id: '17900fd2403',
    chapter: '數列級數',
    question:
      '一等差數列 $\\langle a_n\\rangle$，若 $a_{11}=19$，$a_{20}=-26$，且 $S_n$ 表前 $n$ 項和，則 $S_n$ 有最大值為？',
    answer: '$511$',
    hasImage: false,
  },
  {
    id: '17901003c6e',
    chapter: '數列級數',
    question:
      '設數列 $\\langle a_n\\rangle$ 之前 $n$ 項的和 $S_n=a_1+a_2+\\dots+a_n=3n^2-2n-5$，則下列選項何者正確？\n(A) $a_1=-4$\n(B) $a_2=3$\n(C) $a_{20}=a_{19}+6$\n(D) $a_{34}>200$\n(E) $\\langle a_n\\rangle$ 是等差數列',
    answer: '(A)(C)',
    hasImage: false,
  },
  {
    id: '17901015b15',
    chapter: '數列級數',
    question:
      '設數列 $\\langle a_n\\rangle$ 是等比數列，其公比為實數且 $a_3=48$，$a_6=-384$，則此數列前 $10$ 項之和為？',
    answer: '$-4092$',
    hasImage: false,
  },
  {
    id: '17901027cbd',
    chapter: '數列級數',
    question: '試求級數和：$11^3+12^3+13^3+\\dots+20^3=$？',
    answer: '$41075$',
    hasImage: false,
  },
  {
    id: '1790103334d',
    chapter: '數列級數',
    question: '求 $1\\times2+2\\times3+3\\times4+\\dots+30\\times31=$？',
    answer: '$9920$',
    hasImage: false,
  },
  {
    id: '1790106289d',
    chapter: '數列級數',
    question:
      '假設定期存款的年利率為 $2\\%$，小明每年初存進 $1000$ 元，定期存十五年\n(1)若單利計息，每年為一期，則期滿後之本利和為？\n(2)若複利計息，每年為一期，則期滿後之本利和為？($1.02^{15}\\approx1.346$)',
    answer: '(1) $17400$ 元 (2) $17646$ 元',
    hasImage: false,
  },
  {
    id: '17901070ba5',
    chapter: '數列級數',
    question: '若 $200\\le n\\le900$，且 $n$ 為自然數，則這些自然數中 7 的倍數之和為？',
    answer: '54950',
    hasImage: false,
  },
  {
    id: '179010f94b5',
    chapter: '數列級數',
    question:
      '電影院裡相鄰兩排的座位，後排都比前排多 $2$ 個位子。已知最前排有 $12$ 個座位，且座位總數不超過 $600$ 個。若此電影院能容納最多的排數為 $x$，且最多的總座位數為 $y$，則 $x+y=$？',
    answer: '$589$',
    hasImage: false,
  },
  {
    id: '179011103d5',
    chapter: '數列級數',
    question:
      '設 $\\langle a_n\\rangle$ 為一個首項不為 $0$ 的等比數列，滿足 $2a_1+a_2=0$ 且 $a_1+a_2+a_3=3$，則前 $10$ 項的和為？',
    answer: '$-341$',
    hasImage: false,
  },
  {
    id: '1790111e4ab',
    chapter: '數列級數',
    question: '有一等比級數，前 5 項的和為 60，前 10 項的和為 180，求第 16 項至第 20 項的和。',
    answer: '480',
    hasImage: false,
  },
  {
    id: '1790112e430',
    chapter: '數列級數',
    question:
      '邊長為 1 公分的正立方體積木堆疊如圖所示：第一層用 1 個積木，第二層用 3 個積木，第三層用 6 個積木，以此類推，試問：\n(1) 第二十層的積木數\n(2) 若堆完 20 層，求此 20 層的積木總數',
    answer: '(1) 210 (2) 1540',
    hasImage: true,
  },
  {
    id: '1790118bdaf',
    chapter: '數列級數',
    question:
      '在坐標平面上，螞蟻由原點出發。牠第一次向右移動 $1$ 單位，到達點 $P_1(1,0)$，第二次向上移動 $\\frac{1}{2}$ 單位，到達點 $P_2\\left(1,\\frac{1}{2}\\right)$，而後依照先向右再向上的方式移動，而且第 $2k-1$ 次向右移動 $2k-1$ 單位，第 $2k$ 次向上移動 $\\left(\\frac{1}{2}\\right)^k$ 單位，$k$ 為正整數。如此依序移動到點 $P_3$，$P_4$，$P_5$，...，則點 $P_{11}$ 的坐標為？',
    answer: '$\\left(36,\\frac{31}{32}\\right)$',
    hasImage: false,
  },
  {
    id: '179490dab91',
    chapter: '數列級數',
    question:
      '小安的媽媽每年會將 $5$ 萬元存入銀行帳戶作為教育基金，約定 $10$ 年後所有儲蓄的基金(共 $50$ 萬元)只能用在支付大學學費，只有利息小安才能自行運用。即將上大學的小安，打算領出累積的利息，用來購買筆電。已知銀行定存的年利率為 $2\\%$，小安希望選擇在預算內，最高價位的筆電，下列哪一台筆電的價格會是小安的選擇？($1.02^{10}\\approx1.22$)\n(A) $57000$ 元 (B) $62000$ 元 (C) $65000$ 元 (D) $69000$ 元 (E) $81000$ 元',
    answer: '(A)',
    hasImage: false,
  },
  {
    id: '17949103f4d',
    chapter: '數列級數',
    question:
      '數列 $\\langle a_n\\rangle$ 的首項為 $107$，若符合遞迴關係式 $a_n=a_{n-1}-3,n\\ge2$。令 $S_n$ 表示此數列的前 $n$ 項和，求 $n$ 為多少時，$S_n$ 會有最大值？\n(A) $35$ (B) $36$ (C) $37$ (D) $38$ (E) $39$',
    answer: '(B)',
    hasImage: false,
  },
  {
    id: '17949124c3c',
    chapter: '數列級數',
    question:
      '滿足數列：$1,2,6,15,\\dots$之前四項的遞迴關係式可表示為下列哪一個選項？\n(A) $a_n=a_{n-1}+2n-1$\n(B) $a_n=a_{n-1}+3n-2$\n(C) $a_n=a_{n-1}+3n-5$\n(D) $a_n=a_{n-1}+(n-1)^2$\n(E) $a_n=a_{n-1}+2^{2n-4}',
    answer: '(D)',
    hasImage: false,
  },
  {
    id: '179492402bc',
    chapter: '數列級數',
    question:
      '一數列 $\\langle a_n\\rangle$，其前 $n$ 項的總和 $S_n=n^2-11n$，其中 $n$ 為正整數，下列選項何者正確？\n(A) $a_1=-10$\n(B) $a_n=-2n-12$，$n$ 為正整數\n(C) $\\langle a_n\\rangle$ 是公差為 $2$ 的等差數列\n(D) $S_n$ 有最小值時，$n=5$ 或 $ 6$\n(E) $\\langle a_n^2\\rangle$ 為等差數列',
    answer: '(A)(C)(D)',
    hasImage: false,
  },
  {
    id: '179492d1179',
    chapter: '數列級數',
    question:
      '若公差不為 0 的等差數列中，$a_1$、$a_2$ 與 $a_5$ 依序形成等比數列，求 $\\dfrac{a_4}{a_3}$。',
    answer: '$\\frac75$',
    hasImage: false,
  },
  {
    id: '179492f0517',
    chapter: '數列級數',
    question:
      '已知三正數成等比且其和為 39，若將其依序減去 2，5，20 後，三數成等差，求原三數中最大之數。',
    answer: '27',
    hasImage: false,
  },
  {
    id: '17949318701',
    chapter: '數列級數',
    question:
      '觀察一系列的圖：第 1 個圖為一個兩股長度為 1 的等腰直角三角形。連接每個黑色三角形的三邊中點，然後去掉所圍的三角形，就得到下一個圖。則前 6 個圖總共有幾個黑色三角形？',
    answer: '364',
    hasImage: true,
  },
  {
    id: '17949334a55',
    chapter: '數列級數',
    question:
      '小毛趁新冠肺炎時房價大跌積極入手房子一棟，簽約時先付 100 萬元當頭期款，餘款分四十期付清。已知四十期款額成等差數列，前兩期共 40.5 萬元，三、四兩期共 38.5 萬元，求此棟房屋總價。',
    answer: '530 萬元',
    hasImage: false,
  },
  {
    id: '1794935ffb2',
    chapter: '數列級數',
    question:
      '如圖是 3 層的積木堆。最上層有 $3\\times1$ 塊積木，每往下一層，長邊增加 2 塊積木，寬邊增加 1 塊積木，即第二層有 $5\\times2$ 塊積木，第三層有 $7\\times3$ 塊積木。試問：如果仿照上面的方式，由上往下堆疊 10 層積木，則需要準備多少塊積木？',
    answer: '825',
    hasImage: true,
  },
];

// 數據分析
const statistics: Question[] = [
  {
    id: '18837949f06',
    chapter: '數據分析',
    question: '有 30 筆數據 $(x_i,y_i)$，若 $y_i=-5x_i+1$，求 $x$ 與 $y$ 的相關係數。',
    answer: '-1',
    hasImage: false,
  },
  {
    id: '18837a18811',
    chapter: '數據分析',
    question:
      '下列敘述，何者正確？\n(1) 相關係數越大，表示兩組數據的相關程度越高\n(2) 迴歸直線的斜率越大，表示相關程度越高\n(3) 若數據全落在一直線上，表示兩組資料呈現完全相關\n(4) 相關係數與迴歸直線的斜率相同\n(5) 相關係數易受極端數據的影響',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '187c3456a83',
    chapter: '數據分析',
    question: '下列各數對 $(x,y)$ 的散布圖中，哪些是正相關？哪些是負相關？哪些是零相關？',
    answer: '略',
    hasImage: true,
    style: {
      width: '100%',
    },
  },
  {
    id: '187c689869c',
    chapter: '數據分析',
    question:
      '已知某公司連續四年的營業額成長率依序為 1.2%, 3.3%, 12.6%, 3.8%，求這四年營業額的平均成長率。(可用計算機，四捨五入至小數點後第二位)',
    answer: '5.14%',
    hasImage: false,
  },
  {
    id: '187c68e30fc',
    chapter: '數據分析',
    question:
      '某公司 216 名員工的薪資分配如下，試求：第 1 四分位數、第 3 四分位數、第 35 百分位數\n$\\begin{array}{|c|c|}\\hline \\$&25&28&35&39&42&46&51&55\\\\\\hline n&20&34&21&22&26&39&32&22\\\\\\hline\\end{array}$',
    answer: '31.5; 48.5; 39',
    hasImage: false,
  },
  {
    id: '187c6931f1f',
    chapter: '數據分析',
    question:
      '下列五組數據，請比較其標準差的大小關係\nA: 1, 3, 5, 7, 9　　B: 1, 1, 5, 9, 9\nC: 2, 4, 6, 8, 10　　D: 2, 3, 6, 9, 10\nE: 3, 5, 6, 7, 9',
    answer: 'E<A=C<D<B',
    hasImage: false,
  },
  {
    id: '187c6970373',
    chapter: '數據分析',
    question:
      '測量一物件的長度 9 次，得其長為 2.53, 2.55, 2.51, 2.56, 2.57, 2.52, 2.59, 2.58, 2.54，將上面每一個數據都乘以 100，再減去 250 的新數據為 3, 5, 1, 6, 7, 2, 9, 8, 4。若原數據的標準差為 $\\sigma_x$，新數據的標準差為 $\\sigma_y$，求 $\\dfrac{\\sigma_y}{\\sigma_x}$。',
    answer: '100',
    hasImage: false,
  },
  {
    id: '186f263ead2',
    chapter: '數據分析',
    question:
      '已知下列各組數據，\n$A: 1,2,3,4,5$\n$B: 3,3,3,3,3$\n$C: -6,-7,-8,-9,-10$\n$D:2,4,6,8,10$\n$E:\\dfrac{23}7,\\dfrac{24}7,\\dfrac{25}7,\\dfrac{26}7,\\dfrac{27}7$\n請比較其標準差的大小關係',
    answer: 'D>A=C>E>B',
    hasImage: false,
  },
  {
    id: '186f265a745',
    chapter: '數據分析',
    question:
      '已知有五組資料 $(x_i,y_i)$ 分別為 (8, 11), (9, 12), (10, 10), (11, 8), (12, $t$)。若 $y$ 對 $x$ 的迴歸直線為 $y=-\\dfrac45x+18$，求 $t$。',
    answer: '9',
    hasImage: false,
  },
  {
    id: '1889e5bd939',
    chapter: '數據分析',
    question: '設 $1,2,3,...,n$ 的標準差為 $\\sqrt{10}$，求 $n$。',
    answer: '11',
    hasImage: false,
  },
  {
    id: '186f266c08f',
    chapter: '數據分析',
    question:
      '已知 9 個人的數學成績，其算術平均數為 56 分，標準差 4 分，且其中 7 個人的成績為 50, 52, 54, 55, 57, 60, 62，求另外兩人的成績。',
    answer: '61, 53',
    hasImage: false,
  },
  {
    id: '1855e2ca335',
    chapter: '數據分析',
    question:
      '班上 50 個學生參加科目 A、B 的能力測驗，各科分數計算均為 0 分至 100 分。已知科目 A 的平均成績為 60 分，標準差為 15 分；科目 B 的平均成績為 $k$ 分，標準差為 12 分。由最小平方法得到科目 B 對科目 A 的迴歸直線為 $y=\\dfrac34x+17$，試選出正確的選項。\n(1) 全班有 25 人科目 A 的分數低於 60 分\n(2) 由標準差可知科目 A 的全距一定大於科目 $B$ 的全距\n(3) $k>60$\n(4) 科目 A 與科目 B 的相關係數大於 0.8\n(5) 已知班上的小櫻同學在科目 A 得到 72 分，則利用迴歸直線可知其科目 B 成績一定為 71 分',
    answer: '34',
    hasImage: false,
  },
  {
    id: '18515156496',
    chapter: '數據分析',
    question:
      '七人制的橄欖球賽中，在場上共有七名選手，某橄欖球聯賽一共有甲、乙、丙、丁、戊 5 支隊伍參加，以下統計表為各隊的明星球員人數與此聯賽中的總計勝場數：\n$$\\begin{array}{|c|c|}\\hline隊伍&甲&乙&丙&丁&戊\\\\\\hline明星球員人數(x)&1&2&3&4&5\\\\\\hline勝場數(y)&4&4&6&10&6\\\\\\hline\\end{array}$$',
    answer: '',
    hasImage: false,
  },
  {
    id: '185151655ed',
    chapter: '數據分析',
    question: '試求五個隊伍的平均勝場數為 $\\textcirc{8-1}$ 場。(選填題，4 分)',
    answer: '6',
    hasImage: false,
  },
  {
    id: '185151796f2',
    chapter: '數據分析',
    question:
      '$x$ 和 $y$ 的相關係數最接近下列哪一個選項？(單選題，4 分)\n(1) 0.25　(2) 0.44　(3) 0.64　(4) 0.72　(5) 0.81',
    answer: '(3)',
    hasImage: false,
  },
  {
    id: '1851519085a',
    chapter: '數據分析',
    question:
      '利用 $y$ 對 $x$ 的迴歸直線來預測勝場數，即若某隊伍為全明星隊伍 ($x=7$)，則可預測其勝場數為何？(非選擇題，7 分)',
    answer: '10',
    hasImage: false,
  },
  {
    id: '184efc44a03',
    chapter: '數據分析',
    question:
      '一個 40 位學生的班級，某次數學考試，每位學生的成績都未超過 80 分且皆為零或正整數。老師以下列方式調整成績：原始成績為 $x$ 分的學生，調整後的成績為 $7\\sqrt x+18$ 分 (四捨五入到整數)。試選出正確的選項。\n(1) 若阿光原始成績為 25 分，則調整後的成績為 52 分\n(2) 若小淳調整後的成績為 60 分，則原始成績可能為 36 分\n(3) 班上每位學生調整後的成績必定都比原始成績高\n(4) 已知小文的原始成績恰等於全班原始成績的中位數，則小文調整後的成績仍然等於全班調整後的成績的中位數\n(5) 調整後的成績有可能比原始成績高 32 分',
    answer: '234',
    hasImage: false,
  },
  {
    id: '184efaa464c',
    chapter: '數據分析',
    question:
      '小明從衛福部網站得到 105 年事故死亡人數的資料，如表。其中事故死亡人數占死亡人數百分比是計算 $\\dfrac{\\text{事故死亡人數}}{\\text{死亡人數}}\\times100\\%$ 的近似值而得。例如年齡為 10-14 歲這一組，事故死亡人數占死亡人數百分比為 $\\dfrac{37}{150}\\times100\\%\\approx24.6\\%$。表中每組年齡中事故死亡人數分別為 $a,b,c,d,e$，試問這五個數中最小的值為哪一個？\n$$\\begin{array}{|c|c|}\\hline年齡組別&死亡人數&事故死亡人數&事故死亡人數占死亡人數百分比\\\\\\hline10-14&150&37&24.6\\%\\\\\\hline15-19&497&a&58.9\\%\\\\\\hline20-24&734&b&42.2\\%\\\\\\hline25-29&851&c&29.6\\%\\\\\\hline30-34&1534&d&21.1\\%\\\\\\hline35-39&2697&e&13.7\\%\\\\\\hline\\end{array}$$\n(1) $a$　(2) $b$ 　(3) $c$　(4) $d$　(5) $e$',
    answer: '3',
    hasImage: false,
  },
  {
    id: '184a7f61eb4',
    chapter: '數據分析',
    question:
      '已知某班在模擬考的數學成績 (X) 與英文成績 (Y) 的平均數分別為 $\\mu_X=50$，$\\mu_Y=65$，且其相關係數為 0.6。若 Y 對 X 的迴歸直線經過點 (40, 57)，試選出正確的選項。\n(1) Y 對 X 的迴歸直線斜率為 0.6\n(2) Y 的標準差大於 X 的標準差\n(3) 若該班的班長在此次的模擬考數學考 50 分，則英文必定是 65 分\n(4) 若另一筆資料 Z 滿足 $Z=-2X+30$，則 Z 與 Y 的相關係數仍為 0.6\n(5) 承 (4)，Y 對 Z 的迴歸直線斜率為 -0.4',
    answer: '25',
    hasImage: false,
  },
  {
    id: '184a787b931',
    chapter: '數據分析',
    question:
      '日本考試時使用的偏差值計分方法如下：將全部考生的原始成績 $x$ 乘上 $a$ ($a>0)$ 倍後再加上 $b$，得到新成績 $y=ax+b$。選定適當的 $a,b$，使得新成績 $y$ 的平均分數為 50 分、標準差為 10 分，如此的新成績 $y$ 就稱為考生的偏差值。若某試考試小帆數學考了 75 分，全部考生數學平均為 60 分，標準差為 12.5 分。求她數學的偏差值。',
    answer: '62',
    hasImage: false,
  },
  {
    id: '184a78310fa',
    chapter: '數據分析',
    question:
      '某個球隊球員的身高體重如表所示，請問下列敘述何者正確？\n$$\\begin{array}{|c|c|}\\hline身高&175&168&169&180&181&177\\\\\\hline體重&70&60&65&70&75&80\\\\\\hline\\end{array}$$\n(1) 身高的中位數為 169\n(2) 身高的標準差為 5\n(3) 身高與體重的相關係數為 $\\dfrac1{250}$\n(4) 體重的眾數為 70\n(5) 身高與體重是正相關',
    answer: '245',
    hasImage: false,
  },
  {
    id: '184932938f3',
    chapter: '平面向量',
    question:
      "今有兩組資料 $x,y$ 如下表：\n$$\\begin{array}{|c|c|}\\hline x&6&8&10&12&14\\\\\\hline y&16&15&17&a&b\\\\\\hline\\end{array}$$\n已知 $y$ 對 $x$ 的最適合直線為 $y=0.4x+13$，若將兩組資料 $x,y$ 分別標準化即 $x_i'=\\dfrac{x_i-\\mu_x}{\\sigma_x}$，$y_i'=\\dfrac{y_i-\\mu_y}{\\sigma_y}$，且 $y'$ 對 $x'$ 的最適合直線為 $y'=0.8x'+k$。試選出正確的選項。\n(1) $k=0$\n(2) 兩組資料 $x,y$ 的相關係數 $r<0.8$\n(3) $a+b=37$\n(4) $\\sigma_y=\\sqrt2$\n(5) $\\sigma_{y'}=\\dfrac{\\sqrt2}{0.8}$",
    answer: '134',
    hasImage: false,
  },
  {
    id: '1848b9e72e1',
    chapter: '數據分析',
    question:
      '下列各組資料，何者的標準差最大？\nA: 1, 2, 3, 4, 5\nB: 2011, 2012, 2013, 2014, 2015\nC: 1, 3, 5, 7, 9\nD: -10, -20, -30, -40, -50\nE: -501, -502, -503, -504, -505',
    answer: 'D',
    hasImage: false,
  },
  {
    id: '183d8c9fef2',
    chapter: '數據分析',
    question:
      '研究 4 位同學的物理 ($x$) 與數學 ($y$) 成績級分關係。在經過測驗後記錄這 4 位學生的物理與數學成績二維數據，如下表。\n$$\\begin{array}{|c|c|}\\hline x&5&s&t&6\\\\\\hline y&7&9&8&8\\\\\\hline\\end{array}$$\n若物理平均 $\\mu_x$ 比數學平均 $\\mu_y$ 少 2 分且相關係數 $r_{x,y}=\\dfrac12$，試求數對 $(s,t)=\\textcirc{13-1}\\textcirc{13-2}$。',
    answer: '67',
    hasImage: false,
  },
  {
    id: '183d75570f6',
    chapter: '數據分析',
    question:
      '某班有學生 43 人，數學科學期成績的算術平均數為 62 分，標準差為 16 分。有兩位同學原本分數分別為 10 分和 65 分，因為曠課超過三分之一節數而改為 0 分，重新計算後，該班新的平均數 $\\mu$ 和標準差 $\\sigma$，試選出正確的選項。\n(1) $\\mu\\ge62$；$\\sigma\\le16$　(2) $\\mu\\le62$；$\\sigma\\le16$　(3) $\\mu\\ge62$；$\\sigma\\ge16$\n(4) $\\mu\\le62$；$\\sigma\\ge16$　(5) $\\mu<62$，無法確定 $\\sigma$ 與 16 的大小關係',
    answer: '4',
    hasImage: false,
  },
  {
    id: '182f1e1e383',
    chapter: '數據分析',
    question:
      '已知有一組二維數據 $(x_i,y_i)$，$i=1,2,3,\\dots$，滿足 $\\mu_x=12$，$\\mu_y=8$，$\\sigma_x=3$，$\\sigma_y=5$。若二維數據的迴歸直線方程式為 $y-\\mu_y=m(x-\\mu_x)$，則斜率 $m$ 的確切範圍為下列哪一項？\n(1) $-1\\le m\\le1$　　(2) $-3\\le m\\le3$　　(3) $-5\\le m\\le5$\n(4) $-\\dfrac35\\le m\\le\\dfrac35$　　(5) $-\\dfrac53\\le m\\le\\dfrac53$',
    answer: '5',
    hasImage: false,
  },
  {
    id: '182f2041a1c',
    chapter: '數據分析',
    question:
      '$T$ 分數為常用的一種標準分數。某次測驗共有 100 人參加，設 $x_k$ 為編號 $k$ 號考生的原始分數，其中 $1\\le k\\le100$，令 $\\mu$ 為原始分數的算術平均數，$\\sigma$ 為原始分數的標準差，則 $k$ 號考生所得到的 $T$ 分數計算公式如下：\n$$T_k=10\\times\\frac{x_k-\\mu}{\\sigma}+50$$\n試選出正確的選項。\n(1) 若數對 $(\\mu,\\sigma)=(60,6)$，則原始分數為 48 分的考生的 $T$ 分數大於原始分數\n(2) 若數對 $(\\mu,\\sigma)=(60,6)$，且某考生的原始分數與 $T$ 分數相同，則此考生的原始分數大於 90 分\n(3) 原始分數的標準差 $\\sigma$ 愈大，則原始分數與 $T$ 分數的相關係數愈小\n(4) 在 $\\sigma$ 不為 0 的情況下，無論本次測驗的原始分數如何分布，$T$ 分數的算術平均數必為 50\n(5) 在 $\\sigma$ 不為 0 的情況下，無論本次測驗的原始分數如何分布，$T$ 分數的標準差必為 10',
    answer: '45',
    hasImage: false,
  },
  {
    id: '17ea8bf46a3',
    chapter: '數據分析',
    question:
      '已知 8 名國小學童的體重為 21, 18, 26, 24, 21, 27, 24, 23 公斤，求眾數、中位數 $Me$、算術平均數 $\\mu$。',
    answer: '21, 24；23.5；23',
    hasImage: false,
  },
  {
    id: '17ea8bfcd2b',
    chapter: '數據分析',
    question:
      '小茜的月考各科成績與學分數如表，試求其成績的加權平均。\n$$\\begin{array}{|c|c|}\\hline科目&國&英&數&歷&地&公\\\\\\hline成績&88&76&92&80&74&82\\\\\\hline學分&4&4&4&3&3&2\\\\\\hline\\end{array}$$',
    answer: '82.5',
    hasImage: false,
  },
  {
    id: '17ea8c968dd',
    chapter: '數據分析',
    question:
      '求 11 個數字 53, 60, 60, 63, 64, 70, 76, 80, 85, 85, 85 的眾數、中位數、算術平均數。',
    answer: '85；70；71',
    hasImage: false,
  },
  {
    id: '17ea8c10f22',
    chapter: '數據分析',
    question:
      '某生的月考各科成績與學分數如表，試求其成績的加權平均。\n$$\\begin{array}{|c|c|}\\hline科目&國&英&數&物&化&生\\\\\\hline成績&85&90&81&76&82&93\\\\\\hline學分&4&4&4&3&3&2\\\\\\hline\\end{array}$$',
    answer: '84.2',
    hasImage: false,
  },
  {
    id: '17ea8c172ed',
    chapter: '數據分析',
    question: '求 2, 8, 16, 64, 64 的幾何平均數。',
    answer: '16',
    hasImage: false,
  },
  {
    id: '17ea8c29091',
    chapter: '數據分析',
    question:
      '某公司的股價漲跌劇烈，去年底收盤的價格為 20 元，到今年一月底飆漲了 60%，然後經過一個月又下跌了 60%，求：\n(1) 經過這兩個月的漲跌，股價變為多少元？\n(2) 這兩個月的平均月成長率',
    answer: '(1) 12.8 (2) -20%',
    hasImage: false,
  },
  {
    id: '17ea8c2d43f',
    chapter: '數據分析',
    question: '求 3, 4, 6, 9, 12 的幾何平均數。',
    answer: '6',
    hasImage: false,
  },
  {
    id: '17ea8c4f7eb',
    chapter: '數據分析',
    question:
      '一家公司成立的第一年營收 1000 萬元，之後四年的營收年成長率依序為 20%, -30%, -20%, 30%，求：(可按計算機)\n(1) 第五年的營收為幾萬元？\n(2) 平均年成長率',
    answer: '(1) 873.6 (2) -3.32%',
    hasImage: false,
  },
  {
    id: '17ea8c90f65',
    chapter: '數據分析',
    question:
      '求五個數值 2, 5, 6, 8, 9 的算術平均數 $\\mu$、離差平方和 $S_{xx}$、變異數 $\\sigma^2$、標準差 $\\sigma$',
    answer: '6；30；6；$\\sqrt6$',
    hasImage: false,
  },
  {
    id: '17ea8c6a418',
    chapter: '數據分析',
    question:
      '設數值 $x_1+x_2+\\cdots+x_8=80$，且 $x_1^2+x_2^2+\\cdots+x_8^2=5800$，求 $x_1,x_2,\\cdots,x_8$ 的變異數 $\\sigma^2$、標準差 $\\sigma$。',
    answer: '625；25',
    hasImage: false,
  },
  {
    id: '17ea8c9a3a2',
    chapter: '數據分析',
    question: '求六個數值 1, 1, 3, 7, 8, 10 的算術平均數、離差平方和、變異數、標準差。',
    answer: '5；74；$\\frac{37}3$；$\\frac{\\sqrt{111}}3$',
    hasImage: false,
  },
  {
    id: '17ea8c77fde',
    chapter: '數據分析',
    question:
      '50 個數字 $x_1,x_2,x_3,\\cdots,x_{50}$ 的和為 950，平方和為 31250，求變異數 $\\sigma^2$、標準差 $\\sigma$。',
    answer: '264；$2\\sqrt{66}$',
    hasImage: false,
  },
  {
    id: '17ea8cabba7',
    chapter: '數據分析',
    question:
      '若一組數據 $x_i$ 的全距為 60，中位數為 55，算術平均數為 50，標準差為 12，求：\n(1) $x_i+20$ 的全距、中位數、平均、標準差\n(2) $3x_i$ 的全距、中位數、平均、標準差\n(3) $10-4x_i$ 的全距、中位數、平均、標準差',
    answer: '(1) 60；75；70；12 (2) 180；165；150；36 (3) 240；-210；-190；48',
    hasImage: false,
  },
  {
    id: '17ea8ca21f3',
    chapter: '數據分析',
    question:
      '根據統計資料，七月份臺灣地區的平均氣溫是攝氏 30 度，標準差是攝氏 5.5 度。已知當攝氏溫度為 $x$ 時，華氏溫度為 $y=\\dfrac95x+32$；若用華氏溫度表示，設七月份臺灣地區的平均氣溫是華氏 $a$ 度，標準差是華氏 $b$ 度，求數對 $(a,b)$。',
    answer: '(86, 9.9)',
    hasImage: false,
  },
  {
    id: '17ea8ca8c9f',
    chapter: '數據分析',
    question:
      '若一組數據 $x_i$ 的算術平均數為 70，標準差為 8，求：\n(1) $x_i+32$ 的算術平均數、標準差\n(2) $5x_i$ 的算術平均數、標準差\n(3) $-2x_i+9$ 的算術平均數、標準差',
    answer: '(1) 102；8 (2) 350；40 (3) -131；16',
    hasImage: false,
  },
  {
    id: '17ea8cbe618',
    chapter: '數據分析',
    question:
      '某班 50 位學生數學段考成績不佳，平均數為 48 分，標準差是 8 分，老師決定將成績以 $y=ax+b$ 的線性方式加分 (其中 $x$ 為原分數，$y$ 為新成績)，將成績平均提高至 61 分，標準差 9 分，若某學生加分後成績至少 70 分，則此生原來至少考幾分？',
    answer: '56',
    hasImage: false,
  },
  {
    id: '17ea8cc6bdf',
    chapter: '數據分析',
    question:
      '小華本次月考分數如表，請用 $Z$ 分數判斷表現最好與最差的科目。\n$$\\begin{array}{|c|c|}\\hline &成績&班平均&標準差\\\\\\hline英文&70&80&5\\\\\\hline數學&60&50&15\\\\\\hline物理&60&70&10\\\\\\hline化學&80&70&20\\\\\\hline\\end{array}$$',
    answer: '數學；英文',
    hasImage: false,
  },
  {
    id: '17ea8cd11a4',
    chapter: '數據分析',
    question:
      '設一維數據之中有數值 8、22、25，數值 8 經標準化後成為 $-\\dfrac23$，數值 22 經標準化後成為 $\\dfrac12$，則數值 25 經標準化會變成多少？',
    answer: '$\\frac34$',
    hasImage: false,
  },
  {
    id: '17ea8cdceb2',
    chapter: '數據分析',
    question:
      '表為小明參加考試的原始分數及全班的平均與標準差。請用 $Z$ 分數判斷小明哪一個科目考得最好？\n$$\\begin{array}{|c|c|}\\hline&國&英&數&物&化\\\\\\hline小明分數&92&83&76&74&80\\\\\\hline全班平均&72&62&56&50&66\\\\\\hline全班標準差&5.0&6.5&6.0&8.6&7.0\\\\\\hline\\end{array}$$',
    answer: '國文',
    hasImage: false,
  },
  {
    id: '17ea8ce463a',
    chapter: '數據分析',
    question:
      '一組數據中的兩個數字 50 及 70 經標準化後成為 -2 及 3，求此數據之算術平均數，標準差。',
    answer: '58；4',
    hasImage: false,
  },
  {
    id: '17ea8ce8f49',
    chapter: '數據分析',
    question:
      '已知 12 個數值的算術平均數為 18，標準差為 3，刪去其中的 21 和 25 兩個數字後，求所剩 10 個數字的算術平均數、標準差。',
    answer: '17；2',
    hasImage: false,
  },
  {
    id: '17ea8cf31fb',
    chapter: '數據分析',
    question:
      '班上有男生 30 人與女生 20 人，男生成績的算術平均數為 70 分，標準差為 10 分；女生成績的算術平均數為 75 分，標準差為 15 分。求全班 50 人的算術平均數及標準差。',
    answer: '72；$\\sqrt{156}$',
    hasImage: false,
  },
  {
    id: '17ea8cfb7bb',
    chapter: '數據分析',
    question:
      '一群數字共 20 個數值，算術平均數為 12，標準差為 5，刪去其中的 8, 6, 5 三數後，求所剩 17 個數字的算術平均數及標準差。',
    answer: '13；$\\sqrt{\\frac{382}{17}}$',
    hasImage: false,
  },
  {
    id: '17ea8d00cd8',
    chapter: '數據分析',
    question:
      '甲、乙兩班的考試成績如表，若將兩班資料合併，求這 100 人的算術平均數、標準差。\n$$\\begin{array}{|c|c|}\\hline &人數&平均&標準差\\\\\\hline甲班&40&70&10\\\\\\hline乙班&60&65&8\\\\\\hline\\end{array}$$',
    answer: '67；$\\sqrt{84.4}$',
    hasImage: false,
  },
  {
    id: '17ea6e8b46b',
    chapter: '數據分析',
    question:
      '高中某班 35 位學生數學月考的成績均為 10 的倍數，將該班成績做成長條圖如圖，求該班成績之全距、中位數、算術平均數。',
    answer: '60；50；$51\\frac37$',
    hasImage: true,
  },
  {
    id: '17ea6e9be14',
    chapter: '數據分析',
    question:
      '高一孝班進行數學測驗，其成績次數分配如下，請問：\n$$\\begin{array}{|c|c|}\\hline分數&20&30&40&50&60&70&80&90&100&合計\\\\\\hline人數&1&2&2&3&4&11&17&8&2&50\\\\\\hline\\end{array}$$\n(1) 求算術平均數\n(2) 若標準差為 $\\sqrt k$，求 $k$',
    answer: '(1)$72$ (2)$312$',
    hasImage: false,
  },
  {
    id: '17ea6ea83e0',
    chapter: '數據分析',
    question: '擲骰子 100 次，將其結果記錄成長條圖如圖，求算術平均數、中位數。',
    answer: '3.1；3',
    hasImage: true,
  },
  {
    id: '17ea6eb4672',
    chapter: '數據分析',
    question:
      '老師對全班 $40$ 個同學小考 $10$ 個英文單字，批改後成績如表，求全距、中位數、算術平均數、標準差。\n$$\\begin{array}{|c|c|}\\hline成績&40&50&60&70&80&90&100\\\\\\hline人數&2&3&5&10&8&6&6\\\\\\hline\\end{array}$$',
    answer: '$60$；$75$；$75.25$；$\\frac{\\sqrt{4399}}4$',
    hasImage: false,
  },
  {
    id: '17ea6ec8a28',
    chapter: '數據分析',
    question: '1~101 的整數共 101 個，求第 1 四分位數、第 3 四分位數、四分位距。',
    answer: '26；76；50',
    hasImage: false,
  },
  {
    id: '17ea6ec8a29',
    chapter: '數據分析',
    question: '前 50 個正奇數 $1,3,5,\\cdots,97,99$，求第 1 四分位數、第 3 四分位數、四分位距。',
    answer: '25；75；50',
    hasImage: false,
  },
  {
    id: '187bed168fe',
    chapter: '數據分析',
    question:
      '數列 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, ..., 40 共有 820 項，求第 30 百分位數、第 46 百分位數。',
    answer: '22；27',
    hasImage: false,
  },
  {
    id: '17ea6eed4e7',
    chapter: '數據分析',
    question:
      '數列 $\\underbrace{1,1,\\cdots,1}_{20個},\\underbrace{2,2,\\cdots,2}_{19個},\\underbrace{3,3,\\cdots,3}_{18個},\\cdots,$$\\underbrace{18,18,18}_{3個},\\underbrace{19,19}_{2個},20$ 共有 210 項，求第 42 百分位數、第 80 百分位數。',
    answer: '5；12',
    hasImage: false,
  },
  {
    id: '17ea6f049cf',
    chapter: '數據分析',
    question:
      '試畫出下列 10 個對數的散布圖，並判斷其相關性。(正相關、負相關、零相關)\n$$\\begin{array}{|c|c|}\\hline x&1&2&3&5&5&6&8&8&9&10\\\\\\hline y&6&7&5&4&5&3&2&3&2&2\\\\\\hline\\end{array}$$',
    answer: '負相關',
    hasImage: false,
  },
  {
    id: '17ea6f1be9f',
    chapter: '數據分析',
    question:
      '有學生 10 人，其該數學成績 $y$ 與數學缺課數 $x$ 如下表所示，請問下列的相關性為何？(正相關、負相關、零相關)\n$$\\begin{array}{|c|c|}\\hline&A&B&C&D&E&F&G&H&I&J\\\\\\hline x&1&2&3&3&4&3&5&6&4&0\\\\\\hline y&10&9&9&8&7&7&6&6&8&10\\\\\\hline\\end{array}$$',
    answer: '負相關',
    hasImage: false,
  },
  {
    id: '17ea6f3611a',
    chapter: '數據分析',
    question:
      '五位同學的身高 ($X$ 公分) 與體重 ($Y$ 公斤) 數據如表，試求數對 $(X,Y)$ 的相關係數。\n$$\\begin{array}{|c|c|}\\hline&A&B&C&D&E\\\\\\hline X&154&157&161&167&171\\\\\\hline Y&52&52&56&56&59\\\\\\hline\\end{array}$$',
    answer: '$\\frac{79}{84}$',
    hasImage: false,
  },
  {
    id: '17ea6f4b0c7',
    chapter: '數據分析',
    question:
      '飲料公司推出新產品，先以不同價位調查銷售量，以售價為 $x$ 值，銷售量為 $y$ 值，求：\n(1) 相關係數\n(2) 迴歸直線方程式\n(3) 若售價訂為 30 元，試預測其銷售量\n$$\\begin{array}{|c|c|}\\hline x&20&22&24&26&28\\\\\\hline y&12&13&11&9&10\\\\\\hline\\end{array}$$',
    answer: '(1) -0.8 (2) $y=-0.4x+20.6$ (3) 8.6',
    hasImage: false,
  },
  {
    id: '17ea6f567b2',
    chapter: '數據分析',
    question:
      '資料 $X$、$Y$ 如列表，求 $X$、$Y$ 的相關係數。\n$$\\begin{array}{|c|c|}\\hline X&1&2&4&5&8\\\\\\hline Y&5&3&2&4&1\\\\\\hline\\end{array}$$',
    answer: '$-\\frac{13\\sqrt3}{30}$',
    hasImage: false,
  },
  {
    id: '17ea6f941ce',
    chapter: '數據分析',
    question:
      '香皂工廠欲推出一種新產品，在上市前以不同的價格 $x$ (元) 調查市場的需求量 $y$ (萬盒)。調查結果如表，請問：\n(1) $x$、$y$ 的相關係數\n(2) 若推出的價格為 10 元，試預測其需求量\n$$\\begin{array}{|c|c|}\\hline x&5&6&7&8&9\\\\\\hline y&15&17&13&11&9\\\\\\hline\\end{array}$$',
    answer: '(1) -0.9 (2) 7.6 萬盒',
    hasImage: false,
  },
  {
    id: '17ea6f8e519',
    chapter: '數據分析',
    question:
      '10 組數對 $(x_1,y_1),\\cdots,(x_{10},y_{10})$，已知 $x_1+x_2+\\cdots+x_{10}=400$，$x_1^2+x_2^2+\\cdots+x_{10}^2=17600$，$y_1+y_2+\\cdots+y_{10}=1100$，$y_1^2+y_2^2+\\cdots+y_{10}^2=123500$，$x_1y_1+x_2y_2+\\cdots+x_{10}y_{10}=45800$，求 $(x_i,y_i)$ 的相關係數、迴歸直線方程式。',
    answer: '0.9；$y=\\frac98x+65$',
    hasImage: false,
  },
  {
    id: '17ea6fa9482',
    chapter: '數據分析',
    question:
      '10 組數對 $(x_1,y_1),\\cdots,(x_{10},y_{10})$，已知 $x_1+x_2+\\cdots+x_{10}=20$，$x_1^2+x_2^2+\\cdots+x_{10}^2=80$，$y_1+y_2+\\cdots+y_{10}=30$，$y_1^2+y_2^2+\\cdots+y_{10}^2=100$，$x_1y_1+x_2y_2\\cdots+x_{10}y_{10}=50$，求相關係數、迴歸直線方程式。',
    answer: '-0.5；$y=-\\frac x4+\\frac72$',
    hasImage: false,
  },
  {
    id: '187c3b2fe3a',
    chapter: '數據分析',
    question:
      '二維數據 $(x_i,y_i)$ 的相關係數為 0.3，求：\n(1) $(2x_i,y_i-3)$ 的相關係數　　(2) $(x_i+1,-3y_i)$ 的相關係數',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17ea6fb0439',
    chapter: '數據分析',
    question:
      '設圖表中數對 $(x,y)$ 的相關係數為 $\\sqrt a$，求 $a$\n$$\\begin{array}{|c|c|}\\hline x&9.91&9.93&9.96&9.95&9.94&9.98\\\\\\hline y&792&796&794&797&799&798\\\\\\hline\\end{array}$$',
    answer: '$\\frac{17}{59}$',
    hasImage: false,
  },
  {
    id: '17ea6fc53b1',
    chapter: '數據分析',
    question: '求 $(910,2)$、$(920,1.8)$、$(930,2.2)$、$(940,2.4)$ 的相關係數。',
    answer: '$0.8$',
    hasImage: false,
  },
  {
    id: '17ea70aa2f3',
    chapter: '數據分析',
    question:
      "變量 $X$ 與 $Y$，已知算術平均數 $\\mu_X=10$，標準差 $\\sigma_X=3$，$X,Y$ 的相關係數 $r=0.2$，$X,Y$ 的迴歸直線方程式 $y=0.4x+8$。求：\n(1) 標準差 $\\sigma_Y$、算術平均數 $\\mu_Y$\n(2) 若 $X'=5X+6$，求 $\\mu_{X'}$、$\\sigma_{X'}$、$r'$、$X',Y'$ 的迴歸直線方程式",
    answer: '(1) 6；12 (2) 56；15；0.2；$y=0.08x+7.52$',
    hasImage: false,
  },
  {
    id: '17ea70bb436',
    chapter: '數據分析',
    question:
      "變量 $X$ 與 $Y$，已知算術平均數 $\\mu_X=22$，標準差 $\\sigma_X=2$，$X,Y$ 的相關係數 $r=-0.4$，$X,Y$ 的迴歸直線方程式 $y=-2x+6$。求：\n(1) 標準差 $\\sigma_Y$、算術平均數 $\\mu_Y$\n(2) 若 $X'=2X+5$，求 $\\mu_{X'}$、$\\sigma_{X'}$、$r'$、$X',Y'$ 的迴歸直線方程式",
    answer: '(1) 10；-38 (2) 49；4；-0.4；$y=-x+11$',
    hasImage: false,
  },
  {
    id: '17ea7106aa3',
    chapter: '數據分析',
    question:
      "10 組數對 $(x_i,y_i)$，已知平均值 $\\mu_x=12$，$\\mu_y=8$，標準差 $\\sigma_x=3$，$\\sigma_y=1$，相關係數 0.7。將資料標準化成為數對 $(x_i',y_i')$，問：\n(1) 其中一筆資料 (10,9) 經標準化後為？\n(2) 平均值 $\\mu_x’$，$\\mu_y’$　(3) 標準差 $\\sigma_x'$，$\\sigma_y'$\n(4) $(x_i',y_i')$ 的相關係數\n(5) 標準化後的迴歸式",
    answer: '(1) $(-\\frac23,1)$ (2) 0；0 (3) 1；1 (4) 0.7 (5) $y=0.7x$',
    hasImage: false,
  },
  {
    id: '17ea7103324',
    chapter: '數據分析',
    question:
      "10 組數對 $(x_i,y_i)$，已知平均值 $\\mu_x=4$，$\\mu_y=5$，標準差 $\\sigma_x=1$，$\\sigma_y=2$，相關係數 0.8。將資料標準化成為數對 $(x_i',y_i')$，問：\n(1) 其中一筆資料 (3,5) 經標準化後為？\n(2) 平均值 $\\mu_x’$，$\\mu_y’$　(3) 標準差 $\\sigma_x'$，$\\sigma_y'$\n(4) $(x_i',y_i')$ 的相關係數\n(5) 標準化後的迴歸式",
    answer: '(1) (-1,0) (2) 0；0 (3) 1；1 (4) 0.8 (5) $y=0.8x$',
    hasImage: false,
  },
  {
    id: '17ea8de79c4',
    chapter: '數據分析',
    question:
      '變量 $X$ 與 $Y$ 的散佈圖，所有點都在 $y=-\\dfrac23x+8$ 上，求：\n(1) $X$ 與 $Y$ 的相關係數\n(2) 兩變量的標準差的比 $\\sigma_x:\\sigma_y$',
    answer: '(1) -1 (2) 3:2',
    hasImage: false,
  },
  {
    id: '17ea8df4ee3',
    chapter: '數據分析',
    question:
      '數對 $(x_i,y_i)$ 均滿足 $y=2x+8$，求：\n(1) $(x_i,y_i)$ 的相關係數\n(2) $x$ 值與 $y$ 值的標準差比值 $\\dfrac{\\sigma_x}{\\sigma_y}$。',
    answer: '(1) 1 (2) $\\frac12$',
    hasImage: false,
  },
  {
    id: '17da25f01c8',
    chapter: '數據分析',
    question:
      '位於合歡山的武嶺為臺灣公路的最高點，也是著名的單車聖地，標高為海拔 $3275$ 公尺，已知坡度的定義為：$\\frac{上升高度}{水平移動距離}\\times100\\%$，為了方便測量，我們可以用：$\\frac{上升高度}{路徑長}\\times100\\%$ 作為坡度的近似，已知如果由埔里出發，路徑長為 $53.5$ 公里，埔里的海拔為 $475$ 公尺，試利用坡度近似公式計算埔里至合歡山武嶺的平均坡度。(四捨五入至小數點後第二位)',
    answer: '$5.23\\%$',
    hasImage: false,
  },
  {
    id: '17da2559da6',
    chapter: '數據分析',
    question:
      "職籃 NBA 球員林來瘋，假設他近五場上場時間與得分如下表：\n$$\\begin{array}{|c|c|}\\hline場次&第一場&第二場&第三場&第四場&第五場\\\\\\hline上場時間(X)&25&30&20&25&25\\\\\\hline得分(Y)&30&30&25&35&30\\\\\\hline\\end{array}$$\n若資料 $X$ 的標準差為 $\\sigma_x$，資料 $Y$ 的標準差為 $\\sigma_y$，$Y$ 對 $X$ 的迴歸直線方程式為 $y=bx+a$，請依此選出正確的選項。\n(1) $\\sigma_x>\\sigma_y$\n(2) 若 $X$ 與 $Y$ 的相關係數為 $r$，則 $0.45<r<0.55$\n(3) $a+b=18$\n(4) 若資料 $X'$ 與 $Y'$ 滿足 $X'=2X-108$，$Y'=-\\frac12Y+108$，且 $X'$ 和 $Y'$ 的相關係數為 $r'$，則 $-0.56<r'<-0.44$\n(5) 若第六場比賽，總教練讓他上場 $30$ 分鐘，依迴歸直線方程式預測他的得分為 $30$ 分",
    answer: '(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '17da235355c',
    chapter: '數據分析',
    question:
      '小華想要更換新的手機合約，市面上三種兩年期的合約如下：\n方案 $A$：前 $6$ 個月每月 $399$，第 $7\\sim24$ 個月每月 $699$\n方案 $B$：第一個月 $699$，之後每個月都比前一個月便宜 $10$ 元\n方案 $C$：每個月 $749$，簽約即送價值 $3000$ 元禮券\n假設將方案 $A$、$B$、$C$ 每個月的花費視為 $1$ 個數據點，考慮 $A$、$B$、$C$ 數據的統計資料，禮券可視為現金，下列哪些選項正確？\n(1) 使用方案 $C$ 最為划算\n(2) 使用方案 $B$ 最為划算\n(3) 方案 $B$ 的全距 $>$ 方案 $A$ 的全距\n(4) 方案 $A$ 的中位數 $>$ 方案 $B$ 的中位數\n(5) 方案 $A$ 的標準差較方案 $B$ 的標準差高',
    answer: '(2)(4)(5)',
    hasImage: false,
  },
  {
    id: '17da23c165e',
    chapter: '數據分析',
    question:
      '小黑做統計研究發現，數據 $x_i$ 與 $y_i$，$i=1,3,\\cdots,n$ 似乎有某種關係，但不像線性關係。他對 $x_i$ 進行變數變換：$t_i=x_i^2$，並得到 $y$ 對 $t$ 的迴歸直線方程式為 $y=2t$，$y$ 與 $t$ 的相關係數 $r_{(t,y)}=0.92$，下列敘述哪些正確？\n(1) $y$ 的標準差大於 $t$ 的標準差\n(2) 轉換前後的相關係數 $r_{(x,y)}$ 與 $r_{(t,y)}$ 必定相等\n(3) $t$ 與 $y$ 的平均數 $(\\mu_t,\\mu_y)=(0,0)$\n(4) 將 $y$ 與 $t$ 分別作數據標準化，此時 $y$ 對 $t$ 的迴歸直線方程式為 $y=0.92t$\n(5) 對 $y_i$ 做 $p_i=\\sqrt{y_i}$ 的變數變換，並分析 $x_i$ 與 $p_i$ 可得到相同的相關係數',
    answer: '(1)(4)',
    hasImage: false,
  },
  {
    id: '17d7eea35f1',
    chapter: '數據分析',
    question:
      '2018 年的世界盃足球賽在法國擊敗克羅埃西亞後，正式宣告落幕，小明等人受此影響，也決定組團去比社區舉辦的五人足球賽。賽後他們將自己的表現總和列為下表：\n$$\\begin{array}{|c|c|}\\hline&小明&大華&達達&全全&文文\\\\\\hline進球數&2&1&0&1&0\\\\\\hline射門成功率&50\\%&25\\%&0\\%&100\\%&0\\%\\\\\\hline助攻數&0&1&1&2&0\\\\\\hline傳球成功率&42.5\\%&50\\%&58.3\\%&80\\%&28.6\\%\\\\\\hline\\end{array}$$\n射門成功率為進球次數與射門次數的比率、傳球成功率為試圖傳球次數與成功將球傳給其他選手的次數比率。依據上表，可以推測下列哪些敘述正確？\n(1) 整場比賽中，大華總共傳球 $2$ 次\n(2) 比賽時就算多給全全一次射門的機會，也不一定會得分\n(3) 小明和大華兩人的射門成功率等於 $37.5\\%$\n(4) 如果文文的傳球次數比全全多，則兩人的傳球成功率小於 $54.3\\%$\n(5) 達達和文文兩人的傳球成功率等於 $(\\frac{58.3+28.6}2)\\%$',
    answer: '(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '17d7eef7b51',
    chapter: '數據分析',
    question:
      '某科技公司審核各級員工薪資的結果：個人薪資最高族群 (前 $8\\%$) 的所得平均式最低族群 (後 $8\\%$) 的 $20$ 倍。為了縮短薪資差距，公司員工建議採取以下三個方案：\n甲方案，每人每月減薪 $3000$ 元\n乙方案，每人每月減薪 $5\\%$\n丙方案，個人薪資最低族群，每人每月加薪 $5000$ 元\n下列有關這三個方案的敘述，請選出正確的選項。\n(1) 若實施甲方案，該公司薪資差距的倍數會低於 $20$ 倍\n(2) 若實施乙方案，該公司薪資差距的倍數仍為 $20$ 倍\n(3) 若實施丙方案，該公司薪資差距的倍數會低於 $20$ 倍\n(4) 若實施甲方案，該公司個人薪資的標準差會變小\n(5) 若實施乙方案，該公司個人薪資的標準差會不變',
    answer: '(2)(3)',
    hasImage: false,
  },
  {
    id: '17cbdc3cbff',
    chapter: '數據分析',
    question:
      'Youtube 頻道的營利規定是訂閱人數達 $1000$ 人以上，且公開觀看時數達 $4000$ 個小時。若小明是一個新手 Youtuber，目前的訂閱人數有 $105$ 人，觀看時數有 $250$ 個小時，根據統計他每個月平均增加 $40$ 個訂閱者，$200$ 小時的觀看時數，若之後都按照此比例計算，則多少個月後，可以達到營利的資格？\n(1) $12$ (2) $23$ (3) $35$ (4) $46$ (5) $53$',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '17cbdc6f630',
    chapter: '數據分析',
    question:
      '小華要買一台新車，車牌號碼決定選用 $ABC-52\\Box\\Box$，他希望 $4$ 個數字的總和為 $15$，且不想用 $4$、$3$、$9$，則小華的車牌號碼會有幾種數字組合？\n(1) $49$ (2) $36$ (3) $14$ (4) $12$ (5) $6$',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '17cbdc8d95d',
    chapter: '數據分析',
    question:
      '一袋中有大小相同的紅白黃球共 $10$ 顆，每球被選中的機率都相等。若已知從中任意選取一球，得到白球的機率為 $\\frac15$；若從中任取兩球，都沒有取到黃球的機率為 $\\frac7{15}$，則袋中的黃球有幾顆？\n(1) $3$ (2) $4$ (3) $5$ (4) $6$ (5) $7$',
    answer: '(1)',
    hasImage: false,
  },
  {
    id: '17cbde14e3a',
    chapter: '數據分析',
    question:
      '下列有五組數據，各選項資料都有六個資料點 $(x,y)$，請選出相關係數最小的選項。\n(1) $(1,1)$、$(1,2)$、$(1,3)$、$(2,1)$、$(2,2)$、$(2,3)$\n(2) $(1,1)$、$(2,1)$、$(3,1)$、$(2,2)$、$(3,2)$、$(3,3)$\n(3) $(1,1)$、$(2,1)$、$(3,1)$、$(2,3)$、$(3,3)$、$(3,5)$\n(4) $(1,1)$、$(2,1)$、$(3,1)$、$(4,1)$、$(2,2)$、$(3,2)$\n(5) $(1,1)$、$(1,2)$、$(1,3)$、$(2,1)$、$(2,2)$、$(3,1)$',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '17cbde39e82',
    chapter: '數據分析',
    question:
      '阿明和阿德猜拳玩劈腿遊戲，猜拳輸的人要雙腳打開比對方長的距離，若阿德的腿長 $80$ 公分，張開 $60\\du$，若阿明下次猜拳輸了，且他必須最少要張開 $90\\du$ 以上，才能張得比阿德長的距離，則其腿長約為多少公分？\n(1) $50$ (2) $57$ (3) $60$ (4) $70$ (5) $75$',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '17cbde52ff4',
    chapter: '數據分析',
    question:
      '已知 $y=a\\sin(bx+c)+d$ 的圖形如圖所示，其中 $a,b,d>0$，$-\\pi\\le c\\le0$，則 $y=b\\sin(ax+c)+d$ 的圖形為何？',
    answer: '(1)',
    hasImage: true,
    imageOption: [
      '17cbde52ff4-1',
      '17cbde52ff4-2',
      '17cbde52ff4-3',
      '17cbde52ff4-4',
      '17cbde52ff4-5',
    ],
  },
  {
    id: '17cbde7529c',
    chapter: '數據分析',
    question:
      '一個等差數列共有 $2n+1$ 項，其中奇數項的和為 $290$，偶數項的和為 $261$，則第 $n+1$ 項是多少？\n(1) $27$ (2) $28$ (3) $29$ (4) $30$ (5) $31$',
    answer: '(3)',
    hasImage: false,
  },
  {
    id: '17cbdeccb1e',
    chapter: '數據分析',
    question:
      '已知直線 $L:y=x+k$ 將單位圓 $x^2+y^2=1$ 分成弧長比為 $2:1$ 的兩段弧長，則 $k$ 為？\n(1) $-\\frac12$ (2) $-\\frac{\\sqrt2}2$ (3) $-\\frac23$ (4) $\\frac12$ (5) $\\frac{\\sqrt2}2$',
    answer: '(2)(5)',
    hasImage: false,
  },
  {
    id: '17cbf820976',
    chapter: '數據分析',
    question:
      '若方程式 $|3x-1|=ax$ 沒有實根，則實數 $a$ 可為下列哪些選項中的值？\n(1) $-2$ (2) $-1$ (3) $-\\frac13$ (4) $-\\frac14$ (5) $0$',
    answer: '(1)(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '17cbf835236',
    chapter: '數據分析',
    question:
      '設 $\\frac\\pi4<\\theta<\\frac\\pi2$，$a=\\sin\\theta$，$b=\\cos\\theta$，下列哪些數字比 $1$ 大？\n(1) $ab$ (2) $\\frac ab$ (3) $a^b$ (4) $\\log_ab$ (5) $\\log_ba$',
    answer: '(2)(4)',
    hasImage: false,
  },
  {
    id: '17cbf84cea5',
    chapter: '數據分析',
    question:
      '若三次函數 $f(x)=x^3+3x^2+cx+d=(x+h)^3-2(x+h)+4$，下列哪些選項正確？\n(1) $c=1$ (2) $d=4$ (3) $h=-1$ (4) 圖形的對稱中心 $(-1,4)$ (5) $f(x)$ 在 $x=0$ 附近的一次近似為 $x+3$',
    answer: '(1)(4)(5)',
    hasImage: false,
  },
  {
    id: '17cbf8657c9',
    chapter: '數據分析',
    question:
      '銳角 $\\triangle ABC$ 中，$\\overline{AB}=c$，$\\overline{AC}=b$，$\\overline{BC}=a$，則 $c$ 為？\n(1) $a\\cos B+b\\cos A$ (2) $a\\cos C+c\\cos A$ (3) $b\\cos C+c\\cos B$ (4) $\\sqrt{a^2+b^2-2ab\\cos C}$ (5) $a\\frac{\\sin C}{\\sin A}$',
    answer: '(1)(4)(5)',
    hasImage: false,
  },
  {
    id: '17cbf888339',
    chapter: '數據分析',
    question:
      '數學家發現一個無縫密鋪平面的凸五邊形，如圖所示，$\\overline{CD}=5$，且可以用三個全等的圖形拼成一個正六邊形，下列哪些選項正確？\n(1) $\\angle C=120\\du$ (2) $\\angle A=120\\du$ (3) $\\overline{BC}+\\overline{DE}=5$ (4) $\\angle AED+\\angle ABC=180\\du$ (5) 五邊形 $ABCDE$ 面積為 $\\frac{25\\sqrt3}2$',
    answer: '(1)(2)(3)(4)(5)',
    hasImage: true,
  },
  {
    id: '17cbf8d8b53',
    chapter: '數據分析',
    question:
      '已知有一系列一體成形的積木組，每個小積木邊長為 $1$。每一組由小到大都比前一組增加二塊積木，整個積木組可以拿起來翻轉且不會散掉，假設 $a_n$ 表示第 $n$ 個積木組的表面積，例如 $a_1=6$，$a_2=14$，求 $a_{10}$。',
    answer: '$78$',
    hasImage: true,
  },
  {
    id: '17cbf909b67',
    chapter: '數據分析',
    question:
      'Peter Holt 在 $1996$ 年以 $7600$ 萬美元的價碼買下 NBA 馬刺隊，至此之後，馬刺隊逐漸躍升成為全美最成功的球隊之一。據《富比世》調查在 $2020$ 年馬刺的市值已經提升到 $18$ 億 $2$ 千 $4$ 百萬美元，若這 $24$ 年間，每年的市值成長率都相同，則 $2008$ 年時，其市值是購入價值的幾倍？',
    answer: '$\\sqrt{24}$',
    hasImage: false,
  },
  {
    id: '17cbf92877b',
    chapter: '數據分析',
    question:
      '平面上三點 $A(-1,4)$，$B(3,-2)$，$C(2,5)$，若 $\\xvector{AP}=r\\xvector{AB}+s\\xvector{AC}$，其中 $1\\le r\\le a$，$-1\\le s\\le2$，若 $P$ 點所在區域的面積為 $264$，求實數 $a$。',
    answer: '$5$',
    hasImage: false,
  },
  {
    id: '17cbf93bc51',
    chapter: '數據分析',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=7$，$\\overline{AC}=6$，$\\overline{BC}=5$，$\\overline{AM}$ 是 $\\overline{BC}$ 邊上的中線，試求 $\\xvector{AM}\\cdot\\xvector{AB}$。',
    answer: '$\\frac{79}2$',
    hasImage: false,
  },
  {
    id: '17cbf989ccb',
    chapter: '數據分析',
    question:
      '阿豪畢業後找到的第一份工作是到工廠當產品組裝員，工作 $t$ 天後，組裝的產品量由函數 $f(t)=a+b(\\frac32)^{-0.4t}$ 所決定，$a$、$b$ 為常數，假設阿豪剛開始工作時 $t=0$，一天的組裝量為 $118$，工作 $5$ 天後，可達 $138$，試回答下列問題：\n(1) 數對 $(a,b)$\n(2) 若阿豪工作 $n$ 天後，$n\\in\\mathbb{N}$，組裝量可以超過 $150$，求 $n$ 的最小值。($\\log2=0.301$，$\\log3=0.4771$)',
    answer: '(1) $(154,-36)$ (2) $14$',
    hasImage: false,
  },
  {
    id: '17be232a1db',
    chapter: '數據分析',
    question:
      '某次考試成績全班平均 $30$ 分，標準差 $7$ 分，老師決定調整分數，新分數為原始分數的 $2$ 倍再加 $10$ 分，且調整分數後沒有人超過 $100$ 分，則新分數的標準差為？',
    answer: '$14$',
    hasImage: false,
  },
  {
    id: '17a580aaf30',
    chapter: '數據分析',
    question:
      '在某項競賽中，為了避免評審個人主觀影響成績太大，規定：先將 15 位評審的成績求得算術平均數，再將與平均數相差超過 15 分的成績剔除後重新計算平均值做為參賽者的比賽成績。現在有一位參賽者所獲 15 位評審的平均成績為 76 分，其中有三位評審給的成績 92, 45, 55 應剔除，求這個參賽者的成績。',
    answer: '79',
    hasImage: false,
  },
  {
    id: '17a580c7137',
    chapter: '數據分析',
    question:
      '某校一、二、三年級各派學生參加比賽，高一派 $x$ 人，高二派 $y$ 人，高三派 12 人，各年級的平均成績為：高一 60 分，高二 65 分，高三 74 分。若合併高一與高二，則平均變成 63 分，若合併高一、高二、高三，則平均變成 69 分，求 $(x,y)$。',
    answer: '(4,6)',
    hasImage: false,
  },
  {
    id: '17a5811f5c8',
    chapter: '數據分析',
    question:
      '某生第一次月考六科的平均成績 (算術平均)為 80 分，若已知其中五科的成績為 68, 80, 80, 80, 86，求成績的標準差。',
    answer: '6',
    hasImage: false,
  },
  {
    id: '17a58136eaf',
    chapter: '數據分析',
    question:
      '9 個數值 1, 1, 1, 1, 1, 1, 1, 1, $x$，其中 $x\\in\\mathbb N$，若這 9 個數的標準差比 10 大，求 $x$ 的最小值。($\\sqrt2\\approx1.414$)',
    answer: '33',
    hasImage: false,
  },
  {
    id: '17a58e8ba61',
    chapter: '數據分析',
    question:
      '資料 $5,11,\\cdots$，共 100 個數值，標準化之後 5 變成 1，11 變成 3，求這 100 個數值之和。',
    answer: '200',
    hasImage: false,
  },
  {
    id: '17a58ea29ec',
    chapter: '數據分析',
    question:
      '若 $x>0$，一維資料 $x$，$x$，$-x$，$-x$，$y$，$y$，$y$，$y$，$y$ 為標準化數據，求 $(x,y)$。',
    answer: '$\\left(\\frac{3}{2},0\\right)$',
    hasImage: false,
  },
  {
    id: '18239affe3a',
    chapter: '數據分析',
    question:
      '五位同學的段考平均 ($x$) 與學測級分 ($y$) 成績 ($x$,$y$) 為：(90, 14), (81, 12), (84, 10), (72, 11), (78, 8)，求其相關係數。',
    answer: '0.55',
    hasImage: false,
  },
  {
    id: '17a58f86582',
    chapter: '數據分析',
    question:
      '數對 $(x_1,y_1),(x_2,y_2),\\cdots,(x_{10},y_{10})$，已知 $x_1+x_2+\\cdots+x_{10}=30$，$y_1+y_2+\\cdots+y_{10}=50$，$x_1^2+x_2^2+\\cdots+x_{10}^2=150$，$y_1^2+y_2^2+\\cdots+y_{10}^2=310$，$x_1y_1+x_2y_2+\\cdots+x_{10}y_{10}=120$，求 $X$ 與 $Y$ 的相關係數。',
    answer: '0.75',
    hasImage: false,
  },
  {
    id: '17a5901f440',
    chapter: '數據分析',
    question:
      '數對 $(x_1,y_1),(x_2,y_2),\\cdots,(x_n,y_n)$，$X$ 的算術平均為 8，$y$ 對 $x$ 的迴歸直線為 $y=-2x+25$，求 $Y$ 的算術平均。',
    answer: '9',
    hasImage: false,
  },
  {
    id: '17a5903a862',
    chapter: '數據分析',
    question:
      '數對 $(x_1,y_1),(x_2,y_2),\\cdots,(x_n,y_n)$，$X$ 的算術平均為 12，標準差為 $3$，$Y$ 的算術平均為 25，標準差為 8，$X$ 與 $Y$ 的相關係數為 -0.6，求 $y$ 對 $x$ 的迴歸直線方程式。',
    answer: '$y=-1.6x+44.2$',
    hasImage: false,
  },
  {
    id: '17a5d030723',
    chapter: '數據分析',
    question:
      '已知 $(X,Y)$ 的相關係數為 0.8，求：\n(1) $(X+5,Y-2)$ 的相關係數為？\n(2) $(2X,3Y)$ 的相關係數為？\n(3) $(2+X,3-Y)$ 的相關係數為？',
    answer: '(1) 0.8 (2) 0.8 (3) -0.8',
    hasImage: false,
  },
  {
    id: '17a5d04eb8b',
    chapter: '數據分析',
    question:
      '二維數據 $(X,Y)$ 的迴歸直線之斜率為 4，則 $(2X+7,3Y-5)$ 表 $x$ 值同乘 2 再同加 7，且 $y$ 值同乘 3 之後再同減 5，求新的迴歸直線斜率。',
    answer: '6',
    hasImage: false,
  },
  {
    id: '17a5d0c5ca2',
    chapter: '數據分析',
    question:
      '圖為兩組數據 $x$、$y$ 的分布圖，其相關係數 $r$ 最接近下列何值？\n(1) 1 (2) 0.5 (3) 0 (4) -0.5 (5) -1',
    answer: '(3)',
    hasImage: true,
  },
  {
    id: '17a5d0e67c4',
    chapter: '數據分析',
    question:
      '如圖所示有 5 筆 $(X,Y)$ 資料。去掉哪一筆資料後，剩下來 4 筆資料的相關係數最大？\n(1) $A$ (2) $B$ (3) $C$ (4) $D$ (5) $E$',
    answer: '(4)',
    hasImage: true,
  },
  {
    id: '17a5fbfa888',
    chapter: '數據分析',
    question:
      '已知二維數據 $(X,Y)$ 之 $y$ 對 $x$ 的迴歸直線為 $y=3x-25$，則下列各選項哪些為真？\n(1) 若 $\\mu_X>10$，則 $\\mu_Y>10$\n(2) 若 $\\mu_X<15$，則 $\\mu_Y<15$\n(3) $X$ 與 $Y$ 的相關性必為正相關\n(4) $\\sigma_X<\\sigma_Y$\n(5) $\\sigma_X$ 與 $\\sigma_Y$ 的比值愈大，則相關係數愈大',
    answer: '(2)(3)(4)(5)',
    hasImage: false,
  },
  {
    id: '17a5fc9a59d',
    chapter: '數據分析',
    question:
      '調查班上段考國文及英文成績，國文平均 80 分，標準差 9 分，英文平均 81 分，標準差 3 分，國文與英文的相關係數為 0.9，請利用迴歸直線預測，國文考 100 分的同學，英文大約為幾分？',
    answer: '87',
    hasImage: false,
  },
  {
    id: '17a5fd1067d',
    chapter: '數據分析',
    question:
      '一金屬圓柱，在不同負重下柱高會被影響，實驗結果 (負重, 柱高): (0, 70.5),\n(2, 69.4), (4, 68.4), (6, 67.2), (8, 66.3),\n(10, 65.5), (12, 64.4)，其中測量單位分別為英噸和英寸。此筆資料的相關係數為 $r$，迴歸直線斜率為 $m$。將單位轉換為公噸 (1 英噸等於 1.016 公噸) 及公分 (1 英寸等於 2.54 公分)，若單位換算後的相關係數為 $R$，回歸直線斜率為 $M$。下列哪些正確？\n(1) $rm>0$ (2) $r>0$ (3) $r=R$ (4) $m=M$',
    answer: '(1)(3)',
    hasImage: false,
  },
  {
    id: '17a5fd46a57',
    chapter: '數據分析',
    question:
      "某校高三學生數學第一次、二次段考成績分別以 $X$、$Y$ 表示。若兩次段考的相關係數為 0.016，下列哪些正確？\n(1) $X$ 與 $Y$ 的相關情形可以用散布圖表示\n(2) 這兩次段考的數學成績適合用直線 $X=a+bY$ 表示 $X$ 與 $Y$ 的相關情形\n(3) $X+5$ 與 $Y+5$ 的相關係數仍為 0.016\n(4) $10X$ 與 $10Y$ 的相關係數仍為 0.016\n(5) 若 $X'=\\dfrac{X-\\mu_x}{\\sigma_x}$、$Y'=\\dfrac{Y-\\mu_y}{\\sigma_y}$，則 $X'$ 與 $Y'$ 的相關係數仍為 0.016",
    answer: '(1)(3)(4)(5)',
    hasImage: false,
  },
  {
    id: '17a393dba9d',
    chapter: '數據分析',
    question:
      '正數 $a,b$ 的算術平均數為 37，幾何平均數為 24；正數 $c,d,e,f$ 的算術平均數為 13，幾何平均數為 3，求 $a,b,c,d,e,f$ 的算術平均數及幾何平均數。',
    answer: '21；6',
    hasImage: false,
  },
  {
    id: '17a393f79d8',
    chapter: '數據分析',
    question: '有 5 個數值：21, 30, 31, 40, 52，其權數依序為 1, 1, 2, 3, 3，求加權平均數。',
    answer: '38.9',
    hasImage: false,
  },
  {
    id: '17a3a063f85',
    chapter: '數據分析',
    question:
      '由小而大的 16 個數值 1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23，試求：\n(1) 第 40 百分位數 (2) 第 3 四分位數',
    answer: '(1) 10 (2) 18',
    hasImage: false,
  },
  {
    id: '17a3a0f0062',
    chapter: '數據分析',
    question: '試求五個數值 2, 4, 6, 8, 10 的標準差。',
    answer: '$2\\sqrt2$',
    hasImage: false,
  },
  {
    id: '17a3a11a2cb',
    chapter: '數據分析',
    question:
      '下列五組資料，哪一組的標準差最大？哪一組的標準差最小？\nA: 1, 1, 1, 1, 1, 10, 10, 10, 10, 10\nB: 1, 1, 1, 1, 1, 5, 5, 5, 5, 5\nC: 4, 4, 4, 5, 5, 5, 5, 6, 6, 6\nD: 1, 1, 2, 2, 3, 3, 4, 4, 5, 5\nE: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10',
    answer: 'A；C',
    hasImage: false,
  },
  {
    id: '17a3a18212b',
    chapter: '數據分析',
    question:
      '$a,b,c,d$ 的算術平均數為 5，標準差為 8，求 $1-4a,1-4b,1-4c,1-4d$ 的算術平均數及標準差。',
    answer: '-19；32',
    hasImage: false,
  },
  {
    id: '17a3a1a6f8e',
    chapter: '數據分析',
    question:
      '某班數學老師算出學生學期成績後，鑑於學生平時都很用功，決定每人各加 5 分 (加分後沒人超過滿分)，則加分前與加分後，成績統計數值絕對不會改變的有：\n(1) 算術平均數　　(2) 中位數\n(3) 標準差　　(4) 全距　　(5) 四分位距',
    answer: '(3)(4)(5)',
    hasImage: false,
  },
  {
    id: '1790658dfdc',
    chapter: '數據分析',
    question: '有 $n$ 個數值，其算術平均數為 5，若再加上一數「14」，則算術平均數變為 6，求 $n$。',
    answer: '8',
    hasImage: false,
  },
  {
    id: '1790659e4b8',
    chapter: '數據分析',
    question: '有十個數據 2, 2, 2, 4, 5, 6, 7, 7, 7, 8，則此十個數據的標準差為？',
    answer: '$\\sqrt5$',
    hasImage: false,
  },
  {
    id: '186cac8c164',
    chapter: '數據分析',
    question:
      '某校數學科的學期成績計算方式如下：平時成績占 30%，兩次期中考試成績各占 20%，期末考試成績占 30%。已知小明的數學平時成績為 65 分，兩次期中考試分別為 35 及 37 分，請問他期末考至去要考幾分，學期成績才有 60 分以上？',
    answer: '87',
    hasImage: false,
  },
  {
    id: '179065c0fdf',
    chapter: '數據分析',
    question:
      '已知數值資料 $x_1,x_2,\\dots,x_n$ 之平均數為 15，標準差為 4，若 $y_i=-3x_i+1$ ($i=1,2,\\dots,n$)，求 $y_1,y_2,\\dots,y_n$ 之標準差。',
    answer: '12',
    hasImage: false,
  },
  {
    id: '179065d6873',
    chapter: '數據分析',
    question:
      '有 $n$ 個整數，加入一個數「36」後，其算術平均數多 2；但從此 $n$ 個整數中去掉其中一個數「20」後，其算術平均數少 1，求 $n$。',
    answer: '13',
    hasImage: false,
  },
  {
    id: '179065e0be4',
    chapter: '數據分析',
    question:
      '某一國家近四年的經濟年成長率分別為 $60\\%$、$80\\%$、$-10\\%$、$-20\\%$，則該國家近四年每一年的平均經濟成長率為多少 $\\%$？',
    answer: '$20\\%$',
    hasImage: false,
  },
  {
    id: '1790660b19a',
    chapter: '數據分析',
    question:
      '某公司 55 位職員的月薪及人數分配如下表，求平均月薪。\n$\\begin{array} {|c|c|}\\hline 月薪(萬) & 3 & 3.2 & 3.5 & 4 & 5.05 \\\\ \\hline 人數 & 5 & 10 & 20 & 18 & 2 \\\\ \\hline  \\end{array}$',
    answer: '3.62 萬元',
    hasImage: false,
  },
  {
    id: '1790661989e',
    chapter: '數據分析',
    question:
      '某班老師算出學生學期成績後，鑑於學生平時都很用功，決定每人各加 $5$ 分(加分後沒人超過 $100$分)，則加分前與加分後，下列哪些統計數值不變？\n(A)算術平均數\n(B)標準差\n(C)全距\n(D)中位數\n(E)變異數',
    answer: '(B)(C)(E)',
    hasImage: false,
  },
  {
    id: '17906631b9a',
    chapter: '數據分析',
    question:
      '觀察下列四組數據(每組 $10$ 筆)\n $X_1: 1, 1, 1, 1, 1, -5, -5, -5, -5, -5$\n $X_2: -2, -2, -2, -2, -2, 10, 10, 10, 10, 10$\n $X_3: 2, 2, 2, 5, 5, 5, 5, 8, 8, 8$\n $X_4: -1, -1, -1, -1, -1, 1, 1, 1, 1, 1$\n其標準差分別為 $\\sigma_1,\\sigma_2,\\sigma_3,\\sigma_4$，則這四者的大小關係為何？',
    answer: '$\\sigma_2>\\sigma_1>\\sigma_3>\\sigma_4$',
    hasImage: false,
  },
  {
    id: '179066679d7',
    chapter: '數據分析',
    question:
      '老師對兩個班學生實施測驗，結果如下表：\n $\\begin{array} {|c|c|}\\hline & 人數 & 平均 & 標準差 \\\\ \\hline 甲班 & 30 & 60 & 10 \\\\ \\hline 乙班 & 20 & 70 & 5 \\\\ \\hline  \\end{array}$\n現將學生共 $50$ 人的成績合併計算，則：\n(1)合併後的算術平均數為？\n(2)合併後的標準差為？',
    answer: '(1) $64$ (2) $\\sqrt{94}$',
    hasImage: false,
  },
  {
    id: '17906678a7e',
    chapter: '數據分析',
    question:
      '某班 $41$ 位學生成績不佳，平均 $48$ 分，標準差 $8$ 分，老師決定將成績以 $y=ax+b$ 的方式加分($x$ 為原分數，$y$ 為加分後分數，$a>0$)，將成績提高到平均 $60$ 分，標準差 $9$ 分，按照這個計算方式，該班學生小明加分後分數將超過 $100$ 分，則小明原分數至少為多少分？(原分數皆為整數)',
    answer: '$84$',
    hasImage: false,
  },
  {
    id: '179066936d3',
    chapter: '數據分析',
    question:
      '某科的學期成績計算方式如下：平時成績占 $30\\%$，兩次期中考各占 $20\\%$，期末考占 $30\\%$。已知小華的平時成績為 $65$ 分，兩次期中考分別為 $35$ 分及 $37$ 分，則他期末考至少須考幾分，學期成績才有 $60$ 分？',
    answer: '$87$',
    hasImage: false,
  },
  {
    id: '1790669db0d',
    chapter: '數據分析',
    question:
      '有 $21$ 個數據，其算術平均數為 $32$，標準差為 $3$。今發覺其中一數「$32$」必須剔除，則所剩的 $20$ 個數據之標準差為？',
    answer: '$\\sqrt{9.45}$',
    hasImage: false,
  },
  {
    id: '1791c38f96b',
    chapter: '數據分析',
    question:
      '一組資料共 6 筆數據，經標準化後得到其 $Z$ 分數為 0.25, -0.75, 1.25, 0.75, -0.3, $x$，已知原來的 6 個數據的算術平均數為 60，標準差為 5，求原始數據中最小的數。',
    answer: '54',
    hasImage: false,
  },
  {
    id: '1791c3d6dda',
    chapter: '數據分析',
    question:
      '某班段考國文、數學與英文的算術平均數($\\mu$)和標準差($\\sigma$)如下表：\n $\\begin{array} {|c|c|}\\hline & 國文 & 數學 & 英文 \\\\ \\hline \\mu & 70 & 68 & 60 \\\\ \\hline  \\sigma & 8 & 5 & 4 \\\\ \\hline \\end{array}$\n已知班上甲生此次段考國文成績為 $81$ 分，數學成績為 $75$ 分與英文成績為 $60$ 分，相對於全班，甲生在這三科中，表現最好的科目是？表現最差的科目是？',
    answer: '最好的是數學；最差的是英文',
    hasImage: false,
  },
  {
    id: '1791c668816',
    chapter: '數據分析',
    question:
      '某系入學考試分為口試與筆試，由於最近疫情嚴重，應減少群聚，調閱去年 4 名考生的筆試 ($x$) 與口試成績 ($y$) 如下：\n $\\begin{array} {|c|c|}\\hline & 甲 & 乙 & 丙 & 丁 \\\\ \\hline x & 10 & 10 & 14 & 14 \\\\ \\hline  y & 9 & 14 & 15 & 14 \\\\ \\hline \\end{array}$\n該系討論後決定若筆試與口試成績的相關係數 $r>0.6$，今年就取消口試，僅以筆試成績計算。今年是否取消口試？',
    answer: '是',
    hasImage: false,
  },
  {
    id: '1791c6788cf',
    chapter: '數據分析',
    question: "設 $x,y$ 的相關係數為 -0.4，若 $x'=5x$，$y'=20-3y$，求 $x',y'$ 的相關係數。",
    answer: '0.4',
    hasImage: false,
  },
  {
    id: '1791c6a521e',
    chapter: '數據分析',
    question:
      '數學老師記錄了班上五位同學每週上網時數 ($x$) 與段考數學成績 ($y$) 如下表。\n $\\begin{array} {|c|c|}\\hline 學生 & 甲 & 乙 & 丙 & 丁 & 戊 \\\\ \\hline x & 14 & 17 & 20 & 23 & 26 \\\\ \\hline  y & 88 & 70 & 79 & 61 & 52 \\\\ \\hline \\end{array}$\n設段考數學成績 $y$ 對每週上網時數 $x$ 的迴歸直線為 $y=a+bx$，試問：(1) 求 $b$\n(2) 設本班學生小華每週上網時數為 19 小時，其段考數學成績的預測值為？',
    answer: '(1) -2.7 (2) 72.7',
    hasImage: false,
  },
  {
    id: '1791c6df60a',
    chapter: '數據分析',
    question:
      '下表是高三某班部分同學數學模擬考 ($x$) 跟指考 ($y$) 的成績：\n $\\begin{array} {|c|c|}\\hline 座號 & 01 & 02 & 03 & 04 & 05 & 06 \\\\ \\hline x & 60 & 90 & 65 & 80 & a & 75 \\\\ \\hline  y & 85 & 100 & 80 & 95 & 80  & 70\\\\ \\hline \\end{array}$\n已知利用上述六筆數據求出的迴歸直線為 $y=0.5x+47.5$，求 $a$。',
    answer: '80',
    hasImage: false,
  },
  {
    id: '1791c6df60b',
    chapter: '數據分析',
    question:
      '下表是高三某班部分同學數學模擬考 ($x$) 跟指考 ($y$) 的成績：\n $\\begin{array} {|c|c|}\\hline 座號 & 01 & 02 & 03 & 04 & 05 & 06 \\\\ \\hline x & 60 & 90 & 65 & 80 & a & 75 \\\\ \\hline  y & 85 & 100 & 80 & 95 & 80  & 70\\\\ \\hline \\end{array}$\n(1)已知利用上述六筆數據求出的迴歸直線為 $y=0.5x+47.5$，則 $a=$？\n(2)若把座號 06 的資料刪除，以前面五筆數據計算指考成績對模擬考成績的迴歸直線，求此直線方程式。',
    answer: '(1) 80 (2) $y=0.5x+50.5$',
    hasImage: false,
  },
  {
    id: '1791c6f30c9',
    chapter: '數據分析',
    question:
      '某班期末考數學成績 $x$ 與物理成績 $y$ 之算術平均數、標準差、相關係數分別為 $\\mu_x=70$、$\\mu_y=65$、$\\sigma_x=10$、$\\sigma_y=5$、$r=0.8$。若該班某位考生的數學成績是 80 分，試推估他的物理成績。',
    answer: '69',
    hasImage: false,
  },
  {
    id: '1791c71967e',
    chapter: '數據分析',
    question:
      '設有 $n$ 組數據 $(x_i,y_i)$，$i=1,2,3,\\dots,n$，兩變量 $x$ 與 $y$ 的算術平均數分別為 $\\mu_x=7$，$\\mu_y=6$，標準差分別為 $\\sigma_x=6$，$\\sigma_y=10$。若 $y$ 對 $x$ 的迴歸直線過點 $(10,2)$，則兩變量 $x$ 與 $y$ 的相關係數為？',
    answer: '$-\\frac45$',
    hasImage: false,
  },
  {
    id: '1791c7369d7',
    chapter: '數據分析',
    question:
      '有 2 組資料 $x$，$y$ 如表所示。若 $x$ 與 $y$ 的相關係數為 0，求 $k$。\n $\\begin{array} {|c|c|}\\hline x & 1 & 2 & 3 & 4 \\\\ \\hline  y & k & 3 & 2 & 1 \\\\ \\hline \\end{array}$',
    answer: '$\\frac23$',
    hasImage: false,
  },
  {
    id: '1791c752f6a',
    chapter: '數據分析',
    question:
      '有 5 筆二維數據 $(x,y)$：$A(1,3)$，$B(2,4)$，$C(3,9)$，$D(4,4)$，$E(10,10)$，試問去掉哪一筆數據後，剩下 4 筆的相關係數最大？',
    answer: '$C$',
    hasImage: false,
  },
  {
    id: '1791c770c85',
    chapter: '數據分析',
    question:
      '一組二維數據 $x$，$y$ 的迴歸直線方程式為 $y=2x+1$，相關係數 $r=\\frac{6}{7}$，平均 $\\mu_x=2$，$\\mu_y=5$，標準差 $\\sigma_x=3$，求 $\\sigma_y$。',
    answer: '7',
    hasImage: false,
  },
  {
    id: '1791c79132c',
    chapter: '數據分析',
    question:
      '有兩筆資料 $x$，$y$ 如表。若 $y$ 對 $x$ 的迴歸直線為 $y=-3+bx$，求數對 $(k,b)$。\n $\\begin{array} {|c|c|}\\hline x & 1 & 2 & 3 & 4 \\\\ \\hline  y & 1 & 3 & 5 & k \\\\ \\hline \\end{array}$',
    answer: '(11, 3.2)',
    hasImage: false,
  },
  {
    id: '17942f3a1f6',
    chapter: '數據分析',
    question:
      '某公司近五年的營業額成長率分別為 $-28\\%$、$-25\\%$、$28\\%$、$80\\%$、$100\\%$，則這五年來公司營業額的平均成長率為何？\n(A) $18\\%$\n(B) $20\\%$\n(C) $21\\%$\n(D) $23\\%$\n(E) $24\\%$',
    answer: '(B)',
    hasImage: false,
  },
  {
    id: '17942fddb53',
    chapter: '數據分析',
    question:
      "高一某班 $40$ 位學生，數學科第一次段考、第二次段考分別以 $x_i$、$y_i$(其中 $i=1,2,\\dots,40$)表示，每位學生的成績用 $0$ 至 $100$ 評分，且 $x'=\\frac{x-\\mu_x}{\\sigma_x}$、$y'=\\frac{y-\\mu_y}{\\sigma_y}$，其中 $\\mu_x$、$\\mu_y$ 分別為 $x$、$y$ 的平均，$\\sigma_x$、$\\sigma_y$ 分別為 $x$、$y$ 的標準差，若這兩次段考數學科成績 $x$、$y$ 的相關係數為 $0.6$，試問下列選項何者正確？\n(A) $x-1$ 與 $3y+2$ 的相關係數仍為 $0.6$\n(B) $-1+2x$ 與 $3y$ 的相關係數仍為 $0.6$\n(C) $x'$ 與 $y'$ 的相關係數為 $0.6$\n(D) $y'$ 對 $x'$ 的回歸直線的斜率為 $0.6$\n(E) $y'$ 對 $x'$ 的回歸直線必過原點",
    answer: '(A)(B)(C)(D)(E)',
    hasImage: false,
  },
  {
    id: '1794305ee54',
    chapter: '數據分析',
    question:
      '某次考試，有 $8$ 名同學的成績之平均為 $80$ 分，標準差為 $\\sqrt{7}$ 分。已知其成績分別為 $76$，$80$，$80$，$82$，$85$，$81$，$a$，$b$，則 $|a-b|=$？',
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '1794923ad9e',
    chapter: '數據分析',
    question:
      '某生第一、二、三次的數學段考分數分別為 $50$、$x$、$72$ 分，則下列選項何者正確？\n(A)這三次段考的平均成長率為 $20\\%$\n(B)若第二次段考比第一次段考衰退 $20\\%$，則第三次段考比第二次段考成長 $80\\%$\n(C)若第二次段考成績有及格(即 $x\\ge60$)，則第二、三次段考的成長率皆為正\n(D)若第二次段考成績恰為三次段考之算術平均數，則二、三次段考的成長率相等\n(E)若第二次段考成績恰為三次成績之中位數，則第二、三次段考的成長率皆為正',
    answer: '(A)(B)',
    hasImage: false,
  },
  {
    id: '179492651ec',
    chapter: '數據分析',
    question:
      '下表為某地區每個家庭孩子個數的調查表，已知每個家庭孩子個數的中位數是 $2$，則 $x$ 可能為？\n(A) $1$ (B) $2$ (C) $3$ (D) $4$ (E) $5$\n $\\begin{array} {|c|c|}\\hline 孩子數 & 0 & 1 & 2 & 3 & 4 \\\\ \\hline 次數 & x & 3 & 2 & 5 & 2 \\\\ \\hline  \\end{array}$',
    answer: '(C)(D)(E)',
    hasImage: false,
  },
  {
    id: '179492bf409',
    chapter: '數據分析',
    question:
      '氣溫隨高度不同而改變，為了研究高度對氣溫的影響，經過實地測量得到的資料如下：$(1,14)$，$(1.5,11)$，$(2,7.5)$，$(2.5,4)$，$(3,1.5)$，其中測量單位分別為 $x$ 公里和攝氏溫度 $y$ 度。此資料的相關係數為 $r$，迴歸直線斜率為 $m$。現將單位轉換為哩(一公里約等於 $0.6215$ 哩)及華氏溫度($華氏=\\frac{9}{5}\\times攝氏+32$)，若單位換算後的相關係數為 $R$，迴歸直線斜率為 $M$，下列哪些是正確的？\n(A) $rm>0$ (B) $r>0$ (C) $r=R$ (D) $m>0$ (E) $m=M$',
    answer: '(A)(C)',
    hasImage: false,
  },
  {
    id: '1794939a76e',
    chapter: '數據分析',
    question:
      '某班男、女生第二次段考數學成績如表。若全班 50 人的平均成績是 78 分，標準差是 7 分，求數對 $(a,b)$。\n $\\begin{array} {|c|c|}\\hline & \\mu & \\sigma & 人數 \\\\ \\hline 男生 & 75 & b & 20 \\\\ \\hline 女生 & a & 7 & 30 \\\\ \\hline \\end{array}$',
    answer: '$(80,\\sqrt{34})$',
    hasImage: false,
  },
  {
    id: '179493d9795',
    chapter: '數據分析',
    question:
      '兩組變量 $x$ 與 $y$，每組均有 $10$ 個數值資料，得散布圖的樣本點 $(x_i,y_i)$，$i=1,2,\\dots,10$，已知 $x_1+x_2+\\dots+x_{10}=13$，$y_1+y_2+\\dots+y_{10}=17$，$x_1^2+x_2^2+\\dots+x_{10}^2=46.9$，$y_1^2+y_2^2+\\dots+y_{10}^2=58.9$，$x_1y_1+x_2y_2+\\dots+x_{10}y_{10}=25.1$，則 $0.3-4x$ 與 $2y+0.5$ 的相關係數為？',
    answer: '$-0.1$',
    hasImage: false,
  },
  {
    id: '1794307a23e',
    chapter: '數據分析',
    question:
      '設有四筆數據依序為 $(1,2)$、$(a,3)$、$(b,1)$、$(5,c)$，若 $a+b=6$，且 $y$ 對 $x$ 的迴歸直線方程式為 $y=2x-2$，則實數 $c=$？',
    answer: '$10$',
    hasImage: false,
  },
];

// 排列組合與機率
const combination: Question[] = [
  {
    id: '1889e60466e',
    chapter: '排列組合與機率',
    question:
      '袋中有 7 個白球，若干個紅球。今自袋中任取一個球，每一球被取的機會均等，取得一個紅球時，可以得 100 元獎金；取得一個白球時必須賠 50 元。如果此遊戲的期望值為 30 元，求袋中紅球的個數。',
    answer: '8',
    hasImage: false,
  },
  {
    id: '187c69db40d',
    chapter: '排列組合與機率',
    question:
      '有一抽獎遊戲，參加者自箱中一次抽出兩球，只有抽得兩球同紅色或同灰色可得獎金，其金額分別為 200 元、115 元。箱中已置有 2 顆紅色球及 5 顆灰色球。若抽出任一球之機率皆相等，主辦單位希望參加者所得獎金的期望值為 30 元，則應再置入幾顆其他顏色的球？',
    answer: '3',
    hasImage: false,
  },
  {
    id: '187c6a22d02',
    chapter: '排列組合與機率',
    question:
      '保險公司欲推出一年期的人壽險，每一件保險在收到保費後的行政費用成本為 200 元，保額為 20 萬元。由統計資料知，20 歲青年在一年內的死亡機率為 0.0002，若保險公司每件保險單的保費收 1000 元，則對保險公司而言，此人壽險每件保單獲利的期望值為？',
    answer: '760 元',
    hasImage: false,
  },
  {
    id: '187c6a541d6',
    chapter: '排列組合與機率',
    question:
      '樂透彩是從 1~42 個號碼中任選六個號碼，若所選的六個號碼與開獎開出的六個號碼完全相同，則是中頭獎；而若只中了其中任意的四個號碼，則是中了三獎。若中頭獎可獲得彩金 3780000 元，問中三獎應獲得多少彩金才能使中頭獎的期望值與中三獎的期望值相等。',
    answer: '400 元',
    hasImage: false,
  },
  {
    id: '187c6a82271',
    chapter: '排列組合與機率',
    question:
      '摸彩箱裝有編號 1~10 的彩球，各種編號的彩球數目可不相同。今從中隨機抽一球，依據取球的號碼給予報酬。現有甲、乙兩方案，\n甲方案：當號碼為 $k$ 時，報酬為 $k$\n乙方案：當號碼為 $k$ 時，報酬為 $11-k$\n已知依甲方案，每抽一球的期望值為 $\\dfrac{67}{14}$，則依乙方案，每抽一球的期望值為？',
    answer: '$\\frac{87}{14}$',
    hasImage: false,
  },
  {
    id: '187c6ad211a',
    chapter: '排列組合與機率',
    question:
      '班上 50 人，數學不及格有 30 人，英文不及格有 23 人，兩科均及格有 12 人，則兩科均不及格有幾人？數學及格但英文不及格有幾人？',
    answer: '15; 8',
    hasImage: false,
  },
  {
    id: '187c6ae5e37',
    chapter: '排列組合與機率',
    question:
      '學生 100 人，喜歡音樂的有 53 人，喜歡運動的有 72 人，兩者都喜歡的有 $x$ 人，求 $x$ 的範圍。',
    answer: '$25\\le x\\le53$',
    hasImage: false,
  },
  {
    id: '187c6aff093',
    chapter: '排列組合與機率',
    question:
      '全班參加考試，國文及格者有 37 人，英文及格者有 30 人，數學及格者有 25 人，國文、英文均及格者有 20 人，國文、數學均及格者有 16 人，英文、數學均及格者有 13 人，三科均及格者有 5 人，求：\n(1) 至少有一科及格人數\n(2) 恰只有一科及格人數\n(3) 至少有兩科及格人數',
    answer: '(1) 48 (2) 9 (3) 39',
    hasImage: false,
  },
  {
    id: '187c6b1851f',
    chapter: '排列組合與機率',
    question:
      '從 1~1000 的整數中，\n(1) 能被 2 或被 5 整除，但不能被 3 整除的數有幾個？\n(2) 與 120 互質的整數有幾個？',
    answer: '(1) 401 (2) 266',
    hasImage: false,
  },
  {
    id: '187c6b2b17d',
    chapter: '排列組合與機率',
    question:
      '甲、乙兩人比賽網球，約定先連勝 3 場或先勝 4 場者贏，沒有和局。已知前兩場甲勝，第三場乙勝，則有幾種不同的情形可以決定輸贏？',
    answer: '8',
    hasImage: false,
  },
  {
    id: '187c6b494ec',
    chapter: '排列組合與機率',
    question: '25 根火柴棒圍一個三角形，每根都要用，共可圍出幾種不全等的三角形？',
    answer: '16',
    hasImage: false,
  },
  {
    id: '187a5046ff8',
    chapter: '排列組合與機率',
    question:
      '投擲一顆公正骰子兩次，若點數依序為 $p,q$，則 $\\dfrac p q$ 為整數或有限小數的機率為？',
    answer: '$\\frac79$',
    hasImage: false,
  },
  {
    id: '187a50751ec',
    chapter: '排列組合與機率',
    question:
      '設 $A,B$ 為樣本空間 $U$ 中的兩事件，若 $P(A\\cup B)=\\dfrac34$，$P(A\\cap B)=\\dfrac18$，$P(B)=\\dfrac13$，求 $P(A-B)$。',
    answer: '$\\frac5{12}$',
    hasImage: false,
  },
  {
    id: '18782a2c7d6',
    chapter: '排列組合與機率',
    question: '求 $101^{10}$ 的萬位數字。',
    answer: '5',
    hasImage: false,
  },
  {
    id: '18782a8aae0',
    chapter: '排列組合與機率',
    question:
      '桌面上有 13 張相同的卡牌，但各卡牌分別標示有不同的號碼 1, 2, ..., 13。從中任取一張卡牌，若 $M$ 表示取出的號碼是 4 的倍數的事件，$N$ 表示取出的號碼小於 6 的事件，選出正確的選項。(多選)\n(A) $M$ 與 $N$ 為互斥事件\n(B) 事件 $M\\cup N=\\{1,2,3,4,5\\}$\n(C) 事件 $N$ 的餘事件為 $\\{6,7,8,9,10,11,12,13\\}$\n(D) 事件 $M\\cap N=\\{4\\}$\n(E) 事件 $N$ 發生但 $M$ 不發生的事件為 $\\{1,2,3,4,5\\}$',
    answer: '(C)(D)',
    hasImage: false,
  },
  {
    id: '18782aa0041',
    chapter: '排列組合與機率',
    question:
      '投擲 1 枚均勻的硬幣 4 次，求下列各事件的機率：\n(1) 出現 1 次正面，3 次反面的機率\n(2) 出現的正面次數大於反面次數的機率\n(3) 在第 3 次出現第 2 次正面的機率',
    answer: '(1) $\\frac14$ (2) $\\frac5{16}$ (3) $\\frac14$',
    hasImage: false,
  },
  {
    id: '18782ab9e41',
    chapter: '排列組合與機率',
    question:
      '袋中有 6 顆大小相同的球，其中紅球 4 顆，白球 2 顆。取一球後不放回，再取一球，求兩球都是紅球的機率。',
    answer: '$\\frac25$',
    hasImage: false,
  },
  {
    id: '18782ae64e5',
    chapter: '排列組合與機率',
    question: '寫有 1, 2, 3, 4, 5, 6, 7 各數字之七張卡片中任取兩張，求兩數字之和為偶數的機率。',
    answer: '$\\frac37$',
    hasImage: false,
  },
  {
    id: '18782af4d3d',
    chapter: '排列組合與機率',
    question: '四人同時玩「剪刀、石頭、布」的遊戲，求只玩一次就分出勝負的機率。',
    answer: '$\\frac{14}{27}$',
    hasImage: false,
  },
  {
    id: '18782b49e9c',
    chapter: '排列組合與機率',
    question:
      '若投擲四枚公正的銅幣，$P(A)$ 為恰出現一次正面的機率，$P(B)$ 為出現偶數次正面的機率，$P(C)$ 為出現至少一次反面的機率，下列何者正確？(多選)\n(A) $P(A)=\\dfrac3{16}$　　(B) $P(B)=\\dfrac12$\n(C) $P(C)=\\dfrac{15}{16}$　　(D) $P(A\\cap B)=0$\n(E) $P(A\\cap C)=\\dfrac12$',
    answer: '(B)(C)(D)',
    hasImage: false,
  },
  {
    id: '1873c103b7a',
    chapter: '排列組合與機率',
    question:
      '為了改善教學空間，學校打算重新粉刷 5 間不同的專科教室，現在有天空藍、湖水綠、夕陽紅和大麥白 4 種顏色的油漆，每間教室只能粉刷一種顏色，而每種顏色的油漆不限使用一次，不過天空藍的油漆數量不足，最多只能粉刷 4 間，求不同的粉刷方法數。',
    answer: '1023',
    hasImage: false,
  },
  {
    id: '1873c0d5923',
    chapter: '排列組合與機率',
    question:
      '小美用紅、黃、綠、藍、紫五種顏色塗色，每區域只塗一色，顏色可以重複使用，但相鄰的區域不同顏色，求塗色的方法數。',
    answer: '5120',
    hasImage: true,
  },
  {
    id: '1873c12fb4f',
    chapter: '排列組合與機率',
    question:
      '有 5 本不同的書，分給甲乙丙三人，就以下情形的分法，選出正確的選項。\n(1) 任意分為 125 種\n(2) 甲至少一本為 211 種\n(3) 乙恰得一本為 80 種\n(4) 三人均至少一本為 149 種\n(5) 恰有一人沒拿到書為 96 種',
    answer: '(2)(3)',
    hasImage: false,
  },
  {
    id: '186f35e186f',
    chapter: '排列組合與機率',
    question:
      '某棒球隊的 9 名先發球員中有 3 名左打者，6 名右打者。現在要將這 9 人排定一到九棒的打擊順序。試問：\n(1) 若左打者的棒次連排，右打者的棒次也連排，則共有幾種排法？\n(2) 若左打者的棒次不能相連，則共有幾種排法？',
    answer: '(1) 8640 (2) 151200',
    hasImage: false,
  },
  {
    id: '186f35f070e',
    chapter: '排列組合與機率',
    question: '將 4 本不同的書全部分給甲、乙、丙三人，甲恰得一本，乙、丙至少得一本，則有幾種分法？',
    answer: '24',
    hasImage: false,
  },
  {
    id: '186f3607088',
    chapter: '排列組合與機率',
    question:
      '從菊花、杜鵑、蘭花、山茶花、水仙花、牡丹 6 盆花中選出 4 盆要擺在窗台上，排成一列，其中杜鵑和山茶花都必須選到，且這兩盆花要相鄰，求排法數。',
    answer: '72',
    hasImage: false,
  },
  {
    id: '186f36215df',
    chapter: '排列組合與機率',
    question:
      '帶中有 5 顆紅球和 4 顆白球，一摸彩遊戲是從袋中隨機同時取出 2 球，且每球被取出的機會相等。若取出兩紅球，可得獎金 40 元，取出兩白球，可得獎金 100 元，則當取出兩球不同色時，應付多少元，方能使摸彩遊戲為公平遊戲？',
    answer: '50',
    hasImage: false,
  },
  {
    id: '186f3631290',
    chapter: '排列組合與機率',
    question:
      '一袋中有 7 個大小相同的球，編號 1~7 號，從袋中一次取出 4 球，則取出的球編號和為偶數的機率為？',
    answer: '$\\frac{19}{35}$',
    hasImage: false,
  },
  {
    id: '186f3648a63',
    chapter: '排列組合與機率',
    question:
      '某一水果商批發了 10 箱水果，從中任選 2 箱做農藥檢驗。若驗出任一箱水果的農藥過量，則整批水果退貨，已知 10 箱中恰有 2 箱水果所含的農藥過量，則這批水果被退貨的機率為？',
    answer: '$\\frac{17}{45}$',
    hasImage: false,
  },
  {
    id: '186cabcb2ee',
    chapter: '排列組合與機率',
    question: '請寫出「$-1\\le x<4$」的否定敘述。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '186cabf3411',
    chapter: '排列組合與機率',
    question:
      '設 $a$ 為一整數，兩集合 $A=\\{2,3,a^2-5a+10\\}$，$B=\\{2a-2,-5a+13,-a+6\\}$，$A\\cap B=\\{3,4\\}$，求 $a$。',
    answer: '3',
    hasImage: false,
  },
  {
    id: '186caf33786',
    chapter: '排列組合與機率',
    question:
      '一乒乓球隊有 6 位選手，其中甲、乙、丙為右手持拍的選手，丁、戊為左手持拍的選手，而己為左右手皆可持拍的選手。現在要派出兩名選手參加雙打，規定由一名可以右手持拍得選手與一名可以左手持拍的選手搭配。請問共有多少種可能搭配？',
    answer: '11',
    hasImage: false,
  },
  {
    id: '186caf4773d',
    chapter: '排列組合與機率',
    question:
      '用 1 元硬幣、5 元硬幣或 10 元硬幣支付 47 元貨款 (三種金額不一定全部使用)，共有幾種支付方式？',
    answer: '30',
    hasImage: false,
  },
  {
    id: '185852808c5',
    chapter: '排列組合與機率',
    question:
      '台北到嘉義的路程中有四個容易塞車的路段，如圖，龍潭路段、彰化路段、員林路段、霧峰路段遇到塞車的機率分別為 $\\dfrac45$、$\\dfrac14$、$\\dfrac12$、$\\dfrac58$，這些路段是否遇到塞車是互相獨立的。假設阿明出門時，並不了解這些路段塞車情況，因此經過交流道口時，選擇不同路段前進的機率均等，且只選擇其中一條路段前進，則阿明從台北開車回嘉義至少遇到一個路段塞車的機率為何？\n(1) $\\dfrac{17}{20}$　(2) $\\dfrac9{10}$　(3) $\\dfrac{37}{40}$　(4) $\\dfrac{15}{16}$　(5) $\\dfrac{77}{80}$',
    answer: '3',
    hasImage: true,
    style: { width: '10cm' },
  },
  {
    id: '1855e75aebd',
    chapter: '排列組合與機率',
    question:
      '有 10 個大小相同的球，其中 4 個為紅球，6 個為白球。將 10 個球全放入圖中的方格裡，每格放一球，若上列至少 2 個紅球且同一行不可皆為紅球，共有幾種放入的方法？',
    answer: '55',
    hasImage: true,
  },
  {
    id: '1855e6b9db0',
    chapter: '排列組合與機率',
    question:
      '在袋子中放入相同大小的 1 號球 2 顆，2 號球 3 顆，3 號球 4 顆，4 號球 5 顆，5 號球 6 顆。若隨機從袋中抽出 2 顆球，2 顆球號碼不同的機率為 $p$，請選出與數值 $p$ 最接近的選項。\n(1) 0.9 (2) 0.8 (3) 0.5 (4) 0.2 (5) 0.1',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '1855e3607e9',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙三個人玩遊戲，開始時，甲、乙兩人坐著，丙站著。每輪遊戲恰有一個人由站著變坐著或由坐著變站著。已知在第 4 輪的遊戲結束後，甲、乙、丙三人均站著。試問第 1 輪到第 4 輪的遊戲操作有 $\\textcirc{6-1}\\textcirc{6-2}$ 種不同情形。',
    answer: '20',
    hasImage: false,
  },
  {
    id: '1853f3e1391',
    chapter: '排列組合與機率',
    question:
      '關於 $(2x^2-\\dfrac1x)^5$ 的展開式中，試選出正確的選項。\n(1) $x^{10}$ 的係數為 32\n(2) $x^7$ 的係數為 80\n(3) $x^4$ 的係數為 80\n(4) $x$ 的係數為 40\n(5) 常數項為 0',
    answer: '(1)(3)(5)',
    hasImage: false,
  },
  {
    id: '1853f3ba48b',
    chapter: '排列組合與機率',
    question:
      '某一個高中的學生人數總共有 3000 人，其中喜歡打籃球的學生有 2300 人；喜歡打棒球的學生 900 人。如果我們隨機抽取一位學生，抽到喜歡打籃球也喜歡打棒球的學生，機率為 $P$，下列哪些選項是 $P$ 的可能值？(1) 0.05　(2) 0.06\n(3) 0.1　(4) 0.3　(5) 0.5',
    answer: '(3)(4)',
    hasImage: false,
  },
  {
    id: '1853f36c0f1',
    chapter: '排列組合與機率',
    question:
      '如圖，若使用紅、黃、藍、綠四色將臺灣地圖中的六個直轄市 (臺北市、新北市、桃園市、臺中市、臺南市、高雄市) 塗色。塗色原則為顏色可重複，但每個直轄市只塗一色，相鄰的兩直轄市不可同色，且臺北市不可以塗紅色，試問塗色方法共有幾種？',
    answer: '1296',
    hasImage: true,
  },
  {
    id: '1853f1a6e9a',
    chapter: '排列組合與機率',
    question:
      '因應政府三級警戒室內不得超過五人之政策，若某公司有 6 位員工，負責今天早上及下午的值班，公司設置甲、乙兩個辦公地點，早上需要有 4 位員工，其中 2 人值班甲地點，另 2 人值班乙地點；下午也需要有 4 位員工，其中 2 人值班甲地點，另 2 人值班乙地點。公司規定早上及下午來甲地點的值班員工不可以由同一人擔任，同時早上及下午來乙地點的值班員工也不可以由同一人擔任，則此公司對於員工在辦公地點的值班工作安排共 $\\textcirc{5-1}\\textcirc{5-2}\\textcirc{5-3}\\textcirc{5-4}$ 種方式。',
    answer: '1710',
    hasImage: false,
  },
  {
    id: '1853f1c6f00',
    chapter: '排列組合與機率',
    question:
      '一袋中有 9 個硬幣，其中 5 個 50 元，其餘 4 個同幣值，若從袋中一次取出 2 個期望值為 60 元，則其餘 4 個硬幣，每個幣值為 $\\textcirc{6-1}$ 元。',
    answer: '5',
    hasImage: false,
  },
  {
    id: '1853f1e4ba3',
    chapter: '排列組合與機率',
    question:
      '已知 $(ax^2+\\dfrac b x)^5$ 中 $x^7$ 的係數為 -810，$x$ 的係數為 -720，求 $(a,b)=(\\textcirc{7-1}\\textcirc{7-2},\\textcirc{7-3}\\textcirc{7-4})$。',
    answer: '(+-3,-2)',
    hasImage: false,
  },
  {
    id: '1851521ec6c',
    chapter: '排列組合與機率',
    question:
      '將 8 個不同物，依下列各情況分配：\n第一種：平分成四堆\n第二種：平分給甲、乙、丙、丁四人\n第三種：依 4 個、2 個、2 個分成三堆\n第四種：依甲分到 4 個，乙、丙各分 2 個\n第五種：分給甲、乙、丙三人，只知道其中一人得 4 個，另二人各得 2 個\n以上五種情況依序有 $a,b,c,d,e$ 種分法，請選出正確的選項。\n(1) $a=630$\n(2) $b=24a$\n(3) $c=210$\n(4) $d=2c$\n(5) $e=3c$',
    answer: '(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '18514ff2464',
    chapter: '排列組合與機率',
    question:
      '有一個不透明的袋子，袋中有黃、紅、紫三種顏色的球各一顆，每顆球被取到的機率相同。若由袋中連續取球 3 次，每次一球，取後放回。令 $P(k)$ 表此三球共有 $k$ 種顏色之機率，則 $P(1),P(2),P(3)$ 之大小順序為下列哪一選項？\n(1) $P(2)>P(3)>P(1)$\n(2) $P(2)>P(1)>P(3)$\n(3) $P(3)>P(2)>P(1)$\n(4) $P(3)>P(1)>P(2)$\n(5) $P(1)>P(3)>P(2)$',
    answer: '(1)',
    hasImage: false,
  },
  {
    id: '184eff04d5e',
    chapter: '排列組合與機率',
    question:
      '使用 3 種不同的顏色塗圖，每區塊只能塗一色，規定相鄰區塊必須異色，且 3 種顏色都必須使用。求所有塗色的方法數。',
    answer: '12',
    hasImage: true,
  },
  {
    id: '184efe1ff9a',
    chapter: '排列組合與機率',
    question:
      '從 1~7 這七個數中任意取出三個相異數，若每個數被取出的機率相同，則此三數和為質數的機率為？',
    answer: '$\\frac27$',
    hasImage: false,
  },
  {
    id: '184efd49543',
    chapter: '排列組合與機率',
    question:
      '日本料理中的握壽司料理相當受到台灣民眾的喜愛，在傳統的日本，握壽司有嚴謹的食用次序性，一般來說都是以「由白入紅，由淡至濃，熟食最後」這樣的規則食用，也就是先食用白肉魚，然後再食用紅肉魚，最後才食用濃郁海鮮，熟食則是食用完魚類與海鮮後才食用。依照食材的特性可以列成下列：\n白肉魚：鰈魚、鯛魚、比目魚、青甘、鰤魚、竹莢魚\n紅肉魚：黑鮪魚、鮭魚、鯖魚、鰹魚\n濃郁海鮮：蝦子、花枝、干貝、章魚、鮭魚卵、海膽\n熟食：海苔、煎蛋、豆皮',
    answer: '',
    hasImage: false,
  },
  {
    id: '184efd6a593',
    chapter: '排列組合與機率',
    question:
      '若想挑選 10 種食材，規定白肉魚至少 2 種，紅肉魚至少 3 種，濃郁海鮮 2 種，熟食 2 種，則挑選方法數為下列哪一個選項？(單選題，6 分)\n(1) 3400　(2) 4275　(3) 5000　(4) 6000　(5) 7000',
    answer: '2',
    hasImage: false,
  },
  {
    id: '184efd8dcc3',
    chapter: '排列組合與機率',
    question:
      '某天，謝師傅想從白肉魚、紅肉魚、濃郁海鮮中各挑選一樣食材製作成豪華壽司船，依照成本考量，若選擇鰤魚則不搭配黑鮪魚，選擇鮭魚必定搭配干貝，其他便無限制，則共有幾種食材的選擇方法？(非選擇題，9 分)',
    answer: '108',
    hasImage: false,
  },
  {
    id: '184efd0f3dd',
    chapter: '排列組合與機率',
    question:
      '雙贏彩是一種樂透型遊戲，您必須從 01~24 的號碼中任選 12 個進行投注。開獎時，開獎單位將隨機開出 12 個號碼，這一組號碼就是該期雙贏彩的中獎號碼，也稱為「獎號」。各獎項的中獎方式如下：\n頭獎：對中當期 12 個獎號或對中當期 0 個獎號\n貳獎：對中當期 11 個獎號或對中當期 1 個獎號\n參獎：對中當期 10 個獎號或對中當期 2 個獎號\n若投注一組號碼，令中貳獎的機率為 $r$，中參獎的機率為 $R$，則 $\\dfrac r R$ 之值為 $\\dfrac{\\textcirc{7-1}}{\\textcirc{7-2}\\textcirc{7-3}\\textcirc{7-4}}$。(化為最簡分數)',
    answer: '4121',
    hasImage: false,
  },
  {
    id: '184efaf223a',
    chapter: '排列組合與機率',
    question:
      '小明到自助餐店吃飯都固定選一個主食、一個主菜和一個配菜。其中主食有白飯、紫米飯、粥、炒飯四種選擇；主菜有雞腿、排骨、魚三種選擇；配菜有荷包蛋、高麗菜兩種選擇。小明跟自助餐阿姨說：「我討厭吃紫米飯配荷包蛋，而且吃雞腿就一定配白飯，現在開始我天天來吃一次。」求小明要吃幾天才可以把所有搭配都吃過一遍？\n(1) 16　(2) 18　(3) 20　(4) 24　(5) 25',
    answer: '1',
    hasImage: false,
  },
  {
    id: '184d36dd7c6',
    chapter: '排列組合與機率',
    question:
      '草莓品質分為優級與良級，重量規格分為 L (超過 28 公克)、M (25~28 公克)、S (未達 25 公克)。已知富野農場於本屆草莓季出產的草莓，有 $\\dfrac35$ 是優級；有 $\\dfrac25$ 是良級。在優級的草莓中，重量超過 28 公克的佔 $\\dfrac23$，其餘的每個重量皆至少都有 25 公克；在良級的草莓中，重量超過 28 公克的佔 $\\dfrac16$；重量在 25~28 公克的佔 $\\dfrac12$；其餘的每個重量皆未達 25 公克。草莓要出貨時，會將優級品或重量規格是 L 的草莓，包裝成禮盒販售。根據以上敘述，試選出正確的選項。\n(1) 富野農場本屆草莓季出產的草莓，重量規格是 M 的佔 $\\dfrac25$\n(2) 富野農場本屆草莓季出產的草莓，重量規格是 L 的超過一半\n(3) 任取一個富野農場本屆草莓季出產的草莓，已知取到重量規格是 L 的，則取到優級草莓的機率是 $\\dfrac67$\n(4) 任取一個富野農場本屆草莓季出產的草莓，已知取到的是良級的，則可以包裝成禮盒販售的機率為 $\\dfrac1{15}$\n(5) 包裝成禮盒販售的草莓，是良級的佔 $\\dfrac1{15}$',
    answer: '13',
    hasImage: false,
  },
  {
    id: '184a7fcbc3f',
    chapter: '排列組合與機率',
    question:
      '投擲兩個公正骰子，若每次僅出現一個偶數可得 10 元，兩個皆為偶數可得 40 元，求投擲兩次的期望值為幾元？',
    answer: '30',
    hasImage: false,
  },
  {
    id: '184a78541ec',
    chapter: '數據分析',
    question:
      '小波玩遊戲「旅行鍋牛」。這隻蝸牛出發去阿里山旅行，蝸牛回來時有可能帶著 2~4 張不同的照片返回。已知這遊戲中，阿里山的照片共有日出、雲海、神木、晚霞、小火車、郵票、鐵路、瀑布、降雪、森林共 10 種。「鐵路」與「小火車」這 2 張必定不同時出現，試求蝸牛帶回來的照片共有幾種可能的組合。',
    answer: '338',
    hasImage: false,
  },
  {
    id: '1848b57671f',
    chapter: '排列組合與機率',
    question:
      '從 0, 1, 2, ... , 9 中選出三個不同數字組成四位數 (其中的一個數字用兩次)，如 5242。這樣的四位數共有幾個？\n(1) 1692　(2) 3672　(3) 3708　(4) 3888　(5) 4320',
    answer: '4',
    hasImage: false,
  },
  {
    id: '183d8d5438a',
    chapter: '排列組合與機率',
    question:
      '近年來線上影音平台盛行，消費者可選擇是否繳交年費訂閱該平台，來觀看平台上所提供的各國戲劇與節目。在甲鎮，目前有 N、D 兩個平台可做選擇，且目前甲鎮人口有 1000 人，其中有 600 人訂閱 N 平台；有 500 人訂閱 D 平台；而有 200 人兩個平台均未訂閱，則：',
    answer: '',
    hasImage: false,
  },
  {
    id: '183d8d69d1a',
    chapter: '排列組合與機率',
    question:
      '在甲鎮中，隨機抽取一人，則此人訂閱平台數的期望值為 $\\dfrac{\\textcirc{18-1}\\textcirc{18-2}}{\\textcirc{18-3}\\textcirc{18-4}}$ 個。(化為最簡分數) (選填題，6 分)',
    answer: '1110',
    hasImage: false,
  },
  {
    id: '183d8ce2cc1',
    chapter: '排列組合與機率',
    question:
      '如圖，用藍、白、紅、黑、黃、綠六種顏色去隨機塗色。在相鄰區域異色的條件下，求塗成法國國旗的機率為 $\\dfrac{\\textcirc{15-1}}{\\textcirc{15-2}\\textcirc{15-3}\\textcirc{15-4}}$。(法國國旗由左至右為藍、白、紅) (化為最簡分數)',
    answer: '1150',
    hasImage: true,
  },
  {
    id: '183d75ce5b9',
    chapter: '排列組合與機率',
    question:
      '某次考試有一題 5 個選項的單選題超級困難。若有甲、乙、丙、丁四位同學，這一題都不會，只能隨便亂猜做答，而且都有寫上答案。試問至少有兩位同學猜到相同選項的機率最接近以下哪個選項？\n(1) 81%　(2) 83%　(3) 85%　(4) 27%　(5) 90%',
    answer: '1',
    hasImage: false,
  },
  {
    id: '183d741c890',
    chapter: '排列組合與機率',
    question:
      '有一百貨公司舉辦週年慶滿額抽獎活動，遊戲規則如下：參加者自箱中一次抽出兩球，確定顏色後放回。其顏色組合及可得金額如下表：\n$$\\begin{array}{|c|c|}\\hline顏色組合&二藍&二紅&一藍一紅&其他組合\\\\\\hline可獲折價券金額&1800&1200&600&0\\\\\\hline\\end{array}$$\n已知箱中置有 2 顆藍色球及 3 顆紅色球。在抽出任一球之機率相等的條件下，主辦單位希望參加者所得折價券金額的期望值為 200 元，則主辦單位應於箱內再放入 $\\textcirc{15-1}$ 顆其他顏色的球。',
    answer: '5',
    hasImage: false,
  },
  {
    id: '183d72a32c9',
    chapter: '排列組合與機率',
    question:
      '如圖，從正六邊形 $ABCDEF$ 的各邊中點，任取 3 點連成三角形，試選出正確的選項。\n(1) 依此方法可連成 3 種不同大小的三角形\n(2) 這些三角形中，共有 6 個鈍角三角形\n(3) 這些三角形中，共有 6 個銳角三角形\n(4) 這些三角形中，共有 6 個直角三角形\n(5) 這些三角形中，若為銳角三角形，則必為正三角形',
    answer: '125',
    hasImage: true,
  },
  {
    id: '183d71a9419',
    chapter: '排列組合與機率',
    question:
      '若 $a,b,c,d$ 均為集合 $S=\\{1,2,3,4,5\\}$ 的元素，且此四數的算術平均數為 $\\mu$。今將 $a,b,c,d$ 分別平方後得到的四個數的算術平均數恰好為 $\\mu^2$，則符合上述條件的數據 $(a,b,c,d)$ 共有多少組解？\n(1) 0　(2) 5　(3) $5\\times4\\times3\\times2$　(4) $5^4$　(5) $4^5$',
    answer: '2',
    hasImage: false,
  },
  {
    id: '182f1e74679',
    chapter: '排列組合與機率',
    question:
      '已知某一地區有 20 間藥局，已知每間藥局販售的口罩數量皆相等。若其中有 1 間一個口罩價格賣 8 元，有 5 間賣 6 元，有 12 間賣 5 元，有 2 間賣 2 元，則下列哪一個選項是一個口罩價格的期望值？\n(1) 3 元　　(2) 4 元　　(3) 4.8 元　　(4) 5 元　　(5) 5.1 元',
    answer: '5',
    hasImage: false,
  },
  {
    id: '182f1f3bc91',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、丁、戊、己 6 人欲搭乘纜車，每台纜車至多承載 4 人，且在至少兩人共乘的情況下，若不考慮其搭乘的順序，試問共有幾種分組的方式？\n(1) 25　　(2) 30　　(3) 35　　(4) 40　　(5) 45',
    answer: '4',
    hasImage: false,
  },
  {
    id: '182f20ca43b',
    chapter: '排列組合與機率',
    question:
      '將數字 1, 2, 3, 4, 5, 6 填入圖之空格中，每格填入一個數字，數字不重複使用，試選出正確的選項。\n(1) 任意填入有 720 種不同的填法\n(2) 若第一橫列都是偶數，第二橫列都是奇數，有 72 種不同的填法\n(3) 若每一直行上方數字小於下方數字，有 90 種不同的填法\n(4) 若每一橫列都是由左而右愈來愈大，有 120 種不同的填法\n(5) 若每一直行的數字和均相等，有 48 種不同的填法',
    answer: '135',
    hasImage: true,
    style: { width: '4cm' },
  },
  {
    id: '182f20ffa50',
    chapter: '排列組合與機率',
    question:
      '某公司接獲訂單，需於未來三日趕工。公司將每日工時分為早、午、晚三班制，每人每日必須恰選一時段輪值，且輪值晚班者，次日不可以輪值早班。其中操作員阿南因為表現優良，可優先選擇值班時段，則阿南安排值班的方式共有 $\\textcirc{13-1}\\textcirc{13-2}$ 種。',
    answer: '21',
    hasImage: false,
  },
  {
    id: '182f248b32f',
    chapter: '排列組合與機率',
    question:
      '開心棒球隊共有 3 位明星選手，每場比賽 3 位明星選手都會上場打擊。同一位選手單場比賽擊出 3 支安打以上，該選手可得「猛打賞」獎勵。已知上個球季共比賽 40 場，經過統計，3 位明星選手得到猛打賞的比賽場數分別有 14、15、16 場，3 位明星選手均得到猛打賞的比賽有 5 場，恰 2 位明星選手得到猛打賞的比賽有 12 場。則 3 位明星選手均未得到猛打賞的場數共計有 $\\textcirc{16-1}\\textcirc{16-2}$ 場。',
    answer: '17',
    hasImage: false,
  },
  {
    id: '182f24c95f4',
    chapter: '排列組合與機率',
    question:
      '某便利商店暑假舉行飲料促銷活動，結帳時收銀機會隨機出現 100~999 的三位數一個，每個三位數出現機率均相同。若該數的 3 個數字至少有兩個相同或是百位數字為 9，則可以獲得減價。求購買飲料時該次獲得減價的機率為 $\\dfrac{\\textcirc{17-1}}{\\textcirc{17-2}\\textcirc{17-3}}$ (化為最簡分數)。',
    answer: '925',
    hasImage: false,
  },
  {
    id: '182f252689d',
    chapter: '排列組合與機率',
    question:
      '若在此 $n$ 組中任選一組，再從此組中選出一個數字，其中每一組和每一個數字被選到的機率都相等，則選出的數字小於 20 的機率為何？(非選擇題，9分)',
    answer: '$\\frac{17}{36}$',
    hasImage: false,
  },
  {
    id: '17f34737862',
    chapter: '排列組合與機率',
    question:
      '選出正確的選項。\n(1) $5\\ge5$\n(2) $\\sqrt4=-2$ 或 $\\sqrt4=2$\n(3) $\\sqrt4=-2$ 且 $\\sqrt4=2$\n(4) $x=1$ 的否定敘述為 $x\\ne1$ \n(5) $0<x<2$ 的否定敘述為 $x\\le0$ 或 $x\\ge2$',
    answer: '(1)(2)(4)(5)',
    hasImage: false,
  },
  {
    id: '17f48c0100f',
    chapter: '排列組合與機率',
    question:
      '用 $5$ 種不同顏色塗下列各圖中的空白區域，每區域只塗一色，顏色可重複使用，但相鄰的區域不同顏色，各有多少種塗法？',
    answer: '$17280$',
    hasImage: true,
  },
  {
    id: '17f48c04702',
    chapter: '排列組合與機率',
    question:
      '用 $5$ 種不同顏色塗下列各圖中的空白區域，每區域只塗一色，顏色可重複使用，但相鄰的區域不同顏色，各有多少種塗法？',
    answer: '$420$',
    hasImage: true,
  },
  {
    id: '17f48c170f9',
    chapter: '排列組合與機率',
    question:
      '從 $1$ 到 $500$ 的正整數中，\n(1) 是 $3$ 的倍數或 $5$ 的倍數者有多少個？\n(2) 不是 $3$ 的倍數，也不是 $5$ 的倍數者有多少個？\n(3) 是 $3$ 的倍數但不是 $5$ 的倍數者有多少個？',
    answer: '(1) $233$ (2) $267$ (3) $333$',
    hasImage: false,
  },
  {
    id: '17f48c260ce',
    chapter: '排列組合與機率',
    question:
      '老師規定全班 $40$ 位同學，在校運期間大隊接力與趣味競賽兩個項目至少擇一參加。已知參加大隊接力的有 $20$ 人，兩個項目都參加的有 $10$ 人，求參加趣味競賽的有多少人？',
    answer: '$30$',
    hasImage: false,
  },
  {
    id: '17f48c343e0',
    chapter: '排列組合與機率',
    question:
      '在 $1$ 到 $100$ 的正整數中，\n(1) 是 $2$、$3$ 或 $7$ 的倍數者共有多少個？\n(2) 是 $2$ 的倍數或 $3$ 的倍數，但不是 $7$ 的倍數者共有多少個？',
    answer: '(1) $72$ (2) $58$',
    hasImage: false,
  },
  {
    id: '17f48c412b7',
    chapter: '排列組合與機率',
    question:
      '有一個十字路口，規定不可迴轉，東西向可以左右轉，南北向不可以左轉，則在此路口共有多少種車流方向？',
    answer: '$10$',
    hasImage: false,
  },
  {
    id: '17f48c53808',
    chapter: '排列組合與機率',
    question:
      '老師出兩個習題給班上 $45$ 人解，結果解出第一題的有 $28$ 人，解出第二題的有 $18$ 人，兩題都不會解的有 $5$ 人，求：\n(1) 兩題都解出來的人數\n(2) 只解出第二題的人數',
    answer: '(1) $6$ (2) $12$',
    hasImage: false,
  },
  {
    id: '17f48c5fec1',
    chapter: '排列組合與機率',
    question:
      '在 $1$ 到 $400$ 的正整數中，\n(1) 是 $2$、$3$ 或 $5$ 的倍數者共有多少個？\n(2) 與 $30$ 互質者共有幾個？',
    answer: '(1) $294$ (2) $106$',
    hasImage: false,
  },
  {
    id: '17f48c6b231',
    chapter: '排列組合與機率',
    question:
      '學校舉辦獨唱比賽共有 $5$ 位同學報名參加，出場順序由抽籤決定。請問共有多少種可能的抽籤結果？',
    answer: '$120$',
    hasImage: false,
  },
  {
    id: '17f48c7503d',
    chapter: '排列組合與機率',
    question: '推銷員想從 $7$ 個城市中，選出 $4$ 個城市依序推銷產品，安排方案有多少種？',
    answer: '$840$',
    hasImage: false,
  },
  {
    id: '17f48c8370e',
    chapter: '排列組合與機率',
    question:
      '從 $6$ 個同學中選出 $3$ 名參加辯論比賽，並排定一辯、二辯與三辯的名單。若其中甲同學不適合擔任三辯，則出賽名單的安排共有多少種？',
    answer: '$100$',
    hasImage: false,
  },
  {
    id: '17f48c93930',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、丁、戊、己共六人排成一列，求下列排列方法數：\n(1) 甲乙丙三人完全相鄰\n(2) 甲乙丙三人完全分開\n(3) 甲乙相鄰但丙丁分開',
    answer: '(1) $144$ (2) $144$ (3) $144$',
    hasImage: false,
  },
  {
    id: '17f3475953a',
    chapter: '排列組合與機率',
    question:
      "已知宇集為實數 $\\mathbb R$，$A=\\{x|0\\le x\\le2\\}$，$B=\\{x|1\\le x\\le3\\}$，求：\n(1) $A\\cap B$ (2) $A\\cup B$ (3) $A'$",
    answer: '(1) $\\{x|1\\le x\\le-2\\}$ (2) $\\{x|0\\le x\\le3\\}$ (3) $\\{x|x<0\\lor x>2\\}$',
    hasImage: false,
  },
  {
    id: '17f3476ef9b',
    chapter: '排列組合與機率',
    question:
      "已知宇集 $U=\\{1,2,3,4,5,6\\}$，$A=\\{1,2,3\\}$，$B=\\{2,4,6\\}$，求：\n(1) $A\\cap B$ (2) $A\\cup B$ (3) $A'$",
    answer: '(1) $\\{2\\}$ (2) $\\{1,2,3,4,6\\}$ (3) $\\{4,5,6\\}$',
    hasImage: false,
  },
  {
    id: '17f34785f46',
    chapter: '排列組合與機率',
    question:
      "設 $U=\\{1,2,3,4\\}$ 為宇集，集合 $A=\\{1,2\\}$ 與 $B=\\{2,3\\}$ 為 $U$ 的兩個子集，求：\n(1) $(A\\cap B)'$\n(2) $A'\\cup B'$\n(3) $(A\\cap B)'$ 與 $A'\\cup B'$ 是否相等？",
    answer: '(1) $\\{1,3,4\\}$ (2) $\\{1,3,4\\}$ (3) 是',
    hasImage: false,
  },
  {
    id: '17f34792bd9',
    chapter: '排列組合與機率',
    question:
      "設 $U=\\{1,2,3,4\\}$ 為宇集，集合 $A=\\{1,2\\}$ 與 $B=\\{2,3\\}$ 為 $U$ 的兩個子集，求：\n(1) $(A\\cup B)'$\n(2) $A'\\cap B'$\n(3) $(A\\cup B)'$ 與 $A'\\cap B'$ 是否相等？",
    answer: '(1) $\\{4\\}$ (2) $\\{4\\}$ (3) 是',
    hasImage: false,
  },
  {
    id: '17f347a9edd',
    chapter: '排列組合與機率',
    question:
      "已知宇集 $U=\\{-2,-1,0,1,2\\}$，集合 $A=\\{-2,-1,0\\}$，$B=\\{0,1,2\\}$，求 $A'\\cap B$。",
    answer: '$\\{1,2\\}$',
    hasImage: false,
  },
  {
    id: '17f347b3b8c',
    chapter: '排列組合與機率',
    question: '同時丟三枚大小不同的硬幣，求奇數個正面的情形共有幾種？',
    answer: '$4$',
    hasImage: false,
  },
  {
    id: '17f347bca85',
    chapter: '排列組合與機率',
    question: '從 $5$ 種報紙、$4$ 種週刊及 $3$ 種期刊中各訂一種共有多少種訂閱方案？',
    answer: '$60$',
    hasImage: false,
  },
  {
    id: '17f347da392',
    chapter: '排列組合與機率',
    question: '請寫出「$x=0$ 且 $y\\ge1$」的否定敘述。',
    answer: '$x\\ne0$ 或 $y<1$',
    hasImage: false,
  },
  {
    id: '17f347edef3',
    chapter: '排列組合與機率',
    question:
      '有 $A$、$B$ 二隊比賽籃球，每場不得和局，約定 $A$ 須勝三場才贏得比賽，而 $B$ 只勝二場就可贏得比賽，共有多少種可能的情形？',
    answer: '$10$',
    hasImage: false,
  },
  {
    id: '17f347f8bda',
    chapter: '排列組合與機率',
    question: '連續投擲一粒骰子兩次，出現點數和為 $3$ 的倍數之情形共有幾種？',
    answer: '$12$',
    hasImage: false,
  },
  {
    id: '17f34822dcc',
    chapter: '排列組合與機率',
    question:
      '小玲有不同的短衣 $4$ 件、長衣 $3$ 件、褲子 $2$ 件、裙子 $2$ 件及外套 $1$ 件，外出時，從短衣、長衣中選一件穿，從褲子、裙子中選一件穿，至於外套可穿也可不穿，共有多少種搭配的方式？',
    answer: '$56$',
    hasImage: false,
  },
  {
    id: '17f63889561',
    chapter: '排列組合與機率',
    question:
      '將國文、英文、數學和音樂各一節課排入早上的 $4$ 節課中，音樂課不排在第一節和第二節，共有多少種不同的排法？',
    answer: '12',
    hasImage: false,
  },
  {
    id: '17f63892e77',
    chapter: '排列組合與機率',
    question: '安排 7 個節目的出場序，若其中 3 個舞蹈節目要完全分開，則共有多少種不同的排法？',
    answer: '1440',
    hasImage: false,
  },
  {
    id: '17f638a1789',
    chapter: '排列組合與機率',
    question:
      '從一個 $10$ 人中的俱樂部，選出一位主任、一位幹事和一位會計，且均由不同人出任，如果 $10$ 人中的甲和乙不能同時被選上，那麼共有多少種不同的選法？',
    answer: '672',
    hasImage: false,
  },
  {
    id: '17f638aa943',
    chapter: '排列組合與機率',
    question: '已知甲、乙、丙、丁、戊共五人排一列，求甲乙不相鄰且丙丁不相鄰的排列數。',
    answer: '48',
    hasImage: false,
  },
  {
    id: '17f638bd19e',
    chapter: '排列組合與機率',
    question:
      '要將國文兩節、英文、數學、物理、化學及音樂各一節，排入星期一的 7 節課中，若數學課不排在第四節與第五節，則課表共有幾種排法？',
    answer: '1800',
    hasImage: false,
  },
  {
    id: '17f638cfc4b',
    chapter: '排列組合與機率',
    question:
      '設 2 位女生 3 位男生，要坐在 9 個排成一列的座位等候面試，若 2 位女生相鄰而坐，3 位男生也相鄰而坐，男生與女生之間，可以有空位，也可以沒有空位，則有多少種坐法？',
    answer: '360',
    hasImage: false,
  },
  {
    id: '17f638e12d0',
    chapter: '排列組合與機率',
    question:
      '以汽笛的長短音來做信號，長音一次需 2 秒，短音一次需 1 秒，每兩音之間停 1 秒。若鳴放時間為 15 秒，則可發出多少種不同的信號？',
    answer: '37',
    hasImage: false,
  },
  {
    id: '17f638fa19e',
    chapter: '排列組合與機率',
    question:
      '如圖的棋盤形街道，從 A 取捷徑走到 B，試問：\n(1) 共有幾種走法？\n(2) 若 C、D 兩處施工禁止通行，則共有幾種走法？',
    answer: '(1) 210 (2) 80',
    hasImage: true,
  },
  {
    id: '17f6390d761',
    chapter: '排列組合與機率',
    question:
      '有 3 艘不同的渡船，每船最多可載 4 人，求下列安全渡河的方法各有幾種？\n(1) 4 人同時渡河\n(2) 5 人同時渡河\n(3) 6 人同時渡河',
    answer: '(1) 81 (2) 240 (3) 690',
    hasImage: false,
  },
  {
    id: '17f6392560d',
    chapter: '排列組合與機率',
    question:
      '一列火車有七節車廂，車廂號碼 1~7，今有兩對夫婦同時搭上火車，此四人剛好選坐兩節不同車廂而且是一對夫婦在一節車廂，另外一對夫婦選坐另一節車廂，則共有幾種選法？',
    answer: '42',
    hasImage: false,
  },
  {
    id: '17f6392fabd',
    chapter: '排列組合與機率',
    question: '用 0，0，1，1，1，2 共 6 個數字作成六位數，共有幾種不同的數字？',
    answer: '40',
    hasImage: false,
  },
  {
    id: '17f63938f4d',
    chapter: '排列組合與機率',
    question: '將 5 張不同面額的禮券分給甲、乙、丙三人，禮券必須全部分完，求甲恰得一張的方法數。',
    answer: '80',
    hasImage: false,
  },
  {
    id: '17f8cfb0e93',
    chapter: '排列組合與機率',
    question:
      '從 5 個老師及 9 個學生中，選出 3 人，求下列選法有幾種？\n(1) 任意選\n(2) 老師與學生各至少一人\n(3) 至少有兩個老師',
    answer: '(1) 364 (2) 270 (3) 100',
    hasImage: false,
  },
  {
    id: '17f8cfb9ab3',
    chapter: '排列組合與機率',
    question: '從連續正整數 1 到 11 中，任取相異三數，其和為偶數的取法共有多少種？',
    answer: '85',
    hasImage: false,
  },
  {
    id: '17f8cfd289e',
    chapter: '排列組合與機率',
    question:
      '水族箱中有金魚 3 隻，孔雀魚 4 隻，大肚魚 5 隻。若從中撈 2 隻不同種類的魚送給小花，則共有多少種選擇的方案？(每隻魚都長得不一樣)',
    answer: '47',
    hasImage: false,
  },
  {
    id: '17f8cfdc4b6',
    chapter: '排列組合與機率',
    question:
      '拳擊比賽中，規定每位選手必須和所有其他選手各比賽一場。已知賽程總計為 78 場，求選手人數。',
    answer: '13',
    hasImage: false,
  },
  {
    id: '17f8cff4cba',
    chapter: '排列組合與機率',
    question:
      '公司從 8 名職員中選出 5 人派往甲、乙、丙三地出差，其中甲地須派 1 人，另外兩地各派 2 人，求共有多少種選派方案。',
    answer: '1680',
    hasImage: false,
  },
  {
    id: '17f8d00a18e',
    chapter: '排列組合與機率',
    question:
      '由 4 個大小相等的正方形拼成如圖，問圖中的 9 個點共可決定：\n(1) 多少條直線\n(2) 多少個三角形',
    answer: '(1) 20 (2) 76',
    hasImage: true,
  },
  {
    id: '17f8d0178e6',
    chapter: '排列組合與機率',
    question: '從 dependence 一字共 10 個字母中，任取 4 個字母為一組，共有多少種選法？',
    answer: '31',
    hasImage: false,
  },
  {
    id: '17f8d02e7a1',
    chapter: '排列組合與機率',
    question: '求 $C^2_2+C^3_2+C^4_2\\cdots+C^{98}_2+C^{99}_2$。',
    answer: '161700',
    hasImage: false,
  },
  {
    id: '17f8d03a30c',
    chapter: '排列組合與機率',
    question: '求 $(3a^2-b)^5$ 展開式中 $a^4b^3$ 的係數。',
    answer: '$-90$',
    hasImage: false,
  },
  {
    id: '17e5b8a89f4',
    chapter: '排列組合與機率',
    question:
      '是非題：\n(1) 循環小數 $1.2\\overline{34}$ 是無理數\n(2) $f(x)=x+1$ 是多項式\n(3) $2$ 是整數而且也是有理數\n(4) $8$ 是偶數且會被 $3$ 整除\n(5) $5$ 是質數或 $3>5$\n(6) $35$ 是 $2$ 或 $3$ 的倍數',
    answer: 'xooxox',
    hasImage: false,
  },
  {
    id: '17e5b8b5a5c',
    chapter: '排列組合與機率',
    question:
      '將下列各敘述改為否定：\n(1) $2x=9$\n(2) $3\\le x<7$\n(3) $x>1$ 或 $y\\le4$\n(4) 全班同學都及格\n(5) 至少有 $10$ 個隊伍闖關成功',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17e5b8c1a3a',
    chapter: '排列組合與機率',
    question:
      '是非題：\n(1) $\\sqrt2+\\sqrt3=\\sqrt5$\n(2) $0$ 是偶數\n(3) $1<2$ 且 $2=3$\n(4) $2>1$ 且 $2>0$\n(5) $1<2$ 或 $2=3$\n(6) $\\sqrt2>2$ 或 $\\sqrt3>2$',
    answer: 'xoxoox',
    hasImage: false,
  },
  {
    id: '17e5b8cb0ae',
    chapter: '排列組合與機率',
    question:
      '請將下列各敘述改為否定：\n(1) $3x+2y\\ne10$\n(2) $a=3$ 且 $b=5$\n(3) $x\\ge7$ 或 $y<2$\n(4) 數學競賽全班最多 $5$ 人過關\n(5) 至少有 $10$ 個同學及格',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17e5b8e3a7c',
    chapter: '排列組合與機率',
    question:
      '判斷下列推論的對錯，並回答其關係：\na. 若四邊形為矩形，則其對角線等長\nb. 若四邊形的對角線等長，則其為矩形\n「四邊形為矩形」是「四邊形的對角線等長」的什麼條件？(充分、必要、充要)',
    answer: '充份',
    hasImage: false,
  },
  {
    id: '17e5b8f7608',
    chapter: '排列組合與機率',
    question:
      '判斷下列推論的對錯，並回答其關係：\na. 若 $a=0$ 或 $b=0$，則 $a^2+b^2=0$\nb. 若 $a^2+b^2=0$，則 $a=0$ 或 $b=0$\n「$a=0$ 或 $b=0$」是「$a^2+b^2=0$」的什麼條件？(充份、必要、充要)',
    answer: '必要',
    hasImage: false,
  },
  {
    id: '17e5b901d00',
    chapter: '排列組合與機率',
    question:
      '判斷下列推論的對錯，並回答其關係：\na. 若 $ab<0$，則 $|a|+|b|>|a+b|$\nb. 若 $|a|+|b|>|a+b|$，則 $ab<0$\n「$ab<0$」是 「$|a|+|b|>|a+b|$」的什麼條件？(充份、必要、充要)',
    answer: '充要',
    hasImage: false,
  },
  {
    id: '17e5c312681',
    chapter: '排列組合與機率',
    question:
      '判斷下列推論的對錯：\n(1) $x$ 為實數，若 $\\dfrac x3<2$，則 $x<6$\n(2) $x$ 為非零實數，若 $\\dfrac6x<3$，則 $x>2$\n(3) 設 $a$、$b$ 為正數，若 $a>b$，則 $a^2>b^2$\n(4) 設 $a$、$b$ 為實數，若 $a^2+b^2>0$，則 $ab\\ne0$',
    answer: 'oxox',
    hasImage: false,
  },
  {
    id: '17e5c32a7ca',
    chapter: '排列組合與機率',
    question:
      '是非題：\n(1) 若 $\\triangle ABC$ 為等腰三角形，則 $\\angle B=\\angle C$\n(2) 三角形的邊長為 $a$、$b$、$c$，若 $a^2+b^2=c^2$，則此三角形為直角三角形\n(3) 若 $\\triangle ABC$ 與 $\\triangle PQR$ 是平面上的三角形，則 $\\angle A+\\angle B+\\angle C=\\angle P+\\angle Q+\\angle R$\n(4) 平面上三條直線 $L_1$、$L_2$、$L_3$，若 $L_1\\nparallel L_2$ 且 $L_2\\nparallel L_3$，則 $L_1\\nparallel L_3$。',
    answer: 'xoox',
    hasImage: false,
  },
  {
    id: '17e5c3361eb',
    chapter: '排列組合與機率',
    question:
      '已知敘述 $A$、$B$、$C$、$D$、$E$、$F$ 的蘊涵關係如圖，則下列選項哪些為真？\n(1) $A$ 是 $E$ 的充分條件 (2) $A$ 是 $F$ 的充分條件\n(3) $B$ 是 $E$ 的充要條件 (4) $D$ 是 $E$ 的必要條件\n(5) $F$ 是 $D$ 的必要條件',
    answer: '(1)(3)(5)',
    hasImage: true,
  },
  {
    id: '17e5c342742',
    chapter: '排列組合與機率',
    question:
      '請問下列各選項中，哪些是含有 3 個元素的集合？\n(1) $1,2,3$\n(2) $[x,y,z]$\n(3) $\\{1,1,a\\}$\n(4) $\\{\\text{小明},\\text{小華},5,5\\}$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17e5c350051',
    chapter: '排列組合與機率',
    question:
      '設 $A=\\{1,2,\\{3,4\\}\\}$，下列各選項哪些正確？\n(1) $1\\in A$　　(2) $2\\subset A$　　(3) $3\\in A$\n(4) $\\{1,2\\}\\subset A$　　(5) $\\{3,4\\}\\subset A$',
    answer: '(1)(4)',
    hasImage: false,
  },
  {
    id: '17e5c35b90f',
    chapter: '排列組合與機率',
    question: '請問集合 $\\{1,2,\\{1,2\\},\\{1\\},2\\}$ 內共有幾個元素？',
    answer: '4',
    hasImage: false,
  },
  {
    id: '17e5c36883f',
    chapter: '排列組合與機率',
    question:
      '集合 $S=\\{\\phi,\\{1,5\\},2\\}$，下列哪些為真？\n(1) $S$ 共有 4 個元素　　(2) $\\phi\\in S$\n(3) $\\phi\\subset S$　　　　(4) $1\\in S$ 且 $5\\in S$\n(5) $\\{1,5\\}\\subset S$　　(6) $\\{2\\}\\subset S$',
    answer: '(2)(3)(6)',
    hasImage: false,
  },
  {
    id: '17e5c378ac4',
    chapter: '排列組合與機率',
    question: '$A=\\{1,3,5\\}$，$B=\\{2,3,4,5,6\\}$，求：\n(1) $A\\cap B$ (2) $A\\cup B$ (3) $A-B$',
    answer: '(1) $\\{3,5\\}$ (2) $\\{1,2,3,4,5,6\\}$ (3) $\\{1\\}$',
    hasImage: false,
  },
  {
    id: '17e5c38b493',
    chapter: '排列組合與機率',
    question:
      "已知 $A\\cap B=\\{1,2,3\\}$，$A'=\\{4,5,7,8,10\\}$，$B'=\\{4,5,7,9,11,12\\}$，求 $A$、$B$。",
    answer: '$\\{1,2,3,9,11,12\\}$；$\\{1,2,3,8,10\\}$',
    hasImage: false,
  },
  {
    id: '17e5c396ba9',
    chapter: '排列組合與機率',
    question: '$A=\\{0,1,2,4,7\\}$，$B=\\{2,3,4,7,9\\}$，求 $(A\\cup B)-(A\\cap B)$。',
    answer: '$\\{0,1,3,9\\}$',
    hasImage: false,
  },
  {
    id: '17e5c3a3982',
    chapter: '排列組合與機率',
    question:
      "宇集 $U=\\{1,2,3,4,5,6,7,8\\}$，$A=\\{2,4,6,8\\}$，$B=\\{3,4,5,6,7\\}$，求 $(A\\cup B)'$、$(A-B)'$。",
    answer: '$\\{1\\}$；$\\{1,3,4,5,6,7\\}$',
    hasImage: false,
  },
  {
    id: '17e5c3c4ada',
    chapter: '排列組合與機率',
    question:
      "設 $A=\\{x|2\\leq x<5\\}$，$B=\\{x|4\\le x<7\\}$，求：\n(1) $A\\cap B$ (2) $A\\cup B$ (3) $A\\cap B'$ (4) $A'-B'$",
    answer:
      '(1) $\\{x|4\\le x<5\\}$ (2) $\\{x|2\\le x<7\\}$ (3) $\\{x|2\\le x<4\\}$ (4) $\\{x|5\\le x<7\\}$',
    hasImage: false,
  },
  {
    id: '186cad144fb',
    chapter: '排列組合與機率',
    question:
      "設 $A=\\{x|-2<x\\le5\\}$，$B=\\{x|x\\le-1\\lor x>5\\}$，則下列個集合何者正確？\n(1) $A'=\\{x|x\\le-2\\lor x\\ge5\\}$\n(2) $A-B=\\{x|-1<x\\le3\\}$\n(3) $A\\cap B=\\{x|-2<x\\le-1\\lor3<x\\le5\\}$\n(4) $A\\cup B'=\\{x|-2<x\\le5\\}$\n(5) $A'\\cap B'=\\{x|-1<x\\le3\\}$",
    answer: '(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '17e6c837d27',
    chapter: '排列組合與機率',
    question:
      '$A=\\{x|2\\le x\\le6\\}$，$B=\\{x|-1\\le x\\le5\\}$，求：$A\\cap B$、$A\\cup B$、$A-B$。\n',
    answer: '$\\{x|2\\le x\\le5\\}$；$\\{x|-1\\le x\\le6\\}$；$\\{x|5<x\\le6\\}$',
    hasImage: false,
  },
  {
    id: '17e6c84a4cf',
    chapter: '排列組合與機率',
    question:
      '有 45 人參加測驗，考 $A$、$B$ 兩題測驗題，答對 $A$ 題的有 28 人，答對 $B$ 題的有 30 人，兩題都答對的有 18 人，求只答對一題的人數。',
    answer: '22',
    hasImage: false,
  },
  {
    id: '186c7c0800f',
    chapter: '排列組合與機率',
    question: '1 到 800 的自然數中，是 2 或 3 或 5 的倍數的數有幾個？',
    answer: '586',
    hasImage: false,
  },
  {
    id: '186c7c22eab',
    chapter: '排列組合與機率',
    question:
      '學生 80 人，喜歡音樂的有 35 人，喜歡運動的有 54 人，兩者都喜歡的有 $x$ 人，求 $x$ 的最大可能與最小可能。',
    answer: '35; 9',
    hasImage: false,
  },
  {
    id: '17e6c853dc1',
    chapter: '排列組合與機率',
    question:
      '資優班學生共 55 人，有國文、數學、理化的學科競賽。已知考國文的有 37 人，考數學的有 26 人，考理化的有 33 人，考國文與數學的有 17 人，考數學與理化的有 15 人，考理化與國文的有 22 人，考國文、數學、理化三科的有 9 人。試求沒有參加考試的人數。',
    answer: '4',
    hasImage: false,
  },
  {
    id: '17e6c864ad1',
    chapter: '排列組合與機率',
    question:
      '甲、乙兩人比賽桌球，每局不得和局，先連贏兩場或先勝三場者，則贏得比賽，求比賽的勝負過程共有幾種情形？',
    answer: '10',
    hasImage: false,
  },
  {
    id: '17e6c867075',
    chapter: '排列組合與機率',
    question:
      '甲、乙兩人比賽桌球，每局不得和局，先連贏兩場或先勝四場者，則贏得比賽，則比賽的勝負過程共有幾種情形？',
    answer: '14',
    hasImage: false,
  },
  {
    id: '17e6c86b517',
    chapter: '排列組合與機率',
    question:
      '袋子裡有 3 個相同蘋果、4 個相同蓮霧、2 個相同芭樂，從中至少取出一個，共有幾種不同的取法？',
    answer: '59',
    hasImage: false,
  },
  {
    id: '17e6c86f8f8',
    chapter: '排列組合與機率',
    question: '袋子裡有 2 個相同蘋果、5 個相同蓮霧、3 個相同芭樂，從中至少取出一個，共有幾種取法？',
    answer: '71',
    hasImage: false,
  },
  {
    id: '17e6c876387',
    chapter: '排列組合與機率',
    question:
      '$A$ 城市到 $B$ 城市之間的連接道路，共有 3 條雙向道，6 條 $A$ 到 $B$ 的單行道，5 條 $B$ 到 $A$ 的單行道，若某人由 $A$ 到 $B$ 再回到 $A$，且去回走不同的路，求共有幾種不同的走法？',
    answer: '69',
    hasImage: false,
  },
  {
    id: '17e6c87c559',
    chapter: '排列組合與機率',
    question:
      '大樓有 5 個出入口，甲、乙兩人由不同的門進去，再由不同的門出來，若每人不可由同一門進出，求其進出的方法數。',
    answer: '260',
    hasImage: false,
  },
  {
    id: '17e6c8834cb',
    chapter: '排列組合與機率',
    question:
      '$A$、$B$ 之間的連接道路，共有 4 條雙向道，5 條 $A$ 到 $B$ 的單行道，3 條 $B$ 到 $A$ 的單行道。某人由 $A$ 出差到 $B$ 再返回 $A$，且去回走不同的道路，則共有幾種走法？',
    answer: '59',
    hasImage: false,
  },
  {
    id: '17e6c887f4f',
    chapter: '排列組合與機率',
    question:
      '大樓有 6 個出入口，甲、乙兩分別由不同的門進出此大樓一次，若每人不可由同一門進出，求其進出的方法數。',
    answer: '630',
    hasImage: false,
  },
  {
    id: '17e6c88fd5f',
    chapter: '排列組合與機率',
    question:
      '如圖，由 $A$ 走到 $B$，任一點只能經過一次，若只能向 $\\uparrow$、$\\rightarrow$，共有幾種走法？',
    answer: '18',
    hasImage: true,
  },
  {
    id: '17e6c894dc7',
    chapter: '排列組合與機率',
    question:
      '棋盤道路如圖，途中有兩個十字路口 $P$、$Q$ 因交通管制不得經過，求由 $A$ 到 $B$ 走捷徑的方法數。',
    answer: '150',
    hasImage: true,
  },
  {
    id: '17e6c8a02ab',
    chapter: '排列組合與機率',
    question: '有 5 種顏色的顏料塗入圖中各區域，每區域一色且相鄰部分不可同色，則有幾種塗法？',
    answer: '1920',
    hasImage: true,
  },
  {
    id: '17e6c8a8331',
    chapter: '排列組合與機率',
    question:
      '有 5 種顏色的顏料塗入圖中各區域，每區域一色且相鄰異色，圖形固定不可旋轉，有幾種塗法？',
    answer: '260',
    hasImage: true,
  },
  {
    id: '17e6c8ad23d',
    chapter: '排列組合與機率',
    question: '用 4 種色料塗各圖形，若相鄰部分不可同色，求各有幾種塗法。',
    answer: '324',
    hasImage: true,
  },
  {
    id: '17e6c8b5647',
    chapter: '排列組合與機率',
    question:
      '如圖，五個方格用 4 種色料來著色，若相鄰不可同色，且最左邊方格與最右邊方格要同色，求共有幾種著色的方法？',
    answer: '84',
    hasImage: true,
  },
  {
    id: '17e6c8c07cf',
    chapter: '排列組合與機率',
    question:
      '有 $a$、$b$、$c$、$d$、$e$ 共 5 個字母，不重複地選取若干個排成一列，求：\n(1) 任選五個，有幾種排法？\n(2) 任選三個，有幾種排法？',
    answer: '(1) 120 (2) 60',
    hasImage: false,
  },
  {
    id: '17e6c8c64a1',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、...等 8 人中，選 5 人排成一列，求：\n(1) 5 人中必含甲，有幾種排法？\n(2) 若恰含甲、乙、丙其中一人，有幾種排法？',
    answer: '(1) 4200 (2) 1800',
    hasImage: false,
  },
  {
    id: '17e6c8cbefa',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、丁、戊、己共 6 人，求：\n(1) 6 人排成一列，共有幾種排法？\n(2) 選 4 人排成一列，共有幾種排法？',
    answer: '(1) 720 (2) 360',
    hasImage: false,
  },
  {
    id: '17e6c8d1130',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、...等 7 人中，選 4 人排成一列，求：\n(1) 必含甲和乙，排法共有幾種？\n(2) 若含甲且不含乙，有幾種排法？',
    answer: '(1) 240 (2) 240',
    hasImage: false,
  },
  {
    id: '17e6c8e2981',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、...等 7 人排成一列，依下列各條件求其排列的方法數：\n(1) 甲、乙、丙三者相鄰\n(2) 甲、乙、丙兩兩不相鄰',
    answer: '(1) 720 (2) 1440',
    hasImage: false,
  },
  {
    id: '17e6c8e2982',
    chapter: '排列組合與機率',
    question: '承例題 3，(1) 丙不與甲、乙相鄰\n(2) 甲、乙相鄰且丙丁相鄰',
    answer: '(1) 2400 (2) 480',
    hasImage: false,
  },
  {
    id: '17e6c8ef3cd',
    chapter: '排列組合與機率',
    question:
      '畫廊展出 10 幅不同的畫，其中 2 幅水彩畫、3 幅油畫、5 幅國畫，排成一列陳列，同一類型的畫必須排在一起，而且水彩畫不排在兩端，則共有幾種不同的陳列方式？',
    answer: '2880',
    hasImage: false,
  },
  {
    id: '17e6c8f3084',
    chapter: '排列組合與機率',
    question:
      '5 個男生和 3 個女生排成一列，則：\n(1) 若限定男生排在一起，女生也排在一起，共有幾種排法？\n(2) 若只限定男生排在一起，共有幾種排法？',
    answer: '(1) 1440 (2) 2880',
    hasImage: false,
  },
  {
    id: '17e6c8f79a3',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、丁、戊等 5 人排在一起，若：\n(1) 甲不排首，有幾種排法？\n(2) 甲不排首且乙不排尾，有幾種排法？',
    answer: '(1) 96 (2) 78',
    hasImage: false,
  },
  {
    id: '17e6c903b49',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、...等 7 人排成一列，若：\n(1) 甲不排首但乙必排尾，有幾種排法？\n(2) 甲不排首且乙不排尾，有幾種排法？\n(3) 甲不排首、乙不排正中央且丙不排尾，有幾種排法？',
    answer: '(1) 600 (2) 3720 (3) 3216',
    hasImage: false,
  },
  {
    id: '17e6c907a8e',
    chapter: '排列組合與機率',
    question: '有 5 種不同的酒和 4 個不同的杯子，若每個杯子必須裝滿一種酒，共有幾種結果？',
    answer: '625',
    hasImage: false,
  },
  {
    id: '17e6c90e014',
    chapter: '排列組合與機率',
    question:
      '5 個不同的獎品發給甲、乙、丙、丁 4 位同學，求下列各種分配方法：\n(1) 每人可兼得各個獎品，有幾種分法？\n(2) 甲至少得一個獎品，有幾種分法？',
    answer: '(1) 1024 (2) 781',
    hasImage: false,
  },
  {
    id: '17e6c912fad',
    chapter: '排列組合與機率',
    question:
      '6 個人到碼頭渡船，有甲、乙、丙三艘船可供選擇，若：\n(1) 每艘船最多搭乘 5 人，求共有幾種方法？\n(2) 每艘船最多搭乘 4 人，求共有幾種方法？',
    answer: '(1) 726 (2) 690',
    hasImage: false,
  },
  {
    id: '17e6c916083',
    chapter: '排列組合與機率',
    question: '3 種不同的酒和 4 個不同的杯子，若每個杯子必須裝滿一種酒，有幾種結果？',
    answer: '81',
    hasImage: false,
  },
  {
    id: '17e6c919c5e',
    chapter: '排列組合與機率',
    question:
      '6 個不同的獎品要發給甲、乙、丙 3 人，求下列各種分配方法：\n(1) 每人可兼得各個獎品，有幾種分法？\n(2) 甲恰得一個獎品，有幾種分法？\n(3) 甲至少得一個獎品，有幾種分法？',
    answer: '(1) 729 (2) 192 (3) 66',
    hasImage: false,
  },
  {
    id: '17e6c92594d',
    chapter: '排列組合與機率',
    question: '5 個人搭船，有甲、乙、丙、丁四艘船可供選擇，若每艘船最多搭乘 4 人，則有幾種方法？',
    answer: '(1) 1020',
    hasImage: false,
  },
  {
    id: '17e6c932288',
    chapter: '排列組合與機率',
    question:
      '取 0、1、2、3、4、5 排列，求：\n(1) 數字可重複，共可排成幾個四位數？\n(2) 數字可重複，共可排成幾個四位偶數？\n(3) 數字不可重複，共可排成幾個四位數？',
    answer: '(1) 1080 (2) 540 (3) 300',
    hasImage: false,
  },
  {
    id: '17e6c9388d6',
    chapter: '排列組合與機率',
    question:
      '取 0、1、2、3、4、5、6、7 排列，求：\n(1) 數字可重複，共可排成幾個三位數？\n(2) 數字可重複，共可排成幾個三位偶數？\n(3) 數字不可重複，共可排成幾個三位數？',
    answer: '(1) 294 (2) 150 (3) 448',
    hasImage: false,
  },
  {
    id: '17e6c93df90',
    chapter: '排列組合與機率',
    question: '有 $a,a,b,b,b,c,d,e$ 共 8 個字母，全排成一列，任意排，有幾種排法？',
    answer: '3360',
    hasImage: false,
  },
  {
    id: '17e6c941b71',
    chapter: '排列組合與機率',
    question: '2 顆相同西瓜與 3 顆相同冬瓜給 7 個人，每人最多一個，共有幾種分法？',
    answer: '210',
    hasImage: false,
  },
  {
    id: '17e6c945a8c',
    chapter: '排列組合與機率',
    question: '把 mississipi 的字母排成一列，共有幾種排法？',
    answer: '6300',
    hasImage: false,
  },
  {
    id: '17e6c948d55',
    chapter: '排列組合與機率',
    question: '將 3 枝相同鉛筆、2 枝相同原子筆分給 8 個人，每人最多一枝，共有幾種分法？',
    answer: '560',
    hasImage: false,
  },
  {
    id: '17e6c954cea',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、...等 7 人作直線排列，若甲在乙的左方，且乙在丙的左方，如「甲戊乙丁庚丙己」，排法有幾種？',
    answer: '840',
    hasImage: false,
  },
  {
    id: '17e6c9582fc',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、丁、戊、己 6 人排成一列，規定：(1) 甲在乙的左方，排法有幾種？\n(2) 甲在乙的左方，且乙在丙的右方，排法有幾種？',
    answer: '(1) 360 (2) 240',
    hasImage: false,
  },
  {
    id: '17e6c960b12',
    chapter: '排列組合與機率',
    question:
      '在棋盤道路的城市，想由 $A$ 走到 $B$，則：\n(1) 走捷徑，共有幾種走法？\n(2) 走捷徑，但必須經過 $C$ 點或 $D$ 點，共有幾種走法？',
    answer: '(1) 210 (2) 141',
    hasImage: true,
  },
  {
    id: '17e6c965715',
    chapter: '排列組合與機率',
    question:
      '棋盤道路如圖，由 $A$ 走到 $B$，若：\n(1) 只能向上或向右，共有幾種走法？\n(2) 走捷徑，不經過 $C$ 點也不經過 $D$ 點，共有幾種走法？\n(3) 走捷徑，且經過 $P$ 點，共有幾種走法？',
    answer: '(1) 792 (2) 492 (3) 150',
    hasImage: true,
  },
  {
    id: '17e6c96b61c',
    chapter: '排列組合與機率',
    question: '求值：(1) $C_3^7$ (2) $C_{98}^{100}$',
    answer: '(1) 35 (2) 4950',
    hasImage: false,
  },
  {
    id: '17e6c971c15',
    chapter: '排列組合與機率',
    question: '解方程式 $3C_4^n=14C_2^{n-2}$，求 $n$。',
    answer: '8',
    hasImage: false,
  },
  {
    id: '17e6c97ade5',
    chapter: '排列組合與機率',
    question: '求值：(1) $C_2^6$ (2) $C_3^8$',
    answer: '(1) 15 (2) 56',
    hasImage: false,
  },
  {
    id: '17e6c97ecb4',
    chapter: '排列組合與機率',
    question: '解方程式：$5C_3^{n+2}=4C_2^{2n+1}$，求 $n$。',
    answer: '7',
    hasImage: false,
  },
  {
    id: '17e6c984524',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、丁、戊、己、庚共 7 個人，\n(1) 任選 5 人，共有幾種選法？\n(2) 任選 6 人，共有幾種選法？\n(3) 任選 4 人且恰含甲、乙、丙、丁中的兩人，共有幾種選法？',
    answer: '(1) 21 (2) 7 (3) 18',
    hasImage: false,
  },
  {
    id: '17e6c98ac8f',
    chapter: '排列組合與機率',
    question:
      '一份考卷有 14 題，選其中 10 題來做：\n(1) 共有幾種選法？\n(2) 若前 5 題中恰選做 3 題，後 9 題中恰選做 7 題，求有幾種選法？',
    answer: '(1) 1001 (2) 360',
    hasImage: false,
  },
  {
    id: '17e6c98fdcb',
    chapter: '排列組合與機率',
    question: '從 5 男 4 女中選出 3 人，至少要一男一女，共有幾種選法？',
    answer: '70',
    hasImage: false,
  },
  {
    id: '17e6c9937a4',
    chapter: '排列組合與機率',
    question:
      '從 5 對夫婦挑選 4 人，若：\n(1) 夫婦不能同時被選上，共有幾種選法？\n(2) 恰含一對夫婦，共有幾種選法？',
    answer: '(1) 80 (2) 120',
    hasImage: false,
  },
  {
    id: '17e6c9b3226',
    chapter: '排列組合與機率',
    question: '7 位男生、5 位女生中選取 4 人，其中至少 2 名男生與 1 名女生，則有幾種選法？',
    answer: '385',
    hasImage: false,
  },
  {
    id: '17e6c9aff55',
    chapter: '排列組合與機率',
    question:
      '從 6 對夫婦中挑選 4 人，若：\n(1) 夫婦不能同時被選上，有幾種選法？\n(2) 恰含一對夫婦，有幾種選法？',
    answer: '(1) 240 (2) 240',
    hasImage: false,
  },
  {
    id: '17e6c9b8849',
    chapter: '排列組合與機率',
    question: '有八位新生，若平均分配到甲、乙、丙、丁四個班，共有幾種分法？',
    answer: '2520',
    hasImage: false,
  },
  {
    id: '17e6c9bd3ca',
    chapter: '排列組合與機率',
    question:
      '12 本不同的書，分給甲、乙、丙 3 人，若：\n(1) 每人 4 本有幾種分法？\n(2) 甲、乙各 5 本，丙得 2 本，有幾種分法？',
    answer: '(1) 34650 (2) 16632',
    hasImage: false,
  },
  {
    id: '17e6c9c32c0',
    chapter: '排列組合與機率',
    question:
      '有 6 個相異獎品要分給五位同學，求：\n(1) 選出三個人，每人各得 2 個獎品，有幾種分法？\n(2) 選出三個人，有一個人得 3 個，有一個人得 2 個，有一個人得 1 個，有幾種分法？',
    answer: '(1) 900 (2) 3600',
    hasImage: false,
  },
  {
    id: '17e6c9c8de8',
    chapter: '排列組合與機率',
    question:
      '12 本不同的書，若：\n(1) 分成 3 堆，每堆 4 本，則有幾種分法？\n(2) 分成 3 堆，兩堆各 5 本，一堆僅有 2 兩本，則有幾種分法？',
    answer: '(1) 5775 (2) 8316',
    hasImage: false,
  },
  {
    id: '17e6c9d2943',
    chapter: '排列組合與機率',
    question:
      '將球放進箱子中，每箱的球數不限，則依箱子的異同分別考慮下列各題：\n(1) 4 個不同的球，全部任意放入 3 個不同的箱子，有幾種放法？\n(2) 4 個不同的球，放入 3 個不同的箱子且每箱至少 1 球，有幾種放法？\n(3) 4 個不同的球，全部任意放入 3 個相同的箱子，有幾種放法？',
    answer: '(1) 81 (2) 36 (3) 14',
    hasImage: false,
  },
  {
    id: '17e6c9da340',
    chapter: '排列組合與機率',
    question:
      '將 4 本書分給甲、乙、丙、丁、戊、己 6 人\n(1) 若 4 本書都相同，每人最多分一本書，共有幾種分法？\n(2) 若 4 本書都不同，每人可以不只分一本書，共有幾種分法？\n(3) 若 4 本書都不同，每人最多分一本書，共有幾種分法？',
    answer: '(1) 15  (2) 1296 (3) 360',
    hasImage: false,
  },
  {
    id: '17e6c9e0b5f',
    chapter: '排列組合與機率',
    question: '若 $C_{40}^{100}-C_{39}^{99}=C_r^{99}$，求 $r$。',
    answer: '40 或 59',
    hasImage: false,
  },
  {
    id: '17e6c9e5e69',
    chapter: '排列組合與機率',
    question: '化簡 $C_2^5+C_3^6+C_4^7+C_5^8+\\cdots+C_{17}^{20}$。',
    answer: '5980',
    hasImage: false,
  },
  {
    id: '17e6c9eafc1',
    chapter: '排列組合與機率',
    question: '化簡自然數 $n$ 滿足 $C_{11}^{45}+C_{33}^{45}=C_n^{46}$，求 $n$',
    answer: '12 或 34',
    hasImage: false,
  },
  {
    id: '17e6c9ef513',
    chapter: '排列組合與機率',
    question: '化簡 $C_0^3+C_1^4+C_2^5+C_3^6+\\cdots+C_{15}^{18}$。',
    answer: '3876',
    hasImage: false,
  },
  {
    id: '17e6ca152fb',
    chapter: '排列組合與機率',
    question: '$(x-2y)^7$ 展開後，求：\n(1) $x^4y^3$ 項係數 (2) $x^3y^2$ 項係數',
    answer: '(1) -280 (2) 0',
    hasImage: false,
  },
  {
    id: '17e6c9f8702',
    chapter: '排列組合與機率',
    question: '求 $(2x^2-\\dfrac3x)^6$ 展開後的常數項。',
    answer: '4860',
    hasImage: false,
  },
  {
    id: '17e6ca2d059',
    chapter: '排列組合與機率',
    question: '$(2x+3y)^8$ 展開後，求 $x^3y^5$ 項係數、$x^7y$ 項係數。',
    answer: '108864；3072',
    hasImage: false,
  },
  {
    id: '17e6ca28f28',
    chapter: '排列組合與機率',
    question: '$(3x+\\dfrac1x)^8$ 展開後，求 $x^2$ 項係數、常數項。',
    answer: '13608；5670',
    hasImage: false,
  },
  {
    id: '186ca6d8c82',
    chapter: '排列組合與機率',
    question: '求 $1.1^{10}$ 的近似值到小數點後第二位。(第三位四捨五入)',
    answer: '2.59',
    hasImage: false,
  },
  {
    id: '186ca6dffa7',
    chapter: '排列組合與機率',
    question: '求 $1.1^{12}$ 的近似值到小數點後第二位。(第三位四捨五入)',
    answer: '3.14',
    hasImage: false,
  },
  {
    id: '17e6ca38adf',
    chapter: '排列組合與機率',
    question:
      '整數 1 到 7 任意取出相異兩個數字，每個數字被取的機會均等，取出後不用排列組合，問：(1) 樣本空間共有幾個樣本？\n(2) 請列出兩數互質的事件，並求出兩數互質的機率。',
    answer: '(1) 21 (2) $\\frac{17}{21}$',
    hasImage: false,
  },
  {
    id: '17e6ca45969',
    chapter: '排列組合與機率',
    question:
      '擲三個相同的公正殿子，若各様本的出現機率一樣大，問：(1) 様本空間共有幾個樣本？\n(2) 列出點數和為 15 的事件，並求出點數和為 15 的機率。',
    answer: '(1) 216 (2) $\\frac5{108}$',
    hasImage: false,
  },
  {
    id: '17e6ca5593b',
    chapter: '排列組合與機率',
    question:
      '甲袋有黑、白兩球，乙袋有紅、黃、三球，現做一試驗：先從甲袋取出一球，放入乙袋後再從乙袋取出一球，問：\n(1) 此試驗的樣本空間有幾個樣本？\n(2) 前後所取兩球為同色球的機率為？\n(3) 乙袋取出黑球機率為？',
    answer: '(1) 8 (2) $\\frac14$ (3) $\\frac18$',
    hasImage: false,
  },
  {
    id: '17e6ca60345',
    chapter: '排列組合與機率',
    question: '擲兩均勻骰子，點數和大於 5 且小於 8 發生的機率為何？',
    answer: '$\\frac{11}{36}$',
    hasImage: false,
  },
  {
    id: '17ea8ad6763',
    chapter: '排列組合與機率',
    question:
      "樣本空間 $S$，$A,B\\in S$，已知 $P(A')=\\dfrac23$，$P(B)=\\dfrac35$，$P(A\\cap B)=\\dfrac14$，求：\n(1) $P(A\\cup B)$ (2) $P(A-B)$ (3) $P(A'\\cap B')$",
    answer: '(1) $\\frac{41}{61}$ (2) $\\frac1{12}$ (3) $\\frac{19}{60}$',
    hasImage: false,
  },
  {
    id: '17ea8ae259d',
    chapter: '排列組合與機率',
    question:
      '三事件 $A,B,C$，$P(A)=P(B)=P(C)=\\dfrac14$，$P(A\\cap B)=\\dfrac1{16}$，$P(B\\cap C)=0$，$P(C\\cap A)=\\dfrac18$，求 $A$、$B$、$C$ 三事件至少有一事件發生的機率。',
    answer: '$\\frac9{16}$',
    hasImage: false,
  },
  {
    id: '17ea8aeb55b',
    chapter: '排列組合與機率',
    question:
      "$A$、$B$ 為樣本空間 $S$ 中的事件，已知 $P(A)=\\dfrac12$，$P(B)=\\dfrac3{10}$，$P(A\\cap B)=\\dfrac15$，求：\n(1) $P(A\\cup B)$ (2) $P(A'\\cap B)$ (3) $P(A'\\cup B')$",
    answer: '(1) $\\frac35$ (2) $\\frac1{10}$ (3) $\\frac45$',
    hasImage: false,
  },
  {
    id: '17ea8af5fe2',
    chapter: '排列組合與機率',
    question:
      "三事件 $A,B,C$，若 $P(B)=0.5$，$P(C)=0.6$，$P(A\\cap B)=0.2$，$P(B\\cap C)=0.3$，$P(C\\cap A)=0.4$，$P(A \\cap B\\cap C)=0.1$，$P(A\\cup B\\cup C)=0.9$，求：\n(1) $P(A\\cap B\\cap C')$ (2) $P(A)$",
    answer: '(1) 0.1 (2) 0.6',
    hasImage: false,
  },
  {
    id: '17ea8b02d31',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、丁、戊、己共 6 個人，抽籤決定排列的順序，求：\n(1) 甲、乙、丙 3 人相鄰的機率\n(2) 甲、乙、丙 3 人完全分開的機率',
    answer: '(1) $\\frac15$ (2) $\\frac15$',
    hasImage: false,
  },
  {
    id: '17ea8b063ca',
    chapter: '排列組合與機率',
    question: '連續丟一個公正銅板 10 次，求恰出現 6 次正面、4 次反面的機率。',
    answer: '$\\frac{105}{512}$',
    hasImage: false,
  },
  {
    id: '17ea8b0cdef',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、丁、戊、己、庚共 7 個人，抽籤決定排成一列的順序，求：\n(1) 甲、乙、丙 3 人相鄰的機率\n(2) 甲、乙、丙 3 人完全分開的機率',
    answer: '(1) $\\frac17$ (2) $\\frac27$',
    hasImage: false,
  },
  {
    id: '17ea8b113ea',
    chapter: '排列組合與機率',
    question:
      '連續丟一個公正銅板 10 次，求：\n(1) 恰出現 5 次正面的機率\n(2) 至少出現 2 次正面的機率',
    answer: '(1) $\\frac{63}{256}$ (2) $\\frac{1013}{1024}$',
    hasImage: false,
  },
  {
    id: '17ea8b17b62',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、...等 10 位同學，本週 5 天上課日當值日生，每天 2 人，每人只當一次，求甲、乙恰好同一天當值日生的機率。',
    answer: '$\\frac19$',
    hasImage: false,
  },
  {
    id: '17ea8b1b52b',
    chapter: '排列組合與機率',
    question:
      '設任一人每月出生的機率均等，求任意 4 人中：(1) 恰有 2 人的生日在同一月份的機率\n(2) 至少有 2 人同月生的機率',
    answer: '(1) $\\frac{55}{144}$ (2) $\\frac{41}{96}$',
    hasImage: false,
  },
  {
    id: '17ea8b23e71',
    chapter: '排列組合與機率',
    question:
      '下週一到週五共 5 天的值日生由 3 個女生小美、小玉、小芳與其他 7 個男生抽籤來安排，每天兩人，每人做一天，求：\n(1) 小美與男生一起擔任值日生的機率\n(2) 五天之中恰有一天是由兩個女生擔任值日生的機率',
    answer: '(1) $\\frac79$ (2) $\\frac13$',
    hasImage: false,
  },
  {
    id: '17ea8b32be4',
    chapter: '排列組合與機率',
    question:
      '設每月出生的機率相等，求任意 5 人中：\n(1) 每人生日的月份都不相同的機率\n(2) 恰有 3 人的生日在同一月份，且另兩人生日的月份不同的機率',
    answer: '(1) $\\frac{55}{144}$ (2) $\\frac{275}{5184}$',
    hasImage: false,
  },
  {
    id: '17ea8b38b15',
    chapter: '排列組合與機率',
    question: '擲兩粒公正的骰子，求：\n(1) 兩粒骰子的點數不同的機率\n(2) 點數和為 3 的倍數的機率',
    answer: '(1) $\\frac56$ (2) $\\frac13$',
    hasImage: false,
  },
  {
    id: '17ea8b3e382',
    chapter: '排列組合與機率',
    question:
      '有一骰子六個面所刻的點數為 1, 1, 1, 2, 2, 3 每面出現的機率相等，求丟此骰子兩次，點數和為 4 的機率。',
    answer: '$\\frac5{18}$',
    hasImage: false,
  },
  {
    id: '17ea8b432aa',
    chapter: '排列組合與機率',
    question: '擲兩粒公正的骰子，求：\n(1) 點數和大於 9 的機率\n(2) 兩粒骰子的點數相同的機率',
    answer: '(1) $\\frac16$ (2) $\\frac16$',
    hasImage: false,
  },
  {
    id: '17ea8b4a1c1',
    chapter: '排列組合與機率',
    question:
      '同時擲三個公正的骰子，求：\n(1) 點數和為 8 的機率\n(2) 點數和大於 10 的機率\n(3) 三顆骰子的點數相異的機率',
    answer: '(1) $\\frac7{72}$ (2) $\\frac12$ (3) $\\frac59$',
    hasImage: false,
  },
  {
    id: '17ea8b4ecec',
    chapter: '排列組合與機率',
    question:
      '袋中有 7 個白球，若干個黑球。今從袋中一次取出兩個球，已知此兩球同為白球的機率為 $\\dfrac7{22}$，求袋中有幾個黑球。',
    answer: '5',
    hasImage: false,
  },
  {
    id: '17ea8b531d8',
    chapter: '排列組合與機率',
    question:
      '52 張撲克牌有四種花色各 13 張，從中抽取 2 張，求：(1) 相同數字的機率\n(2) 至少有一張黑桃的機率',
    answer: '(1) $\\frac1{17}$ (2) $\\frac{15}{34}$',
    hasImage: false,
  },
  {
    id: '17ea8b5ed09',
    chapter: '排列組合與機率',
    question:
      '袋中有相同紅球 5 個、相同綠球 3 個、相同藍球 4 個，取出 4 球，求：\n(1) 2 紅 2 藍的機率\n(2) 每色球至少取一個的機率',
    answer: '(1) $\\frac4{33}$ (2) $\\frac6{11}$',
    hasImage: false,
  },
  {
    id: '17ea8b63989',
    chapter: '排列組合與機率',
    question: '從一副撲克牌 52 張中抽取 3 張，求：\n(1) 恰為同花色的機率\n(2) 三張數字相同的機率',
    answer: '(1) $\\frac{22}{425}$ (2) $\\frac1{425}$',
    hasImage: false,
  },
  {
    id: '17ea8b6d931',
    chapter: '排列組合與機率',
    question:
      '丟兩個均勻硬幣，若出現兩個正面得 15 元，一個正面得 8 元，沒有正面則得 5 元，試問：(1) 求這遊戲的獎金期望值\n(2) 若玩一次需花費 10 元，試求玩這遊戲是否得利',
    answer: '(1) 9 元 (2) 否',
    hasImage: false,
  },
  {
    id: '17ea8b78d57',
    chapter: '排列組合與機率',
    question:
      '某彩券公司共發行 200 張彩券，頭獎一名得獎金 100 元，二獎共四名各得獎金 50 元，三獎共十名各得獎金 30 元，四獎共五十名各得獎金 15 元，其餘沒有獎金，試求一張彩券的期望值。',
    answer: '$\\frac{27}4$ 元',
    hasImage: false,
  },
  {
    id: '17ea8b81e90',
    chapter: '排列組合與機率',
    question:
      '擲一公正骰子，若出現點數為偶數，則可得兩倍點數的錢；若出現點數為奇數，則輸掉與點數相同的錢，求所得錢數的期望值。',
    answer: '$\\frac52$ 元',
    hasImage: false,
  },
  {
    id: '17ea8b89e39',
    chapter: '排列組合與機率',
    question:
      '某公司發行彩券，共售出 10000 張，其中有 2 張獎金十萬元，5 張獎金一萬元，十張獎金 5000 元，一百張獎金 1000 元，五百張獎金 500 元，其餘沒有獎金。求一張彩券的獎金期望值。',
    answer: '65 元',
    hasImage: false,
  },
  {
    id: '17ea8b8d8d5',
    chapter: '排列組合與機率',
    question: '擲一公正硬幣，直到出現正面或 4 個反面為止，求投擲次數的期望值。',
    answer: '$\\frac{15}8$ 次',
    hasImage: false,
  },
  {
    id: '17ea8b9a759',
    chapter: '排列組合與機率',
    question:
      '某次考試，有一多重選擇題，有 A, B, C, D, E 五個選項。給分標準為完全答對給 5 分，只答錯一個選項給 2.5 分，答錯 2 個以上的選項得 0 分。若某一考生對該題的 A, B 選項已確定是應選的正確答案，但 C, D, E 三個選項根本看不懂，決定這三個選項要用猜的來作答。求他此題所得分數的期望值。',
    answer: '$\\frac{25}{16}$ 分',
    hasImage: false,
  },
  {
    id: '17ea8b9e362',
    chapter: '排列組合與機率',
    question: '擲一公正硬幣，直到出現正面或 5 個反面為止，求投擲次數的期望值。',
    answer: '$\\frac{31}{16}$ 次',
    hasImage: false,
  },
  {
    id: '17ea8ba6dcb',
    chapter: '排列組合與機率',
    question:
      '某次數學測驗共有 25 題單一選擇題，每題都有五個選項，每答對一題可得 4 分，答錯倒扣 1 分。某生確定其中 16 題可答對；有 6 題他確定五個選項中有兩個選項不正確，因此這 6 題他就從剩下的選項中分別猜選一個；另外 3 題只好亂猜，求他這次測驗得分之期望值。',
    answer: '68 分',
    hasImage: false,
  },
  {
    id: '17ea8bade88',
    chapter: '排列組合與機率',
    question:
      '擲一不均勻銅板，出現正面的機率為 $\\dfrac25$，出現反面的機率為 $\\dfrac35$。若共擲四次，每次擲出正面可得獎金 10 元，擲出反面可得獎金 5 元，求擲此銅板四次所得獎金的期望值。',
    answer: '28 元',
    hasImage: false,
  },
  {
    id: '17ea8bb88c9',
    chapter: '排列組合與機率',
    question:
      '袋中有 2 號球 2 個、3 號球 3 個、4 號球 4 個，共 9 個球，每球被取的機會均等。現由袋中依次取出 3 個球，求其號碼和的期望值。',
    answer: '$\\frac{29}3$',
    hasImage: false,
  },
  {
    id: '17ea8bbd774',
    chapter: '排列組合與機率',
    question:
      '玩一次擲銅板遊戲要花 5 元，若出現正面可得 $8$ 元，若出現反面則沒有獎金。花 30 元玩這遊戲 6 次，求所得獎金的期望值。',
    answer: '24 元',
    hasImage: false,
  },
  {
    id: '17ea8bc6304',
    chapter: '排列組合與機率',
    question:
      '袋中有 1000 元鈔 5 張、500 元鈔 4 張、100 元鈔 3 張，每張被取出的機會均等，求取出三張的金額期望值。',
    answer: '1825 元',
    hasImage: false,
  },
  {
    id: '17e7d74d5d2',
    chapter: '排列組合與機率',
    question:
      '甲、乙兩人分別擲三個硬幣，如果甲的正面個數多於乙則甲贏，乙要給甲 $x$ 元；否則就甲輸，甲要給乙 220 元。若賭局公平，求 $x$',
    answer: '420',
    hasImage: false,
  },
  {
    id: '17e7d777740',
    chapter: '排列組合與機率',
    question:
      '甲、乙兩人分別擲一骰子，如果甲的點數多於乙則甲贏，乙要給甲 $x$ 元；否則就甲輸，甲要給乙 500 元。若賭局公平，求 $x$。',
    answer: '700',
    hasImage: false,
  },
  {
    id: '17ea8bdac69',
    chapter: '排列組合與機率',
    question:
      '由近年來的統計資料知，一位 50 歲的中年人再活一年的機率為 99.4%。若即將年滿 50 歲的老師投保一年期的壽險 100 萬元，繳了保費 7200 元，求保險公司獲利的期望值。',
    answer: '1200 元',
    hasImage: false,
  },
  {
    id: '17ea8beb42f',
    chapter: '排列組合與機率',
    question:
      '根據統計，國人到外國旅遊因意外身故的機率為 0.0000334，保險公司針對這個數據設計旅遊意外險，事先向投保的旅客收取保費 235 元，若旅客在一週的旅遊時間內因意外身故，則需賠付該旅客所指定的受益人五百萬元，求保險公司每販售出一人這樣的保單，平均可獲得多少利潤？',
    answer: '68 元',
    hasImage: false,
  },
  {
    id: '17da25855c5',
    chapter: '排列組合與機率',
    question:
      '小明想要布置床頭櫃，已知他分別有初因、魯夫、小傑等三種不同公仔各一個；四個相同蛋黃哥娃娃；還有一個鬧鐘，從這當中任選若干個擺放在床頭櫃上排成一列，不考慮間隔距離，下列敘述哪些正確？\n(1) 任選 $4$ 個相異物品的排法有 $120$ 種\n(2) 任選 $3$ 個物品的排法有 $72$ 種\n(3) 若必定要排鬧鐘，並且含鬧鐘共排 $3$ 件物品，有 $39$ 種\n(4) 選擇一個公仔、一個娃娃、鬧鐘可有可無的排法有 $36$ 種\n(5) 隨機選擇 $5$ 件物品，恰選出 $2$ 個蛋黃哥的機率為 $\\frac37$',
    answer: '(1)(3)(5)',
    hasImage: false,
  },
  {
    id: '17da23f7378',
    chapter: '排列組合與機率',
    question:
      '坐標平面上由點 $A(-3,-1)$ 開始，依每小正方格的對角線行走，只許「右上」或「右下」前進至點 $B(4,2)$，求全部有幾種走法。(圖為其中一種走法)',
    answer: '$21$',
    hasImage: true,
  },
  {
    id: '17da21496cb',
    chapter: '排列組合與機率',
    question:
      '小明製作 $8$ 張刮刮樂，其中三張有獎金，分別為 $4000$ 元，$2000$ 元，$1000$ 元，其餘 $5$ 張均為 $0$ 元，若小明將這 $8$ 張刮刮樂給 $A$、$B$、$C$、$D$ 四人，每人 $2$ 張，則得獎的情形有幾種？\n(1) $60$ (2) $72$ (3) $96$ (4) $120$ (5) $216$',
    answer: '(1)',
    hasImage: false,
  },
  {
    id: '17d7f032b03',
    chapter: '排列組合與機率',
    question:
      '已知某動物園之園區規劃如圖，假設小花從台灣區開始逛，希望逛至少 $3$ 個區域，但動線規劃順序必須為相鄰區域，且不會走回已逛過的區域 (例：台灣區可階爬蟲類或非洲區；若在爬蟲類區，則不能去逛鳥園或非洲區)，不考慮逛的先後順序，求小花的參觀選擇。',
    answer: '$7$',
    hasImage: true,
  },
  {
    id: '17d7f04d466',
    chapter: '排列組合與機率',
    question:
      '已知有相同的紅箱與白箱各兩個，試求將 $2$ 顆相異的球放入箱子的放法。(兩顆球可置於同一箱子中)',
    answer: '$6$',
    hasImage: false,
  },
  {
    id: '17d7e6e29d8',
    chapter: '排列組合與機率',
    question:
      '設生男生女的機會均等，今計畫生 $3$ 個小孩的家庭，請選出正確的選項。\n(1) $3$ 個都是男孩的機率為 $\\frac18$\n(2) 恰 $1$ 個男孩 $2$ 個女孩的機率為 $\\frac34$\n(3) $3$ 個都是同性別的機率為 $\\frac14$\n(4) 有男孩也有女孩的機率為 $\\frac38$\n(5) 至少有一個女孩的機率為 $\\frac78$',
    answer: '(1)(3)(5)',
    hasImage: false,
  },
  {
    id: '17d7e695827',
    chapter: '排列組合與機率',
    question:
      '某人投擲一枚均勻硬幣，一直到出現反面為止，但最多可投擲 $10$ 次，若總共出現 $k$ 次正面時，可獲得 $2^k$ 元，則獲得金額的期望值為多少元？\n(1) $3$ (2) $4$ (3) $5$ (4) $6$ (5) $7$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17be23b551a',
    chapter: '排列組合與機率',
    question:
      '某藥局有三名藥師，週一到週五每天均需安排兩名藥師上班，若每名藥師最多輪值四天，則這五天藥師們有幾種輪值的方式？',
    answer: '$150$',
    hasImage: false,
  },
  {
    id: '17abc66d799',
    chapter: '排列組合與機率',
    question: '$x\\in\\mathbb{R}$，「$1\\le x\\le5$」的否定敘述為？',
    answer: '$x<1\\lor x>5$',
    hasImage: false,
  },
  {
    id: '17abc680e3a',
    chapter: '排列組合與機率',
    question: '$x,y\\in\\mathbb{N}$，「$x<3$ 或 $y=1$」的否定敘述為？',
    answer: '$x\\ge3\\land y\\ne1$',
    hasImage: false,
  },
  {
    id: '17abc6e3561',
    chapter: '排列組合與機率',
    question:
      '下列哪些選項是「$-2<x<3$」的充分條件？\n(1) $x=0\\quad$ (2) $-1\\le x\\le1\\quad$ (3) $-2\\le x\\le2\\quad$ (4) $-3\\le x\\le3$',
    answer: '(1)(2)',
    hasImage: false,
  },
  {
    id: '17abc786a8b',
    chapter: '排列組合與機率',
    question:
      '集合 $A=\\{3,5,\\{1,2\\}\\}$，下列何者正確？\n(1) $A$ 有 4 個元素　　(2) $1\\in A$\n(3) $\\{5\\}\\in A$　　(4) $\\{1,2\\}\\subset A$　　(5) $3\\in A$',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '17abc7a99fd',
    chapter: '排列組合與機率',
    question:
      '下列哪些正確？\n(1) $0\\in\\mathbb N$　　(2) $3\\in\\mathbb Q$\n(3) $\\sqrt{16}\\in\\mathbb Z$　　(4) $0^0\\in\\mathbb R$',
    answer: '(2)(3)',
    hasImage: false,
  },
  {
    id: '17abc81d00d',
    chapter: '排列組合與機率',
    question: '$A=\\{1,2,3,4,5,6\\}$，$B=\\{2,4,6,8,10\\}$，求 $A\\cap B$、$A\\cup B$、$A-B$。',
    answer: '{2,4,6}；{1,2,3,4,5,6,8,10}；{1,3,5}',
    hasImage: false,
  },
  {
    id: '17abc83cf11',
    chapter: '排列組合與機率',
    question: '$A=\\{x|-1<x\\le3\\}$，$B=\\{x|2\\le x<5\\}$，求 $A\\cap B$、$A\\cup B$、$A-B$。',
    answer: '$\\{x|2\\le x\\le3\\}$；$\\{x|-1<x<5\\}$；$\\{x|-1<x<2\\}$',
    hasImage: false,
  },
  {
    id: '17abf7de3ad',
    chapter: '排列組合與機率',
    question:
      "已知 $n(U)=10$，$n(A\\cap B)=2$，$n(A\\cup B)=9$，求 $n(A'\\cap B')$、$n(A'\\cup B')$。",
    answer: '1；8',
    hasImage: false,
  },
  {
    id: '17abf829bb2',
    chapter: '排列組合與機率',
    question: '已知 $n(A)=10$，$n(B)=20$，$n(A\\cap B)=5$，求 $n(A\\cup B)$。',
    answer: '25',
    hasImage: false,
  },
  {
    id: '17abfa9a9fa',
    chapter: '排列組合與機率',
    question:
      '有甲、乙、丙三個社團，參加者共 40 人，其中參加甲的有 27 人，參加乙的有 30 人，參加丙的有 32 人，參加甲和乙的有 20 人，參加乙和丙的有 23 人，參加甲和丙的有 25 人，求三社團均參加的人數。',
    answer: '19',
    hasImage: false,
  },
  {
    id: '17abfaec432',
    chapter: '排列組合與機率',
    question: '如圖，由 $A$ 到 $B$ 走捷徑，有幾種走法？',
    answer: '31',
    hasImage: true,
  },
  {
    id: '17abfb144de',
    chapter: '排列組合與機率',
    question:
      '口袋裡有 4 個一元硬幣、8 個十元硬幣、2 張百元鈔，到商店買了一件商品，付帳時，不用找錢，若已知此商品至少 10 元，則價錢共有幾種可能？',
    answer: '130',
    hasImage: false,
  },
  {
    id: '17abfb65e1f',
    chapter: '排列組合與機率',
    question:
      '$A$ 城到 $B$ 城之間有甲、乙、丙、丁、戊五城，其間連結的道路如圖所示。今從 $A$ 城出發走向 $B$ 城，要求每條道路都要經過並且只經過一次，則總共有幾種走法？',
    answer: '6',
    hasImage: true,
  },
  {
    id: '17abfb7c4c1',
    chapter: '排列組合與機率',
    question: '6 個不同的獎品選其中 4 個分給甲、乙、丙、丁四個人，每人一個，分法有幾種？',
    answer: '360',
    hasImage: false,
  },
  {
    id: '17abfbad6c4',
    chapter: '排列組合與機率',
    question: '平面上 7 條直線，最多有幾個交點？最多可圍成幾個三角形？',
    answer: '21；35',
    hasImage: false,
  },
  {
    id: '17abfbbbcce',
    chapter: '排列組合與機率',
    question: '將八位新生平均分發到甲、乙、丙、丁四班，共有幾種分法？',
    answer: '2520',
    hasImage: false,
  },
  {
    id: '17abfbeeb64',
    chapter: '排列組合與機率',
    question: '9 本不同的書分成三堆，每堆三本，共有幾種分法？',
    answer: '280',
    hasImage: false,
  },
  {
    id: '17abfc5b973',
    chapter: '排列組合與機率',
    question:
      '動物園的遊園列車依序編號 1 到 7，共有 7 節車廂，今想將每節車廂畫上一種動物。如果其中的兩節車廂畫企鵝，另兩節車廂畫無尾熊，剩下的三節車廂畫上貓熊，並且要求最中間的三節車廂必須有企鵝、無尾熊及貓熊，則 7 節車廂一共有幾種畫法？',
    answer: '72',
    hasImage: false,
  },
  {
    id: '17abfc983f9',
    chapter: '排列組合與機率',
    question: '若 $C^9_3+C^9_7=C^{10}_k$，求 $k$。',
    answer: '$3\\lor7$',
    hasImage: false,
  },
  {
    id: '17abfd028f8',
    chapter: '排列組合與機率',
    question: '$C^3_0+C^4_1+C^5_2+C^6_3+C^7_4+C^8_5+C^9_6=C^{10}_r$，且 $r\\le5$，求 $r$。',
    answer: '4',
    hasImage: false,
  },
  {
    id: '17abfe2acac',
    chapter: '排列組合與機率',
    question: '求 $(2x+y)^7$ 展開後：\n(1) $x^3y^4$ 項係數　　(2) $x^2y^6$ 項係數',
    answer: '(1) 280 (2) 0',
    hasImage: false,
  },
  {
    id: '17abfe40b1e',
    chapter: '排列組合與機率',
    question: '求 $C^{10}_1+C^{10}_2+C^{10}_3+\\cdots+C^{10}_9+C^{10}_{10}$。',
    answer: '1023',
    hasImage: false,
  },
  {
    id: '17abfe8c83f',
    chapter: '排列組合與機率',
    question: '擲一公正硬幣 8 次，求正面恰出現 4 次的機率。',
    answer: '$\\frac{35}{128}$',
    hasImage: false,
  },
  {
    id: '17abfe9f277',
    chapter: '排列組合與機率',
    question: '擲三粒公正骰子，求恰好有兩粒點數相同的機率。',
    answer: '$\\frac5{12}$',
    hasImage: false,
  },
  {
    id: '17abff3edad',
    chapter: '排列組合與機率',
    question:
      '袋中有若干個白球與黑球，任取其中 5 球，沒有白球的機率為 $\\frac6{25}$，恰得一白球的機率為 $\\frac{11}{25}$，求至少取得兩白球的機率。',
    answer: '$\\frac8{25}$',
    hasImage: false,
  },
  {
    id: '17abff591b0',
    chapter: '排列組合與機率',
    question:
      '已知樣本空間中事件 $A$ 發生的機率為 0.7，事件 $B$ 發生的機率為 0.5，$A$ 或 $B$ 發生的機率為 0.9，求 $A$ 與 $B$ 同時發生的機率。',
    answer: '0.3',
    hasImage: false,
  },
  {
    id: '17abffbab4d',
    chapter: '排列組合與機率',
    question:
      '有一箱子，內有 3 黑球與 2 白球。有一遊戲，從箱子中任取出一球。假設每一顆球被取出的機率相同，若取出黑球可得獎金 50 元，而取出白球可得獎金 100 元，求此遊戲的獎金期望值。',
    answer: '70 元',
    hasImage: false,
  },
  {
    id: '17abffd87fa',
    chapter: '排列組合與機率',
    question:
      '袋子裡有 3 個球，2 個球上標 1 元，1 個球上標 5 元。從袋中任取 2 個球，即可得到兩個球所標錢數的總和，求此玩法所得錢數的期望值。',
    answer: '$\\frac{14}3$ 元',
    hasImage: false,
  },
  {
    id: '1823dae49a6',
    chapter: '排列組合與機率',
    question:
      '某公司舉辦年終尾牙餐會，會中安插了一項抽獎活動。在抽獎箱中放了一副 52 張的撲克牌，每人抽出一張牌，且抽後放回；抽到紅心給獎金 8000 元，抽到方塊給獎金 6000 元，而抽到黑桃或梅花則一律給 2000 元獎金。假設每張牌被抽到的機率相等，求抽到獎金的數學期望值。',
    answer: '4500 元',
    hasImage: false,
  },
  {
    id: '1823db011c8',
    chapter: '排列組合與機率',
    question:
      '一顆特別的骰子，其六個面中有兩面為 2 點、兩面為 4 點、其餘兩面為 5 點。假設投擲這顆骰子每面出現的機率相等。擲這顆骰子兩次，所得點數和的數學期望值為？',
    answer: '$\\frac{22}3$',
    hasImage: false,
  },
  {
    id: '17ac5042097',
    chapter: '排列組合與機率',
    question:
      '有集合 $A$、$B$、$C$、$D$，已知 $A\\cap B=\\{1\\}$，$A\\cap C=\\{2,3\\}$，$A-D=\\{4\\}$，下列敘述哪些為真？\n(1) $B\\cap C=\\varnothing$　　(2) $A\\cap B\\cap C=\\varnothing$\n(3) $4\\in(B\\cup C)$　　(4) $1\\in(B\\cap D)$\n(5) $\\{1,2,3\\}\\subset D$',
    answer: '(2)(4)(5)',
    hasImage: false,
  },
  {
    id: '17ac506d4ef',
    chapter: '排列組合與機率',
    question:
      '$A=\\{x|x^2+ax-12=0\\}$，$B=\\{x|x^2+bx+c=0\\}$，若 $A\\neq B$，$A\\cup B=\\{-3,4\\}$，$A\\cap B=\\{-3\\}$，求 $(a,b,c)$。',
    answer: '(-1,6,9)',
    hasImage: false,
  },
  {
    id: '17ac517bd78',
    chapter: '排列組合與機率',
    question:
      '某公司生產多種款式的公仔，各種款式只有帽子、衣服、鞋子顏色不同。其中帽子有黑、灰、紅、藍四種顏色，衣服有白、綠、藍三種顏色，鞋子有黑、白、灰三種顏色。公司決定紅色的帽子不搭配灰色的鞋子，而白色的衣服必須搭配藍色的帽子，至於其他顏色間的搭配就沒有限制。在這些配色的要求下，最多可有幾種不同款式的公仔？',
    answer: '25',
    hasImage: false,
  },
  {
    id: '17ac51b5e9f',
    chapter: '排列組合與機率',
    question:
      '某班共 45 人，其中有 35 人有手機，而有 24 人有平板電腦。設：\n$A$ 為同時有手機與平板電腦的人數\n$B$ 為有手機，但沒有平板電腦的人數\n$C$ 為沒有手機，但有平板電腦的人數\n$D$ 為沒有手機，也沒有平板電腦的人數\n請選出恆成立的不等式選項。\n(1) $A>B$　　(2) $A>C$　　(3) $B>C$\n(4) $B>D$　　(5) $C>D$',
    answer: '(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '17ac5215d11',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、丁、戊共 5 人，由左至右按甲、乙、丙、丁、戊的順序排成一列拍了一張照。拍完後這 5 人還想再拍一張，且限定每個人都不可以待在原本的位置，其中甲因身高最高只能站在兩側，請問下一張照片中，這 5 人共有幾種不同的排列方式？',
    answer: '11',
    hasImage: false,
  },
  {
    id: '17ac522cd09',
    chapter: '排列組合與機率',
    question: '試問共有多少組正整數 $(k,m,n)$ 滿足 $2^k4^m8^n=512$？',
    answer: '3',
    hasImage: false,
  },
  {
    id: '17ac6da6a26',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、丁... 等 6 人排成一列，求：\n(1) 甲乙丙 3 人相鄰的排列數\n(2) 甲乙相鄰但甲丙不相鄰的排列數\n(3) 甲乙不相鄰且丙丁不相鄰的排列數\n(4) 甲乙兩人都不可以排在首位也不可以排在末位的排列數',
    answer: '(1) 144 (2) 192 (3) 336 (4) 288',
    hasImage: false,
  },
  {
    id: '17ac6e4566d',
    chapter: '排列組合與機率',
    question:
      '學校班級在本學期中，每週有四節藝能課，包含兩節體育課、一節音樂課與一節美術課。根據學校排課原則：\n(1) 兩節體育課不能排在同一天或相鄰的兩天\n(2) 每班一天中最多只能有兩節藝能課\n請問該班從星期一至星期五的課表，這四節藝能課的排課有幾種不同的方法？',
    answer: '138',
    hasImage: false,
  },
  {
    id: '17ac6f0e1b6',
    chapter: '排列組合與機率',
    question:
      '有一種號碼鎖有 3 個轉輪，每個轉輪有 0~6 等 6 個數字，正確號碼是一組可重複的數字，例如：035、525、333。\n(1) 在完全不知情的情況下，要打開鎖，最多要試幾組？\n(2) 已知正確號碼中有一個數字是 5，另外兩個號碼是異於 5 的數字 (可相同也可相異)，要打開這個鎖，最多要試幾組不同的號碼？',
    answer: '(1) 216 (2) 75',
    hasImage: false,
  },
  {
    id: '17ac6f453c9',
    chapter: '排列組合與機率',
    question:
      '有 4 本不同的書及 2 枝不同的筆要分給甲乙丙三人，求：\n(1) 任意分配的方法數\n(2) 甲至少拿一本書的方法數\n(3) 甲有拿到書也有拿到筆的方法數',
    answer: '(1) 729 (2) 585 (3) 325',
    hasImage: false,
  },
  {
    id: '17ac6f6fb34',
    chapter: '排列組合與機率',
    question:
      '小明在安排週一至週五共五天的午餐計畫。他的餐點共有四種選擇：牛肉麵、大滷麵、咖哩飯及排骨飯。小明想要依據下列兩原則來安排午餐，請問共有幾種不同的計畫？\n(1) 每天只選一種餐點但這五天中每一種餐點至少各點一次\n(2) 連續兩天的餐點不重複且不連兩天吃麵食',
    answer: '60',
    hasImage: false,
  },
  {
    id: '17ac6fc1f57',
    chapter: '排列組合與機率',
    question:
      '某社區共有 12 戶住家，舉辦住戶大會時，管委會提供獎品供參加的住戶摸彩，計有特獎一份、頭獎一份、貳獎兩份、參獎三份，結果只有 6 戶的住家前來出席大會，獎品卻有七份。經大家討論，決定先摸出頭獎、貳獎及參獎，各戶恰得一份獎品後，再由抽中參獎的 3 位住戶來抽特獎，請問這樣安排下，抽完籤之後這七份獎品共有幾種分配方法？',
    answer: '180',
    hasImage: false,
  },
  {
    id: '17ac6fe8036',
    chapter: '排列組合與機率',
    question:
      '圓周上有 $n$ 個點，若任取兩點連成弦共可得到 $a$ 條弦，若任取三點連成三角形共可得到 $b$ 個三角形，已知 $b$ 是 $a$ 的 4 倍，求 $n$。',
    answer: '14',
    hasImage: false,
  },
  {
    id: '17ac714425f',
    chapter: '排列組合與機率',
    question:
      '有 6 男 4 女共 10 名學生擔任本週值日生，導師規定在本週五個上課日中，每天 2 名值日生，且至少須有 1 名男生，試求本週安排值日生的方法數。',
    answer: '43200',
    hasImage: false,
  },
  {
    id: '17ac7159652',
    chapter: '排列組合與機率',
    question:
      '啦啦隊競賽規定每隊 8 人，且每隊男、女生均至少要有 2 人。某班共有 4 名男生及 7 名女生想參加競賽。若由此 11 人中依規定選出 8 人組隊，則共有幾種不同的組隊方法？',
    answer: '161',
    hasImage: false,
  },
  {
    id: '17ac7175955',
    chapter: '排列組合與機率',
    question:
      '一組電話號碼共 7 碼，若前三碼數字相異遞增，且後四碼數字也是相異遞增，則稱這組號碼是「旺數號碼」，現某區域的電話號碼第一個數字必須是 5，則這個區域的「旺數號碼」共有幾組？',
    answer: '1260',
    hasImage: false,
  },
  {
    id: '17ac7188883',
    chapter: '排列組合與機率',
    question: '如圖之方格，求：(1) 圖中有幾個矩形？\n(2) 任選兩格，此兩格不在同一行的選法有幾種？',
    answer: '(1) 150 (2) 160',
    hasImage: true,
  },
  {
    id: '17ac71b8036',
    chapter: '排列組合與機率',
    question:
      '設 $(1+x)^n=a_0+a_1x+a_2x^2+\\cdots$$+a_{n-1}x^{n-1}+a_nx^n$，請回答下列問題：\n(1) 若 $a_0+a_1+a_2+\\cdots+a_{n-1}+a_n=4096$，求 $n$。\n(2) 若 $a_4:a_{n-6}=3:2$，求 $n$。\n(3) $11^{2004}$ 的十位數字為？',
    answer: '(1) 12 (2) 9 (3) 4',
    hasImage: false,
  },
  {
    id: '17ac71d5b10',
    chapter: '排列組合與機率',
    question: '求 $x^{10}$ 除以 $(x-1)^3$ 的餘式。',
    answer: '$45x^2-80x+36$',
    hasImage: false,
  },
  {
    id: '17ac71f3b77',
    chapter: '排列組合與機率',
    question:
      '坐標平面上，一隻青蛙從原點出發，每次可向上、下、左、右隨機選一個方向移動一單位長，求經過四次的移動後，青蛙又回到原點的機率為？',
    answer: '$\\frac9{64}$',
    hasImage: false,
  },
  {
    id: '17ac720dc90',
    chapter: '排列組合與機率',
    question:
      '小明提款時忘了密碼，但他還記得密碼的四位數字中，有兩個 3、一個 8、一個 9，於是他就用這四個數字隨機排成一個四位數輸入提款機嘗試，求他只試一次就成功的機率。',
    answer: '$\\frac1{12}$',
    hasImage: false,
  },
  {
    id: '17ac7258a05',
    chapter: '排列組合與機率',
    question:
      '某班共 20 位男生、15 位女生，需推派 3 位同學參加活動。大家決定用抽籤的方式決定參加人選。若每個人中籤的機率相等，求推派的三位同學中有男也有女的機率。',
    answer: '$\\frac{90}{119}$',
    hasImage: false,
  },
  {
    id: '17ac72792d5',
    chapter: '排列組合與機率',
    question:
      '阿貴和阿美及其他 8 名同學共 10 名學生輪到本週擔任值日生。本週 5 個上課日每天從尚未當過的同學中抽籤選出 2 位輪值，求阿貴和阿美同一天擔任值日生的機率。',
    answer: '$\\frac19$',
    hasImage: false,
  },
  {
    id: '17ac72c29e7',
    chapter: '排列組合與機率',
    question:
      '從 1~10 這十個數中隨意取兩個，以 $p$ 表示其和為偶數之機率，$q$ 表示其和為奇數之機率。試問下列哪些敘述是正確的。\n(1) $p+q=1$　(2) $p=q$　(3) $|p-q|\\le\\frac1{10}$\n(4) $|p-q|\\ge\\frac1{20}$　(5) $p\\ge\\frac12$',
    answer: '(1)(4)',
    hasImage: false,
  },
  {
    id: '17ac72e7b9b',
    chapter: '排列組合與機率',
    question:
      '有一個不公正的骰子，投擲的時候，二點、三點、四點、五點、六點出現的機率都是 $\\log_{10}\\frac32$，今以 $a$ 表 $\\log_{10}\\frac32$，以 $b$ 表投擲的時候一點出現的機率，請選出正確的選項：\n($\\log_{10}2\\approx0.3010$，$\\log_{10}3\\approx0.4771$)\n(1) $a>0$　　(2) $a>1$　　(3) $b<\\frac16$\n(4) $b<\\log_{10}\\frac43$　　(5) $a>b$',
    answer: '(1)(3)(4)(5)',
    hasImage: false,
  },
  {
    id: '17ac730181f',
    chapter: '排列組合與機率',
    question:
      '甲、乙兩人各擲一均勻骰子，約定如下：乙得 6 點時乙就贏，兩人同點時 (非 6 點)，甲贏；其餘情形，則以點數多者為贏，求甲贏的機率。',
    answer: '$\\frac59$',
    hasImage: false,
  },
  {
    id: '17ac731ee06',
    chapter: '排列組合與機率',
    question:
      '不透明箱中置有編號分別為 1、2、3、6、8 的球各一顆。同時自箱中隨機取出三顆球，求此三球編號之和大於 14 的機率。',
    answer: '$\\frac3{10}$',
    hasImage: false,
  },
  {
    id: '17ac734394f',
    chapter: '排列組合與機率',
    question:
      '甲箱中有白球和黑球共 5 個，乙箱中有白球和黑球共 20 個，若取球的機會都相等，今隨機從兩個箱子中各取一球，已知兩個取出的球都是白球的機率是 0.54，試求從兩個箱子中各取出一球時，兩球都是黑球的機率。',
    answer: '$\\frac1{25}$',
    hasImage: false,
  },
  {
    id: '17ac7362b10',
    chapter: '排列組合與機率',
    question:
      '某遊戲的規則為同時擲兩顆公正骰子一次，若兩顆點數和為 6 或者至少有一顆點數為 6，即可獲得獎金 36 元，否則沒有獎金，求這個遊戲獎金的期望值。',
    answer: '16 元',
    hasImage: false,
  },
  {
    id: '17ac7380496',
    chapter: '排列組合與機率',
    question:
      '有 100 元、200 元、300 元、400 元的紅包各一個，由甲、乙、丙三人依序各抽取 1 個紅包袋，抽取後不放回。若每個紅包袋被抽取的機會都相等，求甲、乙、丙三人紅包金額總和的期望值。',
    answer: '750 元',
    hasImage: false,
  },
  {
    id: '17ac73b6777',
    chapter: '排列組合與機率',
    question:
      '有一多重選擇題有 $A,B,C,D,E$ 五個選項。完全答對給 5 分，只答錯 1 個選項給 2.5 分，答錯 2 個或 2 個以上的選項得 0 分。若某一考生對該題的 $A,B$ 選項已確定是應選的正確答案，但 $C,D,E$ 三個選項根本看不懂，決定這三個選項要用猜的來作答。求他此題所得分數的期望值。',
    answer: '$\\frac{25}{16}$ 分',
    hasImage: false,
  },
  {
    id: '17ac73ed399',
    chapter: '排列組合與機率',
    question:
      '某公司考慮在甲、乙兩地選一地投資設廠。經評估，在甲地設廠，如獲利，預計可獲利 10000 (萬元)；如不獲利，預計將虧損 7000 (萬元)。在乙地設廠，如獲利，預計可獲利 6000 (萬元)；如不獲利，預計將虧損 5000 (萬元)。又該公司評估新廠在甲、乙兩地獲利的機率分別為 0.6、0.7。如以獲利期望值為決策準則，該公司應選擇甲地或乙地投資？',
    answer: '甲地',
    hasImage: false,
  },
  {
    id: '1823dd59556',
    chapter: '排列組合與機率',
    question:
      '有一款線上遊戲推出「十連抽」的抽卡機制，「十連抽」意思為系統自動做十次的抽卡動作。若每次「十連抽」需用 1500 枚代幣，抽中金卡的機率在前九次皆為 2%，在第十次為 10%。今某生有代幣 23000 枚，且不斷使用「十連抽」，抽到不能再抽為止。求某生抽到金卡張數的期望值。',
    answer: '4.2',
    hasImage: false,
  },
  {
    id: '1823ddd4cde',
    chapter: '排列組合與機率',
    question:
      '同時拋擲八枚均勻的 1 元硬幣及兩枚均勻的 5 元硬幣，若有硬幣出現正面，則可取走正面的硬幣做為獎金，求獲得 7 元以上的機率。',
    answer: '$\\frac{759}{1024}$',
    hasImage: false,
  },
  {
    id: '1823ddfb64f',
    chapter: '排列組合與機率',
    question:
      '擲一枚均勻硬幣 4 次，恰好出現 $n$ 次正面的機率為 $a_n$；擲一枚均勻硬幣 8 次，恰好出現 $n$ 次正面的機率為 $b_n$。試問以下哪些選項是正確的？(1) $a_2=\\frac12$　　(2) $a_2=b_4$\n(3) $b_2=b_6$　　(4) $a_3>b_3$\n(5) $b_0,b_1,b_2,\\cdots,b_8$ 中的最大值是 $b_4$',
    answer: '(3)(4)(5)',
    hasImage: false,
  },
  {
    id: '17a2019b16e',
    chapter: '排列組合與機率',
    question:
      '(單選) 設 $(1-\\sqrt{3})^6=a+b\\sqrt{3}$，其中 $a,b\\in\\mathbb{Z}$，請問 $b$ 等於下列哪一個選項？\n(1) $C^6_0+3^2C^6_2+3^4C^6_4+3^6C^6_6$\n(2) $C^6_0-3C^6_2+3^2C^6_4-3^3C^6_6$\n(3) $C^6_1-3C^6_3+3^2C^6_5$\n(4) $-C^6_1-3C^6_3-3^2C^6_5$\n(5) $-C^6_0+3C^6_2-3^2C^6_4+3^3C^6_6$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17a201bf43f',
    chapter: '排列組合與機率',
    question:
      '(單選) 一袋中有 $6$ 個白球與 $n$ 個黑球，假設每球被選取的機會均等，今從袋中一次取出兩球，已知兩球均為白球的機率是 $\\frac{5}{12}$，求 $n$。\n(1) $3$ (2) $5$ (3) $7$ (4) $9$ (5) $11$',
    answer: '(1)',
    hasImage: false,
  },
  {
    id: '17a201ea705',
    chapter: '排列組合與機率',
    question:
      '(多選) 將 $(x+y^2)^{10}$ 展開集項後，請選出正確的選項。\n(1) $x^{10}$ 的係數小於 $x^3y^{14}$ 的係數\n(2) $x^8y^4$ 的係數小於 $x^3y^{14}$ 的係數\n(3) $x^2y^{16}$ 的係數大於 $x^6y^8$ 的係數\n(4) $x^7y^6$ 的係數小於 $x^5y^{10}$ 的係數\n(5) $x^6y^8$ 的係數大於 $x^4y^{12}$ 的係數',
    answer: '(1)(2)(4)',
    hasImage: false,
  },
  {
    id: '17a2022525e',
    chapter: '排列組合與機率',
    question:
      '(多選) 將 $10$ 本不同的書分裝入數個相同的袋子，選出正確的選項。\n(1) 若依本數 $4$，$3$，$2$，$1$ 分裝入四袋，則有 $C^{10}_4C^6_3C^3_2C^1_1$ 種分法\n(2) 若依本數 $2$，$2$，$2$，$2$，$2$ 分裝入五袋，則有 $\\frac{C^{10}_2C^8_2C^6_2C^4_2C^2_2}{5!}$ 種分法\n(3) 若依本數 $4$，$2$，$2$，$2$ 分裝入四袋，則有 $\\frac{C^{10}_2C^6_2C^4_2C^2_2}{3!}$ 種分法\n(4) 若依本數 $3$，$3$，$2$，$2$ 分裝入四袋，則有 $\\frac{C^{10}_3C^7_3C^4_2C^2_2}{2!2!}$ 種分法\n(5) 若依本數 $3$，$3$，$2$，$2$ 分裝給四個人，則有 $\\frac{C^{10}_3C^7_3C^4_2C^2_2}{2!2!}$ 種分法',
    answer: '(1)(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '17a2023d430',
    chapter: '排列組合與機率',
    question:
      '(多選) 某一班共有 40 人，問卷調查有手機與平板電腦的人數。從統計資料顯示此班有 35 人有手機，而有 14 人有平板電腦，兩者都有的人共有 $x$ 人，試問 $x$ 可能為下列哪些值？\n(1) 8 (2) 9 (3) 10 (4) 14 (5) 15',
    answer: '(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '17a2025f446',
    chapter: '排列組合與機率',
    question:
      '若數列 $a_1$，$a_2$，$a_3$，$a_4$，$a_5$ 中每一項皆為 $1$ 或 $-1$，則乘積 $a_1a_2a_3a_4a_5$ 之值有幾種可能性？',
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '17a2027820c',
    chapter: '排列組合與機率',
    question:
      '設 $U$ 是若干個正整數所成的集合，若 $U$ 中 $2$ 的倍數有 $42$ 個，$6$ 的倍數有 $15$ 個，$2$ 或 $3$ 的倍數有 $50$ 個，試問 $U$ 中是 $3$ 的倍數，但不是 $2$ 的倍數有幾個？',
    answer: '$8$',
    hasImage: false,
  },
  {
    id: '17a20290841',
    chapter: '排列組合與機率',
    question:
      '一家五口，父母兄弟妹，每人都會做飯，也會洗碗，但每餐飯，做飯者不洗碗。某假日午晚兩餐，做飯者非同一人，洗碗者也非同一人，則午晚兩餐做飯、洗碗共有幾種情形？',
    answer: '$260$',
    hasImage: false,
  },
  {
    id: '17a202b0a26',
    chapter: '排列組合與機率',
    question:
      '有一個走捷徑的遊戲，挑戰者必須由 A 點走到 B 點，已知經過 C 點會扣生命值 7 點，經過 D 點會扣生命值 8 點，走到 B 點必須維持生命值 90 點以上才算成功。若挑戰者目前生命值為 100 點，則所有成功過關的走法有？',
    answer: '258',
    hasImage: true,
  },
  {
    id: '17a202cce60',
    chapter: '排列組合與機率',
    question: '四人猜拳(剪刀、石頭、布)一次，則淘汰人數的期望值為？',
    answer: '$\\frac{28}{27}$ 人',
    hasImage: false,
  },
  {
    id: '17a202e5b03',
    chapter: '排列組合與機率',
    question:
      '老師將 6 個不同的物品分成三堆，每堆分別為 3 個，2 個，1 個，若再將此三堆以每人一堆的方式分給甲，乙，丙 3 人，則共有幾種分法？',
    answer: '360',
    hasImage: false,
  },
  {
    id: '17a2030c7d5',
    chapter: '排列組合與機率',
    question:
      '某次考試中有一題多重選擇題，共有 A, B, C, D, E 五個選項，而五個選項中至少有一個選項是正確的。計分方式為：「完全正確得 8 分，只錯一個選項可得 5 分，只錯兩個選項可得 2 分，答錯三個或三個以上選項不給分」。若小明只確定 A 選項一定是正確的，另外 B, C, D, E 四個選項他不經考慮隨意猜答，則小明此題得分之期望值為？',
    answer: '2.5 分',
    hasImage: false,
  },
  {
    id: '17a0842355e',
    chapter: '排列組合與機率',
    question:
      '將樣本空間 $S=\\{1,2,3,4,5,6\\}$ 分成兩個非空事件，使這兩個事件為互斥事件，且聯集為 $S$，則總共可以有多少種分法？',
    answer: '31',
    hasImage: false,
  },
  {
    id: '17a084428de',
    chapter: '排列組合與機率',
    question:
      '袋中有 10 個大小相同的球，分別編號 1~10。今從袋中一次取兩球，觀察其數字，若 $A$ 代表兩數乘積大於或等於 $50$ 的事件，$B$ 表示兩數互質的事件，求 $A$ 和 $B$ 都發生的事件其元素個數 $n(A\\cap B)$。',
    answer: '5',
    hasImage: false,
  },
  {
    id: '17a08460ece',
    chapter: '排列組合與機率',
    question:
      '從 1~9 這九個數字中任取四個相異數字排成一列，形成一個四位數 $abcd$，則此四位數滿足 $a<b<c<d$ 的機率為？',
    answer: '$\\frac1{24} $',
    hasImage: false,
  },
  {
    id: '179e09170f3',
    chapter: '排列組合與機率',
    question:
      '從 $1$，$2$，$3$，$4$，$5$，$6$，$7$，$8$，$9$ 中任取兩相異數，求其積為完全立方數的機率。',
    answer: '$\\frac{1}{12}$',
    hasImage: false,
  },
  {
    id: '179f0b73f3b',
    chapter: '矩陣B',
    question:
      '設 $A=\\begin{bmatrix}p&q\\\\r&s\\end{bmatrix}$，其中 $p$、$q$、$r$、$s$ 為實數且 $q$、$r$ 不全為 $0$。\n(1) 試證：必可找到唯一的一組數對 $(x,y)$ 滿足 $A^2+xA+yI=\\begin{bmatrix}0&0\\\\0&0\\end{bmatrix}$，並將 $x$、$y$ 用 $p$、$q$、$r$、$s$ 表示。\n(2) 承(1)，在 $y\\neq0$ 的條件下，請用 $x$、$y$ 寫出 $A^{-1}$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '179fb7cdf25',
    chapter: '排列組合與機率',
    question:
      '樂透是由 1~42 個號碼開出 6 個號碼，請問開出的 6 個號碼都是偶數的機率，最接近下列哪一個值？\n(1) $\\dfrac12$ (2) $\\dfrac6{42}$ (3) $\\dfrac1{2^3}$ (4) $\\dfrac1{12}$ (5) $\\dfrac1{2^6}$',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '179fb8b03ff',
    chapter: '排列組合與機率',
    question:
      '在遊戲中，阿玲拿到如圖的數字卡。主持人隨機從 1 至 9 號球中同時取出三球，若這三球的號碼中任兩個都不在卡片上的同一行也不在卡片上的同一列時就得獎，則阿玲得獎的機率為？',
    answer: '$\\frac1{14}$',
    hasImage: true,
  },
  {
    id: '179fb8cca24',
    chapter: '排列組合與機率',
    question:
      '將 $1$、$2$、$3$、$4$ 四個數字隨機填入 $2\\times2$ 的方格中，每個方格中恰填一數字，但數字可重複使用。試問事件「$A$ 方格的數字大於 $B$ 方格的數字、且 $C$ 方格的數字大於 $D$ 方格的數字」的機率為多少？',
    answer: '$\\frac{9}{64}$',
    hasImage: true,
  },
  {
    id: '179fb8eae74',
    chapter: '排列組合與機率',
    question:
      "設 $P(A)=\\frac{1}{2}$，$P(B)=\\frac{5}{8}$，$P(A\\cup B)=\\frac{3}{4}$，求：\n(1) $P(A\\cap B)$ (2) $P(A'\\cap B')$ (3) $P(A'\\cup B')$ (4) $P(A'\\cap B)$",
    answer: '(1) $\\frac{3}{8}$ (2) $\\frac{1}{4}$ (3) $\\frac{5}{8}$ (4) $\\frac{1}{4}$',
    hasImage: false,
  },
  {
    id: '179fb92445f',
    chapter: '排列組合與機率',
    question:
      '袋中有 $3$ 個紅球，$4$ 個白球，$5$ 個黑球，今自袋中任意取出 $3$ 球，則：\n(1) $3$ 球為異色球的機率\n(2) $3$ 球為同色球的機率\n(3) 至少有 $2$ 個黑球的機率',
    answer: '(1) $\\frac{3}{11}$ (2) $\\frac{3}{44}$ (3) $\\frac{4}{11}$',
    hasImage: false,
  },
  {
    id: '179fb94ddec',
    chapter: '排列組合與機率',
    question:
      '同時擲三顆公正的骰子，求：\n(1) 三顆骰子出現點數相同的機率\n(2) 恰有兩顆骰子出現相同點數的機率\n(3) 三顆骰子出現點數相異的機率',
    answer: '(1) $\\frac{1}{32}$ (2) $\\frac{5}{12}$ (3) $\\frac{5}{9}$',
    hasImage: false,
  },
  {
    id: '179fb9b71e3',
    chapter: '排列組合與機率',
    question:
      '從一副撲克牌( $52$ 張)中任抽 $5$ 張，求：\n(1) $5$ 張為同花之機率\n(2) $5$ 張成兩對($xxyyz$)之機率\n(3) $5$ 張成葫蘆($xxxyy$)之機率\n(4) $5$ 張成三條($xxxyz$)之機率',
    answer:
      '(1) $\\frac{33}{16660}$ (2) $\\frac{198}{4165}$ (3) $\\frac{6}{4165}$ (4) $\\frac{88}{4165}$',
    hasImage: false,
  },
  {
    id: '179fb9dbb44',
    chapter: '排列組合與機率',
    question:
      '甲、乙兩人從 $1$、$2$、$3$、$4$、$5$ 共 $5$ 個數字中各任選 $2$ 個數字，試求兩人所選的數字完全相同的機率。',
    answer: '$\\frac{1}{10}$',
    hasImage: false,
  },
  {
    id: '179fba139a6',
    chapter: '排列組合與機率',
    question:
      '一袋內有大小相同的金屬小球 $8$ 個，其中 $4$ 個是銅球，每個重 $2$ 克；$4$ 個鋁球，每個重 $1$ 克。現從袋中任取 $5$ 個球，則這 $5$ 個球的總重量大於 $6$ 克的機率為？',
    answer: '$\\frac{13}{14}$',
    hasImage: false,
  },
  {
    id: '179fba35d99',
    chapter: '排列組合與機率',
    question:
      '擲一枚均勻硬幣三次，每出現一個正面得 $6$ 元，一個反面賠 $2$ 元，則所得總額之期望值為？',
    answer: '$6$ 元',
    hasImage: false,
  },
  {
    id: '179fba65884',
    chapter: '排列組合與機率',
    question:
      '同時擲 $2$ 顆均勻的骰子一次，若出現點數和 $m$ 可得 $m$ 元，則擲一次所得獎金期望值為？',
    answer: '$7$ 元',
    hasImage: false,
  },
  {
    id: '179fbae29f4',
    chapter: '排列組合與機率',
    question:
      '根據統計資料得知，一個 $50$ 歲的人在一年內存活的機率是 $99.5\\%$，今有一個 $50$ 歲的人參加一年期保險額度為 $50$ 萬元的人壽保險，需繳保費 $5000$ 元，又公司對此一客戶的管理與行銷成本為 $400$ 元。試求保險公司對此客戶的獲利期望值為？',
    answer: '$2100$ 元',
    hasImage: false,
  },
  {
    id: '179fbaf3dc9',
    chapter: '排列組合與機率',
    question:
      '投擲 $3$ 枚均勻之硬幣，若出現 $3$ 正面可得 $10$ 元，出現 $2$ 正面可得 $6$ 元，出現 $1$ 正面可得 $2$ 元，為使賭局公平，則不出現正面時應賠多少元？',
    answer: '$34$ 元',
    hasImage: false,
  },
  {
    id: '179fbb1a72f',
    chapter: '排列組合與機率',
    question:
      '選擇題為避免猜答而採倒扣計分，其扣分的標準是以猜答得分的期望值為 $0$ 來計算。今有一備有 $5$ 個選項的選擇題，試就下列各題型計算答錯應倒扣原題分的若干才適當。\n(1) 五選一的單選題答錯需倒扣原題分的？\n(2) 至少有一個答案的複選題答錯需倒扣原題分的？(全部選項皆對才算對)',
    answer: '(1) $\\frac{1}{4}$ (2) $\\frac{1}{30}$',
    hasImage: false,
  },
  {
    id: '179d801ee76',
    chapter: '排列組合與機率',
    question:
      '將 $12$ 件不同的玩具，依下列分法求其方法數：\n(1) 平分給甲、乙、丙三人 (2) 平分成三堆\n(3) 給甲 $6$ 件，乙 $3$ 件，丙 $3$ 件 (4) 依 $6$ 件，$3$ 件，$3$ 件分成三堆\n(5) 給甲 $5$ 件，乙 $4$ 件，丙 $3$ 件 (6) 依 $5$ 件，$4$ 件，$3$ 件分成三堆\n(7) 依 $5$ 件，$4$ 件，$3$ 件隨意給甲、乙、丙三人',
    answer: '(1) $34650$ (2) $5775$ (3) $18480$ (4) $9240$ (5) $27720$ (6) $27720$ (7) $166320$',
    hasImage: false,
  },
  {
    id: '179d8058508',
    chapter: '排列組合與機率',
    question:
      '籃球 $3$ 人鬥牛賽，共有甲、乙...等 $9$ 人參加，組成 $3$ 隊，且甲、乙兩人不在同一隊的組隊方式有幾種？',
    answer: '$210$',
    hasImage: false,
  },
  {
    id: '179d80e3f65',
    chapter: '排列組合與機率',
    question:
      '自一副撲克牌中任取 $3$ 張，試求下列取法數\n(1) 三條 (2) 一對 (3) 同花 (4) 順(最小順為 $A23$，最大順為 $QKA$) (5) $3$ 張均不同點數',
    answer: '(1) $52$ (2) $3744$ (3) $1144$ (4) $768$ (5) $18304$',
    hasImage: false,
  },
  {
    id: '179d80fe7d6',
    chapter: '排列組合與機率',
    question:
      '(1) $(2a-3b)^4$ 的展開式。$(1+x)^4$ 的展開式。\n(2) $(3x^2-2y)^7$ 之展開式中，$x^4y^5$ 項之係數。',
    answer: '(1) 略 (2) $-6048$',
    hasImage: false,
  },
  {
    id: '179d81122d9',
    chapter: '排列組合與機率',
    question:
      '在 $\\left(\\frac{2}{x}-x^2\\right)^{10}$ 之展開式中 (1) $x^{14}$ 項之係數 (2) $x^7$ 項之係數',
    answer: '(1) $180$ (2) $0$',
    hasImage: false,
  },
  {
    id: '179d814cb57',
    chapter: '排列組合與機率',
    question:
      '(1) 試求 $C^3_3+C^4_3+C^5_3+C^6_3+\\cdots+C^9_3$。\n(2) 若 $C^3_0+C^4_1+C^5_2+\\cdots+C^{89}_{86}=C^n_r$，求數對 $(n,r)$。',
    answer: '(1) $210$ (2) $(90,86)$ 或 $(90,4)$',
    hasImage: false,
  },
  {
    id: '179d8178477',
    chapter: '排列組合與機率',
    question:
      '同時投擲一個硬幣及一個四面分別寫上 $1$、$2$、$3$、$4$ 的四面體骰子，依序觀察硬幣出現的正面或反面及骰子出現的點數，則：\n(1) 試寫出此試驗的樣本空間\n(2) 試求此試驗的樣本點個數',
    answer: '(1) $\\{(+,1),(+,2),(+,3),(+,4),(-,1),(-,2),(-,3),(-,4)\\}$ (2) $8$',
    hasImage: false,
  },
  {
    id: '179d8208af1',
    chapter: '排列組合與機率',
    question:
      '設 $S$ 表投擲一顆骰子的樣本空間，$A$ 表出現奇數點之事件，$B$ 表不超過 $5$ 點之事件，$C$ 表出現偶數點之事件，試求：\n(1) $A$ 和 $B$ 的和事件 (2) $A$ 和 $B$ 的積事件\n(3) $A$ 的餘事件 (4) $A$、$B$ 是否為互斥事件\n(5) $A$、$C$ 是否為互斥事件',
    answer: '(1) $\\{(+,1),(+,2),(+,3),(+,4),(-,1),(-,2),(-,3),(-,4)\\}$ (2) $8$',
    hasImage: false,
  },
  {
    id: '179d8253dcf',
    chapter: '排列組合與機率',
    question:
      '一袋子裡有同形同質的卡片 $52$ 張，每張卡片上各有一個 $1$ 至 $52$ 的不同號碼。今自袋中同時任意抽出兩張卡片，則卡片上 $2$ 個號碼的和恰為 $36$ 的機率為？',
    answer: '$\\frac{1}{78}$',
    hasImage: false,
  },
  {
    id: '179d829f5d2',
    chapter: '排列組合與機率',
    question:
      '袋中有七個相同的球，分別標有 $1$ 號，$2$ 號，...，$7$ 號，若自袋中隨機取出四個球，則取出之球上的標號和為奇數的機率為？',
    answer: '$\\frac{16}{35}$',
    hasImage: false,
  },
  {
    id: '179d82cda15',
    chapter: '排列組合與機率',
    question:
      '投擲一枚均勻的硬幣三次，則：\n(1) 出現一正面、兩反面的機率為？ (2) 三次都出現同一面的機率為？',
    answer: '(1) $\\frac{3}{8}$ (2) $\\frac{1}{4}$',
    hasImage: false,
  },
  {
    id: '179d82eb06c',
    chapter: '排列組合與機率',
    question:
      '設 $P_1$ 表示丟 $2$ 枚均勻硬幣時，恰好出現 $1$ 個正面的機率，$P_2$ 表示擲 $2$ 個公正骰子，恰好出現 $1$ 個偶數點的機率，$P_3$ 表示丟 $4$ 枚均勻硬幣時，恰好出現 $2$ 個正面的機率，試比較 $P_1$、$P_2$、$P_3$ 之大小關係。',
    answer: '$P_1=P_2>P_3$',
    hasImage: false,
  },
  {
    id: '179b365007b',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、丁、戊、己等六人排成一列，求：\n(1) 甲一定要在乙的左方的方法有幾種？\n(2) 甲在乙的左方，乙又在丙的左方之方法有幾種？\n(3) 甲在乙和丙的左方之方法有幾種？\n(4) 甲在乙之左，丙在丁之左的方法有幾種？\n(5) 甲、乙兩人必排在丁、戊、己之左的方法有幾種？10',
    answer: '(1) $360$ (2) $120$ (3) $240$ (4) $180$ (5) $72$',
    hasImage: false,
  },
  {
    id: '179b36b4b9b',
    chapter: '排列組合與機率',
    question:
      '一棋盤形街道，縱街有 $6$ 條，橫街有 $5$ 條，某人由 $A$ 走最短路徑到 $B$，則：\n(1) 共有幾種不同的走法？\n(2) 必須經過 $C$ 點有幾種走法？\n(3) 必須經過 $D$ 點有幾種走法？\n(4) 同時經過 $C$、$D$ 兩點有幾種走法？\n(5) 不經 $C$ 點且不經 $D$ 點的走法有幾種？',
    answer: '(1) $126$ (2) $70$ (3) $60$ (4) $36$ (5) $32$',
    hasImage: true,
  },
  {
    id: '179b36d0791',
    chapter: '排列組合與機率',
    question:
      '(1) 將 $5$ 封不同信投入 $4$ 個不同郵筒的方法有幾種？\n(2) $5$ 種不同的酒倒入 $4$ 個不同的酒杯(每杯限倒 $1$ 種酒)，共有幾種不同的倒法？',
    answer: '(1) $1024$ (2) $625$',
    hasImage: false,
  },
  {
    id: '179b38d7317',
    chapter: '排列組合與機率',
    question:
      '(1) 我國自用小汽車的牌照號碼，前兩位為大寫英文字母，後四位為數字，例如 $AB-0321$，若最後一位數字不用 $4$，且後四位數字沒有 $0000$ 這個號碼，那麼我國可能有的自用小汽車牌照號碼有多少個？\n(2) 如果電話號碼除「第一個數不得為 $0$」外沒有其他限制，則 $7$ 位數改為 $8$ 位數可增加多少門號？',
    answer: '(1) $26\\times26\\times(9000-1)$ (2) $81000000$',
    hasImage: false,
  },
  {
    id: '179b394296e',
    chapter: '排列組合與機率',
    question:
      '將 $5$ 件不同的獎品，分給 $4$ 個小朋友，獎品一定要分完。\n(1) 若每人可兼得亦可不得，則分法有幾種？\n(2) $A$ 至少得 $1$ 件獎品的方法有幾種？\n(3) $A$ 恰得 $1$ 件獎品的分法有幾種？\n(4) $A$ 至少得 $2$ 件獎品的分法有幾種？',
    answer: '(1) $1024$ (2) $781$ (3) $405$ (4) $376$',
    hasImage: false,
  },
  {
    id: '179b397f713',
    chapter: '排列組合與機率',
    question:
      '渡船三艘，每艘可載 $5$ 人，求下列各安全過渡的方法有幾種？\n(1) $5$ 人同時過渡 (2) $6$ 人同時過渡 (3) $7$ 人同時過渡',
    answer: '(1) $243$ (2) $726$ (3) $2142$',
    hasImage: false,
  },
  {
    id: '179b39a2a3b',
    chapter: '排列組合與機率',
    question:
      '(1) $C^{20}_2=$？\n(2) $C^{18}_4=C^{18}_{n+2}$，則 $n=$？\n(3) $3C^n_3=10C^{n-2}_2$，則 $n=$？',
    answer: '(1) $190$ (2) $2$ 或 $12$ (3) $6$ 或 $5$',
    hasImage: false,
  },
  {
    id: '179b39bd539',
    chapter: '排列組合與機率',
    question:
      '由男生 $7$ 人，女生 $6$ 人中，選出 $4$ 人組成一個委員會，則：\n(1) 任意選出 $4$ 人的方法數有幾種？\n(2) 若規定男生 $2$ 人，女生 $2$ 人的方法數有幾種？\n(3) 若至少有一名是女生的方法數有幾種？',
    answer: '(1) $715$ (2) $315$ (3) $680$',
    hasImage: false,
  },
  {
    id: '179b39f973b',
    chapter: '排列組合與機率',
    question:
      '(1) 平面上有 $8$ 條相異直線，最多會有幾個交點？\n(2) 平面上有 $12$ 條直線，其中有 $3$ 條平行且另有 $4$ 條共點，除此之外，無任 $2$ 線平行且無任 $3$ 線共點的情形，則共有幾個交點？',
    answer: '(1) $28$ (2) $58$',
    hasImage: false,
  },
  {
    id: '179b3a0ab68',
    chapter: '排列組合與機率',
    question:
      '因乾旱水源不足，自來水公司計畫在下週一至日的 7 天中選擇 2 天停止供水。若要求停水的兩天不相連，則自來水公司共有幾種選擇方式？',
    answer: '15',
    hasImage: false,
  },
  {
    id: '179b3a31aaa',
    chapter: '排列組合與機率',
    question: '如圖，至少包含 $A$ 或 $B$ 兩點之一的長方形共有幾種？',
    answer: '$15$',
    hasImage: true,
  },
  {
    id: '179b3a3c055',
    chapter: '排列組合與機率',
    question: '如圖，有 $7$ 條鉛直線與 $5$ 條水平線，則可決定幾個矩形？',
    answer: '$210$',
    hasImage: true,
  },
  {
    id: '179b3a70c49',
    chapter: '排列組合與機率',
    question:
      '將 $6$ 件相異物依下列的分法，求其方法數：\n(1) 平分給甲、乙、丙三人 (2) 平分成三堆\n(3) 甲得 $4$ 件，乙得 $1$ 件，丙得 $1$ 件 (4) 依 $4$，$1$，$1$ 分成三堆\n(5) 甲得 $3$ 件，乙得 $2$ 件，丙得 $1$ 件 (6) 依 $3$，$2$，$1$ 分成三堆',
    answer: '(1) $90$ (2) $15$ (3) $30$ (4) $15$ (5) $60$ (6) $60$',
    hasImage: false,
  },
  {
    id: '17991b7e1d2',
    chapter: '排列組合與機率',
    question:
      '$1$ 到 $1000$ 的正整數中，試求是 $6$ 或是 $10$ 的倍數，但不是 $8$ 的倍數一共有幾個？',
    answer: '',
    hasImage: false,
  },
  {
    id: '17991fa8dd5',
    chapter: '排列組合與機率',
    question:
      '以 $0$、$1$、$2$、$3$、$4$、$5$ 等六個數字作成四位數，數字不可重複使用，則：\n(1) 此四位數共有幾個？\n(2) 這些四位數中，有幾個偶數？\n(3) 這些四位數，由小而大排列，第 $100$ 個數字為？$3420$ 是第幾個數？',
    answer: '(1) $300$ (2) $156$ (3) $2410$；$163$',
    hasImage: false,
  },
  {
    id: '1798f1a9043',
    chapter: '排列組合與機率',
    question:
      "設 $U=\\{x|1\\le x\\le300,x\\in\\mathbb{Z}\\}$ 為宇集，且 $A$、$B$ 兩集合均為 $U$ 的子集，今若 $A$ 表示 $5$ 的倍數所成的集合，$B$ 表示 $8$ 的倍數所成的集合，試求下列各集合的元素個數。\n(1) $n(A)\\quad$ (2) $n(B')\\quad$ (3) $n(A\\cap B)$\n(4) $n(A\\cup B)\\quad$ (5) $n(A\\cap B')\\quad$ (6) $n((A\\cup B)')$",
    answer: '(1) $60$ (2) $263$ (3) $7$ (4) $90$ (5) $53$ (6) $210$',
    hasImage: false,
  },
  {
    id: '1798f69e9c1',
    chapter: '排列組合與機率',
    question: '$1$ 到 $1000$ 的所有自然數中，$2$ 的倍數或 $3$ 的倍數或 $5$ 的倍數有幾個？',
    answer: '$734$',
    hasImage: false,
  },
  {
    id: '1798f6e706b',
    chapter: '排列組合與機率',
    question:
      '上數學課時，老師出兩個題目給全班同學做，已知全班有 $50$ 人，解出第一題的同學有 $32$ 人，解出第二題的同學有 $24$ 人，兩題均解出的同學有 $15$ 人，則兩題都解不出的同學有幾人？',
    answer: '$9$',
    hasImage: false,
  },
  {
    id: '1798f782757',
    chapter: '排列組合與機率',
    question:
      '子見因工作需要星期一到星期五必需到 $A$、$B$、$C$、$D$、$E$、$F$ 等 $6$ 間他負責的店家訪查，若他每天只能訪查一間店家，且相鄰兩天不訪查同一店家，而星期一及星期五這兩天一定要到 $A$ 店家訪查，請問在一週五天當中，子見的訪查行程有幾種安排？(單選)\n(A) $100$ 種 (B) $105$ 種 (C) $110$ 種 (D) $120$ 種 (E) $126$ 種',
    answer: '(B)',
    hasImage: false,
  },
  {
    id: '1798f7be697',
    chapter: '排列組合與機率',
    question:
      '某公司 $6$ 位員工排成一列照相，\n(1) 任意排列，則排法有幾種？\n(2) 若董事長一定要排在第一個位置比讚，則排法有幾種？',
    answer: '(1) $720$ (2) $120$',
    hasImage: false,
  },
  {
    id: '1798f7d9034',
    chapter: '排列組合與機率',
    question: '(1) $P^5_3=$？\n(2) 若 $P^n_3:P^{n+2}_3=5:12$，則 $n=$？',
    answer: '(1) $20$ (2) $7$',
    hasImage: false,
  },
  {
    id: '1798f813ff8',
    chapter: '排列組合與機率',
    question:
      '以 $1$、$2$、$3$、$4$、$5$ 共 $5$ 個數字作三位數，數字不可重複使用，則：\n(1) 此三位數共有幾個？\n(2) 這些三位數中，共有幾個奇數？幾個偶數？\n(3) 這些三位數，由小而大排列，第 $30$ 個數字為？$342$ 是第幾個數？',
    answer: '(1) $60$ (2) $36$；$24$ (3) $325$；$32$',
    hasImage: false,
  },
  {
    id: '1798f837c86',
    chapter: '排列組合與機率',
    question:
      '棒球比賽中，每隊要排出 $9$ 名球員輪流上場打擊，依序稱為第一棒到第九棒，現在某隊選出的 $9$ 名球員中，甲一定排在第一棒，乙、丙、丁三人則排在三、四、五棒，這三人的棒次可以調換，問該隊的打擊順序有幾種排列方式？',
    answer: '$720$',
    hasImage: false,
  },
  {
    id: '1798f86e6cf',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、丁、戊、己、庚共七人排成一列，依下列條件分別求其排法有多少種？\n(1) 七人任意排列\n(2) 甲、乙、丙三人須完全相鄰不可分開\n(3) 甲、乙、丙三人須完全分開',
    answer: '(1) $5040$ (2) $720$ (3) $1440$',
    hasImage: false,
  },
  {
    id: '1798f8d2bfb',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、丁四個好朋友共乘香蕉船玩樂，試求：\n(1) 甲不坐在最前面的排法有幾種？\n(2) 甲不坐在最前面，且丁不坐在最後面的方法有幾種？',
    answer: '(1) $18$ (2) $14$',
    hasImage: false,
  },
  {
    id: '1798f8fed2e',
    chapter: '排列組合與機率',
    question:
      '(1) 將 $4$ 顆白球 $2$ 顆黑球排成一列的排法有幾種？\n(2) 將「阿雄棒棒阿雄帥帥」八個字排成一列的排法有幾種？',
    answer: '(1) $15$ (2) $2520$ (3) $420$',
    hasImage: false,
  },
  {
    id: '1798f91a336',
    chapter: '排列組合與機率',
    question:
      '如右圖，某處擺放著 $A$、$B$、$C$ 三排罐子，有神射手用槍彈一個個把罐子擊落，不分 $A$、$B$、$C$ 的順序，任意射擊，但每次只能擊落一瓶罐子，即每排依序由上而下射擊，請問 $9$ 瓶罐子全部打下來，共有幾種方法？',
    answer: '$1260$',
    hasImage: true,
  },
  {
    id: '1798fa42cb3',
    chapter: '排列組合與機率',
    question:
      '一樓有 $10$ 階，上樓時可一步跨 $1$ 階或 $2$ 階，今某頑童欲登此樓，則：\n(1) 有多少種不同的上樓方式？\n(2) 若規定須跨上第五階，則多少種不同的上樓方式？(單選)\n(A) $9$ (B) $16$ (C) $64$ (D) $89$',
    answer: '(1) $89$ (2) (C)',
    hasImage: false,
  },
  {
    id: '17990a8b9e3',
    chapter: '排列組合與機率',
    question:
      '設集合 $A=\\{a,b\\}$，$B=\\{a,b,c,d,e\\}$，則滿足 $A\\subset C\\subset B$ 的集合 $C$ 有幾個？',
    answer: '$8$',
    hasImage: false,
  },
  {
    id: '17990aa1fd6',
    chapter: '排列組合與機率',
    question: '已知集合 $A=\\{2,4,a^2-a+3\\}$，$B=\\{3,a,a+2,a+5\\}$ 滿足 $A-B=\\{5\\}$，求 $a$。',
    answer: '2',
    hasImage: false,
  },
  {
    id: '17990ab0495',
    chapter: '排列組合與機率',
    question: '小新、小白兩人各擲一顆骰子，點數差的絕對值大於 3 的情形有幾種？',
    answer: '6',
    hasImage: false,
  },
  {
    id: '17990abfa09',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙三人各選好一個「$-2$」以外的整數，發現這三個數的平方和為 $9$，則此三人的選擇共有幾種情形？',
    answer: '$12$',
    hasImage: false,
  },
  {
    id: '17990adbce5',
    chapter: '排列組合與機率',
    question:
      '某餐飲部供應的菜色為肉類 4 種，魚類 3 種，蔬菜 5 種，甜點 2 種，有位客人要點肉類、魚類、蔬菜各一種，不點甜點，則這位客人有幾種點法？',
    answer: '60',
    hasImage: false,
  },
  {
    id: '17990aea8de',
    chapter: '排列組合與機率',
    question:
      '某餐廳的主菜有牛、豬、雞與羊 4 種；湯有玉米湯、海鮮湯與蔬菜湯 3 種；飲料有咖啡、紅茶與奶茶 3 種。每位客人須點全餐(主菜、湯及飲料各任選一種)或超值餐(主菜、飲料各任選一種)。請問共有幾種餐點組合？',
    answer: '48',
    hasImage: false,
  },
  {
    id: '17990b0fd75',
    chapter: '排列組合與機率',
    question:
      '甲、乙兩地間有 12 條路，其中 3 條是由甲地到乙地的單行道，4 條是由乙地到甲地的單行道，另 5 條是雙向道，今由甲地到乙地再回到甲地，若往返不走同一條路，走法共有幾種？',
    answer: '67',
    hasImage: false,
  },
  {
    id: '1868203b78b',
    chapter: '排列組合與機率',
    question:
      '某班有 40 人，今調查擁有手機、平板及筆電的人數。其中 22 個人有手機；16 個人有平板；18 個人有筆電；同時有手機與平板的有 9 人；有平板與筆電的有 7 人；有手機與筆電的有 12 人；都沒有這三種產品的有 8 人，試問下列何者正確？\n(1) 至少有一樣的有 32 人\n(2) 三樣都有的有 5 人\n(3) 有手機與平板，但沒有筆電的有 4 人\n(4) 有筆電，但沒有手機與平板的有 3 人\n(5) 有手機或筆電，但沒有平板的有 16 人',
    answer: '(1)(4)(5)',
    hasImage: false,
  },
  {
    id: '17990b2b6ba',
    chapter: '排列組合與機率',
    question:
      '對全班 45 人作喝飲料習慣的調查，發現習慣半糖的有 30 人，習慣去冰的有 25 人。試問：該班喝飲料的習慣是半糖且去冰者最多有 $a$ 人，最少有 $b$ 人，求 $a+b$',
    answer: '35',
    hasImage: false,
  },
  {
    id: '178f776e6fd',
    chapter: '排列組合與機率',
    question:
      '學生甲乙丙...等 7 人參加接力賽跑，請回答下列問題的排法數。\n(1)甲、乙、丙必須是相鄰的三棒\n(2)甲、乙、丙三人的棒次互不相連',
    answer: '(1) 720 (2) 1440',
    hasImage: false,
  },
  {
    id: '178f777ce0b',
    chapter: '排列組合與機率',
    question:
      '一列火車有七節車廂，車廂號碼 1, 2, 3, 4, 5, 6, 7，今有兩對夫婦同時搭上火車。此四人剛好選坐兩節不同車廂而且是一對夫婦在一節車廂，另外一對夫婦選坐另一節車廂，則共有幾種選法？',
    answer: '42',
    hasImage: false,
  },
  {
    id: '178f7791d87',
    chapter: '排列組合與機率',
    question:
      '以 1, 2, 4, 6, 9 等五個數不可重複排成一個五位數，將這些五位數由小排到大(如 12469, 12496, ...)後，則第 50 個數為？',
    answer: '41296',
    hasImage: false,
  },
  {
    id: '178f779646a',
    chapter: '排列組合與機率',
    question: '用 0, 0, 1, 1, 1, 2 共 6 個數字作成六位數，則共有幾種不同的數字？',
    answer: '40',
    hasImage: false,
  },
  {
    id: '178f779de67',
    chapter: '排列組合與機率',
    question: '某中學晚會共分成 7 段，其中魔術、歌唱須在熱舞表演的前面，求排法數。',
    answer: '1680',
    hasImage: false,
  },
  {
    id: '178f77a38e2',
    chapter: '排列組合與機率',
    question: '將 abscissa 八個字排成一列，任意排，則排法有多少種？',
    answer: '3360',
    hasImage: false,
  },
  {
    id: '178f77a66b0',
    chapter: '排列組合與機率',
    question: '由一樓上二樓的樓梯共有 8 階，某人以每步踏一階或二階上樓，共有幾種走法？',
    answer: '34',
    hasImage: false,
  },
  {
    id: '178f77a9938',
    chapter: '排列組合與機率',
    question:
      '從 $1$、$2$、$3$、$4$、$5$、$6$ 這 $6$ 個數字中，任意挑選 $3$ 個相異的數字排成三位數，若將所有排成的三位數由小到大依序排列，則 $345$ 為第幾個三位數？',
    answer: '$51$',
    hasImage: false,
  },
  {
    id: '178f77ac93d',
    chapter: '排列組合與機率',
    question:
      '某班想從 $7$ 名學生中選派 $4$ 人分別參加演講、郎讀、作文、字音字形比賽，其中小宇不參加演講比賽，阿光不參加朗讀比賽，則有幾種選派方式？',
    answer: '$620$',
    hasImage: false,
  },
  {
    id: '178f77b0f54',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、丁、戊、己六人排成一列，其中甲與乙為相鄰而且丙與乙分開，則可能的情形有幾種？',
    answer: '$192$',
    hasImage: false,
  },
  {
    id: '178f77b3896',
    chapter: '排列組合與機率',
    question:
      '由甲地至乙地是棋盤式的街道，某人以走捷徑的方式由甲地至乙地，求必須經過 $P$ 點或 $Q$ 點的方法有多少種？',
    answer: '$154$',
    hasImage: true,
  },
  {
    id: '1873c084622',
    chapter: '排列組合與機率',
    question:
      '由甲地至乙地是棋盤式的街道，某人以走捷徑的方式由甲地至乙地，求：\n(1) 由甲地至乙地的方法數\n(2) 必須經過 $P$ 點的方法數\n(3) 必須經過 $P$ 點，且經過 $Q$ 點的方法數\n(4) 必須經過 $P$ 點或 $Q$ 點的方法數',
    answer: '(1) 210 (2) 90 (3) 48 (4) 154',
    hasImage: true,
  },
  {
    id: '178f77b6e66',
    chapter: '排列組合與機率',
    question:
      '將 $1$、$2$、$3$、$4$、$5$、$6$ 六個數字全取排成六位數，下列敘述何者正確？\n(A)六位數共有 $720$ 個\n(B)偶數有 $360$ 個\n(C) $3$ 的倍數有 $240$ 個\n(D) $4$ 的倍數有 $192$ 個\n(E) $5$ 的倍數有 $120$ 個',
    answer: '(A)(B)(D)(E)',
    hasImage: false,
  },
  {
    id: '178f9e3fc7b',
    chapter: '排列組合與機率',
    question:
      '將 $5$ 張不同面額的禮券分給甲、乙、丙三人，禮券必須全部分完，則甲恰得一張的方法有幾種？',
    answer: '$80$',
    hasImage: false,
  },
  {
    id: '178f9e85218',
    chapter: '排列組合與機率',
    question:
      '將 $5$ 本不同的書，分給甲、乙、丙三人，就以下情形的分法，選出正確的選項？\n(A)任意分為 $125$ 種\n(B)甲至少一本為 $211$ 種\n(C)乙恰得一本為 $80$ 種\n(D)三人均至少一本為 $149$ 種\n(E)恰有一人沒拿到書為 $96$ 種',
    answer: '(B)(C)',
    hasImage: false,
  },
  {
    id: '178fa340b81',
    chapter: '排列組合與機率',
    question:
      '有 $t$、$e$、$e$、$e$、$e$、$n$、$n$、$s$、$s$ 這 $9$ 張字母卡，欲從這 $9$ 張字母卡中任取 $4$ 張字母卡出來排列，則其排法有幾種？',
    answer: '$163$',
    hasImage: false,
  },
  {
    id: '178fa3eee69',
    chapter: '排列組合與機率',
    question:
      '某地區的車牌號碼共六碼，其中前兩碼為 $O$ 以外的英文大寫字母，後四碼為 $0$ 到 $9$ 的阿拉伯數字，但規定不能連續出現三個 $4$。例如：$AA1234$、$AB4434$ 為可出現的車牌號碼；而 $AO1234$，$AB3444$ 為不可出現的車牌號碼。則所有第一碼為 $E$ 且最後一碼為 $4$ 的車牌號碼個數為何？',
    answer: '$24750$',
    hasImage: false,
  },
  {
    id: '178fa4ccd10',
    chapter: '排列組合與機率',
    question:
      '六人搭三輛不同的計程車，每輛至少坐一名乘客，最多載四名乘客，超過四人即違規，求六人搭乘且不違規的搭乘情況下，有幾種搭乘方法？',
    answer: '$540$',
    hasImage: false,
  },
  {
    id: '178fa58b177',
    chapter: '排列組合與機率',
    question:
      '設有渡輪 $3$ 艘(分別標號為 $A$、$B$、$C$)，每艘船最多可載 $5$人，今有 $7$ 人過渡，但甲需乘 $A$ 船，且乙不乘 $B$ 船，有幾種安全過渡的方法？',
    answer: '$473$',
    hasImage: false,
  },
  {
    id: '178fa706cd1',
    chapter: '排列組合與機率',
    question:
      '甲、乙、丙、丁、戊、己、庚共 7 人，從中選出 4 人，則甲、乙不能同時入選的方法有幾種？',
    answer: '25',
    hasImage: false,
  },
  {
    id: '178fa7b2ef0',
    chapter: '排列組合與機率',
    question:
      '摩斯密碼是由「‧」與「—」兩種符號所排成一列的字串。若有一個摩斯密碼字串是由 3 個「‧」符號及 8 個「—」符號所組成，且 3 個「‧」符號不相鄰，則可產生幾種不同的摩斯密碼字串？',
    answer: '84',
    hasImage: false,
  },
  {
    id: '178fa7e4b84',
    chapter: '排列組合與機率',
    question:
      '由甲、乙、丙、丁...等 10 人中選出 4 人，組成一代表團，則至少含甲、乙、丙、丁其中 1 人的選法有幾種?',
    answer: '195',
    hasImage: false,
  },
  {
    id: '1875cc3a53e',
    chapter: '排列組合與機率',
    question:
      '由 5 位男生、4 位女生中，選取 4 人組成一委員會，若要求男、女至少各 1 人，則有幾種選法？',
    answer: '120',
    hasImage: false,
  },
  {
    id: '178fa9cba82',
    chapter: '排列組合與機率',
    question: '已知圖為 16 個矩形組成的大矩形，則圖中不包含 $P$ 點的矩形有幾個？',
    answer: '64',
    hasImage: true,
  },
  {
    id: '178fabee5c1',
    chapter: '排列組合與機率',
    question:
      '圖書館買進 6 本不同的書，何者正確？\n(1) 平分成三堆，有 $C^6_2\\cdot C^4_2\\cdot C^2_2$ 種分法\n(2) 平分給三人，有 $C^6_2\\cdot C^4_2\\cdot C^2_2$ 種分法\n(3) 以四、一、一的分法分給三人，有 $C^6_4\\cdot C^2_1\\cdot C^1_1$ 種分法\n(4) 以一、二、三的分法分給三人，有 $C^6_3\\cdot C^3_2\\cdot C^1_1\\cdot3!$ 種分法\n(5) 分給三人，每人至少一本，有 $C^6_3\\cdot3!\\times3^3$ 種分法',
    answer: '(2)(4)',
    hasImage: false,
  },
  {
    id: '178fac14a06',
    chapter: '排列組合與機率',
    question:
      '舉辦班際籃球賽，某班選出甲、乙、丙...等 15 個最強的同學上場比賽，若每隊需要 5 個人且甲、乙、丙三人不同隊，則有幾種組隊方式？',
    answer: '34650',
    hasImage: false,
  },
  {
    id: '178fac261fc',
    chapter: '排列組合與機率',
    question: '求 $(2x^2-3y)^5$ 展開式中 $x^4y^3$ 項的係數。',
    answer: '-1080',
    hasImage: false,
  },
  {
    id: '178fac331f4',
    chapter: '排列組合與機率',
    question: '求 $(3x^2+\\dfrac1x)^6$ 展開式中的常數項。',
    answer: '135',
    hasImage: false,
  },
  {
    id: '178fac4d07d',
    chapter: '排列組合與機率',
    question: '求 $C^3_3+C^4_3+C^5_3+C^6_3+\\dots+C^{10}_3$',
    answer: '330',
    hasImage: false,
  },
  {
    id: '178fac4d07e',
    chapter: '排列組合與機率',
    question: '求 $C^9_1+C^9_2+C^9_3+C^9_4+\\dots+C^9_8$',
    answer: '510',
    hasImage: false,
  },
  {
    id: '178fac883bd',
    chapter: '排列組合與機率',
    question:
      '設 $(1+\\sqrt{2})^6=a+b\\sqrt{2}$，其中 $a$、$b$ 為實數。請問 $b$ 等於下列哪一個選項？\n(A) $C^6_0+2C^6_2+2^2C^6_4+2^3C^6_6$\n(B) $2C^6_1+2^2C^6_3+2^3C^6_5$\n(C) $C^6_1+2C^6_3+2^2C^6_5$\n(D) $C^6_0+2C^6_1+2^2C^6_2+2^3C^6_3+2^4C^6_4+2^5C^6_5+2^6C^6_6$\n(E) $C^6_0+2^2C^6_2+2^4C^6_4+2^6C^6_6$',
    answer: '(C)',
    hasImage: false,
  },
  {
    id: '1875cd9626f',
    chapter: '排列組合與機率',
    question: '在一題有 5 個選項的多重選擇題中，若至少有兩個選項是正確的，則有幾種可能的答案？',
    answer: '26',
    hasImage: false,
  },
  {
    id: '1875cda2cb0',
    chapter: '排列組合與機率',
    question: '投擲一骰子三次，點數一次比一次大的情形有幾種？',
    answer: '20',
    hasImage: false,
  },
  {
    id: '1875cdba853',
    chapter: '排列組合與機率',
    question: '從 5 對夫婦中選出 4 人組成社區管理委員會，選出 4 人恰有一對夫婦的方法有？',
    answer: '120',
    hasImage: false,
  },
  {
    id: '1791b4911d8',
    chapter: '排列組合與機率',
    question:
      '設事件 $A$ 發生的機率為 $\\dfrac25$，事件 $B$ 發生的機率為 $\\dfrac3{10}$，若以 $p$ 表 $A$ 或 $B$ 發生的機率，求 $p$ 值的範圍。',
    answer: '$\\frac25\\le p\\le\\frac7{10}$',
    hasImage: false,
  },
  {
    id: '1791b4a62cb',
    chapter: '排列組合與機率',
    question:
      '設 $A$，$B$ 為兩事件，且 $P(A)=\\dfrac12$，$P(B)=\\dfrac7{10}$，$P(A\\cap B)=\\dfrac25$，求 $P(A\\cup B)$。',
    answer: '$\\frac45$',
    hasImage: false,
  },
  {
    id: '1791b4d6f84',
    chapter: '排列組合與機率',
    question:
      '袋中有 5 張同樣大小的卡片，其中 3 張寫上號碼 15，2 張寫上號碼 20，設每張卡片被取出的機會均等。袋中一次取 2 張卡片，可得兩張卡片號碼和的錢數，則取一次所得錢數的期望值為？',
    answer: '34 元',
    hasImage: false,
  },
  {
    id: '1791b4f3389',
    chapter: '排列組合與機率',
    question:
      '箱中有三顆紅球與三顆白球，一摸彩遊戲是從箱中隨機同時抽出兩顆球。如果抽出的兩球顏色不同，則得獎金 100 元；如果兩球顏色相同，則獎金 150 元。請問此遊戲獎金的期望值為何？',
    answer: '120 元',
    hasImage: false,
  },
  {
    id: '1791b50de9e',
    chapter: '排列組合與機率',
    question:
      '若一個 80 歲老人根據統計，可活過一年的機率為 95%，若某 80 歲老爺爺保一年 10000 元的壽險，但須繳納保費 1000 元，試問此 80 歲老人投保，保險公司獲益的期望值為？',
    answer: '500 元',
    hasImage: false,
  },
  {
    id: '1791b528b1d',
    chapter: '排列組合與機率',
    question:
      '某城市發行彩券，每張售價 100 元，在每次發行 1 百萬張彩券中有壹佰萬元獎 10 張，拾萬元獎 $100$ 張，壹萬元獎 1000 張，壹仟元獎 10000 張，伍佰元獎 50000 張，若小張購買兩張，預期會損失幾元？',
    answer: '70 元',
    hasImage: false,
  },
  {
    id: '1791b53bc19',
    chapter: '排列組合與機率',
    question:
      '王先生在提款時忘了帳號密碼，但他還記得密碼的七位數字中，有兩個 3，三個 5，兩個 9，於是他就用這七個數字隨意排成一個七位數輸入提款機嘗試，則他只試一次就成功的機率為？',
    answer: '$\\frac1{210}$',
    hasImage: false,
  },
  {
    id: '1791b572ecb',
    chapter: '排列組合與機率',
    question:
      '袋中有 12 個大小相同的球，其中紅球 5 個，白球 4 個，黑球 3 個。\n(1)自袋中任取 4 球，取出的結果有幾種？\n(2)自袋中任取 4 球，恰為三色之機率為？',
    answer: '(1) 14 (2) $\\frac6{11}$',
    hasImage: false,
  },
  {
    id: '17942b291a4',
    chapter: '排列組合與機率',
    question:
      '已知袋中有 $6$ 個紅球，$4$ 個白球，若每球被取出的機會相同。若一次取一球，取後放回，共取兩次，取出一紅球一白球的機率為 $P_1$；若一次取一球，取後不放回，共取兩次，取出一紅球一白球的機率為 $P_2$；若一次取兩球，只取一次，取出一紅球一白球的機率為 $P_3$，則 $P_1$、$P_2$、$P_3$ 大小關係為何？\n(A) $P_1=P_2<P_3$\n(B) $P_1<P_2=P_3$\n(C) $P_2<P_3=P_1$\n(D) $P_1<P_2<P_3$\n(E) $P_3<P_2<P_1$',
    answer: '(B)',
    hasImage: false,
  },
  {
    id: '17942b5ea75',
    chapter: '排列組合與機率',
    question:
      '將正方形 $ABCD$ 的四條邊各自標上 $1$、$2$、$3$ 中的某一個數，使得任兩條相鄰的邊，都標有恰好差 $1$ 的兩個數。滿足這種條件的標示法總共有多少種？\n(A) $2$ 種\n(B) $4$ 種\n(C) $6$ 種\n(D) $8$ 種',
    answer: '(D)',
    hasImage: true,
  },
  {
    id: '17942ba194e',
    chapter: '排列組合與機率',
    question:
      '在 $9$ 個小正方格子中每一格填入「O」或「X」，則填法有幾種？\n(A) $9^2$\n(B) $2^9$\n(C) $P^9_2$\n(D) $C^9_0+C^9_1+C^9_2+\\dots+C^9_9$\n(E) $2(C^9_0+C^9_1+C^9_2+\\dots+C^9_9)$',
    answer: '(B)(D)',
    hasImage: true,
  },
  {
    id: '17942bc2fb6',
    chapter: '排列組合與機率',
    question:
      '選出答案不為 $C^7_3$ 的選項。\n(A)從 $7$ 人中選出 $3$ 人參加比賽的方法數\n(B)甲、乙、丙三人從 $7$ 本不同的書中，每人各選一本的方法數\n(C)將「$aaaabbb$」共 $7$ 個字母，任意排成一列的方法數\n(D)在 $(a-b)^7$ 的展開式中，$a^4b^3$ 的係數\n(E)在 $(a-b)^7$ 的展開式中，$a^3b^4$ 的係數',
    answer: '(B)(D)',
    hasImage: false,
  },
  {
    id: '17942c0dd28',
    chapter: '排列組合與機率',
    question:
      "關於下列的敘述，選出正確的選項。\n(A)投擲一均勻硬幣 $6$ 次，「$6$ 次都出現正面」的機率小於「前 $3$ 次正面，後 $3$ 次反面」的機率\n(B)擲兩顆公正骰子一次，兩顆點數相同的機率為 $\\frac{1}{6}$\n(C)同時投擲二枚均勻硬幣一次，出現一正一反的機率為 $\\frac{1}{4}$\n(D)對任意兩事件 $A$、$B$，$P(A\\cap B')=P(A)-P(A\\cap B)$\n(E)對任意兩事件 $A$、$B$，$P(A'\\cap B')=1-P(A\\cup B)$",
    answer: '(B)(D)(E)',
    hasImage: false,
  },
  {
    id: '17942c55d7f',
    chapter: '排列組合與機率',
    question:
      '袋子中有 $k$ 號卡片 $k$ 張($k=1$、$2$、$3$)，每張卡片被取到的機會均等，則下列何者正確？\n(A)取出一張卡片，則此張卡片上數字之期望值為 $\\frac{7}{3}$\n(B)一次取出兩張卡片，則兩張卡片上數字和之期望值為 $\\frac{14}{3}$\n(C)一次取出兩張卡片，則兩張卡片上數字積之期望值為 $\\frac{49}{9}$\n(D)一次取出一張卡片，取後放回，共取兩次，則兩次卡片上數字和之期望值為 $\\frac{14}{3}$\n(E)一次取出一張卡片，取後放回，共取兩次，則兩次卡片上數字積之期望值為 $\\frac{49}{9}$',
    answer: '(A)(B)(D)(E)',
    hasImage: false,
  },
  {
    id: '17942c8c37e',
    chapter: '排列組合與機率',
    question:
      '美國職棒大聯盟總冠軍賽採七戰四勝制，若比完第三場時洋基隊以一勝兩敗落後道奇隊，則往後比賽共有幾種可能情形是洋基隊獲得冠軍的情形？',
    answer: '4',
    hasImage: false,
  },
  {
    id: '17942ccbdb7',
    chapter: '排列組合與機率',
    question:
      '設集合 $A=\\{x|1\\le x\\le4,x\\in \\mathbb{R}\\}$，集合 $B=\\{x|x^2-2x-3\\le0,x\\in\\mathbb{R}\\}$，則集合 $A$ 與 $B$ 的差集 $A-B=$？',
    answer: '$\\{x|3<x\\le4,x\\in\\mathbb{R}\\}$',
    hasImage: false,
  },
  {
    id: '17942ce3940',
    chapter: '排列組合與機率',
    question: '將 4 本不同的書全部分給甲、乙、丙三人，則甲恰得一本書的方法有幾種？',
    answer: '32',
    hasImage: false,
  },
  {
    id: '17942d0321c',
    chapter: '排列組合與機率',
    question:
      '愛吃鬼品軒家附近的餐館供應晚餐便當共 3 種，她打算從這週星期一到星期五的 5 天晚餐，將餐館每種便當都至少吃過一次，是問她有幾種搭配選擇？',
    answer: '150',
    hasImage: false,
  },
  {
    id: '17942d1e94a',
    chapter: '排列組合與機率',
    question: '投擲一公正骰子 $4$ 次，觀察出現的點數，則 $4$ 次骰子點數均相異的機率為？',
    answer: '$\\frac{5}{18}$',
    hasImage: false,
  },
  {
    id: '17942d5a8b2',
    chapter: '排列組合與機率',
    question:
      '某購物商場裡的特價商品專櫃裡的 10 件 T 恤中，有 2 件是瑕疵品。今從中任取 3 件，則至多只取到 1 件瑕疵品的機率為？',
    answer: '$\\frac{14}{15}$',
    hasImage: false,
  },
  {
    id: '17942eb8abe',
    chapter: '排列組合與機率',
    question:
      '甲、乙兩人比賽下西洋棋，約定先贏 3 局者贏，敗者付勝者 3000 元。已知甲、乙兩人獲勝的機率各是 $\\dfrac12$，沒有和局。現於甲贏 2 局、乙贏 1 局時，比賽因故中止且決定按期望值的概念決定金額的處理方式，試求乙應付給甲幾元才合理？',
    answer: '2250',
    hasImage: false,
  },
  {
    id: '17942ede30d',
    chapter: '排列組合與機率',
    question: '設 $(\\sqrt{3}-1)^6=a+b\\sqrt{3}$，其中 $a$、$b$ 為整數，求數對 $(a,b)=$？',
    answer: '$(208,-120)$',
    hasImage: false,
  },
  {
    id: '179494f559b',
    chapter: '排列組合與機率',
    question:
      '在 $(2x^2-y)^8$ 展開式中 $x^4y^6$ 項的係數為？\n(A) $112$ (B) $-112$ (C) $-28$ (D) $28$ (E) $56$',
    answer: '(A)',
    hasImage: false,
  },
  {
    id: '17949512c9c',
    chapter: '排列組合與機率',
    question:
      '下列各事件發生的機率中，何者最大？\n(A)丟 $1$ 枚均勻的硬幣，出現正面的機率\n(B)擲一顆公正骰子，出現點數 $2$ 的機率\n(C)同時丟 $2$ 枚均勻的硬幣，出現兩正的機率\n(D)丟 $1$ 枚均勻的硬幣三次，出現三正的機率\n(E)甲、乙兩人以「剪刀石頭布」猜拳，甲贏的機率',
    answer: '(A)',
    hasImage: false,
  },
  {
    id: '1794953b18a',
    chapter: '排列組合與機率',
    question:
      '將甲、乙...等 $9$ 個人分成 $A$、$B$、$C$ 三組執行不同任務，其中 $A$ 組 $5$ 人，另外兩組各 $2$ 人，試求甲和乙在同一組的情況有幾種？\n(A) $42$ (B) $126$ (C) $210$ (D) $252$ (E) $630$',
    answer: '(D)',
    hasImage: false,
  },
  {
    id: '1794955ca14',
    chapter: '排列組合與機率',
    question:
      '袋中有 $5$ 顆紅球和 $4$ 顆白球，一摸彩遊戲是從袋中隨機同時取出 $2$ 球，且每球被取出的機會均等。若取出兩紅球，可得獎金 $40$ 元，取出兩白球，可得獎金 $100$ 元，則當取出兩球不同色時，應付幾元，方能使摸彩遊戲為公平遊戲？',
    answer: '$50$',
    hasImage: false,
  },
  {
    id: '17949570a6b',
    chapter: '排列組合與機率',
    question:
      '將「$little$」一字中的 $6$ 個字母，\n(1)全取出來排成一列，同字不相鄰有幾種排法？\n(2)任取 $4$ 個字母為一組，有幾種組合？\n(3)任取 $4$ 個字母出來排成一列，有幾種排法？',
    answer: '(1) $84$ (2) $8$ (3) $102$',
    hasImage: false,
  },
  {
    id: '17949590335',
    chapter: '排列組合與機率',
    question:
      '一袋中有 $7$ 個大小相同的球，編號 $1\\sim7$ 號，從袋中一次取出 $4$ 球，則取出的球編號和為偶數的機率為？',
    answer: '$\\frac{19}{35}$',
    hasImage: false,
  },
  {
    id: '179495cac3e',
    chapter: '排列組合與機率',
    question:
      '擲兩顆公正骰子一次，選出正確的選項。\n(A)點數和為 $5$ 的機率為 $\\frac{1}{9}$\n(B)點數相同的機率為 $\\frac{1}{6}$\n(C)點數和大於 $10$ 的機率為 $\\frac{1}{6}$\n(D)點數乘積為奇數的機率為 $\\frac{1}{12}$\n(E)點數和為質數的機率為 $\\frac{7}{18}$',
    answer: '(A)(B)',
    hasImage: false,
  },
  {
    id: '179495d8575',
    chapter: '排列組合與機率',
    question:
      '電力公司預計在接下來的 $12$ 天中選擇 $4$ 天停電，但是要求停電的 $2$ 天不得相連，則滿足此情形的機率為？',
    answer: '$\\frac{14}{55}$',
    hasImage: false,
  },
];

// 三角函數A
const trigonometricFuncA: Question[] = [
  {
    id: '1853f005dc7',
    chapter: '三角函數A',
    question:
      '設 $f(x)=\\cos2x+\\sqrt3\\sin2x$，且 $g(x)=f(x+\\dfrac{\\pi}6)-|x|$，試問 $y=g(x)$ 的圖形與 $x$ 軸的交點個數為何？\n(1) 1　(2) 2　(3) 3　(4) 4　(5) 5',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '184efc9b0b6',
    chapter: '三角函數A',
    question:
      '設 $\\angle A$ 為第四象限角且 $\\sin(180\\du-A)\\cos330\\du+\\cos A\\sin150\\du=\\sin2013\\du$，若 $\\angle A$ 的最小正同界角為 $m\\du$，則 $m=\\textcirc{6-1}\\textcirc{6-2}\\textcirc{6-3}$。',
    answer: '297',
    hasImage: false,
  },
  {
    id: '184d34a09c5',
    chapter: '三角函數A',
    question:
      '如圖，等腰三角形 $ABC$ 中，$\\overline{AB}=\\overline{AC}$，$\\angle BAD=\\angle DAE=\\angle EAC=\\theta$，且 $\\overline{AE}=\\overline{AF}$。選出正確的選項。\n(1) $\\overline{CE}=\\overline{ED}$\n(2) $\\overline{BD}>\\overline{ED}$\n(3) $\\angle CFE=90\\du+\\dfrac\\theta2$\n(4) $\\dfrac{\\overline{DE}}{\\overline{BD}}=2\\cos\\theta-1$\n(5) $\\dfrac{\\overline{DE}}{\\overline{BD}}=2\\sin2\\theta-1$',
    answer: '234',
    hasImage: true,
  },
  {
    id: '184a789991d',
    chapter: '三角函數A',
    question:
      '如圖，四邊形 $ABCD$，$\\overline{AD}=1$，$\\overline{CD}=2$，$\\overline{AC}=\\sqrt7$，若 $\\cos\\angle BAD=-\\dfrac{\\sqrt7}{14}$，$\\sin\\angle CBA=\\dfrac{\\sqrt{21}}6$，求 $\\overline{BC}$。',
    answer: '3',
    hasImage: true,
  },
  {
    id: '183d72f576a',
    chapter: '三角函數A',
    question:
      '若 $x$ 為實數，求函數 $\\dfrac{8^{\\cos x}}{16^{\\sin x}}$ 的最大值為 $\\textcirc{12-1}\\textcirc{12-2}$',
    answer: '32',
    hasImage: false,
  },
  {
    id: '183d717bb86',
    chapter: '三角函數A',
    question:
      '下列哪一個數值最大？\n(1) $\\sin25\\du\\cos35\\du+\\cos25\\du\\sin35\\du$\n(2) $\\sin25\\du\\cos65\\du+\\cos25\\du\\sin65\\du$\n(3) $\\sin25\\du\\cos95\\du+\\cos25\\du\\sin95\\du$\n(4) $\\sin25\\du\\cos125\\du+\\cos25\\du\\sin125\\du$\n(5) $\\sin25\\du\\cos155\\du+\\cos25\\du\\sin155\\du$',
    answer: '2',
    hasImage: false,
  },
  {
    id: '17c58a894bd',
    chapter: '三角函數A',
    question:
      '下列哪些角為第二象限角？(1) $165\\du$ (2) $1529\\du$ (3) $120$ (4) $-512\\du$ (5) $-\\frac{7}{5}\\pi$',
    answer: '(1)(5)',
    hasImage: false,
  },
  {
    id: '17c58ac8113',
    chapter: '三角函數A',
    question:
      '標準位置角 $\\theta$ 在終邊上有一點 $P(-3,6\\sqrt{2})$，則下列選項哪些正確？\n(1) $\\sin\\theta=\\frac{-1}{3}$ (2) $\\cos(90\\du-\\theta)=\\frac{2\\sqrt{2}}{3}$ (3) $\\cos2\\theta=-\\frac{8}{9}$ (4) $\\sin2\\theta=-\\frac{4\\sqrt{2}}{9}$ (5) $\\sin\\frac{\\theta}{2}=\\sqrt{\\frac{2}{3}}$',
    answer: '(2)(4)(5)',
    hasImage: false,
  },
  {
    id: '17c58aefaa1',
    chapter: '三角函數A',
    question:
      '附圖為某三角函數 $f(x)$ 的部分圖形，下列哪些選項是對的？\n(1) $f(\\frac{4\\pi}{3})$ 之值為 $0$ (2) $f(x)$ 之週期為 $\\pi$\n(3) $y=f(x)$ 之圖形對稱於 $x=\\frac{5\\pi}{6}$ (4) $f(x)=2\\sin(x+\\frac{\\pi}{3})$\n(5) $f(x)=2\\sin(x-\\frac{\\pi}{3})$',
    answer: '(1)(3)(5)',
    hasImage: true,
  },
  {
    id: '17c58b1eadd',
    chapter: '三角函數A',
    question:
      '將函數 $f(x)=\\cos x$ 的圖形水平伸縮 $\\frac{1}{2}$ 倍，再向左平移 $\\frac{\\pi}{2}$ 單位，得到函數 $g(x)$，則：\n(1) $g(x)=\\cos(2x+\\frac{\\pi}{2})$ (2) $g(x)=\\cos2(x+\\frac{\\pi}{2})$ (3) $g(x)=\\sin2x$\n(4) $g(x)=-\\cos2x$ (5) 將 $g(x)$ 水平伸縮 $2$ 倍，再向右移 $\\pi$ 可得 $f(x)$',
    answer: '(2)(4)(5)',
    hasImage: false,
  },
  {
    id: '17c58b3fade',
    chapter: '三角函數A',
    question:
      '若 $\\pi\\le\\theta\\le2\\pi$，$\\cos\\theta=\\frac{3}{5}$，下列哪些正確？\n(1) $\\sin\\theta=-\\frac{4}{5}$ (2) $\\cos2\\theta=-\\frac{7}{25}$ (3) $\\cos\\frac{\\theta}{2}=\\sqrt{\\frac{4}{5}}$ (4) $\\sin2\\theta=-\\frac{24}{25}$ (5) $\\sin(\\theta+\\pi)=-\\frac{4}{5}$',
    answer: '(1)(2)(4)',
    hasImage: false,
  },
  {
    id: '17c58b8a8f2',
    chapter: '三角函數A',
    question: '時鐘在 $5$ 點 $40$ 分時，時針與分針所夾的較小的夾角為多少弳？',
    answer: '$\\frac{7}{18}\\pi$',
    hasImage: false,
  },
  {
    id: '17c58ba07b3',
    chapter: '三角函數A',
    question: '若一角的弧度為 $30$，則其最小的正同界角的弧度為多少弳？',
    answer: '$30-8\\pi$',
    hasImage: false,
  },
  {
    id: '17c58bc2c84',
    chapter: '三角函數A',
    question:
      '設 $\\sin\\theta=\\frac{4}{5}$，且 $\\theta$ 為第二象限角，試求 $\\sin(\\frac{\\pi}{2}-\\theta)+\\sin(\\pi-\\theta)$ 之值。',
    answer: '$\\frac{1}{5}$',
    hasImage: false,
  },
  {
    id: '17c58bd78c5',
    chapter: '三角函數A',
    question: '周長恆為定值 $6$ 的所有扇形中，最大的扇形面積為？',
    answer: '$\\frac{9}{4}$',
    hasImage: false,
  },
  {
    id: '17c58bf552c',
    chapter: '三角函數A',
    question: '已知 $0\\le x\\le\\pi$，$\\cos2x<\\cos x$，求解 $x$ 的範圍。',
    answer: '$0<x<\\frac{2}{3}\\pi$',
    hasImage: false,
  },
  {
    id: '17c58c1a160',
    chapter: '三角函數A',
    question: '平面上兩直線 $L_1:x-2y=3$ 與 $L_2:x+2y=1$ 的夾角為 $\\theta$，求 $\\sin\\theta$。',
    answer: '$\\frac{4}{5}$',
    hasImage: false,
  },
  {
    id: '17c58c28118',
    chapter: '三角函數A',
    question: '如圖，圓心角為 $60\\du$、半徑為 $6$ 的扇形，求其內切圓的面積。',
    answer: '$4\\pi$',
    hasImage: true,
  },
  {
    id: '17c58c34ebf',
    chapter: '三角函數A',
    question:
      '設 $-2\\pi\\le x\\le2\\pi$，則直線 $x+y=0$ 與函數 $y=\\tan x$ 之圖形，共有幾個交點？',
    answer: '$5$',
    hasImage: false,
  },
  {
    id: '17c58c480cc',
    chapter: '三角函數A',
    question:
      '$\\triangle ABC$ 的三內角為 $A$、$B$、$C$，已知 $\\sin A=\\frac{5}{13}$，$\\cos B=-\\frac{4}{5}$，求 $\\cos C$。',
    answer: '$\\frac{63}{65}$',
    hasImage: false,
  },
  {
    id: '17c58c56725',
    chapter: '三角函數A',
    question:
      '求 $\\sin(26\\du-\\theta)\\cos(34\\du+\\theta)+\\cos(26\\du-\\theta)\\sin(34\\du+\\theta)$。',
    answer: '$\\frac{\\sqrt{3}}{2}$',
    hasImage: false,
  },
  {
    id: '17c58c87db7',
    chapter: '三角函數A',
    question: '方程式 $5\\sin x-5\\sqrt{3}\\cos x=5$，其解 $x$ 有無限多組，求最小正數 $x$。',
    answer: '$\\frac{\\pi}{2}$',
    hasImage: false,
  },
  {
    id: '17c58c9c698',
    chapter: '三角函數A',
    question: '若 $f(x)=\\sin^2x+2\\sin x\\cos x+3\\cos^2 x$，求 $f(x)$ 的最大值。',
    answer: '$2+\\sqrt{2}$',
    hasImage: false,
  },
  {
    id: '17c58cceeb3',
    chapter: '三角函數A',
    question:
      '如圖，直圓錐底圓的直徑 $\\overline{BC}=4$，且 $\\overline{AB}=12$，有一隻螞蟻在這個直圓錐的表面走動散步，回答下列問題：\n(1) 若由 $C$ 點沿錐面繞一圈回到 $C$ 點，求這隻螞蟻所走的最短路徑長。\n(2) 若由 $C$ 點沿錐面繞一圈來到 $D$ 點，已知 $\\overline{AD}=3$，求這隻螞蟻所走的最短路徑長。',
    answer: '(1) $12$ (2) $3\\sqrt{13}$',
    hasImage: true,
  },
  {
    id: '17c22cf53ad',
    chapter: '三角函數A',
    question:
      '考慮函數 $f(x)=2\\sin3x$，試問下列選項哪些為真？\n(1) $-2\\leq f(x)\\leq2$\n(2) $f(x)$ 在 $x=\\frac{\\pi}{6}$ 時有最大值\n(3) $f(x)$ 的週期為 $\\frac{2\\pi}{3}$\n(4) $y=f(x)$ 的圖形對稱於直線 $x=\\frac{\\pi}{2}$\n(5) $f(2)>0$',
    answer: '(1)(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '17c22c2b0d2',
    chapter: '三角函數A',
    question:
      '試問在 $0\\leq x\\leq2\\pi$ 的範圍中，$y=3\\sin x$ 的函數圖形與 $y=2\\sin2x$ 的函數圖形有幾個交點？',
    answer: '$5$ 個',
    hasImage: false,
  },
  {
    id: '17c22be7e9a',
    chapter: '三角函數A',
    question:
      '在 $-4\\pi\\leq x\\leq6\\pi$ 的範圍中，方程式 $\\cos x=\\frac{2}{3}$，所有解之和為？',
    answer: '$10\\pi$',
    hasImage: false,
  },
  {
    id: '17c22d0d124',
    chapter: '三角函數A',
    question:
      '設 $\\alpha$、$\\beta$、$\\gamma$ 為方程式 $\\sin x=0.65$ 的最小三個正根，且 $\\alpha<\\beta<\\gamma$，試問下列哪些選項為真？\n(1) $ \\alpha>\\frac{\\pi}{4}$ (2) $ \\beta>\\frac{3\\pi}{4}$ (3) $\\gamma>\\frac{5\\pi}{2}$\n(4) $\\alpha+\\beta=\\pi$ (5) $\\alpha+2\\beta+\\gamma=5\\pi$',
    answer: '(2)(4)',
    hasImage: false,
  },
  {
    id: '17c2a8071e6',
    chapter: '三角函數A',
    question:
      '$x\\in\\mathbb{R}$，請將函數 $y=\\sin x-\\sqrt{3}\\cos x$ 縮成單項式，並求 $y$ 的最大值和最小值。',
    answer: '$2\\sin(x-\\frac{\\pi}{3})$；$2$；$-2$',
    hasImage: false,
  },
  {
    id: '17c271426c8',
    chapter: '三角函數A',
    question: '$x\\in\\mathbb{R}$，求函數 $y=\\sin x+\\cos x$ 的週期與振幅。',
    answer: '$2\\pi$；$\\sqrt{2}$',
    hasImage: false,
  },
  {
    id: '17c271ceb25',
    chapter: '三角函數A',
    question:
      '若 $\\sqrt{3}\\sin888\\du-\\cos888\\du=2\\cos x\\du$ 且 $540\\du<x\\du<720\\du$，求 $x$。',
    answer: '$672$',
    hasImage: false,
  },
  {
    id: '17c2725e7b3',
    chapter: '三角函數A',
    question:
      '$x\\in\\mathbb{R}$，請將函數 $y=\\sqrt{3}\\sin x+\\cos x$ 縮成單項式，並求 $y$ 的最大值與最小值。',
    answer: '$2\\sin(x+\\frac{\\pi}{6})$；$2$；$-2$',
    hasImage: false,
  },
  {
    id: '17c2729d202',
    chapter: '三角函數A',
    question:
      '$x\\in\\mathbb{R}$，請將函數 $y=\\sin x-\\cos x$ 縮成單項式，並求 $y$ 的最大值與最小值。',
    answer: '$\\sqrt{2}\\sin(x-\\frac{\\pi}{4})$；$\\sqrt{2}$；$-\\sqrt{2}$',
    hasImage: false,
  },
  {
    id: '17c27317742',
    chapter: '三角函數A',
    question:
      '關於函數 $y=f(x)=\\frac{1}{2}(\\sin x+\\cos x)$ 的圖形，下列哪些敘述正確？\n(1) $y=f(x)$ 的週期為 $\\pi$\n(2) $y=f(x)$ 的振幅為 $\\sqrt{2}$\n(3) $y=f(x)$ 的圖形與 $y$ 軸的交點為 $(0,\\frac{1}{2})$\n(4) $y=f(x)$ 的圖形與 $x$ 軸有無限多個交點\n(5) $y=f(x)$ 的圖形對稱於原點',
    answer: '(3)(4)',
    hasImage: false,
  },
  {
    id: '17c273bd7e0',
    chapter: '三角函數A',
    question:
      '下列哪一個數值最接近 $\\sqrt{2}$？\n(1) $\\sqrt{3}\\cos44\\du+\\sin44\\du$\n(2) $\\sqrt{3}\\cos54\\du+\\sin54\\du$\n(3) $\\sqrt{3}\\cos64\\du+\\sin64\\du$\n(4) $\\sqrt{3}\\cos74\\du+\\sin74\\du$\n(5) $\\sqrt{3}\\cos84\\du+\\sin84\\du$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17c2bc1c775',
    chapter: '三角函數A',
    question:
      '扇形 $OAB$ 的半徑為 $1$，中心角為 $60\\du$，$P$ 點在弧 $\\arc{AB}$ 上，投影到 $\\overline{OA}$、$\\overline{OB}$ 依序為 $H$、$K$，如圖所示。試求 $3\\overline{PH}+2\\overline{PK}$ 的最大值。',
    answer: '$\\sqrt{7}$',
    hasImage: true,
  },
  {
    id: '17c18c4acc9',
    chapter: '三角函數A',
    question:
      '已知 $90\\du<\\theta<180\\du$，且 $\\cos\\theta=-\\frac{1}{3}$，求 $\\sin2\\theta$ 及 $\\sin\\frac{\\theta}{2}$。',
    answer: '$-\\frac{4\\sqrt{2}}{9}$；$\\frac{\\sqrt{6}}{3}$',
    hasImage: false,
  },
  {
    id: '17c18c64c77',
    chapter: '三角函數A',
    question: '已知 $\\sin\\theta=\\frac{3}{5}$，求 $\\sin2\\theta$ 及 $\\cos2\\theta$。',
    answer: '$\\pm\\frac{24}{25}$；$\\frac{7}{25}$',
    hasImage: false,
  },
  {
    id: '17c18c76a1f',
    chapter: '三角函數A',
    question:
      '若 $\\sin\\theta+\\cos\\theta=\\frac{2}{3}$，求 $\\sin2\\theta$ 及 $\\cos4\\theta$。',
    answer: '$-\\frac{5}{9}$；$\\frac{31}{81}$',
    hasImage: false,
  },
  {
    id: '17c18c86f2a',
    chapter: '三角函數A',
    question:
      '若 $\\sin2\\theta=-\\frac{3}{4}$，且 $\\sin\\theta<0$，求 $\\sin\\theta-\\cos\\theta$。',
    answer: '$-\\frac{\\sqrt{7}}{2}$',
    hasImage: false,
  },
  {
    id: '17c18ca2368',
    chapter: '三角函數A',
    question:
      '$\\triangle ABC$，$\\overline{AB}=6$，$\\overline{AC}=8$，$\\angle B=2\\angle C$，求 $\\cos B$ 及外接圓半徑。',
    answer: '$-\\frac{1}{9}$；$\\frac{9\\sqrt{5}}{5}$',
    hasImage: false,
  },
  {
    id: '17c18cb4eca',
    chapter: '三角函數A',
    question:
      '設 $\\theta$ 為有向角，$\\sin\\theta=\\frac{3}{5}$，求 $\\sin3\\theta$ 及 $\\cos3\\theta$。',
    answer: '$\\frac{117}{125}$；$\\pm\\frac{44}{125}$',
    hasImage: false,
  },
  {
    id: '17c18cc6012',
    chapter: '三角函數A',
    question: '若 $\\sin x-\\cos x=\\frac{1}{3}$，求 $\\sin3x+\\cos3x$。',
    answer: '$-\\frac{25}{27}$',
    hasImage: false,
  },
  {
    id: '17c18cf26e3',
    chapter: '三角函數A',
    question:
      '求下列各函數之週期：\n(1) $y=|\\sin x|$\n(2) $y=\\cos2x-1$\n(3) $y=2\\cos(5x+\\sqrt{2})-1$\n(4) $y=\\sin(-\\pi x+\\frac{\\pi}{4})$',
    answer: '(1) $\\pi$ (2) $\\pi$ (3) $\\frac{2\\pi}{5}$ (4) $2$',
    hasImage: false,
  },
  {
    id: '17c18d3ad1b',
    chapter: '三角函數A',
    question: '求函數 $y=\\sin\\frac{2x}{15}+\\cos\\frac{x}{5}$ 的週期。',
    answer: '$30\\pi$',
    hasImage: false,
  },
  {
    id: '17c18d4b33d',
    chapter: '三角函數A',
    question: '$0\\le x\\le4\\pi$ 中，$y=\\sin2x$ 與 $y=\\cos x$ 的圖形有幾個交點？',
    answer: '$8$',
    hasImage: false,
  },
  {
    id: '17c18d5e564',
    chapter: '三角函數A',
    question: '方程式 $x=\\cos\\pi x$ 有幾個實根？',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '17c18d686ef',
    chapter: '三角函數A',
    question: '方程式 $x-15\\sin x=0$ 有幾個實根？',
    answer: '$11$',
    hasImage: false,
  },
  {
    id: '17be1e6cd7e',
    chapter: '三角函數A',
    question:
      '試求下列各值：\n(1) $\\cos29\\du\\cos31\\du-\\sin29\\du\\sin31\\du$\n(2) $\\sin72\\du\\cos42\\du-\\cos72\\du\\sin42\\du$',
    answer: '(1) $\\frac{1}{2}$ (2) $\\frac{1}{2}$',
    hasImage: false,
  },
  {
    id: '17be1e830c3',
    chapter: '三角函數A',
    question: '利用合角公式求 (1) $\\sin105\\du$ (2) $\\tan105\\du$',
    answer: '(1) $\\frac{\\sqrt{6}+\\sqrt{2}}{4}$ (2) $2+\\sqrt{3}$',
    hasImage: false,
  },
  {
    id: '17be1e96972',
    chapter: '三角函數A',
    question:
      '如圖，$\\angle ABC=90\\du$，$\\overline{AB}=\\overline{BC}=3$，$\\overline{CD}=1$，試求 $\\sin\\angle CAD$。',
    answer: '$\\frac{\\sqrt{10}}{2}$',
    hasImage: true,
  },
  {
    id: '17be1f1093e',
    chapter: '三角函數A',
    question: '若 $\\sin\\theta+\\cos\\theta=\\frac{1}{3}$，試求 $\\sin2\\theta$。',
    answer: '$-\\frac{8}{9}$',
    hasImage: false,
  },
  {
    id: '17be1f27991',
    chapter: '三角函數A',
    question:
      '設 $180\\du<\\theta<270\\du$，且 $\\sin\\theta=-\\frac{3}{5}$，試求： (1) $\\cos2\\theta$ (2) $\\cos\\frac{\\theta}{2}$',
    answer: '(1) $\\frac{7}{25}$ (2) $-\\frac{\\sqrt{10}}{10}$',
    hasImage: false,
  },
  {
    id: '17be1f3add9',
    chapter: '三角函數A',
    question: '三個邊長為 $1$ 的正方形相連而成如圖，試求 $\\tan\\angle BAC$。',
    answer: '$\\frac{1}{2}$',
    hasImage: true,
  },
  {
    id: '17be1f8ba40',
    chapter: '三角函數A',
    question:
      '$\\triangle ABC$ 為邊長為 $5$ 的正三角形，$P$ 點在三角形內部，若線段長度 $\\overline{PB}=4$ 且 $\\overline{PC}=3$，求 $\\cos\\angle ABP$。(四捨五入到小數點後第二位，可按計算機)',
    answer: '$0.92$',
    hasImage: false,
  },
  {
    id: '17be1fa8d51',
    chapter: '三角函數A',
    question: '設兩直線 $x-2y+3=0$ 與 $3x+y-1=0$ 的夾角為 $\\theta$，求 $\\tan\\theta$。',
    answer: '$\\pm7$',
    hasImage: false,
  },
  {
    id: '17be1fbe538',
    chapter: '三角函數A',
    question: '求過點 $(\\sqrt{3},2)$ 與直線 $x-\\sqrt{3}y+1=0$ 之夾角為 $30\\du$ 的直線方程式。',
    answer: '$y=2$ 或 $\\sqrt{3}x-y=1$',
    hasImage: false,
  },
  {
    id: '17be1fe3c19',
    chapter: '三角函數A',
    question:
      '設 $\\frac{\\pi}{2}<\\alpha<\\pi$，$\\pi<\\beta<\\frac{3\\pi}{2}$，且 $\\sin\\alpha=\\frac{3}{5}$，$\\cos\\beta=\\frac{-12}{13}$，求：\n(1) $\\sin(\\alpha-\\beta)$ (2) $\\cos(\\alpha-\\beta)$\n(3) $\\alpha-\\beta$ 為第幾象限角',
    answer: '(1) $\\frac{-56}{65}$ (2) $\\frac{33}{65}$ (3) 四',
    hasImage: false,
  },
  {
    id: '17be1ffabf9',
    chapter: '三角函數A',
    question:
      '設 $\\tan\\alpha=1$，$\\tan(\\alpha-\\beta)=\\frac{1}{\\sqrt{3}}$，試求 $\\tan\\beta$。',
    answer: '$2-\\sqrt{3}$',
    hasImage: false,
  },
  {
    id: '17be2084399',
    chapter: '三角函數A',
    question:
      '在 $\\triangle ABC$ 中，已知 $\\cos\\angle ABC=\\frac{-3}{5}$，$\\sin\\angle ACB=\\frac{5}{13}$，求 $\\sin\\angle BAC$。',
    answer: '$\\frac{33}{65}$',
    hasImage: false,
  },
  {
    id: '17bb6983b8a',
    chapter: '三角函數A',
    question: '試將角度換成弧度 (1) $22.5\\du$ (2) $-105\\du$',
    answer: '(1) $\\frac{\\pi}{8}$ (2) $-\\frac{7\\pi}{12}$',
    hasImage: false,
  },
  {
    id: '17bb69b3d37',
    chapter: '三角函數A',
    question:
      '設 $\\theta$ 與 $-55$ 弳為同界角，且 $0\\le\\theta<2\\pi$，求 $\\theta$。(以弧度表示)',
    answer: '$-55+18\\pi$',
    hasImage: false,
  },
  {
    id: '17bb69e8863',
    chapter: '三角函數A',
    question: '若三角形的三內角度數比為 $5:6:7$，則此三角形最大內角是多少弧度？',
    answer: '$\\frac{7\\pi}{18}$',
    hasImage: false,
  },
  {
    id: '17bb69f7456',
    chapter: '三角函數A',
    question: '時鐘的長針為 $10$ 公分，求從上午 $9:40$ 到 $10:15$，長針掃過的面積。',
    answer: '$\\frac{175\\pi}{3}$ 平方公分',
    hasImage: false,
  },
  {
    id: '17bb6a17a5c',
    chapter: '三角函數A',
    question: '設一扇形之半徑為 $2$，面積為 $5$，求此扇形圓心角。(以弧度表示)',
    answer: '$\\frac{5}{2}$',
    hasImage: false,
  },
  {
    id: '17bb6b575bd',
    chapter: '三角函數A',
    question:
      '有一個圓，半徑是 $10$ 公分，圓心角為 $\\frac{\\pi}{6}$，則此圓心所對的弧長為 $a$ 公分，求 $a$。',
    answer: '$\\frac{5\\pi}{3}$',
    hasImage: false,
  },
  {
    id: '17bb6b66f2b',
    chapter: '三角函數A',
    question: '設一扇形的周長為 $20$，當此扇形面積為最大時，求：(1) 圓心角 (2) 半徑 (3) 面積最大值',
    answer: '(1) $2$ (2) $5$ (3) $25$',
    hasImage: false,
  },
  {
    id: '17bb6b7e055',
    chapter: '三角函數A',
    question: '已知扇形的面積為 $1$，弧長為 $2$，求其圓心角的弧度。',
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '17bb6b95c94',
    chapter: '三角函數A',
    question:
      '如圖，點 $A$ 與點 $B$ 為兩圓之圓心，若圓 $A$ 之半徑為 $1$ 公分，$\\angle CAD=120\\du$，$\\angle CBD=60\\du$，求鋪色區域之面積。',
    answer: '$\\frac{5\\pi}{6}-\\sqrt{3}$',
    hasImage: true,
  },
  {
    id: '17bb6bf8add',
    chapter: '三角函數A',
    question:
      '如圖，圓之半徑為 $8$ 公分，弦 $AB$ 之圓心角為 $70.5\\du$，試求此弦所對應的弓形（鋪色區）的面積。(四捨五入取到小數點第一位，可按計算機)',
    answer: '$9.2$',
    hasImage: true,
  },
  {
    id: '17bb6c076d2',
    chapter: '三角函數A',
    question: '如圖，設半徑為 $1$ 的三個圓互相外切，求此三個圓間所圍鋪色區域的面積及周長。',
    answer: '$\\sqrt{3}-\\frac{\\pi}{2}$；$\\pi$',
    hasImage: true,
  },
  {
    id: '17bb6c23940',
    chapter: '三角函數A',
    question:
      "設地球是一個半徑 $6400$ 公里的球體，在地球赤道的大圓上規定圓心角為 $1'$ ($1\\du=60'$) 時所對的赤道弧長為 $1$ 浬，則 $1$ 浬約為多少公里？(取至小數以下第三位，可按計算機)",
    answer: '$1.862$',
    hasImage: false,
  },
  {
    id: '17ba25059e3',
    chapter: '三角函數A',
    question:
      "將角度換成弧度：(1) $150\\du$ (2) $18\\du24'$\n將弧度換成角度：(3) $\\dfrac{7\\pi}{6}$ 弳 (4) 3 弳",
    answer:
      '(1) $\\frac{5\\pi}{6}$ (2) $\\frac{23\\pi}{225}$ (3) $210\\du$ (4) $\\left(\\frac{540}{\\pi}\\right)\\du$',
    hasImage: false,
  },
  {
    id: '17ba253c681',
    chapter: '三角函數A',
    question:
      '將角度換成弧度：(1) $24\\du$ (2) $160\\du$\n將弧度換成角度：(3) $\\dfrac{7\\pi}{5}$ 弳 (4) 10 弳',
    answer:
      '(1) $\\frac{2\\pi}{15}$ (2) $\\frac{8\\pi}{9}$ (3) $252\\du$ (4) $\\left(\\frac{1800}{\\pi}\\right)\\du$',
    hasImage: false,
  },
  {
    id: '17ba2551cf6',
    chapter: '三角函數A',
    question:
      '半徑 5 公尺的輪子在地面上滾動了 30 公尺，則這個輪子共繞軸轉動了多少弧度？換算成角度約為 $m\\du$，求 $m$。',
    answer: '6; 344',
    hasImage: false,
  },
  {
    id: '17ba2577fd6',
    chapter: '三角函數A',
    question:
      '設一質點 $P$ 在以原點 $O$ 為圓心之圓 $C$ 上一點 $A(-3,3\\sqrt{3})$ 出發，以逆時針且角速度為每秒 $\\dfrac{\\pi}{6}$ 弳繞圓 $C$ 運行，試求 10 秒後質點 $P$ 的坐標。',
    answer: '$(3,3\\sqrt{3})$',
    hasImage: false,
  },
  {
    id: '17ba25a9419',
    chapter: '三角函數A',
    question:
      '如圖，長方形的長為 2、寬為 1，取左下方的頂點為圓心，分別以 1 與 2 為半徑作圓弧，求所圍陰影部分的周長及面積。',
    answer: '$1+\\sqrt{3}+\\frac{5\\pi}{6}$; $\\frac{\\sqrt{3}}{2}+\\frac{\\pi}{12}$',
    hasImage: true,
  },
  {
    id: '17ba25c5bbe',
    chapter: '三角函數A',
    question:
      '如圖，扇形 $ABC$ 的中心角為 $45\\du$，半徑為 10，內接一個正方形 $PQRS$，求邊長 $\\overline{PQ}$ 及陰影面積。',
    answer: '$2\\sqrt{5}$; $\\frac{25\\pi}{2}-20$',
    hasImage: true,
  },
  {
    id: '17ba25eb0d0',
    chapter: '三角函數A',
    question:
      '所有面積為 3 平方單位的扇形中，求周長的最小值，並求此時扇形的中心角 (以弳表示) 及半徑。',
    answer: '$4\\sqrt{3}$; 2; $\\sqrt{3}$',
    hasImage: false,
  },
  {
    id: '17ba25fd195',
    chapter: '三角函數A',
    question: '所有周長為 20 的扇形中，求面積的最大值，並求此時扇形的半徑。',
    answer: '25; 5',
    hasImage: false,
  },
  {
    id: '17ba260ecdd',
    chapter: '三角函數A',
    question: '化簡 $\\sin\\dfrac{2\\pi}3\\times\\cos\\dfrac{7\\pi}6\\times\\tan\\dfrac{3\\pi}4$。',
    answer: '$\\frac34$',
    hasImage: false,
  },
  {
    id: '17ba261e9d7',
    chapter: '三角函數A',
    question: '化簡 $\\sin\\dfrac{\\pi}6+\\cos\\dfrac{2\\pi}3+\\tan\\dfrac{3\\pi}4$。',
    answer: '-1',
    hasImage: false,
  },
  {
    id: '17ba263e2f0',
    chapter: '三角函數A',
    question:
      '邊長為 3、4、5 的直角三角形，設 $\\theta$ 為 3 的對角，求餘切值 $\\cot\\theta$、正割值 $\\sec\\theta$、餘割值 $\\csc\\theta$。',
    answer: '$\\frac{4}{3}$；$\\frac{5}{4}$；$\\frac{5}{3}$',
    hasImage: false,
  },
  {
    id: '17ba266c61e',
    chapter: '三角函數A',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=5$，$\\overline{AC}=2$，$\\angle C=90\\du$，求 $\\cot A$、$\\sec A$、$\\csc A$、$\\cot B$、$\\sec B$、$\\csc B$。',
    answer:
      '$\\frac{2}{\\sqrt{21}}$；$\\frac{5}{2}$；$\\frac{5}{\\sqrt{21}}$；$\\frac{\\sqrt{21}}{2}$；$\\frac{5}{\\sqrt{21}}$；$\\frac{5}{2}$',
    hasImage: false,
  },
  {
    id: '17ba268d707',
    chapter: '三角函數A',
    question:
      '若 $\\dfrac{2\\sec\\theta-3\\csc\\theta}{5\\sec\\theta+\\csc\\theta}=\\dfrac{5}{3}$，求 $\\cot\\theta$。',
    answer: '$\\frac{-19}{14}$',
    hasImage: false,
  },
  {
    id: '17ba26a80e7',
    chapter: '三角函數A',
    question:
      '已知 $\\cot\\theta=-\\dfrac{5}{3}$，求 $\\dfrac{3\\csc\\theta+2\\sec\\theta}{4\\csc\\theta-\\sec\\theta}$。',
    answer: '$\\frac{9}{23}$',
    hasImage: false,
  },
  {
    id: '17ba297a6a2',
    chapter: '三角函數A',
    question: '求 $\\sin15\\du$。',
    answer: '$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$',
    hasImage: false,
  },
  {
    id: '17ba29a6829',
    chapter: '三角函數A',
    question: '求 $\\cos105\\du$、$\\sin255\\du$。',
    answer: '$\\frac{\\sqrt{6}-\\sqrt{2}}{-4}$；$\\frac{\\sqrt{6}+\\sqrt{2}}{-4}$',
    hasImage: false,
  },
  {
    id: '17ba29be2e8',
    chapter: '三角函數A',
    question:
      '已知 $\\sin A=\\dfrac{3}{5}$，$\\sin B=-\\dfrac{12}{13}$，且 $A$ 在第二象限，$B$ 在第四象限，求 $\\cos(A-B)$。',
    answer: '$\\frac{-56}{65}$',
    hasImage: false,
  },
  {
    id: '17ba29e4a1c',
    chapter: '三角函數A',
    question:
      '已知 $\\sin A=-\\dfrac{3}{5}$，$\\sin B=-\\dfrac{12}{13}$，且 $A$ 在第三象限，$B$ 在第四象限，求：\n(1) $\\sin(A-B)$　　　(2) $\\cos(A-B)$',
    answer: '(1) $\\frac{-63}{65}$ (2) $\\frac{16}{65}$',
    hasImage: false,
  },
  {
    id: '17ba29f4deb',
    chapter: '三角函數A',
    question: '求 $\\tan105\\du$。',
    answer: '$-2-\\sqrt{3}$',
    hasImage: false,
  },
  {
    id: '17ba29fd591',
    chapter: '三角函數A',
    question: '求 $\\tan345\\du$。',
    answer: '$-2+\\sqrt{3}$',
    hasImage: false,
  },
  {
    id: '17ba2a0d65c',
    chapter: '三角函數A',
    question: '將九個大小相同的正方形排成 $3\\times3$ 的大正方形，如圖，求 $\\tan\\angle AOB$。',
    answer: '5',
    hasImage: true,
  },
  {
    id: '17ba2a24315',
    chapter: '三角函數A',
    question: '方格紙中有 $O$、$A$、$B$ 三個格線交叉點，如圖，試求 $\\tan\\angle AOB$。',
    answer: '$-\\frac{22}{7}$',
    hasImage: true,
  },
  {
    id: '17ba2a41517',
    chapter: '三角函數A',
    question:
      '$\\triangle ABC$ 中，已知 $\\cos A=\\dfrac{4}{5}$，$\\cos B=-\\dfrac{7}{25}$，令 $a=\\overline{BC}$，$b=\\overline{AC}$，$c=\\overline{AB}$，求邊長比 $a:b:c$。',
    answer: '5:8:5',
    hasImage: false,
  },
  {
    id: '17ba2a694dc',
    chapter: '三角函數A',
    question:
      '$\\triangle ABC$，已知 $\\cos A=\\dfrac{3}{5}$，$\\cos B=\\dfrac{12}{13}$，令 $\\overline{AB}=c$，$\\overline{BC}=a$，$\\overline{AC}=b$，求 $\\cos C$ 及邊長比 $a:b:c$。',
    answer: '$-\\frac{16}{65}$；$52:25:63$',
    hasImage: false,
  },
  {
    id: '17ba2a8ddea',
    chapter: '三角函數A',
    question:
      '平面上兩直線 $L_1:3x-2y=1$ 與 $L_2:x+4y=5$，請問：\n(1) $L_1$ 與 $L_2$ 的銳夾角正切值為？\n(2) 過點 $P(1,6)$ 且與 $L_1$ 的夾角為 $45\\du$ 的直線 $L$ 共有兩條，求其方程式。',
    answer: '$\\frac{14}{5}$；$5x+y=11$ 或 $x-5y=-29$',
    hasImage: false,
  },
  {
    id: '17ba2aba994',
    chapter: '三角函數A',
    question:
      '平面上兩直線 $L_1:2x+5y=3$ 與 $L_2:4x+3y=7$ 的夾角為 $\\theta$，求 $\\tan\\theta$ 及與 $L_1$ 夾 $45\\du$ 且通過點 $(1,2)$ 的直線 $L$ 方程式。',
    answer: '$\\pm\\frac{14}{23}$；$3x-7y=-11$ 或 $7x+3y=13$',
    hasImage: false,
  },
  {
    id: '17ba2adf49e',
    chapter: '三角函數A',
    question:
      '若 $\\cos\\theta=\\dfrac{4}{5}$，$\\dfrac{3\\pi}{2}<\\theta<2\\pi$，求 $\\sin2\\theta$、$\\cos2\\theta$、$\\sin\\dfrac{\\theta}{2}$、$\\cos\\dfrac{\\theta}{2}$。',
    answer:
      '$\\frac{-24}{25}$；$\\frac{7}{25}$；$\\frac{\\sqrt{10}}{10}$；$\\frac{3\\sqrt{10}}{-10}$',
    hasImage: false,
  },
  {
    id: '17ba2b4b4fa',
    chapter: '三角函數A',
    question:
      '已知 $\\sin\\theta=\\dfrac{2}{3}$，$\\dfrac{\\pi}{2}<\\theta<\\pi$，求 $\\sin2\\theta$、$\\cos2\\theta$、$\\sin\\dfrac{\\theta}{2}$、$\\cos\\dfrac{\\theta}{2}$。',
    answer:
      '$\\frac{4\\sqrt{5}}{-9}$；$\\frac{1}{9}$；$\\frac{\\sqrt{15}-\\sqrt{3}}{6}$；$\\frac{\\sqrt{15}+\\sqrt{3}}{6}$',
    hasImage: false,
  },
  {
    id: '17ba2b6dfb6',
    chapter: '三角函數A',
    question:
      '已知有向角 $\\theta$ 滿足 $\\left|\\cos\\theta\\right|=\\dfrac{1}{3}$，求 $\\cos2\\theta$、$\\cos4\\theta$。',
    answer: '$-\\frac{7}{9}$；$\\frac{17}{81}$',
    hasImage: false,
  },
  {
    id: '17ba2b7d49a',
    chapter: '三角函數A',
    question:
      '設有向角 $\\theta$ 滿足 $\\left|\\sin\\theta\\right|=\\dfrac{2}{3}$，求 $\\cos2\\theta$、$\\cos4\\theta$。',
    answer: '$\\frac{1}{9}$；$-\\frac{79}{81}$',
    hasImage: false,
  },
  {
    id: '17ba2b99f07',
    chapter: '三角函數A',
    question:
      '已知 $\\sin\\theta+\\cos\\theta=\\dfrac{1}{3}$，求：\n(1) $\\sin2\\theta$　　　(2) $\\sin^4\\theta+\\cos^4\\theta$',
    answer: '(1) $-\\frac{8}{9}$ (2) $\\frac{49}{81}$',
    hasImage: false,
  },
  {
    id: '17ba2bcfe38',
    chapter: '三角函數A',
    question:
      '若 $\\sin\\theta+\\cos\\theta=\\dfrac{1}{5}$，$90\\du<\\theta<180\\du$，求：(1) $\\sin2\\theta$　　　(2) $\\sin\\theta$　　(3) $\\sin\\dfrac{\\theta}{2}$',
    answer: '(1) $-\\frac{24}{25}$ (2) $\\frac{4}{5}$ (3) $\\frac{2\\sqrt{5}}{5}$',
    hasImage: false,
  },
  {
    id: '17ba2c01e3b',
    chapter: '三角函數A',
    question:
      '若有向角 $\\theta$ 以 $x$ 軸正向為始邊，終邊通過點 (3, -2)，求 (1) $\\tan2\\theta$　　(2) $\\tan\\dfrac{\\theta}{2}$',
    answer: '(1) $-\\frac{12}{5}$ (2) $\\frac{3-\\sqrt{13}}{2}$',
    hasImage: false,
  },
  {
    id: '17ba2c43223',
    chapter: '三角函數A',
    question:
      '若 $\\tan\\theta=3$，求：\n(1) $\\tan2\\theta$　　(2) $\\tan4\\theta$　　(3) $\\tan\\dfrac{\\theta}{2}$',
    answer: '(1) $-\\frac{3}{4}$ (2) $\\frac{24}{-7}$ (3) $\\frac{\\sqrt{10}-1}{3}$',
    hasImage: false,
  },
  {
    id: '17ba2c65081',
    chapter: '三角函數A',
    question:
      '直角 $\\triangle ABC$，如圖，$D$ 在 $\\overline{BC}$ 上且 $\\overline{AD}$ 為 $\\angle BAC$ 的角平分線，已知 $\\overline{AB}=3$，$\\overline{BD}=2$，求 $\\overline{AC}$。',
    answer: '$\\frac{39}{5}$',
    hasImage: true,
  },
  {
    id: '17ba2c789ce',
    chapter: '三角函數A',
    question:
      '圖是由三個直角三角形堆疊而成的圖形，且 $\\overline{OD}=8$。求直角三角形 $OAB$ 的高。',
    answer: '$\\sqrt{3}$',
    hasImage: true,
  },
  {
    id: '17ba2c90c78',
    chapter: '三角函數A',
    question:
      '若 $\\cos\\theta=\\dfrac{4}{5}$，$270\\du<\\theta<360\\du$，求：\n(1) $\\sin3\\theta$　　　(2) $\\cos3\\theta$',
    answer: '(1) $-\\frac{117}{125}$ (2) $-\\frac{44}{125}$',
    hasImage: false,
  },
  {
    id: '17ba2ca2142',
    chapter: '三角函數A',
    question:
      '若 $\\sin\\theta=\\dfrac{3}{5}$，$90\\du<\\theta<180\\du$，求：\n(1) $\\sin3\\theta$　　　(2) $\\cos3\\theta$',
    answer: '(1) $\\frac{117}{125}$ (2) $\\frac{44}{125}$',
    hasImage: false,
  },
  {
    id: '17ba2cb3385',
    chapter: '三角函數A',
    question: '若 $\\sin\\theta-\\cos\\theta=\\dfrac{1}{2}$，求 $\\sin3\\theta+\\cos3\\theta$。',
    answer: '$-\\frac{5}{4}$',
    hasImage: false,
  },
  {
    id: '17ba2ccc9d6',
    chapter: '三角函數A',
    question:
      '下列各選項，哪些為方程式 $8x^3-6x+1=0$ 的根？\n(1) $\\cos20\\du$　(2) $\\cos40\\du$　(3) $\\cos80\\du$\n(4) $\\cos140\\du$　(5) $\\cos160\\du$',
    answer: '(2)(3)(5)',
    hasImage: false,
  },
  {
    id: '17ba72f600a',
    chapter: '三角函數A',
    question: '作圖 (1) $y=2\\sin x$ (2) $y=\\cos2x$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17ba731bf10',
    chapter: '三角函數A',
    question: '作圖 (1) $y=\\sin x-1$ (2) $y=-2\\cos x$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17ba733d963',
    chapter: '三角函數A',
    question: '試求週期函數的週期：\n(1) $y=2\\cos(5x+3)-1$\n(2) $y=3\\tan2\\pi x$',
    answer: '(1) $\\frac{2\\pi}{5}$ (2) $\\frac{1}{2}$',
    hasImage: false,
  },
  {
    id: '17ba7378420',
    chapter: '三角函數A',
    question:
      '試求週期函數的週期：\n(1) $y=-4\\sin(-2x+1)-7$\n(2) $y=1-5\\cos(3\\pi x+\\sqrt{2})$\n(3) $y=2\\tan(3x-1)$',
    answer: '(1) $\\pi$ (2) $\\frac{2}{3}$ (3) $\\frac{\\pi}{3}$',
    hasImage: false,
  },
  {
    id: '17ba73c6d05',
    chapter: '三角函數A',
    question: '圖為 $y=a\\sin kx$ 圖形之一部份，$a,k\\in\\mathbb{R}$，且 $k>0$，求數對 $(a,k)$。',
    answer: '$(-2,\\frac{3}{2})$',
    hasImage: true,
  },
  {
    id: '17ba73e9e08',
    chapter: '三角函數A',
    question: '圖為 $y=r\\sin(kx)+m$ 的部分圖形，$r,k>0$，試求 $(r,k,m)$。',
    answer: '(2,2,2)',
    hasImage: true,
  },
  {
    id: '17ba745be0c',
    chapter: '三角函數A',
    question:
      '已知 $a,b>0$，$0<c<\\pi$，$f(x)=a\\cos(bx-c)$ 的部分圖形如圖所示，其中點 $P(5,4)$ 為最高點，而 $x=-4$、$x=2$ 與 $x=8$ 為圖中與 $x$ 軸相交的位置，求 $(a,b,c)$。',
    answer: '$(4,\\frac{\\pi}{6},\\frac{5\\pi}{6})$',
    hasImage: true,
  },
  {
    id: '17ba7485798',
    chapter: '三角函數A',
    question:
      '週期函數 $y=f(x)=a\\sin(bx+c)$ 的部分圖形如圖所示，已知 $a,b>0$，$0\\le c<2\\pi$，且 $P(3,2)$ 為最高點，圖形與 $x$ 軸的交點有 $x=1$ 與 $x=5$，求 $(a,b,c)$。',
    answer: '$(2,\\frac{\\pi}{4},\\frac{7\\pi}{4})$',
    hasImage: true,
  },
  {
    id: '17ba9706a31',
    chapter: '三角函數A',
    question: '作圖並求週期：$y=\\left|\\sin x\\right|$',
    answer: '圖略；$\\pi$',
    hasImage: false,
  },
  {
    id: '17ba9718fa4',
    chapter: '三角函數A',
    question: '求方程式 $10\\sin x=x$ 有幾個實根？',
    answer: '7',
    hasImage: false,
  },
  {
    id: '17ba974214a',
    chapter: '三角函數A',
    question:
      '設 $f(x)=2\\sin(2x+\\dfrac{\\pi}{3})$，$0\\le x\\le\\pi$，求解：(1) 方程式 $f(x)=\\sqrt{2}$\n(2) 不等式 $f(x)<-\\sqrt{3}$',
    answer:
      '(1) $\\frac{5\\pi}{24}$ 或 $\\frac{23\\pi}{24}$ (2) $\\frac{\\pi}{2}<x<\\frac{2\\pi}{3}$',
    hasImage: false,
  },
  {
    id: '17ba9770dbc',
    chapter: '三角函數A',
    question:
      '設 $f(x)=6\\sin(\\dfrac{\\pi x}{3}+\\dfrac{\\pi}{4})+5$，$0\\le x\\le6$，求解：(1) 方程式 $f(x)=2$\n(2) 不等式 $f(x)>8$',
    answer:
      '(1) $\\frac{11}{4}$ 或 $\\frac{19}{4}$ (2) $0\\le x<\\frac{7}{4}$ 或 $\\frac{23}{4}<x\\le6$',
    hasImage: false,
  },
  {
    id: '17ba9801b03',
    chapter: '三角函數A',
    question:
      '$x\\in\\mathbb{R}$，試求 $y=\\sin x-\\sqrt{3}\\cos x$ 的最大值、最小值、振幅、週期並畫出圖形。',
    answer: '$2$；$-2$；$2$；$2\\pi$',
    hasImage: false,
  },
  {
    id: '17ba9835d86',
    chapter: '三角函數A',
    question:
      '$x\\in\\mathbb{R}$，試求 $y=\\sin x-\\cos x$ 的最大值、最小值、振幅、週期並畫出圖形。。',
    answer: '$\\sqrt{2}$；$-\\sqrt{2}$；$\\sqrt{2}$；$2\\pi$',
    hasImage: false,
  },
  {
    id: '17ba989ddc3',
    chapter: '三角函數A',
    question:
      '$x\\in\\mathbb{R}$，$f(x)=\\sqrt{3}\\sin(x+\\dfrac{\\pi}{3})-3\\cos x$$=a\\sin(x+k)$，其中 $a>0$ 且 $0\\le k<2\\pi$，求 $(a,k)$ 並求 $f(x)$ 的最大值及最小值。',
    answer: '$(\\sqrt{3},\\frac{5\\pi}{3})$；$\\sqrt{3}$；$-\\sqrt{3}$',
    hasImage: false,
  },
  {
    id: '17ba98cd1ca',
    chapter: '三角函數A',
    question:
      '$x\\in\\mathbb{R}$，$f(x)=2\\sin(\\dfrac{\\pi}{6}-x)-2\\cos x$$=a\\sin(x+k)$，其中 $a>0$ 且 $0\\le k<2\\pi$，求 $(a,k)$ 並求 $f(x)$ 的最大值及最小值。',
    answer: '$(2,\\frac{5\\pi}{6})$；$2$；$-2$',
    hasImage: false,
  },
  {
    id: '17ba9e276f3',
    chapter: '三角函數A',
    question:
      '(1) $x\\in\\mathbb{R}$，求 $f(x)=4\\sin x+3\\cos x$ 的最大值及最小值\n(2) $0\\le x\\le2\\pi$，求 $8\\sin x-15\\cos x+3$ 的最大值及最小值',
    answer: '(1) $5$；$-5$ (2) $20$；$-14$',
    hasImage: false,
  },
  {
    id: '17ba9e4d42a',
    chapter: '三角函數A',
    question:
      '(1) $x\\in\\mathbb{R}$，$y=\\sqrt{7}\\sin x-\\sqrt{2}\\cos x+5$，求 $y$ 的範圍\n(2) $0\\le x\\le2\\pi$，求 $15\\sin x-8\\cos x+13$ 的最大值及最小值',
    answer: '(1) $2\\le y\\le8$ (2) $30$；$-4$',
    hasImage: false,
  },
  {
    id: '17ba9e804af',
    chapter: '三角函數A',
    question:
      '$y=5\\sin x-12\\cos x$，$0\\le x\\le2\\pi$，求：\n(1) 若 $x=\\alpha$ 時有最大值 $M$，求 $M$ 及數對 $(\\sin\\alpha,\\cos\\alpha)$。\n(2) 若 $x=\\beta$ 時有最小值 $m$，求 $m$ 及數對 $(\\sin\\beta,\\cos\\beta)$。',
    answer:
      '(1) $13$；$(\\frac{5}{13},\\frac{-12}{13})$ (2) $-13$；$(\\frac{-5}{13},\\frac{12}{13})$',
    hasImage: false,
  },
  {
    id: '17ba9e94d70',
    chapter: '三角函數A',
    question:
      '$y=3\\sin x+4\\cos x$，$0\\le x\\le2\\pi$，求：\n(1) 若 $x=\\alpha$ 時有最大值 $M$，求 $M$ 及數對 $(\\sin\\alpha,\\cos\\alpha)$。\n(2) 若 $x=\\beta$ 時有最小值 $m$，求 $m$ 及數對 $(\\sin\\beta,\\cos\\beta)$。',
    answer: '(1) $5$；$(\\frac{3}{5},\\frac{4}{5})$ (2) $-5$；$(\\frac{-3}{5},\\frac{-4}{5})$',
    hasImage: false,
  },
  {
    id: '17ba9ed75d6',
    chapter: '三角函數A',
    question:
      '已知 $\\dfrac{\\pi}{6}\\le\\theta\\le\\dfrac{2\\pi}{3}$，求：\n(1) $\\sin\\theta$ 的範圍\n(2) $y=4\\sin(\\theta-\\dfrac{\\pi}{3})+1$ 的最大值及最小值\n(3) $y=\\sqrt{3}\\sin2\\theta+5$ 的最大值及最小值',
    answer:
      '(1) $\\frac{1}{2}\\le\\sin\\theta\\le1$ (2)  $1$；$-1$ (3) $5+\\sqrt{3}$；$\\frac{7}{2}$',
    hasImage: false,
  },
  {
    id: '17ba9f3dfa7',
    chapter: '三角函數A',
    question:
      '已知 $\\dfrac{\\pi}{4}\\le\\theta\\le\\dfrac{2\\pi}{3}$，求：\n(1) $\\sin\\theta$ 的最大值及最小值\n(2) $y=\\cos2\\theta$ 的最大值及最小值',
    answer: '(1) $1$；$\\frac{\\sqrt{2}}{2}$ (2) $0$；$-1$',
    hasImage: false,
  },
  {
    id: '17ba9f5f6d0',
    chapter: '三角函數A',
    question:
      '$y=\\sqrt{3}\\sin x-\\cos x+1$，$\\dfrac{\\pi}{3}\\le x\\le\\dfrac{5\\pi}{6}$，求：(1) $x$ 為何時，$y$ 有最大值為？\n(2) $x$ 為何時，$y$ 有最小值為？',
    answer: '(1) $\\frac{2\\pi}{3}$；$3$ (2) $\\frac{\\pi}{3}$；$2$',
    hasImage: false,
  },
  {
    id: '17ba9f8acb8',
    chapter: '三角函數A',
    question:
      '$y=2\\sin x+2\\sqrt{3}\\cos x$，$0\\le x\\le\\pi$，求：\n(1) $x$ 為何時，$y$ 有最大值為？\n(2) $x$ 為何時，$y$ 有最小值為？',
    answer: '(1) $\\frac{\\pi}{6}$；$4$ (2) $\\pi$；$-2\\sqrt{3}$',
    hasImage: false,
  },
  {
    id: '17ba9facfa6',
    chapter: '三角函數A',
    question:
      '圓形水塘的半徑為 5 公尺，想建造 H 字形的木橋跨越池面，如圖，求木橋的總長度最長可多長？及此時中間的連接橋段 $\\overline{AB}$ 長為？',
    answer: '$10\\sqrt{5}$；$2\\sqrt{5}$',
    hasImage: true,
  },
  {
    id: '17ba9fc79fa',
    chapter: '三角函數A',
    question:
      '圓直徑 $\\overline{AB}=10$，圓上有動點 $P$，求 $5\\overline{PA}+12\\overline{PB}$ 的最大值及此時的 $\\overline{PA}$、$\\overline{PB}$',
    answer: '130；$\\frac{50}{13}$；$\\frac{120}{13}$',
    hasImage: true,
  },
  {
    id: '17b738a20a1',
    chapter: '三角函數A',
    question:
      '若 $\\sin\\theta=\\dfrac35$，$90\\du<\\theta<180\\du$，求 $\\sin2\\theta$、$\\cos2\\theta$、$\\tan2\\theta$。',
    answer: '$-\\frac{24}{25}$；$\\frac7{25}$；$-\\frac{24}7$',
    hasImage: false,
  },
  {
    id: '17b738c5a2e',
    chapter: '三角函數A',
    question: '圖是由三個直角三角形堆疊而成的圖形，且 $\\overline{OD}=8$，求 $\\overline{AB}$。',
    answer: '$\\sqrt3$',
    hasImage: true,
  },
  {
    id: '17b7392533f',
    chapter: '三角函數A',
    question: '求 $\\sin22.5\\du$、$\\cos22.5\\du$。',
    answer: '$\\frac{\\sqrt{2-\\sqrt2}}2$；$\\frac{\\sqrt{2+\\sqrt2}}2$',
    hasImage: false,
  },
  {
    id: '17b73936315',
    chapter: '三角函數A',
    question: '求 $\\tan15\\du$。',
    answer: '$2-\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17b7395c7e2',
    chapter: '三角函數A',
    question: '若 $\\sin\\theta=-\\dfrac13$，求 $\\sin3\\theta$。',
    answer: '$-\\frac{23}{27}$',
    hasImage: false,
  },
  {
    id: '17b7396db1b',
    chapter: '三角函數A',
    question: '化簡 $\\dfrac{\\sin51\\du}{\\sin17\\du}-\\dfrac{\\cos51\\du}{\\cos17\\du}$。',
    answer: '2',
    hasImage: false,
  },
  {
    id: '17b739bf1ba',
    chapter: '三角函數A',
    question:
      '下列哪些函數可找到平行 $y$ 軸的直線，做為函數圖形的對稱軸？\n(1) $y=x^2$ (2) $y=x^3$ (3) $y=\\sin x$\n(4) $y=\\cos x$ (5) $y=\\tan x$',
    answer: '(1)(3)(4)',
    hasImage: false,
  },
  {
    id: '17b73a6f1c5',
    chapter: '三角函數A',
    question:
      '求 $y=2\\sin x+3$ 的圖形與 $x=\\dfrac{\\pi}2$、$x=\\dfrac{3\\pi}2$、$x$ 軸圍成的區域面積。',
    answer: '$3\\pi$',
    hasImage: false,
  },
  {
    id: '17b73a9657d',
    chapter: '三角函數A',
    question:
      '函數 $f(x)=3\\cos(5x+\\dfrac{\\pi}3)-1$ 的週期為？最大函數值為？最小函數值為？$f(x)$ 的圖形可由 $y=3\\cos5x$ 向左移 $a$ 再向下移 $b$ 而得，求 $(a,b)$。',
    answer: '$\\frac{2\\pi}5$；2；-4；$(\\frac{\\pi}{15},1)$',
    hasImage: false,
  },
  {
    id: '17b741d382b',
    chapter: '三角函數A',
    question:
      '$f(x)=\\sin x-\\sqrt3\\cos x=a\\sin(x+k)$，其中 $a>0$ 且 $0\\le k<2\\pi$，求 $a$、$k$。',
    answer: '2；$\\frac{5\\pi}3$',
    hasImage: false,
  },
  {
    id: '17b7420b612',
    chapter: '三角函數A',
    question:
      '$f(x)=-5\\sin x+12\\cos x$，$x\\in\\mathbb{R}$，求：\n(1) $f(x)$ 的最大值及此時的 $\\sin x$、$\\cos x$\n(2) $f(x)$ 的最小值及此時的 $\\sin x$、$\\cos x$',
    answer: '(1) 13；$\\frac{-5}{13}$；$\\frac{12}{13}$ (2) -13；$\\frac5{13}$；$\\frac{-12}{13}$',
    hasImage: false,
  },
  {
    id: '17b742931cf',
    chapter: '三角函數A',
    question:
      "將地球視為一個球體，在航海學中將赤道上與地心夾角為 1' 的 $A$、$B$ 兩地間的距離 (即 $\\arc{AB}$ 弧長) 定為「1 浬」，若地球半徑為 6400 公里，得 1 浬為 $t\\times\\pi$ 公里，求 $t$。",
    answer: '$\\frac{16}{27}$',
    hasImage: false,
  },
  {
    id: '17b742d3338',
    chapter: '三角函數A',
    question:
      '有一扇形，其半徑為 5 公分，中心角為 $\\theta$，經過計算，發現該扇形的周長為 $k$ 公分，面積為 $k$ 平方公分，兩者的數字大小恰好相等，則 $\\theta$ 應介於下列哪一個範圍之內？\n(1) $75\\du<\\theta<76\\du$ (2) $76\\du<\\theta<77\\du$\n(3) $77\\du<\\theta<78\\du$ (4) $78\\du<\\theta<79\\du$\n(5) $79\\du<\\theta<80\\du$',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '17b7439275c',
    chapter: '三角函數A',
    question:
      '令 $a=\\cos\\pi^2$，試問下列何者正確？\n(1) $a=-1$ (2) $-1<a\\le-\\dfrac12$\n(3) $-\\dfrac12<a\\le0$ (4) $0<a\\le\\dfrac12$\n(5) $\\dfrac12<a\\le1$',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '17b743be7ea',
    chapter: '三角函數A',
    question:
      '弧度 $\\theta=1,2,3,4,5,6,7,8,9,10$ 共有十個有向角，試問其中有幾個可使 $\\sin\\theta>0$ 且 $\\sin2\\theta<0$？',
    answer: '4 個',
    hasImage: false,
  },
  {
    id: '17b743f2946',
    chapter: '三角函數A',
    question:
      '已知 $A$ 與 $B$ 均為有向角，滿足 $\\sin A=\\dfrac45$，$\\sin B=\\dfrac{12}{13}$，則下列關於兩角和 $A+B$ 的敘述，哪些正確？\n(1) $A+B$ 可為第一象限角\n(2) $A+B$ 可為第二象限角\n(3) $A+B$ 可為第三象限角\n(4) $A+B$ 可為第四象限角\n(5) $A+B$ 的終邊可落在坐標軸上',
    answer: '(2)(3)',
    hasImage: false,
  },
  {
    id: '17b74415bfb',
    chapter: '三角函數A',
    question:
      '在 $\\triangle ABC$ 中，已知 $2\\sin A+3\\cos B=\\sqrt5$ 且 $3\\sin B+2\\cos A=2\\sqrt5$，求 $\\angle C$。',
    answer: '$90\\du$',
    hasImage: false,
  },
  {
    id: '17b7e1d24b8',
    chapter: '三角函數A',
    question:
      '設銳角三角形 $ABC$ 的外接圓半徑為 8。已知外接圓圓心到 $\\overline{AB}$ 的距離為 2，而到 $\\overline{BC}$ 的距離為 7，求 $\\overline{AC}$。',
    answer: '$4\\sqrt{15}$',
    hasImage: false,
  },
  {
    id: '17b7e2314d6',
    chapter: '三角函數A',
    question:
      '在 $\\triangle ABC$ 中，$D$ 為 $\\overline{BC}$ 邊上一點且 $\\overline{AD}$ 平分 $\\angle BAC$。已知 $\\overline{BD}=5$，$\\overline{DC}=7$，且 $\\angle ABC=60\\du$，求：\n(1) $\\sin\\angle ACB$ (2) $\\sin\\angle BAC$ (3) $\\overline{AB}$',
    answer: '(1) $\\frac{5\\sqrt3}{14}$ (2) $\\frac{4\\sqrt3}7$ (3) $\\frac{15}2$',
    hasImage: false,
  },
  {
    id: '17b7e251b1f',
    chapter: '三角函數A',
    question:
      '已知 $\\triangle ABC$ 中，$\\overline{AB}=2$，$\\overline{BC}=3$，且 $\\angle A=2\\angle C$，求 $\\overline{AC}$。',
    answer: '$\\frac52$',
    hasImage: false,
  },
  {
    id: '17b7e281805',
    chapter: '三角函數A',
    question:
      '坐標平面上，以原點 $O$ 為圓心的圓上有三個相異點 $A(1,0)$、$B$、$C$，且 $\\overline{AB}=\\overline{BC}$。已知銳角 $\\triangle OAB$ 的面積為 $\\frac3{10}$，求 $\\triangle OAC$ 面積。',
    answer: '$\\frac{12}{25}$',
    hasImage: false,
  },
  {
    id: '17b7e3099e8',
    chapter: '三角函數A',
    question:
      '在一個無風的夜晚，祈福天燈從地面的 $A$ 點冉冉升起，1 秒鐘後升至 $B$ 點，再花 1 秒鐘升至 $C$ 點，再花 1 秒鐘升至 $D$ 點。在離 $A$ 點 9 公尺遠的 $P$ 點處觀察，發現 $\\angle APB=\\angle BPC=\\angle CPD$，且 $\\overline{AB}=3$ 公尺，求升起 3 秒後的高度 $\\overline{AD}$。',
    answer: '13 公尺',
    hasImage: true,
  },
  {
    id: '17b7e33f865',
    chapter: '三角函數A',
    question:
      '設 $\\triangle ABC$ 為一等腰直角三角形，$\\angle BAC=90\\du$，若 $P$、$Q$ 為斜邊 $\\overline{BC}$ 的三等分點，求 $\\tan\\angle PAQ$。',
    answer: '$\\frac34$',
    hasImage: false,
  },
  {
    id: '17b7e3e015b',
    chapter: '三角函數A',
    question:
      '設 $f(x)=2\\sin(kx+\\theta)$，其中 $x$ 為任何實數，$0\\le\\theta\\le\\dfrac{\\pi}2$，$k>0$，若 $f(x)$ 的圖形與 $y$ 軸交於點 (0,1)，如圖，求 $\\theta$。若 $P$ 是圖形最高點，$M$、$N$ 是圖形與 $x$ 軸的交點，$M$ 的坐標為 $(-\\dfrac15,0)$，求 $\\triangle PMN$ 面積。',
    answer: '$\\frac{\\pi}6$；$\\frac{6\\pi}5$',
    hasImage: true,
  },
  {
    id: '17b7e414060',
    chapter: '三角函數A',
    question:
      '圖為函數 $f(x)=a\\cos(bx+c)+d$ 的圖形，其中 $a,b>0$，(2,3) 為波峰的頂點，(20,-1) 為波谷的頂點，求 $(a,b,d)$。$c$ 值有無限種可能，若 $c$ 為最小正數，求 $c$。',
    answer: '$(2,\\frac{\\pi}2,1)$；$\\pi$',
    hasImage: true,
  },
  {
    id: '17b7e45604e',
    chapter: '三角函數A',
    question:
      '在 $0\\le x\\le2\\pi$ 的範圍中，$y=3\\sin x$ 的圖形與 $y=2\\sin2x$ 的圖形有幾個交點？',
    answer: '5',
    hasImage: false,
  },
  {
    id: '17b7e4c391e',
    chapter: '三角函數A',
    question:
      '關於函數 $y=\\sin x$ 的圖形和 $y=\\dfrac x{10\\pi}$ 的圖形之交點個數，下列哪一個選項是正確的？\n(1) 交點的個數是無窮多\n(2) 交點的個數是奇數且大於 20\n(3) 交點的個數是奇數且小於 20\n(4) 交點的個數是偶數且大於或等於 20\n(5) 交點的個數是偶數且小於 20',
    answer: '(3)',
    hasImage: false,
  },
  {
    id: '17b7e4f1e51',
    chapter: '三角函數A',
    question:
      '函數 $f(x)=\\sqrt{3}\\sin x+\\cos x$，$x$ 的範圍為 $\\alpha\\le x\\le\\beta$，其中 $0<\\alpha,\\beta<2\\pi$，已知 $f(x)$ 的最小值為 -1，最大值為 $\\sqrt2$，求 $(\\alpha,\\beta)$。',
    answer: '$(\\frac{7\\pi}{12},\\pi)$',
    hasImage: false,
  },
  {
    id: '17b7e5131d7',
    chapter: '三角函數A',
    question:
      '$x\\in\\mathbb R$，求 $f(x)=(2\\sin x+3\\cos x)^2$$+4(2\\sin x+3\\cos x)+1$ 的最大值與最小值。',
    answer: '$14+4\\sqrt{13}$；-3',
    hasImage: false,
  },
  {
    id: '17b64a843b2',
    chapter: '三角函數A',
    question:
      '車輪的半徑為 40 公分，若輪軸轉動使軸心前進 20 公尺，求車輪繞軸心轉動的角為多少弳？換算成角度為多少度？',
    answer: '50；$\\frac{9000}{\\pi}$',
    hasImage: false,
  },
  {
    id: '17b64ab243b',
    chapter: '三角函數A',
    question:
      '已知 $\\pi\\approx3.14$，$\\sqrt{\\pi}\\approx1.77$，試問：\n(1) 有向角 $\\pi^2$ 弳是第幾象限角？\n(2) 有向角 $\\sqrt{\\pi}$ 弳是第幾象限角？',
    answer: '(1) 三 (2) 二',
    hasImage: false,
  },
  {
    id: '17b64ae2615',
    chapter: '三角函數A',
    question: '若扇形的弧長為 4 單位，面積為 3 平方單位，求此扇形的半徑、中心角。',
    answer: '$\\frac32$；$\\frac83$ 弳',
    hasImage: false,
  },
  {
    id: '17b64af334b',
    chapter: '三角函數A',
    question: '設鐘面的分針長度是時針的 2 倍，經過一小時後，分針掃過的扇形面積是時針的幾倍？',
    answer: '48',
    hasImage: false,
  },
  {
    id: '17b64b61b0b',
    chapter: '三角函數A',
    question:
      '已知 $\\theta$ 與 $\\phi$ 為銳角，若 $\\sin\\theta=\\dfrac35$，$\\cos\\phi=\\dfrac5{13}$，求 $\\sin(\\theta+\\phi)$、$\\cos(\\theta-\\phi)$。',
    answer: '$\\frac{63}{65}$；$\\frac{56}{65}$',
    hasImage: false,
  },
  {
    id: '17b64b76a9c',
    chapter: '三角函數A',
    question: '若 $\\tan A=5$，$\\tan B=-3$，求 $\\tan(A+B)$',
    answer: '$\\frac18$',
    hasImage: false,
  },
];

// 三角函數B
const trigonometricFuncB: Question[] = [
  {
    id: '183d7601b38',
    chapter: '三角函數B',
    question:
      "有一函數 $f(x)=\\sin x$，若將函數 $f(x)$ 先向右平移 $\\dfrac12$ 單位，再水平伸縮 2 倍，得到 $f'(x)$，則 $f(x)$ 所表示的函數為何？\n(1) $f'(x)=\\sin\\dfrac12(x-\\dfrac12)$　(2) $f'(x)=2\\sin(x+\\dfrac12)$　(3) $f'(x)=\\dfrac12\\sin(x+\\dfrac12)$\n(4) $f'(x)=\\sin(\\dfrac x2-\\dfrac12)$　(5) $f'(x)=\\sin(\\dfrac x2-\\dfrac14)$",
    answer: '4',
    hasImage: false,
  },
  {
    id: '17c58ebfd06',
    chapter: '三角函數B',
    question:
      '下列各選項何者正確？\n(1) $\\sin2<0$ (2) $\\sin\\frac{3\\pi}{4}>0$ (3) $\\tan210\\du>0$ (4) $\\cos685\\du>0$ (5) $\\cos(-\\pi)<0$',
    answer: '(2)(3)(5)',
    hasImage: false,
  },
  {
    id: '17c58ede958',
    chapter: '三角函數B',
    question:
      '下列關於度與弳的互換，請選出正確的選項。\n(1) $\\frac{5\\pi}{6}=150\\du$ (2) $\\frac{3\\pi}{4}=270\\du$ (3) $\\pi=360\\du$ (4) $\\pi=180\\du$ (5) $\\frac{1}{3}=\\frac{60\\du}{\\pi}$',
    answer: '(1)(4)(5)',
    hasImage: false,
  },
  {
    id: '17c58f019ff',
    chapter: '三角函數B',
    question: '有一扇形，半徑為 $4$，弧長為 $20$，求此扇形的面積。',
    answer: '$40$',
    hasImage: false,
  },
  {
    id: '17c58f1f7d6',
    chapter: '三角函數B',
    question:
      '已知 $\\frac{\\pi}{6}\\le x\\le\\pi$，函數 $f(x)=\\sin(x+\\frac{\\pi}{2})$ 的最大值為 $M$，最小值為 $m$，求數對 $(M,m)$。',
    answer: '$(\\frac{\\sqrt{3}}{2},-1)$',
    hasImage: false,
  },
  {
    id: '17c58f2dcdd',
    chapter: '三角函數B',
    question: '圖為三角函數 $f(x)=a\\sin(bx)+c$ 的圖形，求數對 $(a,b,c)$。',
    answer: '$(2,1,1)$',
    hasImage: true,
  },
  {
    id: '17c58f40c80',
    chapter: '三角函數B',
    question:
      '若 $0<\\phi<\\pi$，且函數 $f(x)=2\\sin(\\frac{\\pi}{3}x+\\phi)$ 的圖形通過 $(0,\\sqrt{3})$，求 $\\phi$。',
    answer: '$\\frac{\\pi}{3}$',
    hasImage: false,
  },
  {
    id: '17c58f561f1',
    chapter: '三角函數B',
    question:
      '將函數 $y=\\sin2x$ 的圖形上所有的點向右平移 $\\frac{\\pi}{3}$，得到新的函數圖形方程式為 $y=\\sin(2x-k)$，$0\\le k\\le\\pi$，求 $k$。',
    answer: '$\\frac{2\\pi}{3}$',
    hasImage: false,
  },
  {
    id: '17c58f6631b',
    chapter: '三角函數B',
    question: '標準位置角 $\\theta$ 在終邊上有一點 $P(-3,6\\sqrt{2})$，求 $\\cos\\theta$。',
    answer: '$-\\frac{1}{3}$',
    hasImage: false,
  },
  {
    id: '17c58f86821',
    chapter: '三角函數B',
    question:
      '如圖，$O$ 為圓心，以 $\\overline{AB}$ 為直徑的半圓，且此圓的半徑為 $8$。若 $\\angle BOC=90\\du$，以 $B$ 為圓心，$\\overline{BC}$ 為半徑畫弧，交 $\\overline{AB}$ 於 $D$，求陰影部分的面積。',
    answer: '$8\\pi-8$',
    hasImage: true,
  },
  {
    id: '17c58f93fcf',
    chapter: '三角函數B',
    question: '如圖，直圓錐之底半徑 $r$ 為 $2$，且 $\\overline{AB}=5$，求此直圓錐的側面積。',
    answer: '$10\\pi$',
    hasImage: true,
  },
  {
    id: '17c58fce7ab',
    chapter: '三角函數B',
    question:
      '如圖，已知 $PA$ 弧長為 $6$ 且點 $A(3,0)$，$\\angle AOP=\\frac{2\\pi}{3}$，試求 $P$ 點坐標 $(m,n)$。',
    answer: '$(-\\frac{\\sqrt{3}}{2},\\frac{3\\sqrt{3}}{2})$',
    hasImage: true,
  },
  {
    id: '17c58fe68ca',
    chapter: '三角函數B',
    question:
      '$0\\le x\\le2\\pi$，請畫出 $y=\\sin2x-1$ 的函數圖形，需標出此圖形 $y=\\sin2x-1$ 與 $x$ 軸的所有交點坐標，及最高點與最低點坐標。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17c59038af4',
    chapter: '三角函數B',
    question:
      '有一電波訊號經轉譯後得到一串坐標 $(0.67,1)$、$(2,2)$、$(3.33,1)$......，將這些坐標點描繪至方格紙中並將這些點連接成如圖 (圖形的格線距離是一單位)。\n猜測這些點近似於正弦函數 $y=a\\sin bx+k$ 圖形上的點，且 $a>0$，$b>0$，$k$ 為常數，試求此正弦函數 $y=a\\sin bx+k$ 的週期、振幅、$b$。',
    answer: '$8$；$2$；$\\frac{\\pi}{4}$',
    hasImage: true,
  },
  {
    id: '17c213f7e01',
    chapter: '三角函數B',
    question:
      '設扇形的半徑為 $3$，中心角所對弧長為 $\\pi$，求中心角的大小為多少弳？換算成傳統角為？',
    answer: '$\\frac{\\pi}{3}$；$60\\du$',
    hasImage: false,
  },
  {
    id: '17c21416c3e',
    chapter: '三角函數B',
    question: '設扇形的半徑為 $200$ 公分，中心角為 $0.8$ 弳，求所對的弧長為幾公分？',
    answer: '$160$',
    hasImage: false,
  },
  {
    id: '17c2142cbbc',
    chapter: '三角函數B',
    question:
      '如圖，$\\overleftrightarrow{PA}$ 切圓 $O$ 於 $A$ 點且 $\\overline{PA}=3\\sqrt{3}$，$\\overline{PQ}=3$，求扇形 $OAQ$ 的面積。',
    answer: '$\\frac{3\\pi}{2}$',
    hasImage: true,
  },
  {
    id: '17c2143e831',
    chapter: '三角函數B',
    question: '試求 $\\sin\\frac{\\pi}{2}+\\cos\\frac{\\pi}{3}-\\tan\\frac{5\\pi}{4}$ 之值。',
    answer: '$1$',
    hasImage: false,
  },
  {
    id: '17c2145da31',
    chapter: '三角函數B',
    question:
      '已知 $\\theta$ 為第二象限角且 $\\sin\\theta=\\frac{3}{5}$，則下列選項哪些正確？\n(1) $\\sin^2\\theta+\\cos^2\\theta=1$\n(2) $\\sin\\theta\\cdot\\cos\\theta=-\\frac{12}{25}$\n(3) $\\sin(\\pi+\\theta)=-\\frac{3}{5}$\n(4) $\\cos(\\pi-\\theta)=-\\frac{4}{5}$\n(5) $\\tan(\\pi+\\theta)=\\frac{4}{3}$',
    answer: '(1)(2)(3)',
    hasImage: false,
  },
  {
    id: '17c2148cf59',
    chapter: '三角函數B',
    question:
      '圖為一圓錐的展開圖，若底圓半徑為 $6$ 公分，扇形半徑 $\\overline{PA}=10$ 公分，則下列選項哪些正確？\n(1) $\\arc{AB}$ 的長度為 $12\\pi$ 公分\n(2) $\\angle APB=\\frac{6}{5}\\pi$ 弳\n(3) 圓錐側面積為 $120\\pi$ 平方公分\n(4) 圓錐表面積為 $96\\pi$ 平方公分\n(5) 圓錐的高為 $8$ 公分',
    answer: '(1)(2)(4)(5)',
    hasImage: true,
  },
  {
    id: '17c214abbc5',
    chapter: '三角函數B',
    question:
      '下列大小比較，哪些正確？\n(1) $\\sin\\pi\\du>\\sin\\pi$ (2) $\\sin5>\\sin2$\n(3) $\\sin\\frac{\\pi}{5}>\\sin\\frac{\\pi}{6}$ (4) $\\sin\\frac{10\\pi}{17}>\\sin\\frac{11\\pi}{17}$\n(5) $\\sin\\frac{5\\pi}{3}>\\sin\\frac{14\\pi}{9}$',
    answer: '(1)(3)(4)(5)',
    hasImage: false,
  },
  {
    id: '17c214bdc09',
    chapter: '三角函數B',
    question:
      '已知直徑為 $20$ 公分的滑輪，每秒旋轉 $45\\du$，則滑輪上一點經過 $5$ 秒轉過的弧長為 $k\\pi$ 公分，求 $k$。',
    answer: '$\\frac{25}{2}$',
    hasImage: false,
  },
];

// 指數與對數函數
const expAndLogFunction: Question[] = [
  {
    id: '1858529fd82',
    chapter: '指數與對數函數',
    question:
      '若正實數 $x,y$ 滿足 $\\log_2x=8.4$，$\\log_5y=3.4$，則 $\\log_{10}xy$ 的值最接近下列哪一個選項？\n(1) 4.1　(2) 4.9　(3) 5.9　(4) 11.8　(5) 14.3',
    answer: '2',
    hasImage: false,
  },
  {
    id: '1855e731770',
    chapter: '直線與圓',
    question: '已知方程式 $7^{x+7}=9^x$ 的解可以表示成 $x=\\log_b7^7$，試求 $b$。',
    answer: '$\\frac97$',
    hasImage: false,
  },
  {
    id: '1855e379bb6',
    chapter: '指數與對數函數',
    question:
      '已知 $a,b,c$ 為等比數列，設 $f(x)=\\log_\\pi x$，若 $f(a)=\\dfrac12$，$f(b)=\\dfrac13$，$f(c)=\\dfrac{\\textcirc{7-1}}{\\textcirc{7-2}}$。(化為最簡分數)',
    answer: '16',
    hasImage: false,
  },
  {
    id: '1855e3949b1',
    chapter: '指數與對數函數',
    question:
      '假設一件智慧型手機問世 $x$ 年後，擁有該產品的人口數所占的百分比為 $(1-0.2^{ax})\\times100\\%$。若智慧型手機問世 2 年後，有 10% 的人口擁有該產品。',
    answer: '',
    hasImage: false,
  },
  {
    id: '1855e3a4d6a',
    chapter: '指數與對數函數',
    question:
      '則智慧型手機問世 4 年後，擁有智慧型手機的人口數所占的百分比為多少？(單選題，6 分)\n(1) 15%　(2) 19%　(3) 23%　(4) 27%　(5) 31%',
    answer: '2',
    hasImage: false,
  },
  {
    id: '1855e3b3b0c',
    chapter: '指數與對數函數',
    question:
      '若智慧型手機問世 $n$ 年後，擁有智慧型手機的人口數所占的百分比超過 90%，則 $n$ 的最小正整數解是多少？(非選擇題，9 分)',
    answer: '44',
    hasImage: false,
  },
  {
    id: '1853f3fd355',
    chapter: '指數與對數函數',
    question:
      '將 $y=2^x$ 的圖形先對 $y$ 軸作對稱，再對 $x$ 軸作對稱後，所得到的圖形之方程式為下列何者？\n(1) $y=(\\dfrac12)^x$\n(2) $y=-(\\dfrac12)^x$\n(3) $x=-2^y$\n(4) $y=\\log_2x$\n(5) $y=\\log_{\\frac12}x$',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '1853efe69a9',
    chapter: '指數與對數函數',
    question:
      '小明在足球比賽中，每次起腳射門可以得分的機率為 $\\dfrac23$。求小明至少起腳射門多少次，才可以讓他至少得一分的機率為 0.99？\n(1) 5　(2) 6　(3) 7　(4) 8　(5) 9',
    answer: '(1)',
    hasImage: false,
  },
  {
    id: '18515012050',
    chapter: '指數與對數函數',
    question:
      '設 $a,b,c$ 皆為正數，且 $c\\ne1$，已知 $\\log_ca=3$，$\\log_cb=5$。試選出正確的選項。\n(1) $\\log_c(a+b)=15$\n(2) $a\\times b=c^8$\n(3) $\\log_ab=\\dfrac53$\n(4) $\\log_a{\\dfrac ca}=-\\dfrac53$\n(5) $\\log_{abc}a^2=\\dfrac{46}5$',
    answer: '(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '184d34136cd',
    chapter: '指數與對數函數',
    question:
      '已知 $a>1$。若 $f(x)=\\log_a x$ 的函數圖形與直線 $x=2$，$x=5$ 分別交於 $A,B$ 二點。$g(x)=\\log_a \\sqrt x$ 的函數圖形與直線 $x=2$，$x=5$ 分別交於 $C,D$ 二點，如圖。設 $A,B$ 兩個點的斜率為 $m_1$，$C,D$ 兩個點的斜率為 $m_2$，則 $\\dfrac{m_2}{m_1}$ 之值為？\n(1) $\\dfrac12$　(2) $\\dfrac25$　(3) $\\dfrac13$　(4) $\\dfrac14$　(5) $\\dfrac15$',
    answer: '1',
    hasImage: true,
  },
  {
    id: '184a51b9814',
    chapter: '指數與對數函數',
    question:
      '將 $\\left(\\sqrt{\\dfrac32}\\right)^{200}$ 寫成科學記號 $a\\times10^n$，其中 $1\\le a<10$，且 $n$ 為正整數。若 $a$ 的整數部分為 $m$，求 $3m-n$ 之值。',
    answer: '-5',
    hasImage: false,
  },
  {
    id: '1848b534321',
    chapter: '指數與對數函數',
    question: '$\\log_2|x+1|-\\log_2|x-1|=1$ 的實數解有幾個？\n(1) 0　(2) 1　(3) 2　(4) 3　(5) 4',
    answer: '3',
    hasImage: false,
  },
  {
    id: '183d8d12f90',
    chapter: '指數與對數函數',
    question:
      '某老板為了提升工廠的競爭力，改善營運績效；決定在五年之後將工廠的採購成本減少 20%。老板希望每年依固定的比率 (當年和前一年支出的比) 逐年降低。若要達到這項目標，則該工廠每年至少要比前一年減少 $\\textcirc{16-1}.\\textcirc{16-2}$% 的採購成本，才可以順利達成預定的目標。($\\log952\\approx2.9806$)',
    answer: '48',
    hasImage: false,
  },
  {
    id: '183d7752ee8',
    chapter: '指數與對數函數',
    question:
      '設實數 $x$ 滿足 $0<x<1$，且 $\\dfrac{\\log_2100}{\\log_2x}-\\log x=1$，則 $\\dfrac1x=\\textcirc{12-1}\\textcirc{12-2}\\textcirc{12-3}$。',
    answer: '100',
    hasImage: false,
  },
  {
    id: '183d766ebeb',
    chapter: '指數與對數函數',
    question:
      '設 $a,b$ 為有理數，且 $27\\times3^{a\\sqrt{3-\\sqrt8}+b\\sqrt8}=1$。試問下列哪些選項是正確的？\n(1) $a=-3$　(2) $b=-\\dfrac32$　(3) $b$ 無解　(4) $a-2b=6$　(5) $2a+b=0$',
    answer: '24',
    hasImage: false,
  },
  {
    id: '183d74f5bfc',
    chapter: '指數與對數函數',
    question:
      '當顯示設備沒有獲得訊號源時，若成因是電磁波干擾而隨機生成的閃爍像素點圖案，則稱為「螢幕雜訊」，某電腦科技公司研發出偵測螢幕雜訊的方法為假設某螢幕的每平方公分有 $n$ 個雜訊點，則雜訊程度 $r(n)$ 定義為 $r(n)=1+\\dfrac15\\log_4n$，已知螢幕 A 的雜訊程度為 67.3，螢幕 B 的雜訊程度為 48.1，則：',
    answer: '',
    hasImage: false,
  },
  {
    id: '183d7509d1e',
    chapter: '指數與對數函數',
    question:
      '若某螢幕 C 受測時每平方公分有 $10^{30}$ 個雜訊點，則螢幕 C 的雜訊程度最接近下列哪一個選項？(單選題，4 分)\n(1) 8　(2) 9　(3) 10　(4) 11　(5) 12',
    answer: '4',
    hasImage: false,
  },
  {
    id: '183d751942d',
    chapter: '指數與對數函數',
    question: '若螢幕 A 每平方公分的雜訊點為螢幕 B 的 $k$ 倍，則 $k$ 為幾位數？(非選擇題，11 分)',
    answer: '58',
    hasImage: false,
  },
  {
    id: '183d74727d6',
    chapter: '指數與對數函數',
    question:
      '設 $k$ 為不等於 1 的正實數。若三數 $\\log_{27}(3k),\\log_9k,\\log_3k$ 成等比數列，其中公比不為 0，已知 $k=\\dfrac n m$，其中 $m,n$ 為互質的正整數，則 $m+n$ 的值等於 $\\textcirc{17-1}\\textcirc{17-2}$。',
    answer: '82',
    hasImage: false,
  },
  {
    id: '183d726d142',
    chapter: '指數與對數函數',
    question:
      '設點 $(a,b)$ 為 $y=\\log_2x$ 圖形上的一點，試選出正確的選項。\n(1) $(2a,2b)$ 亦為 $y=\\log_2x$ 圖形上的一點\n(2) $(a^2,b^2)$ 亦為 $y=\\log_2x$ 圖形上的一點\n(3) $(a,-b)$ 為 $y=\\log_{\\frac12}x$ 圖形上的一點\n(4) $(b,a)$ 為 $y=2^x$ 圖形上的一點\n(5) $(2b,2a)$ 為 $y=2^x$ 圖形上的一點',
    answer: '34',
    hasImage: false,
  },
  {
    id: '183d71dcce0',
    chapter: '指數與對數函數',
    question:
      '設 $a_n$ 代表正 $n$ 邊形的一個內角角度的數值。\n例如：$a_3=60$，因為正三角形的內角為 $60\\du$；$a_4=90$，因為正方形的內角為 $90\\du$。\n若 $a_3\\times a_4\\times a_5\\times\\cdots\\times a_{10}=\\dfrac{180^8}k$，求 $\\log k$。\n(1) 1　(2) 1.2552　(3) 1.6532　(4) 1.8751　(5) 2',
    answer: '3',
    hasImage: false,
  },
  {
    id: '17d59d3efd5',
    chapter: '指數與對數函數',
    question:
      '下列哪些方程式的解恰為兩相異實根？\n(1) $x^2=2^x$ (2) $x-1=\\log_2|x|$ (3) $2\\log_2x=x$ (4) $x-1=|\\log_2x|$ (5) $(\\frac12)^x=\\log_2x$',
    answer: '(3)(4)',
    hasImage: false,
  },
  {
    id: '17d59d65a04',
    chapter: '指數與對數函數',
    question:
      '下列關於圖形的敘述，請選出正確的選項。\n(1) 圖形 $y=\\log_2x$ 可以經過一次平移得到圖形 $y=\\log_2(8x)$\n(2) 圖形 $y=\\log_2x$ 可以經過一次伸縮得到圖形 $y=\\log_2(8x)$\n(3) 圖形 $y=2^x$ 可以經過一次伸縮得到圖形 $y=8\\times2^x$\n(4) 圖形 $y=\\log_2x$ 可以經過一次對稱得到圖形 $y=\\log_{\\frac12}x$\n(5) 圖形 $y=2^x$ 可以經過一次對稱得到圖形 $y=\\log_{\\frac12}x$',
    answer: '(1)(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '17d59d9eb8c',
    chapter: '指數與對數函數',
    question:
      '設 $a=2^{50}$，請選出正確的選項。\n(1) $a$ 的首位數字為 $1$\n(2) $a$ 為 $15$ 位數\n(3) $\\frac1a$ 化為小數後，小數點後第 $15$ 位始不為 $0$\n(4) $\\frac1a$ 化為小數後，小數點後有 $50$ 個數字\n(5) $\\frac1a$ 化為小數後，首位不為 $0$ 的數字為 $9$',
    answer: '(1)(4)',
    hasImage: false,
  },
  {
    id: '17d59dc7e99',
    chapter: '指數與對數函數',
    question:
      '圖中 $A$、$B$、$C$、$D$ 分別為指數函數 $y=a^x$、$y=b^x$、$y=c^x$、$y=d^x$ 的部分圖形，求 $a$、$b$、$c$、$d$、$1$ 的大小關係。',
    answer: '$c>d>1>a>b$',
    hasImage: true,
  },
  {
    id: '17d468c4eae',
    chapter: '指數與對數函數',
    question:
      '已知某投資提供年利率為 $20\\%$ 的理財方案，每年計息一次，依複利計息，請問至少要幾年，本利和才會超過本金的 $2$ 倍？',
    answer: '$4$',
    hasImage: false,
  },
  {
    id: '17d468db0ed',
    chapter: '指數與對數函數',
    question:
      '請問指數方程式 $2^{10^x}=10^6$ 的解 $x$ 最接近下列哪一個選項？\n(1) $1.1$ (2) $1.2$ (3) $1.3$ (4) $1.4$ (5) $1.5$',
    answer: '(3)',
    hasImage: false,
  },
  {
    id: '17d59c8e82e',
    chapter: '指數與對數函數',
    question: '$a=\\log(1+\\frac17)$，$b=\\log(1+\\frac1{49})$，試以 $a,b$ 表 $\\log2$。',
    answer: '$\\frac{2a-b+2}7$',
    hasImage: false,
  },
  {
    id: '17d59ca3db1',
    chapter: '指數與對數函數',
    question: '方程式 $x^{\\log_5x}=625x^3$，求 $x$。',
    answer: '$625\\lor\\frac15$',
    hasImage: false,
  },
  {
    id: '17d5cdad764',
    chapter: '指數與對數函數',
    question: '試求 $3^{1-2\\log_35}+2^{\\log_4\\frac1{25}}$ 之值。',
    answer: '$\\frac8{25}$',
    hasImage: false,
  },
  {
    id: '17d5ce1b3bb',
    chapter: '指數與對數函數',
    question:
      '根據歷年的調查資料顯示，在學校佈告欄上公告某訊息後，$n$ 個上課天內得知此訊息的學生佔全校學生的 $100(1-2^{-kn})\\%$，其中 $n\\in\\mathbb N$，常數 $k$ 與學生重視此訊息的程度有關。今學校佈告欄上公告了社團轉社期限，$2$ 個上課天內已有 $70\\%$ 的學生得知此訊息。試根據過往調查資料推測，若要使 $99\\%$ 以上的學生得知此訊息，至少需要公告幾個上課天？',
    answer: '$8$',
    hasImage: false,
  },
  {
    id: '17d396141e0',
    chapter: '指數與對數函數',
    question:
      '下列各數中，請選出滿足不等式 $\\log_\\frac12(x-1)\\ge-3-\\log_\\frac12(x-3)$ 的選項。\n(1) $\\sqrt2$ (2) $3$ (3) $\\pi$ (4) $4.5$ (5) $6$',
    answer: '(3)(4)',
    hasImage: false,
  },
  {
    id: '17d3963d9c4',
    chapter: '指數與對數函數',
    question:
      '假設 $(a,b)$ 為函數 $y=3^x$ 之圖形上的一點，選出下列正確的選項。\n(1) $a$ 的值一定比 $b$ 小\n(2) $(-a,b)$ 為函數 $y=(\\frac13)^{-x}$ 之圖形上一點\n(3) $(a-5,9b)$ 為函數 $y=3^{x+7}$ 之圖形上一點\n(4) $(\\frac1b,a)$ 為函數 $y=\\log_3x^{-1}$ 之圖形上一點\n(5) $(b+2,a)$ 為函數 $y=\\log_3x-2$ 之圖形上一點',
    answer: '(1)(3)(4)',
    hasImage: false,
  },
  {
    id: '17d3967afe8',
    chapter: '指數與對數函數',
    question:
      '設 $a$ 為大於 $1$ 的實數，考慮函數 $f(x)=a^x$ 與 $g(x)=\\log_ax$，試問下列哪些選項是正確的？\n(1) 若 $f(3)=6$，則 $g(36)=6$\n(2) $\\frac{f(238)}{f(219)}=\\frac{f(38)}{f(19)}$\n(3) $g(238)-g(219)=g(38)-g(19)$\n(4) 若 $P$、$Q$ 為 $y=g(x)$ 的圖形上兩相異點，則直線 $PQ$ 之斜率必為正數\n(5) 若 $f(x)=a^x$ 的圖形與直線 $y=5x$ 有交點，則 $g(x)=\\log_ax$ 的圖形與直線 $y=\\frac15x$ 有交點',
    answer: '(1)(2)(4)(5)',
    hasImage: false,
  },
  {
    id: '17d3969462e',
    chapter: '指數與對數函數',
    question: '$\\pi$ 為圓周率，求指數不等式 $(\\frac3{\\pi})^{2x-1}<(\\frac{\\pi}3)^{2x^2+x+1}$。',
    answer: '$x<-\\frac32\\lor x>0$',
    hasImage: false,
  },
  {
    id: '17d396a436d',
    chapter: '指數與對數函數',
    question:
      '已知 $2$ 是方程式 $3^{2x+1}-28\\cdot3^x+k=0$ 的一根，其中 $k$ 為實數，求此方程式的另一根。',
    answer: '$-1$',
    hasImage: false,
  },
  {
    id: '17d396c5efa',
    chapter: '指數與對數函數',
    question: '已知 $\\log a^3=23.496$，試求 $\\frac1a$ 於小數點後第一個不為 $0$ 的數字。',
    answer: '$1$',
    hasImage: false,
  },
  {
    id: '17d396dd94c',
    chapter: '指數與對數函數',
    question: '設年利率為 $12.5\\%$，若依複利計算，至少要幾年後，本利和才會超過本金的 $3$ 倍？',
    answer: '$10$',
    hasImage: false,
  },
  {
    id: '17d396fc49b',
    chapter: '指數與對數函數',
    question:
      '方程式 $|\\log_2x|+x-2=0$ 有 $a$ 個實根，方程式 $x-1=\\log_2x$ 有 $b$ 個實根，求數對 $(a,b)$。',
    answer: '$(2,2)$',
    hasImage: false,
  },
  {
    id: '17d39718b7b',
    chapter: '指數與對數函數',
    question: '已知 $a=\\log_32$，$b=\\log_73$，請以 $a$、$b$ 表示 $\\log_63.5$ 。',
    answer: '$\\frac{1-ab}{ab+b}$',
    hasImage: false,
  },
  {
    id: '17d39739c59',
    chapter: '指數與對數函數',
    question:
      '若直線 $x+y=11$ 與 $y=\\log_3x$ 的圖形交於 $P$ 點、與 $y=3^x$ 的圖形交於 $Q$ 點，如圖。若 $P$ 點也在直線 $y=2$ 上，$O$ 為原點，求 $\\triangle OPQ$ 的面積。',
    answer: '$\\frac{77}2$',
    hasImage: true,
  },
  {
    id: '17d3974bcfb',
    chapter: '指數與對數函數',
    question:
      '已知函數 $y=f(x)=3^{x-1}+b$ 的圖形會過 $(2,23)$、$(a,101)$ 兩點，求 $\\log a+\\log b$。',
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '17d39763794',
    chapter: '指數與對數函數',
    question:
      '$y=\\log_2x$、$y=\\log_4(\\frac14x)$ 與 $y=\\log_bx^3$ 三個函數圖形交於一點，求 $b$。',
    answer: '$8$',
    hasImage: false,
  },
  {
    id: '17d136db6dc',
    chapter: '指數與對數函數',
    question: '設 $-1\\le x\\le1$，求 $f(x)=9^x-4\\cdot3^x-5$ 的最大值及最小值。',
    answer: '$-\\frac{56}9$；$-9$',
    hasImage: false,
  },
  {
    id: '17d136f797a',
    chapter: '指數與對數函數',
    question:
      '設 $f(x)=\\dfrac{2^x-2^{-x}}{2^x+2^{-x}}$，若 $f(a)=\\frac34$，$f(b)=\\frac56$，求 $f(a+b)$。',
    answer: '$\\frac{38}{39}$',
    hasImage: false,
  },
  {
    id: '17d1371d25c',
    chapter: '指數與對數函數',
    question:
      '比較 $a=2^{30}$、$b=3^{20}$、$c=5^{15}$ 之大小關係。($\\log2\\approx0.3010$，$\\log3\\approx0.4771$)',
    answer: '$c>b>a$',
    hasImage: false,
  },
  {
    id: '17d13730d6f',
    chapter: '指數與對數函數',
    question: '若 $\\log_{(x-4)}(-2x^2+18x)$ 有意義，求 $x$ 的範圍。',
    answer: '$4<x<9$ 且 $x\\ne5$',
    hasImage: false,
  },
  {
    id: '17d1374704e',
    chapter: '指數與對數函數',
    question: '對數函數 $f(x)=\\log_9(x^2-8x+25)$ 在 $x=a$ 時有最小的函數值 $b$，求數對 $(a,b)$。',
    answer: '$(4,1)$',
    hasImage: false,
  },
  {
    id: '17d13816531',
    chapter: '指數與對數函數',
    question: '將 $y=\\log_5x$ 的圖形，對直線 $x-y=0$ 對稱後，圖形和 $y=25$ 交於 $P$ 點，求 $P$。',
    answer: '$(2,25)$',
    hasImage: false,
  },
  {
    id: '17cf623fdfc',
    chapter: '指數與對數函數',
    question: '方程式 $x^2+\\log_2|x|=0$ 有幾個實根？',
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '17cf6254b1b',
    chapter: '指數與對數函數',
    question:
      '解方程組 $\\begin{cases}7\\log x-5\\cdot3^y=2\\\\\\log x^6+3^{y+1}=9\\end{cases}$，求數對 $(x,y)$。',
    answer: '$(10,0)$',
    hasImage: false,
  },
  {
    id: '17cf626ccb0',
    chapter: '指數與對數函數',
    question: '已知 $x\\in[0,2]$，試求函數 $f(x)=2^{x+2}-4^x$ 的最大值與最小值差距。',
    answer: '$4$',
    hasImage: false,
  },
  {
    id: '17cf628890c',
    chapter: '指數與對數函數',
    question:
      '已知 $a>0$ 且 $a\\ne1$，若以函數 $f(x)=a^x$ 圖形上兩點 $P(x_1,f(x_1))$、$Q(x_2,f(x_2))$ 為端點的線段中點在 $y$ 軸上，求 $f(x_1)\\cdot f(x_2)$。',
    answer: '$1$',
    hasImage: false,
  },
  {
    id: '17cf62953af',
    chapter: '指數與對數函數',
    question: '解方程式 $\\log_{x-1}(-x^2+11x-19)=2$，求 $x$。',
    answer: '$\\frac52$ 或 $4$',
    hasImage: false,
  },
  {
    id: '17cf62adc98',
    chapter: '指數與對數函數',
    question: '若正實數 $x$ 滿足 $x^{\\log x}=\\dfrac{10000}{x^3}$，求 $x$。',
    answer: '$\\frac1{10000}$ 或 $10$',
    hasImage: false,
  },
  {
    id: '17cccf78e1e',
    chapter: '指數與對數函數',
    question: '不等式 $(\\frac14)^{x^2-\\frac52x}>0.125$ 的整數解有幾個？',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '17cccf8b194',
    chapter: '指數與對數函數',
    question: '如圖，試比較 $a$、$b$、$c$、$d$、$1$ 之大小順序。',
    answer: '$a>b>1>d>c$',
    hasImage: true,
  },
  {
    id: '17cccf9e241',
    chapter: '指數與對數函數',
    question: '設 $a\\in\\mathbb N$ 且 $a>1$，問：使得 $\\log_a64$ 為正整數的 $a$ 有幾個？',
    answer: '$4$',
    hasImage: false,
  },
  {
    id: '17cccfaafb1',
    chapter: '指數與對數函數',
    question: '已知 $A(a,4)$，$B(b,12)$ 兩點在 $y=3^x$ 的圖形上，試求直線 $AB$ 的斜率。',
    answer: '$8$',
    hasImage: false,
  },
  {
    id: '17cccfc62f3',
    chapter: '指數與對數函數',
    question:
      '將 $100$ 萬元存入銀行，已知銀行年利率是 $8\\%$，以半年為一期複利計算。估計 $7$ 年後的存款本利和為多少萬元？(使用計算機，取至小數點後第一位)',
    answer: '$173$',
    hasImage: false,
  },
  {
    id: '17cccff5ab0',
    chapter: '指數與對數函數',
    question:
      '已知 $\\log2\\approx0.3010$，$\\log3\\approx0.4771$，試問 $3^{47}-3^{45}$ 為幾位數？',
    answer: '$23$',
    hasImage: false,
  },
  {
    id: '17c0e46cd15',
    chapter: '指數與對數函數',
    question:
      '在養分充足的情況下，細菌的數量會以指數函數的方式成長，假設細菌 $A$ 的數量每兩個小時可以成長為兩倍，細菌 $B$ 的數量每三個小時可以成長為三倍。若養分充足且一開始兩種細菌的數量相等，則大約幾小時後細菌 $B$ 的數量除以細菌 $A$ 的數量最接近 10？\n(1) 24 (2) 48 (3) 69 (4) 96 (5) 117',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '17c0e4b28e3',
    chapter: '指數與對數函數',
    question:
      '設地震芮氏規模 $r$，震央所釋放的能量 $E(r)$，其關係式為 $\\log E(r)=11.8+1.5r$，試問日本 311 規模 9.0 的強震所釋放出的能量約為臺灣 921 規模 7.3 地震所釋放能量的多少倍？($\\log2\\approx0.3010$，$\\log3\\approx0.4771$，$\\log7\\approx0.8451$)\n(1) 250 (2) 350 (3) 450 (4) 550 (5) 650',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '17c0e4f3e9f',
    chapter: '指數與對數函數',
    question:
      '聲音的強度為 $I$，規定其分貝數為 $d=10\\log\\dfrac I{10^{-12}}$，已知一支喇叭的分貝數為 107 分貝，若希望 $n$ 支喇叭齊鳴的分貝達到 120 分貝，求最小整數 $n$。($\\log2\\approx0.3$)',
    answer: '20',
    hasImage: false,
  },
  {
    id: '17c0e5c084b',
    chapter: '指數與對數函數',
    question:
      '已知氫原子核的質量約為 $1.7\\times10^{-27}$ 公斤，氫原子核的半徑約為 $10^{-15}$ 公尺，球體體積為 $\\frac43\\pi r^3\\approx4.2r^3$，其中 $r$ 為球半徑。請計算氫原子核的密度約為多少 $km/m^3$？(以科學記號表示，取一位有效數字)',
    answer: '$4\\times10^{17}$',
    hasImage: false,
  },
  {
    id: '17c0e6013ff',
    chapter: '指數與對數函數',
    question:
      '數學家把形如 $2^n-1$ 的質數稱為「梅森質數」，例如 $2^5-1=31$。目前人類所知最大的梅森質數為 $2^{82589933}-1$。請問此數最接近幾位數？($\\log\\approx0.3$)\n(1) 1000 萬位 (2) 1500 萬位 (3) 2000 萬位 (4) 2500 萬位 (5) 3000 萬位',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17bdeef5d0a',
    chapter: '指數與對數函數',
    question: '$(\\dfrac32)^{100}$ 的整數部分為幾位數？最高位數字為？',
    answer: '18；4',
    hasImage: false,
  },
  {
    id: '17bdef095bc',
    chapter: '指數與對數函數',
    question: '$(\\dfrac23)^{100}$ 自小數點後第幾位開始不為 0？此不為 0 的數字是？',
    answer: '18；2',
    hasImage: false,
  },
  {
    id: '17bdef3ebc0',
    chapter: '指數與對數函數',
    question:
      '圖為殘存在胃裡的藥量 ($y$ 毫克) 與服藥時間 ($x$ 小時) 的關係圖，若其關係式為指數函數 $y=c\\cdot a^x$，$c$ 是常數。(1) 求數對 $(a,c)$。\n(2) 若經過 1.5 小時候藥量殘存為 $k\\sqrt6$ 毫克，求 $k$。',
    answer: '(1) $(\\frac23,450)$ (2) 100',
    hasImage: true,
  },
  {
    id: '17bdef93b82',
    chapter: '指數與對數函數',
    question:
      '$y=2^x$ 的圖形與 $y=x+k$ 交於相異兩點 $P(a,b)$ 與 $Q(c,d)$，且 $a<c$。如圖為 $k=2$ 的情形。試問下列各選項哪些為真？\n(1) $0<b<d$ 必成立\n(2) $P$、$Q$ 不可在同一象限\n(3) $\\overline{PQ}$ 的長隨 $k$ 值的增加而遞增\n(4) $a$、$b$ 之值均隨 $k$ 的增加而遞增\n(5) $c$、$d$ 之值均隨 $k$ 的增加而遞增',
    answer: '(1)(3)(5)',
    hasImage: true,
  },
  {
    id: '17bdf089825',
    chapter: '指數與對數函數',
    question:
      '$a,b\\in\\mathbb R$，考慮函數 $y=2^{x+a}=b$ 的圖形，請問下列選項哪些為真？\n(1) 無論 $a,b$ 為何，函數圖形必過第一象限\n(2) 無論 $a,b$ 為何，函數圖形必過第二象限\n(3) 無論 $a,b$ 為何，函數圖形至少過兩個象限\n(4) 可找到實數 $a,b$ 使函數的圖形過四個象限\n(5) 若此函數的圖形通過原點，此時函數圖形必恰過兩個象限',
    answer: '(2)(3)(5)',
    hasImage: false,
  },
  {
    id: '17bdf0c183f',
    chapter: '指數與對數函數',
    question:
      '圖為 $y=b^{a-x}$ 的圖形，下列何者正確？\n(1) $a>0,b>1$\n(2) $a<0,b>1$\n(3) $a>0,0<b<1$\n(4) $a<0,0<b<1$\n(5) $a>1,b>1$',
    answer: '(4)',
    hasImage: true,
  },
  {
    id: '17bdf0e6546',
    chapter: '指數與對數函數',
    question:
      '設 $0<x<1$，請選出正確的選項。\n(1) $x^2<\\sqrt{x}<x$\n(2) $\\log x^2<\\log x<\\log\\sqrt{x}$\n(3) $\\log_2x^2<\\log x^2<\\log_2x$\n(4) $\\log x^2<\\log_2\\sqrt{x}<\\log x$',
    answer: '(2)(4)',
    hasImage: false,
  },
  {
    id: '17bdf1119f3',
    chapter: '指數與對數函數',
    question:
      '設 $x,y,z>0$ 且 $x,y,z\\neq1$，若 $\\log_2x=\\log_3y=\\log_6z$，則下列何者正確？(1) $x>y>z$ (2) $x<y<z$\n(3) $x+y=z$ (4) 若 $x\\in\\mathbb{Z}$，則 $y\\in\\mathbb{Z}$\n(5) 若 $x,y\\in\\mathbb{Z}$，則 $z\\in\\mathbb{Z}$',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '17bdf134773',
    chapter: '指數與對數函數',
    question:
      '下列哪些選項的值恰等於 $\\log_25$？\n(1) $\\log_{16}25$ (2) $\\log_52$ (3) $\\log_\\frac12\\dfrac15$\n(4) $\\log_23\\times\\log_35$ (5) $\\dfrac{\\log_{27}125}{\\log_94}$',
    answer: '(1)(3)(4)(5)',
    hasImage: false,
  },
  {
    id: '17bdf208be0',
    chapter: '指數與對數函數',
    question:
      '設 $(a_{n+1})^2=\\dfrac1{\\sqrt{10}}(a_n)^2$，$n\\in\\mathbb N$，且知 $a_n$ 皆為正。令 $b_n=\\log a_n$，則數列 $\\langle b_n\\rangle$ 為：\n(1) 公差為正的等差數列\n(2) 公差為負的等差數列\n(3) 公比為正的等比數列\n(4) 公比為負的等比數列\n(5) 既非等差亦非等比數列',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '17bdf223df1',
    chapter: '指數與對數函數',
    question: '設實數 $x$ 滿足 $0<x<1$，且 $\\log_x4-\\log_2x=1$，求 $x$。',
    answer: '$\\frac14$',
    hasImage: false,
  },
  {
    id: '17bdf238b24',
    chapter: '指數與對數函數',
    question: '若 $x^2+2(1+\\log_7k)x+(3+\\log_7k)=0$ 有兩相異實根，求實數 $k$ 的範圍。',
    answer: '$0<k<\\frac1{49}$ 或 $k>7$',
    hasImage: false,
  },
  {
    id: '17bdf25d197',
    chapter: '指數與對數函數',
    question:
      '在坐標平面上，$A(a,r)$、$B(b,s)$ 為函數圖形 $y=\\log_2x$ 上之兩點，其中 $a<b$。已知 $A$、$B$ 連線的斜率等於 2，且線段 $\\overline{AB}$ 長度為 $\\sqrt5$，求數對 $(a,b)$。',
    answer: '$(\\frac13,\\frac43)$',
    hasImage: false,
  },
  {
    id: '17bdf27ab1b',
    chapter: '指數與對數函數',
    question:
      '若 $(a,b)$ 是對數函數 $y=\\log x$ 圖形上的一點，則下列哪些選項中的點也在該對數函數的圖形上？ (1) (1,0) (2) $(10a,b+1)$\n(3) $(2a,2b)$ (4) $(\\dfrac1a,1-b)$ (5) $(a^2,2b)$',
    answer: '(1)(2)(5)',
    hasImage: false,
  },
  {
    id: '17bdf2c7a3c',
    chapter: '指數與對數函數',
    question:
      '圖中甲、乙、丙、丁、戊為五個函數的圖形，則：(1) $y=\\log_2x$ 的圖形為\n(2) $y=\\log_2(-x)$ 的圖形為\n(3) $y=-\\log_2x$ 的圖形為\n(4) $y=\\log_2(2x)$ 的圖形為\n(5) $y=\\log_2x^2$ 的圖形為',
    answer: '(1) 戊 (2) 甲 (3) 丙 (4) 丁 (5) 乙',
    hasImage: true,
  },
  {
    id: '17bdf3f2411',
    chapter: '指數與對數函數',
    question:
      '圖為函數 $y=a+\\log_b x$ 之部分圖形，其中 $a,b$ 皆為常數，則下列何者為真？\n(1) $a<0,b>1$ (2) $a>0,b>1$\n(3) $a=0,b>1$ (4) $a>0,0<b<1$\n(5) $a<0,0<b<1$',
    answer: '(5)',
    hasImage: true,
  },
  {
    id: '17bdf4330cf',
    chapter: '指數與對數函數',
    question:
      '下列哪些方程式有實數解？\n(1) $2^x=\\log_2x$\n(2) $(\\dfrac12)^2=\\log_\\frac12x$\n(3) $2^x=\\log_\\frac12x$\n(4) $2^x=x^2$\n(5) $\\log_2x=x-1$',
    answer: '(2)(3)(4)(5)',
    hasImage: false,
  },
  {
    id: '17bdf4864dd',
    chapter: '指數與對數函數',
    question:
      '$k\\in\\mathbb R$，考慮方程式 $\\log_2x+k=x$ 的實根，請問下列哪些為真？\n(1) 若 $x=8$ 為此方程式的實根，則 $k=5$\n(2) 若此方程式有解，則 $k>0$\n(3) 若實數 $k$ 使得方程式有解，則必恰有 2 個相異實根\n(4) 若 $\\log_2x+k=x$ 有實根，則 $\\log_2x+k=10x$ 也有實根\n(5) 若 $\\log_2x+k=x$ 有實根，則 $\\log_2x+k=\\frac{x}{10}$ 也有實根',
    answer: '(1)(2)(5)',
    hasImage: false,
  },
  {
    id: '17bdf4ca016',
    chapter: '指數與對數函數',
    question:
      '據統計，當一件訊息發布後，$t$ 小時內聽到該訊息的人口是總人口的 $100(1-2^{-kt})\\%$，其中 $k$ 為一個大於 0 的常數。今有一訊息，假設在發布後 3 小時之內已經有 70% 的人口聽到該訊息。又設最快 $T$ 小時後，有 99% 的人口已聽到該訊息，則 $T$ 最接近下列哪一選項？ (1) 5 (2) $7\\dfrac12$ (3) 9 (4) $11\\dfrac12$ (5) 13',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17b82e42744',
    chapter: '指數與對數函數',
    question:
      '坐標平面上，在函數圖形 $y=2^x$ 上，標示 $A$、$B$、$C$、$D$ 四個點，其 $x$ 坐標分別為 -1、0、1、2。請選出正確的選項。\n(1) 點 $B$ 落在直線 $AC$ 下方\n(2) 在直線 $AB$、直線 $BC$、直線 $CD$、直線 $CD$ 中，以直線 $CD$ 的斜率最大\n(3) $A$、$B$、$C$、$D$ 四點，以 $B$ 最靠近 $x$ 軸\n(4) $y=2x$ 與 $y=2^x$ 的圖形有兩個交點\n(5) 點 $A$ 與點 $C$ 對稱於 $y$ 軸',
    answer: '(1)(2)(4)',
    hasImage: false,
  },
  {
    id: '17b82e9f8ad',
    chapter: '指數與對數函數',
    question:
      '設 $a>0$ 且 $a\\ne1$，則 $y=a^x$ 的圖形與下列哪些直線必定會有交點？\n(1) $x$ 軸 (2) $y$ 軸 (3) $y=0.0001$\n(4) $y=10000$ (5) $y=-1$',
    answer: '(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '17b838818d6',
    chapter: '指數與對數函數',
    question: '$y=3^x$ 的圖形向左移 2 再向下移 4，得到 $y=f(x)$ 的圖形，求 $f(1)$。',
    answer: '23',
    hasImage: false,
  },
  {
    id: '17b838a2449',
    chapter: '指數與對數函數',
    question:
      '$y=2^x$ 的圖形與下列哪一個選項的函數圖形不相交？(1) $y=3^x$ (2) $y=3^x+1$\n(3) $y=3^x-1$ (4) $y=3^{x+1}$ (5) $y=3^{x-1}$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17b838e6907',
    chapter: '指數與對數函數',
    question: '方程式 $3^{x-2}=(\\dfrac19)^{x-5}$，求 $x$。',
    answer: '4',
    hasImage: false,
  },
  {
    id: '17b838fdeab',
    chapter: '指數與對數函數',
    question:
      '設 $x\\in\\mathbb R$，若 $\\dfrac18\\le(\\dfrac14)^{2x-1}\\le16$ 的解為 $a\\le x\\le b$，求數對 $(a,b)$。',
    answer: '$(-\\frac12,\\frac54)$',
    hasImage: false,
  },
  {
    id: '17b8394a0da',
    chapter: '指數與對數函數',
    question: '求 (1) $\\log_216$ (2) $\\log_3\\dfrac1{27}$ (3) $\\log_{25}5$',
    answer: '(1) 4 (2) -3 (3) $\\frac12$',
    hasImage: false,
  },
  {
    id: '17b8396d89b',
    chapter: '指數與對數函數',
    question:
      '若 $\\sqrt2^\\sqrt3=a$，則下列哪些選項正確？\n(1) $2^\\sqrt3=a^2$ (2) $\\sqrt2^3=a^2$ (3) $\\sqrt2=\\log_\\sqrt3a$\n(4) $\\sqrt3=\\log_\\sqrt2a$ (5) $\\sqrt3=\\log_2\\sqrt a$',
    answer: '(1)(4)',
    hasImage: false,
  },
  {
    id: '17b839a6f76',
    chapter: '指數與對數函數',
    question:
      '下列何者有意義？\n(1) $\\log_11$ (2) $\\log_51$ (3) $\\log_2(-4)$\n(4) $\\log_{-2}4$ (5) $\\log_{-3}(-27)$',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '17b839dee39',
    chapter: '指數與對數函數',
    question:
      '下列哪些選項的推論為真？\n(1) 由 $(-2)^3=-8$ 知 $\\log_{-2}(-8)=3$ 成立\n(2) 由 $(-2)^4=16$ 知 $\\log_{-2}16=4$ 成立\n(3) 由 $2^{-4}=\\dfrac1{16}$ 知 $\\log_2\\dfrac1{16}=-4$ 成立\n(4) 滿足 $\\log_x3=2$ 的 $x$ 會滿足 $x^2=3$\n(5) 滿足 $x^2=3$ 的 $x$ 會滿足 $\\log_x3=2$',
    answer: '(3)(4)',
    hasImage: false,
  },
  {
    id: '17b83aa9f1b',
    chapter: '指數與對數函數',
    question: '求 (1) $\\log_{10}25+\\log_{10}4$ (2) $\\log125-\\log\\dfrac18$',
    answer: '(1) 2 (2) 3',
    hasImage: false,
  },
  {
    id: '17b83ad833a',
    chapter: '指數與對數函數',
    question:
      '若 $x,y>0$ 滿足 $\\log x=2.8$，$\\log y=5.6$，則 $\\log(x^2+y)$ 最接近下列哪一個選項的值？\n($\\log2\\approx0.3010$)\n(1) 2.8 (2) 5.6 (3) 5.9 (4) 8.4 (5) 11.2',
    answer: '(3)',
    hasImage: false,
  },
  {
    id: '17b83af255b',
    chapter: '指數與對數函數',
    question: '求 $\\log_23\\times\\log_349\\times\\log_716$。',
    answer: '8',
    hasImage: false,
  },
  {
    id: '17b83b03143',
    chapter: '指數與對數函數',
    question: '若 $a=\\dfrac3{\\log_25}$，求 $25^a$。',
    answer: '64',
    hasImage: false,
  },
  {
    id: '17b83ba9624',
    chapter: '指數與對數函數',
    question:
      '將 $f(x)=\\log_2x$、$g(x)=\\log_5x$、$h(x)=\\log_{0.2}x$、$k(x)=\\log_{0.5}x$ 的圖形畫在坐標平面上，請問 $\\Gamma_3$ 是哪一個函數？',
    answer: '(3)',
    hasImage: true,
  },
  {
    id: '17b83bf21ed',
    chapter: '指數與對數函數',
    question:
      '坐標平面上，$\\Gamma_1$ 為 $y=\\log_2x$ 的圖形，$\\Gamma_2$ 為 $y=\\log_\\frac12x$ 的圖形。下列關於 $\\Gamma_1$ 與 $\\Gamma_2$ 的敘述，試選出正確的選項。\n(1) $\\Gamma_1$ 的圖形凹口向下\n(2) $\\Gamma_2$ 的圖形凹口向下\n(3) $\\Gamma_1$ 的圖形均在 $x$ 軸的上方\n(4) $\\Gamma_2$ 的圖形均在 $y$ 軸的右方\n(5) $\\Gamma_1$ 與 $\\Gamma_2$ 恰交於一點',
    answer: '(1)(4)(5)',
    hasImage: false,
  },
  {
    id: '17b83c5cb0a',
    chapter: '指數與對數函數',
    question:
      '三角函數 $y=\\sin x$ 的圖形與下列哪一個對數函數的圖形有最多個交點？\n(1) $y=\\log x+2$ (2) $y=\\log x+1$\n(3) $y=\\log x$ (4) $y=\\log x-1$\n(5) $y=\\log x-2$',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '17b83c84655',
    chapter: '指數與對數函數',
    question:
      '$f(x)=\\log_2x$ 的圖形經過哪個選項的動作，可以變成：\n(a) $g(x)=\\log_23x$ 的圖形？(多選)\n(b) $h(x)=\\log_2x^3$ 的圖形？(單選)\n(1) 左右平移 (2) 上下平移\n(3) 左右伸縮 (4) 上下伸縮',
    answer: '(a) (2)(3) (b) (4)',
    hasImage: false,
  },
  {
    id: '17b83cb16d1',
    chapter: '指數與對數函數',
    question: '方程式 $\\log_9x^5+7\\log_\\frac13x=18$，求 $x$。',
    answer: '$\\frac1{81}$',
    hasImage: false,
  },
  {
    id: '17b83cc07c7',
    chapter: '指數與對數函數',
    question: '不等式 $\\log_2(x+1)<3$，解為？',
    answer: '$-1<x<7$',
    hasImage: false,
  },
  {
    id: '17b83d0155c',
    chapter: '指數與對數函數',
    question:
      '設細菌的數量會以指數函數的方式成長，現有細菌 125 個，若經過 2 個小時候的細菌數為 8000 個，求現在起算 20 分鐘後的細菌數。',
    answer: '250',
    hasImage: false,
  },
  {
    id: '17b83d31116',
    chapter: '指數與對數函數',
    question:
      '化學家利用水溶液的氫離子濃度 $[H^+]$ 來定義酸鹼 $pH$ 值，公式為 $pH=-\\log_{10}[H^+]$。若甲溶液的氫離子濃度是乙溶液的 20 倍，則甲溶液的 $pH$ 值比乙溶液的 $pH$ 值小，求兩者相減的差。($\\log2\\approx0.3$)',
    answer: '1.3',
    hasImage: false,
  },
  {
    id: '17b6d04948c',
    chapter: '指數與對數函數',
    question: '化簡 $\\log_23\\cdot\\log_764\\cdot\\log_35\\cdot\\log_549$。',
    answer: '12',
    hasImage: false,
  },
  {
    id: '17b6d058070',
    chapter: '指數與對數函數',
    question: '化簡 $(\\log_25+\\log_40.2)(\\log_52+\\log_{25}0.5)$。',
    answer: '$\\frac14$',
    hasImage: false,
  },
  {
    id: '17b6d06bf94',
    chapter: '指數與對數函數',
    question:
      '化簡 $2\\log\\frac{5}{3}-\\log\\frac{7}{4}+2\\log3+\\frac{1}{2}\\log49+9^{\\log_32}$。',
    answer: '$6$',
    hasImage: false,
  },
  {
    id: '17b6d08358d',
    chapter: '指數與對數函數',
    question:
      '請利用 $\\log2\\approx0.301$，$\\log3\\approx0.477$ 估計 $\\log_{12}54$ 之近似值至小數點後第三位。',
    answer: '$1.605$',
    hasImage: false,
  },
  {
    id: '17b6d09515d',
    chapter: '指數與對數函數',
    question:
      '請利用 $\\log2\\approx0.301$，$\\log7\\approx0.845$ 估計 $\\log_{28}350$ 之近似值至小數點後第二位。',
    answer: '$1.76$',
    hasImage: false,
  },
  {
    id: '17b6d0af5c2',
    chapter: '指數與對數函數',
    question:
      '下列各數哪些為正數？\n(1) $\\sqrt{2}-\\sqrt[3]{2}$\n(2) $\\log_23-1$\n(3) $\\log_32-1$\n(4) $\\log_\\frac{1}{2}3$\n(5) $\\log_\\frac{1}{3}\\frac{1}{2}$',
    answer: '(1)(2)(5)',
    hasImage: false,
  },
  {
    id: '17b6d0c7079',
    chapter: '指數與對數函數',
    question:
      '設 $a,b,c\\in\\mathbb{N}$，若 $a\\log_{520}2+b\\log_{520}5+c\\log_{520}13=3$，求 $a+b+c$。',
    answer: '$15$',
    hasImage: false,
  },
  {
    id: '17b6d0d6a5e',
    chapter: '指數與對數函數',
    question: '化簡 $243^{\\frac{\\log2}{\\log3}}$。',
    answer: '$32$',
    hasImage: false,
  },
  {
    id: '17b6d0f523f',
    chapter: '指數與對數函數',
    question: '化簡 $9^{\\log_\\sqrt{3}2}+3^{\\frac{2}{\\log_53}}$。',
    answer: '$41$',
    hasImage: false,
  },
  {
    id: '17b6d109ae1',
    chapter: '指數與對數函數',
    question: '若 $\\log_32=a$，以 $a$ 表示 $\\log_23$、$\\log_318$。',
    answer: '$\\frac{1}{a}$；$2+a$',
    hasImage: false,
  },
  {
    id: '17b6d122a39',
    chapter: '指數與對數函數',
    question: '若 $\\log_23=a$，$\\log_311=b$，試以 $a$、$b$ 表示 $\\log_{66}99$。',
    answer: '$\\frac{2a+ab}{1+a+ab}$',
    hasImage: false,
  },
  {
    id: '17b6d139eb5',
    chapter: '指數與對數函數',
    question:
      '已知 $\\log2\\approx0.301$，試比較 $\\log_{0.2}0.5$、$\\log_25$、$\\log_{20}50$ 的大小。',
    answer: '$\\log_25>\\log_{20}50>\\log_{0.2}0.5$',
    hasImage: false,
  },
  {
    id: '17add025b6b',
    chapter: '指數與對數函數',
    question:
      '設指數函數 $f(x)=\\left(\\frac{16}{81}\\right)^x$，求：\n(1) $f(-1)$ (2) $f\\left(\\frac{1}{4}\\right)$ (3) $f\\left(f\\left(-\\frac{1}{4}\\right)\\right)$',
    answer: '(1) $\\frac{81}{16}$ (2) $\\frac{2}{3}$ (3) $\\frac{64}{729}$',
    hasImage: false,
  },
  {
    id: '17add067cad',
    chapter: '指數與對數函數',
    question:
      '設 $f(x)=4^x$，$g(x)=9^x$，求：\n(1) $g\\left(f\\left(\\frac{1}{2}\\right)\\right)$ (2) $f\\left(g\\left(\\frac{1}{2}\\right)\\right)$ ',
    answer: '(1) $81$ (2) $64$',
    hasImage: false,
  },
  {
    id: '17add1475e9',
    chapter: '指數與對數函數',
    question:
      '若 $A(p,7)$ 與 $B(q,28)$ 都在 $f(x)=2^x$ 的圖形上，即 $f(p)=7$ 且 $f(q)=28$，求 $\\overline{AB}$。',
    answer: '$\\sqrt{445}$',
    hasImage: false,
  },
  {
    id: '17add167ddc',
    chapter: '指數與對數函數',
    question: '若 $A(a,5)$ 與 $B(b,45)$ 都在 $y=3^x$ 的圖形上，則 $\\overline{AB}$ 的斜率。',
    answer: '$20$',
    hasImage: false,
  },
  {
    id: '17add19ee19',
    chapter: '指數與對數函數',
    question:
      '設 $0\\le x\\le3$，則 $f(x)=2^{x+2}-4^x+15$ 的最大值及此時的 $x$、最小值及此時的 $x$。',
    answer: '$19$，$1$；$-17$，$3$',
    hasImage: false,
  },
  {
    id: '17add1d9067',
    chapter: '指數與對數函數',
    question: '設 $-1\\le x\\le0$，則 $y=2^{x+2}-3\\cdot4^x$ 的最大值及最小值。',
    answer: '$\\frac{4}{3}$；$1$',
    hasImage: false,
  },
  {
    id: '17add1f09ec',
    chapter: '指數與對數函數',
    question: '求 $f(x)=(9^x+9^{-x})-2(3^x+3^{-x})+7$ 的最小值及此時的 $x$。',
    answer: '$5$；$0$',
    hasImage: false,
  },
  {
    id: '17add1fd219',
    chapter: '指數與對數函數',
    question: '$f(x)=3(4^x+4^{-x})-10(2^x+2^{-x})+5$ 的最小值及此時的 $x$。',
    answer: '$0$；$-9$',
    hasImage: false,
  },
  {
    id: '17adeaaa7ef',
    chapter: '指數與對數函數',
    question:
      '設 $a,b,c,d>0$，若指數函數 $y=a^x$、$y=b^x$、$y=c^x$、$y=d^x$ 的圖形如附圖，請比較 $a$、$b$、$c$、$d$、$1$ 的大小。',
    answer: '$c>d>1>a>b$',
    hasImage: true,
  },
  {
    id: '17adeae3659',
    chapter: '指數與對數函數',
    question:
      '已知 $y=a^x$、$y=b^x$、$y=c^x$ 的圖形如附圖，則下列哪些選項為真？\n(1) $a>b$ (2) $b>c$ (3) $c>1$\n(4) $P$ 點的 $x$ 坐標為 $1$ (5) $P$ 點的 $y$ 坐標為 $1$',
    answer: '(1)(5)',
    hasImage: true,
  },
  {
    id: '17adeb24157',
    chapter: '指數與對數函數',
    question:
      '求 $y=2^x$ 的圖形沿 $x$ 軸的方向平移 $-3$，再沿 $y$ 軸的方向平移 $+2$，再以 $x$ 軸為中心上下顛倒，所得函數為？',
    answer: '$y=-2^{x+3}-2$',
    hasImage: false,
  },
  {
    id: '17adeb469db',
    chapter: '指數與對數函數',
    question:
      '求 $y=5^x$ 的圖形向右平移 $4$，再向下平移 $3$，再以 $x$ 軸為中心上下顛倒，所得函數為？',
    answer: '$y=-5^{x-4}+3$',
    hasImage: false,
  },
  {
    id: '17adeb7859b',
    chapter: '指數與對數函數',
    question: '方程式 $2^x=x+6$ 共有幾個相異實根？這些相異實根各介於哪些連續整數之間？',
    answer: '$2$；$-6\\sim-5$、$3\\sim4$',
    hasImage: false,
  },
  {
    id: '17adeb9bb40',
    chapter: '指數與對數函數',
    question: '試問方程式 $2^x+x=0$ 有幾個實根？介於哪兩個連續整數之間？',
    answer: '$1$；$-1\\sim0$',
    hasImage: false,
  },
  {
    id: '17adeba6aa0',
    chapter: '指數與對數函數',
    question: '方程式 $2^x-x^2=0$ 共有幾個實根？',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '17adebb1ce6',
    chapter: '指數與對數函數',
    question: '方程式 $2^{|x|}=x^2$ 共有幾個實根？',
    answer: '$4$',
    hasImage: false,
  },
  {
    id: '17ae0ca8ec4',
    chapter: '指數與對數函數',
    question: '若 $8^{x-3}\\cdot\\sqrt{2}=32\\cdot\\sqrt[3]{4^x}$，求 $x$。',
    answer: '$\\frac{81}{14}$',
    hasImage: false,
  },
  {
    id: '17ae0cb5a82',
    chapter: '指數與對數函數',
    question: '若 $9^{x+1}\\cdot\\sqrt[4]{27}=81\\cdot\\sqrt{3^x}$，求 $x$。',
    answer: '$\\frac{5}{6}$',
    hasImage: false,
  },
  {
    id: '17ae0cc95b8',
    chapter: '指數與對數函數',
    question: '若 $4^{-x}-3\\cdot2^{2-x}+32=0$，求 $x$。',
    answer: '$-2$ 或 $-3$',
    hasImage: false,
  },
  {
    id: '17ae0cc95b9',
    chapter: '指數與對數函數',
    question: '若 $9^x+3=4\\cdot3^x$，求 $x$。',
    answer: '$0$ 或 $1$',
    hasImage: false,
  },
  {
    id: '17ae0cf60fe',
    chapter: '指數與對數函數',
    question: '若 $\\frac{4^x}{32}<8\\sqrt{2}<\\frac{1}{128^{-x}}$，求 $x$ 的範圍。',
    answer: '$\\frac{1}{2}<x<\\frac{17}{4}$',
    hasImage: false,
  },
  {
    id: '17ae0d2130e',
    chapter: '指數與對數函數',
    question:
      '(1) 若 $\\frac{1}{16}<\\left(\\frac{1}{2}\\right)^{2x+3}<8$，求 $x$ 的範圍。\n(2) 若 $0.01^{2x-1}>0.001^x$，求 $x$ 的範圍。',
    answer: '(1) $\\frac{1}{2}>x>-3$ (2) $x<2$',
    hasImage: false,
  },
  {
    id: '17ae0d2dc38',
    chapter: '指數與對數函數',
    question: '若 $3^{2x}+1<3^{x+2}+3^{x-2}$，求 $x$ 的範圍。',
    answer: '$-2<x<2$',
    hasImage: false,
  },
  {
    id: '17ae0d3ce5f',
    chapter: '指數與對數函數',
    question: '若 $4^x-9\\cdot2^x+8\\le0$，求 $x$ 的範圍。',
    answer: '$0\\le x\\le3$',
    hasImage: false,
  },
  {
    id: '17ae0d78968',
    chapter: '指數與對數函數',
    question:
      '設某病毒入侵宿主後，病毒的數量每經過 $1$ 日會增加 $a$ 倍，已知 $3$ 日後病毒數為 $200000$，$4\\frac{1}{2}$ 日後病毒數為 $1600000$，求：\n(1) $a$ (2) $\\frac{3}{2}$ 日後的病毒數',
    answer: '(1) $3$ (2) $25000$',
    hasImage: false,
  },
  {
    id: '17ae0dc978e',
    chapter: '指數與對數函數',
    question:
      '某實驗的細菌原有數目為 $N$ 個，經過 $x$ 天後細菌數成長為 $N\\cdot a^x$ 個。已知 $2$ 天後細菌數為 $5\\cdot10^5$ 個，$5$ 天後細菌數為 $4\\cdot10^6$ 個，下列敘述哪些正確？\n(1) $N$ 的值為 $12500$\n(2) $a$ 的值為 $2$\n(3) $8$ 天後的細菌數為 $3.2\\cdot10^7$\n(4) $8$ 天後的細菌數為 $4$ 天後細菌數的 $8$ 倍\n(5) 細菌數由原來的 $N$ 變成 $1.28\\cdot10^8$ 需要 $12$ 天',
    answer: '(2)(3)',
    hasImage: false,
  },
  {
    id: '17ae5f1c093',
    chapter: '指數與對數函數',
    question: '(1) $10^{\\log7}=$\n　\n(2) $100^{\\log3}=$\n　\n(3) $0.0001^{\\log\\sqrt{2}}=$\n　',
    answer: '(1) $7$ (2) $9$ (3) $\\frac{1}{4}$',
    hasImage: false,
  },
  {
    id: '17ae5f45610',
    chapter: '指數與對數函數',
    question:
      '(1) $10^{\\log2+\\log3}=$\n　\n(2) $10^{3\\log2}$=\n　\n(3) $1000^{\\log5}=$\n　\n(4) $\\left(\\frac{1}{1000}\\right)^{\\log7}=$',
    answer: '(1) $6$ (2) $8$ (3) $125$ (4) $\\frac{1}{343}$',
    hasImage: false,
  },
  {
    id: '17ae5f8d033',
    chapter: '指數與對數函數',
    question:
      '(1) $\\log10^\\sqrt{2}=$\n　\n(2) $\\log1000^{-\\frac{5}{2}}=$\n　\n(3) $\\log\\sqrt[7]{0.0001}=$\n　',
    answer: '(1) $\\sqrt{2}$ (2) $-\\frac{15}{2}$ (3) $-\\frac{4}{7}$',
    hasImage: false,
  },
  {
    id: '17ae5fad1a6',
    chapter: '指數與對數函數',
    question:
      '(1) $\\log100000=$\n　\n(2) $\\log1000^{-\\frac{1}{2}}=$\n　\n(3) $\\log100\\sqrt[3]{100}=$\n　\n(4) $\\log\\sqrt[5]{0.0001}=$\n　',
    answer: '(1) $5$ (2) $-\\frac{3}{2}$ (3) $\\frac{8}{3}$ (4) $-\\frac{4}{5}$',
    hasImage: false,
  },
  {
    id: '17ae5fed86d',
    chapter: '指數與對數函數',
    question: '若 $\\log a=2.3$，$\\log b=1.4$，$\\log c=-0.7$，求：(1) $abc$ (2) $\\log100a^2$',
    answer: '(1) $1000$ (2) $6.6$',
    hasImage: false,
  },
  {
    id: '17ae60099ab',
    chapter: '指數與對數函數',
    question:
      '若 $\\log a=-4.38$，$\\log b=3.74$，$\\log c=5.12$，求：(1) $\\log1000a^5$ (2) $\\frac{b}{ac}$',
    answer: '(1) $-18.9$ (2) $1000$',
    hasImage: false,
  },
  {
    id: '17ae604b198',
    chapter: '指數與對數函數',
    question:
      '(1) $\\log_31=$　　　　(2) $\\log_77=$\n　\n(3) $\\log_264=$　　 　(4) $\\log_{125}5=$\n　\n(5) $\\log_{27}81=$　　　(6) $\\log_4\\frac{1}{2}=$\n　',
    answer: '(1) $0$ (2) $1$ (3) $6$ (4) $\\frac{1}{3}$ (5) $\\frac{4}{3}$ (6) $-\\frac{1}{2}$',
    hasImage: false,
  },
  {
    id: '17ae606d134',
    chapter: '指數與對數函數',
    question:
      '(1) $\\log_{10}1000=$　　 (2) $\\log_3243=$\n　\n(3) $\\log_2\\frac{1}{16}=$　 　 　 (4) $\\log_{27}9=$\n　\n(5) $\\log_8\\frac{1}{4}=$　　　　(6) $\\log_\\frac{9}{4}\\frac{8}{27}=$\n　',
    answer: '(1) $3$ (2) $5$ (3) $-4$ (4) $\\frac{2}{3}$ (5) $-\\frac{2}{3}$ (6) $-\\frac{3}{2}$',
    hasImage: false,
  },
  {
    id: '17ae61ed92d',
    chapter: '指數與對數函數',
    question:
      '設 $x,y>0$ 滿足 $\\log_9x=-\\frac{1}{2}$，$\\log_8y=\\frac{2}{3}$，試化簡 $\\log_\\sqrt{7}(27x+10y)$。',
    answer: '$4$',
    hasImage: false,
  },
  {
    id: '17ae620a4f1',
    chapter: '指數與對數函數',
    question: '設 $x,y>0$ 滿足 $\\log_8x=5$，$\\log_8y=7$，求 $\\log_2(64x+3y)$。',
    answer: '$23$',
    hasImage: false,
  },
  {
    id: '17ae6225c92',
    chapter: '指數與對數函數',
    question:
      '判別下列各對數符號，哪些無意義？\n(1) $\\log_21$\n(2) $\\log_12$\n(3) $\\log_2(-4)$\n(4) $\\log_{-2}4$\n(5) $\\log_30$',
    answer: '(2)(3)(4)(5)',
    hasImage: false,
  },
  {
    id: '17ae6234b20',
    chapter: '指數與對數函數',
    question: '若 $\\log_{(x+1)}(-2x+5)$ 有意義，求 $x$ 的範圍。',
    answer: '$-1<x<\\frac{5}{2}$',
    hasImage: false,
  },
  {
    id: '17ae624a1e8',
    chapter: '指數與對數函數',
    question: '若 $\\log_{(2x-1)}(-x^2+2x+3)$ 有意義，求 $x$ 的範圍。',
    answer: '$\\frac{1}{2}<x<3$ 且 $x\\neq1$',
    hasImage: false,
  },
  {
    id: '17ae62b51b8',
    chapter: '指數與對數函數',
    question: '若 $\\log_x(2x^2+5x-3)$ 有意義，求 $x$ 的範圍。',
    answer: '$x>\\frac{1}{2}$ 且 $x\\neq1$',
    hasImage: false,
  },
  {
    id: '17ae6a3c867',
    chapter: '指數與對數函數',
    question:
      '求 $\\log_\\sqrt{10}\\frac{7}{36}+\\log_\\sqrt{10}32-\\log_\\sqrt{10}\\frac{14}{25}$+\\log_\\sqrt{10}9。',
    answer: '$4$',
    hasImage: false,
  },
  {
    id: '17ae6a53e50',
    chapter: '指數與對數函數',
    question: '求 $\\log\\frac{50}{9}-\\log\\frac{3}{70}+\\log\\frac{27}{35}。',
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '17ae6a666b5',
    chapter: '指數與對數函數',
    question:
      '若 $\\log_4\\sqrt{3}+\\log_881+\\log_\\frac{1}{16}27$+\\log_\\sqrt{2}\\sqrt[5]{9}=k\\log_23$，求 $k$。',
    answer: '$\\frac{49}{30}$',
    hasImage: false,
  },
  {
    id: '17ae6a775db',
    chapter: '指數與對數函數',
    question: '若 $\\log_{25}27+\\log_\\sqrt{5}9+\\log_{125}81$=k\\log_53$，求 $k$。',
    answer: '$\\frac{41}{6}$',
    hasImage: false,
  },
  {
    id: '17ae6a8e308',
    chapter: '指數與對數函數',
    question:
      '$3\\log_2\\frac{3}{7}+2\\log_2\\frac{14}{5}-\\log_\\sqrt{2}\\frac{3}{5}+\\log_4\\frac{196}{9}$。',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '17ae6aa7a42',
    chapter: '指數與對數函數',
    question: '求 $2\\log_3\\frac{6}{5}+4\\log_3\\frac{15}{2}-\\log_3\\frac{25}{4}$。',
    answer: '$6$',
    hasImage: false,
  },
  {
    id: '17ae6ac1ade',
    chapter: '指數與對數函數',
    question: '求 $(\\log_29)(\\log_\\sqrt{3}49)(\\log_\\frac{1}{7}8)$。',
    answer: '$-24$',
    hasImage: false,
  },
  {
    id: '17ae6adeca9',
    chapter: '指數與對數函數',
    question:
      '求 $(\\log_52+\\log_{125}8)\\cdot(\\log_43+\\log_\\sqrt{2}27)\\cdot$(\\log_30.2+\\log_95)$。',
    answer: '$-\\frac{13}{2}$',
    hasImage: false,
  },
  {
    id: '17ae6b46b56',
    chapter: '指數與對數函數',
    question: '求 $(\\log_23+\\log_49)(\\log_34+\\log_92)$。',
    answer: '$5$',
    hasImage: false,
  },
  {
    id: '17ae6b5218c',
    chapter: '指數與對數函數',
    question: '求 $\\log_23\\cdot\\log_35\\cdot\\log_57\\cdot\\log_716$。',
    answer: '$4$',
    hasImage: false,
  },
  {
    id: '17ae6b70865',
    chapter: '指數與對數函數',
    question: '求 $9^\\frac{1}{\\log_23}+2^{-\\log_29}-5^\\frac{\\log2}{\\log5}$。',
    answer: '$\\frac{7}{3}$',
    hasImage: false,
  },
  {
    id: '17ae6b80861',
    chapter: '指數與對數函數',
    question: '求 $2^\\frac{\\log7}{\\log2}+3^\\frac{\\log64}{\\log9}$。',
    answer: '$15$',
    hasImage: false,
  },
  {
    id: '17ae6b9d6f2',
    chapter: '指數與對數函數',
    question: '若 $\\log_26=a$，試以 $a$ 表示 $\\log_{18}24$。',
    answer: '$\\frac{a+2}{2a-1}$',
    hasImage: false,
  },
  {
    id: '17ae6bac331',
    chapter: '指數與對數函數',
    question: '若 $\\log_23=a$，$\\log_311=b$，試以 $a,b$ 表示 $\\log_{44}66$。',
    answer: '$\\frac{1+a+ab}{2+ab}$',
    hasImage: false,
  },
  {
    id: '17ae6bbd35e',
    chapter: '指數與對數函數',
    question: '若 $\\log_25=a$，試以 $a$ 表示 $\\log_{10}2$、$\\log_820$。',
    answer: '$\\frac{1}{a+1}$；$\\frac{a+2}{3}$',
    hasImage: false,
  },
  {
    id: '17ae6bd65a5',
    chapter: '指數與對數函數',
    question:
      '若 $\\log_23=a$，$\\log_37=b$，$\\log_711=c$，試以 $a,b,c$ 表示 $\\log_{42}56$、$\\log_{126}66$。',
    answer: '$\\frac{3+ab}{1+a+ab}$；$\\frac{1+a+abc}{1+ab+2a}$',
    hasImage: false,
  },
  {
    id: '17ae6bec748',
    chapter: '指數與對數函數',
    question:
      '請利用 $\\log2\\approx0.3$，比較 $a=\\log_{0.4}0.5$、$b=\\log_{0.5}0.4$、$c=\\log_54$、$d=\\log_45$ 的大小。',
    answer: '$b>d>c>a$',
    hasImage: false,
  },
  {
    id: '17ae6c10a1b',
    chapter: '指數與對數函數',
    question:
      '$\\log2\\approx0.3010$、$\\log3\\approx0.4771$，試比較 $a=\\log_{0.2}0.3$、$b=\\log_23$、$c=\\log_{20}30$ 的大小。',
    answer: '$b>c>a$',
    hasImage: false,
  },
  {
    id: '17ae6c1ef4f',
    chapter: '指數與對數函數',
    question:
      '$\\log2\\approx0.3010$、$\\log3\\approx0.4771$，比較 $a=2^{52}$、$b=3^{33}$、$c=6^{20}$ 的大小。',
    answer: '$b>a>c$',
    hasImage: false,
  },
  {
    id: '17ae6c2a995',
    chapter: '指數與對數函數',
    question:
      '$\\log2\\approx0.3010$、$\\log3\\approx0.4771$，比較 $a=2^{31}$、$b=5^{14}$、$c=6^{12}$ 之大小。',
    answer: '$b>c>a$',
    hasImage: false,
  },
  {
    id: '17aeb0fa9a0',
    chapter: '指數與對數函數',
    question: '請畫出 $y=|\\log_2x|$ 與 $y=\\log_2|x|$的圖形',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17aeb146f71',
    chapter: '指數與對數函數',
    question:
      '下列各選項的敘述哪些正確？\n(1) $y=\\log_2x$ 與 $y=\\log_\\frac{1}{2}x$ 對稱於 $x$ 軸\n(2) $y=2^x$ 與 $y=x^2$ 對稱於 $y$ 軸\n(3) $y=2^x$ 與 $y=\\log_\\frac{1}{2}x$ 對稱於直線 $y=x$\n(4) $y=2^x$ 與 $y=-2^{-x}$ 對稱於原點',
    answer: '(1)(4)',
    hasImage: false,
  },
  {
    id: '17aeb19c233',
    chapter: '指數與對數函數',
    question:
      '將 $f(x)=\\log_2x$ 的圖形向右平移 $12$，再向上平移 $2$，所得的新函數為 $g(x)=\\log_2(ax+b)$，求 $(a,b)$ 及 $y=f(x)$ 與 $y=g(x)$ 圖形的交點坐標。',
    answer: '$(4,-48)$；$(16,4)$',
    hasImage: false,
  },
  {
    id: '17aeb1c1116',
    chapter: '指數與對數函數',
    question:
      '設 $y=\\log_5x$ 的圖形為 $\\Gamma$：\n(1) 將 $\\Gamma$ 向左平移 $3$，再向上平移 $2$，所得的新函數為？\n(2) 將 $\\Gamma$ 沿 $x$ 軸正向移 $a$，再沿 $y$ 軸正向移 $b$，所得新函數為 $y=\\log_5(25x-8)$，求數對 $(a,b)$。',
    answer: '(1) $y=\\log_5(x+3)+2$ (2) $\\left(\\frac{8}{25},2\\right)',
    hasImage: false,
  },
  {
    id: '17aeb1e46b6',
    chapter: '指數與對數函數',
    question:
      '設直線 $x=7$ 與 $x=56$ 分別交曲線 $f(x)=\\log_4x$ 於 $A$、$B$ 兩點，求 $\\overline{AB}$ 斜率',
    answer: '$\\frac{3}{98}$',
    hasImage: false,
  },
  {
    id: '17aeb1f4387',
    chapter: '指數與對數函數',
    question:
      '設直線 $x=3$ 與 $x=12$ 分別交曲線 $f(x)=\\log_2x$ 於 $A$、$B$ 兩點，求 $\\overline{AB}$ 斜率及長度。',
    answer: '$\\frac{2}{9}$；$\\sqrt{85}$',
    hasImage: false,
  },
  {
    id: '17aeb219ce4',
    chapter: '指數與對數函數',
    question: '方程式 $x-\\log_2|x|=1$ 有幾個實根？其中整數解為？',
    answer: '$3$ 個；$1$ 或 $2$',
    hasImage: false,
  },
  {
    id: '17aeb22d8bd',
    chapter: '指數與對數函數',
    question: '方程式 $x^2=|\\log_2x|$ 有幾個實根？介於哪些相鄰整數之間？',
    answer: '$1$ 個；$0\\sim1$',
    hasImage: false,
  },
  {
    id: '17aeb2ddd82',
    chapter: '指數與對數函數',
    question: '若 $\\log_2(x+3)+\\log_2(x-1)=5$，求 $x$。',
    answer: '$5$',
    hasImage: false,
  },
  {
    id: '17aeb2e9907',
    chapter: '指數與對數函數',
    question: '若 $\\log_6x+\\log_6(x-1)=1$，求 $x$。',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '17aeb2f8038',
    chapter: '指數與對數函數',
    question: '求方程式 $(\\log_24x)(\\log_22x)=2$ 的解。',
    answer: '$1$ 或 $\\frac{1}{8}$',
    hasImage: false,
  },
  {
    id: '17aeb307aec',
    chapter: '指數與對數函數',
    question: '若 $(\\log_327x)\\left(\\log_3\\frac{x}{9}\\right)=6$，求 $x$。',
    answer: '$27$ 或 $\\frac{1}{81}$',
    hasImage: false,
  },
  {
    id: '17aeb31a75d',
    chapter: '指數與對數函數',
    question: '若 $\\log(10^x+100)=\\frac{x}{2}+1+\\log2$，求 $x$',
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '17aeb343fde',
    chapter: '指數與對數函數',
    question: '若 $\\log_\\frac{1}{4}x+2\\log_{16}x^2-3=0$，求 $x$。',
    answer: '$64$',
    hasImage: false,
  },
  {
    id: '17aeb357a30',
    chapter: '指數與對數函數',
    question: '若 $\\log x-6\\log_x10+1=0$，求 $x$。',
    answer: '$\\frac{1}{1000}$ 或 $100$',
    hasImage: false,
  },
  {
    id: '17aeb361fcd',
    chapter: '指數與對數函數',
    question: '若 $\\log_3x-\\log_x9+1=0$，求 $x$。',
    answer: '$\\frac{1}{9}$ 或 $3$',
    hasImage: false,
  },
  {
    id: '17aeb379ce4',
    chapter: '指數與對數函數',
    question: '解 $1<\\log(3x-2)<4$，求 $x$ 的範圍。',
    answer: '$4<x<3334$',
    hasImage: false,
  },
  {
    id: '17aeb3aa3b3',
    chapter: '指數與對數函數',
    question: '若 $\\log_2(x-1)>1+\\log_4(x^2-3x+2)$，求 $x$ 的範圍。',
    answer: '$2<x<\\frac{7}{3}$',
    hasImage: false,
  },
  {
    id: '17aeb3b97f3',
    chapter: '指數與對數函數',
    question: '若 $\\log_\\frac{1}{2}(x-1)>\\log_\\frac{1}{4}(2x+1)$，求 $x$ 的範圍。',
    answer: '$1<x<4$',
    hasImage: false,
  },
  {
    id: '17aeb3cd780',
    chapter: '指數與對數函數',
    question: '若 $\\log_\\frac{1}{2}(2x+6)>\\log_\\frac{1}{2}(x^2-x+2)$，求 $x$ 的範圍。',
    answer: '$-3<x<-1$ 或 $x>4$',
    hasImage: false,
  },
  {
    id: '17aeb3ec4f6',
    chapter: '指數與對數函數',
    question: '設 $x>0$，求 $f(x)=\\log x\\cdot\\log\\frac{10000}{x}$ 的最大值，及此時的 $x$。',
    answer: '$4$；$100$',
    hasImage: false,
  },
  {
    id: '17aeb3fc905',
    chapter: '指數與對數函數',
    question: '求 $f(x)=\\log(x-5)+\\log(25-x)$ 的最大值及此時的 $x$。',
    answer: '$2$；$15$',
    hasImage: false,
  },
  {
    id: '17aeb44ce8e',
    chapter: '指數與對數函數',
    question:
      '聲音的分貝 $dB$ 是以發聲體的強度 $I$ 來計算，強度 $I$ 換算成分貝 $dB$ 的公式為 $dB(I)=10\\cdot\\log\\frac{I}{10^{-12}}$。已知一隻狂吠的狗可測得音量為 $70$ 分貝，若有四十隻狗同時狂吠，則音量可達幾分貝？($\\log2\\approx0.3$)',
    answer: '$86$',
    hasImage: false,
  },
  {
    id: '17aeb496b8e',
    chapter: '指數與對數函數',
    question:
      '我們利用水溶液中氫離子濃度 $[H^+]$ 來定義此溶液的「酸鹼 $pH$ 值」，公式為 $pH=-\\log_{10}[H^+]$。若有一個水溶液的氫離子濃度為 $[H^+]=6\\times10^{-11}$，求此溶液的 $pH$ 值。($\\log2\\approx0.301$，$\\log3\\approx0.477$，四捨五入至小數點後第一位)',
    answer: '$10.2$',
    hasImage: false,
  },
  {
    id: '17b476c2e8f',
    chapter: '指數與對數函數',
    question: '若 $\\log_\\frac{3}{2}x=2$，求 $x$。',
    answer: '$\\frac{9}{4}$',
    hasImage: false,
  },
  {
    id: '17b476efa37',
    chapter: '指數與對數函數',
    question:
      '試計算下列各式：\n(1) $\\log_24\\sqrt{2}$\n(2) $\\log_9243$\n(3) $\\log\\sqrt{100000}$\n(4) $\\log_\\frac{3}{2}\\frac{2}{3}$\n(5) $\\log_\\frac{1}{2}32$\n(6) $\\log_\\frac{1}{4}\\sqrt{2}$',
    answer:
      '(1) $\\frac{5}{2}$ (2) $\\frac{5}{2}$ (3) $\\frac{5}{2}$ (4) $-1$ (5) $-5$ (6) $-\\frac{1}{4}$',
    hasImage: false,
  },
  {
    id: '17b476fd22f',
    chapter: '指數與對數函數',
    question: '化簡 $\\log_2(\\log_2(\\log_381))。',
    answer: '$1$',
    hasImage: false,
  },
  {
    id: '17b4770ccb0',
    chapter: '指數與對數函數',
    question: '化簡 $\\log_2\\sqrt{\\frac{7}{48}}+\\log_212-\\frac{1}{2}\\log_242$。',
    answer: '$-\\frac{1}{2}$',
    hasImage: false,
  },
  {
    id: '17b4771c7a2',
    chapter: '指數與對數函數',
    question:
      '化簡 $\\log\\frac{2}{1}+\\log\\frac{3}{2}+\\log\\frac{4}{3}+\\cdots+\\log\\frac{1000}{999}$。',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '17b4773ba58',
    chapter: '指數與對數函數',
    question:
      '化簡 $\\log_{2\\sqrt{2}}\\sqrt[3]{128}+\\log_{9\\sqrt{3}}\\frac{\\sqrt[4]{3}}{81}$。',
    answer: '$\\frac{1}{18}$',
    hasImage: false,
  },
  {
    id: '17b4774c614',
    chapter: '指數與對數函數',
    question: '化簡 $\\log_\\frac{1}{2}(\\sqrt{7+\\sqrt{40}}-\\sqrt{7-\\sqrt{40}})。',
    answer: '$-\\frac{3}{2}$',
    hasImage: false,
  },
  {
    id: '17b4775f06c',
    chapter: '指數與對數函數',
    question: '化簡 $\\log_3(\\log_{0.3}(\\log_9(3^{0.054})))$。',
    answer: '$1$',
    hasImage: false,
  },
  {
    id: '17b477688af',
    chapter: '指數與對數函數',
    question: '化簡 $\\frac{2\\log2+\\log3}{1+\\frac{1}{2}\\log0.36+\\frac{1}{3}\\log8}$。',
    answer: '$1$',
    hasImage: false,
  },
  {
    id: '17b47775bca',
    chapter: '指數與對數函數',
    question: '化簡 $\\log_2(\\log_249)+2\\log_4(\\log_74)$。',
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '17b477872d6',
    chapter: '指數與對數函數',
    question: '化簡 $\\log_43\\cdot\\log_925\\cdot\\log_58$。',
    answer: '$\\frac{3}{2}$',
    hasImage: false,
  },
  {
    id: '17b47798547',
    chapter: '指數與對數函數',
    question: '化簡 $10^{\\log(\\log5)+\\log(1+\\log_520)}$。',
    answer: '$2$',
    hasImage: false,
  },
];

// 平面向量
const planeVector: Question[] = [
  {
    id: '18585330381',
    chapter: '平面向量',
    question:
      '如圖，$\\triangle ABC$ 是邊長為 1 的正三角形，點 $D,E$ 分別為 $\\overline{AB},\\overline{BC}$ 的中點，$F$ 點在 $DE$ 直線上，且 $\\overline{DE}=2\\overline{EF}$，試求 $\\xvector{AF}\\cdot\\xvector{BC}=\\dfrac{\\textcirc{5-1}}{\\textcirc{5-2}}$。(化為最簡分數)',
    answer: '18',
    hasImage: true,
  },
  {
    id: '1855e282957',
    chapter: '平面向量',
    question:
      '如圖，圓 $O$ 為 $\\triangle ABC$ 之內切圓且與 $\\overline{BC},\\overline{CA},\\overline{AB}$ 分別相切於 $D,E,F$。已知 $\\overline{AB}=5$，$\\overline{BC}=6$，$\\overline{CA}=7$，設 $\\xvector{AD}=m\\xvector{AB}+n\\xvector{AC}$，求 $3m+6n$。\n(1) 7　(2) 6　(3) 5　(4) 4　(5) 3',
    answer: '4',
    hasImage: true,
  },
  {
    id: '1853f291063',
    chapter: '平面向量',
    question:
      '蜜蜂的蜂巢是由多個正六邊形的蜂房所疊加而成，其整體的結構在力學上受力最平均且其構成材料最為節省。圖為部分蜂巢結構，若圖中每個六邊形均為鞭長為 1 的正六邊形，定義 $A,B,C,D,E$ 為其中一些正六邊形的頂點。',
    answer: '',
    hasImage: true,
  },
  {
    id: '1853f2ad563',
    chapter: '平面向量',
    question:
      '若 $\\xvector{AD}=\\alpha\\xvector{AB}+\\beta\\xvector{AC}$，則 $(\\alpha,\\beta)=(\\textcirc{8-1},\\textcirc{8-2})$。(選填題，6 分)',
    answer: '(5,2)',
    hasImage: false,
  },
  {
    id: '1853f2bf5e2',
    chapter: '平面向量',
    question: '試計算 $\\xvector{AD}\\cdot\\xvector{AE}$  之值。(非選擇題，9 分)',
    answer: '10',
    hasImage: false,
  },
  {
    id: '1851531b52e',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=4$，$\\overline{BC}=7$，$\\overline{AC}=5$，試選出內積最小的選項。\n(1) $\\xvector{AB}\\cdot\\xvector{AC}$\n(2) $\\xvector{AB}\\cdot\\xvector{BA}$\n(3) $\\xvector{AB}\\cdot\\xvector{BC}$\n(4) $\\xvector{BC}\\cdot\\xvector{BC}$\n(5) $\\xvector{AC}\\cdot\\xvector{BC}$',
    answer: '(3)',
    hasImage: false,
  },
  {
    id: '185152ffb87',
    chapter: '平面向量',
    question:
      '如圖，$O,P,A,Q$ 四點共線，若 $\\xvector{OB}$ 在 $\\xvector{OA}$ 上的正射影為 $\\xvector{OP}$，$\\xvector{OC}$ 在 $\\xvector{OA}$ 上的正射影為 $\\xvector{OQ}$，且 $\\xvector{OQ}=3\\xvector{OP}$，已知內積 $\\xvector{OA}\\cdot\\xvector{OB}=15$，求內積 $\\xvector{OA}\\cdot\\xvector{OC}$ 之值。',
    answer: '45',
    hasImage: true,
  },
  {
    id: '18515111010',
    chapter: '平面向量',
    question:
      '在坐標平面上，設 $O$ 為原點，$A(1,2)$，$B(3,7)$。令點集合 $\\Omega=\\{P|\\xvector{OP}=x\\xvector{OA}+y\\xvector{OB},$$-1\\le x\\le3,0\\le y\\le2\\}$，求區域 $\\Omega$ 的面積。',
    answer: '8',
    hasImage: false,
  },
  {
    id: '185150ce51e',
    chapter: '平面向量',
    question:
      '在坐標平面中有一 $\\triangle ABC$，其中 $\\xvector{AD}=\\dfrac12\\xvector{AB}+\\xvector{AC}$，則 $\\dfrac{\\triangle ABD面積}{\\triangle ABC面積}=\\textcirc{6-1}$。',
    answer: '1',
    hasImage: false,
  },
  {
    id: '184efcc8aa6',
    chapter: '平面向量',
    question:
      '已知 $\\vector a=(3,-1)$ 在 $\\vector b$ 上的正射影為 (2, 1)，若將 $2\\vector a$ 分解為 $\\vector u$ 和 $\\vector v$ 兩個向量的和，其中 $\\vector u$ 與 $\\vector b$ 平行且 $\\vector v$ 與 $\\vector b$ 垂直，則 $\\vector v=(\\textcirc{6-1},\\textcirc{6-2}\\textcirc{6-3})$。',
    answer: '(2,-4)',
    hasImage: false,
  },
  {
    id: '184930e6540',
    chapter: '平面向量',
    question:
      '在坐標平面上有三點 $O(0,0)$，$A(4,3)$，$B(24,7)$，在平面上取一個 $x$ 和 $y$ 坐標均為整數的 $P$ 點，使得 $\\angle POA=\\angle POB$，則 $P$ 點的坐標可能為何？\n(1) (2, 1)　(2) (1, 2)　(3) (2, 4)　(4) (9, 13)　(5) (13, 9)',
    answer: '1',
    hasImage: false,
  },
  {
    id: '1848b645f3d',
    chapter: '平面向量',
    question:
      '三角形 $ABC$ 中，已知三邊長 $\\overline{BC}=5$，$\\overline{CA}=6$，$\\overline{AB}=7$。若 $\\vector a,\\vector b$ 均為單位向量且 $\\vector a$ 與 $\\xvector{BC}$ 垂直，$\\vector b$ 與 $\\xvector{CA}$ 垂直，則 $\\vector a\\cdot\\vector b$ 之值為 $\\dfrac{\\textcirc{6-1}\\textcirc{6-2}}{\\textcirc{6-3}}$。',
    answer: '±15',
    hasImage: false,
  },
  {
    id: '17f9b42ef3f',
    chapter: '平面向量',
    question:
      '設 $O$ 為原點，$\\xvector{OA}=(5,1)$，$\\xvector{OB}=(1,7)$，$\\xvector{OP}=(2,1)$，在直線 $OP$ 上取一點 $Q$，使 $\\xvector{QA}\\cdot\\xvector{QB}$ 值為最小，求最小值及此時的 $Q$ 點坐標。',
    answer: '$-8$；$(4,2)$',
    hasImage: false,
  },
  {
    id: '17f7321aa31',
    chapter: '平面向量',
    question:
      '坐標平面上有 $\\triangle ABC$，$P$ 在 $\\overline{AB}$ 上，且 $4\\overline{AP}=5\\overline{PB}$，$Q$ 在 $\\overline{BC}$ 上，且 $2\\overline{BQ}=3\\overline{QC}$，已知 $\\xvector{QA}=(3,5)$，$\\xvector{PQ}=(1,2)$，求 $\\xvector{AB}$、$\\xvector{BC}$。',
    answer: '$(-\\frac{36}5,-\\frac{63}5)$；$(7,\\frac{38}3)$',
    hasImage: false,
  },
  {
    id: '17e0bb831da',
    chapter: '平面向量',
    question:
      '設平面上三點 $A(2,5)$，$B(5,1)$，$C(3,7)$，若 $\\xvector{AP}=x\\xvector{AB}+y\\xvector{AC}$，其中 $-1\\le x\\le1$，$0\\le y\\le3$，試求所有的點 $P$ 所形成之區域面積。',
    answer: '$60$',
    hasImage: false,
  },
  {
    id: '17e0bbea7a2',
    chapter: '平面向量',
    question:
      '坊間一包 A4 影印紙有 $500$ 張，請問至少需要幾張 A0 尺寸的影印原紙，才足夠切得一包 A4 影印紙？',
    answer: '$32$',
    hasImage: false,
  },
  {
    id: '17e0bc2d5b6',
    chapter: '平面向量',
    question:
      '三分之一拱 $ABK$ 如圖，$P$、$Q$ 為 $\\overline{AB}$ 的三等分點，也是左、右兩道圓弧的圓心，兩圓弧交於 $K$，在 $K$ 作兩圓弧的切線 $L$、$M$，兩切線的鈍夾角稱為拱形的「頂角」，試求頂角大小。(求近似值至小數點後第二位，可用計算機)',
    answer: '$151.04\\du$',
    hasImage: true,
  },
  {
    id: '17e0bc65abf',
    chapter: '平面向量',
    question:
      '圖為「單點透視法」畫出的立體圖形，$L$ 是遠方地平線，$A$ 為消失點，某人的身長在圖中為 $15$ 公分，站立在距 $A$ 為 $18$ 公分的 $P$ 點位置，若此人沿 $\\xvector{AP}$ 的方向走到 $Q$，圖中 $\\overline{PQ}$ 為 $12$ 公分，求此人在圖中 $Q$ 處的身長。',
    answer: '$25$ 公分',
    hasImage: true,
  },
  {
    id: '17e0bca6fe6',
    chapter: '平面向量',
    question:
      '設 $O$、$A$、$B$、$C$ 為平面上任意四點，下列哪些選項中的 $A$、$B$、$C$ 三點一定共線？\n(1) $|\\xvector{AB}|+|\\xvector{BC}|=|\\xvector{AC}|$\n(2) $|\\xvector{AB}|-|\\xvector{BC}|=|\\xvector{AC}|$\n(3) $\\xvector{OC}=\\frac13\\xvector{OA}-\\frac23\\xvector{OB}$\n(4) $3\\xvector{OC}=8\\xvector{OA}-5\\xvector{OB}$\n(5) $\\xvector{AB}=2\\xvector{CB}$',
    answer: '(1)(2)(4)(5)',
    hasImage: false,
  },
  {
    id: '17e4c01d316',
    chapter: '平面向量',
    question:
      '坐標平面上一平行四邊形 $ABCD$，其中 $A(2,1)$，$B(8,2)$，$C$ 在第一象限且其 $x$ 坐標為 $12$，若平行四邊形 $ABCD$ 的面積等於 $38$，求 $D$。',
    answer: '$(6,8)$',
    hasImage: false,
  },
  {
    id: '17e4c032799',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=3$，$\\overline{AC}=4$，$\\overline{BC}=\\sqrt{37}$，求：(1) $\\xvector{AB}\\cdot\\xvector{CA}$ (2) $\\xvector{AC}\\cdot\\xvector{BC}$',
    answer: '(1) $6$ (2) $22$',
    hasImage: false,
  },
  {
    id: '17e52724684',
    chapter: '平面向量',
    question:
      '設 $A(1,2)$、$B(1,-2)$ 為平面上兩定點，$P$ 為 $x$ 軸正向上的一點。若 $\\xvector{PA}\\cdot\\xvector{PB}=5$，求 $P$',
    answer: '$(4,0)$',
    hasImage: false,
  },
  {
    id: '17e576e031b',
    chapter: '平面向量',
    question:
      '已知 $\\vector a$、$\\vector b$、$\\vector c$ 為平面上三個非零向量，則下列敘述哪些正確？\n(1) 若 $\\vector a\\cdot\\vector b=\\vector a\\cdot\\vector c$，則 $\\vector b=\\vector c$\n(2) 若 $(\\vector a\\cdot\\vector b)\\cdot\\vector c=(\\vector a\\cdot\\vector c)\\cdot\\vector b$，則 $\\vector b=\\vector c$\n(3) 若 $\\vector a\\perp\\vector b$，則 $|\\vector a+\\vector b|=|\\vector a-\\vector b|$\n(4) 若 $|\\vector a|=|\\vector b|$，則 $(\\vector a+\\vector b)\\cdot(\\vector a-\\vector b)=0$\n(5) 若 $\\alpha\\vector a+\\beta\\vector b=\\vector0$，其中 $\\alpha,\\beta\\in\\mathbb R$，則 $\\alpha=\\beta=0$',
    answer: '(3)(4)',
    hasImage: false,
  },
  {
    id: '17e5770633b',
    chapter: '平面向量',
    question:
      '圖為 $8$ 層的正三角形排列而成的圖形，圖中每一個小正三角形邊長皆為 $1$，$\\vector a$、$\\vector b$ 是兩個夾角為 $\\frac\\pi3$ 的單位向量，則下列敘述哪些是正確的？\n(1) $\\xvector{AB}=2\\vector a+6\\vector b$\n(2) $\\xvector{AC}=3\\vector a+3\\vector b$\n(3) $|\\xvector{AC}|=3\\sqrt2$\n(4) $\\xvector{AB}$ 在 $\\xvector{AC}$ 上的正射影為 $2\\vector a+2\\vector b$\n(5) $\\xvector{AB}\\cdot\\xvector{AC}=12$',
    answer: '(2)(4)',
    hasImage: true,
  },
  {
    id: '17e57739a25',
    chapter: '平面向量',
    question:
      '如圖，已知四邊形 $ABCD$ 中，$\\xvector{BC}=\\xvector{AB}+\\xvector{AD}$，$\\xvector{AC}\\perp\\xvector{BD}$ 且 $|\\xvector{AC}|=|\\xvector{BD}|$。若假設 $\\overrightarrow{AC}$ 為 $x$ 軸正向，$\\overrightarrow{BD}$ 為 $y$ 軸正向，$O$ 為原點且 $A$ 點坐標為 $(-1,0)$，則下列敘述哪些是正確的？\n(1) $2\\xvector{AB}=\\xvector{DC}$\n(2) $\\triangle AOB$ 與 $\\triangle COD$ 相似\n(3) $C$ 點坐標為 $(3,0)$\n(4) $\\xvector{AB}\\cdot\\xvector{AD}=-2$\n(5) $\\tan\\angle BAD=-3$',
    answer: '(1)(2)(5)',
    hasImage: true,
  },
  {
    id: '17e577537ee',
    chapter: '平面向量',
    question: '如圖，設四分之一拱的頂角為 $\\theta$，求 $\\cos\\theta$。',
    answer: '$-\\frac79$',
    hasImage: true,
  },
  {
    id: '17e5779eff2',
    chapter: '平面向量',
    question:
      '已知正方形 $ABCD$ 中，$M$、$N$ 兩點滿足 $\\xvector{BM}=2\\xvector{MC}$ 且 $\\xvector{CN}=2\\xvector{ND}$，求 $\\cos\\angle MAN$',
    answer: '$\\frac9{\\sqrt{130}}$',
    hasImage: false,
  },
  {
    id: '17e577ce397',
    chapter: '平面向量',
    question:
      '設 $\\triangle ABC$ 的各頂點坐標為 $A(0,0$)、$B(-3,1)$、$C(2,-4)$，試問：\n(1) $\\triangle ABC$ 的重心坐標 (2) $\\xvector{AB}$ 在 $\\xvector{AC}$ 上的正射影\n(3) 若 $\\xvector{AB}=\\vector p+\\vector q$，其中 $\\vector p\\parallel\\xvector{AC}$ 且 $\\vector q\\perp\\xvector{AC}$，求 $\\vector q$',
    answer: '(1) $(-\\frac13,-1)$ (2) $(-1,2)$ (3) $(-2,-1)$',
    hasImage: false,
  },
  {
    id: '17e2d5c3df0',
    chapter: '平面向量',
    question: '坐標平面上三點 $P(3,-4)$、$A(-2,-3)$、$B(4,1)$，求 $P$ 在直線 $AB$ 上之投影點坐標。',
    answer: '$(1,-1)$',
    hasImage: false,
  },
  {
    id: '17e2d5fefb3',
    chapter: '平面向量',
    question:
      '將一個 $30\\du-60\\du-90\\du$ 的直角三角形放在坐標平面上，直角頂點位於原點 $O$，此時 $30\\du$ 角頂點坐標為 $(-2\\sqrt3,3\\sqrt3)$，求 $60\\du$ 角頂點坐標。',
    answer: '$(3,2)$',
    hasImage: false,
  },
  {
    id: '17e2d60c7b2',
    chapter: '平面向量',
    question: '$x,y\\in\\mathbb R$，$x^2+4y^2=9$，求 $3x-8y$ 的最大值。',
    answer: '$15$',
    hasImage: false,
  },
  {
    id: '17e2d65b05f',
    chapter: '平面向量',
    question:
      '$P$ 為 $\\triangle ABC$ 內部之一點，且 $\\xvector{AP}=\\frac15\\xvector{AB}+\\frac25\\xvector{AC}$。延伸 $\\overline{AP}$ 交 $\\overline{BC}$ 於 $D$ 點，試問：\n(1) 若 $\\xvector{AD}=t\\xvector{AP}$，求 $t$\n(2) $\\triangle ABP:\\triangle ABD:\\triangle ABC$',
    answer: '(1) $\\frac53$ (2) $6:10:15$',
    hasImage: false,
  },
  {
    id: '17e2d696d85',
    chapter: '平面向量',
    question:
      '$P$ 為正三角形 $OAB$ 內部之一點，已知 $\\xvector{OP}=\\frac16\\xvector{OA}+\\frac12\\xvector{OB}$，求 $\\cos\\angle AOP$。',
    answer: '$\\frac{5\\sqrt{13}}{26}$',
    hasImage: false,
  },
  {
    id: '17e2d7b4333',
    chapter: '平面向量',
    question:
      '設 $O$ 為 $\\triangle OAB$ 之外心，且 $\\overline{OA}=\\overline{OB}=\\overline{OC}=2$，$\\angle A=60\\du$，$\\angle B=45\\du$，則 $|\\xvector{OA}+\\xvector{OB}+\\xvector{OC}|=\\sqrt{a+b\\sqrt3}$，求 $a$、$b$。',
    answer: '$8$；$-4$',
    hasImage: false,
  },
  {
    id: '17e2d7cfb8f',
    chapter: '平面向量',
    question:
      '設 $|\\vector a|=3$，$|\\vector b|=4$，$|\\vector c|=5$，若 $\\vector a+\\vector b+\\vector c=\\vector0$，求 $\\vector a\\cdot\\vector b$。',
    answer: '$0$',
    hasImage: false,
  },
  {
    id: '17e2d7f0b10',
    chapter: '平面向量',
    question:
      '設 $\\vector a=(3,-7)$，$\\vector b=(-4,1)$，$\\vector c=(2,2)$，求 $(\\vector a+2\\vector b)\\cdot(\\vector b-\\vector c)$。',
    answer: '$35$',
    hasImage: false,
  },
  {
    id: '17e2d80a002',
    chapter: '平面向量',
    question:
      '坐標平面上，設 $O$ 為原點，$P(2,1)$，若 $A$、$B$ 分別是正 $x$ 軸及正 $y$ 軸上的點，使得 $\\xvector{PA}\\perp\\xvector{PB}$，求 $\\triangle OAB$ 面積的最大值。',
    answer: '$\\frac{35}{16}$',
    hasImage: false,
  },
  {
    id: '17e2d826202',
    chapter: '平面向量',
    question:
      '已知點 $A(-2,2)$、$B(4,8)$ 為坐標平面上的兩點，且點 $C$ 在二次函數 $y=\\frac12x^2$ 的圖形上變動，求 $\\xvector{AB}\\cdot\\xvector{AC}$ 的最小值及此時 $C$ 點的 $x$ 坐標。',
    answer: '$-3$；$-1$',
    hasImage: false,
  },
  {
    id: '17e32194049',
    chapter: '平面向量',
    question:
      '若 $ABCD$ 為平行四邊形，$\\overline{AB}=8$，$\\overline{AD}=6$，求 $\\xvector{AC}\\cdot\\xvector{BD}$。',
    answer: '$-28$',
    hasImage: false,
  },
  {
    id: '17e34eb80fd',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=3$，$\\overline{AC}=4$，$\\xvector{AB}$ 與 $\\xvector{AC}$ 的夾角為 $120\\du$，且 $\\overline{BM}:\\overline{MC}=2:1$，求 $\\xvector{AB}\\cdot\\xvector{AM}$。',
    answer: '$-1$',
    hasImage: true,
  },
  {
    id: '17e058b7d0b',
    chapter: '平面向量',
    question:
      '$P$ 在 $\\overline{AB}$ 上，$Q$ 在 $\\overline{AC}$ 上，$\\overline{BQ}$ 與 $\\overline{CP}$ 交於 $R$，$\\xvector{AR}=\\frac25\\xvector{AB}+\\frac37\\xvector{AC}$，如圖，求 $\\frac{\\overline{AP}}{\\overline{PB}}$、$\\frac{\\overline{AQ}}{\\overline{QC}}$。',
    answer: '$\\frac73$；$\\frac52$',
    hasImage: true,
  },
  {
    id: '17e08ddf12a',
    chapter: '平面向量',
    question:
      '如圖，在四邊形 $ABCD$ 中，已知 $\\overline{AC}$ 與 $\\overline{BD}$ 相交於 $P$ 點，且 $\\xvector{AC}=2\\xvector{AB}+3\\xvector{AD}$，求 $\\overline{AP}:\\overline{PC}$。',
    answer: '$1:4$',
    hasImage: true,
  },
  {
    id: '17e092a5366',
    chapter: '平面向量',
    question:
      '平面上有一 $\\triangle ABC$，$G$ 為 $\\triangle ABC$ 的重心，$O$、$D$ 為此平面上的相異二點，且滿足 $\\xvector{OD}=\\xvector{OA}+\\xvector{OB}+\\xvector{OC}$，下列哪些正確？\n(1) $O$、$G$、$D$ 三點共線\n(2) $\\overline{OD}=2\\overline{OG}$\n(3) $\\xvector{AD}+\\xvector{BD}+\\xvector{CD}=2\\xvector{OD}$\n(4) $G$ 位於 $\\triangle ABC$ 的內部\n(5) $D$ 位於 $\\triangle ABC$ 的外部',
    answer: '(1)(3)(4)',
    hasImage: false,
  },
  {
    id: '17e0a7eeea1',
    chapter: '平面向量',
    question:
      '矩形如圖，$\\overline{AB}=3$，$\\overline{AD}=6$，$\\xvector{DN}=2\\xvector{NC}$，$\\xvector{BM}=2\\xvector{MC}$，若 $\\angle NAM=\\theta$，求 $\\cos\\theta$。',
    answer: '$\\frac{3\\sqrt{10}}{10}$',
    hasImage: true,
  },
  {
    id: '17dd6193d3d',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=5$，$\\overline{AC}=10$，$\\xvector{AB}\\cdot\\xvector{AC}=48$，求 $\\triangle ABC$ 面積。',
    answer: '$7$',
    hasImage: false,
  },
  {
    id: '17dd61a0df0',
    chapter: '平面向量',
    question: '設 $A(0,2)$，$B(4,-2)$，$C(a,a-4)$，若 $\\triangle ABC$ 的面積為 $12$，求 $a$。',
    answer: '$6\\lor0$',
    hasImage: false,
  },
  {
    id: '17dd61af6aa',
    chapter: '平面向量',
    question:
      '設 $\\triangle ABC$ 的三頂點為 $A(2,-3)$，$B(-2,-5)$，$C(5,-4)$，求：\n(1) $\\triangle ABC$ 面積\n(2) $A$ 到 $\\overline{BC}$ 的距離',
    answer: '(1) $5$ (2) $\\sqrt2$',
    hasImage: false,
  },
  {
    id: '17dd61d60e6',
    chapter: '平面向量',
    question:
      '試求下列行列式值：\n(1) $\\begin{vmatrix}1996&1997\\\\1998&1999\\end{vmatrix}+\\begin{vmatrix}2001&4004\\\\2003&4008\\end{vmatrix}$\n(2) $\\begin{vmatrix}111&-333\\\\1234&-3702\\end{vmatrix}$\n(3) $\\begin{vmatrix}\\log3&\\log9\\\\13&26\\end{vmatrix}$',
    answer: '(1) $-6$ (2) $0$ (3) $0$',
    hasImage: false,
  },
  {
    id: '17dd61f9cbd',
    chapter: '平面向量',
    question:
      '試求下列行列式值：\n(1) 若 $\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}=1$，求 $\\begin{vmatrix}3a&2a-4b\\\\3c&2c-4d\\end{vmatrix}$\n(2) 若 $\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}=2$，$\\begin{vmatrix}a&b\\\\e&f\\end{vmatrix}=-1$，求 $\\begin{vmatrix}3a&3b\\\\4c+5e&4d+5f\\end{vmatrix}$',
    answer: '(1) $-12$ (2) $9$',
    hasImage: false,
  },
  {
    id: '17dd621c84a',
    chapter: '平面向量',
    question:
      '若聯立方程式 $\\begin{cases}a_1x+b_1y=c_1\\\\a_2x+b_2y=c_2\\end{cases}$ 的解為 $(x,y)=(1,2)$，試求聯立方程式 $\\begin{cases}3a_1x+2b_1y=5c_1\\\\3a_2x+2b_2y=5c_2\\end{cases}$ 的解 $(x,y)$。',
    answer: '$(\\frac53,5)$',
    hasImage: false,
  },
  {
    id: '17dd623fca6',
    chapter: '平面向量',
    question:
      '已知聯立方程式 $\\begin{cases}2x+(3-a)y=a+5\\\\(3-a)x+2y=7-a\\end{cases}$ 無解，求 $a$。',
    answer: '$5$',
    hasImage: false,
  },
  {
    id: '17dd6254cb0',
    chapter: '平面向量',
    question:
      '已知聯立方程式 $\\begin{cases}(1-a)x+3y=0\\\\5x+(3-a)y=0\\end{cases}$ 除了 $(x,y)=(0,0)$ 外還有其他解，求 $a$。',
    answer: '$-2\\lor6$',
    hasImage: false,
  },
  {
    id: '17ddb98c087',
    chapter: '平面向量',
    question:
      '在坐標平面上，$\\triangle ABC$ 內有一點 $P$ 滿足 $\\xvector{AP}=(\\frac43,\\frac56)$ 及 $\\xvector{AP}=\\frac12\\xvector{AB}+\\frac15\\xvector{AC}$。若 $A$、$P$ 連線交 $\\overline{BC}$ 於 $M$，求 $\\xvector{AM}$。',
    answer: '$(\\frac{40}{21},\\frac{25}{21})$',
    hasImage: false,
  },
  {
    id: '17dea2bb82c',
    chapter: '平面向量',
    question:
      '設 $\\triangle ABC$ 中，$\\overline{AB}=5$，$\\overline{BC}=7$，$\\overline{CA}=8$，且 $I$ 是 $\\triangle ABC$ 的內心，若 $\\xvector{AI}=x\\xvector{AB}+y\\xvector{AC}$，試求數對 $(x,y)$。',
    answer: '$(\\frac25,\\frac14)$',
    hasImage: false,
  },
  {
    id: '17deb4c7d73',
    chapter: '平面向量',
    question:
      '設 $\\triangle ABC$ 為坐標平面上一三角形，$P$ 為平面上一點且 $\\xvector{AP}=\\frac15\\xvector{AB}+\\frac25\\xvector{AC}$，求 $\\dfrac{\\triangle ABP}{\\triangle ABC}$。',
    answer: '$\\frac25$',
    hasImage: false,
  },
  {
    id: '17ded03ee72',
    chapter: '平面向量',
    question:
      '梯形 $ABCD$，其中 $\\overline{AB}$ 與 $\\overline{DC}$ 平行。已知點 $E$、$F$ 分別在對角線 $\\overline{AC}$、$\\overline{BD}$ 上，且 $\\overline{AB}=\\frac25\\overline{DC}$，$\\overline{AE}=\\frac32\\overline{EC}$，$\\overline{BF}=\\frac23\\overline{FD}$，如圖，若 $\\xvector{FE}=\\alpha\\xvector{AC}+\\beta\\xvector{AD}$，求數對 $(\\alpha,\\beta)$。',
    answer: '$(\\frac9{25},-\\frac4{25})$',
    hasImage: true,
  },
  {
    id: '17db751ae42',
    chapter: '平面向量',
    question: '$x,y\\in\\mathbb R$，已知 $x^2+y^2=9$，求 $3x-4y+5$ 的最大值與最小值。',
    answer: '$20$；$-10$',
    hasImage: false,
  },
  {
    id: '17db75865a4',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=4$，$\\overline{BC}=6\\sqrt2$，$\\overline{CA}=8$，$O$ 是外心，$\\xvector{AO}=x\\xvector{AB}+y\\xvector{AC}$，求數對 $(x,y)$。',
    answer: '$(\\frac8{21},\\frac{10}{21})$',
    hasImage: false,
  },
  {
    id: '17db7595335',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=4$，$\\overline{BC}=5$，$\\overline{CA}=6$，$H$ 是垂心，$\\xvector{AH}=x\\xvector{AB}+y\\xvector{AC}$，求數對 $(x,y)$。',
    answer: '$(\\frac{243}{315},\\frac{27}{315})$',
    hasImage: false,
  },
  {
    id: '17db75b1bb5',
    chapter: '平面向量',
    question:
      '直線參數式 $\\begin{cases}x=-4+3t\\\\y=6-2t\\end{cases},t\\in\\mathbb R$，問：\n(1) 與 $x$ 軸的交點坐標 (2) 化為標準式',
    answer: '(1) $(5,0)$ (2) $2x+3y=10$',
    hasImage: false,
  },
  {
    id: '17db75c85f1',
    chapter: '平面向量',
    question:
      '兩直線參數式 $L_1:\\begin{cases}x=9t+5\\\\y=at+2\\end{cases}$，$t\\in\\mathbb R$ 與 $L_2:\\begin{cases}x=3s+b\\\\y=-2s-2\\end{cases}$，$s\\in\\mathbb R$，若 $L_1$ 與 $L_2$ 重合，求數對 $(a,b)$。',
    answer: '$(-6,11)$',
    hasImage: false,
  },
  {
    id: '17db75cfa5a',
    chapter: '平面向量',
    question: '若平面向量 $(-2,3)$ 為直線 $kx+(2-k)y=1$ 的法向量，求 $k$。',
    answer: '$-4$',
    hasImage: false,
  },
  {
    id: '17db75d5648',
    chapter: '平面向量',
    question: '平面上一直線的法向量為 $(3,-5)$，且過點 $(7,3)$，求直線方程式。',
    answer: '$3x-5y=6$',
    hasImage: false,
  },
  {
    id: '17db75f0ae2',
    chapter: '平面向量',
    question:
      '兩直線 $L_1:\\begin{cases}x=5-t\\\\y=3-5t\\end{cases}$，$t\\in\\mathbb R$ 與 $L_2:\\begin{cases}x=6+3s\\\\y=4+2s\\end{cases}$，$s\\in\\mathbb R$，求 $L_1$ 與 $L_2$ 的銳夾角。',
    answer: '$45\\du$',
    hasImage: false,
  },
  {
    id: '17dc1655cd1',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=6$，$\\overline{BC}=4$，$\\overline{CA}=3$，設 $\\angle A$ 的分角線交 $\\overline{BC}$ 於 $D$，求 $\\overline{AD}$。',
    answer: '$\\frac{\\sqrt{130}}3$',
    hasImage: false,
  },
  {
    id: '17dc2138ad5',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，已知 $(a+1)\\xvector{AB}$$+(2a-b)\\xvector{BC}+(a+b+2)\\xvector{CA}=\\vector0$，求數對 $(a,b)$。',
    answer: '$(0,-1)$',
    hasImage: false,
  },
  {
    id: '17dc5f0c735',
    chapter: '平面向量',
    question:
      '設平行四邊形 $ABCD$ 中，$E$ 在 $\\overline{CD}$ 上，且 $\\overline{DE}=\\frac13\\overline{DC}$，$F$ 為 $\\overline{AB}$ 之中點，$\\overline{BE}$ 與 $\\overline{CF}$ 交於 $P$ 點，若 $\\xvector{AP}=\\alpha\\xvector{AB}+\\beta\\xvector{AD}$，試求數對 $(\\alpha,\\beta)$。',
    answer: '$(\\frac57,\\frac37)$',
    hasImage: true,
  },
  {
    id: '17dc77a736e',
    chapter: '平面向量',
    question:
      '如圖，在鉛球比賽場地中，建立一直角坐標系，使 $O$ 為原點，$A$、$B$ 兩點的坐標分別為 $(10,0)$、$(6,8)$，試求 $\\arc{AB}$ 的中點坐標。',
    answer: '$(4\\sqrt5,2\\sqrt5)$',
    hasImage: true,
  },
  {
    id: '17d817420ef',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，點 $M$ 在 $\\overline{AB}$ 上且 $\\overline{AM}:\\overline{BM}=2:3$，點 $P$ 在 $\\overline{CM}$ 上且 $\\overline{CP}:\\overline{MP}=5:1$，若 $\\xvector{AP}=x\\xvector{AB}+y\\xvector{AC}$，$x,y\\in\\mathbb R$，求數對 $(x,y)$。',
    answer: '$(\\frac13,\\frac16)$',
    hasImage: true,
  },
  {
    id: '17d8175f384',
    chapter: '平面向量',
    question:
      '設 $A$、$B$、$C$ 是坐標平面上不共線的三點，$\\xvector{AF}=2\\xvector{AB}+3\\xvector{AC}$，$\\overline{AF}$ 交 $\\overline{BC}$ 於 $D$。若 $\\xvector{AD}=x\\xvector{AB}+y\\xvector{AC}$，$x,y\\in\\mathbb R$，求數對 $(x,y)$。',
    answer: '$(\\frac25,\\frac35)$',
    hasImage: false,
  },
  {
    id: '17d8177c24a',
    chapter: '平面向量',
    question:
      '在 $\\triangle ABC$ 兩邊 $\\overline{AC}$、$\\overline{BC}$ 上，分別取 $P$、$Q$ 兩點，使得 $\\overline{CP}=2\\overline{AP}$，$\\overline{BQ}=2\\overline{CQ}$，若 $\\xvector{PQ}=x\\xvector{AB}+y\\xvector{AC}$，試求數對 $(x,y)$。',
    answer: '$(\\frac13,\\frac13)$',
    hasImage: false,
  },
  {
    id: '17d817a180d',
    chapter: '平面向量',
    question:
      '如圖，已知 $A(0,0)$，$\\xvector{AB}=(2,1)$，$\\xvector{AC}=(1,2)$，$\\xvector{AP}=\\alpha\\xvector{AB}+\\beta\\xvector{AC}$，請問下列哪些選項的 $P$ 點落在灰色區域內？(不含邊界)\n(1) $(\\alpha,\\beta)=(3,2)$ (2) $(\\alpha,\\beta)=(1,1)$\n(3) $(\\alpha,\\beta)=(1,\\frac32)$ (4) $(\\alpha,\\beta)=(2,\\frac23)$\n(5) $(\\alpha,\\beta)=(\\frac32,\\frac23)$',
    answer: '(2)(5)',
    hasImage: true,
  },
  {
    id: '17d817cdfe0',
    chapter: '平面向量',
    question:
      '$O$、$A$、$B$、$C$ 為平面上相異四點，下列何者保證 $A$、$B$、$C$ 三點共線？\n(1) $2\\xvector{OA}-3\\xvector{OB}-\\xvector{OC}=\\vector0$\n(2) $2\\xvector{OA}=\\xvector{OB}+3\\xvector{OC}$\n(3) $5\\xvector{OA}+4\\xvector{OB}-9\\xvector{OC}=\\vector0$\n(4) $\\frac12\\xvector{OA}+\\frac13\\xvector{OB}-\\frac16\\xvector{OC}=\\vector0$\n(5) $\\xvector{OA}=\\frac43\\xvector{OB}-\\frac13\\xvector{OC}$',
    answer: '(3)(5)',
    hasImage: false,
  },
  {
    id: '17d817f76be',
    chapter: '平面向量',
    question:
      '在 $\\triangle ABC$ 的三邊 $\\overline{AB}$、$\\overline{BC}$、$\\overline{CA}$ 上分別取 $D$、$E$、$F$ 三點，使 $\\xvector{AD}=\\frac12\\xvector{AB}$，$\\xvector{BE}=\\frac13\\xvector{BC}$，$\\xvector{CF}=\\frac14\\xvector{CA}$。設 $G$ 為 $\\triangle DEF$ 的重心。若 $\\xvector{AG}=x\\xvector{AB}+y\\xvector{AC}$，求數對 $(x,y)$。',
    answer: '$(\\frac7{18},\\frac{13}{36})$',
    hasImage: false,
  },
  {
    id: '17d81806cd6',
    chapter: '平面向量',
    question:
      '設 $|\\vector a|=4$，$|\\vector b|=6$，$\\vector a$ 與 $\\vector b$ 的夾角為 $60\\du$，求 $\\vector a\\cdot\\vector b$。',
    answer: '$12$',
    hasImage: false,
  },
  {
    id: '17d8181cc67',
    chapter: '平面向量',
    question:
      '已知 $\\triangle ABC$ 為邊長 $2$ 的正三角形，試求 $\\xvector{AB}\\cdot\\xvector{BC}$。',
    answer: '$-2$',
    hasImage: false,
  },
  {
    id: '17d81829d74',
    chapter: '平面向量',
    question:
      '若 $\\vector a=(1,2)$，$\\vector b=(-3,4)$ 且 $\\vector a$ 與 $\\vector b$ 的夾角為 $\\theta$，求 $\\cos\\theta$。',
    answer: '$\\frac{\\sqrt5}5$',
    hasImage: false,
  },
  {
    id: '17d81950d9c',
    chapter: '平面向量',
    question:
      '正六邊形 $ABCDEF$，下列何者最小？\n(1) $\\xvector{AB}\\cdot\\xvector{AB}$ (2) $\\xvector{AB}\\cdot\\xvector{AC}$\n(3) $\\xvector{AB}\\cdot\\xvector{AD}$ (4) $\\xvector{AB}\\cdot\\xvector{AE}$\n(5) $\\xvector{AB}\\cdot\\xvector{AF}$',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '17d81854653',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$A(3,-2)$，$B(-1,-4)$，$C(6,-3)$，求：\n(1) $\\xvector{AB}$ (2) $\\xvector{AB}\\cdot\\xvector{AC}$ (3) $\\cos A$',
    answer: '(1) $(-4,-2)$ (2) $-10$ (3) $-\\frac1{\\sqrt2}$',
    hasImage: false,
  },
  {
    id: '17d818642ba',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=8$，$\\overline{BC}=7$，$\\overline{CA}=6$，求 $\\xvector{AB}\\cdot\\xvector{BC}$。',
    answer: '$-\\frac{77}2$',
    hasImage: false,
  },
  {
    id: '17d89a022b7',
    chapter: '平面向量',
    question:
      '向量 $\\vector a=(1,-3)$，$\\vector b=(4,-2)$，若 $t\\vector a+\\vector b$ 與 $\\vector a$ 垂直，求 $t$。',
    answer: '$-1$',
    hasImage: false,
  },
  {
    id: '17d89a22d8a',
    chapter: '平面向量',
    question:
      '若 $|\\vector a|=2$，$|\\vector b|=3$，且 $\\vector a$ 和 $\\vector b$ 的夾角為 $120\\du$，求 $|2\\vector a+3\\vector b|$。',
    answer: '$\\sqrt{61}$',
    hasImage: false,
  },
  {
    id: '17d89a3340f',
    chapter: '平面向量',
    question: '$x,y\\in\\mathbb R$，$2x-y=10$，求 $4x^2+9y^2$ 的最小值及此時的 $(x,y)$。',
    answer: '$90$；$(\\frac92,-1)$',
    hasImage: false,
  },
  {
    id: '17d89a410b6',
    chapter: '平面向量',
    question:
      '$x\\in\\mathbb R$，$\\vector a=(x,5)$，$\\vector b=(1,-3)$，若 $\\vector a$ 在 $\\vector b$ 上的正射影為 $(-2,6)$，求 $x$。',
    answer: '$-5$',
    hasImage: false,
  },
  {
    id: '17d89a5461a',
    chapter: '平面向量',
    question:
      '將向量 $\\vector a=(3,5)$ 分解為與向量 $\\vector b=(2,-1)$ 平行及垂直的兩個分量，若其中垂直的分量為 $\\vector n$，求 $\\vector n$。',
    answer: '$(\\frac{13}5,\\frac{26}5)$',
    hasImage: false,
  },
  {
    id: '17d89a67967',
    chapter: '平面向量',
    question:
      '設 $|\\vector a|=3$，$|\\vector b|=2$，且 $(2\\vector a-\\frac65\\vector b)\\perp(\\vector a+2\\vector b)$，求 $\\vector a$ 與 $\\vector b$ 的夾角。',
    answer: '$120\\du$',
    hasImage: false,
  },
  {
    id: '17d89a91a02',
    chapter: '平面向量',
    question:
      '設 $|\\vector u|=3$，$|\\vector v|=2$，$\\vector u\\cdot\\vector v=-3$，且 $\\vector u$ 與 $\\vector v$ 的夾角為 $\\theta$，則下列選項哪些正確？\n(1) $\\theta=60\\du$ (2) $\\theta=120\\du$\n(3) $|\\vector u+\\vector v|=\\sqrt7$ (4) $|\\vector u-\\vector v|=2\\sqrt5$\n(5) $|\\vector u+2\\vector v|=5$',
    answer: '(2)(3)',
    hasImage: false,
  },
  {
    id: '17d89aac4ed',
    chapter: '平面向量',
    question:
      '已知 $|\\vector a|=2$，$|\\vector b|=|\\vector c|=3$，且 $\\vector a+\\vector b+\\vector c=\\vector 0$，試求：\n(1) $\\vector a\\cdot\\vector c$ (2) $|3\\vector a+2\\vector b+4\\vector c|$',
    answer: '(1) $-2$ (2) $4\\sqrt2$',
    hasImage: false,
  },
  {
    id: '17d89ac1364',
    chapter: '平面向量',
    question:
      '$x,y\\in\\mathbb R$ 滿足 $3x-4y-1=0$，若 $(x,y)=(h,k)$ 時，$(x-1)^2+(y+2)^2$ 有最小值 $m$，求序組 $(h,k,m)$。',
    answer: '$(-\\frac15,-\\frac25,4)$',
    hasImage: false,
  },
  {
    id: '17d89ad6428',
    chapter: '平面向量',
    question:
      '設 $\\vector a=(x,4)$，$\\vector b=(3,y)$ 其中 $x,y\\in\\mathbb R$，若 $(x-1)^2+(y-2)^2=4$，求 $\\vector a\\cdot\\vector b$ 的最大值。',
    answer: '$21$',
    hasImage: false,
  },
  {
    id: '17d89ae66d9',
    chapter: '平面向量',
    question:
      '設 $\\vector a$ 與 $\\vector b$ 為非零向量，已知 $\\vector a$ 在 $2\\vector b$ 上的正射影為 $(2,-5)$，求 $2\\vector a$ 在 $-\\vector b$ 上的正射影。',
    answer: '$(4,-10)$',
    hasImage: false,
  },
  {
    id: '17d89af267d',
    chapter: '平面向量',
    question: '$A(-2,4)$，$B(-4,-7)$，$C(1,8)$，求 $A$ 點在直線 $BC$ 上的投影點坐標。',
    answer: '$(-\\frac12,\\frac72)$',
    hasImage: false,
  },
  {
    id: '17d1378a244',
    chapter: '平面向量',
    question:
      '設 $P$ 點在 $\\triangle ABC$ 的 $\\overline{BC}$ 上，且 $\\overline{BP}:\\overline{CP}=7:2$，若 $\\xvector{AP}=x\\xvector{AB}+y\\xvector{AC}$，求數對 $(x,y)$。',
    answer: '$(\\frac29,\\frac79)$',
    hasImage: false,
  },
  {
    id: '17d13799bfd',
    chapter: '平面向量',
    question:
      '設 $\\vector a=(3,5)$，$\\vector b=(2,-1)$，求 $|\\vector a+t\\vector b|$ 的最小值及此時的 $t$。',
    answer: '$\\frac{13\\sqrt5}5$；$-\\frac15$',
    hasImage: false,
  },
  {
    id: '17d137b24b7',
    chapter: '平面向量',
    question:
      '在 $\\triangle ABC$ 中，已知三頂點為 $A(3,4)$、$B(-1,1)$、$C(15,-1)$，若 $\\angle A$ 的內角平分線交 $\\overline{BC}$ 於 $D$，且 $\\xvector{AD}=x\\xvector{AB}+y\\xvector{AC}$，求數對 $(x,y)$。',
    answer: '$(\\frac{13}{18},\\frac5{18})$',
    hasImage: false,
  },
  {
    id: '17d137d11bb',
    chapter: '平面向量',
    question:
      '設 $A$、$B$、$C$ 三點在同一條直線上，且 $P$ 為線外一點，若 $7\\xvector{PA}=x\\xvector{PB}+4\\xvector{PC}$，求 $x$ 及比值 $\\frac{\\overline{AB}}{\\overline{BC}}$。',
    answer: '$3$；$\\frac47$',
    hasImage: false,
  },
  {
    id: '17d137e1f94',
    chapter: '平面向量',
    question:
      '若 $G$ 為 $\\triangle ABC$ 的重心，$P$ 點滿足 $\\xvector{PB}=(4,2)$、$\\xvector{PC}=(-3,5)$、$\\xvector{PG}=(3,7)$，求 $\\xvector{PA}$。',
    answer: '$(8,14)$',
    hasImage: false,
  },
  {
    id: '17d137fe6ec',
    chapter: '平面向量',
    question: '若 $D$ 與 $A(3,1)$、$B(8,7)$、$C(10,-3)$ 連成平行四邊形，求 $D$。(有三解)',
    answer: '$(1,11)$ 或 $(15,3)$ 或 $(5,-9)$',
    hasImage: false,
  },
  {
    id: '17cf6336c6f',
    chapter: '平面向量',
    question:
      '已知 $\\vector a=(2,6)$，$\\vector b=(-1,2)$，求 $|t\\vector a+\\vector b|$ 的最小值及此時的 $t$。',
    answer: '$-\\frac14$；$\\frac{\\sqrt{10}}2$',
    hasImage: false,
  },
  {
    id: '17cf6349562',
    chapter: '平面向量',
    question:
      '設 $\\xvector{OA}=(6,x)$，$\\xvector{OB}=(4,3)$，$\\xvector{OC}=(x,9)$，若 $A$、$B$、$C$ 三點共線，求實數 $x$。',
    answer: '$0$ 或 $7$',
    hasImage: false,
  },
  {
    id: '17cf6362743',
    chapter: '平面向量',
    question:
      '$x,y\\in\\mathbb R$，$A$、$B$、$C$ 為不共線的三點，已知 $(2x-y-7)\\xvector{AB}+(x+y+1)\\xvector{AC}=\\vector0$，求數對 $(x,y)$。',
    answer: '$(2,-3)$',
    hasImage: false,
  },
  {
    id: '17cf63da0c4',
    chapter: '平面向量',
    question:
      '平面上兩向量 $\\vector a=(3,4)$，$\\vector b=(5,12)$，若 $t\\vector a+\\vector b$ 平分 $\\vector a$ 與 $\\vector b$ 的夾角，求 $t$。',
    answer: '$\\frac{13}5$',
    hasImage: false,
  },
  {
    id: '17cf63f0ad2',
    chapter: '平面向量',
    question:
      '已知 $\\vector a$、$\\vector b$ 為平面上兩個不平行的非零向量，若實數 $x,y$ 滿足 $x(\\vector a-2\\vector b)-y(2\\vector a-\\vector b)=4\\vector a+7\\vector b$，求 $x+y$。',
    answer: '$-11$',
    hasImage: false,
  },
  {
    id: '17cf64030cb',
    chapter: '平面向量',
    question:
      '若兩平面向量 $\\vector a$ 與 $\\vector b$ 平行但反向，已知 $\\vector a=(1,-2)$，$|\\vector b|=2\\sqrt5$，試求 $\\vector b$。',
    answer: '$(-2,4)$',
    hasImage: false,
  },
  {
    id: '17ccd01afe1',
    chapter: '平面向量',
    question:
      '正六邊形 $ABCDEF$，$\\xvector{AB}=\\vector a$，$\\xvector{BC}=\\vector b$，則下列選項哪些正確？\n(1) $\\xvector{BE}=2\\vector b-2\\vector a$\n(2) $\\xvector{BE}=2\\vector a-2\\vector b$\n(3) $\\xvector{BD}=2\\vector b-\\vector a$\n(4) $\\xvector{BD}=\\vector a-2\\vector b$\n(5) $\\xvector{BF}=\\vector b-2\\vector a$',
    answer: '(1)(3)(5)',
    hasImage: true,
  },
  {
    id: '17ccd034867',
    chapter: '平面向量',
    question:
      '設 $\\vector a=(1,1)$，$\\vector b=(2,3)$，$\\vector c=(5,6)$，若實數 $x$、$y$ 滿足 $\\vector c=x\\vector a+y\\vector b$，求數對 $(x,y)$。',
    answer: '$(3,1)$',
    hasImage: false,
  },
  {
    id: '17ccd045610',
    chapter: '平面向量',
    question: '已知 $A(1,3)$，$B(2,5)$，$C(3,7)$，求 $|2\\xvector{AB}-\\xvector{BC}|$。',
    answer: '$\\sqrt5$',
    hasImage: false,
  },
  {
    id: '17ccd057d06',
    chapter: '平面向量',
    question:
      '設 $A$、$B$、$C$ 為平面上三點， $\\xvector{AB}=(1,2)$，$\\xvector{BC}=(2,-1)$，求 $\\triangle ABC$ 之周長。',
    answer: '$2\\sqrt5+\\sqrt{10}$',
    hasImage: false,
  },
  {
    id: '17ccd06d2a7',
    chapter: '平面向量',
    question:
      '設 $\\xvector{AB}=(2,-3)$，$\\xvector{BC}=(-1,5)$。若 $A(1,2)$ 且 $\\xvector{AP}=3\\xvector{AB}-2\\xvector{CB}$，求 $P$。',
    answer: '$(5,3)$',
    hasImage: false,
  },
  {
    id: '17ccd084b9d',
    chapter: '平面向量',
    question:
      '在梯形 $ABCD$ 中，$A(-1,-4)$，$B(-7,4)$，$C(1,6)$，若 $\\overline{AB}\\parallel\\overline{CD}$ 且 $\\overline{CD}=4$，求 $D$。',
    answer: '$(\\frac{17}5,\\frac{14}5)$',
    hasImage: false,
  },
  {
    id: '17cc9fe69b0',
    chapter: '平面向量',
    question:
      '已知一張 A0 影印紙的面積是 $1$ 平方公尺，不斷取半依序可得 A1、A2、A3、A4、... 的影印紙。請問 A4 紙張的長與寬為幾公分？(取近似值至小數點後第一位)',
    answer: '長 $29.7$；寬 $21.0$',
    hasImage: false,
  },
  {
    id: '17cc9ff3cb9',
    chapter: '平面向量',
    question:
      '已知一張 B0 影印紙的面積是 $\\sqrt2$ 平方公尺，不斷取半依序可得 B1、B2、B3、B4、... 的影印紙。請問 B4 紙張的長與寬為幾公分？(取近似值至小數點後第一位)',
    answer: '長 $35.4$；寬 $25$',
    hasImage: false,
  },
  {
    id: '17cca01464c',
    chapter: '平面向量',
    question:
      '正五邊形 $ABCDE$ 的五條對角線連成五角星， $P$ 為 $\\overline{AC}$ 與 $\\overline{BE}$ 的交點，試說明 $P$ 為 $\\overline{AC}$ 的黃金分割點。($\\sin18\\du=\\frac{\\sqrt5-1}4$，$\\sin54\\du=\\frac{\\sqrt5+1}4$)',
    answer: '略',
    hasImage: true,
  },
  {
    id: '17cca026b15',
    chapter: '平面向量',
    question:
      '線段 $\\overline{AB}$ 的長度為 $10$，靠近 $A$ 的黃金分割點為 $P$，試求 $\\overline{AP}$。(取近似值到小數點後第一位)',
    answer: '$3.8$',
    hasImage: false,
  },
  {
    id: '17cca055c95',
    chapter: '平面向量',
    question:
      '用單點透視法作畫如圖，遠方地平線為 $L$，消失點為 $A$，甲站在 $P$ 點且圖中的身長為 $3$，乙站在 $Q$ 點且圖中的身長為 $5$，過 $P$ 作 $L$ 的平行線交 $\\overline{AQ}$ 於 $R$，已知 $\\overline{AR}=9$，$\\overline{QR}=4$，則：\n(1) 試問甲、乙二人誰的身高較高？\n(2) 若甲的實際身高為 $156$ 公分，則乙的身高為幾公分？',
    answer: '(1) 乙 (2) $180$',
    hasImage: true,
  },
  {
    id: '17cca4890a6',
    chapter: '平面向量',
    question:
      '以單點透視法畫出兩根等長的旗竿甲、乙，$A$ 為消失點，甲立於畫中的 $P$ 點，$\\overline{AP}=6\\sqrt2$ 與遠方地平線的夾角為 $45\\du$，乙立於畫中的 $Q$ 點，$\\overline{AQ}=10\\sqrt3$ 與遠方地平線的夾角為 $60\\du$。畫中甲旗竿的長度為 $2$，求乙旗竿的畫中長度。',
    answer: '$5$',
    hasImage: true,
  },
  {
    id: '17cca2c9bf2',
    chapter: '平面向量',
    question:
      '圖為某公司的 logo，單位為公分，計畫在新完工的總部大樓懸掛鋪貼金箔的 logo，為控制預算必須精準求出所需金箔的數量，請問此 logo 的面積為多少平方公分？(整數以下四捨五入)',
    answer: '$569262$',
    hasImage: true,
  },
  {
    id: '17cca2eb03b',
    chapter: '平面向量',
    question:
      '圖為某公司的註冊商標，已知圖中三個小圓的半徑為 $1$ 單位，三個大圓的半徑為 $4$ 單位，分別以 $A$、$B$、$C$ 為圓心，等腰三角形的底邊為 $12$，腰長為 $10$，請問此圖案的面積為多少平方單位？',
    answer: '$96+15\\pi$',
    hasImage: true,
  },
  {
    id: '17cca37622a',
    chapter: '平面向量',
    question:
      '設正方形 $ABCD$ 的邊長為 $8$ 公尺，想以 $\\overline{AB}$ 為底邊向上設計一座拱門，先把 $\\overline{AB}$ 四等分，等分點為 $P$、$M$、$Q$，分別以 $P$、$Q$ 為圓心，半徑為 $6$ 公尺作圓弧交於 $K$ 點，如圖，稱此為「四分之一拱」，試求：\n(1) 圓弧長 $\\arc{AK}$\n(2) 拱形 $ABK$ 區域的面積為多少平方公尺？(取近似值至小數點後第二位)',
    answer: '$33.01$',
    hasImage: true,
  },
  {
    id: '17cca39c15c',
    chapter: '平面向量',
    question:
      '線段 $\\overline{AB}=6$，$P$、$Q$ 為 $\\overline{AB}$ 的三等分點，分別以 $P$、$Q$ 為圓心，半徑為 $4$ 作圓弧交於 $K$ 點，稱所得圖形為「三分之一拱」，令 $\\cos\\theta=\\frac14$，試以 $\\theta$ 表示：\n(1) 弧長 $\\arc{AK}+\\arc{BK}$ (2) 拱形 $ABK$ 的面積',
    answer: '(1) $8\\theta$ (2) $16\\theta-\\sqrt{15}$',
    hasImage: true,
  },
  {
    id: '17cbf396729',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=4$，$\\overline{BC}=6$，$\\overline{CA}=2\\sqrt7$，若 $H$ 為垂心，且 $\\xvector{AH}=x\\xvector{AB}+y\\xvector{AC}$，求 $(x,y)$',
    answer: '$(\\frac29,\\frac19)$',
    hasImage: true,
  },
  {
    id: '17cbf3b2a7d',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=4$，$\\overline{BC}=6$，$\\overline{CA}=2\\sqrt7$，若 $O$ 為外心，且 $\\xvector{AO}=x\\xvector{AB}+y\\xvector{AC}$，求 $(x,y)$',
    answer: '$(\\frac7{18},\\frac49)$',
    hasImage: true,
  },
  {
    id: '17cbf3bea31',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$，$\\overline{AB}=4$，$\\overline{BC}=6$，$\\overline{CA}=5$，$H$ 為垂心，若 $\\xvector{AH}=x\\xvector{AB}+y\\xvector{AC}$，求 $(x,y)$。',
    answer: '$(\\frac17,\\frac3{35})$',
    hasImage: false,
  },
  {
    id: '17cbf3df5b9',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=4$，$\\overline{BC}=6$，$\\overline{CA}=5$，$O$ 為外心，若 $\\xvector{AO}=x\\xvector{AB}+y\\xvector{AC}$，求 $(x,y)$',
    answer: '$(\\frac37,\\frac{16}{35})$',
    hasImage: false,
  },
  {
    id: '17cbf56cfc4',
    chapter: '平面向量',
    question:
      '已知 $A(4,-1)$、$B(-3,2)$，求 $\\overleftrightarrow{AB}$、$\\overline{AB}$、$\\overrightarrow{AB}$ 的參數式。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17cbf5861ce',
    chapter: '平面向量',
    question: '已知 $A(3,12)$、$B(1,-6)$，求 $\\overleftrightarrow{AB}$、$\\overline{AB}$。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17cbf41f41a',
    chapter: '平面向量',
    question:
      '直線 $L:\\begin{cases}x=-3+4t\\\\y=1-2t\\end{cases}$，$t\\in{\\mathbb R}$，請問：\n(1) 點 $(3,4)$ 是否在 $L$ 上？\n(2) 求 $L$ 化成直線標準式為？',
    answer: '(1) 否 (2) $x+2y=-1$',
    hasImage: false,
  },
  {
    id: '17cbf431289',
    chapter: '平面向量',
    question:
      '若 $L_1:\\begin{cases}x=3t+5\\\\y=-2t+p\\end{cases}$，$t\\in{\\mathbb R}$ 與 $L_2:\\begin{cases}x=as-1\\\\y=4s+6\\end{cases}$，$s\\in{\\mathbb R}$，若 $L_1$ 與 $L_2$ 重合，表同一直線，求數對 $(a,p)$。',
    answer: '$(-6,2)$',
    hasImage: false,
  },
  {
    id: '17cbf447c0a',
    chapter: '平面向量',
    question:
      '$L:\\begin{cases}x=-t+2\\\\y=3t+5\\end{cases}$，$t\\in\\mathbb R$，求：\n(1) 方向向量及斜率\n(2) $L$ 與兩軸圍成的三角形面積',
    answer: '(1) $(-1,3)$；$-3$ (2) $\\frac{121}6$',
    hasImage: false,
  },
  {
    id: '17cbf45731c',
    chapter: '平面向量',
    question:
      '兩直線參數式 $L_1:\\begin{cases}x=6t+7\\\\y=at+2\\end{cases}$，$t\\in\\mathbb R$ 與 $L_2:\\begin{cases}x=3s+b\\\\y=4s-2\\end{cases}$，$s\\in\\mathbb R$，若 $L_1$ 與 $L_2$ 重合，求數對 $(a,b)$。',
    answer: '$(8,4)$',
    hasImage: false,
  },
  {
    id: '17cbf463043',
    chapter: '平面向量',
    question:
      '直線 $L:\\begin{cases}x=11+4t\\\\y=9+3t\\end{cases}$，$t\\in\\mathbb R$，求：\n(1) $L$ 的法向量。(不唯一，舉一個例子即可)\n(2) 與 $L$ 垂直且大小為 $2$ 的向量',
    answer: '(1) $(3,-4)$ (2) $\\pm(\\frac65,-\\frac85)$',
    hasImage: false,
  },
  {
    id: '17cbf46b1c2',
    chapter: '平面向量',
    question:
      '直線 $L$ 過點 $A(-3,1)$，且法向量為 $\\vector n=(7,-4)$，求 $L$ 的方程式及點 $P(1,3)$ 到直線 $L$ 的最近距離。',
    answer: '$7x-4y=-25$；$\\frac{4\\sqrt{65}}{13}$',
    hasImage: false,
  },
  {
    id: '17cbf47810e',
    chapter: '平面向量',
    question: '求直線 $3x+4y=7$ 的斜率、法向量及方向向量。(若不唯一，舉一個例子即可)',
    answer: '$-\\frac34$；$(3,4)$；$(4,-3)$',
    hasImage: false,
  },
  {
    id: '17cbd7caa57',
    chapter: '平面向量',
    question: '試求通過 $(2,4)$，法向量為 $(7,1)$ 的直線方程式。',
    answer: '$7x+y=18$',
    hasImage: false,
  },
  {
    id: '17cbf485139',
    chapter: '平面向量',
    question:
      '平面上點 $A(1,5)$、$B(7,2)$ 與直線 $L:2x+3y=9$，求：\n(1) $\\xvector{AB}$ 在 $L$ 上的正射影\n(2) $\\overline{AB}$ 投影在 $L$ 上的長度。',
    answer: '(1) $(\\frac{72}{13},-\\frac{48}{13})$ (2) $\\frac{24}{\\sqrt{13}}$',
    hasImage: false,
  },
  {
    id: '17cbf48d2c1',
    chapter: '平面向量',
    question: '平面上兩直線 $L_1:x+y=1$ 與 $L_2:x+ky=7$ 的銳夾角為 $60\\du$，求 $k$。',
    answer: '$-2\\pm\\sqrt{3}$',
    hasImage: false,
  },
  {
    id: '17cbd88250a',
    chapter: '平面向量',
    question: '設向量 $\\vector a=(k,2)$ 在直線 $3x-4y=6$ 上的正射影為 $(8,6)$，求 $k$。',
    answer: '$11$',
    hasImage: false,
  },
  {
    id: '17cbf49a5ba',
    chapter: '平面向量',
    question: '請由法向量求兩直線 $4x-3y=0$ 與 $x+y-6=0$ 的夾角餘弦值及正弦值。',
    answer: '$\\pm\\frac{\\sqrt2}{10}$；$\\frac{7\\sqrt2}{10}$',
    hasImage: false,
  },
  {
    id: '17cb58623b1',
    chapter: '平面向量',
    question: '求 $\\begin{vmatrix}3&-4\\\\7&6\\end{vmatrix}$。',
    answer: '$46$',
    hasImage: false,
  },
  {
    id: '17cb5892fa3',
    chapter: '平面向量',
    question: '求 $\\begin{vmatrix}1998&357\\\\2008&362\\end{vmatrix}$。',
    answer: '$6420$',
    hasImage: false,
  },
  {
    id: '17cb587126b',
    chapter: '平面向量',
    question:
      '已知 $\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}=2$，求 $\\begin{vmatrix}5a-2b&5a+3b\\\\6c-2d&4c+3d\\end{vmatrix}$',
    answer: '$46$',
    hasImage: false,
  },
  {
    id: '17cb5880bef',
    chapter: '平面向量',
    question:
      '求 (1) $\\begin{vmatrix}1&2\\\\3&5\\end{vmatrix}$ (2) $\\begin{vmatrix}2&4\\\\6&8\\end{vmatrix}$ (3) $\\begin{vmatrix}-1&0\\\\4&7\\end{vmatrix}$',
    answer: '(1) $-1$ (2) $-8$ (3) $-7$',
    hasImage: false,
  },
  {
    id: '17cb5889951',
    chapter: '平面向量',
    question: '求 $\\begin{vmatrix}983&124\\\\980&130\\end{vmatrix}$。',
    answer: '$6270$',
    hasImage: false,
  },
  {
    id: '17cb58a1214',
    chapter: '平面向量',
    question:
      '已知 $\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}=1$，$\\begin{vmatrix}c&d\\\\e&f\\end{vmatrix}=-4$，求 $\\begin{vmatrix}5a&5b\\\\c+2e&d+2f\\end{vmatrix}$。',
    answer: '$-35$',
    hasImage: false,
  },
  {
    id: '17cb58baac7',
    chapter: '平面向量',
    question:
      '已知 $|\\vector a|=3$，$|\\vector b|=4$，$\\vector a$ 與 $\\vector b$ 所張成三角形的面積為 $5$，求 $\\vector a$ 與 $\\vector b$ 的夾角餘弦值。',
    answer: '$\\pm\\frac{\\sqrt{11}}6$',
    hasImage: false,
  },
  {
    id: '17cb58ca778',
    chapter: '平面向量',
    question:
      '已知 $|\\vector a|=5$，$\\vector a\\cdot\\vector b=-2$，$\\vector a$ 與 $\\vector b$ 所張成的三角形面積為 $6$，求 $|\\vector b|$。',
    answer: '$\\frac{2\\sqrt{37}}5$',
    hasImage: false,
  },
  {
    id: '17cb58d636f',
    chapter: '平面向量',
    question: '平面上三點 $A(2,-2)$、$B(4,5)$、$C(1,3)$，求 $\\triangle ABC$ 的面積。',
    answer: '$\\frac{17}2$',
    hasImage: false,
  },
  {
    id: '17cb58e6f79',
    chapter: '平面向量',
    question: '已知平面上三點 $A(3,k)$、$B(1,k+1)$、$C(-4,5)$ 所成的三角形面積為 $6$，求實數 $k$',
    answer: '$\\frac{15}2$ 或 $-\\frac92$',
    hasImage: false,
  },
  {
    id: '17cb59128d1',
    chapter: '平面向量',
    question:
      '$\\xvector{AB}=(3,-2)$，$\\xvector{BC}=(1,5)$，$\\xvector{CD}=(-2,-1)$，求四邊形 $ABCD$ 的面積。',
    answer: '$\\frac{19}2$',
    hasImage: false,
  },
  {
    id: '17cb58fd401',
    chapter: '平面向量',
    question:
      '平面上點 $A(3,5)$、$B(1,-7)$，$C$ 在 $2x+3y=4$ 上，若 $\\triangle ABC$ 的面積為 $9$，求 $C$。',
    answer: '$(\\frac72,-1)$ 或 $(\\frac45,\\frac45)$',
    hasImage: false,
  },
  {
    id: '17cb592fec4',
    chapter: '平面向量',
    question: '試求聯立方程組 $\\begin{cases}19x-31y-4=0\\\\9y+17x+1=0\\end{cases}$ 的解 $(x,y)$。',
    answer: '$(\\frac5{698},\\frac{-87}{698})$',
    hasImage: false,
  },
  {
    id: '17cb593b84a',
    chapter: '平面向量',
    question: '試求聯立方程組 $\\begin{cases}41x-53y-8=0\\\\7x+9y+2=0\\end{cases}$ 的解 $(x,y)$。',
    answer: '$(\\frac{-17}{370},\\frac{-69}{370})$',
    hasImage: false,
  },
  {
    id: '17cb5958c97',
    chapter: '平面向量',
    question:
      '設聯立方程組 $\\begin{cases}6x+(a-2)y-7a+17=0\\\\(a+5)x-2y+8a+24=0\\end{cases}$，若：\n(1) 此方程組無解，求 $a$。\n(2) 此方程組有無限多解，求 $a$。',
    answer: '(1) $-2$ (2) $-1$',
    hasImage: false,
  },
  {
    id: '17cb5969c97',
    chapter: '平面向量',
    question:
      '設聯立方程組 $\\begin{cases}(k+6)x-2y+7k+22=0\\\\6x+(k-1)y-5k+2=0\\end{cases}$，若：\n(1) 此方程組無解，求 $k$。\n(2) 此方程組有無限多解，求 $k$。',
    answer: '(1) $-3$ (2) $-2$',
    hasImage: false,
  },
  {
    id: '17cb598a8c3',
    chapter: '平面向量',
    question:
      '若方程組 $(3a_1+b_1)x+(2b_1-5c_1)y=a_1+4c_1$、$(3a_2+b_2)x+(2b_2-5c_2)y=a_2+4c_2$ 有唯一解 $x=7$，$y=1$，求 $\\begin{cases}a_1x+b_1y=c_1\\\\a_2x+b_2y=c_2\\end{cases}$ 的解 $(x,y)$。',
    answer: '$(-20,-5)$',
    hasImage: false,
  },
  {
    id: '17cb599d882',
    chapter: '平面向量',
    question:
      '若方程組 $(2a_1+b_1)x+(3b_1-c_1)y=a_1+c_1$、$(2a_2+b_2)x+(3b_2-c_2)y=a_2+c_2$ 的解為 $(x,y)=(-1,3)$，求 $\\begin{cases}a_1x+b_1y=c_1\\\\a_2x+b_2y=c_2\\end{cases}$ 的解 $(x,y)$。',
    answer: '$(-\\frac34,2)$',
    hasImage: false,
  },
  {
    id: '17c922a5dea',
    chapter: '平面向量',
    question:
      '平面上三點 $A、B、C$，$\\angle ABC=60\\du$，$\\overline{AB}=5$，$\\overline{BC}=14$，求 $\\xvector{AB}\\cdot\\xvector{BC}$。',
    answer: '$-35$',
    hasImage: false,
  },
  {
    id: '17c922bf1a6',
    chapter: '平面向量',
    question:
      '$\\vector a=(3,-5)$，$\\vector b =(2,7)$，$\\vector c =(k,2k+1)$，則：\n(1) 求 $\\vector a\\cdot\\vector b$ (2) 若 $\\vector b\\cdot\\vector c=-25$，求 $k$',
    answer: '(1) $-29$ (2) $-2$',
    hasImage: false,
  },
  {
    id: '17c922d58eb',
    chapter: '平面向量',
    question:
      '平面上六邊形 $ABCDEF$，如圖所示，請問 $\\xvector{AB}$ 與下列哪一個向量的內積值最大？哪一個最小？\n(1) $\\xvector{AB}$ (2) $\\xvector{AC}$ (3) $\\xvector{AD}$ (4) $\\xvector{AE}$ (5) $\\xvector{AF}$',
    answer: '(2)；(4)',
    hasImage: true,
  },
  {
    id: '17c922f5425',
    chapter: '平面向量',
    question:
      '已知 $|\\vector a|=3$，$|\\vector b|=4$，$|\\vector c|=10$，$\\vector a$ 與 $\\vector b$ 的夾角為 $30\\du$，$\\vector a$ 與 $\\vector c$ 的夾角為 $120\\du$，求 $\\vector a\\cdot\\vector b$ 與 $\\vector a\\cdot\\vector c$。',
    answer: '$6\\sqrt{3}$；$-15$',
    hasImage: false,
  },
  {
    id: '17c923047dd',
    chapter: '平面向量',
    question:
      '設 $\\vector a=(k,k+1)$，$\\vector b=(2,-1)$，$\\vector c=(3k-1,k+2)$，若 $\\vector a\\cdot\\vector b=5$，求 $\\vector b\\cdot\\vector c$。',
    answer: '$26$',
    hasImage: false,
  },
  {
    id: '17c92316f9e',
    chapter: '平面向量',
    question:
      '考慮正五邊形 $ABCDE$ 之對角線所形成的向量，下列何者內積值最大？\n(1) $\\xvector{AC}\\cdot\\xvector{EC}$ (2) $\\xvector{BD}\\cdot\\xvector{EC}$ (3) $\\xvector{DA}\\cdot\\xvector{EC}$ (4) $\\xvector{BD}\\cdot\\xvector{EB}$',
    answer: '(1)',
    hasImage: false,
  },
  {
    id: '17c9235066d',
    chapter: '平面向量',
    question:
      '關於內積的性質，下列各選項哪些為真？\n(1) 若 $\\vector a=\\vector b$，則 $\\vector a\\cdot\\vector c=\\vector b\\cdot\\vector c$\n(2) 若 $\\vector a\\cdot\\vector c=\\vector b\\cdot\\vector c$ ，則 $\\vector a=\\vector b$\n(3) 若 $\\vector a\\neq\\vector{0}$，則 $\\vector a\\cdot\\vector a>0$\n(4) ($\\vector a+\\vector b)\\cdot\\vector c=\\vector c\\cdot\\vector a+\\vector c\\cdot\\vector b$\n(5) 若 $\\vector a\\cdot\\vector b>0$ 且 $\\vector b\\cdot\\vector c>0$，則 $\\vector a\\cdot\\vector c>0$',
    answer: '(1)(3)(4)',
    hasImage: false,
  },
  {
    id: '17c92363d6f',
    chapter: '平面向量',
    question:
      '已知 $|\\vector a|=2$，$|\\vector b|=5$，$\\vector a\\cdot\\vector b=3$，求 $(4\\vector a-\\vector b)\\cdot(2\\vector a+3\\vector b)$。',
    answer: '$-13$',
    hasImage: false,
  },
  {
    id: '17c9237763c',
    chapter: '平面向量',
    question:
      '已知 $|\\vector a|=3$，$|\\vector b|=5$，$\\vector a$ 與 $\\vector b$ 的夾角為 $\\frac{2\\pi}{3}$，求 $(2\\vector a+\\vector b)\\cdot(4\\vector a-3\\vector b)$。',
    answer: '$12$',
    hasImage: false,
  },
  {
    id: '17c923aa4be',
    chapter: '平面向量',
    question:
      '下列關於向量內積的推論，下列哪些為真？\n(1) 若 $|\\vector b|>|\\vector c|$，則 $\\vector a\\cdot\\vector b>\\vector a\\cdot\\vector c$\n(2) 若 $\\vector a$、$\\vector b$ 夾鈍角，則 $\\vector a\\cdot\\vector b<0$ \n(3) 若 $\\vector a\\cdot\\vector a=0$，則 $\\vector a=\\vector{0}$\n(4) 若 $\\vector a\\cdot\\vector b>0$ 且 $\\vector a\\cdot\\vector c>0$，則 $\\vector a\\cdot(\\vector b+\\vector c)>0$\n(5) 若 $\\vector a\\cdot\\vector b=0$ 且 $\\vector b\\cdot\\vector c=0$，則 $\\vector a\\cdot\\vector c=0$',
    answer: '(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '17c923c0b82',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=3$，$\\overline{BC}=7$，$\\overline{CA}=6$，求 $\\xvector{AB}\\cdot\\xvector{AC}$ 及 $\\xvector{AB}\\cdot\\xvector{BC}$。',
    answer: '$-2$；$-11$',
    hasImage: true,
  },
  {
    id: '17c923c9fee',
    chapter: '平面向量',
    question:
      '等腰梯形 $ABCD$ 的上底長度為 $\\overline{AD}=5$，腰長為 $4$，兩個底角的大小為 $\\angle B=\\angle C=\\frac{\\pi}{3}$，求 $\\xvector{AC}\\cdot\\xvector{BD}$。',
    answer: '$37$',
    hasImage: true,
  },
  {
    id: '17c923d1b6b',
    chapter: '平面向量',
    question:
      '平行四邊形 $ABCD$，已知 $\\overline{AB}=4$，$\\overline{BC}=3$，求 $\\xvector{AC}\\cdot\\xvector{BD}$',
    answer: '$-7$',
    hasImage: false,
  },
  {
    id: '17c92425fed',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=4$，$\\overline{BC}=7$，$\\overline{AC}=5$ 求：(1) $\\xvector{AC}$ (2) $\\xvector{AB}\\cdot\\xvector{BC}$\n(3) 點 $P$ 在 $\\overline{BC}$ 上且 $\\overline{BP}=3$，點 $Q$ 在 $\\overline{AC}$ 上且 $\\overline{AQ}=2$，求 $\\xvector{AP}\\cdot\\xvector{BQ}$',
    answer: '(1) $-4$ (2) $-20$ (3) $-\\frac{142}{35}$',
    hasImage: false,
  },
  {
    id: '17c92607d70',
    chapter: '平面向量',
    question:
      '等腰梯形 $ABCD$，$\\overline{AB}=\\overline{CD}=4$，$\\overline{BC}=10$，$\\overline{AD}=8$。已知 $M$ 為 $\\overline{AD}$ 中點，$N$ 為 $\\overline{CD}$ 中點，求 $\\xvector{MN}\\cdot\\xvector{AC}$',
    answer: '48',
    hasImage: false,
  },
  {
    id: '17c92614ed0',
    chapter: '平面向量',
    question:
      '已知 $\\triangle ABC$ 中，$O$ 為內部一點，$\\overline{OA}=2$，$\\overline{OB}=3$，$\\overline{OC}=\\sqrt{3}$，$\\angle AOB=120\\du$，$\\angle AOC=150\\du$，求  $\\xvector{AB}\\cdot\\xvector{BC}$',
    answer: '$-9$',
    hasImage: false,
  },
  {
    id: '17c9264b427',
    chapter: '平面向量',
    question:
      '$|\\vector a|=3$，$|\\vector b|=2$，$\\vector a\\cdot\\vector b=-2$，若 $(\\vector a+\\vector b)\\perp(\\vector a+t\\vector b)$，求 $t$。',
    answer: '$-\\frac{7}{2}$',
    hasImage: false,
  },
  {
    id: '17c9265f99f',
    chapter: '平面向量',
    question:
      '若 $2|\\vector a|=|\\vector b|\\ne0$，且 $(\\vector a+\\vector b)\\perp(5\\vector a-2\\vector b)$，求 $\\vector a$ 與 $\\vector b$ 的夾角。',
    answer: '$60\\du$',
    hasImage: false,
  },
  {
    id: '17c9266f664',
    chapter: '平面向量',
    question:
      '平面上 $\\vector a=(3,-4)$，$\\vector b=(2,1)$，求：\n(1) 與 $\\vector a$ 垂直的單位向量\n(2) 與 $\\vector b$ 垂直且大小為 $4$ 的向量',
    answer: '(1) $\\pm(\\frac45,\\frac35)$ (2) $\\pm(\\frac4{\\sqrt5},-\\frac8{\\sqrt5})$',
    hasImage: false,
  },
  {
    id: '17c92677001',
    chapter: '平面向量',
    question:
      '給 $\\vector a=(5,12)$，求：\n(1) 與 $\\vector a$ 同向且長度為 $6$ 的向量\n(2) 與 $\\vector a$ 垂直的單位向量',
    answer: '(1) $(\\frac{30}{13},\\frac{72}{13})$ (2) $\\pm(\\frac{12}{13},-\\frac5{13})$',
    hasImage: false,
  },
  {
    id: '17c72eae50f',
    chapter: '平面向量',
    question:
      '若 $|\\vector a|=2$，$|\\vector b|=3$，$\\vector a\\cdot\\vector b=-3\\sqrt{2}$，則 $\\vector a$ 與 $\\vector b$ 的夾角為多少弳？',
    answer: '$\\frac{3\\pi}{4}$',
    hasImage: false,
  },
  {
    id: '17c6f72cb2e',
    chapter: '平面向量',
    question:
      '已知 $\\vector a=(3,4)$，$\\vector b=(1,x)$，若 $\\vector a$ 與 $\\vector b$ 的夾角為 $135\\du$，求 $x$。',
    answer: '$-7$',
    hasImage: false,
  },
  {
    id: '17c6f759d67',
    chapter: '平面向量',
    question:
      '$\\vector a=(2,11)$，$\\vector b=(3,6)$，求 $\\vector a$ 與 $\\vector b$ 夾角的正弦值。',
    answer: '$\\frac{7}{25}$',
    hasImage: false,
  },
  {
    id: '17c6f79722a',
    chapter: '平面向量',
    question:
      '設 $2\\vector a-\\vector b=(-1,\\sqrt{3})$，$\\vector c=(1,\\sqrt{3})$，$\\vector a\\cdot\\vector c=3$，$|\\vector b|=4$，求 $\\vector b$ 與 $\\vector c$ 的夾角。',
    answer: '$60\\du$',
    hasImage: false,
  },
  {
    id: '17c6f904640',
    chapter: '平面向量',
    question:
      '$|\\vector a|=1$，$|\\vector b|=3$，$|\\vector a-\\vector b|=\\sqrt{7}$，求：(1) $\\vector a$ 與 $\\vector b$ 的夾角\n(2) $|t\\vector a+\\vector b|$ 的最小值及此時的 $t$。',
    answer: '(1) $60\\du$ (2) $\\frac{3\\sqrt{3}}{2}$；$-\\frac{3}{2}$',
    hasImage: false,
  },
  {
    id: '17c6f95b5b1',
    chapter: '平面向量',
    question:
      '$2\\vector a+\\vector b+3\\vector c=\\vector{0}$，且 $|\\vector a|=\\sqrt{7}$，$|\\vector b|=2$，$|\\vector c|=2$，求：\n(1) $\\vector a\\cdot\\vector b$ (2) $|\\vector a+\\vector b-6\\vector c|$',
    answer: '(1) $1$ (2) $\\sqrt{241}$',
    hasImage: false,
  },
  {
    id: '17c6f99c610',
    chapter: '平面向量',
    question:
      '$|\\vector a|=1$，$|\\vector b|=3$，$\\vector a$ 與 $\\vector b$ 的夾角為 $\\theta$，且 $\\cos\\theta=\\frac13$，求 $|2\\vector a+3\\vector b|$。',
    answer: '$\\sqrt{97}$',
    hasImage: false,
  },
  {
    id: '17c6fd7598e',
    chapter: '平面向量',
    question:
      '設 $\\vector a+\\vector b+\\vector c=\\vector{0}$，$|\\vector a|=2$，$|\\vector b|=1$，$|\\vector c|=2$，求 $\\vector a\\cdot\\vector b+\\vector b\\cdot\\vector c+\\vector c\\cdot\\vector a$。',
    answer: '$-\\frac{9}{2}$',
    hasImage: false,
  },
  {
    id: '17c6fdc3a65',
    chapter: '平面向量',
    question:
      '$\\vector a=(3,5)$，$\\vector b=(1,1)$，求：\n(1) $\\vector a$ 在 $\\vector b$ 上的正射影\n(2) $\\vector b$ 在 $\\vector a$ 上的正射影',
    answer: '(1) $(4,4)$ (2) $(\\frac{12}{17},\\frac{20}{17})$',
    hasImage: false,
  },
  {
    id: '17c6fe02cb9',
    chapter: '平面向量',
    question:
      '已知平面上 $A(a,1)$、$B(2,a+1)$、$C(3,1)$、$D(-1,2)$ 四點，若 $\\xvector{AB}$ 在 $\\xvector{CD}$ 上的正射影為 $(2,b)$，求數對 $(a,b)$。',
    answer: '$(-\\frac{1}{10},-\\frac{1}{2})$',
    hasImage: false,
  },
  {
    id: '17c6fe8418e',
    chapter: '平面向量',
    question:
      '$\\vector a=(5,2)$，$\\vector b=(-1,3)$，求 $\\vector a$ 在 $\\vector b$ 上的正射影及 $\\vector b$ 在 $\\vector a$ 上的正射影。',
    answer: '$(-\\frac{1}{10},\\frac{3}{10})$；$(\\frac{5}{29},\\frac{2}{29})$',
    hasImage: false,
  },
  {
    id: '17c6fe40782',
    chapter: '平面向量',
    question:
      '已知平面上三點 $A(1,2)$、$B(4,-2)$、$C(-6,3)$，若 $C$ 點在直線 $AB$ 上的投影為 $H$ 點，求 $\\xvector{BH}$ 和 $H$ 的坐標。',
    answer: '$(-6,8)$；$(-2,6)$',
    hasImage: false,
  },
  {
    id: '17c7014e9de',
    chapter: '平面向量',
    question:
      '$a,b,c,d\\in\\mathbb{R}$ 滿足 $a^2+b^2=12$，$c^2+d^2=3$，求 $ac-bd$ 的最大值及最小值。',
    answer: '$6$；$-6$',
    hasImage: false,
  },
  {
    id: '17c6fff8dfc',
    chapter: '平面向量',
    question:
      '$x,y\\in\\mathbb{R}$，已知 $x^2+y^2=52$，求：\n(1) $2x+3y$ 的最大值及此時的 $(x,y)$\n(3) $2x+3y$ 的最小值及此時的 $(x,y)$。',
    answer: '(1) $26$；$(4,6)$ (2) $-26$；$(-4,-6)$',
    hasImage: false,
  },
  {
    id: '17c70032477',
    chapter: '平面向量',
    question:
      '設 $x,y\\in\\mathbb{R}$，滿足二次式 $4x^2+3y^2+8x-12y+1=0$，則 $2x+5y$ 的最大可能範圍為 $p\\le2x+5y\\le q$，求數對 $(p,q)$。',
    answer: '$(8-2\\sqrt35,8+2\\sqrt{35})$',
    hasImage: false,
  },
  {
    id: '17c7015680d',
    chapter: '平面向量',
    question:
      '$a,b,c,d\\in\\mathbb{R}$ 滿足 $a^2+b^2=9$，$c^2+d^2=16$，求：\n(1) $ac+bd$ 的最大值及最小值\n(2) $ab+cd$ 的最大值及最小值。',
    answer: '(1) $12$；$-12$ (2) $\\frac{25}{2}$；$-\\frac{25}{2}$',
    hasImage: false,
  },
  {
    id: '17c700b5a08',
    chapter: '平面向量',
    question:
      '$x,y\\in\\mathbb{R}$，已知 $x^2+y^2=50$，求：\n(1) $x-y$ 的最大值及此時的 $(x,y)$\n(2) $x-y$ 的最小值及此時的 $(x,y)$。',
    answer: '(1) $10$；$(5,-5)$ (2) $-10$；$(-5,5)$',
    hasImage: false,
  },
  {
    id: '17c7015bcca',
    chapter: '平面向量',
    question: '若 $x^2+y^2+2x-4y-4=0$，試求 $2x+3y$ 的最大值及最小值。',
    answer: '$4+3\\sqrt{13}$；$4-3\\sqrt{13}$',
    hasImage: false,
  },
  {
    id: '17c70160fae',
    chapter: '平面向量',
    question:
      '設 $x,y>0$，且 $2x+3y=14$，求 $\\frac{8}{x}+\\frac{3}{y}$ 的最小值及此時數對 $(x,y)$。',
    answer: '$\\frac{7}{2}$；$(4,2)$',
    hasImage: false,
  },
  {
    id: '17c701670d0',
    chapter: '平面向量',
    question:
      '設 $x,y>0$，且 $x+2y=8$，求 $\\frac{9}{x}+\\frac{2}{y}$ 的最小值及此時數對 $(x,y)$。',
    answer: '$\\frac{25}{8}$；$(\\frac{24}{5},\\frac{8}{5})$',
    hasImage: false,
  },
  {
    id: '17c72eae50f',
    chapter: '平面向量',
    question:
      '若 $|\\vector a|=2$，$|\\vector b|=3$，$\\vector a\\cdot\\vector b=-3\\sqrt{2}$，則 $\\vector a$ 與 $\\vector b$ 的夾角為多少弳？',
    answer: '$\\frac{3\\pi}{4}$',
    hasImage: false,
  },
  {
    id: '17c607a943e',
    chapter: '平面向量',
    question:
      '已知 $\\vector a=(2,1)$，$\\vector b=(3,4)$，求 $|t\\vector a+\\vector b|$ 的最小值及此時的 $t$。',
    answer: '$\\sqrt{5}$；$-2$',
    hasImage: false,
  },
  {
    id: '17c607db430',
    chapter: '平面向量',
    question:
      '已知 $\\vector a=(-2,1)$，$\\vector b=(7,4)$，求 $| t\\vector a+\\vector b|$ 的最小值及此時的 $t$。',
    answer: '$3\\sqrt{5}$；$2$',
    hasImage: false,
  },
  {
    id: '17c561f61e7',
    chapter: '平面向量',
    question:
      '已知正方形 $ABCD$ 的邊長 $1$，若 $P$ 點滿足 $\\xvector{AP}=t\\xvector{AB}+k\\xvector{AD}$，其中 $0\\le t\\le2$ 且 $-1\\le k\\le3$，則所有 $P$ 點所成的圖形為長方形，求其面積。',
    answer: '$8$',
    hasImage: false,
  },
  {
    id: '17c5df691cb',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=3$，$\\overline{BC}=5$，$\\overline{CA}=6$，若 $P$ 滿足 $\\xvector{AP}=x\\xvector{AB}=y\\xvector{AC}$ 且 $1\\le x\\le3$，$0\\le y\\le4$，求 $P$ 點所成圖形的面積。',
    answer: '$32\\sqrt{14}$',
    hasImage: false,
  },
  {
    id: '17c5e01de25',
    chapter: '平面向量',
    question:
      '如圖，$OPCQ$ 為平行四邊形，$\\overline{OP}=2$，$\\overline{OQ}=3$，$P$ 在 $\\overline{OA}$ 上，$B$ 在 $\\overline{OQ}$ 上，$\\lvert \\xvector{OA}\\rvert=5$，$\\lvert \\xvector{OB}\\rvert=1$，若 $\\xvector{OC}=x\\xvector{OA}+y\\xvector{OB}$，求數對 $(x,y)$。',
    answer: '$(\\frac{2}{5},3)$',
    hasImage: true,
  },
  {
    id: '17c5e0ecf8f',
    chapter: '平面向量',
    question:
      '如圖，$APQR$ 為平行四邊形，$P$ 在 $\\overline{OA}$ 上且 $\\overline{AP}=2\\overline{PC}$，$A$ 在 $\\overline{BR}$ 上且 $5\\overline{AB}=2\\overline{AR}$，若 $\\xvector{AQ}=x\\xvector{AB}+y\\xvector{AC}$，求數對 $(x,y)$。',
    answer: '$(\\frac{2}{5},-\\frac{2}{3})$',
    hasImage: true,
  },
  {
    id: '17c5e131245',
    chapter: '平面向量',
    question:
      '設 $\\vector a$ 與 $\\vector b$ 為非零向量且不互相平行，若 $(2x+y-7)\\vector a+(3x-y-3)\\vector b=\\vector{0}$，求數對 $(x,y)$。',
    answer: '$(2,3)$',
    hasImage: false,
  },
  {
    id: '17c5e14893b',
    chapter: '平面向量',
    question:
      '已知平面上 $\\vector a$ 與 $\\vector b$ 為非零向量且不互相平行，若 $(x-y+7)\\vector a+(2x+y-1)\\vector b=\\vector{0}$，求數對 $(x,y)$。',
    answer: '$(-2,5)$',
    hasImage: false,
  },
  {
    id: '17c5e180ef8',
    chapter: '平面向量',
    question:
      '平面上 $\\triangle ABC$，若 $(x+4y)\\xvector{AB}+$$(2x-9)\\xvector{BC}+(y-5)\\xvector{CA}=\\vector{0}$，求數對 $(x,y)$。',
    answer: ' $(1,-2)$',
    hasImage: false,
  },
  {
    id: '17c5e1c0bd8',
    chapter: '平面向量',
    question:
      '若 $3\\xvector{BC}-2\\xvector{PC}+\\xvector{AC}=4\\xvector{BP}+\\xvector{AP}$，則 $\\xvector{AP}=x\\xvector{AB}+y\\xvector{AC}$，求數對 $(x,y)$。',
    answer: '$(\\frac{1}{3},\\frac{2}{3})$',
    hasImage: false,
  },
  {
    id: '17c5e24a614',
    chapter: '平面向量',
    question:
      '設 $\\vector a=(3,1)$，$\\vector b=(-2,4)$，$\\vector c=(12,-10)$，若 $\\vector c=x\\vector a+y\\vector b$，求數對 $(x,y)$。',
    answer: '$(2,-3)$',
    hasImage: false,
  },
  {
    id: '17c5e2d8d18',
    chapter: '平面向量',
    question:
      '如圖，等腰梯形 $ABCD$，$\\overline{AB}=\\overline{CD}=2$，$\\overline{BC}=5$，$\\overline{AD}=3$。已知 $M$ 為 $\\overline{AD}$ 中點，$N$ 為 $\\overline{CD}$ 中點，$\\xvector{MN}=p\\xvector{AB}+q\\xvector{CD}$，求數對 $(p,q)$。',
    answer: '$(-\\frac{3}{4},-\\frac{5}{4})$',
    hasImage: true,
  },
  {
    id: '17c5e38a87b',
    chapter: '平面向量',
    question:
      '設 $\\vector a=(3,1)$，$\\vector b=(-1,2)$，$\\vector c=(3,8)$，若 $\\vector c=x\\vector a+y\\vector b$，求數對 $(x,y)$。',
    answer: '$(2,3)$',
    hasImage: false,
  },
  {
    id: '17c5ff6ee9c',
    chapter: '平面向量',
    question:
      '已知等腰梯形 $ABCD$，$\\overline{AD}\\parallel\\overline{BC}$，$\\overline{AB}=\\overline{CD}$，若 $\\xvector{AB}=(3,1)$，$\\xvector{AD}=(-2,2)$，求 $\\xvector{CD}$。',
    answer: '$(-1,-3)$',
    hasImage: false,
  },
  {
    id: '17c5ffde515',
    chapter: '平面向量',
    question:
      '$O$ 為 $\\overleftrightarrow{AB}$ 外一點， $P$ 點在 $\\overline{AB}$ 上，已知 $\\overline{PA}=\\frac{8}{3}$，$\\overline{PB}=\\frac{12}{7}$，若 $\\xvector{OP}=x\\xvector{OA}+y\\xvector{OB}$，求數對 $(x,y)$。',
    answer: '$(\\frac{9}{23},\\frac{14}{23})$',
    hasImage: false,
  },
  {
    id: '17c6005807b',
    chapter: '平面向量',
    question:
      '平面上 $A、B、C、D$ 四點，$C$ 在 $\\overline{BD}$  上且 $\\overline{BC}:\\overline{CD}=3:5$，若 $\\xvector{AD}=x\\xvector{AB}+y\\xvector{AC}$，求數對 $(x,y)$。',
    answer: '$(-\\frac{5}{3},\\frac{8}{3})$',
    hasImage: false,
  },
  {
    id: '17c6009c44c',
    chapter: '平面向量',
    question:
      '數線上有 $P、A、B$ 三點，已知 $\\overline{PA}:\\overline{PB}=4:7$，設點 $O$ 在數線外，若 $\\xvector{OP}=x\\xvector{OA}+y\\xvector{OB}$，求數對 $(x,y)$。',
    answer: '$(\\frac{7}{11},\\frac{4}{11})$ 或 $(\\frac{7}{3},-\\frac{4}{3})$',
    hasImage: false,
  },
  {
    id: '17c60109edf',
    chapter: '平面向量',
    question:
      '已知 $O$ 在 $\\overleftrightarrow{AB}$ 外，$P$ 在 $\\overline{AB}$  上，$\\overline{PA}=\\frac{7}{6}$，$\\overline{PB}=1.4$ ，若 $\\xvector{OP}=x\\xvector{OA}+y\\xvector{OB}$，求數對 $(x,y)$。',
    answer: '$(\\frac{6}{11},\\frac{5}{11})$',
    hasImage: false,
  },
  {
    id: '17c601738d2',
    chapter: '平面向量',
    question:
      '如圖，$D$ 在 $\\overline{BC}$ 上，且 $\\overline{CD}=2\\overline{BD}$，$G$ 為 $\\overline{AC}$ 中點，則：\n(1) $\\xvector{GD}=x\\xvector{CA}+y\\xvector{CB}$，求數對 $(x,y)$\n(2) $\\xvector{GD}=p\\xvector{AB}+q\\xvector{AC}$，求數對 $(p,q)$',
    answer: ' $(-\\frac{1}{2},\\frac{2}{3})$；$(\\frac{2}{3},-\\frac{1}{6})$。',
    hasImage: true,
  },

  {
    id: '17c5bbf5802',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$D$、$E$ 分別為 $\\overline{AB}$ 和 $\\overline{BC}$ 的三等分點，位置如圖，設 $\\xvector{DE}=x\\xvector{AB}+y\\xvector{AC}$，求數對 $(x,y)$。',
    answer: '$(\\frac{1}{3},\\frac{1}{3})$',
    hasImage: true,
  },
  {
    id: '17c5bcac6bb',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$A(1,2)$、$B(4,-2)$、$C(1,5)$\n(1) $\\angle A$ 的內角平分線交 $\\overline{BC}$ 於 $D$，則 $\\xvector{AD}=x\\xvector{AB}+y\\xvector{AC}$，求數對 $(x,y)$\n(2) $\\angle A$ 的外角平分線交 $\\overleftrightarrow{BC}$ 於 $E$，則 $\\xvector{AE}=p\\xvector{AB}+q\\xvector{AC}$，求數對 $(p,q)$',
    answer: '(1) $(\\frac38,\\frac58)$ (2) $(-\\frac32,\\frac52)$',
    hasImage: false,
  },
  {
    id: '17c5bcf51b4',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，已知 $A(3,-7)$、$B(-5,-1)$、$C(6,-3)$：\n(1) $\\angle A$ 的內角平分線交 $\\overline{BC}$ 於 $D$，則 $\\xvector{AD}=x\\xvector{AB}+y\\xvector{AC}$，求數對 $(x,y)$。\n(2) $\\angle A$ 的外角平分線交 $\\overleftrightarrow{BC}$ 於 $E$，則 $\\xvector{AE}=u\\xvector{AB}+v\\xvector{AC}$，求數對 $(u,v)$。',
    answer: '(1) $(\\frac{1}{3},\\frac{2}{3})$ (2) $(-1,2)$',
    hasImage: false,
  },
  {
    id: '17c5bd757e0',
    chapter: '平面向量',
    question:
      '平面上有四點 $P$、$A$、$B$、$C$，下列哪些條件可保證 $A$、$B$、$C$ 三點在同一直線上？\n(1) $\\xvector{AB}=100\\xvector{BC}$\n(2) $\\xvector{PA}=\\xvector{PB}+\\xvector{PC}$\n(3) $\\xvector{PA}=\\frac{2}{3}\\xvector{PB}+\\frac{1}{3}\\xvector{PC}$\n(4) $\\xvector{PA}=100\\xvector{PB}+99\\xvector{PC}$\n(5) $\\xvector{PA}=100\\xvector{PB}-99\\xvector{PC}$',
    answer: '(1)(3)(5)',
    hasImage: false,
  },
  {
    id: '17c5bdc51bf',
    chapter: '平面向量',
    question:
      '若 $A$、$B$、$C$ 三點共線，$P$ 為線外一點，且 $4\\xvector{PA}+5\\xvector{PB}+x\\xvector{PC}=2\\xvector{CA}$，求 $x$ 及 $\\frac{\\overline{AB}}{\\overline{BC}}$。',
    answer: '$-9$；$\\frac{7}{2}$',
    hasImage: false,
  },
  {
    id: '17c5be5dc06',
    chapter: '平面向量',
    question:
      '如圖所示，兩射線 $OA$ 與 $OB$ 交於 $O$ 點，試問下列選項中哪些向量的終點 $P$，會落在陰影區域內？\n(1) $\\xvector{OP}=\\xvector{OA}+2\\xvector{OB}$\n(2) $\\xvector{OP}=\\frac{3}{4}\\xvector{OA}+\\frac{1}{3}\\xvector{OB}$\n(3) $\\xvector{OP}=\\frac{3}{4}\\xvector{OA}-\\frac{1}{3}\\xvector{OB}$\n(4) $\\xvector{OP}=\\frac{3}{4}\\xvector{OA}+\\frac{1}{5}\\xvector{OB}$\n(5) $\\xvector{OP}=\\frac{3}{4}\\xvector{OA}-\\frac{1}{5}\\xvector{OB}$',
    answer: '(1)(2)',
    hasImage: true,
  },
  {
    id: '17c5bec7255',
    chapter: '平面向量',
    question:
      '下列哪些選項的向量關係式可保證 $A$ 點會落在 $\\overline{BC}$ 上？\n(1) $\\xvector{AB}+\\xvector{CB}=\\vector{0}$\n(2) $5\\xvector{PA}=2\\xvector{PB}+3\\xvector{PC}$\n(3) $\\sqrt{5}\\xvector{PA}=\\sqrt{2}\\xvector{PB}+\\sqrt{3}\\xvector{PC}$\n(4) $3\\xvector{PB}=\\xvector{PA}+2\\xvector{PC}$\n(5) $\\xvector{PB}=4\\xvector{PC}-3\\xvector{PA}$',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '17c5bf60b7b',
    chapter: '平面向量',
    question:
      '若 $C$ 在 $\\overset{\\longleftrightarrow{}}{AB}$ 上，$P$ 在 $\\overset{\\longleftrightarrow{}}{AB}$ 外，且 $\\xvector{PB}=(3t+4)\\xvector{PA}+(t+9)\\xvector{PC}$，求 $t$。',
    answer: '$-3$',
    hasImage: false,
  },
  {
    id: '17c5ee185ce',
    chapter: '平面向量',
    question:
      '平面上有點 $P$ 與 $\\triangle ABC$，滿足 $\\xvector{AP}=\\alpha\\xvector{AB}+\\beta\\xvector{AC}$，則 $(\\alpha,\\beta)$ 為下列何者時，$P$ 會在 $\\triangle ABC$ 的內部？(不含邊界)\n(1) $(\\frac{2}{3},\\frac{3}{4})$ (2) $(-\\frac{2}{5},\\frac{6}{7})$ (3) $(-\\frac{6}{7},\\frac{13}{9})$\n(4) $(\\frac{1}{2},\\frac{1}{3})$ (5) $(\\frac{2}{5},\\frac{3}{5})$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17c5f05b801',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$D$ 為 $\\overline{AB}$ 中點，$E$ 在 $\\overline{AC}$ 上，且 $\\overline{AC}=3\\overline{AE}$，$\\overline{BE}$ 與 $\\overline{CD}$ 交於 $F$，若 $\\xvector{AF}=x\\xvector{AB}+y\\xvector{AC}$，求數對 $(x,y)$。',
    answer: '$(\\frac{2}{5},\\frac{1}{5})$',
    hasImage: true,
  },
  {
    id: '17c5f8ceff5',
    chapter: '平面向量',
    question:
      '平行四邊形$ABCD$，$P$ 在 $\\overline{AB}$ 上且 $\\overline{AP}:\\overline{PB}=1:3$，$Q$ 在 $\\overline{CD}$ 上且 $\\overline{CQ}:\\overline{QD}=2:5$，$\\overline{PQ}$ 交 $\\overline{AC}$ 於 $G$。若 $\\xvector{BG}=x\\xvector{BA}+y\\xvector{BC}$，求數對 $(x,y)$。',
    answer: '$(\\frac{8}{15},\\frac{7}{15})$',
    hasImage: true,
  },
  {
    id: '17c5f9ca487',
    chapter: '平面向量',
    question:
      '$D$ 在 $\\overline{AB}$ 上且 $2\\xvector{AD}=\\xvector{DB}$，$E$ 在 $\\overline{AC}$ 上且 $\\xvector{AE}=3\\xvector{EC}$，$\\overline{BE}$ 與 $\\overline{CD}$ 交於 $F$，$\\xvector{AF}=x\\xvector{AB}+y\\xvector{AC}$，求數對 $(x,y)$。',
    answer: '$(\\frac{1}{9},\\frac{2}{3})$',
    hasImage: true,
  },
  {
    id: '17c5faa0582',
    chapter: '平面向量',
    question:
      '平行四邊形 $ABCD$，$E$、$F$ 各在 $\\overline{BC}$、$\\overline{CD}$ 上，且 $\\overline{BE}:\\overline{EC}=4:3$，$\\overline{CF}:\\overline{FD}=2:5$，$\\overline{BF}$ 交 $\\overline{DE}$ 於 $G$。若 $\\xvector{AG}=x\\xvector{AB}+y\\xvector{AD}$，求數對 $(x,y)$。',
    answer: '$(\\frac{35}{43},\\frac{28}{43})$',
    hasImage: false,
  },
  {
    id: '17c5fdff0c5',
    chapter: '平面向量',
    question:
      '平面上三點 $A(5,-1)$、$B(7,12)$、$C(15,4)$，若點 $P$ 滿足 $\\xvector{PA}+\\xvector{PB}+\\xvector{PC}=\\vector{0}$，求 $P$。',
    answer: '$(9,5)$',
    hasImage: false,
  },
  {
    id: '17c5fea4983',
    chapter: '平面向量',
    question:
      '若在 $\\triangle ABC$ 的三邊 $\\overline{BC}$、$\\overline{CA}$、$\\overline{AB}$ 上分別取 $D$、$E$、$F$ 三點，使 $\\xvector{DC}=4\\xvector{BD}$，$\\xvector{EC}=2\\xvector{AE}$，$\\xvector{FB}=3\\xvector{AF}$，設 $G$ 為 $\\triangle DEF$ 的重心，$\\xvector{AG}=x\\xvector{AB}+y\\xvector{AC}$，求數對 $(x,y)$。',
    answer: '$(\\frac{7}{20},\\frac{8}{45})$',
    hasImage: true,
  },
  {
    id: '17c5fef7805',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=4$，$\\overline{BC}=2$，$\\overline{CA}=3$，$I$ 為其內心，且 $\\xvector{AB}=x\\xvector{AI}+y\\xvector{IC}$，求數對 $(x,y)$。',
    answer: '$(\\frac{5}{3},-\\frac{4}{3})$',
    hasImage: false,
  },
  {
    id: '17c5ff32ef2',
    chapter: '平面向量',
    question:
      '平面上 $\\triangle ABC$，已知 $A(1,5)$、$B(-2,1)$，$\\triangle ABC$ 的重心為 $G(3,4)$，求 $C$。',
    answer: '$(10,6)$',
    hasImage: false,
  },
  {
    id: '17c5ff9c118',
    chapter: '平面向量',
    question:
      '如圖，$\\triangle ABC$ 的重心為 $G$，通過 $G$ 作直線 $L$，$L$ 與 $\\overline{AB}$ 交於 $P$，$L$ 與 $\\overline{AC}$ 交於 $Q$，若 $\\overline{AP}:\\overline{PB}=7:2$，試求 $\\overline{AQ}:\\overline{QC}$。',
    answer: '$7:5$',
    hasImage: true,
  },
  {
    id: '17c5ffd658c',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=4$，$\\overline{BC}=5$，$\\overline{CA}=7$，$I$ 為其內心，且 $\\xvector{AI}=x\\xvector{AB}+y\\xvector{AC}$，求數對 $(x,y)$。',
    answer: '$(\\frac{7}{16},\\frac{1}{4})$',
    hasImage: false,
  },
  {
    id: '17c3ff7a1a5',
    chapter: '平面向量',
    question:
      '一個正六邊形的：(不包含零向量)\n(1) $6$ 個邊可決定幾個不同的向量？\n(2) $6$ 個頂點可決定幾個不同的向量？',
    answer: '(1) $6$ (2) $18$',
    hasImage: false,
  },
  {
    id: '17c3cfd8db7',
    chapter: '平面向量',
    question: '用坐標表示向量：$\\vector a$，$\\vector b$，$\\vector c$，$\\vector d$。',
    answer: '$(4,3)$；$(-2,5)$；$(-4,-2)$；$(3,-3)$',
    hasImage: true,
  },
  {
    id: '17c3cffaea5',
    chapter: '平面向量',
    question:
      '平面上兩點 $P(2,3\\sqrt{3})$、$Q(5,2\\sqrt{3})$，求：\n(1) $\\xvector{PQ}$ (2) $\\xvector{QP}$ (3) $|\\xvector{PQ}|$。',
    answer: '(1) $(3,-\\sqrt{3})$ (2) $(-3,\\sqrt{3})$ (3) $2\\sqrt{3}$',
    hasImage: false,
  },
  {
    id: '17c3d014a2f',
    chapter: '平面向量',
    question:
      '坐標平面上點 $A(x,5)$、$B(3,y)$、$C(-1,8)$、$D(2,4)$，若：\n(1) $\\xvector{AB}=(5,-4)$，求 $(x,y)$。\n(2) 四邊形$ABCD$為平行四邊形，求 $(x,y)$',
    answer: '(1) $(-2,1)$ (2) $(6,9)$',
    hasImage: true,
  },
  {
    id: '17c3ff879b5',
    chapter: '平面向量',
    question:
      '(1) 一個三角形的 $3$ 個頂點可決定幾個不同的向量？(不包含零向量)\n(2) 一個平行四邊形的邊可決定幾個不同的向量？(不包含零向量)',
    answer: '(1) $6$ (2) $4$',
    hasImage: false,
  },
  {
    id: '17c3d037b9d',
    chapter: '平面向量',
    question:
      '平面上兩點 $P(-3,7)$、$Q(-5,9)$，求：\n(1) $\\xvector{PQ}$ (2) $\\xvector{QP}$ (3) $|\\xvector{PQ}|$。',
    answer: '(1) $(-2,2)$ (2) $(2,-2)$ (3) $2\\sqrt{2}$',
    hasImage: false,
  },
  {
    id: '17c3d22698e',
    chapter: '平面向量',
    question:
      '若 $D(x,y)$ 與 $A(1,2)$、$B(12,7)$、$C(5,-9)$ 連成平行四邊形，求 $D(x,y)$。\n(有三組解)',
    answer: '$(8,18)$ 或 $(16,-4)$ 或 $(-6,-14)$',
    hasImage: false,
  },
  {
    id: '17c3c054fb2',
    chapter: '平面向量',
    question:
      '$A(-2,-1)$、$B(x,1)$、$C(5,6)$、$D(-5,x)$ ，若 $|\\xvector{AB}|=|\\xvector{CD}|$，求 $x$。',
    answer: '$8$',
    hasImage: false,
  },
  {
    id: '17c3c049c2f',
    chapter: '平面向量',
    question:
      '已知 $\\xvector{OA}$ 與 $\\xvector{OB}$ 所張成的平行四邊形面積為 $5$，求由 $\\xvector{OA}+\\xvector{OB}$ 與 $\\xvector{OA}-\\xvector{OB}$ 所張成的平行四邊形面積。',
    answer: '$10$',
    hasImage: true,
  },
  {
    id: '17c3d243d52',
    chapter: '平面向量',
    question:
      '平面上四點 $A(2,5)$、$B(-4,1)$、$C(9,-6)$、$D(0,13)$，求下列向量：\n(1) $\\xvector{AB}+\\xvector{CD}$\n(2) $\\xvector{AB}+\\xvector{BC}+\\xvector{CD}$\n(3) $\\xvector{AB}-\\xvector{CD}$。',
    answer: '(1) $(-15,15)$ (2) $(-2,8)$ (3) $(3,-23)$',
    hasImage: false,
  },
  {
    id: '17c3d24d200',
    chapter: '平面向量',
    question:
      '已知 $\\xvector{AB}=(1,2)$，$\\xvector{CD}=(-4,3)$，$\\xvector{AD}=(7,-2)$，求 $\\xvector{BD}$ 及 $\\xvector{BC}$。',
    answer: '$(6,-4)$；$(10,-7)$',
    hasImage: false,
  },
  {
    id: '17c3ff99e83',
    chapter: '平面向量',
    question:
      '平面上有平行四邊形$ABCD$，下列各選項的等式哪些成立？\n(1) $\\xvector{AB}=\\xvector{CD}$ (2) $\\xvector{AD}=\\xvector{BC}$\n(3) $\\xvector{AC}+\\xvector{BD}=\\vector{0}$\n(4) $\\xvector{AB}+\\xvector{BC}+\\xvector{CD}=\\xvector{AD}$\n(5) $\\xvector{AB}-\\xvector{AD}=\\xvector{BD}$',
    answer: '(2)(4)',
    hasImage: false,
  },
  {
    id: '17c3d26a079',
    chapter: '平面向量',
    question:
      '平面上四點 $A(2,6)$、$B(1,-4)$、$C(3,2)$、$D(7,11)$，求下列向量：\n(1) $\\xvector{AB}+\\xvector{CD}$\n(2) $\\xvector{AB}+\\xvector{BC}+\\xvector{CD}$\n(3) $\\xvector{AB}+\\xvector{BC}+\\xvector{CD}+\\xvector{DA}$。',
    answer: '(1) $(3,-1)$ (2) $(5,5)$ (3) $\\vector{0}$',
    hasImage: false,
  },
  {
    id: '17c458467c4',
    chapter: '三角函數B',
    question:
      '已知函數 $f(x)=2\\sin(\\frac{\\pi}{3}x+\\theta)$ 的圖形經過 $(0,1)$，其中 $0<\\theta<\\frac{\\pi}{2}$，求 $\\theta$。',
    answer: '$\\frac{\\pi}{6}$',
    hasImage: false,
  },
  {
    id: '17c4585c46f',
    chapter: '三角函數B',
    question:
      '已知函數 $y=a\\sin x+b$，其中 $a>0$，若函數的最大值為 $\\frac{3}{2}$，最小值為 $-\\frac{1}{2}$，求數對 $(a,b)$。',
    answer: '$(1,\\frac{1}{2})$',
    hasImage: false,
  },
  {
    id: '17c3c395cde',
    chapter: '平面向量',
    question:
      '已知 $\\xvector{AB}=(2,13)$，$\\xvector{AD}=(15,8)$，$\\xvector{DC}=(-6,1)$，求 $\\xvector{CA}$ 及 $\\xvector{CB}$。',
    answer: '$(-9,-9)$；$(7,4)$',
    hasImage: false,
  },
  {
    id: '17c4563c8b7',
    chapter: '平面向量',
    question:
      '線段 $\\overline{PQ}$ 上有 $5$ 個等分點 $A$、$B$、$C$、$D$、$E$，如圖，若 $\\xvector{AE}=x\\xvector{PQ}$，$\\xvector{AQ}=y\\xvector{DB}$，求數對 $(x,y)$。',
    answer: '$(\\frac23,-\\frac52)$',
    hasImage: true,
  },
  {
    id: '17c3c614420',
    chapter: '平面向量',
    question:
      '若 $2\\vector a-3(\\vector b+2\\vector c)+2(\\vector a-\\vector b+\\vector c)$$=x\\vector a+y\\vector b+z\\vector c$，求 $(x,y,z)$。',
    answer: '$(4,-5,-4)$',
    hasImage: false,
  },
  {
    id: '17c3c7a3797',
    chapter: '平面向量',
    question:
      '坐標平面上，$\\vector a=(1,-3)$，$\\vector b=(4,5)$，$\\vector c=(-2,7)$，求 $2\\vector a+3\\vector b-5\\vector c$？',
    answer: '$(24,-26)$',
    hasImage: false,
  },
  {
    id: '17c40cb19e8',
    chapter: '平面向量',
    question:
      '已知 $|\\vector a|=8$，$|\\vector b|=3$，$|\\vector c|=5$，$\\vector a$ 與 $\\vector b$ 同向，$\\vector b$ 與 $\\vector c$ 反向，$\\vector a=x\\vector b=y\\vector c$，求數對 $(x,y)$。',
    answer: '$(\\frac{8}{3},-\\frac{8}{5})$',
    hasImage: false,
  },
  {
    id: '17c40d37bdd',
    chapter: '平面向量',
    question:
      '若 $4(\\vector a-2\\vector b)+3\\vector c$$-2(-\\vector a+2\\vector b+3\\vector c)=x\\vector a+y\\vector b+z\\vector c$，求 $(x,y,z)$。',
    answer: '$(6,-12,-3)$',
    hasImage: false,
  },
  {
    id: '17c40da67d7',
    chapter: '平面向量',
    question:
      '坐標平面上，點 $A(4,7)$、$B(9,-3)$、$C(-6,11)$、$D(2,-1)$，求 $3\\xvector{AB}+4\\xvector{CD}$ 與 $2\\xvector{AC}-5\\xvector{BD}$。',
    answer: '$(47,-78)$；$(15,-2)$',
    hasImage: false,
  },
  {
    id: '17c40dface4',
    chapter: '平面向量',
    question:
      '平面上 $A(3,2)$、$B(1,5)$、$C(-2,-1)$，若 $P$ 滿足 $3\\xvector{AP}+2\\xvector{BP}+\\xvector{CP}=\\vector{0}$，求 $P$',
    answer: '$(\\frac{3}{2},\\frac{5}{2})$',
    hasImage: false,
  },
  {
    id: '17c40e31a97',
    chapter: '平面向量',
    question:
      '平面上 $A(5,p)$、$B(q,-2)$、$C(1,7)$、$D(4,3)$，若 $A$ 點沿著 $\\xvector{CD}$ 的方向移動 $15$ 單位恰到達 $B$ 點，求數對 $(p,q)$。',
    answer: '$(10,14)$',
    hasImage: false,
  },
  {
    id: '17c40edb4d6',
    chapter: '平面向量',
    question:
      '已知平面上 $\\vector a=(3,-2)$、$\\vector b=(5,1)$、$\\vector c=(4,6)$，若：\n(1) $\\vector a$ 與 $\\vector b+t\\vector c$ 平行，求 $t$。\n(2) $k\\vector a+\\vector b$ 平分 $\\vector a$ 與 $\\vector b$ 的夾角，求 $k$。',
    answer: '(1) $-\\frac{1}{2}$ (2) $\\sqrt{2}$',
    hasImage: false,
  },
  {
    id: '17c456250f8',
    chapter: '平面向量',
    question:
      '平面上 $A(1,7)$、$B(2,2)$、$C(-3,1)$，若 $P$ 滿足 $2\\xvector{AP}-3\\xvector{BP}+5\\xvector{CP}=\\vector{0}$，求 $P$。',
    answer: '$(-\\frac{19}{4},\\frac{13}{4})$ ',
    hasImage: false,
  },
  {
    id: '17c4569c253',
    chapter: '平面向量',
    question:
      '坐標平面上有一點 $A(7,-2)$ 及向量 $\\vector{p}=(-3,4)$，若 $A$ 點沿著 $\\vector{p}$ 的方向移動 $4$ 個單位長至 $B$ 點，求 $B$。',
    answer: '$(\\frac{23}{5},\\frac{6}{5})$',
    hasImage: false,
  },
  {
    id: '17c4573201e',
    chapter: '平面向量',
    question:
      '平面上 $\\vector a=(2,-1)$，$\\vector b=(4,3)$，令 $\\vector c=\\vector a+t\\vector b$，若 : \n(1) $\\vector c$ 與 $(2,1)$ 平行，求 $t$。\n(2) $\\vector c$ 平分 $\\vector a$、$\\vector b$ 的夾角，求 $t$。',
    answer: '(1) $2$；(2) $\\frac{\\sqrt{5}}{5}$',
    hasImage: false,
  },
  {
    id: '17c0eb34ae1',
    chapter: '平面向量',
    question:
      '平面上 $A$、$B$、$C$、$D$ 為相異四點，則下列個選項的推論哪些正確？\n(1) $\\xvector{AB}$、$\\xvector{AC}$、$\\xvector{AD}$ 必兩兩相異\n(2) $|\\xvector{AB}|$、$|\\xvector{AC}|$、$|\\xvector{AD}|$ 必兩兩相異\n(3) $\\xvector{AB}$、$\\xvector{BC}$、$\\xvector{CD}$ 必兩兩相異\n(4) 若 $\\xvector{AB}=\\xvector{CD}$，則 $\\xvector{AD}=\\xvector{BC}$\n(5) 若 $\\xvector{AB}=\\xvector{CD}$，則 $\\xvector{AC}=\\xvector{BD}$',
    answer: '(1)(5)',
    hasImage: false,
  },
  {
    id: '17c0eb5c023',
    chapter: '平面向量',
    question:
      '平面上兩點 $A(2,1)$、$B(-6,7)$，求 $\\xvector{AB}$、$|\\xvector{AB}|$。若 $\\xvector{AC}=(5,-3)$，求 $C$。',
    answer: '(-8,6)；10；(7,-2)',
    hasImage: false,
  },
  {
    id: '17c0ebc1b8d',
    chapter: '平面向量',
    question:
      '設 $\\vector a=(3,-2)$，$\\vector b=(5,7)$，求 $\\vector a+\\vector b$、$\\vector a-\\vector b$。',
    answer: '(8,5)、(-2,-9)',
    hasImage: false,
  },
  {
    id: '17c0ebfcd9d',
    chapter: '平面向量',
    question:
      '(1) 下列哪些選項是不可能發生的？\n(2) 下列哪一個選項可推得 $\\vector a,\\vector b$ 為同方向？\n(3) 下列哪一個選項可推得 $\\vector a,\\vector b$ 為反方向？\n(a) $|\\vector a|=3,|\\vector b|=1,|\\vector a|+|\\vector b|=1$\n(b) $|\\vector a|=3,|\\vector b|=1,|\\vector a|+|\\vector b|=2$\n(c) $|\\vector a|=3,|\\vector b|=1,|\\vector a|+|\\vector b|=3$\n(d) $|\\vector a|=3,|\\vector b|=1,|\\vector a|+|\\vector b|=4$\n(e) $|\\vector a|=3,|\\vector b|=1,|\\vector a|+|\\vector b|=5$',
    answer: '(1) (a)(e) (2) (d) (3) (b)',
    hasImage: false,
  },
  {
    id: '17c13837c6d',
    chapter: '平面向量',
    question: '設 $\\vector a=(3,-2)$，$\\vector b=(-5,1)$，求 $2\\vector a+3\\vector b$。',
    answer: '(-9,-1)',
    hasImage: false,
  },
  {
    id: '17c1385a0fe',
    chapter: '平面向量',
    question:
      '平面向量 $\\vector a=(x-1,2)$，$\\vector b=(x-2,-3)$，若 $\\vector a\\parallel\\vector b$，求 $x$。',
    answer: '$\\frac75$',
    hasImage: false,
  },
  {
    id: '17c138d9fb9',
    chapter: '平面向量',
    question:
      '已知 $\\vector u$ 與 $\\vector v$ 不平行，若 $(x-y-1)\\vector u+(x+y+5)\\vector v=\\vector 0$，求數對 $(x,y)$。',
    answer: ' (-2,-3)',
    hasImage: false,
  },
  {
    id: '17c1390d4a3',
    chapter: '平面向量',
    question:
      '圖為每小格皆為全等的平行四邊形，若 $\\xvector{PQ}=x\\vector a+y\\vector b$，求數對 $(x,y)$。',
    answer: '$(\\frac72,2)$',
    hasImage: true,
  },
  {
    id: '17c139a2fd3',
    chapter: '平面向量',
    question:
      '已知四點 $P$、$A$、$B$、$C$ 滿足 $\\xvector{PA}=\\dfrac37\\xvector{PB}+\\dfrac47\\xvector{PC}$，若 $\\overline{AB}=12$，求 $\\overline{BC}$。',
    answer: '21',
    hasImage: false,
  },
  {
    id: '17c1553b7bb',
    chapter: '平面向量',
    question:
      '在坐標平面上，$\\triangle ABC$ 內有一點 $P$ 滿足 $\\xvector{AP}=(\\dfrac43,\\dfrac56)$ 及 $\\xvector{AP}=\\dfrac12\\xvector{AB}+\\dfrac15\\xvector{AC}$。若 $A$、$P$ 連線交 $\\overline{BC}$ 於 $M$，求 $\\xvector{AM}$。',
    answer: '$(\\frac{40}{21},\\frac{25}{21})$',
    hasImage: false,
  },
  {
    id: '17c155921cc',
    chapter: '平面向量',
    question:
      '$\\vector a\\cdot\\vector b=3$，$\\vector a\\cdot\\vector c=-2$，求 $\\vector a\\cdot(4\\vector b-3\\vector c)$',
    answer: '18',
    hasImage: false,
  },
  {
    id: '17c155a6077',
    chapter: '平面向量',
    question:
      '$|\\vector a|=4$，$|\\vector b|=3$，$\\vector a\\cdot\\vector b=-2$，求 $|\\vector a+\\vector b|$',
    answer: '$\\sqrt{21}$',
    hasImage: false,
  },
  {
    id: '17c155b8555',
    chapter: '平面向量',
    question:
      '$\\vector a=(3,-4)$、$\\vector b=(12,5)$，其夾角為 $\\theta$，求 $\\vector a\\cdot\\vector b$ 及 $\\cos\\theta$。',
    answer: '16；$\\frac{16}{65}$',
    hasImage: false,
  },
  {
    id: '17c155c85bd',
    chapter: '平面向量',
    question:
      '已知 $\\vector a=(2,3)$，下列哪些向量與 $\\vector a$ 垂直？\n(1) $(2,-3)$ (2) $(3,2)$ (3) $(-3,2)$ (4) $(6,-4)$',
    answer: '(3)(4)',
    hasImage: false,
  },
  {
    id: '17c155f8670',
    chapter: '平面向量',
    question: '求向量 (-3,5) 在 (1,2) 上的正射影及正射影的長度。',
    answer: '$(\\frac75,\\frac{14}5)$，$\\frac{7\\sqrt5}5$',
    hasImage: false,
  },
  {
    id: '17c1560e32e',
    chapter: '平面向量',
    question:
      '平面向量 $(4,5)=x(1,-2)+\\vector a$，其中 $\\vector a$ 與 $(1,-2)$ 垂直，求 $x$ 及 $\\vector a$。',
    answer: '$-\\frac65$；$(\\frac{26}5,\\frac{13}5)$',
    hasImage: false,
  },
  {
    id: '17c15675098',
    chapter: '平面向量',
    question: '設 $x,y\\in\\mathbb R$ 滿足 $3x+5y=2$，求 $x^2+y^2$ 的最小值及此時的數對 $(x,y)$。',
    answer: '$\\frac2{17}$；$(\\frac3{17},\\frac5{17})$',
    hasImage: false,
  },
  {
    id: '17c158aa7d6',
    chapter: '平面向量',
    question: '若 $x^2+y^2=5$，求 $5x-6y$ 的最大值及最小值。',
    answer: '$\\sqrt{170}$；$-\\sqrt{170}$',
    hasImage: false,
  },
  {
    id: '17c1596f242',
    chapter: '平面向量',
    question:
      '平面上直線 $L:\\begin{cases}x=5t-2\\\\y=3t+7\\end{cases},t\\in\\mathbb{R}$，若 $L$ 上有一點 $P(k,22)$，求 $k$。',
    answer: '23',
    hasImage: false,
  },
  {
    id: '17c1597d6d1',
    chapter: '平面向量',
    question: '求過點 $P(3,1)$ 且法向量為 $\\vector{n}=(2,5)$ 的直線方程式。',
    answer: '$2x+5y=11$',
    hasImage: false,
  },
  {
    id: '17c159e261b',
    chapter: '平面向量',
    question: '$4x+3y=1$ 與 $12x+5y=2$ 的銳夾角為 $\\theta$，求 $\\cos\\theta$。',
    answer: '$\\frac{63}{65}$',
    hasImage: false,
  },
  {
    id: '17c159ef417',
    chapter: '平面向量',
    question: '求兩直線 $y=3x+1$ 與 $y=-2x$ 的夾角。',
    answer: '$45\\du$ 或 $135\\du$',
    hasImage: false,
  },
  {
    id: '17c15b7239f',
    chapter: '平面向量',
    question: '平面上，$A(1,4)$、$B(2,0)$、$C(3,5)$，求 $\\triangle ABC$ 的重心坐標。',
    answer: '(2,3)',
    hasImage: false,
  },
  {
    id: '17c15b9b4ac',
    chapter: '平面向量',
    question:
      '直角 $\\triangle ABC$，兩股長為 $\\overline{AB}=5$，$\\overline{AC}=12$，內切圓切 $\\overline{BC}$ 於 $P$，求 $\\overline{BP}$ 及內切圓半徑。',
    answer: '3；2',
    hasImage: false,
  },
  {
    id: '17c15baf95a',
    chapter: '平面向量',
    question:
      '$\\overline{AB}=6$，$\\angle C=120\\du$，$O$ 為 $\\triangle ABC$ 外心，求 $\\xvector{AO}\\cdot\\xvector{AB}$ 及外接圓半徑。',
    answer: '18；$2\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17c15bc3f33',
    chapter: '平面向量',
    question:
      '$H$ 為 $\\triangle ABC$ 之垂心，若 $\\xvector{AB}\\cdot\\xvector{AC}=-3$，求 $\\xvector{AH}\\cdot\\xvector{AB}$ 及 $\\xvector{AH}\\cdot\\xvector{AC}$。',
    answer: '-3；-3',
    hasImage: false,
  },
  {
    id: '17c15c2e8a0',
    chapter: '平面向量',
    question:
      '設 $\\vector a=(5,1)$，$\\vector b=(2,-1)$，求 $3\\vector a-2\\vector b$ 與 $2\\vector a+\\vector b$ 所張成之平行四邊形面積。',
    answer: '49',
    hasImage: false,
  },
  {
    id: '17c15c4ad5b',
    chapter: '平面向量',
    question:
      '已知 $a,b\\in\\mathbb Z$，行列式 $\\begin{vmatrix}5&a\\\\b&7\\end{vmatrix}=4$，求 $|a+b|$',
    answer: '32',
    hasImage: false,
  },
  {
    id: '17c15cfcb5e',
    chapter: '平面向量',
    question:
      '已知一張 B0 影印紙的面積是 $\\sqrt2$ 平方公尺，連續取半四次可得 B4 紙張，請問 B4 紙張的長與寬各為幾公分？(若需估算，取至小數點後第一位，$\\sqrt2\\approx1.414$)',
    answer: '35.4；25',
    hasImage: false,
  },
  {
    id: '17c15d2b440',
    chapter: '平面向量',
    question:
      '請問由 A4 原稿要放大印成 A3 的紙張輸出，應在影印機的縮放倍率按下多少 %？\n(整數以下四捨五入，$\\sqrt2\\approx1.414$)',
    answer: '141',
    hasImage: false,
  },
  {
    id: '17c15d940e4',
    chapter: '平面向量',
    question: '線段 $\\overline{AB}=10$，靠近 $A$ 的黃金分割點為 $P$，求 $\\overline{AP}$。',
    answer: '$15-5\\sqrt5$',
    hasImage: false,
  },
  {
    id: '17c15f9e1ba',
    chapter: '平面向量',
    question:
      '若 $\\begin{vmatrix}a_1&b_1\\\\a_2&b_2\\end{vmatrix}=2$，$\\begin{vmatrix}c_1&b_1\\\\c_2&b_2\\end{vmatrix}=8$，$\\begin{vmatrix}a_1&c_1\\\\a_2&c_2\\end{vmatrix}=-6$，求 $\\begin{cases}a_1x+b_1y=c_1\\\\a_2x+b_2y=c_2\\end{cases}$ 的解 $(x,y)$。',
    answer: '$(4,-3)$',
    hasImage: false,
  },
  {
    id: '17c15fb53d5',
    chapter: '平面向量',
    question: '若 $\\begin{cases}kx+y=5\\\\2x+(k+1)y=1\\end{cases}$ 恰有一解，求 $k$ 的範圍。',
    answer: '$k\\ne1$ 與 -2',
    hasImage: false,
  },
  {
    id: '17c15ffe58e',
    chapter: '平面向量',
    question:
      '平面向量 $\\vector a$、$\\vector b$、$\\vector c$ 滿足 $\\vector a+\\vector b=(1,6)$，$\\vector b+\\vector c=(4,7)$，$\\vector c+\\vector a=(-3,11)$，則下列哪些選項的推論正確？\n(1) $\\vector a$、$\\vector b$、$\\vector c$ 以 $\\vector a$ 的長度為最大\n(2) $\\vector a$、$\\vector b$、$\\vector c$ 以 $\\vector b$ 的長度為最小\n(3) $\\vector a$、$\\vector b$、$\\vector c$ 兩兩互不平行\n(4) 可找到三點 $P$、$Q$、$R$，使 $\\overrightarrow{PQ}=\\vector a$、$\\overrightarrow{QR}=\\vector b$、$\\overrightarrow{RP}=\\vector c$\n(5) 可找到三點 $P$、$Q$、$R$，使 $\\overline{PQ}=|\\vector a|$、$\\overline{QR}=|\\vector b|$、$\\overline{RP}=|\\vector c|$',
    answer: '(2)(3)(5)',
    hasImage: false,
  },
  {
    id: '17c1601e11b',
    chapter: '平面向量',
    question:
      '設 $\\vector a=(3,2t+1)$，$\\vector b=(t,t-2)$，$\\vector c=(1,2)$，若 $(\\vector a+\\vector b)\\parallel\\vector c$，求 $t$。',
    answer: '7',
    hasImage: false,
  },
  {
    id: '17c1603d189',
    chapter: '平面向量',
    question:
      '如圖所示的正六角星是以 $O$ 為中心，其中 $\\vector{x}$、$\\vector{y}$ 為 $O$ 到兩個頂點的向量。若將 $O$ 到正六角星 $12$ 個頂點的向量都寫成 $a\\vector{x}+b\\vector{y}$ 的形式，求 $a+b$ 的最大值。',
    answer: '5',
    hasImage: true,
  },
  {
    id: '17c16051046',
    chapter: '平面向量',
    question:
      '兩個同大小的正六邊形併接如圖，圖中有 $\\vector a$、$\\vector b$、$\\xvector{PQ}$ 三個向量，若 $\\xvector{PQ}=x\\vector a+y\\vector b$，求數對 $(x,y)$。',
    answer: '(4,1)',
    hasImage: true,
  },
  {
    id: '17c16327d59',
    chapter: '平面向量',
    question:
      '在平面上有一 $\\triangle ABC$，$P$ 在 $\\overline{BC}$ 上，且 $\\overline{BP}:\\overline{PC}=3:2$，$Q$ 在 $\\overline{AB}$ 上，且 $\\overline{AQ}:\\overline{QB}=1:1$，$R$ 在 $\\overline{AC}$ 上，且 $\\overline{AR}:\\overline{RC}=2:1$。已知 $\\xvector{PQ}=(-1,1)$，$\\xvector{PR}=(4,10)$，求 $\\xvector{PA}$ 及 $\\xvector{BC}$。',
    answer: '(4,14)；(10,20)',
    hasImage: false,
  },
  {
    id: '17c163df257',
    chapter: '平面向量',
    question:
      '如圖，已知圓 $O$ 與直線 $BC$、直線 $AC$、直線 $AB$ 均相切，且分別相切於 $D$、$E$、$F$。又 $\\overline{BC}=4$、$\\overline{AC}=5$、$\\overline{AB}=6$，假設 $\\overline{BF}=x$，求 $x$。',
    answer: '$\\frac32$',
    hasImage: true,
  },
  {
    id: '17c1642f855',
    chapter: '平面向量',
    question:
      '如圖，$P$ 為 $\\triangle ABC$ 內部一點且 $\\xvector{AP}=\\dfrac15\\xvector{AB}+\\dfrac25\\xvector{AC}$，$\\overleftrightarrow{AP}$ 與 $\\overline{BC}$ 交於 $D$，試問下列選項哪些正確？\n(1) $\\overline{BD}:\\overline{CD}=2:1$\n(2) $\\overline{AP}:\\overline{PD}=3:2$\n(3) $\\overline{AB}:\\overline{AC}=2:1$\n(4) $\\triangle ABP$ 面積$:\\triangle ACP$ 面積$=2:1$\n(5) $\\triangle BPC$ 面積$:\\triangle ABC$ 面積$=3:5$',
    answer: '(1)(2)(4)',
    hasImage: true,
  },
  {
    id: '17c1644e24c',
    chapter: '平面向量',
    question:
      '如圖，$\\triangle ABC$ 中，$\\xvector{AN}=\\frac13\\xvector{NC}$，$P$ 在 $\\overline{BN}$ 上，若 $\\xvector{AP}=m\\xvector{AB}+\\frac29\\xvector{AC}$，求 $m$。',
    answer: '$\\frac19$',
    hasImage: true,
  },
  {
    id: '17c16598874',
    chapter: '平面向量',
    question:
      '在坐標平面上，有一通過原點 $O$ 的直線 $L$，以及一半徑為 2、圓心為原點 $O$ 的圓 $C$。$P$、$Q$ 為 $C$ 上相異 2 點，且 $\\overline{OP}$、$\\overline{OQ}$ 分別為 $L$ 所夾的銳角皆為 $30\\du$，試選出內積 $\\xvector{OP}\\cdot\\xvector{OQ}$ 之值可能發生的選項。\n(1) $2\\sqrt3$ (2) $-2\\sqrt3$ (3) 0 (4) -2 (5) -4',
    answer: '(4)(5)',
    hasImage: false,
  },
  {
    id: '17c165ba13d',
    chapter: '平面向量',
    question:
      '設點 $A(-2,2)$、$B(4,8)$ 為坐標平面上兩點，且點 $C$ 在二次函數 $y=\\dfrac12x^2$ 的圖形上變動。求內積 $\\xvector{AB}\\cdot\\xvector{AC}$ 的最小值及此時 $C$ 點的 $x$ 坐標。',
    answer: '-3；-1',
    hasImage: false,
  },
  {
    id: '17c165d5250',
    chapter: '平面向量',
    question:
      '$\\triangle ABC$ 內接於圓心為 $O$ 之單位圓。若 $\\xvector{OA}+\\xvector{OB}+\\sqrt3\\xvector{OC}=\\vector 0$，求 $\\angle BAC$。',
    answer: '$75\\du$',
    hasImage: false,
  },
  {
    id: '17c165fdd52',
    chapter: '平面向量',
    question:
      '有三個向量 $\\vector a$、$\\vector b$、$\\vector c$，已知 $|\\vector a|=8$，$|\\vector b|=3$，且 $\\vector a+\\vector b+\\vector c=(2,5)$，$2\\vector a-\\vector b+\\vector c=(7,-4)$，求 $\\vector a$ 與 $\\vector b$ 的夾角餘弦值。',
    answer: '$-\\frac1{16}$',
    hasImage: false,
  },
  {
    id: '17c16623835',
    chapter: '平面向量',
    question:
      '若 $|\\xvector{AB}|=5$，$|\\xvector{AC}|=6$，$|\\xvector{AD}|=3$，且 $\\xvector{AB}+2\\xvector{AC}=3\\xvector{AD}$，若 $\\xvector{AC}$ 在 $\\xvector{AB}$ 上的正射影為 $k\\xvector{AB}$，求 $k$。',
    answer: '$\\frac{-22}{25}$',
    hasImage: false,
  },
  {
    id: '17c1664a847',
    chapter: '平面向量',
    question:
      '平面向量 $\\vector a$ 與 $\\vector b$，已知 $\\vector a$ 在 $\\vector b$ 上的正射影為 $-\\dfrac14\\vector b$，且 $\\vector b$ 在 $\\vector a$ 上的正射影為 $-3\\vector a$，求 $\\vector a$ 與 $\\vector b$ 的夾角及 $|\\vector a|:|\\vector b|$。',
    answer: '$150\\du$；$1:2\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17c166e949a',
    chapter: '平面向量',
    question:
      '設 $x,y>0$，且 $2x+3y=14$，求 $\\dfrac8x+\\dfrac3y$ 的最小值，及此時的數對 $(x,y)$。',
    answer: '$\\frac72$；(4,2)',
    hasImage: false,
  },
  {
    id: '17c16703fde',
    chapter: '平面向量',
    question:
      '平面上有兩平行直線 $L_1:ax+by=5$ 與 $L_2:ax+by=20$，已知 $L_1$ 通過點 (2,3)，求 $L_1$ 與 $L_2$ 之間的最大距離。',
    answer: '$3\\sqrt{13}$',
    hasImage: false,
  },
  {
    id: '17c168fdd8f',
    chapter: '平面向量',
    question:
      '坐標平面上有一質點沿方向 $\\vector u=(1,2)$ 前進。現欲在此平面上置一直線 $L$，使得此質點碰到 $L$ 時依光學原理 (入射角等於反射角) 反射，之後沿方向 $\\vector v=(-2,1)$ 前進，則直線 $L$ 的方向向量應為 $\\vector w=(1,k)$，求 $k$。',
    answer: '-3',
    hasImage: false,
  },
  {
    id: '17c1692196d',
    chapter: '平面向量',
    question:
      '平面上直線 $L:\\begin{cases}x=3-5t\\\\y=11+2t\\end{cases},t\\in\\mathbb R$，$L$ 上有兩點 $A(-2,13)$ 與 $B(18,5)$。若 $B$ 為 $\\overline{AC}$ 中點，則參數 $t$ 代入多少時可得到 $C$？',
    answer: '-7',
    hasImage: false,
  },
  {
    id: '17c16956025',
    chapter: '平面向量',
    question:
      '平面上有一 $\\triangle ABC$，$G$ 為 $\\triangle ABC$ 的重心。$O$、$D$ 為此平面上的相異二點，且滿足 $\\xvector{OD}=\\xvector{OA}+\\xvector{OB}+\\xvector{OC}$。下列何者正確。\n(1) $O$、$G$、$D$ 三點共線\n(2) $\\overline{OD}=2\\overline{OG}$\n(3) $\\xvector{AD}+\\xvector{BD}+\\xvector{CD}=2\\xvector{OD}$\n(4) $G$ 位於 $\\triangle ABC$ 的內部\n(5) $D$ 位於 $\\triangle ABC$ 的外部',
    answer: '(1)(3)(4)',
    hasImage: false,
  },
  {
    id: '17c1697ac04',
    chapter: '平面向量',
    question:
      '如圖，$\\triangle ABC$ 中，$G$ 為重心，$\\overline{GA}=3$，$\\overline{GB}=5$，$\\overline{GC}=7$，求 $\\xvector{GA}\\cdot\\xvector{GB}$ 及 $\\triangle ABC$ 之面積。',
    answer: '$\\frac{15}2$；$\\frac{45\\sqrt3}4$',
    hasImage: true,
  },
  {
    id: '17c169a0537',
    chapter: '平面向量',
    question:
      '若 $a,b,c,d\\in\\mathbb R$ 使得聯立方程組 $\\begin{cases}ax+8y=c\\\\x-4y=3\\end{cases}$ 有解，且聯立方程組 $\\begin{cases}-3x+by=d\\\\x-4y=3\\end{cases}$ 無解，則下列哪些選項一定正確？\n(1) $a\\ne2$ (2) $c=-6$ (3) $b=12$ (4) $d\\ne9$\n(5) 聯立方程組 $\\begin{cases}ax+8y=c\\\\-3x+by=d\\end{cases}$ 無解',
    answer: '(3)(4)',
    hasImage: false,
  },
  {
    id: '17c169b6665',
    chapter: '平面向量',
    question:
      '設實數 $a>0$。若 $x$、$y$ 的方程組 $\\begin{cases}2x-y=1\\\\x-2y=a\\\\x-ay=122\\end{cases}$ 有解，求 $a$。',
    answer: '14',
    hasImage: false,
  },
  {
    id: '17c169d647d',
    chapter: '平面向量',
    question:
      '坐標平面上有一面積為 40 的凸四邊形，其四個頂點的坐標按逆時針方向依序為 (0,0)、(4,2)、$(x,2x)$、(2,6)，求 $x$。',
    answer: '10',
    hasImage: false,
  },
  {
    id: '17c169f6102',
    chapter: '平面向量',
    question:
      '坐標平面上 $O$ 為原點，設 $\\vector u=(1,2)$、$\\vector v=(3,4)$。令 $\\Omega$ 為滿足 $\\xvector{OP}=x\\vector u+y\\vector v$ 的所有點 $P$ 所形成的區域，其中 $\\dfrac12\\le x\\le1$，$-3\\le y\\le\\dfrac12$，求 $\\Omega$ 的面積。',
    answer: '$\\frac72$',
    hasImage: false,
  },
  {
    id: '17992b9b195',
    chapter: '平面向量',
    question:
      '設 $\\triangle ABC$ 之 $\\angle A=60\\du$，$\\overline{AC}=b$，$\\overline{AB}=c$，今在 $\\overline{BC}$ 上取一點 $D$，使得 $\\overline{BD}=\\frac{1}{3}\\overline{BC}$，$s=\\overline{AD}$，則 $s^2=$？',
    answer: '$\\frac19(b^2+4c^2+2bc)$',
    hasImage: false,
  },
  {
    id: '1798cf58181',
    chapter: '平面向量',
    question:
      '設 $\\left|\\vector a\\right|=2$，$\\left|\\vector b\\right|=3$，$\\left|\\vector a+\\vector b\\right|=2$，試求向量 $\\vector a$，$\\vector b$ 所展的平行四邊形面積。',
    answer: '$\\frac{3\\sqrt7}2$',
    hasImage: false,
  },
  {
    id: '1798cf7faea',
    chapter: '平面向量',
    question:
      '設 $A$，$B$，$C$ 為相異三點，若 $\\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}=\\vector{0}$，則$\\overrightarrow{GA}=2$，$\\overrightarrow{GB}=6$，$\\overrightarrow{GC}=2\\sqrt{7}$，求 $\\overline{AB}$ 和 $\\triangle ABC$ 面積之值。',
    answer: '$2\\sqrt{13}$；$9\\sqrt3$',
    hasImage: false,
  },
  {
    id: '1798cf9fd23',
    chapter: '平面向量',
    question:
      '若有 $\\theta$ 使下述方程組不只有一組解，求 $\\sin\\theta\\cos\\theta$ 的值。\n$\\begin{cases}(1+\\cos\\theta)x-y=0\\\\-x+(1+\\sin\\theta)y=0\\end{cases}$',
    answer: '$1-\\sqrt2$',
    hasImage: false,
  },
  {
    id: '1798d160dda',
    chapter: '平面向量',
    question:
      '若 $\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}=2$，試求 $\\begin{vmatrix}3a+2c&3b+2d\\\\2a-3c&2b-3d\\end{vmatrix}$ 之值。',
    answer: '$-26$',
    hasImage: false,
  },
  {
    id: '1798d181ea7',
    chapter: '平面向量',
    question:
      '坐標平面上有一個平行四邊形 $ABCD$，其中點 $A$ 的坐標為 $(2,1)$，點 $B$ 的坐標為 $(8,2)$，點 $C$ 在第一象限且知其 $x$ 坐標為 $12$。若平行四邊形 $ABCD$ 的面積等於 $38$ 平方單位，則點 $D$ 的坐標為？',
    answer: '$(6,8)$',
    hasImage: false,
  },
  {
    id: '1798d197fca',
    chapter: '平面向量',
    question:
      '坐標平面上有一面積為 $40$ 的凸四邊形，其四個頂點的坐標按逆時針方向依序為 $(0,0)$、$(4,2)$、$(x,2x)$ 及 $(2,6)$，則 $x=$？',
    answer: '$10$',
    hasImage: false,
  },
  {
    id: '1798d26f518',
    chapter: '平面向量',
    question:
      '利用克拉瑪公式，解二元一次聯立方程式：\n(1) $\\begin{cases}2x+5y=4\\\\x-y=9\\end{cases}$\n(2) $\\begin{cases}99x+100y=101\\\\101x+102y=103\\end{cases}$',
    answer: '(1) $(7,-2)$ (2) $(-1,2)$',
    hasImage: false,
  },
  {
    id: '1798d296bf7',
    chapter: '平面向量',
    question:
      '(1) 試將 $\\vector c=\\begin{bmatrix}5\\\\8\\end{bmatrix}$ 分解成 $\\vector a=\\begin{bmatrix}4\\\\1\\end{bmatrix}$，$\\vector b=\\begin{bmatrix}-1\\\\2\\end{bmatrix}$ 的線性組合。\n(2) 利用第(1)題的結果，解聯立方程式 $\\begin{cases}4x-y=5\\\\x+2y=8\\end{cases}$',
    answer: '(1) $\\vector c=2\\vector a+3\\vector b$ (2) $(x,y)=(2,3)$',
    hasImage: false,
  },
  {
    id: '1798d2fb555',
    chapter: '平面向量',
    question:
      '設 $L_1:2x-y+1=0$，試求過點 $(2,3)$ 且與 $L_1$ 的一夾角為 $\\frac{\\pi}{4}$ 的直線 $L_2$ 方程式。',
    answer: '$3x+y-9=0\\lor x-3y+7=0$',
    hasImage: false,
  },
  {
    id: '1798d30c13e',
    chapter: '平面向量',
    question: '設兩直線 $L_1:2x+y=0$，$L_2:x+2y=0$，試求 $L_1$，$L_2$ 的交角中鈍角平分線方程式。',
    answer: '$x-y=0$',
    hasImage: false,
  },
  {
    id: '1798d3385c0',
    chapter: '平面向量',
    question:
      '$G$ 為 $\\triangle ABC$ 重心，若 $\\left|\\overrightarrow{GA}\\right|=3$，$\\left|\\overrightarrow{GB}\\right|=5$，$\\left|\\overrightarrow{GC}\\right|=7$，則求：\n(1) $\\overrightarrow{GA}\\cdot\\overrightarrow{GB}$\n(2) $\\triangle ABC$ 的面積',
    answer: '(1) $\\frac{15}2$ (2) $\\frac{45\\sqrt3}4$',
    hasImage: false,
  },
  {
    id: '1798d3def42',
    chapter: '平面向量',
    question:
      '設 $x$，$y$ 為正數，且 $3x+2y=21$，求 $\\frac{3}{x}+\\frac{8}{y}$ 的最小值，及此時的數對 $(x,y)$。',
    answer: '$\\frac37$；$(3,6)$',
    hasImage: false,
  },
];

// 空間概念
const spaceConcept: Question[] = [
  {
    id: '184d37987ec',
    chapter: '空間概念',
    question:
      '空間中有一四面體 $ABCD$ 如圖。已知 $\\overline{AB}=\\overline{AC}=\\overline{BD}=\\overline{CD}=3$ 且 $\\overline{AD}=\\overline{BC}=2$，$\\triangle ABC$ 及 $\\triangle BCD$ 的兩面角為 $\\theta$，則 $\\cos\\theta=\\dfrac{\\textcirc{7-1}}{\\textcirc{7-2}}$。(化為最簡分數)',
    answer: '34',
    hasImage: true,
  },
  {
    id: '17f71d6b4b8',
    chapter: '空間概念',
    question:
      '已知空間中相異三點 $A(0,1,4)$、$B(-1,2,0)$、$P(x,y,z)$，求 $\\overline{PA}^2+\\overline{PB}^2$ 的最小值，及此時 $P$ 點坐標。',
    answer: '$9$；$(-\\frac12,\\frac32,2)$',
    hasImage: false,
  },
  {
    id: '17f8cdd8e1e',
    chapter: '空間概念',
    question:
      '將邊長為 $2$ 的正方形 $ABCD$ 沿對角線 $\\overline{AC}$ 折成一個夾角 $\\theta$ 的二面角，若 $B$、$D$ 相距 $1$ 單位長，求 $\\sin\\theta$。',
    answer: '$\\frac{\\sqrt7}4$',
    hasImage: false,
  },
  {
    id: '17f8cdfe430',
    chapter: '空間概念',
    question:
      '平面 $E$、$F$ 交於 $\\overleftrightarrow{AB}$，夾角為 $30\\du$，$\\triangle ABC$ 在平面 $E$ 上，$\\overline{AB}=13$，$\\overline{BC}=12$，$\\overline{CA}=5$，$C$ 在平面 $F$ 上的投影為 $D$，求 $\\overline{CD}$ 及 $\\triangle ABD$ 面積。',
    answer: '$\\frac{30}{13}$；$15\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17f8ce272f7',
    chapter: '空間概念',
    question:
      '一圓錐體由扇形捲成，此扇形的半徑為 $6$，中心角為 $120\\du$，試問：\n(1) 圓錐體積\n(2) $A$ 為底圓周上一點，由 $A$ 出發，繞錐體一圈後回到 $A$ 點，此路徑的最短距離',
    answer: '(1) $\\frac{16\\sqrt2}3\\pi$ (2) $6\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17f8ce44a86',
    chapter: '空間概念',
    question:
      '正四角錐 $O-ABCD$ 的底面是正方形 $ABCD$，如圖。若 $\\overline{AB}=2$，高 $\\overline{OH}=1$，求：\n(1) 底面 $ABCD$ 與側面的夾角\n(2) 相鄰二斜面所夾的二面角',
    answer: '(1) $45\\du$ (2) $120\\du$',
    hasImage: true,
  },
  {
    id: '17f8ce54f05',
    chapter: '空間概念',
    question:
      '設 $\\overline{PQ}=10$，若 $\\overline{PQ}$ 在 $x$ 軸的投影長為 $3$，在 $y$ 軸的投影長為 $8$，求在 $z$ 軸的投影長。',
    answer: '$3\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17f8ce6c591',
    chapter: '空間概念',
    question:
      '設 $P$ 點在第一卦限，與 $x$ 軸、$y$ 軸的距離分別為 $10$ 與 $5$，且與 $xy$ 平面的距離為 $2$，求 $P$。',
    answer: '$(\\sqrt{21},4\\sqrt6,2)$',
    hasImage: false,
  },
  {
    id: '17f8ce7dbab',
    chapter: '空間概念',
    question:
      '空間中 $A(3,-1,5)$、$B(8,9,-2)$，$P$ 在 $\\overleftrightarrow{AB}$ 上，若 $\\overline{AP}:\\overline{PB}=3:2$，求 $P$。',
    answer: '$(6,5,\\frac45)\\lor(18,29,-16)$',
    hasImage: false,
  },
  {
    id: '17f8ce90794',
    chapter: '空間概念',
    question:
      '設空間坐標中有兩點 $A(1,2,5)$、$B(3,-1,4)$，另一點 $P$ 滿足 $\\overline{PA}=\\overline{PB}$，若：\n(1) $P$ 在 $x$ 軸上，求 $P$\n(2) $P$ 在 $y$ 軸上，求 $P$',
    answer: '(1) $(-1,0,0)$ (2) $(0,\\frac23,0)$',
    hasImage: false,
  },
  {
    id: '17f8cea4c68',
    chapter: '空間概念',
    question:
      '已知三向量 $\\vector a=(2,1,-3)$，$\\vector b=(1,4,5)$，$\\vector c=(2,6,k)$，若 $\\vector a+t\\vector b$ 與 $\\vector c$ 平行，求 $t$、$k$。',
    answer: '$5$；$\\frac{44}7$',
    hasImage: false,
  },
  {
    id: '17f8ceba7cb',
    chapter: '空間概念',
    question:
      '空間中，點 $A(1,3,2)$、$B(3,5,1)$、$C(1,0,6)$，$\\angle BAC$ 的內角平分線交 $\\overline{BC}$ 於 $P$，$\\xvector{AP}=x\\xvector{AB}+y\\xvector{AC}$，求 $x$、$y$。',
    answer: '$\\frac58$；$\\frac38$',
    hasImage: false,
  },
  {
    id: '17fc1c53f7a',
    chapter: '空間概念',
    question:
      '空間中，試選出正確的選項。\n(1) 垂直同一平面之相異兩直線必平行\n(2) 平行同一平面之相異兩直線必平行\n(3) 垂直同一直線之相異兩直線必平行\n(4) 平行同一直線之相異兩直線必平行\n(5) 平面 $E_1$ 平行平面 $E$，平面 $E_2$ 垂直平面 $E$，則平面 $E_1$ 垂直平面 $E_2$',
    answer: '(1)(4)(5)',
    hasImage: false,
  },
  {
    id: '17fc1ce2d66',
    chapter: '空間概念',
    question:
      '已知空間中 A(1,2,3)、B(4,3,4)、C(5,4,6)、D 為平行四邊形的頂點，試選出所有可能為 D 點坐標之選項。\n(1) (8,5,7) (2) (1,3,5) (3) (4,3,2) (4) (0,1,1) (5) (4,1,-2)',
    answer: '(1)(4)',
    hasImage: false,
  },
  {
    id: '17fc1d1aad8',
    chapter: '空間概念',
    question:
      '有一個底為正方形的四角錐，每一稜長都是 10，設 ABCD 為其底，O 為其錐頂，如圖，選出正確的選項。\n(1) O 點到 $\\overline{AB}$ 的距離為 5\n(2) A 點到 $\\overline{BO}$ 的距離為 $5\\sqrt3$\n(3) O 點到平面 ABCD 的距離為 $5\\sqrt2$\n(4) 平面 OBC 與平面 ABCD 的夾角為 $\\theta$，則 $\\sin\\theta=\\frac{\\sqrt3}3$\n(5) 兩側面之夾角為 $\\alpha$，則 $\\cos\\alpha=\\frac23$',
    answer: '(2)(3)(5)',
    hasImage: true,
  },
  {
    id: '17fc1d58d7e',
    chapter: '空間概念',
    question:
      '如圖，空間中，自 A 點作平面 E 的垂線，交平面於 B 點，一直線 L 在平面 E 上，自 B 點作 $\\overline{BC}\\perp L$，交 L 於 C 點，若 D 為 L 上另一點，且 $\\overline{AB}=7$，$\\overline{BC}=5$，$\\overline{AD}=11$，求 $\\overline{CD}$。',
    answer: '$\\sqrt{47}$',
    hasImage: true,
  },
  {
    id: '17fc1d71e3c',
    chapter: '空間概念',
    question:
      '設 P(6,3,-3)，且 P 在 $xy$ 平面、$yz$ 平面、$zx$ 平面上之投影點分別為 A、B、C 三點，求 $\\triangle ABC$ 之重心坐標。',
    answer: '$(4,2,-2)$',
    hasImage: false,
  },
  {
    id: '17fc1d876c4',
    chapter: '空間概念',
    question:
      '設球面 S 的球心為 O(0,0,0)，若已知球面上兩點 $A(-4,0,0)$、$B(-2,3,-\\sqrt3)$，球 A、B 兩點的球面距離。',
    answer: '$\\frac43\\pi$',
    hasImage: false,
  },
  {
    id: '17fc1db10b5',
    chapter: '空間概念',
    question:
      '如圖，有一長方體的長寬高分別為 $\\overline{AE}=6$，$\\overline{AB}=8$，$\\overline{AD}=6$，K 點位在 $\\overline{AD}$ 上且 $\\overline{DK}:\\overline{KA}=2:1$，J 點位於 $\\overline{EF}$ 的中點，求 $\\overline{KJ}$。',
    answer: '$\\sqrt{56}$',
    hasImage: true,
  },
  {
    id: '17fc1dce4a8',
    chapter: '空間概念',
    question:
      '設正四面體稜長為 12，M 是 $\\overline{AB}$ 的中點，N 在 $\\overline{CD}$ 上，使得 $\\overline{CN}:\\overline{DN}=2:1$，求 $\\overline{MN}$。',
    answer: '$2\\sqrt{19}$',
    hasImage: true,
  },
  {
    id: '17f0dc48998',
    chapter: '空間概念',
    question:
      '將地球儀設定成一個坐標空間，其中球心為原點 $O$，地球儀上 $A$、$B$ 兩個海島的坐標分別為 $A(0,0,4)$、$B(1,\\sqrt{11},2)$，求在實際地球上，輪船從 $A$ 海島到 $B$ 海島的最短航線長大約多少公里？(可按計算機，地球半徑約 $6400$ 公里，四捨五入到整數位)',
    answer: '$6702$',
    hasImage: false,
  },
  {
    id: '17f0dca28bd',
    chapter: '空間概念',
    question:
      '有一燈泡掛在離地面 $3$ 公尺的垂直牆面，此燈泡與牆面成 $60\\du$，如圖。當通電後，光源照在地面形成光影。假設整個光影均在地面上，則此光影的邊界為下列哪一種圓錐曲線？\n(1) 直線 (2) 圓 (3) 拋物線 (4) 橢圓 (5) 雙曲線',
    answer: '(4)',
    hasImage: true,
  },
  {
    id: '17f0dd0e239',
    chapter: '空間概念',
    question: '四面體 $ABCD$ 的六條稜邊所在的直線中，共有幾組歪斜線？',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '17f0dd2ad5f',
    chapter: '空間概念',
    question:
      '圖為一正立方體，下列哪些直線與平面 $BCGF$ 垂直？\n(1) 直線 $EH$ (2) 直線 $EF$ (3) 直線 $EB$ (4) 直線 $EG$ (5) 直線 $EA$',
    answer: '(2)',
    hasImage: true,
  },
  {
    id: '17f0dd4619a',
    chapter: '空間概念',
    question:
      '圖為一正立方體，$A$、$B$、$C$ 分別為所在的邊之中點，通過 $A$、$B$、$C$ 三點的平面與此立方體相截，試問下列何者為其截痕的形狀？\n(1) 直角三角形 (2) 非直角的三角形 (3) 六邊形 (4) 正方形 (5) 非正方形的長方形',
    answer: '(5)',
    hasImage: true,
  },
  {
    id: '17f0dd61a80',
    chapter: '空間概念',
    question:
      '設直線 $AB$ 垂直平面 $E$ 於 $B$ 點，且 $L$ 是平面 $E$ 上一條直線，$D$ 是 $L$ 上一點，如圖，若直線 $BC$ 垂直 $L$ 於 $C$，且 $\\overline{AB}=2$，$\\overline{BC}=1$，$\\overline{CD}=2$，求 $\\overline{AD}$。',
    answer: '$3$',
    hasImage: true,
  },
  {
    id: '17f0dd7aed2',
    chapter: '空間概念',
    question:
      '如圖，已知空間中一直線 $L$ 通過 $A$、$B$ 兩點，$O$ 為 $L$ 外一點，取 $\\overline{OC}$ 垂直平面 $OAB$ 於 $O$ 點，若 $\\overline{OA}=\\overline{OB}=10$，$\\overline{AB}=12$，且 $C$ 點到直線 $L$ 的最短距離為 $12$，求 $\\overline{OC}$。',
    answer: '$4\\sqrt5$',
    hasImage: true,
  },
  {
    id: '17f0dd92e38',
    chapter: '空間概念',
    question:
      '設 $P$ 點位於第一卦限，且與三坐標平面等距離，若 $P$ 點到 $z$ 軸的距離是 $2$，求 $P$ 點到原點之距離。',
    answer: '$\\sqrt6$',
    hasImage: false,
  },
  {
    id: '17f0dda40d4',
    chapter: '空間概念',
    question:
      '由點 $P(-8,18,-15)$ 沿著向量 $\\vector v=(3,-4,5)$ 的方向平移 $20\\sqrt2$ 單位到達點 $Q$，求 $Q$。',
    answer: '$(4,2,5)$',
    hasImage: false,
  },
  {
    id: '17f0ddc43f4',
    chapter: '空間概念',
    question:
      '已知一正四面體，其中三頂點坐標分別為 $O(0,0,0)$、$A(2,0,0)$ 及 $B(1,1,\\sqrt2)$，求另一頂點 $C$ 的坐標。(兩解)',
    answer: '$(1,-1,\\sqrt2)\\lor(1,\\frac53,-\\frac{\\sqrt2}3)$',
    hasImage: false,
  },
  {
    id: '17f0dddb2cc',
    chapter: '空間概念',
    question:
      '令 $A(-1,6,0)$，$B(3,-1,-2)$，$C(4,4,5)$ 為空間坐標系中三點，若 $D$ 點滿足 $3\\xvector{DA}-4\\xvector{DB}+2\\xvector{DC}=\\vector0$，求 $D$。',
    answer: '$(-7,30,18)$',
    hasImage: false,
  },
  {
    id: '17f0ddef48e',
    chapter: '空間概念',
    question:
      '$\\triangle ABC$ 中，$A(6,3,4)$、$B(3,1,-2)$、$C(4,1,3)$，若 $\\angle A$ 的角平分線交直線 $BC$ 於 $D$，求 $D$。',
    answer: '$(\\frac{37}{10},1,\\frac32)$',
    hasImage: false,
  },
  {
    id: '17f2ea3a636',
    chapter: '空間概念',
    question:
      '在 $\\triangle ABC$ 中，已知 $\\overline{AB}=\\overline{AC}=13$，$\\overline{BC}=10$，$G$ 為其重心，將 $G$ 點沿垂直於平面 $ABC$ 的方向拉升至 $P$ 點使 $\\overline{GP}=3$，求 $\\overline{PC}$。',
    answer: '$5\\sqrt2$',
    hasImage: true,
  },
  {
    id: '17f2ea5bc79',
    chapter: '空間概念',
    question:
      '設四面體 $ABCD$ 中，$\\overline{AC}=\\overline{AD}=5$，$\\overline{BC}=\\overline{BD}=5$，$\\overline{AB}=4$，$\\overline{CD}=6$，且 $M$ 為 $\\overline{CD}$ 中點，令平面 $ACD$ 與平面 $BCD$ 所定的兩面角為 $\\theta$，求 $\\theta$。',
    answer: '$\\frac{\\pi}3$',
    hasImage: true,
  },
  {
    id: '17f2ecb23ad',
    chapter: '空間概念',
    question:
      '如圖，有一張正三角形紙 $ABC$，設 $D$、$E$ 為 $\\overline{BC}$ 的三等分點，今沿著摺線 $\\overline{AD}$、$\\overline{AE}$ 摺起，使得 $B$、$C$ 兩點重合，令此重合點為 $P$ 點。設平面 $APD$ 與平面 $APE$ 所夾的銳夾角為 $\\theta$，試求 $\\cos\\theta$。',
    answer: '$\\frac13$',
    hasImage: true,
  },
  {
    id: '17f2ecd1c45',
    chapter: '空間概念',
    question:
      '二平面 $E$、$F$ 的交角為 $45\\du$，$L$ 為 $E$ 與 $F$ 的公共稜，如圖，$\\overline{AB}$ 在 $E$ 上，且與 $L$ 夾角為 $30\\du$，$\\overline{AB}$ 的正射影為 $\\overline{BC}$，若 $\\overline{AB}$ 與 $\\overline{BC}$ 的銳夾角為 $\\theta$，求 $\\cos\\theta$。',
    answer: '$\\frac{\\sqrt{14}}4$',
    hasImage: true,
  },
  {
    id: '17f2ed0b1e3',
    chapter: '空間概念',
    question: '一正立方體的八個頂點中，有四個頂點彼此之間的距離都是 $1$，求此正立方體的體積。',
    answer: '$\\frac{\\sqrt2}4$',
    hasImage: false,
  },
  {
    id: '17f2ed3ac33',
    chapter: '空間概念',
    question:
      '如圖，$ABCD$ 為四面體，已知 $\\overline{AD}$ 垂直於 $BCD$，$\\overline{BC}\\perp\\overline{CD}$，$\\overline{AD}=9$，$\\overline{CD}=12$，$\\overline{BC}=20$，則：\n(1) 求 $\\overline{AB}$\n(2) 若平面 $ABD$ 與 $ACD$ 的兩面角為 $\\theta$，求 $\\tan\\theta$。',
    answer: '(1) $25$ (2) $\\frac53$',
    hasImage: true,
  },
  {
    id: '17f2ed4b9c7',
    chapter: '空間概念',
    question:
      '設 $(0,\\sqrt2,2)$，$(0,\\sqrt2,-2)$，$(0,-\\sqrt2,2)$，$(0,-\\sqrt2,-2)$ 為一正立方體的四個頂點，求此正立方體的表面積。',
    answer: '$48$',
    hasImage: false,
  },
  {
    id: '17f2ed6d09b',
    chapter: '空間概念',
    question:
      '正立方體如圖，$P$ 為 $\\overline{BF}$ 中點，$Q$ 為 $\\overline{AD}$ 中點，可將 $\\xvector{PQ}$ 用 $\\xvector{AF}$、$\\xvector{AH}$、$\\xvector{AG}$ 的線性組合表示為 $\\xvector{PQ}=x\\xvector{AF}+y\\xvector{AH}+z\\xvector{AG}$，試求 $x+y+z$。',
    answer: '$-\\frac12$',
    hasImage: true,
  },
  {
    id: '17f2ed81b7c',
    chapter: '空間概念',
    question:
      '有一邊長為 $3$ 的立方體如圖，今置頂點 $A$ 於空間坐標系中之原點 $(0,0,0)$，置頂點 $B$ 於正 $z$ 軸上，試問頂點 $C$ 之 $z$ 坐標。',
    answer: '$\\sqrt3$',
    hasImage: true,
  },
  {
    id: '17f2eed8420',
    chapter: '空間概念',
    question:
      '設點 $P(1,-2,3)$ 為空間中一點，$O$ 為原點，則下列敘述何者正確？\n(1) $P$ 點在 $y$ 軸上的投影點為 $(0,-2,0)$\n(2) $P$ 點到 $z$ 軸上的距離為 $3$\n(3) $P$ 點到對於 $xz$ 平面的對稱點為 $(-1,2,-3)$\n(4) $\\overline{OP}$ 的長為 $\\sqrt{14}$\n(5) $\\overline{OP}$ 在 $xy$ 平面上的投影長為 $\\sqrt5$',
    answer: '(1)(4)(5)',
    hasImage: false,
  },
  {
    id: '17f2eeff6d6',
    chapter: '空間概念',
    question:
      '在空間坐標中，設 $xz$ 平面為一個鏡面，有一道光線經過點 $P(-1,2,2)$，射向 $xz$ 平面上的一點 $A(-3,0,a)$，經鏡面反射後的光線通過點 $Q(-4,b,11)$，求：\n(1) $P$ 點對 $xz$ 平面的對稱點\n(2) 數對 $(a,b)$`',
    answer: '(1) $(-1,-2,2)$ (2) $(8,1)$',
    hasImage: false,
  },
  {
    id: '17f2ef14942',
    chapter: '空間概念',
    question:
      '已知 $\\xvector{OA}=(2,-1,2)$，$\\xvector{OB}=(4,-3,0)$，$\\xvector{OC}=(a,b,5)$，若 $\\xvector{OC}$ 平分 $\\angle AOB$，求 $a+b$。',
    answer: '$4$',
    hasImage: false,
  },
  {
    id: '17f48d3bac2',
    chapter: '空間概念',
    question:
      '下列哪些選項的敘述是正確的？\n(1) 在平面上，兩相異直線不相交，則必平行\n(2) 在空間中，兩相異直線不相交，則必平行\n(3) 在平面上，任意兩相異直線一定有公垂線 (仍在該平面上)\n(4) 在空間中，任意兩相異直線一定有公垂線\n(5) 在空間中，相交的兩相異平面一定有公垂面',
    answer: '(1)(4)(5)',
    hasImage: false,
  },
  {
    id: '17f48d61fb0',
    chapter: '空間概念',
    question:
      '設 $A$、$B$、$C$ 為空間中相異的三點，且不在同一直線上。在空間中另取一點 $D$，使得 $A$、$B$、$C$、$D$ 成為一平行四邊形的四個頂點，則這樣的 $D$ 點一共有多少個？',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '17f48d833f8',
    chapter: '空間概念',
    question:
      '若 $\\overline{OA}$、$\\overline{OB}$、$\\overline{OC}$ 兩兩垂直，且 $\\overline{OA}=1$，$\\overline{OB}=1$，$\\overline{OC}=2$，求：\n(1) $\\triangle ABC$ 面積\n(2) $O$ 到平面 $ABC$ 的距離',
    answer: '(1) $\\frac32$ (2) $\\frac23$',
    hasImage: false,
  },
  {
    id: '17f48d9b1e0',
    chapter: '空間概念',
    question:
      '平面 $E$ 上有一直角三角形 $\\triangle BCD$，$\\angle C=90\\du$，$\\overline{BC}=4$，$\\overline{CD}=3$，若線段 $\\overline{AB}$ 與 $E$ 垂直，且 $\\overline{AB}=2$，求 $\\overline{AD}$。',
    answer: '$\\sqrt{29}$',
    hasImage: false,
  },
  {
    id: '17f48da9557',
    chapter: '空間概念',
    question:
      '空間中兩平面 $E_1$ 與 $E_2$ 相交於一線，銳交角為 $60\\du$，在 $E_1$ 上有一面積為 $26$ 的圖形，求此圖形在 $E_2$ 上的投影面積。',
    answer: '$13$',
    hasImage: false,
  },
  {
    id: '17f48db4f3a',
    chapter: '空間概念',
    question: '正立方體的兩條對角線 (通過內部)，其銳夾角為 $\\theta$，求 $\\tan\\theta$。',
    answer: '$2\\sqrt2$',
    hasImage: false,
  },
  {
    id: '17f48dcca48',
    chapter: '空間概念',
    question:
      '$\\triangle ABC$ 是一個邊長為 $6$ 的正三角形，$D$、$E$、$F$ 是三邊中點。今沿 $\\overline{DE}$、$\\overline{EF}$、$\\overline{FD}$ 上摺，使 $A$、$B$、$C$ 三點重疊在 $P$ 點，成為一個四面體 $P-DEF$，求此四面體的高。',
    answer: '$\\sqrt6$',
    hasImage: false,
  },
  {
    id: '17f48de6b4e',
    chapter: '空間概念',
    question:
      '空間坐標中有長方體如圖，已知 $A(0,-2,0)$，$\\overline{AB}=5$，$\\overline{AD}=4$，$\\overline{AE}=3$，且各邊均與坐標軸平行，試求 $C$、$E$、$H$。',
    answer: '$(4,-7,0)$；$(0,-2,-3)$；$(4,-2,-3)$',
    hasImage: true,
  },
  {
    id: '17f48df8cca',
    chapter: '空間概念',
    question: '已知平行四邊形的三頂點坐標為 $(1,1,-3)$、$(2,-3,5)$、$(3,-7,6)$，求另一頂點坐標。',
    answer: '$(2,-3,-2)$ 或 $(4,-11,14)$ 或 $(0,5,-4)$',
    hasImage: false,
  },
  {
    id: '17f48e10aa3',
    chapter: '空間概念',
    question:
      '$P(2,0,1)$、$Q(3,1,-1)$、$R(1,-1,2)$，求：(1) $\\xvector{PQ}$ (2) $|\\xvector{PQ}|$\n(3) 若 $\\xvector{PQ}=\\xvector{RS}$，求 $S$\n(4) $2\\xvector{PQ}-3\\xvector{RQ}$',
    answer: '(1) $(1,1,-2)$ (2) $\\sqrt6$ (3) $(2,0,0)$ (4) $(-4,-4,5)$',
    hasImage: false,
  },
  {
    id: '17f4e281edb',
    chapter: '空間概念',
    question:
      '設地球半徑為 $6400$ 公里，某一探險隊循著北緯 $60\\du$ 的緯線由東經 $60\\du$ 向東行走至東經 $105\\du$，此探險隊一共走了大約多少公里？(可用計算機，四捨五入到整數位)',
    answer: '$2513$',
    hasImage: false,
  },
  {
    id: '17f620f9634',
    chapter: '空間概念',
    question:
      '如圖，四面體 $ABCD$ 為三明治斜切後的圖形，已知 $\\overline{AD}$ 垂直於平面 $BCD$，$\\overline{BC}\\perp\\overline{BD}$，$\\overline{BC}=5$，$\\overline{AB}=12$，$\\overline{AD}=10$，問：\n(1) 求 $\\overline{AC}$\n(2) 若平面 $ADB$ 與平面 $ADC$ 夾角為 $\\theta$，求 $\\cos\\theta$',
    answer: '(1) $13$ (2) $\\sqrt{\\frac{44}{69}}$',
    hasImage: true,
  },
  {
    id: '17f62117853',
    chapter: '空間概念',
    question:
      '空間中 $A$ 點對平面 $E$ 的投影點為 $B$，直線 $L$ 在 $E$ 上，$B$ 對 $L$ 的投影點為 $C$，$D$ 在 $L$ 上。若 $\\overline{AB}=5$，$\\overline{BC}=12$，$\\overline{CD}=16$，求 $\\overline{AD}$。',
    answer: '$5\\sqrt{17}$',
    hasImage: false,
  },
  {
    id: '17f6214178c',
    chapter: '空間概念',
    question:
      '空間中線段 $\\overline{AB}=12$，$A$ 在平面 $E$ 上，$B$ 投影到 $E$ 為 $C$ 點且 $\\angle BAC=60\\du$，$E$ 上有一直線 $L$ 過 $A$ 且 $\\overline{AC}$ 與 $L$ 的夾角為 $30\\du$，求 $B$ 到 $L$ 的最短距離。',
    answer: '$3\\sqrt{13}$',
    hasImage: false,
  },
  {
    id: '17f636f1fc8',
    chapter: '空間概念',
    question:
      '設 $\\overline{OA}$、$\\overline{OB}$、$\\overline{OC}$ 兩兩垂直，$\\overline{OA}=5$，$\\overline{OB}=3$，$\\overline{OC}=4$，求平面 $ABC$ 與平面 $OBC$ 夾角的正弦值。',
    answer: '$\\frac{25}{\\sqrt{769}}$',
    hasImage: false,
  },
  {
    id: '17f63703aff',
    chapter: '空間概念',
    question: '正四面體 $A-BCD$ 的邊長為 $6$ 公分，求：(1) 高 (2) 體積 (3) 內切球半徑',
    answer: '(1) $2\\sqrt6$ (2) $18\\sqrt2$ (3) $\\frac{\\sqrt6}2$',
    hasImage: false,
  },
  {
    id: '17f6371e3cc',
    chapter: '空間概念',
    question:
      '生活在邊長為 $1$ 的正四面體 $ABCD$ 表面上的一隻昆蟲，希望由這四面體一邊的中點，沿著四面體表面爬到對邊的中點，求此昆蟲行進路線的最短距離。(四面體中不相交的兩邊互稱為對邊)',
    answer: '$1$',
    hasImage: false,
  },
  {
    id: '17f637320bc',
    chapter: '空間概念',
    question:
      '正立方體如圖，已知 $A(0,0,2)$，$F(0,0,-2)$，$B$、$E$ 二點在 $y$ 軸上，求 $C$、$D$、$H$、$G$。',
    answer: '$(2\\sqrt2,-2,0)$；$(2\\sqrt2,0,2)$；$(2\\sqrt2,2,0)$；$(2\\sqrt2,0,-2)$',
    hasImage: true,
  },
  {
    id: '17f637526da',
    chapter: '空間概念',
    question:
      '空間坐標系中一點 $P(3,1,-5)$，求：\n(1) $P$ 在 $x$ 軸上的投影點坐標\n(2) $P$ 在 $xy$ 平面上的對稱點坐標\n(3) $P$ 到 $y$ 軸的距離\n(4) $P$ 到 $z$ 軸的對稱點坐標\n(5) $P$ 到 $xz$ 平面的距離',
    answer: '(1) $(3,0,0)$ (2) $(3,1,5)$ (3) $\\sqrt{34}$ (4) $(-3,-1,-5)$ (5) $1$',
    hasImage: false,
  },
  {
    id: '17f63761d3e',
    chapter: '空間概念',
    question: '空間中三點 $A(4,3,1)$、$B(7,1,2)$、$C(5,2,3)$ 連成一個三角形，求周長、重心坐標。',
    answer: '$\\sqrt{14}+2\\sqrt6$；$(\\frac{16}3,2,2)$',
    hasImage: false,
  },
  {
    id: '17f63770d79',
    chapter: '空間概念',
    question:
      '已知 $\\vector a=(1,-2,3)$，$\\vector b=(-1,1,-1)$，求 $|\\vector a+t\\vector b|$ 的最小值及此時的 $t$。',
    answer: '$\\sqrt2$；$2$',
    hasImage: false,
  },
  {
    id: '17eea036205',
    chapter: '空間概念',
    question:
      '在空間中，下列哪些選項正確？\n(1) 一線段的中垂線恰有一條\n(2) 已知平面 $E$ 及平面 $E$ 上一點 $P$，恰有一平面通過 $P$ 點且與平面 $E$ 垂直\n(3) 已知直線 $L$ 垂直平面 $E$ 於 $P$ 點，則平面 $E$ 上過 $P$ 點的任一直線都與 $L$ 垂直\n(4) 已知直線 $L$ 及 $L$ 外一點 $P$，恰有一平面通過 $P$ 點且與直線 $L$ 垂直\n(5) 設直線 $L$ 交平面 $E$ 於一點 $P$，若平面 $E$ 上有一直線過 $P$ 點且垂直 $L$，則 $L$ 垂直 $E$',
    answer: '(3)(4)',
    hasImage: false,
  },
  {
    id: '17eea072712',
    chapter: '空間概念',
    question:
      '下列有關空間幾何的敘述，哪些是正確的？\n(1) 給空間中兩相異平面，則必存在平面與此兩平面均垂直\n(2) 給空間中兩相異直線，則必存在直線與此兩直線均垂直\n(3) 設平面 $E$ 與直線 $L$ 相交於 $A$ 點，若平面 $E$ 上有兩條通過 $A$ 點的相異直線均與 $L$ 垂直，則 $L\\perp E$\n(4) 設直線 $L_1$ 在平面 $E_1$ 上，直線 $L_2$ 在平面 $E_2$ 上，若 $E_1\\parallel E_2$，則 $L_1\\parallel L_2$\n(5) 設 $L_1$、$L_2$ 為相異直線，若 $L_1$ 與 $L$ 為歪斜線，且 $L_2$ 與 $L$ 為歪斜線，則 $L_1$ 與 $L_2$ 必為歪斜線',
    answer: '(1)(2)(3)',
    hasImage: false,
  },
  {
    id: '17eea0904f3',
    chapter: '空間概念',
    question:
      '如圖之錐體中，$\\overline{AB}=\\overline{BC}=\\overline{CA}=2$，$\\overline{AD}=\\overline{BD}=\\overline{CD}=4$，求底面 $ABC$ 與側面 $BCD$ 所夾的兩面角 $\\theta$ 之餘弦值。',
    answer: '$\\frac{\\sqrt5}{15}$',
    hasImage: true,
  },
  {
    id: '17eea0a5adf',
    chapter: '空間概念',
    question:
      '如圖，$\\triangle ABC$ 與 $\\triangle DBC$ 皆為邊長是 $2$ 的正三角形，若平面 $ABC$ 與平面 $DBC$ 所成兩面角為 $120\\du$，求 $\\cos\\angle ABD$。',
    answer: '$-\\frac18$',
    hasImage: true,
  },
  {
    id: '17eea0b7db8',
    chapter: '空間概念',
    question:
      '空間坐標系中，$P$ 點在 $xy$ 平面上的投影點為 $Q(2,-3,c)$，$P$ 點在 $yz$ 平面上的投影點為 $R(a,b,4)$，求 $\\overline{QR}$。',
    answer: '$2\\sqrt5$',
    hasImage: false,
  },
  {
    id: '17eea0cb699',
    chapter: '空間概念',
    question:
      '空間坐標系中第一卦限內一點 $P$，若 $P$ 點到 $x$ 軸、$y$ 軸、$xz$ 平面的距離分別為 $\\sqrt{34}$、$\\sqrt{61}$、$3$，求 $P$。',
    answer: '$(6,3,5)$',
    hasImage: false,
  },
  {
    id: '17e301d42b8',
    chapter: '空間概念',
    question:
      '圖為一盞桌上的檯燈，已知其照射的燈光形成直圓錐狀，將檯燈罩往下壓，求燈光在桌面上照亮區域所形成的邊界是哪個圓錐曲線的一部分？',
    answer: '橢圓',
    hasImage: true,
  },
  {
    id: '17e2fd4b9bb',
    chapter: '空間概念',
    question:
      '假設某飲料杯封口後為圓錐台的形狀 (即上底與下底皆為圓形且下底半徑略小於上底半徑，且過兩圓心的直線同時垂直上底圓與下底圓)，如圖。今將該飲料杯裝半滿的水，在封口後側置於平坦的水平桌面上。當飲料杯靜止不動時，此時水面與飲料杯側面的截痕為哪個圓錐曲線的一部分？',
    answer: '拋物線',
    hasImage: true,
  },
  {
    id: '17e2b7e3767',
    chapter: '空間概念',
    question:
      '在地球儀上，$A$ 點沿著赤道，$B$ 點沿著北緯 $60\\du$ 線，兩點皆自 $0\\du$ 經線出發向東移動到達東經 $120\\du$ 線，已知 $A$ 點移動 $20$ 公分，求 $B$ 點移動的距離。',
    answer: '$10$ 公分',
    hasImage: false,
  },
  {
    id: '17e2b7ecfb0',
    chapter: '空間概念',
    question: '已知地球儀的赤道長 $100$ 公分，求其南緯 $60\\du$ 的緯線長。',
    answer: '$50$ 公分',
    hasImage: false,
  },
  {
    id: '17e2b878759',
    chapter: '空間概念',
    question:
      '將地球儀設定成一個坐標空間，其中球心為原點 $O$，地球儀上有兩個城市其坐標分別為 $A(6,0,0)$、$B(-3,3,3\\sqrt2)$，求：\n(1) $A$、$B$ 兩點的球面距離\n(2) 在實際地球上，飛機從 $A$ 城市直飛至 $B$ 城市的最短航線長大約多少公里？(地球半徑約 $6400$ 公里)',
    answer: '(1) $4\\pi$ (2) $13404$',
    hasImage: false,
  },
  {
    id: '17e2b88833c',
    chapter: '空間概念',
    question:
      '將地球儀設定成一個坐標空間，其中球心為原點 $O$，地球儀上有兩個城市其坐標分別為 $A(1,2,2)$、$B(2,-2,1)$，求 $A$、$B$ 兩點的球面距離。',
    answer: '$\\frac{3\\pi}2$',
    hasImage: false,
  },
  {
    id: '17d88b3c86d',
    chapter: '空間概念',
    question:
      '是非題：\n(1) 過平面外一點，恰有一直線與此平面平行\n(2) 過直線外一點，恰有一平面與此直線垂直\n(3) 空間中相異三點決定唯一的平面\n(4) 相異平面 $E_1、E_2$ 交於一線 $L$，若平面 $E$ 與 $L$ 垂直，則 $E$ 必與 $E_1$、$E_2$ 都垂直\n(5) 空間中直線 $L$ 與 $M$ 相交且垂直，若 $M$ 在平面 $E$ 上，則 $L$ 也必與 $E$ 垂直',
    answer: 'xoxox',
    hasImage: false,
  },
  {
    id: '17d88b52dbe',
    chapter: '空間概念',
    question:
      '是非題：\n(1) 過平面外一點，恰有一平面與此平面平行\n(2) 若兩相異直線決定唯一的平面，則此兩直線交於一點\n(3) 給空間中兩相異平面，則必存在平面與此兩平面均垂直\n(4) 給空間中兩相異直線，則必存在直線與此兩直線均垂直\n(5) 若空間中直線 $L$ 與平面 $E$ 互相垂直，則包含 $L$ 的平面必與 $E$ 垂直',
    answer: 'oxooo',
    hasImage: false,
  },
  {
    id: '17d6a825eda',
    chapter: '空間概念',
    question:
      '下列敘述何者正確？\n(1) 空間中不相交的兩直線必會平行\n(2) 過平面外一點，恰有一平面與此平面垂直\n(3) 過直線外一點，恰有一平面與此直線平行\n(4) 垂直於同一平面的兩直線必互相平行\n(5) 若空間中直線 $L$ 與平面 $E$ 交於一點，則存在唯一的平面包含 $L$ 且與 $E$ 垂直',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17d88b9aed4',
    chapter: '空間概念',
    question:
      '下列敘述哪些正確？\n(1) 在空間中，一線段的垂直平分線只有一條\n(2) 設平面 $E$ 與直線 $L$ 相交於 $A$ 點，若平面 $E$ 上有兩條通過 $A$ 點的相異直線均與 $L$ 垂直，則 $L\\perp E$\n(3) 給定一平面 $E$ 及其外一點 $P$，有無限多個平面通過 $P$ 點且與 $E$ 垂直\n(4) 設直線 $L_1$、$L_2$ 分別在平面 $E_1$、$E_2$ 上，若 $L_1\\parallel L_2$，則 $E_1\\parallel E_2$\n(5) 若直線 $L$ 垂直平面 $E$，則含 $L$ 之每一平面均垂直平面 $E$',
    answer: '(2)(3)(5)',
    hasImage: false,
  },
  {
    id: '17d8d7b03c9',
    chapter: '空間概念',
    question:
      '如圖，長方體共有 $12$ 個邊，試求：\n(1) 與其中某一邊互相歪斜的邊共有幾個？\n(2) 設長為 $a$，寬為 $b$，高為 $c$，求通過內部對角線長，即任兩頂點間的最大距離',
    answer: '(1) $4$ (2) $\\sqrt{a^2+b^2+c^2}$',
    hasImage: true,
  },
  {
    id: '17d8d7b59f6',
    chapter: '空間概念',
    question:
      '空心的長方體三邊長為 $4$、$5$、$8$，$\\overline{AB}$ 為通過內部的對角線，則：\n(1) 一蜜蜂在內部由 $A$ 飛到 $B$，求最短路徑\n(2) 一螞蟻沿表面由 $A$ 爬到 $B$，求最短路徑',
    answer: '(1) $\\sqrt{105}$ (2) $\\sqrt{145}$',
    hasImage: true,
  },
  {
    id: '17d71439e96',
    chapter: '空間概念',
    question:
      '(1) 若一長方體的長為 $4$，寬為 $8$，高為 $3$，求內部對角線長\n(2) 若一長方體的長為 $6$，寬為 $5$，內部對角線長度為 $10$，求高\n(3) 若一長方體的長、寬、高之和為 $8$，總表面積為 $28$，求內部對角線長度',
    answer: '(1) $\\sqrt{89}$ (2) $\\sqrt{39}$ (3) $6$',
    hasImage: false,
  },
  {
    id: '17d8d7c54c2',
    chapter: '空間概念',
    question:
      '長方體三邊長由大而小依次為 $a$、$b$、$c$，$\\overline{PQ}$ 為通過內部的對角線，則：\n(1) 一隻蜜蜂由 $P$ 飛到 $Q$，求最短路徑\n(2) 一隻螞蟻由 $P$ 爬到 $Q$，求最短路徑',
    answer: '(1) $\\sqrt{a^2+b^2+c^2}$ (2) $\\sqrt{a^2+(b+c)^2}$',
    hasImage: false,
  },
  {
    id: '17d8d7dad53',
    chapter: '空間概念',
    question:
      '空間中平面 $E$ 上有一直線 $L$，平面外一點 $A$ 投影到 $E$ 上為 $B$ 點，$B$ 點再投影到 $L$ 上為 $C$ 點，已知 $\\overline{AB}=4$，$\\overline{BC}=3$，則：\n(1) 求 $\\overline{AC}$、$\\cos\\angle{ACB}$\n(2) 若 $D\\in L$ 且 $\\overline{CD}=12$，求 $\\overline{AD}$',
    answer: '(1) $5$；$\\frac35$ (2) $13$',
    hasImage: true,
  },
  {
    id: '17d8d837c81',
    chapter: '空間概念',
    question:
      '四面體 $ABCD$，已知 $\\overline{AB}\\perp\\overline{BC}$，$\\overline{AB}\\perp\\overline{BD}$，且 $\\overline{AC}\\perp\\overline{CD}$，若 $\\overline{AD}=6$，$\\overline{CD}=3$，$\\overline{BD}$ 比 $\\overline{BC}$ 多 $1$，求：\n(1) $\\triangle BCD$ 的面積\n(2) 此四面體以 $\\triangle BCD$ 為底的高\n(3) 此四面體的體積',
    answer: '(1) $6$ (2) $\\sqrt{11}$ (3) $2\\sqrt{11}$',
    hasImage: true,
  },
  {
    id: '17d8d840de1',
    chapter: '空間概念',
    question:
      '若 $O$、$A$、$B$、$C$ 四點不共面，$A$、$B$、$C$ 三點在平面 $E$ 上，且 $\\overline{AB}\\perp\\overline{BC}$，$\\overline{OA}$ 垂直 $E$ 於 $A$，已知 $\\overline{OA}=8$，$\\overline{AB}=15$，$\\overline{BC}=10$，求 $\\overline{OC}$。',
    answer: '$\\sqrt{389}$',
    hasImage: true,
  },
  {
    id: '17d8d84a410',
    chapter: '空間概念',
    question:
      '如圖，在長方形 $ABCD$ 中，$\\overline{AB}=3$，$\\overline{BC}=4$，將此長方形沿對角線 $AC$ 折起，已知折起後的 $D$ 點在底面 $ABC$ 的投影點 $H$ 恰在 $\\overline{BC}$ 上，試求折起後的 $\\overline{BD}$。',
    answer: '$\\sqrt7$',
    hasImage: true,
  },
  {
    id: '17d8d85c7f9',
    chapter: '空間概念',
    question:
      '如圖，$ABCD$ 為四面體，已知 $\\overline{AD}$ 垂直於平面 $BCD$，$\\overline{BC}\\perp\\overline{BD}$，$\\overline{BC}=7$，$\\overline{AB}=24$，$\\overline{AD}=15$，則：\n(1) 平面 $ABC$ 與平面 $BCD$ 所成之二面角為 $\\theta$，求 $\\sin\\theta$\n(2) 平面 $ABD$ 與平面 $ACD$ 所成之二面角為 $\\phi$，求 $\\sin\\phi$',
    answer: '(1) $\\frac58$ (2) $\\frac7{20}$',
    hasImage: true,
  },
  {
    id: '17d8d86a6fc',
    chapter: '空間概念',
    question:
      '圖為一正立方體 $ABCD-EFGH$，若：\n(1) 平面 $ABGH$ 與底面 $EFGH$ 的二面角為 $\\theta$，求 $\\sin\\theta$\n(2) 平面 $AFH$ 與底面 $EFGH$ 的二面角為 $\\phi$，求 $\\sin\\phi$',
    answer: '(1) $\\frac{\\sqrt2}2$ (2) $\\frac{\\sqrt6}3$',
    hasImage: true,
  },
  {
    id: '17d8d87a040',
    chapter: '空間概念',
    question:
      '空間中四面體 $ABCD$，已知 $\\triangle ACD$ 與 $\\triangle BCD$ 均為等腰三角形，如圖，$\\overline{AC}=\\overline{AD}=3$，$\\overline{BC}=\\overline{BD}=5$，$\\overline{AB}=4$，$\\overline{CD}=2$，假設 $\\triangle ACD$ 與 $\\triangle BCD$ 的二面角為 $\\theta$，求 $\\cos\\theta$。',
    answer: '$\\frac{\\sqrt3}3$',
    hasImage: true,
  },
  {
    id: '17d8d89ad01',
    chapter: '空間概念',
    question:
      '已知三角錐體 $ABCD$，底面是邊長 $6$ 的正三角形 $BCD$，$\\overline{AB}=\\overline{AC}=\\overline{AD}=10$，如圖，求側面三角形與底面的夾角餘弦值。',
    answer: '$\\frac{\\sqrt{273}}{91}$',
    hasImage: true,
  },
  {
    id: '17d8d8e148a',
    chapter: '空間概念',
    question:
      '正四面體 $ABCD$ 的邊長為 $a$，$\\overline{AB}$ 中點 $N$，$\\overline{CD}$ 中點 $M$，求：(1) 高 (2) 體積\n(3) 相鄰兩面的二面角之餘弦值\n(4) 兩歪斜線 $\\overleftrightarrow{AB}$ 與 $\\overleftrightarrow{CD}$ 的距離 $\\overline{MN}$\n(5) 正四面體的外接球與內切球半徑的比值',
    answer:
      '(1) $\\frac{\\sqrt6}3a$ (2) $\\frac{\\sqrt2}{12}a^3$ (3) $\\frac13$ (4) $\\frac{\\sqrt2}2a$ (5) $3$',
    hasImage: true,
  },
  {
    id: '17d8d8f066a',
    chapter: '空間概念',
    question:
      '正四面體的邊長為 $a$，求：(1) 高 (2) 體積\n(3) 相鄰兩面的二面角之正弦值\n(4) 歪斜的兩個邊其距離\n(5) 內切球的半徑',
    answer:
      '(1) $2\\sqrt6$ (2) $18\\sqrt2$ (3) $\\frac{2\\sqrt2}3$ (4) $3\\sqrt2$ (5) $\\frac{\\sqrt6}2$ ',
    hasImage: false,
  },
  {
    id: '17d8d912392',
    chapter: '空間概念',
    question:
      '底面為正方形的四角錐 $O-ABCD$，側面為四個正三角形，邊長為 $a$，求：\n(1) 高 (2) 體積\n(3) 側面與底面的夾角之餘弦值\n(4) 任兩側面的夾角之餘弦值',
    answer:
      '(1) $\\frac{\\sqrt2}2a$ (2) $\\frac{\\sqrt2}6a^3$ (3) $\\frac{\\sqrt3}3$ (4) $-\\frac13$',
    hasImage: true,
  },
  {
    id: '17d8d91d87a',
    chapter: '空間概念',
    question:
      '如圖，$O-ABCD$ 是一個四角錐，其中 $ABCD$ 為一正方形，且 $\\overline{OA}=\\overline{OB}=\\overline{OC}=\\overline{OD}=4$，$\\overline{AB}=\\overline{BC}=\\overline{CD}=\\overline{DA}=3$，若四角錐的側面與底面的夾角為 $\\theta$，求 $\\cos\\theta$。',
    answer: '$\\frac{3}{\\sqrt{55}}$',
    hasImage: true,
  },
  {
    id: '17d8d932da9',
    chapter: '空間概念',
    question:
      '如圖，$\\overline{OA}$、$\\overline{OB}$、$\\overline{OC}$ 兩兩垂直，且 $\\overline{OA}=5$，$\\overline{OB}=3$，$\\overline{OC}=2$，求：\n(1) $\\triangle ABC$ 與 $\\triangle OAB$ 所夾二面角之餘弦值\n(2) $\\triangle ABC$ 面積',
    answer: '(1) $\\frac{15}{19}$ (2) $\\frac{19}2$',
    hasImage: true,
  },
  {
    id: '17d8d990529',
    chapter: '空間概念',
    question:
      '已知長方體的長、寬、高分別為 $\\overline{AB}=3$，$\\overline{AC}=4$，$\\overline{AD}=2$，求 $\\triangle BCD$ 的面積、$\\triangle BCD$ 與 $\\triangle ABC$ 的二面角之正切值。',
    answer: '$\\sqrt{61}$；$\\frac56$',
    hasImage: false,
  },
  {
    id: '17cebe71628',
    chapter: '空間概念',
    question:
      '將一塊邊長 $\\overline{AB}=15$ 公分、$\\overline{BC}=20$ 公分的長方形鐵片 $ABCD$ 沿對角線 $\\overline{BD}$ 對摺後豎立，使得平面 $ABD$ 與平面 $CBD$ 垂直，求 $\\overline{AC}$。',
    answer: '$\\sqrt{337}$',
    hasImage: false,
  },
  {
    id: '17cebe8f1c9',
    chapter: '空間概念',
    question:
      '如圖的四角錐展開圖，底面為邊長 2 的正方形，四個側面都是腰長為 4 的等腰三角形，求此四角錐的高度。',
    answer: '$\\sqrt{14}$',
    hasImage: true,
  },
  {
    id: '17cebe91c86',
    chapter: '空間概念',
    question:
      '如圖，$\\overline{OA}$、$\\overline{OB}$、$\\overline{OC}$ 兩兩互相垂直，已知 $\\overline{OA}=3$、$\\overline{OB}=4$，$\\overline{OC}=5$，則：\n(1) 求 $O$ 點到 $\\overline{AB}$ 的距離\n(2) 若平面 $OAB$ 與平面 $ABC$ 所夾銳角為 $\\theta$，求 $\\tan\\theta$',
    answer: '(1) $\\frac{12}5$ (2) $\\frac{25}{12}$',
    hasImage: true,
  },
  {
    id: '17cebe9df49',
    chapter: '空間概念',
    question:
      '空間中有兩個點 $A$、$B$，已知 $\\overline{AB}$ 與平面 $E$ 平行，且 $A$、$B$ 到 $E$ 的最近距離均為 12，平面 $E$ 上有一條直線 $L$，$\\overline{AB}$ 投影到 $E$ 後不與 $L$ 相交，$A$ 到 $L$ 的最近距離為 13，$B$ 到 $L$ 的最近距離為 15，且 $A$、$B$ 投影到 $L$ 後相距 7 單位，如圖，求 $\\overline{AB}$。',
    answer: '$\\sqrt{65}$',
    hasImage: true,
  },
  {
    id: '17cebeaa5b5',
    chapter: '空間概念',
    question:
      '有一底面為正方形的四角錐，其展開圖如圖所示，其中兩側面的三角形邊長為 3、4、5，求此角錐的體積。',
    answer: '$\\frac{16\\sqrt5}3$',
    hasImage: true,
  },
  {
    id: '17cebeb1bce',
    chapter: '空間概念',
    question:
      '四面體 $A-BCD$，其底面 $\\triangle BCD$ 的周長為 10，面積為 15，各側面與底面所成的兩面角均為 $60\\du$，求此四面體的體積。',
    answer: '$15\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17cebec7ace',
    chapter: '空間概念',
    question:
      '正立方體 $ABCD-EFGH$ 的邊長為 2，建立坐標系使原點位於底面 $ABCD$ 的中心，且 $A$ 在 $x$ 軸正向上，$B$ 在 $y$ 軸正向上，頂面 $EFGH$ 的中心位於 $z$ 軸正向上，如圖，現有五個點 $P(0.6,0.6,0.6)$、$Q(0.7,0.7,0.7)$、$R(0.8,0.8,0.8)$、$S(0.9,0.9,0.9)$、$T(1,1,1)$，請問共有幾個點落在這個正立方體的內部？',
    answer: '2',
    hasImage: true,
  },
  {
    id: '17cebed7be4',
    chapter: '空間概念',
    question:
      '下列有關空間坐標的敘述，下列哪些正確？\n(1) 在垂直 $x$ 軸的平面上，任兩點的 $x$ 坐標皆相等\n(2) 在垂直 $xy$ 平面的直線上，任兩點的 $z$ 坐標相等\n(3) 設 $a>b>c>0$，則點 $(a,b,c)$ 到三坐標平面的最近距離為 $a$\n(4) 設 $a>b>c>0$，則點 $(a,b,c)$ 到三坐標軸的最近距離為 $\\sqrt{b^2+c^2}$\n(5) 在三坐標軸上，共可找到 4 個相異點到 $A(5,6,7)$ 的距離為 8',
    answer: '(1)(4)',
    hasImage: false,
  },
  {
    id: '17cebf09d4e',
    chapter: '空間概念',
    question:
      '長方體 $ABCD-EFGH$ 置於空間坐標中，如圖，使 $A$ 位於原點，$G$ 在正 $z$ 軸上，$\\overline{AB}=4$，$\\overline{AD}=3$，$\\overline{AE}=12$，求：\n(1) $C$ 到 $z$ 軸的距離 (2) $C$ 點的 $z$ 坐標',
    answer: '(1) $\\frac{60}{13}$ (2) $\\frac{25}{13}$',
    hasImage: true,
  },
  {
    id: '17cea2e6483',
    chapter: '空間概念',
    question:
      '正四面體 $P-ABC$ 的邊長為 6，底面 $ABC$ 的重心位於坐標原點 $O$，頂點 $A$ 在 $x$ 軸正向，頂點 $P$ 在 $z$ 軸正向，求 $B$。',
    answer: '$(-\\sqrt{3},3,0)$',
    hasImage: true,
  },
  {
    id: '17cec34ee97',
    chapter: '空間概念',
    question:
      '空間坐標中有一個地球儀，球心位於原點 $O$，球面上有兩點 $A(1,0,-3)$、$B(-2,\\sqrt5,1)$，若一隻螞蟻沿球面從 $A$ 點爬至 $B$ 點，求最短距離。',
    answer: '$\\frac{2\\sqrt{10}}3\\pi$',
    hasImage: false,
  },
  {
    id: '17cec384cda',
    chapter: '空間概念',
    question:
      '設一地球儀的球心為空間坐標的原點，有兩個城市的坐標分別為 $A(1,2,2)$、$B(2,-2,1)$。假定地球為半徑 6400 公里的圓球，試問飛機從 $A$ 城市直飛至 $B$ 城市最短航線長為幾公里？',
    answer: '$3200\\pi$',
    hasImage: false,
  },
  {
    id: '17cdff745aa',
    chapter: '空間概念',
    question:
      '下列有關空間的敘述，哪些是正確的？\n(1) 過直線外一點，恰有一平面與此直線垂直\n(2) 過直線外一點，恰有一平面與此直線平行\n(3) 過平面外一點，恰有一直線與此平面平行\n(4) 過平面外一點，恰有一平面與此平面垂直\n(5) 過平面外一點，恰有一平面與此平面平行',
    answer: '(1)(5)',
    hasImage: false,
  },
  {
    id: '17cdff84f8b',
    chapter: '空間概念',
    question:
      "圖為一立方體，試問下列哪些線段會與線段 $\\overline{A'B}$ 共平面？\n(1) $\\overline{BC'}$ (2) $\\overline{AC}$ (3) $\\overline{DB'}$ (4) $\\overline{DD'}$ (5) $\\overline{CD'}$",
    answer: '(1)(5)',
    hasImage: true,
  },
  {
    id: '17cdff9458e',
    chapter: '空間概念',
    question: '求正四面體的兩個面所成的二面角餘弦值。',
    answer: '$\\frac13$',
    hasImage: false,
  },
  {
    id: '17cdffa2246',
    chapter: '空間概念',
    question:
      '正立方體如圖，令 $\\triangle ACD$ 與 $\\triangle ACH$ 所夾的二面角為 $\\theta$，求 $\\sin\\theta$。',
    answer: '$\\frac{\\sqrt6}3$',
    hasImage: true,
  },
  {
    id: '17cdffd7863',
    chapter: '空間概念',
    question:
      '兩平面 $E_1$、$E_2$ 交於一線 $L$，點 $A$ 在 $E_1$ 上且不在 $E_2$ 上，將 $A$ 投影到 $E_2$ 為 $B$ 點，$B$ 再投影到 $L$ 為 $C$ 點，請問下列哪些正確？\n(1) $\\angle ABC=90\\du$ (2) $\\overline{BC}\\perp L$ (3) $\\overline{AC}\\perp L$\n(4) $A$ 投影到 $L$ 恰為 $C$ 點\n(5) $\\angle ACB$ 為 $E_1$ 與 $E_2$ 所夾二面角',
    answer: '(1)(2)(3)(4)(5)',
    hasImage: false,
  },
  {
    id: '17cdffec15a',
    chapter: '空間概念',
    question:
      '正立方體如圖，$\\overline{EG}$ 與 $\\overline{HF}$ 交於 $K$ 點，則下列哪些三角形為直角三角形？\n(1) $\\triangle ABH$ (2) $\\triangle ACF$\n(3) $\\triangle BKH$ (4) $\\triangle BKG$',
    answer: '(1)(4)',
    hasImage: true,
  },
  {
    id: '17ce002d564',
    chapter: '空間概念',
    question: '空間中球面 $S$ 的半徑為 4，被平面 $E$ 截出一圓，球心到圓心的距離為 3，求截圓面積。',
    answer: '$7\\pi$',
    hasImage: true,
  },
  {
    id: '17ce003c076',
    chapter: '空間概念',
    question: '設一長方體的長、寬、高分別為 10、8、4，求其任意兩頂點間最長的距離。',
    answer: '$6\\sqrt5$',
    hasImage: false,
  },
  {
    id: '17ce0001ef1',
    chapter: '空間概念',
    question: '圖為稜長為 1 之正立方體，求四面體 $ACFH$ 的表面積及體積。',
    answer: '$2\\sqrt3$；$\\frac13$',
    hasImage: true,
  },
  {
    id: '17ce0013699',
    chapter: '空間概念',
    question:
      '各邊長均為 $a$ 的金字塔體積為 $V_1$，各邊長均為 $a$ 的正四面體體積為 $V_2$，求 $\\dfrac{V_1}{V_2}$。',
    answer: '2',
    hasImage: false,
  },
  {
    id: '17ce0065827',
    chapter: '空間概念',
    question:
      '空間坐標中關於點 $A(4,5,6)$ 的敘述，下列選項何者正確？\n(1) $xy$ 平面上恰有一點與 $A$ 的距離為 5\n(2) $yz$ 平面上恰有一點與 $A$ 的距離為 5\n(3) $xz$ 平面上恰有一點與 $A$ 的距離為 5\n(4) 三坐標軸上皆恰有一點與 $A$ 的距離為 5',
    answer: '(3)',
    hasImage: false,
  },
  {
    id: '17ce007f2d9',
    chapter: '空間概念',
    question:
      '令 $A(5,0,12)$，$B(-5,0,12)$ 為坐標空間中之兩點，且令 $P$ 為 $xy$ 平面上滿足 $\\overline{PA}=\\overline{PB}=13$ 的點。請問下列哪一個點可能為 $P$？(1) (5,0,0)　(2) (5,5,0)\n(3) (0,12,0)　(4) (0,0,0)　(5) (0,0,24)',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17ce008fbb5',
    chapter: '空間概念',
    question: '設地球赤道一圈的長度約 40000 公里，請問北緯 $60\\du$ 一圈的長度約幾公里？',
    answer: '20000',
    hasImage: false,
  },
  {
    id: '17ce00a154d',
    chapter: '空間概念',
    question:
      '設從台北車站往東前進 $a$ 公里可使經度增加一度，而從台北車站往北前進 $b$ 公里可使緯度增加一度。試比較 $a$、$b$ 的大小。',
    answer: '$a<b$',
    hasImage: false,
  },
  {
    id: '17ce00c5e42',
    chapter: '空間概念',
    question:
      '兩相異平面 $E_1$、$E_2$ 互相平行，各與直圓錐面 $\\Omega$ 相截，所得截痕為 $\\Gamma_1$ 與 $\\Gamma_2$。\n(1) 若 $\\Gamma_1$ 為一直線，則 $\\Gamma_2$ 的圖形為？\n(2) 若 $\\Gamma_1$ 為兩相交直線，則 $\\Gamma_2$ 的圖形為？\n(3) 若 $\\Gamma_1$ 為一點，則 $\\Gamma_2$ 的圖形為？',
    answer: '(1) 拋物線 (2) 雙曲線 (3) 橢圓',
    hasImage: false,
  },
];

// 空間向量
const spaceVector: Question[] = [
  {
    id: '1848b6826f3',
    chapter: '空間向量',
    question:
      '左圖是由三個全等的菱形所組成的正六邊形，某日阿志算數學時，算到頭眼昏花，不慎將左圖的正六邊形，看成如右圖的正立方體，阿志沒有其他計算上的錯誤，算出 $\\xvector{AB}\\cdot\\xvector{AC}=12$。若圖形沒有看錯，則該題的正確答案應該是 $\\xvector{AB}\\cdot\\xvector{AC}=\\textcirc{7-1}\\textcirc{7-2}$。',
    answer: '18',
    hasImage: true,
  },
  {
    id: '1848b6bdcc9',
    chapter: '空間向量',
    question:
      '小良想在房子頂樓的空間安裝太陽能板，經過量測，小良在空間坐標系中建構一長方體 $OABC-DEFG$，其中 $O(0,0,0)$，$A(3,0,0)$，$C(0,4,0)$，$D(0,0,5)$，若欲使太陽能板通過 $EGB$ 三點，如圖所示，則：',
    answer: '',
    hasImage: true,
  },
  {
    id: '1848b6e3324',
    chapter: '空間向量',
    question:
      '試計算 $\\xvector{EG}\\times\\xvector{EB}$。(單選題，4 分)\n(1) (-20, -15, -12)　(2) (7, 8, 2)　(3) (-1, -2, -3)　(4) (7, 7, 3)　(5) (-7, -3, -2)',
    answer: '1',
    hasImage: false,
  },
  {
    id: '1848b719fbf',
    chapter: '空間向量',
    question:
      '太陽能板所在的平面的方程式為 $\\dfrac{\\textcirc{9-1}}{\\textcirc{9-2}}x+\\dfrac{\\textcirc{9-3}}{\\textcirc{9-4}}y+z=\\textcirc{9-5}\\textcirc{9-6}$。(選填題，4 分)',
    answer: '535410',
    hasImage: false,
  },
  {
    id: '1848b7416fe',
    chapter: '空間向量',
    question: '試說明平面 $EGB$ 是否與平面 $ODF$ 垂直？(非選擇題，7 分)',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17f79262520',
    chapter: '空間向量',
    question:
      '坐標空間中三點，$A(2,0,3)$、$B(10,-10,7)$、$C(4,-4,7)$，若 $H$ 為 $\\triangle ABC$ 的垂心，求 $\\xvector{AH}$ 在 $\\xvector{AC}$ 上的正射影。',
    answer: '$(4,-8,8)$',
    hasImage: false,
  },
  {
    id: '17f7931f1b8',
    chapter: '空間向量',
    question: '若 $x,y\\in\\mathbb R$，求 $x+y+\\sqrt{4-x^2-y^2}$ 的最大值。',
    answer: '$2\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17f8cecf234',
    chapter: '空間向量',
    question:
      '空間中，正立方體如圖，$\\overline{CF}$ 中點為 $M$，$\\overline{EF}$ 中點為 $N$，求 $\\cos\\angle MAN$。',
    answer: '$\\frac89$',
    hasImage: true,
  },
  {
    id: '17f8cee9aed',
    chapter: '空間向量',
    question:
      '$\\triangle ABC$ 中，$\\overline{AB}=5$，$\\overline{BC}=6$，$\\overline{CA}=7$，在 $\\triangle ABC$ 內部有一動點 $P$，由 $P$ 作 $\\overline{AB}$、$\\overline{BC}$、$\\overline{CA}$ 的垂線長為 $x$、$y$、$z$，求 $x^2+y^2+z^2$ 的最小值。',
    answer: '$\\frac{432}{55}$',
    hasImage: false,
  },
  {
    id: '17f8cf0a6af',
    chapter: '空間向量',
    question:
      '已知空間中向量 $\\vector a=(1,2,-1)$，$\\vector b=(3,1,-2)$，若 $\\vector c\\perp\\vector a$ 且 $\\vector c\\perp\\vector b$，$|\\vector c|=70$，試求 $\\vector c$。',
    answer: '$\\pm(6\\sqrt{35},2\\sqrt{35},10\\sqrt{35})$',
    hasImage: false,
  },
  {
    id: '17f8cf185a3',
    chapter: '空間向量',
    question: '化簡 $\\begin{vmatrix}1&1&1\\\\a&b&c\\\\b+c&a+c&a+b\\end{vmatrix}$。',
    answer: '$0$',
    hasImage: false,
  },
  {
    id: '17f0dedd6ac',
    chapter: '空間向量',
    question:
      '設 $\\vector a=(2,2,1)$，$\\vector b=(3,1,-2)$，$\\vector c=(1,2,4)$，若 $(\\vector a+t\\vector b)\\perp\\vector c$，求 $t$。',
    answer: '$\\frac{10}3$',
    hasImage: false,
  },
  {
    id: '17f0defa418',
    chapter: '空間向量',
    question:
      '如圖為長、寬、高分別為 $2$、$3$、$7$ 的長方體。已知 $\\overline{AB}=2$，$\\overline{AD}=3$，且 $\\overline{DH}=7$，求內積 $\\xvector{AG}\\cdot\\xvector{BH}$。',
    answer: '$54$',
    hasImage: true,
  },
  {
    id: '17f0df1294d',
    chapter: '空間向量',
    question:
      '如圖，$ABCD$ 為正立方體的一個面，$P$ 為 $\\overline{BC}$ 中點，$Q$ 在 $\\overline{CD}$ 上，且 $\\overline{CQ}:\\overline{DQ}=2:1$，$O$ 為正立方體的中心，求 $\\cos\\angle POQ$。',
    answer: '$\\frac{\\sqrt{38}}{19}$',
    hasImage: true,
  },
  {
    id: '17f0df1bc14',
    chapter: '空間向量',
    question: '若 $2x+y-2z+3=0$，求 $4x^2+y^2+4z^2-9$ 的最小值。',
    answer: '$-6$',
    hasImage: false,
  },
  {
    id: '17f0df3023e',
    chapter: '空間向量',
    question: '若 $x^2+y^2+z^2=\\frac27$，求 $x+3y-2z$ 的最大值及此時的序組 $(x,y,z)$。',
    answer: '$2$；$(\\frac17,\\frac37,-\\frac27)$',
    hasImage: false,
  },
  {
    id: '17f0df44a83',
    chapter: '空間向量',
    question:
      '已知 $\\xvector{AB}=(7,2,1)$，$\\xvector{AC}=(2,4,-4)$，求 $\\xvector{AB}$ 在 $\\xvector{AC}$ 上的正射影。',
    answer: '$(1,2,-2)$',
    hasImage: false,
  },
  {
    id: '17f0df59034',
    chapter: '空間向量',
    question:
      '設 $A(1,0,1)$、$B(1,2,3)$、$C(-1,1,2)$，若 $B$ 點在直線 $AC$ 上的投影點為 $H$，且 $\\xvector{AH}=t\\xvector{AC}$，求 $t$。',
    answer: '$\\frac23$',
    hasImage: false,
  },
  {
    id: '17f0df681b0',
    chapter: '空間向量',
    question:
      '設 $\\vector a=(1,2,-1)$，$\\vector b=(-2,3,-1)$，求 $(3\\vector a+\\vector b)\\cdot(2\\vector a-\\vector b)$。',
    answer: '$17$',
    hasImage: false,
  },
  {
    id: '17f0df7ab1b',
    chapter: '空間向量',
    question:
      '已知 $\\vector a=(1,2,-1)$，$\\vector b=(3,2x+5,3y-1)$，$\\vector c=(z,5,x-1)$，若 $\\vector a\\parallel\\vector b$ 且 $\\vector b\\perp\\vector c$，求序組 $(x,y,z)$。',
    answer: '$(\\frac12,-\\frac23,-\\frac{21}2)$',
    hasImage: false,
  },
  {
    id: '17f31996f77',
    chapter: '空間向量',
    question:
      '設 $\\vector a$、$\\vector b$ 是空間中的兩向量，$|\\vector a|=3$，$|\\vector b|=4$，$|\\vector a+\\vector b|=\\sqrt{41}$，求 $|\\vector a-\\vector b|$。',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '17f319a769d',
    chapter: '空間向量',
    question:
      '若 $2x-y-2z=12$，當 $(x,y,z)=(p,q,r)$ 時，$x^2+y^2+z^2-2x-4y-6$ 有最小值 $t$，求 $p+q+r+t$。',
    answer: '$\\frac{20}3$',
    hasImage: false,
  },
  {
    id: '17f319c4d62',
    chapter: '空間向量',
    question:
      '給定空間中兩向量 $\\vector a=(6,4,4)$、$\\vector b=(2,1,3)$，若 $\\vector a=r\\vector b+\\vector c$，$r\\in\\mathbb R$ 且 $\\vector c\\perp\\vector b$，求 $\\vector c$。',
    answer: '$(2,2,-2)$',
    hasImage: false,
  },
  {
    id: '17f319d4e55',
    chapter: '空間向量',
    question:
      '已知向量 $\\xvector{AB}=(1,-3,2)$ 與 $\\xvector{AC}=(-3,-1,-1)$，求 $\\xvector{AB}\\cross\\xvector{AC}$。',
    answer: '$(5,-5,-10)$',
    hasImage: false,
  },
  {
    id: '17f319e408b',
    chapter: '空間向量',
    question:
      '已知向量 $\\vector a=(1,-2,8)$、$\\vector b=(2,1,1)$，求 $\\vector a$、$\\vector b$ 所張成的平行四邊形面積。',
    answer: '$5\\sqrt{14}$',
    hasImage: false,
  },
  {
    id: '17f319f3aee',
    chapter: '空間向量',
    question:
      '已知 $\\vector n$ 和 $\\vector a=(2,-1,0)$ 與 $\\vector b=(4,-1,-1)$ 均垂直，且 $|\\vector n|=6$，求 $\\vector n$。',
    answer: '$\\pm(2,4,4)$',
    hasImage: false,
  },
  {
    id: '17f31a038a5',
    chapter: '空間向量',
    question:
      '求向量 $\\vector a=(3,3,2)$、$\\vector b=(3,0,2)$ 及 $\\vector c=(2,4,2)$ 所張成的四面體體積。',
    answer: '$1$',
    hasImage: false,
  },
  {
    id: '17f31a17e93',
    chapter: '空間向量',
    question:
      '已知三向量 $\\vector a=(4,1,1)$、$\\vector b=(3,0,3)$ 及 $\\vector c=(2,k,2)$，若 $\\vector a$、$\\vector b$ 及 $\\vector c$ 所張成的平行六面體體積為 $9$，求 $k$。',
    answer: '$\\pm1$',
    hasImage: false,
  },
  {
    id: '17f48e29372',
    chapter: '空間向量',
    question: '$\\begin{vmatrix}x+1&x&2x\\\\1&3x&x\\\\4x&1&0\\end{vmatrix}\\le0$，求 $x$ 的範圍。',
    answer: '$-\\frac14\\le x\\le0\\lor x\\ge\\frac15$',
    hasImage: false,
  },
  {
    id: '17f48e43a13',
    chapter: '空間向量',
    question:
      '$\\begin{vmatrix}a_1&a_2&a_3\\\\b_1&b_2&b_3\\\\c_1&c_2&c_3\\end{vmatrix}=9$，求 $\\begin{vmatrix}b_3&b_2&b_1\\\\a_3&a_2&a_1\\\\c_3&c_2&c_1\\end{vmatrix}+\\begin{vmatrix}3b_1&3b_2&3b_3\\\\2c_1&2c_2&2c_3\\\\a_1&a_2&a_3\\end{vmatrix}$。',
    answer: '$63$',
    hasImage: false,
  },
  {
    id: '17f48e52276',
    chapter: '空間向量',
    question: '求 $\\begin{vmatrix}554&627&327\\\\586&643&343\\\\711&704&404\\end{vmatrix}$。',
    answer: '$14400$',
    hasImage: false,
  },
  {
    id: '17f48e7bb6c',
    chapter: '空間向量',
    question:
      '若 $\\begin{vmatrix}a&b&c\\\\x&y&z\\\\p&q&r\\end{vmatrix}=5$，求 $\\begin{vmatrix}b+c&c+a&a+b\\\\y+z&z+x&x+y\\\\q+r&r+p&p+q\\end{vmatrix}$。',
    answer: '$10$',
    hasImage: false,
  },
  {
    id: '17f48e88e86',
    chapter: '空間向量',
    question:
      '利用 $\\begin{vmatrix}1&a&a^2\\\\1&b&b^2\\\\1&c&c^2\\end{vmatrix}=(a-b)(b-c)(c-a)$，求 $\\begin{vmatrix}1&99&99^2\\\\1&199&199^2\\\\1&399&399^2\\end{vmatrix}$。',
    answer: '$6000000$',
    hasImage: false,
  },
  {
    id: '17f48ea9117',
    chapter: '空間向量',
    question: '求空間中三向量 $(-2,-1,-5)$、$(1,0,-3)$、$(-1,2,-3)$ 所張成的平行六面體體積。',
    answer: '$28$',
    hasImage: false,
  },
  {
    id: '17f48eba267',
    chapter: '空間向量',
    question:
      '空間中 $A(1,-2,1)$、$B(2,-2,5)$、$C(2,0,1)$、$D(2,-1,0)$，求：\n(1) $\\xvector{AB}$、$\\xvector{AC}$、$\\xvector{AD}$ 所張成的平行六面體體積\n(2) $\\xvector{AB}$、$\\xvector{AC}$、$\\xvector{AD}$ 所張成的四面體體積',
    answer: '(1) $6$ (2) $1$',
    hasImage: false,
  },
  {
    id: '17f53ed89c1',
    chapter: '空間向量',
    question:
      '如圖有一個平行六面體，設 $O$ 為原點且 $A(-2,1,-1)$，$B(2,-1,0)$，$C(-3,6,6)$，已知 $\\overline{OA}:\\overline{OP}=1:1$，$\\overline{OB}:\\overline{BQ}=1:2$，$\\overline{OC}:\\overline{CR}=3:1$，求 $S$。',
    answer: '$(-2,7,6)$',
    hasImage: true,
  },
  {
    id: '17f53ef69af',
    chapter: '空間向量',
    question:
      '如圖，將一張正方形的紙 $ABCD$，沿著對角線 $\\overline{BD}$ 摺起，使得 $\\angle ABC=30\\du$，設二平面 $ABD$ 與 $BCD$ 的銳夾角 $\\theta$，求 $\\cos\\theta$。',
    answer: '$\\sqrt3-1$',
    hasImage: true,
  },
  {
    id: '17eea0da476',
    chapter: '空間向量',
    question: '空間中 $A(a,b,3)$，$B(2,1,1)$，$C(0,3,5)$ 三點共線，求數對 $(a,b)$。',
    answer: '$(1,2)$',
    hasImage: false,
  },
  {
    id: '17eea0e9220',
    chapter: '空間向量',
    question:
      '在空間中有 $A(2,1,3)$，$B(0,1,2)$，$C(-1,2,4)$ 三點，且 $\\vector a=4\\xvector{AB}-3\\xvector{CB}$，求 $\\vector a$。',
    answer: '$(-11,3,2)$',
    hasImage: false,
  },
  {
    id: '17eea0f2f0d',
    chapter: '空間向量',
    question: '設 $\\vector a=(1,2,-4)$，$\\vector b=(1,1,1)$，試求 $|\\vector a+3\\vector b|$。',
    answer: '$\\sqrt{42}$',
    hasImage: false,
  },
  {
    id: '17eea0fddc3',
    chapter: '空間向量',
    question:
      '設 $\\vector a=(1,-2,3)$，$\\vector b=(-1,1,-1)$，求 $|\\vector a+t\\vector b|$ 的最小值。',
    answer: '$\\sqrt2$',
    hasImage: false,
  },
  {
    id: '17eea109994',
    chapter: '空間向量',
    question: '設 $A(1,2,3)$，$B(4,0,-1)$，$C(2,-1,5)$ 為平行四邊形 $ABCD$ 之三個頂點，求 $D$。',
    answer: '$(-1,1,9)$',
    hasImage: false,
  },
  {
    id: '17eea11c75b',
    chapter: '空間向量',
    question:
      '設 $A(3,0,2)$，$B(18,10,-18)$ 為空間中兩點，$P$ 為直線 $AB$ 上一點，且 $\\overline{AP}:\\overline{PB}=3:2$，求 $P$。',
    answer: '$(12,6,-10)\\lor(48,30,-58)$',
    hasImage: false,
  },
  {
    id: '17d8d9b400b',
    chapter: '空間向量',
    question:
      '一正立方體如圖，$ABCD$ 在 $xy$ 平面上，$ADHE$ 在 $xz$ 平面上，其中 $A(2,0,0)$，且邊長為 $5$，求其他各頂點的坐標。',
    answer: '略',
    hasImage: true,
  },
  {
    id: '17d8da368d2',
    chapter: '空間向量',
    question:
      '坐標中有一個屋頂形狀的五面體，如圖，底面 $ABCD$ 為長方形，前後為兩個全等的等腰梯形，側面為兩個全等的等腰三角形。若 $A(0,0,0)$、$B(6,0,0)$、$C(6,10,0)$，$\\overline{EF}=8$，$\\overline{AE}=5$，試求 $E$、$F$ 坐標。',
    answer: '$(3,1,\\sqrt{15})$；$(3,9,\\sqrt{15})$',
    hasImage: true,
  },
  {
    id: '17d8da3dced',
    chapter: '空間向量',
    question:
      '如圖，有一邊長為 $1$ 的正立方體。今置頂點 $A$ 於空間坐標系中之原點 $(0,0,0)$，置頂點 $B$ 於正 $z$ 軸上，求頂點 $C$ 之 $z$ 坐標。',
    answer: '$\\frac{\\sqrt3}3$',
    hasImage: true,
  },
  {
    id: '17d8da46280',
    chapter: '空間向量',
    question:
      '空間坐標中有長方體 $ABCD-EFGH$，各邊長均與坐標軸平行，如圖。已知 $A$ 在原點 $(0,0,0)$ 且 $\\overline{AB}=5$，$\\overline{AD}=8$，$\\overline{AE}=4$，求 $D$、$F$、$G$ 坐標。',
    answer: '$(0,8,0)$；$(5,0,4)$；$(5,8,4)$',
    hasImage: true,
  },
  {
    id: '17d8da4f841',
    chapter: '空間向量',
    question:
      '如圖，一邊長為 $2$ 的正立方體，已知 $A(0,0,0)$，$C$ 在 $y$ 軸正向，$E$ 在 $z$ 軸正向，求 $G$、$F$、$D$ 坐標。',
    answer: '$(0,2\\sqrt2,2)$；$(\\sqrt2,\\sqrt2,2)$；$(-\\sqrt2,\\sqrt2,0)$',
    hasImage: true,
  },
  {
    id: '17d8da7b042',
    chapter: '空間向量',
    question:
      '如圖，空間坐標中有屋頂形狀的五面體，$A(0,0,0)$，$B$ 在 $x$ 軸上，$D$ 在 $y$ 軸上，底面長方形的長與寬為 $\\overline{AB}=4$，$\\overline{BC}=12$，屋樑 $\\overline{EF}=8$，$\\overline{AE}=6$，求 $E$、$F$ 坐標。',
    answer: '$(2,2,2\\sqrt7)$；$(2,10,2\\sqrt7)$',
    hasImage: true,
  },
  {
    id: '17d8da98a60',
    chapter: '空間向量',
    question:
      '點 $A(-2,1,3)$，求：\n(1) $A$ 到 $xy$ 平面的距離\n(2) $A$ 到 $x$ 軸的距離\n(3) $A$ 對 $yz$ 平面的投影點坐標\n(4) $A$ 對 $z$ 軸的投影點坐標\n(5) $A$ 對 $xz$ 平面的對稱點坐標',
    answer: '(1) $3$ (2) $\\sqrt{10}$ (3) $(0,1,3)$ (4) $(0,0,3)$ (5) $(-2,-1,3)$',
    hasImage: false,
  },
  {
    id: '17d7685be20',
    chapter: '空間向量',
    question:
      '若空間坐標的第一卦限中，$A$ 點對 $yz$ 平面的投影點為 $(0,3,2)$，且 $A$ 點到 $z$ 軸的距離為 $5$，求 $A$ 對 $xy$ 平面的對稱點坐標。',
    answer: '$(4,3,-2)$',
    hasImage: false,
  },
  {
    id: '17d8daad579',
    chapter: '空間向量',
    question:
      '點 $A(4,-2,-1)$，求：\n(1) $A$ 到 $xy$ 平面的距離\n(2) $A$ 到 $z$ 軸的距離\n(3) $A$ 對 $xy$ 平面的投影點坐標\n(4) $A$ 對 $y$ 軸的投影點坐標\n(5) $A$ 對 $xz$ 平面的對稱點坐標',
    answer: '(1) $1$ (2) $2\\sqrt5$ (3) $(4,-2,0)$ (4) $(0,-2,0)$ (5) $(4,2,-1)$',
    hasImage: false,
  },
  {
    id: '17d8dab4bf8',
    chapter: '空間向量',
    question:
      '空間中一點 $P(1,2,3)$ 對 $xy$ 平面作對稱點得 $Q$ 點，而 $Q$ 點再作 $x$ 軸對稱點得 $R$ 點，$R$ 點再沿著 $y$ 軸之正向移動 $4$ 單位得 $S$ 點，求 $S$ 點坐標。',
    answer: '$(1,2,3)$',
    hasImage: false,
  },
  {
    id: '17d8dabb4ea',
    chapter: '空間向量',
    question:
      '$P$ 點在空間坐標中的第一卦限，若 $P$ 到 $x$ 軸的距離為 $\\sqrt{26}$，$P$ 到 $y$ 軸的距離為 $\\sqrt{34}$，$P$ 到 $yz$ 平面的距離為 $3$，求 $P$ 坐標。',
    answer: '$(3,1,5)$',
    hasImage: false,
  },
  {
    id: '17d8dac1127',
    chapter: '空間向量',
    question:
      '$P$ 點在第一卦限，$P$ 到 $x$ 軸、$y$ 軸、$z$ 軸的距離為 $\\sqrt{13}$、$\\sqrt{53}$、$\\sqrt{58}$，求 $P$ 坐標。',
    answer: '$(7,3,2)$',
    hasImage: false,
  },
  {
    id: '17d8dacebbb',
    chapter: '空間向量',
    question:
      '空間中三點 $A(7,-6,3)$、$B(5,2,2)$、$C(4,k,k+1)$，試問：\n(1) 求 $\\overline{AB}$ (2) 若 $\\overline{BC}=\\sqrt{26}$，求 $k$',
    answer: '(1) $\\sqrt{69}$ (2) $-2\\lor5$',
    hasImage: false,
  },
  {
    id: '17d8dad1088',
    chapter: '空間向量',
    question:
      '已知空間中 $A(3,-3,2)$、$B(1,3,6)$，$C$ 是 $y$ 軸上一點，且 $\\overline{AC}=\\overline{BC}$，求 $C$ 點坐標。',
    answer: '$(0,2,0)$',
    hasImage: false,
  },
  {
    id: '17d8daf121a',
    chapter: '空間向量',
    question:
      '空間中三點 $A(2,1,-3)$、$B(4,-1,-2)$ 與 $C(4,-8,11)$，試問：(1) 求 $\\overline{AB}$\n(2) $\\triangle{ABC}$ 為何種三角形？(銳角、直角、鈍角)',
    answer: '(1) $3$ (2) 鈍角',
    hasImage: false,
  },
  {
    id: '17d8dafa57b',
    chapter: '空間向量',
    question:
      '已知 $A(7,6,-3)$、$B(3,1,-2)$，若：\n(1) $C$ 在 $z$ 軸上且 $\\overline{AC}=\\overline{BC}$，求 $C$ 坐標\n(2) $D$ 在 $x$ 軸上且 $\\overline{AD}=9$，求 $D$ 坐標',
    answer: '(1) $(0,0,-40)$ (2) $(1,0,0)\\lor(13,0,0)$',
    hasImage: false,
  },
  {
    id: '17d8db033c2',
    chapter: '空間向量',
    question:
      '空間中三點 $A(1,-3,8)$、$B(-7,5,4)$ 與 $C(3,4,-6)$，求：\n(1) $\\overline{AB}$ 中點\n(2) 若 $C$ 為 $\\overline{AD}$ 的中點，求 $D$ 坐標\n(3) $\\triangle ABC$ 的重心坐標\n(4) 若 $ABCD$ 為平行四邊形，求 $D$ 坐標',
    answer: '(1) $(-3,1,6)$ (2) $(5,11,-20)$ (3) $(-1,2,2)$ (4) $(11,-4,-2)$',
    hasImage: false,
  },
  {
    id: '17d8db10cf6',
    chapter: '空間向量',
    question:
      '若空間中三點 $A(p,3,9)$、$B(1,q,-2)$、$C(6,-5,8)$ 所成三角形的重心坐標為 $(-4,7,r)$，求序組 $(p,q,r)$。',
    answer: '$(-19,23,5)$',
    hasImage: false,
  },
  {
    id: '17d8db124a5',
    chapter: '空間向量',
    question: '空間中正立方體的八個頂點，共可連成幾種不同的非零向量？',
    answer: '$26$',
    hasImage: false,
  },
  {
    id: '17d8db1f85e',
    chapter: '空間向量',
    question:
      '空間中兩點 $A(1,2,7)$、$B(4,-3,5)$：\n(1) 求 $\\xvector{AB}$\n(2) 若 $\\xvector{AC}=(-7,11,6)$，求 $C$ 點坐標',
    answer: '$(3,-5,-2)$；$(-6,13,13)$',
    hasImage: false,
  },
  {
    id: '17d86819300',
    chapter: '空間向量',
    question: '空間中有四面體 $ABCD$，共可決定幾種不同的非零向量？',
    answer: '$12$',
    hasImage: false,
  },
  {
    id: '17d8db320bf',
    chapter: '空間向量',
    question:
      '(1) 空間坐標中，$A(1,2,4)$、$B(5,-7,6)$，求 $\\xvector{AB}$\n(2) 空間中 $\\xvector{AB}=(4,-1,3)$，若 $B$ 坐標為 $(5,11,6)$，求 $A$ 坐標',
    answer: '(1) $(4,-9,2)$ (2) $(1,12,3)$',
    hasImage: false,
  },
  {
    id: '17d8db3de08',
    chapter: '空間向量',
    question:
      '平行六面體 $ABCD-EFGH$ 如圖，每個面都是平行四邊形，試問：\n(1) 化簡 $\\xvector{AB}+\\xvector{AD}+\\xvector{AE}$\n(2) 若 $\\xvector{AC}+\\xvector{AF}+\\xvector{AH}=k\\xvector{AG}$，求 $k$',
    answer: '(1) $\\xvector{AG}$ (2) $2$',
    hasImage: true,
  },
  {
    id: '17d8db4365d',
    chapter: '空間向量',
    question:
      '$A(3,-2,5)$、$B(6,7,-1)$、$C(1,2,4)$，$O$ 為原點，求：\n(1) $\\xvector{OA}+\\xvector{OB}$ (2) $3\\xvector{AB}-4\\xvector{AC}$。 ',
    answer: '(1) $(9,5,4)$ (2) $(17,11,-14)$',
    hasImage: false,
  },
  {
    id: '17d8db4ac9b',
    chapter: '空間向量',
    question:
      '在空間坐標中，$xy$ 平面為一面鏡子，有一道光束由 $A(3,-2,4)$ 射向 $xy$ 平面上的點 $B(5,1,0)$，經反射到達 $C$ 點，若 $5\\overline{AB}=2\\overline{BC}$，求 $C$ 坐標。',
    answer: '$(10,\\frac{17}2,10)$',
    hasImage: false,
  },
  {
    id: '17d8db5cf4b',
    chapter: '空間向量',
    question:
      '空間中，已知向量 $A(1,13,2)$、$B(5,0,10)$、$C(-1,3,4)$，$O$ 為原點，試求：\n(1) $\\xvector{OA}+\\xvector{OB}+\\xvector{OC}$\n(2) $\\xvector{AD}+\\xvector{DE}+\\xvector{EB}$\n(3) $3\\xvector{AB}+2\\xvector{CB}$\n(4) 若 $ABCD$ 為平行四邊形，求 $D$ 坐標。',
    answer: '(1) $(5,16,16)$ (2) $(4,-13,8)$ (3) $(24,-45,36)$ (4) $(-5,16,-4)$',
    hasImage: false,
  },
  {
    id: '17d8db669b3',
    chapter: '空間向量',
    question:
      '長方體 $ABCD-EFGH$ 如圖，化簡：\n(1) $\\xvector{AB}+\\xvector{AD}$\n(2) $\\xvector{AB}+\\xvector{AH}$\n(3) $\\xvector{AB}-\\xvector{AH}$',
    answer: '(1) $\\xvector{AC}$ (2) $\\xvector{AG}$ (3) $\\xvector{HB}$',
    hasImage: true,
  },
  {
    id: '17d869ce993',
    chapter: '空間向量',
    question:
      '空間坐標中，$yz$ 平面為一面鏡子，有一道光線從 $A(2,3,4)$，射向鏡面上的點 $B(0,1,2)$，反射後通過 $C$ 點。若 $\\overline{CB}=3\\overline{AB}$，求 $C$ 坐標。',
    answer: '$(6,-5,-4)$',
    hasImage: false,
  },
  {
    id: '17d860c897a',
    chapter: '空間向量',
    question: '若兩向量 $(3x,x+1,2y-1)$ 與 $(4,2,y+5)$ 互相平行，求數對 $(x,y)$。',
    answer: '$(2,17)$',
    hasImage: false,
  },
  {
    id: '17d860cf363',
    chapter: '空間向量',
    question:
      '$A(3,2,4)$、$B(-4,8,3)$，在 $xy$ 平面上找一點 $C$ 使 $A$、$B$、$C$ 共線，求 $C$ 坐標。',
    answer: '$(-25,26,0)$',
    hasImage: false,
  },
  {
    id: '17d860d2d92',
    chapter: '空間向量',
    question: '設 $A(a,-3,2)$、$B(2,-2,b)$、$C(6,-1,4)$ 三點共線，求數對 $(a,b)$。',
    answer: '$(-2,3)$',
    hasImage: false,
  },
  {
    id: '17d860e139e',
    chapter: '空間向量',
    question:
      '$A(2,1,4)$、$B(11,7,4)$，在 $yz$ 平面上找一點 $C$，使 $A$、$B$、$C$ 共線，求 $C$ 坐標。',
    answer: '$(0,-\\frac13,4)$',
    hasImage: false,
  },
  {
    id: '17d860ebd31',
    chapter: '空間向量',
    question:
      '空間中，$\\vector a=(1,2,-1)$，$\\vector b=(-3,7,6)$，$\\vector c=(0,1,1)$，若 $x\\vector a+y\\vector b+z\\vector c=(-1,8,-1)$，求序組 $(x,y,z)$。',
    answer: '$(2,1,-3)$',
    hasImage: false,
  },
  {
    id: '17d860fde8a',
    chapter: '空間向量',
    question:
      '空間中有四面體 $ABCD$，若 $(x+2y)\\xvector{AB}+(y+z)\\xvector{AC}$$+(z+4)\\xvector{AD}=\\vector0$，求序組 $(x,y,z)$。',
    answer: '$(-8,4,-4)$',
    hasImage: false,
  },
  {
    id: '17d8610f0eb',
    chapter: '空間向量',
    question:
      '空間中 $\\vector a=(1,2,4)$，$\\vector b=(-1,1,1)$，$\\vector c=(2,-1,1)$，若 $x\\vector a+y\\vector b+z\\vector c=(-3,5,1)$，求序組 $(x,y,z)$。',
    answer: '$(2,-3,-4)$',
    hasImage: false,
  },
  {
    id: '17d8611bccf',
    chapter: '空間向量',
    question:
      '空間中平行六面體 $ABCD-EFGH$，若 $(x+y)\\xvector{AB}+(y+z)\\xvector{AC}$$+(x+z+6)\\xvector{AF}=\\vector0$，求序組 $(x,y,z)$。',
    answer: '$(-3,3,-3)$',
    hasImage: false,
  },
  {
    id: '17d86143148',
    chapter: '空間向量',
    question:
      '設 $\\vector a=(2,3,-6)$，$\\vector b=(-2,2,1)$，$\\vector c=\\vector a+t\\vector b$，其中 $t\\in\\mathbb R$，則：\n(1) $|\\vector c|$ 的最小值及此時的 $t$\n(2) 若 $\\vector c$ 平分 $\\vector a$、$\\vector b$ 的夾角，求 $t$',
    answer: '(1) $\\frac{5\\sqrt{17}}3$；$\\frac49$ (2) $\\frac73$',
    hasImage: false,
  },
  {
    id: '17d861698a2',
    chapter: '空間向量',
    question:
      '設 $\\vector a=(2,1,2)$，$\\vector b=(3,1,-1)$，$\\vector c=t\\vector a+\\vector b$，其中 $t\\in\\mathbb R$，則：\n(1) $|\\vector c|$ 的最小值及此時的 $t$\n(2) 若 $\\vector c$ 與 $yz$ 平面平行， 求 $t$\n(3) 若 $\\vector c$ 平分 $\\vector a$、$\\vector b$ 的夾角，求 $t$',
    answer: '(1) $\\frac{\\sqrt{74}}3$；$-\\frac59$ (2) $-\\frac32$ (3) $\\frac{\\sqrt{11}}3$\n',
    hasImage: false,
  },
  {
    id: '17d8617cca5',
    chapter: '空間向量',
    question:
      '空間中四面體 $ABCD$，已知 $\\overline{AB}=6$，$\\overline{AC}=4$，$\\overline{AD}=7$，$\\overline{CD}=5$，$\\angle BAC=60\\du$，求 $\\xvector{AB}\\cdot\\xvector{AC}$ 及 $\\xvector{AC}\\cdot\\xvector{AD}$。',
    answer: '$12$；$20$',
    hasImage: true,
  },
  {
    id: '17d8618bd10',
    chapter: '空間向量',
    question:
      '正四角錐 $P-ABCD$ 的底面為正方形 $ABCD$，側面為四個全等的等腰三角形，如圖，已知 $\\overline{PA}=7$，$\\overline{AB}=4$，求 $\\xvector{AP}·\\xvector{AB}$ 及 $\\xvector{AP}·\\xvector{AC}$。',
    answer: '$8$；$16$',
    hasImage: true,
  },
  {
    id: '17d861938ba',
    chapter: '空間向量',
    question:
      '空間向量 $\\vector a=(1,5,-2)$，$\\vector b=(6,3,7)$，求 $\\vector a\\cdot\\vector b$。',
    answer: '$7$',
    hasImage: false,
  },
  {
    id: '17d861a2d65',
    chapter: '空間向量',
    question:
      '三角錐 $A-BCD$，$\\overline{AB}=\\overline{AC}=2$，$\\angle BAC=45\\du$，求 $\\xvector{AB}\\cdot\\xvector{AC}$ 及 $\\xvector{BA}\\cdot\\xvector{BC}$。',
    answer: '$2\\sqrt2$；$4-2\\sqrt2$',
    hasImage: false,
  },
  {
    id: '17d861b678c',
    chapter: '空間向量',
    question:
      '四角錐 $P-ABCD$ 的底面為邊長 $3$ 的正方形 $ABCD$，$\\overline{PA}=4$ 且 $\\overline{PA}$ 與底面垂直，求 $\\xvector{PB}\\cdot\\xvector{PD}$ 及 $\\xvector{PA}\\cdot\\xvector{PC}$。',
    answer: '$16$；$16$',
    hasImage: true,
  },
  {
    id: '17d861bdb05',
    chapter: '空間向量',
    question:
      '空間中三點 $A(5,7,3)$、$B(1,-1,2)$、$C(4,9,8)$，求 $\\xvector{AB}\\cdot\\xvector{AC}$。',
    answer: '$-17$',
    hasImage: false,
  },
  {
    id: '17d861c45e7',
    chapter: '空間向量',
    question:
      '空間中三點 $A(6,1,2)$、$B(3,k,-1)$、$C(5,2,k)$，已知 $\\xvector{AB}\\cdot\\xvector{AC}=16$，求 $\\xvector{BA}\\cdot\\xvector{BC}$。',
    answer: '$27$',
    hasImage: false,
  },
  {
    id: '17d861d2bc3',
    chapter: '空間向量',
    question:
      '長方體 $ABCD-EFGH$，長、寬、高分別為 $\\overline{AB}=6$、$\\overline{AD}=4$、$\\overline{AE}=2$，若 $M$ 為 $\\overline{DH}$ 中點，$N$ 為 $\\overline{FG}$ 中點，求 $\\xvector{AN}\\cdot\\xvector{BM}$。',
    answer: '$-26$',
    hasImage: false,
  },
  {
    id: '17d861d8aa3',
    chapter: '空間向量',
    question:
      '空間中三點 $A(1,2,4)$、$B(3,1,x)$、$C(2,x,7)$，若  $\\xvector{AB}\\cdot\\xvector{AC}=10$，求 $x$。',
    answer: '$9$',
    hasImage: false,
  },
  {
    id: '17d861e1578',
    chapter: '空間向量',
    question:
      '長方體 $ABCD-EFGH$，長、寬、高分別為 $\\overline{AB}=8$、$\\overline{AD}=6$，$\\overline{AE}=4$，若 $M$ 為 $\\overline{GC}$ 中點，$N$ 為 $\\overline{ED}$ 中點，求 $\\xvector{FD}\\cdot\\xvector{MN}$。',
    answer: '$46$',
    hasImage: false,
  },
  {
    id: '17dc12d9e62',
    chapter: '空間向量',
    question:
      '三角錐 $A-BCD$ 的底面為正三角形 $BCD$，若 $\\overline{AB}=\\overline{AC}=\\overline{AD}$，求 $\\xvector{AB}⋅\\xvector{AC}$。\n',
    answer: '$0$',
    hasImage: false,
  },
  {
    id: '17dc12e0853',
    chapter: '空間向量',
    question:
      '正四面體 $ABCD$ 的邊長為 $6$，$P$ 在 $\\overline{BC}$ 上且 $\\overline{PB}=2$，$Q$ 為 $\\overline{CD}$ 中點，求 $\\xvector{AP}\\cdot\\xvector{AQ}$',
    answer: '$21$',
    hasImage: true,
  },
  {
    id: '17dc12e5589',
    chapter: '空間向量',
    question: '正四面體 $PABC$，稜長為 $10$，求兩向量的內積 $\\xvector{AP}\\cdot\\xvector{BC}$。',
    answer: '$0$',
    hasImage: false,
  },
  {
    id: '17dc12ef52b',
    chapter: '空間向量',
    question:
      '正四面體 $ABCD$，$\\overline{AB}=\\overline{AC}=\\overline{AD}=10$，$\\angle BAC=60\\du$，$\\angle BAD=90\\du$，$P$ 點在 $\\overline{CD}$ 上且 $\\overline{PC}:\\overline{PD}=2:3$，求 $\\xvector{AB}\\cdot\\xvector{AP}$',
    answer: '$30$',
    hasImage: true,
  },
  {
    id: '17dc12f574b',
    chapter: '空間向量',
    question:
      '空間中 $\\vector a=(x,-9,2)$，$\\vector b=(3,x+4,2x)$，若 $\\vector a\\perp\\vector b$，求 $x$。',
    answer: '$-18$',
    hasImage: false,
  },
  {
    id: '17dc130531c',
    chapter: '空間向量',
    question:
      '(1) 空間向量 $\\vector a=(1,2,k)$，$\\vector b=(k,1,2)$，若 $\\vector a\\perp\\vector b$，求 $k$\n(2) 空間向量 $\\vector p=(k,k,0)$，$\\vector q=(1,0,k)$，若 $(\\vector p-\\vector q)$ 與 $(\\vector p+2\\vector q)$ 垂直，求 $k$',
    answer: '(1) $-\\frac23$ (2) $2$',
    hasImage: false,
  },
  {
    id: '17dc130a627',
    chapter: '空間向量',
    question:
      '空間中非零向量 $\\vector p=(a,a,0)$ 與 $\\vector q=(1,0,a)$，若 $\\vector p$ 與 $\\vector q$ 夾角為 $120\\du$，求 $a$。',
    answer: '$-1$',
    hasImage: false,
  },
  {
    id: '17dc1318cbc',
    chapter: '空間向量',
    question:
      '如圖為一正立方體，被一平面截出一個四邊行 $ABCD$，其中 $B$、$D$ 分別為稜的中點，且 $\\overline{EA}:\\overline{AF}=1:2$，求 $\\cos\\angle DAB$。',
    answer: '$\\frac1{37}$',
    hasImage: true,
  },
  {
    id: '17dc1320c97',
    chapter: '空間向量',
    question:
      '已知空間向量 $\\vector p=(a,1,-2)$，$\\vector q=(2,a,-1)$，若 $\\vector p$ 與 $\\vector q$ 的夾角為 $120\\du$，求 $a$。',
    answer: '$-3$',
    hasImage: false,
  },
  {
    id: '17dc132ad64',
    chapter: '空間向量',
    question:
      '如圖為一正立方體，若 $M$ 在線段 $\\overline{AB}$ 上，$\\overline{BM}=2\\overline{AM}$，$N$ 為線段 $\\overline{BC}$ 之中點，求 $\\cos\\angle MON$。',
    answer: '$\\frac{4\\sqrt{10}}{15}$',
    hasImage: true,
  },
  {
    id: '17dc133766f',
    chapter: '空間向量',
    question:
      '長方體 $ABCD-EFGH$，邊長 $\\overline{AB}=9$，$\\overline{AD}=5$，$\\overline{AE}=7$，在 $\\overline{EF}$ 上取一點 $P$ 使 $\\overline{PF}=4$，在 $\\overline{FG}$ 上取一點 $Q$ 使 $\\overline{FQ}=3$，在 $\\overline{BF}$ 上取一點 $R$ 使 $\\overline{FR}=5$，若用刀切出平面 $PRQ$，求 $\\triangle PQR$ 面積。',
    answer: '$\\frac{\\sqrt{769}}2$',
    hasImage: true,
  },
  {
    id: '17dc13452eb',
    chapter: '空間向量',
    question: '空間中 $A(1,2,7)$、$B(2,1,5)$、$C(3,5,6)$，求 $\\triangle ABC$ 面積。',
    answer: '$\\frac{\\sqrt{83}}2$',
    hasImage: false,
  },
  {
    id: '17dc1355c13',
    chapter: '空間向量',
    question:
      '空間中三點 $A(5,1,-3)$、$B(11,4,6)$、$C(7,3,-2)$，求：\n(1) $\\xvector{AB}$ 在 $\\xvector{AC}$ 上的正射影\n(2) 點 $B$ 到 $\\overleftrightarrow{AC}$ 的距離\n(3) 點 $B$ 到 $\\overleftrightarrow{AC}$ 的投影點坐標',
    answer: '(1) $(6,6,3)$ (2) $3\\sqrt5$ (3)$(11,7,0)$',
    hasImage: false,
  },
  {
    id: '17dc13670d7',
    chapter: '空間向量',
    question:
      '空間向量 $\\vector a=(1,2,1)$，直線 $L$ 與 $\\vector a$ 平行，平面 $E$ 與直線 $L$ 垂直，求向量 $\\vector p=(3,1,4)$ 在平面 $E$ 上的正射影。',
    answer: '$(\\frac32,-2,\\frac52)$',
    hasImage: false,
  },
  {
    id: '17dc136e00d',
    chapter: '空間向量',
    question:
      '空間中三點 $P(10,-10,7)$、$Q(2,0,3)$、$R(4,-4,7)$，求 $P$ 到 $\\overleftrightarrow{QR}$ 的距離。',
    answer: '$6$',
    hasImage: false,
  },
  {
    id: '17da3366659',
    chapter: '空間向量',
    question: '空間中，向量 $(5,p,p+2)$ 在另一向量 $(2,-1,4)$ 上的正射影為 $(-4,2,-8)$，求 $p$',
    answer: '$-20$',
    hasImage: false,
  },
  {
    id: '17da52a1a5e',
    chapter: '空間向量',
    question:
      '$x,y,z\\in\\mathbb R$，若 $3x-y+2z=5$，求 $x^2+2y^2+4z^2$ 的最小值及此時的 $(x,y,z)$',
    answer: '$\\frac{50}{21}$；$(\\frac{10}7,-\\frac5{21},\\frac5{21})$',
    hasImage: false,
  },
  {
    id: '17da52c23e5',
    chapter: '空間向量',
    question:
      '已知實數 $x$、$y$、$z$ 滿足 $x^2+y^2+z^2+4x-2y+6z-11=0$，試求 $x+y-z$ 的最大值及最小值。',
    answer: '$2+5\\sqrt3$；$2-5\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17da52e0934',
    chapter: '空間向量',
    question: '設 $a$、$b$、$c$ 均為正數，$2a+9b+3c=4$，求 $\\frac2a+\\frac1b+\\frac3c$ 的最小值。',
    answer: '$16$',
    hasImage: false,
  },
  {
    id: '17da52e775a',
    chapter: '空間向量',
    question: '實數 $x$、$y$、$z$，若 $2x+y+z=5$，求 $x^2+y^2+z^2-2x+4y+6$ 的最小值。',
    answer: '$\\frac{31}6$',
    hasImage: false,
  },
  {
    id: '17da52f38f6',
    chapter: '空間向量',
    question:
      '設 $x$、$y$、$z$ 均為實數，若 $x^2+y^2+z^2+4x-2y+10z-6=0$，求 $x+2y-z$ 的最大值及最小值。',
    answer: '$5+6\\sqrt6$；$5-6\\sqrt6$',
    hasImage: false,
  },
  {
    id: '17da5305ab0',
    chapter: '空間向量',
    question:
      '設 $a$、$b$、$c$ 均為正實數，若 $a+b+c=2$，試求 $\\frac4a+\\frac1b+\\frac9c$ 的最小值、$\\sqrt a+\\sqrt b+\\sqrt c$ 的最大值。',
    answer: '$18$；$\\sqrt6$',
    hasImage: false,
  },
  {
    id: '17da54bbd8f',
    chapter: '空間向量',
    question:
      '空間向量 $\\vector a=(1,2,3)$，$\\vector b=(5,7,6)$，求 $\\vector a\\cross\\vector b$、$\\vector b\\cross\\vector a$。',
    answer: '$(-9,9,-3)$；$(9,-9,3)$',
    hasImage: false,
  },
  {
    id: '17da54b3071',
    chapter: '空間向量',
    question:
      '若 $\\vector a\\cross\\vector b=(3,-2,5)$，$\\vector c\\cross\\vector a=(7,1,4)$，求 $3\\vector a\\cross(4\\vector a+\\vector b-2\\vector c)$。',
    answer: '$(51,0,39)$',
    hasImage: false,
  },
  {
    id: '17da54d25cf',
    chapter: '空間向量',
    question:
      '(1) 求 $(1,3,-2)\\cross(3,2,1)$\n(2) $\\vector a=(1,2,3)$，$\\vector b=(3,1,2)$，$\\vector c=(2,1,3)$，求 $(\\vector a\\cross\\vector b)\\cross\\vector c$ 及 $\\vector a\\cross(\\vector b\\cross\\vector c)$',
    answer: '(1) $(7,-7,-7)$ (2) $(26,-13,-13)$；$(17,2,-7)$',
    hasImage: false,
  },
  {
    id: '17da54e60a1',
    chapter: '空間向量',
    question:
      '(1) 已知 $\\vector a\\cross\\vector p=(3,1,2)$，$\\vector a\\cross\\vector q=(5,1,3)$，求 $\\vector a\\cross(3\\vector p+2\\vector q)$。\n(2) 已知 $\\vector a\\cross(3\\vector p+2\\vector q)=(7,19,-2)$，且 $\\vector a\\cross\\vector q=(-1,2,5)$，求 $\\vector p\\cross\\vector a$。',
    answer: '(1) $(19,5,12)$ (2) $(-3,-5,4)$',
    hasImage: false,
  },
  {
    id: '17da54f3618',
    chapter: '空間向量',
    question:
      '空間坐標中，已知 $\\vector a=(1,2,-1)$，$\\vector b=(3,1,1)$，若 $\\vector p\\perp\\vector a$ 且 $\\vector p\\perp\\vector b$，$|\\vector p|=10$，試求 $\\vector p$。',
    answer: '$\\pm(3\\sqrt2,-4\\sqrt2,-5\\sqrt2)$',
    hasImage: false,
  },
  {
    id: '17da550894a',
    chapter: '空間向量',
    question:
      '已知坐標空間中，$\\vector a=(3,1,2)$，$\\vector b=(5,4,0)$，若 $\\vector p\\perp\\vector a$，$\\vector p\\perp\\vector b$ 且 $|\\vector p|=\\sqrt3$，試求 $\\vector p$。',
    answer: '$\\pm(\\frac{-8}{\\sqrt{71}},\\frac{10}{\\sqrt{71}},\\frac7{\\sqrt{71}})$',
    hasImage: false,
  },
  {
    id: '17da5511f69',
    chapter: '空間向量',
    question:
      '空間中三點 $A(7,1,-2)$、$B(12,8,7)$、$C(13,10,8)$，請分別利用內積及外積來算 $\\triangle ABC$ 的面積。',
    answer: '$\\frac{\\sqrt{146}}2$',
    hasImage: false,
  },
  {
    id: '17dc0f6c9fe',
    chapter: '空間向量',
    question:
      '已知空間中三點 $A(1,2,1)$、$B(0,1,3)$、$C(k,k,k)$，若 $\\triangle ABC$ 的面積為 $\\frac{\\sqrt5}2$，求 $k$',
    answer: '$\\frac53\\lor1$',
    hasImage: false,
  },
  {
    id: '17dc0f77a3b',
    chapter: '空間向量',
    question:
      '空間中三點 $A(3,-2,4)$、$B(1,2,7)$、$C(-3,6,5)$，求 $\\triangle ABC$ 面積及 $A$ 到 $\\overleftrightarrow{BC}$ 的距離。',
    answer: '$6\\sqrt5$；$2\\sqrt5$',
    hasImage: false,
  },
  {
    id: '17dc0f86dd0',
    chapter: '空間向量',
    question:
      '空間中三點 $A(3,1,0)$、$B(0,2,-1)$、$C(1,k,k)$，若 $\\triangle ABC$ 的面積為 $\\frac{\\sqrt{30}}2$，求 $k$。',
    answer: '$0\\lor1$',
    hasImage: false,
  },
  {
    id: '17dc0f91c28',
    chapter: '空間向量',
    question:
      '空間中三向量 $\\vector a=(-1,2,0)$，$\\vector b=(1,4,4)$，$\\vector c=(-2,2,3)$，求：\n(1) 共起點所張成的平行六面體體積\n(2) 共起點所張成的四面體體積',
    answer: '(1) $26$ (2) $\\frac{13}3$',
    hasImage: false,
  },
  {
    id: '17dc0f9a45f',
    chapter: '空間向量',
    question:
      '空間坐標中四面體 $ABCD$ 的頂點為 $A(1,1,2)$、$B(3,4,1)$、$C(2,1,5)$、$D(6,1,7)$，求此四面體體積及頂點 $D$ 到平面 $ABC$ 的最近距離。',
    answer: '$5$；$\\frac{30}{\\sqrt{139}}$',
    hasImage: false,
  },
  {
    id: '17da3ced345',
    chapter: '空間向量',
    question: '試求 $\\begin{vmatrix}4&2&1\\\\5&3&2\\\\6&1&3\\end{vmatrix}$。',
    answer: '$9$',
    hasImage: false,
  },
  {
    id: '17dc0fa4b81',
    chapter: '空間向量',
    question: '試求 $\\begin{vmatrix}-3&6&5\\\\1&\\sqrt2&4\\\\-2&7&1\\end{vmatrix}$。',
    answer: '$65+7\\sqrt2$',
    hasImage: false,
  },
  {
    id: '17dc0fadee3',
    chapter: '空間向量',
    question: '試求 $\\begin{vmatrix}554&427&327\\\\586&443&343\\\\711&504&404\\end{vmatrix}$。',
    answer: '$4800$',
    hasImage: false,
  },
  {
    id: '17dc0fb90a2',
    chapter: '空間向量',
    question:
      '設 $\\begin{vmatrix}x_1&a_1&p_1\\\\x_2&a_2&p_2\\\\x_3&a_3&p_3\\end{vmatrix}=4$，$\\begin{vmatrix}x_1&b_1&p_1\\\\x_2&b_2&p_2\\\\x_3&b_3&p_3\\end{vmatrix}=5$，$\\begin{vmatrix}y_1&a_1&p_1\\\\y_2&a_2&p_2\\\\y_3&a_3&p_3\\end{vmatrix}=2$，$\\begin{vmatrix}y_1&b_1&p_1\\\\y_2&b_2&p_2\\\\y_3&b_3&p_3\\end{vmatrix}=7$，試求 $\\begin{vmatrix}x_1+2y_1&3a_1-b_1&p_1\\\\x_2+2y_2&3a_2-b_2&p_2\\\\x_3+2y_3&3a_3-b_3&p_3\\end{vmatrix}$。',
    answer: '$5$',
    hasImage: false,
  },
  {
    id: '17dc0fc45ae',
    chapter: '空間向量',
    question:
      '求：(1) $\\begin{vmatrix}150&151&152\\\\26&24&25\\\\53&51&52\\end{vmatrix}$ (2) $\\begin{vmatrix}1^2&2^2&3^2\\\\2^2&3^2&4^2\\\\3^2&4^2&5^2\\end{vmatrix}$',
    answer: '(1) $87$ (2) $-8$',
    hasImage: false,
  },
  {
    id: '17dc11d0dd4',
    chapter: '空間向量',
    question:
      '設 $\\begin{vmatrix}a_1&b_1&c_1\\\\a_2&b_2&c_2\\\\a_3&b_3&c_3\\end{vmatrix}=5$，$\\begin{vmatrix}a_1&b_1&d_1\\\\a_2&b_2&d_2\\\\a_3&b_3&d_3\\end{vmatrix}=3$，$\\begin{vmatrix}a_1&c_1&d_1\\\\a_2&c_2&d_2\\\\a_3&c_3&d_3\\end{vmatrix}=7$，$\\begin{vmatrix}b_1&c_1&d_1\\\\b_2&c_2&d_2\\\\b_3&c_3&d_3\\end{vmatrix}=2$，試求 $\\begin{vmatrix}2a_1+3b_1&2b_1+c_1&4b_1-3d_1\\\\2a_2+3b_2&2b_2+c_2&4b_2-3d_2\\\\2a_3+3b_3&2b_3+c_3&4b_3-3d_3\\end{vmatrix}$。',
    answer: '$-136$',
    hasImage: false,
  },
  {
    id: '17dc11da321',
    chapter: '空間向量',
    question:
      '空間中四點 $A(1,2,-1)$、$B(5,4,7)$、$C(3,-2,-6)$、$D(0,2,-5)$，求 $\\xvector{AB}$、$\\xvector{AC}$、$\\xvector{AD}$ 所張成的平行六面體體積。',
    answer: '$58$',
    hasImage: false,
  },
  {
    id: '17dc11e120c',
    chapter: '空間向量',
    question:
      '空間中四點 $A(2,1,k)$、$B(4,0,k+3)$、$C(3,5,2k)$、$D(4,-1,3k)$，若四面體 $ABCD$ 的體積為 $15$，求 $k$。',
    answer: '$6\\lor-3$',
    hasImage: false,
  },
  {
    id: '17dc11e7ed7',
    chapter: '空間向量',
    question:
      '圖為長、寬、高各為 $6$、$4$、$4$ 的長方體，其中有四點 $A$、$B$、$C$、$D$ 形成一四面體 $ABCD$，求此四面體的體積。',
    answer: '$22$',
    hasImage: true,
  },
  {
    id: '17dc11ee737',
    chapter: '空間向量',
    question:
      '已知空間中四點 $A(1,0,-1)$、$B(3,k,5)$、$C(6,k+1,-1)$、$D(4,3,-1)$ 所成四面體體積為 $3$，求 $k$。',
    answer: '$3\\lor5$',
    hasImage: false,
  },
  {
    id: '17cebf2352a',
    chapter: '空間向量',
    question:
      '圖為一正立方體，若 $M$ 在線段 $\\overline{AB}$ 上，$\\overline{BM}=2\\overline{AM}$，$N$ 為線段 $\\overline{BC}$ 之中點，求 $\\cos\\angle MON$。',
    answer: '$\\frac{4\\sqrt{10}}{15}$',
    hasImage: true,
  },
  {
    id: '17cebf31bef',
    chapter: '空間向量',
    question:
      '空間中平行六面體 $ABCD-EHGH$，由 $\\xvector{AB}$、$\\xvector{AD}$、$\\xvector{AE}$ 三個向量所張成，如圖，已知 $\\overline{AB}=3$，$\\overline{AD}=4$，$\\overline{AE}=6$，且 $\\xvector{AB}$、$\\xvector{AD}$、$\\xvector{AE}$ 兩兩的夾角為 $60\\du$，求 $\\overline{AG}$。',
    answer: '$\\sqrt{115}$',
    hasImage: true,
  },
  {
    id: '17cebf3cc3a',
    chapter: '空間向量',
    question:
      '設 $\\vector a=(k,k,k)$，$k\\ne0$，$\\vector b=(3,1,-2)$\n(1) 若 $\\vector a$ 在 $\\vector b$ 的正射影為 $-\\vector b$，求 $k$\n(2) 若 $\\vector b$ 在 $\\vector a$ 的正射影為 $2\\vector a$，求 $k$',
    answer: '(1) -7 (2) $\\frac13$',
    hasImage: false,
  },
  {
    id: '17cebf48a19',
    chapter: '空間向量',
    question: '三角形邊長為 4、5、7，求內部一動點 $P$ 到三邊距離平方和的最小值。',
    answer: '$\\frac{64}{15}$',
    hasImage: false,
  },
  {
    id: '17cebf5b541',
    chapter: '空間向量',
    question:
      '坐標空間中有 $\\triangle PQR$，已知 $\\xvector{PQ}=(-5,3,1)$，$\\xvector{PR}=(x,2,y)$，且 $\\xvector{PQ}\\times\\xvector{PR}=(1,3,z)$，求序組 $(x,y,z)$ 及 $\\triangle PQR$ 的面積。',
    answer: '(-2, 1, -4)；$\\frac{\\sqrt{26}}2$\n',
    hasImage: false,
  },
  {
    id: '17cebf68693',
    chapter: '空間向量',
    question:
      '已知三角形頂點 $A(1,1,1)$、$B(2,2,2)$、$C(3,2t,t)$，當 $\\triangle ABC$ 面積為最小時，求 $t$ 值和此最小面積。',
    answer: '$\\frac32$；$\\frac{3\\sqrt{2}}4$\n',
    hasImage: false,
  },
  {
    id: '17cebf7ee13',
    chapter: '空間向量',
    question:
      '空間中 $\\vector a=(1,2,2)$、$\\vector b=(4,0,3)$ 與 $\\vector a\\times\\vector b$ 共起點張成平行六面體，求此平行六面體的表面積及體積。',
    answer: '$90\\sqrt4$；125',
    hasImage: false,
  },
  {
    id: '17cebf90ad3',
    chapter: '空間向量',
    question:
      '坐標空間中有一個直立三角柱 $ABC-DEF$ 位於第一卦限，已知 $A(3,1,2)$、$B(3,4,1)$、$C(1,1,3)$，$\\overline{AD}=\\overline{BE}=\\overline{CF}=14$，且 $\\overline{AD}$、$\\overline{BE}$、$\\overline{CF}$ 均與平面 $ABC$ 垂直，請問下列各選項哪些為真？\n(1) $\\xvector{AD}=(3,2,6)$ (2) $F$ 坐標為 $(7,5,15)$\n(3) $\\triangle ABC$ 面積為 $7$\n(4) 三角柱 $ABC-DEF$ 的體積為 $49$\n(5) 三角柱 $ABC-DEF$ 的體積是四面體 $ABCD$ 的 $6$ 倍',
    answer: '(2)(4)',
    hasImage: false,
  },
  {
    id: '17cebf9bff6',
    chapter: '空間向量',
    question:
      '設 $\\vector a$、$\\vector b$、$\\vector c$ 三向量所張平行六面體體積為 $V$，則下列選項哪些正確？\n(1) $-\\vector a$、$-\\vector b$、$-\\vector c$ 所張六面體體積為 $V$\n(2) $2\\vector a$、$2\\vector b$、$2\\vector c$ 所張六面體體積為 $2V$\n(3) $2\\vector a$、$3\\vector b$、$\\frac{1}{6}\\vector c$ 所張六面體體積為 $V$\n(4) $\\vector a$、$\\vector a+\\vector b$、$\\vector a+\\vector c$ 所張六面體積為 $V$\n(5) $\\vector a+\\vector b$、$\\vector b+\\vector c$、$\\vector c+\\vector a$ 所張六面體體積為 $V$',
    answer: '(1)(3)(4)',
    hasImage: false,
  },
  {
    id: '17cebfb15f8',
    chapter: '空間向量',
    question:
      '空間中，平行六面體 $ABCD-EFGH$ 如圖，已知部分的頂點坐標 $A(1,0,2)$、 $B(2,5,3)$、$D(4,-1,7)$、$E(3,6,1)$，求：\n(1) $G$ 坐標 (2) $|\\xvector{AB}·(\\xvector{AD}\\times\\xvector{AE})|$\n(3) 四面體 $ABCD$ 體積',
    answer: '(1) (7, 10, 7) (2) 56 (3) $\\frac{28}3$',
    hasImage: true,
  },
  {
    id: '17ce00ebc7d',
    chapter: '空間向量',
    question:
      '假設 $\\vector a$、$\\vector b$、$\\vector c$ 是空間中三個向量，$r\\in\\mathbb R$。已知 $\\vector a=(1,1,0)$、$\\vector b=(0,1,1)$ 且 $\\vector a$、$\\vector b$、$\\vector c$ 滿足 $\\vector a+\\vector b+r\\vector c=\\vector0$，那麼 $r$ 不可能等於下列何者？\n(1) $-\\sqrt2$ (2) 0 (3) 1 (4) $\\pi$ (5) $10^{100}$',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '17ce0106d46',
    chapter: '空間向量',
    question: '空間中 $A(x,5,4)$、$B(-1,y,1)$、$C(3,7,2)$ 三點共線，求數對 $(x,y)$。',
    answer: '$(11,8)$',
    hasImage: false,
  },
  {
    id: '17ce011be85',
    chapter: '空間向量',
    question:
      '一平行六面體如圖，$J$ 為四邊形 $BCGF$ 的中心，如果 $\\xvector{AJ}=a\\xvector{AB}+b\\xvector{AD}+c\\xvector{AE}$，求序組 $(a,b,c)$。',
    answer: '$(1,\\frac12,\\frac12)$',
    hasImage: true,
  },
  {
    id: '17ce012e9fe',
    chapter: '空間向量',
    question:
      '空間中四面體 $ABCD$，已知 $x\\xvector{AB}+y\\xvector{AC}+z\\xvector{AD}=3\\xvector{BD}+2\\xvector{CB}$，求序組 $(x,y,z)$。',
    answer: '$(-1,-2,3)$',
    hasImage: false,
  },
  {
    id: '17ce3b59f60',
    chapter: '空間向量',
    question:
      '已知 $\\vector a=(1,2,2)$、$\\vector b=(-2,-3,6)$ 的夾角為 $\\theta$，求 $\\vector a\\cdot\\vector b$ 及 $\\cos\\theta$。',
    answer: '4；$\\frac4{21}$',
    hasImage: false,
  },
  {
    id: '17ce3b69c7f',
    chapter: '空間向量',
    question: '如圖為一長方體，已知 $A(1,2,0)$、$C(x,7,x+2)$、$E(3,x,-6)$，求 $x$。',
    answer: '24',
    hasImage: true,
  },
  {
    id: '17ce3b7e1ca',
    chapter: '空間向量',
    question:
      '空間向量 $\\vector a$ 與 $\\vector b$，已知 $|\\vector a|=6\\sqrt3$，$\\vector b=(2,-2,1)$，$\\vector a$ 與 $\\vector b$ 的夾角為 $30\\du$，求 $\\vector a$ 在 $\\vector b$ 上的正射影。',
    answer: '(6, -6, 3)',
    hasImage: false,
  },
  {
    id: '17ce3b8ab07',
    chapter: '空間向量',
    question: '若 $2x-y+z=12$，求 $x^2+y^2+z^2$ 的最小值及此時的 $(x,y,z)$。',
    answer: '24；(4, -2, -2)',
    hasImage: false,
  },
  {
    id: '17ce3babf77',
    chapter: '空間向量',
    question:
      '$\\vector a=(4,-1,3)$、$\\vector b=(2,1,2)$，求 $\\vector a\\times\\vector b$ 及 $\\vector a$、$\\vector b$ 所張成的三角形面積。',
    answer: '(-5, -2, 6)；$\\frac{\\sqrt{65}}2$',
    hasImage: false,
  },
  {
    id: '17ce3bd3de0',
    chapter: '空間向量',
    question:
      '空間中共起點的五個向量 $\\vector a$、$\\vector b$、$\\vector c$、$\\vector d$、$\\vector e$ 都在平面 $E$ 上，如圖，下列何者最大？\n(1) $|\\vector a\\times\\vector a|$ (2) $|\\vector a\\times\\vector b|$ (3) $|\\vector a\\times\\vector c|$\n(4) $|\\vector a\\times\\vector d|$ (5) $|\\vector a\\times\\vector e|$',
    answer: '(4)',
    hasImage: true,
  },
  {
    id: '17ce3bf7d8f',
    chapter: '空間向量',
    question:
      '設 $\\vector i=(1,0,0)$，$\\vector j=(0,1,0)$，$\\vector k=(0,0,1)$，求 $(\\vector i\\times\\vector j)\\times(\\vector k\\times\\vector i)$ 等於下列何者？\n(1) $\\vector i$ (2) $\\vector j$ (3) $\\vector k$ (4) $-\\vector i$ (5) $-\\vector j$ (6) $-\\vector k$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17ce3c0a6f3',
    chapter: '空間向量',
    question:
      '設 $\\vector a\\times\\vector b=(1,3,2)$，$\\vector b\\times\\vector c=(3,0,-1)$，求 $(2\\vector a+3\\vector b+4\\vector c)\\times\\vector b$。',
    answer: '(-10, 6, 8)',
    hasImage: false,
  },
  {
    id: '17ce3c5d28e',
    chapter: '空間向量',
    question:
      '下列個選項的行列式值哪些必為 0？\n(1) $\\begin{vmatrix}a&0&d\\\\b&0&e\\\\c&0&f\\end{vmatrix}$ (2) $\\begin{vmatrix}a&b&c\\\\0&d&0\\\\0&e&0\\end{vmatrix}$ (3) $\\begin{vmatrix}0&0&a\\\\b&0&c\\\\d&e&0\\end{vmatrix}$\n(4) $\\begin{vmatrix}0&a&0\\\\b&c&d\\\\0&e&0\\end{vmatrix}$ (5) $\\begin{vmatrix}a&0&b\\\\0&c&0\\\\d&0&e\\end{vmatrix}$',
    answer: '(1)(2)(4)',
    hasImage: false,
  },
  {
    id: '17ce3c7b487',
    chapter: '空間向量',
    question:
      '把三階行列式 $\\begin{vmatrix}a&2&6\\\\b&1&x\\\\c&5&3\\end{vmatrix}$ 第一行的三個元各加 1 之後，行列式 $\\begin{vmatrix}a+1&2&6\\\\b+1&1&x\\\\c+1&5&3\\end{vmatrix}$ 的值會增加 9，求 $x$。',
    answer: '4',
    hasImage: false,
  },
  {
    id: '17ce3c8c5d9',
    chapter: '空間向量',
    question:
      '空間中三向量 $\\vector a=(0,2,1)$，$\\vector b=(3,0,5)$，$\\vector c=(6,2,-1)$ 所張成的平行六面體體積及四面體體積。',
    answer: '72；12',
    hasImage: false,
  },
  {
    id: '17ce3d442fc',
    chapter: '空間向量',
    question:
      '空間中三向量 $\\vector a=(x_1,y_1,z_1)$，$\\vector b=(x_2,y_2,z_2)$，$\\vector c=(x_3,y_3,z_3)$，已知 $\\begin{vmatrix}x_1&y_1&z_1\\\\x_2&y_2&z_2\\\\x_3&y_3&z_3\\end{vmatrix}=5$，求 $|(\\vector a\\times\\vector b)\\cdot\\vector c|$。',
    answer: '5',
    hasImage: false,
  },
  {
    id: '17ce3e9ec47',
    chapter: '空間向量',
    question: '空間中點 $P(2,1,3)$ 與點 $Q(4,5,5)$，求線段 $\\overline{PQ}$ 之垂直平分面方程式。',
    answer: '$x+2y+z=13$',
    hasImage: false,
  },
  {
    id: '17ce3eaf58b',
    chapter: '空間向量',
    question: '若點 $(1,2,k)$ 在平面 $E:2x+ky-5z=-7$ 上，求 $k$。',
    answer: '3',
    hasImage: false,
  },
  {
    id: '17ce3eba839',
    chapter: '空間向量',
    question: '若平面 $2x+py-6z=7$ 與 $x+4y+qz=1$ 互相平行，求數對 $(p,q)$',
    answer: '(8, -3)',
    hasImage: false,
  },
  {
    id: '17ce3ec98fe',
    chapter: '空間向量',
    question: '求平面 $E_1:x+2y-z=1$ 與 $E_2:3x+y+z=5$ 的銳夾角餘弦值。',
    answer: '$\\frac4{\\sqrt{66}}$',
    hasImage: false,
  },
  {
    id: '17ce3ed2ef3',
    chapter: '空間向量',
    question: '求點 (1, 3, -2) 到 $2x+y-z=1$ 的最近距離。',
    answer: '$\\sqrt6$',
    hasImage: false,
  },
  {
    id: '17ce3ee37d5',
    chapter: '空間向量',
    question:
      '長方體 $ABCD-EFGH$ 的邊長為 $\\overline{BC}=6$，$\\overline{CD}=3$，$\\overline{HD}=3$，如圖，試求頂點 $G$ 到平面 $BDE$ 的距離。',
    answer: '4',
    hasImage: true,
  },
  {
    id: '17ce3eea738',
    chapter: '空間向量',
    question: '過點 (1, 2, -5) 且與向量 (6, 4, 7) 平行的直線參數式與比例式。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17ce3f1ef56',
    chapter: '空間向量',
    question:
      '坐標空間中，直線 $L:\\dfrac{x+2}{-1}=\\dfrac{y+5}3=\\dfrac{z-7}6$ 上有一點 $P$，已知 $P$ 點的 $y$ 坐標比 $x$ 坐標多 1，求 $P$。',
    answer: ' (-3, -2, 13)',
    hasImage: false,
  },
  {
    id: '17ce3f298f6',
    chapter: '空間向量',
    question: '將直線 $\\begin{cases}x+2y+z=1\\\\x+y-z=5\\end{cases}$ 化為參數式。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17ce3f38be4',
    chapter: '空間向量',
    question:
      '平面 $E$ 通過原點且與直線 $L:\\begin{cases}3x+4y-2z=1999\\\\2x-3y+5z=2988\\end{cases}$ 垂直，求 $E$ 的方程式。',
    answer: '$14x-19y-17z=0$',
    hasImage: false,
  },
  {
    id: '17990e367f4',
    chapter: '空間向量',
    question:
      '右圖為一正立方體，被一平面截出一個四邊形 $ABCD$，其中 $B$、$D$ 分別為稜的中點，且 $\\overline{EA}:\\overline{AF}=3:7$，則 $\\cos\\angle DAB=$？',
    answer: '$\\frac1{26}$',
    hasImage: false,
  },
  {
    id: '17990e3909e',
    chapter: '空間向量',
    question:
      '證明下列各式：\n(1) $\\begin{vmatrix}1&a&a^2\\\\1&b&b^2\\\\1&c&c^2\\end{vmatrix}=(a-b)(b-c)(c-a)$\n(2) $\\begin{vmatrix}1&a&a^3\\\\1&b&b^3\\\\1&c&c^3\\end{vmatrix}=(a-b)(b-c)(c-a)(a+b+c)$\n(3) $\\begin{vmatrix}b+c&a&a\\\\b&c+a&b\\\\c&c&a+b\\end{vmatrix}=4abc$\n(4) $\\begin{vmatrix}1+a^2&ab&ac\\\\ab&1+b^2&bc\\\\ac&bc&1+c^2\\end{vmatrix}=a^2+b^2+c^2+1$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17990e56c0b',
    chapter: '空間向量',
    question:
      '設 $A(0,0,0)$、$B(1,2,3)$、$C(-2,1,-1)$、$D(3,1,2)$，試求：\n(1) 四面體 $ABCD$ 的體積\n(2) $\\triangle ABC$ 的面積\n(3) 四面體 $ABCD$ 過 $D$ 的高長度為何？',
    answer: '(1) $\\frac{5}{3}$ (2) $\\frac{5\\sqrt{3}}{2}$ (3) $\\frac{2\\sqrt{3}}{3}$',
    hasImage: false,
  },
  {
    id: '17990e6a7ea',
    chapter: '空間向量',
    question:
      '設平面上三相異直線 $L_1:2x-3y+1=0$，$L_2:ax+y+5=0$，$L_3:x+2ay+8=0$ 共點，求 $a$ 之值。',
    answer: '$0\\lor-2$',
    hasImage: false,
  },
  {
    id: '1798d8949d9',
    chapter: '空間向量',
    question:
      '將長方形 $ABCD$ 沿著對角線 $\\overline{AC}$ 摺起，使平面 $ABC$ 與平面 $ACD$ 互相垂直，已知 $\\overline{AB}=a$，$\\overline{BC}=b$，則以 $a$，$b$ 表示 $\\overline{BD}=$？',
    answer: '$\\sqrt{\\frac{a^4+b^4}{a^2+b^2}}$',
    hasImage: false,
  },
  {
    id: '1798d8f19fb',
    chapter: '空間向量',
    question:
      '在空間坐標系中，點 $P$ 在第一卦限，且點 $P$ 到 $x$ 軸、$y$ 軸、$z$ 軸的距離分別為 $2\\sqrt{5}$、$5$、$\\sqrt{13}$，試求點 $P$ 的坐標。',
    answer: '(3, 2, 4)',
    hasImage: false,
  },
  {
    id: '1798da4d1c8',
    chapter: '空間向量',
    question:
      '在坐標空間中，一正立方體的八個頂點分別為 $(0,0,0)$、$(1,0,0)$、$(1,1,0)$、$(0,1,0)$、$(0,0,1)$、$(1,0,1)$、$(1,1,1)$ 與 $(0,1,1)$。若 $A$、$B$ 分別為此正立方體兩稜邊的中點，則向量 $\\overrightarrow{AB}$ 可能為下列哪些選項？(多選)\n(A) $(1,0,0)\\quad$ (B) $\\left(\\frac{1}{2},0,0\\right)$\n(C) $\\left(\\frac{1}{2},0,1\\right)\\quad$ (D) $\\left(0,-\\frac{1}{2},-\\frac{1}{2}\\right)$',
    answer: '(A)(D)',
    hasImage: false,
  },
  {
    id: '1798da60c51',
    chapter: '空間向量',
    question:
      '$\\triangle ABC$ 的三頂點坐標為 $A(2,-3,5)$、$B(3,0,10)$、$C(x,y,0)$，則使 $\\triangle ABC$ 的周長為最小之點 $C$ 坐標為？',
    answer: '$(\\frac73,-2,0)$',
    hasImage: false,
  },
  {
    id: '1798db7f40f',
    chapter: '空間向量',
    question:
      '右圖中，$ABCD-EFGH$ 為一正立方體，$Q$ 為 $\\overline{GH}$ 的中點，$P$ 為 $\\overline{AD}$ 的中點，$O$ 為正立方體的中心，試求 $\\cos(\\angle POQ)$ 的值。',
    answer: '$-\\frac12$',
    hasImage: true,
  },
  {
    id: '1798dbaa732',
    chapter: '空間向量',
    question:
      '在空間坐標系中，$A$、$B$、$C$ 分別為 $x$、$y$、$z$ 軸上的點，$O$ 為原點，若 $\\triangle AOB$、$\\triangle BOC$、$\\triangle COA$ 的面積分別為 $3$、$4$、$5$，試求 $\\triangle ABC$ 的面積。',
    answer: '$5\\sqrt2$',
    hasImage: false,
  },
  {
    id: '1798dbb684c',
    chapter: '空間向量',
    question:
      '右圖中，$A-BCD$ 為正四面體，試求 $\\overrightarrow{AC}\\cdot\\overrightarrow{BD}$ 的值。',
    answer: '$0$',
    hasImage: true,
  },
  {
    id: '1794b4e0cc5',
    chapter: '空間向量',
    question:
      '空間中，設 $P(2,3,4)$，$Q(0,1,0)$，$R(1,-1,0)$，則 $\\triangle PQR$ 的面積為何？\n(A) $2$ (B) $\\sqrt{29}$ (C) $2\\sqrt{29}$ (D) $\\frac{5\\sqrt{3}}{2}$ (E) $5\\sqrt{3}$',
    answer: '(B)',
    hasImage: false,
  },
  {
    id: '1794b531b15',
    chapter: '空間向量',
    question:
      '已知 $A(1,1,2)$，$B(5,0,4)$，$C(1,x-2,4)$，$D(0,3,x)$，若四面體 $ABCD$ 之體積為 $\\frac{2}{3}$，則 $x=$？(四解)',
    answer: '$0\\lor\\frac92\\lor\\frac12\\lor4$',
    hasImage: false,
  },
  {
    id: '1794b54f66b',
    chapter: '空間向量',
    question:
      '已知由三向量 $\\vector a$、$\\vector b$、$\\vector c$ 所張出的平行六面體的體積為 $10$，則由三向量 $\\vector a$、$2\\vector a+3\\vector b$、$\\vector a-\\vector b+4\\vector c$ 所張出的平行六面體的體積為？',
    answer: '$120$',
    hasImage: false,
  },
  {
    id: '1794b568308',
    chapter: '空間向量',
    question:
      '空間中三向量 $\\vector a$、$\\vector b$、$\\vector c$，滿足 $(2\\vector a-3\\vector b)\\cdot\\left[2\\vector b\\times(-5\\vector c)\\right]=40$，則由 $\\vector a$、$\\vector b$、$\\vector c$ 所張出的平行六面體體積為？',
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '1794b57b830',
    chapter: '空間向量',
    question:
      '已知空間中 $A(1,-1,0)$，$B(7-a,3,1)$，$C(0,a-2,2)$，$D(-1,-1,1)$ 四點共平面，則 $a=$？(兩解)',
    answer: '$4\\lor5$',
    hasImage: false,
  },
  {
    id: '1794b599d64',
    chapter: '空間向量',
    question:
      '行列式 $\\left|\\begin{matrix}2 & 4 & -2 \\\\ 1 & 3 & 1 \\\\ 1 & 1 & 3 \\end{matrix}\\right|=$？',
    answer: '$12$',
    hasImage: false,
  },
];

// 空間中的平面與直線
const spaceEquations: Question[] = [
  {
    id: '185150af7d3',
    chapter: '空間中的平面與直線',
    question:
      '如圖，有一邊長為 6 的正立方體在空間坐標當中。$P$ 在 $\\overline{DE}$ 上且 $\\overline{PD}:\\overline{PE}=5:1$，$Q$ 在 $\\overline{GC}$ 上且 $\\overline{QG}:\\overline{QC}=5:1$，$R$ 在 $\\overline{FB}$ 上且 $\\overline{RF}:\\overline{RB}=2:1$。求 $\\xvector{PQ}$ 和 $\\xvector{PR}$ 所圍成的三角形面積為 $\\dfrac{\\sqrt{\\textcirc{5-1}\\textcirc{5-2}\\textcirc{5-3}\\textcirc{5-4}}}2$。',
    answer: '1957',
    hasImage: true,
  },
  {
    id: '184efba6a95',
    chapter: '空間中的平面與直線',
    question:
      '空間中有一平面 $E:x+2y+3z=5$，取平面 $E$ 的法向量 $\\vector n=(1,2,3)$。有一直線 $L:\\dfrac{x-1}1=\\dfrac{y+2}2=\\dfrac z1$，取直線 $L$ 的方向向量 $\\vector l=(1,2,1)$。試選出正確的選項。\n(1) $E$ 和 $L$ 交於一點且交點坐標為 (2, 0, 1)\n(2) $L$ 上有一點 $P(3,2,2)$，$P$ 到平面 $E$ 的距離為 $\\dfrac47$\n(3) $\\vector n\\cdot\\vector l=8$\n(4) $\\vector l$ 在 $\\vector n$ 上的正射影為 (4, 8 ,12)\n(5) $L$ 在 $E$ 上的投影直線為 $\\dfrac{x-2}3=\\dfrac y6=\\dfrac{z-1}{-5}$',
    answer: '135',
    hasImage: false,
  },
  {
    id: '184930c1e6c',
    chapter: '空間中的平面與直線',
    question:
      '在空間坐標系中，已知一直線 $L:\\dfrac{x-1}3=\\dfrac{y-2}{-2}=z-3$，則 $L$ 落在下列哪一個平面上？\n(1) $E_1:x+y+z=1$　(2) $E_2:x+y+z=2$　(3) $E_3:x+y+z=3$\n(4) $E_4:-x-y+z=4$　(5) $E_5:-x-y+z=5$',
    answer: '4',
    hasImage: false,
  },
  {
    id: '1809a4534ba',
    chapter: '空間中的平面與直線',
    question:
      '空間坐標中，若 $A(2,-1,3)$、$B(5,4,-1)$ 兩點同時在相異兩平面 $E_1$、$E_2$ 上，試求下列哪一個點也同時在此兩平面上？(1) $(8,9,11)$ (2) $(-1,4,7)$ (3) $(11,14,15)$ (4) $(14,19,-13)$ (5) $(-10,-21,-19)$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '1809a477bd2',
    chapter: '空間中的平面與直線',
    question:
      '空間中，下列哪些選項的圖形為一直線？\n(1) $2x+y=5$ (2) $\\frac2{x+1}=\\frac3y=\\frac{-1}z$ (3) $x^2+z^2=0$ (4) $x=y=z=1$ (5) $\\begin{cases}x+y=1\\\\3x+y=5\\end{cases}$',
    answer: '(3)(5)',
    hasImage: false,
  },
  {
    id: '1809a4c3371',
    chapter: '空間中的平面與直線',
    question:
      '設 $A(1,2,3)$，$B(3,0,1)$，$\\xvector{AB}$ 在平面 $ax+2y+bz+4=0$ 的投影長為 0，求數對 $(a,b)$。',
    answer: '$(-2,2)$',
    hasImage: false,
  },
  {
    id: '1809a51b463',
    chapter: '空間中的平面與直線',
    question:
      '圖為長方體 $ABCD-EFGH$，其中 $\\overline{AB}=5$，$\\overline{AD}=3$，$\\overline{AE}=2$。設平面 $AEHD$ 與平面 $AEGC$ 的夾角為 $\\theta$，求 $\\tan\\theta$。',
    answer: '$\\frac53$',
    hasImage: true,
  },
  {
    id: '1809a531cd7',
    chapter: '空間中的平面與直線',
    question: '空間中 $A(1,0,2)$，$B(2,1,3)$，$C(4,2,5)$，求通過 $A$、$B$、$C$ 三點的平面方程式。',
    answer: '$x-z+1=0$',
    hasImage: false,
  },
  {
    id: '1809a54e68e',
    chapter: '空間中的平面與直線',
    question:
      '求兩直線 $L_1:\\frac{x-1}2=\\frac{y+2}4=\\frac{z-2}{-1}$ 與 $L_2:\\begin{cases}x=t\\\\y=8-2t\\\\z=-5+2t\\end{cases},t\\in\\mathbb R$ 的交點坐標。',
    answer: '$(3,2,1)$',
    hasImage: false,
  },
  {
    id: '1809a56f461',
    chapter: '空間中的平面與直線',
    question:
      '兩直線 $L_1:\\frac x1=\\frac{y+3}2=\\frac{z-4}{-3}$ 與 $L_2:\\frac{x+1}2=\\frac{y-1}{-2}=\\frac{z-2}{-1}$，求：\n(1) $L_1$ 與 $L_2$ 的交點坐標 (2) 包含 $L_1$、$L_2$ 兩直線的平面方程式',
    answer: '(1) $(1,-1,1)$ (2) $8x+5y+6z=9$',
    hasImage: false,
  },
  {
    id: '1807da3fca7',
    chapter: '空間中的平面與直線',
    question:
      '求包含直線 $L:\\begin{cases}x+y+4z=0\\\\3x+3y+z=0\\end{cases}$ 且與平面 $E:x-y-z=0$ 垂直的平面方程式。',
    answer: '$x+y=0$',
    hasImage: false,
  },
  {
    id: '1807da2f079',
    chapter: '空間中的平面與直線',
    question:
      '一平面 $F$ 通過 $A(1,1,3)$，$B(-2,1,1)$ 兩點且與平面 $E:2x-y+z=3$ 垂直，試求平面 $F$ 的方程式。',
    answer: '$2x+y-3z+6=0$',
    hasImage: false,
  },
  {
    id: '1807da1d1f1',
    chapter: '空間中的平面與直線',
    question:
      '若兩直線 $\\frac{x-7}2=b-y=\\frac{z-2}3$ 與 $x-4=\\frac{y+5}a=\\frac{z+3}2$ 垂直，求兩直線的交點坐標。',
    answer: '$(5,3,-1)$',
    hasImage: false,
  },
  {
    id: '1807d7f78ac',
    chapter: '空間中的平面與直線',
    question:
      '在空間坐標中，設平面 $3x-y+z+4=0$ 為一鏡面，有一光線通過點 $P(2,3,4)$，射向鏡面上的點 $O(0,2,-2)$，經鏡面反射後通過 $R$，若 $3\\overline{OR}=2\\overline{OP}$，求 $R$。',
    answer: '$(\\frac83,0,-\\frac{14}3)$',
    hasImage: false,
  },
  {
    id: '17f48ecbbac',
    chapter: '空間中的平面與直線',
    question: '試求空間中與平面 $5x-2y+3z=1$ 平行，並通過點 $(7,1,-8)$ 的平面方程式。',
    answer: '$5x-2y+3z=9$',
    hasImage: false,
  },
  {
    id: '17f48ed71f2',
    chapter: '空間中的平面與直線',
    question:
      '已知空間中兩點 $A(5,8,-2)$、$B(1,2,5)$，試求線段 $\\overline{AB}$ 的垂直平分面方程式。',
    answer: '$8x+12y-14z=63$',
    hasImage: false,
  },
  {
    id: '17f48ee3b6a',
    chapter: '空間中的平面與直線',
    question: '空間中，求由三點 $A(1,2,3)$、$B(-1,2,1)$、$C(0,1,-2)$ 所決定的平面方程式。',
    answer: '$x+4y-z=6$',
    hasImage: false,
  },
  {
    id: '17f63789c73',
    chapter: '空間中的平面與直線',
    question: '已知一平面通過點 $(2,-1,0)$ 與 $(3,0,5)$，且與 $xy$ 平面垂直，求此平面方程式。',
    answer: '$x-y=3$',
    hasImage: false,
  },
  {
    id: '17f63797131',
    chapter: '空間中的平面與直線',
    question: '求過點 $(3,-2,6)$、三軸截距相等且不過原點的平面方程式。',
    answer: '$x+y+z=7$',
    hasImage: false,
  },
  {
    id: '17f637c919f',
    chapter: '空間中的平面與直線',
    question:
      '已知兩平面 $E_1:x-y+z=5$ 與 $E_2:x+y+\\sqrt6z=10$，試問：\n(1) 求 $E_1$ 與 $E_2$ 的交角\n(2) 若 $E_1$ 上有一圖形的面積為 $6$，求此圖形投影到 $E_2$ 上的圖形面積',
    answer: '(1) $60\\du,120\\du$ (2) $3$',
    hasImage: false,
  },
  {
    id: '17f637c591e',
    chapter: '空間中的平面與直線',
    question:
      '兩平面 $E_1:2x+my-z=5$、$E_2:6x-5y-3z=2$，試問：\n(1) 若 $E_1\\perp E_2$，求 $m$\n(2) 若 $E_1\\parallel E_2$，求 $m$',
    answer: '(1) $3$ (2) $-\\frac53$',
    hasImage: false,
  },
  {
    id: '17f637d57da',
    chapter: '空間中的平面與直線',
    question:
      '$x,y,z\\in\\mathbb R$，$x+4y-5z=-15$，求 $\\sqrt{(x+1)^2+(y-2)^2+(z+4)^2}$ 的最小值。',
    answer: '$\\sqrt{42}$',
    hasImage: false,
  },
  {
    id: '17f637ea80c',
    chapter: '空間中的平面與直線',
    question:
      '設空間中兩點 $A(6,2,5)$、$B(3,-1,8)$，若 $\\overleftrightarrow{AB}$ 和平面 $2x+y-3z=-13$ 交於 $Q$，求 $\\frac{\\overline{QA}}{\\overline{PB}}$。',
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '17f6381676b',
    chapter: '空間中的平面與直線',
    question:
      '下列有關空間中方程式的圖形，哪些正確？\n(1) $2x-y=y+2z=z-x$ 的圖形為直線\n(2) $2x+y=y-2z$ 的圖形為直線\n(3) $xy=0$ 的圖形為 $xy$ 平面\n(4) $x^2+y^2=0$ 的圖形為 $z$ 軸\n(5) $z=0$ 的圖形為 $z$ 軸\n(6) $|x|+|y|+|z|=0$ 的圖形為一點',
    answer: '(1)(4)(6)',
    hasImage: false,
  },
  {
    id: '17f63826b3b',
    chapter: '空間中的平面與直線',
    question:
      '一直線 $2x-2=-y=z$，試求：\n(1) 與 $yz$ 平面的交點坐標\n(2) 與平面 $x+y+z=2$ 的交點坐標',
    answer: '(1) $(0,2,-2)$ (2) $(2,-2,2)$',
    hasImage: false,
  },
  {
    id: '17f63836d3e',
    chapter: '空間中的平面與直線',
    question:
      '求空間中點 $A(3,13,16)$ 對直線 $\\frac{x-10}3=\\frac{y+6}{-1}=\\frac{z+11}2$ 的投影點、對稱點。',
    answer: '$(13,-7,-9)$；$(23,-27,-34)$',
    hasImage: false,
  },
  {
    id: '17f63842a0f',
    chapter: '空間中的平面與直線',
    question: '求點 $(4,-1,2)$ 到直線 $\\frac{x-1}1=\\frac y{-1}=\\frac{z+1}2$ 的距離。',
    answer: '$\\frac{\\sqrt{21}}3$',
    hasImage: false,
  },
  {
    id: '17f8cf262cb',
    chapter: '空間中的平面與直線',
    question: '一平面過 $A(1,1,3)$、$B(-2,1,1)$ 且與平面 $2x-y+z=3$ 垂直，求此平面方程式。',
    answer: '$2x+y-3z=-6$',
    hasImage: false,
  },
  {
    id: '17f8cf4403c',
    chapter: '空間中的平面與直線',
    question:
      '若平面 $E$ 過 $E_1:x+2y-3z=-2$ 與 $E_2:3x-2y+z=6$ 的交線，且過點 $(-3,1,7)$，求此平面方程式。',
    answer: '$5x-6y+5z=14$',
    hasImage: false,
  },
  {
    id: '17f8cf5196f',
    chapter: '空間中的平面與直線',
    question:
      '若直線 $\\frac{x+4}{-1}=\\frac{y+9}3=\\frac z2$ 落在平面 $ax+y-z=b$ 上，求數對 $(a,b)$。',
    answer: '$(1,-13)$',
    hasImage: false,
  },
  {
    id: '17f8cf5c3d7',
    chapter: '空間中的平面與直線',
    question: '求空間中點 $(-1,-2,2)$ 對平面 $x+2y-3z=3$ 的投影點及對稱點。',
    answer: '$(0,0,-1)$；$(1,2,-4)$',
    hasImage: false,
  },
  {
    id: '17f8cf6ac15',
    chapter: '空間中的平面與直線',
    question:
      '求直線 $L_1:\\frac{x+1}3=\\frac{y-1}4=\\frac{z-1}2$ 與 $L_2:\\frac{x+2}2=\\frac{y+1}3=\\frac{z-1}1$ 的交點。',
    answer: '$(2,5,3)$',
    hasImage: false,
  },
  {
    id: '17de15c9102',
    chapter: '空間中的平面與直線',
    question:
      '空間中兩相異點 $A(2,-3,-10)$、$B(7,1,5)$，求 $\\overleftrightarrow{AB}$ 的：(1) 參數式 (2) 對稱比例式\n',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17de15be8ea',
    chapter: '空間中的平面與直線',
    question:
      '空間中直線 $L:\\begin{cases}x=7+2t\\\\y=4-3t\\\\z=-2+t\\end{cases},t\\in\\mathbb R$，試問：(1) 起點坐標與方向向量\n(2) 點 $P(a,b,2)$ 在 $L$ 上，求數對 $(a,b)$\n(3) 若參數 $t$ 的範圍為 $-1\\le t\\le5$，所得的圖形為線段，求此線段的長度',
    answer: '(1) $(7,4,2)$；$(2,-3,1)$ (2) $(15,-8)$ (3) $6\\sqrt{14}$',
    hasImage: false,
  },
  {
    id: '17de15c6538',
    chapter: '空間中的平面與直線',
    question: '兩點 $A(-1,4,8)$、$B(3,0,7)$ 決定一直線，求其：(1) 參數式 (2) 對稱比例式\n',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17de15e1197',
    chapter: '空間中的平面與直線',
    question:
      '空間中直線 $L:\\begin{cases}x=4+3t\\\\y=7-6t\\\\z=3+2t\\end{cases},t\\in\\mathbb R$，試問：(1) 起點坐標與方向向量\n(2) 點 $(10,p,q)$ 在 $L$ 上，求數對 $(p,q)$\n(3) 若參數 $t$ 的範圍為 $2\\le t\\le7$，求所得線段的長度',
    answer: '(1) $(4,7,3)$；$(3,-6,2)$ (2) $(-5,7)$ (3) $35$',
    hasImage: false,
  },
  {
    id: '17de15fb5a1',
    chapter: '空間中的平面與直線',
    question:
      '直線 $L:\\frac{x-5}2=\\frac{y+1}6=z-3$，求：\n(1) $L$ 的起點坐標與方向向量\n(2) 若點 $(1,p,q)$ 在 $L$ 上，求數對 $(p,q)$\n(3) $L$ 的參數式',
    answer: '(1) $(5,-1,3)$；$(2,6,1)$ (2) $(-13,1)$ (3) 略',
    hasImage: false,
  },
  {
    id: '17de1612952',
    chapter: '空間中的平面與直線',
    question:
      '直線 $\\begin{cases}2x-3y+z=1\\\\x+y-2z=8\\end{cases}$ 上有一點 $(4,r,s)$，則：(1) 求 $r$、$s$ (2) 把直線改為參數式',
    answer: '(1) $2$；$-1$ (2) 略',
    hasImage: false,
  },
  {
    id: '17de16567d1',
    chapter: '空間中的平面與直線',
    question:
      '(1) $\\frac{x-2}{-1}=\\frac{y+3}5=z-4$ 的直線上其中一點為 $(m,12,n)$，求數對 $(m,n)$\n(2) 若點 $(2,5,a)$ 在直線 $\\frac{x+1}p=\\frac{y-2}3=\\frac{z+5}{-1}$ 上，求數對 $(a,p)$',
    answer: '(1) $(-1,7)$ (2) $(-6,3)$',
    hasImage: false,
  },
  {
    id: '17de166b7a9',
    chapter: '空間中的平面與直線',
    question:
      '(1) 將直線 $\\begin{cases}3x+y-2z=5\\\\2x-y+3z=1\\end{cases}$，化成參數式\n(2) 若點 $(3,1,p)$ 落在直線 $\\begin{cases}px+2y+z=q\\\\-x-qy+z=2p\\end{cases}$ 上，求數對 $(p,q)$',
    answer: '(1) 略 (2) $(-1,-2)$',
    hasImage: false,
  },
  {
    id: '17de16755c1',
    chapter: '空間中的平面與直線',
    question: '求過點 $P(3,2,-5)$ 且與平面 $E:4x+2y-3z=6$ 垂直的直線比例式。',
    answer: '$\\frac{x-3}4=\\frac{y-2}2=\\frac{z+5}{-3}$',
    hasImage: false,
  },
  {
    id: '17de1690243',
    chapter: '空間中的平面與直線',
    question: '求過點 $(1,-2,4)$ 且與 $2x+y-4z=1$ 垂直的直線比例式。',
    answer: '$\\frac{x-1}2=\\frac{y+2}1=\\frac{z-4}{-4}$',
    hasImage: false,
  },
  {
    id: '17de16a28d2',
    chapter: '空間中的平面與直線',
    question:
      '直線 $L:\\frac{x+2}3=\\frac{y-1}{-2}=\\frac{z+5}4$，求：\n(1) $L$ 與 $yz$ 平面之交點坐標\n(2) $L$ 與 $x+2y-z=10$ 之交點坐標',
    answer: '(1) $(0,-\\frac13,-\\frac73)$ (2) $(-5,3,-9)$',
    hasImage: false,
  },
  {
    id: '17de16ace58',
    chapter: '空間中的平面與直線',
    question:
      '直線 $L:\\frac{x-2}3=\\frac{y+1}{-1}=\\frac{z-1}2$ 與下列哪一個平面平行 (即不相交)？\n(1) $2x-y+z=1$ (2) $x+y-z=-2$\n(3) $3x-y+2z=1$ (4) $4x+6y-3z=1$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17de16b7148',
    chapter: '空間中的平面與直線',
    question:
      '直線 $L:\\frac{x-1}2=\\frac{y+4}{-3}=\\frac{z+1}1$，求：\n(1) $L$ 與 $xz$ 平面之交點坐標\n(2) $L$ 與 $2x+y-3z=5$ 之交點坐標',
    answer: '(1) $(-\\frac53,0,-\\frac73)$ (2) $(-3,2,-3)$',
    hasImage: false,
  },
  {
    id: '17de16c06c9',
    chapter: '空間中的平面與直線',
    question:
      '已知直線 $L:\\frac x2=\\frac y1=\\frac{z-6}3$ 繞 $z$ 軸旋轉，與 $xy$ 平面圍成一個直圓錐體，試求此直圓錐體的體積。',
    answer: '$40\\pi$',
    hasImage: false,
  },
  {
    id: '17de16d5d48',
    chapter: '空間中的平面與直線',
    question:
      '空間中一點 $A(2,-5,7)$ 與一平面 $E:2x+5y-z=2$ 的，試求：\n(1) 投影點坐標 (2) 對稱點坐標\n(3) 由 $A$ 點向平面 $E$ 的 $P$ 點射出一束光線，在 $P$ 點反射朝 $Q(0,-13,-7)$ 射去，求 $P$ 點坐標',
    answer: '(1) $(4,0,6)$ (2) $(6,5,5)$ (3) $(4,-1,1)$',
    hasImage: false,
  },
  {
    id: '17de16eb8ab',
    chapter: '空間中的平面與直線',
    question:
      '空間中一點 $A(-1,3,2)$ 與一平面 $E:x+2y-z=-3$，試求：\n(1) 投影點坐標 (2) 對稱點坐標\n(3) 由 $A$ 射出一束光線到 $E$ 上的點 $P(1,-1,2)$ 後反射，求反射光線所在直線的參數式',
    answer:
      '(1) $(-2,1,3)$ (2) $(-3,-1,4)$ (3) $\\begin{cases}x=1+2t\\\\y=-1\\\\z=2-t\\end{cases}$',
    hasImage: false,
  },
  {
    id: '17de17131ad',
    chapter: '空間中的平面與直線',
    question:
      '直線 $L:\\frac{x-1}2=\\frac{y-3}{-1}=\\frac z2$ 外一點 $A(1,-2,0)$，求：(1) $A$ 到直線 $L$ 的距離\n(2) $A$ 對 $L$ 的垂足點 (投影點) 坐標\n(3) 含 $A$ 與 $L$ 的平面方程式',
    answer: '(1) $2\\sqrt5$ (2) $(1,2,2)$ (3) $5x+2y-4z-1=0$',
    hasImage: false,
  },
  {
    id: '17de170f9bd',
    chapter: '空間中的平面與直線',
    question:
      '已知直線 $L:\\frac{x-2}3=\\frac{y+1}{-2}=z+2$ 外一點 $A(3,-1,2)$，求：(1) $A$ 到直線 $L$ 的距離\n(2) $A$ 對 $L$ 的垂足點',
    answer: '(1) $\\frac{3\\sqrt6}2$ (2) $(\\frac72,-2,-\\frac32)$',
    hasImage: false,
  },
  {
    id: '17de172e612',
    chapter: '空間中的平面與直線',
    question:
      '空間中兩平行直線 $L_1:x+2=\\frac{y-5}{-3}=\\frac{z+10}2$ 與 $L_2:x+5=\\frac{y+1}{-3}=\\frac{z+7}2$，求：\n(1) $L_1$ 與 $L_2$ 之間的距離\n(2) 包含 $L_1$ 與 $L_2$ 的平面方程式',
    answer: '(1) $\\frac{3\\sqrt{10}}2$ (2) $x-3y-5z=33$',
    hasImage: false,
  },
  {
    id: '17de172c101',
    chapter: '空間中的平面與直線',
    question:
      '空間中兩平行直線 $L_1:x-1=\\frac{y+5}2=\\frac{z+4}3$ 與 $L_2:x-3=\\frac{y+1}2=\\frac{z+3}3$，求：\n(1) $L_1$ 與 $L_2$ 之間的距離\n(2) 包含 $L_1$ 與 $L_2$ 的平面方程式',
    answer: '(1) $\\frac{5\\sqrt5}{\\sqrt{14}}$ (2) $2x-y=7$',
    hasImage: false,
  },
  {
    id: '17de17c608b',
    chapter: '空間中的平面與直線',
    question:
      '空間中兩直線 $L_1:\\frac{x-3}2=\\frac{y+1}3=\\frac{z-4}4$、$L_2:\\frac{x-11}6=\\frac{y-5}3=\\frac{z-6}{-2}$，請問：\n(1) $L_1$ 與 $L_2$ 是否相交？若相交，求交點坐標\n(2) 包含 $L_1$ 與 $L_2$ 的平面方程式',
    answer: '(1) 是；$(5,2,8)$ (2) $9x-14y+6z=65$',
    hasImage: false,
  },
  {
    id: '17de17de1db',
    chapter: '空間中的平面與直線',
    question:
      '空間中兩直線 $L_1:x-2=\\frac{y+3}{-4}=\\frac{z+1}2$ 與 $L_2:\\frac{x-7}{-4}=\\frac{y-3}3=\\frac{z+1}{-3}$，試求：\n(1) $L_1$ 與 $L_2$ 兩直線的交點坐標\n(2) $L_1$ 與 $L_2$ 的公垂線方程式\n(3) 包含 $L_1$ 與 $L_2$ 的平面方程式',
    answer:
      '(1) $(-1,9,-7)$ (2) $\\frac{x+1}6=\\frac{y-9}{-5}=\\frac{z+7}{-13}$ (3) $6x-5y-13z=40$',
    hasImage: false,
  },
  {
    id: '17de17f8547',
    chapter: '空間中的平面與直線',
    question:
      '空間中，$L_1:\\frac{x+2}3=\\frac{y-5}{-1}=\\frac{z-3}1$ 與 $L_2:\\frac{x+3}{-3}=\\frac{y+7}2=\\frac{z-6}4$ 為兩歪斜線，求：\n(1) 包含 $L_1$ 且平行 $L_2$ 的平面方程式\n(2) $L_1$ 與 $L_2$ 的最短距離',
    answer: '(1) $2x+5y-z=18$ (2) $\\frac{13\\sqrt{30}}6$',
    hasImage: false,
  },
  {
    id: '17de17f52e3',
    chapter: '空間中的平面與直線',
    question: '求空間中直線 $L_1:\\begin{cases}x+y=3\\\\x-z=5\\end{cases}$ 與 $z$ 軸的最短距離。',
    answer: '$\\frac{3\\sqrt2}2$',
    hasImage: false,
  },
  {
    id: '17dc12c2ecb',
    chapter: '空間中的平面與直線',
    question:
      '已知空間中兩點 $A(5,2,-3)$ 與 $B(1,8,-2)$，若一平面通過 $P(1,-3,0)$ 且與直線 $\\overleftrightarrow{AB}$ 垂直，求其法向量及平面方程式。',
    answer: '$(-4,6,1)$；$4x-6y-z=22$',
    hasImage: false,
  },
  {
    id: '17dc11fb683',
    chapter: '空間中的平面與直線',
    question:
      '方程式 $3x+4y+2z=12$ 在空間中的圖形為平面，求：\n(1) 法向量 (2) 與 $y$ 軸的交點坐標\n(3) 若點 $(k-4,2k,2-3k)$ 在這個平面上，求 $k$',
    answer: '(1) $(3,4,2)$ (2) $(0,3,0)$ (3) $4$',
    hasImage: false,
  },
  {
    id: '17dc1201c0a',
    chapter: '空間中的平面與直線',
    question: '若原點 $(0,0,0)$ 在一平面的投影點為 $A(1,5,-2)$，試求此平面方程式。',
    answer: '$x+5y-2z=30$',
    hasImage: false,
  },
  {
    id: '17dc121215b',
    chapter: '空間中的平面與直線',
    question:
      '已知平面 $E:2x+y-3z=1$，試求：\n(1) 法向量 (2) 與 $z$ 軸的交點坐標\n(3) 若點 $(k-1,2k,k+2)\\in E$，求 $k$',
    answer: '(1) $(2,1,-3)$ (2) $(0,0,-\\frac{1}{3})$ (3) $9$',
    hasImage: false,
  },
  {
    id: '17dc1219280',
    chapter: '空間中的平面與直線',
    question: '已知 $xy$ 平面是由 $x$ 軸與 $y$ 軸所張成，求其方程式及法向量。',
    answer: '$z=0$；$(0,0,1)$',
    hasImage: false,
  },
  {
    id: '17dc122ac69',
    chapter: '空間中的平面與直線',
    question:
      '(1) 方程式 $3y=7$ 在空間中的圖形為何？並求其法向量。\n(2) 求過點 $(3,-7,5)$，與 $z$ 軸垂直的平面方程式。\n(3) 求過點 $(3,-7,5)$，與 $yz$ 平面平行的平面方程式。\n(4) 求空間坐標系中的 $xz$ 平面方程式。',
    answer: '(1) 平面；$(0,3,0)$ (2) $z=5$ (3) $x=3$ (4) $y=0$',
    hasImage: false,
  },
  {
    id: '17dc1231ca6',
    chapter: '空間中的平面與直線',
    question: '若一平面通過 $A(1,1,-5)$、$B(2,-1,3)$、$C(3,2,-4)$ 三點，試求平面方程式。',
    answer: '$2x-3y-z=4$',
    hasImage: false,
  },
  {
    id: '17dc123720a',
    chapter: '空間中的平面與直線',
    question:
      '若一平面過 $(1,-2,1)$，且和兩平面 $3x+y+z-2=0$ 與 $x-2y+z+4=0$ 均垂直，求平面方程式。',
    answer: '$3x-2y-7z=0$',
    hasImage: false,
  },
  {
    id: '17dc123b3e1',
    chapter: '空間中的平面與直線',
    question: '已知平面通過 $A(2,4,-1)$、$B(3,-1,0)$、$C(5,1,-3)$ 三點，求平面方程式。',
    answer: '$13x+5y+12z=34$',
    hasImage: false,
  },
  {
    id: '17dc123f2ca',
    chapter: '空間中的平面與直線',
    question: '若一平面過 $(4,1,2)$，且和兩平面 $2x-y+3z=1$ 與 $4x-y+2z=4$ 均垂直，求平面方程式。',
    answer: '$x+8y+2z=16$',
    hasImage: false,
  },
  {
    id: '17dc1259188',
    chapter: '空間中的平面與直線',
    question:
      '一平面與 $x$ 軸、$y$ 軸、$z$ 軸的截距分別為 $2$、$-3$、$5$，求平面方程式及此平面與三坐標面圍成的四面體體積。',
    answer: '$\\frac x2+\\frac y{-3}+\\frac z5=1$；$5$',
    hasImage: false,
  },
  {
    id: '17dc1251ae5',
    chapter: '空間中的平面與直線',
    question:
      '空間中有一平面與 $x$ 軸、$y$ 軸、$z$ 軸的截距分別為 $7$、$4$、$-3$，試求平面方程式及與三坐標面圍成的四面體體積。',
    answer: '$\\frac x7+\\frac y4-\\frac z3=1$；$14$',
    hasImage: false,
  },
  {
    id: '17dc1265fe6',
    chapter: '空間中的平面與直線',
    question:
      '設 $E_1:x+ky+z=15$ 與 $E_2:x+y+kz=-2$，求：\n(1) 若 $E_1\\perp E_2$，求 $k$\n(2) 若 $E_1$ 與 $E_2$ 的夾角為 $60\\du$，求 $k$',
    answer: '(1) $-\\frac12$ (2) $0\\lor4\\lor-2$',
    hasImage: false,
  },
  {
    id: '17dc126ab0a',
    chapter: '空間中的平面與直線',
    question: '若平面 $2x+y+kz=2$ 與 $2x-ky+z=1$ 的夾角為 $60\\du$，求 $k$。',
    answer: '$\\pm\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17dc1280c68',
    chapter: '空間中的平面與直線',
    question:
      '空間中一點 $P(1,5,3)$ 及一平面 $E:7x+4y+4z=3$，求：\n(1) 點 $P$ 與平面 $E$ 的最近距離\n(2) 點 $P$ 關於平面 $E$ 的對稱點為 $Q$，求 $\\overline{PQ}$',
    answer: '(1) $4$ (2) $8$',
    hasImage: false,
  },
  {
    id: '17dc12836dd',
    chapter: '空間中的平面與直線',
    question:
      '動點 $(x,y,z)$ 在平面 $2x+y-2z-5=0$ 上移動，求 $\\sqrt{(x-3)^2+y^2+(z+1)^2}$ 的最小值。',
    answer: '$1$',
    hasImage: false,
  },
  {
    id: '17da49b6ff7',
    chapter: '空間中的平面與直線',
    question: '求點 $(7,1,-2)$ 在平面 $2x+y-2z=1$ 的距離。',
    answer: '$6$',
    hasImage: false,
  },
  {
    id: '17dc128eaff',
    chapter: '空間中的平面與直線',
    question:
      '點 $(x,y,z)$ 在平面 $3x-y+z=2$ 上移動，求 $\\sqrt{(x+3)^2+(y+2)^2+(z-1)^2}$ 的最小值。',
    answer: '$\\frac8{\\sqrt{11}}$',
    hasImage: false,
  },
  {
    id: '17dc129f076',
    chapter: '空間中的平面與直線',
    question:
      '已知兩平行平面 $E_1:2x-2y+z=-1$ 與 $E_2:4x-4y+2z=7$，求：\n(1) $E_1$ 與 $E_2$ 的間距\n(2) 與 $E_1$、$E_2$ 等距離的平行平面方程式',
    answer: '(1) $\\frac32$ (2) $8x-8y+4z=5$',
    hasImage: false,
  },
  {
    id: '17dc12a6e73',
    chapter: '空間中的平面與直線',
    question: '在坐標空間中，試求與平面 $2x-y+2z=5$ 平行，且距離為 $6$ 的平面方程式。',
    answer: '$2x-y+2z=-13\\lor2x-y+2z=23$',
    hasImage: false,
  },
  {
    id: '17da4a7a3d0',
    chapter: '空間中的平面與直線',
    question:
      '試求過兩平面 $x-2y+3z+1=0$ 與 $2x+y-5z-2=0$ 的交線，且過點 $(2,-4,1)$ 的平面方程式。',
    answer: '$5x-7z-3=0$',
    hasImage: false,
  },
  {
    id: '17d895f3d08',
    chapter: '空間中的平面與直線',
    question: '求兩平行平面 $(x-y+2z+3)(3x-3y+8z+3)=0$ 的距離。',
    answer: '$\\frac{3\\sqrt6}8$',
    hasImage: false,
  },
  {
    id: '17d895fb6de',
    chapter: '空間中的平面與直線',
    question: '試求與 $x-y+z=2$ 平行且距離為 $1$ 的平面方程式。',
    answer: '$x-y+z=2\\pm\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17d898766c2',
    chapter: '空間中的平面與直線',
    question: '試求過 $x+2y+z=4$ 與 $3x-y+2z=1$ 的交線，且與平面 $2x+z=1$ 垂直的平面方程式。',
    answer: '$x-19y-2z+29=0$',
    hasImage: false,
  },
  {
    id: '17ce909d6fd',
    chapter: '空間中的平面與直線',
    question:
      '已知空間中有兩點 $P(-1,3,4)$、$Q(2,7,6)$ 都在平面 $E$ 上，且向量 $\\vector a=(5,1,-2)$ 與 $E$ 平行，求平面 $E$ 的方程式。',
    answer: '$10x-16y+17z=10$',
    hasImage: false,
  },
  {
    id: '17cdc6808a6',
    chapter: '空間中的平面與直線',
    question:
      '空間中正立方體 $ABCD-EFGH$ 的頂點坐標為 $A(0,0,0)$、$B(2,0,0)$、$D(0,2,0)$、$E(0,0,2)$，如圖，若平面 $E$ 通過 $\\overline{BC}$、$\\overline{CD}$、$\\overline{DH}$、$\\overline{HE}$、$\\overline{EF}$、$\\overline{FB}$ 的中點，求此平面的方程式。',
    answer: '$x+y+z=3$',
    hasImage: true,
  },
  {
    id: '17ce884893d',
    chapter: '空間中的平面與直線',
    question:
      '已知空間中有一點 $A$，$A$ 投影到平面 $E_1:x+y+2z=2$ 的垂足點為 $P$，$A$ 投影到平面 $E_2:2x+y+z=1$ 的垂足點為 $Q$，且 $\\angle PAQ$ 為鈍角，求 $\\cos\\angle PAQ$。',
    answer: '$-\\frac56$',
    hasImage: false,
  },
  {
    id: '17ce884e49c',
    chapter: '空間中的平面與直線',
    question:
      '$k\\in\\mathbb R$，平面 $E_1:kx+y=1$ 與 $E_2:x-z=5$ 必定交於一直線，若 $E_1$ 與 $E_2$ 的銳交角為 $60\\du$，求 $k$。',
    answer: '$\\pm1$',
    hasImage: false,
  },
  {
    id: '17ce88642e7',
    chapter: '空間中的平面與直線',
    question:
      '坐標空間中，若平面 $E:ax+by+cz=1$ 滿足以下三條件：\n(1) 平面 $E$ 與平面 $F:x+y+z=1$ 有一夾角為 $30\\du$\n(2) 點 $A(1,1,1)$ 到平面 $E$ 的距離等於 $3$\n(3) $a+b+c>0$\n求 $a+b+c$ 的值。',
    answer: '$\\frac13$',
    hasImage: false,
  },
  {
    id: '17ce886b874',
    chapter: '空間中的平面與直線',
    question:
      '已知平面 $E_1:2x+3y+6z=5$ 與平面 $E_2:ax+by+cz=0$ 的銳夾角為 $60\\du$，求點 $P(2,3,6)$ 到 $E_2$ 的距離。',
    answer: '$\\frac72$',
    hasImage: false,
  },
  {
    id: '17ce8887888',
    chapter: '空間中的平面與直線',
    question:
      '$H:x-y+z=2$ 為坐標空間中一平面，$L$ 為平面 $H$ 上的一直線。已知點 $P(2,1,1)$ 為 $L$ 上距離原點 $O$ 最近的點，若 $L$ 的方向向量為 $(2,a,b)$，求數對 $(a,b)$。',
    answer: '$(-1,-3)$',
    hasImage: false,
  },
  {
    id: '17ce8893acd',
    chapter: '空間中的平面與直線',
    question:
      '在坐標空間中，平面 $x-2y+z=0$ 上有一以點 $P(1,1,1)$ 為圓心的圓 $\\Gamma$，而 $Q(-9,9,27)$ 為圓 $\\Gamma$ 上一點。若過 $Q$ 與圓 $\\Gamma$ 相切的直線之一方向向量為 $(a,b,1)$，求數對 $(a,b)$。',
    answer: '$(5,3)$',
    hasImage: false,
  },
  {
    id: '17ce889fd1c',
    chapter: '空間中的平面與直線',
    question:
      '在空間坐標中，下列哪些選項中之圖形為一直線？\n(1) $2x+y=1$ (2) $\\begin{cases}x+3y-2z=1\\\\2x+6y-4z=3\\end{cases}$\n(3) $\\begin{cases}x=1\\\\y=2\\\\z=-3\\end{cases}$ (4) $\\begin{cases}x-2y+z=1\\\\2x-y-z=1\\end{cases}$\n(5) $\\frac{x-1}1=\\frac{y-2}{-1}=\\frac{z+3}2$',
    answer: '(4)(5)',
    hasImage: false,
  },
  {
    id: '17ce88a79bf',
    chapter: '空間中的平面與直線',
    question:
      '空間坐標中有直線 $L$ 與平面 $E$，$L$ 上有一點 $P(3,4,9)$，對平面 $E$ 的投影點為 $Q(1,2,11)$，若 $L$ 與 $E$ 的交點為 $R(a,a,a-3)$，求 $a$ 及直線 $L$ 的方程式。',
    answer: '$-11$；$\\frac{x-3}{14}=\\frac{y-4}{15}=\\frac{z-9}{23}$',
    hasImage: false,
  },
  {
    id: '17ce1b28bc3',
    chapter: '空間中的平面與直線',
    question:
      '坐標空間中一質點自點 $P(1,1,1)$ 沿著方向 $\\vector a=(1,2,2)$ 等速直線前進，經過 5 秒後剛好到達平面 $x-y+3z=28$ 上，立即轉向沿著方向 $\\vector b=(-2,2,-1)$ 依同樣的速率等速直線前進。請問再經過幾秒此質點會剛好到達平面 $x=2$ 上？\n(1) 1 (2) 2 (3) 3 (4) 4 (5) 永遠不會到達 ',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '17ce88eab1a',
    chapter: '空間中的平面與直線',
    question:
      '空間中點 $A(1,0,2)$、$B(3,7,6)$，\n(1) 求 $\\overleftrightarrow{AB}$ 與平面 $E:x+2y-z=23$ 的交點坐標\n(2) $\\overleftrightarrow{AB}$ 對平面 $E$ 的投影為直線 $L$，求 $L$ 的方程式。',
    answer: '(1) $(5,14,10)$ (2) $x=5, y-14=\\frac{z-10}{2}$',
    hasImage: false,
  },
  {
    id: '17ce39dfad8',
    chapter: '空間中的平面與直線',
    question:
      '空間中有三點 $A(1,7,2)$、$B(2,-6,3)$、$C(0,-4,1)$。若直線 $L$ 通過 $A$ 點並與直線 $BC$ 相交且垂直，求 $L$ 和直線 $BC$ 的交點。',
    answer: '(-3, -1, -2)',
    hasImage: false,
  },
  {
    id: '17ce88fac9a',
    chapter: '空間中的平面與直線',
    question:
      '空間中點 $A(1,2,4)$，動點 $P$ 在 $L:\\frac{x-1}1=\\frac{y+1}2=\\frac{z-2}1$ 上，若 $\\overline{AP}\\le\\sqrt{3}$，則滿足條件的 $P$ 點形成一條線段，求此線段的長度。',
    answer: '$\\frac{2\\sqrt{6}}3$',
    hasImage: false,
  },
  {
    id: '179b678da6e',
    chapter: '空間中的平面與直線',
    question:
      '一平面 $E$ 過點 $A(1,-2,1)$，且與兩平面 $E_1:x+2y-z+2=0$，$E_2:x-y+2z-3=0$ 均垂直，試求此平面 $E$ 的方程式。',
    answer: '$x-y-z-2=0$',
    hasImage: false,
  },
  {
    id: '179b67a2641',
    chapter: '空間中的平面與直線',
    question:
      '設平面 $E$ 通過 $(-1,0,0)$、$(0,0,1)$ 且與 $yz$ 平面的夾角為 $60\\du$，試求平面 $E$ 的方程式。',
    answer: '$x-\\sqrt{2}y-z+1=0$ 或 $x+\\sqrt{2}y-z+1=0$',
    hasImage: false,
  },
  {
    id: '179b67bd4c0',
    chapter: '空間中的平面與直線',
    question:
      '設 $A(4,3,2)$，$B(2,1,4)$，點 $P$ 在平面 $E:x-2y-2z=2$ 上移動，試求 $\\overline{PA}^2+\\overline{PB}^2$ 的最小值。',
    answer: '$24$',
    hasImage: false,
  },
  {
    id: '179b67de736',
    chapter: '空間中的平面與直線',
    question:
      '求滿足下列各條件的直線方程式：\n(1) 過 $A(1,0,1)$，$B(3,1,2)$\n(2) 過 $A(1,0,1)$，且垂直於平面 $x-2y+3z=2$\n(3) 過 $A(1,0,1)$，且垂直 $L_1:\\frac{x}{2}=\\frac{y}{1}=\\frac{z+3}{3}$，$L_2:\\frac{x-1}{2}=\\frac{y}{-1}=\\frac{z-1}{1}$',
    answer:
      '(1) $\\frac{x-1}{2}=\\frac{y}{1}=\\frac{z-1}{1}$ (2) $\\frac{x-1}{1}=\\frac{y}{-2}=\\frac{z-1}{3}$ (3) $\\frac{x-1}{1}=\\frac{y}{1}=\\frac{z-1}{1}$',
    hasImage: false,
  },
  {
    id: '179b67f74a6',
    chapter: '空間中的平面與直線',
    question:
      '設 $A(1,2,3)$，$B(2,1,-1)$，$C(0,-3,1)$，求過 $\\triangle ABC$ 重心且垂直 $\\triangle ABC$ 所在平面的直線方程式為何？',
    answer: '$\\frac{x-1}{3}=\\frac{y}{-1}=\\frac{z-1}{1}$',
    hasImage: false,
  },
  {
    id: '179b680fa03',
    chapter: '空間中的平面與直線',
    question:
      '設點 $P(4,-3,2)$ 與 $E_1:x+y+z=1$，$E_2:2x+3y+5z=7$，求：\n(1) $E_1$、$E_2$ 交線 $L$ 的參數式 (2) $P$ 到 $L$ 的距離',
    answer:
      '(1) $L:\\begin{cases}x=-4+2t\\\\y=5-3t\\\\z=t\\end{cases},t\\in\\mathbb{R}$ (2) $\\sqrt{6}$',
    hasImage: false,
  },
  {
    id: '1794a2206aa',
    chapter: '空間中的平面與直線',
    question:
      '空間中有一質點作等速度運動。若時間 $t=0$ 時，此點位於 $A(2,-3,4)$；而 $t=2$ 時，此點位於 $B(6,7,3)$，試求當 $t$ 等於多少時，此點恰好落在平面 $E:2x-y-10z=7$ 上？\n(A) $5$ (B) $10$ (C) $12$ (D) $14$ (E) $15',
    answer: '(B)',
    hasImage: false,
  },
  {
    id: '1794a27814f',
    chapter: '空間中的平面與直線',
    question:
      '平面 $E$ 過 $A(6,0,0)$、$B(0,-4,0)$、$C(0,0,k)$，$k>0$，又點 $D(0,1,-1)$ 到平面 $E$ 的距離為 $3$。下列選項中的點，哪個點在平面 $E$ 上？\n(A) $(3,4,1)$ (B) $(-5,-3,2)$ (C) $(3,4,3)$ (D) $(5,6,3)$ (E) $(1,2,3)$',
    answer: '(C)',
    hasImage: false,
  },
  {
    id: '1794a2a729b',
    chapter: '條件機率',
    question:
      '數學第三次段考單選題部分共 $5$ 題，小金因為沒有讀書，所以只能全部用猜的，若小金每題猜對的機率為 $\\frac{1}{5}$ 且每題猜對與否為獨立事件。試求小金奇數題全對，偶數題全錯的機率為？\n(A) $\\frac{1}{5^5}$ (B) $\\frac{4}{5^5}$ (C) $\\frac{16}{5^5}$ (D) $\\frac{64}{5^5}$ (E) $\\frac{80}{5^5}$',
    answer: '(C)',
    hasImage: false,
  },
  {
    id: '1794a300cc0',
    chapter: '空間中的平面與直線',
    question:
      '下列各直線中，請選出與 $y$ 軸互為歪斜線的選項有哪些？\n(A) $L_1: \\begin{cases} y=0\\\\ x+z=2 \\end{cases}$ (B) $L_2: \\begin{cases} x+y=1\\\\ z=0 \\end{cases}$\n(C) $L_3: \\begin{cases} y=1\\\\ z=2 \\end{cases}$ (D) $L_4: \\begin{cases} y=0\\\\ z=0 \\end{cases}$ (E) $L_5: \\begin{cases} x=1\\\\ z=1 \\end{cases}$',
    answer: '(A)(C)',
    hasImage: false,
  },
  {
    id: '17932d2b76c',
    chapter: '空間中的平面與直線',
    question:
      '下列何者正確？\n(A)若 $L_1:\\frac{x-1}{2}=\\frac{y-2}{3}=\\frac{z}{4}$，平面 $E:x+2y-2z=5$，則 $L_1\\parallel E$\n(B)若 $L_2:\\frac{x-1}{2}=\\frac{y-2}{2}=\\frac{z-5}{3}$，平面 $E:x+2y-2z=5$，則 $L_2$ 在平面 $E$ 上\n(C)若 $L_3:\\frac{x+3}{-1}=\\frac{y-4}{-2}=\\frac{z-1}{2}$，平面 $E:x+2y-2z=5$，則 $L_3\\perp E$\n(D)直線 $\\frac{x-3}{2}=\\frac{y-2}{4}=\\frac{z-4}{3}$ 與 $\\frac{x-1}{4}=\\frac{y+2}{8}=\\frac{z-1}{6}$ 代表同一直線\n(E)直線 $\\frac{x-1}{3}=\\frac{y-2}{2}=\\frac{z-1}{4}$ 與 $\\frac{x-2}{2}=\\frac{y-3}{1}=\\frac{z+1}{2}$ 互為歪斜',
    answer: '(C)(D)(E)',
    hasImage: false,
  },
  {
    id: '1794b22404e',
    chapter: '空間中的平面與直線',
    question:
      '一光束沿 $\\vector a=(2,3,4)$ 方向射向平面 $E$ 上一點 $P(4,5,6)$ 後，再沿 $\\vector b=(4,3,-2)$ 的方向反射出，則平面 $E$ 的方程式為？',
    answer: '$x-3z+14=0$',
    hasImage: false,
  },
  {
    id: '1794b23b610',
    chapter: '空間中的平面與直線',
    question:
      '已知平面 $E$ 過點 $(1,-2,3)$，且與 $E_1:3x+y+z-2=0$，$E_2:x-2y+z+4=0$ 皆垂直，則平面 $E$ 的方程式為？',
    answer: '$3x-2y-7z+14=0$',
    hasImage: false,
  },
  {
    id: '1794b258d0a',
    chapter: '空間中的平面與直線',
    question:
      '已知點 $P(2,1,4)$ 到平面 $E:ax+2y-3z=0$ ($a\\neq0$)的距離為 $\\sqrt{5}$，試求 $P$ 點到直線 $L:\\frac{x}{a}=\\frac{y-3}{2}=\\frac{z-2}{-3}$ 的距離為？',
    answer: '$\\sqrt{7}$',
    hasImage: false,
  },
  {
    id: '1794b278d6e',
    chapter: '空間中的平面與直線',
    question:
      '設空間中兩平面 $E_1:\\frac{x}{a}+\\frac{y}{b}+\\frac{z}{c}=1$，$E_2:\\frac{x}{a+6}+\\frac{y}{b+3}+\\frac{z}{c+3}=1$，其中 $abc\\neq0$：\n(1)若 $E_1$ 與 $E_2$ 平行，則 $a:b:c=$？\n(2)承(1)，$E_1$ 與 $E_2$ 的距離為？',
    answer: '(1) $2:1:1$ (2) $2$',
    hasImage: false,
  },
];

// 條件機率
const conditionalProb: Question[] = [
  {
    id: '185150e8b8f',
    chapter: '條件機率',
    question:
      '某一遊戲獎品，可以由一人獨得，也可以兩人同時獲得，兩人得獎與否互為獨立。已知甲、乙兩人獲得此獎的機率相同，並且他們兩人中有人獲獎的機率是 0.51，則甲、乙兩人同時得獎的機率是 $\\textcirc{7-1}.\\textcirc{7-2}\\textcirc{7-3}$。',
    answer: '0.09',
    hasImage: false,
  },
  {
    id: '184d344ce29',
    chapter: '條件機率',
    question:
      '有一問答遊戲共有 5 道題目，參賽者必須由第 1 題開始依序回答，若連續答對 2 題則過關並停止遊戲，假設每一題答對的機率均為 $\\dfrac13$，且各題答對或答錯互不影響，請問在參賽者甲第二題答對的情況下，甲順利過關的機率為何？\n(1) $\\dfrac{49}{243}$　(2) $\\dfrac{49}{81}$　(3) $\\dfrac5{27}$　(4) $\\dfrac59$　(5) $\\dfrac13$',
    answer: '2',
    hasImage: false,
  },
  {
    id: '186f24bdf6d',
    chapter: '三角比',
    question:
      '計算下列各式的值：\n(1) $\\sin30\\du+(\\sin90\\du\\times\\cos180\\du)+\\tan45\\du$\n(2) $\\sin^217\\du+\\sin^2107\\du+\\cos17\\du+\\cos163\\du$',
    answer: '(1) $\\frac12$ (2) 1',
    hasImage: false,
  },
  {
    id: '184a4ffc468',
    chapter: '三角比',
    question:
      '2020 年年初爆發 COVID-19 疫情，統計至 2020 年 5 月底為止死亡人數已將近 40 萬人。為即時診斷出這種病，醫界研究出某種偵測病毒核酸存在的檢驗方法。根據這種方法可檢測判斷陰性或陽性反應，但也有可能誤判，其中患有 COVID-19 的病人，被檢查出來有 COVID-19 的機率是 100%，而一般感冒沒有得 COVID-19 的人，被檢查成有患 COVID-19 的機率是 2%，而正常健康的人被誤診患有 COVID-19 的機率是 0.1%。在某國家城市中，實際患有 COVID-19 的患者佔 2%，患有一般感冒非 COVID-19 的人佔 8%，健康的人佔 90%，現從該城市中任選一人加以檢驗，若此人被檢驗出感染 COVID-19，求此人確實感染 COVID-19 的機率為 $\\dfrac{\\textcirc{6-1}}{\\textcirc{6-2}}$。',
    answer: '89',
    hasImage: false,
  },
  {
    id: '180be2f6ab4',
    chapter: '條件機率',
    question:
      '設甲、乙、丙三人射擊的命中率分別為 $\\frac25$、$\\frac12$、$\\frac35$，今在靶場中，有一目標靶，三人各射擊一發，且每個人命中靶面的事件為獨立事件，求恰有兩人命中的機率。',
    answer: '$\\frac{19}{50}$',
    hasImage: false,
  },
  {
    id: '180be31cbae',
    chapter: '條件機率',
    question:
      '已知一箱中共有 20 枚硬幣，其中 7 枚兩面皆是人頭，8 枚兩面皆是字，其餘 5 枚一面是人頭一面是字，每枚硬幣被選到之機會均等，今將手伸入箱中握住一枚硬幣，取出後打開手掌，發現一面是人頭，求另一面也是人頭的之機率。',
    answer: '$\\frac{14}{19}$',
    hasImage: false,
  },
  {
    id: '1809a3dd105',
    chapter: '條件機率',
    question:
      '設 $A$、$B$ 為獨立事件，且 $P(B)=\\frac15$，$P(A\\cup B)=\\frac7{10}$，求 $P(A)$。(1) $\\frac12$ (2) $\\frac3{10}$ (3) $\\frac78$ (4) $\\frac58$ (5) $\\frac38$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '1809a408850',
    chapter: '條件機率',
    question:
      '設甲、乙兩人射擊的命中率分別為 $\\frac23$、$\\frac34$，今兩人同射一靶，每人各射擊一發，且射擊時彼此互不影響，若已知靶面恰中一發，求是由甲命中的機率。(1) $\\frac34$ (2) $\\frac16$ (3) $\\frac58$ (4) $\\frac13$ (5) $\\frac25$',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '1809a4a0b3e',
    chapter: '條件機率',
    question:
      '設 $A$、$B$ 為樣本空間中的兩個事件，已知 $P(A)=P(B)=0.6$，請選出正確的選項。\n(1) $P(A\\cup B)=1$ (2) $P(A\\cap B)\\ge0.2$ (3) $P(A|B)=1$ (4) $P(A|B)=P(B|A)$ (5) $A$、$B$ 是獨立事件',
    answer: '(2)(4)',
    hasImage: false,
  },
  {
    id: '1809a599bb8',
    chapter: '條件機率',
    question: '擲一顆公正的骰子兩次，已知擲出的點數和大於 8 的條件下，求第一次出現 5 點的機率。',
    answer: '$\\frac3{10}$',
    hasImage: false,
  },
  {
    id: '1809a5c302f',
    chapter: '條件機率',
    question:
      '市面上某廠牌的防毒軟體聲稱會對你所下載的所有檔案都掃描一次，無論該檔案有毒或是沒毒，病毒偵測準確度達 95%，已知某批下載的檔案中，有 2% 含帶病毒。當此防毒軟體掃描的過程中，顯示某檔案含帶病毒，求該檔案確實含帶病毒的機率。',
    answer: '$\\frac{19}{68}$',
    hasImage: false,
  },
  {
    id: '1807d95db8c',
    chapter: '條件機率',
    question: '擲三顆公正骰子一次，在至少出現一顆 5 點的條件下，求點數和為奇數的機率。',
    answer: '$\\frac{46}{91}$',
    hasImage: false,
  },
  {
    id: '1807d94cf3a',
    chapter: '條件機率',
    question:
      '學期結束，教務處公告：全校學生中，有 $\\frac25$ 國文不及格，有 $\\frac34$ 數學不及格，有 $\\frac3{20}$ 兩科都不及格。今任選一學生，若已知他國文不及格，求他數學及格的機率。',
    answer: '$\\frac58$',
    hasImage: false,
  },
  {
    id: '1807d9373c7',
    chapter: '條件機率',
    question:
      '袋中有 8 個白球，4 個紅球，每個球被取到的機率均等，一次取三球，求三球同色的條件下，三球皆為紅色的機率。',
    answer: '$\\frac1{15}$',
    hasImage: false,
  },
  {
    id: '1807d909204',
    chapter: '條件機率',
    question:
      '投擲一公正的骰子，考慮下列三個事件：$A$：出現奇數點；$B$：出現偶數點；$C$：出現 1 點或 2 點，則下列選項何者正確？\n(1) $P(A|B)=0$ (2) $P(A|C)=\\frac12$\n(3) $A$、$B$ 是獨立事件 (4) $A$、$C$ 是獨立事件\n(5) $B$、$C$ 是獨立事件',
    answer: '(1)(2)(4)(5)',
    hasImage: false,
  },
  {
    id: '1807d77e3b5',
    chapter: '條件機率',
    question:
      '某校數學複習考有 800 位同學參加，評分後將此 800 位同學依總分由高到低排序：前 200 人為 A 組，次 200 人為 B 組，再次 200 人為 C 組，最後 200 人為 D 組。再進一步逐題分析同學答題情形，將各組第一題的答對率列表如下，若從第一題答錯的同學中隨機抽出一人，此人屬於 C 組的機率為 $\\frac25$，求 C 組中第一題答錯的人數。$$\\begin{array}{|c|c|}\\hline&A&B&C&D\\\\\\hline第一題答對率(\\%)&100&80&p&0\\\\\\hline\\end{array}$$',
    answer: '160',
    hasImage: false,
  },
  {
    id: '1807d7c4809',
    chapter: '條件機率',
    question:
      '若某社團參加人員依性別與年級分，人數統計表如下。今隨機從社團中抽樣，設 A、B 分別表抽到男生與抽到二年級學生的事件，若事件 A、B 為獨立，求 $x$。\n$$\\begin{array}{|c|c|}\\hline&一年級&二年級\\\\\\hline男&6&18\\\\\\hline女&4&x\\\\\\hline\\end{array}$$',
    answer: '12',
    hasImage: false,
  },
  {
    id: '18051fc51b0',
    chapter: '條件機率',
    question:
      '設 $A$、$B$ 為樣本空間之兩事件，且 $P(A)=\\frac13$，$P(B)=\\frac12$，$P(A\\cup B)=\\frac7{12}$，求 $P(B|A)$。',
    answer: '$\\frac34$',
    hasImage: false,
  },
  {
    id: '18052006133',
    chapter: '條件機率',
    question:
      '袋中有 2 個金幣及 3 個銀幣，由小傑取出一枚握在手中，並聲稱是一枚金幣。\n(1) 若小明認為小傑說實話的機率為 $\\frac23$，則對小明來說，小傑手中確實是金幣的機率為？\n(2) 若小華認為小傑說實話的機率只有 $\\frac13$，則對小華而言，小傑手中確實是金幣的機率為？',
    answer: '(1) $\\frac47$ (2) $\\frac14$',
    hasImage: false,
  },
  {
    id: '1805203579d',
    chapter: '條件機率',
    question:
      '有一顆不公正的骰子丟擲百伺候個點數的出現次數如表，擲該骰兩次，根據表求：\n(1) 點數均為奇數的機率\n(2) 點數和的期望值\n$$\\begin{array}{|c|c|}\\hline點數&1&2&3&4&5&6\\\\\\hline次數&23&21&16&18&12&10\\\\\\hline\\end{array}$$',
    answer: '(1) 0.2601 (2) 6.1',
    hasImage: false,
  },
  {
    id: '17fdfa6586d',
    chapter: '條件機率',
    question:
      "樣本空間有事件 $A$ 與 $B$，已知 $P(A|B)=\\frac13$，$P(A)=\\frac35$，$P(A\\cup B)=\\frac45$，求：\n(1) $P(B|A)$ (2) $P(A'|B')$",
    answer: '(1) $\\frac16$ (2) $\\frac27$',
    hasImage: false,
  },
  {
    id: '17fdfa891c8',
    chapter: '條件機率',
    question:
      "樣本空間有事件 $A$ 與 $B$，已知 $P(A)=\\frac13$，$P(A'\\cap B)=\\frac14$，$P(A|B)=\\frac25$，求：\n(1) $P(A\\cap B)$ (2) $P(A|B')$",
    answer: '(1) $\\frac16$ (2) $\\frac27$',
    hasImage: false,
  },
  {
    id: '17fe7a403fe',
    chapter: '條件機率',
    question:
      "樣本空間中有事件 $A$、$B$，若 $P(A)=\\frac13$，$P(B)=\\frac12$，$P(A\\cup B)=\\frac35$，求 $P(A|B)$、$P(B'|A)$。",
    answer: '$\\frac7{15}$；$\\frac3{10}$',
    hasImage: false,
  },
  {
    id: '17fe7a5ae21',
    chapter: '條件機率',
    question:
      '事件 $A$ 與 $B$，已知 $P(A\\cap B)=\\frac1{12}$，$P(A\\cup B)=\\frac34$，$P(A|B)=\\frac12$，求 $P(B|A)$。',
    answer: '$\\frac18$',
    hasImage: false,
  },
  {
    id: '17fe7a6e54c',
    chapter: '條件機率',
    question:
      '某家庭有兩個小孩，男孩、女孩的機會均等，\n(1) 已知在兩個小孩中至少有一個男孩，求兩個均為男孩的機率\n(2) 已知較大的小孩是男孩，求兩個均為男孩的機率',
    answer: '(1) $\\frac13$ (2) $\\frac12$',
    hasImage: false,
  },
  {
    id: '17fe7a8cd44',
    chapter: '條件機率',
    question:
      '擲三枚相同硬幣一次，在至少出現一個正面的條件下，求：\n(1) 恰好出現三個正面的機率\n(2) 恰好出現一個正面的機率',
    answer: '(1) $\\frac17$ (2) $\\frac37$',
    hasImage: false,
  },
  {
    id: '17fe7a9d67b',
    chapter: '條件機率',
    question: '擲兩粒均勻骰子一次，若點數和大於 8，求至少一粒骰子為 5 點的機率。',
    answer: '$\\frac12$',
    hasImage: false,
  },
  {
    id: '17fe7ab5107',
    chapter: '條件機率',
    question:
      '擲三顆公正骰子，若三顆骰子的點數均相異，求：\n(1) 恰有一次出現 6 點的機率\n(2) 沒有出現 1 點也沒有出現 6 點的機率',
    answer: '(1) $\\frac12$ (2) $\\frac15$',
    hasImage: false,
  },
  {
    id: '17fe7ad2af2',
    chapter: '條件機率',
    question:
      '某次月考，高三學生中數學不及格有 $\\frac35$，英文不及格有 $\\frac23$，數學與英文至少一科不及格有 $\\frac56$，今任選一名高三學生，若此生數學及格，試求生英文不及格之機率。',
    answer: '$\\frac7{12}$',
    hasImage: false,
  },
  {
    id: '17fe7aedcae',
    chapter: '條件機率',
    question: '擲一公正銅板 8 次，已知共出現 4 正面與 4 反面，求投擲過程是正反面交錯出現的機率。',
    answer: '$\\frac1{35}$',
    hasImage: false,
  },
  {
    id: '17fe7b03132',
    chapter: '條件機率',
    question:
      '擲一公正骰子三次，$A$ 表第一次出現偶數的事件，$B$ 表三次的點數和為 12 的事件，求 $P(A|B)$、$P(B|A)$。',
    answer: '$\\frac{13}{25}$；$\\frac{13}{108}$',
    hasImage: false,
  },
  {
    id: '17fe7b1fbd9',
    chapter: '條件機率',
    question:
      '設袋中有 10 個紅球、8 個白球，今自袋中連取兩次，每次取一球，取後不放回。已知兩次中至少有一次取到紅球，試求兩球皆為紅球的機率。',
    answer: '$\\frac9{25}$',
    hasImage: false,
  },
  {
    id: '17fe7b4d9a2',
    chapter: '條件機率',
    question:
      '袋中有 4 紅球、5 白球、3 黑球，今自袋中每次取出一球，取後不放回。求：\n(1) 第一次拿紅球、第二次拿黑球、第三次拿白球的機率\n(2) 在第四次拿白球的條件下，在第二次也拿白球的機率',
    answer: '(1) $\\frac1{22}$ (2) $\\frac4{11}$',
    hasImage: false,
  },
  {
    id: '17fe7b7d1b0',
    chapter: '條件機率',
    question:
      '某同學早上騎車上學有甲、乙兩條路線可以選擇，走甲路線有 0.1 的機率會遲到，走乙路線則有 0.2 的機率會遲到。無論走哪一條路線，只要不遲到，下次就走同一條路線，否則就換另一條路線。假設他第一天走甲路線，求第四天走乙路線的機率。',
    answer: '0.219',
    hasImage: false,
  },
  {
    id: '1800a45d814',
    chapter: '條件機率',
    question:
      '甲、乙兩袋各有 5 球，僅甲袋中有 1 個白球，今自甲袋取 3 球放入乙袋，再由乙袋取 3 球放入甲袋，求白球在甲袋之機率。',
    answer: '$\\frac58$',
    hasImage: false,
  },
  {
    id: '1800a4a63af',
    chapter: '條件機率',
    question:
      '甲袋有 3 個白球、2 個黑球、1 個紅球，乙袋有 1 個白球、2 個黑球、3 個紅球，丙袋有 2 個白球、2 個黑球、2 個紅球，已知選袋之機會相等，每顆球被取到之機會也相同，今由甲、乙、丙之任一袋中取出兩球，試問：\n(1) 求此兩球為一黑一白之機率\n(2) 若所取兩球為一黑一白，求此兩球來自甲袋的機率',
    answer: '(1) $\\frac4{15}$ (2) $\\frac12$',
    hasImage: false,
  },
  {
    id: '1800a4bb4e5',
    chapter: '條件機率',
    question:
      '甲說實話的機率為 $\\frac23$，乙說實話的機率為 $\\frac14$。今有一袋內含 4 白球、3 黑球，自袋中任取一球，甲說白球，乙說黑球，求此球確實為白球的機率。',
    answer: '$\\frac89$',
    hasImage: false,
  },
  {
    id: '1800a4ca792',
    chapter: '條件機率',
    question:
      '籤筒中有 8 支籤，其中 3 支有獎，甲、乙、丙依序各抽一支，取出不放回，若已知丙中獎，求甲、乙至少有一人中獎的機率。',
    answer: '$\\frac{11}{21}$',
    hasImage: false,
  },
  {
    id: '1800a4f150a',
    chapter: '條件機率',
    question:
      '設 $A_1$、$A_2$、$A_3$ 皆為樣本空間 $S$ 的一分割，$B$ 為 $S$ 中某一事件，已知 $P(A_1)=0.3$，$P(A_2)=0.4$，$P(B|A_3)=0.7$，試求 $P(A_3\\cap B)$。',
    answer: '0.21',
    hasImage: false,
  },
  {
    id: '1800a5133ce',
    chapter: '條件機率',
    question:
      '實驗室中透過驗血來測試肝炎，90% 的肝炎患者都是呈陽性反應，而 5% 的非肝炎患者也會呈陽性反應。假設實際患有肝炎者占人口的 20%，今任選一人驗血，若驗後呈陽性反應，試求此人患有肝炎的機率。',
    answer: '$\\frac9{11}$',
    hasImage: false,
  },
  {
    id: '1800a52bc72',
    chapter: '條件機率',
    question:
      '某一高中，高一學生占 40%、高二占 30%、高三占 30%。高一的學生中，男生占 55%，高二的學生中，男生占 50%，高三的學生中，男生占 50%。如今隨機抽取一學生，若已知抽中女生，試求這位女生是高三的機率。',
    answer: '$\\frac5{16}$',
    hasImage: false,
  },
  {
    id: '1800a547f34',
    chapter: '條件機率',
    question:
      '依過去經驗得知，某電腦工廠檢驗其產品的過程中，將良品檢驗為不良品之機率為 0.1，將不良品檢驗為良品之機率為 0.05，已知該產品中，不良品占 5%，良品占 95%，若一件產品被檢驗為良品，求該產品實際上為不良品之機率。',
    answer: '$\\frac1{343}$',
    hasImage: false,
  },
  {
    id: '1800a56d4bd',
    chapter: '條件機率',
    question:
      '某大型連鎖醫院由國外引進新的肝病檢測技術，經過大規模抽檢後，這個新的檢測技術顯示我國民眾的肝病罹患比率為 28%。但是，國外的分析報告指出，這個檢測技術在檢測真的患有肝病的病人時，只有 98% 的機率檢測出有病，在檢測沒有肝病的病人時，卻有 3% 的機率會檢測出有病。由這些訊息推知，求我國民眾真實罹患肝病的百分比。(四捨五入至個位數)',
    answer: '26%',
    hasImage: false,
  },
  {
    id: '1802e4ecb85',
    chapter: '條件機率',
    question: '若 $A$、$B$ 為獨立事件，且已知 $P(A)=\\frac14$，$P(A\\cup B)=\\frac12$，求 $P(B)$。',
    answer: '$\\frac13$',
    hasImage: false,
  },
  {
    id: '1802e5077d0',
    chapter: '條件機率',
    question:
      '設 $A$、$B$、$C$ 皆為樣本空間中互相獨立之三事件。已知 $P(A)=\\frac23$，$P(B|A)=\\frac34$，且 $P(B\\cap C)=\\frac25$，求：\n(1) $P(A\\cap B\\cap C)$ (2) $P((A\\cup B)\\cap C)$',
    answer: '(1) $\\frac4{15}$ (2) $\\frac{22}{45}$',
    hasImage: false,
  },
  {
    id: '1802e52018d',
    chapter: '條件機率',
    question:
      '設 $A$、$B$、$C$ 為獨立事件，已知 $A$ 發生的機率為 $\\frac12$，$B$ 發生的機率為 $\\frac14$，$A$、$B$、$C$ 均發生的機率為 $\\frac1{12}$，求 $A$、$B$、$C$ 恰有一事件發生的機率。',
    answer: '$\\frac5{12}$',
    hasImage: false,
  },
  {
    id: '1802e5370af',
    chapter: '條件機率',
    question:
      '設甲、乙、丙三人解題的能力分別為 $\\frac45$、$\\frac35$、$\\frac25$，今三人獨立同解一題，則：\n(1) 求此題被解出的機率\n(2) 若已知此題恰有一人解出，求是由丙解出的機率',
    answer: '(1) $\\frac{119}{125}$ (2) $\\frac4{37}$',
    hasImage: false,
  },
  {
    id: '1802e55343d',
    chapter: '條件機率',
    question:
      '某運動員可經由兩種管道取得奧運代表資格，一是在亞運會中獲得前五名，一是在全運會及全國錦標賽中都獲得前三名，假設他在亞運會中獲得前五名的機率為 $\\frac12$，而在全運會及全國錦標賽中獲得前三名的機率為 $\\frac23$，若他在三個場合的表現互不影響，求其取得奧運代表資格的機率。',
    answer: '$\\frac{13}{18}$',
    hasImage: false,
  },
  {
    id: '1802e570063',
    chapter: '條件機率',
    question:
      '甲、乙、丙三人同射一靶，每人一發，設甲、乙、丙的射擊命中率各為 0.4、0.7、0.8；並設各人命中靶面的機率為獨立事件，求靶面恰中一發的機率。',
    answer: '0.488',
    hasImage: false,
  },
  {
    id: '1802e584b90',
    chapter: '條件機率',
    question:
      '甲、乙兩射手之命中率分別為 $\\frac12$、$\\frac23$。今兩人對同一靶各射擊兩發，各人命中靶面的事件為獨立事件，求：\n(1) 靶面恰中一發的機率\n(2) 若已知靶面中靶，求甲有命中靶面的機率',
    answer: '(1) $\\frac16$ (2) $\\frac{27}{35}$',
    hasImage: false,
  },
  {
    id: '1802e5aca8f',
    chapter: '條件機率',
    question:
      '甲、乙兩人打靶，甲命中率為 $\\frac35$，乙命中率為 $\\frac23$。今兩人對同一靶各射二發。\n(1) 求此靶面恰被射中二發的機率\n(2) 若甲射二發，則乙至少需射幾發才能使命中靶面的機率超過 0.999\n($\\log2\\approx0.3010$，$\\log3\\approx0.4771$)',
    answer: '(1) $\\frac{73}{225}$ (2) 5',
    hasImage: false,
  },
  {
    id: '1802e5c1cbc',
    chapter: '條件機率',
    question:
      '甲、乙依序輪流投擲一公正骰子，共擲 4 次，先擲得 1 點者獲勝，分別求甲、乙、丙獲勝的機率。',
    answer: '$\\frac{61}{216}$；$\\frac{305}{1296}$；$\\frac{625}{1296}$',
    hasImage: false,
  },
  {
    id: '1802e5d7a4e',
    chapter: '條件機率',
    question:
      '甲和乙兩人依「甲乙乙甲甲乙乙甲」的順序，每次擲一枚公正銅板，兩人共擲 8 次，先擲出正面者獲勝，試分別求甲、乙獲勝的機率。',
    answer: '$\\frac{153}{256}$；$\\frac{51}{128}$',
    hasImage: false,
  },
  {
    id: '1802e61e5de',
    chapter: '條件機率',
    question:
      '甲、乙兩人猜拳若干次，每次勝者得 3 分，敗者得 0 分，若平手時，雙方皆得 1 分。\n(1) 若猜拳一次，求甲獲勝的機率\n(2) 若猜拳五次，求甲獲得 7 分的機率\n(3) 若猜拳五次，在甲獲得 7 分的條件下，求甲乙兩人獲勝次數相同的機率',
    answer: '(1) $\\frac13$ (2) $\\frac{35}{243}$ (3) $\\frac67$',
    hasImage: false,
  },
  {
    id: '1802e65cc51',
    chapter: '條件機率',
    question:
      '某疾病可分為兩種類型：第一類占 70%，可藉由藥物 A 治療，其每一次療程的成功率為 70%，且每一次療程的成功與否互相獨立；其餘為第二類，藥物 A 治療方式完全無效。在不知道患者所患此疾病的類型，且用藥物 A 第一次療程失敗的情況下，求進行第二次療程成功的條件機率。',
    answer: '$\\frac{49}{170}$',
    hasImage: false,
  },
  {
    id: '17de1800c07',
    chapter: '條件機率',
    question:
      '樣本空間有事件 $A$ 與 $B$，已知 $P(A)=\\frac34$，$P(B)=\\frac47$，$P(A\\cap B)=\\frac25$，求 $P(A|B)$。',
    answer: '$\\frac7{10}$',
    hasImage: false,
  },
  {
    id: '17de180c98b',
    chapter: '條件機率',
    question:
      '樣本空間有事件 $A$ 與 $B$，$A$ 發生的機率為 $\\frac14$，$B$ 發生的機率為 $\\frac13$，$A$ 與 $B$ 至少有一事件發生的機率為 $\\frac5{12}$，求：\n(1) 若 $B$ 發生，$A$ 發生的機率\n(2) 若 $A$ 發生，$B$ 發生的機率\n(3) 若 $B$ 不發生，$A$ 發生的機率',
    answer: '(1) $\\frac12$ (2) $\\frac23$ (3) $\\frac18$',
    hasImage: false,
  },
  {
    id: '17de1815d0b',
    chapter: '條件機率',
    question:
      "樣本空間有事件 $A$ 與 $B$，已知 $P(A)=\\frac25，P(A|B)=\\frac23，P(B|A)=\\frac12$，求 (1) $P(A\\cap B)$ (2) $P(A\\cup B)$ (3) $P(A'|B')$",
    answer: '(1) $\\frac15$ (2) $\\frac12$ (3) $\\frac57$',
    hasImage: false,
  },
  {
    id: '17de182078f',
    chapter: '條件機率',
    question:
      "已知兩事件 $A$、$B$，$P(A)=\\frac13$，$P(B)=\\frac25$，$P(A\\cup B)=\\frac8{15}$，求 $P(A|B)$、$P(B|A)$、$P(A'|B')$。",
    answer: '$\\frac12$；$\\frac35$；$\\frac79$',
    hasImage: false,
  },
  {
    id: '17de1826e1b',
    chapter: '條件機率',
    question:
      '家庭有三個小孩，已知至少有一個男生，求：\n(1) 全部小孩都是男生的機率\n(2) 三個小孩為二男一女的機率\n(3) 老大是男生的機率',
    answer: '$\\frac17$；$\\frac37$；$\\frac47$',
    hasImage: false,
  },
  {
    id: '17de182f28b',
    chapter: '條件機率',
    question:
      '含甲、乙共 $15$ 人參加考試，座位安排如圖，有 $5$ 直行 $3$ 橫列，以抽籤方式入座，試問：\n(1) 若甲、乙不同行，求甲、乙同列的機率\n(2) 若甲、乙不同列，求甲、乙同行的機率',
    answer: '(1) $\\frac13$ (2) $\\frac15$',
    hasImage: true,
  },
  {
    id: '17de1835f12',
    chapter: '條件機率',
    question:
      '家庭有四個小孩，已知至少有一個女生，求：\n(1) 恰有一個女生的機率\n(2) 至少有三個女生的機率\n(3) 老大是女生的機率',
    answer: '$\\frac4{15}$；$\\frac13$；$\\frac8{15}$',
    hasImage: false,
  },
  {
    id: '17de183d533',
    chapter: '條件機率',
    question:
      '圖中線段所分割的大大小小矩形中，隨機任取一個矩形，在包含 $A$ 點的條件之下，試求：\n(1) 包含 $B$ 點的機率 (2) 包含 $C$ 點的機率',
    answer: '(1) $\\frac12$ (2) $\\frac13$',
    hasImage: true,
  },
  {
    id: '17de18419dd',
    chapter: '條件機率',
    question: '擲三粒公正骰子，求點數和為 $8$ 的條件下，至少有一骰子出現 $3$ 點的機率。',
    answer: '$\\frac37$',
    hasImage: false,
  },
  {
    id: '17de18492e3',
    chapter: '條件機率',
    question:
      '丟一公正的銅板 $5$ 次，$A$ 表前 $2$ 次都是正面的事件，$B$ 表至少出現 $3$ 次正面的事件，求：\n(1) $P(A|B)$ (2) $P(B|A)$',
    answer: '(1) $\\frac7{16}$ (2) $\\frac78$',
    hasImage: false,
  },
  {
    id: '17db6f9c9c7',
    chapter: '條件機率',
    question: '擲三粒均勻骰子一次，求在至少出現一次 $4$ 點的條件下，點數和為偶數的機率。',
    answer: '$\\frac{46}{91}$',
    hasImage: false,
  },
  {
    id: '17de18826f9',
    chapter: '條件機率',
    question:
      '丟一公正的銅板 $6$ 次，$A$ 表前 $3$ 次都是正面的事件，$B$ 表至少出現 $4$ 次正面的事件，求 $P(A|B)$、$P(B|A)$。',
    answer: '$\\frac7{22}$；$\\frac78$',
    hasImage: false,
  },
  {
    id: '17de186a2a4',
    chapter: '條件機率',
    question:
      '有甲、乙、丙三個袋子，甲袋有 $1$ 個金幣與 $4$ 個銀幣，乙袋有 $3$ 個銀幣，丙袋有 $2$ 個銀幣。現由甲袋取出 $2$ 個錢幣放入乙袋，再由乙袋取出 $3$ 個錢幣放入丙袋，最後由丙袋取出 $1$ 個錢幣，求此錢幣為金幣的機率。',
    answer: '$\\frac6{125}$',
    hasImage: false,
  },
  {
    id: '17de1872c6a',
    chapter: '條件機率',
    question:
      '甲袋有 $1$ 個金幣與 $5$ 個銀幣，乙袋、丙袋各有 $4$ 個銀幣。從甲袋取出 $3$ 個錢幣放入乙袋，再由乙袋取出 $4$ 個錢幣放入丙袋，求：\n(1) 金幣在乙袋的機率 (2) 金幣在丙袋的機率',
    answer: '(1) $\\frac3{14}$ (2) $\\frac27$',
    hasImage: false,
  },
  {
    id: '17de187e2d6',
    chapter: '條件機率',
    question:
      '設 $A_1$、$A_2$、$A_3$ 是樣本空間的一組分割，事件 $B$ 滿足 $P(A_1\\cap B)=0.1$，$P(A_2\\cap B)=0.3$，$P(B|A_3)=0.4$，$P(A_3)=0.5$，求 $P(B)$、$P(A_3|B)$。',
    answer: '$0.6$；$\\frac13$',
    hasImage: false,
  },
  {
    id: '17de1890106',
    chapter: '條件機率',
    question:
      '若事件 $A_1$、$A_2$、$A_3$ 是樣本空間 $S$ 的一組分割，已知 $P(A_1)=\\frac13$，$P(A_2)=\\frac16$，$P(A_3)=\\frac12$，事件 $B$ 滿足 $P(B|A_1)=\\frac12$，$P(B|A_2)=\\frac23$，$P(B|A_3)=\\frac34$，求 $P(B)$、$P(A_1|B)$。',
    answer: '$\\frac{47}{72}$；$\\frac{12}{47}$',
    hasImage: false,
  },
  {
    id: '17de1895962',
    chapter: '條件機率',
    question:
      '根據臺灣某地區的雨晴紀錄，得知某地區若雨天的翌日也下雨的機率為 $\\frac13$，非下雨天的翌日卻下雨的機率為 $\\frac19$。若今天下雨，求該地區大後天也下雨的機率。',
    answer: '$\\frac{37}{243}$',
    hasImage: false,
  },
  {
    id: '17de189ed5d',
    chapter: '條件機率',
    question:
      '工廠有 $A$、$B$、$C$ 三部機器生產相同的產品，產量各占 $50\\%$、$20%$、$30\\%$，其瑕疵品各占其生產量的 $4\\%$、$6\\%$、$7\\%$。現從中任取一個產品，請問：(1) 求其為瑕疵品的機率\n(2) 若取得瑕疵品，求由 $A$ 所生產的機率',
    answer: '(1) $0.053$ (2) $\\frac{20}{53}$',
    hasImage: false,
  },
  {
    id: '17de18b2502',
    chapter: '條件機率',
    question:
      '有一種診斷肝病的方法，依過去的經驗知道：有肝病的人經檢查確定患有肝病的可能性為 $0.95$，沒有肝病的人經檢查卻診斷患有肝病的可能性為 $0.03$。若城市中有 $10\\%$ 的人患有肝病，從中任選一人加以檢查，求：\n(1) 此人檢查出患有肝病的機率\n(2) 若檢查出患有肝病，此人其實沒肝病的機率\n(3) 誤診率',
    answer: '(1) $0.122$ (2) $\\frac{27}{122}$ (3) $0.032$',
    hasImage: false,
  },
  {
    id: '17de18b98b1',
    chapter: '條件機率',
    question:
      '下雨天的隔日也下雨的機率為 $\\frac23$；不下雨的隔日卻下雨的機率為 $\\frac19$。若今天下雨，求大後天也下雨的機率。',
    answer: '$\\frac{92}{243}$',
    hasImage: false,
  },
  {
    id: '17de18d1a9a',
    chapter: '條件機率',
    question:
      '某地區的小汽車共有甲、乙、丙三種廠牌，其市占率分別為 $55\\%$、$15\\%$、$30\\%$，而各廠排氣量 1600 c.c. 的車種依次占該廠比例的 $30\\%$、$40\\%$、$25\\%$，請問：\n(1) 求市面上 1600 c.c. 的小汽車共占全部小汽車的多少比例\n(2) 在馬路上看到一輛 1600 c.c. 的小汽車，求其為甲廠牌的機率',
    answer: '(1) $30\\%$ (2) $\\frac{11}{20}$',
    hasImage: false,
  },
  {
    id: '17de18de77e',
    chapter: '條件機率',
    question:
      '依臨床試驗的資料知：懷孕女性的尿液經某藥廠的試紙檢查，確定真的懷孕的機率為 $0.97$，沒有懷孕的女性經同樣檢查結果卻是懷孕的可能性為 $0.04$。若假定城市中有 $2\\%$ 的女性已知懷孕，從中任選一人加以檢查，請問：\n(1) 求此人檢查出懷孕的機率\n(2) 若檢查出懷孕，求此人其實沒有懷孕的機率',
    answer: '(1) $0.0586$ (2) $\\frac{196}{293}$',
    hasImage: false,
  },
  {
    id: '17de18e936d',
    chapter: '條件機率',
    question:
      '甲袋有 $6$ 白球、$3$ 紅球，乙袋有 $4$ 白球、$5$ 紅球，丙袋有 $7$ 白球、$2$ 紅球。現以擲一公正骰子方式選定一個袋子，再任取兩球，若擲得一點則選甲袋，若擲得二、三點則選乙袋，若擲得四、五、六點則選丙袋。求：\n(1) 取甲袋且取出一白球一紅球的機率\n(2) 本試驗取得一白球一紅球的機率',
    answer: '(1) $\\frac1{12}$ (2) $\\frac{25}{54}$',
    hasImage: false,
  },
  {
    id: '17dbe8033c1',
    chapter: '條件機率',
    question:
      '甲袋有 $5$ 白球、$3$ 黑球，乙袋有 $4$ 白球、$2$ 黑球。今自甲袋取出一球放入乙袋，再由乙袋取出兩球，求取得兩白球的機率。',
    answer: '$\\frac{17}{42}$',
    hasImage: false,
  },
  {
    id: '17de18f7266',
    chapter: '條件機率',
    question:
      '甲袋有 $3$ 黑球、$2$ 白球，乙袋有 $4$ 黑球、$1$ 白球，丙袋有 $1$ 黑球、$4$ 白球，現擲兩枚公正銅板，若恰二正面則選甲袋，恰一正面則選乙袋，沒正面則選丙袋，再從袋中取出兩球，求：\n(1) 選甲袋且取得兩黑球的機率\n(2) 選乙袋且取得一白球一黑球的機率\n(3) 選丙袋且取得兩白球的機率',
    answer: '(1) $\\frac3{40}$ (2) $\\frac15$ (3) $\\frac3{20}$',
    hasImage: false,
  },
  {
    id: '17dbedddf8c',
    chapter: '條件機率',
    question:
      '有甲、乙、丙三個袋子，甲袋有 $2$ 白球、$3$ 紅球，乙袋有 $3$ 白球、$2$ 紅球、$1$ 藍球，丙袋有 $3$ 白球、$5$ 藍球。現任選兩袋並由兩袋中各任取一球，設選袋的機率相等，選球的機率也相等，求取到兩球同色的機率。',
    answer: '$\\frac{101}{360}$',
    hasImage: false,
  },
  {
    id: '17de19042b6',
    chapter: '條件機率',
    question:
      '籤筒有 $3$ 支中獎和 $8$ 支銘謝惠顧的籤。甲、乙、丙 $3$ 人依序抽籤，取後不放回，求：\n(1) 甲中籤的機率\n(2) 乙中籤的機率\n(3) 丙中籤的機率',
    answer: '(1) $\\frac3{11}$ (2) $\\frac3{11}$ (3) $\\frac3{11}$',
    hasImage: false,
  },
  {
    id: '17de1908a59',
    chapter: '條件機率',
    question:
      '箱中有黑球 $4$ 顆、白球 $5$ 顆、紅球 $3$ 顆、綠球 $2$ 顆，從中取球五次，每次一球，取後不放回，試求第四次取得紅球的機率。 ',
    answer: '$\\frac3{14}$',
    hasImage: false,
  },
  {
    id: '17de190cd09',
    chapter: '條件機率',
    question:
      '籤筒有 $8$ 支中獎和 $98$ 支銘謝惠顧的籤。甲、乙、丙 $3$ 人依序抽籤，取後不放回，求丙中籤的機率。',
    answer: '$\\frac4{53}$',
    hasImage: false,
  },
  {
    id: '17dcc56ef1d',
    chapter: '條件機率',
    question:
      '箱中有 $3$ 紅球、$2$ 綠球與 $2$ 黃球，共 $7$ 個球，逐一取出不放回，試求紅球不是最先也不是最後被取完的機率。 ',
    answer: '$\\frac{12}{35}$',
    hasImage: false,
  },
  {
    id: '17de192adcc',
    chapter: '條件機率',
    question:
      '抽獎箱內共有 $100$ 張彩券，其中頭獎 $1000$ 元有 $5$ 張，二獎 $500$ 元有 $10$ 張，三獎 $100$ 元有 $20$ 張，剩下 $65$ 張沒有獎金。從箱中抽出一張，沒有看到彩券內容就交給主持人，請問：\n(1) 主持人尚未透漏訊息，求獲得獎金的期望值\n(2) 主持人看完彩券告訴大家這張彩券有中獎，求獲得獎金的期望值\n(3) 主持人進一步告訴大家這張彩券所中的獎項不是頭獎，求獲得獎金的期望值',
    answer: '(1) $120$ 元 (2) $\\frac{2400}7$ 元 (3) $\\frac{700}3$ 元',
    hasImage: false,
  },
  {
    id: '17de193349f',
    chapter: '條件機率',
    question:
      '已知任一彩券中頭獎 $10000$ 元的機率為 $0.001$，中二獎 $3000$ 元的機率為 $0.02$，中三獎 $500$ 元的機率為 $0.1$，若開獎後已確定某張彩券有中獎，但不知道中哪一個獎項，求該彩券的獎金期望值。',
    answer: '$\\frac{120000}{121}$ 元',
    hasImage: false,
  },
  {
    id: '17de193b9a5',
    chapter: '條件機率',
    question:
      '樣本空間中有兩事件 $A$ 與 $B$，已知 $P(A)=\\frac13$，$P(A\\cup B)=\\frac56$，請問：\n(1) 若 $A$ 與 $B$ 互斥，求 $P(B)$\n(2) 若 $A$ 與 $B$ 互為獨立事件，求 $P(B)$',
    answer: '(1) $\\frac12$ (2) $\\frac34$',
    hasImage: false,
  },
  {
    id: '17de194400b',
    chapter: '條件機率',
    question:
      '某家庭有三個小孩，設每胎生男生女的機會各為二分之一，若 $A$ 表有男有女的事件，$B$ 表最多有一女的事件，$C$ 表奇數個女孩的事件，請問：\n(1) $A$ 與 $B$ 是否為獨立事件？\n(2) $B$ 與 $C$ 是否為獨立事件？',
    answer: '(1) 是 (2) 否',
    hasImage: false,
  },
  {
    id: '17de194a703',
    chapter: '條件機率',
    question:
      '樣本空間中有兩事件 $A$ 與 $B$，已知 $P(A)=\\frac38$，$P(A\\cup B)=\\frac12$，請問：\n(1) 若 $A$ 與 $B$ 互斥，求 $P(B)$\n(2) 若 $A$ 與 $B$ 互為獨立事件，求 $P(B)$',
    answer: '(1) $\\frac18$ (2) $\\frac15$',
    hasImage: false,
  },
  {
    id: '17dcc734c81',
    chapter: '條件機率',
    question: '丟骰子兩次，則「第一次為偶數點」與「點數和為偶數」是否互相獨立？',
    answer: '是',
    hasImage: false,
  },
  {
    id: '17de1955cf2',
    chapter: '條件機率',
    question:
      "已知 $A$、$B$、$C$ 三事件為獨立事件，且 $P(A\\cap B)=\\frac16$，$P(B\\cap C)=\\frac1{18}$，$P(C\\cap A)=\\frac1{12}$，求：\n(1) $P(A|B')$ (2) $P(A\\cup B\\cup C)$",
    answer: '(1) $\\frac12$ (2) $\\frac{13}{18}$',
    hasImage: false,
  },
  {
    id: '17de19614ea',
    chapter: '條件機率',
    question:
      '已知 $A$、$B$、$C$ 為三獨立事件，且 $P(A)=\\frac13$，$P(B)=\\frac25$，$P(C)=\\frac12$，求：\n(1) $P(A\\cup B\\cup C)$ (2) $P(A\\cup B-C)$。',
    answer: '(1) $\\frac45$ (2) $\\frac3{10}$',
    hasImage: false,
  },
  {
    id: '17de197d1fb',
    chapter: '條件機率',
    question:
      '已知學校柔道社高一、高二、高三的男、女生人數如表所示，今從中任選一人，以 $A$ 表示選中高二學生的事件，$B$ 表示選中女生的事件，若希望 $A$ 和 $B$ 為獨立事件，求 $x$。\n$$\\begin{array}{|c|c|}\\hline&高一&高二&高三\\\\\\hline男生&36&30&12\\\\\\hline女生&x&20&5\\\\\\hline\\end{array}$$',
    answer: '$27$',
    hasImage: false,
  },
  {
    id: '17de19901a5',
    chapter: '條件機率',
    question:
      '已知某校音樂班的錄取人數如表，現任取一人，若令 $A$ 表取得市區學生錄取的事件，$B$ 表取得女生錄取的事件，若希望 $A$ 與 $B$ 為獨立事件，則可使郊區的男生錄取人數增加幾人？\n$$\\begin{array}{|c|c|}\\hline&市區&郊區\\\\\\hline男&15&9\\\\\\hline女&10&8\\\\\\hline\\end{array}$$',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '17dea033c7c',
    chapter: '條件機率',
    question:
      '甲、乙兩人解一道選擇題，甲解出的機率為 $\\frac34$，乙解出的機率為 $\\frac23$，兩人解出與否互相獨立，求 (1) 兩人都解出的機率 (2) 此題被解出的機率',
    answer: '(1) $\\frac12$ (2) $\\frac{11}{12}$',
    hasImage: false,
  },
  {
    id: '17dea041038',
    chapter: '條件機率',
    question:
      '俗話說：三個臭皮匠，勝過一個諸葛亮。甲、乙、丙三人解出題目的機率分別是 $\\frac13$、$\\frac25$、$\\frac14$，三人解題互不影響，試求：\n(1) 甲、乙兩人同解一題，此題被解出之機率\n(2) 甲、乙、丙三人同解一題，此題被解出之機率',
    answer: '(1) $\\frac35$ (2) $\\frac7{10}$',
    hasImage: false,
  },
  {
    id: '17dea0453ca',
    chapter: '條件機率',
    question:
      '甲、乙、丙三射擊選手同射一靶，每人一發，命中率各為 $0.6$、$0.8$、$0.7$，請問：\n(1) 靶面恰中一發的機率\n(2) 若恰中一發，求此發是乙射中的機率',
    answer: '(1) $0.188$ (2) $\\frac{24}{47}$',
    hasImage: false,
  },
  {
    id: '17dea056006',
    chapter: '條件機率',
    question:
      '甲、乙兩人射擊一靶的命中率為 $\\frac25$ 與 $\\frac13$，若兩人各射擊兩發子彈，各子彈互不影響，求：\n(1) 靶被射中的機率\n(2) 靶恰中一彈的機率\n(3) 靶恰中兩彈的機率',
    answer: '(1) $\\frac{21}{25}$ (2) $\\frac{28}{75}$ (3) $\\frac{73}{225}$',
    hasImage: false,
  },
  {
    id: '17dea0921c2',
    chapter: '條件機率',
    question:
      '射擊選手每射擊一發，命中機率為 $\\frac14$，請問：\n(1) 求射擊 $5$ 發，恰中 $2$ 發的機率\n(2) 若射擊 $n$ 發，至少中一發的機率大於 $0.97$，求 $n$ 最小值\n($\\log2\\approx0.3010$，$\\log3\\approx0.4771$)',
    answer: '(1) $\\frac{135}{512}$ (2) $13$',
    hasImage: false,
  },
  {
    id: '17dea096923',
    chapter: '條件機率',
    question:
      '射擊選手每射擊一發，命中機率為 $\\frac13$，請問：\n(1) 求射擊 $6$ 發，恰中 $2$ 發的機率\n(2) 若射擊 $n$ 發，至少中一發的機率大於 $0.98$，求 $n$ 最小值\n($\\log2\\approx0.3010$，$\\log3\\approx0.4771$)',
    answer: '(1) $\\frac{80}{243}$ (2) $10$',
    hasImage: false,
  },
  {
    id: '17dea09a4eb',
    chapter: '條件機率',
    question:
      '線路由五個開關組成，每個開關通電的機率為 $\\frac13$，其電線配置如圖，且開關之間互不影響，求電流可由 $A$ 流至 $B$ 的機率。',
    answer: '$\\frac{35}{243}$',
    hasImage: true,
  },
  {
    id: '17dea0a1045',
    chapter: '條件機率',
    question:
      '線路連接如圖，六個開關通電與否均互不影響，每個開關通電的機率為 $\\frac12$，求整個線路通電的機率。',
    answer: '$\\frac{43}{64}$',
    hasImage: true,
  },
  {
    id: '17dea0b1c3e',
    chapter: '條件機率',
    question:
      '甲、乙兩人有時說實話有時說謊話，根據經驗判斷，甲說實話的機率為 $\\frac23$，乙說實話的機率為 $\\frac56$，兩人說謊與否互為獨立事件。現在袋中有 $2$ 個金幣和 $4$ 個銀幣，取出一個給兩人看過，兩人都說是金幣，求真的是金幣的機率。',
    answer: '$\\frac56$',
    hasImage: false,
  },
  {
    id: '17dea0b9e24',
    chapter: '條件機率',
    question:
      '籤筒有 $10$ 支籤，其中 $7$ 支為「說實話」，$3$ 支為「說謊話」。某人擲一枚正面機率為 $\\frac35$ 的不公正銅板，先觀察正反面，再由籤筒抽籤決定說實話或說謊話，最後宣稱該銅板為正面，求該銅板真的是正面的機率。',
    answer: '$\\frac79$',
    hasImage: false,
  },
  {
    id: '17dea0e2ecb',
    chapter: '條件機率',
    question:
      '袋中有 $5$ 元、$10$ 元、$50$ 元硬幣各一個，經多次實驗得知，$5$ 元的正面機率為 $0.64$，$10$ 元的正面機率為 $0.55$，$50$ 元的正面機率為 $0.57$。現由袋中任取一枚硬幣，各枚被取的機率均等，若擲出正面則可獲得該硬幣當獎金，試求獎金的期望值。',
    answer: '$12.4$ 元',
    hasImage: false,
  },
  {
    id: '17dea0f5df1',
    chapter: '條件機率',
    question:
      '袋中有三個不均勻硬幣，經多次試驗得知正面的機率分別為 $0.56$、$0.58$、$0.62$，現從中任取一枚，各枚被取的機率均等，若得正面則可獲得獎金 $300$ 元，試問獎金的期望值。',
    answer: '$176$ 元',
    hasImage: false,
  },
  {
    id: '17ce8905a88',
    chapter: '條件機率',
    question:
      '樣本空間 $S$ 中有事件 $A$ 與 $B$，已知 $P(A)=0.5$，$P(B)=0.7$，求 $P(A|B)$ 的最大值及最小值。',
    answer: '$\\frac57$；$\\frac27$',
    hasImage: false,
  },
  {
    id: '17ce890d760',
    chapter: '條件機率',
    question:
      "事件 $A$ 與 $B$，$A\\subset{B}$ 且 $A\\ne{B}$，則下列哪些選項的機率值為 1？\n(1) $P(A|B)$　(2) $P(B|A)$　(3) $P(A|B')$\n(4) $P(B|A')$　(5) $P(A'|B')$　(6) $P(B'|A')$",
    answer: '(2)(5)',
    hasImage: false,
  },
  {
    id: '17ce3bda0e7',
    chapter: '條件機率',
    question:
      '箱中有 9 個球，每球標有整數球號，共有 5 個奇數號球與 4 個偶數號球，每球被取的機會均等。若從中取出兩球不放回，已知兩球號碼和為偶數，求再從剩下的 7 個球取出兩球所得號碼和為奇數的機率。',
    answer: '$\\frac{15}{28}$',
    hasImage: false,
  },
  {
    id: '17ce8929835',
    chapter: '條件機率',
    question:
      '袋子裡有 3 顆白球，2 顆黑球。由甲、乙、丙三人依序各抽取 1 顆球，抽取後不放回。若每顆球被取出的機會相等，求在甲和乙抽到相同顏色球的條件下，丙抽到白球之條件機率。',
    answer: '$\\frac12$',
    hasImage: false,
  },
  {
    id: '17ce8932351',
    chapter: '條件機率',
    question:
      '小華射擊兩發子彈，第一發的命中率為 0.6，若第一發命中則第二發的命中率提昇為 0.8，若第一發不中則第二發命中率只有 0.3。求小華連中兩發的機率及恰中一發的機率。',
    answer: '0.48；0.24',
    hasImage: false,
  },
  {
    id: '17ce895b00c',
    chapter: '條件機率',
    question:
      '某人上班有甲、乙兩條路線可供選擇。早上定時從家裡出發，走甲路線有 $\\dfrac1{10}$ 的機率會遲到，走乙路線則有 $\\dfrac15$ 的機率會遲到。無論走哪一路線，只要不遲到，下次就走同一條路線，否則就換另一條路線。假設他第一天走甲路線，求第三天也走甲路線的機率。',
    answer: '$\\frac{83}{100}$',
    hasImage: false,
  },
  {
    id: '17ce896e624',
    chapter: '條件機率',
    question:
      '某公司共有 6 個工廠，各工廠的產量都一樣，且所生產的產品都放進同一倉庫中。由過去的經驗知道，第 $k$ 個工廠的產品不良率為 $\\dfrac k{50}$，其中 $k=1,2,3,4,5,6$，為了檢驗倉庫中這一批產品的品質，從倉庫中任意抽出一件，若為不良品，求此不良品是來自第五個工廠的機率。',
    answer: '$\\frac5{21}$',
    hasImage: false,
  },
  {
    id: '17ce8979f50',
    chapter: '條件機率',
    question:
      '袋中有 1 號、2 號、3 號球各一顆，先由阿明取出一球得球號為 $k$，此時把該球放回，並添加兩顆 $k$ 號球，所以袋中總共有五顆球，然後再由小華任取出一球，得球號為 2 號，求 $k$ 值為 2 的機率。',
    answer: '$\\frac35$',
    hasImage: false,
  },
  {
    id: '17ce8984597',
    chapter: '條件機率',
    question:
      '阿明解單選題的答對機率為 $\\dfrac12$，解多選題的答對機率為 $\\dfrac13$，各題的求解相互獨立。現在考卷有單選 6 題，每題 10 分，多選 2 題，每題 20 分，求這張考卷阿明恰考 80 分的機率。',
    answer: '$\\frac{19}{576}$',
    hasImage: false,
  },
  {
    id: '17ce89935b2',
    chapter: '條件機率',
    question:
      '甲、乙、丙三人玩一投擲銅板的遊戲，每局三人各擲銅板 1 次；當有一人投擲結果與其他兩人不同時，此人出局並遊戲終止；否則進入下一局，直到有人出局為止。試問下列哪些選項是正確的？\n(1) 第一局甲就出局的機率是 $\\dfrac13$\n(2) 第一局就有人出局的機率是 $\\dfrac12$\n(3) 第三局才有人出局的機率是 $\\dfrac3{64}$\n(4) 若第十局才有人出局，則是甲的機率為 $\\dfrac13$\n(5) 玩一場遊戲，至少六局的機率大於 $\\dfrac1{1000}$',
    answer: '(3)(4)',
    hasImage: false,
  },
  {
    id: '17ce899d5d0',
    chapter: '條件機率',
    question:
      '甲說實話的機率為 $\\dfrac23$，乙說實話的機率為 $\\dfrac14$，今有一袋內含 4 白球、3 黑球。自袋中任取出一球，甲說白球，乙說黑球，求此球確為白球的機率。',
    answer: '$\\frac89$',
    hasImage: false,
  },
  {
    id: '17ce89a6df4',
    chapter: '條件機率',
    question:
      '甲、乙兩支球隊每逢週末都會相約比賽，根據長久的數據統計，不下雨的日子甲贏乙的機率為 60%，下雨的日子甲贏乙的機率為 68%，若氣象局公布本週末下雨的機率為 80%，求本週末甲隊贏乙隊的機率。',
    answer: '$0.664$',
    hasImage: false,
  },
  {
    id: '17ce3f576c5',
    chapter: '條件機率',
    question:
      '樣本空間 $S$ 中有事件 $A$ 與 $B$，已知 $A$ 事件發生的機率為 0.4，$B$ 事件發生的機率為 0.3，兩事件同時發生的機率為 0.1，求 $P(A|B)$ 及 $P(B|A)$。',
    answer: '$\\frac13$；$\\frac14$',
    hasImage: false,
  },
  {
    id: '17ce3f6c2d5',
    chapter: '條件機率',
    question:
      '一副撲克牌 52 張中隨機抽出一張牌，假設每一張牌被抽中的機會均等，令 $A$ 代表抽中老 K 的事件，$B$ 代表抽中紅心的事件，求 $P(B|A)$ 及 $P(A|B)$。',
    answer: '$\\frac14$；$\\frac1{13}$',
    hasImage: false,
  },
  {
    id: '17ce3f81aec',
    chapter: '條件機率',
    question:
      '箱中有 5 白球 3 黑球，每球被取的機率相等，求先取一球為白球，且再取兩球均為黑球的機率。',
    answer: '$\\frac5{56}$',
    hasImage: false,
  },
  {
    id: '17ce3fc357b',
    chapter: '條件機率',
    question:
      '有一按鈕遊戲機，玩一次可按鈕三次。第一次按下會出現黑色或白色的機率各為 $\\dfrac12$；第二或第三次按下，出現與前一次同色的機率為 $\\dfrac13$，不同的機率為 $\\dfrac23$。今某甲玩一次，按三次均出現同色的機率為？',
    answer: '$\\frac19$',
    hasImage: false,
  },
  {
    id: '17ce3fe7511',
    chapter: '條件機率',
    question:
      "事件 $A$、$B$ 的餘事件 $A'$、$B'$ 代表該事件未發生，已知 $P(A)=0.8$，$P(B|A)=0.6$，$P(B'|A')=0.3$，可用樹狀圖表示，求 $P(B)$ 及 $P(A|B)$。",
    answer: '$0.62$；$\\frac{24}{31}$',
    hasImage: true,
  },
  {
    id: '17ce40003b8',
    chapter: '條件機率',
    question:
      '某公司員工有 15% 為行政人員，35% 為技術人員，50% 為研發人員。這些員工中，60% 的行政人員、40% 的技術人員、80% 的研發人員有大學文憑。從有大學文憑的人中隨機抽一人，他是技術人員的機率為？',
    answer: '$\\frac29$',
    hasImage: false,
  },
  {
    id: '17ce4028079',
    chapter: '條件機率',
    question:
      '甲、乙兩人玩打靶遊戲。甲命中率為 $\\dfrac25$，乙命中率為 $\\dfrac12$。甲先射，乙後射。甲射中與否不影響乙的命中率。若他們倆人向靶各射一次，求只有乙射中的機率。',
    answer: '$\\frac3{10}$',
    hasImage: false,
  },
  {
    id: '17ce403fad3',
    chapter: '條件機率',
    question:
      '設三事件 $A$、$B$、$C$ 為獨立事件，且 $P(A)=P(B)=P(C)=\\dfrac13$，求：\n(1) $A$、$B$、$C$ 只有 $A$ 發生的機率\n(2) $A$、$B$、$C$ 至少有一事件發生的機率',
    answer: '$\\frac4{27}$；$\\frac{19}{27}$',
    hasImage: false,
  },
  {
    id: '1794b2905a7',
    chapter: '條件機率',
    question:
      '設甲、乙、丙三人射擊的命中率分別為 $\\frac{2}{5}$、$\\frac{1}{2}$、$\\frac{3}{5}$，今在靶場上，有一目標靶，三人各射擊一發，且每個人命中靶面的事件為獨立事件，則恰有兩人命中的機率為？',
    answer: '$\\frac{19}{50}$',
    hasImage: false,
  },
  {
    id: '1794b2b1ff5',
    chapter: '條件機率',
    question:
      '已知一箱中共有 $20$ 枚硬幣，其中 $7$ 枚兩面皆是人頭， $8$ 枚兩面皆是字，其餘 $5$ 枚一面是人頭一面是字，每枚硬幣被選到之機會均等，今將手伸入箱中握住一枚硬幣，取出後打開手掌，發現一面是人頭，則另一面也是人頭之條件機率為？',
    answer: '$\\frac{14}{19}$',
    hasImage: false,
  },
  {
    id: '1794b2de9c1',
    chapter: '條件機率',
    question:
      '老師為了跟孩子建立良好的互動，辦了一個闖關遊戲，此闖關遊戲共有四關，只有四關全通過才能獲得精美獎品，規定若前三關中有一關闖關失敗，則遊戲就結束，但若在第四關才闖關失敗，則再給一次闖最後一關的機會，已知阿傑前三關每關通過的機率都是 $\\frac{3}{4}$，最後一關通過的機率是 $\\frac{2}{5}$，而每關通過與否都互相獨立，已知阿傑獲得精美獎品的條件下，則阿傑曾闖關失敗的機率為？\n.\n.',
    answer: '$\\frac{3}{8}$',
    hasImage: false,
  },
  {
    id: '1794b31a1ca',
    chapter: '條件機率',
    question:
      '本季籃球冠軍賽中，由暴龍隊擊敗勇士隊拿下冠軍，比賽過程中，勇士隊的球員 K 因傷退賽，許多球迷便指責勇士隊的總管調度不佳；此時有位網路鄉民跳出來說：「我整理了球員 K 過去 $80$ 場比賽上場即獲勝的場次交叉分析，發現球員 K 上場與否和球隊勝負不會互相影響！」呼籲大家別再謾罵。而下表為網路鄉民整理的資料，其中的數對 $(x,y)=$？\n $\\begin{array} {|c|c|}\\hline & 勝 & 負 \\\\ \\hline 上場 & 30 & x \\\\ \\hline 未上場 & 20 & y \\\\ \\hline \\end{array}$',
    answer: '$(18,12)$',
    hasImage: false,
  },
  {
    id: '1794b330d76',
    chapter: '條件機率',
    question:
      '$A$ 袋中有三紅球及兩白球、$B$ 袋中有三白球及兩紅球，今先由 $A$ 袋任取兩球放入 $B$ 袋，再由 $B$ 袋任取兩球放回 $A$ 袋，則 $A$ 袋白球數增加的機率為？',
    answer: '$\\frac{27}{70}$',
    hasImage: false,
  },
  {
    id: '1794b3ba04a',
    chapter: '條件機率',
    question:
      '小明每天上學有甲、乙兩條路可供選擇。早上定時從家裡出發，走甲路線有 $\\frac{1}{10}$ 的機率會遲到，走乙路線則有 $\\frac{1}{5}$ 的機率會遲到。無論走哪一條路線，只要不遲到，明天就走同一條路線，否則就另一條路線。若他第一天走甲路線，則第三天也走甲路線的機率為下列何者？\n(A) $\\frac{4}{9}$ (B) $\\frac{1}{50}$ (C) $\\frac{83}{100}$ (D) $\\frac{1}{20}$ (E) $\\frac{1}{2}$ ',
    answer: '(C)',
    hasImage: false,
  },
  {
    id: '1794b3e19bb',
    chapter: '條件機率',
    question:
      "設 $A$、$B$ 為獨立事件且 $P(A)=\\frac{1}{3}$，則下列敘述何者正確？\n(A) $A$ 和 $A'$ 為獨立事件\n(B)若 $P(B)\\neq0$，則 $A$、$B$ 不可能為互斥事件\n(C) $P(A|A\\cap B')=\\frac{1}{3}$\n(D)若 $P(A\\cup B)=\\frac{2}{3}$，則 $P(B)=\\frac{1}{4}$\n(E)若 $B\\subseteq A$，則 $P(B)=1$",
    answer: '(B)',
    hasImage: false,
  },
  {
    id: '1794b40e9f2',
    chapter: '條件機率',
    question:
      '甲、乙、丙三人同時射擊同一靶，每人一發，設甲、乙、丙的射擊命中率依次為 $0.5$、$0.6$、$0.8$，若各人命中靶面的事件為獨立事件，下列何者正確？\n(A)靶面恰中 $3$ 發的機率大於 $0.25$\n(B)沒人命中靶面的機率大於 $0.05$\n(C)只有甲命中的機率為 $0.5$\n(D)靶面恰中 $2$ 發的機率為 $0.46$\n(E)已知靶面恰中 $2$ 發的條件下，則甲命中靶面的機率小於甲沒命中靶面的機率',
    answer: '(D)(E)',
    hasImage: false,
  },
  {
    id: '1794b428fd7',
    chapter: '條件機率',
    question:
      "設 $A$、$B$ 兩事件為獨立事件，已知 $P(A)=P(B)=0.3$，下列哪些選項正確？\n(A) $P(A|B)=P(A)$\n(B) $P(B|A')=P(B)$\n(C) $P(A|B)=P(B|A)$\n(D) $P(A\\cap B)=0.3$\n(E) $P(A\\cap B)=0$",
    answer: '(A)(B)(C)',
    hasImage: false,
  },
  {
    id: '1794b43c0f7',
    chapter: '條件機率',
    question:
      '擲一骰子兩次，在已知兩次的點數和為 $8$ 的條件下，則第一次點數大於第二次點數的機率為？',
    answer: '$\\frac{2}{5}$',
    hasImage: false,
  },
  {
    id: '1794b4648c8',
    chapter: '條件機率',
    question:
      '設甲袋有 $2$ 個紅球、$3$ 個白球；乙袋有 $4$ 個紅球、$2$ 個白球。現投擲一骰子 $1$ 次，若出現點數為 $1$ 或 $3$，則選甲袋並從袋中取出 $2$ 球；若出現 $2$ 或 $4$ 或 $5$ 或 $6$，則選乙袋並從袋中取出 $2$ 球。若已知抽出為同色球的條件下，此 $2$ 球來自甲袋的機率為？',
    answer: '$\\frac{3}{10}$',
    hasImage: false,
  },
  {
    id: '1794b48d2a9',
    chapter: '條件機率',
    question:
      '某工廠有 $A$、$B$、$C$ 三條生產線從事生產，其中 $A$ 生產的占全部的 $40\\%$，$B$ 生產的占全部的 $25\\%$，$C$ 生產的占全部的 $35\\%$，又 $A$、$B$、$C$ 生產之產品中不良品分別各占 $k\\%$、$8\\%$、$6\\%$，今隨機抽取一產品，已知取到的是不良品的條件下，由 $A$ 生產的條件機率為 $\\frac{16}{57}$，則 $k=$？',
    answer: '$4$',
    hasImage: false,
  },
  {
    id: '1794b4a21c2',
    chapter: '條件機率',
    question:
      '已知某種飛彈擊中目標的機率為 $\\frac35$，則至少要同時發射幾枚飛彈，才能使擊中目標 (即至少中 1 發) 的機率提高到 99.9%？($\\log2\\approx0.3010$)',
    answer: '8',
    hasImage: false,
  },
  {
    id: '179032bab5b',
    chapter: '條件機率',
    question:
      '有一個孩童猜拳，過去 20 次中，此孩童出石頭和布的次數各有 8 次，根據此這 20 次的紀錄，下一次這位孩童出剪刀的機率為？',
    answer: '$\\frac15$',
    hasImage: false,
  },
  {
    id: '179032cd151',
    chapter: '條件機率',
    question:
      '有一個不公正骰子，其點數分別為 $1$、$2$、$3$、$4$、$5$、$6$，而各點數發生的機率與其點數成正比，則出現 $1$ 點的機率為？',
    answer: '$\\frac{1}{21}$',
    hasImage: false,
  },
  {
    id: '179032e41d6',
    chapter: '條件機率',
    question:
      '擲一顆骰子兩次，若第一次出現 $a$ 點，第二次出現 $b$ 點，在 $a+b=7$ 的條件下，求第二次出現 $3$ 點的機率。',
    answer: '$\\frac16$',
    hasImage: false,
  },
  {
    id: '179032ff4e6',
    chapter: '條件機率',
    question:
      '設一般家庭每胎生男生女的機率均為 $\\frac12$，不考慮雙胞胎與三胞胎，在一個隨機取樣的家庭中，已知此家庭恰有三個小孩，且至少有一個女孩的條件下，求第一胎為男孩之機率。',
    answer: '$\\frac37$',
    hasImage: false,
  },
  {
    id: '179033094e9',
    chapter: '條件機率',
    question: '擲三枚相同且均勻的銅板一次，在至少出現一個正面的條件下，求恰好出現兩個正面的機率。',
    answer: '$\\frac37$',
    hasImage: false,
  },
  {
    id: '179033272c5',
    chapter: '條件機率',
    question:
      '已知在某城市的人口中，男性占 60%，又女性且抽菸的人占 10%。從此城市任選一人，已知此人為女性的條件下，求此人有抽菸的機率。',
    answer: '$\\frac14$',
    hasImage: false,
  },
  {
    id: '1790334645d',
    chapter: '條件機率',
    question:
      '設 $A$，$B$ 為兩事件，且 $P(A)=\\frac{2}{3}$，$P(B)=\\frac{2}{5}$，$P(A\\cup B)=\\frac{4}{5}$，則 $P(B|A)=$？',
    answer: '$\\frac{2}{5}$',
    hasImage: false,
  },
  {
    id: '17903353520',
    chapter: '條件機率',
    question:
      '若 $A$、$B$ 為獨立事件，且 $P(A)=\\frac{1}{3}$，$P(B)=\\frac{2}{5}$，$P(A\\cap B)=$？',
    answer: '$\\frac{2}{15}$',
    hasImage: false,
  },
  {
    id: '1790336d2b8',
    chapter: '條件機率',
    question:
      '已知服用某藥物治療流行性感冒，治癒率為 $\\frac{3}{5}$，今有甲、乙兩人同時因流行性感冒服用此藥物，且兩人是否被治癒為獨立事件，則兩人都被治癒的機率為？',
    answer: '$\\frac{9}{25}$',
    hasImage: false,
  },
  {
    id: '17903380dda',
    chapter: '條件機率',
    question:
      "設 $A$、$B$ 為兩獨立事件，若 $P(A)=P(B)$，$P(A'\\cap B')=\\frac{4}{9}$，則 $P(B)=$？",
    answer: '$\\frac{1}{3}$',
    hasImage: false,
  },
  {
    id: '179033af1d1',
    chapter: '條件機率',
    question:
      '為推廣民眾騎乘自行車作為短程接駁交通工具，台中市政府辦理 YouBike 租賃服務。設甲、乙、丙三人獨立租賃自行車上學的機率分別為 $0.8$、$0.6$、$0.5$，且三人租賃與否為獨立事件，則至少有一人租賃自行車上學的機率為？',
    answer: '$0.96$',
    hasImage: false,
  },
  {
    id: '179033cd2cf',
    chapter: '條件機率',
    question:
      '丟一枚均勻硬幣 $3$ 次，已知第 $3$ 次出現正面，則 $3$ 次中出現 $2$ 次正面的機率為何？',
    answer: '$\\frac{1}{2}$',
    hasImage: false,
  },
  {
    id: '17927459344',
    chapter: '條件機率',
    question:
      '設 $A$、$B$ 為樣本空間之兩事件，且 $P(A)=\\frac{1}{3}$，$P(B)=\\frac{1}{2}$，$P(A\\cup B)=\\frac{7}{12}$，則 $P(B|A)=$？',
    answer: '$\\frac{3}{4}$',
    hasImage: false,
  },
  {
    id: '1792748064d',
    chapter: '條件機率',
    question:
      '有甲、乙、丙三個袋子，甲袋中有 $1$ 白球、$2$ 黑球、$3$ 紅球；乙袋中有 $2$ 白球、$1$ 黑球、$1$ 紅球；丙袋中有 $4$ 白球、$2$ 黑球、$2$ 紅球。設每袋被選的機會均等，且每袋中的每一球被取的機會也均等，今任選一袋，再從中任選一球。則此球是紅球的機率為？',
    answer: '$\\frac{1}{3}$',
    hasImage: false,
  },
  {
    id: '17927498755',
    chapter: '條件機率',
    question:
      '袋中有 $8$ 個白球，$4$ 個紅球，每個球被取到的機率均等，一次取三球，則三球同色的條件下，三球皆為紅色的機率為？',
    answer: '$\\frac{1}{15}$',
    hasImage: false,
  },
  {
    id: '179274b0593',
    chapter: '條件機率',
    question:
      '學期結束，教務處公告：全校學生中，有 $\\frac{2}{5}$ 國文不及格，有 $\\frac{3}{4}$ 數學不及格，有 $\\frac{3}{20}$ 兩科都不及格。今任選一學生，若已知他國文不及格，則他數學及格的機率為？',
    answer: '$\\frac{5}{8}$',
    hasImage: false,
  },
  {
    id: '179274c0e0c',
    chapter: '條件機率',
    question: '擲一顆公正的骰子一次，在擲出之點數為奇數的條件下，則擲出的點數為 $3$ 點的機率為？',
    answer: '$\\frac{1}{3}$',
    hasImage: false,
  },
  {
    id: '179274d4483',
    chapter: '條件機率',
    question:
      '袋中有 $3$ 顆紅球與 $2$ 顆白球，假設每顆球被選取的機會均等，今從袋中取球，每次取 $1$ 顆連取兩次，取後不放回，則第一次取到白球且第二次取到紅球的機率是？',
    answer: '$\\frac{3}{10}$',
    hasImage: false,
  },
  {
    id: '179274de9ba',
    chapter: '條件機率',
    question:
      '投擲三顆公正的骰子，觀察出現的點數。在點數和為 $12$ 的條件下，至少有 $2$ 顆骰子是奇數的機率為？',
    answer: '$\\frac{18}{25}$',
    hasImage: false,
  },
  {
    id: '179274f6369',
    chapter: '條件機率',
    question:
      '甲、乙兩人射擊同一個靶面，甲射擊兩發，乙射擊一發。設甲、乙的命中率分別為 $\\frac{2}{5}$、$\\frac{1}{4}$，且每發射擊是否中靶是互相獨立的，則靶面恰中兩發的機率為？',
    answer: '$\\frac{6}{25}$',
    hasImage: false,
  },
  {
    id: '17927511d39',
    chapter: '條件機率',
    question:
      '某公司員工中，男生占 $80\\%$，女生占 $20\\%$，又知男生員工中 $40\\%$ 是近視，女生員工中 $35\\%$ 是近視，由該公司員工中任選一人，已知這位員工沒有近視，則這位員工是女生的機率為？',
    answer: '$\\frac{13}{61}$',
    hasImage: false,
  },
  {
    id: '17927541a05',
    chapter: '條件機率',
    question:
      '由一種檢驗某傳染病的儀器得知：患此病的人，有 $90\\%$ 的機率經此儀器檢驗會呈陽性反應；不患此病的人，也有 $5\\%$ 的機率會被誤檢而呈現陽性反應。假設某地區有 $6\\%$ 的人罹患此病，從此地區中任選一人接受檢驗，若此人檢驗結果為陰性，則他確實沒有染病的機率為？',
    answer: '$\\frac{893}{899}$',
    hasImage: false,
  },
  {
    id: '179275625e9',
    chapter: '條件機率',
    question:
      '某校高一、高二、高三學生人數各占全校總人數的 $\\frac{1}{3}$。依該校學務處統計知：高一學生中的 $28\\%$，高二學生中的 $35\\%$，高三學生中的 $42\\%$ 持有智慧型手機。今從全校學生中任抽一人，已知抽到的學生持有智慧型手機，則該生是高一學生的機率為？',
    answer: '$\\frac{4}{15}$',
    hasImage: false,
  },
  {
    id: '1792757828f',
    chapter: '條件機率',
    question:
      '依據過去的經驗，中川對數學中的機率選擇題 $10$ 題中會做 $7$ 題，且會做的中川一定答對，中川不會時，也會用猜的，若有次考試有一題 $5$ 選 $1$ 的機率選擇題，結果中川答對，則中川是真正會做的機率為？',
    answer: '$\\frac{35}{38}$',
    hasImage: false,
  },
];

// 矩陣A
export const matrixA: Question[] = [
  {
    id: '18585372b83',
    chapter: '矩陣A',
    question:
      '已知 $x,y$ 為實數，二階方陣 $A=\\begin{bmatrix}2&x\\\\3&y\\end{bmatrix}$。若 $A$ 的乘法反方陣 $A^{-1}$ 存在且 $A=A^{-1}$，則數對 $(x,y)=(\\textcirc{7-1}\\textcirc{7-2},\\textcirc{7-3}\\textcirc{7-4})$。',
    answer: '(-1,-2)',
    hasImage: false,
  },
  {
    id: '1853f0d0aea',
    chapter: '矩陣A',
    question:
      '若將點 $P(-3,4)$ 先沿 $x$ 方向推移 $y$ 坐標的 2 倍，可得點 $Q(m,n)$，再沿 $y$ 方向推移 $x$ 坐標的 3 倍，可得點 $R(s,t)$，則下列選項哪些正確？\n(1) $m>n$\n(2) $s>t$\n(3) $m=s$\n(4) $\\triangle PQR$ 的面積為 120\n(5) $\\triangle PQR$ 的周長為 40',
    answer: '(1)(4)',
    hasImage: false,
  },
  {
    id: '1848b5e7845',
    chapter: '矩陣A',
    question:
      '$m,n$ 為實數，二階矩陣 $A=\\begin{bmatrix}2&m\\\\1&n\\end{bmatrix}$，$B=\\begin{bmatrix}3&4\\\\m&n\\end{bmatrix}$，$I=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$。定義函數 $f(A)$ 表示矩陣 $A$ 中的第 (1, 1) 元，所以 $f(A)=2$，$f(B)=3$，下列選項哪些正確？\n(1) $f(A+B)=5$　(2) $f(AB)=6$　(3) $f(AI)=2$\n(4) $f(AB)=f(BA)$　(5) 若 $AB=BA$，則表示 $m+n=3$',
    answer: '13',
    hasImage: false,
  },
  {
    id: '1818ee916be',
    chapter: '矩陣A',
    question:
      '令 $A=\\begin{bmatrix}a+2&-4\\\\-2&2\\end{bmatrix}$，若 $A^{-1}$ 不存在，求 $a$。\n(1) 2 (2) -1 (3) 0 (4) -3 (5) 4',
    answer: '',
    hasImage: false,
  },
  {
    id: '1818eeb6cda',
    chapter: '矩陣A',
    question:
      '設 $A$、$B$均為二階方陣，若 $A+B=\\begin{bmatrix}1&4\\\\1&6\\end{bmatrix}$，$A-B=\\begin{bmatrix}3&2\\\\1&2\\end{bmatrix}$，$A^2-B^2=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}$，則下列何者最大？\n(1) $a$ (2) $b$ (3) $c$ (4) $d$ (5) $ad-bc$',
    answer: '',
    hasImage: false,
  },
  {
    id: '1818ef304bf',
    chapter: '矩陣A',
    question:
      '有關矩陣 $A=\\begin{bmatrix}-1&0\\\\0&1\\end{bmatrix}$ 與矩陣 $B=\\begin{bmatrix}\\frac{\\sqrt3}2&-\\frac12\\\\\\frac12&\\frac{\\sqrt3}2\\end{bmatrix}$，試問下列哪些選項是正確的？\n(1) $B^6=-I$ (2) $A^2B=BA^4$ (3) $AB^6=A^3B^{12}$ (4) $A^9B^4=B^8A^5$ (5) $(ABA)^{20}=A^{20}B^{20}A^{20}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '1818f0e2cdb',
    chapter: '矩陣A',
    question:
      '已知方程組的解 $\\begin{cases}x+3y+2z=7\\\\3x-4y+z=1\\\\5x+2y+az=b\\end{cases}$ 所形成的圖形為一直線，試求數對 $(a,b)$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '1818f12c960',
    chapter: '矩陣A',
    question:
      '小樹從家裡到學校有甲、乙兩條路可以走，他每天依下述方法決定上學的路線；若某一天走甲路線上學，則次日有 $\\frac23$ 的機率走乙路線；若某一天走乙路線上學，則次日一定走甲路線。若星期一小樹決定走甲路線上學，則他在星期三走甲路線上學的機率為？',
    answer: '',
    hasImage: false,
  },
  {
    id: '1818f14271f',
    chapter: '矩陣A',
    question:
      '某城市與其郊區於 2019 年人口遷移狀況為每年住在城市的人有 20% 會遷往郊區，而住在郊區的人有 30% 會遷往城市，若該年度城市人口 40 萬人，郊區人口 20 萬人，則預估 2019 年到 2021 年，城市的人口會減少多少萬人？',
    answer: '',
    hasImage: false,
  },
  {
    id: '1818f16bfc2',
    chapter: '矩陣A',
    question: '設 $L:x-\\sqrt3y=0$，點 $P(1,\\sqrt3)$ 對 $L$ 鏡射後得 $P$ 點，求 $P$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '1818f1af59b',
    chapter: '矩陣A',
    question:
      "設 $M$ 為二階方陣，且滿足 $M\\begin{bmatrix}1\\\\2\\end{bmatrix}=\\begin{bmatrix}7\\\\4\\end{bmatrix}$，$M\\begin{bmatrix}5\\\\-1\\end{bmatrix}=\\begin{bmatrix}2\\\\9\\end{bmatrix}$，試回答下列問題：\n(1) 若矩陣 $M$ 將 $\\triangle ABC$ 變換為 $\\triangle A'B'C'$，則  $\\triangle A'B'C'$ 的面積為  $\\triangle ABC$ 面積的幾倍？\n(2) 若點 $P(4-3a,5a)$ 經過矩陣 $M$ 的變換後的點落在第一象限內，則整數值 $a$ 共有幾個？",
    answer: '',
    hasImage: false,
  },
  {
    id: '1818f1af59c',
    chapter: '矩陣A',
    question:
      '設 $M$ 為二階方陣，且滿足 $M\\begin{bmatrix}1\\\\2\\end{bmatrix}=\\begin{bmatrix}7\\\\4\\end{bmatrix}$，$M\\begin{bmatrix}5\\\\-1\\end{bmatrix}=\\begin{bmatrix}2\\\\9\\end{bmatrix}$，若點 $P(4-3a,5a)$ 經過矩陣 $M$ 的變換後的點落在第一象限內，則整數值 $a$ 共有幾個？',
    answer: '',
    hasImage: false,
  },
  {
    id: '1818f20eaf3',
    chapter: '矩陣A',
    question:
      '已知 $I=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$，$J=\\begin{bmatrix}3&3\\\\3&3\\end{bmatrix}$，且 $(I+2J)^3=aI+bJ$，求 $b$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '180be29a3d3',
    chapter: '矩陣A',
    question:
      '設矩陣 $A=\\begin{bmatrix}3&8\\\\4&9\\end{bmatrix}$，$B=\\begin{bmatrix}-2&-7\\\\-1&-6\\end{bmatrix}$，若 $3A-2B=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}$，則下列選項何者正確？\n(1) $a=5$ (2) $b=38$ (3) $c=-14$ (4) $d=21$ (5) $a+b=13$',
    answer: '(2)',
    hasImage: false,
  },
  {
    id: '18105214e8d',
    chapter: '矩陣A',
    question:
      '已知二階方陣 $A=\\begin{bmatrix}4&3\\\\3&2\\end{bmatrix}$，$B=\\begin{bmatrix}2&1\\\\3&2\\end{bmatrix}$，求滿足 $XA=B$ 之矩陣 $X$。',
    answer: '$\\begin{bmatrix}-1&2\\\\0&1\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '181051faf3e',
    chapter: '矩陣A',
    question:
      '已知 $\\begin{bmatrix}a_{11}&a_{12}\\\\a_{21}&a_{22}\\end{bmatrix}\\begin{bmatrix}x_1\\\\x_2\\end{bmatrix}=\\begin{bmatrix}7\\\\-3\\end{bmatrix}$；$\\begin{bmatrix}a_{11}&a_{12}\\\\a_{21}&a_{22}\\end{bmatrix}\\begin{bmatrix}y_1\\\\y_2\\end{bmatrix}=\\begin{bmatrix}-5\\\\3\\end{bmatrix}$，求 $\\begin{bmatrix}a_{11}&a_{12}\\\\a_{21}&a_{22}\\end{bmatrix}\\begin{bmatrix}y_1&x_1\\\\y_2&x_2\\end{bmatrix}$。',
    answer: '$\\begin{bmatrix}-5&7\\\\3&-3\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '181051c9665',
    chapter: '矩陣A',
    question:
      '選出正確的選項。\n(1) 若 $A^2=A$，則 $\\det(A)=0\\lor1$\n(2) 若 $A$、$B$、$C$ 均為轉移矩陣，則 $\\frac25A^2+\\frac35BC$ 亦為轉移矩陣\n(3) 若 $A^{-1}$、$B^{-1}$ 存在，則 $A^{-1}B^{-1}=(AB)^{-1}$\n(4) 若 $AB=I$，則 $A^2B=A$\n(5) 若 $AB=O$，則 $BA=O$',
    answer: '(1)(2)(4)',
    hasImage: false,
  },
  {
    id: '1810516c9e9',
    chapter: '矩陣A',
    question:
      '設 A、B 二箱中，A 箱內有兩球為一黑一白，B 箱內有一白球，甲、乙二人輪流取球，每次先由甲自 A 箱內任取一球，放入 B 箱內，再由乙自 B 箱內任取一球，放入 A 箱內，這樣稱為一局。\n(1) 當第一局結束時，A 箱內兩球為一黑一白的機率為？\n(2) 當第三局結束時，A 箱內兩球為一黑一白的機率為？',
    answer: '(1) $\\frac34$ (2) $\\frac{43}{64}$',
    hasImage: false,
  },
  {
    id: '181050de865',
    chapter: '矩陣A',
    question:
      '設 $B=\\begin{bmatrix}1&-1\\\\1&0\\end{bmatrix}$，$P=\\begin{bmatrix}-1&0\\\\0&3\\end{bmatrix}$，求 $(BPB^{-1})^6$。',
    answer: '$\\begin{bmatrix}729&-728\\\\0&1\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '18105099dc7',
    chapter: '矩陣A',
    question:
      '某工廠有甲、乙兩條生產線，共有 1400 位工人。工作一週後，依轉調規定：甲生產線保留 $\\frac23$ 的工人，另 $\\frac13$ 的工人轉調到乙生產線；乙生產線保留 $\\frac34$ 的工人，另 $\\frac14$ 的工人轉調到甲生產線。雖然每週都這樣作輪調，但是每條生產線上的工人總數都是不變的，求甲生產線上的工人數。',
    answer: '600',
    hasImage: false,
  },
  {
    id: '18105037348',
    chapter: '矩陣A',
    question:
      '假設有一學生，他的讀書習慣是：如果他在今晚讀書，則他在明晚有 60% 的機率不讀書；如果他在今晚不讀書，則他在明晚有 50% 的機率不讀書。\n(1) 若已知他在星期一讀書，則他兩天後 (星期三) 讀書的機率為？\n(2) 就長期而言，他晚上讀書的機率為？',
    answer: '(1) 0.46 (2) $\\frac5{11}$',
    hasImage: false,
  },
  {
    id: '181050102ac',
    chapter: '矩陣A',
    question:
      '設 $A$、$B$ 是兩個 $2\\times2$ 階的轉移矩陣，請問下列哪些敘述是正確的？\n(1) $A^2$ 是轉移矩陣 (2) $AB$ 不是轉移矩陣\n(3) $\\frac12(A+B)$ 是轉移矩陣 (4) $A^{-1}$ 是轉移矩陣',
    answer: '(1)(3)',
    hasImage: false,
  },
  {
    id: '18104fe687b',
    chapter: '矩陣A',
    question:
      '將 $\\begin{cases}5x+4y-5=0\\\\3x-2y+7=0\\end{cases}$ 寫成 $AX=B$ 的形式，並利用乘法反方陣解此方程組。',
    answer: '$x=-\\frac9{11}$；$y=\\frac{25}{11}$',
    hasImage: false,
  },
  {
    id: '18104faf725',
    chapter: '矩陣A',
    question:
      '若 $A^3=\\begin{bmatrix}3&-10\\\\2&-7\\end{bmatrix}$，$A^5=\\begin{bmatrix}7&-25\\\\5&-18\\end{bmatrix}$，求 $A$。',
    answer: '$\\begin{bmatrix}2&-5\\\\1&-3\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '18104f94bf1',
    chapter: '矩陣A',
    question:
      '設矩陣 $\\begin{bmatrix}a&b\\\\c&-a\\end{bmatrix}$ 為一可逆矩陣，且其行列式值 $\\det(A)=3$，試求 $\\det(A-A^{-1})$。',
    answer: '$\\frac{16}3$',
    hasImage: false,
  },
  {
    id: '180e2347fa4',
    chapter: '矩陣A',
    question: '設 $A=\\begin{bmatrix}x+2&1\\\\6&x+1\\end{bmatrix}$ 的乘法反方陣不存在，求 $x$。',
    answer: '$1\\lor-4$',
    hasImage: false,
  },
  {
    id: '180e2331aca',
    chapter: '矩陣A',
    question:
      '設 $A=\\begin{bmatrix}1&2\\\\3&x\\end{bmatrix}$，$B=\\begin{bmatrix}6&y\\\\3&9\\end{bmatrix}$，若 $(A+B)^2=A^2+2AB+B^2$ 成立，求 $x$、$y$',
    answer: '4；2',
    hasImage: false,
  },
  {
    id: '180e22d0fdc',
    chapter: '矩陣A',
    question:
      '設矩陣 $A=\\begin{bmatrix}5&5\\\\5&5\\end{bmatrix}$，$I=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$，試將 $(I+A)^2$ 表成 $aI+bA$ 的形式，求 $a$、$b$。',
    answer: '$1$；$12$',
    hasImage: false,
  },
  {
    id: '180e2291a1d',
    chapter: '矩陣A',
    question: '試求 $k$ 的範圍使得 $A=\\begin{bmatrix}1-k&2\\\\4&3-k\\end{bmatrix}$ 有乘法反方陣。',
    answer: '$k\\ne1,5$',
    hasImage: false,
  },
  {
    id: '180e227a8cf',
    chapter: '矩陣A',
    question:
      '下列哪些方陣有乘法反方陣？\n(1) $\\begin{bmatrix}\\sqrt2&\\sqrt3\\\\\\sqrt5&\\sqrt7\\end{bmatrix}$ (2) $\\begin{bmatrix}1&-1\\\\-1&1\\end{bmatrix}$\n(3) $\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}$ (4) $\\begin{bmatrix}2&4\\\\6&8\\end{bmatrix}$',
    answer: '(1)(4)',
    hasImage: false,
  },
  {
    id: '180e225be30',
    chapter: '矩陣A',
    question:
      '已知 $\\begin{bmatrix}5&4\\\\3&-2\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}5\\\\-7\\end{bmatrix}$，試利用乘法反方陣求 $x$、$y$。',
    answer: '$-\\frac9{11}$；$\\frac{25}{11}$',
    hasImage: false,
  },
  {
    id: '180e221a095',
    chapter: '矩陣A',
    question: '試求 $\\begin{bmatrix}-4&6\\\\-3&7\\end{bmatrix}$ 的乘法反方陣。',
    answer: '$\\begin{bmatrix}-\\frac7{10}&\\frac35\\\\-\\frac3{10}&\\frac25\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '180e21fccfa',
    chapter: '矩陣A',
    question: '已知 $A=\\begin{bmatrix}1&2\\\\4&3\\end{bmatrix}$，試求 $A^2-4A$。',
    answer: '$\\begin{bmatrix}5&0\\\\0&5\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '180e21e1269',
    chapter: '矩陣A',
    question: '已知 $A=\\begin{bmatrix}1&-1\\\\0&1\\end{bmatrix}$，試求 $A+A^2+\\cdots+A^{10}$。',
    answer: '$\\begin{bmatrix}10&-55\\\\0&10\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '180e21c043e',
    chapter: '矩陣A',
    question:
      '已知 $A$、$B$ 是二階方陣，$A+B=\\begin{bmatrix}3&5\\\\4&2\\end{bmatrix}$，$A-B=\\begin{bmatrix}1&-1\\\\2&4\\end{bmatrix}$，試求 $A^2-B^2$。',
    answer: '$\\begin{bmatrix}6&10\\\\15&11\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '180e218cfa1',
    chapter: '矩陣A',
    question: '$A=\\begin{bmatrix}2&0\\\\1&-2\\end{bmatrix}$，若 $A^3+B=I_2$，求 $B$。',
    answer: '$\\begin{bmatrix}-7&0\\\\-4&9\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '1807d84d9d7',
    chapter: '矩陣A',
    question:
      '$A=\\begin{bmatrix}3&1&7\\\\2&4&5\\end{bmatrix}$，$B=\\begin{bmatrix}1&3&5\\\\7&2&8\\\\4&6&3\\end{bmatrix}$，求 $AB$、$BA$。',
    answer: '$\\begin{bmatrix}58&53&44\\\\50&44&57\\end{bmatrix}$；不存在',
    hasImage: false,
  },
  {
    id: '1807d830fcb',
    chapter: '矩陣A',
    question:
      '矩陣 $\\begin{bmatrix}2&1&0&3\\\\1&7&4&6\\end{bmatrix}$ 可以乘下列哪些矩陣？\n(1) $\\begin{bmatrix}2&4\\\\6&5\\end{bmatrix}$ (2) $\\begin{bmatrix}1&4&3&2\\end{bmatrix}$ (3) $\\begin{bmatrix}3&6\\\\1&8\\\\4&3\\end{bmatrix}$\n(4) $\\begin{bmatrix}1\\\\3\\\\7\\\\4\\end{bmatrix}$ (5) $\\begin{bmatrix}1&2&0\\\\3&5&4\\\\7&8&3\\\\4&7&3\\end{bmatrix}$',
    answer: '(4)(5)',
    hasImage: false,
  },
  {
    id: '18052045c6e',
    chapter: '矩陣A',
    question: '$\\begin{cases}x+5y-2z=7\\\\x-4y+z=-5\\\\7x-3y-z=0\\end{cases}$，求解 $(x,y,z)$。',
    answer: '(2,3,5)',
    hasImage: false,
  },
  {
    id: '18052051b6a',
    chapter: '矩陣A',
    question: '$\\begin{cases}3x+4y+3z=0\\\\x+2y-z=-1\\\\x+y+2z=1\\end{cases}$，求解 $(x,y,z)$。',
    answer: '無解',
    hasImage: false,
  },
  {
    id: '18052069a4f',
    chapter: '矩陣A',
    question:
      '一容量為 200 立方公尺的水塔，由 A 水管注入水，B、C 兩水管放出水。現在是滿水位，若三水管全開則 30 分鐘水乾，只開 A、B 兩水管則 2 小時水乾，只開 A、C 兩水管則 1 小時水乾，求 B 水管每小時放出水量。',
    answer: '200 立方公尺',
    hasImage: false,
  },
  {
    id: '18052079823',
    chapter: '矩陣A',
    question: '$\\begin{cases}x+4y+z=6\\\\2x-y-z=0\\\\x+2y+2z=5\\end{cases}$，求解 $(x,y,z)$。',
    answer: '(1,1,1)',
    hasImage: false,
  },
  {
    id: '18052085551',
    chapter: '矩陣A',
    question: '$\\begin{cases}2x-y-z=0\\\\x+2y+2z=10\\\\x+4y+z=9\\end{cases}$，求解 $(x,y,z)$。',
    answer: '(2,1,3)',
    hasImage: false,
  },
  {
    id: '1805208ff3c',
    chapter: '矩陣A',
    question: '$\\begin{cases}x+2y+z=1\\\\2x+y+z=2\\\\x+5y+2z=0\\end{cases}$，求解 $(x,y,z)$。',
    answer: '無解',
    hasImage: false,
  },
  {
    id: '180520bbcbc',
    chapter: '矩陣A',
    question:
      '下列哪些選項中的矩陣經過一系列的列運算可以化成 $\\begin{bmatrix}1&3&4&6\\\\0&1&2&5\\\\0&0&1&2\\end{bmatrix}$？\n(1) $\\begin{bmatrix}1&2&2&1\\\\0&1&2&5\\\\0&4&9&22\\end{bmatrix}$ (2) $\\begin{bmatrix}1&3&4&6\\\\2&7&10&17\\\\1&3&5&-2\\end{bmatrix}$\n(3) $\\begin{bmatrix}1&1&0&-4\\\\2&3&2&-3\\\\1&1&0&-4\\end{bmatrix}$ (4) $\\begin{bmatrix}1&3&4&6\\\\0&2&-1&0\\\\2&5&6&7\\end{bmatrix}$',
    answer: '(1)(4)',
    hasImage: false,
  },
  {
    id: '180520d375f',
    chapter: '矩陣A',
    question:
      '若三平面 $\\begin{cases}x+2y-z=3\\\\2x+5y+2z=5\\\\x+4y+7z=a\\end{cases}$ 交於一直線。求 $a$。',
    answer: '1',
    hasImage: false,
  },
  {
    id: '180520ff92a',
    chapter: '矩陣A',
    question:
      '就實數 $k$ 之值，討論三平面相交的情形: $\\begin{cases}x-y-z=k\\\\kx-3y-4z=6\\\\x-ky-3z=4\\end{cases}$。',
    answer: '$k\\ne2\\land k\\ne5$，唯一解；$k=2$，無限多解；$k=5$，無解',
    hasImage: false,
  },
  {
    id: '1804b49a689',
    chapter: '矩陣A',
    question: '求解 $\\begin{cases}x+y-z=0\\\\2x-5y+z=2\\\\x+5y-3z=-2\\end{cases}$',
    answer: '$(2,1,3)$',
    hasImage: false,
  },
  {
    id: '1804b4ae883',
    chapter: '矩陣A',
    question: '求解 $\\begin{cases}2x-5y-z=-22\\\\x-y-2z=-5\\\\x+3y-6z=11\\end{cases}$',
    answer: '$\\frac{x+12}3=y=z+4$',
    hasImage: false,
  },
  {
    id: '1804b4b8f06',
    chapter: '矩陣A',
    question: '求解 $\\begin{cases}x+2y+3z=3\\\\x+y+2z=2\\\\-x+2y+z=3\\end{cases}$',
    answer: '無解',
    hasImage: false,
  },
  {
    id: '1804b527194',
    chapter: '矩陣A',
    question:
      '試寫出聯立方程組 $\\begin{cases}2x+3y-z+4u=5\\\\x+y+2z+3u=3\\\\-x+2y+z-4u=1\\end{cases}$ 的係數矩陣及增廣矩陣。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '1804ffe9bd5',
    chapter: '矩陣A',
    question:
      '矩陣 $\\begin{bmatrix}2&\\sqrt[3]2&-5&1\\\\0&3&\\sqrt7&9\\\\\\pi&\\log5&9&8\\end{bmatrix}$ 的階數為？第 (2,3) 元為？第 (1,4) 元為？',
    answer: '$3\\times4$；$\\sqrt7$；1',
    hasImage: false,
  },
  {
    id: '1805000a3c7',
    chapter: '矩陣A',
    question: '矩陣 $\\begin{bmatrix}1&0&1\\\\2&4&5\\end{bmatrix}$ 的階數為？第 (2,1) 元為？',
    answer: '$2\\times3$；2',
    hasImage: false,
  },
  {
    id: '1805006d65e',
    chapter: '矩陣A',
    question:
      '求 $\\begin{bmatrix}5&3&2\\\\1&6&4\\end{bmatrix}\\begin{bmatrix}1&3&-2\\\\0&6&3\\\\5&2&1\\end{bmatrix}$。',
    answer: '$\\begin{bmatrix}15&37&1\\\\21&47&20\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '180500939c7',
    chapter: '矩陣A',
    question:
      '$A=\\begin{bmatrix}1&2&3\\\\4&5&6\\end{bmatrix}$，$B=\\begin{bmatrix}1&2\\\\3&4\\\\5&6\\end{bmatrix}$，求 $AB$、$BA$',
    answer:
      '$\\begin{bmatrix}22&28\\\\49&64\\end{bmatrix}$；$\\begin{bmatrix}9&12&15\\\\19&26&33\\\\29&40&51\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '18050152680',
    chapter: '矩陣A',
    question:
      '設 $A=\\begin{bmatrix}3&1\\\\4&2\\end{bmatrix}$，若 $AB=I=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$，求 $B$、$BA$。',
    answer:
      '$\\begin{bmatrix}1&-\\frac12\\\\-2&\\frac32\\end{bmatrix}$；$\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '18050164cbb',
    chapter: '矩陣A',
    question:
      '設 $A=\\begin{bmatrix}1&3\\\\3&2\\end{bmatrix}$，若 $AB=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$，求 $B$、$BA$。',
    answer:
      '$\\begin{bmatrix}-\\frac27&\\frac37\\\\\\frac37&-\\frac17\\end{bmatrix}$；$\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '1805027dba9',
    chapter: '矩陣A',
    question:
      '已知 $A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$，$B=\\begin{bmatrix}2&1\\\\6&3\\end{bmatrix}$，若二階方陣 $X$、$Y$ 滿足 $AX=B$、$YA=B$，求 $X$、$Y$。',
    answer:
      '$\\begin{bmatrix}2&1\\\\0&0\\end{bmatrix}$；$\\begin{bmatrix}-\\frac52&\\frac32\\\\-\\frac{15}2&\\frac92\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '180502996b9',
    chapter: '矩陣A',
    question:
      '$A=\\begin{bmatrix}3&5\\\\6&9\\end{bmatrix}$，$B=\\begin{bmatrix}2&1\\\\3&4\\end{bmatrix}$，$AX+B=\\begin{bmatrix}4&5\\\\1&1\\end{bmatrix}$，求 $X$。',
    answer: '$\\begin{bmatrix}-\\frac{28}3&-17\\\\6&11\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '1805030b4dc',
    chapter: '矩陣A',
    question:
      '某人上班有甲、乙、丙三條路線可供選擇，若某天走甲路線，則隔天走甲、乙、丙的機率依序為 0.5、0.2、0.3；若某天走乙，則隔天走甲、乙、丙的機率依序為 0.4、0.6、0；若某天走丙，則隔天走甲、乙、丙的機率依序為 0.2、0.1、0.7。試寫出轉移方陣。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '1805032ff50',
    chapter: '矩陣A',
    question:
      '某國選舉有 A 黨、B 黨、C 黨三種選民，據調查顯示：A 黨員每次選舉不跑票的有 80%，而轉向 B 黨與 C 黨依序占 10% 與 10%；B 黨員每次選舉不跑票的有 60%，而轉向 A 黨與 C 黨依序占 10% 與 30%；C 黨員每次選舉不跑票的有 20%，而轉向 A 黨與 B 黨依序占 45% 與 35%。試寫出轉移方陣。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '180503e364e',
    chapter: '矩陣A',
    question:
      '若 $y=5x^2$ 在 $(x,y)\\rightarrow(3x,2y)$ 的伸縮變換下變成另一圖形，求此新圖形的方程式。',
    answer: '$9y=10x^2$',
    hasImage: false,
  },
  {
    id: '180503f537f',
    chapter: '矩陣A',
    question:
      '若直線 $5x+3y=4$ 在 $(x,y)\\rightarrow(2x,7y)$ 的伸縮變換下變成另一圖形，求此新圖形的方程式。',
    answer: '$35x+6y=56$',
    hasImage: false,
  },
  {
    id: '1805041523e',
    chapter: '矩陣A',
    question:
      "若直線 $L:3x-4y=5$ 在 $(x,y)\\rightarrow(x+2y,y)$ 的推移下變成另一直線 $L'$，求 $L'$ 的方程式。",
    answer: '$3x-10y=5$',
    hasImage: false,
  },
  {
    id: '1805042d699',
    chapter: '矩陣A',
    question:
      "$\\triangle ABC$ 的頂點為 $A(2,7)$、$B(5,4)$、$C(7,8)$，將此三頂點分別沿 $x$ 軸推移 $y$ 坐標的 4 倍，得 $A'$、$B'$、$C'$ 三點，求 $A'$ 坐標、$\\triangle A'B'C'$ 的面積。",
    answer: '(30,7)；9',
    hasImage: false,
  },
  {
    id: '18050a7b2f7',
    chapter: '矩陣A',
    question: '若二階方陣 $A$ 把點 (2,5) 變換成 (4,3)，把點 (1,3) 變換成 (-5,12)，試求 $A$。',
    answer: '$\\begin{bmatrix}37&-14\\\\-51&21\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '18050a8dcff',
    chapter: '矩陣A',
    question:
      '二階方陣 $A$，點 (1,2) 經 $A$ 變換的像為 (10,-5)，點 (2,-1) 經 $A$ 變換的像為 (15,20)，求 $A$。',
    answer: '$\\begin{bmatrix}8&1\\\\7&-6\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df4f75aa0',
    chapter: '矩陣A',
    question: '請利用增廣矩陣的列運算解 $\\begin{cases}2x+y=35\\\\x-3y=7\\end{cases}$。',
    answer: '$(x,y)=(16,3)$',
    hasImage: false,
  },
  {
    id: '17df4f81069',
    chapter: '矩陣A',
    question:
      '若 $\\begin{bmatrix}1&1&2&3\\\\1&2&4&0\\\\3&1&1&2\\end{bmatrix}$ 經過列運算後可化成 $\\begin{bmatrix}1&1&2&3\\\\0&1&0&a\\\\0&0&1&b\\end{bmatrix}$，求數對 $(a,b)$。',
    answer: '$(-29,13)$',
    hasImage: false,
  },
  {
    id: '17df4fcd30d',
    chapter: '矩陣A',
    question: '$\\begin{cases}3x+y=2\\\\x-2y=1\\end{cases}$，試用列運算求解。',
    answer: '$(x,y)=(\\frac57,-\\frac17)$',
    hasImage: false,
  },
  {
    id: '17df4fdb66b',
    chapter: '矩陣A',
    question:
      '若 $\\begin{bmatrix}1&1&2&5\\\\2&3&1&1\\\\1&4&2&2\\end{bmatrix}$ 可經由列運算化成 $\\begin{bmatrix}1&1&2&5\\\\0&1&0&a\\\\0&0&1&b\\end{bmatrix}$，求數對 $(a,b)$。',
    answer: '$(-1,\\frac83)$',
    hasImage: false,
  },
  {
    id: '17df4fe8a7d',
    chapter: '矩陣A',
    question:
      '已知 $\\begin{bmatrix}1&-2&a&5\\\\3&-1&2&b\\\\2&c&-3&-5\\end{bmatrix}$ 可經由列運算得到 $\\begin{bmatrix}1&0&0&2\\\\0&1&0&3\\\\0&0&1&1\\end{bmatrix}$ 求序組 $(a,b,c)$。',
    answer: '$(9,5,-2)$',
    hasImage: false,
  },
  {
    id: '17df5039120',
    chapter: '矩陣A',
    question:
      '方程式 $\\begin{cases}x+2y+4z=3\\\\x+y+2z=a\\\\3x+y+az=b\\end{cases}$\n(1) 若有唯一解，求 $a$ 的範圍\n(2) 若有無限多解，求 $a$、$b$\n(3) 若無解，求 $a$、$b$ 的範圍',
    answer: '(1) $a\\ne2$ (2) $a=2$；$b=4$ (3) $a=2$；$b\\ne4$',
    hasImage: false,
  },
  {
    id: '17df50001ba',
    chapter: '矩陣A',
    question:
      '已知 $\\begin{bmatrix}1&2&a&16\\\\0&-1&-5&b\\\\0&12&c&0\\end{bmatrix}$ 可經由列運算得到 $\\begin{bmatrix}1&0&0&2\\\\0&1&0&3\\\\0&0&1&-4\\end{bmatrix}$ 求序組 $(a,b,c)$。',
    answer: '$(-1,15,15)$',
    hasImage: false,
  },
  {
    id: '17df5045f33',
    chapter: '矩陣A',
    question:
      '若 $\\begin{cases}x+y-z=a\\\\2x-y+2z=b\\\\x-2y+az=1\\end{cases}$ 有無限多解，求數對 $(a,b)$。',
    answer: '$(3,4)$',
    hasImage: false,
  },
  {
    id: '17df50568a3',
    chapter: '矩陣A',
    question:
      '設 $A=\\begin{bmatrix}a_{ij}\\end{bmatrix}_{2\\times3}$，且 $a_{ij}=2i-3j$，求：\n(1) $A$ (2) $A$ 的所有元素和',
    answer: '(1) $\\begin{bmatrix}-1&-4&-7\\\\1&-2&-5\\end{bmatrix}$ (2)$-18$',
    hasImage: false,
  },
  {
    id: '17df5064f51',
    chapter: '矩陣A',
    question:
      '方陣 $A=\\begin{bmatrix}a_{ij}\\end{bmatrix}_{5\\times5}$，試問：\n(1) 若 $a_{ij}=i-j$，求 $A$ 的所有元素和\n(2) 若 $a_{ij}=|i-j|$，求 $A$ 的所有元素和',
    answer: '(1) $0$ (2) $40$',
    hasImage: false,
  },
  {
    id: '17df506c704',
    chapter: '矩陣A',
    question:
      '若 $\\begin{bmatrix}a+3b&7\\\\-3&x+y\\end{bmatrix}=\\begin{bmatrix}5&x-y\\\\a-b&1\\end{bmatrix}$，求 $a+b+x+y$。',
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '17df50834fb',
    chapter: '矩陣A',
    question:
      '若 $A=\\begin{bmatrix}3&2&1\\\\1&0&4\\end{bmatrix}$，$B=\\begin{bmatrix}1&0&5\\\\2&4&-1\\end{bmatrix}$，求：\n(1) $A+B$ (2) $3A-2B$\n(3) $8(2A-B)-2[4A+3(A-2B)]$',
    answer:
      '(1) $\\begin{bmatrix}4&2&6\\\\3&4&3\\end{bmatrix}$ (2) $\\begin{bmatrix}7&6&-7\\\\-1&-8&14\\end{bmatrix}$ (3) $\\begin{bmatrix}10&4&22\\\\10&16&4\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df508d090',
    chapter: '矩陣A',
    question:
      '設 $\\begin{bmatrix}x-2y&a-b\\\\a+b&x-4y\\end{bmatrix}=\\begin{bmatrix}0&1\\\\9&2\\end{bmatrix}$，求序組 $(a,b,x,y)$。',
    answer: '$(5,4,-2,-1)$',
    hasImage: false,
  },
  {
    id: '17df5097b18',
    chapter: '矩陣A',
    question:
      '$A=\\begin{bmatrix}3&1\\\\2&5\\end{bmatrix}$，$B=\\begin{bmatrix}-1&7\\\\-2&4\\end{bmatrix}$，求：\n(1) $A+B$ (2) $2A-3B$\n(3) $B+[5A-3(2A-B)]$',
    answer:
      '(1)$\\begin{bmatrix}2&8\\\\0&9\\end{bmatrix}$ (2)$\\begin{bmatrix}9&-19\\\\10&-2\\end{bmatrix}$ (3)$\\begin{bmatrix}-7&27\\\\-10&11\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df50a0228',
    chapter: '矩陣A',
    question:
      '設 $A=\\begin{bmatrix}5&1\\\\0&2\\end{bmatrix}$，$B=\\begin{bmatrix}1&-3\\\\6&-5\\end{bmatrix}$，若 $4A-X=3(2B-X)$，求 $X$。',
    answer: '$\\begin{bmatrix}-7&-11\\\\18&-19\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df50af357',
    chapter: '矩陣A',
    question:
      '設 $A=\\begin{bmatrix}3&1&2\\\\4&0&3\\end{bmatrix}$，$B=\\begin{bmatrix}2&2&0\\\\1&3&5\\end{bmatrix}$，若 $\\begin{cases}2X+Y=6A\\\\X-Y=3B\\end{cases}$，求 $X$、$Y$。',
    answer:
      '$\\begin{bmatrix}8&4&4\\\\9&3&11\\end{bmatrix}$；$\\begin{bmatrix}2&-2&4\\\\6&-6&-4\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df50be60a',
    chapter: '矩陣A',
    question:
      '若 $3X+\\begin{bmatrix}5&2\\\\2&-3\\\\5&1\\end{bmatrix}=\\begin{bmatrix}3&0\\\\2&-5\\\\1&4\\end{bmatrix}+4\\begin{bmatrix}2&2\\\\-3&-1\\\\7&3\\end{bmatrix}$，求 $X$。',
    answer: '$\\begin{bmatrix}2&2\\\\-4&-2\\\\8&5\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df50cf6be',
    chapter: '矩陣A',
    question:
      '阿明解矩陣的聯立方程式組，把 $\\begin{cases}X+2Y=A\\\\2X-Y=B\\end{cases}$ 看成 $\\begin{cases}X+Y=A\\\\2X+Y=B\\end{cases}$ 結果得到錯誤的 $X=\\begin{bmatrix}3&-13\\\\-17&1\\end{bmatrix}$，$Y=\\begin{bmatrix}0&25\\\\30&5\\end{bmatrix}$，若阿明無其他失誤，求正確的 $X$、$Y$。\n',
    answer:
      '$\\begin{bmatrix}3&2\\\\1&4\\end{bmatrix}$；$\\begin{bmatrix}0&5\\\\6&1\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df50dc03b',
    chapter: '矩陣A',
    question:
      '設 $A=\\begin{bmatrix}2&3&5\\\\7&6&4\\end{bmatrix}$，$B=\\begin{bmatrix}1&6&2\\\\4&9&8\\\\8&7&3\\end{bmatrix}$，求 $AB$、$BA$。',
    answer: '$\\begin{bmatrix}54&74&43\\\\63&124&74\\end{bmatrix}$；不存在',
    hasImage: false,
  },
  {
    id: '17df50e4f9f',
    chapter: '矩陣A',
    question: '二階方陣 $A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$，求 $A^2$、$A^3$。',
    answer:
      '$\\begin{bmatrix}7&10\\\\15&22\\end{bmatrix}$；$\\begin{bmatrix}37&54\\\\81&118\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df510dec6',
    chapter: '矩陣A',
    question:
      '$A=\\begin{bmatrix}0&1\\\\2&0\\end{bmatrix}$，$B=\\begin{bmatrix}3&1&6\\\\4&5&2\\end{bmatrix}$，求 $AB$、$BA$',
    answer: '$\\begin{bmatrix}4&5&2\\\\6&2&12\\end{bmatrix}$；不存在',
    hasImage: false,
  },
  {
    id: '17df5114895',
    chapter: '矩陣A',
    question: '二階方陣 $A=\\begin{bmatrix}3&1\\\\0&2\\end{bmatrix}$，求 $A^2$、$A^3$。',
    answer:
      '$\\begin{bmatrix}9&5\\\\0&4\\end{bmatrix}$；$\\begin{bmatrix}27&19\\\\0&8\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df55552c9',
    chapter: '矩陣A',
    question:
      '設矩陣 $A$ 滿足 $A\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}=\\begin{bmatrix}5\\\\7\\end{bmatrix}$，$A\\begin{bmatrix}32\\\\8\\\\16\\end{bmatrix}\\begin{bmatrix}72\\\\96\\end{bmatrix}$，求乘積 $A\\begin{bmatrix}-2&4\\\\-4&1\\\\-6&2\\end{bmatrix}$。',
    answer: '$\\begin{bmatrix}-10&9\\\\-14&12\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df5563457',
    chapter: '矩陣A',
    question:
      '已知矩陣 $A$ 滿足 $\\begin{bmatrix}2&3\\end{bmatrix}A=\\begin{bmatrix}1&8&3\\end{bmatrix}$，$\\begin{bmatrix}1&4\\end{bmatrix}A=\\begin{bmatrix}5&2&7\\end{bmatrix}$，試求 $\\begin{bmatrix}4&6\\\\5&20\\end{bmatrix}A$。',
    answer: '$\\begin{bmatrix}2&16&6\\\\25&10&35\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df556cdf6',
    chapter: '矩陣A',
    question:
      '$A=\\begin{bmatrix}2&4&3\\\\1&-1&5\\end{bmatrix}$，$B=\\begin{bmatrix}1\\\\3\\\\-2\\end{bmatrix}$，$C=\\begin{bmatrix}1&2&1&3\\end{bmatrix}$，試問 $(AB)C$ 與 $A(BC)$ 是否相同。',
    answer: '是',
    hasImage: false,
  },
  {
    id: '17df5572cb7',
    chapter: '矩陣A',
    question:
      '已知方陣 $A=\\begin{bmatrix}2&3&1\\\\4&1&5\\\\6&1&2\\end{bmatrix}$，$B=\\begin{bmatrix}7&-3&6\\\\2&8&-9\\\\-6&8&-6\\end{bmatrix}$，$C=\\begin{bmatrix}-7&3&-4\\\\-2&-8&9\\\\6&-8&-7\\end{bmatrix}$，試求 $AB+AC$。',
    answer: '$\\begin{bmatrix}0&0&3\\\\0&0&3\\\\0&0&10\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df55831c0',
    chapter: '矩陣A',
    question:
      '計算 $\\begin{bmatrix}\\frac12&\\frac23\\\\\\frac56&1\\end{bmatrix}\\begin{bmatrix}\\frac25&\\frac3{10}\\\\\\frac12&\\frac7{10}\\end{bmatrix}$。',
    answer: '$\\begin{bmatrix}\\frac8{15}&\\frac{37}{60}\\\\\\frac56&\\frac{19}{20}\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df5588b8a',
    chapter: '矩陣A',
    question:
      '已知 $A=\\begin{bmatrix}3&2\\\\4&1\\end{bmatrix}$，$B=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$，$C=\\begin{bmatrix}4&3\\\\2&1\\end{bmatrix}$，求 $(AB)C、A(BC)$。',
    answer:
      '$\\begin{bmatrix}64&41\\\\52&33\\end{bmatrix}$；$\\begin{bmatrix}64&41\\\\52&33\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df5594d29',
    chapter: '矩陣A',
    question:
      '已知 $A=\\begin{bmatrix}3&7&2\\\\5&6&9\\\\1&4&8\\end{bmatrix}$，$B=\\begin{bmatrix}-3&-7&-1\\\\-5&-6&-9\\\\0&-4&-8\\end{bmatrix}$，$C=\\begin{bmatrix}-3&-7&0\\\\-4&-6&-9\\\\1&-4&-8\\end{bmatrix}$，求 $AC+BC$、$AB-AC$。',
    answer:
      '$\\begin{bmatrix}1&-4&-8\\\\0&0&0\\\\-3&-7&0\\end{bmatrix}$；$\\begin{bmatrix}-9&0&-3\\\\-15&0&-5\\\\-12&0&-1\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df55a336b',
    chapter: '矩陣A',
    question:
      '計算 $\\begin{bmatrix}\\frac32&1\\\\2&\\frac52\\end{bmatrix}\\begin{bmatrix}\\frac16&\\frac56\\\\\\frac32&\\frac73\\end{bmatrix}$。',
    answer: '$\\begin{bmatrix}\\frac74&\\frac{43}{12}\\\\\\frac{49}{12}&\\frac{15}2\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df55ae28b',
    chapter: '矩陣A',
    question:
      '$A=\\begin{bmatrix}1&2\\\\2&4\\end{bmatrix}$，$B=\\begin{bmatrix}2&-2\\\\-1&1\\end{bmatrix}$，試問 $AB$ 與 $BA$ 是否相同。',
    answer: '否',
    hasImage: false,
  },
  {
    id: '17df55b5ef9',
    chapter: '矩陣A',
    question:
      '已知 $A=\\begin{bmatrix}x&y\\\\5&-1\\end{bmatrix}$，$B=\\begin{bmatrix}3&1\\\\4&2\\end{bmatrix}$，若 $AB=BA$，求 $x$、$y$。',
    answer: '$\\frac14$；$\\frac54$',
    hasImage: false,
  },
  {
    id: '17df55c3250',
    chapter: '矩陣A',
    question:
      '已知 $A$、$B$、$C$ 皆為 $2$ 階方陣， $I$ 為 $2$ 階單位方陣，$O$ 為 $2$ 階零方陣，下列選項哪些為真？\n(1) $(A+B)+C=A+(B+C)$ 且 $(AB)C=A(BC)$\n(2) $(A+B)^2=A^2+2AB+B^2$\n(3) $(A+I)^2=A^2+2A+I$\n(4) 若 $AB=AC$，則 $B=C$\n(5) 若 $AB=O$，則 $A=O$ 或 $B=O$\n(6) 若 $A^2=O$，則 $A=O$',
    answer: '(1)(3)',
    hasImage: false,
  },
  {
    id: '17df55cdeb5',
    chapter: '矩陣A',
    question:
      '$A=\\begin{bmatrix}x&y\\\\10&-1\\end{bmatrix}$，$B=\\begin{bmatrix}3&-1\\\\5&2\\end{bmatrix}$，若 $AB=BA$，求 $x$、$y$。',
    answer: '$1$；$-2$',
    hasImage: false,
  },
  {
    id: '17df55d7985',
    chapter: '矩陣A',
    question:
      '$I=\\begin{bmatrix}1&0&0\\\\0&1&0\\\\0&0&1\\end{bmatrix}$，$J=\\begin{bmatrix}1&1&1\\\\1&1&1\\\\1&1&1\\end{bmatrix}$，求：\n(1) $(I+J)^3$ (2) $(I+\\frac J3)^{10}$',
    answer:
      '(1) $\\begin{bmatrix}22&21&21\\\\21&22&21\\\\21&21&22\\end{bmatrix}$ (2) $\\begin{bmatrix}342&341&341\\\\341&342&341\\\\341&341&342\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df55e8e6f',
    chapter: '矩陣A',
    question:
      '已知方陣 $I=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$，$J=\\begin{bmatrix}1&1\\\\1&1\\end{bmatrix}$，試問：\n(1) 求 $(I+J)^4$\n(2) 若 $(I+\\frac12J)^{10}=I+kJ$，求 $k$',
    answer: '(1) $\\begin{bmatrix}41&40\\\\40&41\\end{bmatrix}$ (2) $\\frac{1023}2$',
    hasImage: false,
  },
  {
    id: '17df55f2ff6',
    chapter: '矩陣A',
    question:
      '已知二階方陣 $A$ 滿足 $A\\begin{bmatrix}4\\\\8\\end{bmatrix}=\\begin{bmatrix}2\\\\0\\end{bmatrix}$，$A\\begin{bmatrix}9\\\\6\\end{bmatrix}=\\begin{bmatrix}0\\\\3\\end{bmatrix}$，求 $A$。',
    answer: '$\\begin{bmatrix}-\\frac14&\\frac38\\\\\\frac12&-\\frac14\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df55fb5ef',
    chapter: '矩陣A',
    question:
      '若方陣 $A\\begin{bmatrix}2\\\\3\\end{bmatrix}=\\begin{bmatrix}1\\\\0\\end{bmatrix}$，$A\\begin{bmatrix}1\\\\4\\end{bmatrix}=\\begin{bmatrix}0\\\\1\\end{bmatrix}$，求 $A$。',
    answer: '$\\begin{bmatrix}\\frac45&-\\frac15\\\\-\\frac35&\\frac25\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df5600752',
    chapter: '矩陣A',
    question:
      '設 $A$ 為二階方陣，若 $A^2=\\begin{bmatrix}-1&-4\\\\8&7\\end{bmatrix}$，$A^3=\\begin{bmatrix}-9&-11\\\\22&13\\end{bmatrix}$，求 $A$。',
    answer: '$\\begin{bmatrix}1&-1\\\\2&3\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df560d2dd',
    chapter: '矩陣A',
    question:
      '已知 $AB=\\begin{bmatrix}8&6\\\\14&8\\end{bmatrix}$，$BA=\\begin{bmatrix}5&15\\\\5&11\\end{bmatrix}$，求 $A^{-1}B^{-1}$。',
    answer: '$\\begin{bmatrix}-\\frac{11}{20}&\\frac34\\\\\\frac14&-\\frac14\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df5611088',
    chapter: '矩陣A',
    question:
      '設 $A$ 為二階方陣，已知 $A^3=\\begin{bmatrix}7&10\\\\5&7\\end{bmatrix}$，$A^4=\\begin{bmatrix}17&24\\\\12&17\\end{bmatrix}$，求 $A^2$。',
    answer: '$\\begin{bmatrix}3&4\\\\2&3\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df56186ce',
    chapter: '矩陣A',
    question:
      '已知 $AB=\\begin{bmatrix}5&4\\\\6&5\\end{bmatrix}$，$BA=\\begin{bmatrix}3&10\\\\2&7\\end{bmatrix}$，求 $A^{-1}B^{-1}$、$B^{-1}A^{-1}$。',
    answer:
      '$\\begin{bmatrix}7&-10\\\\-2&3\\end{bmatrix}$；$\\begin{bmatrix}5&-4\\\\-6&5\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df561e770',
    chapter: '矩陣A',
    question: '若 $\\begin{bmatrix}a^2&a-2\\\\a+1&1\\end{bmatrix}$ 的反方陣不存在，求 $a$。',
    answer: '$-2$',
    hasImage: false,
  },
  {
    id: '17df5625e43',
    chapter: '矩陣A',
    question:
      '$x\\in\\mathbb R$，若 $\\begin{bmatrix}3x&2\\\\x+1&4x\\end{bmatrix}$ 的反方陣存在，但 $\\begin{bmatrix}x+1&1\\\\5x+1&3x\\end{bmatrix}$ 的反方陣不存在，求 $x$。',
    answer: '$1$',
    hasImage: false,
  },
  {
    id: '17df5646192',
    chapter: '矩陣A',
    question:
      '$A$、$B$、$C$ 為 $n$ 階方陣，$I$ 為 $n$ 階單位方陣。判別對錯：\n(1) 若 $AB=AC$，則 $B=C$\n(2) 若 $AB=AC=I$，則 $B=C$\n(3) 若 $A$ 的反方陣為 $A^{-1}$，則 $(A^{-1})^2=(A^2)^{-1}$\n(4) 若 $ABA^{-1}=I$，則 $B=I$\n(5) 若 $(AB)$ 為可逆方陣，則 $A$ 與 $B$ 均為可逆方陣',
    answer: 'xoooo',
    hasImage: false,
  },
  {
    id: '17df5658930',
    chapter: '矩陣A',
    question:
      '$I$ 為 $n$ 階單位方陣，$A$、$B$ 為 $n$ 階方陣，請問下列各選項哪些正確？\n(1) 若 $AX=B$ 且 $A^{-1}$ 存在，則 $X=BA^{-1}$\n(2) 若 $AB=BC$ 且 $B^{-1}$ 存在，則 $A=C$\n(3) 若 $A-B$ 有反方陣，則 $(A-B)^{-1}(B-A)=-I$\n(4) 若 $A+B$ 有反方陣，則 $\\begin{cases}AX+Y=B\\\\BX-Y=A\\end{cases}$ 必可解出 $X=I$\n(5) 若 $A^2=I$，則 $A=A^{-1}=I$',
    answer: '(3)(4)',
    hasImage: false,
  },
  {
    id: '17df566708a',
    chapter: '矩陣A',
    question:
      '將聯立方程式 $\\begin{cases}3x+2y=15\\\\4x+y=10\\end{cases}$ 寫成矩陣乘積的等式並利用反方陣求解。',
    answer: '$(x,y)=(1,6)$',
    hasImage: false,
  },
  {
    id: '17df56727bf',
    chapter: '矩陣A',
    question:
      '設二階方陣 $X$ 滿足 $2X\\begin{bmatrix}3&2\\\\5&3\\end{bmatrix}+3\\begin{bmatrix}1&2\\\\-1&0\\end{bmatrix}=\\begin{bmatrix}5&10\\\\1&8\\end{bmatrix}$，求 $X$。',
    answer: '$\\begin{bmatrix}-\\frac52&\\frac32\\\\-\\frac{15}2&\\frac92\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df567f4d7',
    chapter: '矩陣A',
    question:
      '$A=\\begin{bmatrix}3&1\\\\5&0\\end{bmatrix}$，若 $A\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}2\\\\7\\end{bmatrix}$，求 $x$，$y$。',
    answer: '$\\frac75$；$-\\frac{11}5$',
    hasImage: false,
  },
  {
    id: '17df568a279',
    chapter: '矩陣A',
    question:
      '設 $A=\\begin{bmatrix}1&2&3\\\\1&0&4\\end{bmatrix}$，$B=\\begin{bmatrix}2&1&1\\\\1&3&0\\end{bmatrix}$，$C=\\begin{bmatrix}2&3\\\\1&1\\end{bmatrix}$，$A+2B+2CX=3A+B-X$，求 $X$。',
    answer: '$\\begin{bmatrix}-2&9&-11\\\\\\frac53&-7&10\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df56940d1',
    chapter: '矩陣A',
    question:
      '下列有關轉移方陣的敘述，哪些是正確的？\n(1) $\\begin{bmatrix}0.2&0.8\\\\0.6&0.4\\end{bmatrix}$ 是轉移方陣\n(2) $\\begin{bmatrix}0.2&2\\\\0.8&-1\\end{bmatrix}$ 是轉移方陣\n(3) $\\begin{bmatrix}0.2&1&0.6\\\\0.4&0&0.1\\\\0.4&0&0.3\\end{bmatrix}$ 是轉移方陣\n(4) 若 $A$、$B$ 都是轉移方陣，則 $AB$ 也是轉移方陣\n(5) 若 $A$、$B$ 都是轉移方陣，則 $\\frac12(A+B)$ 也是轉移方陣',
    answer: '(3)(4)(5)',
    hasImage: false,
  },
  {
    id: '17df569c034',
    chapter: '矩陣A',
    question: '已知 $A$ 為轉移方陣，若 $x(A+A^2+A^3+\\cdots+A^{10})$ 為轉移方陣，求 $x$',
    answer: '$\\frac1{10}$',
    hasImage: false,
  },
  {
    id: '17df56b28c6',
    chapter: '矩陣A',
    question:
      '多次數學考試下來，數學老師發現，全體同學若上次數學考及格，則這次也會及格的比率為 $80\\%$，若上次數學不及格，則這次數學仍不及格的比率為 $60\\%$。若這次數學考完共有七成的同學及格，則：\n(1) 下次及格的比率\n(2) 下下次及格的比率\n(3) 多次考試後及格的比率',
    answer: '(1) $0.68$ (2) $0.672$ (3) $\\frac23$',
    hasImage: false,
  },
  {
    id: '17df56b6cb2',
    chapter: '矩陣A',
    question:
      '設 $A$ 箱內有 $2$ 白球，$B$ 箱內有 $1$ 黑球，兩手伸進 $A$ 與 $B$ 內各取一球互換，求多次交換後黑球在 $A$ 箱內的機率。',
    answer: '$\\frac23$',
    hasImage: false,
  },
  {
    id: '17df56d4e30',
    chapter: '矩陣A',
    question:
      '小明去學校有甲、乙兩條路可以走，他每天依下述方法決定上學的路線：若某一天走乙路線上學，則次日一定走甲路線；若某一天走甲路線上學，則次日丟一枚公正硬幣，正面走甲路線，反面走乙路線：試問：\n(1) 若星期一小明以丟硬幣決定上學路線，求他在星期三走甲路線的機率\n(2) 長期而言，小明走甲路線的機率',
    answer: '$\\frac58$；$\\frac23$',
    hasImage: false,
  },
  {
    id: '17df56e3bb3',
    chapter: '矩陣A',
    question:
      '設 $A$ 箱內有 $2$ 白球，$B$ 箱內有 $1$ 黑球，甲、乙兩人輪流取球，每次先由甲自 $A$ 箱內任取一球，放入 $B$ 箱內，再由乙自 $B$ 箱內任取一球，放入 $A$ 箱內，這樣稱為一局，試求：\n(1) 在交換三局後，$2$ 白球在 $A$ 箱內的機率\n(2) 多次交換後 $2$ 白球在 $A$ 箱的機率',
    answer: '$\\frac{11}{32}$；$\\frac13$',
    hasImage: false,
  },
  {
    id: '17df56f3ed1',
    chapter: '矩陣A',
    question:
      '方陣 $A=\\begin{bmatrix}2&1\\\\3&4\\end{bmatrix}$，$A$ 作用在 $P(-1,5)$ 所得的像為 $Q$，求 $Q$ 坐標。',
    answer: '(3,17)',
    hasImage: false,
  },
  {
    id: '17df1d69974',
    chapter: '矩陣A',
    question:
      '方陣 $A=\\begin{bmatrix}1&2\\\\4&3\\end{bmatrix}$，$A$ 作用在點 $P$ 的像為 $(15,55)$，求點 $P$ 坐標。',
    answer: '$(13,1)$',
    hasImage: false,
  },
  {
    id: '17df56ff47e',
    chapter: '矩陣A',
    question:
      '方陣 $\\begin{bmatrix}5&6\\\\1&2\\end{bmatrix}$ 作用在點 $(a,5)$ 所得的像為 $(b,7)$，求 $a$、$b$。',
    answer: '$-3$；$15$',
    hasImage: false,
  },
  {
    id: '17df1d9804e',
    chapter: '矩陣A',
    question:
      '方陣 $\\begin{bmatrix}4&1\\\\5&3\\end{bmatrix}$ 作用在 $P$ 點上的像為 $(-7,7)$，求 $P$ 坐標。',
    answer: '$(-4,9)$',
    hasImage: false,
  },
  {
    id: '17df57184c6',
    chapter: '矩陣A',
    question:
      "平面上有 $\\triangle PQR$，已知 $P(1,2)$、$Q(3,8)$、$R(6,-5)$，$\\triangle PQR$ 經 $\\begin{bmatrix}9&3\\\\2&-1\\end{bmatrix}$ 線性變換後得 $\\triangle P'Q'R'$，求 $\\triangle P'Q'R'$ 面積。",
    answer: '$330$',
    hasImage: false,
  },
  {
    id: '17df571c79b',
    chapter: '矩陣A',
    question:
      '平面上長方形 $ABCD$ 頂點為 $(2,1)$、$(5,1)$、$(2,8)$、$(5,8)$，經 $\\begin{bmatrix}3&7\\\\2&6\\end{bmatrix}$ 變換為平行四邊形，求其面積。',
    answer: '$84$',
    hasImage: false,
  },
  {
    id: '17df5721a17',
    chapter: '矩陣A',
    question:
      '$A=\\begin{bmatrix}3&2\\\\1&4\\end{bmatrix}$，求直線 $2x+3y=6$ 經 $A$ 變換後的圖形方程式。',
    answer: '$x+y=12$',
    hasImage: false,
  },
  {
    id: '17df5725bce',
    chapter: '矩陣A',
    question:
      '試求平面上直線 $L:5x+7y=6$ 經方陣 $\\begin{bmatrix}3&1\\\\4&2\\end{bmatrix}$ 變換後，所得的圖形方程式。',
    answer: '$9x-8y=-6$',
    hasImage: false,
  },
  {
    id: '17df573a1dd',
    chapter: '矩陣A',
    question:
      '平面上一點 $(3,5)$，試求：\n(1) 繞原點逆時針轉 $45\\du$ 得到之坐標\n(2) 繞原點順時針轉 $45\\du$ 得到之坐標',
    answer: '$(-\\sqrt2,4\\sqrt2)$；$(4\\sqrt2,-\\sqrt2)$',
    hasImage: false,
  },
  {
    id: '17df57574d4',
    chapter: '矩陣A',
    question: '正三角形 $OAB$，$O$ 為原點，$A(4,10)$，求 $B$ 坐標。',
    answer: '$(2-5\\sqrt3,5+2\\sqrt3)\\lor(2+5\\sqrt3,5-2\\sqrt3)$',
    hasImage: false,
  },
  {
    id: '17df5765825',
    chapter: '矩陣A',
    question:
      '求 $\\begin{bmatrix}\\frac12&-\\frac{\\sqrt3}2\\\\\\frac{\\sqrt3}2&\\frac12\\end{bmatrix}^{100}$。',
    answer:
      '$\\begin{bmatrix}-\\frac12&\\frac{\\sqrt3}2\\\\-\\frac{\\sqrt3}2&-\\frac12\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df577b7ed',
    chapter: '矩陣A',
    question:
      '(1) $\\begin{bmatrix}\\frac1{\\sqrt2}&\\frac1{\\sqrt2}\\\\-\\frac1{\\sqrt2}&\\frac1{\\sqrt2}\\end{bmatrix}^{123}$ (2) $\\begin{bmatrix}1&\\sqrt3\\\\-\\sqrt3&1\\end{bmatrix}^{10}$',
    answer:
      '(1) $\\begin{bmatrix}-\\frac{\\sqrt2}2&\\frac{\\sqrt2}2\\\\-\\frac{\\sqrt2}2&-\\frac{\\sqrt2}2\\end{bmatrix}$ (2) $\\begin{bmatrix}-512&-512\\sqrt3\\\\512\\sqrt3&-512\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17df579b485',
    chapter: '矩陣A',
    question:
      '已知鏡射矩陣 $A=\\begin{bmatrix}-\\frac12&-\\frac{\\sqrt3}2\\\\-\\frac{\\sqrt3}2&\\frac12\\end{bmatrix}$ 與旋轉矩陣 $B=\\begin{bmatrix}\\frac12&-\\frac{\\sqrt3}2\\\\\\frac{\\sqrt3}2&\\frac12\\end{bmatrix}$，試問：\n(1) 點 $(x,y)$ 經矩陣 $A$ 作用，相當於對哪一條直線鏡射？\n(2) 點 $(x,y)$ 先經 $A$ 再經 $B$ 作用，會得到鏡射矩陣，相當於對哪一條直線鏡射？',
    answer: '(1) $y=-\\sqrt3x$  (2) $y=-\\frac x{\\sqrt3}$',
    hasImage: false,
  },
  {
    id: '17df57a5fb6',
    chapter: '矩陣A',
    question:
      '鏡射矩陣 $\\begin{bmatrix}\\frac{\\sqrt3}2&-\\frac12\\\\-\\frac12&-\\frac{\\sqrt3}2\\end{bmatrix}$ 是對直線 $y=kx$ 做鏡射，求 $k$。',
    answer: '$\\tan15\\du$',
    hasImage: false,
  },
  {
    id: '17dea106397',
    chapter: '矩陣A',
    question:
      '試用列運算求解：(1) $\\begin{cases}x-2y+3z=5\\\\2x+y-3z=-3\\\\3x-y+2z=6\\end{cases}$　(2) $\\begin{cases}3x+y-z=2\\\\x+2y+z=8\\\\x-3y-3z=1\\end{cases}$　(3) $\\begin{cases}x-y+2z=0\\\\x+y-z=0\\\\3x+y=0\\end{cases}$',
    answer: '(1) $(1,1,2)$ (2) 無解 (3) $x=\\frac{y}{-3}=\\frac{z}{-2}$',
    hasImage: false,
  },
  {
    id: '17dea13e825',
    chapter: '矩陣A',
    question:
      '空間中相異三平面 $E_1$、$E_2$、$E_3$ 把空間分割成 $n$ 個不相連通的區域，請問 $n$ 值可能為何？\n(1) $4$ (2) $5$ (3) $6$ (4) $7$ (5) $8$',
    answer: '(1)(3)(4)(5)',
    hasImage: false,
  },
  {
    id: '17dea13d4eb',
    chapter: '矩陣A',
    question:
      '小智去合作社買東西吃，剛好合作社在進行促銷活動，熱狗限量 100 根，每位同學一次能買 1~3 根，價錢分別為一根 8 元、兩根 15 元、三根 23 元。當小智到合作社時，熱狗剩下 3 根，已知在小智之前已有 45 位同學搶購，合作社已獲得 739 元。求購買 3 根熱狗的同學人數。',
    answer: '15',
    hasImage: false,
  },
  {
    id: '17dea136cc7',
    chapter: '矩陣A',
    question:
      '籃球比賽中，有一位球員總共投進了 19 球，得了 39 分，其中罰球及三分球加起來還比二分球少進一個，請問若此人在比賽中分別進了 $x$ 個罰球 (每球一分)，$y$ 個二分球及 $z$ 個三分球，求序組 $(x,y,z)$。',
    answer: '(4,10,5)',
    hasImage: false,
  },
  {
    id: '17ce407e041',
    chapter: '矩陣A',
    question:
      '請寫出下列矩陣的階數。\n(1) $\\begin{bmatrix}1&3&5\\\\2&0&7\\end{bmatrix}$ (2) $\\begin{bmatrix}1&3&5\\end{bmatrix}$ (3) $\\begin{bmatrix}1\\\\3\\\\5\\end{bmatrix}$\n(4) $\\begin{bmatrix}1&2\\\\3&4\\\\5&6\\end{bmatrix}$ (5) $\\begin{bmatrix}2&3\\\\1&4\\end{bmatrix}$',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17ce408fc10',
    chapter: '矩陣A',
    question:
      '考慮每個元只能是 0 或 1 的 $2\\times3$ 矩陣，且它的第一列與第二列不相同且各列的元素不能全為零，這樣的矩陣共有幾個？',
    answer: '42',
    hasImage: false,
  },
  {
    id: '17ce40ae751',
    chapter: '矩陣A',
    question:
      '將增廣矩陣 $\\begin{bmatrix}1&2&1&3\\\\2&1&0&-7\\\\1&1&2&2\\end{bmatrix}$ 經列運算後可解得 $(x,y,z)$ 為？',
    answer: '(-5, 3, 2)',
    hasImage: false,
  },
  {
    id: '17ce40c83ce',
    chapter: '矩陣A',
    question:
      '若聯立方程式的增廣舉陣經列運算簡化為 $\\begin{bmatrix}1&a&b&a-2b\\\\0&1&4a+b&a+5\\\\0&0&a+2&3b-9\\end{bmatrix}$，已知該聯立方程式的解不只一組，求數對 $(a,b)$。',
    answer: '(-2, 3)',
    hasImage: false,
  },
  {
    id: '17ce40d9768',
    chapter: '矩陣A',
    question:
      '設 $\\begin{bmatrix}c+a&8\\\\2a+b&c\\\\c&b\\end{bmatrix}=\\begin{bmatrix}4&8\\\\-c&c\\\\3&a-6\\end{bmatrix}$，求 $a+b+c$。',
    answer: '-1',
    hasImage: false,
  },
  {
    id: '17ce40fb208',
    chapter: '矩陣A',
    question:
      '$A=\\begin{bmatrix}3&1&-2\\\\2&0&4\\end{bmatrix}$，$B=\\begin{bmatrix}1&-3&0\\\\-1&2&5\\end{bmatrix}$，求 $2A+B$。',
    answer: '$\\begin{bmatrix}7&-1&-4\\\\3&2&13\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17ce410b897',
    chapter: '矩陣A',
    question:
      '求 $\\begin{bmatrix}2&1&-2\\\\1&0&3\\end{bmatrix}\\begin{bmatrix}4&0\\\\-1&2\\\\1&1\\end{bmatrix}$。',
    answer: '$\\begin{bmatrix}5&0\\\\7&3\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17ce412dcb2',
    chapter: '矩陣A',
    question:
      '矩陣 $A$ 可乘上階數為 $3\\times1$ 的矩陣，則 $A\\begin{bmatrix}3\\\\1\\\\2\\end{bmatrix}$ 的結果可能為下列哪些矩陣？\n(1) $\\begin{bmatrix}2\\end{bmatrix}$ (2) $\\begin{bmatrix}2&3\\end{bmatrix}$ (3) $\\begin{bmatrix}3\\\\4\\end{bmatrix}$ (4) $\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}$ (5) $\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$',
    answer: '(1)(3)(4)',
    hasImage: false,
  },
  {
    id: '17ce4148e4f',
    chapter: '矩陣A',
    question:
      '設方陣 $A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$、$B=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}$ 滿足 $AB=\\begin{bmatrix}2&0\\\\0&2\\end{bmatrix}$，求 $a^2+b^2+c^2+d^2$。',
    answer: '30',
    hasImage: false,
  },
  {
    id: '17ce4154725',
    chapter: '矩陣A',
    question:
      '二階方陣 $A=\\begin{bmatrix}a+1&a+3\\\\a-4&a-2\\end{bmatrix}$ 的反方陣之第 (1, 2) 元為 1，求 $a$。',
    answer: '-13',
    hasImage: false,
  },
  {
    id: '17ce4166477',
    chapter: '矩陣A',
    question:
      '已知 $A=\\begin{bmatrix}1\\\\2\\end{bmatrix}$，$BC=\\begin{bmatrix}3&4&5\\end{bmatrix}$，求 $(2AB)(3C)$。',
    answer: '$\\begin{bmatrix}18&24&30\\\\36&48&60\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17ce4181410',
    chapter: '矩陣A',
    question:
      '$A=\\begin{bmatrix}397&389\\\\476&474\\end{bmatrix}$，$B=\\begin{bmatrix}198&357\\\\469&876\\end{bmatrix}$，$C=\\begin{bmatrix}198&356\\\\470&877\\end{bmatrix}$，求 $AB-AC$。',
    answer: '$\\begin{bmatrix}-389&8\\\\-474&2\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17ce41af316',
    chapter: '矩陣A',
    question:
      '$\\triangle ABC$ 的頂點為 $A(1,2)$、$B(2,4)$、$C(3,-1)$，經方陣 $\\begin{bmatrix}1&2\\\\3&-1\\end{bmatrix}$ 變換後的圖形為 $\\Gamma$，試作出 $\\Gamma$ 的圖形，並求 $\\Gamma$ 的面積是 $\\triangle ABC$ 的幾倍？',
    answer: '略；7',
    hasImage: true,
  },
  {
    id: '17ce41d7778',
    chapter: '矩陣A',
    question:
      '平面上點 $P$ 在第一象限內，試問：\n(1) 經過 $\\begin{bmatrix}\\cos100\\du&\\sin100\\du\\\\-\\sin100\\du&\\cos100\\du\\end{bmatrix}$ 作用後的像，可能在哪些位置？\n(2) 經過 $\\begin{bmatrix}\\cos100\\du&\\sin100\\du\\\\\\sin100\\du&-\\cos100\\du\\end{bmatrix}$ 作用後的像，可能在哪些位置？',
    answer: '(1) 第三、四象限或 $y$ 軸 (2) 第一、二象限或 $y$ 軸',
    hasImage: false,
  },
  {
    id: '17ce41ee1d6',
    chapter: '矩陣A',
    question:
      '設 $k>0$，長方形 $ABCD$，已知 $A(0,0)$、$B(2,0)$、$C(2,1)$、$D(0,1)$，若推移變換 $\\begin{bmatrix}1&k\\\\0&1\\end{bmatrix}$ 使 $ABCD$ 變成菱形，求 $k$。',
    answer: '$\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17ce42281ee',
    chapter: '矩陣A',
    question:
      '設 $\\begin{bmatrix}a_n\\\\b_n\\end{bmatrix}$ 滿足 $\\begin{bmatrix}a_{n+1}\\\\b_{n+1}\\end{bmatrix}=\\begin{bmatrix}2&3\\\\-1&1\\end{bmatrix}\\begin{bmatrix}a_n\\\\b_n\\end{bmatrix}$，$n\\in\\mathbb N$，若 $\\begin{bmatrix}a_1\\\\b_1\\end{bmatrix}=\\begin{bmatrix}5\\\\4\\end{bmatrix}$，求 $\\begin{bmatrix}a_2\\\\b_2\\end{bmatrix}$、$\\begin{bmatrix}a_3\\\\b_3\\end{bmatrix}$。',
    answer: '$\\begin{bmatrix}22\\\\-1\\end{bmatrix}$；$\\begin{bmatrix}41\\\\-23\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17ce4249a61',
    chapter: '矩陣A',
    question:
      '設 $A$、$B$ 是兩個 $n\\times n$ 的轉移矩陣，請問下列哪些敘述是正確的？\n(1) $A^2$ 是轉移矩陣 (2) $AB$ 是轉移矩陣\n(3) $\\dfrac12(A+B)$ 是轉移矩陣\n(4) $\\dfrac14(A^2+B^2)$ 是轉移矩陣',
    answer: '(1)(3)',
    hasImage: false,
  },
  {
    id: '17ce8eb133f',
    chapter: '矩陣A',
    question:
      '一礦物內含 $A$、$B$、$C$ 三種放射性物質，放射出同一種輻射。已知 $A$、$B$、$C$ 每公克分別會釋出 1 單位、2 單位、1 單位的輻射強度，又知 $A$、$B$、$C$ 每過半年其質量分別變為原來質量的 $\\dfrac12$、$\\dfrac13$、$\\dfrac14$ 倍。於一年前測得此礦物的輻射強度為 66 單位，而半年前測得此礦物的輻射強度為 22 單位，且目前此礦物的輻射強度為 8 單位，求目前此礦物中 $A$、$B$、$C$ 物質之質量。',
    answer: '4、1、2',
    hasImage: false,
  },
  {
    id: '17ce8edc471',
    chapter: '矩陣A',
    question:
      '某次選舉中進行甲、乙、丙三項公投案，每項公投案一張選票，投票人可選擇領或不領。投票結束後清點某投票所的選票，發現甲案有 765 人領票、乙案有 537 人領票、丙案有 648 人領票，同時領甲、乙、丙三案公投票的有 224 人，並且每個人都至少領了兩張公投票。根據以上資訊，可知同時領甲、乙兩案但沒有領丙案公投票者共有幾人？',
    answer: '215',
    hasImage: false,
  },
  {
    id: '17ce8ef7479',
    chapter: '矩陣A',
    question:
      '$\\begin{cases}x+2y+3z=0\\\\2x+y+3z=6\\\\x-y=6\\\\x-2y-z=8\\end{cases}$ 經增廣矩陣列運算後可化簡為 $\\begin{bmatrix}1&0&a&b\\\\0&1&c&d\\\\0&0&0&0\\\\0&0&0&0\\end{bmatrix}$，求序組 $(a,b,c,d)$',
    answer: '(6, 2, 2, 6)',
    hasImage: false,
  },
  {
    id: '17ce8f0c2a5',
    chapter: '矩陣A',
    question:
      '對矩陣 $\\begin{bmatrix}4&9&a\\\\3&7&b\\end{bmatrix}$，做列運算若干次後得到 $\\begin{bmatrix}1&0&1\\\\0&1&1\\end{bmatrix}$，求數對 $(a,b)$。',
    answer: '(13, 10)',
    hasImage: false,
  },
  {
    id: '17ce8f3435f',
    chapter: '矩陣A',
    question:
      '阿明解矩陣的方程組，他把 $\\begin{cases}X+2Y=A\\\\X-Y=B\\end{cases}$ 看成 $\\begin{cases}X-Y=A\\\\X+Y=B\\end{cases}$，結果得到 $X=\\begin{bmatrix}4&-1\\\\-2&3\\end{bmatrix}$，$Y=\\begin{bmatrix}3&-3\\\\-6&3\\end{bmatrix}$，求正確的 $X$、$Y$。',
    answer:
      '$\\begin{bmatrix}5&-2\\\\-4&4\\end{bmatrix}$；$\\begin{bmatrix}-2&2\\\\4&-2\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17ce8f4743b',
    chapter: '矩陣A',
    question:
      '若 $a\\begin{bmatrix}-1&1\\\\1&1\\end{bmatrix}+b\\begin{bmatrix}2&-2\\\\2&2\\end{bmatrix}+c\\begin{bmatrix}3&3\\\\-3&3\\end{bmatrix}$$=\\begin{bmatrix}17&1\\\\3&d\\end{bmatrix}$，求 $a+b+c+d$。',
    answer: '31',
    hasImage: false,
  },
  {
    id: '17ce8f5a3d0',
    chapter: '矩陣A',
    question:
      '考慮矩陣相乘 $\\begin{bmatrix}a&b\\\\c&d\\\\1&2\\end{bmatrix}\\begin{bmatrix}-3&5&7\\\\-4&6&e\\end{bmatrix}=\\begin{bmatrix}3&x&7\\\\0&y&7\\\\-11&z&23\\end{bmatrix}$，求 $y$。',
    answer: '$\\frac72$',
    hasImage: false,
  },
  {
    id: '17ce8f75d11',
    chapter: '矩陣A',
    question:
      '矩陣 $\\begin{bmatrix}-1&0\\\\1&-1\\end{bmatrix}^5$ 與下列哪一個矩陣相等？\n(1) $\\begin{bmatrix}-1&0\\\\-5&-1\\end{bmatrix}$ (2) $\\begin{bmatrix}1&0\\\\-5&1\\end{bmatrix}$ (3) $\\begin{bmatrix}-1&5\\\\0&-1\\end{bmatrix}$\n(4) $\\begin{bmatrix}1&0\\\\5&1\\end{bmatrix}$ (5) $\\begin{bmatrix}-1&0\\\\5&-1\\end{bmatrix}$',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '17ce8f8f1d1',
    chapter: '矩陣A',
    question:
      '設 $P$、$Q$、$R$ 為二階方陣，已知 $PQ=\\begin{bmatrix}2&0\\\\12&0\\end{bmatrix}$，$PR=\\begin{bmatrix}1&3\\\\4&12\\end{bmatrix}$ 且 $Q+R=\\begin{bmatrix}1&0\\\\3&3\\end{bmatrix}$，求 $P$。',
    answer: '$\\begin{bmatrix}0&1\\\\4&4\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17ce8fa11a1',
    chapter: '矩陣A',
    question:
      '已知 $A=\\begin{bmatrix}1&3\\\\2&4\\end{bmatrix}$，$AB=\\begin{bmatrix}5&8\\\\8&14\\end{bmatrix}$，$BC=\\begin{bmatrix}11&12\\\\4&3\\end{bmatrix}$，求 $C$。',
    answer: '$\\begin{bmatrix}3&1\\\\1&2\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17ce8fc69b2',
    chapter: '矩陣A',
    question:
      "設平面上三點 $P(3,1)$、$Q(4,2)$、$R(8,-5)$，經二階方陣 $A$ 變換後的點為 $P'$、$Q'$、$R'$，已知 $P'(7,5)$、$Q'(-2,6)$，求 $A$ 及 $\\triangle P'Q'R'$ 面積。",
    answer: '$\\begin{bmatrix}8&-17\\\\2&-1\\end{bmatrix}$；143',
    hasImage: false,
  },
  {
    id: '17ce8fdee76',
    chapter: '矩陣A',
    question:
      '考慮坐標平面上的直線 $L:3x-2y=1$，若 $a$ 為實數且二階方陣 $\\begin{bmatrix}1&0\\\\a&-8\\end{bmatrix}$ 所代表的線性變換可以將 $L$ 上的點變換到一條斜率為 2 的直線，求 $a$。',
    answer: '14',
    hasImage: false,
  },
  {
    id: '17ce905c7c2',
    chapter: '矩陣A',
    question:
      '已知 $\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}$ 是一個轉移矩陣，並且其行列式值為 $\\dfrac58$，求 $a+d$。',
    answer: '$\\frac{13}8$',
    hasImage: false,
  },
  {
    id: '17ce9083c89',
    chapter: '矩陣A',
    question:
      '某現象有 $A$、$B$ 兩種狀態，其機率的變化適合用轉移方陣 $\\begin{bmatrix}0.6&0.3\\\\0.4&0.7\\end{bmatrix}$ 來描述，即該矩陣作用在機率行矩陣 $\\begin{bmatrix}P(A)\\\\P(B)\\end{bmatrix}$，可得到下一階段的機率行矩陣。求「從狀態 $A$ 變成狀態 $B$，且再變回狀態 $A$」的機率。',
    answer: '0.12',
    hasImage: false,
  },
  {
    id: '179fe943220',
    chapter: '矩陣A',
    question:
      '如圖，直角三角形 $OAB$ 經過矩陣 $\\begin{bmatrix}-2&0\\\\0&3\\end{bmatrix}$ 的變換後會變成什麼形狀？',
    answer: '直角三角形',
    hasImage: true,
  },
  {
    id: '179fea92e0a',
    chapter: '矩陣A',
    question:
      "已知 $A=\\begin{bmatrix}2&0\\\\0&3\\end{bmatrix}$ 且 $O(0,0)$，$P(1,0)$，$Q(1,1)$，$R(0,1)$，將 $O$，$P$，$Q$，$R$ 四點經由矩陣 $A$ 線性變換至 $O'$，$P'$，$Q'$，$R'$ 四點，則：\n(1) $O'$，$P'$，$Q'$，$R'$ 的坐標分別為？\n(2) 平行四邊形 $O'P'Q'R'$ 的面積為？\n(3) 平行四邊形 $O'P'Q'R'$ 的面積是平行四邊形 $OPQR$ 面積的幾倍？",
    answer: "(1) $O'(0,0)$，$P'(2,0)$，$Q'(2,3)$，$R'(0,3)$ (2) $6$ (3) $6$",
    hasImage: false,
  },
  {
    id: '179feacffd4',
    chapter: '矩陣A',
    question:
      '下列有關於鏡射變換的敘述哪些正確？(多選)\n(A) $\\begin{bmatrix}1&0\\\\0&-1\\end{bmatrix}$ 為對 $y$ 軸作鏡射變換的矩陣\n(B) $\\begin{bmatrix}-1&0\\\\0&1\\end{bmatrix}$ 為對 $x$ 軸作鏡射變換的矩陣\n(C) $\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$ 為對 $x-y=0$ 作鏡射變換的矩陣\n(D) $\\begin{bmatrix}0&-1\\\\-1&0\\end{bmatrix}$ 為對 $x+y=0$ 作鏡射變換的矩陣\n(E) 鏡射矩陣的作用並不會改變原始的圖形',
    answer: '(C)(D)(E)',
    hasImage: false,
  },
  {
    id: '179feb0412b',
    chapter: '矩陣A',
    question:
      "設直線 $L$ 為 $y=-\\frac{1}{\\sqrt{3}}x$，則點 $P(6,2)$ 對直線 $L$ 作鏡射所得的點為 $P'$，試求點 $P'$ 的坐標。",
    answer: '$(3-\\sqrt{3},-1-3\\sqrt{3})$',
    hasImage: false,
  },
  {
    id: '179feb160a8',
    chapter: '矩陣A',
    question:
      '已知直線 $L:y=-3x$，二階方陣 $A$ 所對應的線性變換為「對直線 $L$ 作鏡射」，試求二階方陣 $A$。',
    answer:
      '$\\begin{bmatrix}\\frac{-4}{5}&\\frac{-3}{5}\\\\\\frac{-3}{5}&\\frac{4}{5}\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179feb39e98',
    chapter: '矩陣A',
    question: '已知正三角形 $OAB$ 中，$O$ 為原點，$A$ 點坐標為 $(2,2)$，則 $B$ 點坐標為？',
    answer: '$(1-\\sqrt{3},\\sqrt{3}+1)$ 或 $(1+\\sqrt{3},-\\sqrt{3}+1)$',
    hasImage: false,
  },
  {
    id: '179feb5dd8a',
    chapter: '矩陣A',
    question:
      '如圖，一正六邊形 $ABCDEF$ 其中心為原點 $O$，而 $A$ 點之坐標為 $(4,2)$，試求：\n(1) $C$ (2) $F$',
    answer: '(1) $(-2-\\sqrt{3},-1+2\\sqrt{3})$ (2) $(2+\\sqrt{3},1-2\\sqrt{3})$',
    hasImage: true,
  },
  {
    id: '179feb7c9c0',
    chapter: '矩陣A',
    question:
      '試描繪圖形 $G=\\{(x,y)|0\\le x\\le1,0\\le y\\le1\\}$ 經矩陣 $\\begin{bmatrix}1&3\\\\0&1\\end{bmatrix}$ 推移變換後的新圖形，並求出變換後所得新圖形之面積。',
    answer: '面積為 $1$',
    hasImage: true,
  },
  {
    id: '179feb92d18',
    chapter: '矩陣A',
    question:
      "已知 $A=\\begin{bmatrix}1&0\\\\3&1\\end{bmatrix}$ 且 $O(0,0)$，$P(1,0)$，$Q(1,1)$，$R(0,1)$，將 $O$，$P$，$Q$，$R$ 四點經由矩陣 $A$ 線性變換至 $O'$，$P'$，$Q'$，$R'$ 四點，則：\n(1) $O'$，$P'$，$Q'$，$R'$ 的坐標分別為？\n(2) 平行四邊形 $O'P'Q'R'$ 的面積是平行四邊形 $OPQR$ 面積的幾倍？",
    answer: "(1) $O'(0,0)$，$P'(1,3)$，$Q'(1,4)$，$R'(0,1)$ (2) $1$",
    hasImage: false,
  },
  {
    id: '179febc3df9',
    chapter: '矩陣A',
    question:
      '在坐標平面上，將點 $P(-4,2)$ 作下列各變換，試分別求變換後之點坐標：\n(1) 以原點為中心，逆時針旋轉 $30\\du$\n(2) 對 $x$ 軸作鏡射\n(3) 以原點為中心，往 $x$、$y$ 方向分別伸縮 $3$ 倍\n(4) 往 $x$ 方向伸縮 $2$ 倍，$y$ 方向伸縮 $\\frac{1}{2}$ 倍\n(5) 往 $x$ 方向推移 $y$ 坐標的 $-2$ 倍',
    answer:
      '(1) $(-2\\sqrt{3}-1,-2+\\sqrt{3})$ (2) $(-4,-2)$ (3) $(-12,6)$ (4) $(-8,1)$ (5) $(-8,2)$',
    hasImage: false,
  },
  {
    id: '179febfe0c0',
    chapter: '矩陣A',
    question:
      '在坐標平面上 $O(0,0)$、$A(3,1)$，已知 $\\triangle OAB$ 為一等腰直角三角形，其中 $\\angle A$ 是直角，且 $B$ 點在第一象限，則 $B$ 點坐標為？',
    answer: '$(2,4)$',
    hasImage: false,
  },
  {
    id: '17a06695075',
    chapter: '矩陣A',
    question: '已知直線 $L:x-\\sqrt3y=0$，求點 $P(2,-4)$ 對於直線 $L$ 的對稱點坐標。',
    answer: '$(1-2\\sqrt3,\\sqrt3+2)$',
    hasImage: false,
  },
  {
    id: '1815af10f9d',
    chapter: '矩陣A',
    question:
      "若平面上四點 $A(0,0)$、$B(3,0)$、$C(3,4)$、$D(0,4)$ 經推移矩陣 $\\begin{bmatrix}1&-5\\\\0&1\\end{bmatrix}$ 變換後依序為 $A'$、$B'$、$C'$、$D'$，求四邊形 $A'B'C'D'$ 面積。",
    answer: '12',
    hasImage: false,
  },
  {
    id: '17a066acfd6',
    chapter: '矩陣A',
    question:
      '平面上有一點 $P(3,-5)$ 沿著 $y$ 軸推移 $x$ 坐標的 2 倍，再沿著 $x$ 軸推移 $y$ 坐標的 2 倍後得到 $Q$ 點，則 $Q$ 點坐標為？',
    answer: '(5,1)',
    hasImage: false,
  },
  {
    id: '17a066ced2b',
    chapter: '矩陣A',
    question:
      '下列共有幾個矩陣可為轉移矩陣？\n$\\begin{bmatrix}0.2&0.8\\\\0.7&0.3\\end{bmatrix}$、$\\begin{bmatrix}2&-2\\\\-1&3\\end{bmatrix}$、$\\begin{bmatrix}\\frac{1}{3}&\\frac{2}{5}\\\\\\frac{2}{3}&\\frac{3}{5}\\end{bmatrix}$、$\\begin{bmatrix}\\log2&\\log5\\\\\\log5&\\log2\\end{bmatrix}$、$\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$',
    answer: '$3$ 個',
    hasImage: false,
  },
  {
    id: '1815ae8493b',
    chapter: '矩陣A',
    question:
      '設 $A=\\begin{bmatrix}\\frac12&-\\frac{\\sqrt3}2\\\\\\frac{\\sqrt3}2&\\frac12\\end{bmatrix}\\begin{bmatrix}2&0\\\\0&4\\end{bmatrix}$，若點 $P(x,y)$ 被 $A$ 變換成 $Q(8,4)$，求 $P$ 點坐標。',
    answer: '$(2+\\sqrt3,\\frac12-\\sqrt3)$',
    hasImage: false,
  },
  {
    id: '1815aeab9e5',
    chapter: '矩陣A',
    question:
      '下列哪些二階方陣可使 $\\triangle ABC$ 經該方陣變換後，面積保持不變？\n(1) $\\begin{bmatrix}1&2\\\\2&1\\end{bmatrix}$ (2) $\\begin{bmatrix}1&2\\\\0&1\\end{bmatrix}$\n(3) $\\begin{bmatrix}\\cos10\\du&-\\sin10\\du\\\\\\sin10\\du&\\cos10\\du\\end{bmatrix}$\n(4) $\\begin{bmatrix}\\sin20\\du&\\cos20\\du\\\\\\cos20\\du&-\\sin20\\du\\end{bmatrix}$\n(5) $\\begin{bmatrix}\\cos45\\du&\\sin45\\du\\\\\\sin45\\du&\\cos45\\du\\end{bmatrix}$',
    answer: '(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '1815aec64aa',
    chapter: '矩陣A',
    question: '已知正三角形 $OAB$ 兩頂點坐標 $O(0,0)$，$A(-2,0)$，求頂點 $B$。',
    answer: '$(-1,\\pm\\sqrt3)$',
    hasImage: false,
  },
  {
    id: '1815aeda9e7',
    chapter: '矩陣A',
    question: '$A=\\begin{bmatrix}\\sqrt3&1\\\\-1&\\sqrt3\\end{bmatrix}$ ，試求 $A^{12}$。',
    answer: '$\\begin{bmatrix}4096&0\\\\0&4096\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17a066f053a',
    chapter: '矩陣A',
    question:
      '午餐店有中式與西式兩種選擇，經統計小陳選餐的規則是：若他今天選用中式，則明天改選西式的機率是 $0.8$；若他今天選用西式，則明天改選中式的機率是 $0.5$。已知他第一天選用中式，假設他第三天選用西式的機率是 $p$，求 $p$。',
    answer: '$0.56$',
    hasImage: false,
  },
  {
    id: '17a067049d5',
    chapter: '矩陣A',
    question:
      '國民分成高收入與低收入。高收入人口中，每年有 $4$ 成會轉變成低收入。低收入人口中，每年有 $a$ 成會轉為高收入，每年高收入人口一直是低收入人口的 $\\frac{3}{2}$ 倍，求 $a$。',
    answer: '$6$',
    hasImage: false,
  },
  {
    id: '17a0672366b',
    chapter: '矩陣A',
    question:
      '已知二階方陣 $T=\\begin{bmatrix}a&3\\\\1&b\\end{bmatrix}$ 把直線 $L_1:2x-y=3$ 變換成直線 $L_2:3x+7y=15$，也就是說 $L_1$ 上任意一點經 $T$ 變換後的新點會在 $L_2$ 上，求數對 $(a,b)$。',
    answer: '$(1,-2)$',
    hasImage: false,
  },
  {
    id: '17a06734454',
    chapter: '矩陣A',
    question:
      '如圖，正三角形 $ABC$ 的中心為原點 $O$，頂點 $A(2,-2)$，且 $B$ 點在第三象限，求 $B$ 點坐標。',
    answer: '$(-1-\\sqrt3,1-\\sqrt3)$',
    hasImage: true,
  },
  {
    id: '17a0674dd31',
    chapter: '矩陣A',
    question:
      '$A=\\begin{bmatrix}\\frac12&-\\frac{\\sqrt3}2\\\\\\frac{\\sqrt3}2&\\frac12\\end{bmatrix}$，求 $A^{108}+A^{2019}$。',
    answer: '$\\begin{bmatrix}0&0\\\\0&0\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17a067782a1',
    chapter: '矩陣A',
    question:
      '$A=\\begin{bmatrix}\\cos18\\du&-\\sin18\\du\\\\\\sin18\\du&\\cos18\\du\\end{bmatrix}$，$B=\\begin{bmatrix}\\cos87\\du&-\\sin87\\du\\\\\\sin87\\du&\\cos87\\du\\end{bmatrix}$，$C=\\begin{bmatrix}\\cos45\\du&\\sin45\\du\\\\-\\sin45\\du&\\cos45\\du\\end{bmatrix}$，將 $ABC$ 化簡後得到矩陣 $\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}$，求 $\\frac{b}{a}$。',
    answer: '$-\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17a06796a43',
    chapter: '矩陣A',
    question:
      '設 $L$ 為平面上過原點的一直線，若點 $A(5,10)$ 對 $L$ 作鏡射後得到點 $B(-10,5)$，則此鏡射變換所對應的二階方陣為？',
    answer:
      '$\\begin{bmatrix}-\\frac{4}{5}&-\\frac{3}{5}\\\\-\\frac{3}{5}&\\frac{4}{5}\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17a067a7364',
    chapter: '矩陣A',
    question: '直線 $2x+3y=0$ 經逆時針旋轉 $90\\du$ 後，再對 $y=2x$ 鏡射所得之直線方程式為？',
    answer: '$17x=6y$',
    hasImage: false,
  },
  {
    id: '17a067c20fe',
    chapter: '矩陣A',
    question:
      "設矩形 $OABC$ 的四個頂點坐標為 $O(0,0)$、$A(2,0)$、$B(2,1)$、$C(0,1)$。將此四個頂點分別沿 $x$ 軸推移 $y$ 坐標的 $3$ 倍，得 $O'$、$A'$、$B'$、$C'$ 四點，則四邊形 $O'A'B'C$ 的周長為？",
    answer: '$4+2\\sqrt{10}$',
    hasImage: false,
  },
  {
    id: '179e04c6557',
    chapter: '矩陣A',
    question:
      '某位同學，每天必由數獨、數織兩款遊戲中挑選一款來玩，若他當天選擇了某款遊戲，則隔天玩同款遊戲的機率為 $80\\%$，玩另一款遊戲的機率為 $20\\%$，已知他某個星期一選擇玩數獨，則他星期三玩數織的機率為？',
    answer: '$32\\%$',
    hasImage: false,
  },
  {
    id: '179e04fb4b0',
    chapter: '矩陣A',
    question:
      '某射擊選手，當他射中標靶，則下次中靶的機率為 $0.7$；當他沒有射中標靶，則下次中靶的機率為 $0.5$。請問他射擊無數次後，中靶機率為何？',
    answer: '$\\frac{5}{8}$',
    hasImage: false,
  },
  {
    id: '179e05237b1',
    chapter: '矩陣A',
    question:
      '設平面上有一個平面變換，將 $P_1(1,2)$，$P_2(2,-1)$ 兩點分別變換到 $Q_1(7,3)$、$Q_2(4,1)$ 兩點，則此變換所對應的二階方陣為 $\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}$，求 $a+b+c+d$。',
    answer: '7',
    hasImage: false,
  },
  {
    id: '179e0535022',
    chapter: '矩陣A',
    question:
      '設直線 $L:5x-y=18$ 經 $\\begin{bmatrix}1&1\\\\-2&4\\end{bmatrix}$ 變換後得直線 $M$，試求直線 $M$ 的方程式。',
    answer: '$3x-y=18$',
    hasImage: false,
  },
  {
    id: '179e0550323',
    chapter: '矩陣A',
    question:
      '設甲袋有 $4$ 顆紅球，乙袋有 $1$ 顆紅球和 $1$ 顆白球，先自甲袋取一球放入乙袋，再自乙袋取一球放回甲袋，如此稱為一局，則兩局後，白球在甲袋的機率為？',
    answer: '$\\frac{1}{2}$',
    hasImage: false,
  },
  {
    id: '179e05820dd',
    chapter: '矩陣A',
    question:
      "設 $P(1,2)$，$Q(2,3)$，$R(3,-2)$ 為平面上三點，$A=\\begin{bmatrix}1&0\\\\2&3\\end{bmatrix}$，$B=\\begin{bmatrix}\\frac45&-\\frac35\\\\\\frac35&\\frac45\\end{bmatrix}$ 為二階方陣，$M=BA$，則 $\\triangle PQR$ 經過二階方陣 $M$ 線性變換後成 $\\triangle P'Q'R'$，求 $\\triangle P'Q'R'$ 的面積。",
    answer: '9',
    hasImage: false,
  },
  {
    id: '179dab11a04',
    chapter: '矩陣A',
    question:
      '設有 $A$，$B$ 兩支大瓶子，開始時，$A$ 瓶裝有 $a$ 公升的純酒精，$B$ 瓶裝有 $b$ 公升的礦泉水。每一輪操作都是先將 $A$ 瓶的溶液倒出一半到 $B$ 瓶，然後再將 $B$ 瓶的溶液倒出一半回 $A$ 瓶。設 $n$ 輪操作後，$A$ 瓶有 $a_n$ 公升的溶液，$B$ 瓶有 $b_n$ 公升的溶液。已知二階方陣 $\\begin{bmatrix}a_{11}&a_{12}\\\\a_{21}&a_{22}\\end{bmatrix}$ 滿足 $\\begin{bmatrix}a_n\\\\b_n\\end{bmatrix}=\\begin{bmatrix}a_{11}&a_{12}\\\\a_{21}&a_{22}\\end{bmatrix}^n\\begin{bmatrix}a\\\\b\\end{bmatrix}$。\n(1) 求二階方陣 $\\begin{bmatrix}a_{11}&a_{12}\\\\a_{21}&a_{22}\\end{bmatrix}$。\n(2) 當 $a=\\frac{2}{3}$，$b=\\frac{1}{3}$ 時，求 $a_{100}$ 及 $b_{100}$。\n(3) 當 $a=\\frac{2}{3}$，$b=\\frac{1}{3}$ 時，在第二輪操作後，$A$ 瓶的溶液中有百分之多少的酒精？',
    answer:
      '(1) $\\begin{bmatrix}\\frac{3}{4}&\\frac{1}{2}\\\\\\frac{1}{4}&\\frac{1}{2}\\end{bmatrix}$ (2) $\\frac{2}{3}$；$\\frac{1}{3}$ (3) $68.75\\%$',
    hasImage: false,
  },
  {
    id: '179dab3ef4e',
    chapter: '矩陣A',
    question:
      '依照過去的經驗，某高中高三生在某一天準時到校的學生有 $90\\%$ 在隔天仍會準時到校，而遲到或缺席的學生有 $60\\%$ 在隔天仍舊會遲到或缺席，如果某高中高三有 $1000$ 位學生，已知週一有 $900$ 位學生準時到校，若週二、週三皆未逢假日的情況下：\n(1) 寫出對應的轉移矩陣 $A$\n(2) 週三有幾位學生會遲到或缺席？\n(3) 長期而言，準時到校的學生比率為何？',
    answer: '(1) $\\begin{bmatrix}0.9&0.4\\\\0.1&0.6\\end{bmatrix}$ (2) $175$ 人 (3) $80\\%$',
    hasImage: false,
  },
  {
    id: '179dab5caf3',
    chapter: '矩陣A',
    question:
      '考慮某一個二階矩陣的集合 $M=\\left\\{\\begin{bmatrix}a&c\\\\b&d\\end{bmatrix}|a,b,c,d\\in\\{0,1,2,4\\}\\right\\}$，從 $M$ 中任取一個二階矩陣，其為可逆矩陣的機率為何？',
    answer: '$\\frac{47}{64}$',
    hasImage: false,
  },
  {
    id: '179dab8149c',
    chapter: '矩陣A',
    question:
      "(1) 某一可逆二階方陣 $A$ 所定義的平面變換是將 $(1,-1)$ 與點 $(-2,1)$ 分別變換成 $(5,7)$ 與 $(-3,6)$，求此二階方陣 $A$。\n(2) 承(1)，求 $L:2x+3y=-1$ 在此變換下所變換成的直線 $L'$ 的方程式。",
    answer: '(1) $\\begin{bmatrix}-2&-7\\\\-13&-20\\end{bmatrix}$ (2) $x-8y=-51$',
    hasImage: false,
  },
  {
    id: '179dab8f67a',
    chapter: '矩陣A',
    question: '求點 $(20,-15)$ 關於直線 $y=3x$ 鏡射後的像點坐標。',
    answer: '$(-25,0)$',
    hasImage: false,
  },
  {
    id: '179dabc9c23',
    chapter: '矩陣A',
    question:
      "若 $\\triangle PQR$ 之面積為 $8$，$P$、$Q$、$R$ 經線性變換後之像點一次分別為 $P'$、$Q'$、$R'$，對於下列二階方陣的敘述哪些正確？\n$A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$，$B=\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}$，$C=\\begin{bmatrix}\\frac{1}{2}&-\\frac{\\sqrt{3}}{2}\\\\\\frac{\\sqrt{3}}{2}&\\frac{1}{2}\\end{bmatrix}$，$D=\\begin{bmatrix}1&2\\\\0&1\\end{bmatrix}$\n(1) 經過 $A$ 的變換後，$\\triangle P'Q'R'$ 之面積為 $16$\n(2) 經過 $B$、$C$、$D$ 的變換後，$\\triangle P'Q'R'$ 之面積依然為 $8$\n(3) 經過 $B$、$C$、$D$ 的變換後，$\\triangle P'Q'R'$ 之形狀依然不變\n(4) 考慮 $P$ 點到原點的距離，經過 $B$、$C$ 的變換後，距離不變\n(5) $B^6$ 與 $C^6$ 都是 $I_2$ 單位方陣",
    answer: '(1)(2)(4)',
    hasImage: false,
  },
  {
    id: '179db65adbb',
    chapter: '矩陣A',
    question:
      '假設台北市在民國 $99$ 年時人口有 $400$ 萬，而新北市的人口有 $600$ 萬，若民國 $99$ 年的一年內，住在台北市的有 $10\\%$ 搬到台北市，其餘 $90\\%$ 不移動；而住在新北市的有 $5\\%$ 搬到台北市，其餘 $95\\%$ 不移動，試求：\n(1) 人口遷移的轉移矩陣 $A$。\n(2) 民國 $100$ 年台北市、新北市的人口數。\n(3) 若此兩市人口遷移的狀態不變，則民國 $101$ 年台北市、新北市的人口數分別為？',
    answer:
      '(1) $\\begin{bmatrix}0.9&0.05\\\\0.1&0.95\\end{bmatrix}$ (2) $390$ 萬；$610$ 萬 (3) $381.5$ 萬；$618.5$ 萬',
    hasImage: false,
  },
  {
    id: '179db67466a',
    chapter: '矩陣A',
    question:
      '某人上班有甲、乙兩條路線可供選擇，早上定時從家裡出發，走甲路線有 $\\frac{1}{10}$ 的機率會遲到，走乙路線有 $\\frac{1}{5}$ 的機率會遲到。無論走哪一條路線，只要不遲到，下次就走同一路線，否則就換另一條路線。假設他第一天走甲路線，則第三天也走甲路線的機率為？',
    answer: '$\\frac{83}{100}$',
    hasImage: false,
  },
  {
    id: '179db695e12',
    chapter: '矩陣A',
    question:
      '小明參加班際籃球賽，當他投進一球後，下一球投進的機率是 $0.7$，當他投不進時，下一球投進的機率是 $0.5$。若第 $n$ 球投進的機率為 $x_n$，投不進的機率為 $y_n$，且滿足 $\\begin{bmatrix}x_{n+2}\\\\y_{n+2}\\end{bmatrix}=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}\\begin{bmatrix}x_n\\\\y_n\\end{bmatrix}$，則 $\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}=$？',
    answer: '$\\begin{bmatrix}0.64&0.6\\\\0.36&0.4\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179db6a4e7f',
    chapter: '矩陣A',
    question:
      '$\\begin{bmatrix}0.4&b\\\\a&c\\end{bmatrix}$ 為一轉移矩陣且不存在乘法反方陣，則序組 $(a,b,c)=$？',
    answer: '$(0.6,0.4,0.6)$',
    hasImage: false,
  },
  {
    id: '179db75aa5f',
    chapter: '矩陣A',
    question:
      "設線性變換矩陣 $A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$，則：\n(1) 點 $P(5,6)$ 經過 $A$ 的變換後的新坐標為？\n(2) 點 $Q(a,b)$ 經過 $A$ 的變換後的新坐標為 $Q'(4,10)$，則 $(a,b)=$？",
    answer: '$(0.6,0.4,0.6)$',
    hasImage: false,
  },
  {
    id: '179db77f653',
    chapter: '矩陣A',
    question:
      '設線性變換矩陣 $A$ 將點 $\\begin{bmatrix}1\\\\0\\end{bmatrix}$ 變換到點 $\\begin{bmatrix}-4\\\\5\\end{bmatrix}$，將點 $\\begin{bmatrix}0\\\\1\\end{bmatrix}$ 變換到點 $\\begin{bmatrix}3\\\\2\\end{bmatrix}$，試求：\n(1) 矩陣 $A$。\n(2) 承(1)，矩陣 $A$ 將點 $\\begin{bmatrix}-2\\\\7\\end{bmatrix}$ 變換到？',
    answer:
      '(1) $\\begin{bmatrix}-4&3\\\\5&2\\end{bmatrix}$ (2) $\\begin{bmatrix}29\\\\4\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179db7973b6',
    chapter: '矩陣A',
    question:
      '若有一個線性變換矩陣將 $P_1(1,2)$、$P_2(2,-1)$ 兩點分別變換到 $Q_1(7,3)$、$Q_2(4,1)$ 兩點，試求此變換所對應的二階方陣為？',
    answer: '$\\begin{bmatrix}3&2\\\\1&1\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179db7bcfcc',
    chapter: '矩陣A',
    question:
      "設 $O$、$P$、$Q$ 三點坐標為 $O(0,0)$、$P(4,1)$、$Q(2,3)$。若 $O$、$P$、$Q$ 三點經過矩陣 $A=\\begin{bmatrix}1&3\\\\0&2\\end{bmatrix}$ 線性變換後，得到新的三點 $O'$、$P'$、$Q'$，試求 $\\overrightarrow{O'P'}$ 與 $\\overrightarrow{O'Q'}$ 所張出的平行四邊形面積為？",
    answer: '$20$',
    hasImage: false,
  },
  {
    id: '179c1c6a005',
    chapter: '矩陣A',
    question: '若直線 $3x+2y=7$ 經過二階方陣 $A$ 變換後的像為一點 $(14,21)$，求 $A$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '179c1c7a57c',
    chapter: '矩陣A',
    question:
      "若 $\\begin{bmatrix}a&2\\\\-1&b\\end{bmatrix}$ 所定義的平面變換把直線 $L:2x+y=5$ 變換到 $L':7x+3y=10$，求數對 $(a,b)$。",
    answer: '',
    hasImage: false,
  },
  {
    id: '179c1c86170',
    chapter: '矩陣A',
    question:
      '$A=\\begin{bmatrix}2&1\\\\0&3\\end{bmatrix}$，求圓 $x^2+y^2=1$ 經 $A$ 變換後的圖形方程式。',
    answer: '',
    hasImage: false,
  },
  {
    id: '179c1c91c4c',
    chapter: '矩陣A',
    question:
      "$A=\\begin{bmatrix}2&0\\\\-1&3\\end{bmatrix}$，曲線 $\\Gamma$ 經 $A$ 變換後的圖形為 $\\Gamma':y=x^2+3x+1$，求 $\\Gamma$ 的方程式。",
    answer: '',
    hasImage: false,
  },
  {
    id: '179c1ca4a43',
    chapter: '矩陣A',
    question:
      '平面上 $O$ 為原點，$P$ 為 (2,6)，$\\overline{OP}$ 是正六邊形的一個邊，也是正八邊形的一個邊，如圖，求正六邊形的頂點 $Q$ 之坐標、正八邊形的頂點 $R$ 坐標。',
    answer: '$(-1-3\\sqrt3,-3+\\sqrt3)$；$(2\\sqrt2,-4\\sqrt2)$',
    hasImage: true,
  },
  {
    id: '179c1cdd587',
    chapter: '矩陣A',
    question: '平面上直線 $3x+5y=10$ 繞原點逆時針旋轉 $45\\du$ 後的方程式為？',
    answer: '',
    hasImage: false,
  },
  {
    id: '179c1ceec7d',
    chapter: '矩陣A',
    question:
      '平面上圓 $x^2+y^2+4x-8y-1=0$ 經 $\\begin{bmatrix}\\cos30\\du&-\\sin30\\du\\\\\\sin30\\du&\\cos30\\du\\end{bmatrix}$ 變換後所得圖形方程式為？',
    answer: '',
    hasImage: false,
  },
  {
    id: '179c1d03e26',
    chapter: '矩陣A',
    question:
      '化簡 $\\begin{bmatrix}\\cos80\\du&-\\sin80\\du\\\\\\sin80\\du&\\cos80\\du\\end{bmatrix}\\begin{bmatrix}\\cos50\\du&-\\sin50\\du\\\\\\sin50\\du&\\cos50\\du\\end{bmatrix}\\begin{bmatrix}\\cos10\\du&\\sin10\\du\\\\-\\sin10\\du&\\cos10\\du\\end{bmatrix}$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '179c1d18f78',
    chapter: '矩陣A',
    question:
      '求 $\\begin{bmatrix}\\frac{1}{2}&-\\frac{\\sqrt{3}}{2}\\\\\\frac{\\sqrt{3}}{2}&\\frac{1}{2}\\end{bmatrix}^{100}$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '179c1d20cfc',
    chapter: '矩陣A',
    question: '求 $\\begin{bmatrix}1&1\\\\-1&1\\end{bmatrix}^{20}$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '179c1d3299c',
    chapter: '矩陣A',
    question:
      '點 $(x,y)$ 對 $x$ 軸鏡射，其平面變換為 $(x,y)\\rightarrow(x,-y)$，寫成二階方陣為？直線 $3x+2y=7$ 經過此平面變換所成新圖形的方程式為？',
    answer: '',
    hasImage: false,
  },
  {
    id: '179c1d3a8a0',
    chapter: '矩陣A',
    question:
      '點 $(x,y)$ 對直線 $x-y=0$ 鏡射，其平面變換為 $(x,y)\\rightarrow(y,x)$，寫成二階方陣為？直線 $5x-7y=1$ 經過此平面變換所成新圖形的方程式為？',
    answer: '',
    hasImage: false,
  },
  {
    id: '179c1d42085',
    chapter: '矩陣A',
    question: '平面變換 $A$ 相當於把點 $(x,y)$ 對直線 $3x-2y=0$ 做對稱點，求 $A$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '179c1d7ad2c',
    chapter: '矩陣A',
    question:
      '已知鏡射矩陣 $A=\\begin{bmatrix}-\\frac{1}{2}&-\\frac{\\sqrt{3}}{2}\\\\-\\frac{\\sqrt{3}}{2}&\\frac{1}{2}\\end{bmatrix}$ 與旋轉矩陣 $B=\\begin{bmatrix}\\frac{1}{2}&-\\frac{\\sqrt{3}}{2}\\\\\\frac{\\sqrt{3}}{2}&\\frac{1}{2}\\end{bmatrix}$，試問：\n(1) 點 $(x,y)$ 經矩陣 $A$ 作用，相當於對哪一條直線鏡射？\n(2) 點 $(x,y)$ 先經 $A$ 再經 $B$ 作用，會得到鏡射矩陣，相當於對哪一條直線鏡射？\n(A) $y=\\sqrt{3}x$ (B) $y=\\frac{x}{\\sqrt{3}}$ (C) $y=-\\sqrt{3}x$ (D) $y=-\\frac{x}{\\sqrt{3}}$',
    answer: '',
    hasImage: false,
  },
  {
    id: '179c1d8ab0c',
    chapter: '矩陣A',
    question:
      '若 $y=5x^2$ 在 $(x,y)\\rightarrow(3x,2y)$ 的伸縮變換下變成另一圖形，求此新圖形的方程式。',
    answer: '',
    hasImage: false,
  },
  {
    id: '179c1d9afa3',
    chapter: '矩陣A',
    question:
      '平面上有一個圓 $C:(x+3)^2+(y-2)^2=25$，經過伸縮矩陣 $\\begin{bmatrix}4&0\\\\0&3\\end{bmatrix}$ 變換後的圖形為 $\\Gamma$，其方程式為？圖形 $\\Gamma$ 的面積為？',
    answer: '',
    hasImage: false,
  },
  {
    id: '179c1da661b',
    chapter: '矩陣A',
    question:
      "若直線 $L:3x-4y=5$ 在 $(x,y)\\rightarrow(x+2y,y)$ 的推移下變換成另一直線 $L'$，求 $L'$ 的方程式。",
    answer: '',
    hasImage: false,
  },
  {
    id: '179c1db30cc',
    chapter: '矩陣A',
    question:
      "坐標平面上直線 $L:x=3$，經推移變換 $\\begin{bmatrix}1&k\\\\0&1\\end{bmatrix}$ 作用後變成 $L'$，且 $L'$ 經過點 $(15,2)$，求 $k$。",
    answer: '',
    hasImage: false,
  },
  {
    id: '179b6874f73',
    chapter: '矩陣A',
    question: '設二次函數 $f(x)$ 的圖形通過 $(1,3)$，$(2,5)$，$(3,9)$ 三點，試求 $f(x)$。',
    answer: '$f(x)=x^2-x+3$',
    hasImage: false,
  },
  {
    id: '179b68bbf94',
    chapter: '矩陣A',
    question:
      '一容量為 $100$ 立方公尺的水池，由 $A$、$B$ 二水管注水，而由第三水管 $C$ 放水，若三水管全開，則由滿池至水乾需時 $3$ 小時；若只開 $A$、$C$ 兩水管，則 $1$ 小時水乾；若只開 $B$、$C$ 兩水管，則只需 $45$ 分鐘水乾，求 $A$ 水管每小時的注水量為多少立方公尺？$C$ 水管每小時的放水量為多少立方公尺？',
    answer: '$100$；$200$',
    hasImage: false,
  },
  {
    id: '179b68c7821',
    chapter: '矩陣A',
    question:
      '利用消去法解 $\\begin{cases}2x-y+z=0\\\\x-3y+2z=2\\\\x+2y-z=-2\\end{cases}$ 並解釋其幾何意義。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '179b694fded',
    chapter: '矩陣A',
    question:
      '小倩使用高斯消去法解$x$，$y$，$z$ 的方程組 $\\begin{cases}a_1x+b_1y+c_1z=d_1\\\\a_2x+b_2y+c_2z=d_2\\\\a_3x+b_3y+c_3z=d_3\\end{cases}$ 如下：\n$\\begin{bmatrix}a_1&b_1&c_1&d_1\\\\a_2&b_2&c_2&d_2\\\\a_3&b_3&c_3&d_3\\end{bmatrix}\\rightarrow\\begin{bmatrix}1&2&-1&p\\\\0&q&-5&25\\\\0&12&r&0\\end{bmatrix}\\rightarrow\\cdots\\rightarrow\\begin{bmatrix}1&0&0&2\\\\0&1&0&5\\\\0&0&1&-6\\end{bmatrix}$，求 $(p,q,r)$。',
    answer: '$(18,-1,10)$',
    hasImage: false,
  },
  {
    id: '179b697d167',
    chapter: '矩陣A',
    question:
      '下列有關 $x$，$y$，$z$ 的一次方程組的增廣矩陣，哪一個所表示的方程組有無限多組解？\n(A) $\\begin{bmatrix}1&3&-2&6\\\\0&-1&0&2\\end{bmatrix}$ (B) $\\begin{bmatrix}-2&1&0&-5\\\\0&2&3&1\\\\0&4&6&4\\end{bmatrix}$\n(C) $\\begin{bmatrix}1&0&2&4\\\\0&-3&1&2\\\\0&1&0&3\\end{bmatrix}$ (D) $\\begin{bmatrix}1&1&0&5\\\\0&2&2&-6\\\\3&0&3&-6\\end{bmatrix}$\n(E) $\\begin{bmatrix}1&1&2&3\\\\0&-3&1&0\\\\0&0&0&0\\end{bmatrix}$',
    answer: '(A)(E)',
    hasImage: false,
  },
  {
    id: '179b69ae21e',
    chapter: '矩陣A',
    question:
      '(1) 設實數 $a$，$b$，$c$ 滿足 $\\begin{cases}a+b+3c=6\\\\2a+3b-2c=3\\end{cases}$，將上述方程組的增廣矩陣 $\\begin{bmatrix}1&1&3&6\\\\2&3&-2&3\\end{bmatrix}$ 作若干次列運算後得矩陣 $\\begin{bmatrix}1&0&m&n\\\\0&1&p&q\\end{bmatrix}$，求 $(m,n,p,q)$。\n(2) 承(1)，在 $a\\ge0$，$b\\ge0$ 的條件下，求 $a+2b-c$ 的最小值。',
    answer: '(1) $(11,15,-8,-9)$ (2) $\\frac{3}{2}$',
    hasImage: false,
  },
  {
    id: '179a32ab7fd',
    chapter: '矩陣A',
    question:
      '下列有關轉移方陣的敘述，哪些是正確的？\n(A) $\\begin{bmatrix}0.2&0.8\\\\0.6&0.4\\end{bmatrix}$ 是轉移方陣\n(B) $\\begin{bmatrix}0.2&2\\\\0.8&-1\\end{bmatrix}$ 是轉移方陣\n(C) $\\begin{bmatrix}0.2&1&0.6\\\\0.4&0&0.1\\\\0.4&0&0.3\\end{bmatrix}$ 是轉移方陣\n(D) 若 $A$、$B$ 都是轉移方陣，則 $AB$ 也是轉移方陣\n(E) 若 $A$、$B$ 都是轉移方陣，則 $\\frac{1}{2}(A+B)$ 也是轉移方陣',
    answer: '',
    hasImage: false,
  },
  {
    id: '179a32ca487',
    chapter: '矩陣A',
    question:
      '若 $A=\\begin{bmatrix}0.3&y\\\\x&0.5\\end{bmatrix}$ 是轉移方陣，求數對 $(x,y)$、$A^2$、$A^{-1}$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '179a32f7d6b',
    chapter: '矩陣A',
    question:
      '行矩陣 $\\begin{bmatrix}a_1\\\\b_1\\end{bmatrix}$、$\\begin{bmatrix}a_2\\\\b_2\\end{bmatrix}$、$\\begin{bmatrix}a_3\\\\b_3\\end{bmatrix}$、$\\cdots$ 滿足 $\\begin{cases}a_{n+1}=\\frac{2}{3}a_n+\\frac{1}{4}b_n\\\\b_{n+1}=\\frac{1}{3}a_n+\\frac{3}{4}b_n\\end{cases},n\\in\\mathbb{N}$，則可看成二階轉移方陣 $A$ 乘上第 $n$ 項得到第 $(n+1)$ 項，請寫出二階轉移方陣 $A=$？',
    answer: '',
    hasImage: false,
  },
  {
    id: '179a33289c5',
    chapter: '矩陣A',
    question:
      '某城市有數百萬戶，觀察有訂閱報紙與未訂閱報紙的戶數發現，每年有 $70\\%$ 的訂戶在下一年會繼續訂閱報紙，有 $30\\%$ 的訂戶則不再續訂；而每年有 $10\\%$ 原本未訂閱報紙的住戶會轉而訂閱報紙，有 $90\\%$ 的住戶仍舊未訂。若以 $\\begin{bmatrix}訂報\\\\未訂\\end{bmatrix}$ 表示該城市的訂報狀態，則以年為時間單位的轉移方陣為？',
    answer: '',
    hasImage: false,
  },
  {
    id: '179a334ea0f',
    chapter: '矩陣A',
    question:
      '某人上班有甲、乙、丙三條路線可供選擇，若某天走甲路線，則隔天走甲、乙、丙的機率依序為 $0.5$、$0.2$、$0.3$；若某天走乙，則隔天走甲、乙、丙的機率依序為 $0.4$、$0.6$、$0$；若某天走丙，則隔天走甲、乙、丙的機率依序為 $0.2$、$0.1$、$0.7$。若以行矩陣由上而下寫出走甲、乙、丙路線的機率，請寫出轉移方陣為？',
    answer: '',
    hasImage: false,
  },
  {
    id: '179a35714f2',
    chapter: '矩陣A',
    question:
      '多次數學考試下來，數學老師發現，全體同學若上次數學考及格，則這次也會及格的比率為 80%，若上次數學不及格，則這次數學仍不及格的比率為 60%。若這次數學考完共有七成的同學及格，則：\n(1) 下次及格的比率為？\n(2) 下下次及格的比率為？\n(3) 多次考試後及格的比率會趨近於？',
    answer: '(1) 0.68 (2) 0.672 (3) $\\frac23$',
    hasImage: false,
  },
  {
    id: '179a35857f3',
    chapter: '矩陣A',
    question:
      '設 $A$ 箱內有 $2$ 白球，$B$ 箱內有 $1$ 黑球，兩手伸進 $A$ 與 $B$ 內各取一球互換，則多次交換後黑球在 $A$ 箱內的機率為？',
    answer: '$\\frac13$',
    hasImage: false,
  },
  {
    id: '179a35be52b',
    chapter: '矩陣A',
    question:
      '方陣 $A=\\begin{bmatrix}2&1\\\\3&4\\end{bmatrix}$，\n(1) $A$ 作用在 $P(-1,5)$ 所得的像為 $Q$，求 $Q$ 坐標為？\n(2) 若點 $(k+1,2k-3)$ 經 $A$ 變換之後所得的像為 $(7,m)$，求 $k=$？$m=$？\n(3) 正方形四個頂點為 $(0,0)$、$(1,0)$、$(1,1)$、$(0,1)$，經過 $A$ 變換後的圖形為 $\\Gamma$，試在方格紙作出 $\\Gamma$ 的圖形',
    answer: '',
    hasImage: false,
  },
  {
    id: '179a35cf63d',
    chapter: '矩陣A',
    question:
      '方陣 $A=\\begin{bmatrix}1&2\\\\4&3\\end{bmatrix}$，$A$ 作用在點 $P$ 的像為 $(15,55)$，求 $P$ 坐標為？',
    answer: '',
    hasImage: false,
  },
  {
    id: '179a35ea337',
    chapter: '矩陣A',
    question:
      "平面上兩點 $P(1,4)$ 與 $Q(5,7)$ 可表為 $\\begin{bmatrix}1&5\\\\4&7\\end{bmatrix}$，經平面變換 $A=\\begin{bmatrix}2&3\\\\-6&1\\end{bmatrix}$ 作用後，得到 $P'$ 與 $Q'$，則 $\\overline{P'Q'}$ 的長度為？",
    answer: '',
    hasImage: false,
  },
  {
    id: '179a3622df1',
    chapter: '矩陣A',
    question: '某平面變換把平面上的點 $(x,y)$ 變換到 $(2x+3y,4x-7y)$，則此平面變換表成二階方陣為？',
    answer: '',
    hasImage: false,
  },
  {
    id: '179a36366a6',
    chapter: '矩陣A',
    question:
      '若二階方陣 $A$ 把點 $(2,5)$ 變換成 $(4,3)$，把點 $(1,3)$ 變換成 $(-5,12)$，求 $A=$？\n$A$ 把點 $(1,2)$ 變換到另一點，其坐標為？',
    answer: '$\\begin{bmatrix}37&-14\\\\-51&21\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179a364124d',
    chapter: '矩陣A',
    question:
      '若正六邊形的邊長為 $2$，經 $\\begin{bmatrix}3&-1\\\\1&2\\end{bmatrix}$ 變換後所得的圖形面積為？',
    answer: '',
    hasImage: false,
  },
  {
    id: '179a3678925',
    chapter: '矩陣A',
    question:
      "平面上有 $\\triangle PQR$，已知 $P(1,2)$、$Q(3,8)$、$R(6,-5)$，則 $\\triangle PQR$ 經 $\\begin{bmatrix}9&3\\\\2&-1\\end{bmatrix}$ 線性變換後得 $\\triangle P'Q'R'$，求 $\\triangle P'Q'R'$ 的面積。",
    answer: '',
    hasImage: false,
  },
  {
    id: '179933a1b86',
    chapter: '矩陣A',
    question:
      '利用高斯消去法解方程組 $\\begin{cases}2x+3y-z=6\\\\x-y+z=2\\\\3x-2y-9z=-5\\end{cases}$',
    answer: '$x=2$、$y=1$、$z=1$',
    hasImage: false,
  },
  {
    id: '179933bfba0',
    chapter: '矩陣A',
    question:
      '利用矩陣的列運算解線性方程組 $\\begin{cases}x+2y-2z=-3\\\\3x-y+4z=14\\\\2x+3y-z=2\\end{cases}$',
    answer: '$x=1$、$y=1$、$z=3$',
    hasImage: false,
  },
  {
    id: '179933d62f8',
    chapter: '矩陣A',
    question:
      '利用矩陣的列運算求方程組 $\\begin{cases}2x+y-z=5\\\\x+2y+z=7\\\\7x+8y+z=31\\end{cases}$',
    answer: '$\\begin{cases}x=1+t\\\\y=3-t\\\\z=t\\end{cases},t\\in\\mathbb{R}$',
    hasImage: false,
  },
  {
    id: '179933e6cf1',
    chapter: '矩陣A',
    question:
      '利用矩陣的列運算求方程組 $\\begin{cases}3x+y-z=2\\\\x+2y+z=8\\\\x-3y-3z=1\\end{cases}$',
    answer: '無解',
    hasImage: false,
  },
  {
    id: '17993401086',
    chapter: '矩陣A',
    question: '試就 $a$ 值討論方程組 $\\begin{cases}x-2y-3z=1\\\\x+z=3\\\\3x-2y-z=a\\end{cases}$',
    answer:
      '當 $a\\neq7$ 時，無解；當 $a=7$ 時，無限解，其解為 $\\begin{cases}x=3-t\\\\y=1-2t\\\\z=t\\end{cases},t\\in\\mathbb{R}$',
    hasImage: false,
  },
  {
    id: '179934e51e4',
    chapter: '矩陣A',
    question: '利用牛頓插值法求通過三點 $(1,5)$、$(2,7)$、$(-2,23)$ 的二次多項式 $f(x)=$？',
    answer: '$2x^2-4x+7$',
    hasImage: false,
  },
  {
    id: '1799350a87d',
    chapter: '矩陣A',
    question:
      '給定坐標空間中的四個向量 $\\vector a=(2,1,4)$，$\\vector b=(1,-3,1)$，$\\vector c=(2,-2,3)$ 與 $\\vector d=(1,-4,1)$，試將 $\\vector d$ 表示成 $\\vector a$、$\\vector b$、$\\vector c$ 的線性組合 $x\\vector a+y\\vector b+z\\vector c$，則序組 $(x,y,z)=$？',
    answer: '$(1,3,-2)$',
    hasImage: false,
  },
  {
    id: '179935955d4',
    chapter: '矩陣A',
    question:
      '下列演算式為一個關於 $x$，$y$，$z$ 方程組的高斯消去法：\n$\\begin{bmatrix}2&3&-2&5\\\\3&-2&1&10\\\\1&2&-1&2\\end{bmatrix}\\rightarrow\\begin{bmatrix}1&2&a&2\\\\3&-2&1&10\\\\2&3&-2&5\\end{bmatrix}\\rightarrow\\begin{bmatrix}1&2&a&2\\\\0&b&4&4\\\\0&-1&0&1\\end{bmatrix}$\n$\\rightarrow\\begin{bmatrix}1&2&a&2\\\\0&-1&0&1\\\\0&b&4&4\\end{bmatrix}\\rightarrow\\begin{bmatrix}1&2&a&2\\\\0&-1&0&1\\\\0&0&4&c\\end{bmatrix}\\rightarrow\\cdots$\n若繼續進行矩陣的列運算，即可求得 $x$，$y$，$z$ 之解，則序組 $(a,b,c)=$？',
    answer: '$(-1,-8,-4)$',
    hasImage: false,
  },
  {
    id: '179935cd335',
    chapter: '矩陣A',
    question:
      '小臻利用矩陣的列運算在紙上解一個三元一次方程組，過程如下：\n$\\cdots\\rightarrow\\begin{bmatrix}1&-1&a&8\\\\0&5&-3&b\\\\0&1&c&-15\\end{bmatrix}\\rightarrow\\cdots\\rightarrow\\begin{bmatrix}1&0&0&4\\\\0&1&0&-3\\\\0&0&1&1\\end{bmatrix}$，求數字 $a$，$b$，$c$。',
    answer: '$a=1$，$b=-18$，$c=-12$',
    hasImage: false,
  },
  {
    id: '179935fbc50',
    chapter: '矩陣A',
    question:
      '某公司有甲、乙、丙三條生產線，現欲生產三萬個產品，若甲、乙、丙三條生產線同時開動，則需 $10$ 小時；若只開動乙、丙兩條生產線，則需 $15$ 小時；若只開動甲生產線 $15$ 小時，則需再開動丙生產線 $30$ 小時，才能完成所有產品。試問甲、乙、丙條生產線單獨完成所有產品分別各需多少小時？',
    answer: '甲、乙、丙分別各需 $30$、$20$、$60$ 小時',
    hasImage: false,
  },
  {
    id: '1799364fdfe',
    chapter: '矩陣A',
    question:
      '已知矩陣 $\\begin{bmatrix}1&-3&-2&-4\\\\2&1&3&6\\\\3&-2&5&6\\end{bmatrix}$ 經過列運算後，得 $\\begin{bmatrix}1&-3&-2&-4\\\\0&1&1&a\\\\0&0&1&b\\end{bmatrix}$，則數對 $(a,b)=$？',
    answer: '$(2,1)$',
    hasImage: false,
  },
  {
    id: '1799367145e',
    chapter: '矩陣A',
    question:
      '$\\begin{cases}3x+4y+z=8\\\\2x+3y+z=7\\\\x+y+z=4\\end{cases}$ 的解為序組 $(x,y,z)=$？',
    answer: '$(-1,2,3)$',
    hasImage: false,
  },
  {
    id: '1799369132f',
    chapter: '矩陣A',
    question:
      '已知上等稻禾 $2$ 捆、中等稻禾 $3$ 捆、下等稻禾 $3$ 捆，共可打出稻米 $28$ 斗；上等稻禾 $1$ 捆、中等稻禾 $5$ 捆、下等稻禾 $4$ 捆，共可打出稻米 $33$ 斗；上等稻禾 $3$ 捆、中等稻禾 $1$ 捆、下等稻禾 $1$ 捆，共可打出稻米 $21$ 斗，則上等稻禾、中等稻禾、下等稻禾各 $1$ 捆，共可打出稻米幾斗？',
    answer: '$11$',
    hasImage: false,
  },
  {
    id: '179936be142',
    chapter: '矩陣A',
    question:
      '某高中有兩個生態池，其中 $A$、$B$ 兩個注水管及一個 $C$ 排水管，若只開 $A$、$B$ 兩管需 $6$ 小時即可注滿水，若開 $A$ 注水管及 $C$ 排水管，則需 $12$ 小時方可注滿水，若開 $B$ 注水管及 $C$ 排水管，則需 $20$ 小時才可注滿水，則清掃完畢後排空的生態池在只開 $A$ 注水管的情況下，需幾小時才可注滿水？',
    answer: '$10$',
    hasImage: false,
  },
  {
    id: '179936d719f',
    chapter: '矩陣A',
    question:
      '若方程組 $\\begin{cases}ax+y+z=7\\\\x+by+z=8\\\\x+y+cz=9\\end{cases}$ 矩陣經過列運算之後，可以化成 $\\begin{bmatrix}1&0&0&1\\\\0&1&0&2\\\\0&0&1&3\\end{bmatrix}$，則序組 $(a,b,c)=$？',
    answer: '$(2,2,2)$',
    hasImage: false,
  },
  {
    id: '179936f7f2f',
    chapter: '矩陣A',
    question:
      '小楠利用矩陣的列運算在紙上解一個三元一次方程組，過程如下：\n$\\cdots\\rightarrow\\begin{bmatrix}1&-2&a&5\\\\2&b&-3&-3\\\\3&-1&2&c\\end{bmatrix}\\rightarrow\\cdots$ \n$\\rightarrow\\begin{bmatrix}1&0&0&1\\\\0&1&0&1\\\\0&0&1&2\\end{bmatrix}$，求序組 $(a,b,c)=$？',
    answer: '$(3,1,6)$',
    hasImage: false,
  },
  {
    id: '17993729e8b',
    chapter: '矩陣A',
    question:
      '若方程組 $\\begin{cases}x-y+z=3\\\\x+3y-2z=-8\\\\5x-y+2z=a\\end{cases}$ 無解，則 $a$ 不可以為何？',
    answer: '$4$',
    hasImage: false,
  },
  {
    id: '179937355f2',
    chapter: '矩陣A',
    question:
      '若方程組 $\\begin{cases}x-2y-3z=1\\\\x-z=-1\\\\3x+2y-z=a\\end{cases}$ 有解，則 $a=$？',
    answer: '$-5$',
    hasImage: false,
  },
  {
    id: '1799374e08b',
    chapter: '矩陣A',
    question:
      '設向量 $\\vector a=(1,2,1)$，$\\vector b=(1,3,-1)$，$\\vector c=(1,-1,2)$，$\\vector d=(4,-2,9)$，若 $\\vector d=x\\vector a+y\\vector b+z\\vector c$，則序組 $(x,y,z)=$？',
    answer: '$(2,-1,3)$',
    hasImage: false,
  },
  {
    id: '1799376c060',
    chapter: '矩陣A',
    question:
      '有一工程，甲、乙、丙合作 $10$ 天可完成；乙獨做 $15$ 天，剩餘的由丙獨做 $30$ 天可完成；甲獨做 $10$ 天，剩餘的由丙獨做 $30$ 天可完成。若甲、乙、丙獨做各 $x$、$y$、$z$ 天可完成，則序組 $(x,y,z)=$？',
    answer: '$(20,30,60)$',
    hasImage: false,
  },
  {
    id: '1799377e304',
    chapter: '矩陣A',
    question:
      '已知 $(x,y,z)$ 為聯立方程組 $\\begin{cases}x+2y-z=1\\\\x-y+2z=4\\\\4x-y+5z=13\\end{cases}$ 的一解，則 $x^2+y^2+z^2$ 的最小值為？',
    answer: '$\\frac{14}{3}$',
    hasImage: false,
  },
  {
    id: '1799392a68f',
    chapter: '矩陣A',
    question: '二次多項式 $f(x)$，已知 $f(11)=5$，$f(12)=-3$，$f(13)=6$，則 $f(14)=$？',
    answer: '$32$',
    hasImage: false,
  },
];

// 矩陣B
const matrixB: Question[] = [
  {
    id: '1853f12171b',
    chapter: '矩陣B',
    question:
      '設 $A,B$ 均為二階方陣，已知 $2A+3B=\\begin{bmatrix}5&3\\\\2&0\\end{bmatrix}$，且 $A-2B=\\begin{bmatrix}-1&-2\\\\1&0\\end{bmatrix}$，試選出正確的選項。\n(1) $A=\\begin{bmatrix}1&1\\\\0&0\\end{bmatrix}$　(2) $B=\\begin{bmatrix}1&0\\\\1&0\\end{bmatrix}$\n(3) $A+B=\\begin{bmatrix}2&1\\\\1&0\\end{bmatrix}$　(4) $A-B=\\begin{bmatrix}0&-1\\\\1&0\\end{bmatrix}$\n(5) $AB=BA$',
    answer: '(3)(4)',
    hasImage: false,
  },
  {
    id: '17a2224ba40',
    chapter: '矩陣B',
    question:
      '若 $\\begin{bmatrix}0&2\\\\2a+b&c\\\\a&b\\end{bmatrix}=\\begin{bmatrix}0&c-a\\\\-c&3\\\\a&a-6\\end{bmatrix}$，求序組 $(a,b,c)$。',
    answer: '$(1,-5,3)$',
    hasImage: false,
  },
  {
    id: '17a2225cdb3',
    chapter: '矩陣B',
    question:
      '設 $A=\\begin{bmatrix}1&2\\\\1&3\\end{bmatrix}$，$B=\\begin{bmatrix}k&2\\\\1&5\\end{bmatrix}$，若 $(A+B)(A-B)=A^2-B^2$，求實數 $k$。',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '17a222730af',
    chapter: '矩陣B',
    question:
      '設 $A$，$B$，$C$ 為二階方陣，$AB=\\begin{bmatrix}-2&3\\\\4&1\\end{bmatrix}$，$AC=\\begin{bmatrix}6&1\\\\-2&3\\end{bmatrix}$，且 $B+C=\\begin{bmatrix}5&4\\\\3&2\\end{bmatrix}$，求 $A$。',
    answer: '$\\begin{bmatrix}2&-2\\\\4&-6\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '17a222923d8',
    chapter: '矩陣B',
    question:
      '設 $A=\\begin{bmatrix}a_{ij}\\end{bmatrix}_{3\\times3}$ 滿足 $a_{ij}=\\begin{cases}i^2,i>j\\\\j-i,i\\le j\\end{cases}$，下列何者為真？\n(1) $a_{32}=9$ (2) $a_{22}=1$ (3) $a_{13}=2$ (4) 所有元素和為 30 (5) 所有元素平方和為 100',
    answer: '(1)(3)',
    hasImage: false,
  },
  {
    id: '17a222a3742',
    chapter: '矩陣B',
    question:
      '設聯立方程式 $\\begin{bmatrix}k-1&2\\\\5&k+2\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}2\\\\5\\end{bmatrix}$ 無解，求 $k$。',
    answer: '$-4$',
    hasImage: false,
  },
  {
    id: '17a222cf18f',
    chapter: '矩陣B',
    question:
      '$A=\\begin{bmatrix}0&2\\\\-2&0\\end{bmatrix}$，$I=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$，則以下敘述，何者正確？\n(1) $A^2=-4I$ (2) $A^3=-4A$\n(3) $A^4=16I$ (4) $A^{100}=(-4)^{50}I$\n(5) $(A-I)^3=-A+11I$',
    answer: '(1)(2)(3)(4)(5)',
    hasImage: false,
  },
  {
    id: '17a222ea5b7',
    chapter: '矩陣B',
    question:
      '若兩矩陣 $A$ 與 $B$ 滿足 $A+3B=\\begin{bmatrix}1&6&3\\\\2&13&18\\end{bmatrix}$ 且 $A-2B=\\begin{bmatrix}1&-4&-2\\\\-3&-7&-7\\end{bmatrix}$，求矩陣 $B$ 的第 (2,1) 元。',
    answer: '1',
    hasImage: false,
  },
  {
    id: '17a22302368',
    chapter: '矩陣B',
    question:
      '設 $A=\\begin{bmatrix}3&2\\\\2&1\\end{bmatrix}$，若 $A\\begin{bmatrix}a\\\\b\\end{bmatrix}=\\begin{bmatrix}1\\\\0\\end{bmatrix}$，$A\\begin{bmatrix}c\\\\d\\end{bmatrix}=\\begin{bmatrix}0\\\\1\\end{bmatrix}$，求 $a^3+b^3+c^3+d^3$。',
    answer: '-12',
    hasImage: false,
  },
  {
    id: '17a2231a63b',
    chapter: '矩陣B',
    question:
      '已知矩陣 $A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$，$B=\\begin{bmatrix}2&-1\\\\1&-1\\end{bmatrix}$，$C=\\begin{bmatrix}2&1\\\\1&3\\end{bmatrix}$，若矩陣 $X$ 滿足 $AX+3B=C$，求 $X$。',
    answer: '$\\begin{bmatrix}6&-2\\\\-5&3\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179e05acb36',
    chapter: '矩陣B',
    question:
      '已知 $A$、$B$、$C$ 為 $n$ 階方陣且 $O$ 為 $n$ 階零方陣，則下列何者正確？(多選)\n(1) $(A+B)^2=A^2+2AB+B^2$\n(2) 若 $AB=O$，則 $A=O$ 或 $B=O$\n(3) 若 $AB=AC$ 且 $A\\neq O$，則 $B=C$\n(4) 若 $A=BC$，則 $A^2=B^2C^2$\n(5) $(AB)C=A(BC)$',
    answer: '(5)',
    hasImage: false,
  },
  {
    id: '179e05d2e8b',
    chapter: '矩陣B',
    question:
      '設矩陣 $A=\\begin{bmatrix}a_{ij}\\end{bmatrix}_{3\\times3}$，$A\\begin{bmatrix}0\\\\1\\\\0\\end{bmatrix}=\\begin{bmatrix}5\\\\3\\\\-8\\end{bmatrix}$，$A\\begin{bmatrix}0\\\\0\\\\1\\end{bmatrix}=\\begin{bmatrix}1\\\\-6\\\\2\\end{bmatrix}$，$A\\begin{bmatrix}1\\\\0\\\\0\\end{bmatrix}=\\begin{bmatrix}-9\\\\4\\\\7\\end{bmatrix}$，求 $a_{13}+a_{32}+a_{21}$。',
    answer: '$-3$',
    hasImage: false,
  },
  {
    id: '179e0468727',
    chapter: '矩陣B',
    question:
      '若兩矩陣 $A=\\begin{bmatrix}5&1\\\\1&5\\end{bmatrix}$，$B=\\begin{bmatrix}4&2\\\\x&4\\end{bmatrix}$ 滿足 $(A+B)^2=A^2+2AB+B^2$，求 $x$。',
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '179e04855f6',
    chapter: '矩陣B',
    question:
      '設 $P$、$Q$、$R$ 為二階方陣，已知 $PQ=\\begin{bmatrix}2&0\\\\12&0\\end{bmatrix}$，$PR=\\begin{bmatrix}1&3\\\\4&12\\end{bmatrix}$，且 $Q+R=\\begin{bmatrix}1&0\\\\3&3\\end{bmatrix}$，求 $P$。',
    answer: '$\\begin{bmatrix}0&1\\\\4&4\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179e04906e8',
    chapter: '矩陣B',
    question: '$A=\\begin{bmatrix}3&5\\\\-1&-2\\end{bmatrix}$，$2AX=3X+A$，求矩陣 $X$。',
    answer: '$\\begin{bmatrix}11&15\\\\-3&-4\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179e04a75d8',
    chapter: '矩陣B',
    question:
      '$A=\\begin{bmatrix}2&1\\\\1&2\\end{bmatrix}$，$P=\\begin{bmatrix}1&-1\\\\1&1\\end{bmatrix}$，若 $A=PBP^{-1}$，求：\n(1) $B$\n(2) $B^5$',
    answer:
      '(1) $\\begin{bmatrix}3&0\\\\0&1\\end{bmatrix}$ (2) $\\begin{bmatrix}243&0\\\\0&1\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179bc15bed1',
    chapter: '矩陣B',
    question:
      '已知矩陣 $A=\\begin{bmatrix}a_{11}&a_{12}&a_{13}\\\\a_{21}&a_{22}&a_{23}\\\\a_{31}&a_{32}&a_{33}\\end{bmatrix}$，其中 $a_{ij}=i+j$，則矩陣 $A$ 中 $a_{11}+a_{21}+a_{31}=$？',
    answer: '$9$',
    hasImage: false,
  },
  {
    id: '179bc173e66',
    chapter: '矩陣B',
    question:
      '設 $A=\\begin{bmatrix}1&-1&-3&4\\\\2&0&1&5\\end{bmatrix}$，$B=\\begin{bmatrix}2&0&-3&7\\\\1&2&-2&6\\end{bmatrix}$，若 $A+2X=3B$，求矩陣 $X$ 中各元的總和。',
    answer: '15',
    hasImage: false,
  },
  {
    id: '179bc18676f',
    chapter: '矩陣B',
    question:
      '設 $A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$，$B=\\begin{bmatrix}k&2\\\\3&9\\end{bmatrix}$，若 $AB=BA$，求 $k$。',
    answer: '6',
    hasImage: false,
  },
  {
    id: '179bc197175',
    chapter: '矩陣B',
    question:
      '已知實數 $a$，若矩陣 $A=\\begin{bmatrix}6&14\\\\a&a+4\\end{bmatrix}$ 的反矩陣不存在，則 $a=$？',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '179bc1a15ee',
    chapter: '矩陣B',
    question:
      '設矩陣 $A=\\begin{bmatrix}a&1\\\\-8&-a\\end{bmatrix}$，$a>0$，若 $A^{-1}=A$，則實數 $a=$？',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '179bc1c030a',
    chapter: '矩陣B',
    question:
      '已知矩陣 $A$ 與矩陣 $AB$ 的反方陣分別為 $A^{-1}=\\begin{bmatrix}2&4\\\\3&1\\end{bmatrix}$，$(AB)^{-1}=\\begin{bmatrix}12&14\\\\1&-3\\end{bmatrix}$，則矩陣 $B$ 的反方陣為？',
    answer: '$\\begin{bmatrix}3&2\\\\-1&1\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179bc1d63a9',
    chapter: '矩陣B',
    question:
      '已知矩陣 $A=\\begin{bmatrix}1&2\\\\3&4\\end{bmatrix}$，$B=\\begin{bmatrix}2&-1\\\\1&-1\\end{bmatrix}$，$C=\\begin{bmatrix}2&1\\\\1&3\\end{bmatrix}$，且滿足 $AX+3B=C$ 的矩陣 $X=$？',
    answer: '$\\begin{bmatrix}6&-2\\\\-5&3\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179bc1f7a0d',
    chapter: '矩陣B',
    question:
      '已知 $A=\\begin{bmatrix}9&-1&-2\\\\-4&8&1\\end{bmatrix}$，$B=\\begin{bmatrix}-8&-3&4\\\\-7&4&3\\end{bmatrix}$，且矩陣 $X$、$Y$ 滿足 $2X+Y=A$ 和 $X-2Y=B$，則矩陣 $Y=$？',
    answer: '$\\begin{bmatrix}5&1&-2\\\\2&0&-1\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179bc225957',
    chapter: '矩陣B',
    question:
      '設 $A=\\begin{bmatrix}a_{ij}\\end{bmatrix}_{5\\times3}$，$B=\\begin{bmatrix}b_{jk}\\end{bmatrix}_{3\\times4}$，且 $a_{ij}=j-i+2$，$b_{jk}=2j+k$，令 $C=AB=\\begin{bmatrix}c_{ik}\\end{bmatrix}_{5\\times4}$，則 $c_{23}=$？',
    answer: '$46$',
    hasImage: false,
  },
  {
    id: '179bc23d7cf',
    chapter: '矩陣B',
    question:
      '已知兩個二階方陣 $X$ 及 $Y$ 滿足 $X+Y=\\begin{bmatrix}2&2\\\\2&5\\end{bmatrix}$，$X-Y=\\begin{bmatrix}0&2\\\\4&3\\end{bmatrix}$，求 $X^2-Y^2$。',
    answer: '$\\begin{bmatrix}6&10\\\\17&21\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179bc2547e3',
    chapter: '矩陣B',
    question: '設 $A=\\begin{bmatrix}1&1\\\\-1&0\\end{bmatrix}$，求 $A^2$、$A^{2019}$。',
    answer:
      '$\\begin{bmatrix}0&1\\\\-1&-1\\end{bmatrix}$；$\\begin{bmatrix}-1&0\\\\0&-1\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179bc2672ca',
    chapter: '矩陣B',
    question:
      '設 $A^3=\\begin{bmatrix}-7&-2\\\\10&3\\end{bmatrix}$，$A^5=\\begin{bmatrix}-18&-5\\\\25&7\\end{bmatrix}$，則 $A^2=$？',
    answer: '$\\begin{bmatrix}4&1\\\\-5&-1\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179b77e25d5',
    chapter: '矩陣B',
    question:
      '若 $A=\\begin{bmatrix}k+2&3\\\\4&k+3\\end{bmatrix}$ 有乘法反方陣，試求 $k$ 值的範圍。',
    answer: '$k\\neq6$ 且 $k\\neq1$',
    hasImage: false,
  },
  {
    id: '179b78770ab',
    chapter: '矩陣B',
    question: '試利用基本列運算求 $A=\\begin{bmatrix}1&4\\\\3&11\\end{bmatrix}$ 的乘法反方陣。',
    answer: '$\\begin{bmatrix}-11&4\\\\3&-1\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179b7891978',
    chapter: '矩陣B',
    question:
      '已知二階方陣 $A=\\begin{bmatrix}3&8\\\\2&5\\end{bmatrix}$，則：\n(1) $A$ 是否有乘法反方陣(即 $A^{-1}$ 是否存在)？\n(2) 若 $A^{-1}$ 存在，試求 $A^{-1}$。',
    answer: '(1) 是 (2) $\\begin{bmatrix}-5&8\\\\2&-3\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179b78b1b3f',
    chapter: '矩陣B',
    question:
      '將 $\\begin{cases}7x+6y=10\\\\5x-3y=29\\end{cases}$ 寫成 $AX=B$ 的形式，求矩陣 $X$。',
    answer: '$\\begin{bmatrix}4\\\\-3\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179b78d03b6',
    chapter: '矩陣B',
    question:
      '設實係數二階方陣 $A$ 滿足 $A\\begin{bmatrix}4\\\\3\\end{bmatrix}=\\begin{bmatrix}-1\\\\-2\\end{bmatrix}$，$A\\begin{bmatrix}-5\\\\-4\\end{bmatrix}=\\begin{bmatrix}3\\\\1\\end{bmatrix}$，試求 $A=$？',
    answer: '$\\begin{bmatrix}5&-7\\\\-5&6\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179b78fb741',
    chapter: '矩陣B',
    question:
      '若二階方陣 $A$ 滿足 $A^3=\\begin{bmatrix}3&-10\\\\2&-7\\end{bmatrix}$，$A^5=\\begin{bmatrix}7&-25\\\\5&-18\\end{bmatrix}$，試求下列各方陣：\n(1) $A^2$ (2) $A$',
    answer:
      '(1) $\\begin{bmatrix}-1&5\\\\-1&4\\end{bmatrix}$ (2) $\\begin{bmatrix}2&-5\\\\1&-3\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179b7a29ea3',
    chapter: '矩陣B',
    question:
      '設 $A$ 與 $B$ 階為二階方陣，$I$ 是二階單位方陣，則下列各敘述哪些恆為真？\n(1) $A^2-B^2=(A+B)(A-B)$\n(2) $(A+I)^2=A^2+2A+I$\n(3) $\\det(2A)=4\\det A$\n(4) 若 $A^2=I$，則 $A=I$ 或 $A=-I$\n(5) $(AB)^2=A^2B^2$',
    answer: '(2)(3)',
    hasImage: false,
  },
  {
    id: '179b7d9c8b9',
    chapter: '矩陣B',
    question:
      '設 $X$，$Y$ 為矩陣，且滿足 $5X+3Y=\\begin{bmatrix}1&-2\\\\0&3\\end{bmatrix}$，$2X+Y=\\begin{bmatrix}2&1\\\\-1&4\\end{bmatrix}$，試求 $X$、$Y$。',
    answer:
      '$\\begin{bmatrix}5&5\\\\-3&9\\end{bmatrix}$；$\\begin{bmatrix}-8&-9\\\\5&-14\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179b7f22975',
    chapter: '矩陣B',
    question:
      '設 $A=\\begin{bmatrix}a_{ij}\\end{bmatrix}_{4\\times5}$，$B=\\begin{bmatrix}b_{ij}\\end{bmatrix}_{5\\times3}$，其中 $a_{ij}=2i-j$，$b_{ij}=i+j^2$，又 $AB=C=\\begin{bmatrix}c_{ij}\\end{bmatrix}_{4\\times3}$，試求 $c_{32}$。',
    answer: '',
    hasImage: false,
  },
  {
    id: '179b45ec1d4',
    chapter: '矩陣B',
    question:
      '矩陣 $A$ 之第 $(i,j)$ 元定義為 $a_{ij}=2i-j^2+2$，其中 $i=1,2$，$j=1,2,3$，試求矩陣 $A$。',
    answer: '$\\begin{bmatrix}3&0&-5\\\\5&2&-3\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179b460e47e',
    chapter: '矩陣B',
    question:
      '設 $\\begin{bmatrix}x+y&5&3x\\\\a&2&x-2y\\end{bmatrix}=\\begin{bmatrix}4&5&b\\\\x-y&2&2x+1\\end{bmatrix}$，試求序組 $(x,y,a,b)$。',
    answer: '$(9,-5,14,27)$',
    hasImage: false,
  },
  {
    id: '179b464e08b',
    chapter: '矩陣B',
    question:
      '設 $A=\\begin{bmatrix}3&1&-2\\\\1&0&4\\end{bmatrix}$，$B=\\begin{bmatrix}2&-1&3\\\\3&2&1\\end{bmatrix}$，$C=\\begin{bmatrix}-2&1&0\\\\0&3&2\\end{bmatrix}$，試求：\n(1) $-B$ (2) $A-B$ (3) $2A+3B$ (4) $(A+B)+C$，$A+(B+C)$',
    answer:
      '(1) $\\begin{bmatrix}-2&1&-3\\\\-3&-2&-1\\end{bmatrix}$ (2) $\\begin{bmatrix}1&2&-5\\\\-2&-2&3\\end{bmatrix}$ (3) $\\begin{bmatrix}12&-1&5\\\\11&6&11\\end{bmatrix}$ (4) $\\begin{bmatrix}3&1&1\\\\4&5&7\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179b466a1f7',
    chapter: '矩陣B',
    question:
      '設 $A=\\begin{bmatrix}1&0&3\\\\2&-1&0\\end{bmatrix}$，$B=\\begin{bmatrix}1&0&0\\\\0&0&1\\end{bmatrix}$，$C=\\begin{bmatrix}3&4&-7\\\\5&2&1\\end{bmatrix}$，試求滿足 $3X-2A+3B=2X-5C$ 的矩陣 $X$。',
    answer: '$\\begin{bmatrix}-16&-20&41\\\\-21&-12&-8\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179b46ae9d1',
    chapter: '矩陣B',
    question:
      '試計算下列矩陣的乘積：\n(1) $\\begin{bmatrix}1&-1\\\\3&2\\end{bmatrix}\\begin{bmatrix}4&6\\\\7&-5\\end{bmatrix}$ (2) $\\begin{bmatrix}1&2&3\\\\4&5&6\\end{bmatrix}\\begin{bmatrix}4&3\\\\1&9\\end{bmatrix}$\n(3) $\\begin{bmatrix}3&2&4\\end{bmatrix}\\begin{bmatrix}-1\\\\6\\\\3\\end{bmatrix}$ (4) $\\begin{bmatrix}2&-1&3\\\\0&2&-1\\end{bmatrix}\\begin{bmatrix}1&3&4\\\\2&1&2\\\\0&5&3\\end{bmatrix}$',
    answer:
      '(1) $\\begin{bmatrix}-3&11\\\\26&8\\end{bmatrix}$ (2) 無意義 (3) $\\begin{bmatrix}21\\end{bmatrix}$ (4) $\\begin{bmatrix}0&20&15\\\\4&-3&1\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179b46cfca1',
    chapter: '矩陣B',
    question:
      '設 $A=\\begin{bmatrix}1&3\\end{bmatrix}$，$B=\\begin{bmatrix}2&-3\\end{bmatrix}$，$C=\\begin{bmatrix}5&-4\\\\6&3\\end{bmatrix}$，試驗證 $(A+B)C=AC+BC$。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '179b46db45a',
    chapter: '矩陣B',
    question:
      '設 $A=\\begin{bmatrix}1&2\\end{bmatrix}$，$B=\\begin{bmatrix}1&1\\\\-1&0\\end{bmatrix}$，$C=\\begin{bmatrix}-2&1\\\\0&3\\end{bmatrix}$，試驗證 $(AB)C=A(BC)$。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '179b46f9055',
    chapter: '矩陣B',
    question:
      '(1) 若 $A=\\begin{bmatrix}3&2\\\\1&1\\end{bmatrix}$，$B=\\begin{bmatrix}1&2\\\\3&1\\end{bmatrix}$，試求 $A^2-B^2$、$(A+B)(A-B)$。\n(2) 設 $A=\\begin{bmatrix}1&2\\\\4&8\\end{bmatrix}$，$B=\\begin{bmatrix}4&-2\\\\-2&1\\end{bmatrix}$，$C=\\begin{bmatrix}-10&4\\\\5&-2\\end{bmatrix}$，試求 $AB$、$AC$。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '179b47209f6',
    chapter: '矩陣B',
    question:
      '已知 $M$ 為 $3\\times2$ 階矩陣，且 $M\\begin{bmatrix}1&0\\\\0&0\\end{bmatrix}=\\begin{bmatrix}3&0\\\\2&0\\\\1&0\\end{bmatrix}$，$M\\begin{bmatrix}0&0\\\\0&1\\end{bmatrix}=\\begin{bmatrix}0&1\\\\0&2\\\\0&3\\end{bmatrix}$，試求 $M\\begin{bmatrix}0&1\\\\1&0\\end{bmatrix}$。',
    answer: '$\\begin{bmatrix}1&3\\\\2&2\\\\3&1\\end{bmatrix}$',
    hasImage: false,
  },
  {
    id: '179b477953e',
    chapter: '矩陣B',
    question:
      '請問下列哪一個選項中的矩陣乘積等於 $\\begin{bmatrix}2a&3b\\\\2c&3d\\end{bmatrix}$？\n(A) $\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}\\begin{bmatrix}2\\\\3\\end{bmatrix}$ (B) $\\begin{bmatrix}2&3\\end{bmatrix}\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}$\n(C) $\\begin{bmatrix}2&3\\\\2&3\\end{bmatrix}\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}$ (D) $\\begin{bmatrix}2&0\\\\0&3\\end{bmatrix}\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}$\n(E) $\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}\\begin{bmatrix}2&0\\\\0&3\\end{bmatrix}$',
    answer: '(E)',
    hasImage: false,
  },
];

// 選修數甲
const advancedA: Question[] = [
  {
    id: '17c94b815cd',
    chapter: '選修數甲',
    question:
      '設 $a>0$，$f(x)=ax^3-3ax^2-9ax+b$，若 $f(x)$ 有相對極大值為 $10$，相對極小值為 $-22$，求數對 $(a,b)$。',
    answer: '$(1,5)$',
    hasImage: false,
  },
  {
    id: '17c94b93441',
    chapter: '選修數甲',
    question: '試求 $f(x)=x^4+2x^3-12x^2+24x+12$ 的反曲點坐標及凹向下的區間範圍。',
    answer: '$(-2,-84)$、$(1,27)$；$(-2,1)$',
    hasImage: false,
  },
  {
    id: '17c94ba003c',
    chapter: '選修數甲',
    question: '試求 $f(x)=x^3+3x^2-1$ 的反曲點、凹向上的區間及凹向下的區間。',
    answer: '$(-1,1)$；$(-1,\\infty)$；$(-\\infty,-1)$',
    hasImage: false,
  },
  {
    id: '17c94baa9c6',
    chapter: '選修數甲',
    question: '若 $f(x)=x^3+ax^2+bx+1$ 的圖形以 $(-1,8)$ 為反曲點，求數對 $(a,b)$。',
    answer: '$(3,-5)$',
    hasImage: false,
  },
  {
    id: '17c94bb1604',
    chapter: '選修數甲',
    question: '若 $f(x)=2x^3+ax^2+3x+5$，以 $(1,b)$ 為反曲點，求數對 $(a,b)$。',
    answer: '$(-6,4)$',
    hasImage: false,
  },
  {
    id: '17c94bb93cc',
    chapter: '選修數甲',
    question:
      '設 $f(x)=ax^3+bx^2+cx+d$ 的圖形如圖，試問下列選項的推論哪些為真？\n(1) $a>0$ (2) $b>0$ (3) $c>0$\n(4) $d>0$ (5) $b^2-3ac>0$',
    answer: '(1)(3)(4)(5)',
    hasImage: true,
  },
  {
    id: '17c94706ca6',
    chapter: '選修數甲',
    question:
      '若三次函數 $f(x)=ax^3+bx^2+cx+d$ 圖形如圖，則下列哪些為真？\n(1) $a<0$ (2) $b<0$ (3) $c<0$\n(4) $d<0$ (5) $b^2-3ac>0$',
    answer: '(1)(4)(5)',
    hasImage: true,
  },
  {
    id: '17c96169a39',
    chapter: '選修數甲',
    question:
      '設某機械加工廠之最大產量為每週 $25$ 件產品，由經驗知每週若生產 $x$ 件產品，則每件可售 $(110-2x)$ 萬元，且生產 $x$ 件之成本為 $(600+10x+x^2)$ 萬元，試問每週生產幾件可有最大利潤？最大利潤為多少萬元？',
    answer: '$17$；$233$',
    hasImage: false,
  },
  {
    id: '17c961bcd17',
    chapter: '選修數甲',
    question:
      '某飯店有 $100$ 間客房，若每間客房住宿費定價 $2000$ 元，則可全部住滿；若每間客房住宿費提高 $100$ 元，就會多兩間空房。假如每間客房的服務成本為 $400$ 元，則每間客房的住宿費定價多少元時，才能有最大的利潤？',
    answer: '$3700$',
    hasImage: false,
  },
  {
    id: '17c96241d2e',
    chapter: '選修數甲',
    question:
      '設曲線 $y=x^2$ 與直線 $x=1$、$x=3$、$y=0$ 所圍成的區域為 $S$，若把 $x$ 軸上的區間 $[1,3]$ 分成 $8$ 等分，將 $S$ 分割求面積的近似值，求上和 $U_8$，下和 $L_8$。',
    answer: '$\\frac{155}{16}$；$\\frac{123}{16}$',
    hasImage: true,
  },
  {
    id: '17c9625c489',
    chapter: '選修數甲',
    question:
      '求 $f(x)=x^2$ 在 $0\\leq x\\leq 1$ 內，與 $x$ 軸圍成區域，把區間 $[0,1]$ 分成 $10$ 等分的上和 $U_{10}$ 及下和 $L_{10}$。',
    answer: '$\\frac{77}{200}$；$\\frac{57}{200}$',
    hasImage: false,
  },
  {
    id: '17c96288a36',
    chapter: '選修數甲',
    question:
      '由 $y=f(x)=x^2$、$x=0$、$x=1$ 及 $x$ 軸在第一象限圍成一區域 $S$，面積為 $R$，把區間 $[0,1]$ 給 $n$ 等分的上和為 $U_n$，下和為 $L_n$，求：(1) $U_n$、$L_n$、$R$\n(2) 滿足 $|U_n-R|<\\frac{1}{90}$ 之最小自然數 $n$',
    answer: '(1) 略；略；$\\frac13$ (2) $46$',
    hasImage: false,
  },
  {
    id: '17c96280656',
    chapter: '選修數甲',
    question:
      '由 $y=x^3$ 與直線 $x=0$、$x=2$ 及 $x$ 軸在第一象限所圍成區域為 $S$，求把區間 $[0,2]$ 給 $n$ 等分的上和 $U_n$、下和 $L_n$ 及 面積 $R$。',
    answer: '略；略；$4$',
    hasImage: false,
  },
  {
    id: '17c9629033b',
    chapter: '選修數甲',
    question: '試求 $\\displaystyle\\int_{-3}^5(|x+1|+|x-2|)\\text dx$。',
    answer: '$37$',
    hasImage: false,
  },
  {
    id: '17c9629b8e1',
    chapter: '選修數甲',
    question:
      '函數 $y=f(x)$ 在 $a\\leq x\\leq b$ 範圍內，與 $x$ 軸圍出四塊封閉區域，如圖，面積由左至右分別為 $6$、$4$、$3$、$2$。設把 $[a,b]$ 給 $n$ 等分後的黎曼和為 $R_n$，求 $\\displaystyle\\lim_{n\\to\\infty}R_n$。',
    answer: '$3$',
    hasImage: true,
  },
  {
    id: '17c962a6727',
    chapter: '選修數甲',
    question:
      '若 $y=f(x)$ 的圖形如圖，與 $x$ 軸圍成的封閉區域 $A$、$B$、$C$ 的面積依序為 $a$、$b$、$c$，則區間 $[x_1,x_4]$ 分成 $n$ 等分，其黎曼和為 $R_n$，求 $\\displaystyle\\lim_{n\\to\\infty}R_n$。',
    answer: '$a-b+c$',
    hasImage: true,
  },
  {
    id: '17c962ad672',
    chapter: '選修數甲',
    question: '試求 $\\displaystyle\\int_0^5(|x-2|+3)\\text dx$。',
    answer: '$\\frac{43}2$',
    hasImage: false,
  },
  {
    id: '17c962b6888',
    chapter: '選修數甲',
    question:
      '若 $\\displaystyle\\int_2^5 f(x)\\text dx=3$，$\\displaystyle\\int_0^5 f(x)\\text dx=7$，求 $\\displaystyle\\int_2^0 6f(x)\\text dx$。',
    answer: '$-7$',
    hasImage: false,
  },
  {
    id: '17c962c151a',
    chapter: '選修數甲',
    question:
      '設 $f(x)$ 與 $g(x)$ 為多項式函數，若 $\\displaystyle\\int_0^7 f(x)\\text dx=20$，$\\displaystyle\\int_5^7 f(x)\\text dx=15$，$\\displaystyle\\int_0^5 g(x)\\text dx=5$，求 $\\displaystyle\\int_0^5[5g(x)-2f(x)]\\text dx$。',
    answer: '$15$',
    hasImage: false,
  },
  {
    id: '17c962cbc5e',
    chapter: '選修數甲',
    question:
      '已知 $\\displaystyle\\int_0^3 f(x)\\text dx=7$，$\\displaystyle\\int_2^5 f(x)\\text dx=9$，$\\displaystyle\\int_0^5 f(x)\\text dx=10$，求 $\\displaystyle\\int_2^3 f(x)\\text dx$。',
    answer: '$6$',
    hasImage: false,
  },
  {
    id: '17c962d6caf',
    chapter: '選修數甲',
    question:
      '已知 $\\displaystyle\\int_1^2 f(x)\\text dx=2$，$\\displaystyle\\int_2^4 f(x)\\text dx=5$，$\\displaystyle\\int_2^4 g(x)\\text dx=-1$，$\\displaystyle\\int_1^2 g(x)\\text dx=3$，試求 $\\displaystyle\\int_1^4[3f(x)+2g(x)]\\text dx$。',
    answer: '$25$',
    hasImage: false,
  },
  {
    id: '17c962e94a7',
    chapter: '選修數甲',
    question: '$x>0$，求 $f(x)=\\sqrt[3]{x^5}$ 的反導函數 $\\displaystyle\\int f(x)\\text dx$。',
    answer: '$\\frac38x^\\frac83+c$',
    hasImage: false,
  },
  {
    id: '17c962efc08',
    chapter: '選修數甲',
    question: '求 $f(x)=3x^5$ 的反導函數 $\\displaystyle\\int f(x)\\text dx$。',
    answer: '$\\frac12x^6+c$',
    hasImage: false,
  },
  {
    id: '17c962f51e7',
    chapter: '選修數甲',
    question: '試求 $\\displaystyle\\int(x+x^2+x^3+x^4)\\text dx$。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17c962f9c43',
    chapter: '選修數甲',
    question: '試求 $\\displaystyle\\int(x^2+5x-\\frac{3}{x^2}+\\sqrt{x}-7)\\text dx$。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17ca06769e9',
    chapter: '選修數甲',
    question: '試求 $\\displaystyle\\int(\\sqrt{x}+\\sqrt[3]{x^2}+\\sqrt[5]{x^2})\\text dx$。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17ca0680d14',
    chapter: '選修數甲',
    question: "若 $x^3+4x^2+7$ 是 $f(x)$ 的反導函數，求 $f(x)$  的導函數 $f'(x)$。",
    answer: '$6x+8$',
    hasImage: false,
  },
  {
    id: '17ca068f049',
    chapter: '選修數甲',
    question: '試求 $\\displaystyle\\int_0^2(x^3+3x)\\text dx$。',
    answer: '$10$',
    hasImage: false,
  },
  {
    id: '17ca068ccbb',
    chapter: '選修數甲',
    question: '試求 $\\displaystyle\\int_4^9(\\sqrt{x}-\\frac{3}{\\sqrt{x}}+1)\\text dx$。',
    answer: '$\\frac{35}3$',
    hasImage: false,
  },
  {
    id: '17ca0696939',
    chapter: '選修數甲',
    question: '試求 $\\displaystyle\\int_1^2(2x^3-x+1)\\text dx$。',
    answer: '$7$',
    hasImage: false,
  },
  {
    id: '17ca069bfcc',
    chapter: '選修數甲',
    question: '試求 $\\displaystyle\\int_0^1(\\sqrt[3]{x}+\\sqrt[4]{x})\\text dx$。',
    answer: '$\\frac{31}{20}$',
    hasImage: false,
  },
  {
    id: '17ca06a6a76',
    chapter: '選修數甲',
    question:
      ' 設 $f(x)=x^2+ax+b$，且 $\\displaystyle\\int_0^1f(x)\\text dx=b$，$\\displaystyle\\int_0^3f(x)\\text dx=a$，求數對 $(a,b)$。',
    answer: '$(-\\frac23,-\\frac{20}9)$',
    hasImage: false,
  },
  {
    id: '17c9e0517b4',
    chapter: '選修數甲',
    question: "三次多項式函數 $f(x)$ 滿足 $f'(1)=f'(5)=-2$，$f'(4)=1$，求 $f(6)-f(0)$。",
    answer: '$-6$',
    hasImage: false,
  },
  {
    id: '17c9e05704f',
    chapter: '選修數甲',
    question: '$f(x)=12x^3-12x^2-24x$，求 $f(x)$ 的圖形與 $x$ 軸所圍區域的面積。',
    answer: '$37$',
    hasImage: false,
  },
  {
    id: '17c9e08c72f',
    chapter: '選修數甲',
    question: '$f(x)=-6x^2-18x-12$，如圖所示，求陰影部分面積。',
    answer: '$6$',
    hasImage: true,
  },
  {
    id: '17ca06c7353',
    chapter: '選修數甲',
    question:
      '圓 $x^2+y^2=9$ 可移項開根號，得 $y=\\pm\\sqrt{9-x^2}$，求 $\\displaystyle\\int_0^3\\sqrt{9-x^2}\\text dx$。',
    answer: '$\\frac{9\\pi}4$',
    hasImage: true,
  },
  {
    id: '17ca06d5299',
    chapter: '選修數甲',
    question: '試求定積分 $\\displaystyle\\int_{-2}^2\\sqrt{4-x^2}\\text dx$。',
    answer: '$2\\pi$',
    hasImage: false,
  },
  {
    id: '17ca06db83a',
    chapter: '選修數甲',
    question: '試求兩拋物線 $y=2x^2$ 與 $y=(x+1)^2+2$ 圍成的月牙形區域面積。',
    answer: '$\\frac{32}3$',
    hasImage: true,
  },
  {
    id: '17ca06e8cdb',
    chapter: '選修數甲',
    question: '求兩曲線 $y=x^2$ 與 $y=x^3+2x^2-2x$ 所圍的區域面積。',
    answer: '$\\frac98$',
    hasImage: true,
  },
  {
    id: '17ca06ec135',
    chapter: '選修數甲',
    question: '試求 $y=x^2-1$ 與 $y=-x^2+x$ 所圍成的區域面積。',
    answer: '$\\frac{37}{12}$',
    hasImage: false,
  },
  {
    id: '17c9e0cfceb',
    chapter: '選修數甲',
    question: '試求 $y=x^3$ 及 $y=x^5$ 所圍的區域面積。',
    answer: '$\\frac16$',
    hasImage: false,
  },
  {
    id: '17c9e0d44f6',
    chapter: '選修數甲',
    question:
      '$y=\\sqrt{x}$，$0\\leq x\\leq4$，試求與 $x$ 軸圍成區域繞 $x$ 軸旋轉一圈所成的彈頭形旋轉體體積。',
    answer: '$8\\pi$',
    hasImage: true,
  },
  {
    id: '17ca0717e33',
    chapter: '選修數甲',
    question:
      '$k\\in\\mathbb{R}$，若 $y=x^k$ 與 $x=1$ 及 $x$ 軸所圍成區域繞 $x$ 軸旋轉的旋轉體體積為 $\\dfrac{\\pi}{7}$，求 $k$。',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '17ca0723a53',
    chapter: '選修數甲',
    question: '試求 $y=\\sqrt{x}$ 從 $x=1$ 到 $x=2$ 的一段繞 $x$ 軸旋轉所成之體積。',
    answer: '$\\frac{3\\pi}2$',
    hasImage: false,
  },
  {
    id: '17ca07372c1',
    chapter: '選修數甲',
    question: '把圖中的三角形區域繞 $x$ 軸旋轉 $360\\du$，求所得到的旋轉體體積。',
    answer: '$18\\pi$',
    hasImage: true,
  },
  {
    id: '17ca09d3cd3',
    chapter: '選修數甲',
    question: '若 $f(x)=x^3+x+k$ 在區間 $[0,3]$ 的平均函數值為 $5$，求 $k$。',
    answer: '$-\\frac{13}4$',
    hasImage: false,
  },
  {
    id: '17ca09db9f1',
    chapter: '選修數甲',
    question: '設函數 $f(x)=x(x-10)$，$0\\leq x\\leq10$，試求 $f(x)$ 在此區間內的平均值。',
    answer: '$-\\frac{50}3$',
    hasImage: false,
  },
  {
    id: '17ca09eb6fc',
    chapter: '選修數甲',
    question:
      '某一質點作直線運動，在 $t$ 秒時速度為 $v(t)=t^2-2t+4$ (公尺/秒)，求從 $t=1$ 秒到 $t=3$ 秒，此質點的位移。',
    answer: '$\\frac{26}3$ 公尺',
    hasImage: false,
  },
  {
    id: '17ca09f6e51',
    chapter: '選修數甲',
    question:
      '質點作等加速度直線運動，在 $t$ 秒時的速度為 $v(t)=5t+2$ (公尺/秒)，求 $t=2$ 到 $t=5$ 的平均加速度與位移。',
    answer: '$5$ 公尺/秒$^2$；$\\frac{117}2$ 公尺',
    hasImage: false,
  },
  {
    id: '17c91adfe99',
    chapter: '選修數甲',
    question:
      '函數 $f(x)=3x^2+x+7$，求：\n(1) $(3,f(3))$ 和 $(5,f(5))$ 的割線斜率\n(2) 在 $x=2$ 的切線斜率',
    answer: '(1) $25$ (2) $13$',
    hasImage: false,
  },
  {
    id: '17c91aff47f',
    chapter: '選修數甲',
    question: '求拋物線 $f(x)=2x^2-x+3$ 在 $x=1$ 的導數及過點 $(1,4)$ 的切線方程式。',
    answer: '(1) $3$ (2) $3x-y=-1$',
    hasImage: false,
  },
  {
    id: '17c91b1a092',
    chapter: '選修數甲',
    question:
      '函數 $v(t)=2t^2+t-5$，求：\n(1) $(1,v(1))$ 和 $(4,v(4))$ 的割線斜率\n(2) 在 $t=3$ 的切線斜率',
    answer: '(1) $11$ (2) $13$',
    hasImage: false,
  },
  {
    id: '17c91b21f64',
    chapter: '選修數甲',
    question: '求 $f(x)=3x^2+x+1$ 在 $x=3$ 處的切線方程式。',
    answer: '$19x-y=26$',
    hasImage: false,
  },
  {
    id: '17c91b2b515',
    chapter: '選修數甲',
    question: "設 $f(x)=\\dfrac{(x-1)(x-2)(x-3)(x-5)}{x-4}$，求 $f'(1)$。",
    answer: '$\\frac{8}{3}$',
    hasImage: false,
  },
  {
    id: '17c91b52ada',
    chapter: '選修數甲',
    question:
      "若多項式 $f(x)$ 滿足 $f(1)=0$，$f'(1)=-15$，求 $\\displaystyle\\lim_{h\\to0}\\frac{f(1+h)}{3h}$。",
    answer: '$-5$',
    hasImage: false,
  },
  {
    id: '17c91b600fe',
    chapter: '選修數甲',
    question: "設 $f(x)=\\dfrac{(x-5)(x+3)^3(x+4)^2}{2(2x-1)^2(13-x)^3}$，求 $f'(5)$ 及 $f'(-4)$。",
    answer: '$\\frac12$；$0$',
    hasImage: false,
  },
  {
    id: '17c91b98995',
    chapter: '選修數甲',
    question: "已知 $f(3)=0$，$f'(3)=20$，求 $\\displaystyle\\lim_{h\\to0}\\frac{f(3+h)}{4h}$",
    answer: '$5$',
    hasImage: false,
  },
  {
    id: '17c91bb4a4b',
    chapter: '選修數甲',
    question: '設 $f(x)=3x^5-2x^4+5x^3-3x^2+x-7$，求 $\\ddv xf(x)$。',
    answer: '$15x^4-8x^3+15x^2-6x+1$',
    hasImage: false,
  },
  {
    id: '17c91bc76bd',
    chapter: '選修數甲',
    question: "$x\\neq0$，$f(x)=\\dfrac1x-\\dfrac3{x^2}+\\dfrac5{x^4}$，求 $f'(1)$",
    answer: '$-15$',
    hasImage: false,
  },
  {
    id: '17c91bce4f5',
    chapter: '選修數甲',
    question: "$x>0$，$f(x)=3\\sqrt{x}-5\\sqrt[3]{x}+\\sqrt[4]{x^3}$，求 $f'(1)$",
    answer: '$\\frac7{12}$',
    hasImage: false,
  },
  {
    id: '17c91bd468e',
    chapter: '選修數甲',
    question: "設 $f(x)=2x^3+7x^2+x-1$，求 $f'(x)$。",
    answer: '$6x^2+14x+1$',
    hasImage: false,
  },
  {
    id: '17c91be0266',
    chapter: '選修數甲',
    question: "設 $f(x)=\\dfrac1x-\\dfrac2{x^2}+\\dfrac3{x^3}$，求 $f'(1)$。",
    answer: '$-6$',
    hasImage: false,
  },
  {
    id: '17c91bebd27',
    chapter: '選修數甲',
    question: "設 $x>0$，$f(x)=6\\sqrt{x}-9\\sqrt[3]{x^2}+1$，求 $f'(1)$",
    answer: '$-3$',
    hasImage: false,
  },
  {
    id: '17c91bf4687',
    chapter: '選修數甲',
    question: "設 $f(x)=(x^2+x-3)(3x^4+2x+4)$，求 $f'(-1)$。",
    answer: '$25$',
    hasImage: false,
  },
  {
    id: '17c91bfa87f',
    chapter: '選修數甲',
    question: "設 $f(x)=\\dfrac{x^3-1}{x^2+x+1}$，求 $f'(2)$。",
    answer: '$1$',
    hasImage: false,
  },
  {
    id: '17c91c009a0',
    chapter: '選修數甲',
    question: "設 $f(x)=(x^2-x+1)(x^2+x+1)$，求 $f'(1)$",
    answer: '$6$',
    hasImage: false,
  },
  {
    id: '17c91c0817e',
    chapter: '選修數甲',
    question: "設 $f(x)=\\dfrac{x-2}{x+1}$，求 $f'(1)$。",
    answer: '$\\frac34$',
    hasImage: false,
  },
  {
    id: '18366088158',
    chapter: '極限',
    question: '設 $y=\\sqrt[3]{x+5}$，試求以 (3,2) 為切點的切線方程式。',
    answer: '$x-12y=-21$',
    hasImage: false,
  },
  {
    id: '1836609962d',
    chapter: '極限',
    question: '設 $f(x)=\\dfrac{x-1}{x+2}$，則 $y=f(x)$ 在 $x=0$ 處的切線方程式。',
    answer: '$3x-4y=2$',
    hasImage: false,
  },
  {
    id: '17c91c183cc',
    chapter: '選修數甲',
    question: "設 $f(x)=(x^2+2x+3)^6$，求 $f'(-1)$。",
    answer: '$64$',
    hasImage: false,
  },
  {
    id: '17c91cbbe13',
    chapter: '選修數甲',
    question: "設 $f(x)=\\sqrt{x^2+6x+2}$，求 $f'(1)$。",
    answer: '$\\frac43$',
    hasImage: false,
  },
  {
    id: '17c91cc6891',
    chapter: '選修數甲',
    question: "設 $f(x)=(x^2+1)^4$，求 $f'(1)$。",
    answer: '$64$',
    hasImage: false,
  },
  {
    id: '17c91cd2311',
    chapter: '選修數甲',
    question: "設 $f(x)=\\sqrt{ax^2-1}$ 且 $f'(1)=2$，求 $a$。",
    answer: '$2$',
    hasImage: false,
  },
  {
    id: '17c91ce7cd0',
    chapter: '選修數甲',
    question:
      '設 $f(x)=\\begin{cases}x^3+2x+3,x\\le1\\\\x^2+ax+b,x>1\\end{cases}$，若 $f(x)$ 在 $x=1$ 可微分，試求數對 $(a,b)$。',
    answer: '$(3,2)$',
    hasImage: false,
  },
  {
    id: '17c91cf64d3',
    chapter: '選修數甲',
    question:
      "已知 $f(x)=\\begin{cases}\\sqrt[3]x,x\\le1\\\\ax+b,x>1\\end{cases}$，若 $f'(1)$ 存在，試求數對 $(a,b)$。",
    answer: '$(\\frac13,\\frac23)$',
    hasImage: false,
  },
  {
    id: '17c91d001fd',
    chapter: '選修數甲',
    question: '試求 $f(x)=x^3+6x^2-15x+7$ 遞增的區間及遞減的區間。',
    answer: '$(-\\infty,5]$、$[1,\\infty)$；$[-5,1]$',
    hasImage: false,
  },
  {
    id: '17c91d094c1',
    chapter: '選修數甲',
    question:
      '已知 $a\\in\\mathbb{R}$，若 $f(x)=ax^3+3x^2+(a+2)x+6$ 恆為遞減函數，試求 $a$ 的範圍。',
    answer: '$a\\le3$',
    hasImage: false,
  },
  {
    id: '17c91d11cb7',
    chapter: '選修數甲',
    question: '設 $f(x)=x^4-2x^2+1$，試求函數 $f(x)$ 的遞增區間及遞減區間。',
    answer: '$[-1,0]$、$[1,\\infty)$；$(-\\infty,-1]$、$[0,1]$',
    hasImage: false,
  },
  {
    id: '17c91d2fd27',
    chapter: '選修數甲',
    question: '已知 $a\\in\\mathbb{R}$，若 $f(x)=x^3+2x^2+ax+5$ 恆為遞增函數，求 $a$ 的範圍。',
    answer: '$a\\ge\\frac43$',
    hasImage: false,
  },
  {
    id: '17c91d40727',
    chapter: '選修數甲',
    question: '求 $f(x)=2x^3+3x^2-12x-7$ 的極值及發生極值時的 $x$ 值。',
    answer: '極大值 $13$，$x=-2$；極小值 $-14$，$x=1$',
    hasImage: false,
  },
  {
    id: '17c91d49212',
    chapter: '選修數甲',
    question: '求 $f(x)=-x^3-3x^2+9x+5$ 的極值及發生極值時的 $x$ 值。',
    answer: '極大值 $10$，$x=1$；極小值 $-22$，$x=-3$',
    hasImage: false,
  },
  {
    id: '17c91d586ed',
    chapter: '選修數甲',
    question:
      '設 $y=f(x)=2x^3+3x^2-12x+1$，$-3\\le x\\le3$，且令 $y=f(x)$ 之最大值為 $M$，最小值為 $m$，求數對 $(M,m)$。',
    answer: '$(46,-6)$',
    hasImage: false,
  },
  {
    id: '17c91d66969',
    chapter: '選修數甲',
    question:
      '若函數 $f(x)=4x^3+9x^2+6x$ 在區間 $[-2,1]$ 內的最大值為 $M$，最小值為 $m$，求 $M+m$。',
    answer: '$11$',
    hasImage: false,
  },
  {
    id: '17c91d74236',
    chapter: '選修數甲',
    question:
      '設 $f(x)=x^3+ax^2+bx+c$，已知 $f(x)$ 在 $x=1$ 有極大值 $3$，在 $x=3$ 有極小值，求序組 $(a,b,c)$。',
    answer: '$(-6,9,-1)$',
    hasImage: false,
  },
];

// 選修數乙
const advancedB: Question[] = [
  {
    id: '179fd936ce8',
    chapter: '選修數乙',
    question:
      '丟一個公正銅板 $5$ 次，令 $X$ 表 $5$ 次中出現正面的次數，求 $X$ 的期望值、標準差與至少擲出 $3$ 次正面的機率。',
    answer: '$\\frac{5}{2}$；$\\frac{\\sqrt{5}}{2}$；$\\frac{1}{2}$',
    hasImage: false,
  },
  {
    id: '179fd9ab8db',
    chapter: '選修數乙',
    question:
      '設班上學生的座號為 $1$ 號到 $50$ 號，他們每人這次考試的分數剛好是他們每人各自做號的兩倍，利用下列亂數表由第 $4$ 行第 $1$ 列開始，往下找到 $5$ 位同學的座號，則這 $5$ 人的平均成機為？',
    answer: '$26.8$',
    hasImage: false,
  },
  {
    id: '179fd9c0fdf',
    chapter: '選修數乙',
    question:
      '某班有 $50$ 位同學，其中男生有 $30$ 位，女生 $20$ 位。某次導師要抽 $5$ 位同學留下打掃環境，依性別人數比例做分層抽樣，則班上的男同學小明被抽中的機率是？',
    answer: '$\\frac{1}{10}$',
    hasImage: false,
  },
  {
    id: '179fd9d6ba3',
    chapter: '選修數乙',
    question:
      '某校學生的數學段考成績平均分數是 $65.24$ 分，標準差是 $5.24$ 分，而且已知成績呈現常態分布。若此校約有 $320$ 名學生數學成績低於 $60$ 分，則全校約有學生幾人？',
    answer: '$2000$',
    hasImage: false,
  },
  {
    id: '179fda0bcac',
    chapter: '選修數乙',
    question:
      '關於信賴區間與信心水準的解讀，下列敘述何者錯誤？(多選)\n(1) 信賴區間的中點是母體比率 $p$\n(2) 信賴區間的長度等於抽樣誤差的大小\n(3) 信心水準愈高，對應的信賴區間長度愈短\n(4) 調查 $900$ 人所得 $95\\%$ 信賴區間長度大約是調查 $100$ 人所得 $95\\%$ 信賴區間長度的 $\\frac{1}{3}$ 倍\n(5) 經抽樣後所得的樣本信賴區間包含 $p$ 的機率為 $95\\%$',
    answer: '(1)(2)(3)(4)(5)',
    hasImage: false,
  },
  {
    id: '179fda42b6b',
    chapter: '選修數乙',
    question:
      '想知道手機品牌的市占率，抽樣 $1000$ 人，調查持有市面上所有的四種品牌甲、乙、丙、丁的哪一種後，整理統計結果如下：\n$\\begin{array} {|c|c|}\\hline 品牌 & 甲 & 乙 & 丙 & 丁 \\\\ \\hline 使用人數 & 250 & 150 & 200 & 400 \\\\ \\hline \\end{array}$\n則根據本次調查：是否可說明在 $95\\%$ 信心水準下，品牌甲的市占率不到 $30\\%$？',
    answer: '可以',
    hasImage: false,
  },
  {
    id: '179fda51ffe',
    chapter: '選修數乙',
    question:
      '某人想了解某地區上網人數的比率 $p$，他要在 $95\\%$ 信心水準下，而抽樣誤差在 $0.03$ 之內，請問他約需調查幾人？',
    answer: '$1112$',
    hasImage: false,
  },
];

// 極限
const limit: Question[] = [
  {
    id: '17baf2aecc8',
    chapter: '極限',
    question:
      '觀察以下各數列，判斷收斂或發散，並寫出極限值：\n(1) $\\dfrac{\\sqrt5}2,(\\dfrac{\\sqrt5}2)^2,(\\dfrac{\\sqrt5}2)^3,(\\dfrac{\\sqrt5}2)^4,...$\n(2) $-\\dfrac{\\pi}4,(\\dfrac{\\pi}4)^2,-(\\dfrac{\\pi}4)^3,(\\dfrac{\\pi}4)^4,...$\n(3) $\\dfrac12,-\\dfrac23,\\dfrac34,-\\dfrac45,\\dfrac56,-\\dfrac67,...$\n(4) $3,3,3,3,3,3,3,...$\n(5) $\\log\\dfrac11,\\log\\dfrac12,\\log\\dfrac13,\\log\\dfrac14,\\log\\dfrac15,...$',
    answer: '(1) 發散 (2) $0$ (3) 發散 (4) 3 (5) 發散',
    hasImage: false,
  },
  {
    id: '17baf2f3825',
    chapter: '極限',
    question:
      '觀察以下各數列，判斷收斂或發散，並寫出極限值：\n(1) $1,-1,1,-1,1,-1,-1,...$\n(2) $1.01,1.01^2,1.01^3,10.1^4,1.01^5,...$\n(3) $1.01^{-1},1.01^{-2},1.01^{-3},1.01^{-4},...$\n(4) $999,999^\\frac{1}{2},999^\\frac{1}{3},999^\\frac{1}{4},999^\\frac{1}{5},...$\n(5) $\\dfrac{1}{1},\\dfrac{1}{2},\\dfrac{1}{3},\\dfrac{1}{4},\\dfrac{1}{5},\\dfrac{1}{6},\\dfrac{1}{7},...$',
    answer: '(1) 發散 (2) 發散 (3) 0 (4) 1 (5) 0',
    hasImage: false,
  },
  {
    id: '17baf3244b9',
    chapter: '極限',
    question:
      '試求 (1) $\\displaystyle\\lim_{n\\to\\infty}\\frac{5n^3-7n^2+n+2}{4n^3+6n^2-5n+1}$\n(2) $\\displaystyle\\lim_{n\\to\\infty}\\frac{3n^2+7n}{2n^3+5}$ (3) $\\displaystyle\\lim_{n\\to\\infty}\\frac{3n^2+5}{2n+7}$',
    answer: '(1) $\\frac54$ (2) 0 (3) 不存在',
    hasImage: false,
  },
  {
    id: '17baf33d3e4',
    chapter: '極限',
    question:
      '試求 (1) $\\displaystyle\\lim_{n\\to\\infty}\\frac{5n^3+6n^2+1}{2n^3+4n+8}$\n(2) $\\displaystyle\\lim_{n\\to\\infty}\\frac{4n^2+9n}{2n^3+1}$ (3) $\\displaystyle\\lim_{n\\to\\infty}\\frac{4n^3+9}{2n^2+7}$',
    answer: '(1) $\\frac52$ (2) 0 (3) 不存在',
    hasImage: false,
  },
  {
    id: '17baf3771d5',
    chapter: '極限',
    question: '試求 $\\displaystyle\\lim_{n\\to\\infty}\\frac{5^{n+2}-2^{2n}}{5^{n-1}+3^{n+1}}$',
    answer: '125',
    hasImage: false,
  },
  {
    id: '17baf398761',
    chapter: '極限',
    question:
      '試求 (1) $\\displaystyle\\lim_{n\\to\\infty}\\frac{3\\cdot4^n+2\\cdot5^{n+2}}{5^n+7\\cdot(-3)^n}$\n(2) $\\displaystyle\\lim_{n\\to\\infty}\\frac{2^{n+20}-5^n}{2^{n+15}+5^{n-2}}$',
    answer: '(1) 50 (2) -25',
    hasImage: false,
  },
  {
    id: '17baf3b868b',
    chapter: '極限',
    question:
      '若 $\\displaystyle\\lim_{n\\to\\infty}\\frac{an^4+10n^3+n-5}{bn^3+n^2-n+7}=5$，求數對 $(a,b)$。',
    answer: '(0,2)',
    hasImage: false,
  },
  {
    id: '17baf3c9021',
    chapter: '極限',
    question:
      '若 $\\displaystyle\\lim_{n\\to\\infty}\\frac{an^2+8n-1}{bn^3+2n^2+2}=3$，求數對 $(a,b)$',
    answer: '(6,0)',
    hasImage: false,
  },
  {
    id: '17baf3e3c13',
    chapter: '極限',
    question:
      '若數列 $\\langle a_n\\rangle$ 滿足 $\\displaystyle\\lim_{n\\to\\infty}\\frac{3a_n+4}{a_n+2}=5$，求 $\\displaystyle\\lim_{n\\to\\infty}a_n$。',
    answer: '-3',
    hasImage: false,
  },
  {
    id: '17baf42ecca',
    chapter: '極限',
    question:
      '若數列 $\\langle a_n\\rangle$ 滿足 $\\displaystyle\\lim_{n\\to\\infty}\\frac{a_n}{3n+5}=24$，求 $\\displaystyle\\lim_{n\\to\\infty}\\frac{a_n}{8n+1}$。',
    answer: '9',
    hasImage: false,
  },
  {
    id: '17baf441656',
    chapter: '極限',
    question:
      '若數列 $\\langle a_n\\rangle$ 滿足 $\\dfrac{3n-5}{n+1}<a_n<\\dfrac{3n+7}{n-2}$，試求 $\\displaystyle\\lim_{n\\to\\infty}a_n$。',
    answer: '3',
    hasImage: false,
  },
  {
    id: '17baf453b18',
    chapter: '極限',
    question:
      '若數列 $\\langle a_n\\rangle$ 滿足 $\\dfrac{7n^2+5}{n^2+2n+1}<a_n<\\dfrac{7n^2+n+6}{n^2+n-2}$，試求 $\\displaystyle\\lim_{n\\to\\infty}a_n$。',
    answer: '7',
    hasImage: false,
  },
  {
    id: '17baf47f696',
    chapter: '極限',
    question:
      '試選出 $\\displaystyle\\sum^{99}_{k=1}(2k+1)^2$ 的展開\n(1) $1^2+3^2+5^2+7^2+\\cdots+197^2+199^2$\n(2) $1^2+3^2+5^2+7^2+\\cdots+199^2+201^2$\n(3) $3^2+5^2+7^2+9^2+\\cdots+197^2+199^2$\n(4) $3^2+5^2+7^2+9^2+\\cdots+199^2+201^2$',
    answer: '(3)',
    hasImage: false,
  },
  {
    id: '17baf4a1be5',
    chapter: '極限',
    question:
      '試選出 $\\displaystyle\\sum^{23}_{k=0}(3k+10)^3$ 的展開\n(1) $10^3+11^3+12^3+\\cdots+79^3$\n(2) $13^3+16^3+19^3+\\cdots+69^3$\n(3) $10^3+13^3+16^3+\\cdots+69^3$\n(4) $10^3+13^3+16^3+\\cdots+79^3$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17baf4c914f',
    chapter: '極限',
    question:
      '下列哪些選項與 $(-5)+(-2)+1+4+\\cdots+43$ 相同？\n(1) $\\displaystyle\\sum^{43}_{k=-5}k\\quad$ (2) $\\displaystyle\\sum^{49}_{k=1}(k-6)$\n(3) $\\displaystyle\\sum^{21}_{k=-3}(2k+1)\\quad$ (4) $\\displaystyle\\sum^{17}_{k=1}(3k-8)$\n(5) $\\displaystyle\\sum^{14}_{k=-2}(3k+1)$',
    answer: '(4)(5)',
    hasImage: false,
  },
  {
    id: '17baf4f5a2d',
    chapter: '極限',
    question:
      '下列哪些選項與 $7+9+11+13+\\cdots+51$ 相同？\n(1) $\\displaystyle\\sum^{51}_{k=7}k\\quad$ (2) $\\displaystyle\\sum^{49}_{k=5}(k+2)$\n(3) $\\displaystyle\\sum^{25}_{k=3}(2k+1)\\quad$ (4) $\\displaystyle\\sum^{26}_{k=4}(2k-1)$\n(5) $\\displaystyle\\sum^{23}_{k=1}(2k+5)$',
    answer: '(3)(4)(5)',
    hasImage: false,
  },
  {
    id: '17baf52582a',
    chapter: '極限',
    question: '試求 $\\displaystyle\\sum^{10}_{k=1}(2k-3)(k-1)$',
    answer: '525',
    hasImage: false,
  },
  {
    id: '17baf535b16',
    chapter: '極限',
    question: '試求 $\\displaystyle\\sum^{20}_{k=1}(k+2)(k-1)$',
    answer: '3040',
    hasImage: false,
  },
  {
    id: '17baf540b30',
    chapter: '極限',
    question: '試求 $1\\times3+2\\times5+3\\times7+\\cdots+20\\times41$',
    answer: '5950',
    hasImage: false,
  },
  {
    id: '17baf54e4a7',
    chapter: '極限',
    question: '試求 $1\\times4+2\\times7+3\\times10+\\cdots+30\\times91$',
    answer: '28830',
    hasImage: false,
  },
  {
    id: '17baf55eea3',
    chapter: '極限',
    question:
      '設等比數列的首項為 $1$，公比為 $-\\frac{1}{2}$，前 $n$ 項和 $S_n$ 在 $n$ 很大時會趨近 $S$，求 $S$。',
    answer: '$\\frac{2}{3}$',
    hasImage: false,
  },
  {
    id: '17baf5838a7',
    chapter: '極限',
    question:
      '$S_n=\\frac{1}{3}+\\frac{1}{3^2}+\\frac{1}{3^3}+\\cdots+\\frac{1}{3^n}$，求 $\\displaystyle\\lim_{n\\to\\infty}S_n$，若 $|S-S_n|<\\frac{1}{3000}$，求最小的自然數 $n$。',
    answer: '$\\frac{1}{2}$；$7$',
    hasImage: false,
  },
  {
    id: '17baf5a0a42',
    chapter: '極限',
    question: '若無窮數列 $\\langle x(3x-5)^n\\rangle$ 收斂，求實數 $x$ 的範圍。',
    answer: '$x=0$ 或 $\\frac{4}{3}<x\\le2$',
    hasImage: false,
  },
  {
    id: '17baf5b51c3',
    chapter: '極限',
    question: '若數列 $\\langle (\\dfrac{3x-5}{2})^n\\rangle$ 收斂，求實數 $x$ 的範圍。',
    answer: '$1<x\\le\\frac{7}{3}$',
    hasImage: false,
  },
  {
    id: '17baf5ce83c',
    chapter: '極限',
    question:
      '已知首項為 $a$、公比為 $r$ 的無窮等比級數和為 5，首項為 $a$、公比為 $3r$ 的無窮等比級數和為 7，求首項為 $a$、公比為 $2r$ 的無窮等比級數和。',
    answer: '$\\frac{35}{6}$',
    hasImage: false,
  },
  {
    id: '17baf5e0933',
    chapter: '極限',
    question: '若 $a+ar+ar^2+ar^3+\\cdots=5$ 且 $a-ar^2+ar^4-ar^6+\\cdots=2$，求 $r$。',
    answer: '$\\frac{1}{2}$',
    hasImage: false,
  },
  {
    id: '17baf5f606f',
    chapter: '極限',
    question: '試求 $\\displaystyle\\sum^{\\infty}_{n=1}\\frac{2^n+3^n}{5^n}$',
    answer: '$\\frac{13}{6}$',
    hasImage: false,
  },
  {
    id: '17baf60acf7',
    chapter: '極限',
    question:
      '試求 (1) $\\displaystyle\\lim_{n\\to\\infty}\\frac{2^n+3^n+1}{6^n}$\n(2) $\\displaystyle\\sum^{\\infty}_{n=1}\\frac{2^n+3^n+1}{6^n}$',
    answer: '(1) 0 (2) $\\frac{17}{10}$',
    hasImage: false,
  },
  {
    id: '17baf6530ad',
    chapter: '極限',
    question:
      '甲、乙、丙依序輪流擲銅板，先擲出正面者獲勝，試求：(1) 甲獲勝的機率\n(2) 乙獲勝的機率 (3) 丙獲勝的機率',
    answer: '(1) $\\frac{4}{7}$ (2) $\\frac{2}{7}$ (3) $\\frac{1}{7}$',
    hasImage: false,
  },
  {
    id: '18365d35929',
    chapter: '極限',
    question: '試求 $\\displaystyle\\lim_{n\\to\\infty}(\\sqrt{n^2+n+1}-n)$。',
    answer: '$\\frac12$',
    hasImage: false,
  },
  {
    id: '18365d5c606',
    chapter: '極限',
    question:
      '試求 (1) $\\displaystyle\\lim_{n\\to\\infty}(\\sqrt{n^2+5n+2}-n)$ (2) $\\displaystyle\\lim_{n\\to\\infty}(\\sqrt{n^2+n}-\\sqrt{n^2+3n})$',
    answer: '(1) $\\frac52$ (2) -1',
    hasImage: false,
  },
  {
    id: '18365d91a94',
    chapter: '極限',
    question:
      '試求 $\\displaystyle\\lim_{n\\to\\infty}\\frac{\\sqrt{n^2+1}+\\sqrt{n^2+2}+\\cdots+\\sqrt{n^2+n}}{3n^2+5n+1}$',
    answer: '$\\frac13$',
    hasImage: false,
  },
  {
    id: '18365da0634',
    chapter: '極限',
    question:
      '試求 $\\displaystyle\\lim_{n\\to\\infty}\\frac{\\sqrt[3]{n^3+1}+\\sqrt[3]{n^3+2}+\\cdots+\\sqrt[3]{n^3+n}}{n^2}$',
    answer: '1',
    hasImage: false,
  },
  {
    id: '18365e7d18b',
    chapter: '極限',
    question:
      '$S_n=\\dfrac12+(\\dfrac12)^2+(\\dfrac12)^3+(\\dfrac12)^4+\\cdots+(\\dfrac12)^n$，求 $\\displaystyle\\lim_{n\\to\\infty}S_n$。',
    answer: '2',
    hasImage: false,
  },
  {
    id: '18365e6fea0',
    chapter: '極限',
    question:
      '$S_n=\\dfrac13+(\\dfrac13)^2+(\\dfrac13)^3+(\\dfrac13)^4+\\cdots+(\\dfrac13)^n$，求 $\\displaystyle\\lim_{n\\to\\infty}S_n$。',
    answer: '$\\frac12$',
    hasImage: false,
  },
  {
    id: '17baf66e6f8',
    chapter: '極限',
    question:
      '若皮球自離地面 25 公尺的高處落下，每次返跳高度為其落下時高度的 $\\dfrac{3}{5}$，試求此球到靜止時所經過的距離。',
    answer: '100 公尺',
    hasImage: false,
  },
  {
    id: '17baf6fbdba',
    chapter: '極限',
    question:
      '設 $f(x)=\\begin{cases}x^2+3,0\\le x<2\\\\9-x,2\\le x<6\\end{cases}$ 且 $f(x+6)=f(x)$，求 $f(14)+f(f(13))$。',
    answer: '12',
    hasImage: false,
  },
  {
    id: '17baf718934',
    chapter: '極限',
    question:
      '設 $f(x)=\\begin{cases}2x+1,0\\le x<1\\\\x^2+2x+2,1\\le x<2\\\\-x+3,2\\le x<3\\end{cases}$ 且 $f(x+3)=f(x)$，求 $f(f(\\dfrac{23}2))$。',
    answer: '2',
    hasImage: false,
  },
  {
    id: '17baf7362e5',
    chapter: '極限',
    question: '高斯函數 $f(x)=[x]$，求 $f(5)$、$f(\\pi)$、$f(-3.1)$，並作其函數圖形。',
    answer: '5；3；-4；圖略',
    hasImage: false,
  },
  {
    id: '17baf742d04',
    chapter: '極限',
    question: '函數 $f(x)=x-[x]$，試作其函數圖形。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17baf771a46',
    chapter: '極限',
    question:
      '已知 $f(x)$ 為奇函數，$g(x)$ 為偶函數，$h(x)$ 不是奇函數也不是偶函數，則下列哪些選項為奇函數？哪些為偶函數？\n(1) $y=f(x)+3\\quad$ (2) $y=g(x)+5$\n(3) $y=f(x)+g(x)\\quad$ (4) $y=f(x)+2x^3$\n(5) $y=f(x)\\cdot g(x)\\quad$ (6) $y=f(x)\\cdot\\sin x$\n(7) $y=g(f(x))\\quad$ (8) $y=\\dfrac{h(x)-h(-x)}{2}$',
    answer: '(4)(5)(8)；(2)(6)(7)',
    hasImage: false,
  },
  {
    id: '17baf7a9355',
    chapter: '極限',
    question:
      '下列哪些選項為奇函數？哪些為偶函數？\n(1) $y=1\\quad$ (2) $y=x^3+5x$\n(3) $y=x^4+x^2-7\\quad$ (4) $y=x^3\\cos x$\n(5) $y=x^5\\sin x\\quad$ (6) $x^3-\\sin x$',
    answer: '(2)(4)(6)；(1)(3)(5)',
    hasImage: false,
  },
  {
    id: '17baf7ce619',
    chapter: '極限',
    question:
      '設 $f(x)=\\dfrac{x^2+x-2}{x-1}$，求：\n(1) $f(1)\\quad$ (2) $\\displaystyle\\lim_{x\\to1}f(x)\\quad$ (3) $\\displaystyle\\lim_{x\\to2}f(x)$\n(4) 作 $f(x)$ 的圖形',
    answer: '(1) 不存在 (2) 3 (3) 4',
    hasImage: false,
  },
  {
    id: '17baf7e403e',
    chapter: '極限',
    question:
      '設 $f(x)=\\dfrac{x^2+2x-3}{(x-1)(x-2)}$，求：\n(1) $\\displaystyle\\lim_{x\\to1}f(x)$ (2) $\\displaystyle\\lim_{x\\to2}f(x)$',
    answer: '(1) 不存在 (2) 3 (3) 4',
    hasImage: false,
  },
  {
    id: '17baf7ee65e',
    chapter: '極限',
    question:
      '設 $f(x)=\\dfrac{x^2+2x-3}{(x-1)(x-2)}$，求：\n(1) $\\displaystyle\\lim_{x\\to1}f(x)\\quad$ (2) $\\displaystyle\\lim_{x\\to2}f(x)$',
    answer: '(1) -4 (2) 不存在',
    hasImage: false,
  },
  {
    id: '17baf82560d',
    chapter: '極限',
    question:
      '設 $y=f(x)$ 的圖形如圖所示，試求：\n(1) $f(1)$，$f(2)$，$f(3)$\n(2) $\\displaystyle\\lim_{x\\to1^-}f(x)$，$\\displaystyle\\lim_{x\\to1^+}f(x)$，$\\displaystyle\\lim_{x\\to1}f(x)$\n(3) $\\displaystyle\\lim_{x\\to2^-}f(x)$，$\\displaystyle\\lim_{x\\to2^+}f(x)$，$\\displaystyle\\lim_{x\\to2}f(x)$\n(4) $\\displaystyle\\lim_{x\\to3^-}f(x)$，$\\displaystyle\\lim_{x\\to3^+}f(x)$，$\\displaystyle\\lim_{x\\to3}f(x)$',
    answer: '略',
    hasImage: true,
  },
  {
    id: '17baf888027',
    chapter: '極限',
    question:
      '如圖，求下列各極限值：\n(1) $\\displaystyle\\lim_{x\\to1^-}f(x)$，$\\displaystyle\\lim_{x\\to1^+}f(x)$，$\\displaystyle\\lim_{x\\to1}f(x)$\n(2) $\\displaystyle\\lim_{x\\to3^-}f(x)$，$\\displaystyle\\lim_{x\\to3^+}f(x)$，$\\displaystyle\\lim_{x\\to3}f(x)$\n(3) $\\displaystyle\\lim_{x\\to5^-}f(x)$，$\\displaystyle\\lim_{x\\to5^+}f(x)$，$\\displaystyle\\lim_{x\\to5}f(x)$',
    answer: '(1) 2；2；2 (2) 4；4；4 (3) 3；2；不存在',
    hasImage: true,
  },
  {
    id: '17baf8a0192',
    chapter: '極限',
    question: '試求 $\\displaystyle\\lim_{x\\to-1}(\\frac{x^2+7x-3}{x^2-x-2}-\\frac{3}{x+1})$',
    answer: '$-\\frac{2}{3}$',
    hasImage: false,
  },
  {
    id: '17baf8b63dc',
    chapter: '極限',
    question:
      '試求 (1) $\\displaystyle\\lim_{x\\to0}\\frac{x+1}{2x^2-x-1}$\n(2) $\\displaystyle\\lim_{x\\to2}\\frac{x^3-x^2-x-2}{x^2-x-2}$',
    answer: '(1) $-1$ (2) $\\frac{7}{3}$',
    hasImage: false,
  },
  {
    id: '17baf8de274',
    chapter: '極限',
    question:
      '分段函數 $f(x)=\\begin{cases}2x+5a,x>3\\\\4x-a,x<3\\end{cases}$，在 $x=3$ 處的極限值存在，求 $a$、$\\displaystyle\\lim_{x\\to3}f(x)$。',
    answer: '$1$；$11$',
    hasImage: false,
  },
  {
    id: '17baf8f69ef',
    chapter: '極限',
    question:
      '分段函數 $f(x)=\\begin{cases}x^2+ax+3,x>1\\\\2x-a,x<1\\end{cases}$，若 $\\displaystyle\\lim_{x\\to1}f(x)$ 存在，求 $a$、$\\displaystyle\\lim_{x\\to1}f(x)$。',
    answer: '$-1$；$3$',
    hasImage: false,
  },
  {
    id: '17baf919903',
    chapter: '極限',
    question:
      '已知 $\\displaystyle\\lim_{x\\to a}[5f(x)+3g(x)]=7$，$\\displaystyle\\lim_{x\\to a}[2f(x)-g(x)]=5$，求 $\\displaystyle\\lim_{x\\to a}f(x)$、$\\displaystyle\\lim_{x\\to a}g(x)$',
    answer: '$2$；$-1$',
    hasImage: false,
  },
  {
    id: '17baf92ba06',
    chapter: '極限',
    question:
      '已知 $\\displaystyle\\lim_{x\\to a}[3f(x)+2g(x)]=18$，$\\displaystyle\\lim_{x\\to a}f(x)=4$，求 $\\displaystyle\\lim_{x\\to a}\\frac{1}{g(x)}$。',
    answer: '$\\frac{1}{3}$',
    hasImage: false,
  },
  {
    id: '17baf943eca',
    chapter: '極限',
    question:
      '設 $f(x)=\\begin{cases}ax+5,x<2\\\\b-a,x=2\\\\x^2+2x+3,x>2\\end{cases}$，若 $f(x)$ 在 $x=2$ 連續，求數對 $(a,b)$。',
    answer: '$(3,14)$',
    hasImage: false,
  },
  {
    id: '17baf960c64',
    chapter: '極限',
    question:
      '設 $f(x)=\\begin{cases}x^2-x+5,x\\ge2\\\\x+k,x<2\\end{cases}$，求實數 $k$ 使得 $f(x)$ 是一連續函數。',
    answer: '$5$',
    hasImage: false,
  },
  {
    id: '17bafe1f728',
    chapter: '極限',
    question:
      '(1) $\\displaystyle\\lim_{n\\to\\infty}\\frac{5n-7}{3n+20}$\n(2) $\\displaystyle\\lim_{n\\to\\infty}\\frac{5n^2-101n-2001}{10n^2+20n+1001}$',
    answer: '(1) $\\frac{5}{3}$ (2) $\\frac{1}{2}$',
    hasImage: false,
  },
  {
    id: '17bafe3e479',
    chapter: '極限',
    question: '求 $\\displaystyle\\lim_{n\\to\\infty}\\frac{1+4+7+\\cdots+(3n-2)}{n^2}$',
    answer: '$\\frac{3}{2}$',
    hasImage: false,
  },
  {
    id: '17bafe49d2a',
    chapter: '極限',
    question: '求 $\\displaystyle\\lim_{n\\to\\infty}(\\frac{n^2-1}{n+1}-\\frac{n^2+2}{n+2})$',
    answer: '$1$',
    hasImage: false,
  },
  {
    id: '17bafe5c1a7',
    chapter: '極限',
    question:
      '求 $\\displaystyle\\lim_{n\\to\\infty}\\frac{7\\cdot4^n+6\\cdot2^n}{5\\cdot4^n+2\\cdot3^n}$',
    answer: '$\\frac{7}{5}$',
    hasImage: false,
  },
  {
    id: '17bafe7891d',
    chapter: '極限',
    question:
      '$a=\\frac{\\pi}{3}$，$b=\\sqrt{2}$，$c=0.99$，求 $\\displaystyle\\lim_{n\\to\\infty}(\\frac{2a^n}{3+4a^n}+\\frac{5b^n}{6+7b^n}+\\frac{8c^n}{9+10c^n})$',
    answer: '$\\frac{17}{14}$',
    hasImage: false,
  },
  {
    id: '17bafe8ff4d',
    chapter: '極限',
    question:
      '已知 $\\displaystyle\\lim_{n\\to\\infty}(\\frac{3n^2+2n+5}{2n^2+n-1}+6a_n)=4$，求 $\\displaystyle\\lim_{n\\to\\infty}a_n$',
    answer: '$\\frac{5}{12}$',
    hasImage: false,
  },
  {
    id: '17bafebb696',
    chapter: '極限',
    question:
      '已知 $\\displaystyle\\lim_{n\\to\\infty}a_n=3$、$\\displaystyle\\lim_{n\\to\\infty}b_n=5$、$\\displaystyle\\lim_{n\\to\\infty}c_n=6$，求 $\\displaystyle\\lim_{n\\to\\infty}\\frac{4a_n+2b_n}{3c_n+5}$',
    answer: '$\\frac{22}{23}$',
    hasImage: false,
  },
  {
    id: '17bafed0271',
    chapter: '極限',
    question: '計算 $\\displaystyle\\sum^5_{k=2}\\frac{2^{k-1}-3k}{(-1)^k}$',
    answer: '$-4$',
    hasImage: false,
  },
  {
    id: '17bafee3544',
    chapter: '極限',
    question:
      '已知 $\\displaystyle\\sum^{10}_{n=1}a_n=15$，$\\displaystyle\\sum^{10}_{n=1}b_n=27$，求 $\\displaystyle\\sum^{10}_{n=1}(2a_n-3b_n+4)$',
    answer: '$-11$',
    hasImage: false,
  },
  {
    id: '17bafef179b',
    chapter: '極限',
    question: '求 $\\displaystyle\\sum^{10}_{k=1}(2^k+k^2)$',
    answer: '$2431$',
    hasImage: false,
  },
  {
    id: '17bafefa099',
    chapter: '極限',
    question: '求 $\\displaystyle\\sum^{10}_{n=1}(2n-3)(n+1)$',
    answer: '$685$',
    hasImage: false,
  },
  {
    id: '17baff09ebd',
    chapter: '極限',
    question: '求 $1\\times1+2\\times3+3\\times5+4\\times7+\\cdots$+20\\times39$',
    answer: '$5530$',
    hasImage: false,
  },
  {
    id: '183664aca9c',
    chapter: '極限',
    question: '試證半徑為 $r$ 的球的體積為 $\\dfrac43\\pi r^3$。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '183664c844d',
    chapter: '極限',
    question: '半徑為 $r$ 之兩球體，互過彼此球心，試求兩球體共同部分之體積。',
    answer: '$\\frac5{12}\\pi r^3$',
    hasImage: false,
  },
];

// 複數與複數平面
const complexNumber: Question[] = [
  {
    id: '17d2b925906',
    chapter: '複數與複數平面',
    question: '$a,b\\in\\mathbb R$，若 $a+b\\sqrt{-4}=(b-5)+a\\sqrt{-9}$，求數對 $(a,b)$。',
    answer: '$(10,15)$',
    hasImage: false,
  },
  {
    id: '17d2b93acd5',
    chapter: '複數與複數平面',
    question:
      '下列各選項的算式哪些正確？\n(1) $\\sqrt{-2}\\cdot\\sqrt{-3}=\\sqrt{(-2)\\cdot(-3)}$\n(2) $\\sqrt2\\cdot\\sqrt{-3}=\\sqrt{2\\cdot(-3)}$\n(3) $\\frac{\\sqrt{-2}}{\\sqrt{-3}}=\\sqrt{\\frac{-2}{-3}}$\n(4) $\\frac{\\sqrt{-2}}{\\sqrt3}=\\sqrt{\\frac{-2}3}$\n(5) $\\frac{\\sqrt2}{\\sqrt{-3}}=\\sqrt{\\frac2{-3}}$',
    answer: '(2)(3)(4)',
    hasImage: false,
  },
  {
    id: '17d2b9473e7',
    chapter: '複數與複數平面',
    question:
      '下列各選項哪些正確？\n(1) $(\\sqrt{-2})^2=(-\\sqrt2)^2$ (2) $(\\sqrt{-2})^4=(-\\sqrt2)^4$\n(3) $3+4i$ 的虛部為 $4i$ (4) $0$ 是複數\n(5) $i<0$ (6) $i^2<0$',
    answer: '(2)(4)(6)',
    hasImage: false,
  },
  {
    id: '17d2b951bed',
    chapter: '複數與複數平面',
    question: '設 $(a+b)+2ai=(3b-5)+(b-7)i$，求實數數對 $(a,b)$。',
    answer: '$(-3,1)$',
    hasImage: false,
  },
  {
    id: '17d2b952ea9',
    chapter: '複數與複數平面',
    question: '化簡 $5(3-2i)-2i(1-4i)+(6+5i)(3+4i)$。',
    answer: '$5+27i$',
    hasImage: false,
  },
  {
    id: '17d2b95dca3',
    chapter: '複數與複數平面',
    question: '化簡 $\\dfrac{9+7i}{\\sqrt{-169}}+\\dfrac{4-3i}{3+2i}$。',
    answer: '$1-2i$',
    hasImage: false,
  },
  {
    id: '17d2b99d26e',
    chapter: '複數與複數平面',
    question: '化簡 $(\\sqrt{3}+i)^3+(1-i)^{10}+i^{3000}$。',
    answer: '$1-24i$',
    hasImage: false,
  },
  {
    id: '17d2b96abaf',
    chapter: '複數與複數平面',
    question:
      '化簡：(1) $\\sqrt{-4}+\\sqrt{-9}\\cdot\\sqrt{-25}+\\sqrt{-6}\\cdot\\sqrt{-10}\\cdot\\sqrt{-15}$\n(2) $(\\sqrt{16}+\\sqrt{-25})(\\sqrt{36}-\\sqrt{-4})$',
    answer: '(1) $-25-28i$ (2) $34+22i$',
    hasImage: false,
  },
  {
    id: '17d2b97df0c',
    chapter: '複數與複數平面',
    question:
      '化簡：(1) $\\dfrac6{\\sqrt{-4}}+\\dfrac{1-\\sqrt{-169}}{\\sqrt{25}+\\sqrt{-9}}$ (2) $\\dfrac3{1+2i}+\\dfrac{4i}{1-2i}$',
    answer: '(1) $-1-5i$ (2) $-1-\\frac25i$',
    hasImage: false,
  },
  {
    id: '17d2b990f22',
    chapter: '複數與複數平面',
    question:
      '化簡：(1) $i+3i^3+5i^5+7i^7+9i^9+11i^{11}$\n(2) $(-1+\\sqrt3i)^3+(\\frac{1+i}{\\sqrt{2}})^{100}$',
    answer: '(1) $-6i$ (2) $7$',
    hasImage: false,
  },
  {
    id: '17d2b9aefe9',
    chapter: '複數與複數平面',
    question: '$x,y\\in\\mathbb R$，且 $\\dfrac{5+10i}{x+yi}+3-2i=7+i$，求數對 $(x,y)$。',
    answer: '$(2,1)$',
    hasImage: false,
  },
  {
    id: '17d2b9be2a7',
    chapter: '複數與複數平面',
    question:
      '設 $z_1$、$z_2$ 為複數，若 $z_1$ 的虛部為 $-2$，$z_2$ 的實部為 $3$，且 $z_1+z_2$ 的虛部為 $-1$，$z_1z_2$ 的實部為 $14$，求 $z_1$ 及 $z_2$。',
    answer: '$4-2i$；$3+i$ ',
    hasImage: false,
  },
  {
    id: '17d2b9c4ee4',
    chapter: '複數與複數平面',
    question: '試解方程式 $2x^2+3x+5=0$。',
    answer: '$\\frac{-3\\pm\\sqrt{31}i}4$',
    hasImage: false,
  },
  {
    id: '17d2b9de70e',
    chapter: '複數與複數平面',
    question:
      '$k\\in\\mathbb R$，方程式 $x^2-(k-2)x+(3k-11)=0$，請問：\n(1) 若有實根，則 $k$ 的範圍為？\n(2) 若有共軛虛根，則 $k$ 的範圍為？\n(3) 若有等根，則 $k$ 的範圍為？',
    answer: '(1) $k\\le4\\lor4\\ge12$ (2) $4<k<12$ (3) $k=4\\lor12$\n',
    hasImage: false,
  },
  {
    id: '17d2b9ef1a4',
    chapter: '複數與複數平面',
    question: '解方程式：(1) $(x^2-2x+5)(x^2-4x+6)=0$ (2) $x^4+6x^2+5=0$',
    answer: '(1) $1\\pm2i\\lor2\\pm\\sqrt{2}i$ (2) $\\pm\\sqrt{5}i\\lor\\pm i$\n',
    hasImage: false,
  },
  {
    id: '17d2ba04e5b',
    chapter: '複數與複數平面',
    question:
      '$k\\in\\mathbb R$，方程式 $3x^2+(k+1)x+(k+1)=0$，請問：\n(1) 若有相異實根，則 $k$ 的範圍為？\n(2) 若有虛根，則 $k$ 的範圍為？',
    answer: '(1) $k<-1\\lor k>11$ (2) $-1<k<11$',
    hasImage: false,
  },
  {
    id: '17d2ba0c1a0',
    chapter: '複數與複數平面',
    question: '實係數多項式 $f(x)$，若 $f(5+3i)=2i-6$，求 $f(5-3i)$。',
    answer: '$-6-2i$',
    hasImage: false,
  },
  {
    id: '17d2ba195c1',
    chapter: '複數與複數平面',
    question: '$a,b\\in\\mathbb R$，若 $1-3i$ 為 $ax^3-4^2+bx+20=0$ 的根，求數對 $(a,b)$。',
    answer: '$(3,26)$',
    hasImage: false,
  },
  {
    id: '17d2ba27dfb',
    chapter: '複數與複數平面',
    question:
      '已知實係數多項式 $f(x)$，若 $f(2-3i)+1-5i=6-2i$，且 $f(1+i)=-5$，試求 $f(2+3i)$ 及 $f(1-i)$。',
    answer: '$5-3i$；$-5$',
    hasImage: false,
  },
  {
    id: '17d2ba3a6cd',
    chapter: '複數與複數平面',
    question:
      '$a,b\\in\\mathbb R$，若 $x^4-5x^3+ax^2+bx-26=0$ 有一根為 $2-3i$，求數對 $(a,b)$ 及另外三根。',
    answer: '$(15,-5)$；$-1,2,2+3i$',
    hasImage: false,
  },
  {
    id: '17d2ba415d6',
    chapter: '複數與複數平面',
    question: '若 $\\alpha$、$\\beta$ 為 $x^2-3x+4=0$ 的兩根，求 $\\alpha^3+\\beta^3$。',
    answer: '$-9$',
    hasImage: false,
  },
  {
    id: '17d2ba4cd4d',
    chapter: '複數與複數平面',
    question:
      '若 $\\alpha$、$\\beta$ 為 $2x^2-6x+1=0$ 的兩根，求 $\\alpha^2+\\beta^2$ 及 $\\alpha^3+\\beta^3$。',
    answer: '$8$；$\\frac{45}2$',
    hasImage: false,
  },
  {
    id: '17d2ba5b546',
    chapter: '複數與複數平面',
    question: '$k\\in\\mathbb C$，若方程式 $x^2+kx+(k+1)=0$ 有一根 $1+2i$，求 $k$ 與另一根。',
    answer: '$\\frac{-1-3i}2$；$\\frac{-1-i}2$',
    hasImage: false,
  },
  {
    id: '17d2ba6bfb2',
    chapter: '複數與複數平面',
    question: '設 $k$ 為複數，若 $x^2+kx+4k-16=0$ 有 $1+i$ 的根，求 $k$ 與另一根。',
    answer: '$3-i$；$-4$',
    hasImage: false,
  },
  {
    id: '17d2ba7b671',
    chapter: '複數與複數平面',
    question:
      '實係數多項式 $f(x)$，已知 $a>b$，下列各選項的敘述哪些正確？\n(1) 若 $f(a)f(b)<0$，則方程式 $f(x)=0$ 在 $a<x<b$ 之間必恰有一實根\n(2) 若 $f(a)f(b)>0$，則方程式 $f(x)=0$ 在 $a<x<b$ 之間必沒有實根\n(3) 若 $f(x)$ 次數為奇數，則方程式 $f(x)=0$ 必有實根\n(4) 若 $f(x)$ 次數為偶數，則方程式 $f(x)=0$ 必有實根\n(5) 若 $f(x)$ 為三次且 $f(i)=0$，則 $f(x)$ 的圖形必與 $x$ 軸恰有一個交點',
    answer: '(3)(5)',
    hasImage: false,
  },
  {
    id: '17cf9bdfa5b',
    chapter: '複數與複數平面',
    question:
      '函數 $y=f(x)$ 的圖形如圖，則方程式 $f(x)+0.001=0$ 的根為何？\n(1) 一正根兩負根 (2) 兩正根一負根 (3) 三正根 (4) 三負根 (5) 一實根兩虛根',
    answer: '(2)',
    hasImage: true,
  },
  {
    id: '17d0dd41754',
    chapter: '複數與複數平面',
    question: '方程式 $x^3+x^2-2x-1=0$ 的實根位於哪些連續整數之間？',
    answer: '$(-2,-1)$、$(-1,0)$、$(1,2)$',
    hasImage: false,
  },
  {
    id: '17d0dd4fb2f',
    chapter: '複數與複數平面',
    question:
      '設 $f(x)=x^3+5x^2+ax+b$，其中 $a,b\\in\\mathbb R$，則下列各選項的敘述哪些不可能成立？\n(1) $f(1)=f(2)=0$ (2) $f(1)=f(2)=f(3)=0$\n(3) $f(1+i)=f(1-i)=0$ (4) $f(1+i)=f(2+i)=0$\n(5) $f(1)f(2)<0$，$f(2)f(3)<0$，$f(3)f(4)<0$ 且 $f(4)f(5)<0$',
    answer: '(2)(4)(5)',
    hasImage: false,
  },
  {
    id: '17d0dd68871',
    chapter: '複數與複數平面',
    question: '在複數平面上標出下列數值，並求出其絕對值：$2-3i$、$-3i$、$-3+\\sqrt{3}i$',
    answer: '$\\sqrt{13}$；$3$；$2\\sqrt{3}$',
    hasImage: false,
  },
  {
    id: '17d0dd709c0',
    chapter: '複數與複數平面',
    question:
      '化簡：(1) $\\left|\\dfrac{(1-5i)(2+2i)}{(-2+3i)(3+4i)}\\right|$ (2) $\\left|\\dfrac{(2+i)^9(1-2i)^{11}}{(3-4i)^7}\\right|$。',
    answer: '(1) $\\frac{4}{5}$ (2) $125$',
    hasImage: false,
  },
  {
    id: '17d0dd7a6ee',
    chapter: '複數與複數平面',
    question: '(1) $|4-5i|$ (2) $|-7+24i|$ (3) $|15+8i|$ (4) $|-1+i|$ (5) $|i|$ (6) $|5i|$。',
    answer: '(1) $\\sqrt{41}$ (2) $25$ (3) $17$ (4) $\\sqrt2$ (5) $1$ (6) $5$',
    hasImage: false,
  },
  {
    id: '17d0dd845c6',
    chapter: '複數與複數平面',
    question:
      '化簡：(1) $\\left|\\dfrac{(3-2i)(1+2i)}{(-12+5i)(2+i)}\\right|$ (2) $\\left|\\dfrac{(3+4i)^9(5+2i)^2}{(7+24i)^5}\\right|$。',
    answer: '(1) $\\frac{\\sqrt{13}}{13}$ (2) $\\frac{29}5$',
    hasImage: false,
  },
  {
    id: '17d0dd8a42b',
    chapter: '複數與複數平面',
    question: '將下列各複式化為極式：\n(1) $-2$ (2) $3i$ (3) $-1+i$ (4) $-1-\\sqrt{3}i$',
    answer:
      '(1) $2(\\cos180\\du+i\\sin180\\du)$ (2) $3(\\cos90\\du+i\\sin90\\du)$ (3) $\\sqrt{2}(\\cos135\\du+i\\sin135\\du)$ (4) $2(cos240\\du+i\\sin240\\du)$',
    hasImage: false,
  },
  {
    id: '17d0ddb4976',
    chapter: '複數與複數平面',
    question: '求下列複數的主幅角及並化為極式：\n(1) $i$ (2) $3-3i$ (3) $\\sqrt{3}+i$',
    answer:
      '(1) $90\\du$；$\\cos90\\du+i\\sin90\\du$ (2) $315\\du$；$3\\sqrt{2}(\\cos315\\du+i\\sin315\\du)$ (3) $30\\du$；$2(cos30\\du+i\\sin30\\du)$',
    hasImage: false,
  },
  {
    id: '17d0ddac896',
    chapter: '複數與複數平面',
    question:
      '下列哪些選項的複數位在複數平面的第四象限內？\n(1) $\\cos100\\du+i\\sin100\\du$ (2) $\\sin100\\du+i\\cos100\\du$\n(3) $\\cos200\\du-i\\sin200\\du$ (4) $-\\cos200\\du+i\\sin200\\du$\n(5) $-\\cos300\\du+i\\sin300\\du$',
    answer: '(2)(4)',
    hasImage: false,
  },
  {
    id: '17d0ddbccb2',
    chapter: '複數與複數平面',
    question:
      '下列哪個選項的複數其主幅角為最大？哪個為最小？\n(1) $\\cos100\\du-i\\sin100\\du$ (2) $\\sin10\\du-i\\cos10\\du$\n(3) $\\cos300\\du+i\\sin300\\du$ (4) $-\\cos200\\du-i\\sin200\\du$\n(5) $-\\cos300\\du+i\\sin300\\du$',
    answer: '(3)；(4)',
    hasImage: false,
  },
  {
    id: '17d0ddc13e2',
    chapter: '複數與複數平面',
    question:
      '化簡 $\\dfrac{(\\cos38\\du+i\\sin38\\du)(\\cos100\\du+i\\sin100\\du)}{\\cos48\\du+i\\sin48\\du}$。',
    answer: '$i$',
    hasImage: false,
  },
  {
    id: '17cfeb06189',
    chapter: '複數與複數平面',
    question:
      '設 $|z_1|=6$，$\\arg(z_1)=10\\du$，$|z_2|=3$，$\\arg(z_2)=130\\du$，求 $\\frac{z_1}{z_2}$。',
    answer: '$-1-\\sqrt{3}i$',
    hasImage: false,
  },
  {
    id: '17d0ddd35fc',
    chapter: '複數與複數平面',
    question:
      '設 $x=\\sin47\\du+i\\cos313\\du$，$y=-\\cos218\\du+i\\sin142\\du$，$z=\\sin111\\du-i\\cos249\\du$，求 $\\frac{xy}z$。',
    answer: '$\\frac12+\\frac{\\sqrt{3}}2i$',
    hasImage: false,
  },
  {
    id: '17d0dddd143',
    chapter: '複數與複數平面',
    question:
      '設 $|z_1|=2$，$\\arg(z_1)=77\\du$，$|z_2|=\\frac13$，$\\arg(z_2)=212\\du$，求 $\\frac{z_1}{z_2}$。',
    answer: '$-3\\sqrt2-3\\sqrt2i$',
    hasImage: false,
  },
  {
    id: '17d0dde7847',
    chapter: '複數與複數平面',
    question:
      '把點 $(6,-4)$ 繞原點，求：\n(1) 逆時針旋轉 $60\\du$，新位置的坐標\n(2) 順時針旋轉 $90\\du$，新位置的坐標',
    answer: '(1) $(3+2\\sqrt3,3\\sqrt3-2)$ (2) $(-4,-6)$',
    hasImage: false,
  },
  {
    id: '17d0ddf5f87',
    chapter: '複數與複數平面',
    question:
      '若角度 $\\theta$ 滿足 $(3-4i)(\\cos\\theta+i\\sin\\theta)<0$，則 $\\theta$ 的範圍為下列哪一個選項？\n(1) $\\frac\\pi2\\le\\theta<\\frac{3\\pi}4$ (2) $\\frac{3\\pi}4\\le\\theta<\\pi$\n(3) $\\pi\\le\\theta<\\frac{5\\pi}4$ (4) $\\frac{5\\pi}4\\le\\theta<\\frac{3\\pi}2$\n(5) $\\frac{3\\pi}2\\le\\theta<\\frac{7\\pi}4$',
    answer: '(4)',
    hasImage: false,
  },
  {
    id: '17d0de005d2',
    chapter: '複數與複數平面',
    question:
      '把點 $(2,3)$ 繞原點，求：\n(1) 逆時針旋轉 $60\\du$，新位置的坐標\n(2) 順時針旋轉 $90\\du$，新位置的坐標',
    answer: '(1) $(1-\\frac{3\\sqrt{3}}2,\\frac32+\\sqrt3)$ (2) $(3,-2)$',
    hasImage: false,
  },
  {
    id: '17d0de08a83',
    chapter: '複數與複數平面',
    question: '已知正三角形的其中兩頂點坐標為 $(0,0)$ 與 $(2,-6)$，試求另一個頂點坐標。',
    answer: '$(1+3\\sqrt3,-3+\\sqrt3)$ 或 $(1-3\\sqrt3,-3-\\sqrt3)$',
    hasImage: false,
  },
  {
    id: '17cfec72ce3',
    chapter: '複數與複數平面',
    question: '設 $z=2(\\cos100\\du+i\\sin100\\du)$，求 $z^9$。',
    answer: '$-512$',
    hasImage: false,
  },
  {
    id: '17d0de14d86',
    chapter: '複數與複數平面',
    question: '$n\\in\\mathbb N$，若 $(-\\sqrt3+i)^n$ 為正實數，求最小的 $n$ 值。',
    answer: '$12$',
    hasImage: false,
  },
  {
    id: '17d0de20357',
    chapter: '複數與複數平面',
    question: '若 $z=\\sqrt[3]5(\\cos50\\du+i\\sin50\\du)$，求 $z^6$ 及 $z^9$。',
    answer: '$\\frac{25-25\\sqrt{3}i}2$；$125i$',
    hasImage: false,
  },
  {
    id: '17d0de2a10e',
    chapter: '複數與複數平面',
    question:
      '設 $z=\\sin15\\du+i\\cos15\\du$，$n\\in\\mathbb N$，若 $z^n\\in\\mathbb R$，求 $n$ 的最小值。',
    answer: '$12$',
    hasImage: false,
  },
  {
    id: '17d03c4336f',
    chapter: '複數與複數平面',
    question: '「$-16$ 的平方根」即 $x^2=-16$ 的兩根，求 $x$。',
    answer: '$\\pm4i$',
    hasImage: false,
  },
  {
    id: '17d0de37b82',
    chapter: '複數與複數平面',
    question: '試求：(1) $7(\\cos140\\du+i\\sin140\\du)$ 的平方根\n(2) $-8+8\\sqrt3i$ 的平方根。',
    answer: '(1) $\\pm\\sqrt7(\\cos70\\du+i\\sin70\\du)$ (2) $\\pm(2+2\\sqrt3i)$',
    hasImage: false,
  },
  {
    id: '17d0de3faec',
    chapter: '複數與複數平面',
    question: '試求：(1) $5-12i$ 的平方根\n(2) $x^2-2(1+i)x-5+14i=0$ 之解',
    answer: '(1) $\\pm(3-2i)$ (2) $4-i$ 或 $-2+3i$',
    hasImage: false,
  },
  {
    id: '17d0de488d4',
    chapter: '複數與複數平面',
    question: '若 $z$ 的平方根為 $3+ai$ 與 $b-5i$，其中 $a,b\\in\\mathbb R$，求數對 $(a,b)$。',
    answer: '$(5,3)$',
    hasImage: false,
  },
  {
    id: '17d0de4d9ea',
    chapter: '複數與複數平面',
    question:
      '試求：(1) $9(\\cos20\\du+i\\sin20\\du)$ 的平方根\n(2) $-4(\\cos160\\du+i\\sin160\\du)$ 的平方根。',
    answer: '(1) $\\pm3(\\cos10\\du+i\\sin10\\du)$ (2) $\\pm2(\\cos170\\du+i\\sin170\\du)$',
    hasImage: false,
  },
  {
    id: '17d07e2b290',
    chapter: '複數與複數平面',
    question: '試求 $3+4i$ 的平方根。',
    answer: '$\\pm(2+i)$',
    hasImage: false,
  },
  {
    id: '17d0de7379e',
    chapter: '複數與複數平面',
    question:
      '解 $x^3=1$，並令主幅角最小的虛根為 $\\omega$，則：\n(1) 求 $\\omega$、$\\omega^2$\n(2) 求 $\\omega^2+\\omega+1$\n(3) 求 $(1-2\\omega+\\omega^2)(1+\\omega+3\\omega^2)$\n(4) $a,b\\in\\mathbb R$，若 $3\\omega^2+a\\omega+5=7\\omega+b$，求數對 $(a,b)$。',
    answer: '(1) $\\frac{-1+\\sqrt3i}2$；$\\frac{-1-\\sqrt3i}2$ (2) $0$ (3) $-6$ (4) $(10,2)$',
    hasImage: false,
  },
  {
    id: '17d0de86982',
    chapter: '複數與複數平面',
    question:
      '設 $\\omega=\\cos\\frac{2\\pi}{5}+i\\sin\\frac{2\\pi}{5}$，即為 $x^5=1$ 的一虛根，求：\n(1) $\\omega^{63}+\\omega^{64}+\\omega^{65}+\\cdots+\\omega^{202}$\n(2) $\\frac{\\omega^3}{1+\\omega^6}+\\frac{\\omega^4}{1+\\omega^8}$\n(3) $(2-\\omega)(2-\\omega^2)(2-\\omega^3)(2-\\omega^4)$',
    answer: '(1) $0$ (2) $1$ (3) $31$',
    hasImage: false,
  },
  {
    id: '17d0de8a8d9',
    chapter: '複數與複數平面',
    question:
      '若 $\\omega=\\frac{-1+\\sqrt3i}2$，求 $(\\omega^2+\\omega-3)(\\omega^2+2\\omega+1)(5\\omega^2+2\\omega+2)$。',
    answer: '$-12$',
    hasImage: false,
  },
  {
    id: '17d0de953a5',
    chapter: '複數與複數平面',
    question:
      '若 $\\omega=\\cos\\frac{2\\pi}5+i\\sin\\frac{2\\pi}5$，求：\n(1) $\\omega^{10}+\\omega^{11}+\\omega^{12}+\\cdots+\\omega^{2000}$\n(2) $(1-\\omega)(1-\\omega^2)(1-\\omega^3)(1-\\omega^4)$',
    answer: '(1) $1$ (2) $5$',
    hasImage: false,
  },
  {
    id: '17d0de980a9',
    chapter: '複數與複數平面',
    question: '寫出 $x^6=64(\\cos78\\du+i\\sin78\\du)$ 的六個根，並在複數平面上標出。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17d0dea4c51',
    chapter: '複數與複數平面',
    question: '$a,b\\in\\mathbb R$，$a+bi$ 為 $-8i$ 的立方根，且 $a<0$，求數對 $(a,b)$。',
    answer: '$(-\\sqrt3,-1)$',
    hasImage: false,
  },
  {
    id: '17d0dec517e',
    chapter: '複數與複數平面',
    question:
      '$z\\in\\mathbb C$，若 $|z|=16$，在複數平面上，$z$ 的八次方根連成一多邊形，求其面積及周長。',
    answer: '$4\\sqrt2$；$8\\sqrt{4-2\\sqrt2}$',
    hasImage: false,
  },
  {
    id: '17d2be43830',
    chapter: '複數與複數平面',
    question: '寫出 $81(\\cos172\\du+i\\sin172\\du)$ 的四次方根。',
    answer: '略',
    hasImage: false,
  },
  {
    id: '17d51596ee9',
    chapter: '複數與複數平面',
    question:
      '在複數平面上，描繪出 $z^6=4-4\\sqrt3i$ 的各根所在位置，連接各點成一正六邊形，則下列各敘述哪些正確？\n(1) 此六個頂點中有兩個點在第二象限\n(2) 此六個頂點的 $x$ 坐標總和為 $0$\n(3) 此正六邊形的周長為 $6\\sqrt2$\n(4) 此正六邊形的面積為 $3\\sqrt3$',
    answer: '(1)(2)(3)(4)',
    hasImage: false,
  },
];

// 二次曲線
const conicSection: Question[] = [
  {
    id: '17d515a3259',
    chapter: '二次曲線',
    question:
      '圖中為以 $O$ 為圓心且半徑分別為 $1,2,3,\\cdots$ 的同心圓，已知有多組平行線與這些同心圓相切，試問下列哪些點與 $P$ 點均在以 $O$ 點為焦點且開口向上的拋物線上？\n(1) $A$ (2) $B$ (3) $C$ (4) $D$ (5) $E$',
    answer: '(1)(3)',
    hasImage: true,
  },
  {
    id: '17d515af5e6',
    chapter: '二次曲線',
    question:
      '如圖為一拋物線的部分圖形，且 $A$、$B$、$C$、$D$、$E$ 五個點中有一為其焦點。試判斷哪一點是其焦點？',
    answer: '$C$',
    hasImage: true,
  },
  {
    id: '17d515ba542',
    chapter: '二次曲線',
    question:
      '拋物線 $\\Gamma$ 的焦點為 $F$，頂點為 $V$，焦距為 $3$，設點 $P$ 在 $\\Gamma$ 上，點 $Q$ 在準線上，$\\overline{PQ}\\parallel\\overline{VF}$ 且 $PQVF$ 為等腰梯形，求 $PQVF$ 的面積。',
    answer: '$36\\sqrt2$',
    hasImage: false,
  },
  {
    id: '17d515c6e63',
    chapter: '二次曲線',
    question:
      '平面上拋物線 $\\Gamma：x^2=8y$ 的頂點為 $V$，焦點為 $F$，$\\Gamma$ 上有一點 $P$，設 $\\overline{PF}=a$，$P$ 到直線 $L:y=-5$ 的距離為 $b$，若 $a:b=3:4$，求 $\\overline{PV}$。',
    answer: '$\\sqrt{105}$',
    hasImage: false,
  },
  {
    id: '17d515deeef',
    chapter: '二次曲線',
    question:
      '衛星電視的收訊天線小耳朵，是一個由拋物線繞軸旋轉而成的拋物面鏡，經皮尺測量得知其口徑為 $120$ 公分，深度為 $20$ 公分，則此拋物面鏡的焦距為幾公分？',
    answer: '$45$',
    hasImage: false,
  },
  {
    id: '17d515db19f',
    chapter: '二次曲線',
    question:
      '河面上有拋物線形的拱橋銜接兩岸，橋下河寬原為 $20$ 公尺，拱橋高為 $6$ 公尺，現河面因枯水期下降了 $3$ 公尺，則河面寬度變為幾公尺？',
    answer: '$10\\sqrt6$',
    hasImage: false,
  },
  {
    id: '17d515e567f',
    chapter: '二次曲線',
    question:
      '坐標平面上有一以點 $V(0,3)$ 為頂點、$F(0,6)$ 為焦點的拋物線。設 $P(a,b)$ 為此拋物線上的一點，$Q(a,0)$ 為 $P$ 在 $x$ 軸上的投影，滿足 $\\angle FPQ=60\\du$，求 $b$。',
    answer: '$12$',
    hasImage: false,
  },
  {
    id: '17d515f87ce',
    chapter: '二次曲線',
    question:
      '點 $A(6,5)$，拋物線 $\\Gamma:y^2=16x$ 的焦點為 $F$，$\\Gamma$ 上有動點 $P$，求 $\\overline{PA}+\\overline{PF}$ 的最小值及此時的 $P$ 點坐標。',
    answer: '$10$；$(\\frac{25}{16},5)$',
    hasImage: false,
  },
  {
    id: '17d5161dedb',
    chapter: '二次曲線',
    question:
      '平面上有一拋物線以 $V(0,0)$ 為頂點，$F(0,4)$ 為焦點，$P$ 在拋物線上且在第一象限，$P$ 投影到 $x$ 軸為 $Q$，滿足 $\\angle VPQ=30\\du$，求 $P$ 坐標。',
    answer: '$(16\\sqrt3,48)$',
    hasImage: false,
  },
  {
    id: '17d516370cd',
    chapter: '二次曲線',
    question:
      '拋物線 $y^2=12x$ 上有動點 $P$，求 $P$ 到焦點與點 $(9,7)$ 的距離和之最小值及此時的 $P$ 點坐標。',
    answer: '$12$；$(\\frac{49}{12},7)$',
    hasImage: false,
  },
  {
    id: '17d6026140a',
    chapter: '二次曲線',
    question: '平面上動圓通過點 $A(3,5)$，且與直線 $L:x=-7$ 相切，求動圓的圓心軌跡方程式。',
    answer: '$(y-5)^2=20(x+2)$',
    hasImage: true,
  },
  {
    id: '17d6026e50e',
    chapter: '二次曲線',
    question:
      '坐標平面上，有一動圓與圓 $(x-3)^2+y^2=1$ 相外切，並與直線 $L:x=-2$ 相切，求此動圓的圓心軌跡方程式。',
    answer: '$y^2=12x$',
    hasImage: true,
  },
  {
    id: '17d602751b2',
    chapter: '二次曲線',
    question: '已知動圓過點 $A(1,-4)$，且與直線 $L:y=8$ 相切，試求動圓的圓心軌跡方程式。',
    answer: '$(x-1)^2=-24(y-2)$',
    hasImage: false,
  },
  {
    id: '17d60278096',
    chapter: '二次曲線',
    question:
      '坐標平面上，一動圓與一圓 $x^2+y^2+4x-2y-4=0$ 相內切，並與直線 $y=-6$ 相切，求此動圓的圓心軌跡方程式。',
    answer: '$(x+2)^2=8(y+1)$',
    hasImage: false,
  },
  {
    id: '17d6028288d',
    chapter: '二次曲線',
    question: '拋物線以 $x=4$ 為軸，焦距為 $2$，且 $y$ 軸截距為 $-1$，求方程式。',
    answer: '$(x-4)^2=8(y+3)\\lor(x-4)^2=-8(y-1)$',
    hasImage: false,
  },
  {
    id: '17d6028e107',
    chapter: '二次曲線',
    question: '在平面上，試求過 $A(1,6)$ 且與拋物線 $-8x=y^2+4y+28$ 共軸、共焦點的拋物線方程式。',
    answer: '$(y+2)^2=8(x+7)\\lor(y+2)^2=-32(x-3)$',
    hasImage: false,
  },
  {
    id: '17d2e8c7444',
    chapter: '二次曲線',
    question: '若拋物線以 $x=-2$ 為對稱軸，並且過兩點 $A(1,10)$ 與 $B(0,-5)$，求拋物線方程式。',
    answer: '$y=3(x+2)^2-17$',
    hasImage: false,
  },
  {
    id: '17d60298be0',
    chapter: '二次曲線',
    question:
      '已知一拋物線過點 $(2,1)$，且與另一拋物線 $(x+2)^2=-4(y+1)$ 共軸、共焦點，求此拋物線方程式。',
    answer: '$(x+2)^2=4(y+3)\\lor(x+2)^2=-16(y-2)$',
    hasImage: false,
  },
  {
    id: '17d602a4c54',
    chapter: '二次曲線',
    question:
      '設橢圓 $\\Gamma$ 的焦點為 $F_1、F_2$，點 $A$、$B$ 在 $\\Gamma$ 上且 $F_1$ 在 $\\overline{AB}$ 上，若 $\\triangle ABF_2$ 的周長為 $10$，求 $\\Gamma$ 的長軸長。',
    answer: '$5$',
    hasImage: false,
  },
  {
    id: '17d602ad136',
    chapter: '二次曲線',
    question: '將橢圓放置在方格紙中，如圖，長軸與短軸均平形格線，請利用尺規標示出焦點的位置。',
    answer: '略',
    hasImage: true,
  },
  {
    id: '17d602b8608',
    chapter: '二次曲線',
    question:
      '設 $\\frac{x^2}{3-t^2}+\\frac{y^2}{t+1}=1$ 表示：\n(1) 長軸平行 $x$ 軸的橢圓，求 $t$ 的範圍\n(2) 長軸平行 $y$ 軸的橢圓，求 $t$ 的範圍',
    answer: '(1) $-1<t<1$ (2) $1<t<\\sqrt3$',
    hasImage: false,
  },
  {
    id: '17d602c02e9',
    chapter: '二次曲線',
    question: '若實數 $k$ 使 $\\frac{x^2}{k-1}+\\frac{y^2}{5-2k}=1$ 的圖形為橢圓，求 $k$ 的範圍。',
    answer: '$1<k<\\frac52$ 且 $k\\ne2$',
    hasImage: false,
  },
  {
    id: '17d602e320e',
    chapter: '二次曲線',
    question:
      '方程式 $\\sqrt{(x-1)^2+(y-1)^2}+\\sqrt{(x-5)^2+(y-4)^2}=k$：\n(1) 若其圖形為橢圓，求 $k$ 的範圍\n(2) 若其圖形為一線段，求 $k$\n(3) 若此方程式無圖形，求 $k$ 的範圍',
    answer: '(1) $k>5$ (2) $5$ (3) $k<5$',
    hasImage: false,
  },
  {
    id: '17d602cd8e6',
    chapter: '二次曲線',
    question:
      '方程式 $x^2+2y^2+6x-8y+k=0$：\n(1) 若為橢圓，求 $k$ 的範圍\n(2) 若為一點，求 $k$\n(3) 若為無圖形，求 $k$ 的範圍',
    answer: '(1) $k<17$ (2) $17$ (3) $k>17$',
    hasImage: false,
  },
  {
    id: '17d602e0509',
    chapter: '二次曲線',
    question:
      '方程式 $\\sqrt{(x+3)^2+(y-2)^2}+\\sqrt{(x+2)^2+(y+5)^2}=k$：\n(1) 若圖形為橢圓，求 $k$ 的範圍\n(2) 若圖形為一線段，求 $k$\n(3) 若此方程式無圖形，求 $k$ 的範圍',
    answer: '(1) $k>5\\sqrt2$ (2) $5\\sqrt2$ (3) $k<5\\sqrt2$',
    hasImage: false,
  },
  {
    id: '17d602de014',
    chapter: '二次曲線',
    question:
      '方程式 $3x^2+2y^2-12x+12y+k=0$：\n(1) 若為橢圓，求 $k$ 的範圍\n(2) 若為一點，求 $k$\n(3) 若為無圖形，求 $k$ 的範圍',
    answer: '(1) $k<30$ (2) $30$ (3) $k>30$',
    hasImage: false,
  },
  {
    id: '17d602edb02',
    chapter: '二次曲線',
    question:
      '一半橢圓形建築物如圖，$\\overline{AB}=16$ 公尺，$\\overline{OM}=6$ 公尺，有一橫樑 $\\overline{PQ}=8$ 公尺，求此橫樑到地面的距離 $\\overline{CO}$。',
    answer: '$3\\sqrt3$ 公尺',
    hasImage: true,
  },
  {
    id: '17d602f6446',
    chapter: '二次曲線',
    question:
      '已知 $P$ 點在橢圓 $4x^2+25y^2=100$ 上，且橢圓兩焦點為 $F_1、F_2$，求 $\\triangle PF_1F_2$ 周長。',
    answer: '$10+2\\sqrt{21}$',
    hasImage: false,
  },
  {
    id: '17d60305fd1',
    chapter: '二次曲線',
    question:
      '已知橢圓 $\\frac{x^2}{16}+\\frac{y^2}9=1$ 上有一點 $P$，且兩焦點為 $F_1$ 與 $F_2$，若 $\\angle F_1PF_2=60\\du$，求 $\\triangle F_1PF_2$ 的面積及中心 $O$ 到 $P$ 的距離。',
    answer: '$3\\sqrt3$；$\\sqrt{13}$',
    hasImage: true,
  },
  {
    id: '17d603131b4',
    chapter: '二次曲線',
    question:
      '設 $\\frac{x^2}{25}+\\frac{y^2}k=1$ 是一橢圓，焦點為 $F_1、F_2$。若 $A、B$ 為橢圓上相異兩點，$F_1$ 在線段 $\\overline{AB}$ 上，且 $\\triangle ABF_2$ 的周長為 $32$，求 $k$。',
    answer: '$64$',
    hasImage: false,
  },
  {
    id: '17d6031c77e',
    chapter: '二次曲線',
    question: '已知橢圓的長軸平行 $x$ 軸，其中兩頂點為 $(2,-1)$ 與 $(-3,-4)$，求橢圓方程式。',
    answer: '$\\frac{(x-2)^2}{25}+\\frac{(y+4)^2}9=1\\lor\\frac{(x+3)^2}{25}+\\frac{(y+1)^2}9=1$',
    hasImage: false,
  },
  {
    id: '17d3c473715',
    chapter: '二次曲線',
    question:
      '橢圓 $\\Gamma$ 的中心為原點，長軸與短軸均在坐標軸上，且橢圓 $\\Gamma$ 通過 $A(1,3)、B(2,-1)$ 兩點，求橢圓 $\\Gamma$ 的方程式。',
    answer: '$\\frac{8x^2}{35}+\\frac{3y^2}{35}=1$',
    hasImage: false,
  },
  {
    id: '17d60329bd7',
    chapter: '二次曲線',
    question:
      '已知橢圓 $\\Gamma$ 通過點 $(3,2)$，且與另一橢圓 $\\frac{x^2}9+\\frac{y^2}4=1$ 共焦點，求橢圓 $\\Gamma$ 的方程式。',
    answer: '$\\frac{x^2}{15}+\\frac{y^2}{10}=1$',
    hasImage: false,
  },
  {
    id: '17d60331d6d',
    chapter: '二次曲線',
    question:
      '已知橢圓的焦點為 $(-1,1)$、$(7,1)$，短軸的兩端點分別為 $(3,5)$、$(3,-3)$，求橢圓方程式。',
    answer: '$\\frac{(x-3)^2}{32}+\\frac{(y-1)^2}{16}=1$',
    hasImage: false,
  },
  {
    id: '17d6033bd4d',
    chapter: '二次曲線',
    question:
      '在坐標平面上，有兩點 $F_1(k,0)$ 與 $F_2(-k,0)$，其中 $k>0$，若點 $P(2,3)$ 到 $F_1、F_2$ 的距離和為 $m$，點 $Q(-4,1)$ 到 $F_1、F_2$ 的距離和也為 $m$，求 $k$ 及 $m$。',
    answer: '$\\frac{\\sqrt{210}}6$；$\\sqrt{70}$',
    hasImage: false,
  },
  {
    id: '17d603479c3',
    chapter: '二次曲線',
    question:
      '已知橢圓過點 $(1,3)$，且與另一橢圓 $\\frac{(x-3)^2}{16}+\\frac{(y-2)^2}{10}=1$ 共焦點，試求其方程式。',
    answer: '$\\frac{(x-3)^2}8+\\frac{(y-2)^2}2=1$',
    hasImage: false,
  },
  {
    id: '17d6034d51c',
    chapter: '二次曲線',
    question:
      '已知點 $P$ 到 $(-1,2)$ 的距離等於到 $x=6$ 距離的 $\\frac12$ 倍，試求動點 $P$ 的軌跡方程式。',
    answer: '$3x^2+4y^2+20x-16y-16=0$',
    hasImage: false,
  },
  {
    id: '17d60356b93',
    chapter: '二次曲線',
    question:
      '設動圓 $C$ 與定圓 $C_1:(x-1)^2+y^2=1$ 外切，且與定圓 $C_2:(x+1)^2+y^2=16$ 相內切，求 $C$ 的圓心軌跡方程式。',
    answer: '$\\frac{4x^2}{25}+\\frac{4y^2}{21}=1$',
    hasImage: true,
  },
  {
    id: '17d4c2c148a',
    chapter: '二次曲線',
    question:
      '動點 $P$ 到 $(3,5)$ 的距離為到直線 $y=2$ 的距離的 $\\frac23$ 倍，求動點 $P$ 所成的軌跡方程式。',
    answer: '$9x^2+5y^2-54x-74y+290=0$',
    hasImage: false,
  },
  {
    id: '17d4c2e8bca',
    chapter: '二次曲線',
    question:
      '設動圓 $C$ 與兩定圓 $C_1:x^2+y^2=1$、$C_2:x^2+(y-2)^2=25$ 相切，則：\n(1) 若 $C$ 與 $C_1$ 外切，求 $C$ 的圓心軌跡方程式。\n(2) 若 $C$ 與 $C_1$ 內切，求 $C$ 的圓心軌跡方程式。',
    answer: '(1) $\\frac{x^2}8+\\frac{(y-1)^2}9=1$ (2) $\\frac{x^2}3+\\frac{(y-1)^2}4=1$',
    hasImage: false,
  },
  {
    id: '17d4c2e571f',
    chapter: '二次曲線',
    question:
      '兩組同心圓以 $F_1$、$F_2$ 為圓心，半徑為 $1,2,3,\\cdots$，作圖如附圖所示。若 $P$ 點落在以 $F_1$、$F_2$ 為焦點的雙曲線上，請問下列哪些點也落在同一組雙曲線上？\n(1) $A$ (2) $B$ (3) $C$ (4) $D$ (5) $E$',
    answer: '(2)(4)',
    hasImage: true,
  },
  {
    id: '17d4c2efc9d',
    chapter: '二次曲線',
    question:
      ' 圖中有五個曲線，哪一個是以 $F$ 為焦點、$V$ 為頂點、$O$ 為中心的雙曲線？\n(1) $\\Gamma_1$ (2) $\\Gamma_2$ (3) $\\Gamma_3$ (4) $\\Gamma_4$ (5) $\\Gamma_5$',
    answer: '(1)',
    hasImage: true,
  },
  {
    id: '17d4c30598d',
    chapter: '二次曲線',
    question:
      '方程式 $|\\sqrt{(x-1)^2+(y-1)^2}-\\sqrt{(x-5)^2+(y-4)^2}|=k$ 的圖形。\n(1) 若為雙曲線，求 $k$ 的範圍\n(2) 若為兩射線，求 $k$\n(3) 若為一直線，求 $k$\n(4) 若為無圖形，求 $k$ 的範圍',
    answer: '(1) $0<k<5$ (2) $5$ (3) $0$ (4) $k<0\\lor k>5$',
    hasImage: false,
  },
  {
    id: '17d4c322901',
    chapter: '二次曲線',
    question:
      '平面上兩定點 $A(2,-3)$ 與 $B(7,9)$，求動點 $P$ 軌跡所成之圖形名稱：\n(1) $|\\overline{PA}-\\overline{PB}|=10$\n(2) $\\overline{PA}-\\overline{PB}=10$\n(3) $|\\overline{PA}-\\overline{PB}|=13$\n(4) $\\overline{PA}-\\overline{PB}=13$\n(5) $|\\overline{PA}-\\overline{PB}|=15$',
    answer: '(1) 雙曲線 (2) 雙曲線的一側 (3) 兩射線 (4) 一射線 (5) 無圖形',
    hasImage: false,
  },
  {
    id: '17d4c33255e',
    chapter: '二次曲線',
    question:
      '平面上兩定點 $A(3,-2)$ 與 $B(8,10)$，動點 $P$，令 $\\Gamma$ 為 $|\\overline{PA}-\\overline{PB}|=k$，$k>0$ 的圖形，則：\n(1) 若 $\\Gamma$ 為雙曲線，求 $k$ 的範圍\n(2) 若 $\\Gamma$ 為兩射線，求 $k$\n(3) 若此方程式無形，求 $k$ 的範圍',
    answer: '(1) $0<k<13$ (2) $13$ (3) $k>13$',
    hasImage: false,
  },
  {
    id: '17d4c3442e9',
    chapter: '二次曲線',
    question:
      '平面上兩定點 $A$ 與 $B$，$\\overline{AB}=4$，求動點 $P$ 軌跡所成之圖形名稱：\n(1) $|\\overline{PA}-\\overline{PB}|=3$\n(2) $\\overline{PA}-\\overline{PB}=4$\n(3) $|\\overline{PA}-\\overline{PB}|=4$\n(4) $\\overline{PA}-\\overline{PB}=5$',
    answer: '(1) 雙曲線 (2) 一射線 (3) 兩射線 (4) 無圖形',
    hasImage: false,
  },
  {
    id: '17d4c34d1ba',
    chapter: '二次曲線',
    question: '求雙曲線 $x^2-2x-4y^2-8y+1=0$ 上點 $(1+\\sqrt5,\\frac12$) 到兩漸近線的距離乘積。',
    answer: '$\\frac45$',
    hasImage: false,
  },
  {
    id: '17d4c3550b7',
    chapter: '二次曲線',
    question:
      '設 $k>0$，若 $\\frac{x^2}k-\\frac{y^2}{k+3}=1$ 上某一點 $P$ 到兩漸近線的距離乘積為 $2$，求 $k$。',
    answer: '$3$',
    hasImage: false,
  },
  {
    id: '17d4c35dc87',
    chapter: '二次曲線',
    question:
      '若雙曲線 $\\frac{x^2}{k+3}+\\frac{y^2}{13-k}=1$ 與橢圓 $\\frac{x^2}{21}+\\frac{y^2}{45}=1$ 共焦點，求 $k$。',
    answer: '$-7$',
    hasImage: false,
  },
  {
    id: '17d4c367c9e',
    chapter: '二次曲線',
    question:
      '已知雙曲線 $\\frac{x^2}9-\\frac{y^2}4=1$ 上有一點 $P$，兩焦點 $F_1$ 與 $F_2$，若 $\\overline{PF_1}:\\overline{PF_2}=5:2$，試求 $\\cos\\angle F_1PF_2$。',
    answer: '$\\frac45$',
    hasImage: false,
  },
  {
    id: '17d4c36e955',
    chapter: '二次曲線',
    question:
      '設 $k$ 為常數，若方程式 $\\frac{x^2}{k^2+1}+\\frac{y^2}{7-k}=1$ 表一橢圓，且與雙曲線 $\\frac{x^2}{75}-\\frac{y^2}9=1$ 有相同的焦點，求 $k$。',
    answer: '$-10$',
    hasImage: false,
  },
  {
    id: '17d4c3807a0',
    chapter: '二次曲線',
    question:
      '設 $A,B>0$，$F_1$ 與 $F_2$ 為雙曲線 $\\frac{x^2}A-\\frac{y^2}B$ 的兩焦點，若 $P$ 為雙曲線上的一點，且滿足 $\\overline{PF_2}=2\\overline{PF_1}=8$，$\\angle F_1PF_2=60\\du$，求數對 $(A,B)$。',
    answer: '$(4,8)$',
    hasImage: false,
  },
  {
    id: '17d4c38ff16',
    chapter: '二次曲線',
    question: '已知雙曲線的焦點為 $A(1,3)$、$B(1,-1)$，且過點 $P(4,-1)$，求此雙曲線方程式。',
    answer: '$\\frac{(x-1)^2}3-(y-1)^2=-1$',
    hasImage: false,
  },
  {
    id: '17d61c6bd9c',
    chapter: '二次曲線',
    question:
      '已知雙曲線與橢圓 $\\frac{(x-1)^2}9+\\frac{(y+2)^2}4=1$ 共焦點，且貫軸長為 $4$，試求其方程式。',
    answer: '$\\frac{(x-1)^2}4-(y+2)^2=-1$',
    hasImage: false,
  },
  {
    id: '17d61c767be',
    chapter: '二次曲線',
    question:
      '一雙曲線中心 $(1,-1)$，貫軸在 $y+1=0$ 上，正焦弦長為 $4$，且兩焦點間的距離為 $2\\sqrt{15}$，求此雙曲線方程式。',
    answer: '$\\frac{(x-1)^2}9-\\frac{(y+1)^2}6=1$',
    hasImage: false,
  },
  {
    id: '17d61c7ef55',
    chapter: '二次曲線',
    question:
      '(1) 已知貫軸長為 $6$，兩焦點為 $(\\pm7,3)$，求雙曲線方程式。\n(2) 雙曲線的頂點為 $(1,\\pm5)$，焦距為 $18$，求方程式。',
    answer: '(1) $\\frac{x^2}9-\\frac{(y-3)^2}{40}=1$ (2) $\\frac{(x-1)^2}{56}-\\frac{y^2}{25}=-1$',
    hasImage: false,
  },
  {
    id: '17d61c89ff8',
    chapter: '二次曲線',
    question:
      '設雙曲線過點 $(\\sqrt6,1)$，與橢圓 $\\frac{x^2}4+\\frac{3y^2}4=1$ 共頂點，且焦點共線，求此雙曲線方程式。',
    answer: '$\\frac{x^2}4-\\frac{y^2}2=1$',
    hasImage: false,
  },
  {
    id: '17d61df9d82',
    chapter: '二次曲線',
    question:
      '雙曲線 $\\Gamma$ 的貫軸在 $y=2$ 上，共軛軸在 $x=1$ 上，且貫軸長大於共軛軸長，若以貫軸端點及共軛軸端點連成菱形，該菱形的周長為 $20$，菱形的面積為 $24$，試求 $\\Gamma$ 的方程式。',
    answer: '$\\frac{(x-1)^2}{16}-\\frac{(y-2)^2}9=1$',
    hasImage: false,
  },
  {
    id: '17d61dfdb7d',
    chapter: '二次曲線',
    question:
      '已知雙曲線的兩頂點為 $(3,-3)$ 與 $(3,5)$，其中一條漸近線的斜率為 $\\frac23$，求其方程式。',
    answer: '$\\frac{(x-3)^2}{36}-\\frac{(y-1)^2}{16}=-1$',
    hasImage: false,
  },
  {
    id: '17d615cf22c',
    chapter: '二次曲線',
    question:
      '已知雙曲線的兩條漸近線為 $x+2y=4$ 與 $x-2y=10$，且通過點 $(-1,3)$， 試求此雙曲線方程式。',
    answer: '$(x+2y-4)(x-2y-10)=-17$',
    hasImage: false,
  },
  {
    id: '17d61e0b3f1',
    chapter: '二次曲線',
    question:
      '已知雙曲線的兩頂點分別為 $(2,-1)$ 與 $(2,7)$，其中一條漸近線的斜率為 $2$，求此雙曲線方程式。',
    answer: '$\\frac{(x-2)^2}4-\\frac{(y-3)^2}{16}=-1$',
    hasImage: false,
  },
  {
    id: '17d61e0d7df',
    chapter: '二次曲線',
    question:
      '已知有一雙曲線，其漸近線為 $2x+3y=-1$ 與 $2x-3y=-7$，且有一個焦點為 $(3,1)$，求此雙曲線方程式。',
    answer: '$\\frac{13(x+2)^2}{225}-\\frac{13(y-1)^2}{100}=1$',
    hasImage: false,
  },
  {
    id: '17d616c2c0d',
    chapter: '二次曲線',
    question:
      '動點 $P$ 到 $(-1,2)$ 的距離，為到直線 $x=5$ 距離的 $2$ 倍，求動點 $P$ 所成的軌跡方程式。',
    answer: '$-3x^2+y^2+42x-4y-95=0$',
    hasImage: false,
  },
  {
    id: '17d61e29810',
    chapter: '二次曲線',
    question:
      '二定圓 $C_1:(x-4)^2+y^2=9$、$C_2:(x+2)^2+y^2=1$，若動圓 $C$ 與 $C_1$、$C_2$ 均外切或均內切時，求 $C$ 圓心的軌跡方程式。',
    answer: '$(x-1)^2-\\frac{y^2}8=1$',
    hasImage: true,
  },
  {
    id: '17d617299ca',
    chapter: '二次曲線',
    question:
      '動點 $P$ 到 $(1,2)$ 的距離等於到直線 $y=6$ 距離的 $2$ 倍，求動點 $P$ 所成的軌跡方程式。',
    answer: '$x^2-3y^2-2x+44y-139=0$',
    hasImage: false,
  },
  {
    id: '17d61e3a86a',
    chapter: '二次曲線',
    question:
      '兩定圓 $C_1:x^2+(y+1)^2=4$、$C_2:x^2+(y-3)^2=1$，若動圓 $C$ 與 $C_1$、$C_2$ 均外切或均內切時，求 $C$ 圓心的軌跡方程式。',
    answer: '$\\frac{4x^2}{15}-4(y-1)^2=-1$',
    hasImage: false,
  },
  {
    id: '17d617f4143',
    chapter: '二次曲線',
    question:
      '已知等軸雙曲線 $\\Gamma$ 的中心為 $(2,-1)$，一漸近線為 $2x+3y=1$，且 $\\Gamma$ 過點 $(1,0)$，求其方程式。',
    answer: '$(2x+3y-1)(3x-2y-8)=-5$',
    hasImage: false,
  },
  {
    id: '17d61e43885',
    chapter: '二次曲線',
    question:
      '等軸雙曲線的兩焦點為 $(k,0)$ 與 $(-k,0)$，其中 $k>0$，點 $(3,2)$ 在此雙曲線上，求 $k$。',
    answer: '$\\sqrt{10}$',
    hasImage: false,
  },
  {
    id: '17d61e4eb62',
    chapter: '二次曲線',
    question:
      '坐標平面上以 $F_1$、$F_2$ 為兩焦點作橢圓 $\\Gamma_1$ 及雙曲線 $\\Gamma_2$，$P$ 為 $\\Gamma_1$ 與 $\\Gamma_2$ 的交點之一，已知 $\\Gamma_1$ 的方程式為 $\\frac{x^2}{25}+\\frac{y^2}9=1$，且 $\\overline{PF_1}=6$，試求 $\\Gamma_2$ 的方程式。',
    answer: '$x^2-\\frac{y^2}{15}=1$',
    hasImage: false,
  },
  {
    id: '17d61e5a2cc',
    chapter: '二次曲線',
    question:
      '坐標平面上有四點 $A(-5,0)$、$B(-3,0)$、$C(3,0)$、$D(5,0)$，以 $A$、$D$ 為頂點且 $B$、$C$ 為焦點作橢圓 $\\Gamma_1$，以 $B$、$C$ 為頂點且 $A$、$D$ 為焦點作雙曲線 $\\Gamma_2$，則 $\\Gamma_1$ 與 $\\Gamma_2$ 在第一象限恰有一個交點 $P$，求 $P$ 點坐標。',
    answer: '$(\\frac{15}{\\sqrt{17}},\\frac{8\\sqrt{2}}{\\sqrt{17}})$',
    hasImage: false,
  },
];

export const bank: Question[] = [
  ...gsat,
  ...beginner,
  ...numAndEquation,
  ...expAndLog,
  ...polynomial,
  ...lineAndCircle,
  ...trigonometric,
  ...series,
  ...statistics,
  ...combination,
  ...trigonometricFuncA,
  ...trigonometricFuncB,
  ...expAndLogFunction,
  ...planeVector,
  ...spaceConcept,
  ...spaceVector,
  ...spaceEquations,
  ...conditionalProb,
  ...matrixA,
  ...matrixB,
  ...advancedA,
  ...advancedB,
  ...limit,
  ...complexNumber,
  ...conicSection,
];

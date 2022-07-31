import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C3S1BasicOfVector = () => (
  <div>
    <Page pageNum={1}>
      <div className={style.head}>1 平面向量的加減法與係數積</div>
      <Concept num={1} title="向量的定義及表示法">
        <div className={style.conceptHead}>向量</div>
        <div>有　　　　及　　　　的量，例如</div>
        <div className={style.conceptHead}>向量的幾何表示法</div>
        <Textarea2MathJax
          text={
            '相異兩點 $A$、$B$，以 $A$ 為起點、$B$ 為終點畫一個箭頭，此有向線段記為\n　\n　\n　\n'
          }
        />
        <div className={style.conceptHead}>向量的相等</div>
        <div>
          若兩個向量的 <b>方向</b> 及 <b>大小</b> 皆相同，則稱兩向量 <b>相等</b>。<br />
          向量並非固定端點，允許向量在平面上平行移動。
        </div>
        <div className={style.conceptHead}>零向量</div>
        <Textarea2MathJax
          text={
            '若一個向量之起點與終點為同一點，規定此向量為零向量，記為　　　，大小為 $0$，可為任意方向，零向量不可寫成數字 $0$。'
          }
        />
        <div className={style.conceptHead}>向量的大小</div>
        <Textarea2MathJax
          text={
            '$\\vector a$ 的大小用 $|\\vector a|$ 表示。若 $\\vector a=(p,q)$，則 $|\\vector a|=\\sqrt{p^2+q^2}$。'
          }
        />
      </Concept>
      <Example num={1} ids={['17c3ff7a1a5', '17c3ff879b5']} height="9cm" />
    </Page>
    <Page pageNum={2}>
      <Example num={2} ids={['17c3cffaea5', '17c3d037b9d']} />
      <Example num={3} ids={['17c3d014a2f', '17c3d22698e']} />
    </Page>
    <Page pageNum={3}>
      <Concept num={2} title="向量的加法與減法">
        <div className={style.conceptHead}>向量的加法</div>
        <div style={{ float: 'right' }}>
          <img
            style={{ height: '3cm' }}
            alt=""
            role="presentation"
            src="/toliman/images/向量加法1.PNG"
          />
          <img
            style={{ height: '3cm' }}
            alt=""
            role="presentation"
            src="/toliman/images/向量加法2.PNG"
          />
        </div>
        <Textarea2MathJax
          text={
            '向量相加，可以把頭尾連成一串來取起點與終點，如 $\\xvector{AB}+\\xvector{BC}+\\xvector{CD}+\\xvector{DE}=\\xvector{AE}$。若頭尾未相連，可以移動向量使其相連。'
          }
        />
        <div className={style.conceptHead}>向量加法的基本性質</div>
        <Textarea2MathJax
          text={
            '(1) 交換律：$\\vector{a}+\\vector{b}=\\vector{b}+\\vector{a}$\n(2) 結合律：$(\\vector{a}+\\vector{b})+\\vector{c}=\\vector{a}+(\\vector{b}+\\vector{c})$'
          }
        />
        <div className={style.conceptHead}>反向量與向量的減法</div>
        <Textarea2MathJax
          text={
            '長度相同但方向相反的兩個向量，彼此稱為反向量，如 $\\xvector{AB}$ 與 $\\xvector{BA}$，其關係式為 $\\xvector{BA}=-\\xvector{AB}$。所以減法其實就是加法，即 $\\vector{a}-\\vector{b}=\\vector{a}+(-\\vector{b})$\n　\n　\n　\n'
          }
        />
        <div className={style.conceptHead}>向量的分解</div>
        <Textarea2MathJax
          text={
            '向量 $\\xvector{AB}$ 可與任意一點 $P$ 以加法或減法來分解，如 $\\xvector{AB}=\\xvector{AP}+\\xvector{PB}=\\xvector{PB}-\\xvector{PA}$。'
          }
        />
      </Concept>
      <Example num={4} ids={['17c3d243d52', '17c3d26a079']} height="9.5cm" />
    </Page>
    <Page pageNum={4}>
      <Example num={5} ids={['17c3d24d200', '17c3c395cde']} height="9cm" />
      <Concept num={3} title="向量的係數積與平行向量">
        <div className={style.conceptHead}>係數積</div>
        <Textarea2MathJax
          text={'給向量 $\\vector a$ 與實數 $r$，向量的係數積 $r\\vector a$ 如下：'}
        />
        <Textarea2MathJax
          text={'(1) $r>0$ 時，$r\\vector a$ 與 $\\vector a$ 同向，大小為 $\\vector a$ 的 $r$ 倍'}
        />
        <Textarea2MathJax
          text={'(2) $r<0$ 時，$r\\vector a$ 與 $\\vector a$ 反向，大小為 $\\vector a$ 的 $|r|$ 倍'}
        />
        <div className={style.conceptHead}>係數積的性質</div>
        <Textarea2MathJax text={'$r,s\\in\\mathbb{R}$，則：'} />
        <Textarea2MathJax
          text={
            '(1) $r(\\vector a+\\vector b)=r\\vector a+r\\vector b$。如：$3(\\vector a+\\vector b)=3\\vector a+3\\vector b$'
          }
        />
        <Textarea2MathJax
          text={
            '(2) $(r+s)\\vector a=r\\vector a+s\\vector a$。如：$(5+\\sqrt2)\\vector a=5\\vector a+\\sqrt2\\vector a$'
          }
        />
        <Textarea2MathJax
          text={'(3) $r(s\\vector a)=(rs)\\vector a$。如：$3(2\\vector a)=6\\vector a$'}
        />
        <div className={style.conceptHead}>向量的平行</div>
        <Textarea2MathJax
          text={
            '若 $\\vector a$ 與 $\\vector b$ 同向或反向，稱 $\\vector a$ 與 $\\vector b$ 平行，記為 $\\vector a\\parallel\\vector b$，此時必可找到某實數 $r$ 使得 $\\vector a=r\\vector b$。若 $\\vector a=(x_1,y_1)$，$\\vector b=(x_2,y_2)$，則'
          }
        />
        <div className={style.conceptHead}>三角不等式</div>
        <Textarea2MathJax
          text={
            '因為三角形的兩邊和大於第三邊，所以 $|\\vector a+\\vector b|$　　$|\\vector a|+|\\vector b|$\n　\n　\n　\n　\n　\n'
          }
        />
      </Concept>
    </Page>
    <Page pageNum={5}>
      <Example num={6} ids={['17c4563c8b7', '17c40cb19e8']} />
      <Example num={7} ids={['17c3c614420', '17c40d37bdd']} />
    </Page>
    <Page pageNum={6}>
      <Example num={8} ids={['17c3c7a3797', '17c40da67d7']} />
      <Example num={9} ids={['17c40dface4', '17c456250f8']} />
    </Page>
    <Page pageNum={7}>
      <Example num={10} ids={['17c40e31a97', '17c4569c253']} />
      <Example num={11} ids={['17c40edb4d6', '17c4573201e']} />
    </Page>
    <Page pageNum={8}>
      <Example num={12} ids={['17c607a943e', '17c607db430']} />
      <Example num={13} ids={['17c561f61e7', '17c5df691cb']} />
    </Page>
    <Page pageNum={9}>
      <Concept num={4} title="線性組合、分點公式與共線定理">
        <div className={style.conceptHead}>線性組合</div>
        <Textarea2MathJax
          text={
            '平面上任兩個不平行的非零向量 $\\vector a$、$\\vector b$，則任一向量 $\\vector c$，必可找到「唯一」的組合使得 $\\vector c=x\\vector a+y\\vector b$。'
          }
        />
        <div className={style.conceptHead}>標準單位向量與坐標</div>
        <Textarea2MathJax
          text={
            '規定 $\\vector i=(1,0)$ 與 $\\vector j=(0,1)$，平面坐標上所有的點皆可由這兩個標準單位向量組合而成。如 $(2,3)=2\\vector i+3\\vector j$。'
          }
        />
        <div className={style.conceptHead}>分點公式</div>
        <img
          style={{ float: 'right', width: '5cm' }}
          alt=""
          role="presentation"
          src="/toliman/images/向量分點.PNG"
        />
        <Textarea2MathJax
          text={
            '$P$ 點在 $\\overline{AB}$ 上，線段比例為 $\\overline{AP}:\\overline{BP}=m:n$，$O$ 為任意一點，則 $\\xvector{OP}=\\frac m{m+n}\\xvector{OA}+\\frac n{m+n}\\xvector{OB}$。注意，其係數和為 $1$。\n　\n　\n　\n　\n　\n　\n　\n　\n'
          }
        />
        <div className={style.conceptHead}>共線定理</div>
        <Textarea2MathJax
          text={
            '平面上兩向量 $\\xvector{OA}$ 與 $\\xvector{OB}$ 與一點 $C$，$\\xvector{OC}$ 可為 $\\xvector{OA}$ 與 $\\xvector{OB}$ 之線性組合，即 $\\xvector{OC}=x\\xvector{OA}+y\\xvector{OB}$，則「$A$、$B$、$C$ 三點共線 $\\Leftrightarrow x+y=1$」。'
          }
        />
        <div className={style.conceptHead}>一般坐標系</div>
        <Textarea2MathJax
          text={
            '平面上兩向量 $\\vector a$ 與 $\\vector b$，將 $\\vector a$ 延伸成為 $x$ 軸、$\\vector b$ 延伸成為 $y$ 軸，形成一個歪歪的坐標系，稱為一般坐標系，任一線性組合 $x\\vector a+y\\vector b$ 皆可點出一個點 $(x,y)$ 在此坐標平面上，可以用於解釋共線定理及判斷 $x,y$ 的正負。'
          }
        />
      </Concept>
    </Page>
    <Page pageNum={10}>
      <Example num={14} ids={['17c5e01de25', '17c5e0ecf8f']} />
      <Example num={15} ids={['17c5e131245', '17c5e14893b']} />
    </Page>
    <Page pageNum={11}>
      <Example num={16} ids={['17c5e180ef8', '17c5e1c0bd8']} />
      <Example num={17} ids={['17c5e38a87b', '17c5e24a614']} />
    </Page>
    <Page pageNum={12}>
      <Example num={18} ids={['17c5e2d8d18', '17c5ff6ee9c']} height="23cm" />
    </Page>
    <Page pageNum={13}>
      <Example num={19} ids={['17c5ffde515', '17c60109edf']} />
      <Example num={20} ids={['17c6005807b', '17c6009c44c']} />
    </Page>
    <Page pageNum={14}>
      <Example num={21} ids={['17c5bcac6bb', '17c5bcf51b4']} height="23cm" />
    </Page>
    <Page pageNum={15}>
      <Example num={22} ids={['17c5bdc51bf', '17c5bf60b7b']} />
      <Example num={23} ids={['17c5be5dc06', '17c5ee185ce']} />
    </Page>
    <Page pageNum={16}>
      <Example num={24} ids={['17c5f05b801', '17c5f9ca487']} />
      <Example num={25} ids={['17c5f8ceff5', '17c5faa0582']} />
    </Page>
    <Page pageNum={17}>
      <Concept num={5} title="重心與內心 (數A)">
        <div className={style.conceptHead}>重心</div>
        <Textarea2MathJax
          text={
            '重心為三角形的三條　　　　交點，常用 $G$ 作為代號，$G$ 將中線分成 $1:2$ 的兩段，故：'
          }
        />
        <Textarea2MathJax
          text={
            '(1) $\\xvector{AG}=\\frac13\\xvector{AB}+\\frac13\\xvector{AC}$\n(2) $\\xvector{OG}=\\frac13\\xvector{OA}+\\frac13\\xvector{OB}+\\frac13\\xvector{OC}$\n(3) $\\xvector{GA}+\\xvector{GB}+\\xvector{GC}=\\vector 0$\n　\n　\n　\n　\n　\n　\n　\n'
          }
        />
        <div className={style.conceptHead}>內心</div>
        <Textarea2MathJax
          text={
            '內心為三角形的三條　　　　　交點，常用 $I$ 作為代號，$\\triangle ABC$ 的三個邊長 $\\overline{BC}=a$、$\\overline{AC}=b$、$\\overline{AB}=c$，可由分點公式推得 $\\xvector{OI}=\\frac a{a+b+c}\\xvector{OA}+\\frac b{a+b+c}\\xvector{OB}+\\frac c{a+b+c}\\xvector{OC}$'
          }
        />
      </Concept>
      <Example num={26} ids={['17c5fdff0c5', '17c5ff32ef2']} height="10cm" />
    </Page>
    <Page pageNum={18}>
      <Example num={27} ids={['17c5fea4983', '17c5ff9c118']} height="23cm" />
    </Page>
    <Page pageNum={19}>
      <Example num={28} ids={['17c5ffd658c', '17c5fef7805']} height="23cm" />
    </Page>
  </div>
);

export default C3S1BasicOfVector;

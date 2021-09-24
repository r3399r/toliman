import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';
import Page from 'src/pages/lecture/component/Page';

const B3C10Vector = () => {
  return (
    <div>
      <Page pageNum={22}>
        <div className={style.head}>Ch10 平面向量</div>
        <Concept num={1} title="向量定義與坐標表示法">
          <Textarea2MathJax
            text={
              '(1) 在空間或平面中，由 $$A$$ 點朝 $$B$$ 點連成的有向線段記為 $$\\overrightarrow{AB}$$，其大小為 $$\\left|\\overrightarrow{AB}\\right|$$。'
            }
          />
          <Textarea2MathJax
            text={'(2) 向量有大小及方向，且可平移，只要同向且等長的兩向量即為相等'}
          />
          <Textarea2MathJax
            text={
              '(3) 平面上點 $$A(x_1,y_1)$$、$$B(x_2,y_2)$$，得 $$\\overrightarrow{AB}=(x_2-x_2,y_2-y_2)$$，其大小為 $$\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$$'
            }
          />
        </Concept>
        <Exercise ids={['17c0eb34ae1', '17c0eb5c023']} height="9.1cm" />
        <Concept num={2} title="向量的加法與減法">
          <Textarea2MathJax
            text={'(1) 加法：頭尾相連後，取起點和終點的直線向量。若向量無頭尾相連，可將向量平移'}
          />
          <Textarea2MathJax
            text={
              '(2) 坐標加法：設 $$\\vec{a}=(x_1,y_1)$$，$$\\vec{b}=(x_2,y_2)$$，則 $$\\vec{a}+\\vec{b}=(x_1+x_2,y_1+y_2)$$'
            }
          />
          <Textarea2MathJax
            text={
              '(3) 減法：令 $$-\\vec{b}$$ 與 $$\\vec{b}$$ 等長且反向，規定向量的減法為 $$\\vec{a}-\\vec{b}=\\vec{a}+(-\\vec{b})$$'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={23}>
        <Exercise ids={['17c0ebc1b8d', '17c0ebfcd9d']} height="8cm" />
        <Concept num={3} title="向量的係數積">
          <Textarea2MathJax
            text={
              '(1) 若 $$r>0$$，則 $$r\\vec{a}$$ 與 $$\\vec{a}$$ 同方向且大小為 $$\\vec{a}$$ 的 $$r$$ 倍；若 $$r<0$$，則 $$r\\vec{a}$$ 與 $$\\vec{a}$$ 反方向且大小為 $$\\vec{a}$$ 的 $$|r|$$ 倍。'
            }
          />
          <Textarea2MathJax
            text={
              '(2) 若 $$\\vec{a}=(x,y)$$，$$r\\in\\mathbb{R}$$，則 $$r\\vec{a}=r(x,y)=(rx,ry)$$'
            }
          />
          <Textarea2MathJax
            text={
              '(3) 若兩向量 $$\\vec{a}$$、$$\\vec{b}$$ 同向或反向，則稱 $$\\vec{a}$$ 與 $$\\vec{b}$$ 平行，記為 $$\\vec{a}\\mathrel{/\\mkern-5mu/}\\vec{b}$$，此時存在實數 $$r$$ 使 $$\\vec{a}=r\\vec{b}$$。若 $$\\vec{a}=(x_1,y_1)$$，$$\\vec{b}=(x_2,y_2)$$，則 $$\\vec{a}\\mathrel{/\\mkern-5mu/}\\vec{b}\\Leftrightarrow\\frac{x_1}{x_2}=\\frac{y_1}{y_2}$$'
            }
          />
        </Concept>
        <Exercise ids={['17c13837c6d', '17c1385a0fe']} height="8cm" />
      </Page>
      <Page pageNum={24}>
        <Concept num={4} title="線性組合">
          <Textarea2MathJax
            text={
              '設 $$\\vec{a}$$ 與 $$\\vec{b}$$ 為不平行的兩平面向量，則任一平面向量 $$\\vec{v}$$，必有唯一的實數 $$p$$、$$q$$ 使得 $$p\\vec{a}+q\\vec{b}=\\vec{v}$$'
            }
          />
        </Concept>
        <Exercise ids={['17c138d9fb9', '17c1390d4a3']} height="6.6cm" />
        <Concept num={5} title="分點向量與共線定理" height="3.7cm">
          <Textarea2MathJax
            text={
              '(1) 分點向量：若 $$P\\in\\overline{AB}$$ 且 $$\\overline{AP}:\\overline{PB}=m:n$$，則 $$\\overrightarrow{OP}=\\frac{n}{m+m}\\overrightarrow{OA}+\\frac{m}{m+n}\\overrightarrow{OB}$$。'
            }
          />
          <Textarea2MathJax
            text={
              '(2) 共線定理：設 $$\\overrightarrow{OA}$$ 與 $$\\overrightarrow{OB}$$ 不平行且 $$\\overrightarrow{OP}=x\\overrightarrow{OA}+y\\overrightarrow{OB}$$，則：$$x+y=1\\Leftrightarrow A$$、$$B$$、$$P$$ 三點共線。'
            }
          />
        </Concept>
        <Exercise ids={['17c139a2fd3', '17c1553b7bb']} height="6.5cm" />
      </Page>
      <Page pageNum={25}>
        <Concept num={6} title="內積的定義與性質" height="6.3cm">
          <Textarea2MathJax
            text={
              '(1) 內積定義：非零向量 $$\\vec{a}$$ 與 $$\\vec{b}$$ 夾角為 $$\\theta$$，規定 $$\\vec{a}\\cdot\\vec{b}=|\\vec{a}||\\vec{b}|\\cos\\theta$$，即 $$|\\vec{a}|$$ 乘上 $$\\vec{b}$$ 投影在 $$\\vec{a}$$ 的影子長。'
            }
          />
          <Textarea2MathJax
            text={
              '(2) 坐標算法：$$\\vec{a}=(x_1,y_1)$$，$$\\vec{b}=(x_2,y_2)$$，則 $$\\vec{a}\\cdot\\vec{b}=x_1x_2+y_1y_2$$。'
            }
          />
          <Textarea2MathJax text={'(3) 垂直性質：'} />
        </Concept>
        <Exercise
          ids={['17c155921cc', '17c155a6077', '17c155b8555', '17c155c85bd']}
          height="7.5cm"
        />
      </Page>
      <Page pageNum={26}>
        <Concept num={7} title="向量的正射影" height="2.2cm">
          <Textarea2MathJax
            text={
              '$$C$$ 投影到 $$\\overleftrightarrow{AB}$$ 為 $$D$$，則 $$\\overrightarrow{AD}$$ 為 $$\\overrightarrow{AC}$$ 在 $$\\overrightarrow{AB}$$ 上的正射影。'
            }
          />
        </Concept>
        <Exercise ids={['17c155f8670', '17c1560e32e']} />
        <Concept num={8} title="柯西不等式 (數A)" height="4cm">
          <Textarea2MathJax
            text={'已知兩非零向量 $$\\vec{a}$$、$$\\vec{b}$$，長度固定且夾角任意，由內積定義得：'}
          />
        </Concept>
        <Exercise ids={['17c15675098', '17c158aa7d6']} />
      </Page>
      <Page pageNum={27}>
        <Concept num={9} title="方向向量與法向量" height="4.4cm">
          <Textarea2MathJax
            text={
              '(1) 直線的參數式：過點 $$(p,q)$$ 且與向量 $$(a,b)$$ 平行的直線方程式可寫為 $$\\begin{cases}x=p+at\\\\y=q+bt\\end{cases},t\\in\\mathbb{R}$$，向量 $$(a,b)$$ 為方向向量，$$t$$ 為參數。可推廣到空間中的直線。'
            }
          />
          <Textarea2MathJax
            text={
              '(2) 直線的法向式：平面上與直線垂直的向量稱為法向量。直線 $$L:ax+by=c$$ 必與向量 $$(a,b)$$ 垂直，故可利用此性質，法向量 $$(a,b)$$ 的直線方程式為 $$ax+by=c$$，再代入線上的點求 $$c$$。可推廣到空間中的平面。'
            }
          />
        </Concept>
        <Exercise ids={['17c1596f242', '17c1597d6d1']} />
        <Concept num={10} title="直線的交角" height="2cm">
          <Textarea2MathJax
            text={
              '直線 $$L_1$$ 的法向量為 $$\\vec{n}_1$$，$$L_2$$ 的法向量為 $$\\vec{n}_2$$，兩線的夾角之一即為兩法向量的夾角。故可由內積求夾角。'
            }
          />
        </Concept>
        <Exercise ids={['17c159e261b', '17c159ef417']} />
      </Page>
      <Page pageNum={28}>
        <Concept num={11} title="三角形的四心 (數A)">
          <div className={style.conceptHead}>重心 G</div>
          <Textarea2MathJax text={'(1) 為 $$\\triangle ABC$$ 三條　　　　的交點'} />
          <Textarea2MathJax
            text={'(2) $$G$$ 把中線分為　　　　的兩段，分割成六個等面積的小三角形'}
          />
          <Textarea2MathJax
            text={'(3) 重心坐標為 $$(\\frac{x_1+x_2+x_3}{3},\\frac{y_1+y_2+y_3}{3})$$'}
          />
          <Textarea2MathJax
            text={
              '(4) $$O$$ 為任一點，則 $$\\overrightarrow{OG}=\\frac{1}{3}\\overrightarrow{OA}+\\frac{1}{3}\\overrightarrow{OB}+\\frac{1}{3}\\overrightarrow{OC}$$'
            }
          />
          <Textarea2MathJax
            text={
              '(5) $$\\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}=\\vec0$$\n　\n　'
            }
          />
          <div className={style.conceptHead}>內心 I</div>
          <Textarea2MathJax text={'(1) 為 $$\\triangle ABC$$ 三條　　　　的交點'} />
          <Textarea2MathJax
            text={
              '(2) 由內分比可知 $$\\overline{AB}:\\overline{AC}=\\overline{BP}:\\overline{CP}$$，且 $$\\overline{BA}:\\overline{BP}=\\overline{AI}:\\overline{PI}$$'
            }
          />
          <Textarea2MathJax text={'(3) $$I$$ 為內切圓的圓心，到三邊等距離，可利用此求三角形面積'} />
          <Textarea2MathJax
            text={
              '(4) $$O$$ 為任一點，則 $$\\overrightarrow{OI}=\\frac{a}{a+b+c}\\overrightarrow{OA}+\\frac{b}{a+b+c}\\overrightarrow{OB}+\\frac{c}{a+b+c}\\overrightarrow{OC}$$\n　\n　'
            }
          />
          <div className={style.conceptHead}>外心 O</div>
          <Textarea2MathJax text={'(1) 為 $$\\triangle ABC$$ 三條　　　　　　的交點'} />
          <Textarea2MathJax text={'(2) $$O$$ 為外接圓的圓心，到三頂點等距離'} />
          <Textarea2MathJax
            text={
              '(3) 若為銳角三角形，外心在內部；若為直角三角形，外心在斜邊中點；若為鈍角三角形，外心在外部'
            }
          />
          <Textarea2MathJax
            text={
              '(4) 由內積定義可知 $$\\overrightarrow{AO}\\cdot\\overrightarrow{AB}=\\frac{1}{2}\\overline{AB}^2$$，$$\\overrightarrow{AO}\\cdot\\overrightarrow{AC}=\\frac{1}{2}\\overline{AC}^2$$'
            }
          />
          <Textarea2MathJax text={'(5) 常利用正弦定理求外接圓半徑 $$R$$\n　\n　'} />
          <div className={style.conceptHead}>垂心 H</div>
          <Textarea2MathJax text={'(1) 為 $$\\triangle ABC$$ 三條　　　　的交點'} />
          <Textarea2MathJax
            text={
              '(2) 由內積定義可知 $$\\overrightarrow{AH}\\cdot\\overrightarrow{AB}=\\overrightarrow{AC}\\cdot\\overrightarrow{AB}$$，$$\\overrightarrow{AH}\\cdot\\overrightarrow{AC}=\\overrightarrow{AB}\\cdot\\overrightarrow{AC}$$'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={29}>
        <Exercise ids={['17c15b7239f', '17c15b9b4ac', '17c15baf95a', '17c15bc3f33']} height="8cm" />
        <Concept num={12} title="二階行列式 (數A)">
          <Textarea2MathJax
            text={
              '規定 $$\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}=ad-bc$$，加上絕對值恰為向量 $$(a,b)$$ 與 $$(c,d)$$ 所張的平行四邊形面積。其運算性質為：'
            }
          />
          <Textarea2MathJax text={'(1) 行列互換，其值不變；行(或列)對調，行列式值變號'} />
          <Textarea2MathJax text={'(2) 任一行(或列)的各項若皆為 $$k$$ 倍，則可將 $$k$$ 提出'} />
          <Textarea2MathJax text={'(3) 將一行(或列)乘一倍數加到另一行(或列)，其值不變'} />
        </Concept>
      </Page>
      <Page pageNum={30}>
        <Exercise ids={['17c15c2e8a0', '17c15c4ad5b']} height="6.5cm" />
        <Concept num={13} title="解二元一次方程組 (數A)">
          <Textarea2MathJax
            text={'二元一次方程組 $$\\begin{cases}a_1x+b_1y=c_1\\\\a_2x+b_2y=c_2\\end{cases}$$'}
          />
          <div className={style.conceptHead}>判斷有解無解</div>
          <Textarea2MathJax
            text={
              '(1) 若恰一組解→兩直線相交→兩直線不平行，故 $$\\frac{a_1}{a_2}\\neq\\frac{b_1}{b_2}$$'
            }
          />
          <Textarea2MathJax
            text={
              '(2) 若無解→兩直線無交點→兩直線平行，故 $$\\frac{a_1}{a_2}=\\frac{b_1}{b_2}\\neq\\frac{c_1}{c_2}$$'
            }
          />
          <Textarea2MathJax
            text={
              '(3) 若無限多解→兩直線有無限多個交點→兩直線重合，故 $$\\frac{a_1}{a_2}=\\frac{b_1}{b_2}=\\frac{c_1}{c_2}$$'
            }
          />
          <div className={style.conceptHead}>克拉瑪公式</div>
          <Textarea2MathJax
            text={
              '令 $$\\Delta=\\begin{vmatrix}a_1&b_1\\\\a_2&b_2\\end{vmatrix}$$，$$\\Delta_x=\\begin{vmatrix}c_1&b_1\\\\c_2&b_2\\end{vmatrix}$$，$$\\Delta_y=\\begin{vmatrix}a_1&c_1\\\\a_2&c_2\\end{vmatrix}$$，則解為 $$x=\\frac{\\Delta_x}{\\Delta}$$，$$y=\\frac{\\Delta_y}{\\Delta}$$'
            }
          />
        </Concept>
        <Exercise ids={['17c15fb53d5', '17c15f9e1ba']} height="6.4cm" />
      </Page>
      <Page pageNum={31}>
        <Concept num={14} title="影印紙的長寬比例 (數B)">
          <div className={style.conceptHead}>A 系列影印紙</div>
          <Textarea2MathJax
            text={
              '$$A0$$ 紙張為面積是 $$1$$ 平方公尺的長方形，長寬比為 $$\\sqrt{2}:1$$，將 $$A0$$ 紙張折半成為 $$A1$$，將 $$A1$$ 紙張折半成為 $$A2$$，以此類推，所得之 $$A$$ 系列影印紙之長寬比均維持 $$\\sqrt{2}:1$$。'
            }
          />
          <div className={style.conceptHead}>B 系列影印紙</div>
          <Textarea2MathJax
            text={
              '$$B0$$ 紙張為面積是 $$\\sqrt{2}$$ 平方公尺的長方形，長寬比為 $$\\sqrt{2}:1$$，將 $$B0$$ 紙張折半成為 $$B1$$，將 $$B1$$ 紙張折半成為 $$B2$$，以此類推，所得之 $$B$$ 系列影印紙之長寬比均維持 $$\\sqrt{2}:1$$。'
            }
          />
        </Concept>
        <Exercise ids={['17c15cfcb5e', '17c15d2b440']} />
        <Concept num={15} title="黃金比例 (數B)">
          <Textarea2MathJax
            text={
              '(1) 無理數 $$\\frac{\\sqrt{5}+1}{2}\\approx1.618$$ 稱為「黃金比例」。\n(2) 長寬比為 $$(\\sqrt{5}+1):2$$ 的長方形稱為「黃金矩形」'
            }
          />
          <Textarea2MathJax
            text={
              '(3) $$P$$ 在 $$\\overline{AB}$$ 上，$$\\overline{AP}>\\overline{BP}$$，若 $$\\overline{AB}:\\overline{AP}=\\overline{AP}:\\overline{BP}$$，稱 $$P$$ 為 $$\\overline{AB}$$ 的「黃金分割點」，其比值為黃金比例。'
            }
          />
        </Concept>
        <Exercise ids={['17c15d940e4']} />
      </Page>
      <Page pageNum={32}>
        <Example num={1} ids={['17c15ffe58e', '17c1601e11b']} />
        <Example num={2} ids={['17c1603d189', '17c16051046']} />
      </Page>
      <Page pageNum={33}>
        <Example num={3} ids={['17c16327d59', '17c163df257']} />
        <Example num={4} ids={['17c1642f855', '17c1644e24c']} />
      </Page>
      <Page pageNum={34}>
        <Example num={5} ids={['17c16598874', '17c165ba13d']} />
        <Example num={6} ids={['17c165d5250', '17c165fdd52']} />
      </Page>
      <Page pageNum={35}>
        <Example num={7} ids={['17c16623835', '17c1664a847']} />
        <Example num={8} ids={['17c166e949a', '17c16703fde']} note={' (A)'} />
      </Page>
      <Page pageNum={36}>
        <Example num={9} ids={['17c168fdd8f', '17c1692196d']} />
        <Example num={10} ids={['17c16956025', '17c1697ac04']} note={' (A)'} />
      </Page>
      <Page pageNum={37}>
        <Example num={11} ids={['17c169a0537', '17c169b6665']} note={' (A)'} />
        <Example num={12} ids={['17c169d647d', '17c169f6102']} note={' (A)'} />
      </Page>
    </div>
  );
};

export default B3C10Vector;

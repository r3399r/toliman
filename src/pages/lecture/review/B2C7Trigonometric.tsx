import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';
import Page from 'src/pages/lecture/component/Page';

const B2C7Trigonometric = () => (
  <MathJax>
    <Page pageNum={33}>
      <div className={style.head}>Ch7 三角比</div>
      <Concept num={1} title="銳角三角比的定義">
        <div>{'銳角 $\\theta$ 為直角三角形的內角，兩股為其對邊與鄰邊，則：'}</div>
        <br />
        <div>{'(1) $\\sin\\theta=\\dfrac{}{　　}$，稱為 $\\theta $ 的'}</div>
        <br />
        <div>{'(2) $\\cos\\theta=\\dfrac{}{　　}$，稱為 $\\theta $ 的'}</div>
        <br />
        <div>{'(3) $\\tan\\theta=\\dfrac{}{　　}$，稱為 $\\theta $ 的'}</div>
      </Concept>
      <Exercise ids={['17aca900411', '17aca9268fc']} height="5cm" />
      <Concept num={2} title="有向角與同界角">
        <div>{'(1) 坐標平面上，角度的旋轉有始邊及終邊，稱為有向角，逆時針為正，順時針為負。'}</div>
        <div>{'(2) 一般會從 $x$ 軸正向為始邊，若終邊在第 $k$ 象限，稱為第 $k$ 象限角。'}</div>
        <div>
          {
            '(3) 若 $\\angle A$ 與 $\\angle B$ 的終邊重合，則稱為同界角，相差 $360^\\circ$ 的整數倍。'
          }
        </div>
      </Concept>
      <Exercise ids={['17aca95e33b', '17aca9748af']} height="5.5cm" />
    </Page>
    <Page pageNum={34}>
      <Concept num={3} title="極坐標">
        <div>
          {
            '有向角 $\\theta$ 終邊上任一點 $P(x,y)$，令 $r=\\sqrt{x^2+y^2}$，則 $P$ 點的極坐標表示法為 $[r,\\theta]$。'
          }
        </div>
      </Concept>
      <Exercise ids={['17aca9badeb', '17aca9d9f29']} height="6.5cm" />
      <Concept num={4} title="廣義角的三角比">
        <div>
          {
            '圓的半徑為 1，圓心在原點，有向角 $\\theta$ 的終邊與此圓交於一點，交點坐標 $(x,y)=(\\cos\\theta,\\sin\\theta)$。常用的特殊角為以 $30^\\circ$、$45^\\circ$、$60^\\circ$ 推廣至各個象限的角。'
          }
        </div>
      </Concept>
      <Exercise ids={['17acaa46a2f', '17acaa9ade9']} height="9.8cm" />
    </Page>
    <Page pageNum={35}>
      <Concept num={5} title="三角比的角度變換">
        <div>{'畫出單位圓上的 $\\theta$ 及變換後的角度，再由點坐標的對稱位置判斷如何轉換。'}</div>
      </Concept>
      <Exercise ids={['17ad14cb94a', '17ad14d8dde', '17ad14e2208', '17ad14f2801']} height="5.4cm" />
      <Concept num={6} title="平方關係">
        <div>{'由定義可直接推得 $\\sin^2\\theta+\\cos^2\\theta=1$，即為畢氏定理。'}</div>
      </Concept>
      <Exercise ids={['17ad15f1203', '17ad16129f7']} />
    </Page>
    <Page pageNum={36}>
      <Concept num={7} title="正弦定理">
        <div>{'$$\\frac{}{　　　}=\\frac{}{　　　}=\\frac{}{　　　}=$$'}</div>
        <div>{'其中 $R$ 為外接圓半徑。亦可得 $a:b:c=$'}</div>
      </Concept>
      <Exercise ids={['17ad166ba0a', '17ad1685100']} height="6.8cm" />
      <Concept num={8} title="餘弦定理" height="2.6cm">
        <div />
      </Concept>
      <Exercise ids={['17ad16ade0d', '17ad16cc0f5']} height="6.8cm" />
    </Page>
    <Page pageNum={37}>
      <Concept num={9} title="三角形求面積">
        <div>{'(1) 基本公式：$\\triangle=$'}</div>
        <br />
        <div>{'(2) 面積公式：$\\triangle=$'}</div>
        <br />
        <div>{'(3) 海龍公式：$\\triangle=$'}</div>
        <br />
        <div>
          {
            '(4) 行列式：$\\vector a=(x_1,y_1)$、$\\vector b=(x_2,y_2)$ 兩向量所張的三角形面積 $\\triangle=$'
          }
        </div>
      </Concept>
      <Exercise ids={['17ad175a609', '1823e5af102', '1823e5cb932', '17ad1771119']} height="8.7cm" />
    </Page>
    <Page pageNum={38}>
      <Concept num={10} title="反三角">
        <div>{'$\\sin\\theta=k\\Rightarrow\\theta=\\sin^{-1}k$，稱為反正弦 $\\arcsin$。'}</div>
        <div>{'$\\cos\\theta=k\\Rightarrow\\theta=\\cos^{-1}k$，稱為反餘弦 $\\arccos$。'}</div>
        <div>{'$\\tan\\theta=k\\Rightarrow\\theta=\\tan^{-1}k$，稱為反正弦 $\\arctan$。'}</div>
        <div>
          {'符合反三角之角度有無限多種，取最接近 $0^\\circ$ 的結果，正負角度一樣近則取正。'}
        </div>
      </Concept>
      <Exercise ids={['17ad17cb39c']} height="5.9cm" />
      <Concept num={11} title="仰角、俯角與應用題">
        <div>{'(1) 仰角：視線在水平線上方時，兩線的夾角稱為仰角'}</div>
        <div>{'(2) 俯角：視線在水平線下方時，兩線的夾角稱為俯角'}</div>
      </Concept>
      <Exercise ids={['17ad18548de', '17ad187f99e']} height="9cm" />
    </Page>
    <Page pageNum={39}>
      <Example num={1} ids={['17ad192e53e', '17ad195a9f7']} />
      <Example num={2} ids={['17ad1986e1e', '17ad199eac9']} />
    </Page>
    <Page pageNum={40}>
      <Example num={3} ids={['17ad19d0a01', '17ad19fe25d']} />
      <Example num={4} ids={['17ad1a1d228', '17ad1a5d24f']} />
    </Page>
    <Page pageNum={41}>
      <Example num={5} ids={['17ad1a75088', '17ad1aa917e']} />
      <Example num={6} ids={['17ad1ac869f', '17ad1af7240']} />
    </Page>
    <Page pageNum={42}>
      <Example num={7} ids={['17ad1b111d9', '17ad1b2ca8a']} />
      <Example num={8} ids={['17ad1b3be5c', '17ad1b58388']} />
    </Page>
    <Page pageNum={43}>
      <Example num={9} ids={['17ad1ba3335', '17ad1c0f6ba']} />
      <Example num={10} ids={['17ad1c5ea2f', '17ad1c89c26']} />
    </Page>
  </MathJax>
);

export default B2C7Trigonometric;

import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C2S1 = () => (
  <MathJax>
    <Page pageNum={1}>
      <div className={style.head}>1 坐標平面與直線方程式</div>
      <Concept num={1} title="平面坐標">
        坐標平面中每一個點可用數對 $(a,b)$ 表示，稱 $a$ 為 $x$ 坐標，$b$ 為 $y$ 坐標。沿 $x$ 軸移動
        $p$ 到達的點坐標為 $(a+p,b)$，沿 $y$ 軸移動 $q$ 到達的點坐標為 $(a,b+q)$。
      </Concept>
      <Example num={1} ids={['18286a8d994', '18286ad47e5']} height="5.3cm" />
      <Example num={2} ids={['18286ab3268', '18286af2a3a']} height="5.1cm" />
    </Page>
    <Page pageNum={2}>
      <Example num={3} ids={['18286b152b0', '1828816488f']} />
      <Example num={4} ids={['18287f99617', '1828836bcfa']} />
    </Page>
    <Page pageNum={3}>
      <Concept num={2} title="斜率">
        <div className={style.conceptHead}>斜率的觀念</div>
        <div>
          直線的斜率習慣以 $m$ 為代號
          <br />
          $m=0$，為水平直線
          <br />
          {'$m>0$，為朝右上的直線'}
          <br />
          {'$m<0$，為朝右下的直線'}
        </div>
        <br />
        <div className={style.conceptHead}>斜率的定義及求法</div>
        <div>
          {
            '(1) 平面上點 $A(x_1,y_1)$、$B(x_2,y_2)$，線段 $\\overline{AB}$ 的斜率定義為 $m=\\dfrac{y_1-y_2}{x_1-x_2}$'
          }
          <br />
          {
            '(2) 若 $A$ 點到 $B$ 點需向右 $p$ 再向上 $q$，則 $m=\\dfrac q p$，若往右再往下則要加負號。'
          }
          <br />
          (3) 一次方程式 $y=ax+b$ 的圖形為直線，其斜率為一次項係數 $a$
        </div>
        <br />
        <br />
        <br />
      </Concept>
      <Example num={5} ids={['1828866b7b7', '182886a6a58']} height="8.9cm" />
    </Page>
    <Page pageNum={4}>
      <Example num={6} ids={['1828839875b', '182883cb133']} />
      <Example num={7} ids={['1828840012a', '1828844af9c']} />
    </Page>
    <Page pageNum={5}>
      <Concept num={3} title="斜率的應用">
        <div>
          兩相異直線 $L_1$ 與 $L_2$，
          <br />
          (1) 若 $L_1\parallel L_2$，則 $m_1=m_2$
          <br />
          (2) 若 $L_1\perp L_2$，則 $m_1\times m_2=-1$
        </div>
      </Concept>
      <Example num={8} ids={['182886ca2cd', '1828871c199']} height="5.5cm" />
      <Example num={9} ids={['182886fd275', '1828873ddb8']} height="5.3cm" />
    </Page>
    <Page pageNum={6}>
      <Concept num={4} title="直線方程式">
        <div className={style.conceptHead}>斜截式</div>
        <div>設直線為 $y=mx+b$，先求斜率 $m$，再代線上的點求 $b$</div>
        <br />
        <div className={style.conceptHead}>截距式</div>
        <div>
          若 $x$ 截距為 $a$，$y$ 截距為 $b$，即通過 $(a,0)$ 與 $(0,b)$ 兩點，則直線為 $\dfrac x
          a+\dfrac y b=1$
        </div>
        <br />
        <div className={style.conceptHead}>平行線與垂直線的假設</div>
        <div>
          給直線 $L:ax+by=c$，則與 $L$ 平行的直線方程式可設為 $ax+by=p$，與 $L$
          垂直的直線方程式可設為 $bx-ay=q$
        </div>
        <br />
        <div className={style.conceptHead}>兩直線的三種關係</div>
        <div>
          兩直線 $L_1:a_1x+b_1y=c_1$ 與 $L_2:a_2x+b_2y=c_2$ 有三種相交情形：
          <br />
          {'(1) 兩線交於一點：$\\dfrac{a_1}{a_2}\\ne\\dfrac{b_1}{b_2}$'}
          <br />
          {'(2) 兩線平行：$\\dfrac{a_1}{a_2}=\\dfrac{b_1}{b_2}\\ne\\dfrac{c_1}{c_2}$'}
          <br />
          {'(3) 兩線重合：$\\dfrac{a_1}{a_2}=\\dfrac{b_1}{b_2}=\\dfrac{c_1}{c_2}$'}
        </div>
      </Concept>
      <Example num={10} ids={['182887a4754', '182887f7529']} height="5.3cm" />
    </Page>
    <Page pageNum={7}>
      <Example num={11} ids={['182887c2e70', '1828d742e0e']} />
      <Example num={12} ids={['182887ddc0c', '1828d7f4b20']} />
    </Page>
    <Page pageNum={8}>
      <Example num={13} ids={['1828dcf80a5', '1828dd2d2c1']} />
      <Example num={14} ids={['1828dd11baa', '1828dd3d654']} />
    </Page>
    <Page pageNum={9}>
      <Example num={15} ids={['1828d815a14', '1828d8acd1d']} />
      <Example num={16} ids={['1828d8455e1', '1828d8d51e2']} />
    </Page>
    <Page pageNum={10}>
      <Example num={17} ids={['1828d904ecc', '1828dcad8f5']} />
      <Example num={18} ids={['1828ddce4de', '1828e167b8e']} />
    </Page>
  </MathJax>
);

export default C2S1;

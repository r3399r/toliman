import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const B2C1S1 = () => (
  <MathJax>
    <Page pageNum={1}>
      <div className={style.head}>1 三角比的定義與極座標</div>
      <Concept num={1} title="三角比 $\sin$、$\cos$、$\tan$ 的定義（鋭角）" height="10.5cm" />
      <Example num={1} ids={['1855882edca']} />
    </Page>
    <Page pageNum={2}>
      <Example num={2} ids={['17ea8ef9b39', '17ea8f08a2a']} />
      <Example num={3} ids={['17ea8f04310', '17ea8f11a98']} />
    </Page>
    <Page pageNum={3}>
      <Example num={4} ids={['17ea8f419e3', '17ea8f4a1df']} />
      <Concept num={2} title="有向角與同界角">
        <div className={style.conceptHead}>有向角（廣義角）</div>
        <div>
          1.
          給定「始邊」及「終邊」，從始邊開始旋轉，轉到終邊的度數即為角的大小，規定「逆時針」為　、「順時針」為
          <br />
          2. 若始邊為 $x$ 軸的正向，則稱為「標準位置角」
        </div>
        <br />
        <br />
        <div className={style.conceptHead}>同界角</div>
        <div>
          1. 無論轉到方向及圈數，若從 $x$ 軸轉到相同的終邊，則稱兩角互為同界角，其相差 $360\du$
          的整數倍。
          <br />
          2. 任一有向角的同界角有無限多個，但有唯一的「最小正同界角」及「最大負同界角」
        </div>
        <br />
        <br />
        <div className={style.conceptHead}>象限角及軸上角</div>
        <div>
          1. 若有向角 $\theta$ 之終邊落在第 $k$ 象限，則稱 $\theta$ 為第 $k$ 象限角
          <br />
          2. 若有向角 $\theta$ 之終邊落在坐標軸上，則稱 $\theta$ 為軸上角
        </div>
      </Concept>
    </Page>
    <Page pageNum={4}>
      <Example num={5} ids={['17ea8dfc8d7', '17ea8e074ad']} />
      <Example num={6} ids={['17ea8e0314e', '17ea8e0bef4']} />
    </Page>
    <Page pageNum={5}>
      <Concept num={3} title="極坐標">
        {
          '平面上 $O$ 為原點，稱為極點，$x$ 軸正向為始邊，稱為極軸，給任一點 $P$，令 $r=\\overline{OP}$，以 $\\overline{OP}$ 為終邊的有向角為 $\\theta$，則可用 $[r,\\theta]$ 表示 $P$ 點的位置'
        }
      </Concept>
      <Example num={7} ids={['17ea8e129aa', '17ea8e21395']} height="5.9cm" />
      <Example num={8} ids={['17ea8e1812a', '17ea8e26b26']} height="5.7cm" />
    </Page>
    <Page pageNum={6}>
      <Concept num={4} title="三角比 $\sin$、$\cos$、$\tan$ 的定義（廣義角）" height="10.5cm" />
      <Example num={9} ids={['17ea8e31e23', '17ea8e4fbb4']} />
    </Page>
    <Page pageNum={7}>
      <Example num={10} ids={['17ea8e39f4b', '17ea8e5514b']} />
      <Example num={11} ids={['17ea8e64eae', '17ea8e9b39f']} />
    </Page>
    <Page pageNum={8}>
      <Example num={10} ids={['17ea8e8fefa', '17ea8eaaabf']} />
      <Concept num={4} title="特殊角的三角比" />
    </Page>
    <Page pageNum={9}>
      <Example num={11} ids={['17ea8eb060e', '17ea8eb7a51']} />
      <Example num={12} ids={['17ea8ebe0bd', '17ea8ec3cc7']} />
    </Page>
    <Page pageNum={10}>
      <Example num={13} ids={['17ea8ecd941', '17ea8ed6ba2']} />
      <Example num={14} ids={['17ea8ee568c', '17ea8ef12ab']} />
    </Page>
  </MathJax>
);

export default B2C1S1;

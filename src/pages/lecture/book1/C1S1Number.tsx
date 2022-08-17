import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C1S1Number = () => (
  <MathJax>
    <Page pageNum={1}>
      <div className={style.head}>1 實數</div>
      <Concept num={1} title="三次的乘法公式">
        <div>(1) $(a+b)^3=$</div>
        <br />
        <div>(2) $(a-b)^3=$</div>
        <br />
        <div>(3) $a^3+b^3=$</div>
        <br />
        <div>(4) $a^3-b^3=$</div>
      </Concept>
      <Example num={1} ids={['182406b30eb', '182406cb62d']} height="3.6cm" />
      <Example num={2} ids={['182406dc4f1', '182406e85d1']} height="3.5cm" />
    </Page>
    <Page pageNum={2}>
      <Example num={3} ids={['1824070506d', '182407138ec']} />
      <Example num={4} ids={['1824072402b', '1824072ddd6']} />
    </Page>
    <Page pageNum={3}>
      <Example num={5} ids={['1824073e6a8', '1824074e224']} />
      <Concept num={2} title="有理數">
        <div>{'1. 有理數：有理數就是分數，如 $\\dfrac23$、$-\\dfrac9{11}$、$\\dfrac51$'}</div>
        <div>
          2.
          分數化成小數：任何分數都可化成有限小數或循環小數，如：$\dfrac12=0.5,\dfrac13=0.33...=0.\overline3$
        </div>
        <div>3. 小數化成分數：有限小數可以直接化成分數，循環小數可透過解方程式得到分數</div>
      </Concept>
      <Example num={6} ids={['18240764c41', '18240777cb0']} height="3cm" />
    </Page>
    <Page pageNum={4}>
      <Example num={7} ids={['182407927fb', '182407a0590']} />
      <Example num={8} ids={['182407d3766', '182407eba69']} />
    </Page>
    <Page pageNum={5}>
      <Example num={9} ids={['182407fdd7c', '18240816d62']} />
      <Concept num={3} title="分點公式">
        <div>
          {
            '數線上 $A(a)$ 與 $B(b)$，$P$ 在 $\\overline{AB}$ 上，$\\overline{PA}:\\overline{PB}=m:n$，則 $P$ 點坐標為 $\\dfrac{mb+na}{m+n}$。'
          }
        </div>
      </Concept>
    </Page>
    <Page pageNum={6}>
      <Example num={10} ids={['18240835833', '182408482b0']} />
      <Example num={11} ids={['1824086d367', '1824088d061']} />
    </Page>
    <Page pageNum={7}>
      <Concept num={4} title="根式的化簡">
        <div>雙重根號的化簡：滿足條件的話即可化簡，化簡方式請藉由題目實際練習。</div>
      </Concept>
      <Example num={12} ids={['182a7b3e360', '182a7b689e2']} height="5.5cm" />
      <Example num={13} ids={['18253dc12a0', '182547b6289']} height="7cm" />
    </Page>
    <Page pageNum={8}>
      <Concept num={5} title="無理數與實數">
        <div>
          1. 無理數：不循環的小數無法表為分數形式，稱為無理數，如 $\sqrt2$、$\sqrt[3]5$、$\pi$
        </div>
        <div>2. 實數：有理數與無理數的統稱為實數，其所對應的點填滿了整條數線</div>
        <div>3. 數系及其代號：</div>
        <div>(1) 正整數用　　表示　　(2) 整數用　　表示</div>
        <div>(3) 有理數用　　表示　　(4) 實數用　　表示</div>
      </Concept>
      <Example num={14} ids={['18254860518', '182553ac6ad']} height="3cm" />
      <Example num={15} ids={['182553cc452', '182553d9163']} height="7cm" />
    </Page>
    <Page pageNum={9}>
      <Example num={16} ids={['1825551e13b', '182555363da']} height="9.8cm" />
      <Concept num={6} title="算幾不等式">
        <div>
          {
            '若 $a>0$，$b>0$，則不等式 $\\dfrac{a+b}2\\ge\\sqrt{ab}$ 必定成立，且「等號」成立時，$a=b$。'
          }
        </div>
      </Concept>
    </Page>
    <Page pageNum={10}>
      <Example num={17} ids={['1825540969f', '1825547733e']} />
      <Example num={18} ids={['1825544e283', '182554b378e']} />
    </Page>
  </MathJax>
);

export default C1S1Number;

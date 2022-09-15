import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C2S2 = () => (
  <MathJax>
    <Page pageNum={11}>
      <div className={style.head}>2 直線方程式的應用</div>
      <Concept num={1} title="投影點與對稱點">
        <br />
        <br />
        <br />
      </Concept>
      <Example num={1} ids={['1828e18e697', '1828e1a17a9']} height="4.8cm" />
      <Example num={2} ids={['1828e1cec96', '1828e1effc4']} height="5.2cm" />
    </Page>
    <Page pageNum={12}>
      <Concept num={2} title="點線距與平行線距">
        <div className={style.conceptHead}>點線距</div>
        <div>
          平面上點 $(p,q)$ 與直線 $L:ax+by=c$，$A$ 到 $L$ 的最近距離為 $d(A,L)$，公式為：
          <br />
          {'$$d(A,L)=\\dfrac{|ap+bq-c|}{\\sqrt{a^2+b^2}}$$'}
        </div>
        <div className={style.conceptHead}>平行線距</div>
        <div>
          平面上兩平行直線 $L_1:ax+by=c_1$ 與 $L_2:ax+by=c_2$，其距離為 $d(L_1,L_2)$，公式為：
          <br />
          {'$$d(L_1,L_2)=\\dfrac{|c_1-c_2|}{\\sqrt{a^2+b^2}}$$'}
        </div>
      </Concept>
      <Example num={3} ids={['1828e2079f5', '1828e252132']} height="2.8cm" />
      <Example num={4} ids={['1828e2376fd', '1829278a2da']} height="3.5cm" />
    </Page>
    <Page pageNum={13}>
      <Example num={5} ids={['18292736eb9', '1829279e1e9']} />
      <Example num={6} ids={['182927905cc', '182927a97eb']} />
    </Page>
    <Page pageNum={14}>
      <Example num={7} ids={['182927b3d49', '182927c1bcd']} height="9.4cm" />
      <Concept num={3} title="二元一次不等式">
        <div className={style.conceptHead}>半平面</div>
        <div>
          {'直線 $ax+by=c$ 的圖形把平面分割成兩個半平面，一邊滿足 $ax+by>c$，另一邊滿足 $ax+by<c$'}
        </div>
        <br />
        <div className={style.conceptHead}>半平面的判斷</div>
      </Concept>
    </Page>
    <Page pageNum={15}>
      <Example num={8} ids={['182927d41c7', '182927f0c13']} />
      <Example num={9} ids={['182927e5185', '18292825cfa']} />
    </Page>
    <Page pageNum={16}>
      <Example num={10} ids={['1829280a5a1', '18292856c77']} />
      <Example num={11} ids={['18292812c79', '18292861598']} />
    </Page>
    <Page pageNum={17}>
      <Example num={12} ids={['1829283fcf1', '18292872257']} />
      <Example num={13} ids={['1829288068f', '18292893ba6']} />
    </Page>
  </MathJax>
);

export default C2S2;

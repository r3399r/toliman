import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';
import Page from 'src/pages/lecture/component/Page';

const B2C4Series = () => (
  <MathJax>
    <Page pageNum={1}>
      <div className={style.head}>Ch4 數列級數</div>
      <Concept num={1} title="等差數列與級數">
        <div>{'若首項 $a_1$，公差 $d$：(1) 第 $n$ 項為'}</div>
        <div>{'(2) 前 $n$ 項和為'}</div>
        <br />
        <div>{'(3) 若 $a$、$b$、$c$ 三數成等差，則'}</div>
      </Concept>
      <Exercise ids={['17a3872be1f', '17a3878a91c']} />
      <Concept num={2} title="等比數列與級數">
        <div>{'若首項 $a_1$，公比 $r$：(1) 第 $n$ 項為'}</div>
        <div>{'(2) 前 $n$ 項和為'}</div>
        <br />
        <div>{'(3) 若 $a$、$b$、$c$ 三數成等比，則'}</div>
      </Concept>
      <Exercise ids={['17a38ef2658', '17a38f133a4']} />
    </Page>
    <Page pageNum={2}>
      <Concept num={3} title="單利與複利">
        <div>{'假設本金 $A$，利率 $r$，期數 $n$，'}</div>
        <div>
          {'(1) 單利：本利和$=A+A\\times r\\times n$　　(2) 複利：本利和$=A\\times(1+r)^n$'}
        </div>
      </Concept>
      <Exercise ids={['17a38f954aa', '17a38fa110e']} height="6.5cm" />
      <Concept num={4} title="求和公式">
        <div>{'$1+2+3+\\dots+n=$'}</div>
        <br />
        <div>{'$1^2+2^2+3^2+\\dots+n^2=$'}</div>
        <br />
        <div>{'$1^3+2^3+3^3+\\dots+n^3=$'}</div>
      </Concept>
      <Exercise ids={['17a38ffc8f0', '17a39013d19']} height="7.5cm" />
    </Page>
    <Page pageNum={3}>
      <Concept num={5} title="遞迴數列">
        <div>{'給數列 $\\langle a_n\\rangle$ 的首項及前後項的關係式，稱為該數列的遞迴式。'}</div>
      </Concept>
      <Exercise ids={['17a39109975', '17a3912f008']} height="7cm" />
      <Example num={1} ids={['17a55c297af', '17a55c5894d']} height="9cm" />
    </Page>
    <Page pageNum={4}>
      <Example num={2} ids={['17a55c7d6e2', '17a55ca2296']} />
      <Example num={3} ids={['17a5605dcf4', '17a5606fee2']} />
    </Page>
    <Page pageNum={5}>
      <Example num={4} ids={['17a560a8bbc', '17a560b9cb2']} />
      <Example num={5} ids={['17a560ec3d0', '17a5610d83d']} />
    </Page>
    <Page pageNum={6}>
      <Example num={6} ids={['17a57ce4c98', '17a57d3f244']} />
      <Example num={7} ids={['17a57d7aeac', '17a57da7235']} />
    </Page>
    <Page pageNum={7}>
      <Example num={8} ids={['17a57e93260', '17a57ee10a7']} />
      <Example num={9} ids={['1823960c143', '1823963048a']} />
    </Page>
  </MathJax>
);

export default B2C4Series;

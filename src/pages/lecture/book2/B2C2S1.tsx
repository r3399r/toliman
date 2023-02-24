import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const B2C2S1 = () => (
  <MathJax>
    <Page pageNum={1}>
      <div className={style.head}>1 數列與遞迴關係</div>
      <Concept num={1} title="等差數列與等比數列" height="10.5cm">
        <br />
      </Concept>
      <Example num={1} ids={['17e435ef8a0', '17e435f6dcc']} showAnswer={false} />
    </Page>
    <Page pageNum={2}>
      <Example num={2} ids={['17e436041fd', '17e4360cb0f']} />
      <Example num={3} ids={['17e43614e40', '17e4362ba4d']} />
    </Page>
    <Page pageNum={3}>
      <Example num={4} ids={['17e4361d39a', '17e43639b52']} />
      <Example num={5} ids={['17e43624a58', '17e4363fd23']} />
    </Page>
    <Page pageNum={4}>
      <Concept num={2} title="單利與複利" height="10.5cm">
        <br />
      </Concept>
      <Example num={6} ids={['17e4365da05', '17e4366f627']} />
    </Page>
    <Page pageNum={5}>
      <Concept num={3} title="遞迴關係">
        給數列的前後項關係，則可從第一項開始，不斷地推出下一項，稱為遞迴數列。
      </Concept>
      <Example num={7} ids={['17e4367a1a7', '17e436b3ffd']} height="6.5cm" />
      <Example num={8} ids={['17e436ad9ad', '17e436c240c']} height="6cm" />
    </Page>
    <Page pageNum={6}>
      <Example num={9} ids={['17e436cdb31', '17e436d6d3f']} height="20cm" />
    </Page>
    <Page pageNum={7}>
      <Example num={10} ids={['17e436de3cc', '17e436e88e2']} height="20cm" />
    </Page>
    <Page pageNum={8}>
      <Concept num={4} title="數學歸納法" height="6.6cm">
        有一列無限長的骨牌，如何證明所有的骨牌都會倒？
      </Concept>
      <Example num={11} ids={['17e436f8382', '17e38805738']} height="11.6cm" showAnswer={false} />
    </Page>
    <Page pageNum={9}>
      <Example num={12} ids={['17e436ffaa3', '17e43719f98']} height="20cm" showAnswer={false} />
    </Page>
    <Page pageNum={10}>
      <Example num={13} ids={['17e43708781', '17e3883dd20']} height="20cm" showAnswer={false} />
    </Page>
  </MathJax>
);

export default B2C2S1;

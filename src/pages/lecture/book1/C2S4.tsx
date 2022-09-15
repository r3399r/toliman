import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C2S4 = () => (
  <MathJax>
    <Page pageNum={24}>
      <div className={style.head}>4 圓與直線的關係</div>
      <Concept num={1} title="圓與直線的關係">
        <div>圓半徑 $r$，圓心到直線的距離 $d$</div>
        <div>(1)</div>
        <br />
        <br />
        <div>(2)</div>
        <br />
        <br />
        <div>(3)</div>
        <br />
        <br />
      </Concept>
      <Example num={1} ids={['182c49dce7a', '182c4a902ea']} height="10.5cm" />
    </Page>
    <Page pageNum={25}>
      <Example num={2} ids={['182c4a5b884', '182c4aaf8c2']} />
      <Example num={3} ids={['182c4ade8ff', '182c4b154e1']} />
    </Page>
    <Page pageNum={26}>
      <Concept num={2} title="作圓的切線" height="2.8cm">
        <div>過圓外一點作圓的切線，何謂切線？何謂切點？何謂切線段？</div>
        <br />
        <br />
        <br />
      </Concept>
      <Example num={4} ids={['182c4b3ba92', '182c4b58fef']} height="4.6cm" />
      <Example num={5} ids={['1833e9d6094', '1833ea218e5']} height="5.5cm" />
    </Page>
    <Page pageNum={27}>
      <Example num={6} ids={['182c4f325f2', '182c4f2bc8c']} height="20cm" />
    </Page>
    <Page pageNum={28}>
      <Example num={7} ids={['182c4f5ea3e', '182c4f95e4d']} />
      <Example num={8} ids={['182c4fed962', '182c501a604']} />
    </Page>
  </MathJax>
);

export default C2S4;

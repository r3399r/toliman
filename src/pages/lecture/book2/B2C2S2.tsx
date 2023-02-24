import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const B2C2S2 = () => (
  <MathJax>
    <Page pageNum={11}>
      <div className={style.head}>2 級數求和</div>
      <Concept num={1} title="等差級數與等比級數" height="9.5cm">
        <br />
      </Concept>
      <Example num={1} ids={['17e5b7d2e67', '17e38ced40c']} showAnswer={false} />
    </Page>
    <Page pageNum={12}>
      <Example num={2} ids={['17e5b7ffe2b', '17e5b811b24']} />
      <Example num={3} ids={['17e5b80b592', '17e5b826d1a']} />
    </Page>
    <Page pageNum={13}>
      <Example num={4} ids={['17e5b830d54', '17e5b83d66e']} />
      <Example num={5} ids={['17e38f64acc', '17e38fd6c19']} />
    </Page>
    <Page pageNum={14}>
      <Example num={6} ids={['17e5b8499f7', '17e5b854c38']} height="12cm" />
      <Concept num={2} title="求和公式">
        <br />
      </Concept>
    </Page>
    <Page pageNum={15}>
      <Example num={7} ids={['17e5b869e62', '17e5b85e60a']} />
      <Example num={8} ids={['17e5b870850', '17e5b8762fc']} />
    </Page>
    <Page pageNum={16}>
      <Example num={9} ids={['17e5b884a40', '17e5b895721']} height="20cm" />
    </Page>
  </MathJax>
);

export default B2C2S2;

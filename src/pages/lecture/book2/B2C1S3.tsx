import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const B2C1S3 = () => (
  <MathJax>
    <Page pageNum={15}>
      <div className={style.head}>3 正弦定理與餘弦定理</div>
      <Concept num={1} title="面積公式與正弦定理">
        <div className={style.conceptHead}>面積公式</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>正弦定理</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Concept>
      <Example num={1} ids={['17ea8fd586c', '17ea8fe7ec9']} />
    </Page>
    <Page pageNum={16}>
      <Example num={2} ids={['17ea8fe0799', '17ea8ff12ab']} />
      <Example num={3} ids={['17ea9003cab', '17ea901c4df']} />
    </Page>
    <Page pageNum={17}>
      <Example num={4} ids={['17ea9013ab1', '17ea902635b']} />
      <Example num={5} ids={['17ea90aa075', '17ea90b0e2a']} />
    </Page>
    <Page pageNum={18}>
      <Concept num={2} title="餘弦定理" height="10.6cm">
        <br />
      </Concept>
      <Example num={6} ids={['17ea90cdd49', '17ea90d8ced']} />
    </Page>
    <Page pageNum={19}>
      <Example num={7} ids={['17ea90d1e03', '17ea90e0267']} />
      <Example num={8} ids={['17ea90e51a3', '17ea90eb0aa']} />
    </Page>
    <Page pageNum={20}>
      <Example num={9} ids={['17ea8927413', '17ea8923f68']} />
      <Example num={10} ids={['17ea89353bd', '17ea893f1fa']} />
    </Page>
    <Page pageNum={21}>
      <Concept num={3} title="海龍公式" height="1cm">
        <br />
      </Concept>
      <Example num={11} ids={['17ea89512df', '17ea58dea11']} height="6.1cm" />
      <Example num={12} ids={['17ea8957593', '17ea896b284']} height="6cm" />
    </Page>
  </MathJax>
);

export default B2C1S3;

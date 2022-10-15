import { MathJax } from 'better-react-mathjax';
import Page from './component/Page';
import Question from './component/Question';

const Review05 = () => (
  <MathJax>
    <Page>
      <h3>第壹部分、選擇（填）題（占 85 分）</h3>
      <h4>一、單選題（占 25 分）</h4>
      <Question num={1} id="183d75570f6" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={2} id="183d757525f" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={3} id="183d75a9217" />
      <br />
      <br />
      <br />
      <Question num={4} id="183d75ce5b9" />
    </Page>
    <Page>
      <Question num={5} id="183d7601b38" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>二、多選題（占 25 分）</h4>
      <Question num={6} id="183d76522fb" />
      <br />
      <br />
      <br />
      <br />
      <Question num={7} id="183d766ebeb" />
    </Page>
    <Page>
      <Question num={8} id="183d769ca93" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={9} id="183d76e9317" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={10} id="183d770fc17" />
    </Page>
    <Page>
      <h4>三、選填題（占 35 分）</h4>
      <Question num={11} id="183d7727fb2" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={12} id="183d7752ee8" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={13} id="183d8c9fef2" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={14} id="183d8cbecc6" />
    </Page>
    <Page>
      <Question num={15} id="183d8ce2cc1" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={16} id="183d8d12f90" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={17} id="183d8d2ca73" />
    </Page>
    <Page>
      <h3>第貳部分、混合題或非選擇題（占 15 分）</h3>
      <br />
      <Question id="183d8d5438a" />
      <br />
      <Question num={18} id="183d8d69d1a" />
      <br />
      <br />
      <Question num={19} id="183d8d8d724" />
    </Page>
  </MathJax>
);

export default Review05;

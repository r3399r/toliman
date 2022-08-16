import { MathJax } from 'better-react-mathjax';
import Page from './component/Page';
import Question from './component/Question';

const Review03 = () => (
  <MathJax>
    <Page>
      <h3>第壹部分、選擇（填）題（占 85 分）</h3>
      <h4>一、單選題（占 30 分）</h4>
      <Question num={1} id="18207a17825" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={2} id="182079f4012" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={3} id="18207a67ec1" />
    </Page>
    <Page>
      <Question num={4} id="18207a82d82" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={5} id="18207aa2b6f" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={6} id="18207ac1316" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>二、多選題（占 25 分）</h4>
      <Question num={7} id="18207b021bf" />
    </Page>
    <Page>
      <Question num={8} id="18207bab427" />
      <br />
      <Question num={9} id="18207be6601" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={10} id="18207c333b1" />
    </Page>
    <Page>
      <Question num={11} id="18207c1ce55" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>三、選填題（占 30 分）</h4>
      <Question num={12} id="1829fb61cd1" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={13} id="1829fbea0f0" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={14} id="1829fc38032" />
    </Page>
    <Page>
      <Question num={15} id="1829fc62869" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={16} id="1829fd3e577" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={17} id="1829fda2890" />
    </Page>
    <Page>
      <h3>第貳部分、混合題或非選擇題（占 15 分）</h3>
      <br />
      <Question id="1829fc891e7" />
      <br />
      <Question num={18} id="1829fcc2dd1" />
      <br />
      <br />
      <Question num={19} id="1829fcd6f22" />
    </Page>
  </MathJax>
);

export default Review03;

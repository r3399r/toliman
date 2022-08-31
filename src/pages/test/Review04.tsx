import { MathJax } from 'better-react-mathjax';
import Page from './component/Page';
import Question from './component/Question';

const Review03 = () => (
  <MathJax>
    <Page>
      <h3>第壹部分、選擇（填）題（占 85 分）</h3>
      <h4>一、單選題（占 30 分）</h4>
      <Question num={1} id="182f1ca5587" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={2} id="182f1e1e383" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={3} id="182f1e4e0a6" />
      <br />
      <br />
      <br />
      <Question num={4} id="182f1e74679" />
    </Page>
    <Page>
      <Question num={5} id="182f1e9f5db" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={6} id="182f1f3bc91" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>二、多選題（占 25 分）</h4>
      <Question num={7} id="182f1ef62f9" />
    </Page>
    <Page>
      <Question num={8} id="182f1f78deb" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={9} id="182f2041a1c" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={10} id="182f2091033" />
    </Page>
    <Page>
      <Question num={11} id="182f20ca43b" />
      <br />
      <h4>三、選填題（占 30 分）</h4>
      <Question num={12} id="182f20e19f2" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={13} id="182f20ffa50" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={14} id="182f21240b6" />
    </Page>
    <Page>
      <Question num={15} id="182f243d8da" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={16} id="182f248b32f" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={17} id="182f24c95f4" />
    </Page>
    <Page>
      <h3>第貳部分、混合題或非選擇題（占 15 分）</h3>
      <br />
      <Question id="182f24f099e" />
      <br />
      <Question num={18} id="182f2508076" />
      <br />
      <br />
      <Question num={19} id="182f252689d" />
    </Page>
  </MathJax>
);

export default Review03;

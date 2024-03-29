import { MathJax } from 'better-react-mathjax';
import Page from './component/Page';
import Question from './component/Question';

const Review02 = () => (
  <MathJax>
    <Page>
      <h3>第壹部分、選擇（填）題（占 85 分）</h3>
      <h4>一、單選題（占 30 分）</h4>
      <Question num={1} id="181ed7a9ed9" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={2} id="181ed74679d" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={3} id="181ed84aa34" />
    </Page>
    <Page>
      <Question num={4} id="181ed8c5f05" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={5} id="181ed8e9185" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={6} id="181ed90a29b" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>二、多選題（占 25 分）</h4>
      <Question num={7} id="18206332abe" />
    </Page>
    <Page>
      <Question num={8} id="182063bf53c" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={9} id="182063fe6b8" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={10} id="1820645637d" />
    </Page>
    <Page>
      <Question num={11} id="1820649fdce" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>三、選填題（占 30 分）</h4>
      <Question num={12} id="182064c2b3f" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={13} id="182064ff955" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={14} id="182065333cc" />
    </Page>
    <Page>
      <Question num={15} id="18206555620" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={16} id="18206571fa1" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={17} id="1820659e7b5" />
    </Page>
    <Page>
      <h3>第貳部分、混合題或非選擇題（占 15 分）</h3>
      <br />
      <Question id="182065f04fc" />
      <br />
      <Question num={18} id="182065ff677" />
      <br />
      <br />
      <Question num={19} id="18206615ddc" />
    </Page>
  </MathJax>
);

export default Review02;

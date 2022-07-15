import { MathJax } from 'better-react-mathjax';
import Page from './component/Page';
import Question from './component/Question';

const Review02 = () => {
  return (
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
        <br />
        <Question num={2} id="181ed74679d" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Question num={3} id="181ed84aa34" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Question num={4} id="181ed8c5f05" />
      </Page>
      <Page>
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
        <Question num={7} id="181e23a2ffb" />
      </Page>
      <Page>
        <Question num={8} id="181e23f52d1" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Question num={9} id="181e243dc24" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Question num={10} id="181e2459e50" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Question num={11} id="181e24ae73f" />
      </Page>
      <Page>
        <h4>三、選填題（占 30 分）</h4>
        <Question num={12} id="181e259532c" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Question num={13} id="181e25cd818" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Question num={14} id="181e25f2e1f" />
      </Page>
      <Page>
        <Question num={15} id="181e2637c5f" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Question num={16} id="181e2697128" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Question num={17} id="181e26c651a" />
      </Page>
      <Page>
        <h3>第貳部分、混合題或非選擇題（占 15 分）</h3>
        <br />
        <Question id="181e271596b" />
        <br />
        <Question num={18} id="181e27380a2" />
        <br />
        <br />
        <Question num={19} id="181e365094a" />
      </Page>
    </MathJax>
  );
};

export default Review02;

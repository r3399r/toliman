import { MathJax } from 'better-react-mathjax';
import Page from './component/Page';
import Question from './component/Question';

const Review05 = () => (
  <MathJax>
    <Page>
      <h3>第壹部分、選擇（填）題（占 85 分）</h3>
      <h4>一、單選題（占 25 分）</h4>
      <Question num={1} id="183d7150b4f" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={2} id="183d7164c81" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={3} id="183d717bb86" />
      <br />
      <br />
      <br />
      <Question num={4} id="183d71a9419" />
    </Page>
    <Page>
      <Question num={5} id="183d71dcce0" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>二、多選題（占 30 分）</h4>
      <Question num={6} id="183d721821f" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={7} id="183d7245365" />
    </Page>
    <Page>
      <Question num={8} id="183d726d142" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={9} id="183d72a32c9" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={10} id="183d731a447" />
    </Page>
    <Page>
      <Question num={11} id="183d72dcdd5" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>三、選填題（占 30 分）</h4>
      <Question num={12} id="183d72f576a" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={13} id="183d733a965" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={14} id="183d7391f35" />
    </Page>
    <Page>
      <Question num={15} id="183d741c890" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={16} id="183d744c61e" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Question num={17} id="183d74727d6" />
    </Page>
    <Page>
      <h3>第貳部分、混合題或非選擇題（占 15 分）</h3>
      <br />
      <Question id="183d74f5bfc" />
      <br />
      <Question num={18} id="183d7509d1e" />
      <br />
      <br />
      <Question num={19} id="183d751942d" />
    </Page>
  </MathJax>
);

export default Review05;

import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const B2C1S2 = () => (
  <MathJax>
    <Page pageNum={11}>
      <div className={style.head}>2 三角比的性質</div>
      <Concept num={1} title="商數關係與平方關係" height="10.5cm" />
      <Example num={1} ids={['1855882edca']} />
    </Page>
    <Page pageNum={12}>
      <Example num={2} ids={['17ea8ef9b39', '17ea8f08a2a']} />
      <Example num={3} ids={['17ea8f04310', '17ea8f11a98']} />
    </Page>
  </MathJax>
);

export default B2C1S2;

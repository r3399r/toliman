import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C3S3 = () => (
  <MathJax>
    <Page pageNum={21}>
      <div className={style.head}>3 多項式不等式</div>
      <Concept num={1} title="圖解不等式">
        <div>由函數圖形可看出不等式的解</div>
      </Concept>
      <Example num={1} ids={['1846151e92c', '1846152c200']} showAnswer={false} height="1.5cm" />
      <Example num={2} ids={['182c0bfe5a5', '182c0d34edb']} height="9.5cm" />
    </Page>
    <Page pageNum={22}>
      <Concept num={2} title="二次不等式">
        <div>解題步驟：(1)　　　　　　　　　　　(2)　　　　　　　　　　　(3)</div>
      </Concept>
      <Example num={3} ids={['1837d8c7896', '1837d91e514']} height="6.2cm" />
      <Example num={4} ids={['1837d8dc60f', '1837d96421d']} height="6.2cm" />
    </Page>
    <Page pageNum={23}>
      <Example num={5} ids={['1837d8f249e', '1837d99a6c9']} />
      <Example num={6} ids={['1837d90071f', '1837d981104']} />
    </Page>
    <Page pageNum={24}>
      <Example num={7} ids={['1837d90c5b6', '1837d9abd7e']} />
      <Example num={8} ids={['1837d9d3172', '1837d9e9bea']} />
    </Page>
    <Page pageNum={25}>
      <Concept num={3} title="高次不等式">
        <div>解題步驟：(1)　　　　　　　　　　　(2)　　　　　　　　　　　(3)</div>
      </Concept>
      <Example num={9} ids={['1837da0716e', '1837da5cc70']} height="6.2cm" />
      <Example num={10} ids={['18462792134', '184627a6d1a']} height="6.2cm" />
    </Page>
    <Page pageNum={26}>
      <Example num={11} ids={['1837da1fc03', '1837da7cad4']} />
      <Example num={12} ids={['1837da98f0c', '1837daadbb1']} />
    </Page>
  </MathJax>
);

export default C3S3;

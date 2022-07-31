import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const SquareRoot = () => (
  <MathJax>
    <Page pageNum={11}>
      <div className={style.head}>根式</div>
      <Example num={1} ids={['181d27da1fa', '181d27f3bae']} showAnswer={false} height="6.1cm" />
      <Example num={2} ids={['181d2788e2f', '181d2794dcb']} showAnswer={false} />
    </Page>
    <Page pageNum={12}>
      <Example num={3} ids={['181d27ad6d7', '181d27c56bb']} showAnswer={false} />
      <Example num={4} ids={['181d281172c', '181d282b2d1']} showAnswer={false} />
    </Page>
    <Page pageNum={13}>
      <Example num={5} ids={['181d2875de4', '181d287e58d']} showAnswer={false} />
      <Example num={6} ids={['181d288e091', '181d289ae85']} showAnswer={false} />
    </Page>
    <Page pageNum={14}>
      <Example num={7} ids={['181d29a4cb9', '181d29c17da']} showAnswer={false} />
      <Example num={8} ids={['181d28b0696', '181d28c5aec']} showAnswer={false} />
    </Page>
    <Page pageNum={15}>
      <Example num={9} ids={['181d28d167a', '181d28dffc5']} showAnswer={false} />
      <Example num={10} ids={['181d29f1200', '181d2a016b1']} showAnswer={false} />
    </Page>
  </MathJax>
);

export default SquareRoot;

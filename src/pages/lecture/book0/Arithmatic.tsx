import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const Arithmatic = () => {
  return (
    <MathJax>
      <Page pageNum={1}>
        <div className={style.head}>有理數的四則運算</div>
        <Example num={1} ids={['181cc7a2693', '181cc7b534d']} showAnswer={false} height="2cm" />
        <Example num={2} ids={['181cc882e42', '181cc8957d2']} showAnswer={false} height="3cm" />
        <Example num={3} ids={['181cc8a8a0c', '181cc8ba549']} showAnswer={false} height="3cm" />
      </Page>
      <Page pageNum={2}>
        <Example num={4} ids={['181cc8d3f9c', '181cc8de9f4']} showAnswer={false} height="3cm" />
        <Example num={5} ids={['181ccf8ebff', '181ccf9ff6e']} showAnswer={false} height="3cm" />
        <Example num={6} ids={['181ccfdd7ef', '181ccff362d']} showAnswer={false} height="3cm" />
      </Page>
      <Page pageNum={3}>
        <Example num={7} ids={['181cd018076', '181cd026848']} showAnswer={false} />
        <Example num={8} ids={['181cd032736', '181cd04771c']} showAnswer={false} />
      </Page>
      <Page pageNum={3}>
        <Example num={9} ids={['181cd05db77', '181cd076eba']} showAnswer={false} />
        <Example num={10} ids={['181cd0881e2', '181cd09da53']} showAnswer={false} />
      </Page>
    </MathJax>
  );
};

export default Arithmatic;

import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const Linear = () => {
  return (
    <MathJax>
      <Page pageNum={5}>
        <div className={style.head}>一次式</div>
        <Example num={1} ids={['181cd24f6f3', '181cd265b2a']} showAnswer={false} height="6.1cm" />
        <Example num={2} ids={['181cd27f16f', '181cd290c1b']} showAnswer={false} />
      </Page>
      <Page pageNum={6}>
        <Example num={3} ids={['181cd2abc32', '181cd2b65af']} showAnswer={false} />
        <Example num={4} ids={['181cd35e473', '181cd36b924']} showAnswer={false} />
      </Page>
      <Page pageNum={7}>
        <Example num={5} ids={['181cd392814', '181cd39d840']} showAnswer={false} />
        <Example num={6} ids={['181cd3b253f', '181cd3c941d']} showAnswer={false} />
      </Page>
      <Page pageNum={8}>
        <Example num={7} ids={['181cd3ed6d1', '181cd3fd7bf']} showAnswer={false} height="3.2cm" />
        <Example num={8} ids={['181cd40412b', '181cd40cf18']} showAnswer={false} height="3.2cm" />
        <Example num={9} ids={['181cd423ce2', '181cd431153']} showAnswer={false} height="3cm" />
      </Page>
      <Page pageNum={9}>
        <Example num={10} ids={['181cd571aa3', '181cd57e01b']} showAnswer={false} />
        <Example num={11} ids={['181cd5874ed', '181cd58d259']} showAnswer={false} />
      </Page>
      <Page pageNum={10}>
        <Example num={12} ids={['181cd597097', '181cd59f1fe']} showAnswer={false} />
        <Example num={13} ids={['181cd5bebc2', '181cd5d424a']} showAnswer={false} />
      </Page>
    </MathJax>
  );
};

export default Linear;

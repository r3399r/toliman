import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const Quadratic = () => {
  return (
    <MathJax>
      <Page pageNum={15}>
        <div className={style.head}>二次式</div>
        <Example num={1} ids={['181d4705890', '181d4710393']} showAnswer={false} height="6.1cm" />
        <Example num={2} ids={['181d4728f61', '181d4737871']} showAnswer={false} />
      </Page>
      <Page pageNum={16}>
        <Example num={3} ids={['181d4740b7f', '181d4753b03']} showAnswer={false} />
        <Example num={4} ids={['181d4766aa6', '181d476e221']} showAnswer={false} />
      </Page>
      <Page pageNum={17}>
        <Example num={5} ids={['181d477d55b', '181d478d7db']} showAnswer={false} />
        <Example num={6} ids={['181d47b44db', '181d47c9413']} showAnswer={false} />
      </Page>
      <Page pageNum={18}>
        <Example num={7} ids={['181d47ea80f', '181d47f951b']} showAnswer={false} />
        <Example num={8} ids={['181d4810cbc', '181d481bf70']} showAnswer={false} />
      </Page>
      <Page pageNum={19}>
        <Example num={9} ids={['181d484b3c6', '181d48604ff']} showAnswer={false} />
        <Example num={10} ids={['181d48836b7', '181d4890601']} showAnswer={false} />
      </Page>
      <Page pageNum={20}>
        <Example num={9} ids={['181d61ff798', '181d6207b42']} showAnswer={false} />
        <Example num={10} ids={['181d6215432', '181d621b713']} showAnswer={false} />
      </Page>
    </MathJax>
  );
};

export default Quadratic;

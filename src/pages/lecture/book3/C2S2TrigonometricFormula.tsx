import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C2S2TrigonometricFormula = () => (
  <div>
    <Page pageNum={6}>
      <div className={style.head}>2 和差角與倍半角公式</div>
      <Concept num={1} title="和角公式與差角公式">
        <Textarea2MathJax
          text={
            '$\\sin$ 和角：$\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B$\n$\\sin$ 差角：$\\sin(A-B)=\\sin A\\cos B-\\cos A\\sin B$'
          }
        />
        <Textarea2MathJax
          text={
            '$\\cos$ 和角：$\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B$\n$\\cos$ 差角：$\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B$'
          }
        />
        <Textarea2MathJax
          text={
            '$\\tan$ 和角：$\\tan(A+B)=\\frac{\\tan A+\\tan B}{1-\\tan A\\tan B}$\n$\\tan$ 差角：$\\tan(A-B)=\\frac{\\tan A-\\tan B}{1+\\tan A\\tan B}$'
          }
        />
      </Concept>
    </Page>
    <Page pageNum={7}>
      <Example num={1} ids={['17ba297a6a2', '17ba29a6829']} />
      <Example num={2} ids={['17ba29be2e8', '17ba29e4a1c']} />
    </Page>
    <Page pageNum={8}>
      <Example num={3} ids={['17ba29f4deb', '17ba29fd591']} />
      <Example num={4} ids={['17ba2a0d65c', '17ba2a24315']} />
    </Page>
    <Page pageNum={9}>
      <Example num={5} ids={['17ba2a41517', '17ba2a694dc']} />
      <Example num={6} ids={['17ba2a8ddea', '17ba2aba994']} />
    </Page>
    <Page pageNum={10}>
      <Concept num={2} title="倍角公式與半角公式">
        <div className={style.conceptHead}>二倍角公式</div>
        <Textarea2MathJax
          text={'(1) $\\sin$ 二倍角公式：$\\sin2\\theta=2\\sin\\theta\\cos\\theta$'}
        />
        <Textarea2MathJax
          text={
            '(2) $\\cos$ 二倍角公式：$\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta=1-2\\sin^2\\theta=2\\cos^2\\theta-1$'
          }
        />
        <Textarea2MathJax
          text={'(3) $\\tan$ 二倍角公式：$\\tan2\\theta=\\frac{2\\tan\\theta}{1-\\tan^2\\theta}$'}
        />
        <div className={style.conceptHead}>半角</div>
        <Textarea2MathJax
          text={
            '(1) $\\sin$ 與 $\\cos$ 的半角：將 $\\cos2\\theta=1-2\\sin^2\\theta=2\\cos^2\\theta-1$ 的公式移項即可，不須另外背公式'
          }
        />
        <Textarea2MathJax
          text={
            '(2) $\\tan$ 的半角：利用定義 $\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$ 即可'
          }
        />
        <div className={style.conceptHead}>三倍角公式</div>
        <Textarea2MathJax
          text={'(1) $\\sin$ 的三倍角：$\\sin3\\theta=3\\sin\\theta-4\\sin^3\\theta$'}
        />
        <Textarea2MathJax
          text={'(2) $\\cos$ 的三倍角：$\\cos3\\theta=4\\cos^3\\theta-3\\cos\\theta$'}
        />
      </Concept>
    </Page>
    <Page pageNum={11}>
      <Example num={7} ids={['17ba2adf49e', '17ba2b4b4fa']} height="23cm" />
    </Page>
    <Page pageNum={12}>
      <Example num={8} ids={['17ba2b7d49a', '17ba2b6dfb6']} />
      <Example num={9} ids={['17ba2b99f07', '17ba2bcfe38']} />
    </Page>
    <Page pageNum={13}>
      <Example num={10} ids={['17ba2c01e3b', '17ba2c43223']} height="23cm" />
    </Page>
    <Page pageNum={14}>
      <Example num={11} ids={['17ba2c65081', '17ba2c789ce']} />
      <Example num={12} ids={['17ba2c90c78', '17ba2ca2142']} />
    </Page>
    <Page pageNum={15}>
      <Example num={13} ids={['17ba2cb3385', '17ba2ccc9d6']} />
    </Page>
  </div>
);

export default C2S2TrigonometricFormula;

import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C2S3 = () => (
  <MathJax>
    <Page pageNum={18}>
      <div className={style.head}>3 圓方程式</div>
      <Concept num={1} title="圓方程式">
        <div className={style.conceptHead}>標準式</div>
        <div>圓心 $(p,q)$，半徑 $r$</div>
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>一般式</div>
        <div>將「標準式」展開後的模樣即稱為「一般式」，利用配方法可將「一般式」配成「標準式」</div>
      </Concept>
      <Example num={1} ids={['182928cabc2', '182928f5481']} height="3.6cm" />
      <Example num={2} ids={['182928d33bd', '182929009f8']} height="3.5cm" />
    </Page>
    <Page pageNum={19}>
      <Example num={3} ids={['182928ecc5e', '1829290af50']} />
      <Example num={4} ids={['1829291be5b', '182b73a19ad']} />
    </Page>
    <Page pageNum={20}>
      <Example num={5} ids={['18292928531', '182b73f316b']} />
      <Example num={6} ids={['182b740b006', '182b741e3c9']} />
    </Page>
    <Page pageNum={21}>
      <Example num={7} ids={['182b76131a8', '182b760c59a']} />
      <Example num={8} ids={['182b7490438', '182b74a34b4']} />
    </Page>
    <Page pageNum={22}>
      <Example num={9} ids={['182b74754b7', '182b74bc773']} />
      <Example num={10} ids={['182b75fe882', '182b7637fd5']} />
    </Page>
    <Page pageNum={23}>
      <Concept num={2} title="圓內與圓外" height="6.5cm">
        <br />
        <br />
        <br />
        <br />
      </Concept>
      <Example num={11} ids={['182b766b62e', '182c4a66798']} height="11.5cm" />
    </Page>
  </MathJax>
);

export default C2S3;

import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C1S2Absolute = () => (
  <MathJax>
    <Page pageNum={11}>
      <div className={style.head}>2 絕對值</div>
      <Concept num={1} title="絕對值的意義">
        <div>1. 定義：絕對值內若為正，則可直接變成括號；若為負，則變成括號時要加個負號</div>
        <div>2. 圖形意義：$|a-b|$ 代表 $a$ 和 $b$ 的距離</div>
      </Concept>
      <Example num={1} ids={['18255547db9', '1825558ad4b']} height="5.2cm" />
      <Example num={2} ids={['1825555eef4', '1825559febb']} height="5.4cm" />
    </Page>
    <Page pageNum={12}>
      <Example num={3} ids={['17c2b915c10', '17c2b92fc44']} />
      <Example num={4} ids={['17c2b924fe6', '17c2b93c90b']} />
    </Page>
    <Page pageNum={13}>
      <Example num={5} ids={['17c2b0f8115', '17c2b22ab34']} />
      <Example num={6} ids={['17c2b519174', '17c2b245f7f']} />
    </Page>
    <Page pageNum={14}>
      <Example num={7} ids={['182555b6ded', '182555c1f06']} />
      <Example num={8} ids={['182555dea8b', '1825560c2b0']} />
    </Page>
  </MathJax>
);

export default C1S2Absolute;

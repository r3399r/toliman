import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const B2C3S3 = () => (
  <MathJax>
    <Page pageNum={19}>
      <div className={style.head}>3 組合與二項式定理</div>
      <Concept num={1} title="組合數 C 的定義與性質">
        <div>n 個物品取 r 個，有幾種？</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>{'$C^n_r$ 的求值：'}</div>
        <br />
        <div>{'$C^n_r$ 的餘組合性質：'}</div>
      </Concept>
      <Example num={1} ids={['17e6c96b61c', '17e6c97ade5']} height="1.5cm" />
      <Example num={2} ids={['17e6c971c15', '17e6c97ecb4']} height="4.9cm" />
    </Page>
    <Page pageNum={20}>
      <Example num={3} ids={['17e6c984524', '17e6c98ac8f']} />
      <Example num={4} ids={['17e6c98fdcb', '17e6c9b3226']} />
    </Page>
    <Page pageNum={21}>
      <Example num={5} ids={['17e6c9937a4', '17e6c9aff55']} />
      <Example num={6} ids={['17e6c9bd3ca', '17e6c9b8849']} />
    </Page>
    <Page pageNum={22}>
      <Example num={7} ids={['17e6c9c8de8', '17e6c9c32c0']} />
      <Example num={8} ids={['17e6c9bd3ca', '17e6c9b8849']} />
    </Page>
    <Page pageNum={23}>
      <Example num={9} ids={['17e6c9d2943', '17e6c9da340']} />
    </Page>
    <Page pageNum={24}>
      <Concept num={2} title="巴斯卡定理" height="3.5cm">
        「有我」與「沒有我」的內心小劇場
      </Concept>
      <Example num={10} ids={['17e6c9e0b5f', '17e6c9eafc1']} height="2cm" />
      <Example num={11} ids={['17e6c9e5e69', '17e6c9ef513']} />
    </Page>
    <Page pageNum={25}>
      <Concept num={3} title="二項式定理" height="10cm">
        <br />
      </Concept>
      <Example num={12} ids={['17e6ca152fb', '17e6ca2d059']} />
    </Page>
    <Page pageNum={26}>
      <Example num={13} ids={['17e6c9f8702', '17e6ca28f28']} />
      <Example num={14} ids={['186ca6d8c82', '186ca6dffa7']} />
    </Page>
  </MathJax>
);

export default B2C3S3;

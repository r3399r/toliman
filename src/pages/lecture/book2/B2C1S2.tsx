import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const B2C1S2 = () => (
  <MathJax>
    <Page pageNum={11}>
      <div className={style.head}>2 三角比的性質</div>
      <Concept num={1} title="商數關係與平方關係">
        <div>{'商數關係：$\\tan\\theta=\\dfrac{\\sin\\theta}{\\cos\\theta}$'}</div>
        <div>{'平方關係：$\\cos^2\\theta+\\sin^2\\theta=1$'}</div>
      </Concept>
      <Example num={1} ids={['17ea8f4fe4a', '17ea8f58c06']} height="5.4cm" />
      <Example num={2} ids={['17ea8f55181', '17ea8f5e597']} height="5cm" />
    </Page>
    <Page pageNum={12}>
      <Example num={3} ids={['17ea8f64f4f', '17ea8f6faeb']} height="6cm" />
      <Example num={4} ids={['17ea8f6bcf2', '17ea8f89829']} height="9cm" />
    </Page>
    <Page pageNum={13}>
      <Example num={5} ids={['17ea8f8e564', '17ea8f94860']} height="6cm" />
      <Concept num={2} title="角度變換">
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            $\cos(180\du-\theta)=$
            <br />
            $\sin(180\du-\theta)=$
            <br />
            $\tan(180\du-\theta)=$
          </div>
          <div style={{ width: '50%' }}>
            $\cos(90\du-\theta)=$
            <br />
            $\sin(90\du-\theta)=$
            <br />
            $\tan(90\du-\theta)=$
          </div>
        </div>
        <br />
        <br />
        <br />
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            $\cos(180\du+\theta)=$
            <br />
            $\sin(180\du+\theta)=$
            <br />
            $\tan(180\du+\theta)=$
          </div>
          <div style={{ width: '50%' }}>
            $\cos(90\du+\theta)=$
            <br />
            $\sin(90\du+\theta)=$
            <br />
            $\tan(90\du+\theta)=$
          </div>
        </div>
        <br />
        <br />
        <br />
        <div style={{ display: 'flex' }}>
          <div style={{ width: '50%' }}>
            $\cos(-\theta)=$
            <br />
            $\sin(-\theta)=$
            <br />
            $\tan(-\theta)=$
          </div>
          <div style={{ width: '50%' }}>
            $\cos(270\du-\theta)=$
            <br />
            $\sin(270\du-\theta)=$
            <br />
            $\tan(270\du-\theta)=$
          </div>
        </div>
      </Concept>
    </Page>
    <Page pageNum={14}>
      <Example num={6} ids={['17ea8fa29fa', '17ea8fc3d48']} />
      <Example num={7} ids={['17ea8fc7abc', '17ea8fce8e1']} />
    </Page>
  </MathJax>
);

export default B2C1S2;

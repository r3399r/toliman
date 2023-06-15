import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C2S1Radius = () => (
  <div>
    <Page pageNum={1}>
      <div className={style.head}>1 弧度、扇形與三角比</div>
      <Concept num={1} title="弧度與扇形">
        <div className={style.conceptHead}>弧度</div>
        <div>
          {
            '給角 $\\theta$，以不同的半徑作圓弧，其扇形弧長 $l$ 與半徑 $r$ 的比值為定值，這個比值與角 $\\theta$ 的大小成正比，因此可用這個比值代表角 $\\theta$ 的大小，即：$\\theta=\\dfrac{l}{r}$'
          }
          <br />
          {'$\\theta$ 是沒有單位的實數值，稱為「弧度」或「弳」。'}
        </div>
        <br />
        <div className={style.conceptHead}>換算公式</div>
        <div>{'一圓周 $360^\\circ=2\\pi$'}</div>
        <br />
        <br />
        <div className={style.conceptHead}>扇形的弧長與面積</div>
        <div>
          {'扇形的中心角為 $\\theta$ 弳，半徑為 $r$，則由扇形所占圓形的比例可得：'}
          <br />
          {
            '(1) 扇形弧長 $=2\\pi r\\cdot\\dfrac{\\theta}{2\\pi}=r\\theta$　　　(2) 扇形面積 $=\\pi r^2\\cdot\\dfrac{\\theta}{2\\pi}{}=\\dfrac{1}{2}r^2\\theta$'
          }
        </div>
      </Concept>
      <Example num={1} ids={['17ba25059e3', '17ba253c681']} height="8cm" />
    </Page>
    <Page pageNum={2}>
      <Example num={2} ids={['17ba2551cf6', '17ba2577fd6']} />
      <Example num={3} ids={['17ba25a9419', '17ba25c5bbe']} />
    </Page>
    <Page pageNum={3}>
      <Example num={4} ids={['17ba25eb0d0', '17ba25fd195']} />
      <Example num={5} ids={['17ba260ecdd', '17ba261e9d7']} />
    </Page>
    <Page pageNum={4}>
      <Concept num={2} title="三角比 cot、sec、csc">
        <div>
          {'(1) 餘切值 $\\cot\\theta=\\dfrac{1}{\\tan\\theta}$'}
          <br />
          <br />
          {'(2) 正割值 $\\sec\\theta=\\dfrac{1}{\\cos\\theta}$'}
          <br />
          <br />
          {'(3) 餘割值 $\\csc\\theta=\\dfrac{1}{\\sin\\theta}$'}
        </div>
        <br />
      </Concept>
      <Example num={6} ids={['17ba263e2f0', '17ba266c61e']} height="13.5cm" />
    </Page>
    <Page pageNum={5}>
      <Example num={7} ids={['17ba268d707', '17ba26a80e7']} height="20cm" />
    </Page>
  </div>
);

export default C2S1Radius;

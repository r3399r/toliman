import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C2S1Radius = () => {
  return (
    <div>
      <Page pageNum={1}>
        <div className={style.head}>1 弧度、扇形與三角比</div>
        <Concept num={1} title="弧度與扇形">
          <div className={style.conceptHead}>弧度</div>
          <Textarea2MathJax
            text={
              '給角 $\\theta$，以不同的半徑作圓弧，其扇形弧長與半徑得比值為定值，這個比值與角 $\\theta$ 的大小成正比，因此可用這個比值代表角 $\\theta$ 的大小，即：\n$\\theta=\\frac{l}{r}$\n是沒有單位的實數值，稱為「弧度」或「弳」。'
            }
          />
          <div className={style.conceptHead}>換算公式</div>
          <Textarea2MathJax
            text={
              '一圓周 $360^\\circ=\\frac{2\\pi r}{r}=2\\pi$，同除以 $2$ 得換算公式 $\\pi=180^\\circ$\n再同除以 $\\pi$ 可得 $1=\\left(\\frac{180}{\\pi}\\right)^\\circ\\approx57.3^\\circ$\n'
            }
          />
          <div className={style.conceptHead}>扇形的弧長與面積</div>
          <Textarea2MathJax
            text={
              '扇形的中心角為 $\\theta$ 弳，半徑為 $r$，則由扇形所占圓形的比例可得：\n(1) 扇形弧長 $=2\\pi r\\cdot\\frac{\\theta}{2\\pi}=r\\theta$\n(2) 扇形面積 $=\\pi r^2\\cdot\\frac{\\theta}{2\\pi}{}=\\frac{1}{2}r^2\\theta$'
            }
          />
        </Concept>
        <Example num={1} ids={['17ba25059e3', '17ba253c681']} height="9.5cm" />
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
          <div className={style.conceptHead}>複習 sin、cos、tan</div>
          <Textarea2MathJax
            text={
              '有向角 $\\theta$ 以 $x$ 軸為正向為始邊，逆時針轉 $\\theta$ 至終邊，終邊與單位圓之交點 $P$ 為 $(\\cos\\theta,\\sin\\theta)$，其中 $\\cos\\theta$ 為餘弦值，$\\sin\\theta$ 為正弦值。而正切值 $\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$。'
            }
          />
          <div className={style.conceptHead}>三角比 cot、sec、sec 的定義</div>
          <Textarea2MathJax
            text={
              '(1) 餘切值 $\\cot\\theta=\\frac{1}{\\tan\\theta}$\n(2) 正割值 $\\sec\\theta=\\frac{1}{\\cos\\theta}$\n(1) 餘割值 $\\csc\\theta=\\frac{1}{\\sin\\theta}$'
            }
          />
        </Concept>
        <Example num={6} ids={['17ba263e2f0', '17ba266c61e']} height="16cm" />
      </Page>
      <Page pageNum={5}>
        <Example num={7} ids={['17ba268d707', '17ba26a80e7']} />
      </Page>
    </div>
  );
};

export default C2S1Radius;

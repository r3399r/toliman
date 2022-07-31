import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';
import Page from 'src/pages/lecture/component/Page';

const B3C8TrigonometricFunction = () => (
  <div>
    <Page pageNum={1}>
      <div className={style.head}>Ch8 三角函數</div>
      <Concept num={1} title="弧度定義與換算公式">
        <Textarea2MathJax
          text={
            '單位圓中，角 $\\theta$ 所對之圓弧長，稱為弧度，又稱弳，所以 $\\pi=180^\\circ$，$1=\\frac{180^\\circ}{\\pi}\\approx57.3^\\circ$。'
          }
        />
      </Concept>
      <Exercise ids={['17b64a843b2', '17b64ab243b']} height="7cm" />
      <Concept num={2} title="扇形的弧長與面積" height="2cm">
        <Textarea2MathJax
          text={
            '設扇形的半徑為 $r$，中心角為 $\\theta$ 弳，則 $\\theta$ 所對的弧長為 $r\\theta$，面積為 $\\frac{1}{2}r^2\\theta$。'
          }
        />
      </Concept>
      <Exercise ids={['17b64ae2615', '17b64af334b']} height="7cm" />
    </Page>
    <Page pageNum={2}>
      <Concept num={3} title="和角、差角公式 (數A)">
        <Textarea2MathJax
          text={
            '$\\sin$ 的和角：$\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B$\n$\\sin$ 的差角：$\\sin(A-B)=\\sin A\\cos B-\\cos A\\sin B$'
          }
        />
        <Textarea2MathJax
          text={
            '$\\cos$ 的和角：$\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B$\n$\\cos$ 的差角：$\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B$'
          }
        />
        <Textarea2MathJax
          text={
            '$\\tan$ 的和角：$\\tan(A+B)=\\frac{\\tan A+\\tan B}{1-\\tan A\\tan B}$\n$\\tan$ 的差角：$\\tan(A-B)=\\frac{\\tan A-\\tan B}{1+\\tan A\\tan B}'
          }
        />
      </Concept>
      <Exercise ids={['17b64b61b0b', '17b64b76a9c']} />
      <Concept num={4} title="二倍角公式 (數A)">
        <Textarea2MathJax text={'$\\sin$ 的二倍角：$\\sin2\\theta=2\\sin\\theta\\cos\\theta$'} />
        <Textarea2MathJax
          text={'$\\cos$ 的二倍角：$\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta$'}
        />
        <Textarea2MathJax
          text={'$\\tan$ 的二倍角：$\\tan2\\theta=\\frac{2\\tan\\theta}{1-\\tan^2\\theta}$'}
        />
      </Concept>
      <Exercise ids={['17b738a20a1', '17b738c5a2e']} />
    </Page>
    <Page pageNum={3}>
      <Concept num={5} title="半角公式 (數A)">
        <Textarea2MathJax text={'半角公式可由 $\\cos$ 的二倍角公式推得。'} />
      </Concept>
      <Exercise ids={['17b7392533f', '17b73936315']} height="7.5cm" />
      <Concept num={6} title="三倍角公式 (數A)">
        <Textarea2MathJax
          text={'$\\sin$ 的三倍角：$\\sin3\\theta=3\\sin\\theta-4\\sin^3\\theta$'}
        />
        <Textarea2MathJax
          text={'$\\cos$ 的三倍角：$\\cos3\\theta=4\\cos^3\\theta-3\\cos\\theta$'}
        />
      </Concept>
      <Exercise ids={['17b7395c7e2', '17b7396db1b']} height="7.5cm" />
    </Page>
    <Page pageNum={4}>
      <Concept num={7} title="三角函數的圖形">
        <img
          className={style.float}
          src="/toliman/images/三角函數.PNG"
          alt=""
          role="presentation"
        />
        <Textarea2MathJax
          text={
            '(1) 函數 $f(x)=\\sin x$ 的圖形如右，週期為　　。\n(2) 函數 $f(x)=\\cos x$ 的圖形如右，週期為　　。\n(3) 函數 $f(x)=\\tan x$ 的圖形如右，週期為　　。'
          }
        />
      </Concept>
      <Exercise ids={['17b739bf1ba']} />
      <Concept num={8} title="函數圖形的變化" height="3.3cm">
        <Textarea2MathJax
          text={
            '(1) $f(x)$ 的圖形，上移 $k$ 即為 $y=f(x)+k$ 的圖形，下移 $k$ 即為 $y=f(x)-k$ 的圖形'
          }
        />
        <Textarea2MathJax
          text={
            '(2) $f(x)$ 的圖形，左移 $k$ 即為 $y=f(x+k)$ 的圖形，右移 $k$ 即為 $y=f(x-k)$ 的圖形'
          }
        />
        <Textarea2MathJax
          text={'(3) $f(x)$ 的圖形以 $x$ 軸為基準，上下伸縮為 $k$ 倍，即為 $y=k\\cdot f(x)$ 的圖形'}
        />
        <Textarea2MathJax
          text={
            '(4) $f(x)$ 的圖形以 $y$ 軸為基準，左右伸縮為 $\\frac{1}{k}$ 倍，即為 $y=f(kx)$ 的圖形'
          }
        />
        <Textarea2MathJax
          text={
            '(5) 綜合變化： $y=c\\cdot f(ax+b)+d$ 的處理順序為 $a\\rightarrow\\frac{b}{a}\\rightarrow c\\rightarrow d$。'
          }
        />
      </Concept>
      <Exercise ids={['17b73a6f1c5', '17b73a9657d']} height="7cm" />
    </Page>
    <Page pageNum={5}>
      <Concept num={9} title="正餘弦疊合 (數A)">
        <Textarea2MathJax
          text={
            '設 $a,b\\in\\mathbb{R}$，函數 $f(x)=a\\sin x+b\\cos x$ 在提出 $\\sqrt{a^2+b^2}$ 後，可利用和差角公式合併成 $f(x)=\\sqrt{a^2+b^2}\\sin(x+\\theta)$ 或 $\\sqrt{a^2+b^2}\\cos(x-\\theta)$，因此 $f(x)$ 仍為週期函數且週期為 $2\\pi$。若 $x$ 沒有範圍限制，則 $f(x)$ 的最大值為 $\\sqrt{a^2+b^2}$，最小值為 $-\\sqrt{a^2+b^2}$。'
          }
        />
      </Concept>
      <Exercise ids={['17b741d382b', '17b7420b612']} height="6.6cm" />
      <Example num={1} ids={['17b742931cf', '17b742d3338']} />
    </Page>
    <Page pageNum={6}>
      <Example num={2} ids={['17b7439275c', '17b743be7ea']} />
      <Example num={3} ids={['17b743f2946', '17b74415bfb']} note=" (A)" />
    </Page>
    <Page pageNum={7}>
      <Example num={4} ids={['17b7e1d24b8', '17b7e2314d6']} note=" (A)" />
      <Example num={5} ids={['17b7e251b1f', '17b7e281805']} note=" (A)" />
    </Page>
    <Page pageNum={8}>
      <Example num={6} ids={['17b7e3099e8', '17b7e33f865']} note=" (A)" />
      <Example num={7} ids={['17b7e3e015b', '17b7e414060']} />
    </Page>
    <Page pageNum={9}>
      <Example num={8} ids={['17b7e45604e', '17b7e4c391e']} />
      <Example num={9} ids={['17b7e4f1e51', '17b7e5131d7']} note=" (A)" />
    </Page>
  </div>
);

export default B3C8TrigonometricFunction;

import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';
import Page from 'src/pages/lecture/component/Page';

const B3C8TrigonometricFunction = () => (
  <MathJax>
    <Page pageNum={1}>
      <div className={style.head}>Ch8 三角函數</div>
      <Concept num={1} title="弧度定義與換算公式">
        <div>
          {
            '單位圓中，角 $\\theta$ 所對之圓弧長，稱為弧度，又稱弳，所以 $\\pi=180^\\circ$，$1=\\dfrac{180^\\circ}{\\pi}\\approx57.3^\\circ$。'
          }
        </div>
      </Concept>
      <Exercise ids={['17b64a843b2', '17b64ab243b']} height="7cm" />
      <Concept num={2} title="扇形的弧長與面積">
        <div>
          {
            '設扇形的半徑為 $r$，中心角為 $\\theta$ 弳，則 $\\theta$ 所對的弧長為 $r\\theta$，面積為 $\\dfrac12r^2\\theta$。'
          }
        </div>
        <br />
        <br />
      </Concept>
      <Exercise ids={['17b64ae2615', '17b64af334b']} height="7cm" />
    </Page>
    <Page pageNum={2}>
      <Concept num={3} title="和角、差角公式 (數A)">
        <div>$\sin$ 的和差角：$\sin(A\pm B)=$</div>
        <br />
        <div>$\cos$ 的和差角：$\cos(A\pm B)=$</div>
        <br />
        <div>$\tan$ 的和差角：$\tan(A\pm B)=$</div>
      </Concept>
      <Exercise ids={['17b64b61b0b', '17b64b76a9c']} />
      <Concept num={4} title="二倍角公式 (數A)">
        <div>$\sin$ 的兩倍角：$\sin2\theta=$</div>
        <br />
        <div>$\cos$ 的兩倍角：$\cos2\theta=$</div>
        <br />
        <div>$\tan$ 的兩倍角：$\tan2\theta=$</div>
      </Concept>
      <Exercise ids={['17b738a20a1', '17b738c5a2e']} />
    </Page>
    <Page pageNum={3}>
      <Concept num={5} title="半角公式 (數A)">
        <div>
          半角公式可由 $\cos$ 的二倍角公式 $\cos2\theta=2\sin^2\theta-1=1-2\cos^2\theta$推得。
        </div>
      </Concept>
      <Exercise ids={['17b7392533f', '17b73936315']} height="7.9cm" />
      <Concept num={6} title="三倍角公式 (數A)">
        <div>$\sin$ 的三倍角：$\sin3\theta=$</div>
        <br />
        <div>$\cos$ 的三倍角：$\cos3\theta=$</div>
      </Concept>
      <Exercise ids={['17b7395c7e2', '17b7396db1b']} height="7.9cm" />
    </Page>
    <Page pageNum={4}>
      <Concept num={7} title="三角函數的圖形">
        <img
          className={style.float}
          src="/toliman/images/三角函數.PNG"
          alt=""
          role="presentation"
        />
        <div>
          (1) 函數 $f(x)=\sin x$ 的圖形如右，週期為　　。
          <br />
          (2) 函數 $f(x)=\cos x$ 的圖形如右，週期為　　。
          <br />
          (3) 函數 $f(x)=\tan x$ 的圖形如右，週期為　　。
        </div>
      </Concept>
      <Exercise ids={['17b739bf1ba']} />
      <Concept num={8} title="函數圖形的變化" height="3.3cm">
        <div>
          (1) $f(x)$ 的圖形，上移 $k$ 即為 $y=f(x)+k$ 的圖形，下移 $k$ 即為 $y=f(x)-k$ 的圖形
        </div>
        <div>
          (2) $f(x)$ 的圖形，左移 $k$ 即為 $y=f(x+k)$ 的圖形，右移 $k$ 即為 $y=f(x-k)$ 的圖形
        </div>
        <div>(3) $f(x)$ 的圖形以 $x$ 軸為基準，上下伸縮為 $k$ 倍，即為 $y=k\cdot f(x)$ 的圖形</div>
        <div>
          {'(4) $f(x)$ 的圖形以 $y$ 軸為基準，左右伸縮為 $\\dfrac1k$ 倍，即為 $y=f(kx)$ 的圖形'}
        </div>
        <div>
          {
            '(5) 綜合變化： $y=c\\cdot f(ax+b)+d$ 的處理順序為 $a\\rightarrow\\dfrac b a\\rightarrow c\\rightarrow d$。'
          }
        </div>
      </Concept>
      <Exercise ids={['17b73a6f1c5', '17b73a9657d']} height="7cm" />
    </Page>
    <Page pageNum={5}>
      <Concept num={9} title="正餘弦疊合 (數A)">
        <div>
          {
            '設 $a,b\\in\\mathbb{R}$，函數 $f(x)=a\\sin x+b\\cos x$ 可利用和角公式化簡為 $f(x)=\\sqrt{a^2+b^2}\\sin(x+\\theta)$，推導：'
          }
        </div>
        <br />
        <br />
        <br />
        <div>
          因此 $f(x)$ 仍為週期函數且週期為 $2\pi$。
          <br />
          {
            '若 $x$ 沒有範圍限制，則 $f(x)$ 的最大值為 $\\sqrt{a^2+b^2}$，最小值為 $-\\sqrt{a^2+b^2}$。'
          }
        </div>
      </Concept>
      <Exercise ids={['17b741d382b', '17b7420b612']} height="5.9cm" />
      <Example num={1} ids={['17b742931cf', '17b742d3338']} height="6.3cm" />
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
  </MathJax>
);

export default B3C8TrigonometricFunction;

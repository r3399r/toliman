import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C2S3TrigonometricFunction = () => {
  return (
    <div>
      <Page pageNum={16}>
        <div className={style.head}>3 三角函數的圖形與正餘弦疊合</div>
        <Concept num={1} title="三角函數的圖形">
          <div className={style.conceptHead}>函數的定義域與值域</div>
          <Textarea2MathJax
            text={
              '讓函數 $f(x)$ 有意義的 $x$ 的範圍稱為「定義域」；$f(x)$ 的函數值 $y$ 的範圍稱為「值域」。'
            }
          />
          <Textarea2MathJax
            text={
              '例如：$f(x)=\\sqrt{(x-1)(x-2)}$ 的定義域為 $\\{x|x\\le1\\lor x\\ge2\\}$，值域為 $\\{y|y\\ge0\\}$。'
            }
          />
          <div className={style.conceptHead}>週期的定義</div>
          <Textarea2MathJax
            text={
              '當 $f(x)$ 的函數圖形每間隔一個段落就重複出現時，稱 $f(x)$ 為週期函數。從圖形可以判別是否為週期函數，並看出週期的大小。'
            }
          />
          <div className={style.conceptHead}>三角函數的圖形</div>
          <Textarea2MathJax text={'正弦函數 $y=\\sin x$ 之週期為　　，振幅為　　。'} />
          <Textarea2MathJax
            text={
              '$\\begin{array}{c|c}x&0&\\frac{\\pi}{6}&\\frac{\\pi}{4}&\\frac{\\pi}{3}&\\frac{\\pi}{2}&\\frac{2\\pi}{3}&\\frac{3\\pi}{4}&\\frac{5\\pi}{6}&\\pi&\\frac{3\\pi}{2}&2\\pi\\\\ \\hline\\sin x\\end{array}$'
            }
          />
          <div className={style.plot}>
            <img alt="" role="presentation" src="/toliman/images/三角函數格子.PNG" />
          </div>
          <Textarea2MathJax text={'餘弦函數 $y=\\cos x$ 之週期為　　，振幅為　　。'} />
          <Textarea2MathJax
            text={
              '$\\begin{array}{c|c}x&0&\\frac{\\pi}{6}&\\frac{\\pi}{4}&\\frac{\\pi}{3}&\\frac{\\pi}{2}&\\frac{2\\pi}{3}&\\frac{3\\pi}{4}&\\frac{5\\pi}{6}&\\pi&\\frac{3\\pi}{2}&2\\pi\\\\ \\hline\\cos x\\end{array}$'
            }
          />{' '}
        </Concept>
      </Page>
      <Page pageNum={17}>
        <Concept num={1} title="三角函數的圖形">
          <div className={style.plot}>
            <img alt="" role="presentation" src="/toliman/images/三角函數格子.PNG" />
          </div>
          <Textarea2MathJax text={'正切函數 $y=\\tan x$ 之週期為　　。'} />
          <Textarea2MathJax
            text={
              '$\\begin{array}{c|c}x&0&\\frac{\\pi}{6}&\\frac{\\pi}{4}&\\frac{\\pi}{3}&\\frac{\\pi}{2}&\\frac{2\\pi}{3}&\\frac{3\\pi}{4}&\\frac{5\\pi}{6}\\\\ \\hline\\tan x\\end{array}$'
            }
          />
          <div className={style.plot}>
            <img alt="" role="presentation" src="/toliman/images/三角函數格子.PNG" />
          </div>
          <div className={style.conceptHead}>函數圖形的變化</div>
          <Textarea2MathJax text={'(1) 上下平移：$y=f(x)+d$，為上移 $d$ 單位。'} />
          <Textarea2MathJax text={'(2) 左右平移：$y=f(x+b)$，為左移 $b$ 單位。'} />
          <Textarea2MathJax text={'(3) 上下伸縮：$y=c\\cdot f(x)$，為上下拉長成 $c$ 倍。'} />
          <Textarea2MathJax text={'(4) 左右伸縮：$y=f(ax)$，為左右壓縮成 $\\frac{1}{a}$ 倍。'} />
        </Concept>
      </Page>
      <Page pageNum={18}>
        <Example num={1} ids={['17ba72f600a', '17ba731bf10']} height="15cm" />
        <Concept num={2} title="三角函數週期的變化">
          <div className={style.conceptHead}>三角函數的週期</div>
          <Textarea2MathJax
            text={'(1) $y=\\sin x$、$y=\\cos x$ 的週期為 $2\\pi$\n(2) $y=\\tan x$ 的週期為 $\\pi$'}
          />
          <div className={style.conceptHead}>函數變化後對週期的影響</div>
          <Textarea2MathJax
            text={
              '(1) 上下平移、上下伸縮、左右平移都不影響週期\n(2) 左右伸縮會改變週期，若 $f(x)$ 為週期函數且週期為 $p$，則 $y=f(ax+b)$ 仍為週期函數且週期變為 $\\frac{p}{|a|}$。'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={19}>
        <Example num={2} ids={['17ba733d963', '17ba7378420']} />
        <Example num={3} ids={['17ba73c6d05', '17ba73e9e08']} />
      </Page>
      <Page pageNum={20}>
        <Example num={4} ids={['17ba745be0c', '17ba7485798']} />
        <Example num={5} ids={['17ba9706a31', '17ba9718fa4']} />
      </Page>
      <Page pageNum={21}>
        <Example num={6} ids={['17ba974214a', '17ba9770dbc']} height="23cm" />
      </Page>
      <Page pageNum={22}>
        <Concept num={3} title="正餘弦疊合">
          <div className={style.conceptHead}>疊合手法</div>
          <Textarea2MathJax
            text={
              '$f(x)=a\\sin x+b\\cos x$，以係數 $a$ 與 $b$ 作為直角三角形的兩股，得到斜邊為 $\\sqrt{a^2+b^2}$，就可把 $f(x)$ 縮成單項成為 $f(x)=\\sqrt{a^2+b^2}\\sin(x+\\theta)$ 或 $f(x)=\\sqrt{a^2+b^2}\\cos(x-\\theta)$'
            }
          />
          <div className={style.conceptHead}>結論</div>
          <Textarea2MathJax
            text={
              '(1) $y=a\\sin x+b\\cos x$ 的圖形仍為波浪形狀的週期函數，振幅為 $\\sqrt{a^2+b^2}$，週期為 $2\\pi$'
            }
          />
          <Textarea2MathJax
            text={
              '(2) 若 $x\\in\\mathbb{R}$，$f(x)$ 的最大值為 $\\sqrt{a^2+b^2}$，最小值為 $-\\sqrt{a^2+b^2}$'
            }
          />
          <Textarea2MathJax
            text={
              '(3) 若 $x$ 有範圍限制，則找出 $x+\\theta$ 的範圍，再從單位圓找出 $\\sin(x+\\theta)$ 的範圍，再求 $f(x)$ 的最大值、最小值'
            }
          />
        </Concept>
        <Example num={7} ids={['17ba9801b03', '17ba9835d86']} height="15.8cm" />
      </Page>
      <Page pageNum={23}>
        <Example num={8} ids={['17ba989ddc3', '17ba98cd1ca']} />
        <Example num={9} ids={['17ba9e276f3', '17ba9e4d42a']} />
      </Page>
      <Page pageNum={24}>
        <Example num={10} ids={['17ba9e804af', '17ba9e94d70']} height="23cm" />
      </Page>
      <Page pageNum={25}>
        <Example num={11} ids={['17ba9ed75d6', '17ba9f3dfa7']} height="23cm" />
      </Page>
      <Page pageNum={26}>
        <Example num={12} ids={['17ba9f5f6d0', '17ba9f8acb8']} height="23cm" />
      </Page>
      <Page pageNum={27}>
        <Example num={13} ids={['17ba9facfa6', '17ba9fc79fa']} height="23cm" />
      </Page>
    </div>
  );
};

export default C2S3TrigonometricFunction;

import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';

const C2S1Derivative = () => {
  return (
    <div>
      <div className={style.head}>2-1 導數與導函數</div>
      <Concept num={1} title="導數的定義">
        <div className={style.conceptHead}>割線及其斜率</div>
        <Textarea2MathJax
          text={
            '設 $a$、$b$ 為相異實數，$y=f(x)$ 的圖形上有兩點 $(a,f(a))$、$(b,f(b))$，將其連成直線，稱為割線，此割線的斜率為'
          }
        />
        <div className={style.conceptHead}>切線及其斜率</div>
        <Textarea2MathJax
          text={
            '$y=f(x)$ 的圖形上取無限接近之相異兩點，即 $(a,f(a))$、$(\\displaystyle\\lim_{x\\to a}x,\\lim_{x\\to a}f(x))$，將其連成直線，稱為切線，其斜率為'
          }
        />
        <div className={style.conceptHead}>導數與可微分</div>
        <Textarea2MathJax
          text={
            "函數 $f(x)$，若極限值 $\\displaystyle\\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}$ 存在，則稱 $f(x)$ 在 $x=a$ 可微分，此極限值稱為「$f(x)$ 在 $x=a$ 的導數」，記為 $f'(a)$ 或 $\\dv{f}{x}|_{x=a}$"
          }
        />
        <div className={style.conceptHead}>幾何意義</div>
        <Textarea2MathJax
          text={
            "$f(x)$ 在 $x=a$ 的導數 $f'(a)$，即為 $f(x)$ 的函數圖形在點 $(a,f(a))$ 處的切線斜率。"
          }
        />
        <div className={style.conceptHead}>導數的另一種寫法</div>
        <Textarea2MathJax
          text={
            "若要找一個無限接近 $(a,f(a))$ 的點，也可以為 $(\\displaystyle\\lim_{h\\to0}(a+h),\\lim_{h\\to0}f(a+h))$，所以 $f'(a)$ 的定義可寫成 $f'(a)=\\displaystyle\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{(a+h)-a}=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}$"
          }
        />
      </Concept>
      <Example num={1} ids={['17c91adfe99', '17c91b1a092']} />
      <Example num={2} ids={['17c91aff47f', '17c91b21f64']} />
      <Example num={3} ids={['17c91b2b515', '17c91b600fe']} />
      <Example num={4} ids={['17c91b52ada', '17c91b98995']} />
      <Concept num={2} title="導函數、微分與微分公式">
        <div className={style.conceptHead}>導函數</div>
        <Textarea2MathJax
          text={
            "若函數 $f(x)$ 在每一點都可求得導數，則稱 $f(x)$ 為可微分函數，且所有導數值形成的新函數稱為導函數，記為 $f'(x)$ 或 $\\dv{f(x)}{x}$。換句話說，導函數即為各點的切線斜率值所形成的函數。"
          }
        />
        <div className={style.conceptHead}>微分</div>
        <Textarea2MathJax text={"「求導函數 $f'(x)$」的動作，稱為「把 $f(x)$ 微分」。"} />
        <div className={style.conceptHead}>常見函數的微分</div>
        <Textarea2MathJax
          text={"(1) 常數函數的微分：$c\\in\\mathbb{R}$，$f(x)=c\\Rightarrow f'(x)=0$"}
        />
        <Textarea2MathJax
          text={"(2) $x^n$ 的微分：$n\\in\\mathbb{N}$，$f(x)=x^n\\Rightarrow f'(x)=nx^{n-1}$"}
        />
        <Textarea2MathJax
          text={
            "(3) $x^r$ 的微分：$n\\in\\mathbb{R}$，$x>0$，$f(x)=x^r\\Rightarrow f'(x)=rx^{r-1}$ (目前無法證明)"
          }
        />
        <div className={style.conceptHead}>可微分必連續</div>
        <Textarea2MathJax
          text={
            "若函數 $f(x)$ 在 $x=a$ 處可微分，則函數 $f(x)$ 在 $x=a$ 處必為連續，也就是說，若 $f'(a)$ 存在，則 $\\displaystyle\\lim_{x\\to a}f(x)=f(a)$，反之不成立。"
          }
        />
        <div className={style.conceptHead}>微分公式</div>
        <Textarea2MathJax
          text={'利用以下公式，可以很快求得導函數，不需要再從定義去求極限值，把微分變簡單。'}
        />
        <Textarea2MathJax text={"(1) 函數加減：$\\dv x[f(x)\\pm g(x)]=f'(x)\\pm g'(x)$"} />
        <Textarea2MathJax
          text={"(2) 提出常數：$c\\in\\mathbb{R}$，$\\dv x[c\\cdot f(x)]=c\\cdot f'(x)$"}
        />
        <Textarea2MathJax
          text={
            "(3) 函數相乘：$\\dv x[f(x)g(x)]=f'(x)g(x)+f(x)g'(x)$，口訣：前微後不微加前不微後微"
          }
        />
        <Textarea2MathJax
          text={
            "(4) 函數相除：$\\dv x[\\frac{f(x)}{g(x)}]=\\frac{g(x)f'(x)-f(x)g'(x)}{g(x)^2}$，口訣：母平方，母上子微減子母微"
          }
        />
        <Textarea2MathJax
          text={
            "(5) 函數的次方：$\\dv x[f(x)^n]=n\\cdot f(x)^{n-1}\\cdot f'(x)$，口訣：先微外，再微內"
          }
        />
      </Concept>
      <Example num={5} ids={['17c91bb4a4b', '17c91bd468e']} />
      <Example num={6} ids={['17c91bc76bd', '17c91be0266']} />
      <Example num={7} ids={['17c91bce4f5', '17c91bebd27']} />
      <Example num={8} ids={['17c91bf4687', '17c91c009a0']} />
      <Example num={9} ids={['17c91bfa87f', '17c91c0817e']} />
      <Example num={10} ids={['17c91c183cc', '17c91cc6891']} />
      <Example num={11} ids={['17c91cbbe13', '17c91cd2311']} />
      <Example num={12} ids={['17c91ce7cd0', '17c91cf64d3']} />
    </div>
  );
};

export default C2S1Derivative;

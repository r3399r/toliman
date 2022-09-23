import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C2S1Derivative = () => (
  <MathJax>
    <Page pageNum={18}>
      <div className={style.head}>2-1 導數與導函數</div>
      <Concept num={1} title="導數的定義">
        <div className={style.conceptHead}>割線及其斜率</div>
        <div>
          {
            '設 $a$、$b$ 為相異實數，$y=f(x)$ 的圖形上有兩點 $(a,f(a))$、$(b,f(b))$，將其連成直線，稱為割線，則此割線的斜率為？'
          }
        </div>
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>切線及其斜率</div>
        <div>
          {
            '$y=f(x)$ 的圖形上取無限接近之相異兩點，即 $(a,f(a))$、$(\\displaystyle\\lim_{x\\to a}x,\\lim_{x\\to a}f(x))$，將其連成直線，稱為切線，其斜率為？'
          }
        </div>
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>導數與可微分</div>
        <div>
          {
            "函數 $f(x)$，若極限值 $\\displaystyle\\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}$ 存在，則稱 $f(x)$ 在 $x=a$ 可微分，此極限值稱為「$f(x)$ 在 $x=a$ 的導數」，記為 $f'(a)$ 或 $\\dv{f}{x}|_{x=a}$"
          }
        </div>
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>幾何意義</div>
        <div>
          {
            "$f(x)$ 在 $x=a$ 的導數 $f'(a)$，即為 $f(x)$ 的函數圖形在點 $(a,f(a))$ 處的切線斜率。\n　\n"
          }
        </div>
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>導數的另一種寫法</div>
        <div>
          {
            "若要找一個無限接近 $(a,f(a))$ 的點，也可以為 $(\\displaystyle\\lim_{h\\to0}(a+h),\\lim_{h\\to0}f(a+h))$，所以 $f'(a)$ 的定義可寫成 $f'(a)=\\displaystyle\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{(a+h)-a}=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}$"
          }
        </div>
      </Concept>
    </Page>
    <Page pageNum={19}>
      <Example num={1} ids={['17c91adfe99', '17c91b1a092']} />
      <Example num={2} ids={['17c91aff47f', '17c91b21f64']} />
    </Page>
    <Page pageNum={20}>
      <Example num={3} ids={['17c91b2b515', '17c91b600fe']} />
      <Example num={4} ids={['17c91b52ada', '17c91b98995']} />
    </Page>
    <Page pageNum={21}>
      <Concept num={2} title="導函數、微分與微分公式">
        <div className={style.conceptHead}>導函數</div>
        <div>
          {
            "若函數 $f(x)$ 在每一點都可求得導數，則稱 $f(x)$ 為可微分函數。所有導數值形成的新函數稱為導函數，記為 $f'(x)$ 或 $\\dv{f(x)}{x}$。換句話說，導函數即為各點的切線斜率值所形成的函數。"
          }
        </div>
        <br />
        <div className={style.conceptHead}>微分</div>
        <div>{"「求導函數 $f'(x)$」的動作，稱為「把 $f(x)$ 微分」。"}</div>
        <br />
        <div className={style.conceptHead}>常見函數的微分</div>
        <div>{"(1) 常數函數的微分：$c\\in\\mathbb{R}$，$f(x)=c\\Rightarrow f'(x)=0$"}</div>
        <div>{"(2) $x^n$ 的微分：$n\\in\\mathbb{N}$，$f(x)=x^n\\Rightarrow f'(x)=nx^{n-1}$"}</div>
        <div>
          {
            "(3) $x^r$ 的微分：$n\\in\\mathbb{R}$，$x>0$，$f(x)=x^r\\Rightarrow f'(x)=rx^{r-1}$ (目前無法證明)"
          }
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>可微分必連續</div>
        <div>
          {
            "若函數 $f(x)$ 在 $x=a$ 處可微分，則函數 $f(x)$ 在 $x=a$ 處必為連續，也就是說，若 $f'(a)$ 存在，則 $\\displaystyle\\lim_{x\\to a}f(x)=f(a)$，反之不成立。"
          }
        </div>
        <br />
        <div className={style.conceptHead}>微分公式</div>
        <div>{'利用以下公式，可以很快求得導函數，不需要再從定義去求極限值，把微分變簡單。'}</div>
        <div>{"(1) 函數加減：$\\ddv x[f(x)\\pm g(x)]=f'(x)\\pm g'(x)$"}</div>
        <div>{"(2) 提出常數：$c\\in\\mathbb{R}$，$\\ddv x[c\\cdot f(x)]=c\\cdot f'(x)$"}</div>
        <div>
          {"(3) 函數相乘：$\\ddv x[f(x)g(x)]=f'(x)g(x)+f(x)g'(x)$，口訣：前微後不微加前不微後微"}
        </div>
        <div>
          {
            "(4) 函數相除：$\\ddv x[\\dfrac{f(x)}{g(x)}]=\\dfrac{g(x)f'(x)-f(x)g'(x)}{g(x)^2}$，口訣：母平方，母上子微減子母微"
          }
        </div>
        <div>
          {"(5) 函數的次方：$\\ddv x[f(x)^n]=n\\cdot f(x)^{n-1}\\cdot f'(x)$，口訣：先微外，再微內"}
        </div>
      </Concept>
    </Page>
    <Page pageNum={22}>
      <Example num={5} ids={['17c91bb4a4b', '17c91bd468e']} height="3.2cm" />
      <Example num={6} ids={['17c91bc76bd', '17c91be0266']} height="3.2cm" />
      <Example num={7} ids={['17c91bce4f5', '17c91bebd27']} height="3.2cm" />
    </Page>
    <Page pageNum={23}>
      <Example num={8} ids={['17c91bf4687', '17c91c009a0']} />
      <Example num={9} ids={['17c91bfa87f', '17c91c0817e']} />
    </Page>
    <Page pageNum={24}>
      <Example num={10} ids={['17c91c183cc', '17c91cc6891']} />
      <Example num={11} ids={['17c91cbbe13', '17c91cd2311']} />
    </Page>
    <Page pageNum={25}>
      <Example num={12} ids={['17c91ce7cd0', '17c91cf64d3']} />
      <Example num={13} ids={['18366088158', '1836609962d']} />
    </Page>
  </MathJax>
);

export default C2S1Derivative;

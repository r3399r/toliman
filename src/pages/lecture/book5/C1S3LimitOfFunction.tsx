import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C1S3LimitOfFunction = () => (
  <div>
    <Page pageNum={11}>
      <div className={style.head}>3 函數及其極限</div>
      <Concept num={1} title="函數的概念">
        <Textarea2MathJax
          text={
            '函數值 $y$ 隨著變數 $x$ 而變化，對每個有意義的 $x$ 值皆可找到一個且只有一個 $y$ 值作為對應，則稱 $y$ 是 $x$ 的函數，習慣記為 $y=f(x)$。'
          }
        />
        <div className={style.conceptHead}>分段函數</div>
        <Textarea2MathJax
          text={
            '分段函數是由不同的函數在某處接合而成，題目會有充分的敘述，絕對值函數即為分段函數的例子。'
          }
        />
        <div className={style.conceptHead}>高斯函數</div>
        <Textarea2MathJax
          text={'小於或等於 $x$ 的最大整數，記為 $[x]$，即為高斯函數，其圖形類似朝右上遞增的階梯。'}
        />
        <div className={style.conceptHead}>奇函數與偶函數</div>
        <Textarea2MathJax
          text={
            '若 $y=f(x)$ 滿足 $f(-x)=-f(x)$，則函數圖形對會稱於原點，稱 $f(x)$ 為奇函數，如 $y=2x^3$，$y=6x^5+7x$，$y=\\sin x$。\n若 $y=f(x)$ 滿足 $f(-x)=f(x)$，則函數圖形對會稱於 $y$ 軸，稱 $f(x)$ 為偶函數，如 $y=x^2$，$y=3x^4-5$，$y=|x|$，$y=\\cos x$。'
          }
        />
      </Concept>
      <Example num={1} ids={['17baf6fbdba', '17baf718934']} />
    </Page>
    <Page pageNum={12}>
      <Example num={2} ids={['17baf7362e5', '17baf742d04']} />
      <Example num={3} ids={['17baf771a46', '17baf7a9355']} />
    </Page>
    <Page pageNum={13}>
      <Concept num={2} title="函數的極限">
        <img className={style.axis} alt="" role="presentation" src="/toliman/images/limit.PNG" />
        <div className={style.conceptHead}>左極限</div>
        <Textarea2MathJax
          text={
            '函數 $f(x)$，$a$ 為定數，當 $x$ 小於 $a$ 且無限靠近 $a$ 時，函數值亦無線靠近某定數 $k$，則稱 $f(x)$ 在 $a$ 的左極限為 $k$，記為 $\\displaystyle\\lim_{x\\to a^-}f(x)=k$。如圖，$\\displaystyle\\lim_{x\\to 2^-}f(x)=8$'
          }
        />
        <div className={style.conceptHead}>右極限</div>
        <Textarea2MathJax
          text={
            '函數 $f(x)$，$a$ 為定數，當 $x$ 大於 $a$ 且無限靠近 $a$ 時，函數值亦無線靠近某定數 $k$，則稱 $f(x)$ 在 $a$ 的右極限為 $k$，記為 $\\displaystyle\\lim_{x\\to a^+}f(x)=k$。\n如圖，$\\displaystyle\\lim_{x\\to 2^-}f(x)=4$'
          }
        />
        <div className={style.conceptHead}>函數的極限值</div>
        <Textarea2MathJax
          text={
            '若 $\\displaystyle\\lim_{x\\to a^-}f(x)$ 與 $\\displaystyle\\lim_{x\\to a^+}f(x)$ 都存在且相等，其值皆為 $k$，則 $f(x)$ 在 $x$ 靠近 $a$ 的極限值才存在，得 $\\displaystyle\\lim_{x\\to a}f(x)=k$，如圖，$\\displaystyle\\lim_{x\\to 2}f(x)$ 不存在。'
          }
        />
      </Concept>
      <Example num={4} ids={['17baf7ce619', '17baf7ee65e']} />
    </Page>
    <Page pageNum={14}>
      <Example num={5} ids={['17baf82560d', '17baf888027']} />
      <Example num={6} ids={['17baf8a0192', '17baf8b63dc']} />
    </Page>
    <Page pageNum={15}>
      <Example num={7} ids={['17baf8de274', '17baf8f69ef']} />
      <Concept num={3} title="函數極限的性質">
        <Textarea2MathJax
          text={'已知函數 $f(x)$ 與 $g(x)$ 在 $x$ 靠近 $a$ 的期限值皆存在，$c$ 為常數，則：'}
        />
        <Textarea2MathJax
          text={
            '1. $\\displaystyle\\lim_{n\\to a}[f(x)+g(x)]=\\lim_{n\\to\\infty}f(x)+\\lim_{n\\to\\infty}g(x)$'
          }
        />
        <Textarea2MathJax
          text={'2. $\\displaystyle\\lim_{n\\to a}[c\\cdot f(x)]=c\\cdot\\lim_{n\\to\\infty}f(x)$'}
        />
        <Textarea2MathJax
          text={
            '3. $\\displaystyle\\lim_{n\\to\\infty}[f(x)\\cdot g(x)]=\\lim_{n\\to\\infty}f(x)\\cdot\\lim_{n\\to\\infty}g(x)$'
          }
        />
        <Textarea2MathJax
          text={
            '4. $\\displaystyle\\lim_{n\\to\\infty}\\frac{f(x)}{g(x)}=\\frac{\\displaystyle\\lim_{n\\to\\infty}f(x)}{\\displaystyle\\lim_{n\\to\\infty}g(x)}$'
          }
        />
      </Concept>
    </Page>
    <Page pageNum={16}>
      <Example num={8} ids={['17baf919903', '17baf92ba06']} />
      <Example num={9} ids={['17baf943eca', '17baf960c64']} />
    </Page>
  </div>
);

export default C1S3LimitOfFunction;

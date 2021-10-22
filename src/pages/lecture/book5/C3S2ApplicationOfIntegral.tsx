import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';

const C3S2ApplicationOfIntegral = () => {
  return (
    <div>
      <div className={style.head}>2-2 積分的應用</div>
      <Concept num={1} title="面積的計算">
        <div className={style.conceptHead}>半圓的面積</div>
        <Textarea2MathJax
          text={
            '半徑為 $r$ 的上半圓的函數 $f(x)=\\sqrt{r^2-x^2}$，其面積可用定積分表示為 $\\displaystyle\\int_{-r}^r\\sqrt{r^2-x^2}\\dd x$'
          }
        />
        <div className={style.conceptHead}>兩曲線間圍成的面積</div>
        <Textarea2MathJax
          text={
            '兩函數 $f(x)$ 與 $g(x)$，在 $x=a$ 到 $x=b$ 的範圍內，兩圖形曲線間的面積為 $\\displaystyle\\int_a^b|f(x)-g(x)|\\dd x$。必須先確定 $f(x)$ 與 $g(x)$ 的函數大小關係後，才能進一步求面積。'
          }
        />
      </Concept>
      <Example num={1} ids={['17ca06c7353', '17ca06d5299']} />
      <Example num={2} ids={['17ca06db83a', '17ca06ec135']} />
      <Example num={3} ids={['17ca06e8cdb', '17c9e0cfceb']} />
      <Concept num={2} title="旋轉體體積">
        <Textarea2MathJax
          text={
            '把函數圖形 $y=f(x)$ 在第一象限與 $x$ 軸所圍成的區域切成 $n$ 等分後，細長條繞 $x$ 軸旋轉會得到一個薄圓盤，將所有薄圓盤的體積相加，再讓 $n$ 趨近於無限大，就是該區域的旋轉體體積，以積分寫成 $\\displaystyle\\int_a^b\\pi y^2\\dd x=\\int_a^b\\pi[f(x)]^2\\dd x$。'
          }
        />
      </Concept>
      <Example num={4} ids={['17c9e0d44f6', '17ca0723a53']} />
      <Example num={5} ids={['17ca0717e33', '17ca07372c1']} />
      <Concept num={3} title="函數值的平均與物理的應用">
        <div className={style.conceptHead}>函數值的平均</div>
        <Textarea2MathJax
          text={
            '設 $f(x)$ 為連續函數，稱 $\\displaystyle\\frac{\\int_a^bf(x)\\dd x}{b-a}$ 為 $f(x)$ 在區間 $[a,b]$ 內的平均值。'
          }
        />
        <div className={style.conceptHead}>直線運動由速度求位移</div>
        <Textarea2MathJax
          text={
            '若質點之「速度－時間」的函數關係為 $v(t)$，則由 $t_1$ 到 $t_2$ 的位移量為 $\\displaystyle\\int_{t_1}^{t_2}v(t)\\dd v$'
          }
        />
        <div className={style.conceptHead}>直線運動由加速度求速度變化</div>
        <Textarea2MathJax
          text={
            '若質點之「加速度－時間」的函數關係為 $a(t)$，則由 $t_1$ 到 $t_2$ 的位移量為 $\\displaystyle\\int_{t_1}^{t_2}a(t)\\dd v$'
          }
        />
      </Concept>
      <Example num={6} ids={['17ca09d3cd3', '17ca09db9f1']} />
      <Example num={7} ids={['17ca09eb6fc', '17ca09f6e51']} />
    </div>
  );
};

export default C3S2ApplicationOfIntegral;

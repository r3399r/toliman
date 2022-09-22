import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C3S2ApplicationOfIntegral = () => (
  <MathJax>
    <Page pageNum={41}>
      <div className={style.head}>3-2 積分的應用</div>
      <Concept num={1} title="面積的計算">
        <div className={style.conceptHead}>半圓的面積</div>
        <div>
          {
            '半徑為 $r$ 的上半圓的函數 $f(x)=\\sqrt{r^2-x^2}$，其面積可用定積分表示為 $\\displaystyle\\int_{-r}^r\\sqrt{r^2-x^2}\\text dx$'
          }
        </div>
        <br />
        <div className={style.conceptHead}>兩曲線間圍成的面積</div>
        <div>
          {
            '兩函數 $f(x)$ 與 $g(x)$，在 $x=a$ 到 $x=b$ 的範圍內，兩圖形曲線間的面積為 $\\displaystyle\\int_a^b|f(x)-g(x)|\\text dx$。必須先確定 $f(x)$ 與 $g(x)$ 的函數大小關係後，才能進一步求面積。'
          }
        </div>
        <div style={{ textAlign: 'center' }}>
          <img
            style={{ maxHeight: '4.2cm' }}
            alt=""
            role="presentation"
            src="/toliman/images/兩曲線所圍面積.PNG"
          />
        </div>
      </Concept>
      <Example num={1} ids={['17ca06c7353', '17ca06d5299']} />
    </Page>
    <Page pageNum={42}>
      <Example num={2} ids={['17ca06db83a', '17ca06ec135']} />
      <Example num={3} ids={['17ca06e8cdb', '17c9e0cfceb']} />
    </Page>
    <Page pageNum={43}>
      <Concept num={2} title="旋轉體體積">
        <div style={{ float: 'right' }}>
          <img
            style={{ maxHeight: '3.6cm', marginLeft: '0.4cm' }}
            alt=""
            role="presentation"
            src="/toliman/images/旋轉體.PNG"
          />
        </div>
        <div>
          {
            '把函數圖形 $y=f(x)$ 在第一象限與 $x$ 軸所圍成的區域分成 $n$ 等分後，細長條繞 $x$ 軸旋轉會得到一個薄圓盤，將所有薄圓盤的體積相加，再讓 $n$ 趨近於無限大，就是該區域的旋轉體體積，以積分寫成 $\\displaystyle\\int_a^b\\pi y^2\\text dx=\\int_a^b\\pi[f(x)]^2\\text dx$。'
          }
        </div>
      </Concept>
      <Example num={4} ids={['17c9e0d44f6', '17ca0723a53']} height="15.3cm" />
    </Page>
    <Page pageNum={44}>
      <Example num={5} ids={['17ca0717e33', '17ca07372c1']} />
      <Example num={6} ids={['183664aca9c', '183664c844d']} />
    </Page>
  </MathJax>
);

export default C3S2ApplicationOfIntegral;

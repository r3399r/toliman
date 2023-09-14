import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C1S1ExponentFunction = () => (
  <div>
    <Page pageNum={1}>
      <div className={style.head}>1 指數函數及其圖形</div>
      <Concept num={1} title="指數函數">
        <div className={style.conceptHead}>指數律</div>
        <div>{'設 $a,b>0$，$x,y$ 為實數，則：'}</div>
        <br />
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>指數符號</div>
        <div>
          {
            '正整數次方：$n$ 為正整數，$n$ 個 $a$ 的乘積記為指數符號 $a^n$，稱 $a$ 為底數，$n$ 為指數。'
          }
        </div>
        <br />
        <div>
          零次方：
          <br />
          <br />
          負整數次方：
          <br />
          <br />
          分數次方：
          <br />
          <br />
          無理數次方：
          <br />
          <br />
        </div>
      </Concept>
      <Example num={1} ids={['17add025b6b', '17add067cad']} height="6cm" />
    </Page>
    <Page pageNum={2}>
      <Example num={2} ids={['17add1475e9', '17add167ddc']} />
      <Example num={3} ids={['17add19ee19', '17add1d9067']} />
    </Page>
    <Page pageNum={3}>
      <Example num={4} ids={['17add1f09ec', '17add1fd219']} height="20cm" />
    </Page>
    <Page pageNum={4}>
      <Concept num={2} title="指數函數的圖形">
        <div>{'利用描點在坐標平面作 $f(x)=a^x$ 的圖形'}</div>
        <br />
        <div className={style.conceptHead}>底數大於 1</div>
        <img className={style.axis} alt="" role="presentation" src="/toliman/images/方格紙.PNG" />
        <div>
          {'當 $a>1$ 時，如 $y=2^x,y=3^x,y=5^x$'}
          <br />
          {
            '$$\\begin{array}{c|c}x&-2&-1&0&\\dfrac{1}{2}&1&\\dfrac{3}{2}&2\\\\ \\hline2^x\\\\ \\hline3^x\\\\ \\hline5^x \\end{array}$$'
          }
        </div>
        <div>{'(1) $y=a^x$ 函數值必為正，即圖形在 $x$ 軸的上方'}</div>
        <div>{'(2) 若 $p<q$，則 $a^p<a^q$，即 $y=a^x$ 為遞增函數'}</div>
        <div>{'(3) 圖形愈往左愈接近 $x$ 軸，稱 $x$ 軸為圖形的漸近線'}</div>
        <br />
        <div className={style.conceptHead}>底數小於 1</div>
        <img className={style.axis} alt="" role="presentation" src="/toliman/images/方格紙.PNG" />
        <div>
          {'當 $0<a<1$ 時，如 $y=(\\dfrac{1}{2})^x,y=(\\dfrac{1}{3})^x,y=(\\dfrac{1}{5})^x$'}
          <br />
          {
            '$$\\begin{array}{c|c}x&-2&-\\dfrac{3}{2}&-1&-\\dfrac{1}{2}&0&1&2\\\\ \\hline(\\dfrac{1}{2})^x\\\\ \\hline(\\dfrac{1}{3})^x\\\\ \\hline(\\dfrac{1}{5})^x \\end{array}$$'
          }
        </div>
        <div>{'(1) $y=a^x$ 函數值必為正，即圖形在 $x$ 軸的上方'}</div>
        <div>{'(2) 若 $p<q$，則 $a^p>a^q$，即 $y=a^x$ 為遞減函數'}</div>
        <div>{'(3) 圖形愈往右愈接近 $x$ 軸，稱 $x$ 軸為圖形的漸近線'}</div>
        <br />
        <div className={style.conceptHead}>函數圖形的變化</div>
        <div>{'1. 上下平移：如 $y=2^x$ 的圖形向上移 $5$ 單位為 $y=2^x+5$'}</div>
        <div>{'2. 上下伸縮：如 $y=2^x$ 的圖形向上下伸長 $3$ 倍為 $y=3\\times2^x$'}</div>
        <div>{'3. 左右平移：如 $y=2^x$ 的圖形向左移 $1$ 單位為 $y=2^{x+1}$ (右減左加)'}</div>
        <div>{'4. 左右伸縮：如 $y=2^x$ 的圖形向 $y$ 軸壓縮 $\\dfrac{1}{3}$ 倍為 $y=2^{3x}$'}</div>
      </Concept>
    </Page>
    <Page pageNum={5}>
      <Example num={5} ids={['17adeaaa7ef', '17adeae3659']} />
      <Example num={6} ids={['17adeb24157', '17adeb469db']} />
    </Page>
    <Page pageNum={6}>
      <Example num={7} ids={['17adeb7859b', '17adeb9bb40']} />
      <Example num={8} ids={['17adeba6aa0', '17adebb1ce6']} />
    </Page>
    <Page pageNum={7}>
      <Concept num={3} title="指數方程式與不等式" height="2.7cm">
        <div>{'1. 指數方程式如 $2^x=8$；指數不等式如 $2^x<8$。'}</div>
        <div>
          {
            '2. 設 $a>0$ 且 $a\\neq1$，若 $a^x=a^y$，則 $x=y$。常把指數方程式的兩邊化為同底解未知數。'
          }
        </div>
        <div>{'3. 解不等式時，也會用化成同底的方法來求 $x$ 的範圍，但要注意底數的大小'}</div>
        <div>
          {'(1) 當 $a>1$ 時，為遞增函數，故 $a^x>a^y\\Leftrightarrow x>y$'}
          <br />
          {'(2) 當 $0<a<1$ 時，為遞減函數，故 $a^x>a^y\\Leftrightarrow x<y$'}
        </div>
      </Concept>
      <Example num={9} ids={['17ae0ca8ec4', '17ae0cb5a82']} height="5.2cm" />
      <Example num={10} ids={['17ae0cc95b8', '17ae0cc95b9']} height="5.2cm" />
    </Page>
    <Page pageNum={8}>
      <Example num={11} ids={['17ae0cf60fe', '17ae0d2130e']} />
      <Example num={12} ids={['17ae0d2dc38', '17ae0d3ce5f']} />
    </Page>
    <Page pageNum={9}>
      <Example num={13} ids={['17ae0d78968', '17ae0dc978e']} height="20cm" />
    </Page>
  </div>
);

export default C1S1ExponentFunction;

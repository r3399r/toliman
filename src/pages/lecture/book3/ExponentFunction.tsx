import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';
import Page from 'src/pages/lecture/component/Page';

const ExponentFunction = () => {
  return (
    <div>
      <Page pageNum={1}>
        <div className={style.head}>1 指數函數及其圖形</div>
        <Concept num={1} title="指數函數" height="7.2cm">
          <div className={style.conceptHead}>指數符號</div>
          <Textarea2MathJax
            text={
              '1. 整數次方：$$n\\in\\mathbb{N}$$，$$n$$ 個 $$a$$ 的乘積記為指數符號 $$a^n$$，稱 $$a$$ 為底數，$$n$$ 為指數。另規定 $$a^0=1$$，$$a^{-n}=\\frac{1}{a^n}$$，以滿足指數律。'
            }
          />
          <Textarea2MathJax
            text={
              '2. 分數次方：$$a,b>0$$，$$n$$ 為比 $$1$$ 大的正整數，若滿足 $$a^n=b$$，則記為 $$a=\\sqrt[n]{b}=b^\\frac{1}{n}$$，稱 $$a$$ 為「$$n$$ 次根號 $$b$$」。進一步規定，若 $$a>0$$，$$m,n\\in\\mathbb{N}$$，且 $$n>1$$，則 $$a^\\frac{m}{n}=\\sqrt[n]{a^m}$$。'
            }
          />
          <Textarea2MathJax
            text={
              '3. 無理數次方：由十分逼近法得到的數來定義無理數次方，如 $$3^\\sqrt{2}\\approx3^{1.4142}$$。'
            }
          />
          <div className={style.conceptHead}>指數律</div>
          <Textarea2MathJax
            text={
              '設 $$a,b>0$$，$$x,y\\in\\mathbb{R}$$，則：\n$$a^x\\cdot a^y=a^{x+y},\\quad\\frac{a^x}{a^y}=a^{x-y},\\quad(a^x)^y=a^{xy},\\quad(ab)^x=a^x\\cdot b^x,\\quad\\left(\\frac{a^x}{b^x}\\right)=\\frac{a^x}{b^x}$$'
            }
          />
        </Concept>
        <Example num={1} ids={['17add025b6b', '17add067cad']} height="6cm" />
        <Example num={2} ids={['17add1475e9', '17add167ddc']} height="6cm" />
      </Page>
      <Page pageNum={2}>
        <Example num={3} ids={['17add19ee19', '17add1d9067']} />
        <Example num={4} ids={['17add1f09ec', '17add1fd219']} />
      </Page>
      <Page pageNum={3}>
        <Concept num={2} title="指數函數的圖形">
          <Textarea2MathJax text={'利用描點在坐標平面作 $$f(x)=a^x$$ 的圖形'} />
          <div className={style.conceptHead}>遞增型</div>
          <img className={style.axis} alt="" role="presentation" src="/toliman/images/方格紙.PNG" />
          <Textarea2MathJax
            text={
              '當 $$a>1$$ 時，如 $$y=2^x,y=3^x,y=5^x$$\n$$\\begin{array}{c|c}x&-2&-1&0&\\frac{1}{2}&1&\\frac{3}{2}&2\\\\ \\hline2^x\\\\ \\hline3^x\\\\ \\hline5^x \\end{array}$$'
            }
          />
          <Textarea2MathJax text={'(1) $$y=a^x$$ 函數值必為正，即圖形在 $$x$$ 軸的上方'} />
          <Textarea2MathJax text={'(2) 若 $$p<q$$，則 $$a^p<a^q$$，即 $$y=a^x$$ 為遞增函數'} />
          <Textarea2MathJax text={'(3) 圖形愈往左愈接近 $$x$$ 軸，稱 $$x$$ 軸為圖形的漸近線'} />
          <div className={style.conceptHead}>遞減型</div>
          <img className={style.axis} alt="" role="presentation" src="/toliman/images/方格紙.PNG" />
          <Textarea2MathJax
            text={
              '當 $$0<a<1$$ 時，如 $$y=\\left(\\frac{1}{2}\\right)^x,y=\\left(\\frac{1}{3}\\right)^x,y=\\left(\\frac{1}{5}\\right)^x$$\n$$\\begin{array}{c|c}x&-2&-\\frac{3}{2}&-1&-\\frac{1}{2}&0&1&2\\\\ \\hline\\left(\\frac{1}{2}\\right)^x\\\\ \\hline\\left(\\frac{1}{3}\\right)^x\\\\ \\hline\\left(\\frac{1}{5}\\right)^x \\end{array}$$'
            }
          />
          <Textarea2MathJax text={'(1) $$y=a^x$$ 函數值必為正，即圖形在 $$x$$ 軸的上方'} />
          <Textarea2MathJax text={'(2) 若 $$p<q$$，則 $$a^p>a^q$$，即 $$y=a^x$$ 為遞減函數'} />
          <Textarea2MathJax text={'(3) 圖形愈往右愈接近 $$x$$ 軸，稱 $$x$$ 軸為圖形的漸近線'} />
          <div className={style.conceptHead}>函數圖形的變化</div>
          <Textarea2MathJax
            text={'1. 上下平移：如 $$y=2^x$$ 的圖形向上移 $$5$$ 單位為 $$y=2^x+5$$'}
          />
          <Textarea2MathJax
            text={'2. 上下伸縮：如 $$y=2^x$$ 的圖形向上下身長 $$3$$ 倍為 $$y=3\\times2^x$$'}
          />
          <Textarea2MathJax
            text={'3. 左右平移：如 $$y=2^x$$ 的圖形向左移 $$1$$ 單位為 $$y=2^{x+1}$$ (右減左加)'}
          />
          <Textarea2MathJax
            text={
              '4. 左右伸縮：如 $$y=2^x$$ 的圖形向 $$y$$ 軸壓縮 $$\\frac{1}{3}$$ 倍為 $$y=2^{3x}$$'
            }
          />
          <div className={style.conceptHead}>由函數圖形求方程式的實根個數</div>
          <Textarea2MathJax
            text={
              '方程式 $$f(x)=g(x)$$ 的相異實根個數等於 $$\\begin{cases}y=f(x)\\\\y=g(x)\\end{cases}$$ 兩函數圖形的交點個數，交點坐標的 $$x$$ 值即為方程式的實根。當方程式無法直接運算求解時，必須利用作圖求解。'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={4}>
        <Example num={5} ids={['17adeaaa7ef', '17adeae3659']} />
        <Example num={6} ids={['17adeb24157', '17adeb469db']} />
      </Page>
      <Page pageNum={5}>
        <Example num={7} ids={['17adeb7859b', '17adeb9bb40']} />
        <Example num={8} ids={['17adeba6aa0', '17adebb1ce6']} />
      </Page>
      <Page pageNum={6}>
        <Concept num={3} title="指數方程式與不等式" height="3.8cm">
          <Textarea2MathJax text={'1. 指數方程式如 $$2^x=8$$；指數不等式如 $$2^x<8$$。'} />
          <Textarea2MathJax
            text={
              '2. 設 $$a>0$$ 且 $$a\\neq1$$，若 $$a^x=a^y$$，則 $$x=y$$。故常把指數方程式的兩邊化為同底，以便解出未知數。'
            }
          />
          <Textarea2MathJax
            text={'3. 解不等式時，也會用化成同底的方法來求 $$x$$ 的範圍，但要注意底數的大小'}
          />
          <Textarea2MathJax
            text={
              '(1) 當 $$a>1$$ 時，為遞增函數，故 $$a^x>a^y\\Leftrightarrow x>y$$\n(2) 當 $$0<a<1$$ 時，為遞減函數，故 $$a^x>a^y\\Leftrightarrow x<y$$'
            }
          />
        </Concept>
        <Example num={9} ids={['17ae0ca8ec4', '17ae0cb5a82']} height="8.3cm" />
        <Example num={10} ids={['17ae0cc95b8', '17ae0cb5a82']} height="8.3cm" />
      </Page>
      <Page pageNum={7}>
        <Example num={11} ids={['17ae0cf60fe', '17ae0d2130e']} />
        <Example num={12} ids={['17ae0d2dc38', '17ae0d3ce5f']} />
      </Page>
      <Page pageNum={8}>
        <Example num={13} ids={['17ae0d78968', '17ae0dc978e']} height="23.5cm" />
      </Page>
    </div>
  );
};

export default ExponentFunction;

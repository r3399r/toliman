import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C1S3LogarithmFunctiontsx = () => {
  return (
    <div>
      <Page pageNum={18}>
        <div className={style.head}>3 對數函數及其應用</div>
        <Concept num={1} title="對數函數的圖形">
          <div className={style.conceptHead}>對數函數</div>
          <Textarea2MathJax
            text={'設 $$a>0$$ 且 $$a\\neq1$$，稱 $$y=\\log_ax$$ 為以 $$a$$ 為底的對數函數。'}
          />
          <div className={style.conceptHead}>遞增型</div>
          <img className={style.axis} alt="" role="presentation" src="/toliman/images/方格紙.PNG" />
          <Textarea2MathJax
            text={
              '當 $$a>1$$ 時，如 $$y=\\log_2x,y=\\log_3x,y=\\log_{10}x$$\n$$\\begin{array}{c|c}x&\\frac{1}{4}&\\frac{1}{2}&1&2&4\\\\ \\hline\\log_2x\\end{array}$$'
            }
          />
          <Textarea2MathJax
            text={
              '$$\\begin{array}{c|c}x&\\frac{1}{9}&\\frac{1}{3}&1&3&9\\\\ \\hline\\log_3x\\end{array}$$'
            }
          />
          <Textarea2MathJax
            text={
              '$$\\begin{array}{c|c}x&\\frac{1}{10}&1&2&3&5&10\\\\ \\hline\\log_{10}x\\end{array}$$'
            }
          />
          <Textarea2MathJax text={'觀察圖形並歸納結論，當底數 $$a>1$$ 時：'} />
          <Textarea2MathJax
            text={
              '(1) 若 $$x>1$$，$$y=\\log_ax$$ 的函數值為正；若 $$0<x<1$$，$$y=\\log_ax$$ 的函數值為負。底數 $$a$$ 愈大，圖形彎得愈靠近 $$x$$ 軸。'
            }
          />
          <Textarea2MathJax
            text={'(2) 若 $$0<p<q$$，則 $$\\log_ap<\\log_aq$$，即 $$y=\\log_ax$$ 為遞增函數。'}
          />
          <Textarea2MathJax
            text={
              '(3) 若 $$x$$ 接近 $$0$$ 時，$$y=\\log_ax$$ 的函數值會接近負無限大，圖形靠近 $$y$$ 軸但不相交，稱 $$y$$ 軸為圖形的漸近線。'
            }
          />
          <div className={style.conceptHead}>遞減型</div>
          <img className={style.axis} alt="" role="presentation" src="/toliman/images/方格紙.PNG" />
          <Textarea2MathJax
            text={
              '當 $$0<a<1$$，如 $$y=\\log_\\frac{1}{2}x,y=\\log_\\frac{1}{3}x,y=\\log_\\frac{1}{10}x$$\n$$\\begin{array}{c|c}x&\\frac{1}{4}&\\frac{1}{2}&1&2&4\\\\ \\hline\\log_\\frac{1}{2}x\\end{array}$$'
            }
          />
          <Textarea2MathJax
            text={
              '$$\\begin{array}{c|c}x&\\frac{1}{9}&\\frac{1}{3}&1&3&9\\\\ \\hline\\log_\\frac{1}{3}x\\end{array}$$'
            }
          />
          <Textarea2MathJax
            text={
              '$$\\begin{array}{c|c}x&\\frac{1}{10}&1&2&3&5&10\\\\ \\hline\\log_\\frac{1}{10}x\\end{array}$$'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={19}>
        <Concept num={1} title="對數函數的圖形" height="11.4cm">
          <Textarea2MathJax text={'觀察圖形並歸納結論，當底數 $$0<a<1$$ 時：'} />
          <Textarea2MathJax
            text={
              '(1) 若 $$x>1$$，$$y=\\log_ax$$ 的函數值為負；若 $$0<x<1$$，$$y=\\log_ax$$ 的函數值為正。底數 $$a$$ 愈小，圖形彎得愈靠近 $$x$$ 軸。'
            }
          />
          <Textarea2MathJax
            text={'(2) 若 $$0<p<q$$，則 $$\\log_ap>\\log_aq$$，即 $$y=\\log_ax$$ 為遞減函數。'}
          />
          <Textarea2MathJax
            text={
              '(3) 若 $$x$$ 接近 $$0$$ 時，$$y=\\log_ax$$ 的函數值會接近無限大，圖形靠近 $$y$$ 軸但不相交，稱 $$y$$ 軸為圖形的漸近線。'
            }
          />
          <div className={style.conceptHead}>指數與對數的關係</div>
          <img
            className={style.axis}
            alt=""
            role="presentation"
            src="/toliman/images/exp-vs-log.PNG"
          />
          <Textarea2MathJax
            text={
              '若點 $$(p,q)$$ 滿足 $$y=a^x$$，則 $$(q,p)$$ 必滿足 $$y=\\log_ax$$。所以 $$y=a^x$$ 的圖形與 $$y=\\log_ax$$ 的圖形對稱於直線 $$y=x$$。'
            }
          />
          <Textarea2MathJax
            text={
              '※若兩個函數的數值對應呈現「顛倒逆推」的關係，兩者的圖形會對稱於 $$y=x$$，稱這兩個函數互為「反函數」。'
            }
          />
          <div className={style.conceptHead}>對數函數圖形的平移伸縮</div>
          <Textarea2MathJax
            text={
              '(1) $$y=\\log_ax$$ 的圖形向左移 $$k$$，為 $$y=\\log_a(x+k)$$，若 $$k<0$$ 則反向。\n(2) $$y=\\log_ax$$ 的圖形向上移 $$k$$，為 $$y=\\log_ax+k$$，若 $$k<0$$ 則反向。\n(3) $$y=\\log_ax$$ 的圖形上下伸長為 $$k$$ 倍，為 $$y=k\\cdot\\log_ax$$，若 $$k<0$$ 則上下顛倒。'
            }
          />
        </Concept>
        <Example num={1} ids={['17aeb0fa9a0', '17aeb146f71']} height="10.6cm" />
      </Page>
      <Page pageNum={20}>
        <Example num={2} ids={['17aeb19c233', '17aeb1c1116']} />
        <Example num={3} ids={['17aeb1e46b6', '17aeb1f4387']} />
      </Page>
      <Page pageNum={21}>
        <Example num={4} ids={['17aeb219ce4', '17aeb22d8bd']} height="15.2cm" />
        <Concept num={2} title="對數的方程式、不等式、極值與應用問題">
          <div>
            1.
            對數的方程式與不等式：先讓符號有意義再開始計算，原則上策略是將兩邊的對數化成同底，以比較真數
          </div>
          <Textarea2MathJax
            text={
              '(1) $$\\log_ax=\\log_ay\\Leftrightarrow x=y$$\n(2) 若 $$a>1$$，$$\\log$$ 為遞增，則 $$\\log_ax>\\log_ay\\Leftrightarrow x>y$$\n(3) 若 $$0<a<1$$，$$\\log$$ 為遞減，則 $$\\log_ax>\\log_ay\\Leftrightarrow x<y$$'
            }
          />
          <div>2. 對數函數求極值：常用配方法求函數的極值。</div>
          <Textarea2MathJax
            text={
              '3. 對數函數的應用：在物理、化學、天文等都有對數的應用，如分貝、酸鹼 $$pH$$ 值、地震強度、星星亮度等。'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={22}>
        <Example num={5} ids={['17aeb2ddd82', '17aeb2e9907']} />
        <Example num={6} ids={['17aeb2f8038', '17aeb307aec']} />
      </Page>
      <Page pageNum={23}>
        <Example num={7} ids={['17aeb31a75d', '17aeb343fde']} />
        <Example num={8} ids={['17aeb357a30', '17aeb361fcd']} />
      </Page>
      <Page pageNum={24}>
        <Example num={9} ids={['17aeb379ce4', '17aeb3aa3b3']} />
        <Example num={10} ids={['17aeb3b97f3', '17aeb3cd780']} />
      </Page>
      <Page pageNum={25}>
        <Example num={11} ids={['17aeb3ec4f6', '17aeb3fc905']} />
        <Example num={12} ids={['17aeb44ce8e', '17aeb496b8e']} />
      </Page>
    </div>
  );
};

export default C1S3LogarithmFunctiontsx;

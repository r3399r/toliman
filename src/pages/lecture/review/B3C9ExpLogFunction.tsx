import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';

const B3C8TrigonometricFunction = () => {
  return (
    <div>
      <div className={style.head}>Ch9 指數函數與對數函數</div>
      <Concept num={1} title="指數函數的圖形">
        <Textarea2MathJax
          text={
            '(1) 若 $$a>1$$，則 $$f(x)=a^x$$ 的圖形為遞增函數，通過 $$(0,1)$$，以 $$x$$ 軸為漸近線，一對一且凹向上。'
          }
        />
        <Textarea2MathJax
          text={
            '(2) 若 $$0<a<1$$，則 $$f(x)=a^x$$ 的圖形為遞減函數，通過 $$(0,1)$$，以 $$x$$ 軸為漸近線，一對一且凹向上。'
          }
        />
      </Concept>
      <Exercise ids={['17b82e42744', '17b82e9f8ad']} />
      <Concept num={2} title="指數函數圖形的平移伸縮">
        <Textarea2MathJax text={'(1) $$y=f(x+k)=a^{x+k}$$ 為 $$y=f(x)$$ 的圖形向左移 $$k$$。'} />
        <Textarea2MathJax text={'(2) $$y=f(x)+k=a^x+k$$ 為 $$y=f(x)$$ 的圖形向上移 $$k$$。'} />
        <Textarea2MathJax
          text={
            '(3) $$y=k\\cdot f(x)=k\\cdot a^x$$ 為 $$y=f(x)$$ 的圖形以 $$x$$ 軸為基準，上下伸縮為 $$k$$ 倍。'
          }
        />
        <Textarea2MathJax
          text={
            '(4) $$y=f(kx)=a^{kx}$$ 為 $$y=f(x)$$ 的圖形以 $$y$$ 軸為基準，左右伸縮為 $$\\frac{1}{k}$$ 倍。'
          }
        />
      </Concept>
      <Exercise ids={['17b838818d6', '17b838a2449']} />
      <Concept num={3} title="指數方程式與不等式">
        <Textarea2MathJax
          text={
            '我們常將指數符號化為同底，來解指數的方程式與不等式。解不等式時須注意底數是否大於或小於 $$1$$。'
          }
        />
      </Concept>
      <Exercise ids={['17b838e6907', '17b838fdeab']} />
      <Concept num={4} title="指數符號與對數符號互換">
        <Textarea2MathJax
          text={
            '規定 $$a^c=b\\Leftrightarrow c=\\log_ab$$，此時 $$a>0$$ 且 $$a\\neq1$$ 且 $$b>0$$，稱 $$a$$ 為底數，$$b$$ 為真數，$$c$$ 為指數，利用此符號互換求出基本對數值。'
          }
        />
      </Concept>
      <Exercise ids={['17b8394a0da', '17b8396d89b']} />
      <Concept num={5} title="對數符號有意義">
        <Textarea2MathJax
          text={'對數 $$\\log_ab$$ 有意義 $$\\Leftrightarrow a>0$$ 且 $$a\\neq1$$ 且 $$b>0$$'}
        />
      </Concept>
      <Exercise ids={['17b839a6f76', '17b839dee39']} />
      <Concept num={6} title="對數律">
        <Textarea2MathJax text={'(1) 消底：$$\\log_aa^x=x$$、$$a^{\\log_ax}=x$$'} />
        <Textarea2MathJax
          text={
            '(2) 分合：$$\\log_axy=\\log_ax+\\log_ay$$、$$\\log_a\\frac{x}{y}=\\log_ax-\\log_ay$$'
          }
        />
        <Textarea2MathJax
          text={'(3) 次方與係數：$$\\log_ax^m=m\\log_ax$$、$$\\log_{a^n}x=\\frac{1}{n}\\log_ax$$'}
        />
        <Textarea2MathJax
          text={
            '(4) 換底、連鎖律：$$\\log_ab=\\frac{\\log_cb}{\\log_ca}$$、$$\\log_ca\\cdot\\log_ab=\\log_cb$$'
          }
        />
      </Concept>
      <Exercise ids={['17b83aa9f1b', '17b83ad833a', '17b83af255b', '17b83b03143']} />
      <Concept num={7} title="對數函數的圖形">
        <Textarea2MathJax
          text={
            '(1) 若 $$a>1$$，則 $$f(x)=\\log_ax$$ 的圖形為遞增函數，通過 $$(1,0)$$，以 $$y$$ 軸為漸近線，一對一且凹向下。'
          }
        />
        <Textarea2MathJax
          text={
            '(2) 若 $$0<a<1$$，則 $$f(x)=\\log_ax$$ 的圖形為遞減函數，通過 $$(1,0)$$，以 $$y$$ 軸為漸近線，一對一且凹向上。'
          }
        />
        <Textarea2MathJax
          text={
            '(3) 指數函數 $$y=a^x$$ 與對數函數 $$y=\\log_ax$$ 的圖形對稱於直線 $$x-y=0$$，若點 $$(p,q)$$ 在 $$y=a^x$$ 上，則點 $$(q,p)$$ 在 $$y=\\log_ax$$ 上。'
          }
        />
      </Concept>
      <Exercise ids={['17b83ba9624', '17b83bf21ed']} />
      <Concept num={8} title="對數函數圖形的平移伸縮">
        <Textarea2MathJax
          text={'(1) $$y=f(x+k)=\\log_a{x+k}$$ 為 $$y=f(x)$$ 的圖形向左移 $$k$$。'}
        />
        <Textarea2MathJax text={'(2) $$y=f(x)+k=\\log_ax+k$$ 為 $$y=f(x)$$ 的圖形向上移 $$k$$。'} />
        <Textarea2MathJax
          text={
            '(3) $$y=k\\cdot f(x)=k\\log_ax$$ 為 $$y=f(x)$$ 的圖形以 $$x$$ 軸為基準，上下伸縮為 $$k$$ 倍。'
          }
        />
        <Textarea2MathJax
          text={
            '(4) $$y=f(kx)=\\log_a{kx}$$ 為 $$y=f(x)$$ 的圖形以 $$y$$ 軸為基準，左右伸縮為 $$\\frac{1}{k}$$ 倍。'
          }
        />
      </Concept>
      <Exercise ids={['17b83c5cb0a', '17b83c84655']} />
      <Concept num={9} title="對數方程式與不等式">
        <Textarea2MathJax
          text={
            '常將對數化為同底或化為指數來解對數的方程式與不等式。解對數的方程式不等式前，務必先讓符號有意義之後再求解。'
          }
        />
      </Concept>
      <Exercise ids={['17b83cb16d1', '17b83cc07c7']} />
      <Concept num={10} title="指數函數與對數函數的應用">
        <Textarea2MathJax
          text={
            '自然與社會的許多現象都與指數對數有密切關聯。例如人口增長、放射性衰變、溫度變化、複利本利和等，為指數型態的函數。而地震能量、酸鹼值、分貝、星光強度等，為對數型態的函數。'
          }
        />
      </Concept>
      <Exercise ids={['17b83d0155c', '17b83d31116']} />
      <Example num={1} ids={['17b742931cf', '17b742d3338']} />
    </div>
  );
};

export default B3C8TrigonometricFunction;

import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';
import Page from 'src/pages/lecture/component/Page';

const B3C9ExpLogFunction = () => (
  <MathJax>
    <Page pageNum={10}>
      <div className={style.head}>Ch9 指數函數與對數函數</div>
      <Concept num={1} title="指數函數的圖形" height="5.5cm">
        <div>$f(x)=a^x$ 的圖形有兩種：</div>
        <div>{'(1) 若 $a>1$，為遞增函數，通過 (0,1)，以 $x$ 軸為漸近線，一對一且凹向上。'}</div>
        <div>{'(2) 若 $0<a<1$，為遞減函數，通過 (0,1)，以 $x$ 軸為漸近線，一對一且凹向上。'}</div>
      </Concept>
      <Exercise ids={['17b82e42744', '17b82e9f8ad']} height="9.7cm" />
      <Concept num={2} title="指數函數圖形的平移伸縮">
        <div>{'(1) $y=f(x+k)=a^{x+k}$ 為 $y=f(x)$ 的圖形向左移 $k$'}</div>
        <div>{'(2) $y=f(x)+k=a^x+k$ 為 $y=f(x)$ 的圖形向上移 $k$'}</div>
        <div>
          {'(3) $y=k\\cdot f(x)=k\\cdot a^x$ 為 $y=f(x)$ 的圖形以 $x$ 軸為基準，上下伸縮為 $k$ 倍'}
        </div>
        <div>
          {'(4) $y=f(kx)=a^{kx}$ 為 $y=f(x)$ 的圖形以 $y$ 軸為基準，左右伸縮為 $\\dfrac1k$ 倍'}
        </div>
      </Concept>
    </Page>
    <Page pageNum={11}>
      <Exercise ids={['17b838818d6', '17b838a2449']} />
      <Concept num={3} title="指數方程式與不等式">
        <div>
          我們常將指數符號化為同底，來解指數的方程式與不等式。解不等式時須注意底數是否大於或小於 1。
        </div>
      </Concept>
      <Exercise ids={['17b838e6907', '17b838fdeab']} />
      <Concept num={4} title="指數符號與對數符號互換">
        <div>
          {
            '規定 $a^c=b\\Leftrightarrow c=\\log_ab$，此時 $a>0$ 且 $a\\neq1$ 且 $b>0$，稱 $a$ 為底數，$b$ 為真數，$c$ 為指數，利用此符號互換求出基本對數值。'
          }
        </div>
      </Concept>
    </Page>
    <Page pageNum={12}>
      <Exercise ids={['17b8394a0da', '17b8396d89b']} />
      <Concept num={5} title="對數符號有意義">
        <div>{'對數 $\\log_ab$ 有意義 $\\Leftrightarrow a>0$ 且 $a\\ne1$ 且 $b>0$'}</div>
      </Concept>
      <Exercise ids={['17b839a6f76', '17b839dee39']} />
      <Concept num={6} title="對數公式">
        <div>{'(1) 消底：$\\log_aa^x=x$、$a^{\\log_ax}=x$'}</div>
        <div>
          {'(2) 分合：$\\log_axy=\\log_ax+\\log_ay$、$\\log_a\\dfrac xy=\\log_ax-\\log_ay$'}
        </div>
        <div>{'(3) 次方與係數：$\\log_ax^m=m\\log_ax$、$\\log_{a^n}x=\\dfrac1n\\log_ax$'}</div>
        <div>{'(4) 換底公式：$\\log_ab=\\dfrac{\\log_cb}{\\log_ca}$'}</div>
        <div>{'(5) 連鎖律：$\\log_ca\\cdot\\log_ab=\\log_cb$'}</div>
      </Concept>
    </Page>
    <Page pageNum={13}>
      <Exercise ids={['17b83aa9f1b', '17b83ad833a', '17b83af255b', '17b83b03143']} />
      <Concept num={7} title="對數函數的圖形">
        <div>$f(x)=\log_ax$ 的圖形有兩種：</div>
        <div>{'(1) 若 $a>1$，為遞增函數，通過 (1,0)，以 $y$ 軸為漸近線，一對一且凹向下。'}</div>
        <div>{'(2) 若 $0<a<1$，為遞減函數，通過 (1,0)，以 $y$ 軸為漸近線，一對一且凹向上。'}</div>
        <br />
        <div className={style.conceptHead}>指數與對數函數圖形的對稱性</div>
        <div>
          {
            '指數函數 $y=a^x$ 與對數函數 $y=\\log_ax$ 的圖形對稱於直線 $x-y=0$，若點 $(p,q)$ 在 $y=a^x$ 上，則點 $(q,p)$ 在 $y=\\log_ax$ 上。'
          }
        </div>
      </Concept>
    </Page>
    <Page pageNum={14}>
      <Exercise ids={['17b83ba9624', '17b83bf21ed']} height="8.5cm" />
      <Concept num={8} title="對數函數圖形的平移伸縮">
        <div>{'(1) $y=f(x+k)=\\log_a{x+k}$ 為 $y=f(x)$ 的圖形向左移 $k$'}</div>
        <div>{'(2) $y=f(x)+k=\\log_ax+k$ 為 $y=f(x)$ 的圖形向上移 $k$'}</div>
        <div>
          {'(3) $y=k\\cdot f(x)=k\\log_ax$ 為 $y=f(x)$ 的圖形以 $x$ 軸為基準，上下伸縮為 $k$ 倍'}
        </div>
        <div>
          {'(4) $y=f(kx)=\\log_a{kx}$ 為 $y=f(x)$ 的圖形以 $y$ 軸為基準，左右伸縮為 $\\dfrac1k$ 倍'}
        </div>
      </Concept>
      <Exercise ids={['17b83c5cb0a', '17b83c84655']} height="8.5cm" />
    </Page>
    <Page pageNum={15}>
      <Concept num={9} title="對數方程式與不等式">
        <div>
          常將對數化為同底或化為指數來解對數的方程式與不等式。解對數的方程式不等式前，務必先讓符號有意義之後再求解。
        </div>
      </Concept>
      <Exercise ids={['17b83cb16d1', '17b83cc07c7']} height="6.7cm" />
      <Concept num={10} title="指數函數與對數函數的應用" height="1.8cm">
        <div>
          自然與社會的許多現象都與指數對數有密切關聯。例如人口增長、放射性衰變、溫度變化、複利本利和等，為指數型態的函數。而地震能量、酸鹼值、分貝、星光強度等，為對數型態的函數。
        </div>
      </Concept>
      <Exercise ids={['17b83d0155c', '17b83d31116']} height="8.2cm" />
    </Page>
    <Page pageNum={16}>
      <Concept num={11} title="科學記號與常用對數">
        <div>
          由對數 $\log a$ 的值可推知 $a$ 的科學記號，進一步得知 $a$ 是幾位數，及最高位數字。
        </div>
      </Concept>
      <Exercise ids={['17bdeef5d0a', '17bdef095bc']} height="7cm" />
      <Example num={1} ids={['17bdef3ebc0', '17bdef93b82']} height="12.1cm" />
    </Page>
    <Page pageNum={17}>
      <Example num={2} ids={['17bdf089825', '17bdf0c183f']} />
      <Example num={3} ids={['17bdf0e6546', '17bdf1119f3']} />
    </Page>
    <Page pageNum={18}>
      <Example num={4} ids={['17bdf134773', '17bdf208be0']} />
      <Example num={5} ids={['17bdf223df1', '17bdf238b24']} />
    </Page>
    <Page pageNum={19}>
      <Example num={6} ids={['17bdf25d197', '17bdf27ab1b']} />
      <Example num={7} ids={['17bdf2c7a3c', '17bdf3f2411']} />
    </Page>
    <Page pageNum={20}>
      <Example num={8} ids={['17bdf4330cf', '17bdf4864dd']} />
      <Example num={9} ids={['17bdf4ca016', '17c0e46cd15']} />
    </Page>
    <Page pageNum={21}>
      <Example num={10} ids={['17c0e4b28e3', '17c0e4f3e9f']} />
      <Example num={11} ids={['17c0e5c084b', '17c0e6013ff']} />
    </Page>
  </MathJax>
);

export default B3C9ExpLogFunction;

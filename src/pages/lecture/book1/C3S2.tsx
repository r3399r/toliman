import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C3S2 = () => (
  <MathJax>
    <Page pageNum={9}>
      <div className={style.head}>2 多項式函數</div>
      <Concept num={1} title="函數的意義與線型函數">
        <div className={style.conceptHead}>何謂函數？</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>線型函數</div>
        <div>
          為最簡單的多項式函數，形式為 $y=f(x)=ax+b$，其中 $a$ 為斜率，$b$ 為 $y$ 截距。
          <br />
          若 $a\ne0$，則 $f(x)$ 為一次函數，圖形為斜直線
          <br />若 $a=0$，則 $f(x)$ 為常數函數，圖形為水平直線
        </div>
        <br />
        <br />
        <br />
        <br />
      </Concept>
      <Example num={1} ids={['182c079e6a2', '182c0777e48']} />
    </Page>
    <Page pageNum={10}>
      <Concept num={2} title="函數圖形的平移">
        <div>
          函數圖形 $y=f(x)$ 的平移規則如下：(以 $y=3x-5$ 為例)
          <br />
          若函數圖形向上平移 $k$，則 $y=f(x)+k$
          <br />
          若函數圖形向下平移 $k$，則 $y=f(x)-k$
          <br />
          <br />
          若函數圖形向右平移 $k$，則 $y=f(x-k)$
          <br />
          若函數圖形向左平移 $k$，則 $y=f(x+k)$
        </div>
      </Concept>
      <Example num={2} ids={['182c07e3dba', '182c082b620']} height="5.5cm" />
      <Example num={3} ids={['18460ea0f9d', '18460ea8803']} height="4cm" />
    </Page>
    <Page pageNum={11}>
      <Concept num={3} title="二次函數的圖形">
        <div>
          $y=f(x)=ax^2+bx+c$，$a\ne0$，圖形為
          <br />
          圖形中哪裡有 $a$、$b$、$c$？
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          二次函數的解？
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Concept>
      <Example num={4} ids={['182c07aecea', '182c07daa5e']} />
    </Page>
    <Page pageNum={12}>
      <Example num={5} ids={['182c084b7be', '182c085f33d']} />
      <Example num={6} ids={['18460fb791c', '18460fd53a8']} />
    </Page>
    <Page pageNum={13}>
      <Example num={7} ids={['182c08894ba', '182c0896c4e']} />
      <Example num={8} ids={['182c08aa931', '18461051e80']} />
    </Page>
    <Page pageNum={14}>
      <Example num={9} ids={['182c0920e8c', '182c09b4df4']} />
      <Example num={10} ids={['182c09aa6fb', '182c0a086ec']} />
    </Page>
    <Page pageNum={15}>
      <Example num={11} ids={['182c09045f1', '182c09fa603']} />
      <Example num={12} ids={['182c59cfc9a', '182c5a1665f']} />
    </Page>
    <Page pageNum={16}>
      <Concept num={4} title="三次函數的圖形">
        <div className={style.conceptHead}>$y=ax^3$ 的圖形</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>$y=ax^3+px$ 的圖形</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>記住，所有三次函數可以變成 $ax^3+px$ 的形式</div>
      </Concept>
      <Example num={13} ids={['182c0a258d8', '182c0a19bab']} />
    </Page>
    <Page pageNum={17}>
      <Example num={14} ids={['182c0a48915', '182c0a67bdf']} />
      <Example num={15} ids={['182c0a5821b', '182c0a842ea']} />
    </Page>
    <Page pageNum={18}>
      <Example num={16} ids={['182c0ad07b9', '182c0ae5956']} height="20cm" />
    </Page>
    <Page pageNum={19}>
      <Concept num={5} title="高次函數、大域特徵、局部特徵">
        <div className={style.conceptHead}>高次函數的圖形</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>多項式函數的大域特徵</div>
        <div>
          宏觀來看，若把視野拉遠，則 $n$ 次多項式 $f(x)=ax^n+\cdots$ 的圖形會近似於 $y=ax^n$
        </div>
        <br />
        <div className={style.conceptHead}>多項式函數的局部特徵</div>
        <div>
          微觀來看，若把視野拉近，多項式函數圖形的局部放大後會近似直線，此直線又稱為「一次近似」，可使用連續綜合除法求這條近似直線。
        </div>
      </Concept>
      <Example num={17} ids={['18158627ae9', '182c0b1abdf']} height="9cm" />
    </Page>
    <Page pageNum={20}>
      <Example num={18} ids={['182c0b29b5e', '18155c5e153']} height="20cm" />
    </Page>
  </MathJax>
);

export default C3S2;

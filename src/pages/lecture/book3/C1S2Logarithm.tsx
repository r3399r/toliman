import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C1S2Logarithm = () => {
  return (
    <div>
      <Page pageNum={9}>
        <div className={style.head}>2 對數符號與對數律</div>
        <Concept num={1} title="對數符號">
          <div className={style.conceptHead}>常用對數</div>
          <Textarea2MathJax
            text={
              '將 $10^x=3$ 的次數 $x$ 記為 $\\log3$，稱為「$3$ 的對數值」，為無理數，按計算機可知其值約為 $0.4771$。滿足下列性質：\n(1) $10^a=b\\Leftrightarrow a=\\log b\\quad$ (2) $10^{\\log k}=k\\quad$ (3) $\\log(10^k)=k$'
            }
          />
          <div className={style.conceptHead}>一般底的對數符號</div>
          <Textarea2MathJax
            text={
              '設 $a>0$ 且 $a\\neq1$，$b>0$，$a^x=b$ 的次數 $x$ 存在且唯一，$x$ 記為 $\\log_ab$，其中 $x$ 為指數、$a$ 為底數、$b$ 為真數，如 $2^3=8$ 可得 $\\log_28=3$。'
            }
          />
          <Textarea2MathJax
            text={
              '(1) 指數、真數、底數位置互換：\n　\n(2) 若對數符號 $\\log_ab$ 有意義，則 $\\begin{cases}a>0\\\\a\\neq1\\\\b>0\\end{cases}$ 必成立，無意義的例子如 $\\log_11$、$\\log_{-2}4$。'
            }
          />
          <Textarea2MathJax
            text={
              '(3) $a^0=1\\Leftrightarrow\\log_a1=0$　(4) $a^1=a\\Leftrightarrow\\log_aa=1$\n(5) $\\log_aa^m=m$　　 　　 (6) $a^{\\log_am}=m$'
            }
          />
          <div className={style.conceptHead}>相同底數時比較對數值的大小</div>
          <Textarea2MathJax
            text={
              '(1) 底數 $a>1$ 時，$\\log$ 會隨著真數增加而遞增，如 $\\log_22=1$、$\\log_24=2$、$\\log_28=3$，故 $\\log_ax>\\log_ay\\Leftrightarrow x>y$。'
            }
          />
          <Textarea2MathJax
            text={
              '(2) 底數 $0<a<1$ 時，$\\log$ 會隨著真數增加而遞減，如 $\\log_{\\frac{1}{2}}2=-1$、$\\log_{\\frac{1}{2}}4=-2$、$\\log_{\\frac{1}{2}}8=-3$，故 $\\log_ax>\\log_ay\\Leftrightarrow x<y$。'
            }
          />
          <Textarea2MathJax
            text={
              '(3) 對數同底且等值時，則可消去 $\\log$，即 $\\log_ax=\\log_ay\\Leftrightarrow x=y$'
            }
          />
        </Concept>
        <Example num={1} ids={['17ae5f1c093', '17ae5f45610']} height="6.7cm" />
      </Page>
      <Page pageNum={10}>
        <Example num={2} ids={['17ae5f8d033', '17ae5fad1a6']} height="7cm" />
        <Example num={3} ids={['17ae5fed86d', '17ae60099ab']} height="7cm" />
        <Example num={4} ids={['17ae604b198', '17ae606d134']} height="6.5cm" />
      </Page>
      <Page pageNum={11}>
        <Example num={5} ids={['17ae61ed92d', '17ae620a4f1']} />
        <Example num={6} ids={['17ae6225c92', '17ae6234b20']} />
      </Page>
      <Page pageNum={12}>
        <Example num={7} ids={['17ae624a1e8', '17ae62b51b8']} />
        <Concept num={2} title="對數律公式">
          <Textarea2MathJax
            text={
              '(1) $\\log_axy=\\log_ax+\\log_ay$\n(2) $\\log_a\\frac{x}{y}=\\log_ax-\\log_ay$\n(3) $\\log_ax^m=m\\log_ax$\n(4) $\\log_{a^n}x=\\frac{1}{n}\\log_ax$\n(5) $\\log_{a^n}x^n=\\log_ax$\n(6) $\\log_ab=\\frac{\\log_cb}{\\log_ca}$；$\\log_ab\\cdot\\log_bc=\\log_ac$'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={13}>
        <Example num={8} ids={['17ae6a3c867', '17ae6a53e50']} />
        <Example num={9} ids={['17ae6a666b5', '17ae6a775db']} />
      </Page>
      <Page pageNum={14}>
        <Example num={10} ids={['17ae6a8e308', '17ae6aa7a42']} />
        <Example num={11} ids={['17ae6ac1ade', '17ae6b5218c']} />
      </Page>
      <Page pageNum={15}>
        <Example num={12} ids={['17ae6b46b56', '17ae6adeca9']} />
        <Example num={13} ids={['17ae6b70865', '17ae6b80861']} />
      </Page>
      <Page pageNum={16}>
        <Example num={14} ids={['17ae6b9d6f2', '17ae6bbd35e']} />
        <Example num={15} ids={['17ae6bac331', '17ae6bd65a5']} />
      </Page>
      <Page pageNum={17}>
        <Example num={16} ids={['17ae6bec748', '17ae6c10a1b']} />
        <Example num={17} ids={['17ae6c1ef4f', '17ae6c2a995']} />
      </Page>
    </div>
  );
};

export default C1S2Logarithm;

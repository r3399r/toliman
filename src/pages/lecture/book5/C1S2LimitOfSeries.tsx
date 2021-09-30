import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C1S2LimitOfSeries = () => {
  return (
    <div>
      <Page pageNum={5}>
        <div className={style.head}>2 級數的極限</div>
        <Concept num={1} title="連加符號及其性質">
          <div className={style.conceptHead}>Σ 符號</div>
          <Textarea2MathJax
            text={
              '「$\\Sigma$」讀做 sigma，表示連加求和，例如：\n(1) $\\displaystyle\\sum^{20}_{k=5}a_k=a_5+a_6+a_7+\\cdots+a_{20}$\n(2) $\\displaystyle\\sum^{10}_{n=1}(3n+2)=5+8+11+\\cdots+32$\n(1) $\\displaystyle\\sum^{30}_{i=1}2^{i-1}=1+2+2^2+\\cdots+2^{29}$'
            }
          />
          <div className={style.conceptHead}>Σ 的性質</div>
          <Textarea2MathJax
            text={'(1) $\\displaystyle\\sum^n_{k=1}(a_k+b_k)=\\sum^n_{k=1}a_k+\\sum^n_{k=1}b_k$'}
          />
          <Textarea2MathJax
            text={'(2) 設 $c$ 為常數，$\\displaystyle\\sum^n_{k=1}(ca_k)=c\\cdot\\sum^n_{k=1}a_k$'}
          />
          <Textarea2MathJax
            text={
              '(3) 設 $c$ 為常數，$\\displaystyle\\sum^n_{k=1}c=\\underbrace{c+c+\\cdots+c}_n=nc$'
            }
          />
          <div className={style.conceptHead}>求和公式</div>
          <Textarea2MathJax
            text={'(1) $\\displaystyle\\sum^n_{k=1}k=1+2+3+\\cdots+n=\\frac{n(n+1)}{2}'}
          />
          <Textarea2MathJax
            text={
              '(2) $\\displaystyle\\sum^n_{k=1}k^2=1^2+2^2+3^2+\\cdots+n^2=\\frac{n(n+1)(2n+1)}{6}'
            }
          />
          <Textarea2MathJax
            text={
              '(3) $\\displaystyle\\sum^n_{k=1}k^3=1^3+2^3+3^3+\\cdots+n^3=\\left[\\frac{n(n+1)}{2}\\right]^2'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={6}>
        <Example num={1} ids={['17baf47f696', '17baf4a1be5']} />
        <Example num={2} ids={['17baf4c914f', '17baf4f5a2d']} />
      </Page>
      <Page pageNum={7}>
        <Example num={3} ids={['17baf52582a', '17baf535b16']} />
        <Example num={4} ids={['17baf540b30', '17baf54e4a7']} />
      </Page>
      <Page pageNum={8}>
        <Concept num={2} title="無窮等比級數的極限" height="10.5cm">
          <div className={style.conceptHead}>無窮級數和的收斂與發散</div>
          <Textarea2MathJax
            text={
              '無窮數列的前 $n$ 項和為 $S_n$，當 $n$ 很大時，若其和趨近於某一個定數 $S$，則稱無窮級數收斂於 $S$；若沒有收斂，則稱級數發散。'
            }
          />
          <div className={style.conceptHead}>無窮等比數列</div>
          <Textarea2MathJax
            text={
              '等比數列 $a,ar,ar^2,ar^3,\\cdots$，收斂條件為 $-1<r\\le1$\n(1) $r=1$ 時，$\\displaystyle\\lim_{n\\to\\infty}a_n=a$\n(2) $-1<r<1$ 時，$\\displaystyle\\lim_{n\\to\\infty}a_n=0$'
            }
          />
          <div className={style.conceptHead}>無窮等比級數</div>
          <Textarea2MathJax
            text={
              '等比級數 $a+ar+ar^2+ar^3+\\cdots$，收斂條件為 $-1<r<1$，其極限值為 $\\frac{a}{1-r}$'
            }
          />
        </Concept>
        <Example num={5} ids={['17baf5a0a42', '17baf5b51c3']} />
      </Page>
      <Page pageNum={9}>
        <Example num={6} ids={['17baf5ce83c', '17baf5e0933']} />
        <Example num={7} ids={['17baf5f606f', '17baf60acf7']} />
      </Page>
      <Page pageNum={10}>
        <Example num={8} ids={['17baf6530ad', '17baf66e6f8']} />
      </Page>
    </div>
  );
};

export default C1S2LimitOfSeries;

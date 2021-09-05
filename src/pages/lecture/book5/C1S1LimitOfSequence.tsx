import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C1S1LimitOfSequence = () => {
  return (
    <div>
      <Page pageNum={1}>
        <div className={style.head}>1 數列的極限</div>
        <Concept num={1} title="無窮數列的收斂與發散">
          <div className={style.conceptHead}>極限值</div>
          <Textarea2MathJax
            text={
              '無窮數列 $$\\langle a_n\\rangle$$，當 $$n$$ 很大時，若 $$a_n$$ 的值靠近一個定數 $$k$$，則稱 $$k$$ 為數列 $$\\langle a_n\\rangle$$ 的極限，記為 $$\\displaystyle\\lim_{x\\to\\infty}a_n=k$$。'
            }
          />
          <div className={style.conceptHead}>收斂與發散</div>
          <Textarea2MathJax
            text={
              '無窮數列的極限值若存在，則稱為收斂數列。反之，極限值若不存在，則稱為發散數列。\n例如：$$\\langle(-1)^n\\rangle$$ 的數值呈跳動型態，為發散，$$\\langle\\frac{n^2}{n+1}\\rangle$$ 的數值遞增至無限大，亦為發散'
            }
          />
        </Concept>
        <Example num={1} ids={['17baf2aecc8', '17baf2f3825']} height="15cm" />
      </Page>
      <Page pageNum={2}>
        <Example num={2} ids={['17baf3244b9', '17baf33d3e4']} />
        <Example num={3} ids={['17baf3771d5', '17baf398761']} />
      </Page>
      <Page pageNum={3}>
        <Example num={4} ids={['17baf3b868b', '17baf3c9021']} />
        <Concept num={2} title="數列極限的性質">
          <Textarea2MathJax
            text={'已知數列 $$\\langle a_n\\rangle$$ 與 $$\\langle b_n\\rangle$$ 均為收斂，則：'}
          />
          <Textarea2MathJax
            text={
              '1. $$\\displaystyle\\lim_{n\\to\\infty}(a_n+b_n)=\\lim_{n\\to\\infty}a_n+\\lim_{n\\to\\infty}b_n$$'
            }
          />
          <Textarea2MathJax
            text={
              '2. $$\\displaystyle\\lim_{n\\to\\infty}(a_n-b_n)=\\lim_{n\\to\\infty}a_n-\\lim_{n\\to\\infty}b_n$$'
            }
          />
          <Textarea2MathJax
            text={
              '3. $$\\displaystyle\\lim_{n\\to\\infty}(a_nb_n)=\\lim_{n\\to\\infty}a_n\\times\\lim_{n\\to\\infty}b_n$$'
            }
          />
          <Textarea2MathJax
            text={
              '4. $$\\displaystyle\\lim_{n\\to\\infty}\\left(\\frac{b_n}{a_n}\\right)=\\frac{\\displaystyle\\lim_{n\\to\\infty}b_n}{\\displaystyle\\lim_{n\\to\\infty}a_n}$$'
            }
          />
          <div className={style.conceptHead}>夾擠定理</div>
          <Textarea2MathJax
            text={
              '設 $$\\langle a_n\\rangle$$、$$\\langle b_n\\rangle$$、$$\\langle c_n\\rangle$$ 三個數列，若 $$a_n\\le c_n\\le b_n$$ 且 $$\\displaystyle\\lim_{n\\to\\infty}a_n=\\lim_{n\\to\\infty}b_n=k$$，則 $$\\langle c_n\\rangle$$ 為收斂且 $$\\displaystyle\\lim_{n\\to\\infty}c_n=k$$。'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={4}>
        <Example num={5} ids={['17baf3e3c13', '17baf42ecca']} />
        <Example num={6} ids={['17baf441656', '17baf453b18']} />
      </Page>
    </div>
  );
};

export default C1S1LimitOfSequence;

import Textarea2MathJax from 'src/component/Textarea2MathJax';
import Concept from './component/Concept';
import Example from './component/Example';
import Exercise from './component/Exercise';
import style from './Lecture.module.scss';

const Lecture = () => {
  return (
    <div className={style.content}>
      <div className={style.head}>數與式</div>
      <Concept title="乘法公式">
        <div className={style.conceptHead}>乘法公式</div>
        <div className={style.note}>
          <Textarea2MathJax
            text={
              '推導$$(a+b)^2$$、$$(a-b)^2$$、$$(a+b)(a-b)$$、$$(a+b)^3$$、$$(a-b)^3$$、$$a^3+b^3$$、$$a^3-b^3$$'
            }
          />
        </div>
      </Concept>
      <Exercise
        ids={[
          '17966d95335',
          '17966da3a45',
          '17966db0d85',
          '17966e6cae0',
          '17966e46808',
          '17966e50e90',
        ]}
      />
      <Example num={1} ids={['179670b1cf0', '1796711996f']} />
      <Example num={2} ids={['1796721257b', '1796722b7b6']} />
      <Example num={3} ids={['17967250e4f', '1796725f6d0']} />

      <Concept title="方根">
        <div className={style.conceptHead}>方根的意義</div>
        <div>
          <Textarea2MathJax
            text={
              '若 $$x^2=a$$，稱 $$x$$ 為 $$a$$ 的平方根，其正實數解為 $$x=\\sqrt{a}$$\n若 $$x^3=a$$，稱 $$x$$ 為 $$a$$ 的立方根，其正實數解為 $$x=\\sqrt[3]{a}$$\n若 $$x^4=a$$，稱 $$x$$ 為 $$a$$ 的四次方根，其正實數解為 $$x=\\sqrt[4]{a}$$'
            }
          />
        </div>
        <div className={style.conceptHead}>平方根的性質</div>
        <div>
          <Textarea2MathJax text={'當 $$a>0$$、$$b>0$$ 時，'} />
        </div>
        <div className={style.note}>
          <Textarea2MathJax
            text={
              '(1) $$\\sqrt{a^2}=|a|$$，$$\\sqrt{a}^2=a$$\n(2) $$\\sqrt{a}\\cdot\\sqrt{b}=\\sqrt{ab}$$\n(3) $$\\frac{\\sqrt{a}}{\\sqrt{b}}=\\sqrt{\\frac{a}{b}}$$\n(4) $$(\\sqrt{a}+\\sqrt{b})(\\sqrt{a}-\\sqrt{b})=a-b$$'
            }
          />
        </div>
        <div className={style.conceptHead}>有理化</div>
        <div>
          <Textarea2MathJax
            text={
              '(1) 當分母為 $$\\sqrt{x}$$，則同乘以 $$\\sqrt{x}$$\n(2) 當分母為 $$\\sqrt{x}\\pm\\sqrt{y}$$，則同乘以 $$\\sqrt{x}\\mp\\sqrt{y}$$'
            }
          />
        </div>
      </Concept>
    </div>
  );
};

export default Lecture;

import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';

const Equations = () => {
  return (
    <div className={style.content}>
      <div className={style.head}>式的運算</div>
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
              '若 $$x^2=a$$，稱 $$x$$ 為 $$a$$ 的平方根，其 $$x=\\pm\\sqrt{a}$$\n若 $$x^3=a$$，稱 $$x$$ 為 $$a$$ 的立方根，其 $$x=\\sqrt[3]{a}$$\n若 $$x^4=a$$，稱 $$x$$ 為 $$a$$ 的四次方根，其 $$x=\\pm\\sqrt[4]{a}$$'
            }
          />
        </div>
      </Concept>
      <Exercise ids={['17971323175', '179713341f3']} />
      <Concept title="根式的運算">
        <div className={style.conceptHead}>平方根的性質</div>
        <div>
          <Textarea2MathJax text={'當 $$a>0$$、$$b>0$$ 時，'} />
        </div>
        <div className={style.note}>
          <Textarea2MathJax
            text={
              '(1) $$\\sqrt{a^2}=|a|$$，$$\\sqrt{a}^2=a$$\n(2) $$\\sqrt{a}\\cdot\\sqrt{b}=\\sqrt{ab}$$\n(3) $$\\frac{\\sqrt{a}}{\\sqrt{b}}=\\sqrt{\\frac{a}{b}}$$'
            }
          />
        </div>
        <div className={style.conceptHead}>根式的化簡</div>
        <div>
          <Textarea2MathJax
            text={
              '(1) 同類根號可加減合併，如：$$3\\sqrt{5}+\\sqrt{5}=4\\sqrt{5}$$\n(2) 同次根號可乘除合併，如：$$\\sqrt{5}\\times\\sqrt{3}=\\sqrt{15}$$\n(3) 分母有理化，利用乘法公式使分母沒有根號'
            }
          />
        </div>
        <div className={style.conceptHead}>雙重根式化簡</div>
        <div>
          <Textarea2MathJax
            text={
              '(1) $$\\sqrt{a+b+2\\sqrt{ab}}=\\sqrt{a}+\\sqrt{b}$$，其中 $$a$$，$$b\\ge0$$\n(2) $$\\sqrt{a+b-2\\sqrt{ab}}=\\sqrt{a}-\\sqrt{b}$$，其中 $$a\\ge b\\ge0$$'
            }
          />
        </div>
      </Concept>
      <Exercise
        ids={[
          '179713f505b',
          '17971404754',
          '17971414438',
          '1797146a9d6',
          '17971430035',
          '1797143dff1',
          '17971486cd5',
          '1797144b8ac',
        ]}
      />
      <Example num={4} ids={['179734d440d', '179734ed12b']} />
      <Example num={5} ids={['179714ae086', '179714bed16']} />
      <Example num={6} ids={['179714e1972', '17971508a12']} />
    </div>
  );
};

export default Equations;

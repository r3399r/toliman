import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';

const Numbers = () => {
  return (
    <div>
      <div className={style.head}>升高一(節選)</div>
      <Concept title="絕對值">
        <div className={style.conceptHead}>絕對值的幾何意義</div>
        <Textarea2MathJax
          text={
            '(1) $|a-b|$ 代表數線上 $a$、$b$ 兩點間的距離\n(2) $|a|=|a-0|$ 代表數線上 $a$ 與原點的距離'
          }
        />
        <div className={style.conceptHead}>絕對值的性質</div>
        <Textarea2MathJax
          text={
            '(1) $|a|\\ge0$\n(2) $|a|=|-a|$\n(3) $|ab|=|a||b|$；$\\left|\\frac{a}{b}\\right|=\\frac{|a|}{|b|}$'
          }
        />
      </Concept>
      <Exercise ids={['179757a606e', '179757bb299']} />
      <Example num={1} ids={['179757f30b3', '17975876dfa']} />
      <div style={{ marginBottom: '43px' }}>
        <Example num={2} ids={['1797fd30bb4', '1797fd9a454']} />
      </div>
      <Example num={3} ids={['1797fd59820', '1797fd78e76']} />
      <Concept title="雙重根式化簡">
        <div className={style.conceptHead}>乘法公式</div>
        <Textarea2MathJax text={'(1) $(a+b)^2=$\n(2) $(a-b)^2=$'} />
        <div className={style.conceptHead}>雙重根式化簡</div>
        <Textarea2MathJax
          text={
            '若 $a\\ge b\\ge0$，\n(1) $\\sqrt{(a+b)+2\\sqrt{ab}}=$\n(2) $\\sqrt{(a+b)-2\\sqrt{ab}}=$'
          }
        />
      </Concept>
      <Exercise ids={['17971430035', '1797143dff1', '17971486cd5', '1797144b8ac']} />
      <Example num={4} ids={['179714ae086', '179714bed16']} />
    </div>
  );
};

export default Numbers;

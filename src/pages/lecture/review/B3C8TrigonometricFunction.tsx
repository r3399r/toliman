import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';

const B3C8TrigonometricFunction = () => {
  return (
    <div>
      <div className={style.head}>Ch8 三角函數</div>
      <Concept num={1} title="弧度定義與換算公式">
        <Textarea2MathJax
          text={
            '單位圓中，角 $$\\theta$$ 所對之圓弧長，稱為弧度，又稱弳，所以 $$\\pi=180^\\circ$$，$$1=\\frac{180^\\circ}{\\pi}\\approx57.3^\\circ$$。'
          }
        />
      </Concept>
      <Exercise ids={['17b64a843b2', '17b64ab243b']} />
      <Concept num={2} title="扇形的弧長與面積">
        <Textarea2MathJax
          text={
            '設扇形的半徑為 $$r$$，中心角為 $$\\theta$$ 弳，則 $$\\theta$$ 所對的弧長為 $$r\\theta$$，面積為 $$\\frac{1}{2}r^2\\theta$$。'
          }
        />
      </Concept>
      <Exercise ids={['17b64ae2615', '17b64af334b']} />
      <Concept num={3} title="和角、差角公式">
        <Textarea2MathJax
          text={
            '$$\\sin$$ 的和角：$$\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B$$\n$$\\sin$$ 的差角：$$\\sin(A-B)=\\sin A\\cos B-\\cos A\\sin B$$'
          }
        />
        <Textarea2MathJax
          text={
            '$$\\cos$$ 的和角：$$\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B$$\n$$\\cos$$ 的差角：$$\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B$$'
          }
        />
        <Textarea2MathJax
          text={
            '$$\\tan$$ 的和角：$$\\tan(A+B)=\\frac{\\tan A+\\tan B}{1-\\tan A\\tan B}$$\n$$\\tan$$ 的差角：$$\\tan(A-B)=\\frac{\\tan A-\\tan B}{1+\\tan A\\tan B}'
          }
        />
      </Concept>
      <Exercise ids={['17b64b61b0b', '17b64b76a9c']} />
      <Example num={1} ids={['17ad192e53e', '17ad195a9f7']} />
    </div>
  );
};

export default B3C8TrigonometricFunction;

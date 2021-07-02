import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';

const B1C6Combination = () => {
  return (
    <div>
      <div className={style.head}>排列組合與機率</div>
      <Concept num={1} title="敘述的否定、且與或">
        <Textarea2MathJax
          text={
            '(1) 設 $$A(x_1,y_1)$$、$$B(x_2,y_2)$$，且 $$x_1\\neq x_2$$，則稱 $$m=\\frac{y_2-y_1}{x_2-x_1}$$ 為 $$\\overleftrightarrow{AB}$$ 的斜率，代表該直線在坐標平面上的傾斜程度。'
          }
        />
      </Concept>
      <Exercise ids={['17a2dd59cf5', '17a2dd669cd']} />
      <Concept num={2} title="斜率的應用">
        <Textarea2MathJax
          text={
            '已知相異兩直線 $$L_1$$ 與 $$L_2$$ 的斜率為 $$m_1$$ 與 $$m_2$$，則：\n(1) $$L_1$$ 與 $$L_2$$ 平行 $$\\Leftrightarrow m_1=m_2$$\n(2) $$L_1$$ 與 $$L_2$$ 垂直 $$\\Leftrightarrow m_1\\times m_2=-1$$'
          }
        />
      </Concept>
      <Example num={1} ids={['17a19c2b55e', '17a1ad46bf7']} />
      <Example num={2} ids={['17a1adcc0ed', '17a1ade3264']} />
    </div>
  );
};

export default B1C6Combination;

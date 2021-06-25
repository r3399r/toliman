import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';

const B1C7Trigonometric = () => {
  return (
    <div>
      <div className={style.head}>三角比</div>
      <Concept num={1} title="斜率">
        <Textarea2MathJax
          text={
            '(1) 設 $$A(x_1,y_1)$$、$$B(x_2,y_2)$$，且 $$x_1\\neq x_2$$，則稱 $$m=\\frac{y_2-y_1}{x_2-x_1}$$ 為 $$\\overleftrightarrow{AB}$$ 的斜率，代表該直線在坐標平面上的傾斜程度。'
          }
        />
        <Textarea2MathJax
          text={
            '(2) 設 $$\\theta$$ 為直線與水平線的夾角，由三角函數的定義可知 $$m=\\tan\\theta$$。'
          }
        />
        <Textarea2MathJax
          text={
            '(3) $$m>0$$ 則直線往右上；$$m<0$$ 則直線往右下。$$|m|$$ 愈大則直線愈接近鉛直，$$|m|$$ 愈小則直線愈接近水平。'
          }
        />
        <Textarea2MathJax
          text={
            '(4) 直線 $$y=mx+k$$ 的斜率即為 $$m$$，且直線通過點 $$(0,k)$$；直線 $$ax+by=c$$，$$b\\neq0$$，可移項成 $$y=-\\frac{a}{b}x+\\frac{c}{b}$$，斜率即為 $$-\\frac{a}{b}$$。'
          }
        />
      </Concept>
      <Exercise ids={['17a2dd2d0b1', '17a2dd465e2', '17a2dd59cf5', '17a2dd669cd']} />
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

export default B1C7Trigonometric;

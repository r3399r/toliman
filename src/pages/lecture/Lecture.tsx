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
              'ps.推導$$(a+b)^2$$、$$(a-b)^2$$、$$(a+b)(a-b)$$、$$(a+b)^3$$、$$(a-b)^3$$、$$a^3+b^3$$、$$a^3-b^3$$'
            }
          />
        </div>
      </Concept>
      <Exercise ids={['178f77a66b0', '178f77a9938', '178f77a66b0']} />
      <Example num={1} ids={['178f77a66b0', '178f77a9938']} />
      <Example num={2} ids={['178f77a66b0', '178f77a9938']} />
    </div>
  );
};

export default Lecture;

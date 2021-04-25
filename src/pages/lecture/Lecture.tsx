import Textarea2MathJax from 'src/component/Textarea2MathJax';
import Concept from './component/Concept';
import Example from './component/Example';
import Exercise from './component/Exercise';
import Note from './component/Note';
import style from './Lecture.module.scss';

const Lecture = () => {
  return (
    <div className={style.content}>
      <div className={style.head}>數與式</div>
      <Concept>
        <div className={style.conceptHead}>乘法公式</div>
        <Note>s</Note>
        <Textarea2MathJax
          text={
            'ps.推導$$(a+b)^2$$、$$(a-b)^2$$、$$(a+b)(a-b)$$、$$(a+b)^3$$、$$(a-b)^3$$、$$a^3+b^3$$、$$a^3-b^3$$'
          }
        />
      </Concept>
      <Exercise ids={['178f77a66b0', '178f77a9938', '178f77a66b0']} />
      <Example num={1} ids={['178f77a66b0', '178f77a9938']} />
      <Example num={2} ids={['178f77a66b0', '178f77a9938']} />
    </div>
  );
};

export default Lecture;

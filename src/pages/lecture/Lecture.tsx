import Textarea2MathJax from 'src/component/Textarea2MathJax';
import Concept from './component/Concept';
import Example from './component/Example';
import Exercise from './component/Exercise';
import style from './Lecture.module.scss';

const Lecture = () => {
  return (
    <div className={style.content}>
      <Concept>
        <Textarea2MathJax text={'text'} />
      </Concept>
      <Exercise ids={['178f77a66b0', '178f77a9938', '178f77a66b0']} />
      <Example num={1} ids={['178f77a66b0', '178f77a9938']} />
      <Example num={2} ids={['178f77a66b0', '178f77a9938']} />
    </div>
  );
};

export default Lecture;

import Concept from 'src/component/Concept';
import Example from 'src/component/Example';
import Exercise from 'src/component/Exercise';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from './Lecture.module.scss';

const Lecture = () => {
  const a: string[] = ['有一天\n$$a+b=2$$\n。拉拉', '有一天 $$a+b=2$$'];

  return (
    <div className={style.content}>
      <Concept>
        <Textarea2MathJax text={a[0]} />
      </Concept>
      <Exercise>
        {a.map((text: string, i: number) => (
          <Textarea2MathJax key={i} text={text} />
        ))}
      </Exercise>
      <Example num={1}>
        {[<Textarea2MathJax key={0} text={a[0]} />, <Textarea2MathJax key={1} text={a[1]} />]}
      </Example>
    </div>
  );
};

export default Lecture;

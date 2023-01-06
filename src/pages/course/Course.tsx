import { MathJax } from 'better-react-mathjax';
import { Question } from 'src/model/bank';
import { getQuestion } from 'src/services/questionService';
import style from './Course.module.scss';

const Course = () => {
  // const num = 'hw1';
  const id = '17f7321aa31';
  const q: Question | undefined = getQuestion(id);

  if (q === undefined) return <div className={style.content}>Question Not Found</div>;

  return (
    <MathJax>
      <div className={style.content}>
        {q.hasImage === true && (
          <img
            className={style.img}
            src={`/toliman/images/${q.id}.PNG`}
            alt=""
            role="presentation"
          />
        )}
        <div className={style.font}>{q.question}</div>
      </div>
      <div style={{ pageBreakAfter: 'always' }} />
      <div className={style.content}>
        {q.hasImage === true && (
          <img
            className={style.img}
            src={`/toliman/images/${q.id}.PNG`}
            alt=""
            role="presentation"
          />
        )}
        <div className={style.font}>{getQuestion('1855e379bb6')?.question}</div>
      </div>
    </MathJax>
  );
};

export default Course;

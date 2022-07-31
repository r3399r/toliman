import { MathJax } from 'better-react-mathjax';
import { Question } from 'src/model/bank';
import { getQuestion } from 'src/services/questionService';
import style from './Projection.module.scss';

const Projection = () => {
  // const num = 'hw1';
  const id = '17f7321aa31';
  const q: Question | undefined = getQuestion(id);

  if (q === undefined) return <div className={style.content}>Question Not Found</div>;

  return (
    <MathJax className={style.content}>
      {q.hasImage === true && (
        <img className={style.img} src={`/toliman/images/${q.id}.PNG`} alt="" role="presentation" />
      )}
      <div className={style.font}>{q.question}</div>
    </MathJax>
  );
};

export default Projection;

import classNames from 'classnames';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestion } from 'src/services/questionService';
import style from './Projection.module.scss';

const Projection = () => {
  const num: string = 'p.52 範例15';
  const id: string = '179de86f46f';
  const q: Question | undefined = getQuestion(id);

  if (q === undefined) return <div className={style.content}>Question Not Found</div>;

  return (
    <div className={style.content}>
      <div className={classNames(style.num, style.font)}>{num}</div>
      {q.hasImage === true && (
        <img className={style.img} src={`images/${q.id}.PNG`} alt="" role="presentation" />
      )}
      <Textarea2MathJax className={style.font} text={`${q.question}`} />
    </div>
  );
};

export default Projection;

import classNames from 'classnames';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Exercise.module.scss';

type Props = {
  ids: string[];
  height?: string;
};

const Exercise = ({ ids, height = '6cm' }: Props) => {
  const questions: Question[] = getQuestions(ids);

  return (
    <div className={style.content}>
      <div className={style.title}>觀念演練</div>
      <div className={style.grid}>
        {questions.map((question: Question, i: number) => (
          <div
            key={i}
            className={classNames(style.card, {
              [style.left]: i % 2 === 0,
              [style.odd]: questions.length === 1,
            })}
            style={{ height }}
          >
            <Textarea2MathJax text={question.question} />
            {question.hasImage && (
              <img
                className={style.img}
                alt=""
                src={`/toliman/images/${question.id}.PNG`}
                role="presentation"
              />
            )}
          </div>
        ))}
        {questions.length > 1 && questions.length % 2 === 1 && <div className={style.card} />}
      </div>
    </div>
  );
};

export default Exercise;

import classNames from 'classnames';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Exercise.module.scss';

type Props = {
  ids: string[];
};

const Exercise = ({ ids }: Props) => {
  const questions: Question[] = getQuestions(ids);

  return (
    <div className={style.content}>
      <div className={style.title}>主題演練</div>
      <div className={style.grid}>
        {questions.map((question: Question, i: number) => (
          <div
            key={i}
            className={classNames(style.card, {
              [style.left]: i % 2 === 0,
            })}
          >
            <Textarea2MathJax text={question.question} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercise;

import classNames from 'classnames';
import { ChangeEvent } from 'react';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Exercise.module.scss';

type Props = {
  ids: string[];
  height?: string;
  showAnswer?: boolean;
};

const Exercise = ({ ids, height = '6cm', showAnswer = true }: Props) => {
  const questions: Question[] = getQuestions(ids);

  const addDefaultSrc = (ev: ChangeEvent<HTMLImageElement>) => {
    ev.target.src = '/toliman/images/09.PNG';
  };

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
              [style.top]: i > 1,
            })}
            style={{ height }}
          >
            <Textarea2MathJax text={question.question} />
            {showAnswer && (
              <Textarea2MathJax text={`Ans: ${question.answer}`} className={style.ans} />
            )}
            {question.hasImage && (
              <img
                className={classNames({ [style.img]: !question.style })}
                style={question.style ?? question.style}
                alt=""
                src={`/toliman/images/${question.id}.PNG`}
                role="presentation"
                onError={addDefaultSrc}
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

import classNames from 'classnames';
import { ChangeEvent } from 'react';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Example.module.scss';

type Props = {
  num: number;
  ids: [string] | [string, string];
  height?: string;
  note?: string;
  showAnswer?: boolean;
};

const Example = ({ num, ids, height = '7.5cm', note, showAnswer = true }: Props) => {
  const questions: Question[] = getQuestions(ids);

  const addDefaultSrc = (ev: ChangeEvent<HTMLImageElement>) => {
    ev.target.src = '/toliman/images/09.PNG';
  };

  if (ids.length === 2)
    return (
      <div className={style.content}>
        <div className={style.block}>
          <div className={style.title}>{`例題 ${num}${note || ''}`}</div>
          <div className={style.card} style={{ height }}>
            <div key={questions[0].id}>
              <Textarea2MathJax text={questions[0].question} />
              {showAnswer && (
                <Textarea2MathJax text={`Ans: ${questions[0].answer}`} className={style.ans} />
              )}
              {questions[0].hasImage === true && (
                <img
                  className={classNames({ [style.img]: !questions[0].style })}
                  style={questions[0].style ?? questions[0].style}
                  src={`/toliman/images/${questions[0].id}.PNG`}
                  alt=""
                  role="presentation"
                  onError={addDefaultSrc}
                />
              )}
            </div>
          </div>
        </div>
        <div className={style.block}>
          <div className={style.title}>{`類題 ${num}${note || ''}`}</div>
          <div className={classNames(style.card, style.right)} style={{ height }}>
            <div key={questions[1].id}>
              <Textarea2MathJax text={questions[1].question} />
              {showAnswer && (
                <Textarea2MathJax text={`Ans: ${questions[1].answer}`} className={style.ans} />
              )}
              {questions[1].hasImage === true && (
                <img
                  className={classNames({ [style.img]: !questions[1].style })}
                  style={questions[1].style ?? questions[1].style}
                  src={`/toliman/images/${questions[1].id}.PNG`}
                  alt=""
                  role="presentation"
                  onError={addDefaultSrc}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className={style.content}>
      <div className={style.block100}>
        <div className={style.title}>{`例題 ${num}${note || ''}`}</div>
        <div className={style.card} style={{ height }}>
          <div key={questions[0].id}>
            <Textarea2MathJax text={questions[0].question} />
            {showAnswer && (
              <Textarea2MathJax text={`Ans: ${questions[0].answer}`} className={style.ans} />
            )}
            {questions[0].hasImage === true && (
              <img
                className={classNames({ [style.img]: !questions[0].style })}
                style={questions[0].style ?? questions[0].style}
                src={`/toliman/images/${questions[0].id}.PNG`}
                alt=""
                role="presentation"
                onError={addDefaultSrc}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;

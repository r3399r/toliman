import classNames from 'classnames';
import { ChangeEvent } from 'react';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { getQuestion } from 'src/services/questionService';
import style from './Question.module.scss';

type Props = {
  id: string;
  num?: number;
};

const Question = ({ id, num }: Props) => {
  const question = getQuestion(id);
  if (question === undefined) return <div key={`error`}>ERROR! id of {id} does not exists</div>;

  const addDefaultSrc = (ev: ChangeEvent<HTMLImageElement>) => {
    ev.target.src = '/toliman/images/09.PNG';
  };

  return (
    <>
      <div className={style.self}>
        {num && <div>{num}.</div>}
        <div>
          <Textarea2MathJax text={question.question} />
        </div>
      </div>
      {question.hasImage && (
        <div className={style.image}>
          <img
            className={classNames({ [style.img]: !question.style })}
            style={question.style ?? question.style}
            alt=""
            src={`/toliman/images/${question.id}.PNG`}
            role="presentation"
            onError={addDefaultSrc}
          />
        </div>
      )}
    </>
  );
};

export default Question;

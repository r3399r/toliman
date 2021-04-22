import classNames from 'classnames';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Example.module.scss';

type Props = {
  num: number;
  ids: [string, string];
};

const Example = ({ num, ids }: Props) => {
  const questions: Question[] = getQuestions(ids);

  return (
    <div className={style.content}>
      <div className={style.block}>
        <div className={style.title}>{`範例 ${num}`}</div>
      </div>
      <div className={style.block}>
        <div className={style.title}>{`類題 ${num}`}</div>
      </div>
      <div className={style.block}>
        <div className={style.card}>
          <div key={questions[0].id}>
            {questions[0].hasImage === true && (
              <img
                className={style.img}
                src={`images/${questions[0].id}.jpg`}
                alt=""
                role="presentation"
              />
            )}
            <Textarea2MathJax text={questions[0].question} />
          </div>
        </div>
      </div>
      <div className={classNames(style.block, style.right)}>
        <div className={style.card}>
          <div key={questions[1].id}>
            {questions[1].hasImage === true && (
              <img
                className={style.img}
                src={`images/${questions[1].id}.jpg`}
                alt=""
                role="presentation"
              />
            )}
            <Textarea2MathJax text={questions[1].question} />
            <Textarea2MathJax text={`Ans: ${questions[1].answer}`} className={style.ans} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;

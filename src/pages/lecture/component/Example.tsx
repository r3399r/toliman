import classNames from 'classnames';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Example.module.scss';

type Props = {
  num: number;
  ids: [string, string];
  height?: string;
};

const Example = ({ num, ids, height = '11cm' }: Props) => {
  const questions: Question[] = getQuestions(ids);

  return (
    <div className={style.content}>
      <div className={style.block}>
        <div className={style.title}>{`例題 ${num}`}</div>
        <div className={style.card}>
          <div key={questions[0].id}>
            <Textarea2MathJax text={questions[0].question} />
            <Textarea2MathJax text={`Ans: ${questions[0].answer}`} className={style.ans} />
            {questions[0].hasImage === true && (
              <img
                className={style.img}
                src={`/toliman/images/${questions[0].id}.PNG`}
                alt=""
                role="presentation"
              />
            )}
          </div>
        </div>
      </div>
      <div className={style.block}>
        <div className={style.title}>{`類題 ${num}`}</div>
        <div className={classNames(style.card, style.right)} style={{ height }}>
          <div key={questions[1].id}>
            <Textarea2MathJax text={questions[1].question} />
            <Textarea2MathJax text={`Ans: ${questions[1].answer}`} className={style.ans} />
            {questions[1].hasImage === true && (
              <img
                className={style.img}
                src={`/toliman/images/${questions[1].id}.PNG`}
                alt=""
                role="presentation"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;

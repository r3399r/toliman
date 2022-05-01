import { MathJax } from 'better-react-mathjax';
import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    // 高二B
    // '1807d77e3b5',
    // '1807d7c4809',
    // '17ac72792d5',
    // '1807d909204',
    // '1807d9373c7',
    // '1807d94cf3a',
    // '1807d95db8c',
    // '180520bbcbc',
    // '180520d375f',
    // '180520ff92a',
    // '1807d830fcb',
    // '1807d84d9d7',

    // 高二A
    '1807d7f78ac',
    '1807da1d1f1',
    '1807da2f079',
    '1807da3fca7',
    '1807d77e3b5',
    '1807d7c4809',
    '17ac72792d5',
    '180520bbcbc',
    '180520d375f',
    '180520ff92a',
    '1807d830fcb',
    '1807d84d9d7',
  ];

  const addDefaultSrc = (ev: ChangeEvent<HTMLImageElement>) => {
    ev.target.src = '/toliman/images/09.PNG';
  };

  return (
    <MathJax className={style.content}>
      <GridWith2Col>
        {getQuestions(ids).map((q: Question, i: number) => {
          if (q === undefined) return <div key={`error${i}`}>ERROR! id at {i} does not exists</div>;

          return (
            <div key={q.id}>
              {q.hasImage === true && (
                <img
                  className={style.img}
                  src={`/toliman/images/${q.id}.PNG`}
                  alt=""
                  role="presentation"
                  onError={addDefaultSrc}
                />
              )}
              <Textarea2MathJax text={`${i + 1}. ${q.question}`} />
              <Textarea2MathJax text={`Ans: ${q.answer}`} className={style.ans} />
            </div>
          );
        })}
      </GridWith2Col>
    </MathJax>
  );
};

export default Hw;

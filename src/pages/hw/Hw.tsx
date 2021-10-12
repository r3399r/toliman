import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    '17c6833e719',
    '17c6f72cb2e',
    '17c6f759d67',
    '17c6f79722a',
    '17c6f904640',
    '17c6f95b5b1',
    '17c6f99c610',
    '17c6fd7598e',
    '17c6fdc3a65',
    '17c6fe02cb9',
    '17c6fe8418e',
    '17c6fe40782',
    '17c7014e9de',
    '17c6fff8dfc',
    '17c70032477',
    '17c7015680d',
    '17c700b5a08',
    '17c7015bcca',
    '17c70160fae',
    '17c701670d0',
  ];

  const addDefaultSrc = (ev: ChangeEvent<HTMLImageElement>) => {
    ev.target.src = '/toliman/images/09.PNG';
  };

  return (
    <div className={style.content}>
      <GridWith2Col>
        {getQuestions(ids).map((q: Question, i: number) => {
          if (q === undefined) return <div key={`error${i}`}>ERROR! id at {i} does not exists</div>;

          return (
            <div key={q.id} className={style.qqq}>
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
    </div>
  );
};

export default Hw;

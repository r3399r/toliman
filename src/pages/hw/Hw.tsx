import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    // 高二
    '1802e4ecb85',
    '1802e5077d0',
    '1802e52018d',
    '1802e5370af',
    '1802e55343d',
    '1802e570063',
    '1802e584b90',
    '1802e5aca8f',
    '1802e5c1cbc',
    '1802e5d7a4e',
    '1802e61e5de',
    '1802e65cc51',

    // 高一
    // '17f8cfb0e93',
    // '17f8cfb9ab3',
    // '17f8cfd289e',
    // '17f8cfdc4b6',
    // '179b3a0ab68',
    // '17f8cff4cba',
    // '17f8d00a18e',
    // '17f8d0178e6',
    // '17f8d02e7a1',
    // '17f8d03a30c',
    // '178f77a66b0',
    // '178f77b0f54'
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
    </div>
  );
};

export default Hw;

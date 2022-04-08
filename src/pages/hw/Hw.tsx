import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    // 高二
    '17fe7a403fe',
    '17fe7a5ae21',
    '17fe7a6e54c',
    '17fe7a8cd44',
    '17fe7a9d67b',
    '17fe7ab5107',
    '17fe7ad2af2',
    '17fe7aedcae',
    '17fe7b03132',
    '17fe7b1fbd9',
    '17fe7b4d9a2',
    '17fe7b7d1b0',

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

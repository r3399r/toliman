import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    // 高二
    '1800a45d814',
    '179032e41d6',
    '1800a4bb4e5',
    '1800a4ca792',
    '1800a4f150a',
    '1800a5133ce',
    '1800a52bc72',
    '1800a547f34',
    '1800a56d4bd',
    '1800a4a63af',
    '179032ff4e6',
    '179033272c5',

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

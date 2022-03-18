import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    // 高二 A
    '17f8cdd8e1e',
    '17f8ce6c591',
    '17f8ceba7cb',
    '17f8cecf234',
    '17f8cee9aed',
    '17f8cf0a6af',
    '17f8cf185a3',
    '17f8cf262cb',
    '17f8cf4403c',
    '17f8cf5196f',
    '17f8cf5c3d7',
    '17f8cf6ac15',

    // 高二 B
    // '17f8cdd8e1e',
    // '17f8ce6c591',
    // '17f8cdfe430',
    // '17f8ce272f7',
    // '17f8ce44a86',
    // '17f8ce54f05',
    // '17f8ce6c591',
    // '17f8ce7dbab',
    // '17f8ce90794',
    // '17f8cea4c68',
    // '17f8ceba7cb',
    // '17f9b42ef3f',

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

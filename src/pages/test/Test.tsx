import { ChangeEvent } from 'react';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestion } from 'src/services/questionService';
import style from './Test.module.scss';

const Test = () => {
  const addDefaultSrc = (ev: ChangeEvent<HTMLImageElement>) => {
    ev.target.src = '/toliman/images/09.PNG';
  };

  const displayQuestion = (id: string, i: number, height: string = '3cm') => {
    const q: Question | undefined = getQuestion(id);
    if (q === undefined) return <div key={`error${i}`}>ERROR! id of {i} does not exists</div>;

    return (
      <div key={q.id} style={{ paddingBottom: height }}>
        {q.hasImage === true && (
          <img
            className={style.img}
            src={`/toliman/images/${q.id}.PNG`}
            alt=""
            role="presentation"
            onError={addDefaultSrc}
          />
        )}
        <Textarea2MathJax text={`${i}. ${q.question}`} />
        {q.imageOption !== undefined && (
          <div className={style.imageOption}>
            {q.imageOption.map((v: string, j: number) => {
              return (
                <div key={`${q.question}-${j}`}>
                  <div>{`(${j + 1})`}</div>
                  <div>
                    <img
                      src={`/toliman/images/${v}.PNG`}
                      alt=""
                      role="presentation"
                      onError={addDefaultSrc}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  // <div style={{ pageBreakAfter: 'always' }} />

  return (
    <div className={style.content}>
      <h1>高二下第一次段考A</h1>
      {/* <div>
        <b>一、多選題(共 30 分；全對 10 分，錯一個 6 分，錯兩個 2 分，錯三個以上 0 分)</b>
      </div> */}
      {displayQuestion('17f8cdd8e1e', 1)}
      {displayQuestion('17f8ceba7cb', 2)}
      {displayQuestion('17f8cecf234', 3)}
      {/* <div>
        <b>二、計算題(共 70 分；每題 10 分)</b>
      </div> */}
      {displayQuestion('17f8cee9aed', 4, '2.5cm')}
      {/* {displayQuestion('17c1644e24c', 4,'2.5cm')} */}
      {displayQuestion('17f8cf0a6af', 5)}
      {displayQuestion('17f8cf185a3', 6)}
      {displayQuestion('17f8cf4403c', 7)}
      {/* {displayQuestion('17e577537ee', 7)} */}
      {displayQuestion('17f8cf5196f', 8)}
      {displayQuestion('17f8cf5c3d7', 9)}
      {displayQuestion('17f8cf6ac15', 10)}
    </div>
  );
};

export default Test;

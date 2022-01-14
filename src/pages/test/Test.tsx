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
      <h1>高二上第三次段考A(向量)</h1>
      <div>
        <b>一、多選題(共 30 分；全對 10 分，錯一個 6 分，錯兩個 2 分，錯三個以上 0 分)</b>
      </div>
      {displayQuestion('17e576e031b', 1)}
      {displayQuestion('17e5770633b', 2)}
      {displayQuestion('17e57739a25', 3)}
      <div>
        <b>二、計算題(共 70 分；每題 10 分)</b>
      </div>
      {displayQuestion('17e4c01d316', 4, '2.5cm')}
      {/* {displayQuestion('17c1644e24c', 4,'2.5cm')} */}
      {displayQuestion('17e4c032799', 5)}
      {displayQuestion('17e52724684', 6)}
      {displayQuestion('17c16703fde', 7)}
      {/* {displayQuestion('17e577537ee', 7)} */}
      {displayQuestion('17e5779eff2', 8)}
      {displayQuestion('17e577ce397', 9)}
      {displayQuestion('17c165fdd52', 10)}
    </div>
  );
};

export default Test;

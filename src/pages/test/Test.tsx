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
      <h1>學測練習 一二冊</h1>
      <div>
        <b>一、單選題(共 15 分；每題 5 分)</b>
      </div>
      {displayQuestion('17da24b9ca4', 1)}
      {displayQuestion('17da24d4535', 2)}
      {displayQuestion('17da24eb67f', 3)}
      <div>
        <b>二、多選題(共 15 分；全對 5 分，錯一個 3 分，錯兩個 1 分，錯三個以上 0 分)</b>
      </div>
      {displayQuestion('17da2559da6', 4)}
      {displayQuestion('17da25855c5', 5)}
      {displayQuestion('17da25a5907', 6)}
      <div>
        <b>二、填充題(共 15 分；每題 5 分)</b>
      </div>
      {displayQuestion('17da25ba285', 7)}
      {displayQuestion('17da25f01c8', 8)}
      {displayQuestion('17da2605950', 9)}
      <div>
        <b>四、混合題(共 15 分，第一題 6 分，第二題 9 分，將部份給分)</b>
      </div>
      {displayQuestion('17da247200f', 10)}
    </div>
  );
};

export default Test;

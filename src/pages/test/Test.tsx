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
      <h1>高二上第二次段考 數學A/數學B</h1>
      <Textarea2MathJax
        text={'$\\log2\\approx0.3010$，$\\log3\\approx0.4771$，$\\log7\\approx0.8451$'}
      />
      <div>
        <b>一、單選題(共 10 分；每題 10 分)</b>
      </div>
      {displayQuestion('17d468db0ed', 1)}
      <div>
        <b>二、多選題(共 30 分；全對 10 分，錯一個 6 分，錯兩個 2 分，錯三個以上 0 分)</b>
      </div>
      {displayQuestion('17d59d3efd5', 2)}
      {displayQuestion('17d59d65a04', 3)}
      {displayQuestion('17d59d9eb8c', 4)}
      <div style={{ pageBreakAfter: 'always' }} />
      <div>
        <b>二、計算題(共 70 分；每題 10 分，請詳列計算過程，將部份給分)</b>
      </div>
      {displayQuestion('17d59dc7e99', 5)}
      {displayQuestion('17d468c4eae', 6)}
      {displayQuestion('17d59c8e82e', 7)}
      {displayQuestion('17d59ca3db1', 8)}
      {/* <div>
        <b>四、混合題(共 15 分，第一題 7 分，第二題 8 分，將部份給分)</b>
      </div>
      {displayQuestion('17cbf989ccb', 1, '1cm')} */}
    </div>
  );
};

export default Test;

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
        <b>一、單選題(共 25 分；每題 5 分)</b>
      </div>
      {displayQuestion('17d7e696c75', 1)}
      {displayQuestion('17d7e5fc561', 2)}
      {displayQuestion('17d7e6712d7', 3)}
      <div style={{ pageBreakAfter: 'always' }} />
      {displayQuestion('17d7e695827', 4)}
      {displayQuestion('17d7e6bfc5a', 5)}
      <div>
        <b>二、多選題(共 25 分；全對 5 分，錯一個 3 分，錯兩個 1 分，錯三個以上 0 分)</b>
      </div>
      {displayQuestion('17d7e6e29d8', 6)}
      {displayQuestion('17d7ea25392', 7)}
      <div style={{ pageBreakAfter: 'always' }} />
      {displayQuestion('17d7ea6dd5a', 8)}
      {displayQuestion('17d7eea35f1', 9)}
      <div style={{ pageBreakAfter: 'always' }} />
      {displayQuestion('17d7eef7b51', 10)}
      <div>
        <b>二、填充題(共 35 分；每題 5 分)</b>
      </div>
      {displayQuestion('17d7efc3583', 11)}
      {displayQuestion('17d7efc5467', 12)}
      {displayQuestion('17d7efc8442', 13)}
      <div style={{ pageBreakAfter: 'always' }} />
      {displayQuestion('17d7efeb202', 14)}
      {displayQuestion('17d7f032b03', 15)}
      {displayQuestion('17d7f04d466', 16)}
      {displayQuestion('17d7f0de9a2', 17)}
      <div>
        <b>四、混合題(共 15 分，第一題 7 分，第二題 8 分，將部份給分)</b>
      </div>
      {displayQuestion('17d7f130c2f', 18, '1cm')}
    </div>
  );
};

export default Test;

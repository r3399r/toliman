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
      <h1>學測模擬考 第一二三冊複習 數學</h1>
      <div>
        <b>一、單選題(共 35 分；每題 5 分)</b>
      </div>
      {displayQuestion('17cbdc3cbff', 1)}
      {displayQuestion('17cbdc6f630', 2)}
      {displayQuestion('17cbdc8d95d', 3)}
      {displayQuestion('17cbde14e3a', 4)}
      {displayQuestion('17cbde39e82', 5)}
      {displayQuestion('17cbde52ff4', 6)}
      {displayQuestion('17cbde7529c', 7)}
      <div>
        <b>二、多選題(共 30 分；全對得 5 分，錯一個得 3 分，錯兩個得 1 分，錯三個以上得 0 分)</b>
      </div>
      {displayQuestion('17cbdeccb1e', 8, '1cm')}
      <div style={{ pageBreakAfter: 'always' }} />
      {displayQuestion('17cbf820976', 9)}
      {displayQuestion('17cbf835236', 10)}
      {displayQuestion('17cbf84cea5', 11)}
      {displayQuestion('17cbf8657c9', 12)}
      {displayQuestion('17cbf888339', 13)}
      <div style={{ pageBreakAfter: 'always' }} />
      <div>
        <b>三、填充題(共 20 分；每題 5 分)</b>
      </div>
      {displayQuestion('17cbf8d8b53', 14)}
      {displayQuestion('17cbf909b67', 15)}
      {displayQuestion('17cbf92877b', 16)}
      {displayQuestion('17cbf93bc51', 17)}
      <div>
        <b>四、混合題(共 15 分，第一題 7 分，第二題 8 分，將部份給分)</b>
      </div>
      {displayQuestion('17cbf989ccb', 1, '1cm')}
    </div>
  );
};

export default Test;

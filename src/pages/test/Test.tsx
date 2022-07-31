import { MathJax } from 'better-react-mathjax';
import { ChangeEvent } from 'react';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestion } from 'src/services/questionService';
import style from './Test.module.scss';

const Test = () => {
  const addDefaultSrc = (ev: ChangeEvent<HTMLImageElement>) => {
    ev.target.src = '/toliman/images/09.PNG';
  };

  const displayQuestion = (id: string, i: number, height = '3cm') => {
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
            {q.imageOption.map((v: string, j: number) => (
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
            ))}
          </div>
        )}
      </div>
    );
  };

  // <div style={{ pageBreakAfter: 'always' }} />

  return (
    <MathJax>
      <div className={style.content}>
        <h1>高二下第三次段考練習 B</h1>
        <div>
          <b>一、單選題</b>
        </div>
        {displayQuestion('1818ee916be', 1)}
        {displayQuestion('1818eeb6cda', 2)}
        {displayQuestion('17ce8f75d11', 3)}
        <div>
          <b>二、多選題</b>
        </div>
        {displayQuestion('17a222cf18f', 4)}
        <div style={{ pageBreakAfter: 'always' }} />
        {displayQuestion('17df55c3250', 5)}
        <div>
          <b>三、計算題</b>
        </div>
        {displayQuestion('17a222ea5b7', 6)}
        {displayQuestion('1818f20eaf3', 7, '5cm')}
        <div style={{ pageBreakAfter: 'always' }} />
        {displayQuestion('17a22302368', 8)}
        {displayQuestion('17a2231a63b', 9)}
        {displayQuestion('1818f20eaf3', 10)}
        {displayQuestion('179a35cf63d', 11)}
        {displayQuestion('17e2fd4b9bb', 12)}
        {displayQuestion('17ce00c5e42', 13)}
      </div>
    </MathJax>
  );
};

export default Test;

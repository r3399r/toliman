import { MathJax } from 'better-react-mathjax';
import { ChangeEvent } from 'react';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestion } from 'src/services/questionService';
import style from './Test.module.scss';

const Quiz = () => {
  const addDefaultSrc = (ev: ChangeEvent<HTMLImageElement>) => {
    ev.target.src = '/toliman/images/09.PNG';
  };

  const displayQuestion = (id: string, i: number | null, height = '2.5cm') => {
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
        <Textarea2MathJax text={i ? `${i}. ${q.question}` : q.question} />
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
        <h1>學測模擬B 111.12.10</h1>
        <h3 style={{ marginBottom: 0 }}>一、單選題</h3>
        {displayQuestion('184efaa464c', 1)}
        {displayQuestion('184efaf223a', 2)}
        <div style={{ pageBreakAfter: 'always' }} />
        <h3 style={{ marginBottom: 0 }}>二、多選題</h3>
        {displayQuestion('184efb55bc3', 3)}
        {/* {displayQuestion('184efba6a95', 4)} */}
        {displayQuestion('184efc44a03', 4)}
        <h3 style={{ marginBottom: 0 }}>三、選填題</h3>
        {displayQuestion('184efc72feb', 5)}
        <div style={{ pageBreakAfter: 'always' }} />
        {/* {displayQuestion('184efc9b0b6', 6)} */}
        {displayQuestion('184efcc8aa6', 6)}
        {displayQuestion('184efd0f3dd', 7)}
        <div style={{ pageBreakAfter: 'always' }} />
        <h3 style={{ marginBottom: 0 }}>四、混合題或非選擇題</h3>
        {displayQuestion('184efd49543', null, '0.5cm')}
        {displayQuestion('184efd6a593', 8, '2.5cm')}
        {displayQuestion('184efd8dcc3', 9, '0.5cm')}
      </div>
    </MathJax>
  );
};

export default Quiz;

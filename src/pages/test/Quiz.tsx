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
        <h1>學測模擬A 111.12.03</h1>
        <h3 style={{ marginBottom: 0 }}>一、單選題</h3>
        {displayQuestion('184d34136cd', 1)}
        {displayQuestion('184d344ce29', 2)}
        <h3 style={{ marginBottom: 0 }}>二、多選題</h3>
        {displayQuestion('184d34a09c5', 3)}
        {/* {displayQuestion('184d399e260', 3)} */}
        <div style={{ pageBreakAfter: 'always' }} />
        {displayQuestion('184d36dd7c6', 4)}
        <h3 style={{ marginBottom: 0 }}>三、選填題</h3>
        {displayQuestion('184d371018e', 5)}
        {displayQuestion('184d3746fde', 6)}
        {displayQuestion('184d37987ec', 7)}
        <div style={{ pageBreakAfter: 'always' }} />
        <h3 style={{ marginBottom: 0 }}>四、混合題或非選擇題</h3>
        {displayQuestion('184d388229b', null, '0.5cm')}
        {displayQuestion('184d38c14c1', 8, '2.5cm')}
        {displayQuestion('184d39003c2', 9, '0.5cm')}
      </div>
    </MathJax>
  );
};

export default Quiz;

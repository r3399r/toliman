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
        <h1>學測模擬 111.12.30</h1>
        <h3 style={{ marginBottom: 0 }}>一、單選題</h3>
        {displayQuestion('1855e24305c', 1)}
        {displayQuestion('1855e282957', 2)}
        <h3 style={{ marginBottom: 0 }}>二、多選題</h3>
        {displayQuestion('1855e2ca335', 3)}
        <div style={{ pageBreakAfter: 'always' }} />
        {displayQuestion('1855e313f18', 4)}
        <h3 style={{ marginBottom: 0 }}>三、選填題</h3>
        {displayQuestion('1855e33adab', 5)}
        {displayQuestion('1855e3607e9', 6)}
        {displayQuestion('1855e379bb6', 7)}
        <div style={{ pageBreakAfter: 'always' }} />
        <h3 style={{ marginBottom: 0 }}>四、混合題或非選擇題</h3>
        {displayQuestion('1855e3949b1', null, '0.5cm')}
        {displayQuestion('1855e3a4d6a', 8, '2.5cm')}
        {displayQuestion('1855e3b3b0c', 9, '0.5cm')}
      </div>
    </MathJax>
  );
};

export default Quiz;

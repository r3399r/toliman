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
        <h1>學測模擬B 111.12.24</h1>
        <h3 style={{ marginBottom: 0 }}>一、單選題</h3>
        {displayQuestion('1853efe69a9', 1)}
        {/* {displayQuestion('1853f005dc7', 2)} */}
        {displayQuestion('1853f027ab6', 2)}
        <h3 style={{ marginBottom: 0 }}>二、多選題</h3>
        {displayQuestion('1853f0a0904', 3)}
        {/* {displayQuestion('1853f0d0aea', 4)} */}
        {displayQuestion('1853f12171b', 4)}
        <div style={{ pageBreakAfter: 'always' }} />
        <h3 style={{ marginBottom: 0 }}>三、選填題</h3>
        {displayQuestion('1853f1a6e9a', 5)}
        {displayQuestion('1853f1c6f00', 6)}
        {displayQuestion('1853f1e4ba3', 7)}
        <h3 style={{ marginBottom: 0 }}>四、混合題或非選擇題</h3>
        {displayQuestion('1853f291063', null, '0.5cm')}
        {displayQuestion('1853f2ad563', 8, '2.5cm')}
        {displayQuestion('1853f2bf5e2', 9, '0.5cm')}
      </div>
    </MathJax>
  );
};

export default Quiz;

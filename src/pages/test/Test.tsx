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
        <h1>高一上第二次段考練習</h1>
        <div>
          <b>一、多選題</b>
        </div>
        {displayQuestion('184a7bc4e0b', 1)}
        {displayQuestion('184a7be2a92', 2)}
        {displayQuestion('184a7c2a431', 3)}
        <div style={{ pageBreakAfter: 'always' }} />
        {displayQuestion('184a7c6bc11', 4)}
        <div>
          <b>二、填充題</b>
        </div>
        {displayQuestion('184a7c7d237', 5)}
        {displayQuestion('184a7ca1b29', 6)}
        {displayQuestion('184a7cb5d51', 7)}
        {displayQuestion('184a7cfdeea', 8)}
        <div style={{ pageBreakAfter: 'always' }} />
        {displayQuestion('184a7d640de', 9)}
        {displayQuestion('184a7d78af1', 10)}
        {displayQuestion('184a7d87892', 11)}
        {displayQuestion('184a7dac1f0', 12, '6cm')}
        {displayQuestion('184a7df7eab', 13)}
      </div>
    </MathJax>
  );
};

export default Test;

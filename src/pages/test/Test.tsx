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
        <h1>高一上第一次段考練習</h1>
        <div>
          <b>一、多選題</b>
        </div>
        {displayQuestion('18392cd9c64', 1)}
        {displayQuestion('18392d0e202', 2)}
        {displayQuestion('18392d6ffb5', 3)}
        <div>
          <b>二、填充題</b>
        </div>
        {displayQuestion('18392ea57cd', 4)}
        {displayQuestion('18392ec653f', 5)}
        <div style={{ pageBreakAfter: 'always' }} />
        {displayQuestion('18392ed90dc', 6)}
        {displayQuestion('18392eee3ac', 7)}
        {displayQuestion('18392f3254c', 8)}
        {displayQuestion('18392f4bb4b', 9)}
        {displayQuestion('18392f6502d', 10)}
        {displayQuestion('18392f94459', 11)}
        <div style={{ pageBreakAfter: 'always' }} />
        {displayQuestion('18392fa9861', 12)}
        {displayQuestion('18392fbcf43', 13)}
        {displayQuestion('18392fd3e82', 14)}
        {displayQuestion('18392fe79cb', 15)}
        {displayQuestion('18392ff6952', 16)}
      </div>
    </MathJax>
  );
};

export default Test;

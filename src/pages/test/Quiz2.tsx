import { MathJax } from 'better-react-mathjax';
import classNames from 'classnames';
import { ChangeEvent } from 'react';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestion } from 'src/services/questionService';
import style from './Test.module.scss';

const Quiz = () => {
  const addDefaultSrc = (ev: ChangeEvent<HTMLImageElement>) => {
    ev.target.src = '/toliman/images/09.PNG';
  };

  const displayQuestion = (id: string, i: number | null, height = '0.5cm') => {
    const q: Question | undefined = getQuestion(id);
    if (q === undefined) return <div key={`error${i}`}>ERROR! id of {i} does not exists</div>;

    return (
      <div key={q.id} style={{ paddingBottom: height }}>
        {q.hasImage === true && (
          <img
            className={classNames({ [style.img]: !q.style })}
            style={q.style}
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
        <h1>高一下第三次段考練習 三角比</h1>
        <h3 style={{ marginBottom: 0 }}>一、多選題</h3>
        {displayQuestion('188e043386c', 1)}
        {displayQuestion('188e0492bad', 2)}
        {displayQuestion('188e04c9a0a', 3)}
        <h3 style={{ marginBottom: 0 }}>二、計算題</h3>
        {displayQuestion('188e03d95e7', 1)}
        {displayQuestion('188e04e6488', 2)}
        {displayQuestion('188e04fe102', 3)}
        {displayQuestion('188e0511b45', 4)}
        {displayQuestion('17a24eb0dfb', 5)}
        <div style={{ pageBreakAfter: 'always' }} />
        {displayQuestion('188e054d939', 6)}
        {displayQuestion('188e056a74f', 7)}
        {displayQuestion('188e059b39d', 8)}
        <br />
        <br />
        <br />
        <br />
        {displayQuestion('188e05c735e', 9)}
        <br />
        <br />
        {displayQuestion('188e05e7063', 10)}
      </div>
    </MathJax>
  );
};

export default Quiz;

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
        <h1>高一下第二次段考範圍練習 排組機率</h1>
        {/* <h3 style={{ marginBottom: 0 }}>一、多選題</h3> */}
        {displayQuestion('17942ce3940', 1)}
        {displayQuestion('17942d5a8b2', 2)}
        {/* <h3 style={{ marginBottom: 0 }}>二、計算題</h3> */}
        {displayQuestion('17942eb8abe', 3)}
        {displayQuestion('17a202b0a26', 4)}
        {displayQuestion('17a202e5b03', 5)}
        {displayQuestion('17942d0321c', 6)}
        {displayQuestion('17a2030c7d5', 7)}
        {displayQuestion('17a2023d430', 8)}
        {displayQuestion('17942c8c37e', 9)}
        {displayQuestion('17a202cce60', 10)}
      </div>
    </MathJax>
  );
};

export default Quiz;

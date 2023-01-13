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

  const displayQuestion = (id: string, i: number | null, height = '2.5cm') => {
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
        <h1>高一第三次段考複習</h1>
        <h3 style={{ marginBottom: 0 }}>一、多選題</h3>
        {displayQuestion('185a919114f', 1, '4cm')}
        {displayQuestion('185a91bf912', 2, '4cm')}
        <h3 style={{ marginBottom: 0 }}>二、計算題</h3>
        {displayQuestion('185a91d63c1', 1, '3cm')}
        {displayQuestion('185a91f6426', 2)}
        <div style={{ pageBreakAfter: 'always' }} />
        {displayQuestion('185a920a8ad', 3, '4cm')}
        {displayQuestion('185a92237b0', 4, '4cm')}
        {displayQuestion('185a92360dd', 5, '4cm')}
        {displayQuestion('185a928fabc', 6, '4cm')}
        {displayQuestion('185a92a929a', 7)}
      </div>
    </MathJax>
  );
};

export default Quiz;

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
        <h1>學測模擬 111.1.6</h1>
        <h3 style={{ marginBottom: 0 }}>一、單選題</h3>
        {displayQuestion('185852808c5', 1)}
        {displayQuestion('1858529fd82', 2)}
        <h3 style={{ marginBottom: 0 }}>二、多選題</h3>
        {displayQuestion('185852cfcac', 3)}
        <div style={{ pageBreakAfter: 'always' }} />
        {displayQuestion('1858530b9a0', 4)}
        <h3 style={{ marginBottom: 0 }}>三、選填題</h3>
        {displayQuestion('18585330381', 5)}
        {displayQuestion('185853517f0', 6)}
        {displayQuestion('18585372b83', 7)}
        <div style={{ pageBreakAfter: 'always' }} />
        <h3 style={{ marginBottom: 0 }}>四、混合題或非選擇題</h3>
        {displayQuestion('1858547a7f5', null, '0.5cm')}
        {displayQuestion('18585487759', 8, '2.5cm')}
        {displayQuestion('185854a716d', 9, '0.5cm')}
      </div>
    </MathJax>
  );
};

export default Quiz;

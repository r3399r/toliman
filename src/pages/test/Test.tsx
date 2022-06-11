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

  const displayQuestion = (id: string, i: number, height: string = '3cm') => {
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
            {q.imageOption.map((v: string, j: number) => {
              return (
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
              );
            })}
          </div>
        )}
      </div>
    );
  };

  // <div style={{ pageBreakAfter: 'always' }} />

  return (
    <MathJax>
      <div className={style.content}>
        <h1>高二下第二次段考練習 B</h1>
        <div>
          <b>一、單選題</b>
        </div>
        {displayQuestion('1809a3dd105', 1)}
        {displayQuestion('1809a408850', 2)}
        {displayQuestion('180be29a3d3', 3)}
        <div>
          <b>二、多選題</b>
        </div>
        {displayQuestion('17a222923d8', 4)}
        {displayQuestion('1809a4a0b3e', 5)}
        <div>
          <b>三、計算題</b>
        </div>
        {displayQuestion('179bc23d7cf', 6, '4cm')}
        {displayQuestion('179bc18676f', 7, '2cm')}
        {displayQuestion('179bc173e66', 8)}
        {displayQuestion('180be31cbae', 9)}
        {displayQuestion('180be2f6ab4', 10)}
        {displayQuestion('1809a599bb8', 11)}
        {displayQuestion('1809a5c302f', 12)}
        {displayQuestion('1794b4a21c2', 13)}
      </div>
    </MathJax>
  );
};

export default Test;

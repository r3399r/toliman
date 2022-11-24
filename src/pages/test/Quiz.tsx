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
        <h1>學測模擬B 111.11.26</h1>
        <h3 style={{ marginBottom: 0 }}>一、單選題</h3>
        {/* {displayQuestion('184930c1e6c', 1,'4cm')} */}
        {displayQuestion('184a513ef59', 1, '4cm')}
        {displayQuestion('184930e6540', 2, '4cm')}
        <h3 style={{ marginBottom: 0 }}>二、多選題</h3>
        {displayQuestion('1849312921a', 3, '4cm')}
        <div style={{ pageBreakAfter: 'always' }} />
        {displayQuestion('184932938f3', 4, '1cm')}
        <h3 style={{ marginBottom: 0 }}>三、選填題</h3>
        {displayQuestion('184a4fa0ea3', 5)}
        {displayQuestion('184a4ffc468', 6)}
        {displayQuestion('184a5020796', 7)}
        <div style={{ pageBreakAfter: 'always' }} />
        <h3 style={{ marginBottom: 0 }}>四、混合題或非選擇題</h3>
        {displayQuestion('184a5082fc7', null, '1cm')}
        {displayQuestion('184a50a38af', 8, '1cm')}
        {displayQuestion('184a50bd43e', 9, '1cm')}
        {displayQuestion('184a50dcd51', 10, '0')}
      </div>
    </MathJax>
  );
};

export default Quiz;

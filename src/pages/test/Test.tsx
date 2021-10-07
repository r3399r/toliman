import { ChangeEvent } from 'react';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestion } from 'src/services/questionService';
import style from './Test.module.scss';

const Test = () => {
  const ids: string[] = [
    '17c3c395cde',
    '17c4563c8b7',
    '17c3c614420',
    '17c3c7a3797',
    '17c40cb19e8',
    '17c40d37bdd',
    '17c40da67d7',
    '17c40dface4',
    '17c40e31a97',
    '17c40edb4d6',
    '17c456250f8',
    '17c4569c253',
    '17c4573201e',
  ];

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
      </div>
    );
  };

  return (
    <div className={style.content}>
      <h1>高二上學期 第一次段考 數學B</h1>
      <div>
        <b>
          一、多重選擇題(共 21 分；全對得 7 分，錯一個得 5 分，錯兩個得 3 分，錯三個以上得 0 分)
        </b>
      </div>
      {displayQuestion('17c58a894bd', 1)}
      {displayQuestion('17c58ebfd06', 2)}
      {displayQuestion('17c58ede958', 3)}
      <div>
        <b>二、填充題(共 65 分；每題 5 分。答案若能化簡，請化為最簡，否則不予計分)</b>
      </div>
      {displayQuestion('17c58b8a8f2', 1)}
      {displayQuestion('17c58ba07b3', 2)}
      {displayQuestion('17c58bc2c84', 3)}
      <div style={{ pageBreakAfter: 'always' }} />
      {displayQuestion('17c58f019ff', 4)}
      {displayQuestion('17c58bd78c5', 5)}
      {displayQuestion('17c58f1f7d6', 6)}
      {displayQuestion('17c58f2dcdd', 7)}
      {displayQuestion('17c58f40c80', 8)}
      {displayQuestion('17c58f561f1', 9)}
      {displayQuestion('17c58f6631b', 10)}
      <div style={{ pageBreakAfter: 'always' }} />
      {displayQuestion('17c58f86821', 11)}
      {displayQuestion('17c58f93fcf', 12, '4cm')}
      {displayQuestion('17c58fce7ab', 13)}
      <div>
        <b>三、計算素養題(共 14 分，第一題 7 分，第二題 7 分，將部份給分)</b>
      </div>
      {displayQuestion('17c58fe68ca', 1, '4.5cm')}
      {displayQuestion('17c59038af4', 2)}
    </div>
  );
};

export default Test;

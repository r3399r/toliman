import { MathJax } from 'better-react-mathjax';
import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    // 排列組合 全 品翔、莘茵、郁絜、羽榛、佩賢、秉峵
    '17a0842355e',
    '17a084428de',
    '1791b53bc19',
    '1791b572ecb',
    '1791b4d6f84',
    '1791b4f3389',
    '1791b50de9e',
    '1791b528b1d',
    '17a08460ece',
    '187a5046ff8',
    '17ac730181f',
    '187a50751ec',
    // 數列 米雅
    // '17f10759723',
    // '17f10763b85',
    // '17eec6134c0',
    // '17eec60348e',
  ];

  const addDefaultSrc = (ev: ChangeEvent<HTMLImageElement>) => {
    ev.target.src = '/toliman/images/09.PNG';
  };

  return (
    <MathJax className={style.content}>
      <GridWith2Col>
        {getQuestions(ids).map((q: Question, i: number) => {
          if (q === undefined) return <div key={`error${i}`}>Error</div>;

          return (
            <div key={q.id}>
              {q.hasImage === true && (
                <img
                  className={style.img}
                  src={`/toliman/images/${q.id}.PNG`}
                  alt=""
                  role="presentation"
                  onError={addDefaultSrc}
                />
              )}
              <Textarea2MathJax text={`${i + 1}. ${q.question}`} />
              <Textarea2MathJax text={`Ans: ${q.answer}`} className={style.ans} />
            </div>
          );
        })}
      </GridWith2Col>
    </MathJax>
  );
};

export default Hw;

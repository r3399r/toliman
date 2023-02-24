import { MathJax } from 'better-react-mathjax';
import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    // '17eec5f9f8c',
    // '17eec60348e',
    // '17eec6134c0',
    // '17eec62b9f9',
    // '17eec638fb0',
    // '17eec64b278',
    // '18681c22292',
    // '18681bfe8b9',
    // 羽榛、佩賢、莘茵、秉峵
    // '18681c56895',
    // '18681c63f4f',
    // '18681c8266c',
    // '18681c90a2f',
    // 米雅
    '17990aa1fd6',
    '17990aea8de',
    '17990b0fd75',
    '1868203b78b',
    // 郁絜
    '179e06ddeda',
    '186820bb0b5',
    '179e06b1112',
    '186820ddb5d',
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

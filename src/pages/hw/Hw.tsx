import { MathJax } from 'better-react-mathjax';
import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    // 排列組合 全
    '178fa706cd1',
    '178fa7b2ef0',
    '178fa7e4b84',
    '1875cc3a53e',
    '178fa9cba82',
    '178fabee5c1',
    '178fac14a06',
    '178fac4d07d',
    // 排列組合 羽榛、莘茵、佩賢、秉峵、郁絜
    // '1875cd9626f',
    // '1875cda2cb0',
    // '1875cdba853',
    // '179b3a0ab68',
    // 數列 米雅
    '184a7f977bb',
    '17901070ba5',
    '17e435d9c5a',
    '18681bfe8b9',
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

import { MathJax } from 'better-react-mathjax';
import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    // 郁絜 三角
    '186f24bdf6d',
    '186f24d355a',
    '186f250818e',
    '186f251b180',
    '186f24ef2f2',
    '186f2534e51',
    // 羽榛、佩賢、莘茵 數列、統計
    '186f25df1a1',
    '186f2601c38',
    '186f2616b22',
    '186f263ead2',
    '186f265a745',
    '186f266c08f',
    // 米雅 排列組合
    '186f35e186f',
    '186f35f070e',
    '186f3607088',
    '186f36215df',
    '186f3631290',
    '186f3648a63',
    // 秉峵 數列、排列組合
    '186f25df1a1',
    '186f2601c38',
    '186f2616b22',
    '186f35e186f',
    '186f35f070e',
    '186f3607088',
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

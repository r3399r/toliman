import { MathJax } from 'better-react-mathjax';
import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    '17f10743528',
    '17f1074f6e0',
    '17f10759723',
    '17f10763b85',
    '17f1078a0f3',
    '1790111e4ab',
    '17f107a1e81',
    '1790112e430',
    // 羽榛、佩賢、莘茵、秉峵
    '184a7f977bb',
    '17901070ba5',
    '17be21e2d87',
    '17e435d9c5a',
    // 米雅
    '184eff04d5e',
    '17f8cfd289e',
    '17f6392560d',
    '17f63892e77',
    // 郁絜
    '1855e7422e3',
    '17a24e6d768',
    '17a24e7a289',
    '17a091aa2ec',
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

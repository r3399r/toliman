import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    '17c22cf53ad',
    '17c22c2b0d2',
    '17c22be7e9a',
    '17c22d0d124',
    '17c213f7e01',
    '17c21416c3e',
    '17c2142cbbc',
    '17c2143e831',
    '17c2145da31',
    '17c2148cf59',
    '17c214abbc5',
    '17c214bdc09',
  ];

  const addDefaultSrc = (ev: ChangeEvent<HTMLImageElement>) => {
    ev.target.src = '/toliman/images/09.PNG';
  };

  return (
    <div className={style.content}>
      <GridWith2Col>
        {getQuestions(ids).map((q: Question, i: number) => {
          if (q === undefined) return <div key={`error${i}`}>ERROR! id at {i} does not exists</div>;

          return (
            <div key={q.id} className={style.qqq}>
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
    </div>
  );
};

export default Hw;

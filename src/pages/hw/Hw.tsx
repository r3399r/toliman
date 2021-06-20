import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    '17a20445a4b',
    '17a20463ef2',
    '17a2049be60',
    '17a204ba275',
    '17a204ca2ab',
    '17a204db218',
    '17a204fcdcb',
    '17a2051a7ed',
    '17a2053e759',
    '17a2055075c',
    '17a205692cf',
    '17a20581f3b',
  ];

  return (
    <div className={style.content}>
      <div className={style.title}>高一複習1. 數與式、指數對數、多項式</div>
      <GridWith2Col>
        {getQuestions(ids).map((q: Question, i: number) => {
          if (q === undefined) return <div key={`error${i}`}>ERROR! id at {i} does not exists</div>;

          return (
            <div key={q.id}>
              {q.hasImage === true && (
                <img
                  className={style.img}
                  src={`/toliman/images/${q.id}.PNG`}
                  alt=""
                  role="presentation"
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

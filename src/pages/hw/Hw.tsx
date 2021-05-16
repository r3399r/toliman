import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    '178f7791d87',
    '178f77a38e2',
    '178f77a66b0',
    '178f77b3896',
    '178fa706cd1',
    '178fac331f4',
    '1791b42e622',
    '1791b469f25',
    '1791b4a62cb',
    '1791b4d6f84',
    '1791b50de9e',
    '1791b53bc19',
    '1791b572ecb',
    '17942d5a8b2',
  ];

  return (
    <div className={style.content}>
      <GridWith2Col>
        {getQuestions(ids).map((q: Question, i: number) => {
          if (q === undefined) return <div key={`error${i}`}>ERROR! id at {i} does not exists</div>;

          return (
            <div key={q.id}>
              {q.hasImage === true && (
                <img className={style.img} src={`images/${q.id}.jpg`} alt="" role="presentation" />
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

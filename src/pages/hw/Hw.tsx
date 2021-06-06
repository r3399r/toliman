import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    '178fa9cba82',
    '178fabee5c1',
    '178fac14a06',
    '178fac261fc',
    '178fac331f4',
    '178fac4d07c',
    '1791b42e622',
    '1791b44c122',
    '1791b45cd54',
    '178fa4ccd10',
    '179e09170f3',
    '178f77ac93d',
  ];

  return (
    <div className={style.content}>
      <GridWith2Col>
        {getQuestions(ids).map((q: Question, i: number) => {
          if (q === undefined) return <div key={`error${i}`}>ERROR! id at {i} does not exists</div>;

          return (
            <div key={q.id}>
              {q.hasImage === true && (
                <img className={style.img} src={`images/${q.id}.PNG`} alt="" role="presentation" />
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

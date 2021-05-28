import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    '178f77a66b0',
    '178f77b3896',
    '178f9e85218',
    '178fa340b81',
    '178fa3eee69',
    '178fa4ccd10',
    '178fa58b177',
    '178fa706cd1',
    '178fa7e4b84',
    '178fa7b2ef0',
    '178f9e3fc7b',
    '178f77b0f54',
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

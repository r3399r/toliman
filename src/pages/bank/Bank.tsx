import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { bank, Question } from 'src/model/bank';
import style from './Bank.module.scss';

const Bank = () => {
  return (
    <div className={style.content}>
      <GridWith2Col>
        {bank.map((q: Question) => (
          <div key={q.id}>
            <div className={style.id}>
              id: {q.id}, 章節: {q.chapter.join()}
            </div>
            {q.hasImage === true && (
              <img className={style.img} src={`images/${q.id}.jpg`} alt="" role="presentation" />
            )}
            <Textarea2MathJax text={q.question} />
            <Textarea2MathJax text={`Ans: ${q.answer}`} className={style.ans} />
          </div>
        ))}
      </GridWith2Col>
    </div>
  );
};

export default Bank;

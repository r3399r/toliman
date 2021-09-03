import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    '17a0f5dd109',
    '17a1aff775f',
    '17a2dbb5a10',
    '17a50ca5eea',
    '17a50e7342d',
    '17a5605dcf4',
    '17a5fc9a59d',
    '17ac7258a05',
    '17ac73b6777',
    '17ad1a1d228',
  ];

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
                />
              )}
              <Textarea2MathJax text={`${i + 1}. ${q.question}`} />
              {/* <Textarea2MathJax text={`Ans: ${q.answer}`} className={style.ans} /> */}
            </div>
          );
        })}
      </GridWith2Col>
    </div>
  );
};

export default Hw;

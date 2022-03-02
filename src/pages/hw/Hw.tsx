import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    '17f48d3bac2',
    '17f48d61fb0',
    '17f48d833f8',
    '17f48d9b1e0',
    '17f48da9557',
    '17f48db4f3a',
    '17f48dcca48',
    '17f48de6b4e',
    '17f48df8cca',
    '17f48e10aa3',

    '17f48e29372',
    '17f48e43a13',
    '17f48e52276',
    '17f48e7bb6c',
    '17f48e88e86',
    '17f48ea9117',
    '17f48eba267',
    '17f48ecbbac',
    '17f48ed71f2',
    '17f48ee3b6a',
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

import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    // '17f620f9634',
    // '17f62117853',
    // '17f6214178c',
    // '17f636f1fc8',
    // '17f63703aff',
    // '17f6371e3cc',
    // '17f637320bc',
    // '17f637526da',
    // '17f63761d3e',
    // '17f63770d79',
    // '17f71d6b4b8',
    // '17f7321aa31',

    '17f63789c73',
    '17f63797131',
    '17f637c919f',
    '17f637c591e',
    '17f637d57da',
    '17f637ea80c',
    '17f6381676b',
    '17f63826b3b',
    '17f63836d3e',
    '17f63842a0f',
    '17f79262520',
    '17f7931f1b8',

    // '17f63889561',
    // '17f63892e77',
    // '17f638a1789',
    // '17f638aa943',
    // '17f638bd19e',
    // '17f638cfc4b',
    // '17f638e12d0',
    // '17f638fa19e',
    // '17f6390d761',
    // '17f6392560d',
    // '17f6392fabd',
    // '17f63938f4d',
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

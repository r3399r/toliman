import { MathJax } from 'better-react-mathjax';
import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    '18a498e4dcd',
    '18a498fa061',
    '18a49a85d87',
    '182406b30eb',
    '18a49a926b5',
    '182406dc4f1',
    '18a49aa1f23',
    '18a49aac5d3',
    '1824070506d',
    '1824072402b',
    '18a49b2f87f',
    '18a49b87f9a',
    '18a49ba334c',
    '18a49bc9315',
    '18a49bd77bd',
    '18240764c41',
    '18a4a57990c',
    '182407927fb',
    '182407d3766',
    '182407fdd7c',
    '18a4a5c3afb',
    '18240835833',
    '1824086d367',
    '1825344bd5c',
    '18a4a605f23',
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
              {/* <Textarea2MathJax text={`${i + 1}. ${q.question}`} /> */}
              <Textarea2MathJax text={`${q.question}`} />
              {/* <Textarea2MathJax text={`Ans: ${q.answer}`} className={style.ans} /> */}
            </div>
          );
        })}
      </GridWith2Col>
    </MathJax>
  );
};

export default Hw;

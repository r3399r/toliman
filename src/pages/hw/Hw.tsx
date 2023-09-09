import { MathJax } from 'better-react-mathjax';
import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    // '17c18d3ad1b',
    // '17c18d4b33d',
    // '17c18d5e564',
    // '17c18d686ef',
    // '18a7857c36f',
    // '18a78607f67',
    // '18a78631f65',
    // '18a7864ba74',
    // '18a7865b02b',
    // '18a78666b8c',
    // '18a7868c1ac',
    // '18a786beb26',
    '18a786f0e6d',
    '18a786e6f6e',
    '18a786fc8da',
    '18a78718c0b',
    '18a78728b3d',
    '18a78742abe',
    '18a78756601',
    '18a78765b18',
    '18a7878a8c6',
    '17ccd01afe1',
    '17cf6349562',
    '18a787be89d',
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
              <Textarea2MathJax text={`${i + 1}. ${q.question}`} />
              {/* <Textarea2MathJax text={`${q.question}`} /> */}
              <Textarea2MathJax text={`Ans: ${q.answer}`} className={style.ans} />
            </div>
          );
        })}
      </GridWith2Col>
    </MathJax>
  );
};

export default Hw;

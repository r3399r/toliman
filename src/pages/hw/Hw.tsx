import { MathJax } from 'better-react-mathjax';
import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    '18a72fc2077',
    '18a72fb7d27',
    '18a72fd5ef0',
    '18a72fe1df7',
    '18a72fe83d3',
    '18a72fef1c1',
    '18a72ff53ff',
    '18a730067f0',
    '18a730954d4',
    '18a7309dd9e',
    '18a730a9278',
    '18a730c0109',
    '18a730d2afb',
    '18a730df47c',
    '18a730ec8ed',
    '18a738fbb0d',
    '18a7390517a',
    '18253dc12a0',
    '18a7392c9ce',
    '18a7396e7f2',
    '18a73972bf5',
    '18a739eca30',
    '18254860518',
    '18a74044e09',
    '18a7408c9b8',
    '18a740e215f',
    '18a740ebaf4',
    '182553cc452',
    '18a74114551',
    '1825540969f',
    '18a7414963a',
    '1825544e283',
    '18a7415a963',
    '1825551e13b',
    '18a741798cc',
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

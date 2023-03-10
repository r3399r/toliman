import { MathJax } from 'better-react-mathjax';
import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    '17990aa1fd6',
    '17990ab0495',
    '17990adbce5',
    '17990aea8de',
    '17990b0fd75',
    '1868203b78b',
    '186cabcb2ee',
    '186cabf3411',
    // 羽榛、佩賢、莘茵
    '1790658dfdc',
    '1790659e4b8',
    '186cac8c164',
    '179065d6873',
    // 米雅、秉峵
    // '186caf33786',
    // '186cad144fb',
    // '17990b2b6ba',
    // '186caf4773d',
    // 郁絜
    // '179e078a37b',
    // '179e07a7752',
    // '17a0926ec6f',
    // '17a0941ddcf',
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
              <Textarea2MathJax text={`Ans: ${q.answer}`} className={style.ans} />
            </div>
          );
        })}
      </GridWith2Col>
    </MathJax>
  );
};

export default Hw;

import { MathJax } from 'better-react-mathjax';
import { ChangeEvent } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { Question } from 'src/model/bank';
import { getQuestions } from 'src/services/questionService';
import style from './Hw.module.scss';

const Hw = () => {
  const ids: string[] = [
    '181d102c44e',
    '181d1044138',
    '181d104fcff',
    '181d105cc41',
    '181d10765e0',
    '181d10817ba',
    '181d1124edb',
    '181d1136b34',
    '181d116194f',
    '181d1171198',
    '181d11884bf',
    '181d11986d6',
    '181d11beb91',
    '181d11d1f48',
    '181d11e7ec7',
    '181d11fd001',
    '181d120b5a8',
    '181d1214fd0',
    '181d1226d00',
    '181d1237e40',
    '181d1242011',
    '181d12a6f6c',
    '181d12c6348',
    '181d12ead05',
    '181d133422c',
    '181d1351757',
    '181d1376d36',
    '181d139bf0e',
    '181d13a7274',
    '181d13b48d0',
    '181d13dee69',
    '181d1401391',
    '181d142093a',
    '181d1430461',
    '181d147f7e4',
    '181d1489442',
    '181d1494360',
    '181d149d9f1',
    '181d14a436f',
    '181d14abdec',
    '181d14b732b',
    '181d14dd65d',
  ];

  const addDefaultSrc = (ev: ChangeEvent<HTMLImageElement>) => {
    ev.target.src = '/toliman/images/09.PNG';
  };

  return (
    <MathJax className={style.content}>
      <GridWith2Col>
        {getQuestions(ids).map((q: Question, i: number) => {
          if (q === undefined) return <div key={`error${i}`}>ERROR! id at {i} does not exists</div>;

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
              {/* <Textarea2MathJax text={`Ans: ${q.answer}`} className={style.ans} /> */}
            </div>
          );
        })}
      </GridWith2Col>
    </MathJax>
  );
};

export default Hw;

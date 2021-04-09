import classNames from 'classnames';
import HomeworkDiv from 'src/component/HomeworkDiv';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from './Hw.module.scss';

const Hw = () => {
  const qs = [
    {
      id: '123ea',
      question: '1.（單選）如圖，$$\\triangle ABC$$ 與？',
    },
    {
      id: '122ea',
      question:
        '1.（單選）如圖，$$\\triangle ABC$$ 與？如圖，$$\\triangle ABC$$ 與？如圖，$$\\triangle ABC$$ 與？如圖，$$\\triangle ABC$$ 與？如圖，$$\\triangle ABC$$ 與？如圖，$$\\triangle ABC$$ 與？',
    },
    {
      id: '123ea',
      question: '1.（單選）如圖，$$\\triangle ABC$$ 與？',
    },
    {
      id: '122ea',
      question: '1.（單選）如圖，$$\\triangle ABC$$ 與？如圖，$$\\triangle ABC$$ 與？',
    },
    {
      id: '122ea',
      question: '1.（單選）如圖，$$\\triangle ABC$$ 與？如圖，$$\\triangle ABC$$ 與？',
    },
  ];

  return (
    <div className={style.content}>
      <HomeworkDiv>
        {qs.map((q: { [key: string]: string }) => {
          return <Textarea2MathJax key={q.id} text={q.question} />;
        })}
      </HomeworkDiv>
    </div>
  );
};

export default Hw;

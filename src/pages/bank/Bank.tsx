import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { MathJax } from 'better-react-mathjax';
import { ChangeEvent, useState } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { bank, chapterList, Question } from 'src/model/bank';
import style from './Bank.module.scss';

const Bank = () => {
  const [filter, setFilter] = useState<string>();

  const handleCheckbox = (val: ChangeEvent<HTMLInputElement>) => {
    setFilter(val.target.value);
  };

  const addDefaultSrc = (ev: ChangeEvent<HTMLImageElement>) => {
    ev.target.src = '/toliman/images/09.PNG';
  };

  return (
    <MathJax className={style.content}>
      <RadioGroup row={true} onChange={handleCheckbox}>
        {chapterList?.map((v: string, i: number) => (
          <FormControlLabel key={i} value={v} control={<Radio size="small" />} label={v} />
        ))}
      </RadioGroup>
      {bank && (
        <GridWith2Col>
          {bank
            .filter((q: Question) => q.chapter === filter)
            .map((q: Question) => (
              <div key={q.id}>
                <div className={style.id}>
                  id: {q.id}, 章節: {q.chapter}
                </div>
                {q.hasImage === true && (
                  <img
                    className={style.img}
                    src={`/toliman/images/${q.id}.PNG`}
                    alt=""
                    role="presentation"
                    onError={addDefaultSrc}
                  />
                )}
                <Textarea2MathJax text={q.question} />
                <Textarea2MathJax text={`Ans: ${q.answer}`} className={style.ans} />
              </div>
            ))}
        </GridWith2Col>
      )}
    </MathJax>
  );
};

export default Bank;

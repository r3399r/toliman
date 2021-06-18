import { Radio, RadioChangeEvent } from 'antd';
import lodash from 'lodash';
import { useState } from 'react';
import GridWith2Col from 'src/component/GridWith2Col';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import { bank, chapterList, Question } from 'src/model/bank';
import style from './Bank.module.scss';

const Bank = () => {
  const [filteredBank, setFilteredBank] = useState<Question[]>();

  const handleCheckbox = (val: RadioChangeEvent) => {
    setFilteredBank(lodash.filter(bank, { chapter: val.target.value }));
  };

  return (
    <div className={style.content}>
      <Radio.Group options={chapterList} onChange={handleCheckbox} />
      {filteredBank && (
        <GridWith2Col>
          {filteredBank.map((q: Question) => (
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
                />
              )}
              <Textarea2MathJax text={q.question} />
              <Textarea2MathJax text={`Ans: ${q.answer}`} className={style.ans} />
            </div>
          ))}
        </GridWith2Col>
      )}
    </div>
  );
};

export default Bank;

import { ReactNode, ReactNodeArray } from 'react';
import style from './HomeworkDiv.module.scss';

type Props = {
  children: ReactNodeArray;
};

const HomeworkDiv = ({ children }: Props) => {
  return (
    <div className={style.grid}>
      {children.map((child: ReactNode, i: number) => (
        <div key={i} className="uk-width-1-2">
          {child}
        </div>
      ))}
    </div>
  );
};

export default HomeworkDiv;

import classNames from 'classnames';
import { ReactNode, ReactNodeArray } from 'react';
import style from './HomeworkDiv.module.scss';

type Props = {
  children: ReactNodeArray;
};

const HomeworkDiv = ({ children }: Props) => {
  return (
    <div className={style.grid}>
      {children.map((child: ReactNode, i: number) => (
        <div
          key={i}
          className={classNames('uk-width-1-2', {
            [style.left]: i % 2 === 0,
            [style.right]: i % 2 === 1,
          })}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default HomeworkDiv;

import classNames from 'classnames';
import { ReactNode, ReactNodeArray } from 'react';
import style from './Exercise.module.scss';

type Props = {
  children: ReactNodeArray;
};

const Exercise = ({ children }: Props) => {
  return (
    <div className={style.content}>
      <div className={style.title}>觀念演練</div>
      <div className={style.grid}>
        {children.map((child: ReactNode, i: number) => (
          <div
            key={i}
            className={classNames(style.card, {
              [style.left]: i % 2 === 0,
            })}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercise;

import classNames from 'classnames';
import { ReactNode } from 'react';
import style from './GridWith2Col.module.scss';

type Props = {
  children: ReactNode[];
};

const GridWith2Col = ({ children }: Props) => {
  return (
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
  );
};

export default GridWith2Col;

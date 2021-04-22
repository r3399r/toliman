import classNames from 'classnames';
import { ReactNode, ReactNodeArray } from 'react';
import style from './Example.module.scss';

type Props = {
  num: number;
  children: [ReactNode, ReactNode];
};

const Example = ({ num, children }: Props) => {
  return (
    <div className={style.content}>
      <div className={style.block}>
        <div className={style.title}>{`範例 ${num}`}</div>
      </div>
      <div className={style.block}>
        <div className={style.title}>{`類題 ${num}`}</div>
      </div>
      <div className={style.block}>
        <div className={style.card}>{children[0]}</div>
      </div>
      <div className={classNames(style.block, style.right)}>
        <div className={style.card}>{children[1]}</div>
      </div>
    </div>
  );
};

export default Example;

import classNames from 'classnames';
import { ReactNode } from 'react';
import style from './Page.module.scss';

type Props = {
  children: ReactNode;
  pageNum: number;
};

const Page = ({ children, pageNum }: Props) => {
  return (
    <div className={style.page}>
      {children}
      <div
        className={classNames(style.pageNum, {
          [style.right]: pageNum % 2 === 1,
          [style.left]: pageNum % 2 === 0,
        })}
      >
        {pageNum}
      </div>
    </div>
  );
};

export default Page;

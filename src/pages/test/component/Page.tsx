import { ReactNode } from 'react';
import style from './Page.module.scss';

type Props = {
  children: ReactNode;
};

const Page = ({ children }: Props) => <div className={style.page}>{children}</div>;

export default Page;

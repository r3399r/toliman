import { ReactNode } from 'react';
import style from './Concept.module.scss';

type Props = {
  title: string;
  children: ReactNode;
};

const Concept = ({ title, children }: Props) => {
  return (
    <div className={style.content}>
      <div className={style.title}>主題-{title}</div>
      <div className={style.card}>{children}</div>
    </div>
  );
};

export default Concept;

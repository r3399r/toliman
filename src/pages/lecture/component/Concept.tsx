import { ReactNode } from 'react';
import style from './Concept.module.scss';

type Props = {
  title: string;
  children: ReactNode;
  num?: number;
};

const Concept = ({ title, children, num }: Props) => {
  return (
    <div className={style.content}>
      <div className={style.title}>
        觀念 {num} {title}
      </div>
      <div className={style.card}>{children}</div>
    </div>
  );
};

export default Concept;

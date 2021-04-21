import { ReactNode } from 'react';
import style from './Concept.module.scss';

type Props = {
  children: ReactNode;
};

const Concept = ({ children }: Props) => {
  return (
    <div className={style.content}>
      <div className={style.title}>觀念</div>
      <div className={style.card}>{children}</div>
    </div>
  );
};

export default Concept;

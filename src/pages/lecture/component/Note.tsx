import { ReactChild } from 'react';
import style from './Note.module.scss';

type Props = {
  children: ReactChild;
};

const Note = ({ children }: Props) => {
  return <div className={style.note}>{children}</div>;
};

export default Note;

import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import style from './Lecture.module.scss';

const Lecture = () => {
  const history = useHistory();

  const onClick = (url: string) => () => {
    history.push(`/toliman/lecture/${url}`);
  };

  return (
    <div className={style.content}>
      <div className={style.button}>
        <Button onClick={onClick('trial')}>升高一試聽</Button>
      </div>
      第一冊 Ch1 數與式
      <div className={style.button}>
        <Button onClick={onClick('numbers')}>1-1 數與數線</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('equations')}>1-2 式的運算</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('exponent')}>2-1 指數</Button>
      </div>
      學測複習 B1
      <div className={style.button}>
        <Button onClick={onClick('B1C1')}>Ch1 數與式</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('B1C2')}>Ch2 多項式</Button>
      </div>
    </div>
  );
};

export default Lecture;

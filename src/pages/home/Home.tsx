import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import style from './Home.module.scss';

const Home = () => {
  const history = useHistory();

  const onClick = (url: string) => () => {
    history.push(`toliman/${url}`);
  };

  return (
    <div className={style.content}>
      <div className={style.button}>
        <Button onClick={onClick('edit')}>增修題目</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('lecture')}>講義</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('hw')}>作業</Button>
      </div>
    </div>
  );
};

export default Home;

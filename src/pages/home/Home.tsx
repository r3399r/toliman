import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import style from './Home.module.scss';

const Home = () => {
  const navigate = useNavigate();

  const onClick = (url: string) => () => {
    navigate(`/toliman/${url}`);
  };

  return (
    <div className={style.content}>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('edit')}>
          增修題目
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('bank')}>
          題庫
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('lecture')}>
          講義
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('projection')}>
          題目投影
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('hw')}>
          作業
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('test')}>
          考卷
        </Button>
      </div>
      <div>Version 4.0</div>
    </div>
  );
};

export default Home;

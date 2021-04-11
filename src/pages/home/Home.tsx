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
        <button className="uk-button uk-button-default" onClick={onClick('add')}>
          增修題目
        </button>
      </div>
      <div className={style.button}>
        <button className="uk-button uk-button-default" onClick={onClick('child')}>
          講義
        </button>
      </div>
      <div className={style.button}>
        <button className="uk-button uk-button-default" onClick={onClick('hw')}>
          作業
        </button>
      </div>
    </div>
  );
};

export default Home;

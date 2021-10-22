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
      第三冊 Ch1 指數與對數函數
      <div className={style.button}>
        <Button onClick={onClick('exponentFunction')}>1 指數函數及其圖形</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('logarithm')}>2 對數符號與對數律</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('logarithmFunction')}>3 對數函數及其應用</Button>
      </div>
      第三冊 Ch2 三角函數
      <div className={style.button}>
        <Button onClick={onClick('radius')}>1 弧度、扇形與三角比</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('trigonometricFormula')}>2 和差角與倍半角公式</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('trigonometricFunction')}>3 三角函數的圖形與正餘弦疊合</Button>
      </div>
      第五冊 Ch1 極限
      <div className={style.button}>
        <Button onClick={onClick('limitOfSequence')}>1 數列的極限</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('limitOfSeries')}>2 級數的極限</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('limitOfFunction')}>3 函數及其極限</Button>
      </div>
      第五冊 Ch2 多項式函數的微分
      <div className={style.button}>
        <Button onClick={onClick('derivative')}>1 導數與導函數</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('graphicMeaningOfDerivative')}>2 函數的增減與凹向</Button>
      </div>
      第五冊 Ch3 多項式函數的積分
      <div className={style.button}>
        <Button onClick={onClick('integral')}>1 積分的意義</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('applicationOfIntegral')}>2 積分的應用</Button>
      </div>
      學測複習
      <div className={style.button}>
        <Button onClick={onClick('B1C1')}>Ch1 數與式</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('B1C2')}>Ch2 多項式</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('B1C3')}>Ch3 直線與圓</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('B2C4')}>Ch4 數列級數</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('B2C5')}>Ch5 數據分析</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('B2C6')}>Ch6 排列組合與機率</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('B2C7')}>Ch7 三角比</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('B3C8')}>Ch8 三角函數</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('B3C9')}>Ch9 指數函數與對數函數</Button>
      </div>
      <div className={style.button}>
        <Button onClick={onClick('B3C10')}>Ch10 平面向量</Button>
      </div>
    </div>
  );
};

export default Lecture;

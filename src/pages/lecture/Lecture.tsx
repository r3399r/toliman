import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import style from './Lecture.module.scss';

const Lecture = () => {
  const navigate = useNavigate();

  const onClick = (url: string) => () => {
    navigate(`/toliman/lecture/${url}`);
  };

  return (
    <div className={style.content}>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('trial')}>
          升高一試聽
        </Button>
      </div>
      升高中銜接
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('b0c1')}>
          1 四則運算
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('b0c2')}>
          2 一次式
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('b0c3')}>
          3 根式
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('b0c4')}>
          4 二次式
        </Button>
      </div>
      第一冊 Ch1 數與式
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('b1c1s1')}>
          1-1 實數
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('b1c1s2')}>
          1-2 絕對值
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('b1c1s3')}>
          1-3 指數與常用對數
        </Button>
      </div>
      第三冊 Ch1 指數與對數函數
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('exponentFunction')}>
          1 指數函數及其圖形
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('logarithm')}>
          2 對數符號與對數律
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('logarithmFunction')}>
          3 對數函數及其應用
        </Button>
      </div>
      第三冊 Ch2 三角函數
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('radius')}>
          1 弧度、扇形與三角比
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('trigonometricFormula')}>
          2 和差角與倍半角公式
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('trigonometricFunction')}>
          3 三角函數的圖形與正餘弦疊合
        </Button>
      </div>
      第三冊 Ch3 平面向量
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('basicOfVector')}>
          1 向量的加減法與係數積
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('innerProductOfVector')}>
          2 平面向量的內積
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('vectorInLineAndDeterminant')}>
          3 直線的向量性質與二階行列式
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('graphDesign')}>
          4 平面圖形的比例與設計
        </Button>
      </div>
      第四冊 Ch1 空間概念
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('basicOfSpace')}>
          1 空間中的點線面
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('spaceCoordinate')}>
          2 空間坐標與向量
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('sphereAndConics')}>
          3 球面與圓錐曲線
        </Button>
      </div>
      第四冊 Ch2 空間向量與方程式
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('innerProductOfSpace')}>
          1 空間向量的內積
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('outerProduct')}>
          2 外積與三階行列式
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('planeEquation')}>
          3 空間中的平面方程式
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('lineEquation')}>
          4 空間中的直線方程式
        </Button>
      </div>
      第四冊 Ch3 條件機率與獨立事件
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('condProbability')}>
          1 條件機率
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('independentEvent')}>
          2 獨立事件
        </Button>
      </div>
      第四冊 Ch4 矩陣
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('systemOfEquations')}>
          1 聯立方程組的矩陣表達
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('matrixOperation')}>
          2 矩陣的四則運算
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('inverseAndTransition')}>
          3 反方陣與轉移方陣
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('linearTransform')}>
          4 平面的線性轉換
        </Button>
      </div>
      第五冊 Ch1 極限
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('limitOfSequence')}>
          1 數列的極限
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('limitOfSeries')}>
          2 級數的極限
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('limitOfFunction')}>
          3 函數及其極限
        </Button>
      </div>
      第五冊 Ch2 多項式函數的微分
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('derivative')}>
          1 導數與導函數
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('graphicMeaningOfDerivative')}>
          2 函數的增減與凹向
        </Button>
      </div>
      第五冊 Ch3 多項式函數的積分
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('integral')}>
          1 積分的意義
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('applicationOfIntegral')}>
          2 積分的應用
        </Button>
      </div>
      學測複習
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('B1C1')}>
          Ch1 數與式
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('B1C2')}>
          Ch2 多項式
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('B1C3')}>
          Ch3 直線與圓
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('B2C4')}>
          Ch4 數列級數
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('B2C5')}>
          Ch5 數據分析
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('B2C6')}>
          Ch6 排列組合與機率
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('B2C7')}>
          Ch7 三角比
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('B3C8')}>
          Ch8 三角函數
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('B3C9')}>
          Ch9 指數函數與對數函數
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('B3C10')}>
          Ch10 平面向量
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('B4C11')}>
          Ch11 空間概念
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('B4C12')}>
          Ch12 空間向量
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('B4C13')}>
          Ch13 條件機率
        </Button>
      </div>
      <div className={style.button}>
        <Button variant="contained" onClick={onClick('B4C14')}>
          Ch14 矩陣
        </Button>
      </div>
    </div>
  );
};

export default Lecture;

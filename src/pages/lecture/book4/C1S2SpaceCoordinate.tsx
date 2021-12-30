import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';

const C1S2SpaceCoordinate = () => {
  return (
    <div>
      <div className={style.head}>2 空間坐標</div>
      <Concept num={1} title="空間坐標系與點">
        <div className={style.conceptHead}>空間坐標系</div>
        <Textarea2MathJax
          text={
            '空間中三條數線 $x$ 軸、$y$ 軸、$z$ 軸，兩兩垂直交於一點 $O$，滿足右手定則，則空間中任一點 $P$ 投影到三條數線上可得 $x$ 值、$y$ 值、$z$ 值依次為 $a$、$b$、$c$，則用序組 $(a,b,c)$ 表示 $P$ 點的坐標。'
          }
        />
        <div className={style.conceptHead}>卦限</div>
        <Textarea2MathJax
          text={'三個坐標軸把空間分割成八個「卦限」，$(+,+,+)$ 的區域為第一卦限。'}
        />
        <div className={style.conceptHead}>距離公式</div>
        <Textarea2MathJax
          text={
            '空間中兩點 $A(x_1,y_1,z_1)$ 與 $B(x_2,y_2,z_2)$，則 $A$、$B$ 兩點的距離為 $\\overline{AB}=\\sqrt{(x_1-x_2)^2+(y_1-y_2)^2+(z_1-z_2)^2}$'
          }
        />
      </Concept>
      <Example num={1} ids={['17d8d9b400b', '17d8da46280']} />
      <Example num={2} ids={['17d8da368d2', '17d8da7b042']} />
    </div>
  );
};

export default C1S2SpaceCoordinate;

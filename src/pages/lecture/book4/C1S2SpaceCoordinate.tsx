import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C1S2SpaceCoordinate = () => (
  <div>
    <Page pageNum={9}>
      <div className={style.head}>2 空間坐標與向量</div>
      <Concept num={1} title="空間坐標系與點">
        <div className={style.conceptHead}>空間坐標系</div>
        <div>
          {
            '空間中三條數線 $x$ 軸、$y$ 軸、$z$ 軸，兩兩垂直交於一點 $O$，滿足右手定則，則空間中任一點 $P$ 投影到三條數線上可得 $x$ 值、$y$ 值、$z$ 值依次為 $a$、$b$、$c$，則用序組 $(a,b,c)$ 表示 $P$ 點的坐標。'
          }
        </div>
        <br />
        <div className={style.conceptHead}>卦限</div>
        <div>{'三個坐標軸把空間分割成八個「卦限」，$(+,+,+)$ 的區域為第一卦限。'}</div>
        <br />
        <div className={style.conceptHead}>距離公式</div>
        <div>
          {
            '空間中兩點 $A(x_1,y_1,z_1)$ 與 $B(x_2,y_2,z_2)$，則 $A$、$B$ 兩點的距離為 $\\overline{AB}=\\sqrt{(x_1-x_2)^2+(y_1-y_2)^2+(z_1-z_2)^2}$'
          }
        </div>
      </Concept>
      <Example num={1} ids={['17d8d9b400b', '17d8da46280']} height="9.5cm" />
    </Page>
    <Page pageNum={10}>
      <Example num={2} ids={['17d8da98a60', '17d8daad579']} />
      <Example num={3} ids={['17d7685be20', '17d8dab4bf8']} />
    </Page>
    <Page pageNum={11}>
      <Example num={4} ids={['17d8dabb4ea', '17d8dac1127']} />
      <Example num={5} ids={['17d8dacebbb', '17d8daf121a']} />
    </Page>
    <Page pageNum={12}>
      <Example num={6} ids={['17d8dad1088', '17d8dafa57b']} />
      <Concept num={2} title="空間向量">
        <div className={style.conceptHead}>空間向量</div>
        <div>
          {
            '以 $A(x_1,y_1,z_1)$ 為起點，$B(x_2,y_2,z_2)$ 為終點的有向線段，記為 $\\xvector{AB}=(x_2-x_1,y_2-y_1,z_2-z_1)$，其大小為 $|\\xvector{AB}|=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}$。'
          }
        </div>
        <br />
        <div className={style.conceptHead}>向量加減法與係數積</div>
        <div>{'設 $\\vector a=(x_1,y_1,z_1)$，$\\vector b=(x_2,y_2,z_2)$'}</div>
        <div>
          {
            '(1) 加法：共起點的兩向量，以平行四邊形法相加。$\\vector a+\\vector b=(x_1+x_2,y_1+y_2,z_1+z_2)$'
          }
        </div>
        <div>
          {
            '(2) 減法：$\\vector a-\\vector b=\\vector a+(-\\vector b)$，可視為加法。$\\vector a-\\vector b=(x_1-x_2,y_1-y_2,z_1-z_2)$'
          }
        </div>
        <div>
          {'(3) 係數積：$r\\vector a$ 為 $\\vector a$ 的 $r$ 倍。$r\\vector a=(rx_1,ry_1,rz_1)$'}
        </div>
      </Concept>
    </Page>
    <Page pageNum={13}>
      <Example num={7} ids={['17d8db3de08', '17d8db669b3']} />
      <Example num={8} ids={['17d8db4365d', '17d8db5cf4b']} />
    </Page>
    <Page pageNum={14}>
      <Example num={9} ids={['17d860c897a', '17d860d2d92']} />
      <Example num={10} ids={['17d860ebd31', '17d8610f0eb']} />
    </Page>
    <Page pageNum={15}>
      <Example num={11} ids={['17d860fde8a', '17d8611bccf']} />
      <Example num={12} ids={['17d86143148', '17d861698a2']} />
    </Page>
    {/* <Page pageNum={16}>
      <Example num={13} ids={['17d8db033c2', '17d8db10cf6']} height="20cm" />
    </Page> */}
  </div>
);

export default C1S2SpaceCoordinate;

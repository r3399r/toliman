import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const B2C4S2 = () => (
  <MathJax>
    <Page pageNum={11}>
      <div className={style.head}>2 二維數據分析</div>
      <Concept num={1} title="散布圖">
        將二維數據 $(x_1,y_1)$、$(x_2,y_2)$、$(x_3,y_3)$、...、$(x_n,y_n)$ 畫在 $xy$
        平面上，成為「散布圖」，觀察其分布狀況，可判定 $y$ 值是否隨 $x$ 而變化，分成下列三種情形：
        <div className={style.conceptHead} style={{ marginTop: '10px' }}>
          正相關
        </div>
        點沿著朝右上的直線分佈，大致上 $y$ 隨 $x$ 的增加而增加，為正相關。
        <img src={'/toliman/images/散布圖v2-1.PNG'} style={{ width: '100%' }} />
        <div className={style.conceptHead} style={{ marginTop: '10px' }}>
          負相關
        </div>
        點沿著朝右下的直線分佈，大致上 $y$ 隨 $x$ 的增加而減少，為負相關。
        <img src={'/toliman/images/散布圖v2-2.PNG'} style={{ width: '100%' }} />
        <div className={style.conceptHead} style={{ marginTop: '10px' }}>
          零相關
        </div>
        看不出 $y$ 值隨 $x$ 值遞增或遞減，為零相關。比如水平線、鉛直線、或呈現左右、上下對稱的圖形。
        <img src={'/toliman/images/散布圖v2-3.PNG'} style={{ width: '100%' }} />
      </Concept>
    </Page>
    <Page pageNum={12}>
      <Example num={1} ids={['187c3456a83']} showAnswer={false} />
      <Example num={2} ids={['17ea6f049cf', '17ea6f1be9f']} showAnswer={false} />
    </Page>
    <Page pageNum={13}>
      <Concept num={2} title="相關係數">
        <div className={style.conceptHead}>相關係數 $r$ 的定義</div>
        {
          '二維數據 $(x_1,y_1)$、$(x_2,y_2)$、$(x_3,y_3)$、...、$(x_n,y_n)$。定義相關係數 $r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}}\\sqrt{S_{yy}}}$'
        }
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        相關係數 $r$ 的範圍與內涵：
        <br />
        <br />
      </Concept>
      <Example num={3} ids={['17ea6f3611a', '17ea6f567b2']} height="10cm" />
    </Page>
    <Page pageNum={14}>
      <Concept num={3} title="迴歸直線 (最適直線)">
        存在一直線 $L$，使其與散布圖中的 $n$ 個點的「鉛垂線段長」平方和最小，此直線 $L$
        稱為回歸直線或最適直線。迴歸直線方程式為：$y=mx+b$，其中 $m$ 為斜率
        <br />
        <br />
        <br />
        <br />
        <br />
        迴歸預測：在求出迴歸直線方程式後，可代入 $x$ 值來預測最有可能的 $y$ 值
      </Concept>
      <Example num={4} ids={['17ea6f4b0c7', '17ea6f941ce']} height="14cm" />
    </Page>
    <Page pageNum={15}>
      <Example num={5} ids={['17ea6f8e519', '17ea6fa9482']} height="20cm" />
    </Page>
    <Page pageNum={16}>
      <Concept num={4} title="平移伸縮與標準化">
        <div className={style.conceptHead}>平移伸縮</div>
        {"(1) $x'=x+a$，$y'=y+b$，資料加減後對相關係數的影響："}
        <br />
        {"(2) $x'=px$，$y'=qy$，資料乘除後對相關係數的影響："}
        <div className={style.conceptHead} style={{ marginTop: '10px' }}>
          標準化
        </div>
        {
          "$x'=\\dfrac{x-\\mu_x}{\\sigma_x}$，$y'=\\dfrac{x-\\mu_y}{\\sigma_y}$，標準化對相關係數的影響："
        }
      </Concept>
      <Example num={6} ids={['187c3b2fe3a']} height="0cm" showAnswer={false} />
      <Example num={7} ids={['17ea70aa2f3', '17ea70bb436']} height="8.5cm" />
    </Page>
    <Page pageNum={17}>
      <Example num={8} ids={['17ea6fb0439', '17ea6fc53b1']} height="20cm" />
    </Page>
    <Page pageNum={18}>
      <Example num={9} ids={['17ea7106aa3', '17ea7103324']} />
      <Example num={10} ids={['17ea8de79c4', '17ea8df4ee3']} />
    </Page>
  </MathJax>
);

export default B2C4S2;

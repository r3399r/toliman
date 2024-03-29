import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';
import Page from 'src/pages/lecture/component/Page';

const B4C11SpaceConcept = () => (
  <MathJax>
    <Page pageNum={1}>
      <div className={style.head}>Ch11 空間概念</div>
      <Concept num={1} title="空間中直線與平面之間的關係" height="6.6cm">
        <div>
          空間中的直線與平面均為無限延伸，沒有邊界，相異兩點可決定一條直線、不共線三點可決定一個平面，它們的關係如下：
          <br />
          (1) 平面與平面：兩平面可「平行」、「重合」、「交於一線」
          <br />
          (2) 直線與平面：一條直線與平面可「平行」、「交於一點」、「線在平面上」
          <br />
          (3) 直線與直線：兩條直線可「平行」、「交於一點」、「重合」、「歪斜」
        </div>
      </Concept>
      <Exercise ids={['17cdff745aa', '17cdff84f8b']} height="8.5cm" />
      <Concept num={2} title="二面角">
        <img
          style={{ float: 'right', width: '1.9cm' }}
          src="/toliman/images/二面角.PNG"
          alt=""
          role="presentation"
        />
        <div>
          {
            '將平面沿著面上的直線來彎折，所成圖形為二面角。射線 $AB$ 與射線 $AC$ 均與折邊垂直，則 $\\angle BAC=\\theta$ 為二面角，範圍為 $0\\du\\le\\theta\\le180\\du$。'
          }
        </div>
      </Concept>
    </Page>
    <Page pageNum={2}>
      <Exercise ids={['17cdff9458e', '17cdffa2246']} height="9cm" />
      <Concept num={3} title="三垂線定理" height="2cm">
        <img
          style={{ float: 'right', width: '5cm' }}
          src="/toliman/images/三垂線定理.PNG"
          alt=""
          role="presentation"
        />
        <div>
          {
            '如圖，直線 $AB$ 垂直平面 $E$ 於 $B$ 點，直線 $L$ 在平面 $E$ 上，若 $C\\in L$ 且 $\\overline{BC}\\perp L$，則 $\\overline{AC}$ 與 $L$ 也互相垂直。'
          }
        </div>
      </Concept>
      <Exercise ids={['17cdffd7863', '17cdffec15a']} height="9cm" />
    </Page>
    <Page pageNum={3}>
      <Concept num={4} title="空間中使用畢氏定理" height="3.4cm">
        <div>
          {
            '我們常在立體圖形的剖面圖中察覺到直角三角形，我們常用畢氏定理進行基本的長度計算。如長方體的三邊長為 $a$、$b$、$c$，則內部對角線長度為'
          }
        </div>
      </Concept>
      <Exercise ids={['17ce002d564', '17ce003c076']} height="7.5cm" />
      <Concept num={5} title="錐體體積">
        <div>
          {
            '柱體上下兩面平行且全等，將其中一面縮成一點即為錐體，體積均為柱體的三分之一，即「底面積$\\times$高$\\times\\dfrac13$」。'
          }
        </div>
      </Concept>
      <Exercise ids={['17ce0001ef1', '17ce0013699']} />
    </Page>
    <Page pageNum={4}>
      <Concept num={6} title="空間坐標系">
        <div>
          {
            '空間中每一點用 $(x,y,z)$ 表示，期距離公式、中點坐標、分點坐標均與平面坐標系雷同。設 $A(x_1,y_1,z_1)$，$B(x_2,y_2,z_2)$，則 $\\overline{AB}=\\sqrt{(x_1-x_2)^2+(y_1-y_2)^2+(x_3-y_3)^2}$'
          }
        </div>
      </Concept>
      <Exercise ids={['17ce0065827', '17ce007f2d9']} height="7cm" />
      <Concept num={7} title="球面與地球的經緯線(數B)">
        <div>
          {'(1) 球面：空間中到球心的距離為 $r$ 的所有點形成的圖形為球面，稱 $r$ 為半徑。'}
          <br />
          {
            '(2) 地球的經線與緯線：地球可視為球體，半徑約 6400 公里，經線為通過南北極的大圓，分為東經與西經各 $180\\du$；緯線為與赤道面平行的小圓，分為南緯與北緯各 $90\\du$。若地球半徑為 $R$，則緯度 $\\theta$ 的緯線是半徑為 $R\\cos\\theta$ 的小圓。'
          }
        </div>
      </Concept>
      <Exercise ids={['17ce008fbb5', '17ce00a154d']} height="7cm" />
    </Page>
    <Page pageNum={5}>
      <Concept num={8} title="圓錐曲線(數B)">
        <div>
          空間中有一直圓錐面，探討與平面香蕉所截出的圖形，總共有七種，可分為三類：
          <br />
          (1) 斜率小於圓錐面：橢圓、圓、一點
          <br />
          (2) 斜率等於圓錐面：拋物線、一直線
          <br />
          (3) 斜率大於圓錐面：雙曲線、兩相交直線
        </div>
        <div style={{ display: 'flex' }}>
          <img
            style={{ width: '14.2%' }}
            src="/toliman/images/二次曲線-橢圓.PNG"
            alt=""
            role="presentation"
          />
          <img
            style={{ width: '14.2%' }}
            src="/toliman/images/二次曲線-圓.PNG"
            alt=""
            role="presentation"
          />
          <img
            style={{ width: '14.2%' }}
            src="/toliman/images/二次曲線-點.PNG"
            alt=""
            role="presentation"
          />
          <img
            style={{ width: '14.2%' }}
            src="/toliman/images/二次曲線-拋物線.PNG"
            alt=""
            role="presentation"
          />
          <img
            style={{ width: '14.2%' }}
            src="/toliman/images/二次曲線-一直線.PNG"
            alt=""
            role="presentation"
          />
          <img
            style={{ width: '14.2%' }}
            src="/toliman/images/二次曲線-雙曲線.PNG"
            alt=""
            role="presentation"
          />
          <img
            style={{ width: '14.2%' }}
            src="/toliman/images/二次曲線-兩直線.PNG"
            alt=""
            role="presentation"
          />
        </div>
      </Concept>
      <Exercise ids={['17ce00c5e42']} />
    </Page>
    <Page pageNum={6}>
      <Example num={1} ids={['17cebe71628', '17cebe8f1c9']} />
      <Example num={2} ids={['17cebe91c86', '17cebe9df49']} />
    </Page>
    <Page pageNum={7}>
      <Example num={3} ids={['17cebeaa5b5', '17cebeb1bce']} />
      <Example num={4} ids={['17cebec7ace', '17cebed7be4']} />
    </Page>
    <Page pageNum={8}>
      <Example num={5} ids={['17cebf09d4e', '17cea2e6483']} />
      <Example num={6} ids={['17cec34ee97', '17cec384cda']} note=" (數B)" />
    </Page>
  </MathJax>
);

export default B4C11SpaceConcept;

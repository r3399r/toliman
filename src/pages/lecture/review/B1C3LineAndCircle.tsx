import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';
import Page from 'src/pages/lecture/component/Page';

const B1C3LineAndCircle = () => (
  <MathJax>
    <Page pageNum={26}>
      <div className={style.head}>Ch3 直線與圓</div>
      <Concept num={1} title="斜率" height="6.5cm">
        <div>
          {
            '(1) 斜率 $m$ 代表一條直線的「傾斜程度」，$m>0$ 則直線往右上升，$m<0$ 則直線往右下降，$|m|$ 愈大則愈接近鉛直，$|m|$ 愈小則愈接近水平。'
          }
          <br />
          {
            '(2) 設 $A(x_1,y_1)$、$B(x_2,y_2)$，則 $m=\\dfrac{y_2-y_1}{x_2-x_1}$ 為 $\\overleftrightarrow{AB}$ 的斜率。'
          }
          <br />
          {'(3) 設 $\\theta$ 為直線與水平線的夾角，由三角函數的定義可知 $m=\\tan\\theta$。'}
          <br />
          {'(4) 直線方程式 $y=mx+k$ 的斜率為 $m$；直線方程式 $ax+by=c$ 的斜率為 $-\\dfrac ab$。'}
        </div>
      </Concept>
      <Exercise ids={['17a2dd2d0b1', '17a2dd465e2', '17a2dd59cf5', '17a2dd669cd']} height="7cm" />
    </Page>
    <Page pageNum={27}>
      <Concept num={2} title="斜率的應用">
        <div>
          {'已知相異兩直線 $L_1$ 與 $L_2$ 的斜率為 $m_1$ 與 $m_2$，則：'}
          <br />
          {'(1) $L_1$ 與 $L_2$ 平行 $\\Leftrightarrow$'}
          <br />
          {'(2) $L_1$ 與 $L_2$ 垂直 $\\Leftrightarrow$'}
        </div>
      </Concept>
      <Exercise ids={['17a348a3b3e', '1815da6c177']} height="7cm" />
      <Concept num={3} title="直線方程式">
        <div>
          {'平面上的直線可用二元一次方程式表示，依所給的條件可分為：'}
          <br />
          {'(1) 斜率式：過點 $(a,b)$，斜率為 $m$ 的直線方程式為 $y=mx+k$，代入 $(a,b)$ 可決定 $k$'}
          <br />
          {
            '(2) 截距式：$x$ 軸截距為 $a$，$y$ 軸截距為 $b$，則方程式可寫為 $\\dfrac xa+\\dfrac yb=1$'
          }
        </div>
      </Concept>
      <Exercise ids={['17a34943d7f', '17a3495873a']} height="7cm" />
    </Page>
    <Page pageNum={28}>
      <Concept num={4} title="兩直線的關係">
        <div>
          {'平面上直線 $L_1:a_1x+b_1y=c_1$ 與 $L_2:a_2x+b_2y=c_2$，則：'}
          <br />
          {
            '(1) $\\dfrac{a_1}{a_2}\\ne\\dfrac{b_1}{b_2}\\Rightarrow$ 斜率不同 $\\Rightarrow$ 兩線相交於一點，可聯立求交點坐標'
          }
          <br />
          {
            '(2) $\\dfrac{a_1}{a_2}=\\dfrac{b_1}{b_2}\\neq\\dfrac{c_1}{c_2}\\Rightarrow$ 斜率相同，但常數項不同 $\\Rightarrow$ 兩線平行不相交'
          }
          <br />
          {
            '(3) $\\dfrac{a_1}{a_2}=\\dfrac{b_1}{b_2}=\\dfrac{c_1}{c_2}\\Rightarrow$ 斜率相同，常數項也相同 $\\Rightarrow$ 兩線重合'
          }
        </div>
      </Concept>
      <Exercise ids={['17a349b3a65', '1815dbfad29']} height="7cm" />
      <Concept num={5} title="距離公式">
        <div>
          {
            '(1) 點與點的距離：點 $(x_1,y_1)$ 與 $(x_2,y_2)$ 的距離為$$\\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}$$'
          }
          <br />
          {
            '(2) 點到直線的距離：點 $(p,q)$ 到直線 $L:ax+by+c=0$ 的最近距離為$$\\dfrac{|ap+bq+c|}{\\sqrt{a^2+b^2}}$$'
          }
          <br />
          {
            '(3) 兩平行線的距離：兩平行直線 $L_1:ax+by=c_1$ 與 $L_2:ax+by=c_2$ 的距離為$$\\frac{|c_1-c_2|}{\\sqrt{a^2+b^2}}$$'
          }
        </div>
      </Concept>
    </Page>
    <Page pageNum={29}>
      <Exercise ids={['17a34a1e673', '17a34a4c710']} height="8cm" />
      <Concept num={6} title="二元一次不等式">
        <div>
          {
            '$ax+by=c$ 為平面上的直線，若 $a>0$，則滿足 $ax+by>c$ 的點為直線的右半平面，滿足 $ax+by<c$ 的點為直線的左半平面；若 $a<0$，則左右相反。'
          }
        </div>
      </Concept>
      <Exercise ids={['17a34abb772', '1815dd688e8']} height="10.6cm" />
    </Page>
    <Page pageNum={30}>
      <Concept num={7} title="圓方程式">
        <div>
          {
            '(1) 圓標準式：以 $(p,q)$ 為圓心，$r$ 為半徑可決定一個圓，圓標準式為$$(x-p)^2+(y-q)^2=r^2$$'
          }
          <br />
          {
            '(2) 圓一般式：將圓標準式乘開後可得到二元二次方程式 $x^2+y^2+ax+by+c=0$，即一般式。但二元二次方程式不一定是圓方程式，須經配方確認，其圖形可能為一點或無圖形。'
          }
        </div>
      </Concept>
      <Exercise ids={['17a36690e96', '17a366ab9d9']} height="5.9cm" />
      <Concept num={8} title="圖形的平移">
        <div>
          {'設圖形的方程式 $f(x,y)=0$，向右平移 $h$、向上平移 $k$，得方程式為 $f(x-h,y-k)=0$，'}
          <br />
          {'如：(1) 直線 $ax+by=c$ 向右平移 $h$、向上平移 $k$，得方程式為 $a(x-h)+b(y-k)=c$'}
          <br />
          {'(2) 圓 $x^2+y^2=r^2$ 向右平移 $h$、向上平移 $k$，得方程式為 $(x-h)^2+(y-k)^2=r^2$'}
        </div>
      </Concept>
      <Exercise ids={['17a3671805f', '17a36731378']} height="6.8cm" />
    </Page>
    <Page pageNum={31}>
      <Concept num={9} title="圓內與圓外">
        <div>
          {'已知圓方程式 $(x-p)^2+(y-q)^2=r^2$，則：'}
          <br />
          {'(1) 點 $(a,b)$ 在圓內 $\\Leftrightarrow$ 點 $(a,b)$ 與圓心 $(p,q)$ 的距離　　$r$'}
          <br />
          {'(2) 點 $(a,b)$ 在圓外 $\\Leftrightarrow$ 點 $(a,b)$ 與圓心 $(p,q)$ 的距離　　$r$'}
        </div>
      </Concept>
      <Exercise ids={['17a3677e6c4', '17a3678cae7']} height="7cm" />
      <Concept num={10} title="圓與直線的關係">
        <div>
          {'設圓的半徑為 $r$，圓心到直線的距離為 $d$，則：'}
          <br />
          {'(1) $d<r \\Leftrightarrow$ 直線與圓相交於兩點'}
          <br />
          {'(2) $d=r \\Leftrightarrow$ 直線與圓相切於一點'}
          <br />
          {'(3) $d>r \\Leftrightarrow$ 直線與圓沒有交點'}
        </div>
      </Concept>
      <Exercise ids={['17a367d7b20', '17a367e6585']} height="6.7cm" />
    </Page>
    <Page pageNum={32}>
      <Concept num={11} title="圓的切線段長與切線">
        <div>{'依題意作圖，由畢氏定理可得切線段長度、假設斜率 $m$ 可求得切線方程式。'}</div>
      </Concept>
      <Exercise ids={['17a36834824', '17a36848471']} />
      <Example num={1} ids={['17a50c06452', '17a50c4a7d8']} height="10cm" />
    </Page>
    <Page pageNum={33}>
      <Example num={2} ids={['1815e15c070', '1815e187ec4']} />
      <Example num={3} ids={['17a50c8d3de', '17a50ca5eea']} />
    </Page>
    <Page pageNum={34}>
      <Example num={4} ids={['17a50d16805', '17a50d68e5a']} />
      <Example num={5} ids={['1815e1af7c8', '1815e1d140a']} />
    </Page>
    <Page pageNum={35}>
      <Example num={6} ids={['17a50d82b17', '17a50da2521']} />
      <Example num={7} ids={['17a50dd5388', '17a50def853']} />
    </Page>
    <Page pageNum={36}>
      <Example num={8} ids={['17a50e0e6da', '17a50e283b8']} />
      <Example num={9} ids={['17a50e42825', '17a50e5b817']} />
    </Page>
    <Page pageNum={37}>
      <Example num={10} ids={['17a50e7342d', '17a50e87ca3']} />
      <Example num={11} ids={['17a50ebac7c', '17a50ee3140']} />
    </Page>
    <Page pageNum={38}>
      <Example num={12} ids={['1815e0b4e7b', '1815e0cac72']} />
      <Example num={13} ids={['17a50f2d913', '17a50f44f2b']} />
    </Page>
  </MathJax>
);

export default B1C3LineAndCircle;

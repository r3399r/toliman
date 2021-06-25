import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Exercise from 'src/pages/lecture/component/Exercise';
import Page from 'src/pages/lecture/component/Page';

const B1C3LineAndCircle = () => {
  return (
    <div>
      <Page pageNum={14}>
        <div className={style.head}>Ch3 直線與圓</div>
        <Concept num={1} title="斜率" height="7.5cm">
          <Textarea2MathJax
            text={
              '(1) 設 $$A(x_1,y_1)$$、$$B(x_2,y_2)$$，且 $$x_1\\neq x_2$$，則稱 $$m=\\frac{y_2-y_1}{x_2-x_1}$$ 為 $$\\overleftrightarrow{AB}$$ 的斜率，代表該直線在坐標平面上的傾斜程度。'
            }
          />
          <Textarea2MathJax
            text={
              '(2) 設 $$\\theta$$ 為直線與水平線的夾角，由三角函數的定義可知 $$m=\\tan\\theta$$。'
            }
          />
          <Textarea2MathJax
            text={
              '(3) $$m>0$$ 則直線往右上；$$m<0$$ 則直線往右下。$$|m|$$ 愈大則直線愈接近鉛直，$$|m|$$ 愈小則直線愈接近水平。'
            }
          />
          <Textarea2MathJax
            text={
              '(4) 直線 $$y=mx+k$$ 的斜率即為 $$m$$，且直線通過點 $$(0,k)$$；直線 $$ax+by=c$$，$$b\\neq0$$，可移項成 $$y=-\\frac{a}{b}x+\\frac{c}{b}$$，斜率即為 $$-\\frac{a}{b}$$。'
            }
          />
        </Concept>
        <Exercise
          ids={['17a2dd2d0b1', '17a2dd465e2', '17a2dd59cf5', '17a2dd669cd']}
          height="6.5cm"
        />
      </Page>
      <Page pageNum={15}>
        <Concept num={2} title="斜率的應用">
          <Textarea2MathJax
            text={
              '已知相異兩直線 $$L_1$$ 與 $$L_2$$ 的斜率為 $$m_1$$ 與 $$m_2$$，則：\n(1) $$L_1$$ 與 $$L_2$$ 平行 $$\\Leftrightarrow\n(2) $$L_1$$ 與 $$L_2$$ 垂直 $$\\Leftrightarrow$$'
            }
          />
        </Concept>
        <Exercise ids={['17a348a3b3e']} />
        <Concept num={3} title="直線方程式">
          <Textarea2MathJax text={'平面上的直線可用二元一次方程式表示，依所給的條件可分為：'} />
          <Textarea2MathJax
            text={
              '(1) 斜率式：過點 $$(a,b)$$，斜率為 $$m$$ 的直線方程式為 $$y=mx+k$$，代入 $$(a,b)$$ 可決定 $$k$$'
            }
          />
          <Textarea2MathJax
            text={
              '(2) 截距式：$$x$$ 軸截距為 $$a$$，$$y$$ 軸截距為 $$b$$，即過 $$(a,0)$$、$$(0,b)$$ 兩點，若 $$ab\\neq0$$，則方程式可寫為 $$\\frac{x}{a}+\\frac{y}{b}=1$$'
            }
          />
        </Concept>
        <Exercise ids={['17a34943d7f', '17a3495873a']} height="7cm" />
      </Page>
      <Page pageNum={16}>
        <Concept num={4} title="兩直線的關係">
          <Textarea2MathJax
            text={'平面上直線 $$L_1:a_1x+b_1y=c_1$$ 與 $$L_2:a_2x+b_2=c_2$$，則：'}
          />
          <Textarea2MathJax
            text={
              '(1) $$\\frac{a_1}{a_2}\\neq\\frac{b_1}{b_2}\\Rightarrow$$ 兩線相交於一點，可聯立求交點坐標'
            }
          />
          <Textarea2MathJax
            text={
              '(2) $$\\frac{a_1}{a_2}=\\frac{b_1}{b_2}\\neq\\frac{c_1}{c_2}\\Rightarrow$$ 兩線平行不相交'
            }
          />
          <Textarea2MathJax
            text={'(3) $$\\frac{a_1}{a_2}=\\frac{b_1}{b_2}=\\frac{c_1}{c_2}\\Rightarrow$$ 兩線重合'}
          />
        </Concept>
        <Exercise ids={['17a349b3a65']} height="5.5cm" />
        <Concept num={5} title="距離公式">
          <Textarea2MathJax
            text={
              '(1) 點與點的距離：點 $$(x_1,y_1)$$ 與 $$(x_2,y_2)$$ 的距離為\n$$\\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}$$'
            }
          />
          <Textarea2MathJax
            text={
              '(2) 點到直線的距離：點 $$(p,q)$$ 到直線 $$L:ax+by+c=0$$ 的最近距離為\n$$\\frac{|ap+bq+c|}{\\sqrt{a^2+b^2}}$$'
            }
          />
          <Textarea2MathJax
            text={
              '(3) 兩平行線的距離：兩平行直線 $$L_1:ax+by=c_1$$ 與 $$L_2:ax+by=c_2$$ 的距離為\n$$\\frac{|c_1-c_2|}{\\sqrt{a^2+b^2}}$$'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={17}>
        <Exercise ids={['17a34a1e673', '17a34a4c710']} />
        <Concept num={6} title="二元一次不等式">
          <Textarea2MathJax
            text={
              '$$ax+by=c$$ 為平面上的直線，若 $$a>0$$，則滿足 $$ax+by>c$$ 的點為直線的右半平面，滿足 $$ax+by<c$$ 的點為直線的左半平面；若 $$a<0$$，則左右相反。'
            }
          />
        </Concept>
        <Exercise ids={['17a34abb772']} />
      </Page>
      <Page pageNum={18}>
        <Concept num={7} title="圓方程式">
          <Textarea2MathJax
            text={
              '(1) 圓標準式：坐標平面上，以 $$(p,q)$$ 為圓心，$$r$$ 為半徑可決定一個圓，由距離公式可知圓上任一點 $$(x,y)$$ 皆滿足二元一次方程式 $$(x-p)^2+(y-q)^2=r^2$$，乘開後即為一般式。'
            }
          />
          <Textarea2MathJax
            text={
              '(2) 圓一般式：二元二次方程式 $$ax^2+bxy+cy^2+dx+ey+f=0$$ 的圖形若為平面上的圓，則必為 $$a=c$$ 且 $$b=0$$ 配方整理後可得標準式。其圖形可能退化成一點或無圖形。'
            }
          />
        </Concept>
        <Exercise ids={['17a36690e96', '17a366ab9d9']} />
        <Concept num={8} title="圖形的平移">
          <Textarea2MathJax
            text={
              '設圖形的方程式 $$f(x,y)=0$$，向右平移 $$h$$、向上平移 $$k$$，得方程式為 $$f(x-h,y-k)=0$$。如：直線 $$ax+by=c$$ 向右平移 $$h$$、向上平移 $$k$$，得方程式為 $$a(x-h)+b(y-k)=c$$；圓 $$x^2+y^2=r^2$$ 向右平移 $$h$$、向上平移 $$k$$，得方程式為 $$(x-h)^2+(y-k)^2=r^2$$。'
            }
          />
        </Concept>
        <Exercise ids={['17a3671805f', '17a36731378']} height="7cm" />
      </Page>
      <Page pageNum={19}>
        <Concept num={9} title="圓內與圓外">
          <Textarea2MathJax text={'已知圓方程式 $$(x-p)^2+(y-q)^2=r^2$$，則：'} />
          <Textarea2MathJax
            text={
              '(1) 點 $$(a,b)$$ 在圓內 $$\\Leftrightarrow$$ 點 $$(a,b)$$ 與圓心 $$(p,q)$$ 的距離小於 $$r$$'
            }
          />
          <Textarea2MathJax
            text={
              '(2) 點 $$(a,b)$$ 在圓外 $$\\Leftrightarrow$$ 點 $$(a,b)$$ 與圓心 $$(p,q)$$ 的距離大於 $$r$$'
            }
          />
        </Concept>
        <Exercise ids={['17a3677e6c4', '17a3678cae7']} height="6.5cm" />
        <Concept num={10} title="圓與直線的關係">
          {/* TODO: 附圖 */}
          <Textarea2MathJax text={'設圓的半徑為 $$r$$，圓心到直線的距離為 $$d$$，則：'} />
          <Textarea2MathJax text={'(1) $$d<r \\Leftrightarrow$$ 直線與圓相交於兩點'} />
          <Textarea2MathJax text={'(2) $$d=r \\Leftrightarrow$$ 直線與圓相切於一點'} />
          <Textarea2MathJax text={'(3) $$d>r \\Leftrightarrow$$ 直線與圓沒有交點'} />
        </Concept>
        <Exercise ids={['17a367d7b20', '17a367e6585']} height="6.5cm" />
      </Page>
      <Page pageNum={20}>
        <Concept num={11} title="圓的切線段長與切線">
          <Textarea2MathJax
            text={'依題意作圖，由畢氏定理可得切線段長度、假設斜率 $$m$$ 可求得切線方程式。'}
          />
        </Concept>
        <Exercise ids={['17a36834824', '17a36848471']} />
      </Page>
    </div>
  );
};

export default B1C3LineAndCircle;

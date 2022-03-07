import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C2S3PlaneEquation = () => {
  return (
    <div>
      <Page pageNum={20}>
        <div className={style.head}>3 平面方程式</div>
        <Concept num={1} title="平面方程式">
          <div className={style.conceptHead}>平面的法向量</div>
          <Textarea2MathJax text={'跟平面垂直的向量，即為法向量，習慣記為 $\\vector n$。'} />
          <div className={style.conceptHead}>平面方程式</div>
          <Textarea2MathJax
            text={
              '空間中，若平面 $E$ 通過定點 $(p,q,r)$，法向量為 $(a,b,c)$，則平面 $E$ 上任何一點 $(x,y,z)$ 皆滿足 $(x-p,y-q,z-r)\\perp(a,b,c)$，由內積為 $0$ 的性質可得平面方程式：$$a(x-p)+b(y-q)+c(z-r)=0$$ $$\\Rightarrow ax+by+cz=ap+bq+cr$$ $$\\Rightarrow ax+by+cz=d$$結論：(1) 由法向量可直接得到平面方程式的係數 (2) 代面上的點求 $d$'
            }
          />
          <div className={style.conceptHead}>截距式</div>
          <Textarea2MathJax
            text={
              '一個不經過原點的平面，與三坐標軸交於 $(p,0,0)$、$(0,q,0)$、$(0,0,r)$，稱 $p$、$q$、$r$ 為 $x$ 截距、$y$ 截距、$z$ 截距，該平面方程式可寫成 $\\frac x p+\\frac y q+\\frac z r=1$，稱為截距式。'
            }
          />
        </Concept>
        <Example num={1} ids={['17dc12c2ecb', '17dc1201c0a']} />
      </Page>
      <Page pageNum={21}>
        <Example num={2} ids={['17dc11fb683', '17dc121215b']} />
        <Example num={3} ids={['17dc1219280', '17dc122ac69']} />
      </Page>
      <Page pageNum={22}>
        <Example num={4} ids={['17dc1231ca6', '17dc123b3e1']} />
        <Example num={5} ids={['17dc123720a', '17dc123f2ca']} />
      </Page>
      <Page pageNum={23}>
        <Example num={6} ids={['17dc1259188', '17dc1251ae5']} height="7.7cm" />
        <Concept num={2} title="兩平面的關係與點面距">
          <div className={style.conceptHead}>兩平面的交角</div>
          <Textarea2MathJax
            text={
              '若兩平面交於一直線，則有銳交角與鈍交角，兩者互補，可由兩個平面的法向量 $\\vector{n_1}$ 與 $\\vector{n_1}$ 求夾角的餘弦值，即 $\\vector{n_1}\\cdot\\vector{n_2}=|\\vector{n_1}||\\vector{n_2}|\\cos\\theta$。'
            }
          />
          <div className={style.conceptHead}>點面距</div>
          <Textarea2MathJax
            text={
              '空間中，點 $A(p,q,r)$ 到平面 $E:ax+by+cz+d=0$ 的最近距離為$$d(A,E)=\\frac{|ap+bq+cr+d|}{\\sqrt{a^2+b^2+c^2}}$$'
            }
          />
          <div className={style.conceptHead}>兩平行平面間距</div>
          <Textarea2MathJax
            text={
              '兩平行平面 $E_1:ax+by+cz+d_1=0$ 與 $E_2:ax+by+cz+d_2=0$ 的最近距離為$$d(E_1,E_2)=\\frac{|d_1-d_2|}{\\sqrt{a^2+b^2+c^2}}$$要先確認一次像係數對應相等才可以代公式。若不使用此公式，也可以在 $E_1$ 上任意找一點 $P$，求 $P$ 到 $E_2$ 的距離。'
            }
          />
          <div className={style.conceptHead}>平面族</div>
          <Textarea2MathJax
            text={
              '兩不平行之平面 $E_1:a_1x+b_1y+c_1z+d_1=0$ 與 $E_2:a_2x+b_2y+c_2z+d_2=0$ 交於直線 $L$，過 $L$ 的平面有無限多個，可表為 $E_1+kE_2=0$。'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={24}>
        <Example num={7} ids={['17dc1265fe6', '17dc126ab0a']} />
        <Example num={8} ids={['17dc1280c68', '17da49b6ff7']} />
      </Page>
      <Page pageNum={25}>
        <Example num={9} ids={['17dc12836dd', '17dc128eaff']} />
        <Example num={10} ids={['17dc129f076', '17d895f3d08']} />
      </Page>
      <Page pageNum={26}>
        <Example num={11} ids={['17dc12a6e73', '17d895fb6de']} />
        <Example num={12} ids={['17da4a7a3d0', '17d898766c2']} />
      </Page>
    </div>
  );
};

export default C2S3PlaneEquation;

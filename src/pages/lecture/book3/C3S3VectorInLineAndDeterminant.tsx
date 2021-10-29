import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C3S3VectorInLineAndDeterminant = () => {
  return (
    <div>
      <Page pageNum={34}>
        <div className={style.head}>3 直線的向量性質與二階行列式(數A)</div>
        <Concept num={1} title="平面上直線的參數式與標準式">
          <div className={style.conceptHead}>方向向量與法向量</div>
          <Textarea2MathJax
            text={
              '坐標平面上一條直線 $L$，\n(1) 與 $L$ 平行的向量稱為 $L$ 的方向向量，習慣記為 $\\vector v$'
            }
          />
          <Textarea2MathJax
            text={'(2) 與 $L$ 垂直的向量稱為 $L$ 的法向量，習慣記為 $\\vector n$'}
          />
          <Textarea2MathJax text={'註：方向向量與法向量均不唯一，可長、可短、可反方向'} />
          <div className={style.conceptHead}>直線的參數式</div>
          <Textarea2MathJax
            text={
              '以 $(p,q)$ 為起點，方向向量為 $\\vector v=(a,b)$，可得到直線的參數式 $\\begin{cases}x=p+at\\\\y=q+bt\\end{cases}$，$t\\in\\mathbb{R}$'
            }
          />
          <Textarea2MathJax
            text={'(1) $t$ 稱為參數，可以當作搭捷運搭了 $t$ 站，不同的 $t$ 就是不同的位置'}
          />
          <Textarea2MathJax text={'(2) 把參數消掉即可得到直線的標準式\n　\n　\n　\n　\n'} />
          <div className={style.conceptHead}>直線的標準式</div>
          <Textarea2MathJax
            text={
              '(1) 直線方程式 $ax+by=k$ 又稱為標準式，其 $x$、$y$ 的係數正好是直線的法向量，也就是說，$(a,b)$ 為 $L$ 的法向量\n(2) 若已知法向量 $(a,b)$，可直接設直線方程式為 $ax+by=k$，再代線上的點求 $k$ 即可\n　\n'
            }
          />
          <Textarea2MathJax
            text={
              '★說明：直線 $L$ 的法向量為 $\\vector n=(a,b)$，且過點 $(p,q)$，線上任一點 $(x,y)$ 與 $(p,q)$ 之向量為 $(x-p,y-q)$，則 $(x-p,y-q)\\perp(a,b)$，內積可得 $a(x-p)+b(y-q)=0$，整理後可得 $ax+by=ap+bq=k$。\n　\n'
            }
          />
          <div className={style.conceptHead}>利用法向量求兩直線的夾角</div>
          <Textarea2MathJax
            text={
              '若直線 $L_1$ 與 $L_2$ 相交，則有銳交角與鈍交角，兩者互補。兩線夾角之一正好與法向量夾角相同，故可利用內積求兩法向量夾角，再進而得到兩線夾角。'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={35}>
        <Example num={1} ids={['17cbf56cfc4', '17cbf5861ce']} />
        <Example num={2} ids={['17cbf41f41a', '17cbf447c0a']} />
      </Page>
      <Page pageNum={36}>
        <Example num={3} ids={['17cbf431289', '17cbf45731c']} />
        <Example num={4} ids={['17cbf463043', '17cbf47810e']} />
      </Page>
      <Page pageNum={37}>
        <Example num={5} ids={['17cbf46b1c2', '17cbd7caa57']} />
        <Example num={6} ids={['17cbf48d2c1', '17cbf49a5ba']} />
      </Page>
      <Page pageNum={38}>
        <Concept num={2} title="二階行列式的定義與性質">
          <div className={style.conceptHead}>二階行列式的定義</div>
          <Textarea2MathJax text={'規定 $\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}=ad-bc$'} />
          <div className={style.conceptHead}>二階行列式的性質</div>
          <Textarea2MathJax text={'(1) 行列互換，其值不變。如：\n　\n'} />
          <Textarea2MathJax text={'(2) 兩行(列)對調，其值變號。如：\n　\n'} />
          <Textarea2MathJax text={'(3) 任一行(列)的公倍數可以提出。如：\n　\n'} />
          <Textarea2MathJax text={'(4) 將一行(列)乘一常數家到另一行(列)，其值不變。如：\n　\n'} />
          <Textarea2MathJax text={'(5) 若一行(列)的各項均為兩項之和，則可拆開乘兩個行列式相加'} />
        </Concept>
        <Example num={7} ids={['17cb58623b1', '17cb5880bef']} />
      </Page>
      <Page pageNum={39}>
        <Example num={8} ids={['17cb5892fa3', '17cb5889951']} />
        <Example num={9} ids={['17cb587126b', '17cb58a1214']} />
      </Page>
      <Page pageNum={40}>
        <Concept num={3} title="二階行列式的應用">
          <div className={style.conceptHead}>兩向量張成平行四邊形面積</div>
          <Textarea2MathJax
            text={
              '兩向量 $\\vector a=(x_1,y_1)$ 與 $\\vector b=(x_2,y_2)$ 夾角 $\\theta$，設張成的平行四邊形面積為 $A$， $A=|\\vector a||\\vector b|\\sin\\theta$，可推得 $A=\\sqrt{|\\vector a|^2|\\vector b|^2-(\\vector a\\cdot\\vector b)^2}=|\\begin{vmatrix}x_1&y_1\\\\x_2&y_2\\end{vmatrix}|$。將平行四邊形除以 $2$，即為張成的三角形面積。\n　\n　\n　\n　\n　\n　\n　\n　\n　\n'
            }
          />
          <div className={style.conceptHead}>克拉瑪公式</div>
          <Textarea2MathJax
            text={
              '聯立方程組 $\\begin{cases}a_1x+b_1y=c_1\\\\a_2x+b_2y=c_2\\end{cases}$，令 $\\Delta=\\begin{vmatrix}a_1&b_1\\\\a_2&b_2\\end{vmatrix}$，$\\Delta_x=\\begin{vmatrix}c_1&b_1\\\\c_2&b_2\\end{vmatrix}$，$\\Delta_y=\\begin{vmatrix}a_1&c_1\\\\a_2&c_2\\end{vmatrix}$，其解為 $x=\\dfrac{\\Delta_x}\\Delta$，$y=\\dfrac{\\Delta_y}\\Delta$\n　\n'
            }
          />
          <div className={style.conceptHead}>檢驗聯立方程組是否有解</div>
          <Textarea2MathJax
            text={
              '(1) 若恰有一組解，圖形為兩相交直線，斜率不同，即 $\\dfrac{a_1}{a_2}\\ne\\dfrac{b_1}{b_2}$'
            }
          />
          <Textarea2MathJax
            text={
              '(2) 若無解，圖形為兩平行直線，斜率相同但常數項不同，即 $\\dfrac{a_1}{a_2}=\\dfrac{b_1}{b_2}\\ne\\dfrac{c_1}{c_2}$'
            }
          />
          <Textarea2MathJax
            text={
              '(3) 若有無限多解，圖形為兩重合直線，兩方程式完全相同，即 $\\dfrac{a_1}{a_2}=\\dfrac{b_1}{b_2}=\\dfrac{c_1}{c_2}$'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={41}>
        <Example num={10} ids={['17cb58baac7', '17cb58ca778']} />
        <Example num={11} ids={['17cb58d636f', '17cb58fd401']} />
      </Page>
      <Page pageNum={42}>
        <Example num={12} ids={['17cb58e6f79', '17cb59128d1']} />
        <Example num={13} ids={['17cb592fec4', '17cb593b84a']} />
      </Page>
      <Page pageNum={43}>
        <Example num={14} ids={['17cb5958c97', '17cb5969c97']} />
        <Example num={15} ids={['17cb598a8c3', '17cb599d882']} />
      </Page>
    </div>
  );
};

export default C3S3VectorInLineAndDeterminant;

import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C2S4LineEquation = () => {
  return (
    <div>
      <Page pageNum={27}>
        <div className={style.head}>4 空間中的直線方程式</div>
        <Concept num={1} title="直線的參數式、比例式與兩面式">
          <div className={style.conceptHead}>方向向量</div>
          <Textarea2MathJax
            text={'在空間中，與直線 $L$ 平行的向量，稱為 $L$ 的方向向量，習慣記為 $\\vector v$。'}
          />
          <div className={style.conceptHead}>直線的參數式</div>
          <Textarea2MathJax
            text={
              '空間中以 $(x_0,y_0,z_0)$ 為起點，方向向量為 $(a,b,c)$ 的直線 $L$ 為 $\\begin{cases}x=x_0+at\\\\y=y_0+bt\\\\z=z_0=ct\\end{cases},t\\in\\mathbb R$，稱為直線的參數式。'
            }
          />
          <div className={style.conceptHead}>直線的比例式</div>
          <Textarea2MathJax
            text={
              '整理前一點的參數式，將 $t$ 獨立，即可推導出 $t=\\dfrac{x-x_0}a=\\dfrac{y-y_0}b=\\dfrac{z-z_0}c$，稱為直線 $L$ 的比例式，又稱對稱比例式。從比例式也可直接知道起點坐標與方向向量的資訊。'
            }
          />
          <div className={style.conceptHead}>直線的兩面式</div>
          <Textarea2MathJax
            text={
              '若兩平面 $E_1:a_1x+b_1y+c_1z=d_1$ 與 $E_2:a_2x+b_2y+c_z=d_2$ 相交於一直線 $L$，則可將直線 $L$ 寫成 $E_1$ 與 $E_2$ 的聯立，即 $\\begin{cases}a_1x+b_1y+c_1z=d_1\\\\a_2x+b_2y+c_2z=d_2\\end{cases}$，稱為 $L$ 的兩面式。將兩平面的法向量外積，即可得到直線 $L$ 的方向向量。可用加減消去法將兩面式化為參數式。'
            }
          />
        </Concept>
        <Example num={1} ids={['17de15c9102', '17de15c6538']} height="9.4cm" />
      </Page>
      <Page pageNum={28}>
        <Example num={2} ids={['17de15be8ea', '17de15e1197']} />
        <Example num={3} ids={['17de15fb5a1', '17de16567d1']} />
      </Page>
      <Page pageNum={29}>
        <Example num={4} ids={['17de1612952', '17de166b7a9']} height="23cm" />
      </Page>
      <Page pageNum={30}>
        <Example num={5} ids={['17de16755c1', '17de1690243']} />
        <Concept num={2} title="空間中直線與點、線、面的關係">
          <div className={style.conceptHead}>直線與平面的關係</div>
          <Textarea2MathJax
            text={
              '空間中直線 $L$ 的方向向量為 $\\vector v$，平面 $E$ 的法向量為 $\\vector n$，$L$ 與 $E$ 的相交情形有三種：\n(1) 若 $\\vector v$ 與 $\\vector n$ 不垂直，則 $L$ 與 $E$ 交於一點\n(2) 若 $\\vector v$ 與 $\\vector n$ 垂直，則 $L$ 與 $E$ 為線面平行或線在面上，可在直線 $L$ 上任取一點代入平面 $E$ 看是否成立，來判斷是哪一種情形\n　\n　\n　\n　\n'
            }
          />
          <div className={style.conceptHead}>點與直線的關係</div>
          <Textarea2MathJax
            text={
              '若希望求空間中點 $P$ 與直線 $L$ 之距離，並無特定公式，只要想法合理，就可以得到所求。'
            }
          />
          <div className={style.conceptHead}>兩直線的關係</div>
          <Textarea2MathJax
            text={
              '空間中兩相異直線 $L_1$ 與 $L_2$ 的關係有三種：平行、相交、歪斜。搭配示意圖並善用參數式，只要想法合理，無論是求距離、求坐標，皆可迎刃而解。'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={31}>
        <Example num={6} ids={['17de16a28d2', '17de16b7148']} />
        <Example num={7} ids={['17de16ace58', '17de16c06c9']} />
      </Page>
      <Page pageNum={32}>
        <Example num={8} ids={['17de16d5d48', '17de16eb8ab']} height="23cm" />
      </Page>
      <Page pageNum={33}>
        <Example num={9} ids={['17de17131ad', '17de170f9bd']} height="23cm" />
      </Page>
      <Page pageNum={34}>
        <Example num={10} ids={['17de172e612', '17de172c101']} height="23cm" />
      </Page>
      <Page pageNum={35}>
        <Example num={11} ids={['17de17c608b', '17de17de1db']} height="23cm" />
      </Page>
      <Page pageNum={36}>
        <Example num={12} ids={['17de17f8547', '17de17f52e3']} height="23cm" />
      </Page>
    </div>
  );
};

export default C2S4LineEquation;

import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C3S2InnerProductOfVector = () => {
  return (
    <div>
      <Page pageNum={20}>
        <div className={style.head}>2 平面向量的內積</div>
        <Concept num={1} title="向量內積的定義與性質">
          <div className={style.conceptHead}>內積定義</div>
          <Textarea2MathJax
            text={'向量 $\\vector a$ 與 $\\vector b$ 的夾角為 $\\theta$，定義兩項量的內積為'}
          />
          <Textarea2MathJax
            text={'(1) 夾角 $\\theta$ 為兩向量 $\\vector a$ 與 $\\vector b$ 共起點之夾角'}
          />
          <Textarea2MathJax
            text={
              '(2) 符號 $\\vector a\\cdot\\vector b$ 讀作「$\\vector a$ 內積 $\\vector b$」或「$\\vector a$ dot $\\vector b$」，不是「$\\vector a$ 乘 $\\vector b$」。中間的符號「$\\cdot$」不可以省略，也不可以寫成「$\\times$」，而 $\\vector a\\cdot\\vector a$ 不可以寫成 $\\vector a^2$'
            }
          />
          <div className={style.conceptHead}>內積的圖形意義</div>
          <Textarea2MathJax
            text={
              '向量內積 $\\vector a\\cdot\\vector b=|\\vector a||\\vector b|\\cos\\theta$，稱 $|\\vector a|\\cos\\theta$ 為「$\\vector a$ 在 $\\vector b$ 上的影子」，則 $\\vector a\\cdot\\vector b$ 可視為 $|\\vector b$| 乘「$\\vector a$ 的影子長」，同理，也可以為 $|\\vector a$| 乘「$\\vector b$ 的影子長」，再考慮同向為正、反向為負。\n　\n　\n　\n　\n　\n　\n'
            }
          />
          <div className={style.conceptHead}>內積的坐標算法</div>
          <Textarea2MathJax
            text={
              '若 $\\vector a=(x_1,y_1)$，$\\vector b=(x_2,y_2)$，則向量內積 $\\vector a\\cdot\\vector b=$\n　\n　\n　\n　\n　\n　\n　\n'
            }
          />
          <div className={style.conceptHead}>內積的性質</div>
          <Textarea2MathJax
            text={
              '(1) 交換律：$\\vector a\\cdot\\vector b=\\vector b\\cdot\\vector a$\n(2) 分配律：$(\\vector a+\\vector b)\\cdot\\vector c=\\vector a\\cdot\\vector c+\\vector b\\cdot\\vector c$\n(3) 正定性：$\\vector a\\cdot\\vector a=|\\vector a|^2$，因為地板長和影子長一樣為 $|\\vector a|$\n(4) 係數積的結合律：$(x\\vector a)\\cdot(y\\vector b)=(xy)\\vector a\\cdot\\vector b$'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={21}>
        <Example num={1} ids={['17c922a5dea', '17c922f5425']} />
        <Example num={2} ids={['17c922d58eb', '17c92316f9e']} />
      </Page>
      <Page pageNum={22}>
        <Example num={3} ids={['17c922bf1a6', '17c923047dd']} />
        <Example num={4} ids={['17c92363d6f', '17c9237763c']} />
      </Page>
      <Page pageNum={23}>
        <Example num={5} ids={['17c9235066d', '17c923aa4be']} />
        <Example num={6} ids={['17c923c0b82', '17c92425fed']} />
      </Page>
      <Page pageNum={24}>
        <Example num={7} ids={['17c923c9fee', '17c92607d70']} height="14cm" />
        <Concept num={2} title="向量內積的應用－夾角">
          <div className={style.conceptHead}>向量的夾角</div>
          <Textarea2MathJax
            text={
              '(1) $\\vector a$ 與 $\\vector b$ 的夾角為 $\\theta$，可利用內積定義 $\\vector a\\cdot\\vector b=|\\vector a||\\vector b|\\cos\\theta$ 求 $\\theta$\n(2) 因為 $\\cos90\\degree=0$，所以'
            }
          />
          <div className={style.conceptHead}>找垂直的向量</div>
          <Textarea2MathJax
            text={
              '當兩向量互相垂直時，內積為 $0$，利用這個概念，若要找一個與向量 $\\vector a=(p,q)$ 垂直的向量，可為 $(-q,p)$ 或 $(q,-p)$，方法：$x$、$y$ 對調再擇一變號。'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={25}>
        <Example num={8} ids={['17c9264b427', '17c9265f99f']} />
        <Example num={9} ids={['17c9266f664', '17c92677001']} />
      </Page>
      <Page pageNum={26}>
        <Example num={10} ids={['17c72eae50f', '17c6f759d67']} />
        <Example num={11} ids={['17c6f72cb2e', '17c6f79722a']} />
      </Page>
      <Page pageNum={27}>
        <Example num={12} ids={['17c6f904640', '17c6f99c610']} />
        <Example num={13} ids={['17c6f95b5b1', '17c6fd7598e']} />
      </Page>
      <Page pageNum={28}>
        <Concept num={3} title="向量內積的應用－正射影">
          <div className={style.conceptHead}>向量的正射影</div>
          <Textarea2MathJax
            text={
              '設點 $C$ 投影到 $\\overleftrightarrow{AB}$ 的垂足點為 $H$，則稱 $\\xvector{AH}$ 為 $\\xvector{AC}$ 在 $\\xvector{AB}$ 上的正射影。可以想像 $\\xvector{AB}$ 是一顆飛行中的鳥，而其投射在地面的影子向量 $\\xvector{AH}$ 即為正射影。\n　\n　\n　\n　\n　\n'
            }
          />
          <div className={style.conceptHead}>求正射影</div>
          <Textarea2MathJax
            text={
              '(1) 一定要畫示意圖\n(2) 利用內積的圖形意義，地板長乘影子長，可得關係式：$\\xvector{AC}\\cdot\\xvector{AB}=\\xvector{AH}\\cdot\\xvector{AB}$'
            }
          />
        </Concept>
        <Example num={14} ids={['17c6fdc3a65', '17c6fe8418e']} height="13.5cm" />
      </Page>
      <Page pageNum={29}>
        <Example num={15} ids={['17c6fe02cb9', '17c6fe40782']} />
        <Concept num={4} title="向量內積的應用－柯西不等式 (數A)">
          <div className={style.conceptHead}>柯西不等式</div>
          <Textarea2MathJax
            text={
              '固定長度的兩向量 $\\vector a$ 與 $\\vector b$，其夾角可為任意角，像是時鐘的長針與短針，柯西不等式在於探討 $\\vector a\\cdot\\vector b$ 的範圍：\n　\n　\n　\n　\n　\n　\n'
            }
          />
          <div className={style.conceptHead}>解柯西不等式</div>
          <Textarea2MathJax
            text={
              '解柯西的極值問題，技巧在於找到兩個適合的向量來代柯西，原則上可以先從「二次式」下手，再用內積湊「一次式」。'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={30}>
        <Example num={16} ids={['17c7014e9de', '17c7015680d']} />
        <Example num={17} ids={['17c6fff8dfc', '17c7015bcca']} />
      </Page>
      <Page pageNum={31}>
        <Example num={18} ids={['17c70160fae', '17c701670d0']} />
        <Concept num={5} title="外心與垂心 (數A)">
          <div className={style.conceptHead}>外心</div>
          <img
            style={{ float: 'right', width: '4cm' }}
            alt=""
            role="presentation"
            src="/toliman/images/外心.PNG"
          />
          <Textarea2MathJax
            text={
              '外心為三角形的三條　　　　交點，常用 $O$ 作為代號，利用內積的圖形意義，地板長乘影子長，可得到如下關係：\n$\\begin{cases}\\xvector{AO}\\cdot\\xvector{AB}=\\frac12\\overline{AB}^2\\\\\\xvector{AO}\\cdot\\xvector{AC}=\\frac12\\overline{AC}^2\\end{cases}$'
            }
          />
          <div className={style.conceptHead}>垂心</div>
          <img
            style={{ float: 'right', width: '4cm' }}
            alt=""
            role="presentation"
            src="/toliman/images/垂心.PNG"
          />
          <Textarea2MathJax
            text={
              '垂心為三角形的三條　　　　交點，常用 $H$ 作為代號，利用內積的圖形意義，地板長乘影子長，可得到如下關係：\n$\\xvector{AH}\\cdot\\xvector{AB}=\\xvector{AH}\\cdot\\xvector{AC}=\\xvector{AB}\\cdot\\xvector{AC}$'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={32}>
        <Example num={19} ids={['17cbf3b2a7d', '17cbf3df5b9']} height="23cm" />
      </Page>
      <Page pageNum={33}>
        <Example num={20} ids={['17cbf396729', '17cbf3bea31']} height="23cm" />
      </Page>
    </div>
  );
};

export default C3S2InnerProductOfVector;

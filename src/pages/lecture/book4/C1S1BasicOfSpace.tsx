import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C1S1BasicOfSpace = () => (
  <div>
    <Page pageNum={1}>
      <div className={style.head}>1 空間中的點線面</div>
      <Concept num={1} title="空間中點線面的關係">
        <div className={style.conceptHead}>決定一條直線</div>
        <div>滿足下列任一條件，即可決定空間中的一條直線</div>
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>決定一個平面</div>
        <div>滿足下列任一條件，即可決定空間中的一個平面</div>
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>平面與平面的關係</div>
        <div>(兩種)</div>
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>直線與直線的關係</div>
        <div>(三種)</div>
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>直線與平面的關係</div>
        <div>(三種)</div>
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>直線與平面垂直</div>
        <div>如何說明直線與平面垂直？</div>
      </Concept>
    </Page>
    <Page pageNum={2}>
      <Example num={1} ids={['17d88b3c86d', '17d88b52dbe']} showAnswer={false} />
      <Example num={2} ids={['17d6a825eda', '17d88b9aed4']} />
    </Page>
    <Page pageNum={3}>
      <Example num={3} ids={['17d8d7b03c9', '17d71439e96']} />
      <Example num={4} ids={['17d8d7b59f6', '17d8d7c54c2']} />
    </Page>
    <Page pageNum={4}>
      <Concept num={2} title="三垂線定理與兩面角">
        <div style={{ float: 'right' }}>
          <img
            src={'/toliman/images/三垂線定理.PNG'}
            style={{ width: '5.5cm' }}
            alt=""
            role="presentation"
          />
        </div>
        <div className={style.conceptHead}>三垂線定理</div>
        <div>
          {'空間中一點 $P$、一平面 $E$ 及平面上一直線 $L$，'}
          <br />
          {'(1) $P$ 投影到平面 $E$ 為 $A$ 點，$\\overline{PA}\\perp E$ (第一個垂直)'}
          <br />
          {'(2) $A$ 投影到直線 $L$ 為 $B$ 點，$\\overline{AB}\\perp L$ (第二個垂直)'}
          <br />
          {'則 $\\overline{PB}\\perp L$ (第三個垂直)'}
        </div>
        <br />
        <div className={style.conceptHead}>二面角</div>
        <div>
          {'兩個半平面之間的夾角稱為二面角。畫出二面角之步驟：'}
          <br />
          {'(1) 找出兩個半平面之交線'}
          <br />
          {'(2) 分別在兩個半平面上作垂直交線的線'}
          <br />
          {'(3) 兩線夾角即為兩面角'}
        </div>
        <br />
        <div className={style.conceptHead}>柱體與錐體體積</div>
        <div>
          {'(1) 柱體：設底面積為 $a$，高為 $h$，則體積為 $ah$'}
          <br />
          {'(2) 錐體：設底面積為 $a$，高為 $h$，則體積為 $\\dfrac13ah$'}
        </div>
      </Concept>
      <Example num={5} ids={['17d8d7dad53', '17d8d840de1']} height="8cm" />
    </Page>
    <Page pageNum={5}>
      <Example num={6} ids={['17d8d837c81', '17d8d84a410']} height="20cm" />
    </Page>
    <Page pageNum={6}>
      <Example num={7} ids={['17d8d86a6fc', '17d8d85c7f9']} />
      <Example num={8} ids={['17d8d87a040', '17d8d89ad01']} />
    </Page>
    <Page pageNum={7}>
      <Example num={9} ids={['17d8d8e148a', '17d8d8f066a']} height="20cm" />
    </Page>
    <Page pageNum={8}>
      <Example num={10} ids={['17d8d912392', '17d8d91d87a']} height="20cm" />
    </Page>
  </div>
);

export default C1S1BasicOfSpace;

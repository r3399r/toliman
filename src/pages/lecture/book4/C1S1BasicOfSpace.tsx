import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';

const C1S1BasicOfSpace = () => {
  return (
    <div>
      <div className={style.head}>1 空間中的點線面</div>
      <Concept num={1} title="空間中點線面的關係">
        <div className={style.conceptHead}>決定一條直線</div>
        <div>
          滿足下列任一條件，即可決定空間中的一條直線
          <br />
          (1)
          <br />
          (2)
        </div>
        <div className={style.conceptHead}>決定一個平面</div>
        <div>
          滿足下列任一條件，即可決定空間中的一個平面
          <br />
          (1)
          <br />
          (2)
          <br />
          (3)
          <br />
          (4)
        </div>
        <div className={style.conceptHead}>平面與平面的關係</div>
        <div>
          空間中兩相異平面的關係必為：
          <br />
          (1)
          <br />
          (2)
        </div>
        <div className={style.conceptHead}>直線與直線的關係</div>
        <div>
          空間中兩相異直線的關係必為：
          <br />
          (1)
          <br />
          (2)
          <br />
          (3)
        </div>
        <div className={style.conceptHead}>直線與平面的關係</div>
        <div>
          空間中一直線與一平面的關係必為：
          <br />
          (1)
          <br />
          (2)
          <br />
          (3)
        </div>
        <div className={style.conceptHead}>直線與平面垂直</div>
        <div>如何說明直線與平面垂直？</div>
      </Concept>
      <Example num={1} ids={['17d88b3c86d', '17d88b52dbe']} showAnswer={false} />
      <Example num={2} ids={['17d6a825eda', '17d88b9aed4']} />
      <Example num={3} ids={['17d8d7b03c9', '17d71439e96']} />
      <Example num={4} ids={['17d8d7b59f6', '17d8d7c54c2']} />
      <Concept num={2} title="三垂線定理與兩面角">
        <div className={style.conceptHead}>三垂線定理</div>
        <Textarea2MathJax
          text={
            '空間中一點 $A$、一平面 $E$ 及平面上一直線 $L$，\n(1) $A$ 投影到平面 $E$ 為 $B$ 點，$\\overline{AB}\\perp E$ (第一個垂直)\n(2) $B$ 投影到直線 $L$ 為 $C$ 點，$\\overline{BC}\\perp L$ (第二個垂直)\n則 $\\overline{AC}\\perp L$ (第三個垂直)'
          }
        />
        <div className={style.conceptHead}>二面角</div>
        <Textarea2MathJax
          text={
            '兩個半平面之間的夾角稱為二面角。畫出二面角之步驟：\n(1) 找出兩個半平面之交線\n(2) 分別在兩個半平面上作垂直交線的線\n(3) 兩線夾角即為兩面角'
          }
        />
        <div className={style.conceptHead}>柱體與錐體體積</div>
        <Textarea2MathJax
          text={
            '(1) 柱體：設底面積為 $a$，高為 $h$，則體積為 $ah$\n(2) 錐體：設底面積為 $a$，高為 $h$，則體積為 $\\frac13ah$'
          }
        />
      </Concept>
      <Example num={5} ids={['17d8d7dad53', '17d8d840de1']} />
      <Example num={6} ids={['17d8d837c81', '17d8d84a410']} />
      <Example num={7} ids={['17d8d86a6fc', '17d8d85c7f9']} />
      <Example num={8} ids={['17d8d87a040', '17d8d89ad01']} />
      <Example num={9} ids={['17d8d8e148a', '17d8d8f066a']} />
      <Example num={10} ids={['17d8d912392', '17d8d91d87a']} />
      <Example num={11} ids={['17d8d932da9', '17d8d990529']} />
    </div>
  );
};

export default C1S1BasicOfSpace;

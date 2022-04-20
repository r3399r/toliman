import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C4S1SystemOfEquations = () => {
  return (
    <MathJax>
      <div className={style.head}>1 聯立方程組的矩陣表達 (數A)</div>
      <Concept num={1} title="加減消去法與解的情形">
        <div className={style.conceptHead}>聯立方程組</div>
        <div>
          多個方程式排列在一起，並搭配「聯立」符號，稱為聯立方程組，其解為各圖形的「交集」。
        </div>
        <div className={style.conceptHead}>二元一次聯立方程組</div>
        <div>二元一次方程式的圖形為　　　　，兩個二元一次方程式能夠形成的情形：</div>
        <div>(1) 相交：　　　　　　　　　　(2) 平行：　　　　　　　　　　(3) 重合：</div>
        <br />
        <br />
        <div className={style.conceptHead}>三元一次聯立方程組</div>
        <div>三元一次方程式的圖形為　　　　，三個三元一次方程式能夠形成的情形：</div>
        <div>
          (1) 三面重合：　　　　　　　　(2) 兩面重合與另一面相交：　　(3) 兩面重合與另一面平行：
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          (4) 三面平行：　　　　　　　　(5) 兩面平行與另一面相交：　　(6) 三面相交於一直線：
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>(7) 兩兩相交且三交線平行：　　(8) 三面相交於一點：</div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </Concept>
      <Example num={1} ids={['17de193b9a5', '17de194a703']} />
      <Concept num={2} title="增廣矩陣與列運算求解">
        <div className={style.conceptHead}>係數矩陣與增廣矩陣</div>
        <div>把一次聯立方程組的未知數 $x$、$y$、$z$ 的所有係數寫出，就是係數矩陣。</div>
        <div>把一次聯立方程組的的各項係數(連同常數項)寫出，就是增廣矩陣。</div>
        <div className={style.conceptHead}>列運算</div>
        <div>以整條「橫列」為單位，任選一列，可以乘上常數加到另一列，稱為列運算。</div>
        <div className={style.conceptHead}>增廣矩陣作列運算求解</div>
        <div>列運算前後的兩個增廣矩陣，其解必定相同，其原因須搭配第 2 節才能加以說明。</div>
      </Concept>
      <Example num={1} ids={['17de193b9a5', '17de194a703']} />
    </MathJax>
  );
};

export default C4S1SystemOfEquations;

import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C4S3InverseAndTransition = () => {
  return (
    <MathJax>
      <div className={style.head}>3 反方陣與轉移方陣</div>
      <Concept num={1} title="反方陣及其性質">
        <div className={style.conceptHead}>反方陣</div>
        <div>
          對一個 $n$ 階方陣 $A$，若可找到唯一的 $n$ 階方陣 $B$ 滿足 $AB=BA=I$，稱 $A$
          為可逆方陣，$B$ 為 $A$ 的反方陣，記為 $A^{-1}$。
        </div>
        <div className={style.conceptHead}>二階反方陣的求法</div>
        <div>
          1. 列運算
          <br />
          2. 背公式: 設 {'$A=\\begin{bmatrix}p&q\\\\r&s\\end{bmatrix}$'}，若 $\det(A)=ps-qr\ne0$，則{' '}
          {'$A^{-1}=\\frac1{\\det(A)}\\begin{bmatrix}s&-q\\\\-r&p\\end{bmatrix}$'}
          <br />
          由公式可知，反方陣存在的條件為：
        </div>
      </Concept>
      <Example num={1} ids={['17de193b9a5', '17de194a703']} />
      <Concept num={2} title="轉移方陣 (數A)">
        <div className={style.conceptHead}>轉移方陣</div>
        <div>
          $n$ 階方陣的各元均為非負實數，且任一行的各元之和都是 $1$。例如：
          {'$\\begin{bmatrix}1&0.3\\\\0&0.7\\end{bmatrix}$'}、
          {'$\\begin{bmatrix}0.5&0&0.1\\\\0.5&0&0.3\\\\0&1&0.6\\end{bmatrix}$'}
        </div>
        <div className={style.conceptHead}>轉移方陣的涵義</div>
        <div>
          轉移方陣代表一段時間或一次操作後，不同狀態的數量變化，這個變化具備兩個特徵，一為總和維持不變，一為各變量是前一階段全體變量的一次函數。把轉移方陣乘上初始狀態行矩陣，則所得的乘積代表經過一個階段或一次操作後，不同結果的數量分布。請藉由實際題目做練習、體會。
        </div>
        <div className={style.conceptHead}>穩定態</div>
        <div>
          當狀態經過很長一段時間或無數次操作後，其狀態會趨近於一個固定的行矩陣，稱其為穩定態。觀念類似於理化的「動態平衡」。
        </div>
      </Concept>
      <Example num={1} ids={['17de193b9a5', '17de194a703']} />
    </MathJax>
  );
};

export default C4S3InverseAndTransition;

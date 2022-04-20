import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C4S2MatrixOperation = () => {
  return (
    <MathJax>
      <div className={style.head}>2 矩陣的四則運算</div>
      <Concept num={1} title="矩陣的表示、加減法與係數積">
        <div className={style.conceptHead}>矩陣與元素</div>
        <div>
          $m$ 列 $n$ 行的數組，由中括號括起來，稱為 「$m\times n$ 階矩陣」。
          <br />
          其中，組成矩陣的成員稱為「元素」，第 $i$ 列第 $j$ 行的元素稱為「第 $(i,j)$ 元」。
        </div>
        <div className={style.conceptHead}>方陣</div>
        <div>$n$ 列 $n$ 行的矩陣，稱為 「$n$ 階方陣」。</div>
        <div className={style.conceptHead}>矩陣的相等</div>
        <div>若矩陣 $A$ 與 $B$ 的階數相同，且對應元素都相等，記為 $A=B$。</div>
        <div className={style.conceptHead}>矩陣的加減</div>
        <div>兩個階數相同的矩陣可以相加減，為各對應元素的相加減。</div>
        <div className={style.conceptHead}>矩陣的係數積</div>
        <div>矩陣 $A$ 的 $k$ 倍，為各元素都乘以 $k$，記為 $kA$。特例：$1A=A$、$(-1)A=-A$。</div>
        <div className={style.conceptHead}>零矩陣</div>
        <div>$m\times n$ 階矩陣中所有的元素都是 $0$，稱為零矩陣，記為 {'$O_{m\\times n}$'}。</div>
      </Concept>
      <Example num={1} ids={['17de193b9a5', '17de194a703']} />
      <Concept num={2} title="矩陣的乘法及其性質">
        <div className={style.conceptHead}>矩陣的乘法</div>
        <div>
          作法是「先列後行」，跟階數的數法順序一樣，每次將對應元的乘積相加，可以得到矩陣乘積的一個元素。請多透過實際題目練習。
        </div>
        <div className={style.conceptHead}>矩陣乘法的條件</div>
        <div>由矩陣的階數即可判斷兩矩陣是否能夠相乘，也能夠判斷相乘結果之階數，條件為：</div>
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>單位方陣</div>
        <div>
          主對角線(左上至右下)全為 $1$，其他全為 $0$ 的 $n$ 階方陣，稱為「$n$ 階單位方陣」，記為
          $I_n$。無論將單位方陣左乘或右乘，結果都會和原矩陣相同，就像是數字乘上 $1$ 一樣。
        </div>
        <div className={style.conceptHead}>矩陣乘法的性質</div>
        <div>
          1. 係數結合律： $(mA)(nB)=(mn)AB$
          <br />
          2. 結合律: $(AB)C=A(BC)$
          <br />
          3. 左分配律: $A(B+C)=AB+AC$
          <br />
          4. 右分配律: $(A+B)C=AC+BC$
        </div>
        <div className={style.conceptHead}>矩陣乘法不一定成立的性質</div>
        <div>
          1. 交換律: $AB\ne BA$
          <br />
          2. 消去律: $AB=AC\nRightarrow B=C$
        </div>
      </Concept>
      <Example num={1} ids={['17de193b9a5', '17de194a703']} />
    </MathJax>
  );
};

export default C4S2MatrixOperation;

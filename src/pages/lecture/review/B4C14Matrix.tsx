import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';

const B4C14Matrix = () => {
  return (
    <div>
      <div className={style.head}>Ch14 矩陣</div>
      <Concept num={1} title="矩陣的元與階數">
        <Textarea2MathJax
          text={
            '矩陣為中括號內 $m$ 列 $n$ 行的數字組，並稱 $m\\times n$ 為矩陣的「階數」。而 $n\\times n$ 階的矩陣會稱為「$n$ 階方陣」。矩陣中第 $i$ 列第 $j$ 行的數值稱為「第 $(i,j)$ 元」。'
          }
        />
      </Concept>
      <Exercise ids={['17ce407e041', '17ce408fc10']} />
      <Concept num={2} title="利用列運算解聯立方程式">
        <Textarea2MathJax
          text={
            '未知數的係數即常數所組成的矩陣稱為增廣矩陣，將增廣矩陣有系統地使用列運算可解出未知數，解會有以下三種情況：\n(1) 唯一解 $\\begin{bmatrix}1&0&0&a\\\\0&1&0&b\\\\0&0&1&c\\end{bmatrix}$ (2) 無解 $\\begin{bmatrix}0&0&0&k\\ne0\\end{bmatrix}$ (3) 無限多解 $\\begin{bmatrix}0&0&0&0\\end{bmatrix}$'
          }
        />
      </Concept>
      <Exercise ids={['17ce40ae751', '17ce40c83ce']} />
      <Concept num={3} title="矩陣的相等、加減與係數積">
        <Textarea2MathJax
          text={
            '同階數的矩陣 $A$ 與 $B$，若各元對應相等則 $A=B$。同階數的矩陣才可以加減，矩陣 $A$ 的每一元乘上常數 $r$ 即為 $rA$。'
          }
        />
      </Concept>
      <Exercise ids={['17ce40d9768', '17ce40fb208']} />
      <Concept num={4} title="矩陣的相乘">
        <Textarea2MathJax
          text={
            '$n\\times r$ 階矩陣可乘上 $r\\times k$ 階矩陣，得到 $n\\times k$ 階矩陣。請由實際操作中學習如何運算。'
          }
        />
      </Concept>
      <Exercise ids={['17ce410b897', '17ce412dcb2']} />
      <Concept num={5} title="二階反方陣">
        <Textarea2MathJax
          text={
            '設方陣 $A=\\begin{bmatrix}p&q\\\\r&s\\end{bmatrix}$，規定 $\\det(A)=\\begin{vmatrix}p&q\\\\r&s\\end{vmatrix}$，若 $\\det(A)\\ne0$，則 $A$ 有乘法反方陣 $A^{-1}=\\frac1{\\det(A)}\\begin{bmatrix}s&-q\\\\-r&p\\end{bmatrix}$，滿足 $AA^{-1}=A^{-1}A=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$，稱 $I_2=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}$ 為單位方陣。'
          }
        />
      </Concept>
      <Exercise ids={['17ce4148e4f', '17ce4154725']} />
      <Concept num={6} title="矩陣運算的性質">
        <Textarea2MathJax
          text={
            '(1) 結合律：$(A+B)+C=A+(B+C)$、$(AB)C=A(BC)$\n(2) 分配律：$A(B+C)=AB+AC$、$(A+B)C=AC+BC$\n(3) 交換律：$A+B=B+A$、$AB\\ne BA$ (一般矩陣沒有乘法交換律)'
          }
        />
      </Concept>
      <Exercise ids={['17ce4166477', '17ce4181410']} />
      <Concept num={7} title="平面的線性轉換">
        <Textarea2MathJax
          text={
            '平面的點 $(x,y)$ 寫成行矩陣，則二階方陣 $A$ 乘 $\\begin{bmatrix}x\\\\y\\end{bmatrix}$ 的結果代表點 $(x,y)$ 經方陣 $A$ 變換所得的「像」，稱為線性變換。平面上的直線經線性變換後，其圖形必為直線或一點，而封閉區域的圖形經 $A$ 變換後，新圖形的面積為原面積乘上 $|\\det(A)|$。'
          }
        />
      </Concept>
      <Exercise ids={['17ce41af316']} />
      <Concept num={8} title="特殊的線性轉換 (數A)">
        <Textarea2MathJax
          text={
            '(1) 旋轉方陣：$\\begin{bmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{bmatrix}$ 可把點 $(x,y)$ 逆時針繞原點旋轉 $\\theta$。'
          }
        />
        <Textarea2MathJax
          text={
            '(2) 鏡射方陣：$\\begin{bmatrix}\\cos2\\theta&\\sin2\\theta\\\\\\sin2\\theta&-\\cos2\\theta\\end{bmatrix}$ 把點 $(x,y)$ 對直線 $y=\\tan\\theta\\cdot x$ 鏡射。'
          }
        />
        <Textarea2MathJax
          text={
            '(3) 伸縮方陣：$\\begin{bmatrix}a&0\\\\0&b\\end{bmatrix}$ 把點 $(x,y)$ 以 $x$ 軸為準左右伸縮為 $a$ 倍，再以 $y$ 軸為準上下伸縮為 $b$ 倍。'
          }
        />
        <Textarea2MathJax
          text={
            '(4) 推移方陣：$\\begin{bmatrix}1&k\\\\0&1\\end{bmatrix}$ 把點 $(x,y)$ 朝 $x$ 軸方向推移 $y$ 坐標的 $k$ 倍；而 $\\begin{bmatrix}1&0\\\\k&1\\end{bmatrix}$ 把點 $(x,y)$ 朝 $y$ 軸方向推移 $x$ 坐標的 $k$ 倍。'
          }
        />
      </Concept>
      <Exercise ids={['17ce41d7778', '17ce41ee1d6']} />
      <Concept num={9} title="轉移矩陣 (數A)">
        <Textarea2MathJax
          text={
            '(1) 行矩陣序列：若序列 $\\begin{bmatrix}a_1\\\\b_1\\end{bmatrix}$、$\\begin{bmatrix}a_2\\\\b_2\\end{bmatrix}$、$\\begin{bmatrix}a_3\\\\b_3\\end{bmatrix}$、... 的前後關係滿足 $\\begin{cases}a_{n+1}=pa_n+qb_n\\\\b_{n+1}=ra_n+sb_n\\end{cases}$，則可表為 $\\begin{bmatrix}a_{n+1}\\\\b_{n+1}\\end{bmatrix}=\\begin{bmatrix}p&q\\\\r&s\\end{bmatrix}=\\begin{bmatrix}a_n\\\\b_n\\end{bmatrix}$，相當於行矩陣的遞迴關係。'
          }
        />
        <Textarea2MathJax
          text={
            '(2) 轉移矩陣：各元均非負，且任意行的元素和均為 $1$ 的矩陣，稱為轉移矩陣。若 $A$ 與 $B$ 為轉移矩陣，則 $AB$ 也是轉移矩陣。轉移矩陣可用於計算每個階段各種狀態的機率分布。'
          }
        />
      </Concept>
      <Exercise ids={['17ce42281ee', '17ce4249a61']} />
      <Example num={1} ids={['17ce8eb133f', '17ce8edc471']} />
      <Example num={2} ids={['17ce8ef7479', '17ce8f0c2a5']} />
      <Example num={3} ids={['17ce8f3435f', '17ce8f4743b']} />
      <Example num={4} ids={['17ce8f5a3d0', '17ce8f75d11']} />
      <Example num={5} ids={['17ce8f8f1d1', '17ce8fa11a1']} />
      <Example num={6} ids={['17ce8fc69b2', '17ce8fdee76']} />
      <Example num={7} ids={['17ce905c7c2', '17ce9083c89']} />
    </div>
  );
};

export default B4C14Matrix;

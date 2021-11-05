import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';

const B4C13Probability = () => {
  return (
    <div>
      <div className={style.head}>Ch13 條件機率</div>
      <Concept num={1} title="條件機率">
        <Textarea2MathJax
          text={
            '樣本空間 $S$ 中若 $B$ 事件已發生，則 $A$ 事件發生的機率記為 $P(A|B)=\\frac{P(A\\cap B)}{P(B)}=\\frac{n(A\\cap B)}{n(B)}$，也就是把樣本空間由 $S$ 縮小為 $B$。'
          }
        />
      </Concept>
      <Exercise ids={['17ce3f576c5', '17ce3f6c2d5']} />
      <Concept num={2} title="乘法法則">
        <Textarea2MathJax
          text={
            '由條件機率的定義 $P(A|B)=\\frac{P(A\\cap B)}{P(B)}$ 可得 $P(A\\cap B)=P(B)\\times P(A|B)$，常用來計算 $A$、$B$ 同時發生的機率。計算上不用想那麼多，依照題目情境連續乘法即可。'
          }
        />
      </Concept>
      <Exercise ids={['17ce3f81aec', '17ce3fc357b']} />
      <Concept num={3} title="貝式定理">
        <Textarea2MathJax text={'貝式定理為針對事件討論各個分支的條件機率，習慣用樹狀圖來求解。'} />
      </Concept>
      <Exercise ids={['17ce3fe7511', '17ce40003b8']} />
      <Concept num={4} title="獨立事件">
        <Textarea2MathJax
          text={
            '(1) 若 $P(A\\cap B)=P(A)\\times P(B)$，稱 $A$ 與 $B$ 互為「獨立事件」，表示 $A$ 發生與否不影響 $B$ 發生的機率'
          }
        />
        <Textarea2MathJax
          text={'(2) 若 $P(A\\cap B)\\ne P(A)\\times P(B)$，稱 $A$ 與 $B$ 互為「相關事件」'}
        />
        <Textarea2MathJax
          text={
            '(3) 若 $P(A\\cap B\\cap C)=P(A)\\times P(B)\\times P(C)$，則 $A$、$B$、$C$ 兩兩獨立'
          }
        />
      </Concept>
      <Exercise ids={['17ce4028079', '17ce403fad3']} />
      <Example num={1} ids={['17ce8905a88', '17ce890d760']} />
      <Example num={2} ids={['17ce3bda0e7', '17ce8929835']} />
      <Example num={3} ids={['17ce8932351', '17ce895b00c']} />
      <Example num={4} ids={['17ce896e624', '17ce8979f50']} />
      <Example num={5} ids={['17ce8984597', '17ce89935b2']} />
      <Example num={6} ids={['17ce899d5d0', '17ce89a6df4']} />
    </div>
  );
};

export default B4C13Probability;

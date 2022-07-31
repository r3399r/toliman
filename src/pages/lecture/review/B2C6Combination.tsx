import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';
import Page from 'src/pages/lecture/component/Page';

const B2C6Combination = () => (
  <MathJax>
    <Page pageNum={16}>
      <div className={style.head}>Ch6 排列組合與機率</div>
      <Concept num={1} title="敘述的否定、且與或">
        <div>
          {
            "(1) 可判定真偽的語句稱為「敘述」，敘述 $P$ 的否定為 $P'$。兩個敘述 $P$、$Q$ 可用「且」與「或」連接，當 $P$、$Q$ 皆真時「$P$ 且 $Q$」才真；當 $P$、$Q$ 皆偽時「$P$ 或 $Q$」才偽。"
          }
        </div>
        <div>{"(2) 「$P$ 且 $Q$」的否定為「$P'$ 或 $Q'$」"}</div>
        <div>{"(3) 「$P$ 或 $Q$」的否定為「$P'$ 且 $Q'$」"}</div>
      </Concept>
      <Exercise ids={['17abc66d799', '17abc680e3a']} />
      <Concept num={2} title="充分條件與必要條件">
        <div>
          {
            '(1) 推論「若 $P$ 則 $Q$」若成立，可記為「$P\\Rightarrow Q$」，稱 $P$ 為 $Q$ 的充分條件，$Q$ 為 $P$ 的必要條件。若 $P$ 與 $Q$ 可互推，記為 $P\\Leftrightarrow Q$，稱 $P$、$Q$ 互為充要條件 (充分且必要)。'
          }
        </div>
        <div>{'(2) 若要說明「$P\\Rightarrow Q$」不成立，只要舉反例即可。'}</div>
        <div>{"(3) 「若 $P$ 則 $Q$」與「若 $Q'$ 則 $P'$」同義。"}</div>
      </Concept>
      <Exercise ids={['17abc6e3561']} />
    </Page>
    <Page pageNum={17}>
      <Concept num={3} title="屬於與包含" height="2.5cm">
        <div>{'(1) 若 $p$ 是集合 $A$ 的元素，記為 $p$　　$A$'}</div>
        <div>{'(2) 集合 $A$ 的每個元素都在集合 $B$ 內，則 $A$ 為 $B$ 的子集，記為 $A$　　$B$'}</div>
        <div>{'(3) 空集合為任意集合的字集，記為 $\\varnothing$ 或 $\\{\\}$'}</div>
        <div>{'(4) 數系：$\\mathbb N\\subset\\mathbb Z\\subset\\mathbb Q\\subset\\mathbb R$'}</div>
      </Concept>
      <Exercise ids={['17abc786a8b', '17abc7a99fd']} height="4cm" />
      <Concept num={4} title="集合的運算" height="5.8cm">
        <div>{'集合 $A$、$B$ 都在宇集 $U$ 內，則其運算與圖示如下：'}</div>
        <div>
          {
            '(1) 集合 $\\{x|x\\in A\\land x\\in B\\}$ 為 $A$ 與 $B$ 的「交集 $A\\cap B$」，取 $A$、$B$ 的共同部分'
          }
        </div>
        <div>
          {
            '(2) 集合 $\\{x|x\\in A\\lor x\\in B\\}$ 為 $A$ 與 $B$ 的「聯集 $A\\cup B$」，取 $A$、$B$ 的全部'
          }
        </div>
        <div>
          {
            '(3) 集合 $\\{x|x\\in A\\land x\\notin B\\}$ 為 $A$ 與 $B$ 的「差集 $A-B$」，取 $A$ 扣掉 $B$'
          }
        </div>
        <div>
          {
            "(4) 集合 $\\{x|x\\in U\\land x\\notin A\\}$ 為 $A$ 與 $B$ 的「補集 $A'$」，取 $A$ 的外面"
          }
        </div>
        <div className={style.img}>
          <img alt="" src={`/toliman/images/集合圖.PNG`} role="presentation" />
        </div>
      </Concept>
      <Exercise ids={['17abc81d00d', '17abc83cf11']} />
    </Page>
    <Page pageNum={18}>
      <Concept num={5} title="笛摩根定理">
        <div>{"(1) $A'\\cup B'=$"}</div>
        <br />
        <div>{"(2) $A'\\cap B'=$"}</div>
      </Concept>
      <Exercise ids={['17abf7de3ad']} />
      <Concept num={6} title="取捨原理">
        <div>{'(1) $n(A\\cup B)=$'}</div>
        <br />
        <div>{'(2) $n(A\\cup B\\cup C)=$'}</div>
      </Concept>
      <Exercise ids={['17abf829bb2', '17abfa9a9fa']} height="8cm" />
    </Page>
    <Page pageNum={19}>
      <Concept num={7} title="加法原理與乘法原理">
        <div>{'(1) 加法原理：完成一件事的方法可分成若干類，則其方法數為分類相加。'}</div>
        <div>
          {'(2) 乘法原理：完成一件事的方法可分為若干步驟，則其方法數為各階段的方法數相乘。'}
        </div>
      </Concept>
      <Exercise ids={['17abfaec432', '17abfb144de']} height="8cm" />
      <Concept num={8} title="相異物的排列">
        <div>
          {
            '$n$ 個相異物取出 $r$ 個做直線排列，算法為 $n(n-1)(n-2)\\cdots(n-r+1)=\\dfrac{n!}{(n-r)!}$，是乘法原理的應用。'
          }
        </div>
      </Concept>
      <Exercise ids={['17abfb65e1f', '17abfb7c4c1']} height="8cm" />
    </Page>
    <Page pageNum={20}>
      <Concept num={9} title="組合">
        <div>
          {
            '$n$ 個相異物取出 $r$ 個成一組的算法為 $C^n_r=C^n_{n-r}=\\dfrac{n!}{r!(n-r)!}$。規定 $0!=1$。'
          }
        </div>
      </Concept>
      <Exercise ids={['17abfbad6c4', '17abfbbbcce']} height="7.5cm" />
      <Concept num={10} title="有相同物的排列">
        <div>
          {'若有 $n$ 個相同物，就除以 $n!$。如：$a,a,a,b,b,c,d$ 的排列數為 $\\dfrac{7!}{3!2!}$。'}
        </div>
      </Concept>
      <Exercise ids={['17abfbeeb64', '17abfc5b973']} height="8.7cm" />
    </Page>
    <Page pageNum={21}>
      <Concept num={11} title="巴斯卡定理" height="1.5cm">
        <div>{'$$C^n_r+C^n_{r+1}=C^{n+1}_{r+1}$$'}</div>
      </Concept>
      <Exercise ids={['17abfc983f9', '17abfd028f8']} height="8cm" />
      <Concept num={12} title="二項式定理">
        <div>
          {'$(x+y)^n=C^n_0x^n+C^n_1x^{n-1}y+C^n_2x^{n-2}y^2+\\cdots+C^n_{n-1}xy^{n-1}+C^n_ny^n$'}
        </div>
      </Concept>
      <Exercise ids={['17abfe2acac', '17abfe40b1e']} height="8cm" />
    </Page>
    <Page pageNum={22}>
      <Concept num={13} title="機率的定義">
        <div>
          {
            '若樣本空間 $S$ 中，每個樣本發生的機會都相等，規定事件 $A$ 發生的機率為 $P(A)=\\dfrac{n(A)}{n(S)}$。範圍為 $0\\le P(A)\\le1$。'
          }
        </div>
      </Concept>
      <Exercise ids={['17abfe8c83f', '17abfe9f277']} height="6.7cm" />
      <Concept num={14} title="機率的性質">
        <div>{'$A$、$B$ 為樣本空間 $S$ 的事件，則：'}</div>
        <div>{'(1) $P(\\varnothing)=0$，$P(S)=1$'}</div>
        <div>{"(2) $A$ 不發生的機率為 $P(A')=1-P(A)$"}</div>
        <div>{'(3) $P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$，即取捨原理之推廣'}</div>
      </Concept>
      <Exercise ids={['17abff3edad', '17abff591b0']} height="7.3cm" />
    </Page>
    <Page pageNum={23}>
      <Concept num={15} title="期望值">
        <div>
          {
            '隨機試驗的每一種可能的結果對應各自的機率與報酬，將各結果的機率乘上報酬後，加總即為該試驗的期望值，記為 $E$。期望值的概念就是重複多次試驗的平均報酬。'
          }
        </div>
      </Concept>
      <Exercise
        ids={['17abffbab4d', '17abffd87fa', '1823dae49a6', '1823db011c8']}
        height="10.1cm"
      />
    </Page>
    <Page pageNum={24}>
      <Example num={1} ids={['17ac5042097', '17ac506d4ef']} />
      <Example num={2} ids={['17ac51b5e9f', '17ac517bd78']} />
    </Page>
    <Page pageNum={25}>
      <Example num={3} ids={['17ac522cd09', '17ac5215d11']} />
      <Example num={4} ids={['17ac6da6a26', '17ac6e4566d']} />
    </Page>
    <Page pageNum={26}>
      <Example num={5} ids={['17ac6f0e1b6', '17ac6f453c9']} />
      <Example num={6} ids={['17ac6f6fb34', '17ac6fc1f57']} />
    </Page>
    <Page pageNum={27}>
      <Example num={7} ids={['179b3a0ab68', '17ac6fe8036']} />
      <Example num={8} ids={['17ac7175955', '17ac7188883']} />
    </Page>
    <Page pageNum={28}>
      <Example num={9} ids={['17ac714425f', '17ac7159652']} />
      <Example num={10} ids={['17ac71b8036', '17ac71d5b10']} />
    </Page>
    <Page pageNum={29}>
      <Example num={11} ids={['17ac71f3b77', '17ac720dc90']} />
      <Example num={12} ids={['17ac7258a05', '17ac72792d5']} />
    </Page>
    <Page pageNum={30}>
      <Example num={13} ids={['179fb7cdf25', '17ac72c29e7']} />
      <Example num={14} ids={['1823ddd4cde', '1823ddfb64f']} />
    </Page>
    <Page pageNum={31}>
      <Example num={15} ids={['17ac72e7b9b', '17ac730181f']} />
      <Example num={16} ids={['17ac731ee06', '17ac734394f']} />
    </Page>
    <Page pageNum={32}>
      <Example num={17} ids={['17ac7362b10', '17ac73b6777']} />
      <Example num={18} ids={['17ac7380496', '1823dd59556']} />
    </Page>
  </MathJax>
);

export default B2C6Combination;

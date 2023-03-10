import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const B2C3S1 = () => (
  <MathJax>
    <Page pageNum={1}>
      <div className={style.head}>1 邏輯、集合與計數原理</div>
      <Concept num={1} title="敘述的否定、且與或">
        1. 敘述：一個可以判斷對錯的語句稱為「敘述」
        <br />
        2. 否定敘述：與敘述 P 完全相反的敘述稱為「否定敘述」，記為 ~P，讀作「非 P」
        <br />
        3. 且：用「且」連接形成的敘述「P 且 Q」，規定 P、Q 同時為真時，「P 且 Q」才為真
        <br />
        4. 或：用「或」連接形成的敘述「P 或 Q」，規定 P、Q 同時為假時，「P 或 Q」才為假
      </Concept>
      <Example num={1} ids={['17e5b8b5a5c', '17e5b8cb0ae']} height="14.5cm" />
    </Page>
    <Page pageNum={2}>
      <Concept num={2} title="充分條件與必要條件">
        所謂的必要條件、充分條件，是用來表達兩個敘述之間關係的詞彙，敘述 P 為前提，敘述 Q
        為結論，可連接成一個推論「若 P 則 Q」，記為「$P\Rightarrow Q$」。
        <br />
        換句話說，只要有 P，就足以讓 Q 成立，我們稱「P 是 (Q 的) 充分條件」
        <br />
        也可以說，為了讓 P 成立，Q 是必須的，我們稱「Q 是 (P 的) 必要條件」
        <br />
        <br />
        如果我們要買 150 元的商品，那 200 元是...
        <br />
        如果我們要買 150 元的商品，那 100 元是...
        <br />
        <br />
        <br />
      </Concept>
      <Example num={2} ids={['17e5b8e3a7c', '17e5b8f7608']} height="3.7cm" />
      <Example num={3} ids={['17e5b901d00', '17e5c312681']} height="3.7cm" />
    </Page>
    <Page pageNum={3}>
      <Concept num={3} title="集合的表示法">
        1. 集合與元素：一群事物的聚集稱為「集合」，集合內的事物稱為「元素」
        <br />
        2. 屬於：若 $p$ 是集合 $A$ 的元素，以符號 $p\in A$ 表示
        <br />
        3. 子集：集合 $A$ 的一部份元素形成集合 $B$，稱 $B$ 為 $A$ 的子集
        <br />
        4. 包含於：若集合 $B$ 是集合 $A$ 的子集，以符號 $B\subset A$ 表示
        <br />
        5. 相等：若集合 $A,B$ 所裝的元素完全相同，則稱兩集合相等，記為 $A=B$
        <br />
        {'6. 空集合：若一個集合沒有任何元素，稱為空集合，以符號 $\\{\\}$ 或 $\\phi$ 表示'}
      </Concept>
      <Example num={4} ids={['17e5c342742', '17e5c35b90f']} height="4.6cm" />
      <Example num={5} ids={['17e5c350051', '17e5c36883f']} height="4.6cm" />
    </Page>
    <Page pageNum={4}>
      <Concept num={4} title="集合的運算與圖解">
        交集　　　　　　　　聯集　　　　　　　　差集　　　　　　　　補集
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        笛摩根定理
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        取捨原理
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Concept>
      <Example num={6} ids={['17e5c378ac4', '17e5c396ba9']} height="3.7cm" />
    </Page>
    <Page pageNum={5}>
      <Example num={7} ids={['17e5c3c4ada', '17e6c837d27']} />
      <Example num={8} ids={['17e6c84a4cf', '186c7c22eab']} />
    </Page>
    <Page pageNum={6}>
      <Example num={9} ids={['186c7c0800f', '17e6c853dc1']} height="10cm" />
      <Concept num={5} title="計數原理">
        <div className={style.conceptHead}>加法原理</div>
        <div>
          若完成一件事的方法可分為 $A$、$B$ 兩種類型，而 $A$ 類的完成方法有 $m$ 種，$B$
          類的完成方法有 $n$ 種，則完成這件事的方法總共有 $m+n$ 種
        </div>
        <br />
        <div className={style.conceptHead}>乘法原理</div>
        <div>
          若完成一件事的方法可分為 $A$、$B$ 兩個階段，而完成 $A$ 階段的方法有 $p$ 種，完成 $B$
          階段的方法有 $q$ 種，則完成這件事的方法總共有 $p\times q$ 種
        </div>
      </Concept>
    </Page>
    <Page pageNum={7}>
      <Example num={10} ids={['17e6c864ad1', '17e6c867075']} />
      <Example num={11} ids={['17e6c86b517', '17e6c86f8f8']} />
    </Page>
    <Page pageNum={8}>
      <Example num={12} ids={['17e6c876387', '17e6c8834cb']} />
      <Example num={13} ids={['17e6c87c559', '17e6c887f4f']} />
    </Page>
    <Page pageNum={9}>
      <Example num={14} ids={['17e6c88fd5f', '17e6c894dc7']} />
      <Example num={15} ids={['17e6c8a02ab', '17e6c8ad23d']} />
    </Page>
    <Page pageNum={10}>
      <Example num={16} ids={['17e6c8a8331', '17e6c8b5647']} height="20cm" />
    </Page>
  </MathJax>
);

export default B2C3S1;

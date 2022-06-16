import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';
import Page from 'src/pages/lecture/component/Page';

const B1C1Numbers = () => {
  return (
    <MathJax>
      <Page pageNum={1}>
        <div className={style.head}>Ch1 數與式</div>
        <Concept num={1} title="分數化成小數">
          <div>
            {'最簡分數 $\\frac{b}{a}$ 可用除法化成小數。'}
            <br />
            有限小數的條件：
            <br />
            無限循環小數的條件：
          </div>
        </Concept>
        <Exercise ids={['17a0dc85372', '17a0dca2b5e']} />
        <Concept num={2} title="小數化成分數">
          <div>
            {
              '解方程式可以把循環小數化成分數，如：$1.2\\overline{34}$、$3.\\overline{4}$、$5.6\\overline{789}$'
            }
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </Concept>
        <Exercise ids={['17a0dd2a34c', '17a0dd42c25']} />
      </Page>
      <Page pageNum={2}>
        <Concept num={3} title="有理數與無理數">
          <div>
            {
              '(1) 可以化成分數 $\\frac{b}{a}$ 的形式的數，如 $\\frac{-5}{1}$、$\\frac{2}{3}$、$0$、$2.\\overline{3}$，稱為'
            }
            <br />
            {'(2) 不循環的無限小數無法化成分數形式，如 $\\pi$、$\\sqrt{3}$，稱為'}
            <br />
            {'(3) 有理數與無理數合稱為'}
            <br />
            {'(4) 正整數集合記為　　；整數集合記為　　；有理數集合記為　　；實數集合記為'}
          </div>
        </Concept>
        <Exercise ids={['181525558a2', '17a0ddf5269', '17a0de2821c', '1815259a744']} />
        <Concept num={4} title="數線上的分點公式" height={'4cm'}>
          <div>
            {
              '數線上有 $A(a)$、$B(b)$ 兩點，若點 $P$ 在 $\\overline{AB}$ 內且 $\\overline{PA}:\\overline{PB}=m:n$，則 $P$ 為 $\\dfrac{mb+na}{m+n}$。'
            }
          </div>
        </Concept>
      </Page>
      <Page pageNum={3}>
        <Exercise ids={['17a0df3d2da', '181525f5385']} height="7cm" />
        <Concept num={5} title="雙重根號的化簡">
          <div>
            {'設 $a\\ge b\\ge0$'}
            <br />
            {'$\\sqrt{(a+b)+2\\sqrt{ab}}=$'}
            <br />
            {'$\\sqrt{(a+b)-2\\sqrt{ab}}=$'}
          </div>
        </Concept>
        <Exercise ids={['17a0df8d0dc', '17a0df9ff9f']} height="8cm" />
      </Page>
      <Page pageNum={4}>
        <Concept num={6} title="算幾不等式" height="3.6cm">
          <div>
            {'正數 $a$ 與 $b$ 必滿足 $\\dfrac{a+b}2\\ge\\sqrt{ab}$，且當 $a=b$ 時，「等號」成立。'}
          </div>
        </Concept>
        <Exercise ids={['17a0e014770', '17a0e043512']} />
        <Concept num={7} title="三次乘法公式">
          <div>
            {'$a^3+b^3=$'}
            <br />
            {'$a^3-b^3=$'}
            <br />
            {'$(a+b)^3=$'}
            <br />
            {'$(a-b)^3=$ '}
          </div>
        </Concept>
        <Exercise ids={['17a0e0fafec', '17a0e1064a1']} />
      </Page>
      <Page pageNum={5}>
        <Concept num={8} title="絕對值">
          <div>
            {'$|a-b|$ 的意義為：　　　　　　　　　　　；$|x|$ 的意義為：'}
            <br />
            {'(1) 設 $k>0$，$|x|=k$ 的解為 $x=\\pm k$'}
            <br />
            {'(2) 設 $k>0$，$|x|\\le k$ 的解為 $-k\\le x\\le k$，區間記法為 $x\\in[-k,k]$'}
            <br />
            {
              '(3) 設 $k>0$，$|x|\\ge k$ 的解為 $x\\le-k$ 或 $x\\ge k$，區間記法為 $x\\in(-\\infty,-k]\\cup[k,\\infty)$'
            }
          </div>
        </Concept>
        <Exercise ids={['17a0e14abac', '17a0e15a742']} />
        <Concept num={9} title="指數符號的定義">
          <div>
            {'(1) 零次方：若 $a\\ne0$，則 $a^0=$'}
            <br />
            {'(2) 負數次方：若 $a\\ne0$，則 $a^{-n}=$'}
            <br />
            {'(3) 分數次方：若 $a>0$，$a^{\\frac{n}{m}}=\\sqrt[m]{a^n}$'}
            <br />
            {'(4) 無理數次方：可用逼近法估計，例如：$2^\\pi\\approx2^{3.14}\\approx8.82$'}
          </div>
        </Concept>
        <Exercise ids={['17a0e1de5e1', '17a0e1f7aea']} height="7cm" />
      </Page>
      <Page pageNum={6}>
        <Concept num={10} title="指數律">
          <div>
            {'若 $a>0$，$b>0$，則：'}
            <br />
            {
              '(1) $a^x\\cdot a^y=$　　　　　(2) $\\dfrac{a^x}{a^y}=$　　　　　(3) $(a^x)^y=$　　　　　(4) $a^x\\cdot b^x=$'
            }
          </div>
        </Concept>
        <Exercise ids={['17a0e447974', '17a0e46db1a']} />
        <Concept num={11} title="科學記號">
          <div>
            {'將一正數寫為 $a\\times10^n$，其中 $1\\le a<10$ 且 $n\\in\\mathbb N$，稱為科學記號。'}
            <br />
            {'若 $n>0$，此數為　　位數；若 $n<0$，此數為純小數且自小數點後第　　位開始不為 0。'}
          </div>
        </Concept>
        <Exercise ids={['18153600d6d', '181536175e7']} height="4.3cm" />
        <Concept num={12} title="常用對數" height="3cm">
          <div>
            {'設 $a$ 為正實數，$k$ 為實數，滿足 $10^k=a$，則 $k$ 可記為 $\\log_{10}a=\\log a$'}
            <br />
            {'由符號互換可得：(1) $10^{\\log a}=$　　　　　　　 (2) $\\log10^k=$'}
            <br />
            {
              '操作計算機可知 $\\log2\\approx0.3010$，$\\log3\\approx0.4771$，即 $10^{0.3010}\\approx2$，$10^{0.4771}\\approx3$'
            }
          </div>
        </Concept>
      </Page>
      <Page pageNum={7}>
        <Exercise ids={['181536f48b4', '17a0e4d25e0']} />
        <Example num={1} ids={['17a0ef24961', '17a0ef528bf']} height="12cm" />
      </Page>
      <Page pageNum={8}>
        <Example num={2} ids={['181539745ee', '181539a9517']} />
        <Example num={3} ids={['17a0efa578f', '17a0efc748e']} />
      </Page>
      <Page pageNum={9}>
        <Example num={4} ids={['17a0f5dd109', '17a0f616066']} />
        <Example num={5} ids={['17a0f6382ae', '17a0f66cd40']} />
      </Page>
      <Page pageNum={10}>
        <Example num={6} ids={['17a0f68d778', '17a0f6a214a']} />
        <Example num={7} ids={['17a0f6e35e5', '17a0f700535']} />
      </Page>
      <Page pageNum={11}>
        <Example num={8} ids={['17a0f72f269', '17a0f78f52f']} />
        <Example num={9} ids={['17a0f7cb255', '17a0f7ed607']} />
      </Page>
    </MathJax>
  );
};

export default B1C1Numbers;

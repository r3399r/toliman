import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';

const B1C1Numbers = () => {
  return (
    <div>
      <div className={style.head}>數與式</div>
      <Concept num={1} title="分數化成小數">
        <Textarea2MathJax
          text={
            '最簡分數 $$\\frac{b}{a}$$ 可用除法化成小數。\n有限小數的條件：\n無限循環小數的條件：'
          }
        />
        <Textarea2MathJax
          className={style.note}
          text={'分母 $$a$$ 沒有 $$2$$、$$5$$ 以外的質因數，為有限小數；否則為無限循環小數'}
        />
      </Concept>
      <Exercise ids={['17a0dc85372', '17a0dca2b5e']} />
      <Concept num={2} title="小數化成分數">
        <Textarea2MathJax
          text={
            '解方程式可以把循環小數化成分數，如：$$1.2\\overline{34}=\\frac{1234-12}{990}$$、$$3.\\overline{4}=\\frac{34-3}{9}$$、$$5.6\\overline{789}=\\frac{56789-56}{9990}$$'
          }
        />
      </Concept>
      <Exercise ids={['17a0dd2a34c', '17a0dd42c25']} />
      <Concept num={3} title="有理數與無理數">
        <Textarea2MathJax
          text={
            '(1) 可以化成分數 $$\\frac{b}{a}$$ 的形式的數，如 $$\\frac{-5}{1}$$、$$\\frac{2}{3}$$、$$0$$、$$2.\\overline{3}$$，稱為\n(2) 不循環的無限小數無法化成分數形式，如 $$\\pi$$、$$\\sqrt{3}$$，稱為\n(3) 有理數與無理數合稱為\n(4) 正整數集合記為　　；整數集合記為　　；有理數集合記為　　；實數集合記為'
          }
        />
      </Concept>
      <Exercise ids={['17a0ddf5269', '17a0de2821c']} />
      <Concept num={4} title="數線上的分點公式">
        <Textarea2MathJax
          text={
            '數線上有 $$A(a)$$、$$B(b)$$ 兩點，若點 $$P$$ 在$$\\overline{AB}$$ 內且 $$\\overline{PA}:\\overline{PB}=m:n$$，則 $$P$$ 為 $$\\frac{mb+na}{m+n}$$。'
          }
        />
        <div className={style.note}>附推導</div>
      </Concept>
      <Exercise ids={['17a0df3d2da']} />
      <Concept num={5} title="雙重根號的化簡">
        <Textarea2MathJax
          text={
            '設 $$a\\ge b\\ge0$$，\n$$\\sqrt{(a+b)+\\sqrt{ab}}=$$ \n$$\\sqrt{(a+b)-\\sqrt{ab}}=$$ '
          }
        />
        <div className={style.note}>附推導</div>
      </Concept>
      <Exercise ids={['17a0df8d0dc', '17a0df9ff9f']} />
      <Concept num={6} title="算幾不等式">
        <Textarea2MathJax
          text={'正數 $$a$$ 與 $$b$$ 必滿足　　　　　　　　　　，且兩邊相等的條件為'}
        />
        <div className={style.note}>畫圖</div>
      </Concept>
      <Exercise ids={['17a0e014770', '17a0e043512']} />
      <Concept num={7} title="三次乘法公式">
        <Textarea2MathJax text={'$$a^3+b^3=$$ \n$$a^3-b^3=$$ \n$$(a+b)^3=$$ \n$$(a-b)^3=$$ '} />
      </Concept>
      <Exercise ids={['17a0e0fafec', '17a0e1064a1']} />
      <Concept num={8} title="絕對值">
        <Textarea2MathJax
          text={
            '數線上 $$a$$ 到 $$b$$ 的距離為 $$|a-b|$$；$$x$$ 到原點的距離為 $$|x-0|=|x|$$\n(1) 設 $$k>0$$，$$|x|=k$$ 的解為 $$x=\\pm k$$\n(2) 設 $$k>0$$，$$|x|\\le k$$ 的解為 $$-k\\le x\\le k$$，記為 $$[-k,k]$$\n(3) 設 $$k>0$$，$$|x|\\ge k$$ 的解為 $$x\\le-k$$ 或 $$x\\ge k$$，記為 $$(-\\infty,-k]\\cup[k,\\infty)'
          }
        />
      </Concept>
      <Exercise ids={['17a0e14abac', '17a0e15a742']} />
      <Concept num={9} title="指數符號的定義">
        <Textarea2MathJax
          text={
            '若 $$a\\ne0$$，則 $$a^0=1$$，$$a^{-n}=\\frac{1}{n}$$\n若 $$a>0$$ 可取分數次方，$$a^{\\frac{n}{m}}=\\sqrt[m]{n}$$，無理數次方可用逼近法估計'
          }
        />
      </Concept>
      <Exercise ids={['17a0e1de5e1', '17a0e1f7aea']} />
      <Concept num={10} title="指數律">
        <Textarea2MathJax text={'若 $$a>0$$，$$b>0$$，則：'} />
        <Textarea2MathJax
          className={style.note}
          text={
            '$$a^x\\cdot a^y=a^{x+y}$$　　$$\\frac{a^x}{a^y}=a^{x-y}$$　　$$(a^x)^y=a^{xy}$$　　$$a^x\\cdot b^x=(ab)^x $$　　$$\\frac{a^x}{b^x}=\\left(\\frac{a}{b}\\right)^x'
          }
        />
      </Concept>
      <Exercise ids={['17a0e447974', '17a0e46db1a']} />
      <Concept num={11} title="常用對數">
        <Textarea2MathJax
          text={
            '設 $$a$$ 為正實數，$$k$$ 為實數，滿足 $$10^k=a$$，則 $$k$$ 可記為 $$\\log a$$\n由符號互換可得：(1) $$10^{\\log a}=a$$ (2) $$\\log(10^k)=k$$\n操作計算機可知 $$\\log2\\approx0.3010$$，$$\\log3\\approx0.4771$$，即 $$10^{0.3010}\\approx2$$，$$10^{0.4771}\\approx3$$'
          }
        />
        <div className={style.note}>寫符號互換模樣</div>
      </Concept>
      <Exercise ids={['17a0e4d25e0']} />
      <Example num={1} ids={['17a0ef24961', '17a0ef528bf']} />
      <Example num={2} ids={['17a0efa578f', '17a0efc748e']} />
      <Example num={3} ids={['17a0f5dd109', '17a0f616066']} />
      <Example num={4} ids={['17a0f6382ae', '17a0f66cd40']} />
      <Example num={5} ids={['17a0f68d778', '17a0f6a214a']} />
      <Example num={6} ids={['17a0f6e35e5', '17a0f700535']} />
      <Example num={7} ids={['17a0f72f269', '17a0f78f52f']} />
      <Example num={8} ids={['17a0f7cb255', '17a0f7ed607']} />
    </div>
  );
};

export default B1C1Numbers;

import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';

const Numbers = () => {
  return (
    <div className={style.content}>
      <div className={style.head}>數與數線</div>
      <Concept title="整數">
        <div className={style.conceptHead}>整數</div>
        <div>
          <Textarea2MathJax
            text={
              '整數包含正整數、零、負整數，以符號 $$\\mathbb{Z}$$ 表示，其中正整數又稱為自然數，以符號 $$\\mathbb{N}$$ 表示'
            }
          />
        </div>
        <div className={style.conceptHead}>倍數的判別</div>
        <div>
          <Textarea2MathJax
            text={
              '(1) $$2$$ 的倍數：\n(2) $$3$$ 的倍數：\n(3) $$4$$ 的倍數：\n(4) $$5$$ 的倍數：\n(5) $$8$$ 的倍數：\n(6) $$9$$ 的倍數：\n(7) $$11$$ 的倍數：'
            }
          />
        </div>
      </Concept>
      <Exercise ids={['17973e3e4c0', '17973e5d9f2']} />
      <Concept title="有理數與無理數">
        <div className={style.conceptHead}>有理數</div>
        <div>
          <Textarea2MathJax
            text={
              '(1) 設 $$a$$、$$b$$ 為整數，$$a\\neq0$$，則形如 $$\\frac{b}{a}$$ 的數稱為有理數，以符號 $$\\mathbb{Q}$$ 表示\n(2) 有理數的封閉性：任兩個有理數的加、減、乘、除，結果仍是有理數 (規定不可除以 $$0$$)\n(3) 有理數的稠密性：任兩個不相等的有理數之間必存在第三個有理數'
            }
          />
        </div>
        <div className={style.conceptHead}>有理數的小數表示</div>
        <div>
          <Textarea2MathJax
            text={
              '有理數可表示為有限小數或循環小數，如：$$\\frac{1}{2}=0.5$$、$$\\frac{1}{3}=0.\\bar{3}$$\n有限小數的條件？'
            }
          />
        </div>
        <div className={style.conceptHead}>循環小數化分數的規則</div>
        <div>
          <Textarea2MathJax
            text={
              '$$0.\\overline{a}=\\frac{a}{9}\\quad0.\\overline{ab}=\\frac{ab}{99}\\quad0.a\\overline{bc}=\\frac{abc-a}{990}$$'
            }
          />
        </div>
        <div className={style.conceptHead}>無理數</div>
        <div>
          <Textarea2MathJax
            text={'不循環的無限小數稱為無理數，如：$$\\sqrt{5}$$、$$\\sqrt[3]{3}$$、$$\\pi$$'}
          />
        </div>
      </Concept>
      <Exercise ids={['17974036c15', '17974071318', '1797416af7c']} />
      <Example num={1} ids={['179742106b6', '17974229355']} />
      <Example num={2} ids={['1797429c954', '179742f217d']} />
      <Concept title="實數">
        <div className={style.conceptHead}>實數的定義</div>
        <div>
          <Textarea2MathJax
            text={'有理數與無理數統稱為實數，以符號 $$\\mathbb{R}$$ 表示\n實數的成員包括：'}
          />
        </div>
        <div className={style.conceptHead}>實數的運算性質</div>
        <div>
          <Textarea2MathJax
            text={
              '(1) 交換律：$$a+b=b+a$$；$$a\\times b=b\\times a$$\n(2) 結合律：$$a+(b+c)=(a+b)+c$$；$$a\\times(b\\times c)=(a\\times b)\\times c$$\n(3) 分配律：$$a\\times(b+c)=a\\times b+a\\times c$$'
            }
          />
        </div>
        <div className={style.conceptHead}>實數的大小關係</div>
        <div>
          <Textarea2MathJax
            text={
              '(1) 三一律：$$a<b$$、$$a=b$$、$$a>b$$ 這三種大小關係恰有一個成立\n(2) 遞移律：若 $$a<b$$ 且 $$b<c$$，則 $$a<c$$'
            }
          />
        </div>
      </Concept>
      <Example num={3} ids={['1797447ff23', '179744adbca']} />
      <Concept title="數線">
        <div className={style.conceptHead}>數線上的範圍</div>
        <div>
          <Textarea2MathJax
            text={
              '(1) $$x=2$$ 代表一點\n(2) $$x>2$$ 表示一條由 $$2$$ 向右的射線，空心點表示不含這一點\n(3) $$x\\ge2$$ 表示一條由 $$2$$ 向右的射線，實心點表示包含這一點'
            }
          />
        </div>
        <div className={style.conceptHead}>區間表示法</div>
        <div>
          <Textarea2MathJax
            text={
              '在表示數線上的範圍是，也可以使用小括弧、中括弧來表示區間，定義如下：\n(1) $$a\\le x\\le b$$ 記為 $$[a,b]\\quad$$(2) $$a\\le x<b$$ 記為 $$[a,b)$$\n(3) $$a<x\\le b$$ 記為 $$(a,b]\\quad$$(4) $$a<x<b$$ 記為 $$(a,b)$$\n(5) $$x\\ge a$$ 記為 $$[a,\\infty)\\quad$$(6) $$x>a$$ 記為 $$(a,\\infty)$$\n(7) $$x\\le a$$ 記為 $$(-\\infty,a]\\quad$$(8) $$x<a$$ 記為 $$(-\\infty,a)$$'
            }
          />
        </div>
        <div className={style.conceptHead}>分點公式</div>
        <div>
          <Textarea2MathJax
            text={
              '設 $$A$$、$$B$$ 兩點坐標分別為 $$a$$、$$b$$，若 $$P$$ 點介於 $$A$$、$$B$$ 兩點之間且 $$\\overline{AP}:\\overline{BP}=m:n$$，則 $$P$$ 點的坐標為 $$\\frac{na+mb}{n+m}$$'
            }
          />
        </div>
        <div className={style.conceptHead}>中點公式</div>
        <div>
          <Textarea2MathJax
            text={
              '設 $$A$$、$$B$$ 兩點坐標分別為 $$a$$、$$b$$，則 $$A$$、$$B$$ 兩點的中點坐標為 $$\\frac{a+b}{2}$$'
            }
          />
        </div>
      </Concept>
      <Exercise ids={['1797456a8ad', '17974577c58', '179747194d1', '1797473e1e3']} />
      <Example num={4} ids={['1797476bcdb', '1797479e4e0']} />
      <Example num={5} ids={['179747bfde7', '1797480949e']} />
      <Concept title="絕對值">
        <div className={style.conceptHead}>絕對值的幾何意義</div>
        <div>
          <Textarea2MathJax
            text={
              '(1) $$|a-b|$$ 代表數線上 $$a$$、$$b$$ 兩點間的距離\n(2) $$|a|=|a-0|$$ 代表數線上 $$a$$ 與原點的距離'
            }
          />
        </div>
        <div className={style.conceptHead}>絕對值的性質</div>
        <div>
          <Textarea2MathJax
            text={
              '(1) $$|a|\\ge0$$\n(2) $$|a|=|-a|$$\n(3) $$|ab|=|a||b|$$；$$\\left|\\frac{a}{b}\\right|=\\frac{|a|}{|b|}$$'
            }
          />
        </div>
      </Concept>
      <Exercise ids={['179757a606e', '179757bb299']} />
      <Example num={6} ids={['179757f30b3', '17975876dfa']} />
      <Example num={7} ids={['1797fcf4177', '1797fd09764']} />
      <Example num={8} ids={['1797fd30bb4', '1797fd9a454']} />
      <Example num={9} ids={['1797fd59820', '1797fd78e76']} />
      <Example num={10} ids={['1797fdd1fa4', '1797fdeaccf']} />
    </div>
  );
};

export default Numbers;

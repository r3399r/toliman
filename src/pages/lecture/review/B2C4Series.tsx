import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';
import Page from 'src/pages/lecture/component/Page';

const B2C4Series = () => {
  return (
    <div>
      <Page pageNum={1}>
        <div className={style.head}>Ch4 數列級數</div>
        <Concept num={1} title="等差數列與級數">
          <Textarea2MathJax text={'首項 $a_1$，公差 $d$'} />
          <Textarea2MathJax text={'(1) 第 $n$ 項為 $a_n=a_1+(n-1)d$'} />
          <Textarea2MathJax
            text={'(2) 前 $n$ 項和為 $S_n=\\frac{n}{2}(a_1+a_n)=\\frac{n}{2}[2a_1+(n-1)d]$'}
          />
          <Textarea2MathJax
            text={'(3) 若 $a$、$b$、$c$ 三數成等差，則 $2b=a+c$，稱 $b$ 為等差中項'}
          />
        </Concept>
        <Exercise ids={['17a3872be1f', '17a3878a91c']} />
        <Concept num={2} title="等比數列與級數">
          <Textarea2MathJax text={'首項 $a_1$，公差 $r$'} />
          <Textarea2MathJax text={'(1) 第 $n$ 項為 $a_n=a_1\\times r^{n-1}$'} />
          <Textarea2MathJax text={'(2) 前 $n$ 項和為 $S_n=\\frac{a_1(1-r^n)}{1-r}$'} />
          <Textarea2MathJax
            text={'(3) 若 $a$、$b$、$c$ 三數成等比，則 $b^2=ac$，稱 $b$ 為等比中項'}
          />
        </Concept>
        <Exercise ids={['17a38ef2658', '17a38f133a4']} />
      </Page>
      <Page pageNum={2}>
        <Concept num={3} title="單利與複利">
          <Textarea2MathJax
            text={
              '假設本金 $A$，利率 $r$，期數 $n$，\n(1) 單利：本利和$=A+A\\times r\\times n$\n(2) 複利：本利和$=A\\times(1+r)^n$'
            }
          />
        </Concept>
        <Exercise ids={['17a38f954aa', '17a38fa110e']} />
        <Concept num={4} title="求和公式" height="5cm">
          <Textarea2MathJax
            text={
              '$1+2+3+\\dots+n=\\frac{n(n+1)}{2}$\n$1^2+2^2+3^2+\\dots+n^2=\\frac{n(n+1)(2n+1)}{6}$\n$1^3+2^3+3^3+\\cdots+n^3=\\left[\\frac{n(n+1)}{2}\\right]^2$'
            }
          />
        </Concept>
        <Exercise ids={['17a38ffc8f0', '17a39013d19']} />
      </Page>
      <Page pageNum={3}>
        <Concept num={5} title="遞迴數列">
          <Textarea2MathJax
            text={'給數列的 $\\langle a_n\\rangle$ 的首項及前後項的關係式，稱為該數列的遞迴式。'}
          />
        </Concept>
        <Exercise ids={['17a39109975', '17a3912f008']} height="10cm" />
        <Concept num={6} title="數學歸納法">
          <Textarea2MathJax
            text={
              '關於正整數的式子或性質，具有遞推的特性時可使用。分成兩步驟：\n(1) 針對初始值檢驗原式成立\n(2) 假設對 $n=k$ 成立，推導出 $n=k+1$ 時也成立\n則由數學歸納法可知，得證對所有正整數都成立'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={4}>
        <Example num={1} ids={['17a55c297af', '17a55c5894d']} />
        <Example num={2} ids={['17a55c7d6e2', '17a55ca2296']} />
      </Page>
      <Page pageNum={5}>
        <Example num={3} ids={['17a5605dcf4', '17a5606fee2']} />
        <Example num={4} ids={['17a560a8bbc', '17a560b9cb2']} />
      </Page>
      <Page pageNum={6}>
        <Example num={5} ids={['17a560ec3d0', '17a5610d83d']} />
        <Example num={6} ids={['17a57ce4c98', '17a57d3f244']} />
      </Page>
      <Page pageNum={7}>
        <Example num={7} ids={['17a57d7aeac', '17a57da7235']} />
        <Example num={8} ids={['17a57e93260', '17a57ee10a7']} />
      </Page>
    </div>
  );
};

export default B2C4Series;

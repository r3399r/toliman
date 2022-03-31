import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C3S1CondProbability = () => {
  return (
    <div>
      <Page pageNum={1}>
        <div className={style.head}>1 條件機率</div>
        <Concept num={1} title="條件機率的符號與定義">
          <div className={style.conceptHead}>一般機率的符號與定義</div>
          <Textarea2MathJax
            text={
              '隨機試驗的所有可能結果形成的集合，稱為「樣本空間」，記為 $S$。子集合稱為「事件」，若試驗結果為事件 $E$ 的元素之一，稱為「事件 $E$ 發生」，事件 $E$ 發生的機率為 $P(E)=\\dfrac{n(E)}{n(A)}$。'
            }
          />
          <div className={style.conceptHead}>條件機率的符號與定義</div>
          <Textarea2MathJax
            text={
              '$S$ 中有兩事件 $A$ 與 $B$，在事件 $B$ 已經發生的條件下，將事件 $A$ 發生的機率記為 $P(A|B)$，此時的「樣本空間」視為 $B$，故 $P(A|B)=\\dfrac{n(A\\cap B)}{n(B)}$，經推導可得 $P(A|B)=\\dfrac{P(A\\cap B)}{P(B)}$。\n　\n　\n　\n　\n　\n'
            }
          />
        </Concept>
        <Example num={1} ids={['17de1800c07', '17de1815d0b']} height="8.5cm" />
      </Page>
      <Page pageNum={2}>
        <Example num={2} ids={['17de180c98b', '17de182078f']} />
        <Example num={3} ids={['17fdfa6586d', '17fdfa891c8']} />
      </Page>
      <Page pageNum={3}>
        <Example num={4} ids={['17de1826e1b', '17de1835f12']} />
        <Example num={5} ids={['17de182f28b', '17de183d533']} />
      </Page>
      <Page pageNum={4}>
        <Example num={6} ids={['17de18419dd', '17db6f9c9c7']} />
        <Example num={7} ids={['17de18492e3', '17de18826f9']} />
      </Page>
      <Page pageNum={5}>
        <Concept num={2} title="乘法法則與貝氏定理">
          <div className={style.conceptHead}>乘法法則</div>
          <Textarea2MathJax
            text={
              '把條件機率的定義移項得 $P(A\\cap B)=P(A)\\times P(B|A)$，其意義為：機率會隨條件而改變。把試驗流程釐清，再一步一步考慮當下情況之機率。'
            }
          />
          <div className={style.conceptHead}>貝氏定理</div>
          <div>
            (沒有公式)
            樣本空間會依事件發生與否產生分割，遇到問題時需畫各式劇本的樹狀圖，題目所求往往是許多劇本分支中的其中一支。
          </div>
        </Concept>
        <Example num={8} ids={['17de186a2a4', '17de1872c6a']} height="14cm" />
      </Page>
      <Page pageNum={6}>
        <Example num={9} ids={['17de19042b6', '17de190cd09']} />
        <Example num={10} ids={['17de1908a59', '17dcc56ef1d']} />
      </Page>
      <Page pageNum={7}>
        <Example num={11} ids={['17de1895962', '17de18b98b1']} />
        <Example num={12} ids={['17de189ed5d', '17de18d1a9a']} />
      </Page>
      <Page pageNum={8}>
        <Example num={13} ids={['17de18b2502', '17de18de77e']} height="20cm" />
      </Page>
      <Page pageNum={9}>
        <Example num={14} ids={['17de18e936d', '17de18f7266']} />
        <Example num={15} ids={['17dbe8033c1', '17dbedddf8c']} />
      </Page>
      <Page pageNum={10}>
        <Example num={16} ids={['17de192adcc', '17de193349f']} height="20cm" />
      </Page>
    </div>
  );
};

export default C3S1CondProbability;

import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C3S2IndependentEvent = () => (
  <div>
    <Page pageNum={11}>
      <div className={style.head}>2 獨立事件</div>
      <Concept num={1} title="獨立事件的定義及性質">
        <div className={style.conceptHead}>兩事件獨立</div>
        <Textarea2MathJax
          text={
            '事件 $A$ 與 $B$，無論 $B$ 發生與否，$A$ 的機率都不受影響，即 $P(A|B)=P(A)$，稱「$A$ 與 $B$ 為獨立事件」，可推得 $P(A\\cap B)=P(A)\\cdot P(B)$，此式子即為獨立事件的條件，可用此式子來驗證獨立事件。\n　\n　\n　\n'
          }
        />
        <Textarea2MathJax
          text={
            "若 $A$ 與 $B$ 互為獨立事件，則可推得「$A$ 與 $B'$」、「$A'$ 與 $B$」、「$A'$ 與 $B'$」也都互為獨立事件。"
          }
        />
        <div className={style.conceptHead}>三事件獨立</div>
        <Textarea2MathJax
          text={
            '三事件獨立的條件：\n(1) $P(A\\cap B)=P(A)\\cdot P(B)$　(2) $P(A\\cap C)=P(A)\\cdot P(C)$　(3) $P(B\\cap C)=P(B)\\cdot P(C)$\n(4) $P(A\\cap B\\cap C)=P(A)\\cdot P(B)\\cdot P(C)$\n上述條件缺一不可。也就是說，即使 $A$、$B$、$C$ 兩兩獨立，並不能保證三事件獨立。'
          }
        />
        <div className={style.conceptHead}>相關事件</div>
        <Textarea2MathJax
          text={'獨立事件的相反即為相關事件，$P(A\\cap B)\\ne P(A)\\cdot P(B)$。'}
        />
        <div className={style.conceptHead}>互斥事件</div>
        <Textarea2MathJax text={'兩事件無交集稱為互斥事件，$P(A\\cap B)=\\varnothing$'} />
      </Concept>
      <Example num={1} ids={['17de193b9a5', '17de194a703']} height="5.5cm" />
    </Page>
    <Page pageNum={12}>
      <Example num={2} ids={['17de194400b', '17dcc734c81']} />
      <Example num={3} ids={['17de1955cf2', '17de19614ea']} />
    </Page>
    <Page pageNum={13}>
      <Example num={4} ids={['17de197d1fb', '17de19901a5']} />
      <Example num={5} ids={['17dea033c7c', '17dea041038']} />
    </Page>
    <Page pageNum={14}>
      <Example num={6} ids={['17dea0453ca', '17dea056006']} />
      <Example num={7} ids={['17dea0921c2', '17dea096923']} />
    </Page>
    <Page pageNum={15}>
      <Example num={8} ids={['17dea09a4eb', '17dea0a1045']} height="13cm" />
      <Concept num={2} title="主觀機率與客觀機率">
        <div className={style.conceptHead}>主觀機率</div>
        <div>
          許多試驗無法重複操作，只能依靠個人的經驗對事件的機率進行主觀判斷，但仍須依循機率的性質。
        </div>
        <div className={style.conceptHead}>客觀機率</div>
        <div>
          可重複進行並累積大量統計數據的隨機試驗，事件的機率會隨試驗操作次數的增加，進而趨近於某個定值，稱為機率的「大數法則」。
        </div>
      </Concept>
    </Page>
    <Page pageNum={16}>
      <Example num={9} ids={['17dea0b1c3e', '17dea0b9e24']} />
      <Example num={10} ids={['17dea0e2ecb', '17dea0f5df1']} />
    </Page>
  </div>
);

export default C3S2IndependentEvent;

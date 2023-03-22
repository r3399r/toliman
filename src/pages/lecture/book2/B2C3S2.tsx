import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const B2C3S2 = () => (
  <MathJax>
    <Page pageNum={11}>
      <div className={style.head}>2 排列</div>
      <Concept num={1} title="階乘與相異物的直線排列">
        $n!=$
      </Concept>
      <Example num={1} ids={['17e6c8c07cf', '17e6c8cbefa']} height="5.5cm" />
      <Example num={2} ids={['17e6c8c64a1', '17e6c8d1130']} height="5.5cm" />
    </Page>
    <Page pageNum={12}>
      <Example num={3} ids={['17e6c8e2981', '17e6c8ef3cd']} />
      <Example num={4} ids={['17e6c8e2982', '17e6c8f3084']} />
    </Page>
    <Page pageNum={13}>
      <Example num={5} ids={['17e6c8f79a3', '17e6c903b49']} height="20cm" />
    </Page>
    <Page pageNum={14}>
      <Concept num={2} title="重複排列">
        前一觀念的題目選完不能再選，此觀念的題目可重複選取，但解題思路皆相同
      </Concept>
      <Example num={6} ids={['17e6c907a8e', '17e6c916083']} height="4cm" />
      <Example num={7} ids={['17e6c90e014', '17e6c919c5e']} height="8.5cm" />
    </Page>
    <Page pageNum={15}>
      <Example num={8} ids={['17e6c912fad', '17e6c92594d']} />
      <Example num={9} ids={['17e6c932288', '17e6c9388d6']} />
    </Page>
    <Page pageNum={16}>
      <Concept num={10} title="有相同物的排列" height="6cm">
        如果排列的物品長得一模一樣，會有何狀況？
      </Concept>
      <Example num={11} ids={['17e6c93df90', '17e6c945a8c']} height="3cm" />
      <Example num={12} ids={['17e6c941b71', '17e6c948d55']} height="4cm" />
    </Page>
    <Page pageNum={17}>
      <Example num={13} ids={['17e6c954cea', '17e6c9582fc']} />
      <Example num={14} ids={['17e6c960b12', '17e6c965715']} />
    </Page>
  </MathJax>
);

export default B2C3S2;

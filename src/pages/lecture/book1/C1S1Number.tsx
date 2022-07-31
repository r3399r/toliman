import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C1S1Number = () => (
  <MathJax>
    <Page pageNum={1}>
      <div className={style.head}>1 實數</div>
      <Concept num={1} title="加減消去法與解的情形">
        <div className={style.conceptHead}>聯立方程組</div>
        <div>
          多個方程式排列在一起，並搭配「聯立」符號，稱為聯立方程組，其解為各圖形的「交集」。
        </div>
        <div className={style.conceptHead}>二元一次聯立方程組</div>
        <div>二元一次方程式的圖形為　　　　，兩個二元一次方程式能夠形成的情形：</div>
        <div>(1) 相交：　　　　　　　　　　(2) 平行：　　　　　　　　　　(3) 重合：</div>
      </Concept>
    </Page>
    <Page pageNum={2}>
      <Example num={1} ids={['182406b30eb', '182406cb62d']} />
      <Example num={2} ids={['182406dc4f1', '182406e85d1']} />
      <Example num={3} ids={['1824070506d', '182407138ec']} />
      <Example num={4} ids={['1824072402b', '1824072ddd6']} />
      <Example num={5} ids={['1824073e6a8', '1824074e224']} />
      <Example num={6} ids={['18240764c41', '18240777cb0']} />
      <Example num={7} ids={['182407927fb', '182407a0590']} />
      <Example num={8} ids={['182407d3766', '182407eba69']} />
      <Example num={9} ids={['182407fdd7c', '18240816d62']} />
      <Example num={10} ids={['18240835833', '182408482b0']} />
      <Example num={11} ids={['1824086d367', '1824088d061']} />
    </Page>
  </MathJax>
);

export default C1S1Number;

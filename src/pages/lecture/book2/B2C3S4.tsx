import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const B2C3S4 = () => (
  <MathJax>
    <Page pageNum={27}>
      <div className={style.head}>4 古典機率與期望值</div>
      <Concept num={1} title="樣本空間與事件、機率的定義">
        <div>樣本空間：把一個試驗的所有可能的結果全部蒐集起來所成的集合，稱為樣本空間</div>
        <div>事件：樣本空間的任一個子集合，稱為事件</div>
        <div>
          機率的定義：在樣本空間 $S$ 中，先確定每個樣本發生的機會都相等，我們可將「事件 $A$
          發生的機率」，記為 $P(A)$，其值為
        </div>
        <br />
        <br />
      </Concept>
      <Example num={1} ids={['17e6ca38adf', '17e6ca5593b']} height="13.2cm" />
    </Page>
    <Page pageNum={28}>
      <Example num={2} ids={['17e6ca45969', '17e6ca60345']} />
      <Concept num={2} title="機率的性質">
        機率值的範圍：
        <br />
        取捨原理：
        <br />
        <br />
        <br />
        <br />
        <br />
        餘事件：
        <br />
        <br />
        <br />
        <br />
        <br />
        互斥事件：
      </Concept>
    </Page>
    <Page pageNum={29}>
      <Example num={3} ids={['17ea8ad6763', '17ea8aeb55b']} />
      <Example num={4} ids={['17ea8ae259d', '17ea8af5fe2']} />
    </Page>
    <Page pageNum={30}>
      <Example num={5} ids={['17ea8b02d31', '17ea8b0cdef']} />
      <Example num={6} ids={['17ea8b063ca', '17ea8b113ea']} />
    </Page>
    <Page pageNum={31}>
      <Example num={7} ids={['17ea8b17b62', '17ea8b23e71']} />
      <Example num={8} ids={['17ea8b1b52b', '17ea8b32be4']} />
    </Page>
    <Page pageNum={32}>
      <Example num={9} ids={['17ea8b38b15', '17ea8b432aa']} />
      <Example num={10} ids={['17ea8b3e382', '17ea8b4a1c1']} />
    </Page>
    <Page pageNum={33}>
      <Example num={11} ids={['17ea8b4ecec', '17ea8b5ed09']} />
      <Example num={12} ids={['17ea8b531d8', '17ea8b63989']} />
    </Page>
    <Page pageNum={34}>
      <Concept num={13} title="期望值">
        <div>期望值的計算：各種結果的機率呈上各自的報酬後，再全部相加</div>
        <div>期望值的內涵：這個試驗所能獲得的「平均報酬」</div>
      </Concept>
      <Example num={14} ids={['17ea8b6d931', '17ea8b81e90']} height="4.3cm" />
      <Example num={15} ids={['17ea8b78d57', '17ea8b89e39']} />
    </Page>
    <Page pageNum={35}>
      <Example num={16} ids={['17ea8b8d8d5', '17ea8b9e362']} />
      <Example num={17} ids={['17ea8b9a759', '17ea8ba6dcb']} />
    </Page>
    <Page pageNum={36}>
      <Example num={18} ids={['17ea8bade88', '17ea8bbd774']} />
      <Example num={19} ids={['17ea8bb88c9', '17ea8bc6304']} />
    </Page>
    <Page pageNum={37}>
      <Example num={20} ids={['17e7d74d5d2', '17ea8bdac69']} />
      <Example num={21} ids={['17e7d777740', '17ea8beb42f']} />
    </Page>
  </MathJax>
);

export default B2C3S4;

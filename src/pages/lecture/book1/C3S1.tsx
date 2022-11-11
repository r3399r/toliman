import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C3S1 = () => (
  <MathJax>
    <Page pageNum={1}>
      <div className={style.head}>1 多項式的除法</div>
      <Concept num={1} title="多項式的定義">
        <div>
          {
            '形如 $f(x)=a_nx^n+a_{n-1}x^{n-1}+\\cdots+a_2x^2+a_1x+a_0$ 稱為 $x$ 的多項式，$a_r$ 稱為 $r$ 次項係數。次數以最大的次數為準，最高次項之係數稱為「領導係數」，$a_0$ 稱為「常數項」。'
          }
        </div>
      </Concept>
      <Example num={1} ids={['182c50491f3', '182c50797a6']} height="5cm" />
      <Example num={2} ids={['182c50b80c8', '182c51261ac']} height="5.4cm" />
    </Page>
    <Page pageNum={2}>
      <Concept num={2} title="除法原理">
        <div className={style.conceptHead}>長除法與綜合除法</div>
        <div>除法可用「長除法」求商式及餘式，若除式為　　　　時還可用「綜合除法」以節省空間。</div>
        <br />
        <div className={style.conceptHead}>除法原理</div>
        <br />
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>餘式定理</div>
        <br />
        <br />
        <br />
        <br />
      </Concept>
      <Example num={3} ids={['182c5a3a89a', '182c5a5b249']} height="9cm" />
    </Page>
    <Page pageNum={3}>
      <Example num={4} ids={['182c6228fbe', '182c6269548']} height="20cm" />
    </Page>
    <Page pageNum={4}>
      <Example num={5} ids={['182c62b9173', '182c631e45b']} />
      <Example num={6} ids={['182c62effb7', '182c63397c5']} />
    </Page>
    <Page pageNum={5}>
      <Example num={7} ids={['182c6362739', '182c6385b19']} />
      <Example num={8} ids={['182c63a444d', '182c63d0e8c']} />
    </Page>
    <Page pageNum={6}>
      <Example num={9} ids={['182c63ef8b6', '182c63fc5fb']} />
      <Example num={10} ids={['182c641fe76', '182c6491d92']} />
    </Page>
    <Page pageNum={7}>
      <Example num={11} ids={['182c643dcfd', '182c64971da']} />
      <Example num={12} ids={['182c650e595', '182c651fe31']} />
    </Page>
    <Page pageNum={8}>
      <Example num={13} ids={['182c64c44f4', '182c64e379f']} height="20cm" />
    </Page>
  </MathJax>
);

export default C3S1;

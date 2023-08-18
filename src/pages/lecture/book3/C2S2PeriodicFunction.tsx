import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C2S2PeriodicFunction = () => (
  <div>
    <Page pageNum={4}>
      <div className={style.head}>2 週期性數學模型</div>
      <Concept num={1} title="正弦函數的圖形">
        <div className={style.conceptHead}>函數是什麼？</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>正弦函數的圖形</div>
        <div>{'正弦函數 $y=\\sin x$'}</div>
        <div>
          {
            '$$\\begin{array}{c|c}x&0&\\dfrac{\\pi}{6}&\\dfrac{\\pi}{4}&\\dfrac{\\pi}{3}&\\dfrac{\\pi}{2}&\\dfrac{2\\pi}{3}&\\dfrac{3\\pi}{4}&\\dfrac{5\\pi}{6}&\\pi&\\dfrac{3\\pi}{2}&2\\pi\\\\ \\hline\\sin x\\end{array}$$'
          }
        </div>
        <div className={style.plot}>
          <img alt="" role="presentation" src="/toliman/images/三角函數格子.PNG" />
        </div>
        <div>{'週期為　　，振幅為　　。'}</div>
        <br />
        <div className={style.conceptHead}>週期函數</div>
        <div>
          {
            '當 $f(x)$ 的函數圖形每間隔一個段落就重複出現時，稱 $f(x)$ 為週期函數。從圖形可以判別是否為週期函數，並看出週期的大小。'
          }
        </div>
      </Concept>
    </Page>
    <Page pageNum={5}>
      <Example num={1} ids={['18a04fdb6e2', '18a04ffa129']} />
      <Example num={2} ids={['18a05020347', '18a05031cd1']} />
    </Page>
    <Page pageNum={6}>
      <Example num={3} ids={['18a050483eb', '18a05057ee0']} />
      <Example num={4} ids={['18a05070b29', '18a0507e990']} />
    </Page>
    <Page pageNum={7}>
      <Example num={5} ids={['17ba9706a31', '17ba9718fa4']} />
      <Concept num={2} title="函數圖形的平移與伸縮">
        <div>{'(1) 上下平移：$y=f(x)+d$，為上移 $d$ 單位。'}</div>
        <div>{'(2) 左右平移：$y=f(x+b)$，為左移 $b$ 單位。'}</div>
        <div>{'(3) 上下伸縮：$y=c\\cdot f(x)$，為上下拉長成 $c$ 倍。'}</div>
        <div>{'(4) 左右伸縮：$y=f(ax)$，為左右壓縮成 $\\dfrac{1}{a}$ 倍。'}</div>
      </Concept>
    </Page>
    <Page pageNum={8}>
      <Concept num={3} title="正弦函數圖形的平移與伸縮及影響">
        <div>{'(1) 上下平移：$y=\\sin x+d$，為上移 $d$ 單位。'}</div>
        <div>{'(2) 左右平移：$y=\\sin(x+b)$，為左移 $b$ 單位。'}</div>
        <div>{'(3) 上下伸縮：$y=c\\cdot\\sin(x)$，為上下拉長成 $c$ 倍。'}</div>
        <div>{'(4) 左右伸縮：$y=\\sin(ax)$，為左右壓縮成 $\\dfrac{1}{a}$ 倍。'}</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>函數變化後對週期的影響</div>
        <div>
          {'(1) 上下平移、上下伸縮、左右平移都不影響週期'}
          <br />
          {
            '(2) 左右伸縮會改變週期，$\\sin x$ 為週期函數且週期為 $2\\pi$，則 $y=\\sin(ax+b)$ 之週期變為 $\\dfrac{2\\pi}{|a|}$'
          }
        </div>
      </Concept>
    </Page>
    <Page pageNum={9}>
      <Example num={6} ids={['17ba72f600a', '17ba731bf10']} />
      <Example num={7} ids={['17ba733d964', '17ba7378421']} />
    </Page>
    <Page pageNum={10}>
      <Example num={8} ids={['17ba73c6d05', '17ba73e9e08']} height="20cm" />
    </Page>
    <Page pageNum={11}>
      <Example num={9} ids={['17ba745be0c', '17ba7485798']} height="20cm" />
    </Page>
    <Page pageNum={12}>
      <Example num={10} ids={['17ba974214a', '17ba9770dbc']} height="20cm" />
    </Page>
  </div>
);

export default C2S2PeriodicFunction;

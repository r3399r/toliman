import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C2S2GraphicMeaningOfDerivative = () => (
  <MathJax>
    <Page pageNum={26}>
      <div className={style.head}>2-2 函數的增減與凹向</div>
      <Concept num={1} title="函數的增減與極值">
        <div className={style.conceptHead}>遞增、嚴格遞增、遞減與嚴格遞減</div>
        <div>{'(1) 函數 $f(x)$ 滿足「若 $a<b$，則 $f(a)\\le f(b)$」，稱 $f(x)$ 為遞增'}</div>
        <div>{'(2) 函數 $f(x)$ 滿足「若 $a<b$，則 $f(a)<f(b)$」，稱 $f(x)$ 為嚴格遞增'}</div>
        <div>{'(3) 函數 $f(x)$ 滿足「若 $a<b$，則 $f(a)\\ge f(b)$」，稱 $f(x)$ 為遞減'}</div>
        <div>{'(4) 函數 $f(x)$ 滿足「若 $a<b$，則 $f(a)>f(b)$」，稱 $f(x)$ 為嚴格遞減'}</div>
        <br />
        <div>
          {
            '圖形：遞增、遞減的函數圖形可以有水平的區域，而嚴格遞增、嚴格遞減的函數圖形則否。請參考下圖(一)~(四)。'
          }
        </div>
        <div style={{ textAlign: 'center', marginBottom: '0.6cm' }}>
          <img
            style={{ maxHeight: '3cm' }}
            alt=""
            role="presentation"
            src="/toliman/images/遞增遞減.PNG"
          />
        </div>
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>極大值、極小值、最大值與最小值</div>
        <div style={{ float: 'right' }}>
          <img
            style={{ maxHeight: '5cm' }}
            alt=""
            role="presentation"
            src="/toliman/images/極大極小.PNG"
          />
        </div>
        <div>
          {
            '(1) 若 $f(a)$ 在 $x=a$ 附近是最大的，則 $f(x)$ 在 $x=a$ 有極大值 $f(a)$，又稱相對極大值'
          }
        </div>
        <div>
          {
            '(2) 若 $f(a)$ 在 $x=a$ 附近是最小的，則 $f(x)$ 在 $x=a$ 有極小值 $f(a)$，又稱相對極小值'
          }
        </div>
        <div>{'(3) 若 $f(a)$ 在定義域中是最大的，則 $f(x)$ 在 $x=a$ 有最大值 $f(a)$'}</div>
        <div>{'(4) 若 $f(a)$ 在定義域中是最小的，則 $f(x)$ 在 $x=a$ 有最小值 $f(a)$\n　\n'}</div>
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>函數的極值</div>
        <div>
          {
            "若 $f(x)$ 在 $x=a$ 發生極值，且在 $x=a$ 可微分，則 $f'(a)=0$。也就是說，我們可以利用圖形特性，找出斜率為 $0$ 且其附近的斜率是正負交替的地方，即為極值所在。"
          }
        </div>
      </Concept>
    </Page>
    <Page pageNum={27}>
      <Example num={1} ids={['17c91d001fd', '17c91d11cb7']} />
      <Example num={2} ids={['17c91d094c1', '17c91d2fd27']} />
    </Page>
    <Page pageNum={28}>
      <Example num={3} ids={['17c91d40727', '17c91d49212']} />
      <Example num={4} ids={['17c91d586ed', '17c91d66969']} />
    </Page>
    <Page pageNum={29}>
      <Example num={5} ids={['17c91d74236', '17c94b815cd']} height="10cm" />
      <Concept num={2} title="凹口方向與反曲點">
        <div className={style.conceptHead}>函數圖形的凹口方向</div>
        <div style={{ float: 'right' }}>
          <img
            style={{ maxHeight: '3.5cm' }}
            alt=""
            role="presentation"
            src="/toliman/images/凹口.PNG"
          />
        </div>
        <div>{'函數圖形彎曲的部分看作一個虎口：'}</div>
        <div>{"(1) 虎口朝上稱為「凹向上」，因斜率遞增，滿足 $f''(x)>0$"}</div>
        <div>{"(2) 虎口朝下稱為「凹向下」，因斜率遞減，滿足 $f''(x)<0$"}</div>
        <br />
        <br />
        <div className={style.conceptHead}>反曲點</div>
        <div>
          {"凹口方向改變的點，稱為反曲點。若在 $x=a$ 發生反曲點，則必 $f''(a)=0$，反之不一定成立。"}
        </div>
      </Concept>
    </Page>
    <Page pageNum={30}>
      <Example num={6} ids={['17c94b93441', '17c94ba003c']} />
      <Example num={7} ids={['17c94baa9c6', '17c94bb1604']} />
    </Page>
    <Page pageNum={31}>
      <Example num={8} ids={['17c94bb93cc', '17c94706ca6']} />
      <Example num={9} ids={['17c96169a39', '17c961bcd17']} />
    </Page>
  </MathJax>
);

export default C2S2GraphicMeaningOfDerivative;

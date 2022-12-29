import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const B2C1S4 = () => (
  <MathJax>
    <Page pageNum={22}>
      <div className={style.head}>4 反三角與三角測量</div>
      <Concept num={1} title="反三角的認識" height="0cm">
        <br />
      </Concept>
      <Example num={1} ids={['17ea89807ee', '17ea899eeea']} height="2.3cm" />
      <Example num={2} ids={['17ea898c29f', '17ea89a4ec7']} height="2.3cm" />
      <Example num={3} ids={['17ea8993dcc', '17ea89ac11d']} height="2.2cm" />
    </Page>
    <Page pageNum={23}>
      <Concept num={2} title="三角測量的名詞與解題">
        <div>
          1. 視線：眼睛與觀測物的連線
          <br />
          2. 仰角：視線在水平線上方時，視線與水平線的夾角稱為「仰角」
          <br />
          3. 俯角：視線在水平線下方時，視線與水平面的夾角稱為「俯角」
          <br />
          4. 方位：例如「北 $30\du$ 東」為北邊向東轉 $30\du$ 所指的方向
        </div>
        <br />
        <div className={style.conceptHead}>解題步驟</div>
        <div>
          作測量問題時一定要先依題意作圖，圖可分為「平面圖」與「立體圖」。依題意畫好圖後，找出圖中的三角形的邊角關係，尤其注意是否出現直角三角形，有些題目用畢氏定理即可解出，進階的問題則必須用正弦定理、餘弦定理，常需假設未知數，再列式求解。
        </div>
      </Concept>
      <Example num={4} ids={['17ea89b26a0', '17ea89dba3a']} height="12.3cm" />
    </Page>
    <Page pageNum={24}>
      <Example num={5} ids={['17ea89cc79c', '17ea89e4fbf']} />
      <Example num={6} ids={['17ea89f0591', '17ea8a01b7b']} />
    </Page>
    <Page pageNum={25}>
      <Example num={7} ids={['17da23d8644', '17ea89e4fbf']} />
      <Example num={8} ids={['17ad187f99e', '17ad187f99f']} />
    </Page>
  </MathJax>
);

export default B2C1S4;

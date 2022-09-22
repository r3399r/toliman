import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C3S1Integral = () => (
  <MathJax>
    <Page pageNum={32}>
      <div className={style.head}>3-1 積分的意義</div>
      <Concept num={1} title="上和與下和">
        <div className={style.conceptHead}>上和</div>
        <div style={{ float: 'right' }}>
          <img
            style={{ maxHeight: '7cm', marginLeft: '0.4cm' }}
            alt=""
            role="presentation"
            src="/toliman/images/上和下和.PNG"
          />
        </div>
        <div>
          {
            '把區間 $[a,b]$ 分成 $n$ 等分，劃分出 $n$ 個等寬的長方形，每一個長方形取 $f(x)$ 的最大值當高，則此 $n$ 個長方形的面積和，稱為 $n$ 等分的上和，記為 $U_n$。'
          }
        </div>
        <br />
        <div className={style.conceptHead}>下和</div>
        <div>
          {
            '把區間 $[a,b]$ 分成 $n$ 等分，劃分出 $n$ 個等寬的長方形，每一個長方形取 $f(x)$ 的最小值當高，則此 $n$ 個長方形的面積和，稱為 $n$ 等分的下和，記為 $L_n$。'
          }
        </div>
        <br />
        <div className={style.conceptHead}>黎曼和</div>
        <div>
          {'如上和、下和，把區間 $[a,b]$ 分成無數小長方形以計算曲線下面積的概念，統稱為黎曼和。'}
        </div>
      </Concept>
      <Example num={1} ids={['17c96241d2e', '17c9625c489']} height="8.1cm" />
    </Page>
    <Page pageNum={33}>
      <Concept num={2} title="定積分">
        <div className={style.conceptHead}>定積分</div>
        <div>
          {
            '若函數 $f(x)$ 在區間 $[a,b]$ 分成 $n$ 等分，其上和與下和有相同的極限值，即 $\\displaystyle\\lim_{n\\to\\infty}U_n=\\lim_{n\\to\\infty}L_n$，則稱此極限值為 $f(x)$ 由 $a$ 到 $b$ 的定積分，記為 $\\displaystyle\\int_a^bf(x)\\text dx$'
          }
        </div>
        <br />
        <br />
        <div className={style.conceptHead}>曲線下面積</div>
        <div>
          {
            '在 $[a,b]$ 的範圍內，若 $f(x)\\ge0$，則定積分 $\\displaystyle\\int_a^bf(x)\\text dx$ 表示在 $a$ 到 $b$ 的範圍內，$f(x)$ 與 $x$ 軸所圍成的曲線下面積，如下圖(一)。若 $f(x)<0$，則定積分為負值，去掉負號才是面積，如下圖(二)。'
          }
        </div>
        <div style={{ textAlign: 'center', marginTop: '-0.3cm', marginBottom: '2cm' }}>
          <img
            style={{ maxHeight: '4.5cm' }}
            alt=""
            role="presentation"
            src="/toliman/images/曲線下面積.PNG"
          />
        </div>
        <br />
        <div className={style.conceptHead}>定積分的性質</div>
        <div>{'(1) $\\displaystyle\\int_a^bf(x)\\text dx=-\\int_b^af(x)\\text dx$'}</div>
        <div>
          {
            '(2) $\\displaystyle\\int_a^b[f(x)+g(x)]\\text dx=\\int_a^bf(x)\\text dx+\\int_a^bg(x)\\text dx$'
          }
        </div>
        <div>
          {
            '(3) $c\\in\\mathbb{R}$，$\\displaystyle\\int_a^b[c\\cdot f(x)]\\text dx=c\\cdot\\int_a^bf(x)\\text dx$'
          }
        </div>
        <div>
          {
            '(4) $\\displaystyle\\int_a^cf(x)\\text dx=\\int_a^bf(x)\\text dx+\\int_b^cf(x)\\text dx$'
          }
        </div>
      </Concept>
    </Page>
    <Page pageNum={34}>
      <Example num={2} ids={['17c96288a36', '17c96280656']} height="20cm" />
    </Page>
    <Page pageNum={35}>
      <Example num={3} ids={['17c9629033b', '17c962ad672']} />
      <Example num={4} ids={['17c962a6727', '17c9629b8e1']} />
    </Page>
    <Page pageNum={36}>
      <Example num={5} ids={['17c962b6888', '17c962d6caf']} />
      <Example num={6} ids={['17c962cbc5e', '17c962c151a']} />
    </Page>
    <Page pageNum={37}>
      <Concept num={3} title="反導函數與微積分基本定理">
        <div className={style.conceptHead}>反導函數</div>
        <div>
          {
            "若函數 $g(x)$ 的微分為 $f(x)$，即 $g'(x)=f(x)$，則稱 $g(x)$ 為 $f(x)$ 的反導函數，反導函數又稱為不定積分。反導函數不唯一，可加減任一常數。如 $\\displaystyle\\int6x\\text dx=3x^2+c$。"
          }
        </div>
        <br />
        <div className={style.conceptHead}>微積分基本定理</div>
        <div>
          {
            "設 $f(x)$ 與 $g(x)$ 滿足 $g'(x)=f(x)$，則 $\\displaystyle\\int_a^bf(x)\\text dx=g(b)-g(a)$。"
          }
        </div>
        <div>
          {
            '注意：為了方便，常把 $g(b)-g(a)$ 記為 $g(x)|_a^b$。此定理的證明過程說明了「微分」與「積分」是互逆的過程，如此一來多項式的積分算起來就簡單很多。'
          }
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Concept>
      <Example num={7} ids={['17c962efc08', '17c962f51e7']} height="7cm" />
    </Page>
    <Page pageNum={38}>
      <Example num={8} ids={['17c962e94a7', '17ca06769e9']} />
      <Example num={9} ids={['17c962f9c43', '17ca0680d14']} />
    </Page>
    <Page pageNum={39}>
      <Example num={10} ids={['17ca068f049', '17ca0696939']} />
      <Example num={11} ids={['17ca068ccbb', '17ca069bfcc']} />
    </Page>
    <Page pageNum={40}>
      <Example num={12} ids={['17ca06a6a76', '17c9e0517b4']} />
      <Example num={13} ids={['17c9e05704f', '17c9e08c72f']} />
    </Page>
  </MathJax>
);

export default C3S1Integral;

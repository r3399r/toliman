import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C3S1Integral = () => (
  <div>
    <Page pageNum={15}>
      <div className={style.head}>3-1 積分的意義</div>
      <Concept num={1} title="上和與下和" height="7.8cm">
        <div className={style.conceptHead}>上和</div>
        <div style={{ float: 'right' }}>
          <img
            style={{ maxHeight: '7cm' }}
            alt=""
            role="presentation"
            src="/toliman/images/上和下和.PNG"
          />
        </div>
        <Textarea2MathJax
          text={
            '把區間 $[a,b]$ 分成 $n$ 等分，劃分出 $n$ 個等寬的長方形，每一個長方形取 $f(x)$ 的最大值當高，則此 $n$ 個長方形的面積和，稱為 $n$ 等分的上和，記為 $U_n$。'
          }
        />
        <div className={style.conceptHead}>下和</div>
        <Textarea2MathJax
          text={
            '把區間 $[a,b]$ 分成 $n$ 等分，劃分出 $n$ 個等寬的長方形，每一個長方形取 $f(x)$ 的最小值當高，則此 $n$ 個長方形的面積和，稱為 $n$ 等分的下和，記為 $L_n$。'
          }
        />
        <div className={style.conceptHead}>黎曼和</div>
        <Textarea2MathJax
          text={
            '如上和、下和，把區間 $[a,b]$ 分成無數小長方形以計算曲線下面積的概念，統稱為黎曼和。'
          }
        />
      </Concept>
      <Example num={1} ids={['17c96241d2e', '17c9625c489']} height="12.5cm" />
    </Page>
    <Page pageNum={16}>
      <Concept num={2} title="定積分">
        <div className={style.conceptHead}>定積分</div>
        <Textarea2MathJax
          text={
            '若函數 $f(x)$ 在區間 $[a,b]$ 分成 $n$ 等分，其上和與下和有相同的極限值，即 $\\displaystyle\\lim_{n\\to\\infty}U_n=\\lim_{n\\to\\infty}L_n$，則稱此極限值為 $f(x)$ 由 $a$ 到 $b$ 的定積分，記為 $\\displaystyle\\int_a^bf(x)\\dd x$\n　\n'
          }
        />
        <div className={style.conceptHead}>曲線下面積</div>
        <Textarea2MathJax
          text={
            '在 $[a,b]$ 的範圍內，若 $f(x)\\ge0$，則定積分 $\\displaystyle\\int_a^bf(x)\\dd x$ 表示在 $a$ 到 $b$ 的範圍內，$f(x)$ 與 $x$ 軸所圍成的曲線下面積，如下圖(一)。若 $f(x)<0$，則定積分為負值，去掉負號才是面積，如下圖(二)。'
          }
        />
        <div style={{ textAlign: 'center', marginTop: '-0.3cm', marginBottom: '2cm' }}>
          <img
            style={{ maxHeight: '4.5cm' }}
            alt=""
            role="presentation"
            src="/toliman/images/曲線下面積.PNG"
          />
        </div>
        <div className={style.conceptHead}>定積分的性質</div>
        <Textarea2MathJax text={'(1) $\\displaystyle\\int_a^bf(x)\\dd x=-\\int_b^af(x)\\dd x$'} />
        <Textarea2MathJax
          text={
            '(2) $\\displaystyle\\int_a^b[f(x)+g(x)]\\dd x=\\int_a^bf(x)\\dd x+\\int_a^bg(x)\\dd x$'
          }
        />
        <Textarea2MathJax
          text={
            '(3) $c\\in\\mathbb{R}$，$\\displaystyle\\int_a^b[c\\cdot f(x)]\\dd x=c\\cdot\\int_a^bf(x)\\dd x$'
          }
        />
        <Textarea2MathJax
          text={'(4) $\\displaystyle\\int_a^cf(x)\\dd x=\\int_a^bf(x)\\dd x+\\int_b^cf(x)\\dd x$'}
        />
      </Concept>
    </Page>
    <Page pageNum={17}>
      <Example num={2} ids={['17c96288a36', '17c96280656']} height="23.3cm" />
    </Page>
    <Page pageNum={18}>
      <Example num={3} ids={['17c9629033b', '17c962ad672']} />
      <Example num={4} ids={['17c962a6727', '17c9629b8e1']} />
    </Page>
    <Page pageNum={19}>
      <Example num={5} ids={['17c962b6888', '17c962d6caf']} />
      <Example num={6} ids={['17c962cbc5e', '17c962c151a']} />
    </Page>
    <Page pageNum={20}>
      <Concept num={3} title="反導函數與微積分基本定理" height="14cm">
        <div className={style.conceptHead}>反導函數</div>
        <Textarea2MathJax
          text={
            "若函數 $g(x)$ 的微分為 $f(x)$，即 $g'(x)=f(x)$，則稱 $g(x)$ 為 $f(x)$ 的反導函數，反導函數又稱為不定積分。反導函數不唯一，可加減任一常數。如 $\\displaystyle\\int6x\\dd x=3x^2+c$。"
          }
        />
        <div className={style.conceptHead}>微積分基本定理</div>
        <Textarea2MathJax
          text={
            "設 $f(x)$ 與 $g(x)$ 滿足 $g'(x)=f(x)$，則 $\\displaystyle\\int_a^bf(x)\\dd x=g(b)-g(a)$。"
          }
        />
        <Textarea2MathJax
          text={
            '注意：為了方便，常把 $g(b)-g(a)$ 記為 $g(x)|_a^b$。此定理的證明過程說明了「微分」與「積分」是互逆的過程，如此一來多項式的積分算起來就簡單很多。'
          }
        />
      </Concept>
      <Example num={7} ids={['17c962efc08', '17c962f51e7']} height="7.5cm" />
    </Page>
    <Page pageNum={21}>
      <Example num={8} ids={['17c962e94a7', '17ca06769e9']} />
      <Example num={9} ids={['17c962f9c43', '17ca0680d14']} />
    </Page>
    <Page pageNum={22}>
      <Example num={10} ids={['17ca068f049', '17ca0696939']} />
      <Example num={11} ids={['17ca068ccbb', '17ca069bfcc']} />
    </Page>
    <Page pageNum={23}>
      <Example num={12} ids={['17ca06a6a76', '17c9e0517b4']} />
      <Example num={13} ids={['17c9e05704f', '17c9e08c72f']} />
    </Page>
  </div>
);

export default C3S1Integral;

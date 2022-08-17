import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C1S3CommonLog = () => (
  <MathJax>
    <Page pageNum={15}>
      <div className={style.head}>3 指數與常用對數</div>
      <Concept num={1} title="指數符號與指數律" height="9.5cm">
        <div className={style.conceptHead}>指數符號</div>
        <div>$a^n$，其中 $a$ 稱為「底數」，$n$ 稱為「指數」或「次數」</div>
        <div className={style.conceptHead}>次方</div>
        <div>1. 正整數次方：$n$ 個 $a$ 連乘成為 $a^n$</div>
        <div>2. 零次方：若 $a\ne0$，則 $a^0=1$。另外，$0^0$ 為無意義。</div>
        <div>{'3. 負整數次方：若 $a\\ne0$，則 $a^{-n}=\\dfrac1{a^n}$'}</div>
        <div>{'4. 有理數次方：若 $a>0$，則 $a^{\\frac m n}=\\sqrt[n]{a^m}$'}</div>
        <div>
          {'5. 無理數次方：$a>0$，利用近似的方式定義無理數次方，例如 $2^\\pi\\approx2^{3.14159}$'}
        </div>
        <div>注意：當次數為整數時，底數可為負；當次數非整數時，底數必須為正才有意義。</div>
        <div className={style.conceptHead}>指數律</div>
      </Concept>
      <Example num={1} ids={['18255647dfe', '182556659e7']} />
    </Page>
    <Page pageNum={16}>
      <Example num={2} ids={['182556a77b3', '17c2b2a519f']} />
      <Example num={3} ids={['182556e3786', '17c2b34ea1a']} />
    </Page>
    <Page pageNum={17}>
      <Example num={4} ids={['17c2b38b1a4', '1825572bb3b']} />
      <Example num={5} ids={['1825570630b', '18255741868']} />
    </Page>
    <Page pageNum={18}>
      <Example num={6} ids={['18252d8edcd', '182533ad2ff']} />
      <Example num={7} ids={['1825338a7a6', '182533ba210']} />
    </Page>
    <Page pageNum={19}>
      <Concept num={2} title="科學記號">
        <div className={style.conceptHead}>科學記號</div>
        <div>
          {
            '在各科領域中，常會遇到很大或很小的正數，可表示成 $a\\times10^n$ 的型態，稱為科學記號表法。例如 $2.36\\times10^{16}$'
          }
        </div>
        <div className={style.conceptHead}>判斷位數</div>
        <div>{'想一想：$2\\times10^4$ 為　　位數；$3\\times10^{-6}$ 在小數點後第　　位不為 0'}</div>
        <br />
        <br />
        <div>
          {
            '(1) $a\\times10^n$ 的整數部分有 $n+1$ 位　　(2) $a\\times10^{-n}$ 在小數點後第 $n$ 位開始不為 0'
          }
        </div>
      </Concept>
      <Example num={8} ids={['17c2b3d2484', '1825340b341']} height="4cm" />
      <Example num={9} ids={['182533d8fe3', '18253420bea']} height="3.5cm" />
    </Page>
    <Page pageNum={20}>
      <Example num={10} ids={['182533e6b13', '18253428533']} />
      <Concept num={3} title="常用對數">
        <div className={style.conceptHead}>認識常用對數</div>
        <div>想一想：$10^0=1$，$10^1=10$，那 10 的幾次方為 2 ?</div>
        <br />
        <br />
        <br />
        <br />
        <div>精確值記為 $\log2$，稱為「對數」，其中 2 稱為「真數」</div>
        <div className={style.conceptHead}>指數對數切換</div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>注意：真數必須為正數才有意義，如 $\log0$、$\log(-10)$ 均無意義</div>
      </Concept>
    </Page>
    <Page pageNum={21}>
      <Example num={11} ids={['1825343d1e5', '1825349ad1b']} />
      <Example num={12} ids={['18253445b60', '182534ba324']} />
    </Page>
    <Page pageNum={22}>
      <Example num={13} ids={['182534d6f9f', '182534ea30e']} height="3.3cm" />
      <Example num={14} ids={['182534c2155', '182534d02b8']} height="1.8cm" />
      <Example num={15} ids={['182534f1779', '18253504b95']} height="4.7cm" />
    </Page>
    <Page pageNum={23}>
      <Example num={16} ids={['1825353a634', '1825355a364']} height="20cm" />
    </Page>
  </MathJax>
);

export default C1S3CommonLog;

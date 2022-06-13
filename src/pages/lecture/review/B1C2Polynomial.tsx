import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';
import Page from 'src/pages/lecture/component/Page';

const B1C2Polynomial = () => {
  return (
    <MathJax>
      <Page pageNum={12}>
        <div className={style.head}>Ch2 多項式</div>
        <Concept num={1} title="多項式的基本概念">
          <div>
            {
              '(1) 項：以加號、減號、等於為分隔，分隔出的每一個稱為「項」。等量公理運算時以「項」為基礎，例如：$a+bc=3-xy\\Rightarrow2a+2bc=6-2xy$。'
            }
            <br />
            {
              '(2) 多項式：$a_nx^n+a_{n-1}x^{n-1}+\\cdots+a_1x+a_0$，$a_k$ 稱為係數，每一項皆為 $x^k$。'
            }
            <br />
            {
              '(3) 多項式的次數：以最高次且係數非零的項為準，$f(x)$ 的次數為 $n$，記為 $\\deg f(x)=n$。'
            }
            <br />
            {'(4) 各項係數和：即 $f(1)$。'}
          </div>
        </Concept>
        <Exercise ids={['17a17f2a43b', '17a17f48c08']} />
        <Concept num={2} title="多項式的除法運算">
          <div>
            任兩多項式，皆可用除法找到「唯一的」商式及餘式，除法的運算方法分為長除法與綜合除法。任何除法皆可用「長除法」作運算；當除式為一次式時，則可用「綜合除法」作運算。
          </div>
        </Concept>
        <Exercise ids={['17a17faa323', '17a17fb7134']} height="6.5cm" />
      </Page>
      <Page pageNum={13}>
        <Concept num={3} title="多項式的除法原理">
          <div>
            (1)
            <br />
            (2)
          </div>
        </Concept>
        <Exercise ids={['17a17fea46a', '17a17ffc39c']} height="8.6cm" />
        <Concept num={4} title="連續綜合除法與局部特徵">
          <div>
            {
              '(1) 連續綜合除法：可將 $x$ 的多項式化成 $x-k$ 的多項式，適合用於計算 $x-k$ 附近的值。'
            }
            <br />
            {
              '(2) 局部特徵：$f(x)$ 在點 $(k,f(k))$ 附近的圖形近似於一條直線，此直線即為切線，又稱為 $f(x)$ 在 $x=k$ 的一次近似。'
            }
          </div>
        </Concept>
        <Exercise ids={['17a180799da', '18155c5e153']} height="6.5cm" />
      </Page>
      <Page pageNum={14}>
        <Concept num={5} title="餘式定理" height="3.1cm">
          <div>
            {
              '「$f(x)$ 除以 $x-k$ 的餘式」為 $f(k)$；「$f(x)$ 除以 $ax-b$ 的餘式」為 $f(\\frac b a)$。'
            }
            <br />
            {
              '反之，$f(k)$ 為「$f(x)$ 除以 $x-k$ 的餘式」；$f(\\frac b a)$ 為「$f(x)$ 除以 $ax-b$ 的餘式」。'
            }
          </div>
        </Concept>
        <Exercise ids={['17a180d10c7', '17a180dadba']} height="7cm" />
        <Concept num={6} title="因式定理">
          <div>
            {
              '「$x-a$ 整除 $f(x)$」$\\Leftrightarrow$「$x-a$ 為 $f(x)$ 的因式」$\\Leftrightarrow$「$f(a)=0$」$\\Leftrightarrow$「$f(x)$ 有 $x=a$ 的根」。以上四者完全相同，故「整除」與因式分解、解方程式密切相關。'
            }
          </div>
        </Concept>
        <Exercise ids={['17a181a61da', '17a181b5061']} height="7cm" />
      </Page>
      <Page pageNum={15}>
        <Concept num={7} title="多項式的假設">
          <div>
            {'(1) 基本假設：$f(x)=ax^2+bx+c$'}
            <br />
            {'(2) 已知有一根 $k$，表示有因式 $x-k$，可設為 $f(x)=(ax+b)(x-k)$'}
            <br />
            {
              '(3) 已知有兩根 $k_1$、$k_2$，表示有因式 $x-k_1$ 與 $x-k_2$，可設為 $f(x)=a(x-k_1)(x-k_2)$'
            }
            <br />
            {
              '(4) 牛頓插值法：過平面上三點 $(a,f(a))$、$(b,f(b))$、$(c,f(c))$，可設為$$f(x)=A(x-a)(x-b)+B(x-a)+C$$'
            }
            <br />
            {'(5) 結合 (1) 與 (4)：可任意假設，只要符合次數即可，如 $a(x^2+bx+c)+dx+e$'}
          </div>
        </Concept>
        <Exercise
          ids={['17a18286398', '18155dc8999', '17a182b5deb', '18155df085c']}
          height="8.1cm"
        />
      </Page>
      <Page pageNum={16}>
        <Concept num={8} title="一次函數">
          <div>
            {
              '一次函數 $f(x)=ax+b$ 的圖形為平面上的直線，故又稱線型函數，由線上兩點坐標決定 $a$ 與 $b$，其中 $a$ 為斜率，$b$ 為 $y$ 截距。'
            }
          </div>
        </Concept>
        <Exercise ids={['17a18414108', '1815800314f']} />
        <Concept num={9} title="二次函數">
          <div>
            {'(1) $y=ax^2+bx+c$ 的圖形為？'}
            <br />
            <br />
            {'(2) 開口朝向：$a>0$，開口朝　　；$a<0$，開口朝　　'}
            <br />
            <br />
            {'(3) 最大值與最小值：求極值時，可用「配方法」處理，頂點就是極值所在。'}
            <br />
            {
              '$y=ax^2+bx+c$ 經配方後可得知其頂點坐標為 $(-\\frac{b}{2a},\\frac{-D}{4a})$，也就是說，當 $x=$　　　時，二次函數有最大值或最小值，此極值為 $\\frac{-D}{4a}$。'
            }
            <br />
            <br />
            {
              '(4) 方程式的解：令 $y=0$ 得方程式 $ax^2+bx+c=0$，解 $x$ 也就是求圖形與 $x$ 軸的交點，其求法可用因式分解或直接用公式解 $x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$'
            }
            <br />
            <br />
            {'(5) 令 $D=b^2-4ac$，稱為判別式，'}
            <br />
            {'若 $D>0$，則拋物線與 $x$ 軸交於兩點，方程式有兩相異實根'}
            <br />
            {'若 $D=0$，則拋物線與 $x$ 軸相切，方程式有兩相等實根(重根)'}
            <br />
            {'若 $D<0$，則拋物線與 $x$ 軸不相交，方程式沒有實根(兩虛根)'}
          </div>
        </Concept>
      </Page>
      <Page pageNum={17}>
        <Exercise
          ids={[
            '17a19a05422',
            '181582aa801',
            '17a19a1410c',
            '1815833a34f',
            '1815831939c',
            '1815827492c',
          ]}
          height="7.8cm"
        />
      </Page>
      <Page pageNum={18}>
        <Concept num={10} title="三次函數">
          <div>
            {
              '(1) 基本形式：$y=ax^3+px$，對稱中心 (0,0)，依 $a$、$p$ 的正負情形可將三次函數圖形分類：'
            }
            <br />
            <br />
            <br />
            <br />
            <br />
            {
              '(2) 一般形式：所有三次函數皆由基本形式平移而來，也就是說，$y=ax^3+bx^2+cx+d$ 可改寫為 $y=a(x-h)^3+p(x-h)+k$，對稱中心 $(h,k)$，其中 $h=-\\frac b{3a}$ (背!)'
            }
          </div>
        </Concept>
        <Exercise ids={['17a19a9301f', '17a19abbcc7']} height="7cm" />
        <Concept num={11} title="高次多項式與大域特徵">
          <div>
            {'(1) 高次多項式的簡略圖形：$n$ 次多項式的圖形會有至多 $n-1$ 個水平切線。'}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {
              '(2) 大域特徵：多項式 $ax^n+bx^{n-1}+\\cdots$，探討 $a$ 的正負及 $n$ 的奇偶對圖形的影響：'
            }
          </div>
        </Concept>
      </Page>
      <Page pageNum={19}>
        <Exercise ids={['181585ee75b', '18158627ae9']} />
        <Concept num={12} title="多項式不等式">
          <div>
            {'按照下列步驟即可順利解出不等式：'}
            <br />
            {'(1) 令某一邊為 0　(2) 因式分解，在數線上點出解　(3) 畫出函數圖形　(4) 依題目所求找解'}
            <br />
            {'畫圖時須注意：偶數重根為相切、奇數重根則否'}
          </div>
        </Concept>
        <Exercise ids={['1815876f5b7', '181587a3095', '17a19bb02e6', '17a19bbf61e']} />
      </Page>
      <Page pageNum={20}>
        <Example num={1} ids={['17a19c2b55e', '17a1ad46bf7']} />
        <Example num={2} ids={['17a1adcc0ed', '17a1ade3264']} />
      </Page>
      <Page pageNum={21}>
        <Example num={3} ids={['17a1aff775f', '17a1b0214d9']} />
        <Example num={4} ids={['17a1b0543b3', '17a1b0ada5c']} />
      </Page>
      <Page pageNum={22}>
        <Example num={5} ids={['17a1b0d869e', '17a1b10ab40']} />
        <Example num={6} ids={['17a2d6163e4', '17a2d6ebedf']} />
      </Page>
      <Page pageNum={23}>
        <Example num={7} ids={['17a2d790e42', '17a2da48070']} />
        <Example num={8} ids={['17a2da5fdc6', '17a2db03ab8']} />
      </Page>
      <Page pageNum={24}>
        <Example num={9} ids={['17a2db390e3', '17a2db5f497']} />
        <Example num={10} ids={['17a2db8d3e7', '17a2dbb5a10']} />
      </Page>
      <Page pageNum={25}>
        <Example num={11} ids={['181588e7b16', '1815890a8b2']} />
        <Example num={12} ids={['1815892e7ec', '181589436c7']} />
      </Page>
    </MathJax>
  );
};

export default B1C2Polynomial;

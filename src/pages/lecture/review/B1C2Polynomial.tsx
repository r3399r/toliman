import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';
import Page from 'src/pages/lecture/component/Page';

const B1C2Polynomial = () => {
  return (
    <div>
      <Page pageNum={7}>
        <div className={style.head}>Ch2 多項式</div>
        <Concept num={1} title="多項式的基本概念">
          <Textarea2MathJax
            text={
              '(1) 形如 $$f(x)=a_nx^n+a_{n-1}x^{n-1}+\\cdots+a_1x+a_0$$ 的函數稱為多項式，加減號隔開形成多個「項」，其中 $$a_n$$ 稱為 $$n$$ 次項係數，$$a_0$$ 稱為常數項。\n(2) 多項式的次數以最高次項為準，$$f(x)$$ 的次數為 $$n$$，記為 $$\\deg f(x)=n$$。\n(3) $$f(x)$$ 所有係數之和為 $$f(1)$$。'
            }
          />
        </Concept>
        <Exercise ids={['17a17f2a43b', '17a17f48c08']} />
        <Concept num={2} title="多項式的除法">
          <Textarea2MathJax
            text={
              '任兩多項式，皆可用長除法找到唯一的商式及餘式。\n若除式為一次式時，可用簡化之綜合除法縮減計算空間。'
            }
          />
        </Concept>
        <Exercise ids={['17a17faa323', '17a17fb7134']} height="6.8cm" />
      </Page>
      <Page pageNum={8}>
        <Concept num={3} title="多項式的除法原理" height="3cm">
          <div />
        </Concept>
        <Exercise ids={['17a17fea46a', '17a17ffc39c']} height="7cm" />
        <Concept num={4} title="連續綜合除法與一次近似">
          <Textarea2MathJax
            text={
              '將 $$f(x)$$ 作連續綜合除法可將 $$x$$ 的多項式化成 $$x-k$$ 的多項式，圖形經過點 $$(k,f(k))$$，在 $$x$$ 靠近 $$k$$ 時，$$f(x)$$ 的圖形會近似一條直線，取一次以下的項即可得到，又稱為 $$f(x)$$ 在 $$x=k$$ 的一次近似。'
            }
          />
        </Concept>
        <Exercise ids={['17a180799da']} />
      </Page>
      <Page pageNum={9}>
        <Concept num={5} title="餘式定理" height="4.5cm">
          <Textarea2MathJax
            text={
              '$$f(x)$$ 除以 $$x-k$$ 的餘式為 $$f(k)$$；$$f(x)$$ 除以 $$ax-b$$ 的餘式為 $$f\\left(\\frac{b}{a}\\right)$$，反之亦同。'
            }
          />
        </Concept>
        <Exercise ids={['17a180d10c7', '17a180dadba']} />
        <Concept num={6} title="因式定理">
          <Textarea2MathJax
            text={
              '$$x-a$$ 整除 $$f(x)\\Leftrightarrow x-a$$ 為 $$f(x)$$ 的因式 $$\\Leftrightarrow f(a)=0\\Leftrightarrow f(x)=0$$ 有 $$x=a$$ 的根/解\n以上四者完全相同，故整除與因式分解、解方程式密切相關。'
            }
          />
        </Concept>
        <Exercise ids={['17a181a61da', '17a181b5061']} />
      </Page>
      <Page pageNum={10}>
        <Concept num={7} title="多項式的假設">
          <Textarea2MathJax
            text={
              '(1) 基本假設，$$f(x)=ax^2+bx+c$$\n(2) 已知有一根 $$k$$，可設為 $$f(x)=(ax+b)(x-k)$$\n(3) 已知有兩根 $$k_1$$、$$k_2$$，可設為 $$f(x)=a(x-k_1)(x-k_2)$$\n(3) 牛頓插值法：過平面上三點 $$(a,f(a))$$、$$(b,f(b))$$、$$(c,f(c))$$，可設為\n$$f(x)=A(x-a)(x-b)+B(x-a)+C$$'
            }
          />
        </Concept>
        <Exercise ids={['17a18286398', '17a182b5deb']} height="7cm" />
        <Concept num={8} title="二次方程式的根">
          <Textarea2MathJax
            text={
              '二次方程式 $$ax^2+bx+c=0$$ 必有兩根，可能為兩相異實根、重根、兩虛根，公式解：\n$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$\n根與係數：若二次方程式之兩根為 $$\\alpha$$、$$\\beta$$，則 $$\\begin{cases}\\alpha+\\beta=-\\frac{b}{a}\\\\\\alpha\\beta=\\frac{c}{a}\\end{cases}$$'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={11}>
        <Exercise ids={['17a183408c1', '17a18354981']} />
        <Concept num={9} title="一次函數">
          <Textarea2MathJax
            text={
              '一次函數 $$f(x)=ax+b$$ 的圖形為平面上的直線，故又稱線型函數，由線上兩點坐標決定 $$a$$ 與 $$b$$，其中 $$a$$ 為斜率，$$b$$ 為 $$y$$ 截距。'
            }
          />
        </Concept>
        <Exercise ids={['17a18414108']} height="5cm" />
        <Concept num={10} title="二次函數">
          <Textarea2MathJax
            text={'(1) $$y=ax^2+bx+c$$ 的圖形為拋物線。$$a>0$$，開口朝　　；$$a<0$$，開口朝　　。'}
          />
          <Textarea2MathJax
            text={
              '(2) $$y=ax^2+bx+c$$ 配方後可得到 $$y=a\\left(x+\\frac{b}{2a}\\right)^2+\\frac{4ac-b^2}{4a}$$，得頂點坐標為 $$\\left(-\\frac{b}{2a},\\frac{4ac-b^2}{4a}\\right)$$，也就是說，當 $$x=$$　　　時，二次函數有最大值或極小值。'
            }
          />
          <Textarea2MathJax
            text={
              '(3) 令 $$D=b^2-4ac$$，稱為判別式，\n若 $$D>0$$，則拋物線與 $$x$$ 軸交於兩點，方程式有兩相異實根\n若 $$D=0$$，則拋物線與 $$x$$ 軸相切，方程式有兩相等實根(重根)\n若 $$D<0$$，則拋物線與 $$x$$ 軸不相交，方程式沒有實根(兩虛根)'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={12}>
        <Exercise ids={['17a19a05422', '17a19a1410c']} height="7cm" />
        <Concept num={11} title="三次函數" height="6cm">
          <Textarea2MathJax
            text={
              '對於所有三次函數 $$f(x)=ax^3+bx^2+cx+d$$ 皆可以配方成為 $$f(x)=a\\left(x+\\frac{b}{3a}\\right)^3+p\\left(x+\\frac{b}{3a}\\right)+q$$ 的形式，其中 $$\\left(-\\frac{b}{3a},q\\right)$$ 為 $$f(x)$$ 的對稱中心。\n依 $$a$$、$$p$$ 的正負情形可將三次函數的圖形分類：'
            }
          />
        </Concept>
        <Exercise ids={['17a19a9301f', '17a19abbcc7']} height="7cm" />
      </Page>
      <Page pageNum={13}>
        <Concept num={12} title="高次多項式" height="11cm">
          <Textarea2MathJax
            text={
              '(1) $$n$$ 次多項式會有 $$n-1$$ 個拐點，拐點分開則有清楚的極大值與極小值；拐點在同一處則不會產生極大值與極小值。'
            }
          />
          <Textarea2MathJax
            text={
              '(2) 若最高次項為正，則圖形往右上；若最高次項為負，則圖形往右下。若次數為奇數，則左右的上下相反，若次數為偶數，則左右的上下方向相同。'
            }
          />
        </Concept>
        <Concept num={13} title="多項式不等式">
          <Textarea2MathJax
            text={
              '先令一邊為 $$0$$，再因式分解，並作出函數的略圖，標明函數值正負的分界點，即可解出不等式。'
            }
          />
        </Concept>
        <Exercise ids={['17a19bb02e6', '17a19bbf61e']} />
      </Page>
      {/* <Example num={1} ids={['17a19c2b55e', '17a1ad46bf7']} />
      <Example num={2} ids={['17a1adcc0ed', '17a1ade3264']} />
      <Example num={3} ids={['17a1aff775f', '17a1b0214d9']} />
      <Example num={4} ids={['17a1b0543b3', '17a1b0ada5c']} />
      <Example num={5} ids={['17a1b0d869e', '17a1b10ab40']} />
      <Example num={6} ids={['17a2d6163e4', '17a2d6ebedf']} />
      <Example num={7} ids={['17a2d790e42', '17a2da48070']} />
      <Example num={8} ids={['17a2da5fdc6', '17a2db03ab8']} />
      <Example num={9} ids={['17a2db390e3', '17a2db5f497']} />
      <Example num={10} ids={['17a2db8d3e7', '17a2dbb5a10']} /> */}
    </div>
  );
};

export default B1C2Polynomial;

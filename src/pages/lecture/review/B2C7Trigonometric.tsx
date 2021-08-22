import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';
import Page from 'src/pages/lecture/component/Page';

const B2C7Trigonometric = () => {
  return (
    <div>
      <Page pageNum={32}>
        <div className={style.head}>Ch7 三角比</div>
        <Concept num={1} title="銳角三角比的定義">
          <Textarea2MathJax text={'銳角 $$\\theta 為直角三角形的內角，兩股為其對邊與鄰邊，則：'} />
          <Textarea2MathJax
            text={'(1) $$\\sin\\theta=\\frac{對邊}{斜邊}$$，稱為 $$\\theta $$ 的正弦值'}
          />
          <Textarea2MathJax
            text={'(2) $$\\cos\\theta=\\frac{鄰邊}{斜邊}$$，稱為 $$\\theta $$ 的餘弦值'}
          />
          <Textarea2MathJax
            text={'(3) $$\\tan\\theta=\\frac{對邊}{鄰邊}$$，稱為 $$\\theta $$ 的正切值'}
          />
        </Concept>
        <Exercise ids={['17aca900411', '17aca9268fc']} />
        <Concept num={2} title="有向角與同界角">
          <Textarea2MathJax
            text={
              '坐標平面上，有向角 $$\\theta$$ 從 $$x$$ 軸正向轉到終邊，逆時針方向為正，順時針方向為負，稱為標準位置角。若終邊在第 $$k$$ 象限，稱 $$\\theta$$ 為第 $$k$$ 象限角。若 $$\\angle A$$ 與 $$\\angle B$$ 的終邊重合，則互為同界角，相差 $$360^\\circ$$ 的整數倍。'
            }
          />
        </Concept>
        <Exercise ids={['17aca95e33b', '17aca9748af']} />
      </Page>
      <Page pageNum={33}>
        <Concept num={3} title="極坐標">
          <Textarea2MathJax
            text={
              '有向角 $$\\theta$$ 終邊上任一點 $$P(x,y)$$，令 $$r=\\sqrt{x^2+y^2}$$，則 $$P$$ 點的極坐標表法為 $$[r,\\theta]$$。'
            }
          />
        </Concept>
        <Exercise ids={['17aca9badeb', '17aca9d9f29']} />
        <Concept num={4} title="廣義角的三角比">
          <Textarea2MathJax
            text={
              '圓的半徑為 $$1$$，圓心在原點，有向角 $$\\theta$$ 的終邊與此圓交於一點，交點坐標 $$(x,y)=(\\cos\\theta,\\sin\\theta)$$。常用的特殊角為以 $$30^\\circ$$、$$45^\\circ$$、$$60^\\circ$$ 推廣至各個象限的角，若出現其他角度題目應提供註明。'
            }
          />
        </Concept>
        <Exercise ids={['17acaa46a2f', '17acaa9ade9']} height="9.5cm" />
      </Page>
      <Page pageNum={34}>
        <Concept num={5} title="三角比的角度變換">
          <Textarea2MathJax
            text={'畫出單位圓上的 $$\\theta$$ 及變換後的角度，再由點坐標的對稱位置判斷如何轉換。'}
          />
        </Concept>
        <Exercise
          ids={['17ad14cb94a', '17ad14d8dde', '17ad14e2208', '17ad14f2801']}
          height="5.5cm"
        />
        <Concept num={6} title="平方關係">
          <Textarea2MathJax
            text={'由定義可直接推得 $$\\sin^2\\theta+\\cos^2\\theta=1$$，即為畢氏定理。'}
          />
        </Concept>
        <Exercise ids={['17ad15f1203', '17ad16129f7']} />
      </Page>
      <Page pageNum={35}>
        <Concept num={7} title="正弦定理" height="11cm">
          <Textarea2MathJax
            text={
              '$$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}=2R$$\n其中 $$R$$ 為外接圓半徑。亦可得 $$a:b:c=\\sin A:\\sin B:\\sin C$$。'
            }
          />
        </Concept>
        <Exercise ids={['17ad166ba0a', '17ad1685100']} height="11cm" />
      </Page>
      <Page pageNum={36}>
        <Concept num={8} title="餘弦定理" height="11cm">
          <Textarea2MathJax text={'$$a^2=b^2+c^2-2bc\\cos A$$'} />
        </Concept>
        <Exercise ids={['17ad16ade0d', '17ad16cc0f5']} height="11cm" />
      </Page>
      <Page pageNum={37}>
        <Concept num={9} title="三角形求面積" height="13cm">
          <Textarea2MathJax text={'(1) 基本公式：$$\\triangle=\\frac{底\\times高}{2}$$'} />
          <Textarea2MathJax
            text={
              '(2) 面積公式：$$\\triangle=\\frac{1}{2}ab\\sin C=\\frac{abc}{4R}$$，其中 $$R$$ 為外接圓半徑'
            }
          />
          <Textarea2MathJax
            text={
              '(3) 海龍公式：$$\\triangle=\\sqrt{s(s-a)(s-b)(s-c)}=rs$$，其中 $$s=\\frac{a+b+c}{2}$$ 為半周長，$$r$$ 為內切圓半徑'
            }
          />
          <Textarea2MathJax
            text={
              '(4) 行列式：$$\\vec{a}=(x_1,y_1)$$、$$\\vec{b}=(x_2,y_2)$$ 兩向量所張的三角形面積 $$\\triangle=\\frac{1}{2}|\\begin{vmatrix}x_1&y_1\\\\x_2&y_2\\end{vmatrix}|$$'
            }
          />
          <Textarea2MathJax
            text={
              '(5) 外積：$$\\vec{a}$$、$$\\vec{b}$$ 兩向量所張的三角形面積 $$\\triangle=\\frac{1}{2}|\\vec{a}\\times\\vec{b}|$$'
            }
          />
        </Concept>
        <Exercise ids={['17ad175a609', '17ad1771119']} height="9cm" />
      </Page>
      <Page pageNum={38}>
        <Concept num={10} title="反三角">
          <Textarea2MathJax
            text={
              '$$\\sin\\theta=k\\Rightarrow\\theta=\\sin^{-1}k$$，稱為反正弦 $$\\arcsin。\n$$\\cos\\theta=k\\Rightarrow\\theta=\\cos^{-1}k$$，稱為反餘弦 $$\\arccos。\n$$\\tan\\theta=k\\Rightarrow\\theta=\\tan^{-1}k$$，稱為反正弦 $$\\arctan。\n符合反三角之角度有無限多種，取最接近 $$0^\\circ$$ 的結果，正負角度一樣近則取正。'
            }
          />
        </Concept>
        <Exercise ids={['17ad17cb39c']} height="5cm" />
        <Concept num={11} title="仰角、俯角與應用題" height="1.4cm">
          <Textarea2MathJax
            text={
              '(1) 仰角：視線在水平線上方時，兩線的夾角稱為仰角\n(2) 俯角：視線在水平線下方時，兩線的夾角稱為俯角'
            }
          />
        </Concept>
        <Exercise ids={['17ad18548de', '17ad187f99e']} height="9cm" />
      </Page>
      <Page pageNum={39}>
        <Example num={1} ids={['17ad192e53e', '17ad195a9f7']} />
        <Example num={2} ids={['17ad1986e1e', '17ad199eac9']} />
      </Page>
      <Page pageNum={40}>
        <Example num={3} ids={['17ad19d0a01', '17ad19fe25d']} />
        <Example num={4} ids={['17ad1a1d228', '17ad1a5d24f']} />
      </Page>
      <Page pageNum={41}>
        <Example num={5} ids={['17ad1a75088', '17ad1aa917e']} />
        <Example num={6} ids={['17ad1ac869f', '17ad1af7240']} />
      </Page>
      <Page pageNum={42}>
        <Example num={7} ids={['17ad1b111d9', '17ad1b2ca8a']} />
        <Example num={8} ids={['17ad1b3be5c', '17ad1b58388']} />
      </Page>
      <Page pageNum={43}>
        <Example num={9} ids={['17ad1ba3335', '17ad1c0f6ba']} />
        <Example num={10} ids={['17ad1c5ea2f', '17ad1c89c26']} />
      </Page>
    </div>
  );
};

export default B2C7Trigonometric;

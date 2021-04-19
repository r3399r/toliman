import HomeworkDiv from 'src/component/HomeworkDiv';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from './Hw.module.scss';

const Hw = () => {
  const qs = [
    {
      id: '1',
      question:
        '1. 點 $$P(1,-2,3)$$ 到平面 $$E:\\frac{x}3+\\frac{y}{3}+\\frac{z}{6}=1$$ 之距離為？',
      ans: '$$\\frac{5}{3}$$',
    },
    {
      id: '2',
      question:
        '2. 已知兩平行平面 $$E_1$$ 和 $$E_2$$ 的距離為 $$3$$，其中 $$E_1$$ 方程式為 $$2x+2y-z=1$$，則 $$E_2$$ 的方程式為？',
      ans: '$$2x+2y-z=10$$ 或 $$2x+2y-z=-8$$',
    },
    {
      id: '3',
      question:
        '3. 設 $$O(0,0,0)$$，$$A(1,2,3)$$，$$B(2,3,1)$$，$$C(1,1,k)$$ 四點共平面，則 $$k=$$？',
      ans: '$$-2$$',
    },
    {
      id: '4',
      question:
        '4. 已知平面 $$E$$ 過點 $$(1,-2,3)$$，且與 $$E_1:3x+y+z-2=0$$，$$E_2:x-2y+z+4=0$$ 皆垂直，則平面 $$E$$ 的方程式為？',
      ans: '$$3x-2y-7z+14=0$$',
    },
    {
      id: '5',
      question:
        '5. 空間坐標系中，有一平面鏡 $$E$$，一雷射光線經過點 $$A(1,3,2)$$ 射向鏡面 $$E$$ 上的點 $$B(0,1,0)$$，反射又經過點 $$C(-4,5,2)$$，則平面 $$E$$ 的方程式為？',
      ans: '$$x-4y-3z+4=0$$',
    },
    {
      id: '6',
      question:
        '6. 在空間中，已知平面 $$E$$ 通過 $$(3,0,0)$$，$$(0,4,0)$$ 及正 $$z$$ 軸上一點 $$(0,0,a)$$，如果平面 $$E$$ 與 $$xy$$ 平面的交角成 $$45^{\\circ}$$，則 $$a$$ 值為？',
      ans: '$$\\frac{12}{5}$$',
    },
    {
      id: '7',
      question:
        '7. 已知平面 $$E_1:3x+y+2kz=\\pi$$，$$E_2:3x-2ky+z=\\sqrt{101}$$，且 $$E_1$$ 與 $$E_2$$ 銳夾角 $$60^{\\circ}$$，則 $$|k|$$ 值為？',
      ans: '$$\\sqrt{2}$$',
    },
    {
      id: '8',
      question:
        '8. 設 $$x$$，$$y$$，$$z$$ 皆為實數，已知 $$x-2y-z=6$$，則 $$\\sqrt{(x-6)^2+(y+3)^2+(z+6)^2}$$ 的最小值為？',
      ans: '$$2\\sqrt{6}$$',
    },
    {
      id: '9',
      question:
        '9. 空間中兩點 $$A(1,-3,4)$$，$$B(2,2,-1)$$，若 $$\\overline{AB}$$ 與平面 $$E:3x-y+z=5$$ 交於 $$P$$，則 $$\\overline{AP}:\\overline{BP}=$$？',
      ans: '$$5:2$$',
    },
    {
      id: '10',
      question:
        '10. 在空間中，下列何者圖形表示一直線？\n(A) $$x+y=2$$\n(B) $$x=y=2$$\n(C) $$x=y=z=2$$\n(D) $$\\begin{cases}3x-6y+3z+1=0\\\\-x+2y-z+1=0\\end{cases}$$\n(E) $$\\begin{cases}3x-2y=0\\\\5x-2z=0\\end{cases}$$',
      ans: '(B)(E)',
    },
    {
      id: '11',
      question:
        '11. 直線的比例式為 $$L:\\frac{x-1}{2}=\\frac{y}{3}=\\frac{z+1}{4}$$，下列哪些敘述是正確的？\n(A) 點 $$(1,0,-1)$$ 在 $$L$$ 上\n(B) 點 $$(1,-1,1)$$ 在 $$L$$ 上\n(C) 向量 $$(2,3,4)$$ 為 $$L$$ 的一個方向向量\n(D) 向量 $$(-2,3,-4)$$ 為 $$L$$ 的一個方向向量\n(E) $$\\begin{cases}x=3-2t\\\\y=3-3t\\\\z=3-4t\\end{cases}$$，$$t$$ 為實數，是 $$L$$ 的參數式',
      ans: '(A)(C)(E)',
    },
    {
      id: '12',
      question:
        '12. 設 $$P(3,-2,1)$$，$$Q(5,2,-5)$$，下列哪些選項可為直線 $$PQ$$ 的方程式？\n(A) $$\\begin{cases}x=5+2t\\\\y=2+4t\\\\z=-5+6t\\end{cases}$$，$$t$$ 為實數\n(B) $$\\begin{cases}x=3-t\\\\y=-2-2t\\\\z=1+3t\\end{cases}$$，$$t$$ 為實數\n(C) $$\\begin{cases}x=4+t\\\\y=2t\\\\z=-2-3t\\end{cases}$$，$$t$$ 為實數\n(D) $$\\frac{x+3}{1}=\\frac{y-2}{2}=\\frac{z+1}{-3}$$\n(E) $$\\frac{x-10}{2}=\\frac{y-23}{4}=\\frac{x+18}{-6}$$',
      ans: '(A)(B)(C)(E)',
    },
  ];

  return (
    <div className={style.content}>
      <HomeworkDiv>
        {qs.map((q: { [key: string]: string }) => (
          <div key={q.id}>
            <Textarea2MathJax text={q.question} />
            <Textarea2MathJax text={`Ans: ${q.ans}`} className={style.ans} />
          </div>
        ))}
      </HomeworkDiv>
    </div>
  );
};

export default Hw;

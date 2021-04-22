import Textarea2MathJax from 'src/component/Textarea2MathJax';
import Homework from './component/Homework';
import style from './Hw.module.scss';

const Hw = () => {
  const qs = [
    {
      id: '1',
      question:
        '1. 若直線 $$L:\\frac{x-1}{5}=\\frac{y+2}{3}=\\frac{z}{-1}$$ 落在平面 $$E:ax-y+2z=b$$ 上，則數對 $$(a,b)=$$？',
      ans: '$$(1,3)$$',
    },
    {
      id: '2',
      question:
        '2. 空間中直線 $$L:\\frac{x-1}{2}=\\frac{y+2}{1}=\\frac{z-1}{2}$$ 與平面 $$E:x+2y+z=4$$ 之交點坐標為？',
      ans: '$$(3,-1,3)$$',
    },
    {
      id: '3',
      question: '3. 試求點 $$A(6,5,5)$$ 對平面 $$E:2x+5y-z=2$$ 的投影點坐標為？',
      ans: '$$(4,0,6)$$',
    },
    {
      id: '4',
      question:
        '4. 設直線 $$L:\\frac{x}{1}=\\frac{y-6}{-2}=\\frac{z-2}{2}$$，點 $$P(-1,2,3)$$，試求 $$P$$ 點到直線 $$L$$ 的距離為？',
      ans: '$$3$$',
    },
    {
      id: '5',
      question:
        '5. 試求兩平行直線 $$L_1:\\frac{x-5}{2}=\\frac{y-6}{-3}=\\frac{z-3}{-2}$$ 與 $$L_2:\\frac{x-1}{-2}=\\frac{y-1}{3}=\\frac{z+2}{2}$$ 的距離為？',
      ans: '$$7$$',
    },
    {
      id: '6',
      question:
        '6. 坐標空間中一質點自點 $$P(1,1,1)$$ 沿著方向 $$\\vec{a}=(1,2,2)$$ 等速直線前進，經過 $$5$$ 秒後剛好到達平面 $$x+y-z=6$$ 上，立即轉向沿著方向 $$\\vec{b}=(-2,2,-1)$$ 依同樣的速率等速直線前進，則再過幾秒，此質點會剛好到達平面 $$y+z=31$$？',
      ans: '$$9$$',
    },
    {
      id: '7',
      question:
        '7. 已知點 $$A(1,0,0)$$ 及一直線 $$L:\\frac{x}{1}=\\frac{y-2}{2}=\\frac{z}{2}$$，試求過 $$A$$ 點且包含直線 $$L$$ 的平面方程式為？',
      ans: '$$2x+y-2z-2=0$$',
    },
    {
      id: '8',
      question:
        '8. 試求包含兩直線 $$L_1:\\frac{x-1}{3}=\\frac{y+1}{2}=\\frac{z-3}{1}$$ 與 $$L_2:\\frac{x+2}{6}=\\frac{y}{4}=\\frac{z+4}{2}$$ 的平面方程式為？',
      ans: '$$5x-6y-3z-2=0$$',
    },
    {
      id: '9',
      question:
        '9. 設 $$C(4,-3,2)$$，$$D$$ 為空間中兩點，且 $$\\overline{CD}$$ 的垂直平分面為 $$E:3x-2y+z=6$$，則 $$D$$ 點坐標為？',
      ans: '$$(-2,1,0)$$',
    },
    {
      id: '10',
      question:
        '10. 設直線 $$L:\\frac{x-3}{a}=\\frac{y-2}{b}=\\frac{z+k}{c}$$ 過點 $$(1,1,1)$$ 且與平面 $$E:4x+2y-6z+1=0$$ 垂直，則 $$k=$$？',
      ans: '$$2$$',
    },
    {
      id: '11',
      question: '11. 與平面 $$x-2y+3z-6=0$$ 平行，且與三軸截距和為 $$10$$ 之平面方程式為？',
      ans: '$$x-2y+3z=12$$',
    },
    {
      id: '12',
      question:
        '12. 空間中，一飛彈由 $$A(1,2,3)$$ 沿著平行 $$y$$ 軸的方向射出，剛好擊中在平面 $$2x+3y-2z=8$$ 上的目標物 $$B$$，則 $$B$$ 點坐標為？',
      ans: '$$(1,4,3)$$',
    },
  ];

  return (
    <div className={style.content}>
      <Homework>
        {qs.map((q: { [key: string]: string }) => (
          <div key={q.id}>
            <Textarea2MathJax text={q.question} />
            <Textarea2MathJax text={`Ans: ${q.ans}`} className={style.ans} />
          </div>
        ))}
      </Homework>
    </div>
  );
};

export default Hw;

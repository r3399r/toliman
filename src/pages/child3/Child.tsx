import classNames from 'classnames';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from './Child.module.scss';

const Child = () => {
  const question = [
    '1.（單選）有一個等比數列，其公比為 $$5$$，若各項同時乘以 $$-5$$，則所形成新的等比數列的公比為？\n(A) $$-5$$ (B) $$5$$ (C) $$0$$ (D) $$10$$ (E) $$-25$$',
    '2.（單選）小華的爸爸幫小華儲存就學基金，參加一種儲蓄存款。規定每月 $$1$$ 日要存一萬元至其帳戶，銀行按月複利計算，年利率為 $$6%$$，若小華的爸爸存滿兩年（$$24$$ 個月），則小華的帳戶應有多少錢？\n(A) $$10000\\times(1.005)^{24}\\times24$$\n(B) $$10000\\times(1.005)^{24}\\times24$$\n(C) $$10050\\times\\frac{(1.005)^{24}-1}{1.005-1}\n(D) $$10000\\times\\frac{(1.005)^{24}-1}{1.005-1}$$\n(E) $$240000\\times\\left(\\frac{1+0.005\\times24}{2}\\right)$$',
    '3.（單選）將邊長 $$1$$ 公分的正立方體堆疊成一階梯形立體，總共 $$10$$ 層如右圖所示。若由上往下數，則第 $$k$$ 層有 $$k$$ 塊，其中正整數 $$k=1,2,...,10$$。求該階梯形立體的表面積？\n(A) $$75$$ 平方公分\n(B) $$90$$ 平方公分\n(C) $$110$$ 平方公分\n(D) $$130$$ 平方公分\n(E) $$150$$ 平方公分',
    '4.（多選）有一數列 $$\\langle a_n\\rangle$$，已知 $$a_1=1$$，則下列選項何者正確？\n(A) 若 $$\\langle a_n\\rangle$$ 為等差數列，且 $$a_{99}>0$$，則 $$a_{990}>0$$\n(B) 若 $$\\langle a_n\\rangle$$ 為等差數列，且 $$a_{990}>0$$，則 $$a_{99}>0$$\n(C) 若 $$\\langle a_n\\rangle$$ 為等差數列，且 $$a_{990}<0$$，則 $$a_{99}<0$$\n(D) 若 $$\\langle a_n\\rangle$$ 為等比數列，且 $$a_{99}>0$$，則 $$a_{990}>0$$\n(E) 若 $$\\langle a_n\\rangle$$ 為等比數列，且 $$a_{990}>0$$，則 $$a_{99}>0$$',
    "5.（多選）設 $$A=\\{x|-2<x\\le5,x\\in\\mathbb{R}\\}$$，$$B=\\{x|x\\le-1或x>3,x\\in\\mathbb{R}\\}$$，則下列各集合何者正確？\n(A) $$A'=\\{x|x\\le-2或x\\ge5,x\\in\\mathbb{R}\\}$$\n(B) $$A-B=\\{x|-1<x\\le3,x\\in\\mathbb{R}\\}$$\n(C) $$A\\cap B=\\{x|-2<x\\le-1或3<x\\le5,x\\in\\mathbb{R}\\}$$\n(D) $$A\\cup B'=\\{x|-2<x\\le5,x\\in\\mathbb{R}\\}$$\n(E) $$A'\\cap B'=\\{x|-1<x\\le3,x\\in\\mathbb{R}\\}$$",
    '6. 已知集合 $$A=\\{2,4,a^2-a+3\\}$$，$$B=\\{3,a,a+2,a+5\\}$$ 滿足 $$A-B=\\{5\\}$$，則實數 $$a=$$？',
    '7. 以 $$1,2,4,6,9$$ 等五個數不可重複排成一個五位數，將這些五位數由小排到大（如 $$12469$$，$$12496$$，...）後，則第 $$50$$ 個數為？',
    '8. 設三正整數成一等比數列，其和為 $$63$$，倒數和為 $$\\frac{7}{16}$$，則這三正數中最大者為？',
    '9. 若某一國家近四年的經濟年成長率分別為 $$60\\%$$、$$80\\%$$、$$-10\\%$$、$$-20\\%$$，則該國家近四年每一年的平均經濟成長率為多少$$\\%$$？',
    '10. 黎明中學晚會共分成 $$7$$ 段，其中魔術、歌唱須在熱舞表演的前面，則共有幾種排法？',
    '11. 一數列依照下列順序出現：$$1,2,1,2,2,1,2,2,2,1,2,2,2,2,1,...$$，規則為第 $$n$$ 組出現一個 $$1$$ 之後接續 $$n$$ 個 $$2$$，則此數列前 $$500$$ 項的和為？',
    '12. 等比級數 $$S_n=\\frac{1}{2}+\\frac{1}{2^2}+\\frac{1}{2^3}+...+\\frac{1}{2^n}$$，$$n$$ 為正整數，欲使 $$|1-S_n|<0.001$$，則 $$n$$ 之最小值為？',
    '13. 由一樓上二樓的樓梯共有 $$8$$ 階，某人以每步踏一階或二階上樓，共有幾種走法？',
  ];

  return (
    <div className={style.content}>
      {question.map((q: string, i: number) => {
        if (i + 1 !== 3) return <Textarea2MathJax className={style.block} text={q} />;
        else
          return (
            <div className={classNames('uk-grid', style.block)}>
              <div className="uk-width-expand">
                <Textarea2MathJax className={style.block} text={q} />
              </div>
              <div className="uk-width-auto">
                <img
                  className={style.img}
                  src={require(`./${i + 1}.PNG`).default}
                  alt=""
                  role="presentation"
                />
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default Child;

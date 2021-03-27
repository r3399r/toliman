import classNames from 'classnames';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from './Child.module.scss';

const Child = () => {
  const question = [
    '1.（單選）有一個等比數列，其公比為 $$5$$，若各項同時乘以 $$-5$$，則所形成新的等比數列的公比為？\n(A) $$-5$$ (B) $$5$$ (C) $$0$$ (D) $$10$$ (E) $$-25$$',
    '2.（單選）小華的爸爸幫小華儲存就學基金，參加一種儲蓄存款。規定每月 $$1$$ 日要存一萬元至其帳戶，銀行按月複利計算，年利率為 $$6%$$，若小華的爸爸存滿兩年（$$24$$ 個月），則小華的帳戶應有多少錢？\n(A) $$10000\\times(1.005)^{24}\\times24$$\n(B) $$10000\\times(1.005)^{24}\\times24$$\n(C) $$10050\\times\\frac{(1.005)^{24}-1}{1.005-1}\n(D) $$10000\\times\\frac{(1.005)^{24}-1}{1.005-1}$$\n(E) $$240000\\times\\left(\\frac{1+0.005\\times24}{2}\\right)$$',
    '3.（單選）將邊長 $$1$$ 公分的正立方體堆疊成一階梯形立體，總共 $$10$$ 層如右圖所示。若由上往下數，則第 $$k$$ 層有 $$k$$ 塊，其中正整數 $$k=1,2,...,10$$。求該階梯形立體的表面積？\n(A) $$75$$ 平方公分\n(B) $$90$$ 平方公分\n(C) $$110$$ 平方公分\n(D) $$130$$ 平方公分\n(E) $$150$$ 平方公分',
    '4.（多選）有一數列 $$\\langle a_n\\rangle$$，已知 $$a_1=1$$，則下列選項何者正確？\n(A) 若 $$\\langle a_n\\rangle$$ 為等差數列，且 $$a_{99}>0$$，則 $$a_{990}>0$$\n(B) 若 $$\\langle a_n\\rangle$$ 為等差數列，且 $$a_{990}>0$$，則 $$a_{99}>0$$\n(C) 若 $$\\langle a_n\\rangle$$ 為等差數列，且 $$a_{990}<0$$，則 $$a_{99}<0$$\n(D) 若 $$\\langle a_n\\rangle$$ 為等比數列，且 $$a_{99}>0$$，則 $$a_{990}>0$$\n(E) 若 $$\\langle a_n\\rangle$$ 為等比數列，且 $$a_{990}>0$$，則 $$a_{99}>0$$',
    '5.（多選）設兩組資料 $$X:x_1,x_2,...x_{20}$$ 與 $$Y:y_1,y_2,...y_{20}$$，已知 $$y_i=\\frac{1}{2}(x_i+120)$$，其中 $$1\\le i\\le20$$，則下列敘述何者正確？\n(A) 若 $$x_k$$ 為 $$X$$ 的中位數，則 $$y_k$$ 為 $$Y$$ 的中位數（$$1\\le k\\le20$$）\n(B) 若 $$x_5-x_4=10$$，則 $$y_5-y_4=5$$\n(C) $$Y$$ 的算術平均數比 $$X$$ 的算術平均數多 $$60$$\n(D) $$Y$$ 的標準差為 $$X$$ 的標準差的一半\n(E) $$X$$ 與 $$Y$$ 的相關係數為 $$1$$',
    "6.（多選）高一某班 $$40$$位學生，數學科第一次段考、第二次段考分別以 $$x_i$$、$$y_i$$ 表示，每位學生的成績用 $$0$$ 至 $$100$$ 評分，且 $$x'=\\frac{x-\\mu_x}{\\sigma_x}$$、$$y'=\\frac{y-\\mu_y}{\\sigma_y}$$，其中 $$\\mu_x$$、$$\\mu_y$$ 分別為 $$x$$、$$y$$ 的平均數，$$\\sigma_x$$、$$\\sigma_y$$ 分別為 $$x$$、$$y$$ 的標準差，若這兩次段考數學科成績 $$x$$、$$y$$ 的相關係數為 $$0.6$$，試問下列選項何者正確？\n(A) $$x-1$$ 與 $$3y+2$$ 的相關係數仍為 $$0.6$$ (B) $$-1+2x$$ 與 $$3y$$ 的相關係數仍為 $$0.6$$\n(C) $$x'$$ 與 $$y'$$ 的相關係數為 $$0.6$$ (D) $$y'$$ 對 $$x'$$ 的最適直線的斜率為 $$0.6$$\n(E) $$y'$$ 對 $$x'$$ 的最適直線必過原點",
    '7. 試將下列各散布圖的相關係數由大到小排序為？',
    '8. 設三正整數成一等比數列，其和為 $$63$$，倒數和為 $$\\frac{7}{16}$$，則這三正數中最大者為？',
    '9. 若某一國家近四年的經濟年成長率分別為 $$60\\%$$、$$80\\%$$、$$-10\\%$$、$$-20\\%$$，則該國家近四年每一年的平均經濟成長率為多少$$\\%$$？',
    '10. 設有四筆數據依序為 $$(1,2)$$、$$(a,3)$$、$$(b,1)$$、$$(5,c)$$，若 $$a+b=6$$，且 $$y$$ 對 $$x$$ 的最適直線方程式為 $$y=2x-2$$，則實數 $$c=$$？',
    '11. 一數列依照下列順序出現：$$1,2,1,2,2,1,2,2,2,1,2,2,2,2,1,...$$，規則為第 $$n$$ 組出現一個 $$1$$ 之後接續 $$n$$ 個 $$2$$，則此數列前 $$500$$ 項的和為？',
    '12. 等比級數 $$S_n=\\frac{1}{2}+\\frac{1}{2^2}+\\frac{1}{2^3}+...+\\frac{1}{2^n}$$，$$n$$ 為正整數，欲使 $$|1-S_n|<0.001$$，則 $$n$$ 之最小值為？',
    '13. 骨密度指的是骨骼中單位面積所含有的礦物質，今收集 $$7$$ 筆有關女性年齡與骨密度的二維數據結果如下表：\n$$\\begin{matrix}年齡&25&30&35&40&45&50&55\\\\骨密度&1.3&1.2&1.3&1&1.2&0.9&0.8\\end{matrix}$$\n令 $$x$$ 表示年齡，$$y$$表示骨密度，則 $$x$$ 與 $$y$$ 的最適直線斜率為？',
  ];

  return (
    <div className={style.content}>
      {question.map((q: string, i: number) => {
        if (i + 1 !== 3 && i + 1 !== 7)
          return <Textarea2MathJax className={style.block} text={q} />;
        else if (i + 1 === 3)
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
        else
          return (
            <div className={style.block}>
              <div className="uk-width-expand">
                <Textarea2MathJax className={style.block} text={q} />
              </div>
              <div className="uk-width-auto">
                <img
                  className={style.img2}
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

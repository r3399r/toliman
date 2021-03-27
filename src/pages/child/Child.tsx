import classNames from 'classnames';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from './Child.module.scss';

const Child = () => {
  const question = [
    '1.（單選）如圖，$$\\triangle ABC$$ 與 $$\\triangle ACD$$ 皆為直角三角形。已知 $$\\overline{AB}=10$$，$$\\cos\\theta=\\frac{\\sqrt{3}-1}{2}$$，$$\\sin\\phi=\\frac{\\sqrt{3}+1}{4}$$，試求 $$\\overline{CD}=$$？\n(A) $$\\frac{5}{2}$$ (B) $$\\frac{7}{2}$$ (C) $$\\frac{9}{2}$$ (D) $$4$$ (E) $$5$$',
    '2.（單選）有一直角三角形，斜邊長為 $$1$$。若其中一內角為 $$14^{\\circ}$$，則下列何者為斜邊上的高？\n(A) $$\\sin14^{\\circ}\\cos14^{\\circ}$$ (B) $$\\sin^2 14^{\\circ}$$ (C) $$\\cos^2 14^{\\circ}$$ (D) $$\\sin14^{\\circ}\\tan14^{\\circ}$$ (E) $$\\cos14^{\\circ}\\tan14^{\\circ}$$',
    '3.（多選）設 $$\\triangle ABC$$ 的最大內角為 $$\\theta$$，則 $$\\cos\\theta$$ 之值可為下列哪些選項？\n(A) $$-\\frac{1}{2}$$ (B) $$0$$ (C) $$\\frac{1}{2}$$ (D) $$\\frac{\\sqrt{2}}{2}$$ (E) $$\\frac{1}{3}$$',
    '4.（多選）設 $$\\theta_1$$、$$\\theta_2$$、$$\\theta_3$$、$$\\theta_4$$ 分別為四個不同象限的象限角，且滿足 $$|\\cos\\theta_1|=|\\cos\\theta_2|=|\\cos\\theta_3|=|\\cos\\theta_4|=\\frac{1}{3}$$，請問下列選項何者正確？\n(A) 若 $$\\cos\\theta_1=\\cos\\theta_2$$，則 $$\\cos\\theta_1=\\cos\\theta_3$$\n(B) 若 $$\\cos\\theta_1=\\cos\\theta_2$$，則 $$\\cos\\theta_3=\\cos\\theta_4$$\n(C) 若 $$\\cos\\theta_1=\\cos\\theta_2$$，且 $$0^{\\circ}<\\theta_1<90^{\\circ}$$，則 $$270^{\\circ}<\\theta_2<360^{\\circ}$$\n(D) $$\\cos\\theta_1+\\cos\\theta_2+\\cos\\theta_3+\\cos\\theta_4=0$$\n(E) 若 $$\\cos\\theta_3=-\\frac{1}{3}$$，則 $$\\sin\\theta_3=-\\frac{2\\sqrt{2}}{3}$$',
    '5.（多選）在 $$\\triangle ABC$$ 中，$$\\overline{AB}=8$$，$$\\overline{AC}=7$$，$$\\overline{BC}=5$$，則下列選項哪些是正確的？\n(A) $$\\triangle ABC$$ 為鈍角三角形\n(B) $$\\triangle ABC$$ 的面積為 $$5\\sqrt{3}$$\n(C) $$\\sin A<\\sin B<\\sin C$$\n(D) $$\\cos A<\\cos B<\\cos C$$\n(E) $$\\triangle ABC$$ 的外接圓半徑為 $$\\frac{7\\sqrt{3}}{3}$$',
    '6. 在 $$\\triangle ABC$$ 中，已知 $$\\sin A=1$$，$$\\sin B+\\sin C=\\frac{5}{4}$$，則 $$\\sin B\\sin C=$$？',
    '7. $$\\triangle ABC$$ 中，$$\\angle A$$、$$\\angle B$$、$$\\angle C$$ 的對邊長分別為 $$a$$、$$b$$、$$c$$，若 $$2a\\sin A=3b\\sin B=c\\sin C$$ ，則 $$a:b:c=$$？',
    '8. 已知 $$0^{\\circ}\\le\\theta\\le180^{\\circ}$$，且 $$\\tan 2020^{\\circ}=-\\tan\\theta$$，則 $$\\theta$$ 為幾度？',
    '9. 四邊形 $$ABCD$$ 中，已知 $$\\overline{AB}=2$$，$$\\overline{BC}=7$$，$$\\overline{CD}=5$$，$$\\overline{BD}=6$$，$$\\angle ABD=30^{\\circ}$$，則此四邊形的面積為？',
    '10. 將半徑為 $$1$$ 之半圓周 $$\\overset{\\frown}{AB}$$ 等分成 $$106$$ 等分，其等分點 $$A=P_0$$，$$P_1$$，$$P_2$$，...，$$P_{105}$$，$$P_{106}=B$$，則 $$\\overline{AP_1}^2+\\overline{AP_2}^2+\\overline{AP_3}^2+...+\\overline{AP_{105}}^2=$$？',
    '11. 若 $$A[4,270^{\\circ}]$$，$$B[5,120^{\\circ}]$$，$$C[6,30^{\\circ}]$$ 是極坐標上的三個點，則 $$\\triangle ABC$$ 的面積為？',
    '12. 某遊樂園區內有一歡樂摩天輪，此摩天輪的直徑 $$68$$ 公尺，最高點離地面高度為 $$90$$ 公尺，依逆時針方向等速旋轉，旋轉一圈需花 $$15$$ 分鐘。學生小美與 $$3$$ 位好友從 $$A$$ 處搭上摩天輪，$$10$$ 分鐘後，向在地面的老師揮手，則此時小美離地面的高度為幾公尺？',
    '13. 小勳觀察一火箭從正前方地面以仰角 $$\\theta$$ 發射，已知火箭為等速直線前進，經一分鐘後小勳觀察火箭在正上方，再經一分鐘後觀察火箭在正後方仰角 $$30^{\\circ}$$（小勳身高不計），則 $$\\tan^2\\theta=$$？',
  ];

  return (
    <div className={style.content}>
      {question.map((q: string, i: number) => {
        if (i + 1 !== 1 && i + 1 !== 12)
          return <Textarea2MathJax className={style.block} text={q} />;
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

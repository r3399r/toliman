import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C3S4GraphDesign = () => {
  return (
    <div>
      <Page pageNum={44}>
        <div className={style.head}>4 平面圖形的比例與設計(數B)</div>
        <Concept num={1} title="影印紙的長寬比例">
          <div className={style.conceptHead}>A 系列影印紙</div>
          <img
            style={{ float: 'right', width: '4cm' }}
            alt=""
            role="presentation"
            src="/toliman/images/影印紙.PNG"
          />
          <Textarea2MathJax
            text={
              'A0 紙張為面積是 $1$ 平方公尺的長方形，且長與寬比例為 $\\sqrt2:1$，將 A0 紙折半平分後稱為 A1，將 A1 紙折半平分後稱為 A2，...，以此類推，所得 A1、A2、... 的長、寬比例均仍維持 $\\sqrt2:1$，即 A0、A1、A2、... 的面積呈等比數列，公比為 $\\frac12$，且形狀均相似'
            }
          />
          <div className={style.conceptHead}>B 系列影印紙</div>
          <Textarea2MathJax
            text={
              'B0 紙張為面積是 $\\sqrt2$ 平方公尺的長方形，長與寬的比例也是 $\\sqrt2:1$，B 系列影印紙的面積亦呈等比數列，公比為 $\\frac12$，且形狀均相似'
            }
          />
        </Concept>
        <Example num={1} ids={['17cc9fe69b0', '17cc9ff3cb9']} height="14cm" />
      </Page>
      <Page pageNum={45}>
        <Concept num={2} title="黃金比例">
          <div className={style.conceptHead}>黃金分割點</div>
          <Textarea2MathJax
            text={
              '點 $P$ 在 $\\overline{AB}$ 上，$\\overline{AP}>\\overline{BP}$，若「$\\overline{AB}:\\overline{AP}=\\overline{AP}:\\overline{BP}$」，稱 $P$ 為 $\\overline{AB}$ 的黃金分割點，其比值為 $\\frac{\\sqrt5+2}2\\approx1.618$，稱為黃金比例'
            }
          />
          <div className={style.conceptHead}>黃金矩形</div>
          <Textarea2MathJax
            text={
              '長與寬的比例為 $\\frac{\\sqrt5+1}2:1$ 的長方形，稱為黃金矩形，切去正方形後，所剩的長方形仍維持黃金矩形的比例。'
            }
          />
        </Concept>
        <Example num={2} ids={['17cca01464c', '17cca026b15']} height="16cm" />
      </Page>
      <Page pageNum={46}>
        <Concept num={3} title="單點透視">
          <div>
            單點透視是種符合遠近視覺比例，可營造立體感的繪畫技巧，所有前後方向的線皆會集中在遠方地平線正中的消失點。
          </div>
          <img alt="" role="presentation" src="/toliman/images/透視點.PNG" />
        </Concept>
        <Example num={3} ids={['17cca055c95', '17cca4890a6']} height="16cm" />
      </Page>
      <Page pageNum={47}>
        <Concept num={4} title="圓角與拱門設計">
          <div className={style.conceptHead}>圓角設計</div>
          <div>在設計文字時，常用大小不一的圓弧來修飾角度。</div>
          <div className={style.conceptHead}>拱門的設計</div>
          <div>
            在力學結構上，圓拱的耐重力比平台大得多，而且挑高的拱門在視覺上也更加美觀莊嚴，在許多經典建築都常看到。
          </div>
          <img
            style={{ marginRight: '4cm' }}
            alt=""
            role="presentation"
            src="/toliman/images/圓角修飾.PNG"
          />
          <img alt="" role="presentation" src="/toliman/images/拱門.PNG" />
        </Concept>
        <Example num={4} ids={['17cca2c9bf2', '17cca2eb03b']} height="15cm" />
      </Page>
      <Page pageNum={48}>
        <Example num={5} ids={['17cca37622a', '17cca39c15c']} height="23cm" />
      </Page>
    </div>
  );
};

export default C3S4GraphDesign;

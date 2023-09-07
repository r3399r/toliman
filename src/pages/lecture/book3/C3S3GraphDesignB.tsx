import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C3S3GraphDesignB = () => (
  <div>
    <Page pageNum={27}>
      <div className={style.head}>3 平面圖形的比例與設計</div>
      <Concept num={1} title="影印紙的長寬比例">
        <div className={style.conceptHead}>A 系列影印紙</div>
        <img
          style={{ float: 'right', width: '4cm' }}
          alt=""
          role="presentation"
          src="/toliman/images/影印紙.PNG"
        />
        <div>
          {
            'A0 紙張為面積是 1 平方公尺的長方形，將 A0 紙折半平分後稱為 A1，將 A1 紙折半平分後稱為 A2，...，以此類推，所得的 A1、A2、... 其長與寬比例為？'
          }
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>B 系列影印紙</div>
        <div>{'B0 紙張為面積是 $\\sqrt2$ 平方公尺的長方形，長與寬的比例也是：'}</div>
      </Concept>
      <Example num={1} ids={['17cc9fe69b0', '17cc9ff3cb9']} height="8.5cm" />
    </Page>
    <Page pageNum={28}>
      <Concept num={2} title="黃金比例">
        <div className={style.conceptHead}>黃金分割點</div>
        <div>
          {
            '點 $P$ 在 $\\overline{AB}$ 上，$\\overline{AP}>\\overline{BP}$，若 $\\overline{AB}:\\overline{AP}=\\overline{AP}:\\overline{BP}$，稱 $P$ 為 $\\overline{AB}$ 的黃金分割點，其比值稱為黃金比例，其值為：'
          }
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>黃金矩形</div>
        <div>
          {
            '長與寬的比例為黃金比例的長方形，稱為黃金矩形，切去正方形後，所剩的長方形仍維持黃金矩形的比例。'
          }
        </div>
      </Concept>
      <Example num={2} ids={['17cca01464c', '17cca026b15']} height="11cm" />
    </Page>
    <Page pageNum={29}>
      <Concept num={3} title="單點透視">
        <div>
          單點透視是種符合遠近視覺比例，可營造立體感的繪畫技巧，所有前後方向的線皆會集中在遠方地平線正中的消失點。
        </div>
        <img alt="" role="presentation" src="/toliman/images/透視點.PNG" />
      </Concept>
      <Example num={3} ids={['17cca055c95', '17cca4890a6']} height="13cm" />
    </Page>
    <Page pageNum={30}>
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
      <Example num={4} ids={['17cca2c9bf2', '17cca2eb03b']} height="11.5cm" />
    </Page>
    <Page pageNum={31}>
      <Example num={5} ids={['17cca37622a', '17cca39c15c']} height="20cm" />
    </Page>
  </div>
);

export default C3S3GraphDesignB;

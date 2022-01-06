import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C1S3SphereAndConics = () => {
  return (
    <div>
      <Page pageNum={17}>
        <div className={style.head}>3 球面與圓錐曲線 (數B)</div>
        <Concept num={1} title="球面與地球的經緯線">
          <div className={style.conceptHead}>球面</div>
          <div>
            (1)
            在空間中，和一個定點等距離的所有點所成的圖形是一個球面，這個定點稱做球心，球心和球面上一點的距離稱為半徑。
          </div>
          <div>
            (2)
            大圓與小圓：通過球心的平面與球面相交所形成的圓稱為大圓；不通過球心的平面與球面相交所形成的圓則稱為小圓。
          </div>
          <div className={style.conceptHead}>地球的經緯線</div>
          <Textarea2MathJax
            text={
              '(1) 經線：在地球表面上，以北極和南極做為一直徑的兩個端點所畫出的每個半圓，都稱為經線。通過英國的格林威治天文臺的經線，稱為 $0\\du$ 經線，又名本初子午線。$0\\du$ 經線以西的半球上之經線，稱為西經線；以東的半球上之經線，稱為東經線。'
            }
          />
          <Textarea2MathJax
            text={
              '(2) 緯線：垂直地軸的平面與球面所截出的圓，都稱為緯線。其中唯一的大圓稱為 $0\\du$ 緯線，就是赤道。赤道以北的緯線稱為北緯線；以南的緯線稱為南緯線。'
            }
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              style={{ height: '3.9cm' }}
              src="/toliman/images/經緯線.PNG"
              alt=""
              role="presentation"
            />
          </div>
        </Concept>
        <Example num={1} ids={['17e2b7e3767', '17e2b7ecfb0']} height="9cm" />
      </Page>
      <Page pageNum={18}>
        <Concept num={2} title="球面距離">
          <div>
            球面上兩點的最短路徑，就是通過兩點的大圓在這兩點間的劣弧，我們把這一段弧長稱為兩點的球面距離。
          </div>
        </Concept>
        <Example num={2} ids={['17e2b878759', '17e2b88833c']} height="20cm" />
      </Page>
      <Page pageNum={19}>
        <Concept num={3} title="圓錐曲線">
          <div className={style.conceptHead}>直圓錐面</div>
          <img
            style={{ float: 'right', height: '4.2cm' }}
            src="/toliman/images/直圓錐面.PNG"
            alt=""
            role="presentation"
          />
          <Textarea2MathJax
            text={
              '如右圖，以直線 $L$ 為軸，將直線 $M$ 維持 $\\theta$ 角繞軸旋轉一圈，所形成的曲面稱為直圓錐面，而直線 $M$ 為直圓錐面的一條母線，$V$ 稱為頂點。'
            }
          />
          <div className={style.conceptHead}>圓錐曲線</div>
          <div>探討與平面相交所截出的圖形，總共有七種，可分為三類：</div>
          <div>(1) 斜率小於母線：橢圓、圓、一點</div>
          <div>(2) 斜率等於母線：拋物線、一直線</div>
          <div>(3) 斜率大於母線：雙曲線、兩相交直線</div>
          <div style={{ display: 'flex' }}>
            <img
              style={{ width: '14.2%' }}
              src="/toliman/images/二次曲線-橢圓.PNG"
              alt=""
              role="presentation"
            />
            <img
              style={{ width: '14.2%' }}
              src="/toliman/images/二次曲線-圓.PNG"
              alt=""
              role="presentation"
            />
            <img
              style={{ width: '14.2%' }}
              src="/toliman/images/二次曲線-點.PNG"
              alt=""
              role="presentation"
            />
            <img
              style={{ width: '14.2%' }}
              src="/toliman/images/二次曲線-拋物線.PNG"
              alt=""
              role="presentation"
            />
            <img
              style={{ width: '14.2%' }}
              src="/toliman/images/二次曲線-一直線.PNG"
              alt=""
              role="presentation"
            />
            <img
              style={{ width: '14.2%' }}
              src="/toliman/images/二次曲線-雙曲線.PNG"
              alt=""
              role="presentation"
            />
            <img
              style={{ width: '14.2%' }}
              src="/toliman/images/二次曲線-兩直線.PNG"
              alt=""
              role="presentation"
            />
          </div>
        </Concept>
        <Example num={3} ids={['17e2fd4b9bb', '17e301d42b8']} />
      </Page>
    </div>
  );
};

export default C1S3SphereAndConics;

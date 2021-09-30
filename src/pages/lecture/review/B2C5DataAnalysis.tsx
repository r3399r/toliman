import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';
import Page from 'src/pages/lecture/component/Page';

const B2C5DataAnalysis = () => {
  return (
    <div>
      <Page pageNum={8}>
        <div className={style.head}>Ch5 數據分析</div>
        <Concept num={1} title="全體數據的代表數">
          <Textarea2MathJax
            text={'數值 $x_1$、$x_2$、$\\cdots$、$x_n$ 有下列幾種數，為全體數據的代表性量值：'}
          />
          <Textarea2MathJax
            text={'(1) 算術平均數：即 $\\frac{x_1+x_2+\\cdots+x_n}{n}$，習慣記為 $\\mu$'}
          />
          <Textarea2MathJax text={'(2) 加權平均數：令數值乘上各自的權重，再除以總權數。'} />
          <Textarea2MathJax
            text={
              '(3) 幾何平均數：$G=\\sqrt[n]{x_1\\times x_2\\times\\cdots\\times x_n}$，適用於平均成長率'
            }
          />
          <Textarea2MathJax
            text={'(4) 中位數：由小到大排序後，正中間的數值；若個數為偶數，則取中間兩數的算術平均'}
          />
          <Textarea2MathJax text={'(5) 眾數：出現最多次的數值'} />
        </Concept>
        <Exercise ids={['17a393dba9d', '17a393f79d8']} />
        <Concept num={2} title="百分位數" height="3.1cm">
          <Textarea2MathJax text={'$n$ 個數值由小到大排序，第 $k$ 百分位數的求法：'} />
          <Textarea2MathJax
            text={
              '(1) 若 $n\\times\\frac{k}{100}$ 不是整數，則取進位後的 $r$，第 $k$ 百分位數為 $x_r$'
            }
          />
          <Textarea2MathJax
            text={
              '(2) 若 $n\\times\\frac{k}{100}$ 為整數 $r$，則第 $k$ 百分位數為 $\\frac{x_r+x_{r+1}}{2}'
            }
          />
          <Textarea2MathJax
            text={
              '第 $1$ 四分位數即為第 $25$ 百分位數，第 $3$ 四分位數即為第 $75$ 百分位數，\n中位數即為第 $2$ 四分位數，也是第 $50$ 百分位數'
            }
          />
        </Concept>
        <Exercise ids={['17a3a063f85']} />
      </Page>
      <Page pageNum={9}>
        <Concept num={3} title="全體數據的離散程度">
          <Textarea2MathJax
            text={
              '數值 $x_1$，$x_2$，$\\cdots$，$x_n$ 的算術平均數為 $\\mu$，稱 $x_1-\\mu$，$x_2-\\mu$，$\\cdots$，$x_n-\\mu$ 為離差，平方相加稱為離差平方和 $S_{xx}$。\n$S_{xx}=(x_1-\\mu)^2+(x_2-\\mu)^2+\\cdots+(x_n-\\mu)^2=x_1^2+x_2^2+\\cdots+x_n^2-n\\mu^2$'
            }
          />
          <Textarea2MathJax
            text={
              '變異數 $\\sigma^2=\\frac{S_{xx}}{n}$，標準差 $\\sigma=\\sqrt{\\frac{S_{xx}}{n}}$，為衡量整體數據離散程度的量值，標準差愈大表示數據愈分散；標準差愈小表示數據愈集中'
            }
          />
        </Concept>
        <Exercise ids={['17a3a0f0062', '17a3a11a2cb']} height="10cm" />
        <Concept num={4} title="資料的加減乘除">
          <Textarea2MathJax
            text={
              '若資料的每個數字都加上 $k$，則：\n(1) 「均量」如中位數、算術平均數也跟著加上 $k$\n(2) 「差量」如全距、標準差的值不變'
            }
          />
          <Textarea2MathJax
            text={
              '若資料的每個數字都乘以 $m$，則：\n(1) 「均量」如中位數、算術平均數也跟著乘以 $m$\n(2) 「差量」如全距、標準差的值成為 $|m|$ 倍'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={10}>
        <Exercise ids={['17a3a18212b', '17a3a1a6f8e']} height="9cm" />
        <Concept num={5} title="資料的標準化">
          <Textarea2MathJax
            text={
              '一維數據 $x_1$，$x_2$，$\\cdots$，$x_n$ 的算術平均為 $\\mu$，標準差為 $\\sigma$，若 $\\sigma\\neq0$，則先同減 $\\mu$ 再同除以 $\\sigma$ 得 $\\frac{x_1-\\mu}{\\sigma}$，$\\frac{x_2-\\mu}{\\sigma}$，$\\cdots$，$\\frac{x_n-\\mu}{\\sigma}$，即為標準化數據。可用來客觀比較不同種類的數據排名。標準化後的算術平均數必為 $0$，標準差必為 $1$。'
            }
          />
        </Concept>
        <Exercise ids={['17a58e8ba61', '17a58ea29ec']} height="9cm" />
      </Page>
      <Page pageNum={11}>
        <Concept num={6} title="相關係數">
          <Textarea2MathJax
            text={
              '$n$ 筆數對資料 $(x_1,y_1)$、$(x_2,y_2)$、$\\cdots$、$(x_n,y_n)$，記為 $(X,Y)$\n$x_1$、$x_2$、$\\cdots$、$x_n$ 的算術平均為 $\\mu_x$，標準差為 $\\sigma_x$，離均平方和為 $S_{xx}$\n$y_1$、$y_2$、$\\cdots$、$y_n$ 的算術平均為 $\\mu_y$，標準差為 $\\sigma_y$，離均平方和為 $S_{yy}$\n$X$ 與 $Y$ 的離差乘積和為\n$S_{xy}=(x_1-\\mu_x)(y_1-\\mu_y)+(x_2-\\mu_x)(y_2-\\mu_y)+\\cdots+(x_n-\\mu_x)(y_n-\\mu_y)$\n$=x_1y_1+x_2y_2+\\cdots+x_ny_n-n\\mu_x\\mu_y$'
            }
          />
          <Textarea2MathJax text="(1) $X$ 與 $Y$ 的相關係數為 $r=\frac{S_{xy}}{\sqrt{S_{xx}}\sqrt{S_{yy}}}=\frac{S_{xy}}{n\sigma_x\sigma_y}" />
          <Textarea2MathJax text={'(2) 相關係數 $r$ 的範圍為 $-1\\le r\\le1$'} />
        </Concept>
        <Exercise ids={['17a58f86582']} height="8.5cm" />
        <Concept num={7} title="迴歸直線">
          <Textarea2MathJax text="數對資料 $(x_1,y_1)$、$(x_2,y_2)$、$\cdots$、$(x_n,y_n)$，用最小平方法可求得 $Y$ 對 $X$ 的迴歸直線，又稱為最適直線，為 $y=mx+k$，其中 $m=\frac{S_{xy}}{S_{xx}}=r\frac{\sigma_y}{\sigma_x}$ 為其斜率，$k$ 可由代入 $(\mu_x,\mu_y)$ 得到。迴歸直線可用來進行預測分析。" />
        </Concept>
      </Page>
      <Page pageNum={12}>
        <Exercise ids={['17a5901f440', '17a5903a862']} height="9.5cm" />
        <Concept num={8} title="資料的加減乘除">
          <Textarea2MathJax text="(1) 若全體 $x_i$ 同加 $p$，全體 $y_i$ 同加 $q$，則相關係數 $r$ 不變" />
          <Textarea2MathJax text="(2) 若全體 $x_i$ 同乘 $p$，全體 $y_i$ 同乘 $q$，則相關係數 $r$ 不變或變號，即 $r\times\frac{pq}{|pq|}" />
        </Concept>
        <Exercise ids={['17a5d030723', '17a5d04eb8b']} height="8cm" />
      </Page>
      <Page pageNum={13}>
        <Concept num={9} title="散布圖">
          <Textarea2MathJax text="將 $(x_1,y_1)$、$(x_2,y_2)$、$\cdots$、$(x_n,y_n)$ 畫在 $xy$ 平面上，觀察分布狀況，可判定相關程度：" />
          <Textarea2MathJax text="(1) 正相關：大致上 $y$ 隨著 $x$ 增加而增加" />
          <div className={style.img}>
            <img alt="" src={`/toliman/images/散布圖1.PNG`} role="presentation" />
          </div>
          <Textarea2MathJax text="(2) 負相關：大致上 $y$ 隨著 $x$ 增加而減少" />
          <div className={style.img}>
            <img alt="" src={`/toliman/images/散布圖2.PNG`} role="presentation" />
          </div>
          <Textarea2MathJax text="(3) 零相關：看不出 $y$ 隨著 $x$ 遞增或遞減，如圖形呈左右或上下對稱" />
          <div className={style.img}>
            <img alt="" src={`/toliman/images/散布圖3.PNG`} role="presentation" />
          </div>
        </Concept>
        <Exercise ids={['17a5d0c5ca2', '17a5d0e67c4']} height="11.3cm" />
      </Page>
      <Page pageNum={14}>
        <Example num={1} ids={['17a580aaf30', '17a580c7137']} />
        <Example num={2} ids={['17a5811f5c8', '17a58136eaf']} />
      </Page>
      <Page pageNum={15}>
        <Example num={3} ids={['17a5fc9a59d', '17a5fbfa888']} />
        <Example num={4} ids={['17a5fd1067d', '17a5fd46a57']} />
      </Page>
    </div>
  );
};

export default B2C5DataAnalysis;

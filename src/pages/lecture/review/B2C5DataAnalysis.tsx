import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';
import Page from 'src/pages/lecture/component/Page';

const B2C5DataAnalysis = () => {
  return (
    <MathJax>
      <Page pageNum={8}>
        <div className={style.head}>Ch5 數據分析</div>
        <Concept num={1} title="全體數據的代表數">
          <div>全體數據的代表性量值，常見的有以下五種：</div>
          <div>{'(1) 算術平均數：即 $\\dfrac{x_1+x_2+\\cdots+x_n}n$，習慣記為 $\\mu$'}</div>
          <div>(2) 加權平均數：令數值乘上各自的權重，再除以總權數</div>
          <div>
            {
              '(3) 幾何平均數：$G=\\sqrt[n]{x_1\\times x_2\\times\\cdots\\times x_n}$，適用於平均成長率'
            }
          </div>
          <div>(4) 中位數：由小到大排序後，正中間的數值；若個數為偶數，則取中間兩數的算術平均</div>
          <div>(5) 眾數：出現最多次的數值</div>
        </Concept>
        <Exercise ids={['17a393dba9d', '17a393f79d8']} />
        <Concept num={2} title="百分位數" height="3.1cm">
          <div>{'$n$ 個數值由小到大排序，第 $k$ 百分位數的求法：'}</div>
          <div>{'(1) 若 $n\\times k\\%$ 不是整數，則取進位後的 $r$，第 $k$ 百分位數為 $x_r$'}</div>
          <div>
            {'(2) 若 $n\\times k\\%$ 為整數 $r$，則第 $k$ 百分位數為 $\\dfrac{x_r+x_{r+1}}2$'}
          </div>
          <div>
            {
              '第 1 四分位數即為第 25 百分位數，第 3 四分位數即為第 75 百分位數，\n中位數即為第 2 四分位數，也是第 50 百分位數'
            }
          </div>
        </Concept>
        <Exercise ids={['17a3a063f85']} />
      </Page>
      <Page pageNum={9}>
        <Concept num={3} title="全體數據的離散程度">
          <div>全體數據的離散程度(高低分差距程度)，常見的有以下三種：</div>
          <div>(1) 全距：最高分與最低分的差</div>
          <div>(2) 四分位距：第 3 四分位數與第 1 四分位數的差</div>
          <div>
            {
              '(3) 變異數與標準差：變異數 $\\sigma^2=\\dfrac{S_{xx}}n$，標準差 $\\sigma=\\sqrt{\\dfrac{S_{xx}}n}$，$S_{xx}$ 為「離差平方和」。'
            }
          </div>
          <br />
          <br />
          <br />
          <br />
          <div>以上皆為衡量整體數據離散程度的量值，值愈大表示數據愈分散；值愈小表示數據愈集中</div>
        </Concept>
        <Exercise ids={['17a3a0f0062', '17a3a11a2cb']} height="9cm" />
        <Concept num={4} title="一維數據的線性調整">
          <div>{"若資料的每個數值都加上 $k$，$x'=x+k$，則：$\\mu'=\\mu+k,\\sigma'=\\sigma$"}</div>
          <br />
          <div>{"若資料的每個數值都乘以 $m$，$x'=mx$，則：$\\mu'=m\\mu,\\sigma'=|m|\\sigma$"}</div>
          <br />
          <div>{"若資料的每個數值皆線性調整，$x'=ax+b$，則："}</div>
        </Concept>
      </Page>
      <Page pageNum={10}>
        <Exercise ids={['17a3a18212b', '17a3a1a6f8e']} height="8cm" />
        <Concept num={5} title="資料的標準化">
          <div>{'標準化數據，或稱 $z$ 分數，可用來客觀比較不同種類的數據，公式如下：'}</div>
          <div>{'$$z=\\dfrac{x-\\mu}{\\sigma}$$'}</div>
          <div>標準化後的算術平均數為　　，標準差為</div>
        </Concept>
        <Exercise ids={['17a58e8ba61', '17a58ea29ec']} height="9cm" />
      </Page>
      <Page pageNum={11}>
        <Concept num={6} title="散布圖">
          <div>
            {
              '將二維數據 $(x_1,y_1),(x_2,y_2),\\cdots,(x_n,y_n)$ 畫在 $xy$ 平面上，觀察分布狀況，可判定相關程度：'
            }
          </div>
          <div>{'(1) 正相關：大致上 $y$ 隨著 $x$ 增加而增加'}</div>
          <div className={style.img}>
            <img alt="" src={`/toliman/images/散布圖1.PNG`} role="presentation" />
          </div>
          <div>{'(2) 負相關：大致上 $y$ 隨著 $x$ 增加而減少'}</div>
          <div className={style.img}>
            <img alt="" src={`/toliman/images/散布圖2.PNG`} role="presentation" />
          </div>
          <div>{'(3) 零相關：看不出 $y$ 隨著 $x$ 遞增或遞減，如圖形呈左右或上下對稱'}</div>
          <div className={style.img}>
            <img alt="" src={`/toliman/images/散布圖3.PNG`} role="presentation" />
          </div>
        </Concept>
        <Exercise ids={['17a5d0c5ca2', '17a5d0e67c4']} height="11.3cm" />
      </Page>
      <Page pageNum={12}>
        <Concept num={7} title="相關係數" height="6.7cm">
          <div>{'二維數據 $(X,Y)$ 的相關係數：'}</div>
          <div>{'$$r=\\dfrac{S_{xy}}{\\sqrt{S_{xx}}\\sqrt{S_{yy}}}$$'}</div>
          <div>
            {
              '$S_{xx}$ 為 $X$ 的離差平方和，$S_{yy}$ 為 $Y$ 的離差平方和，$S_{xy}$ 稱為「離差乘積和」。'
            }
          </div>
          <div>{'相關係數 $r$ 的範圍為'}</div>
        </Concept>
        <Exercise ids={['18239affe3a', '17a58f86582']} height="9cm" />
        <Concept num={8} title="迴歸直線">
          <div>
            {
              '二維數據 $X$、$Y$，用最小平方法可求得 $Y$ 對 $X$ 的迴歸直線，又稱為最適直線，性質如下：'
            }
          </div>
          <br />
          <div>{'(1) 迴歸直線方程式 $y=mx+k$，斜率 $m=$'}</div>
          <br />
          <div>{'(2) 迴歸直線必通過點　　　　　　，可利用此性質求 $k$。'}</div>
        </Concept>
      </Page>
      <Page pageNum={13}>
        <Exercise ids={['17a5901f440', '17a5903a862']} height="9.5cm" />
        <Concept num={9} title="二維數據的線性調整">
          <div>
            {
              "若資料 $X$ 的數值都加上 $k$ ($x'=x+k$)，資料 $Y$ 的數值都加上 $t$ ($y'=y+t$)，則 $r'=r$"
            }
          </div>
          <br />
          <div>
            {
              "若資料 $X$ 的數值都乘以 $p$ ($x'=px$)，資料 $Y$ 的數值都乘以 $q$ ($y'=qy$)，則 $r'=|pq|r$"
            }
          </div>
        </Concept>
        <Exercise ids={['17a5d030723', '17a5d04eb8b']} height="8cm" />
      </Page>
      <Page pageNum={14}>
        <Example num={1} ids={['17a580aaf30', '17a580c7137']} />
        <Example num={2} ids={['17a5811f5c8', '17a58136eaf']} />
      </Page>
      <Page pageNum={15}>
        <Example num={3} ids={['17a5fc9a59d', '17a5fbfa888']} />
        <Example num={4} ids={['17a5fd1067d', '17a5fd46a57']} />
      </Page>
    </MathJax>
  );
};

export default B2C5DataAnalysis;

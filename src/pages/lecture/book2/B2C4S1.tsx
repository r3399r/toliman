import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const B2C4S1 = () => (
  <MathJax>
    <Page pageNum={1}>
      <div className={style.head}>1 一維數據分析</div>
      <Concept num={1} title="資料的均量">
        「均量」即集中趨勢量數，為一群數字的　　　　　　　，常見的有：眾數、中位數、算術平均數、幾何平均數。
        <div className={style.conceptHead} style={{ marginTop: 10 }}>
          眾數
        </div>
        出現次數最多的數字。例：1, 1, 2, 3, 3, 5, 6 之眾數為
        <div className={style.conceptHead} style={{ marginTop: 10 }}>
          中位數 $Me$
        </div>
        正中間的數。例：1, 1, 2, 3, 3, 5, 6 之中位數為　 　；1, 1, 2, 3, 5, 6 之中位數為
        <div className={style.conceptHead} style={{ marginTop: 10 }}>
          算術平均數 $\mu$
        </div>
        {
          '$\\mu=\\dfrac{x_1+x_2+\\cdots+x_n}{n}$，為最常用的均量。若考慮權數的話，則為「加權平均數」'
        }
        <div className={style.conceptHead} style={{ marginTop: 10 }}>
          幾何平均數
        </div>
        {
          '資料皆為正數，$G=\\sqrt[n]{x_1\\times x_2\\times\\cdots\\times x_n}$，常用於計算平均成長率'
        }
      </Concept>
      <Example num={1} ids={['17ea8bf46a3', '17ea8c968dd']} height="8.5cm" />
    </Page>
    <Page pageNum={2}>
      <Example num={2} ids={['17ea8bfcd2b', '17ea8c10f22']} height="9cm" />
      <Example num={3} ids={['17ea8c172ed', '17ea8c2d43f']} height="6cm" />
    </Page>
    <Page pageNum={3}>
      <Example num={4} ids={['17ea8c29091', '17ea8c4f7eb']} height="6cm" />
      <Concept num={2} title="資料的差量">
        「差量」即離中趨勢量數，代表一群數字的　　　　　　　，常見的有：全距、四分位距、變異數、標準差。
        <div className={style.conceptHead} style={{ marginTop: 10 }}>
          全距
        </div>
        最大與最小的差。例：1, 1, 2, 3, 3, 5, 6 之全距為
        <div className={style.conceptHead} style={{ marginTop: 10 }}>
          四分位距 $IQR$
        </div>
        第 1 四分位數 $Q_1$ 與第 3 四分位數 $Q_3$ 的差。例：1, 1, 2, 3, 3, 5, 6, 7 之四分位距為
        <div className={style.conceptHead} style={{ marginTop: 10 }}>
          {'離差平方和 $S_{xx}$'}
        </div>
        「離差」為每個數據減去算術平均數所成的數列
        <br />
        {'「離差平方和」為每個離差平方後相加之結果，記為 $S_{xx}$'}
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={style.conceptHead} style={{ marginTop: 10 }}>
          變異數 $Var$ 與標準差 $\sigma$
        </div>
        {'變異數 $Var=\\sigma^2=\\dfrac{S_{xx}}n$；標準差 $\\sigma=$'}
      </Concept>
    </Page>
    <Page pageNum={4}>
      <Example num={5} ids={['17ea8c90f65', '17ea8c9a3a2']} />
      <Example num={6} ids={['17ea8c6a418', '17ea8c77fde']} />
    </Page>
    <Page pageNum={5}>
      <Example num={7} ids={['17ea6e8b46b', '17ea6ea83e0']} />
      <Example num={8} ids={['17ea6ec8a28', '17ea6ec8a29']} />
    </Page>
    <Page pageNum={6}>
      <Example num={9} ids={['187bed168fe', '17ea6eed4e7']} />
      <Concept num={3} title="資料的平移伸縮">
        <div className={style.conceptHead}>資料的平移</div>
        <div>
          若每個數字都同加 $a$，即 $x_i+a$，則均量 (如平均 $\mu$) 與差量 (如標準差 $\sigma$)
          會如何改變？
        </div>
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>資料的伸縮</div>
        <div>
          若每個數字都乘以 $k$，即 $kx_i$，則均量 (如平均 $\mu$) 與差量 (如標準差 $\sigma$)
          會如何改變？
        </div>
        <br />
        <br />
        <br />
        <div className={style.conceptHead}>平移伸縮的綜合表現</div>
        <div>
          若每個數字都同乘 $k$ 再同加 $a$，即 $kx_i+a$，則均量 (如 $\mu$) 與差量 (如 $\sigma$)
          會如何改變？
        </div>
        <br />
        <br />
        <br />
      </Concept>
    </Page>
    <Page pageNum={7}>
      <Example num={10} ids={['17ea8cabba7', '17ea8ca8c9f']} />
      <Example num={11} ids={['17ea8ca21f3', '17ea8cbe618']} />
    </Page>
    <Page pageNum={8}>
      <Concept num={4} title="資料的標準化">
        <div>
          一組資料 $x_i$ ($i=1,2,...,n$) 的算術平均數為 $\mu$，標準差為 $\sigma$，
          <br />
          則標準化的方式為：
          <br />
          <br />
          <br />
          標準化後的資料也稱為 $Z$ 分數，其算術平均數為　　　，標準差為
          <br />用 $Z$ 分數來衡量不同類的數值排名會更客觀正確。
        </div>
      </Concept>
      <Example num={12} ids={['17ea8cc6bdf', '17ea8cdceb2']} height="4cm" />
      <Example num={13} ids={['17ea8cd11a4', '17ea8ce463a']} height="5.5cm" />
    </Page>
    <Page pageNum={9}>
      <Example num={14} ids={['17ea8ce8f49', '17ea8cfb7bb']} height="20cm" />
    </Page>
    <Page pageNum={10}>
      <Example num={15} ids={['17ea8cf31fb', '17ea8d00cd8']} height="20cm" />
    </Page>
  </MathJax>
);

export default B2C4S1;

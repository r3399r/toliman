import { MathJax } from 'better-react-mathjax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C4S4LinearTransform = () => (
  <MathJax>
    <Page pageNum={29}>
      <div className={style.head}>4 矩陣的線性變換 (數A)</div>
      <Concept num={1} title="線性變換">
        <div className={style.conceptHead}>線性變換</div>
        <div>
          把平面上的 $P$ 點坐標 $(x,y)$ 寫成行矩陣 {'$\\begin{bmatrix}x\\\\y\\end{bmatrix}$'}
          ，則二階方陣 {'$A=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}$'} 乘上{' '}
          {'$\\begin{bmatrix}x\\\\y\\end{bmatrix}$'} 所得的結果稱為 $P$ 點的「像」。可想像成矩陣 $A$
          是一種函數，代入 $P$ 點可得到一個相對應的結果，此過程稱為線性變換。
        </div>
        <div className={style.conceptHead}>線性變換後的圖形面積</div>
        <div>
          坐標平面上，原圖形經二階方陣 $A$ 變換形成新圖形，則可推得：
          {"$Area'=Area\\times|\\det(A)|$"}，證明略。從這個結論可以得知，如果
          $\det(A)=0$，則轉換後面積變成 $0$，圖形會被轉換成線段或一點。
        </div>
      </Concept>
      <Example num={1} ids={['17df56f3ed1', '17df56ff47e']} height="11cm" />
    </Page>
    <Page pageNum={30}>
      <Example num={2} ids={['17df1d69974', '17df1d9804e']} />
      <Example num={3} ids={['18050a7b2f7', '18050a8dcff']} />
    </Page>
    <Page pageNum={31}>
      <Example num={4} ids={['17df57184c6', '17df571c79b']} />
      <Example num={5} ids={['17df5721a17', '17df5725bce']} />
    </Page>
    <Page pageNum={32}>
      <Concept num={2} title="四大基本變換">
        <div className={style.conceptHead}>旋轉矩陣</div>
        <div>
          二階方陣{' '}
          {
            '$\\begin{bmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{bmatrix}$'
          }
          ，作用在 {'$\\begin{bmatrix}x\\\\y\\end{bmatrix}$'} 上，會把點 $(x,y)$ 繞原點逆時針旋轉
          $\theta$ 角，證明略。
        </div>
        <div className={style.conceptHead}>鏡射矩陣</div>
        <div>
          (1) 點 $(x,y)$ 對原點的對稱點為 $(-x,-y)$，其線性變換為{' '}
          {
            '$\\begin{bmatrix}　&　\\\\　&　\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}-x\\\\-y\\end{bmatrix}$'
          }
        </div>
        <div>
          (2) 點 $(x,y)$ 對 $x$ 軸鏡射後為 $(x,-y)$，其線性變換為{' '}
          {
            '$\\begin{bmatrix}　&　\\\\　&　\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}x\\\\-y\\end{bmatrix}$'
          }
        </div>
        <div>
          (3) 點 $(x,y)$ 對 $y$ 軸鏡射後為 $(-x,y)$，其線性變換為{' '}
          {
            '$\\begin{bmatrix}　&　\\\\　&　\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}-x\\\\y\\end{bmatrix}$'
          }
        </div>
        <div>
          (4) 點 $(x,y)$ 對 $y=x$ 鏡射後為 $(y,x)$，其線性變換為{' '}
          {
            '$\\begin{bmatrix}　&　\\\\　&　\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}y\\\\x\\end{bmatrix}$'
          }
        </div>
        <div>
          (5) 點 $(x,y)$ 對 $y=-x$ 鏡射後為 $(-y,-x)$，其線性變換為{' '}
          {
            '$\\begin{bmatrix}　&　\\\\　&　\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}-y\\\\-x\\end{bmatrix}$'
          }
        </div>
        <div>
          (6) 對直線 $y=mx$ 鏡射，令 $m=\tan\theta$，推導可得鏡射矩陣：
          {
            '$\\begin{bmatrix}\\cos2\\theta&\\sin2\\theta\\\\\\sin2\\theta&-\\cos2\\theta\\end{bmatrix}$'
          }
          ，證明略。
        </div>
        <div className={style.conceptHead}>伸縮矩陣</div>
        <div>
          (1) 沿 $x$ 軸伸長 $r$ 倍，即 $(x,y)\rightarrow(rx,y)$，其線性變換為{' '}
          {
            '$\\begin{bmatrix}　&　\\\\　&　\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}rx\\\\y\\end{bmatrix}$'
          }
        </div>
        <div>
          (2) 沿 $y$ 軸伸長 $k$ 倍，即 $(x,y)\rightarrow(x,ky)$，其線性變換為{' '}
          {
            '$\\begin{bmatrix}　&　\\\\　&　\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}x\\\\ky\\end{bmatrix}$'
          }
        </div>
        <div>
          (3) 合併上述，左右、上下放大縮小，$(x,y)\rightarrow(rx,ky)$，其線性變換為{' '}
          {
            '$\\begin{bmatrix}　&　\\\\　&　\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}rx\\\\ky\\end{bmatrix}$'
          }
        </div>
        <div className={style.conceptHead}>推移矩陣</div>
        <div>
          (1) 點 $(x,y)$ 向右推移 $ky$，即 $(x,y)\rightarrow(x+ky,y)$，其線性變換為{' '}
          {
            '$\\begin{bmatrix}　&　\\\\　&　\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}x+ky\\\\y\\end{bmatrix}$'
          }
        </div>
        <div>
          (2) 點 $(x,y)$ 向上推移 $kx$，即 $(x,y)\rightarrow(x,y+kx)$，其線性變換為{' '}
          {
            '$\\begin{bmatrix}　&　\\\\　&　\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix}=\\begin{bmatrix}x\\\\y+kx\\end{bmatrix}$'
          }
        </div>
      </Concept>
    </Page>
    <Page pageNum={33}>
      <Example num={6} ids={['17df573a1dd', '17df57574d4']} />
      <Example num={7} ids={['17df5765825', '17df577b7ed']} />
    </Page>
    <Page pageNum={34}>
      <Example num={8} ids={['17df579b485', '17df57a5fb6']} height="20cm" />
    </Page>
    <Page pageNum={35}>
      <Example num={9} ids={['180503e364e', '180503f537f']} />
      <Example num={10} ids={['1805042d699', '1805041523e']} />
    </Page>
  </MathJax>
);

export default C4S4LinearTransform;

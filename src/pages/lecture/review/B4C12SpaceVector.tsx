import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';

const B4C12SpaceVector = () => {
  return (
    <div>
      <div className={style.head}>Ch12 空間向量 (數A)</div>
      <Concept num={1} title="空間向量">
        <div className={style.conceptHead}>向量</div>
        <Textarea2MathJax
          text={
            '空間中，點 $A$ 沿 $x$、$y$、$z$ 方向分別移動 $p$、$q$、$r$ 到達 $B$ 點，則 $\\xvector{AB}=(p,q,r)$，並規定其大小為 $|\\xvector{AB}|=\\sqrt{p^2+q^2+r^2}$。'
          }
        />
        <div className={style.conceptHead}>向量的性質</div>
        <Textarea2MathJax
          text={
            '若 $\\vector a=(x_1,y_1,z_1)$，$\\vector b=(x_2,y_2,z_2)$，則向量有下列性質：\n(1) $\\vector a+\\vector b=(x_1+x_2,y_1+y_2,z_1+z_2)$\n(2) $r\\vector a=(rx_1,ry_1,rz_1)$\n(3) $\\vector a\\parallel\\vector b\\Leftrightarrow\\frac{x_1}{x_2}=\\frac{y_1}{y_2}=\\frac{z_1}{z_2}$'
          }
        />
      </Concept>
      <Exercise ids={['17ce00ebc7d', '17ce0106d46']} />
      <Concept num={2} title="空間向量的線性組合">
        <Textarea2MathJax
          text={
            '空間中 $\\vector a$、$\\vector b$、$\\vector c$ 不共平面，則任一向量 $\\vector v$ 必可唯一表示成 $\\vector v=\\alpha\\vector a+\\beta\\vector b+\\gamma\\vector c$。若 $\\alpha\\vector a+\\beta\\vector b+\\gamma\\vector c=0$，則必 $\\alpha=\\beta=\\gamma=0$。'
          }
        />
      </Concept>
      <Exercise ids={['17ce011be85', '17ce012e9fe']} />
      <Concept num={3} title="空間向量的內積">
        <div className={style.conceptHead}>內積</div>
        <Textarea2MathJax
          text={
            '設 $\\vector a=(x_1,y_1,z_1)$，$\\vector b=(x_2,y_2,z_2)$，夾角為 $\\theta$。\n內積 $\\vector a\\cdot\\vector b=|\\vector a||\\vector b|\\cos\\theta=x_1x_2+y_1y_2+z_1z_2$'
          }
        />
        <div className={style.conceptHead}>正射影與柯西不等式</div>
        <div>空間向量的正射影與柯西不等式與平面相量完全相同，請參考第三冊之複習講義。</div>
      </Concept>
      <Exercise ids={['17ce3b59f60', '17ce3b69c7f', '17ce3b7e1ca', '17ce3b8ab07']} />
      <Concept num={4} title="外積的計算與大小">
        <Textarea2MathJax
          text={
            '$\\vector a=(x_1,y_1,z_1)$，$\\vector b=(x_2,y_2,z_2)$，夾角為 $\\theta$，規定 $\\vector a\\times\\vector b=\\left(\\begin{vmatrix}y_1&z_1\\\\y_2&z_2\\end{vmatrix},\\begin{vmatrix}z_1&x_1\\\\z_2&x_2\\end{vmatrix},\\begin{vmatrix}x_1&y_1\\\\x_2&y_2\\end{vmatrix}\\right)$，其大小為 $\\vector a$ 與 $\\vector b$ 所張成的平行四邊形面積，即 $|\\vector a\\times\\vector b|=|\\vector a||\\vector b|\\sin\\theta$。'
          }
        />
      </Concept>
      <Exercise ids={['17ce3babf77', '17ce3bd3de0']} />
      <Concept num={5} title="外積的方向及性質">
        <Textarea2MathJax
          text={
            '$\\vector a\\times\\vector b$ 的方向必與 $\\vector a$、$\\vector b$ 都垂直，且滿足右手規則。其性質為：'
          }
        />
        <Textarea2MathJax
          text={'(1) $\\vector a\\times\\vector b=-\\vector b\\times\\vector a$ (無交換律)'}
        />
        <Textarea2MathJax
          text={
            '(2) 分配律：$\\vector a\\times(x\\vector b+y\\vector c)=x\\vector a\\times\\vector b+y\\vector a\\times\\vector c$'
          }
        />
        <Textarea2MathJax
          text={
            '(3) 係數的結合律：$(x\\vector a)\\times(y\\vector b)=(xy)\\vector a\\times\\vector b$'
          }
        />
        <Textarea2MathJax
          text={
            '(4) 若 $\\vector a\\parallel\\vector b$，則 $\\vector a\\times\\vector b=\\vector 0$'
          }
        />
      </Concept>
      <Exercise ids={['17ce3bf7d8f', '17ce3c0a6f3']} />
      <Concept num={6} title="三階行列式">
        <Textarea2MathJax
          text={
            '$\\begin{vmatrix}a&b&c\\\\d&e&f\\\\g&h&i\\end{vmatrix}=aei+dhc+gfb-ceg-bdi-ahf$，其性質與二階行列式相同：'
          }
        />
        <Textarea2MathJax text={'(1) 行列互換，其值不變；行(或列)對調，行列式值變號'} />
        <Textarea2MathJax text={'(2) 任一行(或列)的各項若皆為 $k$ 倍，則可將 $k$ 提出'} />
        <Textarea2MathJax text={'(3) 將一行(或列)乘一倍數加到另一行(或列)，其值不變'} />
        <Textarea2MathJax text={'(4) 若一行(或列)的各項均為兩項之和，則可拆開成兩個行列式相加'} />
      </Concept>
      <Exercise ids={['17ce3c5d28e', '17ce3c7b487']} />
      <Concept num={7} title="求平行六面體體積">
        <Textarea2MathJax
          text={
            '向量 $\\vector a=(a_1,a_2,a_3)$，$\\vector b=(b_1,b_2,b_3)$，$\\vector c=(c_1,c_2,c_3)$ 所張成的平行六面體體積為 $|(\\vector a\\times\\vector b)\\cdot\\vector c|=|\\begin{vmatrix}a_1&a_2&a_3\\\\b_1&b_2&b_3\\\\c_1&c_2&c_3\\end{vmatrix}|$，再乘 $\\frac16$ 即為四面體體積。'
          }
        />
      </Concept>
      <Exercise ids={['17ce3c8c5d9', '17ce3d442fc']} />
      <Concept num={8} title="平面標準式">
        <Textarea2MathJax
          text={
            '三元一次方程式 $ax+by+cz=d$ 為空間中的平面。如 $2x+y=1$、$y=2$ 在空間中都是平面，而且向量 $(a,b,c)$ 必與平面垂直，稱為平面的「法向量」。'
          }
        />
      </Concept>
      <Exercise ids={['17ce3e9ec47', '17ce3eaf58b']} />
      <Concept num={9} title="兩面的平行與相交">
        <Textarea2MathJax
          text={
            '兩平面 $E_1:a_1x+b_1y+c_1z=d_1$ 與 $E_2:a_2x+b_2y+c_2z=d_2$：\n(1) 若 $\\frac{a_1}{a_2}=\\frac{b_1}{b_2}=\\frac{c_1}{c_2}\\ne\\frac{d_1}{d_2}$，則 $E_1\\parallel E_2$\n(2) 若兩面夾角為 $\\theta$，則 $\\vector{n_1}$、$\\vector{n_2}$ 的夾角亦為 $\\theta$，故可利用內積求夾角'
          }
        />
      </Concept>
      <Exercise ids={['17ce3eba839', '17ce3ec98fe']} />
      <Concept num={10} title="點面距公式">
        <Textarea2MathJax
          text={
            '空間中，點 $K(q,p,r)$ 到平面 $E:ax+by+cz=d$ 的最近距離為 $\\frac{|ap+bq+cr-d|}{\\sqrt{a^2+b^2+c^2}}$。'
          }
        />
      </Concept>
      <Exercise ids={['17ce3ed2ef3', '17ce3ee37d5']} />
      <Concept num={11} title="直線的參數式與比例式">
        <Textarea2MathJax
          text={
            '空間中通過點 $(p,q,r)$，與向量 $(a,b,c)$ 平行的直線，其參數式為 $\\begin{cases}x=p+at\\\\y=q+bt\\\\z=r+ct\\end{cases},t\\in\\mathbb R$，比例式為 $\\frac{x-p}a=\\frac{y-q}b=\\frac{z-r}c$。其中，向量 $(a,b,c)$ 為「方向向量」。'
          }
        />
      </Concept>
      <Exercise ids={['17ce3eea738', '17ce3f1ef56']} />
      <Concept num={12} title="直線的兩面式">
        <Textarea2MathJax
          text={
            '兩個平面的交集為一直線，故兩個平面方程式的聯立即為直線的兩面式，如 $\\begin{cases}a_1x+b_1y+c_1z=d_1\\\\a_2x+b_2y+c_2z=d_2\\end{cases}$，一般來說「代 $t$」即可將兩面式改寫為參數式。將兩平面的法向量外積可得交線的方向向量。'
          }
        />
      </Concept>
      <Exercise ids={['17ce3f298f6', '17ce3f38be4']} />
      <Example num={1} ids={['17cebf2352a', '17cebf31bef']} />
      <Example num={2} ids={['17cebf3cc3a', '17cebf48a19']} />
      <Example num={3} ids={['17cebf5b541', '17cebf68693']} />
      <Example num={4} ids={['17cebf9bff6', '17cebfb15f8']} />
      <Example num={5} ids={['17ce909d6fd', '17cdc6808a6']} />
      <Example num={6} ids={['17ce884893d', '17ce884e49c']} />
      <Example num={7} ids={['17ce88642e7', '17ce886b874']} />
      <Example num={8} ids={['17ce1b28bc3', '17ce39dfad8']} />
    </div>
  );
};

export default B4C12SpaceVector;

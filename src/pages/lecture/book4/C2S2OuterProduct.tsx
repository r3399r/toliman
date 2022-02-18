import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C2S2OuterProduct = () => {
  return (
    <div>
      <Page pageNum={10}>
        <div className={style.head}>2 外積與三階行列式</div>
        <Concept num={1} title="外積的定義、性質">
          <div className={style.conceptHead}>二階行列式(複習)</div>
          <Textarea2MathJax text={'$\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}=$'} />
          <div className={style.conceptHead}>外積的定義</div>
          <Textarea2MathJax
            text={
              '$\\vector a=(x_1,y_1,z_1)$，$\\vector b=(x_2,y_2,z_2)$，規定 $\\vector a\\cross\\vector b=\\left(\\begin{vmatrix}y_1&z_1\\\\y_2&z_2\\end{vmatrix},\\begin{vmatrix}z_1&x_1\\\\z_2&x_2\\end{vmatrix},\\begin{vmatrix}x_1&y_1\\\\x_2&y_2\\end{vmatrix}\\right)$，稱為「$\\vector a$ 外積 $\\vector b$」或「$\\vector a$ cross $\\vector b$」。'
            }
          />
          <div className={style.conceptHead}>內積和外積的差異</div>
          <Textarea2MathJax
            text={
              '內積 $\\vector a\\cdot\\vector b$ 是一個　　　；外積 $\\vector a\\cross\\vector b$ 是一個　　　。'
            }
          />
          <div className={style.conceptHead}>外積的方向</div>
          <Textarea2MathJax
            text={
              '已知 $(\\vector a\\cross\\vector b)\\perp\\vector a$ 且 $(\\vector a\\cross\\vector b)\\perp\\vector b$，進一步可知 $\\vector a$、$\\vector b$、$\\vector a\\cross\\vector b$ 三個向量的方向符合右手定則。　\n　\n　\n　\n'
            }
          />
          <div className={style.conceptHead}>外積的大小</div>
          <Textarea2MathJax
            text={
              '可推得 $|\\vector a\\cross\\vector b|=|\\vector a||\\vector b|\\sin\\theta$，也就是說，外積的大小恰為 $\\vector a$ 與 $\\vector b$ 所張成的平行四邊形面積。\n　\n　\n　\n　\n　\n　\n'
            }
          />
          <div className={style.conceptHead}>外積的性質</div>
          <Textarea2MathJax
            text={
              '(1) 沒有交換律：$\\vector a\\cross\\vector b=-\\vector b\\cross\\vector a$\n(2) 分配律：$\\vector a\\cross(\\vector b+\\vector c)=\\vector a\\cross\\vector b+\\vector a\\cross\\vector c$\n(3) 結合律：$(p\\vector a)\\cross(q\\vector b)=(pq)\\vector a\\cross\\vector b$\n(4) 若 $\\vector a\\parallel\\vector b$，則 $\\vector a\\cross\\vector b=\\vector0$'
            }
          />
        </Concept>
      </Page>
      <Page pageNum={11}>
        <Example num={1} ids={['17da54bbd8f', '17da54d25cf']} />
        <Example num={2} ids={['17da54b3071', '17da54e60a1']} />
      </Page>
      <Page pageNum={12}>
        <Example num={3} ids={['17da54f3618', '17da550894a']} />
        <Example num={4} ids={['17da5511f69', '17dc0f77a3b']} />
      </Page>
      <Page pageNum={13}>
        <Example num={5} ids={['17dc0f6c9fe', '17dc0f86dd0']} height="23cm" />
      </Page>
      <Page pageNum={14}>
        <Concept num={2} title="外積的應用">
          <div className={style.conceptHead}>三向量所張平行六面體體積</div>
          <Textarea2MathJax
            text={
              '三向量 $\\vector a$、$\\vector b$、$\\vector c$ 共起點可張成平行六面體，若以 $\\vector a$、$\\vector b$ 張成的平行四邊形為底面，則高為 $|\\vector c||\\cos\\phi|$，所以平行六面體的體積為：\n　\n　\n　\n　\n　\n　\n'
            }
          />
          <div className={style.conceptHead}>三向量所張四面體體積</div>
          <Textarea2MathJax
            text={
              '將平行六面體切半後再削成錐體，即為四面體，故 $\\vector a$、$\\vector b$、$\\vector c$ 共起點張成的四面體體積為：\n　\n'
            }
          />
        </Concept>
        <Example num={6} ids={['17dc0f91c28', '17dc0f9a45f']} height="12.2cm" />
      </Page>
      <Page pageNum={15}>
        <Concept num={3} title="三階行列式的定義">
          <div className={style.conceptHead}>三階行列式的定義</div>
          <Textarea2MathJax
            text={
              '計算方法分為「直接展開」跟「降階」兩種，\n(1) 直接展開：$\\begin{vmatrix}a&b&c\\\\d&e&f\\\\g&h&i\\end{vmatrix}=aei+dhc+gbf-ceg-bdi-afh$，總共有 $6$ 項。'
            }
          />
          <Textarea2MathJax
            text={
              '(2) 降階：依照 $\\begin{vmatrix}+&-&+\\\\-&+&-\\\\+&-&+\\end{vmatrix}$ 的正負規則將行列式對某一行(列)展開而降為二階行列式。'
            }
          />
        </Concept>
        <Example num={7} ids={['17da3ced345', '17dc0fa4b81']} height="16.2cm" />
      </Page>
      <Page pageNum={16}>
        <Concept num={4} title="三階行列式的性質">
          <div className={style.conceptHead}>三階行列式的性質</div>
          <div>與二階行列式的性質完全相同，在更高階的行列式中也都會成立。</div>
          <Textarea2MathJax
            text={
              '(1) 將一行(列)乘一常數加到另一行(列)，其值不變。$\\begin{vmatrix}a&b&c\\\\d&e&f\\\\g&h&i\\end{vmatrix}=$'
            }
          />
          <Textarea2MathJax
            text={
              '(2) 任一行(列)可提出公倍數。$\\begin{vmatrix}a&kb&c\\\\d&ke&f\\\\g&kh&i\\end{vmatrix}=$'
            }
          />
          <Textarea2MathJax
            text={
              '(3) 行(列)對調，其值變號。$\\begin{vmatrix}a&b&c\\\\d&e&f\\\\g&h&i\\end{vmatrix}=$'
            }
          />
          <Textarea2MathJax
            text={
              '(4) 行列互換，其值不變。$\\begin{vmatrix}a&b&c\\\\d&e&f\\\\g&h&i\\end{vmatrix}=$'
            }
          />
          <Textarea2MathJax
            text={
              '(5) 若行(列)的各項均為兩項之和，可拆成兩個行列式。\n　 $\\begin{vmatrix}a+i&b+j&c+k\\\\d&e&f\\\\g&h&i\\end{vmatrix}=$'
            }
          />
        </Concept>
        <Example num={8} ids={['17dc0fadee3', '17dc0fc45ae']} height="9.5cm" />
      </Page>
      <Page pageNum={17}>
        <Example num={9} ids={['17dc0fb90a2', '17dc11d0dd4']} height="23cm" />
      </Page>
      <Page pageNum={18}>
        <Concept num={5} title="三階行列式的應用">
          <div className={style.conceptHead}>平行六面體體積</div>
          <Textarea2MathJax
            text={
              '$\\vector a=(x_1,y_1,z_1)$，$\\vector b=(x_2,y_2,z_2)$，$\\vector c=(x_3,y_3,z_3)$，則 $\\vector a$、$\\vector b$、$\\vector c$ 所張的平行六面體體積為 $|\\begin{vmatrix}\\vector a\\\\\\vector b\\\\\\vector c\\end{vmatrix}|=|\\begin{vmatrix}x_1&y_1&z_1\\\\x_2&y_2&z_2\\\\x_3&y_3&z_3\\end{vmatrix}|$。\n　\n　\n　\n　\n　\n　\n　\n　\n　\n　\n　\n'
            }
          />
        </Concept>
        <Example num={10} ids={['17dc11da321', '17dc11e7ed7']} height="10.5cm" />
      </Page>
      <Page pageNum={19}>
        <Example num={11} ids={['17dc11e120c', '17dc11ee737']} height="23cm" />
      </Page>
    </div>
  );
};

export default C2S2OuterProduct;

import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Page from 'src/pages/lecture/component/Page';

const C2S1InnerProductOfSpace = () => {
  return (
    <div>
      <Page pageNum={1}>
        <div className={style.head}>1 空間向量的內積</div>
        <Concept num={1} title="內積的計算及其性質">
          <div className={style.conceptHead}>內積定義</div>
          <Textarea2MathJax
            text={
              '空間向量 $\\vector a$ 與 $\\vector b$，兩向量的夾角為 $\\theta$，規定兩向量的內積為 $\\vector a\\cdot\\vector b=|\\vector a||\\vector b|\\cos\\theta$。'
            }
          />
          <div className={style.conceptHead}>內積的圖形意義</div>
          <Textarea2MathJax
            text={
              '向量內積 $\\vector a\\cdot\\vector b=|\\vector a||\\vector b|\\cos\\theta$，稱 $|\\vector a|\\cos\\theta$ 為「$\\vector a$ 在 $\\vector b$ 上的影子」，則 $\\vector a\\cdot\\vector b$ 可視為 $|\\vector b$| 乘「$\\vector a$ 的影子長」，同理，也可以為 $|\\vector a$| 乘「$\\vector b$ 的影子長」，再考慮同向為正、反向為負。\n　\n　\n　\n　\n'
            }
          />
          <div className={style.conceptHead}>內積的坐標算法</div>
          <Textarea2MathJax
            text={
              '若 $\\vector a=(x_1,y_1,z_1)$，$\\vector b=(x_2,y_2,z_2)$，則 $\\vector a\\cdot\\vector b=x_1x_2+y_1y_2+z_1z_2$，證明請參考前冊'
            }
          />
          <div className={style.conceptHead}>內積的性質</div>
          <Textarea2MathJax
            text={
              '(1) 交換律：$\\vector a\\cdot\\vector b=\\vector b\\cdot\\vector a$　　　(2) 結合律：$(k\\vector a)\\cdot(t\\vector b)=(kt)\\vector a\\cdot\\vector b$\n(3) 分配律：$(\\vector a+\\vector b)\\cdot\\vector c=\\vector a\\cdot\\vector c+\\vector b\\cdot\\vector c$'
            }
          />
        </Concept>
        <Example num={1} ids={['17d8618bd10', '17d861b678c']} height="9cm" />
      </Page>
      <Page pageNum={2}>
        <Example num={2} ids={['17d8617cca5', '17d861a2d65']} />
        <Example num={3} ids={['17d861938ba', '17d861bdb05']} />
      </Page>
      <Page pageNum={3}>
        <Example num={4} ids={['17d861c45e7', '17d861d8aa3']} />
        <Example num={5} ids={['17d861d2bc3', '17d861e1578']} />
      </Page>
      <Page pageNum={4}>
        <Example num={6} ids={['17dc12d9e62', '17dc12e5589']} />
        <Example num={7} ids={['17dc12e0853', '17dc12ef52b']} />
      </Page>
      <Page pageNum={5}>
        <Concept num={2} title="內積的應用">
          <div className={style.conceptHead}>長度</div>
          <Textarea2MathJax
            text={'常利用 $\\vector a\\cdot\\vector a=|\\vector a|^2$ 來求長度。'}
          />
          <div className={style.conceptHead}>角度</div>
          <Textarea2MathJax
            text={
              '常利用內積定義 $\\vector a\\cdot\\vector b=|\\vector a||\\vector b|\\cos\\theta$ 來求兩向量夾角。'
            }
          />
          <div className={style.conceptHead}>面積</div>
          <Textarea2MathJax
            text={
              '(不常用) 兩向量 $\\vector a$ 與 $\\vector b$ 共起點所張的平行四邊形面積為 $\\sqrt{|\\vector a|^2|\\vector b|^2-(\\vector a\\cdot\\vector b)^2}$，證明請參考第三冊平面向量。\n註：空間中的平行四邊形面積通常會使用「外積」來求。'
            }
          />
          <div className={style.conceptHead}>正射影</div>
          <Textarea2MathJax
            text={
              '設點 $C$ 投影到 $\\overleftrightarrow{AB}$ 的垂足點為 $H$，則稱 $\\xvector{AH}$ 為 $\\xvector{AC}$ 在 $\\xvector{AB}$ 上的正射影。利用內積的圖形意義，地板長乘影子長，可得關係式：$\\xvector{AC}\\cdot\\xvector{AB}=\\xvector{AH}\\cdot\\xvector{AB}$'
            }
          />
          <div className={style.conceptHead}>柯西不等式</div>
          <Textarea2MathJax
            text={
              '解柯西的關鍵在於向量 $\\vector a$ 與 $\\vector b$ 的設計，設計好後再套用 $-|\\vector a||\\vector b|\\le\\vector a\\cdot\\vector b\\le|\\vector a||\\vector b|$，極值發生時，$\\vector a\\parallel\\vector b$。'
            }
          />
        </Concept>
        <Example num={8} ids={['17dc12f574b', '17dc130531c']} height="10cm" />
      </Page>
      <Page pageNum={6}>
        <Example num={9} ids={['17dc130a627', '17dc1320c97']} />
        <Example num={10} ids={['17dc1318cbc', '17dc132ad64']} />
      </Page>
      <Page pageNum={7}>
        <Example num={11} ids={['17dc1355c13', '17dc136e00d']} height="23cm" />
      </Page>
      <Page pageNum={8}>
        <Example num={12} ids={['17dc13670d7', '17da3366659']} />
        <Example num={13} ids={['17da52a1a5e', '17da52e775a']} />
      </Page>
      <Page pageNum={9}>
        <Example num={14} ids={['17da52c23e5', '17da52f38f6']} />
        <Example num={15} ids={['17da52e0934', '17da5305ab0']} />
      </Page>
    </div>
  );
};

export default C2S1InnerProductOfSpace;

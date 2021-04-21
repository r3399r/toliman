import Homework from 'src/component/Homework';
import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from './Hw.module.scss';

type Q = {
  id: string;
  question: string;
  ans: string;
  image?: string;
};

const Hw = () => {
  const qs = [
    {
      id: '1',
      question:
        '1. 學生 $$7$$ 人(甲、乙、丙、丁、戊、己、庚)參加接力賽跑，請回答下列問題各有多少種次序。\n(1)任意排棒有幾種？\n(2)甲、乙、丙必須是相鄰的三棒有幾種？\n(3)甲、乙、丙三人的棒次互不相連有幾種？',
      ans: '(1) $$5040$$ (2) $$720$$ (3) $$1440$$',
    },
    {
      id: '2',
      question:
        '2. 一列火車有七節車廂，車廂號碼 $$1$$、$$2$$、$$3$$、$$4$$、$$5$$、$$6$$、$$7$$，今有兩對夫婦同時搭上火車。此四人剛好選坐兩節不同車廂而且是一對夫婦在一節車廂，另外一對夫婦選坐另一節車廂，則共有幾種選法？',
      ans: '$$42$$',
    },
    {
      id: '3',
      question:
        '3. 以 $$1$$、$$2$$、$$4$$、$$6$$、$$9$$ 等五個數不可重複排成一個五位數，將這些五位數由小排到大(如 $$12469$$、$$12496$$、...)後，則第 $$50$$ 個數為？',
      ans: '$$41296$$',
    },
    {
      id: '4',
      question:
        '4. 用 $$0$$、$$0$$、$$1$$、$$1$$、$$1$$、$$2$$ 共 $$6$$ 個數字作成六位數，則共有幾種不同的數字？',
      ans: '$$40$$',
    },
    {
      id: '5',
      question: '5. 某中學晚會共分成 $$7$$ 段，其中魔術、歌唱須在熱舞表演的前面，則共有幾種排法？',
      ans: '$$1680$$',
    },
    {
      id: '6',
      question: '6. 將 $$abscissa$$ 八個字排成一列，任意排，則排法有多少種？',
      ans: '$$3360$$',
    },
    {
      id: '7',
      question: '7. 由一樓上二樓的樓梯共有 $$8$$ 階，某人以每步踏一階或二階上樓，共有幾種走法？',
      ans: '$$34$$',
    },
    {
      id: '8',
      question:
        '8. 從 $$1$$、$$2$$、$$3$$、$$4$$、$$5$$、$$6$$ 這 $$6$$ 個數字中，任意挑選 $$3$$ 個相異的數字排成三位數，若將所有排成的三位數由小到大依序排列，則 $$345$$ 為第幾個三位數？',
      ans: '$$51$$',
    },
    {
      id: '9',
      question:
        '9. 某班想從 $$7$$ 名學生中選派 $$4$$ 人分別參加演講、郎讀、作文、字音字形比賽，其中小宇不參加演講比賽，阿光不參加朗讀比賽，則有幾種選派方式？',
      ans: '$$620$$',
    },
    {
      id: '10',
      question:
        '10. 甲、乙、丙、丁、戊、己六人排成一列，其中甲與乙為相鄰而且丙與乙分開，則可能的情形有幾種？',
      ans: '$$192$$',
    },
    {
      id: '11',
      question:
        '11. 由甲地至乙地是棋盤式的街道，某人以走捷徑的方式由甲地至乙地，求必須經過 $$P$$ 點或 $$Q$$ 點的方法有多少種？',
      ans: '$$154$$',
      image: 'images/ex.jpg',
    },
    {
      id: '12',
      question:
        '12. 將 $$1$$、$$2$$、$$3$$、$$4$$、$$5$$、$$6$$ 六個數字全取排成六位數，下列敘述何者正確？\n(A)六位數共有 $$720$$ 個\n(B)偶數有 $$360$$ 個\n(C) $$3$$ 的倍數有 $$240$$ 個\n(D) $$4$$ 的倍數有 $$192$$ 個\n(E) $$5$$ 的倍數有 $$190$$ 個',
      ans: '(A)(B)(D)(E)',
    },
  ];

  return (
    <div className={style.content}>
      <Homework>
        {qs.map((q: Q) => (
          <div key={q.id}>
            {q.image !== undefined && (
              <img className={style.img} src={q.image} alt="" role="presentation" />
            )}
            <Textarea2MathJax text={q.question} />
            <Textarea2MathJax text={`Ans: ${q.ans}`} className={style.ans} />
          </div>
        ))}
      </Homework>
    </div>
  );
};

export default Hw;

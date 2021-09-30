import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';

const Exponent = () => {
  return (
    <div>
      <div className={style.head}>指數</div>
      <Concept title="整數指數與指數律">
        <div className={style.conceptHead}>正整數指數</div>
        <div>
          <Textarea2MathJax
            text={
              '當 $n$ 為正整數時，對於每一個實數 $a$，$a^n=\\underbrace{a\\times a\\times\\cdots\\times a}_{n個}$，$a^n$ 讀作「$a$ 的 $n$ 次方」，其中 $a$ 稱為底數，$n$ 稱為指數。'
            }
          />
        </div>
        <div className={style.conceptHead}>整數指數律</div>
        <div>
          <Textarea2MathJax text={'設 $a$、$b$ 為不等於 $0$ 的實數，且 $m$、$n$ 為整數，則：'} />
        </div>
        <div className={style.note}>
          <Textarea2MathJax
            text={
              '(1) $a^m\\times a^n=a^{m+n}$\n(2) $a^m\\div a^n=a^{m-n}$\n(3) $(a^m)^n=a^{mn}$\n(4) $a^n\\times b^n=(a\\times b)^n$'
            }
          />
        </div>
        <div className={style.conceptHead}>零整數與負整數指數</div>
        <div>
          <Textarea2MathJax text={'(1) 零指數：$a^0=1$\n(2) 負整數指數：$a^{-n}=\\frac{1}{a^n}$'} />
        </div>
      </Concept>
      <Exercise ids={['179c5a8681e', '179c5bb1a92', '179c5bad9e9', '179c5be5558']} />
      <Example num={1} ids={['179c5c443f0', '179c5c685a9']} />
    </div>
  );
};

export default Exponent;

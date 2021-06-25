import Textarea2MathJax from 'src/component/Textarea2MathJax';
import style from 'src/pages/lecture/Common.module.scss';
import Concept from 'src/pages/lecture/component/Concept';
import Example from 'src/pages/lecture/component/Example';
import Exercise from 'src/pages/lecture/component/Exercise';

const B1C5DataAnalysis = () => {
  return (
    <div>
      <div className={style.head}>數據分析</div>
      <Concept num={1} title="全體數據的代表數">
        <Textarea2MathJax
          text={
            '數值 $$x_1$$、$$x_2$$、$$\\cdots$$、$$x_n$$ 有下列幾種數，為全體數據的代表性量值：'
          }
        />
        <Textarea2MathJax
          text={'(1) 算術平均數：即 $$\\frac{x_1+x_2+\\cdots+x_n}{n}$$，習慣記為 $$\\mu$$'}
        />
        <Textarea2MathJax text={'(2) 加權平均數：令數值乘上各自的權重，再除以總權數。'} />
        <Textarea2MathJax
          text={
            '(3) 幾何平均數：$$G=\\sqrt[n]{x_1\\times x_2\\times\\cdots\\times x_n}$$，適用於平均成長率'
          }
        />
        <Textarea2MathJax
          text={'(4) 中位數：由小到大排序後，正中間的數值；若個數為偶數，則取中間兩數的算術平均'}
        />
        <Textarea2MathJax text={'(5) 眾數：出現最多次的數值'} />
      </Concept>
      <Exercise ids={['17a393dba9d', '17a393f79d8']} />
      <Concept num={2} title="百分位數">
        <Textarea2MathJax text={'$$n$$ 個數值由小到大排序，第 $$k$$ 百分位數：'} />
        <Textarea2MathJax
          text={
            '(1) 若 $$n\\times\\frac{k}{100}$$ 不是整數，則取進位後的 $$r$$，第 $$k$$ 百分位數為 $$x_r$$'
          }
        />
        <Textarea2MathJax
          text={
            '(2) 若 $$n\\times\\frac{k}{100}$$ 為整數 $$r$$，則第 $$k$$ 百分位數為 $$\\frac{x_r+x_{r+1}}{2}'
          }
        />
        <Textarea2MathJax
          text={
            '第 $$1$$ 四分位數即為第 $$25$$ 百分位數，第 $$3$$ 四分位數即為第 $$75$$ 百分位數，中位數即為第 $$2$$ 四分位數即為第 $$50$$ 百分位數'
          }
        />
      </Concept>
      <Exercise ids={['17a3a063f85']} />
      <Concept num={3} title="全體數據的離散程度">
        <Textarea2MathJax
          text={
            '數值 $$x_1$$，$$x_2$$，$$\\cdots$$，$$x_n$$ 的算術平均數為 $$\\mu$$，稱 $$x_1-\\mu$$，$$x_2-\\mu$$，$$\\cdots$$，$$x_n-\\mu$$ 為離差，平方相加稱為離差平方和 $$S_{xx}$$。\n$$S_{xx}=(x_1-\\mu)^2+(x_2-\\mu)^2+\\cdots+(x_n-\\mu)^2=x_1^2+x_2^2+\\cdots+x_n^2-n\\mu^2$$'
          }
        />
        <Textarea2MathJax
          text={
            '變異數 $$\\sigma^2=\\frac{S_{xx}}{n}$$，標準差 $$\\sigma=\\sqrt{\\frac{S_{xx}}{n}}$$，為衡量整體數據離散程度的量值，標準差愈大表示數據愈分散；標準差愈小表示數據愈集中'
          }
        />
      </Concept>
      <Exercise ids={['17a3a0f0062', '17a3a11a2cb']} />
      <Concept num={4} title="資料的加減乘除">
        <Textarea2MathJax
          text={
            '若資料的每個數字都加上 $$k$$，則：\n(1) 「均量」如中位數、算術平均數也跟著加上 $$k$$\n(2) 「差量」如全距、標準差的值不變'
          }
        />
        <Textarea2MathJax
          text={
            '若資料的每個數字都乘以 $$m$$，則：\n(1) 「均量」如中位數、算術平均數也跟著乘以 $$m$$\n(2) 「差量」如全距、標準差的值成為 $$|m|$$ 倍'
          }
        />
      </Concept>
      <Exercise ids={['17a3a18212b', '17a3a1a6f8e']} />
      <Example num={1} ids={['17a19c2b55e', '17a1ad46bf7']} />
      <Example num={2} ids={['17a1adcc0ed', '17a1ade3264']} />
    </div>
  );
};

export default B1C5DataAnalysis;

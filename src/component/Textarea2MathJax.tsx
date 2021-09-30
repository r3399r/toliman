import classNames from 'classnames';
import MathJax from 'mathjax3-react';
import style from './Textarea2MathJax.module.scss';

type Props = {
  text: string;
  className?: string;
};

const Textarea2MathJax = ({ className, text }: Props) => (
  <MathJax.Provider
    url="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
    options={{
      loader: { load: ['[tex]/mathtools'] },
      tex: {
        inlineMath: [['$', '$']],
        packages: { '[+]': ['mathtools'] },
      },
    }}
  >
    {text.split('\n').map((line: string, index: number) => {
      return (
        <div key={index} className={classNames(className, style.font)}>
          <MathJax.Formula formula={line} />
        </div>
      );
    })}
  </MathJax.Provider>
);

export default Textarea2MathJax;

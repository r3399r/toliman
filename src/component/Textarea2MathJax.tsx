import { MathJax } from 'better-react-mathjax';

type Props = {
  text: string;
  className?: string;
};

const Textarea2MathJax = ({ className, text }: Props) => (
  <>
    {text.split('\n').map((line: string, index: number) => {
      return (
        <div key={index} className={className}>
          <MathJax>{line}</MathJax>
        </div>
      );
    })}
  </>
);

export default Textarea2MathJax;

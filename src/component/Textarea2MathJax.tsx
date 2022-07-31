type Props = {
  text: string;
  className?: string;
};

const Textarea2MathJax = ({ className, text }: Props) => (
  <>
    {text.split('\n').map((line: string, index: number) => (
      <div key={index} className={className}>
        <div>{line}</div>
      </div>
    ))}
  </>
);

export default Textarea2MathJax;

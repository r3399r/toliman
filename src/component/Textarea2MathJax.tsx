import MathJax from 'react-mathjax';

type Props = {
  text: string;
};

const Textarea2MathJax = ({ text }: Props) => {
  return (
    <div>
      <MathJax.Provider>
        {text.split('\n').map((line: string, index: number) => {
          return (
            <div key={index}>
              {line.split('$$').map((val: string, cnt: number) => {
                if (cnt % 2 === 0) return val;

                return <MathJax.Node inline={true} formula={val} key={cnt} />;
              })}
            </div>
          );
        })}
      </MathJax.Provider>
    </div>
  );
};

export default Textarea2MathJax;

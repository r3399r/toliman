import MathJax from 'react-mathjax';
import style from './Textarea2MathJax.module.scss';

type Props = {
  text: string;
  allowBlock?: boolean;
  className?: string;
  image?: File;
};

const Textarea2MathJax = ({ className, text, allowBlock = true, image }: Props) => {
  return (
    <div className={className}>
      {image && (
        <img className={style.image} src={URL.createObjectURL(image)} alt="" role="presentation" />
      )}
      <MathJax.Provider>
        {text.split('\n').map((line: string, index: number) => {
          const splited: string[] = line.split('$$');

          if (allowBlock === true && splited.length === 3 && splited[0] === '' && splited[2] === '')
            return <MathJax.Node formula={splited[1]} key={index} />;

          return (
            <div key={index}>
              {splited.map((val: string, cnt: number) => {
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

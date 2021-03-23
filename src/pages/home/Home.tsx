import MathJax from 'react-mathjax';

const Home = () => {
  const tex =
    '\\begin{array} {|r|r|}\\hline 0_0 & 0_1 & 0_2 \\\\ \\hline 1_0 & 1_1 & 1_2 \\\\ \\hline  \\end{array}';

  return (
    <div>
      <div>gigggi</div>
      <button className="uk-button">123</button>
      <div>
        <MathJax.Provider>
          <div>
            已知某方程式This is an inline math formula: <MathJax.Node inline={true} formula={tex} />
            . And a block one:
            <MathJax.Node formula={tex} />
          </div>
        </MathJax.Provider>
      </div>
    </div>
  );
};

export default Home;

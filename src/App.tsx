import { createTheme, ThemeProvider } from '@mui/material';
import { MathJaxContext } from 'better-react-mathjax';
import AppRoutes from './Routes';

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Times New Roman', 'cwTeXYen'].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <MathJaxContext
        config={{
          loader: { load: ['[tex]/mathtools', '[tex]/physics', '[tex]/cancel'] },
          tex: {
            inlineMath: [['$', '$']],
            packages: { '[+]': ['mathtools', 'physics', 'cancel'] },
            macros: {
              vector: ['\\overset{\\small\\rightharpoonup}{#1}', 1],
              xvector: ['\\overset{\\LARGE\\rightharpoonup}{#1}', 1],
              parallel: ['\\mathrel{/\\mkern-5mu/}', 0],
              nparallel: ['\\bcancel{\\mathrel{/\\mkern-5mu/}}', 0],
              arc: ['\\overset{\\huge\\frown}{#1}', 1],
              du: ['^\\circ', 0],
              arg: ['\\operatorname{Arg}', 0],
            },
          },
        }}
      >
        <AppRoutes />
      </MathJaxContext>
    </ThemeProvider>
  );
};

export default App;

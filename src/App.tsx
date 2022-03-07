import { createTheme, ThemeProvider } from '@mui/material';
import AppRoutes from './Routes';

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ['Times New Roman', 'cwTeXYen'].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;

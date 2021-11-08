import './App.css';
import { Header } from './header/Header'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#000',
    },
  },
  shadows: ["none"]
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header></Header>
        <header className="App-header">
          <div className="mx-2">
            <h2>Test</h2>
          </div>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;

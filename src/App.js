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
        <div className="col-md-12">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-10">
              <div className="mx-2">
                <h2>Test</h2>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;

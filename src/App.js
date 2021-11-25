import './App.css';
import { Header } from './header/Header'
import { Cakes } from './cakes/Cakes';
import { CakePage } from './cake/CakePage';
import { Routes, Route, Link } from "react-router-dom";

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
  shadows: Array(25).fill('none')
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
                <Routes>
                  <Route path="/" element={<Cakes />} />
                  <Route path="/cake/:cakeId" element={<CakePage />} /> 
                  <Route path="test" element={<div>TEST</div>} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;

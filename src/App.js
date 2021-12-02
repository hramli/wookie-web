import './App.css';
import { CakesPage } from './cakes/CakesPage';
import { CakePage } from './cake/CakePage';
import { BurgersPage } from './burgers/BurgersPage';
import { FaqPage } from './faq/FaqPage';
import { NotFoundPage } from './notfound/NotFoundPage';
import { Routes, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Footer } from './footer/Footer';

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
        <Routes>
          <Route path="/" element={<CakesPage />} />
          <Route path="/cakes" element={<CakesPage />} />
          <Route path="/cake/:cakeId" element={<CakePage />} />
          <Route path="/burgers" element={<BurgersPage />} />
          <Route path="/help" element={<FaqPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;

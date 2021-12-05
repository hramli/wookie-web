import './App.css';
import { CakesPage } from './cakes/CakesPage';
import { CakePage } from './cake/CakePage';
import { BurgersPage } from './burgers/BurgersPage';
import { CookiesPage } from './cookies/CookiesPage';
import { FaqPage } from './faq/FaqPage';
import { StoryPage } from './story/StoryPage';
import { NotFoundPage } from './notfound/NotFoundPage';
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from './ScrollToTop';

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
        <ScrollToTop></ScrollToTop>
        <Routes>
            <Route path="/" element={<CakesPage />} />
            <Route path="/cakes" element={<CakesPage />} />
            <Route path="/cake/:cakeId" element={<CakePage />} />
            <Route path="/burgers" element={<BurgersPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/help" element={<FaqPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;

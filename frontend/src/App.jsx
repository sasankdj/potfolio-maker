import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import FormPage from './pages/FormPage';
import PortfolioPage from './pages/PortfolioPage';
import MainPage from './pages/MainPage';
import Templates from "./pages/Templates";
import Footer from './components/Footer';
import { createContext ,useState} from 'react';

export const store = createContext();

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

function Main() {
  const navigate = useNavigate();
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);
  

  return (
    <store.Provider value={{ navigate ,selectedTemplateId,setSelectedTemplateId }}>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/templates" element={<Templates />} />
        </Routes>
        <Footer />
      </div>
    </store.Provider>
  );
}

export default App;

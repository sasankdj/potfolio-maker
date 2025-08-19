import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './pages/FormPage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

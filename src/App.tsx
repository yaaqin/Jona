import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Ganti Router dengan BrowserRouter
import ScrollToTop from './Hook/scroll';
import Home from './Pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* user path */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;

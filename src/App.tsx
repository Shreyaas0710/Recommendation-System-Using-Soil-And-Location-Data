import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import LandownerPage from './pages/LandownerPage';
import StorePage from './pages/StorePage';
import JoinPage from './pages/JoinPage';
import ImpactPage from './pages/ImpactPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/landowners" element={<LandownerPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
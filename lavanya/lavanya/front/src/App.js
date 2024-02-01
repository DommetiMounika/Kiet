import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage/homepage';
import Grid from './components/intro/Grid';
import Ap from './components/mba/ap';
import Poly from './components/polytechnic/poly';
import Connect from './components/btech/conn';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intro" element={<Grid />} />
        <Route path="/mba" element={<Ap />} />
        <Route path="/polytechnic" element={<Poly />} />
        <Route path="/btech" element={<Connect />} />
      </Routes>
    </Router>
  );
};
export default App;
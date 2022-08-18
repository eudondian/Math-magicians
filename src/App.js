import React from 'react';
import './components/App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

// export default App;

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>

    </div>
  </div>
);

export default App;

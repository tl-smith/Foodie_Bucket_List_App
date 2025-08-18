import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Dashboard from './pages/Dashboard.jsx';
import './index.css'


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/about" element={< About />} />
      <Route path="/dashboard" element={< Dashboard />} />
    </Routes>
  </BrowserRouter>
);


import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Contact from './pages/ContactUs.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Dashboard from './pages/Dashboard.jsx'
import BucketList from './pages/BucketList.jsx';
// import './index.css'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(  

    <BrowserRouter>
      <Routes>

        <Route path="/home" element={< Home />} />
        <Route path="/about" element={< About />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/login" element={< Login />} />
        <Route path="/signup" element={< SignUp />} />
        <Route path="/dashboard" element={< Dashboard />} />
        <Route path="/create-bucket-list" element={< BucketList />} />

      </Routes>
    </BrowserRouter>
  

);

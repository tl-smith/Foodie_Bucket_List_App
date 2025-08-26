import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Layout from "./components/Layout.jsx";
import './index.css'


const root = document.getElementById("root");
const client = new QueryClient();
ReactDOM.createRoot(root).render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);


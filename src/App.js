import logo from './logo.svg';
import './App.css';
import "./index.css";
import React from "react";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}


export default App;

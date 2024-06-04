import logo from './logo.svg';
import './App.css';
import "./index.css";
import React from "react";
import LoginPage from "./pages/LoginPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import Catalog from './pages/CatalogPage.js';
import MyEvents from './pages/MyEvents.js';
import EventForm from './pages/EventForm.js';
import UserProfilePage from './pages/UserProfilePage.js';
import EventDetailsPage from './pages/EventDetailsPage.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/catalogo-eventos" element={<Catalog />} />
            <Route path="/mis-eventos" element={<MyEvents />} />
            <Route path="/event/:id" element={<EventDetailsPage />} />
            <Route path="/registro-eventos" element={<EventForm />} />
            <Route path="/UserProfilePage" element={<UserProfilePage />} />
            <Route path="/EventDetailsPage" element={<EventDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}


export default App;

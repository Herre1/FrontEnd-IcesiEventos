import React from 'react';
import '../styles/Navbar.css';
import MisEventos from '../assets/MisEventos.png';
import ProximosEventos from '../assets/ProximosEventos.png';
import CatalogoEventos from '../assets/CatalogoEventos.png';
import RegistroEventos from '../assets/RegistroEventos.png';
import Usuario from '../assets/usuario.png';
import Logo from '../assets/Logo.png';
import LogoutEventos from '../assets/cerrar-sesion.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="user-section">
        <img src={Usuario} alt="Usuario" className="img" />
        <div className="welcome-text">
          <span>Bienvenido</span>
          <br />
          Usuario!
        </div>
      </div>
      <div className="menu-item">
        <img src={MisEventos} alt="Mis Eventos" className="menu-image" />
        <div className="menu-text">Mis Eventos</div>
      </div>
      <div className="menu-item">
        <img src={CatalogoEventos} alt="Catalogo de Eventos" className="menu-image" />
        <div className="menu-text">Catalogo de Eventos</div>
      </div>
      <div className="menu-item">
        <img src={ProximosEventos} alt="Eventos Proximos" className="menu-image" />
        <div className="menu-text">Eventos Proximos</div>
      </div>
      <div className="menu-item">
        <img src={RegistroEventos} alt="Registrar Eventos" className="menu-image" />
        <div className="menu-text">Registrar Eventos</div>
      </div>
      <div className="menu-item">
        <img src={LogoutEventos} alt="Logout Eventos" className="menu-image" />
        <div className="menu-text">Cerrar Sesion</div>
      </div>
      <img src={Logo} alt="Logo" className="logo" />
      <div className="footer-text">Todos los derechos reservados 2024 ©</div>
    </div>
  );
};

export default Navbar;
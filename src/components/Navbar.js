import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import MisEventos from '../assets/MisEventos.png';
import CatalogoEventos from '../assets/CatalogoEventos.png';
import RegistroEventos from '../assets/RegistroEventos.png';
import Usuario from '../assets/usuario.png';
import Logo from '../assets/Logo.png';
import LogoutEventos from '../assets/cerrar-sesion.png';


const Navbar = () => {

  const [usuario, setUsuario] = useState('');

  useEffect(() => {
    // Obtenemos el nombre de usuario del localStorage al cargar el componente
    const nombreUsuario = localStorage.getItem('cuenta');
    console.log('Nombre de usuario desde localStorage:', nombreUsuario); // Verificación
    setUsuario(nombreUsuario);
  }, []);

  return (
    <div className="navbar">
      <div className="user-section">
      <Link to="/UserProfilePage" className="menu-link">
        <img src={Usuario} alt="Usuario" className="img" />
        </Link>
        <div className="welcome-text">
          <span>Bienvenido</span>
          <br />
          {usuario ? usuario : 'Usuario'}
        </div>
      </div>
      <div className="menu-item">
      <Link to="/mis-eventos" className="menu-link">
          <img src={MisEventos} alt="Mis Eventos" className="menu-image" />
          <div className="menu-text">Mis Eventos</div>
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/catalogo-eventos" className="menu-link">
          <img src={CatalogoEventos} alt="Catalogo de Eventos" className="menu-image" />
          <div className="menu-text">Catalogo de Eventos</div>
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/registro-eventos" className="menu-link">
          <img src={RegistroEventos} alt="Registrar Eventos" className="menu-image" />
          <div className="menu-text">Registrar Eventos</div>
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/" className="menu-link">
          <img src={LogoutEventos} alt="Logout Eventos" className="menu-image" />
          <div className="menu-text">Cerrar Sesion</div>
        </Link>
      </div>
      <img src={Logo} alt="Logo" className="logo" />
      <div className="footer-text">Todos los derechos reservados 2024 ©</div>
    </div>
  );
};

export default Navbar;
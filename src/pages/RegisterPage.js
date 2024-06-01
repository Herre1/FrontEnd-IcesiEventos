import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import registerImage from '../assets/registerImage.jpg';
import lockImage from '../assets/lock.jpg';
import userImage from '../assets/user2.png';
import groupImage from '../assets/group.jpg';
import axios from 'axios';
import '../styles/RegisterPage.css';

function Register() {
  const navigate = useNavigate(); 


  return (
    <div className="register-container">
      <div className="register-image-container">
        <img src={registerImage} alt="EventosIcesi" className="register-image" />
      </div>
      <div className="register-form-container">
        <div className="register-form-content">
          <div className="register-text">
            <h2>Registro</h2>
            <p>Si ya tienes una cuenta registrada</p>
            <p>Puedes <Link to="/" className="register-highlight">Iniciar Sesión Aqui!</Link></p>
          </div>
          <form>
            <div className="register-input-group">
              <label>ID</label>
              <div className="register-input-wrapper">
                <img src={lockImage} className="register-input-icon" alt="ID" />
                <input
                  type="text"
                  name="codigo"
                  placeholder="Ingresa tu código"
                />
              </div>
              <div className="register-input-underline"></div>
            </div>
            <div className="register-input-group">
              <label>Username</label>
              <div className="register-input-wrapper">
                <img src={userImage} className="register-input-icon" alt="Username" />
                <input
                  type="text"
                  name="usuario"
                  placeholder="Ingresa tu usuario"
                />
              </div>
              <div className="register-input-underline"></div>
            </div>
            <div className="register-input-group">
              <label>First Name</label>
              <div className="register-input-wrapper">
                <img src={userImage} className="register-input-icon" alt="firstName" />
                <input
                  type="text"
                  name="firstName"
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div className="register-input-underline"></div>
            </div>
            <div className="register-input-group">
              <label>Last Name</label>
              <div className="register-input-wrapper">
                <img src={userImage} className="register-input-icon" alt="lastName" />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Ingresa tu apellido"
                />
              </div>
              <div className="register-input-underline"></div>
            </div>
            <div className="register-input-group">
              <label>Relationship</label>
              <div className="register-input-wrapper">
                <img src={groupImage} className="register-input-icon" alt="relationship" />
                <input
                  type="text"
                  name="relationship"
                  placeholder="Ingresa tu relacion con la institucion"
                />
              </div>
              <div className="register-input-underline"></div>
            </div>
            <div className="register-input-group">
              <label>Email</label>
              <div className="register-input-wrapper">
                <img src={groupImage} className="register-input-icon" alt="email" />
                <input
                  type="text"
                  name="email"
                  placeholder="Ingresa tu email"
                />
              </div>
              <div className="register-input-underline"></div>
            </div>
            <div className="register-input-group">
              <label>City</label>
              <div className="register-input-wrapper">
                <img src={groupImage} className="register-input-icon" alt="city" />
                <input
                  type="text"
                  name="city"
                  placeholder="Ingresa tu ciudad"
                />
              </div>
              <div className="register-input-underline"></div>
            </div>
            <button type="submit" className="register-button">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );


}

export default Register;
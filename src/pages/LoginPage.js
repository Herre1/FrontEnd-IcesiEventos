import React, {useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import loginImage from '../assets/loginImage.jpg';
import lockImage from '../assets/lock.jpg';
import userImage from '../assets/user2.png';
import axios from 'axios';
import '../styles/LoginPage.css';

function Login() {
  const navigate = useNavigate(); 

  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  
  const [password, setPassword] = useState("");

  const data = {
    username: username,
    password: password
}
async function login(event) {
  event.preventDefault();
  try {
    const response = await axios.post("http://localhost:5432/auth/login", {
      data
    });
    
    alert("User Login Successful");
    localStorage.setItem('cuenta',username);
    console.log(localStorage.getItem('cuenta'))
    window.location.href = '/catalog'
  } catch (err) {
    alert(err.message); // Es mejor usar err.message para obtener detalles del error
  }
}

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={loginImage} alt="EventosIcesi" className="image" />
      </div>
      <div className="form-container">
        <div className="form-content">
          <div className="loginText">
            <h2>Iniciar Sesión</h2>
            <p>Si no tienes una cuenta registrada</p>
            <p>Te puedes <Link to="/register" className="highlight">Registrar Aquí!</Link></p>
          </div>
          <form>
            <div className="input-group">
              <label>Usuario</label>
              <div className="input-wrapper">
                <img src={lockImage} className="input-icon" alt="ID" />
                <input
                  type="text"
                  name="codigo"
                  placeholder="Ingresa tu nombre"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
              </div>
              <div className="input-underline"></div>
            </div>
            <div className="input-group">
              <label>Contraseña</label>
              <div className="input-wrapper">
                <img src={userImage} className="input-icon" alt="Username" />
                <input
                  type="password"
                  name="usuario"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                
              </div>
              <div className="input-underline"></div>
            </div>
            <button type="submit" onClick={login} className='loginButton'>Iniciar Sesión</button>
          </form>
    
        </div>
      </div>
    </div>
  );


}

export default Login;
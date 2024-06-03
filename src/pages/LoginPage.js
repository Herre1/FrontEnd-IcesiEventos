import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import loginImage from '../assets/loginImage.jpg';
import lockImage from '../assets/lock.jpg';
import userImage from '../assets/user2.png';
import axios from 'axios';
import '../styles/LoginPage.css';

function Login() {
  const navigate = useNavigate(); 

  const [loginData, setLoginData] = useState({
    login: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setMessage('');
  };
 
  const handleLogin = async (e) => {
  
    e.preventDefault();
    try {
      console.log(loginData);
      const response = await axios.post('http://localhost:5430/api/user/logear', loginData);
      const usuario = response.data;
      console.log('Usuario autenticado:', usuario);

      localStorage.setItem('token', JSON.stringify(usuario));
      console.log('token: ', localStorage.getItem('token'))
      
      /*
      1 = Admin
      2 = Viewer
      3 = Agente
      */

      if(usuario.idRol === "1"){
        console.log('validacion: ', usuario.idRol)
        navigate('/main');
      }else if(usuario.idRol === "2"){
        console.log('validacion: ', usuario.idRol)
        navigate('/mainV');
      }else{
        console.log('validacion: ', usuario.idRol)
        navigate('/mainA');
      }
  
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      if (error.response && error.response.status === 401) {
        setMessage('Credenciales inválidas');
      } else {
        setMessage('Error de inicio de sesión');
      }
    }
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
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>ID</label>
              <div className="input-wrapper">
                <img src={lockImage} className="input-icon" alt="ID" />
                <input
                  type="text"
                  name="codigo"
                  placeholder="Ingresa tu código"
                  value={loginData.codigo}
                  onChange={handleChange}
                />
              </div>
              <div className="input-underline"></div>
            </div>
            <div className="input-group">
              <label>Username</label>
              <div className="input-wrapper">
                <img src={userImage} className="input-icon" alt="Username" />
                <input
                  type="text"
                  name="usuario"
                  placeholder="Ingresa tu usuario"
                  value={loginData.usuario}
                  onChange={handleChange}
                />
              </div>
              <div className="input-underline"></div>
            </div>
            <button type="submit" className='loginButton'>Iniciar Sesión</button>
          </form>
          {message && <p className="error-message">{message}</p>}
        </div>
      </div>
    </div>
  );


}

export default Login;
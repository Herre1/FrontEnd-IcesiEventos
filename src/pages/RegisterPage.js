import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import registerImage from '../assets/registerImage.jpg';
import lockImage from '../assets/lock.jpg';
import userImage from '../assets/user2.png';
import groupImage from '../assets/group.jpg';
import cityImage from '../assets/organization.jpg';
import emailImage from '../assets/correo.png';
import axios from 'axios';
import '../styles/RegisterPage.css';

function Register() {
  const navigate = useNavigate(); 
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [relationship, setRelation] = useState("");
  const [email, setEmail] = useState("");
  const [city, setcity] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5432/auth/register", {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        relationship: relationship,
        email: email,
        city: city
      });
      alert("User Registration Successful");
    } catch (err) {
      alert(err.message); // Es mejor usar err.message para obtener detalles del error
    }
  }

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
              <label>Username</label>
              <div className="register-input-wrapper">
                <img src={userImage} className="register-input-icon" alt="Username" />
                <input
                  type="text"
                  name="usuario"
                  id="usuario"
                  placeholder="Ingresa tu usuario"
                  value={username}
                      onChange={(event) => {
                        setUser(event.target.value);
                      }}
                />
              </div>
              <div className="register-input-underline"></div>
            </div>
            <div className="register-input-group">
              <label>Password</label>
              <div className="register-input-wrapper">
                <img src={lockImage} className="register-input-icon" alt="ID" />
                <input
                  type="text"
                  name="contraseña"
                  id="contraseña"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
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
                  id="firstName"
                  placeholder="Ingresa tu nombre"
                  value={firstName}
                      onChange={(event) => {
                        setFirstName(event.target.value);
                      }}
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
                  id="lastName"
                  placeholder="Ingresa tu apellido"
                  value={lastName}
                      onChange={(event) => {
                        setLastName(event.target.value);
                      }}
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
                  id="relation"
                  value={relationship}
                      onChange={(event) => {
                        setRelation(event.target.value);
                      }}
                />
              </div>
              <div className="register-input-underline"></div>
            </div>
            <div className="register-input-group">
              <label>Email</label>
              <div className="register-input-wrapper">
                <img src={emailImage} className="register-input-icon" alt="email" />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Ingresa tu email"
                  value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                />
              </div>
              <div className="register-input-underline"></div>
            </div>
            <div className="register-input-group">
              <label>City</label>
              <div className="register-input-wrapper">
                <img src={cityImage} className="register-input-icon" alt="city" />
                <input
                  type="text"
                  name="city"
                  id="cities"
                  placeholder="Ingresa tu ciudad"
                  value={city}
                      onChange={(event) => {
                        setcity(event.target.value);
                      }}
                />
              </div>
              <div className="register-input-underline"></div>
            </div>
            <button type="submit" onClick={save} className="register-button">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );


}

export default Register;
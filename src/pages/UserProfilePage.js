import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.js";
import '../styles/UserProfilePage.css';

function UserProfilePage() {

  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    // Obtenemos el nombre de usuario del localStorage al cargar el componente
    const nombreUsuario = localStorage.getItem('cuenta');
    console.log('Nombre de usuario desde localStorage:', nombreUsuario); // Verificación
    setUser(nombreUsuario);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5432/users/getUser/${user}`)
      .then(response => response.json())
      .then(data => {
        setUserData(data);
      })
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="user-profile-page">
      <Navbar />
      <div className="profile-container">
        <div className="user-info">
          <img src="../assets/user-avatar.png" alt="User Avatar" className="user-avatar" />
          <div className="user-details">
            <h2>NOMBRE USUARIO</h2>
            <p>Facultad o Programa</p>
            <p>Identificador de Usuario</p>
          </div>
        </div>
        <div className="user-contact">
          <table>
            <tbody>
              <tr>
                <td>Nombre Completo :</td>
                <td>{userData?.firstname}</td>
              </tr>
              <tr>
                <td>Tipo de Relación con la Institución :</td>
                <td>{userData?.relationship}</td>
              </tr>
              <tr>
                <td>Email :</td>
                <td>{userData?.email}</td>
              </tr>
              <tr>
                <td>Ciudad :</td>
                <td>{userData?.city}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="events-section">
        <div className="events-attended">
            <h3>Eventos Asistidos:</h3>
          </div>
          <div className="events-organized">
            <h3>Eventos Organizados:</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;

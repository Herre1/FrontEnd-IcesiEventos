import React from 'react';
import Navbar from "../components/Navbar.js";
import '../styles/UserProfilePage.css';

function UserProfilePage() {
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
                <td>Juan Pérez</td>
              </tr>
              <tr>
                <td>Tipo de Relación con la Institución :</td>
                <td>Estudiante</td>
              </tr>
              <tr>
                <td>Email :</td>
                <td>juan.perez@correo.com</td>
              </tr>
              <tr>
                <td>Ciudad :</td>
                <td>Ciudad Ejemplo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="events-section">
          <div className="events-attended">
            <h3>Eventos Asistidos :</h3>
            <ul>
              <li>Conferencia de Tecnología - 12/04/2023</li>
              <li>Taller de Innovación - 18/05/2023</li>
              <li>Seminario de Marketing - 25/06/2023</li>
            </ul>
          </div>
          <div className="events-organized">
            <h3>Eventos Organizadores :</h3>
            <ul>
              <li>Hackathon Universitario - 03/03/2023</li>
              <li>Feria de Ciencias - 15/04/2023</li>
              <li>Jornada de Emprendimiento - 20/05/2023</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;

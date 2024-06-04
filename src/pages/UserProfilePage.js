import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.js";
import '../styles/UserProfilePage.css';
import Usuario2 from '../assets/user2.png';

function UserProfilePage() {

  const [userData, setUserData] = useState('');
  const [user, setUser] = useState('');

  
  useEffect(() => {
    // Obtén el ID del usuario desde el almacenamiento local
    const userId = localStorage.getItem('cuenta');
    
    // Obtén los eventos del backend
    if (userId) {
      fetch(`http://localhost:5432/users/getUser/${userId}`)
        .then(response => response.json())
        .then(data => {
          setUser(data);
        })
        .catch(error => console.error('Error fetching events:', error));
    }
  }, []);
  
  console.log(user)
  return (
    <div className="user-profile-page">
      <Navbar />
      <div className="profile-container">
        <div className="user-info">
          <img src={Usuario2} alt="User Avatar" className="user-avatar" />
          <div className="user-details">
            <h2>{user.username}</h2>
            <p>{user.relationship}</p>
          </div>
        </div>
        <div className="user-contact">
          <table>
            <tbody>
              <tr>
                <td>Nombre Completo :</td>
                <td>{user.firstName + " " + user.lastName}</td>
              </tr>
              <tr>
                <td>Tipo de Relación con la Institución :</td>
                <td>{user.relationship}</td>
              </tr>
              <tr>
                <td>Email :</td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>Role :</td>
                <td>{user.role}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="events-section">
        <div className="events-attended">
            <h3></h3>
          </div>
          <div className="events-organized">
            <h3></h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfilePage;

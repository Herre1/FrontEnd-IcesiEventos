import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import '../styles/EventDetailsPage.css';
import Usuario from '../assets/usuario.png';
import Usuario2 from '../assets/user2.png';
import axios from 'axios';

function EventDetailsPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [usuario, setUsuario] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const nombreUsuario = localStorage.getItem('cuenta');
    console.log('Nombre de usuario desde localStorage:', nombreUsuario);
    setUsuario(nombreUsuario);
  }, []);

  useEffect(() => {
    if (usuario) {
      fetch(`http://localhost:5432/users/getUser/${usuario}`)
        .then(response => response.json())
        .then(data => setUserDetails(data))
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, [usuario]);

  useEffect(() => {
    fetch(`http://localhost:5432/events/getEvent/${id}`)
      .then(response => response.json())
      .then(data => setEvent(data))
      .catch(error => console.error('Error fetching event details:', error));
  }, [id]);

  async function Inscribirse(event) {
    event.preventDefault();
    try {
      const data = {
        usuario: userDetails, // Usamos userDetails directamente
        role: "Asistente"
      };
      const response = await axios.post(`http://localhost:5432/events/register/${id}`, data);

      if (response.status === 200 || response.status === 201) {
        alert("Usuario inscrito exitosamente");
        setIsRegistered(true);
        setEvent(prevEvent => ({
          ...prevEvent,
          attendants: [...prevEvent.attendants, { usuario: userDetails, role: 'Asistente' }]
        }));
      } else {
        alert("Error al inscribir al usuario");
      }
    } catch (err) {
      alert(err.message); // Es mejor usar err.message para obtener detalles del error
    }
  }

  const handleAddComment = () => {
    const comment = {
      author: usuario || 'Usuario', // Usa el nombre de usuario real si lo tienes
      text: commentText
    };

    fetch(`http://localhost:5432/comments/event/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    })
      .then(response => response.json())
      .then(data => {
        setEvent(data);
        setCommentText('');
      })
      .catch(error => console.error('Error adding comment:', error));
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="event-details-page">
      <Navbar />
      <div className="details-container">
        <div className="event-detail-card">
          <h1>{event.title}</h1>
          <p><strong>Description:</strong> {event.description}</p>
          <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
          <p><strong>Categories:</strong> {event.categories.join(', ')}</p>
          <p><strong>Location:</strong> {event.location ? `${event.location.city}, ${event.location.address}` : 'N/A'}</p>

          <h3>Faculties</h3>
          <ul>
            {event.faculties.map((faculty, index) => (
              <li key={index}>{faculty.name}</li>
            ))}
          </ul>

          <h3>Programs</h3>
          <ul>
            {event.programs.map((program, index) => (
              <li key={index}>{program.name}</li>
            ))}
          </ul>

          <h3>Attendants</h3>
          <ul>
          {event.attendants.map((attendant, index) => (
            <li key={index}>{attendant.usuario ? `${attendant.usuario.username} - ${attendant.role}` : 'Unknown user'}</li>
          ))}
          </ul>

          {!isRegistered ? (
            <button onClick={Inscribirse} className="register-button">Inscribirse</button>
          ) : (
            <p>Ya estás inscrito en este evento.</p>
          )}
        </div>

        <div className="comments-section">
          <h3>Comentarios</h3>
          {event.comments.map((comment, index) => (
            <div className="comment" key={index}>
              <div className="comment-user">
                <img src={Usuario2} alt={`Usuario ${index + 1}`} className="comment-avatar" />
                <p>{comment.author}</p>
              </div>
              <p>{comment.text}</p>
            </div>
          ))}

          <div className="comment-form">
            <div className="comment-user">
              <img src={Usuario} alt="Usuario" className="comment-avatar" />
              <p>{usuario ? usuario : 'Usuario'}</p>
            </div>
            <textarea
              placeholder="Escribe un comentario..."
              className="comment-input"
              value={commentText}
              onChange={e => setCommentText(e.target.value)}
            ></textarea>
            <button className="comment-button" onClick={handleAddComment}>Comentar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsPage;

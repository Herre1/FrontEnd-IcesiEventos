import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
import EventDetailCard from '../components/EventDetailCard';
import '../styles/EventDetailsPage.css';

function EventDetailsPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Obtén los detalles del evento desde el backend
    fetch(`http://localhost:5432/events/getEvent/${id}`)
      .then(response => response.json())
      .then(data => setEvent(data))
      .catch(error => console.error('Error fetching event details:', error));
  }, [id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="event-details-page">
      <Navbar />
      <div className="details-container">
        <EventDetailCard event={event} />
        <div className="comments-section">
          <h3>Comentarios</h3>
          {event.comments.map((comment, index) => (
            <div className="comment" key={index}>
              <div className="comment-user">
                <img src="../assets/user-avatar.png" alt={`Usuario ${index + 1}`} className="comment-avatar" />
                <p>{comment.author}</p>
              </div>
              <p>{comment.text}</p>
            </div>
          ))}
          <div className="comment-form">
            <div className="comment-user">
              <img src="../assets/user-avatar.png" alt="Usuario" className="comment-avatar" />
              <p>USUARIO</p>
            </div>
            <textarea placeholder="Escribe un comentario..." className="comment-input"></textarea>
            <button className="comment-button">Comentar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsPage;

import React from 'react';
import Navbar from "../components/Navbar.js";
import EventDetailCard from '../components/EventDetailCard';
import '../styles/EventDetailsPage.css';

function EventDetailsPage() {
  const event = {
    title: 'Reunion creativa INN&Emp 2024',
    type: 'Reunión',
    description: 'Para toma de decisiones sobre la apariencia de INTU para con ello mejorar la imagen de la institución por medio de sus herramientas, mejorando el desempeño de los estudiantes a la hora de realizar sus actividades rutinarias en la plataforma.',
    location: 'Universidad ICESI - Calle **** # **-** - Cali - Valle del Cauca',
    date: '04/06/2024',
    time: '12:00',
    participants: [
      'Participante 1 - Conferencista',
      'Participante 2 - Facilitador',
      'Participante 3 - Asistente',
      'Participante 4 - Asistente',
    ],
    organizers: [
      'Facultad de Ciencias Sociales',
      'Facultad de Diseño'
    ],
    imageSrc: '../assets/event-image.png',
  };

  return (
    <div className="event-details-page">
      <Navbar />
      <div className="details-container">
        <EventDetailCard event={event} />
        <div className="comments-section">
          <h3>Comentarios</h3>
          <div className="comment">
            <div className="comment-user">
              <img src="../assets/user-avatar.png" alt="Usuario 1" className="comment-avatar" />
              <p>Usuario 1</p>
            </div>
            <p>Comentario Comentario Comentario Comentario Comentario Comentario Comentario</p>
          </div>
          <div className="comment">
            <div className="comment-user">
              <img src="../assets/user-avatar.png" alt="Usuario 2" className="comment-avatar" />
              <p>Usuario 2</p>
            </div>
            <p>Comentario Comentario Comentario Comentario Comentario Comentario Comentario</p>
          </div>
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

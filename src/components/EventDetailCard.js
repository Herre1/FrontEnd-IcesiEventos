import React from 'react';
import '../styles/EventDetailCard.css';

const EventDetailCard = ({ event }) => {
  return (
    <div className="event-detail-card">
      <div className="event-title">
        <h3 className="card-ellipsis">{event.title}</h3>
      </div>
      <img
        loading="lazy"
        src={event.imageSrc}
        className="event-image"
        alt={event.title}
      />
      <div className="event-details">
        <p><strong>Categorías:</strong> {event.type}</p>
        <p><strong>Descripción:</strong></p>
        <p>{event.description}</p>
        <p><strong>Lugar y Fecha:</strong></p>
        <p>{event.location} - {event.date} - {event.time}</p>
        <p><strong>Participantes:</strong></p>
        <ul>
          {event.participants.map((participant, index) => (
            <li key={index}>{participant}</li>
          ))}
        </ul>
        <p><strong>Organizador:</strong></p>
        <ul>
          {event.organizers.map((organizer, index) => (
            <li key={index}>{organizer}</li>
          ))}
        </ul>
      </div>
      <button className="registered-button">Registrado!</button>
    </div>
  );
};

export default EventDetailCard;

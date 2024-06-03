import React, { useState } from 'react';
import estrella from '../assets/estrella.png';
import estrellaFill from '../assets/estrellaFill.png';
import '../styles/EventCard.css';

const EventCard = ({ title, date, time, type, imageSrc }) => {
  const [starImage, setStarImage] = useState(estrella);

  const handleEnroll = () => {
    setStarImage(prevSrc => prevSrc === estrella ? estrellaFill : estrella);
  };

  return (
    <div className="event-card">
      <div className="event-title">
        <h3 className="card-ellipsis">{title}</h3>
        <img
          loading="lazy"
          src={starImage}
          className="event-title-image"
          alt="Estrella"
          onClick={handleEnroll}
        />
      </div>
      <img
        loading="lazy"
        src={imageSrc}
        className="event-image"
        alt="Evento reciente"
      />
      <div className="event-details">
        <p>{type}</p>
        <p>{date}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

export default EventCard;
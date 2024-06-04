import React, { useState, useEffect } from 'react';
import estrella from '../assets/estrella.png';
import { useNavigate } from 'react-router-dom';
import estrellaFill from '../assets/estrellaFill.png';
import '../styles/EventCard.css';
import axios from 'axios';
import getUnsplashImage from "../services/UnSplash.ts";

const EventCard = ({id, title, date, time, type, imageSrc }) => {
  
  const [starImage, setStarImage] = useState(estrella);
  const [eventImage, setEventImage] = useState(imageSrc);
  const navigate = useNavigate();

  const handleEnroll = () => {
    setStarImage(prevSrc => prevSrc === estrella ? estrellaFill : estrella);
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const image = await getUnsplashImage(title);
        setEventImage(image);
      } catch (error) {
        console.error('Error fetching Unsplash image:', error);
      }
    };

    fetchImage();
  }, [title]);


const handleClick = () => {
  navigate(`/event/${id}`);
};

  return (
    <div className="event-card" onClick={handleClick}>
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
        src={eventImage}
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
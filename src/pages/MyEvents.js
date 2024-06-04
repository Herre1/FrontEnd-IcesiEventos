import React, { useState, useEffect } from 'react';
import '../styles/MyEvents.css';  
import Navbar from "../components/Navbar.js";
import buscarIco from '../assets/buscar.png';
import EventCard from '../components/EventCard.js';
import defaultEventImage from '../assets/loginImage.jpg';

function MyEvents() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    // Obtén el ID del usuario desde el almacenamiento local
    const userId = localStorage.getItem('cuenta');
    
    // Obtén los eventos del backend
    if (userId) {
      fetch(`http://localhost:5432/events/user/${userId}`)
        .then(response => response.json())
        .then(data => {
          setEvents(data);
        })
        .catch(error => console.error('Error fetching events:', error));
    }
  }, []);
  
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-component-container">
      <Navbar />
      <div className="main-content">
        <div className="main-column">
          <div className="header">
            <div className="header-content">
              <div className="title">Mis Eventos</div>
              <div className="search-bar-myEvent">
                <img
                  loading="lazy"
                  src={buscarIco}
                  className="search-icon-myEvent"
                  alt="Buscar"
                />
                <input
                  type="text"
                  placeholder="Buscar"
                  className="search-input-myEvent"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="events">
            <div className="event-list">
              {filteredEvents.map(event => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  type={event.type}
                  imageSrc={event.imageSrc || defaultEventImage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyEvents;

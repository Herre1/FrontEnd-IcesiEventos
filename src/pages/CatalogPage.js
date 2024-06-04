import React, { useState, useEffect } from 'react';
import buscarIco from '../assets/buscar.png';
import defaultEventImage from '../assets/loginImage.jpg';
import Navbar from "../components/Navbar.js";
import EventCard from '../components/EventCard.js';
import '../styles/CatalogPage.css';

function Catalog() {
  const [events, setEvents] = useState([]);
  const [eventsProx, setEventsProx] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Obtén los eventos del backend
    fetch('http://localhost:5432/events/getEvent')
      .then(response => response.json())
      .then(data => {
        setEvents(data);
        // Filtra los eventos próximos basados en tu lógica de proximidad
        setEventsProx(data.filter(event => new Date(event.date) > new Date()));
      })
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  // Filtrar eventos basado en la búsqueda
  const filteredEvents = events.filter(event => {
    const searchTermLower = searchTerm.toLowerCase();
    const titleMatches = event.title.toLowerCase().includes(searchTermLower);
    const categoryMatches = event.categories.some(category => 
      category.toLowerCase().includes(searchTermLower)
    );
    return titleMatches || categoryMatches;
  });

  return (
    <div className="catalog-container">
      <Navbar />
      <div className="main-content-catalog">
        <div className="recent-events-catalog">
          <h2>Eventos proximos</h2>
          <div className="recent-events-catalog-grid">
            {eventsProx.map(event => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                type={event.categories.join(', ')} // Une las categorías en una cadena
                imageSrc={event.imageSrc || defaultEventImage}
              />
            ))}
          </div>
        </div>
        <div className="all-events">
          <h2>Todos los Eventos</h2>
          <div className="search-bar">
            <img
              loading="lazy"
              src={buscarIco}
              className="search-icon"
              alt="Buscar"
            />
            <input
              type="text"
              placeholder="Buscar"
              className="search-input"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="all-events-catalog-grid">
            {filteredEvents.map(event => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                type={event.categories.join(', ')} // Une las categorías en una cadena
                imageSrc={event.imageSrc || defaultEventImage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;

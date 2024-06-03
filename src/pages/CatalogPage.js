import React, { useState } from 'react';
import buscarIco from '../assets/buscar.png';
import defaultEventImage from '../assets/loginImage.jpg';
import Navbar from "../components/Navbar.js";
import EventCard from '../components/EventCard.js';
import '../styles/CatalogPage.css';

function Catalog() {

  const eventsProx = [
    {
      id: 1,
      title: 'Proyecto COLIBRI Bienestar Universitario',
      date: '10/08/2024',
      time: '09:00',
      type: 'Actividad Lúdica',
      imageSrc: ''
    },
    {
      id: 2,
      title: 'Proyecto Prueba',
      date: '10/08/2024',
      time: '09:00',
      type: 'Conferencia',
      imageSrc: 'https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg'
    },
    {
      id: 3,
      title: 'Proyecto COLIBRI Bienestar',
      date: '10/08/2024',
      time: '09:00',
      type: 'Auditoria',
      imageSrc: ''
    },
    // Otros eventos...
  ];

  const events = [
    {
      id: 1,
      title: 'Proyecto COLIBRI Bienestar Universitario',
      date: '10/08/2024',
      time: '09:00',
      type: 'Actividad Lúdica',
      imageSrc: ''
    },
    {
      id: 2,
      title: 'Proyecto Prueba',
      date: '10/08/2024',
      time: '09:00',
      type: 'Conferencia',
      imageSrc: 'https://img.freepik.com/foto-gratis/colores-arremolinados-interactuan-danza-fluida-sobre-lienzo-que-muestra-tonos-vibrantes-patrones-dinamicos-que-capturan-caos-belleza-arte-abstracto_157027-2892.jpg'
    },
    {
      id: 3,
      title: 'Proyecto COLIBRI Bienestar',
      date: '10/08/2024',
      time: '09:00',
      type: 'Auditoria',
      imageSrc: ''
    },
    {
      id: 4,
      title: 'Proyecto COLIBRI',
      date: '10/08/2024',
      time: '09:00',
      type: 'Auditoria',
      imageSrc: ''
    },
    {
      id: 5,
      title: 'Proyecto CANVA',
      date: '10/08/2024',
      time: '09:00',
      type: 'Auditoria',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuCtYjGF4SZ3WRKSh9ZCIKoCTUenwSteD-sw&s'
    },
    {
      id: 6,
      title: 'Pruebas',
      date: '10/08/2024',
      time: '09:00',
      type: 'Auditoria',
      imageSrc: ''
    },
    {
      id: 7,
      title: 'Increible',
      date: '10/08/2024',
      time: '09:00',
      type: 'Auditoria',
      imageSrc: 'https://www.shutterstock.com/image-illustration/david-street-style-graphic-designtextile-600nw-2265632523.jpg'
    },
    // Otros eventos...
  ];
  

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
              title={event.title}
              date={event.date}
              time={event.time}
              type={event.type}
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
            <input type="text" placeholder="Buscar" className="search-input" />
          </div>
          <div className="all-events-catalog-grid">
          {events.map(event => (
            <EventCard
              key={event.id}
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
  );
}


export default Catalog;

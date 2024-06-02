import * as React from "react";
import '../styles/CatalogPage.css';
import buscarIco from '../assets/buscar.png';
import defaultEventImage from '../assets/loginImage.jpg';
import Navbar from "../components/Navbar.js";


function Catalog() {
  return (
    <div className="catalog-container">
      <Navbar />
      <div className="main-content-catalog">
        <div className="recent-events-catalog">
          <h2>Eventos agregados recientemente</h2>
          <div className="recent-events-catalog-grid">
            <div className="event-card">
              <img
                loading="lazy"
                src={defaultEventImage}
                className="event-image"
                alt="Evento reciente"
              />
              <div className="event-details">
                <h3>Proyecto COLIBRI Bienestar U...</h3>
                <p>Actividad Ludica</p>
                <p>10/08/2024 - 09:00</p>
              </div>
            </div>
            <div className="event-card">
              <img
                loading="lazy"
                src={defaultEventImage}
                className="event-image"
                alt="Evento reciente"
              />
              <div className="event-details">
                <h3>Presentación de nuevas normas</h3>
                <p>Conferencia</p>
                <p>08/06/2024 - 15:00</p>
              </div>
            </div>
            <div className="event-card">
              <img
                loading="lazy"
                src={defaultEventImage}
                className="event-image"
                alt="Evento reciente"
              />
              <div className="event-details">
                <h3>Evento 3</h3>
                <p>Descripción del evento</p>
                <p>Fecha - Hora</p>
              </div>
            </div>
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
            <div className="event-card">
              <img
                loading="lazy"
                src={defaultEventImage}
                className="event-image"
                alt="Reunión de decanos"
              />
              <div className="event-details">
                <h3>Reunión de decanos</h3>
                <p>Reunión</p>
                <p>30/05/2024 - 12:00</p>
              </div>
            </div>
            <div className="event-card">
              <img
                loading="lazy"
                src={defaultEventImage}
                className="event-image"
                alt="Reunión creativa INN&Emp"
              />
              <div className="event-details">
                <h3>Reunión creativa INN&Emp</h3>
                <p>Reunión</p>
                <p>04/06/2024 - 12:00</p>
              </div>
            </div>
            <div className="event-card">
              <img
                loading="lazy"
                src={defaultEventImage}
                className="event-image"
                alt="Conferencia"
              />
              <div className="event-details">
                <h3>Presentación de nuevas normas</h3>
                <p>Conferencia</p>
                <p>08/06/2024 - 15:00</p>
              </div>
            </div>
            <div className="event-card">
              <img
                loading="lazy"
                src={defaultEventImage}
                className="event-image"
                alt="PERFICIANT Conferencia"
              />
              <div className="event-details">
                <h3>PERFICIANT Conferencia</h3>
                <p>Conferencia</p>
                <p>12/05/2024 - 09:00</p>
              </div>
            </div>
            <div className="event-card">
              <img
                loading="lazy"
                src={defaultEventImage}
                className="event-image"
                alt="Actividad Ludica"
              />
              <div className="event-details">
                <h3>Proyecto COLIBRI Bienestar U...</h3>
                <p>Actividad Ludica</p>
                <p>10/08/2024 - 09:00</p>
              </div>
            </div>
            {/* Añadir más eventos aquí */}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Catalog;

import * as React from "react";
import '../styles/MyEvents.css';  
import Navbar from "../components/Navbar.js";
import searchIcon from '../assets/buscar.png';

function MyEvents() {
  return (
    <>
     <div className="my-component-container">
      <Navbar />
      <div className="main-content">
        <div className="main-column">
          <div className="header">
            <div className="header-content">
              <div className="title">Mis Eventos</div>
              <div className="search-bar">
                <img loading="lazy" src={searchIcon} className="search-icon" alt="Buscar" />
                <div className="search-text">Buscar</div>
              </div>
            </div>
          </div>
          <div className="events">
            <div className="event-list">
              <div className="event">
                <img loading="lazy" src="..." className="event-image" alt="Evento" />
                <div className="event-info">
                  <div className="event-title">Reunion creativa INN&Emp 2...</div>
                  <img loading="lazy" src="..." className="event-icon" alt="Icono del evento" />
                </div>
                <div className="event-details">
                  <div className="event-type">Reunion</div>
                  <div className="event-date">04/06/2024 - 12:00</div>
                </div>
              </div>
              <div className="event">
                <img loading="lazy" src="..." className="event-image" alt="Evento" />
                <div className="event-info">
                  <div className="event-title">Presentacion de nuevas normas</div>
                  <img loading="lazy" src="..." className="event-icon" alt="Icono del evento" />
                </div>
                <div className="event-details">
                  <div className="event-type">Conferencia</div>
                  <div className="event-date">08/06/2024 - 15:00</div>
                </div>
              </div>
              <div className="event">
                <img loading="lazy" src="..." className="event-image" alt="Evento" />
                <div className="event-info">
                  <div className="event-title">PERFICIANT Conferencia de...</div>
                  <img loading="lazy" src="..." className="event-icon" alt="Icono del evento" />
                </div>
                <div className="event-details">
                  <div className="event-type">Conferencia</div>
                  <div className="event-date">12/05/2024 - 09:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default MyEvents;

import React, { useState } from 'react';
import '../styles/EventForm.css';
import Navbar from "../components/Navbar.js";

const EventForm = () => {
  const [categories, setCategories] = useState(['Categoria 1', 'Categoria 2', 'Categoria 3']);
  const [attendees, setAttendees] = useState([
    { name: 'Nombre completo usuario 1', role: 'Rol' },
    { name: 'Nombre completo usuario 1', role: 'Rol' },
    { name: 'Nombre completo usuario 1', role: 'Rol' },
  ]);

  const handleAddCategory = () => {
    setCategories([...categories, 'Nueva Categoria']);
  };

  const handleRemoveCategory = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  const handleAddAttendee = () => {
    setAttendees([...attendees, { name: '', role: '' }]);
  };

  const handleRemoveAttendee = (index) => {
    setAttendees(attendees.filter((_, i) => i !== index));
  };

  return (
    <div className="my-component-container">

    <div className="event-form">
      <Navbar />  
      <h2>Título del Evento</h2>
      <input type="text" placeholder="Título del Evento" className="input-field" />
      
      <h2>Descripción del Evento</h2>
      <textarea placeholder="Descripción del Evento" className="textarea-field"></textarea>
      
      <h2>Categoría</h2>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <span>{category}</span>
            <button onClick={() => handleRemoveCategory(index)} className="category-button">Eliminar</button>
          </div>
        ))}
        <button onClick={handleAddCategory} className="add-button">Añadir</button>
      </div>
      </div>
      <h2>Detalles del Evento</h2>
      <div className="event-details">
        <div>
          <label>País:</label>
          <input type="text" className="input-field" />
        </div>
        <div>
          <label>Ciudad:</label>
          <input type="text" className="input-field" />
        </div>
        <div>
          <label>Dirección:</label>
          <input type="text" className="input-field" />
        </div>
        <div>
          <label>Fecha:</label>
          <input type="date" className="input-field" />
        </div>
        <div>
          <label>Hora:</label>
          <input type="time" className="input-field" />
        </div>
        <div>
          <label>Facultad Organizadora:</label>
          <input type="text" className="input-field" />
        </div>
        <div>
          <label>Programa Organizador (Opcional):</label>
          <input type="text" className="input-field" />
        </div>
      </div>

      <h2>Asistentes</h2>
      <div className="attendees">
        {attendees.map((attendee, index) => (
          <div key={index} className="attendee-item">
            <input type="text" placeholder="Nombre completo" value={attendee.name} className="input-field" />
            <input type="text" placeholder="Rol" value={attendee.role} className="input-field" />
            <button onClick={() => handleRemoveAttendee(index)} className="category-button">Eliminar</button>
          </div>
        ))}
        <button onClick={handleAddAttendee} className="add-button">Añadir</button>
      </div>
    </div>
  );
};

export default EventForm;

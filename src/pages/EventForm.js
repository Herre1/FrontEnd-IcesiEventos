import React, { useState, useEffect } from 'react';
import '../styles/EventForm.css';
import Navbar from "../components/Navbar.js";

function EventForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState({ city: '', address: '' });
  const [faculties, setFaculties] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5432/faculties/getFaculty')
      .then(response => response.json())
      .then(data => setFaculties(data))
      .catch(error => console.error('Error fetching faculties:', error));

    fetch('http://localhost:5432/programs/getProgram')
      .then(response => response.json())
      .then(data => setPrograms(data))
      .catch(error => console.error('Error fetching programs:', error));

    fetch('http://localhost:5432/cities/getCity')
      .then(response => response.json())
      .then(data => setCities(data))
      .catch(error => console.error('Error fetching cities:', error));
  }, []);

  const handleCheckboxChange = (e, type) => {
    const { value, checked } = e.target;
    const option = { id: value, type };

    if (checked) {
      console.log("IF "+checked);
      setSelectedOptions([...selectedOptions, option]);
    } else {
      console.log("ELSE "+checked);
      setSelectedOptions(selectedOptions.filter(item => item.id !== value || item.type !== type));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const faculties = selectedOptions.filter(option => option.type === 'faculty').map(option => ({ id: option.id }));
    const programs = selectedOptions.filter(option => option.type === 'program').map(option => ({ id: option.id }));

    const newEvent = {
      title,
      description,
      categories: categories.split(',').map(category => category.trim()),
      date,
      location,
      faculties,
      programs,
      attendants: [],
      comments: []
    };

    fetch('http://localhost:5432/events/createEvent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEvent),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Event registered successfully');
          // Clear the form
          setTitle('');
          setDescription('');
          setCategories('');
          setDate('');
          setLocation({ city: '', address: '' });
          setSelectedOptions([]);
        } else {
          console.error('Error registering event:', data.message);
        }
      })
      .catch(error => console.error('Error registering event:', error));
  };

  return (
    <div className="register-event-page">
      <Navbar />
      <div className="form-container">
        <h1>Register New Event</h1>
        <form onSubmit={handleSubmit} className='EventForm-form'>
          <label className='EventForm-labels'>
            Title:
            <input className='EventForm-input' type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </label>
          <label className='EventForm-labels'>
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
          </label>
          <label className='EventForm-labels'>
            Categories (comma separated):
            <input type="text" value={categories} onChange={(e) => setCategories(e.target.value)} required />
          </label>
          <label className='EventForm-labels'>
            Date:
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </label>
          <label className='EventForm-labels'>
            Location City:
            <select value={location.city} onChange={(e) => setLocation({ ...location, city: e.target.value })} required>
              <option value="">Select a city</option>
              {cities.map(city => (
                <option key={city.code} value={city.name}>{city.name}</option>
              ))}
            </select>
          </label>
          <label className='EventForm-labels'>
            Location Address:
            <input type="text" value={location.address} onChange={(e) => setLocation({ ...location, address: e.target.value })} required />
          </label>
          <label className='EventForm-labels'>Faculties:</label>
          <ul>
            {faculties.map(faculty => (
              <li key={faculty.code}>
                <label htmlFor={`checkbox-${faculty.code}`}>
                  <input
                    type="checkbox"
                    id={`checkbox-${faculty.code}`}
                    value={faculty.code}
                    checked={selectedOptions.some(option => option.code == faculty.code && option.type == 'faculty')}
                    onChange={(e) => handleCheckboxChange(e, 'faculty')}
                  />
                  {faculty.name}
                </label>
              </li>
            ))}
          </ul>
          <label className='EventForm-labels'>Programs:</label>
          <ul>
            {programs.map(program => (
              <li key={program.id}>
                <label htmlFor={`checkbox-${program.code}`}>
                  <input
                    type="checkbox"
                    id={`checkbox-${program.code}`}
                    value={program.code}
                    checked={selectedOptions.some(option => option.id === program.code && option.type === 'program')}
                    onChange={(e) => handleCheckboxChange(e, 'program')}
                  />
                  {program.name}
                </label>
              </li>
            ))}
          </ul>
          <button type="submit">Register Event</button>
        </form>
      </div>
    </div>
  );
}

export default EventForm;

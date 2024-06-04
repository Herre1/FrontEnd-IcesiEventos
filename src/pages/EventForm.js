import React, { useState, useEffect } from 'react';
import '../styles/EventForm.css';
import Navbar from "../components/Navbar.js";
import { useNavigate } from 'react-router-dom';

function EventForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState({ city: '', address: '' });
  const [faculties, setFaculties] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedCity, setSelectedCity] = useState('');
  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const selectedFacultyDetails = faculties.find(faculty => faculty.code === parseInt(selectedFaculty));
    const selectedProgramDetails = programs.find(program => program.code === parseInt(selectedProgram));
    const selectedCityDetails = cities.find(city => city.name === selectedCity);
    
    const newEvent = {
      title,
      description,
      categories: categories.split(',').map(category => category.trim()),
      date,
      location: {
        city: selectedCityDetails ? selectedCityDetails.name : '',
        address: location.address,
      },
      faculties: selectedFacultyDetails ? [selectedFacultyDetails] : [],
      programs: selectedProgramDetails ? [selectedProgramDetails] : [],
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
        if (data) {
          alert('Event registered successfully');
          // Clear the form
          setTitle('');
          setDescription('');
          setCategories('');
          setDate('');
          setLocation({ city: '', address: '' });
          setSelectedFaculty(null);
          setSelectedProgram(null);
          setSelectedCity('');
          // Redirect to the /catalogo-eventos page
          navigate('/catalogo-eventos');
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
            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} required>
              <option value="">Select a city</option>
              {cities.map(city => (
                <option key={city.name} value={city.name}>{city.name}</option>
              ))}
            </select>
          </label>
          <label className='EventForm-labels'>
            Location Address:
            <input type="text" value={location.address} onChange={(e) => setLocation({ ...location, address: e.target.value })} required />
          </label>
          <label className='EventForm-labels'>
            Faculty:
            <select value={selectedFaculty} onChange={(e) => setSelectedFaculty(e.target.value)} required>
              <option value="">Select a faculty</option>
              {faculties.map(faculty => (
                <option key={faculty.code} value={faculty.code}>{faculty.name}</option>
              ))}
            </select>
          </label>
          <label className='EventForm-labels'>
            Program:
            <select value={selectedProgram} onChange={(e) => setSelectedProgram(e.target.value)} required>
              <option value="">Select a program</option>
              {programs.map(program => (
                <option key={program.code} value={program.code}>{program.name}</option>
              ))}
            </select>
          </label>
          <button type="submit">Register Event</button>
        </form>
      </div>
    </div>
  );
}

export default EventForm;

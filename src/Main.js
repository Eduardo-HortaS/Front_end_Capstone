import './App.css';
import React, { useState, useReducer, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Menu from './components/Menu';
import BookingPage from './components/Booking/BookingPage';
import ComingSoon from './components/ComingSoon';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from './Api';
import ConfirmedBooking from './components/Booking/ConfirmedBooking';

function Main() {

  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState(new Date())
  const [availableTimes, dispatch] = useReducer(reducer, [])

  async function initializeTimes(date) {
    try {
      const times = await fetchAPI(date);
      dispatch({ type: 'UPDATE_TIMES', payload: times });
    } catch (error) {
      console.error('Error fetching available times from fetchAPI:', error);
    }
  }

  function updateTimes(date) {
    const dateObj = new Date(date)
    return fetchAPI(dateObj)
  }

  useEffect(() => {
    initializeTimes(date);
  }, [date]);

  const navigate = useNavigate();

  function submitForm(formData) {
    const isSubmitted = submitAPI(formData);

    if (isSubmitted) {
      navigate("/confirmed");
    }
  }

  function reducer(state, action) {
    let newState
    switch (action.type) {
      case 'UPDATE_TIMES':
      const newDate = new Date(action.payload);
      newState = updateTimes(newDate)
      break;

      default:
        throw new Error()
    }
    return newState
  }

    return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
      <Route path="/order" element={<ComingSoon />} />
      <Route path="/login" element={<ComingSoon />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
}

export default Main;

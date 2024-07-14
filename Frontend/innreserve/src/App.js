import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import BookingForm from './components/bookings/BookingForm';
import BookingList from './components/bookings/BookingList';
import AuthState from './context/AuthState';
import BookingState from './context/BookingState';
import setAuthToken from './utils/setAuthToken';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image5 from './images/image5.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import image9 from './images/image9.jpg';
import image10 from './images/image10.jpg';
import image11 from './images/image11.jpg';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <BookingState>
        <Router>
          <Navbar />
          <section className="container">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/bookings/new" element={<BookingForm />} />
              <Route path="/bookings" element={<BookingList />} />
            </Routes>
          </section>
        </Router>
      </BookingState>
    </AuthState>
  );
};

export default App;

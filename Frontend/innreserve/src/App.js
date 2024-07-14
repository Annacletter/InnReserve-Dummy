import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import BookingForm from './components/bookings/BookingForm';
import BookingList from './components/bookings/BookingList';
import AuthState from './context/AuthState';
import BookingState from './context/BookingState';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <BookingState>
        <Router>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Routes>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/bookings/new" component={BookingForm} />
              <Route exact path="/bookings" component={BookingList} />
            </Routes>
          </section>
        </Router>
      </BookingState>
    </AuthState>
  );
};

export default App;

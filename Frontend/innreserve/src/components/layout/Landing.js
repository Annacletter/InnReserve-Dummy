import React from 'react';
import App from '../../App';  // This should correctly reference App.js
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">InnReserve Booking System</h1>
          <p className="lead">Book your stay at the best hotels easily!</p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

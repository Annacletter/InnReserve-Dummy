import React from 'react';
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
      <div>About</div>
      <div>
        <p className="small">
          The InnReserve Booking System is an easy-to-use web application designed to make booking restaurants and hotels simple and efficient. It helps customers quickly secure their dining and lodging experiences while providing businesses with a handy tool to manage and improve their reservations.
          By offering a seamless reservation process, the InnReserve Booking System aims to enhance overall customer satisfaction. Additionally, it equips businesses with the tools they need to effectively manage and grow their operations.
        </p>
      </div>
    </div>
  );
};

export default Landing;


import React from 'react';
import { Link } from 'react-router-dom';
import './landing.styles.css'; // Import your CSS file


function Landing() {
  return (
    <div className="landing-container">
      <div className="content">
        <h1>Welcome to the dogs project</h1>
        <h3>By: Enzo Sacin</h3>
        <Link to="/home">
          <button type="button" className="buttonStyle">
            Go to home page
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;


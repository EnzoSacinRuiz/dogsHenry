import React from 'react';
import { Link } from 'react-router-dom';
import './landing.styles.css'; // Import your CSS file


import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions";

import { createSelector } from 'reselect';


function Landing() {
  return (
    <div className="landing-container">
      <div className="content">
        <div>
          <h1>Welcome to the dogs project</h1>
          <h3>By: Enzo Sacin</h3>
          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Dogs"
            className="dog-image"
          />
        </div>
        <div>
          <Link to="/home">
            <button type="button" className="buttonStyle">
              Go to HomePage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;




import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link
import { getById,clearDetail } from '../../redux/actions';
import './detail.styles.css';

import { useDispatch, useSelector } from "react-redux";

function Detail() {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const dispatch = useDispatch();

  const renderTemperament = (Temperaments) => {
    if (Array.isArray(Temperaments)) {
      if (Temperaments.length === 0) {
        return 'No temperament information available';
      } else if (typeof Temperaments[0] === 'string') {
        // If Temperaments is an array of strings
        return Temperaments.join(', ');
      } else if (typeof Temperaments[0] === 'object' && 'name' in Temperaments[0]) {
        // If Temperaments is an array of objects with 'name' property
        const temperamentNames = Temperaments.map(temp => temp.name);
        return temperamentNames.join(', ');
      }
    } else {
      return 'Temperament data not available';
    }
  };

  

    useEffect(() => {
        dispatch(getById(id));

        return () => {
          dispatch(clearDetail()); // Dispatch action to clear the user detail in Redux store
        };
      }, [dispatch]);

    const user = useSelector((state) => state.detail);

    console.log(user);


  if (!user) {
    return (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="detail-container">
    <h1 className="detail-title">Detail</h1>
    <div className="user-details">
      <Link to="/home" className="go-back-link">
        <button className="go-back-button">Go Back</button>
      </Link>
      <div className="user-image">
        <img src={user.created ? user.url : `https://cdn2.thedogapi.com/images/${user.url}.jpg`} alt={user.name} />
      </div>
      <h2 className="user-name">{user.name}</h2>
      <p className="user-info">ID: {user.id}</p>
      <p className="user-info">Height: {user.height}</p>
      <p className="user-info">Weight: {user.weight}</p>
      <p className="user-description">Life Span: {user.life_span}</p>
      <div className="user-temperaments">
        <p className="user-description">Temperamento: </p>
        {renderTemperament(user.Temperaments)}
      </div>
    </div>
  </div>
);
}

export default Detail;
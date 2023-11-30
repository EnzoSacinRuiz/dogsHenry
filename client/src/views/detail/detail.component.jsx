

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link
import { getById } from '../../redux/actions';
import './detail.styles.css';

import { useDispatch, useSelector } from "react-redux";

function Detail() {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  //const [user, setUser] = useState(null);

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getById(id));
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
    <div className="App">
      <h1 className="detail-title">Detail</h1>
      <div className="user-details">
        <Link to="/home"> {/* Add Link to the home page */}
          <button className="go-back-button">Go Back</button>
        </Link>
        <img
          src={`https://cdn2.thedogapi.com/images/${user.url}.jpg`}
          alt={user.name} 
          className="user-image"
        />
        <h2 className="user-name">{`${user.name}`}</h2>
        <p className="user-info">ID: {user.id}</p>
        <p className="user-info">Height: {user.height}</p>
        <p className="user-info">Weight: {user.weight}</p>
        <p className="user-description">Life Span: {user.life_span}</p>
      </div>
    </div>
  );
}

export default Detail;
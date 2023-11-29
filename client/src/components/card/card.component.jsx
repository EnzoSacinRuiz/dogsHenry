// DogCard.jsx
import React from 'react';
import './card.styles.css';
import { Link } from 'react-router-dom';

function Card({ dog }) {
  const { name, temperament, url, id, height } = dog;

  return (
    <Link to={`/dogs/${id}`}>
      <div className="dog-card-container">
        <div className="dog-card-content">
          {url && (
            <img
              src={`https://cdn2.thedogapi.com/images/${url}.jpg`}
              alt={`${name}`}
              className="dog-card-image"
            />
          )}
          <div className="dog-card-text">
            <h2>Raza: {name}</h2>
            <p>Peso: {height}</p>
            {/* <p>{temperament}</p> */}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;

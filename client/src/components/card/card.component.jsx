// DogCard.jsx
import React from 'react';
import './card.styles.css';
import { Link } from 'react-router-dom';

function Card({ dog }) {
  const { name, Temperaments, url, id, height, weight } = dog;
  console.log(Temperaments);

  const renderTemperament = () => {
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
  

  return (
    <Link to={`/home/${id}`}>
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
            <p>Altura: {height}</p>
            <p>Peso: {weight}</p>
            <p> Temperamento: {renderTemperament()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;

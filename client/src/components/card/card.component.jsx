import React from 'react';
import './card.styles.css';
import { Link } from 'react-router-dom';

function Card({ dog }) {
  const { name, Temperaments, url, id, height, weight, created } = dog;

  const renderTemperament = () => {
    if (!Temperaments || Temperaments.length === 0) {
      return 'No temperament information available';
    } else if (Array.isArray(Temperaments) && typeof Temperaments[0] === 'string') {
      return Temperaments.join(', ');
    } else if (Array.isArray(Temperaments) && typeof Temperaments[0] === 'object' && 'name' in Temperaments[0]) {
      const temperamentNames = Temperaments.map(temp => temp.name);
      return temperamentNames.join(', ');
    } else {
      return 'Temperament data not available';
    }
  };

  
  return (
    <Link to={`/home/${id}`}>
      <div className="dog-card-container">
        <h2>{name}</h2>
        {url && (
          <img
            src={created ? url : `https://cdn2.thedogapi.com/images/${url}.jpg`}
            alt={`${name}`}
            className="dog-card-image"
          />
        )}
        <div className="dog-card-text">
          <p>Altura: {height}</p>
          <p>Peso: {weight}</p>
          <p>Temperamento: {renderTemperament()}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;

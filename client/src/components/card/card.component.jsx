import React from 'react';
import './card.styles.css';
import { Link } from 'react-router-dom';

const defaultImages = [
  'https://cdn2.thedogapi.com/images/HkP7Vxc4Q.jpg',
  'https://cdn2.thedogapi.com/images/By9zNgqE7.jpg',
  'https://cdn2.thedogapi.com/images/SyBvVgc47.jpg',
  'https://cdn2.thedogapi.com/images/S1T8Ee9Nm.jpg'
];

function Card({ dog }) {
  const { name, Temperaments, url, id, height, weight, created, life_span } = dog;

  const renderTemperament = () => {
    if (!Temperaments || Temperaments.length === 0) {
      return 'No temperament information available';
    } else if (Array.isArray(Temperaments) && typeof Temperaments[0] === 'string') {
      return Temperaments.join(', '); 
    } else if (Array.isArray(Temperaments) && typeof Temperaments[0] === 'object' && 'name' in Temperaments[0]) {
      const temperamentNames = Temperaments.map(temp => temp.name);
      return temperamentNames.join(', '); 
    } else if (typeof Temperaments === 'string') {
      return Temperaments;
    } else {
      return 'Temperament data not available';
    }
  };

  const getRandomImage = () => {
    return defaultImages[Math.floor(Math.random() * defaultImages.length)];
  };

  const imageUrl = created ? url : `https://cdn2.thedogapi.com/images/${url}.jpg`;
  const imageSource = url && url.length < 6 ? getRandomImage() : imageUrl;

  return (
    <Link to={`/home/${id}`}>
      <div className="dog-card-container">
        <h2>{name}</h2>
        <div>
          {url && <img src={imageSource} alt={`${name}`} className="dog-card-image" />}
        </div>
        <div className="dog-card-text">
          <p>Altura: {height}</p>
          <p>Peso: {weight}</p>
          <p>Temperamento: {renderTemperament()}</p>
          <p>Años de vida: {life_span}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;





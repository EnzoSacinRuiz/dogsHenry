import React from 'react';
import './card.styles.css';
import { Link } from 'react-router-dom';

const defaultImages = [
  'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
        {url && <img src={imageSource} alt={`${name}`} className="dog-card-image" />}
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





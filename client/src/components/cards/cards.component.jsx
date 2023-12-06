import "./cards.styles.css"
import Card from '../card/card.component';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from "../../redux/actions";
import { all } from 'axios';


function Cards({ currentDogs }) {
  if (!currentDogs || currentDogs.length === 0) {
    return <p>No dogs found</p>;
  }

  const dogs = currentDogs;

  return (
    <div className="dog-card-list">
      {dogs.map((dog) => (
        <Card key={dog.id} dog={dog} />
      ))}
    </div>
  );
}

export default Cards;


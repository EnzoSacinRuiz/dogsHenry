// import Card from "../card/card.component";
import "./cards.styles.css"




// const Cards = () => {


//   return (
//     <div>
//       {dogs.map((dog) => (
//         <div key={dog.id}>
//           <p>{dog.name}</p>
//           {/* Render other dog details */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;

// DogCardList.jsx

import Card from '../card/card.component';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from "../../redux/actions"; // Import your action function
import { all } from 'axios';

//import './dogCards.styles.css';

function Cards({ allUsers }) {
  // If allUsers is not defined or is empty initially, display a message or return null
  if (!allUsers || allUsers.length === 0) {
    return <p>No dogs found</p>; // You can display a message or return null, as appropriate
  }

  const dogs = allUsers;

  return (
    <div className="dog-card-list">
      {dogs.map((dog) => (
        <Card key={dog.id} dog={dog} />
      ))}
    </div>
  );
}

export default Cards;


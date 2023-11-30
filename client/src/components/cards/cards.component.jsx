// import Card from "../card/card.component";
// import "./cards.styles.css"




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

    const dogs=allUsers 
    console.log(dogs);

    // const dispatch = useDispatch();
    // const dogs = useSelector((state) => state.allUsers); // Assuming dogs are stored in 'dogs' slice of your Redux state

    // console.log(dogs);
  
    // useEffect(() => {
    //   dispatch(getDogs());
    // }, [dispatch]);

  return (
    <div className="dog-card-list">
      {dogs.map((dog) => (
        <Card key={dog.id} dog={dog} />
      ))}
    </div>
  );
}

export default Cards;

  import Navbar from "../../components/navbar/navbar.component";
  import Cards from "../../components/cards/cards.component";

  import { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { getDogs,sortDogsAscending,sortDogsDescending } from "../../redux/actions";
  // import { getAllUsers } from "../landing/landing.component";
  

  function Home() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDogs());
      }, [dispatch]);
  

     const allUsers = useSelector((state) => state.allUsers);
    console.log(allUsers);

    const handleSortAscending = () => {
      dispatch(sortDogsAscending());
    };
  
    const handleSortDescending = () => {
      dispatch(sortDogsDescending());
    };

    return (
      <div className="home">
        <div className="center-content">
          <h1 className="home-title">Este es el home!</h1>
          <Navbar />
        </div>

        <div>
        <button onClick={handleSortAscending}>Sort Ascending</button>
        <button onClick={handleSortDescending}>Sort Descending</button>
      </div>
  
        <div>
          <Cards allUsers={allUsers} />
        </div>
      </div>
    );
      
    }
    
    export default Home;
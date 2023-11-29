import Navbar from "../../components/navbar/navbar.component";
import Cards from "../../components/cards/cards.component";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions";

function Home() {

  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

    return (
      <div className="home">
        <h1 className="home-title">Este es el home!</h1>
        <Navbar/>
        <Cards allUsers={allUsers}/>


      </div>
      
    );
  }
  
  export default Home;
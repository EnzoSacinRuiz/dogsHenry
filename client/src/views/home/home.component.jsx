  import Navbar from "../../components/navbar/navbar.component";
  import Cards from "../../components/cards/cards.component";

  import { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { getDogs,sortDogsAscending,sortDogsDescending,filterCreatedTrue,
    filterCreatedFalse,sortDogsAscendingByWeight,sortDogsDescendingByWeight} from "../../redux/actions";
  // import { getAllUsers } from "../landing/landing.component";
  

  function Home() {

    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const dogsPerPage = 8; // Number of dogs per page

    useEffect(() => {
        dispatch(getDogs());
      }, [dispatch]);
      
  

     const allUsers = useSelector((state) => state.allUsers);
     console.log(allUsers);
     const filteredUsers = useSelector((state) => state.allUsers); 
     const indexOfLastDog = currentPage * dogsPerPage;
     const indexOfFirstDog = indexOfLastDog - dogsPerPage;
     const currentDogs = allUsers.slice(indexOfFirstDog, indexOfLastDog);


    const handleSortAscending = () => {
      dispatch(sortDogsAscending());
    };
  
    const handleSortDescending = () => {
      dispatch(sortDogsDescending());
    };

    const handleFilterCreatedTrue = () => {
      dispatch(filterCreatedTrue());
    };
  
    const handleFilterCreatedFalse = () => {
      dispatch(filterCreatedFalse());
    };

    const paginate = pageNumber => {
      setCurrentPage(pageNumber);
    };

    const handleSortAscendingByWeight = () => {
      dispatch(sortDogsAscendingByWeight());
    };
  
    const handleSortDescendingByWeight = () => {
      dispatch(sortDogsDescendingByWeight());
    };

    return (
      <div className="home">
        <div className="center-content">
          <h1 className="home-title">Este es el home!</h1>
          <Navbar filteredUsers={filteredUsers} />
        </div>

        <div>
        <button onClick={handleSortAscending}>Sort Ascending</button>
        <button onClick={handleSortDescending}>Sort Descending</button>
      </div>

      <div>
        <button onClick={handleFilterCreatedTrue}>Filter Created True</button>
        <button onClick={handleFilterCreatedFalse}>Filter Created False</button>
      </div>

      <div>
        <button onClick={handleSortAscendingByWeight}>Sort by Weight Ascending</button>
        <button onClick={handleSortDescendingByWeight}>Sort by Weight Descending</button>
      </div>
  
        <div>
          <Cards allUsers={currentDogs} />
        </div>

        <div>
        {[...Array(Math.ceil(allUsers.length / dogsPerPage))].map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>

      
      </div>
    );
      
    }
    
    export default Home;
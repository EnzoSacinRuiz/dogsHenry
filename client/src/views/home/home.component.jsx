  import Navbar from "../../components/navbar/navbar.component";
  import Cards from "../../components/cards/cards.component";

  import { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { getDogs,sortDogsAscending,sortDogsDescending,filterCreatedTrue,
    filterCreatedFalse,sortDogsAscendingByWeight,sortDogsDescendingByWeight, getDogsByTemperament,getTemperaments,filterByCreated, 
  filterByTemperament} from "../../redux/actions";
  // import { getAllUsers } from "../landing/landing.component";
  
  import './home.styles.css'

  function Home() {

    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1); // Current page state
    const dogsPerPage = 8; // Number of dogs per page

    const [selectedTemperament, setSelectedTemperament] = useState('');
    const temperaments = useSelector((state) => state.temperaments);
    const dogsByTemperament = useSelector((state) => state.dogsByTemperament);
    const breedNotFound = useSelector((state) => state.breedNotFound);


    
    
    useEffect(() => {
      dispatch(getTemperaments());
    }, [dispatch]);




    useEffect(() => {
        dispatch(getDogs());
      }, [dispatch]);

      const handleSelectChange = (event) => {
        setSelectedTemperament(event.target.value);
      };
    
      useEffect(() => {
        if (selectedTemperament) {
          dispatch(getDogsByTemperament(selectedTemperament));
        }
      }, [selectedTemperament, dispatch]);
      // console.log(dogsByTemperament);
      
  

     const allUsers = useSelector((state) => state.allUsers);
     console.log(allUsers);
     const filteredUsers = useSelector((state) => state.allUsers); 
     const indexOfLastDog = currentPage * dogsPerPage;
     const indexOfFirstDog = indexOfLastDog - dogsPerPage;
     const currentDogs = allUsers.slice(indexOfFirstDog, indexOfLastDog);

     function handleGetDogs() {
      dispatch(getDogs());
    }

     const handleFilterByCreated = (status) => {
      dispatch(filterByCreated(status));
    };
  
    const handleFilterByTemperament = (temperament) => {
      dispatch(filterByTemperament(temperament));
    };
    const handleClearSelection = () => {
      setSelectedTemperament(""); // Clear the selected temperament
    };


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

    const handleClearSelectionAndGetDogs = () => {
      handleClearSelection();
      handleGetDogs();
    };
  

    

    return (
      <div className="home">
        <div className="center-content">
          <h1 className="home-title">HomePage</h1>
          <Navbar filteredUsers={filteredUsers} />
        </div>

        <div class="button-columns">

        {/* <div class="button-column">
          <button onClick={() => handleFilterByCreated(true)}>Filter Created True22</button>
          <button onClick={() => handleFilterByCreated(false)}>Filter Created False22</button>
        </div> */}

        <div class="button-column">
          <button onClick={handleSortAscending}>Sort Ascending</button>
          <button onClick={handleSortDescending}>Sort Descending</button>
        </div>

      <div class="button-column">
        <button onClick={handleFilterCreatedTrue}>Filter Created True</button>
        <button onClick={handleFilterCreatedFalse}>Filter Created False</button>
      </div>

      <div class="button-column">
        <button onClick={handleSortAscendingByWeight}>Sort by Weight Ascending</button>
        <button onClick={handleSortDescendingByWeight}>Sort by Weight Descending</button>
      </div>

      
      <button onClick={handleClearSelectionAndGetDogs}>Refresh</button>

      </div>

      <select value={selectedTemperament} onChange={handleSelectChange}>
        <option value="">Select a temperament</option>
        {temperaments.map((temperament) => (
          <option key={temperament} value={temperament}>
            {temperament}
          </option>
        ))}
      </select>

      {/* <button onClick={handleClearSelectionAndGetDogs}>Clear Selection</button> */}



  
        <div>
          <Cards currentDogs={currentDogs} />
        </div>

        <div className="pagination">
        {[...Array(Math.ceil(allUsers.length / dogsPerPage))].map((_, index) => (
          <button key={index} className="pagination-button" onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>

      
      </div>
    );
      
    }
    
    export default Home;
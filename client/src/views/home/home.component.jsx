import Navbar from "../../components/navbar/navbar.component";
import Cards from "../../components/cards/cards.component";
import './home.styles.css'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs, sortDogsAscending, sortDogsDescending, filterCreatedTrue,
  filterCreatedFalse, sortDogsAscendingByWeight, sortDogsDescendingByWeight, getDogsByTemperament, getTemperaments, filterByCreated,
  clearnotFound
} from "../../redux/actions";



function Home() {

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const dogsPerPage = 8;

  const [selectedTemperament, setSelectedTemperament] = useState('');
    


  const temperaments = useSelector((state) => state.temperaments);
  const dogsByTemperament = useSelector((state) => state.dogsByTemperament);
  const breedNotFound = useSelector((state) => state.breedNotFound);
  const [refreshNavbar, setRefreshNavbar] = useState(false);




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



  const allUsers = useSelector((state) => state.allUsers);
  console.log(allUsers);
  const filteredUsers = useSelector((state) => state.allUsers);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allUsers.slice(indexOfFirstDog, indexOfLastDog);
  const totalNumberOfPages = Math.ceil(allUsers.length / dogsPerPage);

  function handleGetDogs() {
    dispatch(getDogs());
  }

  const handleFilterByCreated = (status) => {
    dispatch(filterByCreated(status));
  };


  const handleClearSelection = () => {
    setSelectedTemperament("");
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


  const cleanNotFound = () => {
    dispatch(clearnotFound())
  }



  const handleClearSelectionAndGetDogs = () => {
    handleClearSelection();
    handleGetDogs();
    cleanNotFound();
    setRefreshNavbar(prevState => !prevState);
  };




  return (
    <div className="home">
      <div className="center-content">
        <h1 className="home-title">HomePage</h1>
        <Navbar filteredUsers={filteredUsers} key={refreshNavbar ? "refresh" : "no-refresh"} />
      </div>

      <div class="button-columns">

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




      <div>
        <Cards currentDogs={currentDogs} />
      </div>

      <div className="pagination-buttons">
        <button
          className="pagination-button"
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
        >
          Previous
        </button>

        <span>Page {currentPage} of {totalNumberOfPages}</span>

        

        <button
          className="pagination-button"
          disabled={currentPage === Math.ceil(allUsers.length / dogsPerPage)}
          onClick={() => paginate(currentPage + 1)}
        >
          Next
        </button>
      </div>

    </div>
  );

}

export default Home;
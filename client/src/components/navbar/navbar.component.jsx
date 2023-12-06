import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByName, getDogs } from "../../redux/actions";
import './navbar.styles.css';

function Navbar({ filteredUsers }) {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");
  const breedNotFound = useSelector((state) => state.breedNotFound);


  function handleChange(e) {
    setSearchString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submitting search string:', searchString);
    dispatch(getByName(searchString));
  }





  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Ingresa la raza"
          onChange={handleChange}
          value={searchString}
        />
        <button type="submit" className="custom-button">Buscar</button>
      </form>
      {breedNotFound && (
        <div className="alert alert-danger" role="alert">
          Breed not found. Please try a different breed.
        </div>
      )}
    </div>
  );
}

export default Navbar;

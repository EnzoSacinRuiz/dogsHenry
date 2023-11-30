import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";
import './navbar.styles.css'; // Import your CSS file

function Navbar() {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");

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
          placeholder="Ingresa el nombre"
          onChange={handleChange}
        />
        <button type="submit" className="custom-button">Buscar</button>
      </form>
    </div>
  );
}

export default Navbar;

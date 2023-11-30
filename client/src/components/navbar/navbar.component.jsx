import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByName } from "../../redux/actions";
 
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
            <button type="submit">Buscar</button>
          </form>
        </div>
      );
}

export default Navbar;
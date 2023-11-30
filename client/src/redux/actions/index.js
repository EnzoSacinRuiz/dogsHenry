    // Using ES6 import syntax
import axios from 'axios';


// Define and export your action type as a variable
export const GET_DOGS = "GET_DOGS";
export const GET_BY_NAME="GET_BY_NAME"
export const GET_BY_ID="GET_BY_ID"


// Define your function and export it
export const getDogs = function () {
    return async function (dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/dogs");
            dispatch({
                type: GET_DOGS,
                payload: response.data
            });
        } catch (error) {
            // Handle error here
            console.error("Error fetching dogs:", error);
        }
    };
};

export function getByName(name) {
    return async function (dispatch) {
      // Capitalize the first letter of the name
      const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  
      const response = await axios(`http://localhost:3001/dogs?name=${capitalizedName}`);
      return dispatch({
        type: "GET_BY_NAME",
        payload: response.data
      });
    };
  }

  export function getById(id) {
    return async function (dispatch) {  
      const response = await axios(`http://localhost:3001/dogs/${id}`);
      return dispatch({
        type: "GET_BY_ID",
        payload: response.data
      });
    };
  }
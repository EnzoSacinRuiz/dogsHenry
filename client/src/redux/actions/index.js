// Using ES6 import syntax
import axios from 'axios';


// Define and export your action type as a variable
export const GET_DOGS = "GET_DOGS";

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

import axios from 'axios';

export const GET_DOGS = "GET_DOGS";
export const GET_BY_NAME = "GET_BY_NAME"
export const GET_BY_ID = "GET_BY_ID"
export const CLEAR_USER_DETAIL = 'CLEAR_USER_DETAIL'
export const SORT_DOGS_ASCENDING = 'SORT_DOGS_ASCENDING';
export const SORT_DOGS_DESCENDING = 'SORT_DOGS_DESCENDING';
export const FILTER_CREATED_TRUE = 'FILTER_CREATED_TRUE';
export const FILTER_CREATED_FALSE = 'FILTER_CREATED_FALSE';
export const SORT_DOGS_ASCENDING_BY_WEIGHT = 'SORT_DOGS_ASCENDING_BY_WEIGHT';
export const SORT_DOGS_DESCENDING_BY_WEIGHT = 'SORT_DOGS_DESCENDING_BY_WEIGHT';
export const GET_DOGS_BY_TEMPERAMENT = 'GET_DOGS_BY_TEMPERAMENT';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const BREED_NOT_FOUND = 'BREED_NOT_FOUND';
export const FETCH_ERROR = 'FETCH_ERROR';
export const CLEAR_NOT_FOUND = 'CLEAR_NOT_FOUND'

export const getDogs = function () {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/dogs");
      dispatch({
        type: GET_DOGS,
        payload: response.data
      });
    } catch (error) {
      
      console.error("Error fetching dogs:", error);
    }
  };
};

export function getByName(name) {
  return async function (dispatch) {
    try {
      const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
      const response = await axios.get(`http://localhost:3001/dogs?name=${capitalizedName}`);

      dispatch({
        type: "GET_BY_NAME",
        payload: response.data
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        dispatch({
          type: "BREED_NOT_FOUND",
          payload: true  
        });
      } else {
        dispatch({
          type: "FETCH_ERROR",
          payload: null  
        });
      }
    }
  };
}

export function getById(id) {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3001/dogs/${id}`);
    return dispatch({
      type: "GET_BY_ID",
      payload: response.data
    });
  }
};
export function clearDetail() {
  return async function (dispatch) {
    return dispatch({
      type: "CLEAR_USER_DETAIL",
      payload: null
    })
  };

};
export function clearnotFound() {
  return async function (dispatch) {
    return dispatch({
      type: "CLEAR_NOT_FOUND",
      payload: false
    })
  };

};

export const sortDogsAscending = () => {
  return {
    type: SORT_DOGS_ASCENDING
  };
};

export const sortDogsDescending = () => {
  return {
    type: SORT_DOGS_DESCENDING
  };
};

export const filterCreatedTrue = () => {
  return {
    type: FILTER_CREATED_TRUE
  };
};

export const filterCreatedFalse = () => {
  return {
    type: FILTER_CREATED_FALSE
  };
};

export const sortDogsAscendingByWeight = () => {
  return {
    type: SORT_DOGS_ASCENDING_BY_WEIGHT,
  };
};

export const sortDogsDescendingByWeight = () => {
  return {
    type: SORT_DOGS_DESCENDING_BY_WEIGHT,
  };
};

export const getTemperaments = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/temperaments');
    const temperaments = response.data.map((temperament) => temperament.name);

    dispatch({
      type: GET_TEMPERAMENTS,
      payload: temperaments,
    });
  } catch (error) {
    console.error('Error fetching temperaments:', error);
  }
};

//NO APLICA
export const filterByCreated = (status) => {
  return {
    type: status ? FILTER_CREATED_TRUE : FILTER_CREATED_FALSE,
  };
};



export const getDogsByTemperament = (temperamentId) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:3001/temperaments?temperamentid=${temperamentId}`);
    dispatch({
      type: GET_DOGS_BY_TEMPERAMENT,
      payload: response.data
    });
  } catch (error) {
    console.error('Error fetching dogs by temperament:', error);
  }
};
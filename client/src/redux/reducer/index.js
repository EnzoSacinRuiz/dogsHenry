import {
  GET_DOGS, GET_BY_NAME, GET_BY_ID, CLEAR_USER_DETAIL,
  SORT_DOGS_DESCENDING, SORT_DOGS_ASCENDING, FILTER_CREATED_TRUE,
  FILTER_CREATED_FALSE, SORT_DOGS_ASCENDING_BY_WEIGHT,
  SORT_DOGS_DESCENDING_BY_WEIGHT, GET_DOGS_BY_TEMPERAMENT, GET_TEMPERAMENTS,
  BREED_NOT_FOUND, FETCH_ERROR, CLEAR_NOT_FOUND
} from "../actions";

let initialState = {
  allUsers: [],
  usersCopy: [],
  temperaments: [],
  detail: [],
  byName: [],
  dogsByTemperament: [],
  temperaments: [],
  breedNotFound: false,
  filters: {
    createdTrue: false,
    createdFalse: false,
  },
  originalUsers: [],
  userTrue: [],
  userFalse: [],
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        allUsers: action.payload,
        usersCopy: action.payload,
        originalUsers: action.payload,
        userTrue: action.payload.filter(user => user.created === true),
        userFalse: action.payload.filter(user => user.created === false),
      };

    case GET_BY_NAME:
      return {
        ...state,
        allUsers: action.payload,
        breedNotFound: false,
        originalUsers: action.payload,
        userTrue: action.payload.filter(user => user.created === true),
        userFalse: action.payload.filter(user => user.created === false),
      };

    case BREED_NOT_FOUND:
      return {
        ...state,
        breedNotFound: action.payload,
        allUsers: [],
        originalUsers: [],
        userTrue: [],
        userFalse: action.payload,
      };

    case GET_BY_ID:
      return {
        ...state,
        detail: action.payload
      };

    case CLEAR_USER_DETAIL:
      return {
        ...state,
        detail: action.payload
      };

    case CLEAR_NOT_FOUND:
      return {
        ...state,
        breedNotFound: action.payload,
      };

    case SORT_DOGS_ASCENDING:
      return {
        ...state,
        allUsers: [...state.allUsers.slice().sort((a, b) => a.name.localeCompare(b.name))]
      };

    case SORT_DOGS_DESCENDING:
      return {
        ...state,
        allUsers: [...state.allUsers.slice().sort((a, b) => b.name.localeCompare(a.name))]
      };

    case FILTER_CREATED_FALSE: {
      return {
        ...state,
        allUsers: state.userFalse,
        filters: {
          ...state.filters,
          createdTrue: false,
          createdFalse: true,
        },
      };
    }

    case FILTER_CREATED_TRUE: {
      return {
        ...state,
        allUsers: state.userTrue,
        filters: {
          ...state.filters,
          createdTrue: true,
          createdFalse: false,
        },
      };
    }

    case SORT_DOGS_ASCENDING_BY_WEIGHT:
      return {
        ...state,
        allUsers: [...state.allUsers.slice().sort((a, b) => {
          const extractWeight = str => {
            const [min, max] = str.split(' - ').map(Number);
            return (min + max) / 2;
          };

          const weightA = extractWeight(a.weight);
          const weightB = extractWeight(b.weight);

          return weightA - weightB;
        })],
      };

    case SORT_DOGS_DESCENDING_BY_WEIGHT:
      return {
        ...state,
        allUsers: [...state.allUsers.slice().sort((a, b) => {
          const extractWeight = str => {
            const [min, max] = str.split(' - ').map(Number);
            return (min + max) / 2;
          };

          const weightA = extractWeight(a.weight);
          const weightB = extractWeight(b.weight);

          return weightB - weightA;
        })],
      };

      case GET_DOGS_BY_TEMPERAMENT: {
        let filteredUsers = action.payload;
      
        // Check if any filter is applied (createdTrue or createdFalse)
        if (state.filters.createdTrue || state.filters.createdFalse) {
          // Apply the temperament filter on the filtered dataset (userTrue or userFalse)
          filteredUsers = state.filters.createdTrue
            ? state.userTrue.filter(user => filteredUsers.some(tempUser => tempUser.id === user.id))
            : state.userFalse.filter(user => filteredUsers.some(tempUser => tempUser.id === user.id));
        } else {
          // No filter is applied, return the temperament-filtered dataset as it is
          return {
            ...state,
            allUsers: action.payload,
            dogsByTemperament: action.payload,
          };
        }
      
        return {
          ...state,
          allUsers: filteredUsers,
          dogsByTemperament: action.payload,
        };
      }
      

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    default:
      return state
  }
}

export default rootReducer;

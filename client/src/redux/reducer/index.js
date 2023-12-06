import { GET_DOGS,GET_BY_NAME,GET_BY_ID,CLEAR_USER_DETAIL,
    SORT_DOGS_DESCENDING,SORT_DOGS_ASCENDING,FILTER_CREATED_TRUE,
    FILTER_CREATED_FALSE, SORT_DOGS_ASCENDING_BY_WEIGHT,
    SORT_DOGS_DESCENDING_BY_WEIGHT,GET_DOGS_BY_TEMPERAMENT,GET_TEMPERAMENTS,
    BREED_NOT_FOUND,FETCH_ERROR,CLEAR_NOT_FOUND} from "../actions";

let initialState = {allUsers: [], usersCopy:[],temperaments:[],detail:[],byName:[],dogsByTemperament: [],temperaments: [],breedNotFound: false,
  filters: {
    createdTrue: false,
    createdFalse: false,
    // Add other filters here if needed
  },
  originalUsers: [],
  userTrue: [],
  userFalse: [],
}

function rootReducer(state = initialState, action){
    switch (action.type){
        case GET_DOGS:
            return{
                ...state,
                allUsers: action.payload,
                usersCopy: action.payload,
                originalUsers:action.payload,
                userTrue: action.payload,
                userFalse: action.payload,
            }
        case GET_BY_NAME:
            return{
                    ...state,
                    allUsers: action.payload,
                    breedNotFound:false,
                    originalUsers:action.payload,
                    userTrue: action.payload,
                    userFalse: action.payload,
                };

        case BREED_NOT_FOUND:
      return {
        ...state,
        breedNotFound: action.payload, 
        allUsers:[],
        originalUsers:[],
        userTrue: [],
        userFalse: action.payload,
      };
        case GET_BY_ID:
                 return{
                    ...state,
                    detail: action.payload
                        };

        case CLEAR_USER_DETAIL:
                  return {
                     ...state,
                     detail: action.payload 
                          };
                              case CLEAR_NOT_FOUND:
                                return{
                                  ...state,
                              breedNotFound: action.payload, 
                                }

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
          const filteredUsers = state.allUsers.filter((user) => user.created === false);
          return {
            ...state,
            allUsers: filteredUsers,
            filters: {
              ...state.filters,
              createdTrue: false, // Reset opposite filter
              createdFalse: true,
              // Reset other filters if necessary
            },
          };
 
        }

        case FILTER_CREATED_TRUE: {
          const filteredUsers = state.allUsers.filter((user) => user.created === true);
          return {
            ...state,
            allUsers: filteredUsers,
            filters: {
              ...state.filters,
              createdTrue: true,
              createdFalse: false, // Reset opposite filter
              // Reset other filters if necessary
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
                        // Extract and calculate average weight for comparison
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
                      const filteredUsers = action.payload;
                    
                      
                      // Apply other filters if needed
                    
                      return {
                        ...state,
                        allUsers: filteredUsers,
                        dogsByTemperament: action.payload, // Update dogsByTemperament if necessary
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
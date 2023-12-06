import { GET_DOGS,GET_BY_NAME,GET_BY_ID,CLEAR_USER_DETAIL,
    SORT_DOGS_DESCENDING,SORT_DOGS_ASCENDING,FILTER_CREATED_TRUE,
    FILTER_CREATED_FALSE, SORT_DOGS_ASCENDING_BY_WEIGHT,
    SORT_DOGS_DESCENDING_BY_WEIGHT,GET_DOGS_BY_TEMPERAMENT,GET_TEMPERAMENTS,
    BREED_NOT_FOUND,FETCH_ERROR} from "../actions";

let initialState = {allUsers: [], usersCopy:[],temperaments:[],detail:[],byName:[],dogsByTemperament: [],temperaments: [],breedNotFound: false}

function rootReducer(state = initialState, action){
    switch (action.type){
        case GET_DOGS:
            return{
                ...state,
                allUsers: action.payload,
                usersCopy: action.payload
            }
        case GET_BY_NAME:
            return{
                    ...state,
                    allUsers: action.payload,
                    breedNotFound:false
                };
        case BREED_NOT_FOUND:
      return {
        ...state,
        breedNotFound: action.payload, 
        allUsers:[]
      };
        case GET_BY_ID:
                 return{
                    ...state,
                    detail: action.payload
                        };
        case CLEAR_USER_DETAIL:
                  return {
                     ...state,
                     detail: action.payload // Reset 'detail' to null or an initial value
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
        case FILTER_CREATED_TRUE:
            return {
                 ...state,
                 allUsers: state.allUsers.filter(user => user.created === true)
                };
        case FILTER_CREATED_FALSE:
            return {
                    ...state,
                    allUsers: state.allUsers.filter(user => user.created === false)
                };
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

        case GET_DOGS_BY_TEMPERAMENT:
      return {
        ...state,
        allUsers: action.payload,
      };

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
import { GET_DOGS,GET_BY_NAME,GET_BY_ID,CLEAR_USER_DETAIL,
    SORT_DOGS_DESCENDING,SORT_DOGS_ASCENDING} from "../actions";

let initialState = {allUsers: [], usersCopy:[],temperaments:[],detail:[] }

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
                    allUsers: action.payload
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
        
            default:
                return state
    }
}

export default rootReducer; 
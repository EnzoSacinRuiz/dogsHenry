import { GET_DOGS,GET_BY_NAME,GET_BY_ID } from "../actions";

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
        
            default:
                return state
    }
}

export default rootReducer; 
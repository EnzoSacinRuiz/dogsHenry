import { GET_DOGS,GET_BY_NAME } from "../actions";

let initialState = {allUsers: [], usersCopy:[],temperaments:[] }

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
        
            default:
                return state
    }
}

export default rootReducer; 
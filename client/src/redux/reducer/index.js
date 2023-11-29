import { GET_DOGS } from "../actions";

let initialState = {allUsers: [], usersCopy:[],temperaments:[] }

function rootReducer(state = initialState, action){
    switch (action.type){
        case GET_DOGS:
            return{
                ...state,
                allUsers: action.payload,
                usersCopy: action.payload
            }
        
            default:
                return state
    }
}

export default rootReducer; 
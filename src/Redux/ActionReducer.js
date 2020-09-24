import { LOAD_USER } from "./ActionType"

const initialState = {}

export const userReducer = (state, action) => {
    switch(action.type){
        case LOAD_USER :
            return {
                state: action.payload
            }
        default: return state
    }
}
export const getUserData = () => {
    return (dispatch) => {
        
    }
}
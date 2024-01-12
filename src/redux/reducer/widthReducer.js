import { actionTypes } from "../action/actionTypes"

const initialState = {
    width : null
}
const widthReducer = (state= initialState, action)=>{
    switch (action.type){
        case actionTypes.SET_WIDTH: return ({...state, width: action.width})
        default: return state
    }
}
export default widthReducer;
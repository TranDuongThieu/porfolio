import { actionTypes } from "../action/actionTypes"

const initialState = {
    mode: "light"
}
const modeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MODE: return ({ ...state, mode: action.mode })
        default: return state
    }
}
export default modeReducer  ;
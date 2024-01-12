import { combineReducers } from "redux";
import widthReducer from "./widthReducer";
import modeReducer from "./modeReducer";
const rootReducer = combineReducers({ width: widthReducer, mode: modeReducer });
export default rootReducer;

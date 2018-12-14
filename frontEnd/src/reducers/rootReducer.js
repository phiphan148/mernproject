import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import postReducer from "./postReducer";

export default combineReducers({
    cityReducer,
    postReducer
});


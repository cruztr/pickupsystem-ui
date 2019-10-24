import {combineReducers} from "redux";
import homeReducer from "./homeReducer";


const rootReducer = combineReducers({
    homeReducer : homeReducer
});

export default rootReducer;

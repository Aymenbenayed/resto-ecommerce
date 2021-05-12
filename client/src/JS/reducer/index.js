import { combineReducers } from "redux";
import userReducer from "./user";
import productReducer from "./product"
import categoryReducer from "./category"
const rootReducer = combineReducers({ userReducer , productReducer , categoryReducer });
export default rootReducer;

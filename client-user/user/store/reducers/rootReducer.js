import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";

let rootReducer = combineReducers({
    products: productReducer,
    categories: categoryReducer
})

export default rootReducer
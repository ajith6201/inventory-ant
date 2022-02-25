import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    categoriesss:categoryReducer,
    productsss:productReducer
});

export default rootReducer;
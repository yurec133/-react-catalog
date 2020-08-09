import { combineReducers } from "redux";
import filtersReducer from "./filtersReducer";
import itemsReducer from "./itemsReducer";
import {cartReducer} from "./cartReducer";

const rootReducers = combineReducers({
    filters: filtersReducer,
    items: itemsReducer,
    cart: cartReducer
});

export default rootReducers;

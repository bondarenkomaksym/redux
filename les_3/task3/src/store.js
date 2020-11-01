import { createStore, combineReducers } from "redux";
import { cartReducer } from './cart.reducer';
import { userReducer } from './user.reducer';
import { setLanguage } from './language.reducer';

const appReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  language: setLanguage,
})

const store = createStore(appReducer);

export default store;
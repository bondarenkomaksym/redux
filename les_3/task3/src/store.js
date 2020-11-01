import { createStore, combineReducers } from "redux";
import { cartReducer } from './cart.reducer';
import { userReducer } from './user.reducer';
import { languageReducer } from './language.reducer';

const appReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  language: languageReducer,
})

// const initialState = {
//   cartState: [],
//   userState: null,
//   languageState: 'en',
// }

const store = createStore(appReducer);

export default store;
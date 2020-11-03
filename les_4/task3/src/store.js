import { createStore, combineReducers } from "redux";
// import counterReducer from './counter.reducer';
import usersReducer from './users.reducer';
import { currentPageReducer } from './pages.reducer';

const reducer = combineReducers({
  currentPage: currentPageReducer,
  users: usersReducer,
})

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
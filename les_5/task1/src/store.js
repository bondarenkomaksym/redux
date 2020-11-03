// import { createStore, combineReducers } from "redux";
import { createStore } from "redux";
import usersReducer from './users/users.reducer';
// import { currentPageReducer } from './pages.reducer';

// const reducer = combineReducers({
//   currentPage: currentPageReducer,
//   users: usersReducer,
// })

const store = createStore(usersReducer);

export default store;
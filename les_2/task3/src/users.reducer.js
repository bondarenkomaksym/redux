import { ADD, DELETE } from './users.actions';

const initialState = {
  usersList: []
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        usersList: [
          ...state.usersList,
          action.data
        ]
      }
    case DELETE:
      return {
        ...state,
        usersList: state.usersList.filter(({ id }) => id !== action.id)
      }
    default:
      return state;
  }
}
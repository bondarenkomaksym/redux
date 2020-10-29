export const ADD = 'USERS/ADD';
export const DELETE = 'USERS/DELETE';

export const addUser = data => {
  return {
    type: ADD,
    data
  }
}

export const deleteUser = id => {
  return {
    type: DELETE,
    id
  }
}
export const SAVE_USER = 'USER/SAVE_USER';
export const RESET_USER = 'USER/RESET_USER';

export const setUser = (userData) => {
  return {
    type: SAVE_USER,
    payload: {
      userData
    }
  };
}


export const removeUser = (userId) => {
  return {
    type: RESET_USER,
    payload: {
      userId
    }
  };
}


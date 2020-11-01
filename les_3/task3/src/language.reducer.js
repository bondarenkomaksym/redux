import { SET_LANGUAGE } from './language.actions';

const initialState = {
  language: 'en',
}

export const setLanguage = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload.language

    default:
      return state;
  }
}
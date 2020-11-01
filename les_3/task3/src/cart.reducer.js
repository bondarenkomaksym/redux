import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initialState = {
  products: [],
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {

        products: [
          ...state.products,
          action.payload.data
        ]
      }
    case REMOVE_PRODUCT:
      return {

        products: state.products.filter(({ id }) => id !== action.payload.id)
      }
    default:
      return state;
  }
}
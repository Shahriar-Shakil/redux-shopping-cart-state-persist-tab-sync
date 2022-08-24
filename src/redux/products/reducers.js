import {
  ADD_PRODUCT_TO_CART,
  DECREMENT_QUANTITY_FROM_CART,
  DELETE_FROM_CART,
  REMOVE_FROM_CART,
} from "../cart/actions";
import { GET_PRODUCTS } from "./actions";
const initialState = {
  productList: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        productList: [...action.payload],
      };
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        productList: state.productList.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        ),
      };
    case DECREMENT_QUANTITY_FROM_CART:
      return {
        ...state,
        productList: state.productList.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: Number(item.quantity) + 1,
              }
            : item
        ),
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        productList: state.productList.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity:
                  Number(item.quantity) + Number(action.payload.quantity),
              }
            : item
        ),
      };
    default:
      return state;
  }
};

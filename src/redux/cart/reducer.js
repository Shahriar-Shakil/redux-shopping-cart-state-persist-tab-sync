import { DELETE_FROM_CART, REMOVE_FROM_CART } from "./actions";
import { ADD_PRODUCT_TO_CART, DECREMENT_QUANTITY_FROM_CART } from "./actions";

const initialState = {
  items: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_TO_CART:
      if (!state.items.length) {
        return {
          ...state,
          items: [
            ...state.items,
            { ...payload, quantity: 1, total_price: 1 * payload.price },
          ],
        };
      } else {
        let existingItem = state.items.find((item) => item.id === payload.id);
        if (typeof existingItem === "object") {
          return {
            ...state,
            items: state.items.map((item) => {
              if (item.id === existingItem.id) {
                return {
                  ...item,
                  quantity: existingItem.quantity + 1,
                  total_price: (existingItem.quantity + 1) * payload.price,
                };
              }
              return item;
            }),
          };
        } else {
          return {
            ...state,
            items: [
              ...state.items,
              { ...payload, quantity: 1, total_price: 1 * payload.price },
            ],
          };
        }
      }
    case DECREMENT_QUANTITY_FROM_CART:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                quantity: item.quantity - 1,
                total_price: (item.quantity - 1) * payload.price,
              }
            : item
        ),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
      };
    default:
      return state;
  }
};

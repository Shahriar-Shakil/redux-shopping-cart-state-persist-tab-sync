export const ADD_PRODUCT_TO_CART = "add_product_to_cart";
export const CLEAR_CART = "clear_cart";
export const DECREMENT_QUANTITY_FROM_CART = "DECREMENT_QUANTITY_FROM_CART";
export const REMOVE_FROM_CART = "remove_from_cart";
export const DELETE_FROM_CART = "delete_from_cart";

export const addProductToCart = (payload) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload,
  };
};
export const decrementQuantityFromCart = (payload) => {
  return {
    type: DECREMENT_QUANTITY_FROM_CART,
    payload,
  };
};
export const removeFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};

export const forceDeleteFromCart = (payload) => {
  return {
    type: DELETE_FROM_CART,
    payload,
  };
};

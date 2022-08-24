export const GET_PRODUCTS = "getProducts";

export const getProductsAction = (value) => {
  return {
    type: GET_PRODUCTS,
    payload: value,
  };
};

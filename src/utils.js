export const checkQuantity = (productList, id) => {
  return productList.some((product) => {
    if (product.id === id) {
      return product.quantity > 0;
    }
  });
};
export const getTotalItems = (items) => {
  return items.reduce((prev, item) => item.quantity + prev, 0);
};
export const getTotalPrice = (items) => {
  return items.reduce((prev, item) => item.total_price + prev, 0);
};

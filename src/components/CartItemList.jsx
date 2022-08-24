import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  decrementQuantityFromCart,
  forceDeleteFromCart,
  removeFromCart,
} from "../redux/cart/actions";
import { checkQuantity, getTotalItems, getTotalPrice } from "../utils";

export default function CartItemList() {
  const products = useSelector((state) => state.products.productList);
  const cartItems = useSelector((state) => state?.cart.items);
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    if (checkQuantity(products, item.id)) {
      dispatch(addProductToCart(item));
    }
  };
  const handleDecrementCart = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementQuantityFromCart(item));
    } else if (item.quantity <= 1) {
      dispatch(decrementQuantityFromCart(item));
      dispatch(removeFromCart(item));
    }
  };
  const handleRemoveCart = (item) => {
    dispatch(forceDeleteFromCart(item));
  };
  let cartListView;
  if (cartItems.length > 0) {
    cartListView = cartItems.map((item) => {
      return (
        <div
          key={item.id}
          className="flex justify-between items-center border-b-2 mb-2"
        >
          <div class="text-lg py-2 flex">
            <div className="flex items-start	">
              <img src={item.image} class="w-10 mr-4" alt="" />
              <div className="w-96">
                <p className="truncate ">{item.title}</p>
                <p className="text-sm font-base text-gray-500  ">
                  {item.quantity} * {item.price} = ${item.total_price}
                </p>
              </div>
            </div>

            {/*  */}
          </div>
          <div class="text-lg py-2">
            <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
              <button
                onClick={() => handleDecrementCart(item)}
                class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18 12H6"
                  />
                </svg>
              </button>
              <p>{item?.quantity}</p>
              <button
                onClick={() => handleAddToCart(item)}
                class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button
            onClick={() => handleRemoveCart(item)}
            type="button"
            class="bg-white mr-2 bg-red-400 p-2 rounded-md inline-flex items-center justify-center text-white  hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      );
    });
  } else {
    cartListView = (
      <div className="border-b-2 pb-2 mb-2 text-center">Your cart is empty</div>
    );
  }
  return <>{cartListView}</>;
}

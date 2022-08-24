import React from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/cart/actions";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (product.quantity > 0) {
      dispatch(addProductToCart(product));
    }
  };
  return (
    <div class="">
      <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
        <div class="flex justify-between px-4 items-center">
          <div class="flex text-lg font-semibold">
            <div class="">
              <img src={product.image} alt="" className="w-10 mr-8" />
            </div>
            <div>
              <p>
                {product?.title}{" "}
                <span
                  className={`ml-1 ${!product.quantity ? "text-red-400" : ""}`}
                >{`(${product?.quantity})`}</span>
              </p>
              <p class="text-gray-400 text-base">${product?.price}</p>
            </div>
          </div>
          <div class="text-lg font-semibold">
            {product?.quantity ? (
              <button
                onClick={handleAddToCart}
                class="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            ) : (
              <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                Out of stock
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

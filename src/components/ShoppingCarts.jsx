import React from "react";
import { useSelector } from "react-redux";
import { getTotalItems, getTotalPrice } from "../utils";
import CartItemList from "./CartItemList";

export default function ShoppingCarts() {
  const cartItems = useSelector((state) => state?.cart.items);

  return (
    <>
      <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-4">
        <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
          <CartItemList />

          <div class="flex justify-center items-center text-center">
            <div class="text-xl font-semibold">
              <p>Total Item</p>
              <p class="text-5xl">{getTotalItems(cartItems)}</p>
            </div>
          </div>
        </div>
        <div class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4">
          <div class="flex justify-center items-center text-center">
            <div class="text-xl font-semibold">
              <p>Total Price</p>
              <p class="text-5xl">${getTotalPrice(cartItems)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

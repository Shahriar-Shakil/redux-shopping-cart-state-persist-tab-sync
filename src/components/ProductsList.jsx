import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { Products } from "../data/products";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../redux/products/actions";

export default function ProductsList() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products?.productList);
  useEffect(() => {
    if (productList.length) {
      return;
    }
    dispatch(getProductsAction(Products));
  }, []);

  let productListUI;
  if (productList.length) {
    productListUI = productList.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  } else {
    productListUI = (
      <div class="text-center col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8">
        No Product Found
      </div>
    );
  }

  return <>{productListUI}</>;
}

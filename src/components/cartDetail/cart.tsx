'use client';

import React from "react";
import useStore from "../../hooks/store";
import OrderDetails from "../../hooks/orderDetails";
import EmptyCart from "./emptyCart";
import { Loader } from "../loader";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import CartProduct from "./cartProduct";
import {CartOrderSummary} from "../orderSummary";
import {calculateTotalValue} from "../../utils/utils";

const Cart: React.FC = () => {
  const router = useRouter();
  const { loading, error } = OrderDetails();
  const hookCart = useStore();
  const subTotal = calculateTotalValue(useStore().cart);

  const reloadCart = () => {
    localStorage.removeItem("cartItems");
    window.location.reload();
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-8 lg:py-12">
        <div className="flex justify-center w-full">
          {hookCart.cart.length > 0 ? (
            <div className="lg:flex-2 border-2 rounded-lg ">
              <div className="flex bg-blue-500 p-4 w-full rounded-t-lg  ">
                <h2 className="text-2xl font-bold text-white">
                  My Cart ({hookCart.cart.length}{" "}
                  {hookCart.cart.length === 1 ? "Item" : "Items"})
                </h2>
              </div>
              <div className="space-y-6">
                {hookCart.cart.map((product) => (
                  <CartProduct key={product.id} {...product} />
                ))}
              </div>
            </div>
          ) : (
            <EmptyCart />
          )}
          {hookCart.cart.length > 0 && (
            <div className="lg:flex-1 flex flex-col items-center mt-8 lg:mt-0">
              <CartOrderSummary
                subTotal={subTotal}
                isCartEmpty={hookCart.cart.length === 0}
                context="home"
              />
              <div className="mt-6 font-semibold flex justify-center">
                <button
                  className="text-white px-6 py-3 bg-blue-500 rounded-md flex items-center justify-center"
                  onClick={reloadCart}
                >
                  <FaArrowLeft className="mr-4" />
                  Back to Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;

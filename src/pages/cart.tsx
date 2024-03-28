"use client";
import React from "react";
import useStore from "../hooks/store";
import OrderDetails from "../hooks/useOrderDetails";
import EmptyCart from "../components/CartDetails/EmptyCart";
import Loader from "../components/Common/Loader";
import CartProduct from "../components/CartDetails/CartProduct";
import OrderSummary from "../components/Common/OrderSummary";
import { calculateTotalValue } from "../utils/utils";
import { IoChevronBackOutline } from "react-icons/io5";

const Cart: React.FC = () => {
  const { loading, error } = OrderDetails();
  const hookCart = useStore();
  const subTotal = calculateTotalValue(useStore().cart);

  const reloadCart = () => {
    localStorage.removeItem("cartItems");
    window.location.reload();
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    // <div className="px-4 md:px-8 lg:px-12 py-6 md:py-8 lg:py-12 ">
    <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-8 py-4 md:py-6 lg:py-8">
      <div className="">
        <button
          className="pr-6 py-3 text-[#696b79] text-lg font-semibold rounded-md flex items-center justify-center"
          onClick={reloadCart}
        >
          <IoChevronBackOutline className=" w-8 h-8 text-[#696b79]" />
          Back
        </button>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-[60%] mr-4 shadow-lg rounded-lg">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-black px-2">
              My Cart ({hookCart.cart.length}{" "}
              {hookCart.cart.length === 1 ? "Item" : "Items"})
            </h2>
            {hookCart.cart.length === 0 ? (
              <EmptyCart />
            ) : (
              <div className="flex flex-col space-y-4">
                {hookCart.cart.map((product) => (
                  <CartProduct key={product.id} {...product} />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="md:w-[40%] ml-4">
          {hookCart.cart.length > 0 && (
            <div className="flex flex-col items-center">
              <OrderSummary
                subTotal={subTotal}
                isCartEmpty={hookCart.cart.length === 0}
                context="home"
                text="Cart Total"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

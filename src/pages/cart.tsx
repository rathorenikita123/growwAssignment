'use client';
import React from "react";
import useStore from "../hooks/store";
import OrderDetails from "../hooks/useOrderDetails";
import EmptyCart from "../components/CartDetails/EmptyCart";
import { Loader } from "../components/Common/Loader";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import CartProduct from "../components/CartDetails/CartProduct";
import { CartOrderSummary } from "../components/Common/OrderSummary";
import { calculateTotalValue } from "../utils/utils";
import { BsArrowCounterclockwise } from "react-icons/bs";
import { IoChevronBackOutline } from "react-icons/io5";

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
    <div className="px-4 md:px-8 lg:px-12 py-6 md:py-8 lg:py-12 ">
        <div className="">
              <button
                className="pr-6 py-3 text-[#696b79] text-lg font-semibold rounded-md flex items-center justify-center"
                onClick={reloadCart}
              >
                
                <IoChevronBackOutline className=" w-8 h-8 text-[#696b79]"/>
                Back
              </button>
            </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hookCart.cart.length > 0 ? (
          <div className="border-2 rounded-lg">
            <div className="bg-blue-500 p-4 rounded-t-lg">
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
          <div className="flex flex-col items-center">
            <CartOrderSummary
              subTotal={subTotal}
              isCartEmpty={hookCart.cart.length === 0}
              context="home"
            />
          
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

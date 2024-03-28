import React from "react";
import useStore from "../hooks/store";
import OrderDetails from "../hooks/useOrderDetails";
import EmptyCart from "../components/CartDetails/EmptyCart";
import Loader from "../components/Common/Loader";
import CartProduct from "../components/CartDetails/CartProduct";
import OrderSummary from "../components/Common/OrderSummary";
import { calculateTotalValue } from "../utils/utils";
import { IoChevronBackOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

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
    <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-8 py-6 md:py-6 lg:py-8">
      {hookCart.cart.length > 0 && ( // Conditionally render the entire cart section
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-[60%] md:mr-4 sm:ml-0 shadow-lg rounded-lg p-6">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-black ">
                My Cart ({hookCart.cart.length}{" "}
                {hookCart.cart.length === 1 ? "Item" : "Items"})
              </h2>
              <div className="flex flex-col space-y-4">
                {hookCart.cart.map((product) => (
                  <CartProduct key={product.id} {...product} />
                ))}
              </div>
              <div className="">
                <button
                  className="text-white bg-blue-500 px-6 py-3 rounded-md flex items-center justify-center mt-4 w-full"
                  onClick={reloadCart}
                >
                  
                  <AiOutlineShoppingCart className="mr-4 w-4"/>
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[40%] md:ml-4 sm:ml-0">
            <div className="flex flex-col items-center">
              <OrderSummary
                subTotal={subTotal}
                isCartEmpty={hookCart.cart.length === 0}
                context="home"
                text="Cart Total"
              />
            </div>
          </div>
        </div>
      )}
      {hookCart.cart.length === 0 && <EmptyCart />} {/* Render EmptyCart component when the cart is empty */}
    </div>
  );
};

export default Cart;

"use client";

import { useRouter } from "next/navigation";
import { calculateTotalValue } from "../utils/utils";
import { FaArrowLeft } from "react-icons/fa";
import { Loader } from "../components/loader";
import DeliveryDetails from "../components/deliveryAddress";
import { CartOrderSummary } from "../components/orderSummary";
import OrderDetails from "../hooks/orderDetails";
import useStore from "../hooks/store";
import { Header } from "@/src/components/header";

const Checkout = () => {
  const router = useRouter();
  const { loading, error } = OrderDetails();
  const hookCart = useStore();
  const subTotal = calculateTotalValue(useStore().cart);

  const handleBackToCart = () => {
    router.back(); // Navigate back to the cart page
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-8 lg:py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2">
            <div className="flex justify-center md:justify-start mb-8">
              <DeliveryDetails onSubmit={() => console.log("Form submitted")} />
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex justify-center md:justify-end mb-8">
              <CartOrderSummary
                subTotal={subTotal}
                isCartEmpty={hookCart.cart.length > 0 ? false : true}
                context="checkout"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 font-semibold flex justify-center">
          <button
            className="text-white px-6 py-3 bg-blue-500 rounded-md flex items-center justify-center"
            onClick={handleBackToCart}
          >
            <FaArrowLeft className="mr-4" />
            Back to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;

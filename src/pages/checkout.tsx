"use client";

import { useRouter } from "next/navigation";
import { calculateTotalValue } from "../utils/utils";
import { FaArrowLeft } from "react-icons/fa";
import { Loader } from "../components/loader";
import DeliveryDetails from "../components/deliveryAddress";
import { CartOrderSummary } from "../components/orderSummary";
import OrderDetails from "../hooks/orderDetails";
import useStore from "../hooks/store";



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
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-8 lg:py-12">
        <div className="flex flex-col justify-between">
          {/* <div className="lg:flex-2 border-2 rounded-lg border-[#00f0ba] "> */}
            {/* <div className="flex justify-center bg-blue-500 p-4 w-full rounded-t-lg">
              <h2 className="text-2xl font-bold text-white">
                Delivery Address
              </h2>
            </div> */}
            <div className="p-6">
              <DeliveryDetails onSubmit={() => console.log("Form submitted")} />
            </div>
          </div>
          <div className="mt-6 font-semibold flex justify-center">
            <button
              className="text-white px-6 py-3 bg-blue-500 rounded-md flex items-center justify-center"
              onClick={handleBackToCart}
            >
              <FaArrowLeft className="mr-4"/>
              Back to Cart
            </button>
          </div>
          {/* <div className="lg:flex-2 border-2 rounded-lg border-[#00f0ba] "> */}
            {/* <div className="flex justify-center bg-blue-500 p-4 w-full rounded-t-lg">
              <h2 className="text-2xl font-bold text-white">
                Order Summary
              </h2>
            </div> */}
            {/* <div className="p-6">
              <CartOrderSummary subTotal={subTotal} isCartEmpty={hookCart.cart.length > 0 ? false : true} />
            </div> */}
              <div className="lg:flex-1 flex flex-col justify-center items-center mt-8 lg:mt-0">
            <CartOrderSummary
              subTotal={subTotal}
              isCartEmpty={hookCart.cart.length > 0 ? false : true}
            />
            {/* <div className="mt-6 font-semibold">
              <p>or</p>
              <button
                className="text-white px-6 py-3 bg-blue-500 rounded-md"
                onClick={reloadCart}
              >
                <FaArrowLeft />
                Back to Shopping
              </button>
            </div> */}
          </div>
          </div>
        {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Checkout;

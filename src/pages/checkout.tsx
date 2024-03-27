"use client";
import { useRouter } from "next/navigation";
import { calculateTotalValue } from "../utils/utils";
import { FaArrowLeft } from "react-icons/fa";
import Loader from "../components/Common/Loader";
import DeliveryDetails from "../components/Checkout/DeliveryAddress";
import OrderSummary from "../components/Common/OrderSummary";
import OrderDetails from "../hooks/useOrderDetails";
import useStore from "../hooks/store";

const Checkout = () => {
  const router = useRouter();
  const { loading, error } = OrderDetails();
  const hookCart = useStore();
  const subTotal = calculateTotalValue(useStore().cart);

  const handleBackToCart = () => {
    router.push("/cart");
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <hr className="w-100 h-5"></hr>
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-8 py-4 md:py-6 lg:py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-[60%] mr-4">
            <div className="flex justify-center md:justify-start mb-8">
              <DeliveryDetails onSubmit={() => console.log("Form submitted")} />
            </div>
          </div>
          <div className="md:w-[40%] ml-4">
            <div className="flex justify-center md:justify-end mb-8">
              <OrderSummary
                subTotal={subTotal}
                isCartEmpty={hookCart.cart.length > 0 ? false : true}
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

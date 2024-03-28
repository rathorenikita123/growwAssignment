"use client";
import { useRouter } from "next/navigation";
import { calculateTotalValue } from "../utils/utils";
import { IoChevronBackOutline } from "react-icons/io5";
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
      <div className="">
        <button
          className="px-6 py-3 text-[#696b79] text-lg font-semibold rounded-md flex items-center justify-center"
          onClick={handleBackToCart}
        >
          <IoChevronBackOutline className=" w-8 h-8 text-[#696b79]" />
          Back
        </button>
      </div>
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-8 py-4 md:py-6 lg:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center lg:items-start md:items-start">
          <div className="md:w-[60%] md:mr-4 sm:mr-0">
            <div className="flex justify-center md:justify-start mb-8">
              <DeliveryDetails />
            </div>
          </div>

          <div className="md:w-[40%] md:ml-4 sm:ml-0 ">
            <div className="flex justify-center md:justify-end mb-8">
              <OrderSummary
                subTotal={subTotal}
                isCartEmpty={hookCart.cart.length > 0 ? false : true}
                context="checkout"
                text="Order Summary"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

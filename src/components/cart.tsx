"use client";

import useStore from "../hooks/store";
import OrderDetails from "../hooks/orderDetails";
import CartProduct from "./cartProduct";
import { CartOrderSummary } from "./orderSummary";
import DeliveryDetails from "./deliveryAddress";
import EmptyCart from "./emptyCart";
import { Loader } from "./loader";
import { calculateTotalValue } from "../utils/utils";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const { loading, error } = OrderDetails();

  const reloadCart = () => {
    localStorage.removeItem("cartItems");
    window.location.reload();
  };

  const handleCheckout = () => {
    router.push("/payment");
  }


  const hookCart = useStore();

  const subTotal = calculateTotalValue(useStore().cart);

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
          <div className="lg:flex-2 border-2 rounded-lg border-[#00f0ba] ">
      <div className="flex justify-center bg-blue-500 p-4 w-full rounded-t-lg  ">

            <h2 className="text-2xl font-bold text-white">
              My Cart ({hookCart.cart.length}{" "}
              {hookCart.cart.length > 1 ? "Items" : "Item"})
            </h2>

            {hookCart.cart.length < 1 && <EmptyCart />}
      </div>


            <div className="space-y-6">
              {hookCart.cart.map((product, index) => (
              
                  
                  <CartProduct
                    key={product.id}
                    // onDelete={(id: any) => {
                    //   hookCart.removeItemFromCart(id);
                    // }}
                    {...product}
                  />
                
              ))}
            </div>
            
          </div>
          <div className="mt-6 font-semibold flex justify-center">
              <button
                className="text-white px-6 py-3 bg-blue-500 rounded-md flex items-center justify-center"
                onClick={reloadCart}
              >
                <FaArrowLeft className="mr-4"/>
                Back to Shopping
              </button>
              <button className="text-white px-6 py-3 bg-blue-500 rounded-md ml-4" 
              onClick={handleCheckout}
              >
                
                  Continue to Checkout
              
              </button>
            </div>

          {/* <div className="lg:flex-1 flex flex-col justify-center items-center mt-8 lg:mt-0">
            <CartOrderSummary
              subTotal={subTotal}
              isCartEmpty={hookCart.cart.length > 0 ? false : true}
            />
            <div className="mt-6 font-semibold">
              <p>or</p>
              <button
                className="text-white px-6 py-3 bg-blue-500 rounded-md"
                onClick={reloadCart}
              >
                <FaArrowLeft />
                Back to Shopping
              </button>
            </div>
          </div> */}
        </div>

        {/* {hookCart.cart.length > 0 && (
          <DeliveryDetails onSubmit={() => console.log("Form submitted")} />
        )} */}
      </div>
    </>
  );
};

export default Cart;

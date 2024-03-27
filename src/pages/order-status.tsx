// Filename: CheckoutPage.tsx

import useCart from "../hooks/store";
import CartProduct from "../components/CartDetails/CartProduct";
import Confirmation from "./confirm";
import { Header } from "../components/Common/Header";

const CheckoutPage = () => {
  // const hookCart = useCart();
  // Check if localStorage is available
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;
  // Retrieve cart items from localStorage if available
  const cartItems = isLocalStorageAvailable
    ? JSON.parse(localStorage.getItem("cartItems") || "[]")
    : [];

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Status Section */}
          <div className="lg:flex-2">
            <Confirmation />
          </div>

          {/* Order Summary Section */}
          <div className="lg:flex-1">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-lg font-bold mb-3">Order Summary</h2>
              <p className="text-gray-400 mb-8">Check your items</p>
              <div className="space-y-4">
                {cartItems.map((item: any) => (
                  <CartProduct key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;

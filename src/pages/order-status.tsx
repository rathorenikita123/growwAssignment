import CartProduct from "../components/CartDetails/CartProduct";
import Confirmation from "./confirm";
import { useState } from "react";

const CheckoutPage = () => {
  const [isOrderConfirmed, setIsOrderConfirmed] = useState<boolean>(false);

  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;
  const cartItems = isLocalStorageAvailable
    ? JSON.parse(localStorage.getItem("cartItems") || "[]")
    : [];

  const handleOrderConfirmation = (isConfirmed: boolean) => {
    setIsOrderConfirmed(isConfirmed);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:flex-1">
          <Confirmation onOrderConfirmation={handleOrderConfirmation} />
        </div>
        {isOrderConfirmed && (
          <div className="lg:flex-1">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-lg font-bold mb-3">Order Summary</h2>
              <p className="text-gray-400 mb-8">Check your items</p>
              <div className="space-y-4">
                {cartItems.map((item: any) => (
                  <CartProduct
                    key={item.id}
                    {...item}
                    showDeleteButton={!isOrderConfirmed}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;

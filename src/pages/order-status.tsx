import CartProduct from "../components/CartDetails/CartProduct";
import Confirmation from "./confirm";

const CheckoutPage = () => {
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;
  const cartItems = isLocalStorageAvailable
    ? JSON.parse(localStorage.getItem("cartItems") || "[]")
    : [];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6 md:py-8 lg:py-12">
      <div className="flex items-center justify-center">
        <div className="lg:flex-2">
          <Confirmation />
        </div>
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
  );
};

export default CheckoutPage;

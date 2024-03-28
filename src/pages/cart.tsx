import React, { useEffect, useState } from "react";
import useStore from "../hooks/store";
import useOrderDetails from "../hooks/useOrderDetails";
import EmptyCart from "../components/CartDetails/EmptyCart";
import Loader from "../components/Common/Loader";
import CartProduct from "../components/CartDetails/CartProduct";
import OrderSummary from "../components/Common/OrderSummary";
import { calculateTotalValue } from "../utils/utils";
import { IoReload } from "react-icons/io5";

const Cart: React.FC = () => {
  const { loading, error, fetchDetails } = useOrderDetails();
  const hookCart = useStore();
  const subTotal = calculateTotalValue(useStore().cart);
  const [theme, setTheme] = useState(null);

  const reloadCart = () => {
    localStorage.removeItem("cartItems");
    localStorage.removeItem("deliveryAddress");
    fetchDetails();
  };

  useEffect(() => {
    fetchDetails();
    // fectchTheme();
  }, []);

  // todo: This is not working properly. To be fixed next.
  const fectchTheme = async () => {
    try {
      const response = await fetch(
        "https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata"
      );
      const data = await response.json();
      setTheme(data.theme);
    } catch (error) {
      console.error("Error fetching theme data:", error);
    }
  };

  useEffect(() => {
    if (theme) {
      Object.entries(theme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value as string);
      });
    }
  }, [theme]);

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
          onClick={reloadCart}
        >
          Cart Refresh
          <IoReload className="w-8 h-6 text-[#696b79]" />
        </button>
      </div>
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-8 py-6 md:py-6 lg:py-8">
        {hookCart.cart.length > 0 && (
          <div className="flex flex-col md:flex-row justify-between ">
            <div className="md:w-[60%] md:mr-4 sm:ml-0 shadow-lg rounded-lg p-6">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-black ">
                  My Cart ({hookCart.cart.length}{" "}
                  {hookCart.cart.length === 1 ? "Item" : "Items"})
                </h2>
                <div className="flex flex-col space-y-4">
                  {hookCart.cart.map((product) => (
                    <CartProduct
                      key={product.id}
                      {...product}
                      showDeleteButton
                    />
                  ))}
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
        {hookCart.cart.length === 0 && <EmptyCart />}{" "}
      </div>
    </>
  );
};

export default Cart;

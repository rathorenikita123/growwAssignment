import React, { useState } from "react";
import CardPayment from "../components/payments/cardPayment";
import { Header } from "@/src/components/header";
import UpiPayment from "../components/payments/upiPayment";
import { CartOrderSummary } from "@/src/components/orderSummary";
// import useStore from "@/src/hooks/store";
import { calculateTotalValue } from "@/src/utils/utils";
import useStore from "@/src/hooks/store";

const PaymentPage = () => {
  const [selectedOption, setSelectedOption] = useState("card");

  const hookCart = useStore();
  const subTotal = calculateTotalValue(useStore().cart);

  const handleOptionChange = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <div className="p-8 flex">
          {/* Left side: Payment options */}
          <div className="mr-8">
            <div className="mb-4 flex flex-col border">
              <button
                className={`p-2 border-transparent hover:border-blue-500 focus:outline-none ${
                  selectedOption === "card"
                    ? "font-bold bg-[#8c8d8f] text-white "
                    : ""
                }`}
                onClick={() => handleOptionChange("card")}
              >
                Credit/ Debit Card
              </button>
              <button
                className={`p-2 border-transparent hover:border-blue-500 focus:outline-none ${
                  selectedOption === "upi"
                    ? "font-bold bg-[#8c8d8f] text-white "
                    : ""
                }`}
                onClick={() => handleOptionChange("upi")}
              >
                Upi
              </button>
            </div>
          </div>
          <div>
            {selectedOption === "card" && <CardPayment />}
            {selectedOption === "upi" && <UpiPayment />}
          </div>
        </div>
        <div className="flex justify-center md:justify-end mb-8">
          <CartOrderSummary
            subTotal={subTotal}
            isCartEmpty={hookCart.cart.length > 0 ? false : true}
            context=""
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

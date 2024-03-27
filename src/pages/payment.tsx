import React, { useState } from "react";
import CardPayment from "../components/Payments/CardPayment";
import UpiPayment from "../components/Payments/UpiPayment";
import OrderSummary from "../components/Common/OrderSummary";
import { calculateTotalValue } from "@/src/utils/utils";
import useStore from "@/src/hooks/store";
import Image from "next/image";
import { CardImages, UpiImages } from "../components/Payments/PaymentData";

const PaymentPage = () => {
  const [selectedOption, setSelectedOption] = useState("card");

  const hookCart = useStore();
  const subTotal = calculateTotalValue(useStore().cart);

  const handleOptionChange = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div className="flex justify-evenly p-12 w-full">
        <div className="flex">
          <div className="mb-4 flex flex-col">
            <div className="flex flex-col border-b-2 text-xl">
              <button
                className={`p-2 focus:outline-none ${
                  selectedOption === "card"
                    ? "font-bold text-blue-500 "
                    : "text-gray-700"
                }`}
                onClick={() => handleOptionChange("card")}
              >
                <input
                  type="radio"
                  name="paymentOption"
                  value="card"
                  className="mr-2"
                  checked={selectedOption === "card"}
                  onChange={() => handleOptionChange("card")}
                />
                Credit/Debit Card
              </button>

              {CardImages.map((image) => (
                <Image
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  width={60}
                  height={50}
                  className="ml-2"
                />
              ))}
            </div>
            <div className="flex flex-col border-b-2 text-xl">
              <button
                className={`p-2 focus:outline-none ${
                  selectedOption === "upi"
                    ? "font-bold text-blue-500"
                    : "text-gray-700"
                }`}
                onClick={() => handleOptionChange("upi")}
              >
                <input
                  type="radio"
                  name="paymentOption"
                  value="upi"
                  className="mr-2"
                  checked={selectedOption === "upi"}
                  onChange={() => handleOptionChange("upi")}
                />
                UPI
              </button>
              {UpiImages.map((image) => (
                <Image
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  width={60}
                  height={50}
                  className="ml-2"
                />
              ))}
            </div>
          </div>
        </div>
        <div>
          {selectedOption === "card" && <CardPayment />}
          {selectedOption === "upi" && <UpiPayment />}
        </div>
        <div className="flex justify-center md:justify-end mb-8 w-2/5">
          <OrderSummary
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

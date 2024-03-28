import React, { useState } from "react";
import CardPayment from "../components/Payments/CardPayment";
import UpiPayment from "../components/Payments/UpiPayment";
import OrderSummary from "../components/Common/OrderSummary";
import { calculateTotalValue } from "@/src/utils/utils";
import useStore from "@/src/hooks/store";
import Image from "next/image";
import { CardImages, UpiImages } from "../components/Payments/PaymentData";
import { IoChevronBackOutline } from "react-icons/io5";
import router from "next/router";

const PaymentPage = () => {
  const [selectedOption, setSelectedOption] = useState("card");

  const hookCart = useStore();
  const subTotal = calculateTotalValue(useStore().cart);

  const handleOptionChange = (option: any) => {
    setSelectedOption(option);
  };

  const handleBackToCheckout = () => {
    router.push("/checkout");
  };

  return (
    <>
      <div className="">
        <button
          className="px-6 py-3 text-[#696b79] text-lg font-semibold rounded-md flex items-center justify-center"
          onClick={handleBackToCheckout}
        >
          <IoChevronBackOutline className=" w-8 h-8 text-[#696b79]" />
          Back
        </button>
      </div>
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-8 py-6 md:py-6 lg:py-8">
        <h2 className="text-2xl font-semibold text-black mb-4">
          Payment Options
        </h2>
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="md:w-[60%] md:mr-4 sm:mr-0 flex flex-col items-start">
            <div>
              <div className="flex flex-col items-start border-b-2 text-xl">
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

                <div className="flex">
                  {selectedOption === "card" &&
                    CardImages.map((image) => (
                      <div key={image.id} className="m-2 shadow-md rounded-md">
                        <Image
                          key={image.id}
                          src={image.src}
                          alt={image.alt}
                          width={50}
                          height={50}
                          className="m-2"
                        />
                      </div>
                    ))}
                </div>
              </div>
              <div className="flex flex-col items-start border-b-2 text-xl">
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
                <div className="flex">
                  {selectedOption === "upi" &&
                    UpiImages.map((item) => (
                      <div key={item.id} className="m-2 shadow-md rounded-md">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={50}
                          height={50}
                          className="m-2"
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div>
              {selectedOption === "card" && <CardPayment />}
              {selectedOption === "upi" && <UpiPayment />}
            </div>
          </div>

          <div className="md:w-[40%] md:ml-4 sm:ml-0 ">
            <div className="flex justify-center md:justify-end mb-8">
              <OrderSummary
                subTotal={subTotal}
                isCartEmpty={hookCart.cart.length > 0 ? false : true}
                context=""
                text="Order Summary"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;

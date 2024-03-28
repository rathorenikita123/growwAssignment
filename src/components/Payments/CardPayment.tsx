import React, { useState } from "react";
import { useRouter } from "next/router";
import Toast from "../Toast/Toast";
import { CardInfo } from "../interfaces/interfaces";

const CardPayment: React.FC = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<Partial<CardInfo>>({});
  const [formData, setFormData] = useState<CardInfo>({
    nameOnCard: "",
    cardNumber: "",
    validThru: "",
    cvv: "",
  });
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateCreditCard(name, value),
    }));
  };

  const validateCreditCard = (
    fieldName: string,
    value: string
  ): string | undefined => {
    switch (fieldName) {
      case "cardNumber":
        return value.length !== 16
          ? "Invalid card number format (16 digits)"
          : undefined;
      case "nameOnCard":
        return value.trim() === "" ? "Name on card is required" : undefined;
      case "validThru":
        return value.length !== 5 || !value.match(/^\d{2}\/\d{2}$/)
          ? "Invalid valid thru format (MM/YY)"
          : undefined;
      case "cvv":
        return value.length !== 3 || !value.match(/^\d{3}$/)
          ? "Invalid CVV format (3 digits)"
          : undefined;
      default:
        return undefined;
    }
  };

  const handlePayment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errorsList: string[] = [];
    let isEmptyField = false;

    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        isEmptyField = true;
        break;
      }
    }

    if (isEmptyField) {
      setToastMessage("Please fill in all fields");
      setShowToast(true);
      return;
    }
    for (const [key, value] of Object.entries(errors)) {
      if (value !== undefined) {
        errorsList.push(value);
      }
    }

    if (errorsList.length === 0) {
      setToastMessage("Payment successful!");
      setShowToast(true);
      router.push("/order-status");
    } else {
      console.log(errorsList);
      setToastMessage("Please correct the errors");
      setShowToast(true);
    }
  };

  return (
    <>
      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
      <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <form className="py-4 px-6" onSubmit={handlePayment}>
          <h2 className="text-center text-lg font-semibold mb-3">
            Pay using Credit/ Debit Card
          </h2>
          <div className="mb-6">
            <input
              type="text"
              name="cardNumber"
              maxLength={16}
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="Card Number"
              className="px-2 py-2 w-full border-2 border-[#f1f1f1] focus-visible:outline-none focus-visible:ring-1 "
            />
            {errors.cardNumber && (
              <div className="text-xs text-red-600">{errors.cardNumber}</div>
            )}
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="nameOnCard"
              value={formData.nameOnCard}
              onChange={handleInputChange}
              placeholder="Name on card"
              className="px-2 py-2 w-full border-2 border-[#f1f1f1] focus-visible:outline-none focus-visible:ring-1 "
            />
            {errors.nameOnCard && (
              <div className="text-xs text-red-600">{errors.nameOnCard}</div>
            )}
          </div>

          <div className="mb-8 flex">
            <div className="w-1/2 mr-2">
              <input
                type="text"
                name="validThru"
                value={formData.validThru}
                onChange={handleInputChange}
                placeholder="Valid Thru (MM/YY)"
                className="px-2 py-2 w-full border-2 border-[#f1f1f1] focus-visible:outline-none focus-visible:ring-1 "
              />
              {errors.validThru && (
                <div className="text-xs text-red-600">{errors.validThru}</div>
              )}
            </div>
            <div className="w-1/2 ml-2">
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="CVV"
                maxLength={3}
                className="px-2 py-2 w-full border-2 border-[#f1f1f1] focus-visible:outline-none focus-visible:ring-1 "
              />
              {errors.cvv && (
                <div className="text-xs text-red-600">{errors.cvv}</div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md w-full"
          >
            Pay Now
          </button>
        </form>
      </div>
    </>
  );
};

export default CardPayment;

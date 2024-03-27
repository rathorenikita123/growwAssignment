import React, { useState } from "react";
import { useRouter } from "next/router";

interface FormData {
  nameOnCard: string;
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
}

const CardPayment: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nameOnCard: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    cvv: "",
  });

  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateCreditCard = (cardNumber: string): boolean => {
    return /^\d{16}$/.test(cardNumber);
  };

  const handlePayment = () => {
    if (!validateCreditCard(formData.cardNumber)) {
      alert("Please enter a valid credit card number.");
      return;
    }

    alert("Payment successful!");
    router.push("/confirmation");
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="py-4 px-6">
        <h2 className="text-center text-2xl font-semibold mb-3">
          Secure payment info
        </h2>
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-semibold mb-1">
            Name on Card
          </label>
          <input
            type="text"
            name="name"
            value={formData.nameOnCard}
            onChange={handleInputChange}
            placeholder="John Smith"
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="cardNumber"
            className="block text-sm font-semibold mb-1"
          >
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder="0000 0000 0000 0000"
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-6 flex">
          <div className="w-1/2 mr-2">
            <label
              htmlFor="expirationMonth"
              className="block text-sm font-semibold mb-1"
            >
              Expiration Month
            </label>
            <select
              name="expirationMonth"
              value={formData.expirationMonth}
              onChange={handleInputChange}
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
            >
              <option value="">Month</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className="w-1/2 ml-2">
            <label
              htmlFor="expirationYear"
              className="block text-sm font-semibold mb-1"
            >
              Expiration Year
            </label>

            <select
              name="expirationYear"
              value={formData.expirationYear}
              onChange={handleInputChange}
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
            >
              <option value="">Year</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="securityCode"
            className="block text-sm font-semibold mb-1"
          >
            Security Code
          </label>
          <input
            type="password"
            name="securityCode"
            value={formData.cvv}
            onChange={handleInputChange}
            placeholder="123"
            className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
            onClick={handlePayment}
          >
            PAY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPayment;

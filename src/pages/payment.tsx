import React from "react";
import CardPayment from "../components/payments/cardPayment";
import { Header } from "@/src/components/header";
import UpiPayment from "../components/payments/upiPayment";

const CardTab = () => {
  return (
    <div className="p-4">
      <CardPayment />
    </div>
  );
};

const WalletTab = () => {
  return (
    <div className="p-4">
      <UpiPayment />
    </div>
  );
};

const PaymentPage = () => {
  return (
    <div>
      <Header />
      <div className="p-8">
        <div className="border-b mb-4">
          <button className="mr-2 p-2 border-b-2 border-transparent hover:border-blue-500 focus:outline-none">
            CARD
          </button>
          <button className="p-2 border-b-2 border-transparent hover:border-blue-500 focus:outline-none">
            UPI
          </button>
        </div>
        <div className="mt-4">
         <select>
            <option value="card">Card</option>
            <option value="wallet">Wallet</option>
          </select>
          <CardTab />
          <WalletTab />

        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

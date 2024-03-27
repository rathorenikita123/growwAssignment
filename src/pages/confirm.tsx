import OrderConfirmed from "../components/order/confirmOrder";
import OrderFailed from "../components/order/faliedOrder";
import React from "react";
import {Header} from "../components/header";

const Confirmation: React.FC = () => {
  const renderOrderConfirmed = () => {
    const randomValue = Math.random();
    const probabilityThreshold = 0.8;
    return randomValue < probabilityThreshold ? (
      <OrderConfirmed />
    ) : (
      <OrderFailed />
    );
  };

  return (
    <div className="p-8">
      
      {renderOrderConfirmed()}
    </div>
  );
};

export default Confirmation;

import OrderConfirmed from "../components/Order/OrderConfirm";
import OrderFailed from "../components/Order/OrderFailed";
import React from "react";
import {Header} from "../components/Common/Header";

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

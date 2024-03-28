// import OrderConfirmed from "../components/Order/OrderConfirmed";
// import OrderFailed from "../components/Order/OrderFailed";
// import React from "react";

// const Confirmation: React.FC = () => {
//   const renderOrderConfirmed = () => {
//     const randomValue = Math.random();
//     const probabilityThreshold = 0.8;
//     return randomValue < probabilityThreshold ? (
//       <OrderConfirmed />
//     ) : (
//       <OrderFailed />
//     );
//   };

//   return <div className="p-8">{renderOrderConfirmed()}</div>;
// };

// export default Confirmation;


import OrderConfirmed from "../components/Order/OrderConfirmed";
import OrderFailed from "../components/Order/OrderFailed";
import React from "react";

interface ConfirmationProps {
  onOrderConfirmation: (isConfirmed: boolean) => void;
}

const Confirmation: React.FC<ConfirmationProps> = ({ onOrderConfirmation }) => {
  const renderOrderConfirmed = () => {
    const randomValue = Math.random();
    const probabilityThreshold = 0.8;
    const isConfirmed = randomValue < probabilityThreshold;
    onOrderConfirmation(isConfirmed);
    return isConfirmed ? <OrderConfirmed /> : <OrderFailed />;
  };

  return <div className="p-8">{renderOrderConfirmed()}</div>;
};

export default Confirmation;

import React, { useEffect } from "react";

const Toast = ({ message, onClose }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-[5%] left-[45%] z-50 bg-blue-300 rounded-md shadow-md p-4 flex items-center ">
      <p className="text-lg font-md text-gray-800">{message}</p>
      <button
        className="px-3 rounded-md hover:text-red-600 focus:outline-none"
        onClick={onClose}
      >
        X
      </button>
    </div>
  );
};

export default Toast;

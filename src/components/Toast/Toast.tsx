import React, { useEffect } from "react";

const Toast = ({ message, onClose, type }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const toastClass = type === "success" ? "bg-green-300" : "bg-red-300";
  const closeBtnClass = type === "success" ? "text-green-600" : "text-red-600";

  return (
    <div
      className={`fixed top-[5%] left-[45%] z-50 rounded-md shadow-md p-4 flex items-center ${toastClass}`}
    >
      <p className="text-lg font-md text-gray-800">{message}</p>
      <button
        className={`px-3 rounded-md hover:text-red-600 focus:outline-none ml-2 ${closeBtnClass}`}
        onClick={onClose}
      >
        X
      </button>
    </div>
  );
};

export default Toast;

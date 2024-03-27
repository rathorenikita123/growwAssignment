"use client";

import Image from "next/image";

const EmptyCart = () => {
  const reloadCart = () => {
    localStorage.removeItem("cartItems");
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/emptyCart.png" alt="empty_cart" width={500} height={500} />
      <h2 className="font-bold text-xl mt-2">Hey, it feels so light!</h2>
      <p className="text-center">
        There is nothing in your cary. Let&apos;s add some items.
      </p>

      <button
        className="mt-4 px-4 py-2 border-2 border-blue-500 rounded-md text-blue-500 text-sm font-semibold flex items-center justify-center w-full"
        onClick={reloadCart}
      >
        ADD ITEMS
      </button>
    </div>
  );
};

export default EmptyCart;

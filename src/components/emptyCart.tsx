'use client';

import Image from "next/image";

const EmptyCart = () => {
  const reloadCart = () => {
    localStorage.removeItem("cart");
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/emptyCart.png" alt="empty_cart" width={160} height={160} />
      <h2 className="font-bold text-xl mt-2">Your Cart is Empty</h2>
      <p className="text-center">Add something to cart :)</p>

      <button
        className="mt-4 px-4 py-2 bg-sky-500 text-white text-sm flex items-center justify-center"
        onClick={reloadCart}
      >
        Reload Cart
        {/* <FaArrowRight className="ml-1" /> */}
      </button>
      <p color="red.500">
            *Delivery charges: 
          </p>
      <button className="bg-sky-500/100 ...">hello</button>
    </div>
  );
};

export default EmptyCart;

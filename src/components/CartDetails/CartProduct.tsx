"use client";

import { FC } from "react";
import useStore from "../../hooks/store";
import Image from "next/image";
import { Product } from "../interfaces/interfaces";

const CartProduct: FC<Product> = ({ id, title, quantity, price, image }) => {
  const removeItemFromCart = useStore((state) => state.removeItemFromCart);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center border-b p-3">
      <div className="flex items-center space-x-5 w-full">
        <div className="border-2  rounded-lg overflow-hidden p-2">
          <Image
            className="object-cover"
            src={image}
            alt={title}
            width={96}
            height={96}
          />
        </div>

        <div className="space-y-1">
          <div className="font-medium">{title}</div>
          <div className="text-gray-600">Quantity: {quantity}</div>
          <div className="text-gray-600">Price: {price}</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <button
          className="text-gray-600 hover:text-red-500 mt-4 md:mt-0 px-2 py-2 w-full"
          onClick={() => removeItemFromCart(id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartProduct;

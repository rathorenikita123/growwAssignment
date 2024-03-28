"use client";
import { FC } from "react";
import useStore from "../../hooks/store";
import Image from "next/image";
import { CartProductProps } from "../interfaces/interfaces";
import { AiFillDelete } from "react-icons/ai";

const CartProduct: FC<CartProductProps> = ({
  id,
  title,
  quantity,
  price,
  image,
  showDeleteButton,
}) => {
  const removeItemFromCart = useStore((state) => state.removeItemFromCart);
  const increaseQuantity = useStore((state) => state.increaseQuantity);
  const decreaseQuantity = useStore((state) => state.decreaseQuantity);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center border-b p-3">
      <div className="flex items-center space-x-5 w-full">
        <div className="border-2 rounded-lg overflow-hidden p-2">
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
          <div className="text-gray-600 font-medium text-lg ">
            Quantity:
            <button
              className="mx-2 text-blue-500 border px-2 rounded-md font-semibold"
              onClick={() => decreaseQuantity(id)}
            >
              -
            </button>
            {quantity}
            <button
              className="ml-2 text-blue-500 border px-2 rounded-md font-semibold"
              onClick={() => increaseQuantity(id)}
            >
              +
            </button>
          </div>
          <div className="text-gray-600 text-lg">Price: {price}</div>
        </div>
      </div>
      {showDeleteButton && (
        <div className="flex flex-col md:flex-row items-center justify-between">
          <button
            className="text-gray-600 hover:text-red-500 mt-4 md:mt-0 px-2 py-2 w-full text-xl"
            onClick={() => removeItemFromCart(id)}
          >
            <AiFillDelete />
          </button>
        </div>
      )}
    </div>
  );
};

export default CartProduct;

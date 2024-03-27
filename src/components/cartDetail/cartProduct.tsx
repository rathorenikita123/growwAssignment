"use client";

import { FC } from "react";
import useStore from "../../hooks/store";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";

export type CartItemProps = {
  id: number;
  title: string;
  // description?: string;
  quantity: number;
  price: number;
  image: string;
};

const CartProduct: FC<CartItemProps> = ({
  id,
  title,
  // description,
  quantity,
  price,
  image,
}) => {
  const separatorIndex = title.indexOf(" - ");
  const extractedTitle =
    separatorIndex !== -1 ? title.substring(0, separatorIndex) : title;
  const extractedDescription =
    separatorIndex !== -1 ? title.substring(separatorIndex + 3) : "";

  const removeItemFromCart = useStore((state) => state.removeItemFromCart);

  return (
    // <div className="flex flex-col md:flex-row justify-between items-center">
    //   <div className="flex items-center space-x-5 w-full">
    //     <Image
    //       className="rounded-lg"
    //       src={image}
    //       alt={title}
    //       width={96}
    //       height={96}
    //     />
    //     <div className="pt-4">
    //       <div className="space-y-1">
    //         <div className="font-medium">{title}</div>
    //         <div className="text-sm text-gray-600">{description}</div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="hidden md:flex w-full justify-between ml-8">
    //     <div className="flex items-center">
    //       <div className="text-gray-600">Quantity: {quantity}</div>
    //       <div className="text-gray-600">Price: {price}</div>
    //     </div>
    //     <button
    //       className=" text-red-500"
    //       onClick={() => removeItemFromCart(id)}
    //     >
    //       <FaTrash />
    //     </button>
    //   </div>
    // </div>
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
          <div className="font-medium">{extractedTitle}</div>
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
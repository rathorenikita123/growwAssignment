// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export const Header = () => {
//   return (
//     <header className=" p-4">
//       <div className="flex items-center">
//         <div className="w-14 h-14">
//           <Image
//             src="https://groww.in/groww-logo-270.png"
//             alt="groww image"
//             width={80}
//             height={80}
//           />
//         </div>
//         <div className="ml-8 flex space-x-4">
//           <Link href="/" className={`text-xl ${isActive("/") ? "border-b-2 border-blue-500" : ""}`}>
//             BAG
//           </Link>
//           <Link href="/checkout" className="text-[#696b79] text-xl">
//             ADDRESS
//           </Link>
//           <Link href="/payment" className="text-[#696b79] text-xl">
//             PAYEMNT
//           </Link>
//         </div>
//         {/* active staus of bag, payment and address */}

//       </div>
//     </header>
//   );
// };
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaShieldAlt } from "react-icons/fa";

export const Header = () => {

 

  return (
    <header className="p-4 border-b-2">
      <div className="flex items-center justify-between">
        <div className="w-14 h-14">
          <Image
            src="https://groww.in/groww-logo-270.png"
            alt="groww image"
            width={80}
            height={80}
          />
        </div>
        <div className="ml-8 flex space-x-4">
          <Link href="/" className="text-[#696b79] text-xl ">
            BAG
            {/* dashed line in front of BAG */}
            <p className="border-b-2 border-blue-500"></p>
          </Link>
          <Link
            href="/checkout"
            className="text-[#696b79] text-xl "

            // onClick={() => handleSetActiveLink("/checkout")}
          >
            ADDRESS
          </Link>
          <Link
            href="/payment"

            // onClick={() => handleSetActiveLink("/payment")}
          >
            PAYMENT
          </Link>
        </div>
        <div className="text-[#696b79] text-xl flex items-center ">
          <FaShieldAlt className="text-green-500" />
          100% Secure
        </div>
      </div>
    </header>
  );
};

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
'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaShieldAlt } from "react-icons/fa";

export const Header = () => {
  const router = useRouter();

  const [activeLink, setActiveLink] = useState("/");

  const handleSetActiveLink = (href: any) => {
    setActiveLink(href);
  };

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
          <Link href="/"
            
              className={`text-xl ${activeLink === "/" ? "border-b-2 border-blue-500 text-blue-500" : "text-[#696b79]"}`}
              onClick={() => handleSetActiveLink("/")}
            >
              BAG
            
          </Link>
          <Link href="/checkout"
            
              className={`text-xl ${
                activeLink === "/checkout" ? "border-b-2 border-blue-500 text-blue-500" : "text-[#696b79]"
              }`}
              onClick={() => handleSetActiveLink("/checkout")}
            >
              ADDRESS
            
          </Link>
          <Link href="/payment"
              className={`text-xl ${
                activeLink === "/payment" ? "border-b-2 border-blue-500 text-blue-500" : "text-[#696b79]"
              }`}
              onClick={() => handleSetActiveLink("/payment")}
            >
              PAYMENT
            
          </Link>
        </div>
        <div className="text-[#696b79] text-xl flex items-center ">
        <FaShieldAlt className="text-green-500"/>
          100% Secure
        </div>
      </div>
    </header>
  );
};


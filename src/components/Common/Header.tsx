import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShieldAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="p-3 border-b-2">
      <div className="flex flex-col md:flex-row md:items-center justify-between sm:items-center items-center">
        <div className="md:w-auto mb-4 md:mb-0 sm:items-center md:items-center">
          <Image
            src="https://groww.in/groww-logo-270.png"
            alt="groww image"
            width={80}
            height={80}
          />
        </div>
        <div className="ml-8 flex">
          <Link
            href="/"
            className="text-[#696b79] lg:lg:text-xl flex items-center text-sm"
          >
            BAG
            <Image
              src="/arrow.png"
              alt="arrow"
              width={100}
              height={50}
              className=""
            />
          </Link>
          <Link
            href="/checkout"
            className="text-[#696b79] lg:text-xl flex items-center text-sm"
          >
            ADDRESS
            <Image src="/arrow.png" alt="arrow" width={100} height={50} />
          </Link>
          <Link
            href="/payment"
            className="text-[#696b79] lg:text-xl flex items-center text-sm"
          >
            PAYMENT
          </Link>
        </div>
        <div className="text-[#696b79] text-xl items-center hidden sm:flex md:flex">
          <FaShieldAlt className="text-green-500" />
          <span className="">100% Secure</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

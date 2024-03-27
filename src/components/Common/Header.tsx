"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShieldAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="p-3 border-b-2">
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
          <Link href="/" className="text-[#696b79] text-xl flex items-center">
            BAG
            <Image src="/arrow.png" alt="arrow" width={100} height={50} />
          </Link>
          <Link
            href="/checkout"
            className="text-[#696b79] text-xl flex items-center"
          >
            ADDRESS
            <Image src="/arrow.png" alt="arrow" width={100} height={50} />
          </Link>
          <Link
            href="/payment"
            className="text-[#696b79] text-xl flex items-center"
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

export default Header;

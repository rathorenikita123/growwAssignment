import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="flex items-center justify-center">
        <div className="relative w-8 h-8">
          <Image
            src="https://groww.in/groww-logo-270.png"
            alt="groww image"
            width={60}
            height={60}
          />
        </div>
        <div className="ml-8">
          <h1 className="text-xl font-bold text-white sans">Groww</h1>
        </div>
      </div>
    </header>
  );
};

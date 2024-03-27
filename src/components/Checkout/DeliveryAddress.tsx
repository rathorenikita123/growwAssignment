"use client";
import React, { useState } from "react";
interface DeliveryAddressProps {
  onSubmit: () => void;
}

const DeliveryAddress: React.FC<DeliveryAddressProps> = ({ onSubmit }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNo || !address || !city || !state || !zipCode) {
      alert("Please fill in all fields");

      return;
    }

    alert("Address saved!");
    console.log("Address saved!");
    onSubmit();
  };

  return (
    <>
      <div className="flex flex-col space-y-8 h-100 w-full pb-4 pr-8">
        <h2 className="text-lg font-semibold text-black">
          Add Delivery Address
        </h2>

        <form className="space-y-2 w-full text-sm">
          <label className="flex flex-col gap-1">
            Name
            <input
              type="text"
              className="px-2 py-2 w-full border-2 border-[#f1f1f1] focus-visible:outline-none focus-visible:ring-1 "
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
          <label className="flex flex-col gap-1">
            Phone No
            <input
              type="tel"
              pattern="[0-9]{10}"
              className="px-2 py-2 w-full border-2 border-[#f1f1f1] focus-visible:outline-none focus-visible:ring-1 "
              placeholder="Enter your phone number"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </label>
          <label className="flex flex-col gap-1">
            Address
            <input
              type="text"
              className="px-2 py-2 w-full border-2 border-[#f1f1f1] focus-visible:outline-none focus-visible:ring-1 "
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
          <label className="flex flex-col gap-1">
            City
            <input
              type="text"
              className="px-2 py-2 w-full border-2 border-[#f1f1f1] focus-visible:outline-none focus-visible:ring-1 "
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          <label className="flex flex-col gap-1">
            State
            <input
              type="text"
              className="px-2 py-2 w-full border-2 border-[#f1f1f1] focus-visible:outline-none focus-visible:ring-1 "
              placeholder="Enter your state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </label>
          <label className="flex flex-col gap-1">
            Zip Code
            <input
              type="text"
              className="px-2 py-2 w-full border-2 border-[#f1f1f1] focus-visible:outline-none focus-visible:ring-1 "
              placeholder="Enter your zip code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </label>
        </form>
      </div>
    </>
  );
};

export default DeliveryAddress;

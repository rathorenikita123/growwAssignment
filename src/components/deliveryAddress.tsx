"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.error("Please fill in all fields");
      console.log(toast.error("Please fill in all fields"));
      console.log("Please fill in all fields");
      return;
    }

    toast.success("Address saved!");
    console.log("Address saved!");
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-8 border-2 rounded-lg w-full border-[#00f0ba] pb-4">
       <div className="flex justify-center bg-blue-500 p-4 w-full rounded-t-lg ">
      <h2 className="text-lg font-semibold text-white">Shipping Address</h2>
      </div>
      <label className="input input-bordered flex flex-col gap-2">
        Name
        <input
          type="text"
          className="px-2 py-2 w-full border-2 border-[#f1f1f1]"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Phone No
        <input
          type="tel"
          pattern="[0-9]{10}"
          className="input input-bordered input-primary w-full max-w-xs"
          placeholder="Enter your phone number"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Address
        <input
          type="text"
          className="input input-bordered input-primary w-full max-w-xs"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        City
        <input
          type="text"
          className="input input-bordered input-primary w-full max-w-xs"
          placeholder="Enter your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        State
        <input
          type="text"
          className="input input-bordered input-primary w-full max-w-xs"
          placeholder="Enter your state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Zip Code
        <input
          type="text"
          className="input input-bordered input-primary w-full max-w-xs"
          placeholder="Enter your zip code"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </label>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default DeliveryAddress;

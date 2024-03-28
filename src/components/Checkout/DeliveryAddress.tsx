"use client";
import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Toast from "../Toast/Toast";

const DeliveryAddress: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNo || !address || !city || !state || !zipCode) {
      setToastMessage("Please fill in all fields");
      setShowToast(true);
      return;
    }

    setToastMessage("Address saved!");
    setShowToast(true);

    setFullName("");
    setPhoneNo("");
    setAddress("");
    setCity("");
    setState("");
    setZipCode("");
  };

  return (
    <>
      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
      <div className="flex flex-col space-y-8 w-full p-6 shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold text-black flex items-center">
          Add Shipping Address
          <HiOutlineLocationMarker className="ml-2" />
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
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded-md w-full mt-8"
          onClick={handleSubmit}
        >
          Save Address
        </button>
      </div>
    </>
  );
};

export default DeliveryAddress;

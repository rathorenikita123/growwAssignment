"use client";
import React, { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Toast from "../Toast/Toast";
import { useDeliveryAddressStore } from "../../hooks/store";
import { useRouter } from "next/navigation";

interface DeliveryAddressProps {
  fullName: string;
  phoneNo: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

const DeliveryAddress: React.FC = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<Partial<DeliveryAddressProps>>({});
  const [formData, setFormData] = useState<DeliveryAddressProps>({
    fullName: "",
    phoneNo: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const setDeliveryAddress = useDeliveryAddressStore(
    (state) => state.setDeliveryAddress
  );

  const validateAddress = (fieldName: string, value: string) => {
    switch (fieldName) {
      case "fullName":
        return value.trim() === "" ? "Full name is required" : undefined;
      case "phoneNo":
        return value.length !== 10 || !value.match(/^\d{10}$/)
          ? "Invalid phone number format (10 digits)"
          : undefined;
      case "address":
        return value.trim() === "" ? "Address is required" : undefined;
      case "city":
        return value.trim() === "" ? "City is required" : undefined;
      case "state":
        return value.trim() === "" ? "State is required" : undefined;
      case "zipCode":
        return value.length !== 6 || !value.match(/^\d{6}$/)
          ? "Invalid zip code format (6 digits)"
          : undefined;
      default:
        return undefined;
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateAddress(name, value),
    }));
  };

  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("success");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let errorList: string[] = [];
    let isEmptyField = false;

    for (const [key, value] of Object.entries(formData)) {
      if (!value) {
        isEmptyField = true;
        break;
      }
    }

    if (isEmptyField) {
      setToastType("error");
      setToastMessage("Please fill all the fields");
      setShowToast(true);
      return;
    }

    for (const [key, value] of Object.entries(errors)) {
      if (value) {
        errorList.push(value);
      }
    }

    if (errorList.length === 0) {
      setDeliveryAddress(formData);
      localStorage.setItem("deliveryAddress", JSON.stringify(formData));
      setToastType("success");
      setToastMessage("Address saved successfully");
      setShowToast(true);
      router.push("/payment");
    } else {
      setToastMessage("Please fill all the fields correctly");
      setShowToast(true);
    }
  };

  useEffect(() => {
    const savedAddress = localStorage.getItem("deliveryAddress");
    if (savedAddress) {
      setFormData(JSON.parse(savedAddress));
    }
  }, []);

  return (
    <>
      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} type={toastType} />
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
              name="fullName"
              className="px-2 py-2 w-full border-2 border-[#f1f1f1] focus-visible:outline-none focus-visible:ring-1 "
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </label>
          {
            <div className="text-red-500 text-xs">
              {errors.fullName && errors.fullName}
            </div>
          }
          <label className="flex flex-col gap-1">
            Phone No
            <input
              type="tel"
              name="phoneNo"
              pattern="[0-9]{10}"
              className="px-2 py-2 w-full border-2 border-[#f1f1f1] focus-visible:outline-none focus-visible:ring-1 "
              placeholder="Enter your phone number"
              value={formData.phoneNo}
              onChange={handleInputChange}
              maxLength={10}
            />
          </label>
          {
            <div className="text-red-500 text-xs">
              {errors.phoneNo && errors.phoneNo}
            </div>
          }
          <label className="flex flex-col gap-1">
            Address
            <input
              type="text"
              name="address"
              className="px-2 py-2 w-full border-2 border-[#f1f1f1] focus-visible:outline-none focus-visible:ring-1 "
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </label>
          {
            <div className="text-red-500 text-xs">
              {errors.address && errors.address}
            </div>
          }
          <label className="flex flex-col gap-1">
            City
            <input
              type="text"
              name="city"
              className="px-2 py-2 w-full border-2 border-[#f1f1f1] focus-visible:outline-none focus-visible:ring-1 "
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleInputChange}
            />
          </label>
          {
            <div className="text-red-500 text-xs">
              {errors.city && errors.city}
            </div>
          }
          <label className="flex flex-col gap-1">
            State
            <input
              type="text"
              name="state"
              className="px-2 py-2 w-full border-2 border-[#f1f1f1] focus-visible:outline-none focus-visible:ring-1 "
              placeholder="Enter your state"
              value={formData.state}
              onChange={handleInputChange}
            />
          </label>
          {
            <div className="text-red-500 text-xs">
              {errors.state && errors.state}
            </div>
          }
          <label className="flex flex-col gap-1">
            Zip Code
            <input
              type="text"
              name="zipCode"
              className="px-2 py-2 w-full border-2 border-[#f1f1f1] focus-visible:outline-none focus-visible:ring-1 "
              placeholder="Enter your zip code"
              maxLength={6}
              value={formData.zipCode}
              onChange={handleInputChange}
            />
          </label>
          {
            <div className="text-red-500 text-xs">
              {errors.zipCode && errors.zipCode}
            </div>
          }
        </form>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded-md w-full mt-8"
          onClick={handleSubmit}
        >
          Save and Continue
        </button>
      </div>
    </>
  );
};

export default DeliveryAddress;

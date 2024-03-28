"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "../../utils/utils";
import { OrderSummaryItemProps } from "../interfaces/interfaces";
import Toast from "../Toast/Toast";

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
  const { label, value, children } = props;
  return (
    <div className="flex justify-between text-sm">
      <span className="font-medium">{label}</span>
      {value ? <span className="font-medium">{value}</span> : children}
    </div>
  );
};

const OrderSummary = ({ subTotal, isCartEmpty, context, text }: any) => {
  const router = useRouter();
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState<string>("");
  const [isCouponCodeVisible, setIsCouponCodeVisible] =
    useState<boolean>(false);

  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState("success");
  const applyCoupon = (code: string) => {
    let appliedDiscount = 0;

    if (code === "DISCOUNT10") {
      appliedDiscount = 10;
      setAppliedCoupon("DISCOUNT10");
    } else {
      setAppliedCoupon("");
      setToastType("error");
      setToastMessage("Invalid coupon code");
      setShowToast(true);
      setDiscount(0);
    }

    if (appliedDiscount > 0) {
      const totalValue = subTotal || 0;
      const calculatedDiscount = (appliedDiscount / 100) * totalValue;
      setDiscount(Math.min(calculatedDiscount, 1000));
    }
  };

  const handleShowCouponCode = () => {
    setIsCouponCodeVisible(!isCouponCodeVisible);
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setDiscount(0);
    setCouponCode("");
  };

  const handleCheckout = () => {
    switch (context) {
      case "home":
        router.push("/checkout");
        break;
      case "checkout":
        router.push("/payment");
        break;
      default:
        break;
    }
  };

  let buttonText = "";
  if (context === "home") {
    buttonText = "Continue";
  }

  let grandTotal = (subTotal || 0) - discount;

  const deliveryThreshold = 499;
  const deliveryCharge = 60;

  if (subTotal < deliveryThreshold) {
    grandTotal += deliveryCharge;
  }

  return (
    <>
      {showToast && (
        <Toast
          message={toastMessage}
          onClose={() => setShowToast(false)}
          type={toastType}
        />
      )}
      <div className="flex flex-col space-y-8 rounded-lg w-full p-6 shadow-lg ">
        <h2 className="text-lg font-semibold text-black">{text}</h2>
        <div className="space-y-7 w-full text-md">
          <OrderSummaryItem
            label="Subtotal"
            value={formatPrice(subTotal || 0)}
          />
          <div>
            <OrderSummaryItem
              label="Shipping Charges"
              value={
                isCartEmpty
                  ? formatPrice(0)
                  : subTotal < 499
                  ? formatPrice(deliveryCharge)
                  : ""
              }
            >
              {subTotal < 499 && (
                <a href="#" className="underline">
                  Calculate shipping
                </a>
              )}
              {subTotal > 499 && (
                <span className="text-green-500 font-bold">FREE</span>
              )}
            </OrderSummaryItem>
          </div>
          <OrderSummaryItem label="Coupon Code">
            {!isCartEmpty && !appliedCoupon && context === "home" && (
              <a
                onClick={handleShowCouponCode}
                className="text-blue-500 underline cursor-pointer"
              >
                Apply coupon code
              </a>
            )}
            {appliedCoupon && (
              <>
                <button
                  onClick={removeCoupon}
                  className="text-blue-500 underline cursor-pointer ml-2"
                >
                  Remove
                </button>
              </>
            )}
          </OrderSummaryItem>
          {isCouponCodeVisible && context === "home" && (
            <div className="flex flex-row items-center justify-between w-100">
              <input
                type="text"
                placeholder="Enter Coupon Code DISCOUNT10 for 10% discount"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                className="border px-2 py-2 w-80 mr-2 text-[10px]"
              />
              <button
                onClick={() => applyCoupon(couponCode)}
                className=" text-blue-500 px-6 py-2 rounded-md mt-0 border border-blue-500 text-[10px]"
              >
                Apply
              </button>
            </div>
          )}
          {appliedCoupon && (
            <p className="mt-0 text-green-500 border border-green-500 p-2 text-center">
              You have saved {formatPrice(discount)}!!
            </p>
          )}
          <div className="flex justify-between">
            <p className="font-semibold text-lg">Total</p>
            {isCartEmpty ? (
              <p className="font-bold text-red-500">00.00</p>
            ) : (
              <p>{formatPrice(grandTotal)}</p>
            )}
          </div>
        </div>
        {context !== "" && (
          <button
            className="text-white bg-blue-500 px-6 py-3 rounded-md flex items-center justify-center mt-4"
            disabled={isCartEmpty}
            onClick={handleCheckout}
          >
            {buttonText}
            <FaArrowRight className="ml-2" />
          </button>
        )}
      </div>
    </>
  );
};

export default OrderSummary;

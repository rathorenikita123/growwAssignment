'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "../utils/utils";

type OrderSummaryItemProps = {
  label: string;
  value?: string;
  children?: React.ReactNode;
  subTotal?: number;
};

const OrderSummaryItem = (props: OrderSummaryItemProps) => {
  const { label, value, children } = props;
  return (
    <div className="flex justify-between text-sm">
      <span className="font-medium">{label}</span>
      {value ? <span className="font-medium">{value}</span> : children}
    </div>
  );
};

export const CartOrderSummary = ({ subTotal, isCartEmpty }: any) => {
  const router = useRouter();
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState<string>("");
  const [isCouponCodeVisible, setIsCouponCodeVisible] =
    useState<boolean>(false);

  const applyCoupon = (code: string) => {
    let appliedDiscount = 0;

    if (code === "GROWW10") {
      appliedDiscount = 10;
      setAppliedCoupon("GROWW10");
    } else {
      setAppliedCoupon("");
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

  const handleCheckout = () => {
    router.push("/payment");
  };

  let grandTotal = (subTotal || 0) - discount;

  const deliveryThreshold = 499;
  const deliveryCharge = 60;

  if (subTotal < deliveryThreshold) {
    grandTotal += deliveryCharge;
  }

  return (
    // i want background color to be blue of heading order summary
    <div className="flex flex-col space-y-8 border-2 rounded-lg w-full items-center border-[#00f0ba] pb-4">
      <div className="flex justify-center bg-blue-500 p-4 w-full rounded-t-lg ">
      <h2 className="text-lg font-semibold text-white">Order Summary</h2>
      </div>
     

      <div className="space-y-6 p-8 w-full">
        <OrderSummaryItem label="Subtotal" value={formatPrice(subTotal || 0)} />
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
          <a
            onClick={!isCartEmpty ? handleShowCouponCode : undefined}
            className="underline cursor-pointer"
          >
            Apply coupon code
          </a>
        </OrderSummaryItem>
        {isCouponCodeVisible && (
          <div className="flex flex-col items-center w-full space-y-3">
            <input
              type="text"
              placeholder="Enter Coupon Code GROWW10 for 10% discount"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
              className="border px-2 py-2 w-full"
            />
            <button
              onClick={() => applyCoupon(couponCode)}
              className="bg-blue-500 text-white px-6 py-3 rounded-md w-1/2"
            >
              Apply
            </button>
          </div>
        )}
        {appliedCoupon && (
          <p className="mt-0 text-green-500">
            Coupon {appliedCoupon} applied successfully. You have saved{" "}
            {formatPrice(discount)}
          </p>
        )}

        {appliedCoupon === "" && discount === 0 && (
          <p className="mt-0 text-red-500">Please enter a valid coupon.</p>
        )}
        <div className="flex justify-between">
          <p className="font-semibold text-lg">Total</p>
          {isCartEmpty ? (
            <p className="font-bold text-red-500">Cart is Empty</p>
          ) : (
            <p>{formatPrice(grandTotal)}</p>
          )}
        </div>
      </div>
      
      <button
        className="bg-blue-500 text-white px-6 py-3 mb-6 w-1/2 rounded-md flex items-center justify-center"
        disabled={isCartEmpty}
        onClick={handleCheckout}
      >
        Payment 
        <FaArrowRight className="ml-2" />
      </button>
   
    </div>
  );
};



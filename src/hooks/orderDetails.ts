'use client';

import { useEffect, useState } from "react";
import useStore from "./store";
import { fetchOrderDetails } from "../api/api";

interface OrderDetails {
  products: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  paymentMethod: string[];

}

const OrderDetails = () => {
    const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const setCart = useStore((state) => state.setCart);
  const setPaymentMethods = useStore((state) => state.setPaymentMethods);

  const fetchDetails = async () => {
    try {
      setLoading(true);
      let cartItems: string | null = localStorage.getItem("cartItems");
      if (!cartItems) {
        const data = await fetchOrderDetails();
        cartItems = JSON.stringify(data.products);
        localStorage.setItem("cartItems", cartItems);

        setCart(data.products);
        setPaymentMethods(data.paymentMethod);

        setOrderDetails(data);
      } else {
        setCart(JSON.parse(cartItems));
      }
      setLoading(false);
    } catch (error: any) {
      setError(error.message || "Failed to fetch order details");
      setLoading(false);
    }
  };

 


  useEffect(() => {
    fetchDetails();
  }, []);

  return { loading: loading, error: error };
};

export default OrderDetails;

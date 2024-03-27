import { create } from "zustand";

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface Store {
  cart: Product[];
  paymentMethods: string[];
  setCart: (cart: Product[]) => void;
  setPaymentMethods: (newPaymentMethods: string[]) => void;
  removeItemFromCart: (id: number) => void;
  emptyCart: () => void;
}

const useStore = create<Store>((set) => ({
  cart: [],
  paymentMethods: [],

  setPaymentMethods: (newPaymentMethods) => {
    set((state) => ({ ...state, paymentMethods: newPaymentMethods }));
  },

  setCart: (cart: Product[]) => {
    set((state) => ({ ...state, cart: cart }));
  },

  removeItemFromCart: (id) => {
    set((state) => {
      const newData = state.cart.filter((item) => item.id !== id);
      return { ...state, cart: newData };
    });
  },

  emptyCart: () => {
    set((state) => ({ ...state, cart: [] }));
  },
}));

export default useStore;

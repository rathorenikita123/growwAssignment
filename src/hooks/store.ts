import { create } from "zustand";
import { Product, Store } from "../components/interfaces/interfaces";

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

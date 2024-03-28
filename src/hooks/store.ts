import { create } from "zustand";
import { Product, Store } from "../components/interfaces/interfaces";

interface DeliveryAddress {
  address: string;
  city: string;
  // Add other fields as needed
}

interface DeliveryAddressStore {
  deliveryAddress: DeliveryAddress | null;
  setDeliveryAddress: (address: DeliveryAddress) => void;
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
      localStorage.setItem("cartItems", JSON.stringify(newData));
      return { ...state, cart: newData };
    });
  },

  increaseQuantity: (id) => {
    set((state) => ({
      ...state,
      cart: state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    }));
  },

  decreaseQuantity: (id) => {
    set((state) => ({
      ...state,
      cart: state.cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    }));
  },

  emptyCart: () => {
    set((state) => ({ ...state, cart: [] }));
  },
}));

export default useStore;

export const useDeliveryAddressStore = create<DeliveryAddressStore>((set) => ({
  deliveryAddress: null,
  setDeliveryAddress: (address) => set({ deliveryAddress: address }),
}));

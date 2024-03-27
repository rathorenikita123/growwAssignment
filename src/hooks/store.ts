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
  openModal: boolean;
  setCart: (cart: Product[]) => void;
  setOpenModal: () => void;
  setPaymentMethods: (newPaymentMethods: string[]) => void;
  addItemToCart: (newItem: Product) => void;
  removeItemFromCart: (id: number) => void;
  emptyCart: () => void;
}

const useStore = create<Store>((set) => ({
  cart: [],
  paymentMethods: [],
  openModal: false,

  setOpenModal: () => {
    set((state) => ({ ...state, openModal: !state.openModal }));
  },

  setPaymentMethods: (newPaymentMethods) => {
    set((state) => ({ ...state, paymentMethods: newPaymentMethods }));
  },

  setCart: (cart: Product[]) => {
    set((state) => ({ ...state, cart: cart }));
  },

  addItemToCart: (newItem) => {
    set((state) => ({ ...state, cart: [...state.cart, newItem] }));
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

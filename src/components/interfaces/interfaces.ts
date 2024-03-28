export interface OrderSummaryItemProps {
  label: string;
  value?: string;
  children?: React.ReactNode;
  subTotal?: number;
  context?: "home" | "checkout" | "";
  text?: string;
}

export interface CardInfo {
  nameOnCard: string;
  cardNumber: string;
  validThru: string;
  cvv: string;
}

export interface UpiInfo {
  upiId: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Store {
  cart: Product[];
  paymentMethods: string[];
  setCart: (cart: Product[]) => void;
  setPaymentMethods: (newPaymentMethods: string[]) => void;
  removeItemFromCart: (id: number) => void;
  emptyCart: () => void;
}

export interface OrderDetails {
  products: {
    id: number;
    title: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  paymentMethod: string[];
}
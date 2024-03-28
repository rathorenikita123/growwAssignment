export interface OrderSummaryItemProps {
  label: string;
  value?: string;
  children?: React.ReactNode;
  subTotal?: number;
  context?: "home" | "checkout" | "";
  text?: string;
}

export interface CartProductProps {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
  showDeleteButton?: boolean;
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
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  emptyCart: () => void;
}

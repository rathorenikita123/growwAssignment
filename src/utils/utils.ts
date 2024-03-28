import { Product } from "../components/interfaces/interfaces";

export function formatPrice(value: number): string {
  return value.toFixed(2);
}
export const calculateTotalValue = (cart: Product[]) => {
  return cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

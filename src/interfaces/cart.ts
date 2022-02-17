import { CartProduct } from './product';

export interface Cart {
  id: string;
  products: Array<CartProduct>;
}

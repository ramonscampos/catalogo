export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface CartProduct extends Product {
  quantity?: number;
  notes?: string;
}

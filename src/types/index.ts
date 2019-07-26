export interface Product {
  src: string;
  name: string;
  price: number;
}

export interface Category {
  type: string;
  products: Product[];
}

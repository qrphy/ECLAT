export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    color: string;
    badge?: string;
  }
  
  export interface CartItem {
    product: Product;
    quantity: number;
    size: string;
  }
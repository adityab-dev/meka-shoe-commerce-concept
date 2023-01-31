export type user = {
  username: string;
  password: string;
  cart: CartItem[];
};

export type CartItem = {
  id: number;
  title: string;
  price: string;
  brand: string;
  colors: Array<string>;
  sizes: Array<number>;
  thumbnail: string;
  quantity: number;
  quantityInCart: number;
};

export type Cart = CartItem[];

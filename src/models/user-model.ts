export type user = {
    username: string;
    password: string;
    cart: CartItem[];
};

export type CartItem = { item: string; quantityInCart: number };

export type Cart = CartItem[];

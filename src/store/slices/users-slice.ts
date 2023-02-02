import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { user } from "../../models/user-model";

const usersList: user[] = [
  { username: "1", password: "1", cart: [], totalPrice: 0 },
  { username: "2", password: "2", cart: [], totalPrice: 0 },
  { username: "3", password: "3", cart: [], totalPrice: 0 },
  { username: "4", password: "4", cart: [], totalPrice: 0 },
  { username: "5", password: "5", cart: [], totalPrice: 0 },
];

type UserData = {
  usersList: user[];
  loginStatus: { loggedInUser: string; isLoggedIn: boolean };
};

const usersData: UserData = {
  usersList: usersList,
  loginStatus: { loggedInUser: "", isLoggedIn: false },
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersData,
  reducers: {
    loginRequest(state, action: PayloadAction<string>) {
      const usernameFromAction = action.payload;

      function returnUserIndex(usernameFromAction: string, index: number) {
        if (usernameFromAction === state.usersList[index].username) {
          state.loginStatus.loggedInUser = usernameFromAction;
          state.loginStatus.isLoggedIn = true;
        }
      }
      state.usersList.forEach((user, index) => {
        returnUserIndex(usernameFromAction, index);
      });
    },

    addToCart(
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        price: string;
        brand: string;
        colors: Array<string>;
        sizes: Array<number>;
        thumbnail: string;
        quantity: number;
        username: string;
      }>
    ) {
      const {
        id,
        brand,
        sizes,
        price,
        thumbnail,
        colors,
        quantity,
        title,
        username: loggedInUser,
      } = action.payload;

      const product = { id, brand, title, price, sizes, colors, thumbnail, quantity };

      const { usersList } = state;

      let indexOfUser: number = 0;
      let indexOfCartItem: number = 0;

      // gets us index of user. which will be used to operate on that user's cart.
      usersList.findIndex((user, index) => {
        if (user.username === loggedInUser) indexOfUser = index;
        return null;
      });

      // if item already exists quantityAdded += 1; else add Item to list
      let itemAlreadyExists = false;

      const cartOfUser = state.usersList[indexOfUser].cart;

      for (let index = 0; index < cartOfUser.length; index += 1) {
        if (cartOfUser[index].id === id) {
          itemAlreadyExists = true;
          indexOfCartItem = index;
        }
      }

      if (!itemAlreadyExists) cartOfUser.push({ ...product, quantityInCart: 1 });
      if (itemAlreadyExists) cartOfUser[indexOfCartItem].quantityInCart += 1;

      let totalPriceProduct = 0;
      let totalPriceProducts = 0;

      for (let cartItem of cartOfUser) {
        totalPriceProduct = cartItem.quantityInCart * +cartItem.price;

        totalPriceProducts += totalPriceProduct;
      }

      state.usersList[indexOfUser].totalPrice = totalPriceProducts;
    },

    logout(state) {
      const defaultLoginStatus = { loggedInUser: "", isLoggedIn: false };
      state.loginStatus = defaultLoginStatus;
    },

    addToCartFromCartPage(
      state,
      action: PayloadAction<{ id: number; username: string; type: string }>
    ) {
      // ! NOTE: in usersList quantity doesn't change since quantityToCart is changed not quantity.
      const { id, username, type } = action.payload;

      const { usersList } = state;

      const indexOfUser = usersList.findIndex((user) => user.username === username);

      const cart = state.usersList[indexOfUser].cart;

      const indexOfProduct = cart.findIndex((cartItem) => cartItem.id === +id);

      let quantityInCart = cart[indexOfProduct].quantityInCart;

      if (type === "decrement" && quantityInCart < 5)
        state.usersList[indexOfUser].cart[indexOfProduct].quantityInCart += 1;

      if (type === "increment" && quantityInCart > 0)
        state.usersList[indexOfUser].cart[indexOfProduct].quantityInCart -= 1;

      quantityInCart = state.usersList[indexOfUser].cart[indexOfProduct].quantityInCart;
      if (quantityInCart === 0) state.usersList[indexOfUser].cart.splice(indexOfProduct, 1);

      let totalPriceProducts = 0;
      let totalPriceProduct = 0;

      for (let cartItem of cart) {
        totalPriceProduct = cartItem.quantityInCart * +cartItem.price;
        totalPriceProducts += totalPriceProduct;
      }

      usersList[indexOfUser].totalPrice = totalPriceProducts;
    },
  },
});

export const { loginRequest, addToCart, logout, addToCartFromCartPage } = usersSlice.actions;
export default usersSlice;

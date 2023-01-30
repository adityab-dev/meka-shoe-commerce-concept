import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { user } from "../../models/user-model";

const usersList: user[] = [
  { username: "1", password: "1", cart: [] },
  { username: "2", password: "2", cart: [] },
  { username: "3", password: "3", cart: [] },
  { username: "4", password: "4", cart: [] },
  { username: "5", password: "5", cart: [] },
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
      action: PayloadAction<{ item: string; username: string }>
    ) {
      const { item: itemAdded, username: loggedInUser } = action.payload;

      console.log("itemAdded", itemAdded, "user", loggedInUser);

      let indexOfUser: number = 0;

      // gets us index of user. which will be used to operate on that user's cart.
      for (let index = 0; index < state.usersList.length; index += 1) {
        if (state.usersList[index].username === loggedInUser) {
          indexOfUser = index;
        }
      }

      // if item already exists quantityAdded += 1; else add Item to list
      let itemAlreadyExists = false;

      const cart = state.usersList[indexOfUser].cart;

      cart.forEach((cartItemObj) => {
        if (cartItemObj.item === itemAdded) {
          cartItemObj.quantityInCart += 1;
          itemAlreadyExists = true;
        }
      });

      if (!itemAlreadyExists) {
        cart.push({ item: itemAdded, quantityInCart: 1 });
      }
    },

    logout(state) {
      const defaultLoginStatus = { loggedInUser: "", isLoggedIn: false };
      state.loginStatus = defaultLoginStatus;
    },
  },
});

export const { loginRequest, addToCart, logout } = usersSlice.actions;
export default usersSlice;

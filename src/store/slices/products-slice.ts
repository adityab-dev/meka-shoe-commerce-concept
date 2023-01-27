import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import products from "../../Assets/dummyProductsData";

const productsSlice = createSlice({
    name: "products",
    initialState: products,
    reducers: {
        productAddedToCart(state, action: PayloadAction<number>) {
            const idOfProduct = action.payload;

            let indexOfProduct = 0;

            for (let index = 0; index < state.length; index += 1) {
                if (state[index].id === idOfProduct) {
                    indexOfProduct = index;
                }
            }

            if (!(state[indexOfProduct].quantity === 0)) {
                state[indexOfProduct].quantity -= 1;
            }
        },
    },
});

export const { productAddedToCart } = productsSlice.actions;
export default productsSlice;

import { configureStore } from "@reduxjs/toolkit";

import usersSlice from "../slices/users-slice";
import productsSlice from "../slices/products-slice";
import appliedFiltersSlice from "../slices/appliedFilters-slice";

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        products: productsSlice.reducer,
        appliedFilters: appliedFiltersSlice.reducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

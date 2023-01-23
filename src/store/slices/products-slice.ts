import { createSlice } from "@reduxjs/toolkit";

import products from "../../Assets/dummyProductsData";

const productsSlice = createSlice({
    name: "products",
    initialState: products,
    reducers: {},
});

export default productsSlice;

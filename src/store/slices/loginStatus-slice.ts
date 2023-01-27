import { createSlice } from "@reduxjs/toolkit";

const initialLoginStatusState = {
    isUserLoggedIn: true,
};

const loginStatusSlice = createSlice({
    name: "loginStatus",
    initialState: initialLoginStatusState,
    reducers: {},
});

export default loginStatusSlice;

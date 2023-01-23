import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppliedFilters } from "../../Components/Sidebar/Sidebar";

const initialAppliedFiltersState: AppliedFilters = {
    brand: "",
    checkedBrands: [],
    size: "",
    checkedSizes: [],
    color: "",
    checkedColors: [],
    range: "",
};

const appliedFiltersSlice = createSlice({
    name: "appliedFilters",
    initialState: initialAppliedFiltersState,
    reducers: {
        enterDataOnFilterField(state, action: PayloadAction<AppliedFilters>) {
            const filters = { ...action.payload };

            return { ...filters };
        },

        checkboxInteraction(state, action: PayloadAction<{ name: string; value: string; checked: boolean }>) {
            const { name, value, checked } = action.payload;

            if (name === "checkedSizes" && checked) state[name].push(+value);

            if (checked === false && name === "checkedSizes") {
                const indexOfItem = state[name].findIndex((el) => el === +value);
                state[name].splice(indexOfItem, 1);
            }

            if (name === "checkedColors" && checked) state[name].push(value);

            if (checked === false && name === "checkedColors") {
                const indexOfItem = state[name].findIndex((el) => el === value);
                state[name].splice(indexOfItem, 1);
            }

            if (name === "checkedBrands" && checked) state[name].push(value);

            if (checked === false && name === "checkedBrands") {
                const indexOfItem = state[name].findIndex((el) => el === value);
                state[name].splice(indexOfItem, 1);
            }
        },
    },
});

export const { enterDataOnFilterField, checkboxInteraction } = appliedFiltersSlice.actions;
export default appliedFiltersSlice;

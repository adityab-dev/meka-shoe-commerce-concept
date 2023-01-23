import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { user } from "../../models/user-model";

const usersList: user[] = [
    { username: "1", password: "1", isLoggedIn: false },
    { username: "2", password: "2", isLoggedIn: false },
    { username: "3", password: "3", isLoggedIn: false },
    { username: "4", password: "4", isLoggedIn: false },
    { username: "5", password: "5", isLoggedIn: false },
];

const usersSlice = createSlice({
    name: "users",
    initialState: usersList,
    reducers: {
        loginRequest(state, action: PayloadAction<string>) {
            const usernameFromAction = action.payload;
            console.log("usernameFromAction", usernameFromAction);

            let indexOfItem: number | undefined;

            // finds index
            function returnUserIndex(usernameFromAction: string, index: number): void {
                if (usernameFromAction === state[index].username) {
                    indexOfItem = index;
                }
            }

            state.forEach((user, index) => {
                returnUserIndex(usernameFromAction, index);
            });

            console.log("index", indexOfItem);

            // indexOfItem can be zero in case if(false).
            if (typeof indexOfItem === "number") {
                console.log("enteredLog");
                state[indexOfItem].isLoggedIn = true;
            }
        },
    },
});

export const { loginRequest } = usersSlice.actions;
export default usersSlice;

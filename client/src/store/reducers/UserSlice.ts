import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/user/IUser";

interface UserState {
    user: IUser;
    isLoading: boolean;
    error: string;
    isAuth: boolean;
}

const initialState: UserState = {
    user: {} as IUser,
    isLoading: false,
    error: "",
    isAuth: false
} 

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

        userLoading: (state) => {
            state.isLoading = true;
        },

        userLoaded: (state, action: PayloadAction<IUser>) => {
            state.isLoading = false;
            state.user = action.payload;
            state.error = "";
            state.isAuth = true;

        },

        userLoadedError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        userNotLoaded: (state) => {
            state.isLoading = false;
            state.isAuth = false;
        }

        

    }
});

export default userSlice.reducer;
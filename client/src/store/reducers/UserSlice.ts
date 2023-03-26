import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/user/IUser";

interface UserState {
    user: IUser;
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    user: {} as IUser,
    isLoading: false,
    error: "",

} 

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },

        userLoading: (state) => {
            state.isLoading = true;
        },

        userLoaded: (state, action: PayloadAction<IUser>) => {
            state.isLoading = false;
            state.user = action.payload;
            state.error = "";

        },

        userLoadedError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },

        userNotLoaded: (state) => {
            state.isLoading = false;
        }

        

    }
});

export default userSlice.reducer;
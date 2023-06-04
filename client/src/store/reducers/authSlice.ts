import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            id: null,
            username: null,
            email: null,
        },
    },
    reducers: {
        setUser: (state, action) => {
            const { user } = action.payload;
            state.user = user;
        },
        removeUser: (state) => {
            state.user = { id: null, username: null, email: null};
        }
    },
});  

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;

export const selectUser = (state: any) => {
    return state.auth.user
};
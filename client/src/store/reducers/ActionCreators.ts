import axios from "axios";
import { IUser } from "../../models/user/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";
import { $axiosInstance } from "../../http/axios";


export const login = (user: any, callback: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userLoading());
        const response = await $axiosInstance.post('auth/login', user);   
        dispatch(userSlice.actions.userLoaded(response.data));
        callback();
    } catch (error: any) {
        dispatch(userSlice.actions.userLoadedError(error.message));
    }
}

export const auth = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userLoading());
        const response = await $axiosInstance.get('auth/auth');
        dispatch(userSlice.actions.userLoaded(response.data));
    } catch (error: any) {
        dispatch(userSlice.actions.userLoadedError(error.message));
    }
}
import axios from "axios";
import { IUser } from "../../models/user/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";


export const login = (user: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userLoading());
        const response = await axios.post("http://localhost:3000/auth/login", user);
        
        dispatch(userSlice.actions.userLoaded(response.data));
    } catch (error: any) {
        dispatch(userSlice.actions.userLoadedError(error.message));
    }
       
}
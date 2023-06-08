import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { blogPostApi } from '../services/BlogpostService';
import { authApi } from '../services/AuthService';
import authReducer from './reducers/authSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    [blogPostApi.reducerPath]: blogPostApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
            blogPostApi.middleware,
            authApi.middleware,
            ),
})};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
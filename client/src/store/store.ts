import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';
import blogpostReducer from './reducers/BlogpostSlice';
import { blogPostApi } from '../services/BlogpostService';

const rootReducer = combineReducers({
    userReducer, 
    [blogPostApi.reducerPath]: blogPostApi.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogPostApi.middleware),
})};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
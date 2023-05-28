import {combineReducers, configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';
import blogpostReducer from './reducers/BlogPostSlice';

const rootReducer = combineReducers({
    userReducer, 
    blogpostReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
})};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
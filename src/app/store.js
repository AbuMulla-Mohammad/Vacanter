import { configureStore } from "@reduxjs/toolkit"
import authReducer from '../features/auth/authSlice';
import userInfoReducer from '../features/userInfo/userInfoSlice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        userInfo:userInfoReducer,
    }
})
export default store;
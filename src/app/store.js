import { configureStore } from "@reduxjs/toolkit"
import authReducer from '../features/auth/authSlice';
import userInfoReducer from '../features/userInfo/userInfoSlice';
import filtersReducer from '../features/filters/filtersSlice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
        userInfo: userInfoReducer,
        filters: filtersReducer,
    }
})
export default store;
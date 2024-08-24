import { createSlice } from "@reduxjs/toolkit"

const initialState = (() => {
    try {
        return {
            userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
        };
    } catch (e) {
        console.error('Failed to parse userInfo from localStorage', e);
        return { userInfo: null };
    }
})();
const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            const info = action.payload;
            state.userInfo = info;
            localStorage.setItem('userInfo', JSON.stringify(info));
        },
        clearUserInfo: (state) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        }
    }
})
export const { setUserInfo, clearUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
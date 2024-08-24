import { createSlice } from "@reduxjs/toolkit"
import { jwtDecode } from "jwt-decode";

const initialState = {
    token: localStorage.getItem('userToken') || null,
    decodedToken: null,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            const encodedToken = action.payload;
            state.token = encodedToken;
            localStorage.setItem('userToken', encodedToken);
            try {
                state.decodedToken = jwtDecode(encodedToken); 
                console.log("state.decodedToken",state.decodedToken)
            } catch (error) {
                console.log('Failed to decode token', error);
                state.decodedToken = null;
            }
        },
        clearToken: (state) => {
            state.token = null;
            state.decodedToken = null;
            localStorage.removeItem('userToken');
        }
    }
});
export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
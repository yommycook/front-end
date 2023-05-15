import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogin: false,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isLogin = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isLogin = false;
            state.user = null;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;

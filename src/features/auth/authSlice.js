import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signupUser } from "./authRequest";


const initialState = {
    status: 'idle',                     //idle,pending,succeeded,failed
    error: null,
    user: null,
    token:null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signupUser.pending, (state) => {
                state.status = 'pending';
                state.error = null;
                
            })
            .addCase(signupUser.fulfilled, (state) => {
                state.status = 'succeeded';
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || "failed to signup";
            })
        
        //Cases for login user
            .addCase(loginUser.pending, (state) => {
                state.status = 'pending';
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.loggedInUser;
                state.token = action.payload.accessToken;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || "failed to login"
        })
    }
    
})

export const selectAuth = (state) => state.auth;
export const selectToken = (state) => state.auth.token;


export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { addReferral } from "./referralRequest";

const initialState = {
    status: 'idle',       //idle, loading, succeeded, failed
    error: null,
    data: null
}

export const referralSlice = createSlice({
    name: 'referral',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(addReferral.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(addReferral.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(addReferral.rejected, (state, action) => {
                state.status = 'failed';
                state.status = action.payload || "failed to addReferral"
        })
    }
})


export default referralSlice.reducer;
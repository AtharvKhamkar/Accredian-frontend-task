import { createSlice } from "@reduxjs/toolkit";
import { fetchCourses } from "./courseRequest";

const initialState = {
    status: 'idle',                  //idle, loading, succeeded, failed 
    error: null,
    courses: []
}

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.courses = action.payload;

            })
            .addCase(fetchCourses.rejected, (state, action) => {
                state.status = 'failed',
                state.error = action.payload || "Error while loading courses"
        })
    }
})

export const selectCourses = (state) => state.course.courses;


export default courseSlice.reducer;
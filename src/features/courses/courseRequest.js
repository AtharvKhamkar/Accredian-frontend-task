import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USER_URL = "http://localhost:2525/api/v1"

export const fetchCourses = createAsyncThunk(
    'courses/all',
    async ({token},{ rejectWithValue }) => {
        
        try {
            const response = await axios({
                method: 'GET',
                url: `${USER_URL}/course/all`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            return response.data.response;
            
        } catch (error) {
            if (!error.response) {  
                throw error;
            }

            return rejectWithValue(error.response.data);
        }
    }

)
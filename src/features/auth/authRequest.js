import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const USER_URL = import.meta.env.VITE_BASE_URL;

export const signupUser = createAsyncThunk(
    'users/signup',
    async ({ fullname, username, email, password }, { rejectWithValue }) => {
        const formData = new FormData();
        formData.append('fullname', fullname);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);


        try {
            const response = await axios({
                method: 'POST',
                url: `${USER_URL}/user/register`,
                headers: {
                    'Content-Type':'multipart/form-data'
                },
                data:formData
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

export const loginUser = createAsyncThunk(
    'users/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await axios({
                method: 'PUT',
                url: `${USER_URL}/user/login`,
                headers: {
                    'Content-Type':'application/json'
                },
                data: {
                    email,
                    password
                }
            })

            return response.data.response;
            
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            
            return rejectWithValue(error.response.data)
        }
    }
)
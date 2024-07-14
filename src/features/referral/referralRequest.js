import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USER_URL = import.meta.env.VITE_BASE_URL;


export const addReferral = createAsyncThunk(
    'refer/add',
    async ({ token, referee_name, referee_email, referee_mobile_no, relation, course_name }, { rejectWithValue }) => {
        const formData = new FormData();
        formData.append('referee_name', referee_name);
        formData.append('referee_email', referee_email);
        formData.append('referee_mobile_no', referee_mobile_no);
        formData.append('relation', relation);
        formData.append('course_name', course_name);

        console.log(formData);

        try {
            const response = await axios({
                method: 'POST',
                url: `${USER_URL}/refer/add`,
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
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
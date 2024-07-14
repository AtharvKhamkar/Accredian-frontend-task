import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import courseReducer from '../features/courses/courseSlice';
import referralReducer from '../features/referral/referralSlice';

export const store = configureStore({
    reducer: {
        'auth': authReducer,
        'course': courseReducer,
        'referral':referralReducer
    }
})
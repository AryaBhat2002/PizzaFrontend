import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";
const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' || false,
    role: localStorage.getItem('role') || '',
    data : JSON.parse(localStorage.getItem('data')) || {},  
};

export const createAccount = createAsyncThunk('/auth/createAccount' , async (data) => 
    {
    console.log("Thunk response",data);
    try {
        const response = axiosInstance.post('/users', data);
        toast.promise(response,{
            success: (resolvedPromise) => {
                return resolvedPromise ?.data?.message;
            },
            loading: 'Hold back type, we are registering your id..',
            error: 'Ohh No!, something went wrong. Please try again.',
        })
        const apiResponse = await response;
        return apiResponse
    } catch (error) {
        console.log(error);
    } 
});

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});

export default AuthSlice.reducer;
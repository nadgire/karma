import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api'; // your API service

export const userLogin = createAsyncThunk(
    'data/userLogin',
    async () => {
        try {
            const response = await axios.post("http://13.61.233.178:8080" + "/employee/login", payload);
            console.log(response.data);
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const userSlice = createSlice({
    name: 'data',
    initialState: {
        employeeId: null,
        username: '',
        name: '',
    },
    reducers: {
        // You can add other synchronous reducers here if needed
        clearData: (state) => {
            employeeId = null;
            username = '';
            name = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.loading = 'succeeded';

                state.employeeId = action.employeeId,

                    state.lastFetch = new Date().toISOString();
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.payload || action.error.message;
            });
    }
});
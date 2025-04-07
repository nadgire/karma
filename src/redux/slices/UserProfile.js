// features/data/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching data after login
export const fetchUserProfileData = createAsyncThunk(
  'data/fetchUserProfileData',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://13.61.233.178:8080/employee/${localStorage.getItem('user_id')}/home`);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const userProfileSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    loading: 'idle', // 'idle' | 'pending' | 'succeeded' | 'failed'
    error: null,
    lastFetch: null
  },
  reducers: {
    // You can add other synchronous reducers here if needed
    clearData: (state) => {
      state.items = [];
      state.loading = 'idle';
      state.error = null;
      state.lastFetch = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfileData.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchUserProfileData.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.items = action.payload;
        state.lastFetch = new Date().toISOString();
      })
      .addCase(fetchUserProfileData.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload || action.error.message;
      });
  }
});

export const { clearData } = userProfileSlice.actions;
export default userProfileSlice.reducer;
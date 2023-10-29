// slices/dataSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './reducers';
import fetch from 'isomorphic-unfetch';

interface DataState {
  data: any[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DataState = {
  data: [],
  loading: 'idle',
  error: null,
};

export const fetchData = createAsyncThunk('data/fetchData', async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
});

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message ?? 'An error occurred.';
      });
  },
});

// Selectors
export const selectData = (state: RootState) => state.data.data;
export const selectLoadingStatus = (state: RootState) => state.data.loading;
export const selectError = (state: RootState) => state.data.error;

export default dataSlice.reducer;

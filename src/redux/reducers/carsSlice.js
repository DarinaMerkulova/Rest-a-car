import { createSlice } from '@reduxjs/toolkit';
import { getCarThunk } from '../operations'

const initialState = {
  adverts: [],
  isLoading: false,
  error: null,
};

const carSlice = createSlice({
  name: 'car',
  initialState: initialState,

    extraReducers: (builder) => {
    builder
      .addCase(getCarThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCarThunk.fulfilled, (state, action) => {
        state.adverts = action.payload;
        state.isLoading = false;
      })
      .addCase(getCarThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const carReducer = carSlice.reducer;

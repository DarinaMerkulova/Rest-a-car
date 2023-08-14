import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginUserThunk,
  logoutUserThunk,
  refreshUserThunk,
  registerUserThunk,
} from 'redux/operations';

const initialState = {
  isLoading: false,
  error: null,
  userData: null,
  token: null,
  isLogining: false,
};

const arrThunk = [
  registerUserThunk,
  loginUserThunk,
  refreshUserThunk,
  logoutUserThunk,
];

const thunkFilter = type => {
  return arrThunk.map(el => el[type]);
};
const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledRegister = (state, { payload }) => {
  state.isLoading = false;
  state.isLogining = true;
  state.userData = payload.user;
  state.token = payload.token;
};

const handleFulfilledLogin = (state, { payload }) => {
  state.isLoading = false;
  state.isLogining = true;
  state.userData = payload.user;
  state.token = payload.token;
};

const handleFulfilledRefresh = (state, { payload }) => {
  state.isLoading = false;
  state.isLogining = true;
  state.userData = payload;
};

const handleFulfilledLogout = (state, { payload }) => {
  state.isLoading = false;
  state.isLogining = false;
  state.userData = null;
  state.token = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerUserThunk.fulfilled, handleFulfilledRegister)
      .addCase(loginUserThunk.fulfilled, handleFulfilledLogin)
      .addCase(refreshUserThunk.fulfilled, handleFulfilledRefresh)
      .addCase(logoutUserThunk.fulfilled, handleFulfilledLogout)
      .addMatcher(isAnyOf(...thunkFilter('pending')), handlePending)
      .addMatcher(isAnyOf(...thunkFilter('rejected')), handleRejected),
});

export const authReducer = authSlice.reducer;

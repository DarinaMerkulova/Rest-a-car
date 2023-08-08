import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { createContactsThunk, deleteContactsThunk, getContactsThunk } from 'redux/operations';

  const initialStateContacts = {
  items: [],
  isLoading: false,
  error: null,
};


const arrThunk = [createContactsThunk, deleteContactsThunk, getContactsThunk];

const thunkFilter = (type) => {
  return arrThunk.map((el) => el[type]);
}

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const handleFulfilledGet = (state, { payload }) => {
  handleFulfilled(state);
  state.items = payload;
};

const handleFulfilledCreate = (state, { payload }) => {
  state.items.push(payload);
  handleFulfilled(state);

  
};

const handleFulfilledDelete = (state, { payload }) => {
  handleFulfilled(state);
  state.items = state.items.filter(contact => contact.id !== payload.id);
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(createContactsThunk.fulfilled, handleFulfilledCreate)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...thunkFilter('pending')), handlePending)
      .addMatcher(isAnyOf(...thunkFilter('rejected')), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

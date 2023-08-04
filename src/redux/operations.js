import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64ca2221b2980cec85c2edb3.mockapi.io/'


export const getContactsThunk = createAsyncThunk('contacts/get', async(_, thunkAPI) => {
try {
  const response = await axios.get("/contacts");
  return response.data;
} catch (error) {
  
  return thunkAPI.rejectWithValue(error.message);
}
})


export const createContactsThunk = createAsyncThunk('contacts/create', async(contact, thunkAPI) => {
  try {
    const response = await axios.post("/contacts", contact);
    return response.data;
  } catch (error) {
    
    return thunkAPI.rejectWithValue(error.message);
  }
  })

export const deleteContactsThunk = createAsyncThunk('contacts/delete', async(contactId, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    
    return thunkAPI.rejectWithValue(error.message);
  }
  })

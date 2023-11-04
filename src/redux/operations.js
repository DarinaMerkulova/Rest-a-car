import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const $instance = axios.create({
  baseURL: 'https://6542c3ac01b5e279de1f8e89.mockapi.io/adverts',
});


// ---CONTACTS---//

export const getCarThunk = createAsyncThunk(
  'adverts/get',
  async (_, thunkAPI) => {
    try {
      const response = await $instance.get('/adverts');
      console.log(response.data)
     return response.data;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

getCarThunk ()
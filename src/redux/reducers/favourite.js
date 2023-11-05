import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favouriteCars: [],
  };
  
  const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        toggleFavouriteCar: (state, action) => {
            const carIndex = state.favouriteCars.findIndex(car => car.id === action.payload.id);
            if (carIndex !== -1) {
              // Якщо машина вже є в обраних, видаляємо її
              state.favouriteCars.splice(carIndex, 1);
            } else {
              // Якщо машина не є в обраних, додаємо її
              state.favouriteCars.push(action.payload);
            }
          },
        },
      });
  
  export const { toggleFavouriteCar } = favouriteSlice.actions;
  export const selectFavouriteCars = state => state.favourite.favouriteCars;
  export const favouriteReducer = favouriteSlice.reducer;
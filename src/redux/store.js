import { configureStore } from '@reduxjs/toolkit';
// import { filtersReducer } from './reducers/filterSlice';


import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { carReducer} from './reducers/carsSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { favouriteReducer } from './reducers/favourite';

const favouritePersistConfig = {
  key: 'favourite',
  storage,
  whitelist: ['favouriteCars'],
};

export const store = configureStore({
  reducer: {
    car: carReducer,
    // filter: filtersReducer,
    favourite: persistReducer(favouritePersistConfig,favouriteReducer)
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

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

// const authPersistConfig = {
//   key: 'favorite',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    car: carReducer,
    // filter: filtersReducer,
    // auth: persistReducer(authPersistConfig,favoriteReducer)
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

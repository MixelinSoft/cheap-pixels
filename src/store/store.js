import { configureStore } from '@reduxjs/toolkit';
import { gamesSlice } from './slices/gamesSlice';
import { uiSlice } from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    games: gamesSlice.reducer,
  },
});

export default store;

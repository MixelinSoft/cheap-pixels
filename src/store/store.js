import { configureStore } from '@reduxjs/toolkit';
import { gamesSlice } from './slices/gamesSlice';
import { uiSlice } from './slices/uiSlice';
import { hotSalesSlice } from './slices/hotSalesSlice';

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    hotSales: hotSalesSlice.reducer,
    games: gamesSlice.reducer,
  },
});

export default store;

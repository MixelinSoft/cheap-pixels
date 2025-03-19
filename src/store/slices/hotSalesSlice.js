import { stores } from '../../data/stores';
// Impoert Dependencies
import { createSlice } from '@reduxjs/toolkit';
// Create Initial State
const initialState = {
  bestDeals: [],
  showFitlers: false,
  filtersLoaded: false,
  filters: {
    activeStores: Object.keys(stores).reduce((acc, key) => {
      acc[key] = true; // по умолчанию все магазины активны
      return acc;
    }, {}),
  },
};
// Create Slice
export const hotSalesSlice = createSlice({
  name: 'hotSales',
  initialState: initialState,
  reducers: {
    addBestDeals: (state, { payload }) => {
      state.bestDeals = payload;
    },
    setShowFilters: (state, { payload }) => {
      state.showFitlers = payload;
    },
    setFilters(state, { payload }) {
      state.filters = payload;
      state.filtersLoaded = true;
    },
    setFiltersLoaded(state, { payload }) {
      state.filtersLoaded = payload;
    },
    toggleStoreFilter: (state, { payload }) => {
      state.filters.activeStores[payload] =
        !state.filters.activeStores[payload];
    },
  },
});
// Export Actions
export const hotSalesActions = hotSalesSlice.actions;
// Export Reducers
export default hotSalesSlice.reducer;

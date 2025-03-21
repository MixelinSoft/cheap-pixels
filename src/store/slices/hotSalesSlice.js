import { stores } from '../../data/stores';
// Impoert Dependencies
import { createSlice } from '@reduxjs/toolkit';
// Create Initial State
const initialState = {
  loading: false,
  bestDeals: [],
  totalPages: 0,
  currentPage: 1,
  showFitlers: false,
  filtersLoaded: false,
  filters: {
    activeStores: Object.keys(stores).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {}),
    pageSize: '10',
  },
};
// Create Slice
export const hotSalesSlice = createSlice({
  name: 'hotSales',
  initialState: initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    addBestDeals: (state, { payload }) => {
      state.bestDeals = payload;
    },
    setTotalPages: (state, { payload }) => {
      state.totalPages = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
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

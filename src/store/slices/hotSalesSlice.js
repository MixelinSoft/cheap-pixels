// Impoert Dependencies
import { createSlice } from '@reduxjs/toolkit';
// Create Initial State
const initialState = {
  bestDeals: [],
};
// Create Slice
export const hotSalesSlice = createSlice({
  name: 'hotSales',
  initialState: initialState,
  reducers: {
    addBestDeals: (state, action) => {
      state.bestDeals = action.payload;
    },
  },
});
// Export Actions
export const hotSalesActions = hotSalesSlice.actions;
// Export Reducers
export default hotSalesSlice.reducer;

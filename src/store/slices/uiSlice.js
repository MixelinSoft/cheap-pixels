// Impoert Dependencies
import { createSlice } from '@reduxjs/toolkit';
// Create Initial State
const initialState = {
  showAsideMenu: false,
};
// Create Slice
export const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    setShowAsideMenu: (state, { payload }) => {
      state.showAsideMenu = payload;
    },
  },
});
// Export Actions
export const uiActions = uiSlice.actions;
// Export Reducers
export default uiSlice.reducer;

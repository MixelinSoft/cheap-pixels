// Impoert Dependencies
import { createSlice } from '@reduxjs/toolkit';
// Create Initial State
const initialState = {
  findedGames: [],
  currentGame: null,
};
// Create Slice
export const gamesSlice = createSlice({
  name: 'games',
  initialState: initialState,
  reducers: {
    setFindedGames: (state, { payload }) => {
      state.findedGames = payload;
    },
    setCurrentGame: (state, { payload }) => {
      state.currentGame = payload;
    },
  },
});
// Export Actions
export const gamesActions = gamesSlice.actions;
// Export Reducers
export default gamesSlice.reducer;

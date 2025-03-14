// Impoert Dependencies
import { createSlice } from '@reduxjs/toolkit';
// Create Initial State
const initialState = {
  games: [
    {
      internalName: 'DEUSEXHUMANREVOLUTIONDIRECTORSCUT',
      title: "Deus Ex: Human Revolution - Director's Cut",
      metacriticLink: '/game/pc/deus-ex-human-revolution---directors-cut',
      dealID: 'HhzMJAgQYGZ%2B%2BFPpBG%2BRFcuUQZJO3KXvlnyYYGwGUfU%3D',
      storeID: '1',
      gameID: '102249',
      salePrice: '2.99',
      normalPrice: '19.99',
      isOnSale: '1',
      savings: '85.042521',
      metacriticScore: '91',
      steamRatingText: 'Very Positive',
      steamRatingPercent: '92',
      steamRatingCount: '17993',
      steamAppID: '238010',
      releaseDate: 1382400000,
      lastChange: 1621536418,
      dealRating: '9.6',
      thumb:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/238010/capsule_sm_120.jpg?t=1619788192',
    },
    {
      internalName: 'THIEFDEADLYSHADOWS',
      title: 'Thief: Deadly Shadows',
      metacriticLink: '/game/pc/thief-deadly-shadows',
      dealID: 'EX0oH20b7A1H2YiVjvVx5A0HH%2F4etw3x%2F6YMGVPpKbA%3D',
      storeID: '1',
      gameID: '396',
      salePrice: '0.98',
      normalPrice: '8.99',
      isOnSale: '1',
      savings: '89.098999',
      metacriticScore: '85',
      steamRatingText: 'Very Positive',
      steamRatingPercent: '81',
      steamRatingCount: '1670',
      steamAppID: '6980',
      releaseDate: 1085443200,
      lastChange: 1621540561,
      dealRating: '9.4',
      thumb:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/6980/capsule_sm_120.jpg?t=1592493801',
    },
    {
      internalName: 'JUSTCAUSE2',
      title: 'Just Cause 2',
      metacriticLink: '/game/pc/just-cause-2',
      dealID: 'z4El8C19yCEHrk1%2ByEedebThQVbblI7H0Z%2BAmxgZiS8%3D',
      storeID: '1',
      gameID: '180',
      salePrice: '1.49',
      normalPrice: '14.99',
      isOnSale: '1',
      savings: '90.060040',
      metacriticScore: '84',
      steamRatingText: 'Very Positive',
      steamRatingPercent: '90',
      steamRatingCount: '35296',
      steamAppID: '8190',
      releaseDate: 1269302400,
      lastChange: 1621536477,
      dealRating: '9.4',
      thumb:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/8190/capsule_sm_120.jpg?t=1593180404',
    },
  ],
};
// Create Slice
export const gamesSlice = createSlice({
  name: 'games',
  initialState: initialState,
  reducers: {
    addGames: (state, action) => {
      state.games = action.payload;
    },
  },
});
// Export Actions
export const gamesActions = gamesSlice.actions;
// Export Reducers
export default gamesSlice.reducer;

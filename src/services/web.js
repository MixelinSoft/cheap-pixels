import axios from 'axios';
import { gamesActions } from '../store/slices/gamesSlice';

const api = axios.create({
  baseURL: 'https://www.cheapshark.com/api/1.0/',
});

export const getDeals = async (dispatch) => {
  const response = await api.get('deals?storeID=1,7&pageSize=12&pageNumber=1');
  console.log(response.data);
  dispatch(gamesActions.addGames(response.data));
};

// 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15'

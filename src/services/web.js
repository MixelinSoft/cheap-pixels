import axios from 'axios';
import { gamesActions } from '../store/slices/gamesSlice';
import { hotSalesActions } from '../store/slices/hotSalesSlice';

const api = axios.create({
  baseURL: 'https://www.cheapshark.com/api/1.0/',
});

export const getDeals = () => {
  console.log('getDeals');
  return async (dispatch) => {
    try {
      const response = await api.get(
        'deals?storeID=1, 7&sortBy=Savings&pageSize=10',
      );
      dispatch(hotSalesActions.addBestDeals(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchGames = (title) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`games?title=${title}`);
      dispatch(gamesActions.setFindedGames(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const getGame = (id) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`games?id=${id}`);
      dispatch(gamesActions.setCurrentGame(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

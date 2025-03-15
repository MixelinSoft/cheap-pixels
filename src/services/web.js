import axios from 'axios';
import { gamesActions } from '../store/slices/gamesSlice';

const api = axios.create({
  baseURL: 'https://www.cheapshark.com/api/1.0/',
});

export const getDeals = (dispatch) => {
  return async (dispatch) => {
    try {
      const response = await api.get(
        'deals?storeID=1,7&pageSize=12&pageNumber=1',
      );
      dispatch(gamesActions.addGames(response.data));
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

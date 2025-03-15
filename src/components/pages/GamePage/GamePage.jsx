import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGame } from '../../../services/web';
import { useDispatch, useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { gamesActions } from '../../../store/slices/gamesSlice';

const GamePage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const currentGame = useSelector((state) => state.games.currentGame);

  console.log(currentGame);

  useEffect(() => {
    if (!params.gameID) return;
    dispatch(getGame(params.gameID));
  }, [params, dispatch]);

  return (
    <div>
      {currentGame && (
        <>
          <img src={currentGame.info.thumb} alt={currentGame.title} />
          <Typography variant='h2' color={'primary.main'}>
            {currentGame.info.title}
          </Typography>
        </>
      )}
    </div>
  );
};

export default GamePage;

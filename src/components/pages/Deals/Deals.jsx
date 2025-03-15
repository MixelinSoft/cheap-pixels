import { useEffect } from 'react';
import { getDeals } from '../../../services/web';
import { useDispatch, useSelector } from 'react-redux';
import GameCard from '../../ui/GameCard/GameCard';
import { Box } from '@mui/material';

const Deals = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.games);
  useEffect(() => {
    // getDeals(dispatch);
  }, [dispatch]);
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
      }}
    >
      {games.map((game) => {
        return <GameCard key={game.dealID} game={game} />;
      })}
    </Box>
  );
};

export default Deals;

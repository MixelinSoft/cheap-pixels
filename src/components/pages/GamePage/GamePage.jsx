import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGame } from '../../../services/web';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Card, Typography } from '@mui/material';
import { gamesActions } from '../../../store/slices/gamesSlice';
import StoreIcon from '../../ui/StoreIcon/StoreIcon';

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
    currentGame && (
      <Card
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            minWidth: '50%',
            width: '50%',
          }}
        >
          <Typography variant='h2' fontWeight='bold' color={'primary.main'}>
            {currentGame.info.title}
          </Typography>
          <Box
            sx={{ marginTop: '16px', display: 'flex', flexDirection: 'column' }}
          >
            {currentGame.deals.map((deal) => {
              return (
                (deal.storeID === '1' ||
                  deal.storeID === '7' ||
                  deal.storeID === '25') && (
                  <Box
                    key={deal.dealID}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <StoreIcon title store={deal.storeID} /> - {deal.price}
                    <Typography
                      key={deal.dealID}
                      fontSize={'32px'}
                      fontWeight='bold'
                      color={'primary.main'}
                    ></Typography>
                  </Box>
                )
              );
            })}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '50%',
          }}
        >
          <img
            src={currentGame.info.thumb}
            alt={currentGame.info.title}
            width='100%'
            max-width='100%'
          />
        </Box>
      </Card>
    )
  );
};

export default GamePage;

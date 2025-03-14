import { Box, Card, colors, Typography } from '@mui/material';
import StoreIcon from '../StoreIcon/StoreIcon';

const GameCard = ({ game }) => {
  const savings = +game.savings;

  return (
    <Card
      sx={{
        backgroundColor: 'background.paper',
        padding: '12px',
        borderRadius: '12px',
        borderColor: 'secondary.main',
        borderWidth: '6px',
        borderStyle: 'solid',
        boxShadow: '4px 8px 8px rgb(126, 0, 0)',
      }}
    >
      <Typography
        sx={{ color: 'primary.main', fontSize: '18px', fontWeight: 'bold' }}
      >
        {game.title}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <StoreIcon store={game.storeID} link={game.metacriticLink} />
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: '12px',
                textDecoration: 'line-through',
                marginRight: '6px',
                marginLeft: '6px',
              }}
            >
              {game.normalPrice}
            </Typography>
            <Typography
              sx={{
                color: 'primary.main',
                fontSize: '14px',
                fontWeight: 'bold',
                marginRight: '6px',
              }}
            >
              {game.salePrice}$
            </Typography>
            <Typography
              sx={{
                color: 'secondary.main',
              }}
            >
              {savings.toFixed(2)}%
            </Typography>
          </Box>
        </Box>
        <Box>
          <img src={game.thumb} alt='Game Thumb' />
        </Box>
      </Box>

      <p>{game.salePrice}</p>
      <p>{game.normalPrice}</p>
      <p>{game.isOnSale}</p>
      <p>{game.savings}</p>
      <p>{game.metacriticScore}</p>
      <p>{game.steamRatingText}</p>
      <p>{game.steamRatingPercent}</p>
      <p>{game.steamRatingCount}</p>
      <p>{game.steamAppID}</p>
      <p>{game.releaseDate}</p>
      <p>{game.lastChange}</p>
      <p>{game.dealRating}</p>
    </Card>
  );
};

export default GameCard;

import { Box, Card, Typography } from '@mui/material';
import StoreIcon from '../../../ui/StoreIcon/StoreIcon';

const SaleCard = ({ game }) => {
  const savings = `-${Math.round(game.savings)}%`;
  return (
    <Card
      sx={{
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Card Title and Savings */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 2,
        }}
      >
        <Typography
          variant={'h5'}
          sx={{
            color: 'text.primary',
            fontWeight: 'bold',
          }}
        >
          {game.title}
        </Typography>
        <Typography
          variant={'h5'}
          sx={{
            fontWeight: 'bold',
            backgroundColor: 'secondary.main',
            color: 'text.primary',
            padding: '4px',
            borderRadius: '4px',
          }}
        >
          {savings}
        </Typography>
      </Box>
      {/* Card Content */}
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        {/* Card Text and Links */}
        <Box sx={{ display: 'flex', alignItems: 'center', minWidth: '50%' }}>
          <StoreIcon store={game.storeID} />
          <Typography
            sx={{
              marginLeft: '4px',
              fontSize: '16px',
              color: 'text.secondary',
              textDecoration: 'line-through',
            }}
          >
            {game.normalPrice}
          </Typography>
          <Typography sx={{ marginLeft: '4px', fontSize: '16px' }}>
            {game.salePrice}$
          </Typography>
        </Box>
        {/* Card Image */}
        <Box
          sx={{
            flexShrink: 0, // 🔥 предотвращает растягивание
            maxHeight: '100%', // 🔥 изображение не больше высоты карточки
            maxWidth: '120px', // 🔥 ограничиваем ширину
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            loading='lazy'
            src={game.thumb}
            alt={`${game.title} Thumb`}
            style={{
              maxHeight: '100%', // 🔥 не превышает высоту карточки
              maxWidth: '100%', // 🔥 не растягивается больше своей ширины
              objectFit: 'contain', // 🔥 сохраняет пропорции
            }}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default SaleCard;

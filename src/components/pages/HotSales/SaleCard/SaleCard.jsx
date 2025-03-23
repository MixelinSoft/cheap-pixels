import { Box, Card, Divider, Link, Typography } from '@mui/material';
import StoreIcon from '../../../ui/StoreIcon/StoreIcon';
import metacriticLogo from '../../../../assets/icons/MetaCritic.svg';
import steamLogo from '../../../../assets/icons/stores/steam.svg';
import downloadIcon from '../../../../assets/icons/download.svg';

const SaleCard = ({ game }) => {
  const savings = `-${Math.round(game.savings)}%`;
  const releaseDate = new Date(game.releaseDate * 1000).toLocaleDateString();
  return (
    <Card
      sx={{
        minHeight: '320px',
        padding: '16px',
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
        <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: '50%' }}>
          {/* Release Date */}
          <Typography>
            {game.releaseDate !== 0 ? `Release Date: ${releaseDate}` : '\u00A0'}
          </Typography>
          {/* Store Link and Price */}
          <Link
            href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
            target='_blank'
            sx={{ display: 'flex', alignItems: 'center' }}
          >
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
          </Link>

          {/* Metacritic */}
          {game.metacriticScore > 0 && (
            <Link
              href={`https://www.metacritic.com${game.metacriticLink}`}
              target='_blank'
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 2,
                cursor: 'pointer',
              }}
            >
              <img src={metacriticLogo} width='32px' height='32px' />
              <Typography
                sx={{
                  marginLeft: '4px',
                  fontSize: '16px',
                  color: 'text.secondary',
                }}
              >
                {game.metacriticScore}/100
              </Typography>
            </Link>
          )}
          {/* Steam Rating */}
          {game.steamRatingText && (
            <Link
              href={`https://store.steampowered.com/app/${game.steamAppID}`}
              target='_blank'
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 0.5,
                cursor: 'pointer',
              }}
            >
              <Divider />
              {/* Steam Rating */}
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={steamLogo}
                  alt='Steam Logo'
                  width='32px'
                  height='32px'
                />
                <Typography
                  sx={{
                    marginLeft: '4px',
                    fontSize: '16px',
                    color: 'text.secondary',
                  }}
                >
                  {game.steamRatingText}
                </Typography>
              </Box>
              {/* Steam Rating Percent */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '32px',
                }}
              >
                <Typography
                  sx={{
                    display: 'block',
                    marginLeft: '4px',
                    fontSize: '16px',
                    color: 'text.secondary',
                  }}
                >
                  {game.steamRatingPercent}/100
                </Typography>
              </Box>
              {/* Steam Rating Count */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '36px',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={downloadIcon}
                    alt='Download Icon'
                    width='16px'
                    height='16px'
                    style={{ marginRight: '4px', marginBottom: '4px' }}
                  />
                  <Typography
                    sx={{
                      fontSize: '16px',
                      color: 'text.secondary',
                    }}
                  >
                    {game.steamRatingCount}
                  </Typography>
                </Box>
              </Box>
            </Link>
          )}
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

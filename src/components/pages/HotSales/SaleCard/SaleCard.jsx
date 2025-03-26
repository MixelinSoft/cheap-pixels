import { Box, Button, Card, Divider, Link, Typography } from '@mui/material';
import StoreIcon from '../../../ui/StoreIcon/StoreIcon';
import metacriticLogo from '../../../../assets/icons/MetaCritic.svg';
import steamLogo from '../../../../assets/icons/stores/steam.svg';
import downloadIcon from '../../../../assets/icons/download.svg';
import linkIcon from '../../../../assets/icons/link.svg';

const SaleCard = ({ game }) => {
  const savings = game.savings > 0 ? `-${Math.round(game.savings)}%` : null;
  const releaseDate = new Date(game.releaseDate * 1000).toLocaleDateString();
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '16px' }}>
      <Card
        sx={{
          position: 'relative',
          width: '300px',
          height: '360px',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'background-color 0.2s ease-in',
          '&:hover': {
            backgroundColor: 'background.light',
            boxShadow: '0px 0px 32px #640000',
          },
        }}
      >
        {/* Card Sale Badge */}
        {savings && (
          <Typography
            variant={'h6'}
            sx={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              fontWeight: 'bold',
              backgroundColor: 'secondary.main',
              color: 'text.primary',
              padding: '2px',
              borderRadius: '4px',
              boxShadow: '0px 0px 16px #640000',
              zIndex: 1,
            }}
          >
            {savings}
          </Typography>
        )}
        {/* Card Image */}
        <Box
          sx={{
            position: 'relative',
            height: '128px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            loading='lazy'
            src={game.thumb}
            alt={`${game.title} Thumb`}
            height='113px'
            style={{
              maxWidth: '100%',
              objectFit: 'contain',
              boxShadow: '0px 0px 16px #640000',
            }}
          />
        </Box>
        {/* Card Text Content */}
        <Box
          sx={{
            padding: '16px 16px 8px 16px',
            height: '100%',
          }}
        >
          {/* Card Title */}
          <Typography
            sx={{
              height: '4rem',
              textAlign: 'center',
              textWrap: 'balance',
              overflow: 'hidden',
              alignContent: 'center',
            }}
            variant='h5'
          >
            {game.title}
          </Typography>
          {/* Release Date */}
          <Typography sx={{ textAlign: 'center', color: 'text.secondary' }}>
            {game.releaseDate !== 0 ? `Release Date: ${releaseDate}` : '\u00A0'}
          </Typography>

          <Divider />
          {/* Metacritic and Steam Link and Score */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Metactitic Score */}
            {game.metacriticScore > 0 && (
              <Link
                href={`https://www.metacritic.com${game.metacriticLink}`}
                target='_blank'
                sx={{
                  width: '50%',
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
            {/* Steam Score */}
            {game.steamRatingText && (
              <Link
                href={`https://store.steampowered.com/app/${game.steamAppID}`}
                target='_blank'
                sx={{
                  width: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginTop: 2,
                  cursor: 'pointer',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <img src={steamLogo} width='32px' height='32px' />
                  <Typography
                    sx={{
                      marginLeft: '4px',
                      fontSize: '16px',
                      color: 'text.secondary',
                    }}
                  >
                    {game.steamRatingPercent}/100
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginTop: '2px',
                    marginLeft: '32px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <img src={downloadIcon} alt='Download Icon' width='18px' />
                  <Typography
                    sx={{
                      fontSize: '12px',
                      marginTop: '4px',
                      marginLeft: '4px',
                    }}
                  >
                    {game.steamRatingCount}
                  </Typography>
                </Box>
              </Link>
            )}
          </Box>
        </Box>
        {/* Card Link */}
        <Link
          href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}
          target='_blank'
          sx={{
            width: '100%',
            height: '128px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 8px 0 8px',
            backgroundColor: 'secondary.dark',
            transition: 'background-color 0.2s ease-in',
            '&:hover': {
              textDecoration: 'none',
              backgroundColor: 'secondary.main',
            },
          }}
        >
          <StoreIcon title store={game.storeID} />

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '100%',
              paddingRight: '4px',
            }}
          >
            <Typography
              sx={{
                fontSize: '14px',
                color: 'text.secondary',
                textDecoration: 'line-through',
              }}
            >
              {game.normalPrice}$
            </Typography>
            <Typography
              fontWeight='bold'
              sx={{
                color: 'text.primary',
                marginLeft: '4px',
                fontSize: '18px',
              }}
            >
              {game.salePrice}$
            </Typography>
          </Box>

          <img src={linkIcon} alt='Link Icon' width='16px' height='16px' />
        </Link>
      </Card>
    </Box>
  );
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
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: 'fit-content',
              padding: '8px',
              border: '1px solid secondary.main',
              backgroundColor: 'secondary.dark',
            }}
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

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
          '&:hover .thumb': {
            transform: 'scale(1.03)',
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
            class='thumb'
            loading='lazy'
            src={game.thumb}
            alt={`${game.title} Thumb`}
            height='113px'
            style={{
              // transform: 'scale(1)',
              maxWidth: '100%',
              objectFit: 'contain',
              boxShadow: '0px 0px 16px #640000',
              transition: 'transform 0.2s ease-in-out',
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
            {game.normalPrice !== game.salePrice && (
              <Typography
                sx={{
                  fontSize: '14px',
                  color: 'text.secondary',
                  textDecoration: 'line-through',
                }}
              >
                {game.normalPrice}$
              </Typography>
            )}
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
};

export default SaleCard;

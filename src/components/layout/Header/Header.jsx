import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import menuIcon from '../../../assets/icons/menu.svg';
import logo from '../../../assets/images/logo.webp';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../../store/slices/uiSlice';

const Header = () => {
  const dispatch = useDispatch();

  const showAsideMenuHandler = () => {
    dispatch(uiActions.setShowAsideMenu(true));
  };
  return (
    <AppBar
      position={'sticky'}
      sx={{
        backgroundColor: 'background.default',
        borderRadius: '0 0 12px 12px',
        height: '64px',
      }}
    >
      <Toolbar
        sx={{
          height: '64px',
        }}
      >
        <IconButton
          size='large'
          edge='start'
          sx={{ mr: 2 }}
          onClick={showAsideMenuHandler}
        >
          <img
            src={menuIcon}
            alt='Menu Button'
            width={'32px'}
            height={'32px'}
          />
        </IconButton>
        <Box sx={{ height: '48px' }}>
          <img src={logo} alt='Logo Image' height='100%' />
        </Box>
        {/* <IconButton size='large' edge='end' sx={{ ml: 2 }}>
          <img
            src={menuIcon}
            alt='Theme Button'
            width={'32px'}
            height={'32px'}
          />
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

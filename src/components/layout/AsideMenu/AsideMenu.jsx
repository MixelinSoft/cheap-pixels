import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import closeIcon from '../../../assets/icons/close.svg';
import { menuItems } from '../../../data/data';
import AsideMenuItem from './AsideMenuItem/AsideMenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../../store/slices/uiSlice';

const AsideMenu = () => {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.ui.showAsideMenu);

  const closeMenuHandler = () => {
    dispatch(uiActions.setShowAsideMenu(false));
  };
  return (
    <Drawer
      anchor='left'
      open={isShow}
      onClose={closeMenuHandler}
      PaperProps={{
        sx: {
          backgroundColor: 'background.default',
          width: '360px',
        },
      }}
      sx={{}}
    >
      <Box sx={{}}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant='h6' color={'text.primary'}>
            Menu
          </Typography>
          <IconButton size='large' edge='end' onClick={closeMenuHandler}>
            <img
              src={closeIcon}
              alt='Menu Button'
              width={'32px'}
              height={'32px'}
            />
          </IconButton>
        </Toolbar>
        <Divider sx={{ backgroundColor: 'secondary.dark' }} />
        <List>
          {menuItems.map((item) => {
            return <AsideMenuItem key={item.id} item={item} />;
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default AsideMenu;

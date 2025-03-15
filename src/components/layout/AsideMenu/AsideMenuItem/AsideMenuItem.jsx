import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { uiActions } from '../../../../store/slices/uiSlice';

const AsideMenuItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateHandler = () => {
    dispatch(uiActions.setShowAsideMenu(false));
    navigate(item.link);
  };
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={navigateHandler}>
        <ListItemIcon>
          <img
            src={item.icon}
            alt='Menu Item Icon'
            width='24px'
            height='24px'
          />
        </ListItemIcon>
        <ListItemText sx={{ color: 'text.primary' }}>{item.title}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default AsideMenuItem;

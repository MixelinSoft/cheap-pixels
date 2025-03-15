import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const AsideMenuItem = ({ item }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
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

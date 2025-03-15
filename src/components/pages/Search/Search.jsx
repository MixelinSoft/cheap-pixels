import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { searchGames } from '../../../services/web';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { gamesActions } from '../../../store/slices/gamesSlice';

const Search = () => {
  const dispatch = useDispatch();
  const findedGames = useSelector((state) => state.games.findedGames);
  const navigate = useNavigate();
  // Debounce
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchTerm.length > 2) {
        setDebouncedTerm(searchTerm);
      } else {
        dispatch(searchGames([]));
      }
    }, 1000);
    return () => clearTimeout(handler);
  }, [searchTerm, dispatch]);

  const handleGameClick = (gameID) => {
    dispatch(gamesActions.setCurrentGame(null));
    navigate(`/game/${gameID}`);
  };

  useEffect(() => {
    if (debouncedTerm) {
      dispatch(searchGames(debouncedTerm));
    }
  }, [debouncedTerm, dispatch]);
  useEffect(() => {
    dispatch(gamesActions.setFindedGames([]));
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <TextField
        sx={{ width: '100%', maxWidth: '500px' }}
        label='Start typing to search'
        variant='outlined'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <List sx={{ width: '100%', maxWidth: '500px', border: '1px solid red' }}>
        {findedGames.map((game) => {
          return (
            <ListItem key={game.gameID}>
              <ListItemButton onClick={() => handleGameClick(game.gameID)}>
                <ListItemIcon sx={{ width: '128px' }}>
                  <img
                    src={game.thumb}
                    alt='Game Thumb'
                    height='45px'
                    loading='lazy'
                  />
                </ListItemIcon>
                <ListItemText primary={game.external} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Search;

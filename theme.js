import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 8px #640000',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          boxShadow: '2px 0px 4px  #640000',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(255, 23, 68, 0.3)',
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.3s ease',
          color: '#B0B0B0',
          '&:hover': {
            backgroundColor: 'rgba(255, 23, 68, 0.3)',
          },
        },
      },
    },
  },
  palette: {
    mode: 'dark', // Тёмная тема
    primary: {
      main: '#FF1744', // Ярко-красный
    },
    secondary: {
      main: '#D50000', // Темно-красный
      dark: '#640000', // Бордовый
    },
    background: {
      default: '#121212', // Глубокий чёрный фон
      paper: '#1E1E1E', // Чуть светлее для карточек
    },
    text: {
      primary: '#F5F5F5', // Белый текст
      secondary: '#B0B0B0', // Серый текст
    },
  },
});

export default theme;

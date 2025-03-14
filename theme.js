import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Тёмная тема
    primary: {
      main: '#FF1744', // Ярко-красный
    },
    secondary: {
      main: '#D50000', // Темно-красный
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

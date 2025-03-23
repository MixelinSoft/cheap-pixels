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
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 0px 16px #640000',
          padding: '16px',
          borderRadius: '16px',
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
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: '#B0B0B0',
          '&.Mui-selected': {
            color: '#F5F5F5',
            backgroundColor: '#640000',
            '&:hover': {
              backgroundColor: '#FF1744',
            },
          },
          '&:hover': {
            color: '#F5F5F5',
            backgroundColor: '#FF1744',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#B0B0B0',
          textDecoration: 'none',
          '&:hover': {
            color: '#B0B0B0',
            textDecoration: 'underline',
          },
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF1744',
    },
    secondary: {
      main: '#D50000',
      dark: '#640000',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#F5F5F5',
      secondary: '#B0B0B0',
    },
  },
});

export default theme;

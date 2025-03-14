// Import React
import { createRoot } from 'react-dom/client';
// Import Redux
import store from './store/store.js';
import { Provider } from 'react-redux';
//Import Global Styles
import './index.css';
// Import Theme
import { ThemeProvider } from '@mui/material';
import theme from '../theme.js';
// Import Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// Import Main Component
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
);

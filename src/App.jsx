import { Box } from '@mui/material';
import Deals from './components/pages/Deals/Deals';
import Header from './components/layout/Header/Header';
import AsideMenu from './components/layout/AsideMenu/AsideMenu';
import { Route, Routes } from 'react-router-dom';
import { menuItems } from './data/data';
import Home from './components/pages/Home/Home';
import Main from './components/layout/Main/Main';

const App = () => {
  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
      <Header />
      <AsideMenu />
      <Main>
        <Routes>
          {menuItems.map((item) => {
            return (
              <Route
                key={item.title}
                path={item.path}
                element={<item.component />}
              />
            );
          })}
        </Routes>
      </Main>
    </Box>
  );
};

export default App;

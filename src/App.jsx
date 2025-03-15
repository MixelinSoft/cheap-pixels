import { Box } from '@mui/material';
import Deals from './components/pages/Deals/Deals';
import Header from './components/layout/Header/Header';
import AsideMenu from './components/layout/AsideMenu/AsideMenu';
import { Route, Routes } from 'react-router-dom';
import { menuItems } from './data/data';
import Home from './components/pages/Home/Home';
import Main from './components/layout/Main/Main';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';

const App = () => {
  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
      <Header />
      <AsideMenu />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          {menuItems.map((item) => {
            return (
              <Route
                key={item.title}
                path={item.link}
                element={<item.component />}
              />
            );
          })}
          {/* <Route path='*' element={<PageNotFound />} /> */}
        </Routes>
      </Main>
    </Box>
  );
};

export default App;

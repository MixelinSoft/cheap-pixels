import sales from '../assets/icons/menu/sale.svg';
import home from '../assets/icons/menu/home.svg';
import favorite from '../assets/icons/menu/favorite.svg';
import search from '../assets/icons/menu/search.svg';

import Home from '../components/pages/Home/Home';
import Search from '../components/pages/Search/Search';

export const menuItems = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    icon: home,
    component: Home,
  },
  // {
  //   id: 2,
  //   title: 'Favorites',
  //   link: '/favorites',
  //   icon: favorite,
  // },
  {
    id: 3,
    title: 'Search Games',
    link: '/search',
    icon: search,
    component: Search,
  },
  // {
  //   id: 3,
  //   title: 'Preferences',
  //   link: '/preferences',
  //   icon: 'deals',
  // },
  // {
  //   id: 4,
  //   title: 'Hot Sales',
  //   link: '/hot-sales',
  //   icon: sales,
  // },
];

import sales from '../assets/icons/menu/sale.svg';
import home from '../assets/icons/menu/home.svg';
import favorite from '../assets/icons/menu/favorite.svg';
import search from '../assets/icons/menu/search.svg';

import Home from '../components/pages/Home/Home';

export const menuItems = [
  {
    id: 1,
    title: 'Home',
    link: '/home',
    icon: home,
    component: Home,
  },
  // {
  //   id: 2,
  //   title: 'Favorites',
  //   link: '/favorites',
  //   icon: favorite,
  // },
  // {
  //   id: 3,
  //   title: 'Search Games',
  //   link: '/search',
  //   icon: search,
  // },
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

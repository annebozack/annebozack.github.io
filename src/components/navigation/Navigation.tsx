import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { NavRoutes } from '../..//types';

import Hamburger from '../hamburger/Hamburger';
import { Header, NavBar } from './navigation.css';

const routeHeaders: { [mykey in NavRoutes]: string } = {
  [NavRoutes.Root]: 'Anne Bozack',
  [NavRoutes.About]: 'About',
  [NavRoutes.Reasearch]: 'Research',
  [NavRoutes.Projects]: 'Projects',
};

const Navigation: FC = () => {
  const { pathname } = useLocation();

  return (
    <NavBar>
      <Hamburger />
      <Header>{routeHeaders[pathname as NavRoutes]}</Header>
    </NavBar>
  );
};

export default Navigation;

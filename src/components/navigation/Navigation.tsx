import React, { FC, useState } from 'react';

import Hamburger from '../hamburger/Hamburger';
import { NavRoutes } from '../../types';
import { Header, NavItem } from './navigation.css';

const navConfig = [
  { display: 'Anne Bozack', route: NavRoutes.Root },
  { display: 'About', route: NavRoutes.About },
  { display: 'Research', route: NavRoutes.Reasearch },
  { display: 'Projects', route: NavRoutes.Projects },
];

const Navigation: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationOptions = navConfig.map(({ display, route }) => (
    <NavItem key={route} to={route}>
      {display}
    </NavItem>
  ));

  return (
    <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}>
      {navigationOptions}
    </Hamburger>
  );
};

export default Navigation;

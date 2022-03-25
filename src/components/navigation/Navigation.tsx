import React, { FC } from 'react';

import { NavRoutes } from '../../types';
import { NavigationWrapper, Header, NavItem } from './navigation.css';

const navConfig = [
  { display: 'About', route: NavRoutes.About },
  { display: 'Research', route: NavRoutes.Reasearch },
  { display: 'Projects', route: NavRoutes.Projects },
];

const Navigation: FC = () => {
  return (
    <NavigationWrapper>
      <Header to={NavRoutes.Root}>Anne Bozack</Header>
      {navConfig.map(({ display, route }) => (
        <NavItem key={route} to={route}>
          {display}
        </NavItem>
      ))}
    </NavigationWrapper>
  );
};

export default Navigation;

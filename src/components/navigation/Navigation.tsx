import React, { FC } from 'react';

import Hamburger from '../hamburger/Hamburger';
import { Header, NavBar } from './navigation.css';

const Navigation: FC = () => {
  return (
    <NavBar>
      <Hamburger />
      <Header>Test</Header>
    </NavBar>
  );
};

export default Navigation;

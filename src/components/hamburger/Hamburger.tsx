import React, { FC, useState } from 'react';
import { NavRoutes } from '../../types';
import { HamburgerWrapper, HamburgerPatty, HamburgerContent, NavItem, GoogleyEye, Nose } from './hamburger.css';

const navConfig = [
  { display: 'Anne Bozack', route: NavRoutes.Root },
  { display: 'About', route: NavRoutes.About },
  { display: 'Research', route: NavRoutes.Reasearch },
  { display: 'Projects', route: NavRoutes.Projects },
];

const Hamburger: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationOptions = navConfig.map(({ display, route }) => (
    <NavItem key={route} to={route}>
      {display}
    </NavItem>
  ));

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HamburgerWrapper onClick={handleHamburgerClick}>
      <HamburgerPatty />
      <HamburgerPatty />
      <HamburgerPatty />
      <HamburgerContent isOpen={isOpen}>
        {navigationOptions}
        <GoogleyEye side="left" />
        <Nose />
        <GoogleyEye side="right" />
      </HamburgerContent>
    </HamburgerWrapper>
  );
};

export default Hamburger;

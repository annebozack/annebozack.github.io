import React, { FC, useState } from 'react';
import { NavRoutes } from '../../types';
import { HamburgerWrapper, HamburgerPatty, HamburgerContent, NavItem, Triangle } from './hamburger.css';

const navConfig = [
  { display: 'Anne Bozack', route: NavRoutes.Root },
  { display: 'About', route: NavRoutes.About },
  { display: 'Research', route: NavRoutes.Reasearch },
  { display: 'Projects', route: NavRoutes.Projects },
];

const Hamburger: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationOptions = navConfig.map(({ display, route }) => (
    <NavItem key={route} to={route} isOpen={isOpen}>
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
      <Triangle isOpen={isOpen} />
      <HamburgerContent isOpen={isOpen}>{navigationOptions}</HamburgerContent>
    </HamburgerWrapper>
  );
};

export default Hamburger;

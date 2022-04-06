import React, { FC } from 'react';
import { HamburgerWrapper, HamburgerPatty, HamburgerContent, MenuTriangle } from './hamburger.css';

interface HambugerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const Hamburger: FC<HambugerProps> = ({ isOpen, setIsOpen, children }) => {
  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HamburgerWrapper onClick={handleHamburgerClick}>
      <HamburgerPatty />
      <HamburgerPatty />
      <HamburgerPatty />
      {/* <MenuTriangle /> */}
      <HamburgerContent isOpen={isOpen}>{children}</HamburgerContent>
    </HamburgerWrapper>
  );
};

export default Hamburger;

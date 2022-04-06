import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HamburgerWrapper = styled.button`
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const HamburgerPatty = styled.div`
  height: 5px;
  width: 40px;
  background-color: black;
  margin: 2px 0;
  border-radius: 2px;
`;

interface HamburgerContentProps {
  isOpen: boolean;
}
export const HamburgerContent = styled.div<HamburgerContentProps>`
  display: flex;
  position: absolute;
  flex-direction: column;
  // padding: 15px;
  align-items: flex-start;
  justify-content: center;
  border: 5px solid black;
  border-radius: 4px;
  background-color: white;
  top: 50px;
  overflow: hidden;
  // width: ${({ isOpen }) => (isOpen ? '200px' : 0)};
  width: 200px;
  height: ${({ isOpen }) => (isOpen ? '200px' : 0)};
  // height: 200px;
  opacity: ${({ isOpen }) => (isOpen ? 100 : 0)};

  transition: all 0.3s ease-in-out;
`;

interface NavItemProps {
  isOpen: boolean;
}
export const NavItem = styled(Link)<NavItemProps>`
  color: black;
  font-size: 20pt;
  font-weight: 600;
  margin-bottom: 10px;
  min-width: 200px;
`;

interface TriangleProps {
  isOpen: boolean;
}
export const Triangle = styled.div<TriangleProps>`
  content: '';
  position: absolute;
  top: 36px;
  left: 10px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid black;

  opacity: ${({ isOpen }) => (isOpen ? 100 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HamburgerWrapper = styled.button`
  display: flex;
  position: absolute;
  flex-direction: column;
  left: 0;
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
  align-items: flex-start;
  justify-content: center;
  border: 5px solid black;
  border-radius: 4px;
  background-color: white;
  padding: 15px;
  top: 50px;
  left: ${({ isOpen }) => (isOpen ? '5px' : '-500px')};
  transition: all 0.4s ease-in-out;

  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: -5px;
    width: 0;
    height: 0;
    margin-left: 5px;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid black;
  }
`;

export const NavItem = styled(Link)`
  color: black;
  font-size: 20pt;
  font-weight: 600;
  margin-bottom: 10px;
  min-width: 200px;
`;

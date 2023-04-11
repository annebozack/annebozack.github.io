import { Link } from 'react-router-dom';
import { device } from '../..//styles/devices';
import styled from 'styled-components';

export const HamburgerWrapper = styled.button`
  display: flex;
  position: absolute;
  flex-direction: column;
  left: 10px;
  cursor: pointer;
  @media ${device.laptop} {
    left: 20px;
  }
`;

export const HamburgerPatty = styled.div`
  height: 3px;
  width: 30px;
  margin: 2px 0;
  background-color: black;
  border-radius: 2px;

  @media ${device.laptop} {
    height: 5px;
    width: 40px;
    margin: 2px 0;
  }
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
  white-space: nowrap;
  border: 3px solid black;
  border-radius: 25px;
  background-color: white;
  padding: 15px 15px 40px 15px;
  top: 60px;
  left: ${({ isOpen }) => (isOpen ? '-5px' : '-160px')};
  transition: all 0.3s ease-in-out;

  @media ${device.laptop} {
    border: 5px solid black;
    padding: 15px 15px 50px 15px;
    left: ${({ isOpen }) => (isOpen ? '-5px' : '-195px')};
  }

  &:before {
    content: '';
    position: absolute;
    top: -18px;
    left: 18px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid black;

    @media ${device.laptop} {
      top: -20px;
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: -18px;
    right: 18px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid black;

    @media ${device.laptop} {
      top: -20px;
    }
  }
`;

interface NavItemProps {
  $isOpen: boolean;
}
export const NavItem = styled(Link)<NavItemProps>`
  color: black;
  font-size: 16pt;
  font-weight: 600;
  margin-bottom: 10px;
  text-decoration: none;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;

  @media ${device.laptop} {
    font-size: 20pt;
  }
`;

interface GoogleyEyeProps {
  side: 'left' | 'right';
}
export const GoogleyEye = styled.div<GoogleyEyeProps>`
  position: absolute;
  width: 40px;
  height: 30px;
  border-radius: 20px;
  background-color: black;
  bottom: 6px;
  left: ${({ side }) => (side === 'left' ? '26px' : 'auto')};
  right: ${({ side }) => (side === 'left' ? 'auto' : '18px')};

  @media ${device.laptop} {
    left: ${({ side }) => (side === 'left' ? '38px' : 'auto')};
    right: ${({ side }) => (side === 'left' ? 'auto' : '24px')};
  }

  &:before {
    content: '';
    width: 45px;
    height: 33px;
    position: absolute;
    border-radius: 38px;
    background: white;
    left: ${({ side }) => (side === 'left' ? '0px' : '0px')};
    top: 3px;
  }

  &:after {
    position: absolute;
    content: '';
    width: 15px;
    height: 13px;
    border-radius: 53px;
    background: black;
    left: 13px;
    top: 11px;
  }
`;

export const Nose = styled.div`
  content: '';
  position: absolute;
  top: 186px;
  left: 77px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid black;

  @media ${device.laptop} {
    top: 219px;
    left: 92px;
  }
`;

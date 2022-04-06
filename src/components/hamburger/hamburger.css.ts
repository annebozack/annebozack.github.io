import styled from 'styled-components';

export const HamburgerWrapper = styled.button`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 26px 20px 20px 20px;
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
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: relative;
  flex-direction: column;
  padding: 15px;
  align-items: flex-start;
  border: 5px solid black;
  border-radius: 4px;
  margin-top: 20px;
  background-color: white;

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

export const MenuTriangle = styled.div``;

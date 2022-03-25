import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 300px;
`;

export const Header = styled(Link)`
  color: black;
  font-size: 16pt;
  margin-bottom: 20px;
`;

export const NavItem = styled(Link)`
  color: black;
  font-size: 12pt;
  margin-bottom: 10px;
`;

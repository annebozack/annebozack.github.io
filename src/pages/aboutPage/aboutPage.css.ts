import { device } from '../../styles/devices';
import styled from 'styled-components';

export const AboutPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const Content = styled.div`
  font-size: 20px;
  line-height: 1.5;

  @media ${device.laptop} {
    font-size: 24px;
  }
`;

export const Header = styled.h1``;

export const StyledLink = styled.a`
  text-decoration: underline;

  &:visited {
    color: blue;
  }
`;

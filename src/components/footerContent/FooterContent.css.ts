import styled from 'styled-components';
import { device } from '../../styles/devices';

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: white;
  padding: 10px 10px 10px 10px;
  flex-wrap: wrap;
  font-size: 12px;

  @media ${device.laptop} {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: white;
    padding: 10px 20px 20px 20px;
    flex-wrap: wrap;
    font-size: 16px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: underline;
  color: black;
  margin-right: 20px;
  margin-top: 10px;

  &:visited {
    color: black;
  }

  @media ${device.laptop} {
    text-decoration: underline;
    color: black;
    margin-right: 20px;
    margin-top: 10px;

    &:visited {
      color: black;
    }
  }
`;

import styled from 'styled-components';
import { device } from '../../styles/devices';

export const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const LandingImage = styled.img`
  width: 340px;
  margin-top: 100px;

  @media ${device.laptop} {
    width: 850px;
    margin-top: 50px;
  }
`;

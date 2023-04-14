import { device } from '../../styles/devices';
import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  flex: 1;
  @media ${device.laptop} {
    padding: 50px;
  }
`;

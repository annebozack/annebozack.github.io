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
  align-items: center;
  flex: 1;
  padding: 30px;

  @media ${device.laptop} {
    padding: 50px;
  }
`;

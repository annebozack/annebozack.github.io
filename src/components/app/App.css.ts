import { device } from '../../styles/devices';
import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  @media ${device.laptop} {
    padding: 50px;
  }
`;

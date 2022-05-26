import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: white;
  padding: 20px;
  border-top: 3px solid black;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  margin-right: 20px;

  &:visited {
    color: black;
  }
`;

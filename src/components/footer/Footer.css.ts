import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: center;
  justify-content: flex-start;
  position: sticky;
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

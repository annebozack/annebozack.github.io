import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: white;
  padding: 10px 20px 20px 20px;
  border-top: 3px solid black;
  flex-wrap: wrap;
`;

export const StyledLink = styled.a`
  text-decoration: underline;
  color: black;
  margin-right: 20px;
  margin-top: 10px;

  &:visited {
    color: black;
  }
`;

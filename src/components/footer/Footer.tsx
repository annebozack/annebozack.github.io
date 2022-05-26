import React, { FC } from 'react';
import { FooterWrapper, StyledLink } from './Footer.css';

const Footer: FC = () => {
  return (
    <FooterWrapper>
      {' '}
      <StyledLink href="https://github.com/annebozack">Github</StyledLink>
      <StyledLink href="https://scholar.google.com/citations?user=kSzZe7QAAAAJ&hl=en">Google Scholar </StyledLink>
      <StyledLink href="https://www.linkedin.com//inStyledLinknnebozack/">LinkedIn </StyledLink>
      <StyledLink href="https://pubmed.ncbi.nlm.nih.gov/?term=anne+bozack&sort=date">PubMed </StyledLink>
      <StyledLink href="https://osf.io/c4ghz/">OSF </StyledLink>
    </FooterWrapper>
  );
};

export default Footer;

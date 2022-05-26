import React, { FC } from 'react';
import { FooterWrapper, StyledLink } from './Footer.css';

const Footer: FC = () => {
  return (
    <FooterWrapper>
      {' '}
      <StyledLink target="_blank" href="https://github.com/annebozack">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="https://scholar.google.com/citations?user=kSzZe7QAAAAJ&hl=en">
        Google Scholar{' '}
      </StyledLink>
      <StyledLink target="_blank" href="https://www.linkedin.com//inStyledLinknnebozack/">
        LinkedIn{' '}
      </StyledLink>
      <StyledLink target="_blank" href="https://pubmed.ncbi.nlm.nih.gov/?term=anne+bozack&sort=date">
        PubMed{' '}
      </StyledLink>
      <StyledLink target="_blank" href="https://osf.io/c4ghz/">
        OSF{' '}
      </StyledLink>
    </FooterWrapper>
  );
};

export default Footer;

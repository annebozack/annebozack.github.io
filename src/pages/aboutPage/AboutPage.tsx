import React, { FC } from 'react';
import { AboutPageWrapper, Content, StyledLink } from './aboutPage.css';

const AboutPage: FC = () => {
  return (
    <AboutPageWrapper>
      <Content>
        Anne Bozack is a postdoctoral fellow in the
        <StyledLink target="_blank" href="https://publichealth.berkeley.edu/research/cardenas-lab/" rel="noreferrer">
          Cardenas lab
        </StyledLink>
        in the Division of Environmental Health Sciences in the University of California, Berkeley School of Public
        Health. Her research focuses on the impact of environmental exposures on the molecular level and effects of
        nutrition. Her current projects investigate the associations between chronic exposure to metals and DNA
        methylation. Anne holds a Ph.D. in Environmental Health Sciences and M.P.H. in Sociomedical Sciences from
        Columbia University, and B.A. degrees in Environmental Science and Architecture from the University of
        California, Berkeley.
      </Content>
    </AboutPageWrapper>
  );
};

export default AboutPage;

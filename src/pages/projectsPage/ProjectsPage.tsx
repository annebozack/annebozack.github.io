import React, { FC } from 'react';
import { ProjectsPageWrapper, StyledLink } from './projectsPage.css';

const ProjectsPage: FC = () => {
  return (
    <ProjectsPageWrapper>
      <p>
        <StyledLink target="_blank" href="https://github.com/annebozack/EWASplot">
          EWASplot: ggplot2 based package for plotting EWAS results
        </StyledLink>
      </p>
      <p>
        <StyledLink target="_blank" href="https://github.com/annebozack/activityPlotting">
          Plotting Strava activities
        </StyledLink>
      </p>
      <p>
        <StyledLink target="_blank" href="https://www.instagram.com/annebozack/">
          Photography
        </StyledLink>
      </p>
    </ProjectsPageWrapper>
  );
};

export default ProjectsPage;

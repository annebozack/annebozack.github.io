import React, { FC } from 'react';
import { LandingPageWrapper, LandingImage } from './landingPage.css';
import Background from '../../assets/background.gif';

const LandingPage: FC = () => {
  return (
    <LandingPageWrapper>
      <LandingImage src={Background} />
    </LandingPageWrapper>
  );
};

export default LandingPage;

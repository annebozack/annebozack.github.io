import React, { FC } from 'react';
import { LandingPageWrapper, Header } from './landingPage.css';
import LandingImage from '../../assets/letters-white.gif';

const LandingPage: FC = () => {
  return (
    <LandingPageWrapper>
      <Header>Anne Bozack</Header>

      {/* <img src={LandingImage} /> */}
    </LandingPageWrapper>
  );
};

export default LandingPage;

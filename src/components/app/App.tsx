import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavRoutes } from '../../types';

import GlobalStyle from '../../global.css';
import Navigation from '../navigation/Navigation';
import { AppWrapper, Content } from './App.css';
import LandingPage from '../../pages/landingPage/LandingPage';
import AboutPage from '../../pages/aboutPage/AboutPage';
import ResearchPage from '../../pages/researchPage/ResearchPage';
import ProjectsPage from '../../pages/projectsPage/ProjectsPage';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AppWrapper>
          <Navigation />
          <Content>
            <Routes>
              <Route path={NavRoutes.Root} element={<LandingPage />} />
              <Route path={NavRoutes.About} element={<AboutPage />} />
              <Route path={NavRoutes.Reasearch} element={<ResearchPage />} />
              <Route path={NavRoutes.Projects} element={<ProjectsPage />} />
            </Routes>
          </Content>
        </AppWrapper>
      </BrowserRouter>
    </>
  );
};

export default App;

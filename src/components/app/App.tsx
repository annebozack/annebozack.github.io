import React, { FC, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { NavRoutes } from '../../types';

import GlobalStyle from '../../global.css';
import Navigation from '../navigation/Navigation';
import { AppWrapper, Content } from './App.css';
import LandingPage from '../../pages/landingPage/LandingPage';
import AboutPage from '../../pages/aboutPage/AboutPage';
import ResearchPage from '../../pages/researchPage/ResearchPage';
import ProjectsPage from '../../pages/projectsPage/ProjectsPage';
import Footer from '../footer/Footer';

const App: FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <GlobalStyle />
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

        <Footer />
      </AppWrapper>
    </>
  );
};

export default App;

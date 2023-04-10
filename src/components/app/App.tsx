import React, { FC, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { NavRoutes } from '../../types';

import Navigation from '../navigation/Navigation';
import { Content } from './App.css';
import LandingPage from '../../pages/landingPage/LandingPage';
import AboutPage from '../../pages/aboutPage/AboutPage';
import ResearchPage from '../../pages/researchPage/ResearchPage';
import ProjectsPage from '../../pages/projectsPage/ProjectsPage';
import FooterContent from '../footerContent/FooterContent';
import { AppShell, Footer, Header } from '@mantine/core';

const App: FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AppShell
      padding={0}
      header={
        <Header style={{ background: 'rgba(255, 255, 255, 0.75)' }} height={60}>
          <Navigation />
        </Header>
      }
      footer={
        <Footer height={60}>
          <FooterContent />
        </Footer>
      }
    >
      <Content>
        <Routes>
          <Route path={NavRoutes.Root} element={<LandingPage />} />
          <Route path={NavRoutes.About} element={<AboutPage />} />
          <Route path={NavRoutes.Reasearch} element={<ResearchPage />} />
          <Route path={NavRoutes.Projects} element={<ProjectsPage />} />
        </Routes>
      </Content>
    </AppShell>
  );
};

export default App;

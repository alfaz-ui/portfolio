import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Toaster } from './components/ui/toaster';
import SEOHead from './components/SEOHead';
import Header from './components/Header';
import EnhancedHeroSection from './components/EnhancedHeroSection';
import EnhancedAboutSection from './components/EnhancedAboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EnhancedContactSection from './components/EnhancedContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="App">
          <SEOHead />
          <Header />
          <main>
            <div id="hero">
              <EnhancedHeroSection />
            </div>
            <EnhancedAboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <EnhancedContactSection />
          </main>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
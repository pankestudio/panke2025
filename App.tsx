import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectHighlight from './components/ProjectHighlight';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { siteContent, Project } from './lib/content';
import { useBodyScrollLock } from './hooks/useBodyScrollLock';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useBodyScrollLock(!!selectedProject);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-white text-black font-sans">
      <Header />
      <main>
        <Hero content={siteContent.hero} />
        <AboutSection content={siteContent.about} />
        <ProjectHighlight 
          project={siteContent.projectHighlight} 
          onProjectSelect={handleOpenModal} 
        />
        <Gallery 
          content={siteContent.gallery} 
          onProjectSelect={handleOpenModal} 
        />
        <ContactSection email={siteContent.contact.email} />
      </main>
      <Footer />
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;

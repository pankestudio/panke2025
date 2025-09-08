import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProjectHighlight from './components/ProjectHighlight';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { useBodyScrollLock } from './hooks/useBodyScrollLock';

// Define the Project and SiteContent types here, as they are no longer imported
export interface Project {
  id: number;
  tag?: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
}

interface SiteContent {
  hero: {
    headline: string;
    subtitle: string;
    imageUrl: string;
  };
  about: {
    column1: {
      title: string;
      text: string;
    };
    column2: {
      title: string;
      text: string;
    };
  };
  projectHighlight: Project;
  gallery: {
    title: string;
    description: string;
    projects: Project[];
  };
  contact: {
    email: string;
  };
}


const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [siteContent, setSiteContent] = useState<SiteContent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useBodyScrollLock(!!selectedProject);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/content');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: SiteContent = await response.json();
        setSiteContent(data);
      } catch (error) {
        console.error("Failed to fetch site content:", error);
        setError("Failed to load content. Please try again later.");
      }
    };

    fetchContent();
  }, []);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  if (error) {
    return <div className="h-screen w-full flex items-center justify-center text-red-500">{error}</div>;
  }

  if (!siteContent) {
    return <div className="h-screen w-full flex items-center justify-center">Loading...</div>;
  }

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
      <Footer email={siteContent.contact.email} />
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;

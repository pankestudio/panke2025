import React from 'react';
import { Project } from '../lib/content';
import LazyImage from './LazyImage';
import SectionHeader from './SectionHeader';

interface GalleryContent {
  title: string;
  description: string;
  projects: Project[];
}

interface GalleryProps {
  content: GalleryContent;
  onProjectSelect: (project: Project) => void;
}

const Gallery: React.FC<GalleryProps> = ({ content, onProjectSelect }) => {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={content.title} description={content.description} />
        <div className="mt-12 grid gap-4 grid-cols-2 md:grid-cols-3">
          {content.projects.map((project) => (
            <button 
              key={project.id} 
              onClick={() => onProjectSelect(project)}
              className="aspect-square bg-gray-200 group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              aria-label={`View details for ${project.title}`}
            >
              <LazyImage src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

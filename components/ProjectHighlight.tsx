import React from 'react';
import { Project } from '../lib/content';

interface ProjectHighlightProps {
  project: Project;
  onProjectSelect: (project: Project) => void;
}

const ProjectHighlight: React.FC<ProjectHighlightProps> = ({ project, onProjectSelect }) => {
  return (
    <section id="projects" className="w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
        <div className="flex items-center justify-center p-8 md:p-16">
          <div className="max-w-md">
            <h3 className="text-sm uppercase tracking-widest text-gray-500 font-heading">{project.tag}</h3>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight uppercase font-heading">{project.title}</h2>
            <p className="mt-6 text-lg text-gray-700">{project.description}</p>
            <button 
              onClick={() => onProjectSelect(project)}
              className="mt-8 inline-block text-black font-semibold hover:text-gray-600 transition-colors duration-200"
            >
              VIEW PROJECT &rarr;
            </button>
          </div>
        </div>
        <div className="bg-cover bg-center h-96 md:h-auto" style={{ backgroundImage: `url('${project.imageUrl}')` }}>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlight;

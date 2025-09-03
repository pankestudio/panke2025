import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase font-heading">{title}</h2>
      <p className="mt-4 text-lg text-gray-600">{description}</p>
    </div>
  );
};

export default SectionHeader;

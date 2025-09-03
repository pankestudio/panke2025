import React from 'react';

interface HeroContent {
  headline: string;
  subtitle: string;
  imageUrl: string;
}

interface HeroProps {
  content: HeroContent;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="home" className="h-screen w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url('${content.imageUrl}')` }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative text-center text-white p-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase font-heading">{content.headline}</h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">{content.subtitle}</p>
      </div>
    </section>
  );
};

export default Hero;

import React, { useEffect, useRef, useState } from 'react';

interface AboutContent {
  column1: {
    title: string;
    text: string;
  };
  column2: {
    title: string;
    text: string;
  };
}

interface AboutSectionProps {
  content: AboutContent;
}

const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.25 // Trigger when 25% of the element is visible
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const transitionBase = "transition-all duration-1000 ease-out";

  return (
    <section 
      id="space" 
      ref={sectionRef}
      className="w-full bg-white min-h-screen flex items-center py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className={`prose lg:prose-lg ${transitionBase} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase font-heading">{content.column1.title}</h2>
            <p>{content.column1.text}</p>
          </div>
          <div className={`prose lg:prose-lg ${transitionBase} delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl uppercase font-heading">{content.column2.title}</h2>
            <p>{content.column2.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

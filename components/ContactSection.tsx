import React from 'react';
import SectionHeader from './SectionHeader';

interface ContactSectionProps {
  email: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ email }) => {
  return (
    <section id="contact" className="w-full bg-white py-20 md:py-32">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader 
          title="Get in Touch" 
          description="Have a project in mind or just want to say hello? I'd love to hear from you." 
        />
        <div className="mt-12">
          <a
            href={`mailto:${email}`}
            className="inline-flex justify-center py-3 px-10 border border-transparent shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
          >
            SEND AN EMAIL
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

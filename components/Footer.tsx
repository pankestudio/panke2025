import React from 'react';

interface FooterProps {
  email: string;
}

const Footer: React.FC<FooterProps> = ({ email }) => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-base text-gray-500">&copy; 2024 pankestudio. All rights reserved.</p>
           <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c-4.42 0-7.8 3.38-7.8 7.8s3.38 7.8 7.8 7.8 7.8-3.38 7.8-7.8S16.735 2 12.315 2zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm3.5-7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" clipRule="evenodd" />
              </svg>
            </a>
            <a href={`mailto:${email}`} className="text-gray-400 hover:text-gray-500" rel="noopener noreferrer">
              <span className="sr-only">Email</span>
               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

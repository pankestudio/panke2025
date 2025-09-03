import React, { useState, useEffect } from 'react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useBodyScrollLock(isOpen);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.9);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const textColor = isScrolled || isOpen ? 'text-black' : 'text-white';
  const navLinkClasses = "hover:opacity-75 transition-opacity duration-200";
  const navLinks = [
    { href: 'home', label: 'HOME' },
    { href: 'projects', label: 'PROJECTS' },
    { href: 'space', label: 'SPACE' },
    { href: 'contact', label: 'CONTACT' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className={`text-2xl font-bold tracking-wider ${textColor} transition-colors duration-300`}>
                pankestudio
              </a>
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className={`flex items-baseline space-x-8 ${textColor} transition-colors duration-300`}>
                {navLinks.map(link => (
                  <a key={link.href} href={`#${link.href}`} onClick={(e) => handleSmoothScroll(e, link.href)} className={navLinkClasses}>
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className={`inline-flex items-center justify-center p-2 rounded-md ${textColor} focus:outline-none transition-colors duration-300`}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleMenu} // Close on overlay click
      >
        <nav className="flex flex-col items-center text-center space-y-8" onClick={(e) => e.stopPropagation()}>
           {navLinks.map(link => (
              <a key={link.href} href={`#${link.href}`} onClick={(e) => handleSmoothScroll(e, link.href)} className="text-3xl font-light text-black hover:opacity-70">
                {link.label}
              </a>
            ))}
        </nav>
      </div>
    </>
  );
};

export default Header;

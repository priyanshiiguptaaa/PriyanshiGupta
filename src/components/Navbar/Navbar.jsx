import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Experience', href: '/experience' },
    { title: 'Projects', href: '/projects' },
    { title: 'Skills', href: '/skills' },
    { title: 'Achievements', href: '/achievements' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-serif text-violet-700 dark:text-purple-400">✦</span>
          <span className="font-medium text-violet-700 dark:text-purple-400">Priyanshi Gupta</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="text-violet-700 dark:text-purple-400 hover:text-violet-800 dark:hover:text-purple-300 transition-colors"
            >
              {link.title}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-8 py-2 bg-violet-700 text-white dark:bg-purple-400 dark:text-white font-semibold rounded-full hover:bg-violet-800 dark:hover:bg-purple-500 hover:scale-105 transition-all"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-violet-700 dark:text-purple-400 hover:text-violet-800 dark:hover:text-purple-300"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-violet-100 dark:border-purple-800">
          <nav className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="block py-2 text-violet-700 dark:text-purple-400 hover:text-violet-800 dark:hover:text-purple-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mt-4 px-8 py-2 bg-violet-700 text-white dark:bg-purple-400 dark:text-white text-center font-semibold rounded-full hover:bg-violet-800 dark:hover:bg-purple-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

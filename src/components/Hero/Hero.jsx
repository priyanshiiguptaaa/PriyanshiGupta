import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Youtube } from 'lucide-react';
import SocialButton from './SocialButton';
import StatCard from './StatCard';

const Hero = () => {
  const [tagline, setTagline] = useState('Aspiring Software Developer');
  
  const taglines = [
    'Aspiring Software Developer',
    'Machine Learning Enthusiast',
    'Web Development Aficionado',
    'Tech Innovator',
    'Problem Solver'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTagline((prevTagline) => {
        const currentIndex = taglines.indexOf(prevTagline);
        return taglines[(currentIndex + 1) % taglines.length];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [taglines]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-50/30 to-primary/10 dark:from-background dark:via-background-dark dark:to-primary/20 animate-gradient-xy"></div>
      
      {/* Floating shapes in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-300/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative flex items-center p-8 pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 items-center">
          {/* Left Column - Intro */}
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <div className="relative">
              <div className="inline-block px-6 py-2 rounded-full bg-violet-700/20 text-violet-700 dark:bg-purple-400/20 dark:text-purple-400 font-semibold text-lg mb-16 backdrop-blur-sm hover:bg-violet-700/30 dark:hover:bg-purple-400/30 transition-colors duration-300">
                {tagline}
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-8 animate-slideInLeft">
                Hi there! I'm
              </h1>

              <h2 className="text-6xl md:text-8xl font-extrabold mb-6 animate-slideInRight">
                <span className="bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 dark:from-purple-400 dark:via-pink-400 dark:to-purple-500 bg-clip-text text-transparent">
                  Priyanshi Gupta
                </span>
              </h2>

              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 animate-fadeIn delay-500 max-w-2xl">
                A passionate Software Developer crafting impactful solutions through Machine Learning and Web Development. I transform ideas into elegant, user-centric applications.
              </p>

              <div className="flex flex-wrap gap-4">
                <SocialButton
                  href="https://github.com/priyanshiiguptaaa"
                  icon={<Github className="w-5 h-5" />}
                  label="GitHub"
                  className="hover:scale-105 transform transition-all duration-300 hover:shadow-lg"
                />
                <SocialButton
                  href="https://www.linkedin.com/in/priyanshiguptaa/"
                  icon={<Linkedin className="w-5 h-5" />}
                  label="LinkedIn"
                  className="hover:scale-105 transform transition-all duration-300 hover:shadow-lg"
                />
                <SocialButton
                  href="mailto:priyanshigupta6718@gmail.com"
                  icon={<Mail className="w-5 h-5" />}
                  label="Email"
                  className="hover:scale-105 transform transition-all duration-300 hover:shadow-lg"
                />
                <SocialButton
                  href="https://www.youtube.com/@PriyanshiiGuptaa"
                  icon={<Youtube className="w-5 h-5" />}
                  label="YouTube"
                  className="hover:scale-105 transform transition-all duration-300 hover:shadow-lg"
                />
                <a
                  href="/PriyanshiGupta%20(2).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-violet-700 dark:bg-purple-500 text-white font-semibold text-lg hover:bg-violet-800 dark:hover:bg-purple-600 transition-colors duration-300 hover:scale-105 transform hover:shadow-lg"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Photo and Stats */}
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col items-center gap-8">
              {/* Profile Photo */}
              <div className="relative w-64 h-64 mb-4">
                <img
                  src="/pri.jpg"
                  alt="Priyanshi Gupta"
                  className="rounded-full object-cover w-full h-full border-4 border-violet-700/20 dark:border-purple-400/20 shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-700/10 to-purple-400/10 hover:from-violet-700/20 hover:to-purple-400/20 transition-all duration-300"></div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 w-full">
                <StatCard
                  number="9.3"
                  label="CGPA"
                  className="hover:scale-105 transform transition-all duration-300"
                />
                <StatCard
                  number="10"
                  label="Projects Completed"
                  className="hover:scale-105 transform transition-all duration-300"
                />
                <StatCard
                  number="6"
                  label="Technologies"
                  className="hover:scale-105 transform transition-all duration-300"
                />
                <StatCard
                  number="10"
                  label="Opportunities Finalist"
                  className="hover:scale-105 transform transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

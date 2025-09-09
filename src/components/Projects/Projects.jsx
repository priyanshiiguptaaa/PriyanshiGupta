// Projects.jsx
import React, { useRef, useEffect } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const projects = [
  {
    title: "NurtureHub",
    description: "A supportive online platform for pregnant women providing peer support, expert advice, and tailored resources. Features include community forums, expert consultations, personalized AI-powered content recommendations, and multilingual support.",
    technologies: ["React.js", "Django", "MySQL", "Machine Learning", "RESTful API"],
    github: "https://github.com/priyanshiiguptaaa/NurtureHub",
    demo: "https://youtu.be/rcdEfAfdUiY",
    website: "https://nurture-hub.vercel.app/",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
  },
  {
    title: "Export Management Platform for Indian SMBs",
    description: "A comprehensive platform built during Amazon Hackathon to streamline international export processes. Features include shipment tracking, document management, real-time carrier integration, rate comparison, and automated document verification.",
    technologies: ["React + Vite", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/priyanshiiguptaaa/Amazon_smbhv",
    demo: "https://youtu.be/t1Q_7y9GLh0?si=Na36EKIAKT_iOA1o",
    website: "https://cargoconnects.vercel.app/",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
  },
  {
    title: "Thoughts to Text Using EEG Signals",
    description: "An innovative brain-computer interface system that converts EEG signals into text, enabling direct thought-to-text communication. Features real-time EEG signal processing, neural network-based classification, and an interactive GUI for visualization.",
    technologies: ["Python", "Neural Networks", "Signal Processing", "PyQt", "NumPy"],
    github: "https://github.com/priyanshiiguptaaa/ThoughtsToTextUsingEEGSignals",
    demo: null,
    website: null,
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop"
  },
  {
    title: "EV Connects",
    description: "A project that connects electric vehicle users with charging stations. Find nearby charging stations, check availability, and plan your routes efficiently.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/priyanshiiguptaaa/EV_connects",
    demo: null,
    website: null,
    image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop"
  }
];

const Projects = () => {
  const carouselRef = useRef();

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let animationId;
    let translateX = 0;
    const speed = 0.5; // pixels per frame
    const cards = container.children;
    const cardWidth = 400; // 384px width + 32px gap
    const totalWidth = cardWidth * projects.length;

    const animate = () => {
      translateX -= speed;
      
      // Reset position when half the carousel has moved (since we duplicated cards)
      if (Math.abs(translateX) >= totalWidth) {
        translateX = 0;
      }
      
      container.style.transform = `translateX(${translateX}px)`;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation after a short delay
    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, 1000);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-violet-200 dark:bg-violet-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-violet-700 dark:text-purple-400">
            My Projects
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-300 to-transparent dark:via-purple-400 ml-8"></div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-8 transition-transform duration-1000 ease-linear" ref={carouselRef}>
            {[...projects, ...projects].map((project, index) => (
              <ProjectCard key={`${project.title}-${index}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="group w-96 flex-shrink-0 relative bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm transform hover:scale-[1.02]">
    <div className="absolute inset-0 bg-gradient-to-br from-violet-700/10 to-purple-400/10 dark:from-violet-700/20 dark:to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    {/* Project Image */}
    <div className="relative h-48 overflow-hidden">
      {project.website ? (
        <a href={project.website} target="_blank" rel="noopener noreferrer" className="block h-full">
          <img 
            src={project.image || "https://via.placeholder.com/600x400/6366f1/white?text=Project+Image"} 
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/600x400/6366f1/white?text=Project+Image";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </a>
      ) : (
        <div className="h-full">
          <img 
            src={project.image || "https://via.placeholder.com/600x400/6366f1/white?text=Project+Image"} 
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/600x400/6366f1/white?text=Project+Image";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
      )}
    </div>

    {/* Content */}
    <div className="relative p-6">
      <h3 className="text-xl font-bold mb-3 text-violet-700 dark:text-purple-400">
        {project.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm h-20 overflow-y-auto">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-2 py-1 text-xs rounded-full bg-violet-100 text-violet-700 dark:bg-purple-400/10 dark:text-purple-400"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {project.github && (
          <ProjectLink 
            href={project.github} 
            icon={<Github className="w-4 h-4" />} 
            label="Code" 
          />
        )}
        {project.demo && (
          <ProjectLink 
            href={project.demo} 
            icon={<Play className="w-4 h-4" />} 
            label="Demo" 
          />
        )}
        {project.website && (
          <ProjectLink 
            href={project.website} 
            icon={<ExternalLink className="w-4 h-4" />} 
            label="Live" 
          />
        )}
      </div>
    </div>
  </div>
);

const ProjectLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-100 text-violet-700 hover:bg-violet-200 dark:bg-purple-400/20 dark:text-purple-300 dark:hover:bg-purple-400/30 transition-colors duration-300 text-sm font-medium"
  >
    {icon}
    {label}
  </a>
);

export default Projects;

// Projects.jsx
import React from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "NurtureHub",
      description: "A supportive online platform for pregnant women providing peer support, expert advice, and tailored resources. Features include community forums, expert consultations, personalized AI-powered content recommendations, and multilingual support.",
      technologies: ["React.js", "Django", "MySQL", "Machine Learning", "RESTful API"],
      github: "https://github.com/priyanshiiguptaaa/NurtureHub",
      demo: "https://youtu.be/rcdEfAfdUiY",
      website: "https://nurture-hub.vercel.app/",
      featured: true,
      image: "/image.png"
    },
    {
      title: "Export Management Platform for Indian SMBs",
      description: "A comprehensive platform built during Amazon Hackathon to streamline international export processes. Features include shipment tracking, document management, real-time carrier integration, rate comparison, and automated document verification.",
      technologies: ["React + Vite", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/priyanshiiguptaaa/Amazon_smbhv",
      demo: "https://youtu.be/t1Q_7y9GLh0?si=Na36EKIAKT_iOA1o",
      website: "https://cargoconnects.vercel.app/",
      image: "/Screenshot 2024-11-30 135102.png"
    },
    {
      title: "Thoughts to Text Using EEG Signals",
      description: "An innovative brain-computer interface system that converts EEG signals into text, enabling direct thought-to-text communication. Features real-time EEG signal processing, neural network-based classification, and an interactive GUI for visualization.",
      technologies: ["Python", "Neural Networks", "Signal Processing", "PyQt", "NumPy"],
      github: "https://github.com/priyanshiiguptaaa/ThoughtsToTextUsingEEGSignals",
      demo: "#",
      image: "/eeg-interface.jpg"
    },
    
    {
      title: "EV Connects",
      description: "A project that connects electric vehicle users with charging stations.",
      technologies: ["React", "Node.js", "Express"],
      github: "https://github.com/priyanshiiguptaaa/EV_connects",
      demo: "#", // Add a demo link if available
      website: "#", // Add a website link if available
      featured: false, // Set to true if you want to feature this project
      image: "/path/to/image.jpg" // Replace with the actual image path if available
    }
  ];

  const featuredProject = projects.find(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-50/5 to-background dark:from-background dark:via-purple-900/5 dark:to-background"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-violet-700/5 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-700/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-violet-700 dark:text-purple-400">
            Featured Projects
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-violet-700/0 via-violet-700/50 to-violet-700/0 dark:from-purple-400/0 dark:via-purple-400/50 dark:to-purple-400/0 ml-8"></div>
        </div>
        
        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-16 transform hover:scale-[1.01] transition-all duration-300">
            <FeaturedProjectCard project={featuredProject} />
          </div>
        )}

        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-violet-700 dark:text-purple-400">
            Other Projects
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-violet-700/0 via-violet-700/50 to-violet-700/0 dark:from-purple-400/0 dark:via-purple-400/50 dark:to-purple-400/0 ml-8"></div>
        </div>

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProjectCard = ({ project }) => (
  <div className="group relative bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
    <div className="absolute inset-0 bg-gradient-to-br from-violet-700/10 to-purple-400/10 dark:from-violet-700/20 dark:to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    {/* Project Image with Link */}
    <a href={project.website} target="_blank" rel="noopener noreferrer" className="block relative h-96 overflow-hidden">
      <img 
        src={project.image || "https://placehold.co/600x400"} 
        alt={project.title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    </a>

    {/* Content */}
    <div className="relative p-8">
      <h3 className="text-2xl font-bold mb-4 text-violet-700 dark:text-purple-400">
        {project.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 text-sm rounded-full bg-violet-100 text-violet-700 dark:bg-purple-400/10 dark:text-purple-400"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <ProjectLink href={project.github} icon={<Github className="w-5 h-5" />} label="View Code" />
        <ProjectLink href={project.demo} icon={<Play className="w-5 h-5" />} label="Live Demo" />
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="group relative bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm transform hover:scale-[1.02]">
    <div className="absolute inset-0 bg-gradient-to-br from-violet-700/10 to-purple-400/10 dark:from-violet-700/20 dark:to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    {/* Project Image with Link */}
    <a href={project.website} target="_blank" rel="noopener noreferrer" className="block relative h-48 overflow-hidden">
      <img 
        src={project.image || "https://placehold.co/600x400"} 
        alt={project.title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    </a>

    {/* Content */}
    <div className="relative p-6">
      <h3 className="text-xl font-bold mb-3 text-violet-700 dark:text-purple-400">
        {project.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
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
        <ProjectLink href={project.github} icon={<Github className="w-4 h-4" />} label="Code" />
        <ProjectLink href={project.demo} icon={<Play className="w-4 h-4" />} label="Demo" />
      </div>
    </div>
  </div>
);

const ProjectLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-100 text-violet-700 hover:bg-violet-200 dark:bg-purple-400/10 dark:text-purple-400 dark:hover:bg-purple-400/20 transition-colors duration-300 text-sm font-medium"
  >
    {icon}
    {label}
  </a>
);

export default Projects;

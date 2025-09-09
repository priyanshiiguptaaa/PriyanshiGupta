// Projects.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import { ExternalLink, Github, Play } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-50/5 to-background dark:from-background dark:via-purple-900/5 dark:to-background"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-violet-700/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-700/5 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-violet-700 dark:text-purple-400">
            My Projects
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-violet-700/0 via-violet-700/50 to-violet-700/0 dark:from-purple-400/0 dark:via-purple-400/50 dark:to-purple-400/0 ml-8"></div>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Mousewheel]}
            spaceBetween={24}
            slidesPerView="auto"
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
              releaseOnEdges: true
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 32,
              },
            }}
            className="!pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="!w-96">
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-violet-700 dark:text-purple-400 hover:bg-violet-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-violet-700 dark:text-purple-400 hover:bg-violet-50 dark:hover:bg-gray-700 transition-colors duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background: rgb(124 58 237 / 0.3);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: rgb(124 58 237);
        }
        .dark .swiper-pagination-bullet {
          background: rgb(196 181 253 / 0.3);
        }
        .dark .swiper-pagination-bullet-active {
          background: rgb(196 181 253);
        }
      `}</style>
    </section>
  );
};

const ProjectCard = ({ project }) => (
  <div className="group h-full relative bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm transform hover:scale-[1.02]">
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
    <div className="relative p-6 flex flex-col h-[calc(100%-12rem)]">
      <h3 className="text-xl font-bold mb-3 text-violet-700 dark:text-purple-400">
        {project.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed flex-grow">
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
      <div className="flex gap-3 mt-auto">
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
    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-100 text-violet-700 hover:bg-violet-200 dark:bg-purple-400/10 dark:text-purple-400 dark:hover:bg-purple-400/20 transition-colors duration-300 text-sm font-medium"
  >
    {icon}
    {label}
  </a>
);

export default Projects;

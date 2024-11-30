// import React from 'react';
// import { ExternalLink, Github } from 'lucide-react';

// const ProjectCard = ({ project }) => {
//   return (
//     <div className="bg-[#11212D] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
//       <div className="relative">
//         <img 
//           src="/api/placeholder/400/200" 
//           alt={project.title}
//           className="w-full h-48 object-cover"
//         />
//         <div className="absolute top-0 left-0 w-full h-full bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
//           <a href={project.github} className="p-2 bg-[#253745] rounded-lg hover:bg-[#4A5C6A] transition-colors">
//             <Github size={24} />
//           </a>
//           <a href={project.demo} className="p-2 bg-[#253745] rounded-lg hover:bg-[#4A5C6A] transition-colors">
//             <ExternalLink size={24} />
//           </a>
//         </div>
//       </div>
//       <div className="p-6">
//         <h3 className="text-xl font-bold mb-3">{project.title}</h3>
//         <p className="text-[#9BA8AB] mb-4">{project.description}</p>
//         <div className="flex flex-wrap gap-2">
//           {project.technologies.map(tech => (
//             <span 
//               key={tech} 
//               className="px-3 py-1 bg-[#253745] rounded-full text-sm"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
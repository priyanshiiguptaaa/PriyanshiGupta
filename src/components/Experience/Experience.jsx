import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
        title: "AI Fullstack Developer",
        company: "Paytm",
        location: "Noida",
        period: "July 2025 - August 2025",
        description: [
          "Developed an AI-powered chatbot to enhance customer interactions.",
          "Built an automated telecalling agent to streamline communication processes.",
          "Integrated full-stack solutions to support AI-driven applications."
        ],
        skills: ["AI", "Fullstack", "Chatbot", "Telecalling"],
        link: "https://paytm.com/"
      },
    {
      title: "AI Developer",
      company: "INTEL",
      location: "Remote",
      period: "May 2025 – July 2025",
      description: [
        "Engineered a multimodal AI assistant using OpenVINO, achieving a 40% increase in processing speed and reduced latency for both visual and audio inputs, while enhancing UI/UX for a seamless, cross-platform user experience.",
        "Streamlined model deployment workflows with OpenVINO Toolkit, cutting deployment time by 30%, which accelerated project delivery and enabled scalable integration across multiple application domains."
      ],
      skills: ["OpenVINO", "AI", "UI/UX", "Model Deployment"],
      link: "https://www.intel.com/"
    },
    {
      title: "Web Developer (Backend)",
      company: "Paytm",
      location: "India",
      period: "2023",
      description: [
        "Contributed to multiple high-impact backend projects, developing RESTful APIs",
        "Gained valuable industry insights in fintech, working with large-scale distributed systems",
        "Collaborated with cross-functional teams to deliver robust backend solutions"
      ],
      skills: ["Node.js", "RESTful APIs", "Distributed Systems", "Backend Development"],
      link: "https://paytm.com/"
    },
    {
      title: "Subject Matter Expert",
      company: "Brainchant Official",
      location: "Remote",
      period: "2022",
      description: [
        "Delivered lectures in Applied Physics and Manufacturing Processes to first-year engineering students",
        "Impacted over 100+ students' academic foundation through effective teaching",
        "Awarded certificate of appreciation and stipend for exceptional teaching and subject expertise"
      ],
      skills: ["Teaching", "Applied Physics", "Manufacturing Processes", "Leadership"],
      link: "#"
    },
    {
      title: "Research Intern",
      company: "BVCOE",
      location: "Delhi",
      period: "2022",
      description: [
        "Collaborated with Professor Dr. Preeti and research team on medical image synthesis",
        "Drove advancements in medical imaging technology through innovative research",
        "Co-developed innovative authentication methods",
        "Contributed to 5+ research discussions and testing sessions to refine project outcomes"
      ],
      skills: ["Medical Imaging", "Research", "Authentication Systems", "Team Collaboration"],
      link: "https://bvcoend.ac.in/"
    },
    {
      title: "Human Resources Intern",
      company: "Gyan Adhar Welfare",
      location: "Pitampura, Delhi",
      period: "2022",
      description: [
        "Efficiently managed administrative tasks and oversaw progress of 10+ interns across departments",
        "Organized events to boost engagement and team morale",
        "Spearheaded a referral program, increasing intern pool by 15%",
        "Awarded certificate of appreciation for exceptional performance"
      ],
      skills: ["HR Management", "Event Organization", "Team Management", "Recruitment"],
      link: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 relative min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50/20 via-transparent to-transparent dark:from-purple-900/10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-violet-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-violet-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-violet-700 dark:text-purple-400 mb-4">
            Professional Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A timeline of my professional experience, showcasing my growth and contributions
            in software development and machine learning.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-12 group"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 h-full w-px bg-violet-200 dark:bg-purple-800 group-last:h-[calc(100%-2rem)]"></div>
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 rounded-full bg-violet-700 dark:bg-purple-400 ring-4 ring-violet-100 dark:ring-purple-900"></div>

              {/* Experience Card */}
              <div className="group/card relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-700/5 to-purple-400/5 dark:from-violet-700/10 dark:to-purple-400/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                {/* Content */}
                <div className="relative">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-violet-700 dark:text-purple-400">
                        {experience.title}
                      </h3>
                      <div className="text-lg font-medium text-gray-800 dark:text-gray-200">
                        {experience.company}
                      </div>
                    </div>
                    {experience.link && (
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-600 dark:text-purple-400 hover:text-violet-700 dark:hover:text-purple-300 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    {/* Location and Period */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {experience.period}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      {experience.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-violet-500 dark:text-purple-400 mt-1.5">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full bg-violet-100 text-violet-700 dark:bg-purple-400/10 dark:text-purple-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Trophy, Users } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Code2 className="w-8 h-8" />,
      value: "500+",
      label: "DSA Problems",
      description: "Solved across platforms"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      value: "15+",
      label: "Projects",
      description: "Built & Deployed"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      value: "5+",
      label: "Hackathons",
      description: "Won & Participated"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "1000+",
      label: "Students",
      description: "Mentored & Guided"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-50/20 via-transparent to-transparent dark:from-purple-900/10"></div>
      
      {/* Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-200/30 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-700/5 to-purple-400/5 dark:from-violet-700/10 dark:to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Content */}
              <div className="relative space-y-4">
                {/* Icon */}
                <div className="text-violet-700 dark:text-purple-400 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="text-4xl font-bold text-violet-700 dark:text-purple-400">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.description}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-2 right-2 w-12 h-12 bg-violet-100/50 dark:bg-purple-400/5 rounded-full blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="/projects"
            className="inline-flex items-center px-6 py-3 rounded-full bg-violet-700 dark:bg-purple-500 text-white hover:bg-violet-800 dark:hover:bg-purple-600 transition-colors duration-300"
          >
            View My Work
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal, Target, Crown, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Top 100 in Amazon's ML Challenge",
      description: "Ranked among the top 100 participants in Amazon's Machine Learning Challenge 2023, showcasing expertise in ML algorithms and problem-solving.",
      category: "Competition"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Winner at SheBuilds Hackathon",
      description: "Led a team to victory at SheBuilds Hackathon with an innovative healthcare solution, demonstrating leadership and technical excellence.",
      category: "Hackathon"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "500+ DSA Problems Solved",
      description: "Successfully solved over 500 Data Structures and Algorithms problems across LeetCode and other platforms, showcasing strong problem-solving skills.",
      category: "Technical"
    },
    {
      icon: <Medal className="w-6 h-6" />,
      title: "Google Cloud Ready Facilitator",
      description: "Selected as a Google Cloud Ready Facilitator, helping students learn cloud technologies and achieving all program milestones.",
      category: "Leadership"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Microsoft Learn Student Ambassador",
      description: "Recognized as a Microsoft Learn Student Ambassador for leadership in technology education and community building.",
      category: "Leadership"
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Open Source Contributor",
      description: "Active contributor to various open-source projects, helping improve documentation and adding new features to benefit the developer community.",
      category: "Technical"
    }
  ];

  const certificates = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "/certificates/aws-cloud.jpg",
      link: "#"
    },
    {
      title: "Google Cloud Digital Leader",
      issuer: "Google Cloud",
      date: "2023",
      image: "/certificates/google-cloud.jpg",
      link: "#"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2023",
      image: "/certificates/ml-spec.jpg",
      link: "#"
    },
    {
      title: "React Advanced Concepts",
      issuer: "Meta",
      date: "2023",
      image: "/certificates/react-advanced.jpg",
      link: "#"
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
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-50/5 to-background dark:from-background dark:via-purple-900/5 dark:to-background"></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-violet-700 dark:text-purple-400 mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Milestones and recognition received throughout my journey in technology,
            showcasing leadership, technical excellence, and community impact.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-700/10 to-purple-400/10 dark:from-violet-700/20 dark:to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              {/* Content */}
              <div className="relative">
                {/* Category Tag */}
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-violet-100 text-violet-700 dark:bg-purple-400/10 dark:text-purple-400 mb-4">
                  {achievement.category}
                </span>

                {/* Icon */}
                <div className="text-violet-700 dark:text-purple-400 mb-4">
                  {achievement.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-violet-700 dark:text-purple-400 mb-2">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-violet-700 dark:text-purple-400 mb-4">
            Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Professional certifications and courses completed to enhance technical expertise and stay current with industry standards.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {certificates.map((certificate, index) => (
            <motion.a
              key={index}
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-700/10 to-purple-400/10 dark:from-violet-700/20 dark:to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={certificate.image || "https://placehold.co/400x300"} 
                  alt={certificate.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative p-4">
                <h3 className="text-lg font-bold text-violet-700 dark:text-purple-400 mb-1">
                  {certificate.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                  {certificate.issuer}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  {certificate.date}
                </p>
                
                {/* View Certificate Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5 text-violet-700 dark:text-purple-400" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

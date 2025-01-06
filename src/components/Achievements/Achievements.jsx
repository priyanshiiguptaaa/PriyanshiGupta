import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Medal, Target, Crown, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "1st Place in Creaticon - Logo Designing Competition",
      description: "Achieved 1st place in Creaticon, a logo designing competition organized by MLSAC BVCOE, showcasing creativity and design skills.",
      category: "Competition"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Top 6 among 1.5 lakh teams in Amazon SMBhav Hackathon",
      description: "Achieved a top 6 position among 150,000 teams in the Amazon SMBhav Hackathon, demonstrating exceptional problem-solving and innovation skills.",
      category: "Hackathon"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "2nd Place at Tech Titans - Product Launch Competition",
      description: "We introduced a concept for a new gaming console by Valve, complete with a detailed business strategy. From ideation to execution, this experience was a masterclass in creativity, teamwork, and strategic thinking.",
      category: "Competition"
    },
    {
      icon: <Medal className="w-6 h-6" />,
      title: "1st Place in VichaarX - Sustainable Business Development Ideathon",
      description: "Earned 1st place in the VichaarX competition, a sustainable business development ideathon organized by Geek for Geek BVCOE and Enactus BVCOE!",
      category: "Competition"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Regional Finalists in the Smart Car Design Challenge'24",
      description: "Achieved the status of Regional Finalists in the Smart Car Design Challenge'24 at NXP India AIM!",
      category: "Competition"
    },
    {
      icon: <Medal className="w-6 h-6" />,
      title: "Academic Excellence Award in Computer Science at Pinnacle'24",
      description: "Thrilled to be recognized with the Academic Excellence Award in Computer Science at Pinnacle'24!",
      category: "Academic"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Finalist in the Web-D Verse Hybrid Hackathon",
      description: "Achieved finalist status in the 'Web-D Verse' hybrid hackathon organized by the MLSAC society.",
      category: "Hackathon"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "3rd Place in TechShuttle - Break the Password Competition",
      description: "Took third place in TechShuttle, Hack Club BVP's latest competition - Break the Password!",
      category: "Competition"
    },
    {
      icon: <Crown className="w-6 h-6" />,
      title: "Empowering Future Innovators: A Remarkable WIEStar Journey",
      description: "As the WIE Chairperson at IEEE BVCOE, I had the privilege of leading initiatives that empower future innovators at Sarvodaya Govt. Vidyalaya!",
      category: "Leadership"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "500+ DSA Problems Solved",
      description: "Successfully solved over 500 Data Structures and Algorithms problems across LeetCode and other platforms, showcasing strong problem-solving skills.",
      category: "Technical"
    }
  ];

  const certificates = [
    {
      title: "Coding Ninjas DSA in Java",
      issuer: "Coding Ninjas",
      date: "2022",
      image: "public/1691334711022.jpg", 
      link: "https://www.linkedin.com/posts/priyanshiguptaa_codingninjas-datastructureandalgorithm-javadeveloper-activity-7093971951303499776-eRYv?utm_source=share&utm_medium=member_desktop" 
    },
    {
      title: "Machine Learning Challenge Completion",
      issuer: "Microsoft Learn",
      date: "2022",
      image: "public\ml.jpg",
      link: "https://www.linkedin.com/posts/priyanshiguptaa_learnmicrosoftai-microsoftazure-machinelearning-activity-7096856256799289345-iFjn?utm_source=share&utm_medium=member_desktop"
    },
    {
      title: "Academic Excellence Award in Computer Science at Pinnacle'24",
      issuer: "Pinnacle'24",
      date: "2023",
      image: "public/pinnacle.jpg",
      link: "https://www.linkedin.com/posts/priyanshiguptaa_pinnacle24-academicexcellence-gratitude-activity-7194772668364066816-Mzin?utm_source=share&utm_medium=member_desktop"
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

import React from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Users, Sparkles, Laptop, GitBranch, Database, Rocket } from "lucide-react";

const SkillCard = ({ title, skills, icon: Icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-700/20 dark:border-purple-400/20"
  >
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-6 h-6 text-violet-700 dark:text-purple-400" />
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 text-sm rounded-full bg-violet-700/10 text-violet-700 dark:bg-purple-400/10 dark:text-purple-400 hover:bg-violet-700/20 dark:hover:bg-purple-400/20 transition-colors duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const About = () => {
  return (
    <div className="relative min-h-screen bg-background py-20 px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-purple-50/30 to-primary/10 dark:from-background dark:via-background-dark dark:to-primary/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-300/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 dark:from-purple-400 dark:via-pink-400 dark:to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            A passionate coder crafting digital experiences and solving complex puzzles one line at a time.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-12 md:col-span-5 order-1 flex justify-center"
            >
              <div className="relative group sticky top-32">
                <img
                  src="/pri.jpg"
                  alt="Profile"
                  className="w-72 h-72 rounded-2xl shadow-xl object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-700/10 to-purple-400/10 group-hover:from-violet-700/20 group-hover:to-purple-400/20 transition-all duration-300"></div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-12 md:col-span-7 order-2"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
                <p className="text-lg leading-relaxed">
                  Hey there! 👋 I'm a{" "}
                  <span className="font-semibold text-primary">
                    Computer Science enthusiast
                  </span>{" "}
                  pursuing my B.Tech at Bharati Vidyapeeth's College of Engineering. With a 
                  <span className="font-semibold text-primary">
                    passion for problem-solving
                  </span>{" "}
                  and a knack for creating elegant solutions, I'm on a mission to make technology more accessible and impactful.
                </p>

                <p className="text-lg leading-relaxed">
                  My technical journey spans across{" "}
                  <span className="font-semibold text-primary">
                    full-stack development
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-primary">
                    machine learning
                  </span>. I've developed several impactful projects, from AI-powered applications to responsive web platforms. My experience includes working with modern frameworks like React, Node.js, and Express, as well as implementing ML models using Python.
                </p>

                <p className="text-lg leading-relaxed">
                  I'm proud of my achievements in{" "}
                  <span className="font-semibold text-primary">
                    competitive programming
                  </span>{" "}
                  with{" "}
                  <span className="font-semibold text-primary">
                    500+ solved DSA problems
                  </span>{" "}
                  across platforms. I've participated in various hackathons and coding competitions, consistently pushing my boundaries and learning new technologies.
                </p>

                <p className="text-lg leading-relaxed">
                  Beyond individual achievements, I'm passionate about{" "}
                  <span className="font-semibold text-primary">
                    community contribution
                  </span>. I actively participate in{" "}
                  <span className="font-semibold text-primary">
                    open-source projects
                  </span>{" "}
                  and love mentoring fellow developers. My leadership experience includes organizing technical workshops and managing team projects.
                </p>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    Key Achievements
                  </h3>
                  <ul className="list-none space-y-3 pl-7">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Developed and deployed multiple full-stack applications with real-world impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Implemented machine learning models for practical applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Active contributor to open-source projects on GitHub</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Participated in multiple hackathons and coding competitions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <div className="col-span-12 space-y-12">
            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <SkillCard
                title="Technical Skills"
                icon={Code2}
                skills={[
                  "C++",
                  "Python",
                  "JavaScript",
                  "HTML5/CSS3",
                  "React.js",
                  "Node.js",
                  "Express",
                  "MongoDB"
                ]}
              />
              <SkillCard
                title="Domains"
                icon={Brain}
                skills={[
                  "Full Stack Development",
                  "Machine Learning",
                  "Data Structures",
                  "Algorithms",
                  "System Design",
                  "UI/UX Design"
                ]}
              />
              <SkillCard
                title="Tools & Platforms"
                icon={Laptop}
                skills={[
                  "Git/GitHub",
                  "VS Code",
                  "Postman",
                  "Jupyter",
                  "Firebase",
                  "AWS",
                  "Docker"
                ]}
              />
              <SkillCard
                title="Soft Skills"
                icon={Users}
                skills={[
                  "Team Leadership",
                  "Problem Solving",
                  "Communication",
                  "Project Management",
                  "Mentoring"
                ]}
              />
            </div>

            {/* Let's Connect Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl bg-violet-700/10 dark:bg-purple-400/10"
            >
              <h3 className="text-xl font-semibold text-violet-700 dark:text-purple-400 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Let's Connect For
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { text: "Pair programming sessions", icon: Laptop },
                  { text: "DSA problem solving", icon: Brain },
                  { text: "Open source contributions", icon: GitBranch },
                  { text: "AI/ML discussions", icon: Rocket }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-violet-700 dark:text-purple-400">
                    <item.icon className="w-4 h-4" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

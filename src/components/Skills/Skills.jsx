import React from 'react';
import { Code2, Brain, Globe, Database, Terminal, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Java", level: "Proficient", progress: 90 },
        { name: "Python", level: "Proficient", progress: 85 },
        { name: "C/C++", level: "Beginner", progress: 60 }
      ]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Supervised Learning", level: "Advanced", progress: 85 },
        { name: "Deep Learning", level: "Intermediate", progress: 75 },
        { name: "Generative AI", level: "Intermediate", progress: 70 },
        { name: "LLMs", level: "Intermediate", progress: 70 }
      ]
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "HTML/CSS", level: "Advanced", progress: 90 },
        { name: "JavaScript", level: "Intermediate", progress: 75 },
        { name: "React", level: "Intermediate", progress: 80 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MySQL", level: "Intermediate", progress: 75 },
        { name: "MongoDB", level: "Beginner", progress: 60 },
        { name: "PostgreSQL", level: "Beginner", progress: 55 }
      ]
    },
    {
      title: "DevOps",
      icon: <Terminal className="w-6 h-6" />,
      skills: [
        { name: "Git", level: "Advanced", progress: 85 },
        { name: "Docker", level: "Beginner", progress: 60 },
        { name: "AWS", level: "Beginner", progress: 55 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        { name: "VS Code", level: "Advanced", progress: 90 },
        { name: "Jupyter", level: "Advanced", progress: 85 },
        { name: "PyTorch", level: "Intermediate", progress: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-violet-50/5 to-background dark:from-background dark:via-purple-900/5 dark:to-background"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-violet-700/5 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-700/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-violet-700 dark:text-purple-400">
            Technical Skills
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-violet-700/0 via-violet-700/50 to-violet-700/0 dark:from-purple-400/0 dark:via-purple-400/50 dark:to-purple-400/0 ml-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-700/10 to-purple-400/10 dark:from-violet-700/20 dark:to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-violet-100 text-violet-700 dark:bg-purple-400/10 dark:text-purple-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-violet-700 dark:text-purple-400">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-violet-700 dark:text-purple-400">{skill.level}</span>
                      </div>
                      <div className="h-2 bg-violet-100 dark:bg-purple-400/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-violet-500 to-purple-500 dark:from-purple-400 dark:to-violet-600 rounded-full transform origin-left transition-transform duration-500 ease-out group-hover:scale-x-105"
                          style={{ width: `${skill.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
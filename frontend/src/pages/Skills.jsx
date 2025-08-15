import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90, category: "Backend" },
    { name: "Flask", level: 85, category: "Backend" },
    { name: "JavaScript", level: 88, category: "Frontend" },
    { name: "React.js", level: 85, category: "Frontend" },
    { name: "HTML5", level: 95, category: "Frontend" },
    { name: "CSS3", level: 90, category: "Frontend" },
    { name: "SQLite", level: 80, category: "Database" },
    { name: "SQLAlchemy", level: 75, category: "Database" },
    { name: "REST APIs", level: 85, category: "Backend" },
    { name: "Git", level: 80, category: "Tools" },
    { name: "Responsive Design", level: 90, category: "Frontend" },
    { name: "UI/UX Design", level: 85, category: "Design" }
  ];

  const softSkills = [
    {
      title: "Problem Solving",
      description: "Strong analytical thinking and innovative approach to complex technical challenges",
      level: 90
    },
    {
      title: "Working Under Pressure",
      description: "Excellent performance in high-pressure environments and tight deadlines",
      level: 95
    },
    {
      title: "AI Tool Proficiency",
      description: "Professional use of AI tools to enhance productivity and stay current with market trends",
      level: 85
    },
    {
      title: "Team Collaboration",
      description: "Effective communication and collaboration in team environments",
      level: 88
    },
    {
      title: "Adaptability",
      description: "Quick learning and adaptation to new technologies and methodologies",
      level: 92
    },
    {
      title: "Innovation",
      description: "Creative thinking and implementation of innovative solutions",
      level: 87
    }
  ];

  const categories = {
    "Frontend": { color: "from-blue-400 to-blue-600", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    "Backend": { color: "from-green-400 to-green-600", bg: "bg-green-500/10", border: "border-green-500/20" },
    "Database": { color: "from-purple-400 to-purple-600", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    "Tools": { color: "from-orange-400 to-orange-600", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    "Design": { color: "from-pink-400 to-pink-600", bg: "bg-pink-500/10", border: "border-pink-500/20" }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Skills</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A comprehensive overview of my technical expertise and professional capabilities 
            in full-stack development and beyond.
          </motion.p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-white font-semibold">{skill.name}</span>
                    <span className={`px-2 py-1 text-xs rounded-full text-white ${categories[skill.category].bg} ${categories[skill.category].border} border`}>
                      {skill.category}
                    </span>
                  </div>
                  <span className="text-gray-400 font-medium">{skill.level}%</span>
                </div>
                <div className="relative">
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-gray-800"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${categories[skill.category].color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Professional Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-white text-lg">{skill.title}</CardTitle>
                      <span className="text-orange-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="relative mb-4">
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      {skill.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-16 border-t border-gray-800"
        >
          <h3 className="text-3xl font-bold text-white mb-6">Continuous Learning</h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            I'm committed to staying at the forefront of web development technologies and best practices. 
            My approach combines solid fundamentals with cutting-edge innovations, ensuring that every 
            project benefits from both proven methodologies and the latest advancements in the field.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">3+</div>
              <div className="text-gray-400">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">10+</div>
              <div className="text-gray-400">Technologies Mastered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">5+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;


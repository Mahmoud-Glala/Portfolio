import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Calendar, Award, Briefcase, GraduationCap, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const CV = () => {
  const personalInfo = {
    name: "Mahmoud Glala",
    title: "Full Stack Developer & UI/UX Enthusiast",
    email: "mahmoud.glala@example.com",
    phone: "+20 123 456 7890",
    location: "Egypt",
    summary: "Highly motivated and results-oriented Full Stack Developer with a strong passion for creating innovative and user-centric web applications. Proficient in both frontend and backend technologies, with a keen eye for creative UI/UX design and a commitment to delivering high-quality, scalable solutions. Adept at working under pressure and leveraging AI tools to enhance productivity and stay abreast of market trends."
  };

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Freelance / Self-Employed",
      period: "2022 - Present",
      location: "Remote",
      responsibilities: [
        "Developed comprehensive e-commerce platforms using Flask (Python) and React.js",
        "Implemented secure admin panels with user authentication and CSRF protection",
        "Integrated third-party APIs including Telegram Bot API for real-time notifications",
        "Designed and implemented responsive UI/UX with modern design principles",
        "Managed SQLite and SQLAlchemy databases for efficient data storage and retrieval",
        "Applied security best practices including rate limiting and secure headers"
      ],
      projects: [
        "Roo Florals - Online flower shop with complete e-commerce functionality",
        "MG Store - Advanced e-commerce platform with React frontend and Flask backend",
        "Nexus Agency - Modern agency website with optimized performance"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "JavaScript"],
    "Backend Frameworks": ["Flask"],
    "Frontend Technologies": ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
    "Databases": ["SQLite", "SQLAlchemy"],
    "Tools & Technologies": ["Git", "RESTful APIs", "Telegram Bot API", "CSRF Protection", "Rate Limiting"],
    "Design & UX": ["UI/UX Design Principles", "Responsive Design", "Framer Motion"],
    "Soft Skills": ["Problem-solving", "Working under pressure", "Team collaboration", "AI tool proficiency", "Adaptability", "Innovation"]
  };

  const education = [
    {
      degree: "Bachelor's Degree",
      field: "Computer Science / Software Engineering",
      institution: "[To be filled]",
      period: "[To be filled]",
      description: "Focused on software development, algorithms, and computer systems."
    }
  ];

  const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Curriculum <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Vitae</span>
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </motion.div>
        </motion.div>

        {/* Personal Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50">
            <CardHeader className="text-center pb-6">
              <div className="w-32 h-32 mx-auto mb-6">
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                  MG
                </div>
              </div>
              <CardTitle className="text-3xl text-white">{personalInfo.name}</CardTitle>
              <CardDescription className="text-xl text-orange-400 font-medium">
                {personalInfo.title}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center space-x-2 text-gray-300">
                  <Mail className="h-4 w-4 text-orange-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-300">
                  <Phone className="h-4 w-4 text-orange-400" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-300">
                  <MapPin className="h-4 w-4 text-orange-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
              <Separator className="bg-gray-700" />
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Professional Summary</h3>
                <p className="text-gray-300 leading-relaxed">{personalInfo.summary}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Briefcase className="h-8 w-8 text-orange-400 mr-3" />
            Professional Experience
          </h2>
          
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <CardTitle className="text-xl text-white">{job.title}</CardTitle>
                      <CardDescription className="text-orange-400 font-medium text-lg">
                        {job.company}
                      </CardDescription>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400 mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {job.period}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="text-orange-400 mr-2">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Notable Projects:</h4>
                    <ul className="space-y-1">
                      {job.projects.map((project, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="text-orange-400 mr-2">•</span>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Award className="h-8 w-8 text-orange-400 mr-3" />
            Skills & Expertise
          </h2>
          
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="text-white font-semibold mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-orange-500/10 text-orange-400 text-sm rounded-full border border-orange-500/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="h-8 w-8 text-orange-400 mr-3" />
              Education
            </h2>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50">
                  <CardHeader>
                    <CardTitle className="text-white">{edu.degree}</CardTitle>
                    <CardDescription className="text-orange-400 font-medium">
                      {edu.field}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.period}
                      </div>
                      <div className="text-gray-400">{edu.institution}</div>
                      <p className="text-gray-300 text-sm">{edu.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Languages className="h-8 w-8 text-orange-400 mr-3" />
              Languages
            </h2>
            
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-white font-medium">{lang.name}</span>
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-sm rounded-full border border-orange-500/20">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-12 border-t border-gray-800"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to collaborate?</h3>
          <p className="text-gray-400 mb-6">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default CV;


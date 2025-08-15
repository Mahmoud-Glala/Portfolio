import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, Brain, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Proficient in both frontend and backend technologies, creating complete web applications from concept to deployment."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Strong eye for creative design and user experience, ensuring applications are both beautiful and functional."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Focused on creating fast, efficient applications with optimal user experience and technical performance."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Excellent communication skills and ability to work effectively in team environments and under pressure."
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Leveraging AI tools professionally to enhance productivity and stay current with market trends."
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Strong analytical thinking and innovative approach to solving complex technical challenges."
    }
  ];

  const journey = [
    {
      period: "Present",
      title: "Full Stack Developer",
      description: "Creating innovative web applications with focus on modern technologies and exceptional user experiences."
    },
    {
      period: "Recent",
      title: "E-commerce Specialist",
      description: "Developed comprehensive e-commerce platforms with advanced features and admin management systems."
    },
    {
      period: "Foundation",
      title: "Web Development Journey",
      description: "Started with frontend technologies and expanded to full-stack development, mastering both client and server-side technologies."
    }
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Me</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Passionate full-stack developer with a keen eye for design and a commitment to creating 
            exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="w-64 h-64 mx-auto lg:mx-0 mb-8">
                <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-6xl font-bold text-white relative overflow-hidden">
                  MG
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-2xl blur-xl"></div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4">Hello, I'm Mahmoud Glala</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a highly motivated and results-oriented Full Stack Developer with a strong passion for 
              creating innovative and user-centric web applications. My journey in web development has been 
              driven by a love for both the technical challenges and the creative possibilities that modern 
              web technologies offer.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              With expertise spanning both frontend and backend technologies, I specialize in creating 
              complete digital solutions that not only function flawlessly but also provide exceptional 
              user experiences. I have a keen eye for creative UI/UX design and am committed to delivering 
              high-quality, scalable solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I thrive in challenging environments and excel at working under pressure. I actively leverage 
              AI tools to enhance productivity and stay current with market trends, ensuring that my work 
              remains innovative and competitive in today's fast-paced digital landscape.
            </p>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">My Journey</h3>
            <div className="space-y-6">
              {journey.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-4 h-4 bg-orange-500 rounded-full mt-2"></div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-orange-400 font-semibold">{item.period}</span>
                      </div>
                      <h4 className="text-white font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  {index < journey.length - 1 && (
                    <div className="absolute left-2 top-6 w-0.5 h-16 bg-gray-700"></div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            What I Bring to the Table
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                      <skill.icon className="h-6 w-6 text-orange-400" />
                    </div>
                    <CardTitle className="text-white">{skill.title}</CardTitle>
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

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-16 border-t border-gray-800"
        >
          <h3 className="text-3xl font-bold text-white mb-6">My Philosophy</h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I believe that great web development is the perfect marriage of technical excellence and 
            creative vision. Every project is an opportunity to push boundaries, solve complex problems, 
            and create digital experiences that not only meet requirements but exceed expectations. 
            My goal is to build applications that users love and businesses can rely on.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;


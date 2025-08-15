import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Roo Florals",
      subtitle: "Online Flower Shop",
      description: "A comprehensive e-commerce platform for a flower shop featuring product catalog, shopping cart, order management, and admin panel. Integrated with Telegram Bot API for real-time order notifications.",
      longDescription: "Developed a beautiful and modern online flower shop with complete e-commerce functionality. The platform includes a responsive product catalog, shopping cart with quantity management, secure checkout process, and comprehensive admin panel for managing products, orders, and settings. Features include coupon system, branch management, contact forms, and Telegram integration for order notifications.",
      technologies: ["Flask", "Python", "SQLite", "HTML5", "CSS3", "JavaScript", "Telegram Bot API"],
      features: [
        "Product catalog with search and filtering",
        "Shopping cart and checkout system",
        "Admin panel for content management",
        "Order tracking and management",
        "Telegram bot integration",
        "Coupon and discount system",
        "Branch management",
        "Responsive design"
      ],
      image: "/images/roo_florals_homepage_clean.png",
      liveUrl: "https://rooflorals.com",
      githubUrl: "#",
      status: "Live"
    },
    {
      id: 2,
      title: "MG Store",
      subtitle: "E-commerce Platform",
      description: "A robust e-commerce platform with modern React frontend, Flask backend, and comprehensive admin panel. Features advanced security measures, rate limiting, and scalable architecture.",
      longDescription: "Engineered a full-stack e-commerce solution with a modern React.js frontend and robust Flask backend. The platform features comprehensive API endpoints for products, categories, orders, authentication, and payment processing. Implemented advanced security measures including CSRF protection, rate limiting, and secure logging. The admin panel provides rich UI for managing all aspects of the store.",
      technologies: ["React.js", "Flask", "SQLAlchemy", "Python", "REST API", "CSRF Protection", "Rate Limiting"],
      features: [
        "Modern React.js frontend",
        "RESTful API architecture",
        "Advanced security measures",
        "Rate limiting and CSRF protection",
        "Comprehensive admin panel",
        "Payment processing integration",
        "User authentication system",
        "Scalable database design"
      ],
      image: "/images/mg-store-mockup.png",
      liveUrl: "#",
      githubUrl: "#",
      status: "In Development"
    },
    {
      id: 3,
      title: "Nexus Agency",
      subtitle: "Agency Website",
      description: "A modern agency website showcasing services, portfolio, and team. Built with focus on performance, SEO optimization, and engaging user experience.",
      longDescription: "Created a sophisticated agency website that effectively showcases the company's services, portfolio, and team. The site features modern design principles, smooth animations, and optimized performance. Implemented SEO best practices and ensured excellent user experience across all devices.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Next.js", "SEO Optimization"],
      features: [
        "Modern responsive design",
        "Smooth animations and transitions",
        "SEO optimized",
        "Performance optimized",
        "Portfolio showcase",
        "Contact forms",
        "Team profiles",
        "Service pages"
      ],
      image: "/images/nexus_agency_homepage_clean.png",
      liveUrl: "https://nexusagencyeg.com",
      githubUrl: "#",
      status: "Live"
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Projects</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            A collection of projects showcasing my expertise in full-stack development, 
            creative design, and modern web technologies.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl overflow-hidden border border-gray-700/50">
                    {project.image.includes('/api/placeholder') ? (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl font-medium">
                        {project.title}
                      </div>
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                      />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>
              </div>

              {/* Project Details */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 text-sm rounded-full ${
                        project.status === 'Live' 
                          ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                          : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <CardTitle className="text-2xl text-white">{project.title}</CardTitle>
                    <CardDescription className="text-orange-400 text-lg font-medium">
                      {project.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-orange-500/10 text-orange-400 text-sm rounded-full border border-orange-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.slice(0, 6).map((feature) => (
                          <div key={feature} className="flex items-center text-gray-300 text-sm">
                            <ArrowRight className="h-3 w-3 text-orange-400 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      {project.liveUrl !== '#' && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Live Site
                          </Button>
                        </a>
                      )}
                      <Button variant="outline" className="bg-white text-gray-800 hover:bg-gray-200 hover:text-gray-900 flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 py-16 border-t border-gray-800"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Interested in working together?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. 
            Let's create something amazing together.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;


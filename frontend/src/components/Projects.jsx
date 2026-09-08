import { useEffect, useState } from 'react'
import { Github, ExternalLink, FolderOpen, TrendingUp, Users, Zap, Award, Code, Database, Server } from 'lucide-react'

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Online Coaching System',
      description: 'Complete Learning Management System (LMS) built with Spring Boot and React. Features include JWT-based secure authentication, role-based access control for Admins, Teachers, and Students, comprehensive course management with lectures and quizzes, assignment creation and submission, discussion forums, support ticket management, audit logging, and AI chat integration. Implements Admin Dashboard with analytics and audit logs, Teacher Dashboard with course ratings and discussions, and Student Dashboard with progress tracking. Built with Spring Boot, Spring Security, Spring Data JPA, MySQL with Flyway migrations, React with Vite, React Router, Axios, and TailwindCSS.',
      technologies: 'Spring Boot, Java, Spring Security, Spring Data JPA, MySQL, Flyway, React, Vite, React Router, Axios, TailwindCSS, Lucide',
      imageUrl: '',
      githubUrl: 'https://github.com/shaileshkole16/Online_Coaching',
      liveUrl: '',
      impact: [
        { metric: 'Scalable', label: 'Unlimited users', icon: <Users size={16} /> },
        { metric: 'Complete', label: 'Full LMS', icon: <Code size={16} /> },
        { metric: 'Secure', label: 'JWT + Audit', icon: <Award size={16} /> }
      ],
      featured: true
    },
    {
      id: 2,
      title: 'HR Management System',
      description: 'Comprehensive Full-Stack HR Management & Employee Lifecycle Platform. Features include JWT-based authentication with access & refresh tokens, role-based access control for 4 user roles (Super Admin, HR Manager, Manager, Employee), complete employee lifecycle management with CRUD operations and manager hierarchy, department management with budget tracking, recruitment/ATS with job postings and candidate pipeline, attendance system with clock in/out and late detection, leave management with multi-level approval workflow, payroll management with salary structures and automated payslip generation, performance management with goals and reviews, document management with file upload and verification, real-time dashboard analytics with CSV export, and a public career page for external applications. Built with React.js, Node.js, Express.js, MySQL with Sequelize ORM, Cloudinary for storage, and Nodemailer for email notifications.',
      technologies: 'React, Tailwind CSS, React Router, Axios, React Query, Recharts, Node.js, Express.js, JWT, bcrypt, Joi, Multer, MySQL, Sequelize, Cloudinary, Nodemailer',
      imageUrl: '',
      githubUrl: 'https://github.com/shaileshkole16/HR_management_System',
      liveUrl: '',
      impact: [
        { metric: 'Scalable', label: 'Unlimited employees', icon: <Users size={16} /> },
        { metric: 'Complete', label: 'HR lifecycle', icon: <Zap size={16} /> },
        { metric: 'Secure', label: 'JWT + Refresh', icon: <Award size={16} /> }
      ]
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Professional full-stack portfolio website showcasing my skills, projects, and experience. Built with React 18, Express.js, and SQLite, featuring a modern dark theme with gradient accents, smooth animations, and fully responsive design. Includes Hero section with profile picture and resume download, Tech Stack with GenAI & LLMs category, Education with CDAC GenAI course, Featured Projects with detailed descriptions, Work Experience, Certifications, Currently Exploring section, and Contact form. Implements RESTful API with CORS support, dynamic content management, and optimized performance with Vite.',
      technologies: 'React 18, Vite, Express.js, Node.js, SQLite3, TailwindCSS, Lucide React, React Router',
      imageUrl: '',
      githubUrl: 'https://github.com/shaileshkole16/Portfolio',
      liveUrl: '',
      impact: [
        { metric: 'Modern', label: 'Dark theme UI', icon: <Zap size={16} /> },
        { metric: 'Fast', label: 'Vite build', icon: <TrendingUp size={16} /> },
        { metric: 'Full Stack', label: 'React + Express', icon: <Code size={16} /> }
      ]
    }
  ])

  // Commented out API call to use fallback data with all 4 projects
  // useEffect(() => {
  //   fetch('/api/projects')
  //     .then(res => res.json())
  //     .then(data => setProjects(data))
  //     .catch(err => console.error('Error fetching projects:', err))
  // }, [])

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-slate-900 to-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Some of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="group bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-56 bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  <FolderOpen size={64} className="text-white/80 relative z-10" />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-3 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies && project.technologies.split(',').map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-3 py-1.5 rounded-full text-sm font-medium border border-primary/30"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
                {project.impact && (
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {project.impact.map((item, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-2 text-center border border-white/10">
                        <div className="flex items-center justify-center gap-1 text-primary mb-1">
                          {item.icon}
                          <span className="text-sm font-bold">{item.metric}</span>
                        </div>
                        <p className="text-gray-400 text-xs">{item.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl.startsWith('http') ? project.githubUrl : `https://${project.githubUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      <Github size={18} className="group-hover/btn:scale-110 transition-transform" />
                      <span className="font-medium">Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl.startsWith('http') ? project.liveUrl : `https://${project.liveUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-xl transition-all duration-300 hover:from-secondary hover:to-accent hover:scale-105"
                    >
                      <ExternalLink size={18} className="group-hover/btn:scale-110 transition-transform" />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

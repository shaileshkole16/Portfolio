import { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, Download, Phone, ArrowRight, CheckCircle, Rocket, Code, Zap } from 'lucide-react'

function Hero() {
  const [profile, setProfile] = useState({
    name: 'Shailesh Kole',
    title: 'Software Engineer',
    bio: 'Software Engineer specializing in Full-Stack and Mobile Application Development with expertise in React.js, Spring Boot, Node.js, Flutter, and React Native. Experienced in building scalable enterprise applications, designing secure REST APIs, and developing production-ready software with modern architecture and clean code practices.',
    email: 'shaileshkole.scoe.it@gmail.com',
    phone: '+91 77967 02856',
    linkedin: 'linkedin.com/in/shailesh-kole-3195b2289',
    github: 'github.com/shaileshkole16',
    resume: '/resume.pdf',
    profileImage: '/profile.jpeg'
  })

  // useEffect(() => {
  //   fetch('/api/profile')
  //     .then(res => res.json())
  //     .then(data => setProfile(data))
  //     .catch(err => console.error('Error fetching profile:', err))
  // }, [])

  return (
    <section id="home" className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden bg-gradient-to-br from-darker via-dark to-slate-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[80vh]">
          <div className="flex-1 text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-primary text-sm font-medium">Available for work</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                {profile.name || 'Your Name'}
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
              {profile.title || 'Full Stack Developer'}
            </p>
            
            <p className="text-gray-400 text-lg mb-8 max-w-2xl leading-relaxed">
              {profile.bio || 'Passionate developer with expertise in building modern web applications.'}
            </p>
            
            {/* Key Highlights - What I Bring */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="text-primary" size={20} />
                  <span className="text-white font-semibold">Full Stack</span>
                </div>
                <p className="text-gray-400 text-sm">React.js, Spring Boot 3</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="text-accent" size={20} />
                  <span className="text-white font-semibold">Enterprise LMS</span>
                </div>
                <p className="text-gray-400 text-sm">Production-Ready</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="text-green-400" size={20} />
                  <span className="text-white font-semibold">4+ Projects</span>
                </div>
                <p className="text-gray-400 text-sm">Shipped applications</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-primary/50 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="text-yellow-400" size={20} />
                  <span className="text-white font-semibold">Clean Code</span>
                </div>
                <p className="text-gray-400 text-sm">Best practices</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href={profile.github ? `https://${profile.github}` : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-white text-dark px-6 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">GitHub</span>
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
              
              <a
                href={profile.linkedin ? `https://${profile.linkedin}` : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-[#0077b5] text-white px-6 py-3 rounded-xl hover:bg-[#006097] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">LinkedIn</span>
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
              
              <a
                href={`mailto:${profile.email || ''}`}
                className="group flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl hover:from-secondary hover:to-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">Contact</span>
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
              
              {profile.phone && (
                <a
                  href={`tel:${profile.phone}`}
                  className="group flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <Phone size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Call</span>
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              )}
              
              {profile.resume && (
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <Download size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Resume</span>
                  <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              )}
            </div>
          </div>
          
          <div className="flex-1 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-1 animate-float">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-dark to-slate-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  {profile.profileImage ? (
                    <img 
                      src={profile.profileImage} 
                      alt={profile.name}
                      className="w-full h-full object-cover object-top rounded-full relative z-10"
                    />
                  ) : (
                    <span className="relative text-white text-8xl md:text-9xl font-bold z-10">
                      {profile.name ? profile.name[0] : 'S'}
                    </span>
                  )}
                </div>
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-primary/30 animate-pulse"></div>
              <div className="absolute -inset-8 rounded-full border border-accent/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

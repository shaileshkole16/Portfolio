import { useEffect, useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react'

function About() {
  const [profile, setProfile] = useState({
    name: 'Shailesh Kole',
    bio: 'I enjoy building scalable web and mobile applications that solve real-world problems. My interests include backend development, system design, REST API development, mobile computing, and continuously learning new technologies. I believe in writing clean, maintainable code and creating applications that provide excellent user experiences.',
    email: 'shaileshkole.scoe.it@gmail.com',
    phone: '+91 77967 02856',
    linkedin: 'linkedin.com/in/shaileshkole',
    github: 'github.com/shaileshkole'
  })

  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error('Error fetching profile:', err))
  }, [])

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-dark to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know me better
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl animate-scale-in">
            <div className="mb-10">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                {profile.bio || 'Passionate developer with expertise in building modern web applications.'}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href={`mailto:${profile.email || ''}`}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm mb-1">Email</h3>
                    <p className="text-white font-medium">{profile.email || 'your.email@example.com'}</p>
                  </div>
                </div>
              </a>
              
              {profile.phone && (
                <a
                  href={`tel:${profile.phone}`}
                  className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-gray-400 text-sm mb-1">Phone</h3>
                      <p className="text-white font-medium">{profile.phone}</p>
                    </div>
                  </div>
                </a>
              )}
              
              <div className="group bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-pink-500 rounded-xl flex items-center justify-center">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm mb-1">Location</h3>
                    <p className="text-white font-medium">Pune, India</p>
                  </div>
                </div>
              </div>
              
              <a
                href={profile.github ? `https://${profile.github}` : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm mb-1">GitHub</h3>
                    <p className="text-white font-medium flex items-center gap-2">
                      {profile.github || 'github.com/yourusername'}
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                  </div>
                </div>
              </a>
              
              <a
                href={profile.linkedin ? `https://${profile.linkedin}` : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0077b5] to-[#00a0dc] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm mb-1">LinkedIn</h3>
                    <p className="text-white font-medium flex items-center gap-2">
                      {profile.linkedin || 'linkedin.com/in/yourprofile'}
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

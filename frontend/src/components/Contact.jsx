import { useState, useEffect } from 'react'
import { Send, Mail, Linkedin, Github, Phone, MessageSquare } from 'lucide-react'

function Contact() {
  const [profile, setProfile] = useState({
    email: 'shaileshkole.scoe.it@gmail.com',
    phone: '+91 77967 02856',
    linkedin: 'linkedin.com/in/shaileshkole',
    github: 'github.com/shaileshkole'
  })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error('Error fetching profile:', err))
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-dark to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            I'm currently open to new opportunities. Let's discuss how I can contribute to your team.
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-full px-6 py-3 text-green-400 font-medium">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Available for opportunities
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-white flex items-center gap-3">
              <MessageSquare className="text-primary" size={28} />
              Contact Information
            </h3>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email || ''}`}
                className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <p className="text-white font-medium">{profile.email || 'your.email@example.com'}</p>
                </div>
              </a>
              
              {profile.phone && (
                <a
                  href={`tel:${profile.phone}`}
                  className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/50 rounded-2xl p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <p className="text-white font-medium">{profile.phone}</p>
                  </div>
                </a>
              )}
              
              <a
                href={profile.linkedin ? `https://${profile.linkedin}` : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0077b5]/50 rounded-2xl p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0077b5] to-[#00a0dc] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">LinkedIn</p>
                  <p className="text-white font-medium">Connect with me</p>
                </div>
              </a>
              
              <a
                href={profile.github ? `https://${profile.github}` : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gray-500/50 rounded-2xl p-5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">GitHub</p>
                  <p className="text-white font-medium">Check my work</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white placeholder-gray-500 hover:bg-white/10"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white placeholder-gray-500 hover:bg-white/10"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white placeholder-gray-500 hover:bg-white/10"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white placeholder-gray-500 hover:bg-white/10 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl hover:from-secondary hover:to-accent transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 hover:shadow-lg hover:shadow-primary/20 font-medium text-lg"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              <div className="mt-6 text-center">
                <p className="text-gray-400 mb-4">Or reach out directly:</p>
                <a
                  href={`mailto:${profile.email || ''}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl px-6 py-3 text-white transition-all hover:scale-105"
                >
                  <Mail size={20} />
                  <span className="font-medium">{profile.email || 'shaileshkole.scoe.it@gmail.com'}</span>
                </a>
              </div>
              
              {status === 'success' && (
                <p className="text-green-400 text-center font-medium">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center font-medium">Error sending message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

import { useEffect, useState } from 'react'
import { Award, Calendar, Building2, Trophy } from 'lucide-react'

function Certifications() {
  const [certifications, setCertifications] = useState([
    {
      id: 1,
      name: 'Flutter Language Certification',
      issuer: 'Core2Web and Incubators',
      date: '2024',
      description: 'Issued by Core2Web and Incubators'
    },
    {
      id: 2,
      name: 'Flutter Super X Program Certification',
      issuer: 'Core2Web and Incubators',
      date: '2024',
      description: 'Recognized expertise in Flutter app development and project management'
    },
    {
      id: 3,
      name: 'Quizeethon Participant',
      issuer: 'Core2Web and Incubators',
      date: '2024',
      description: 'Competed in a technical quiz competition focused on Flutter development, testing knowledge in mobile app development, UI/UX principles, and Flutter framework concepts. Demonstrated problem-solving skills and technical expertise in a competitive environment.'
    }
  ])

  useEffect(() => {
    fetch('/api/certifications')
      .then(res => res.json())
      .then(data => setCertifications(data))
      .catch(err => console.error('Error fetching certifications:', err))
  }, [])

  return (
    <section id="certifications" className="py-24 px-4 bg-gradient-to-b from-slate-900 to-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Certifications</span> & Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and notable achievements
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Trophy className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{cert.name}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    {cert.issuer && (
                      <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                        <Building2 size={16} className="text-accent" />
                        <span>{cert.issuer}</span>
                      </div>
                    )}
                    {cert.date && (
                      <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                        <Calendar size={16} className="text-accent" />
                        <span>{cert.date}</span>
                      </div>
                    )}
                  </div>
                  {cert.description && (
                    <p className="text-gray-300 leading-relaxed">{cert.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {certifications.length === 0 && (
            <div className="text-center text-gray-500 py-20 animate-scale-in">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={48} className="text-gray-400" />
              </div>
              <p className="text-gray-400 text-lg">No certifications added yet</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Certifications

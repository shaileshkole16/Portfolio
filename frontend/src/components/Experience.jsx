import { useEffect, useState } from 'react'
import { Briefcase, Calendar, MapPin, Building2, TrendingUp, Award, Users, Code } from 'lucide-react'

function Experience() {
  const [experience, setExperience] = useState([
    {
      id: 1,
      company: 'Incubators Systems Pvt Ltd',
      position: 'Mobile Application Development Intern',
      location: 'Pune, India',
      startDate: 'Aug 2024',
      endDate: 'Nov 2024',
      description: 'Developed offline-first Flutter applications using SQLite for local data storage. Integrated Firebase Authentication and Cloud Storage for secure user authentication and real-time data synchronization. Consumed REST APIs for dynamic content delivery. Improved application stability through comprehensive testing and debugging. Collaborated with senior developers to deliver production-ready features.',
      achievements: [
        { metric: 'Offline-First', label: 'SQLite integration', icon: <Code size={16} /> },
        { metric: 'Secure Auth', label: 'Firebase integration', icon: <Award size={16} /> },
        { metric: 'Real-time', label: 'API synchronization', icon: <TrendingUp size={16} /> }
      ]
    }
  ])

  useEffect(() => {
    fetch('/api/experience')
      .then(res => res.json())
      .then(data => setExperience(data))
      .catch(err => console.error('Error fetching experience:', err))
  }, [])

  return (
    <section id="experience" className="py-24 px-4 bg-gradient-to-b from-slate-900 to-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and achievements
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <div 
              key={exp.id} 
              className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <Building2 className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                      <p className="text-primary font-medium text-lg">{exp.company}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 text-sm text-gray-400">
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                    <Calendar size={16} className="text-accent" />
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg">
                      <MapPin size={16} className="text-accent" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="border-l-4 border-gradient-to-b from-primary to-accent pl-6 bg-gradient-to-r from-primary/5 to-transparent rounded-r-lg py-4">
                <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                {exp.achievements && (
                  <div className="grid grid-cols-3 gap-3 mt-4">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                        <div className="flex items-center justify-center gap-1 text-primary mb-1">
                          {achievement.icon}
                          <span className="text-xl font-bold">{achievement.metric}</span>
                        </div>
                        <p className="text-gray-400 text-xs">{achievement.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {experience.length === 0 && (
            <div className="text-center text-gray-500 py-20 animate-scale-in">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase size={48} className="text-gray-400" />
              </div>
              <p className="text-gray-400 text-lg">No experience added yet</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Experience

import { Calendar, GraduationCap, Briefcase, Award, Zap } from 'lucide-react'

function Timeline() {
  const events = [
    {
      year: '2021',
      title: 'Started Engineering',
      description: 'Began Bachelor of Engineering in Information Technology at Savitribai Phule Pune University',
      icon: <GraduationCap size={24} />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2024',
      title: 'Internship',
      description: 'Mobile Application Development Intern at Incubators Systems Pvt Ltd, Pune',
      icon: <Briefcase size={24} />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      year: '2025',
      title: 'Graduation',
      description: 'Completed Bachelor of Engineering with CGPA 7.31',
      icon: <Award size={24} />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      year: '2026',
      title: 'PG-DAC / PG-DMC',
      description: 'Post Graduate Diploma in Advanced Computing - Mobile Computing at CDAC',
      icon: <Zap size={24} />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: 'Now',
      title: 'Open for Opportunities',
      description: 'Actively seeking Software Engineer roles in top tech companies',
      icon: <Calendar size={24} />,
      color: 'from-red-500 to-rose-500'
    }
  ]

  return (
    <section id="timeline" className="py-20 px-4 bg-gradient-to-b from-dark to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Career <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and milestones
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-secondary rounded-full"></div>
          
          <div className="space-y-12">
            {events.map((event, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} animate-slide-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${event.color} text-white px-4 py-1 rounded-full text-sm font-bold mb-3`}>
                      {event.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center border-4 border-dark shadow-lg`}>
                  <div className="text-white">
                    {event.icon}
                  </div>
                </div>
                
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

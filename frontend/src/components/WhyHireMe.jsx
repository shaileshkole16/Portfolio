import { Target, Rocket, Users, Lightbulb, Award, CheckCircle } from 'lucide-react'

function WhyHireMe() {
  const reasons = [
    {
      icon: <Rocket size={32} />,
      title: 'Full-Stack Expertise',
      description: 'Proficient in React, Node.js, Flutter, and React Native - capable of building complete applications from frontend to backend to mobile.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Target size={32} />,
      title: 'Results-Driven',
      description: 'Proven track record of delivering production-ready applications with clean code practices and modern architecture.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Problem Solver',
      description: 'Strong foundation in Data Structures, Algorithms, and OOP principles with ability to tackle complex technical challenges.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Users size={32} />,
      title: 'Collaborative Developer',
      description: 'Experienced working in Agile environments using Git and GitHub, participating in code reviews and collaborative development.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Award size={32} />,
      title: 'Certified Professional',
      description: 'Flutter certified with multiple recognitions from Core2Web and Incubators programs.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Quick Learner',
      description: 'Continuously expanding skillset with recent focus on advanced computing, mobile development, and cloud technologies.',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  return (
    <section id="why-hire-me" className="py-24 px-4 bg-gradient-to-b from-slate-900 to-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Hire Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What makes me the right choice for your team
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyHireMe

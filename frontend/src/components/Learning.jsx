import { BookOpen, Brain, Lightbulb, Target, GraduationCap, TrendingUp, Sparkles } from 'lucide-react'

function Learning() {
  const learningItems = [
    {
      icon: <Sparkles size={32} />,
      title: 'Generative AI & LLMs',
      description: 'Applied Generative AI from LLMs to Agentic AI - RAG, LangChain, CrewAI, Prompt Engineering, Vector Databases',
      status: 'Active',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Brain size={32} />,
      title: 'Advanced Computing',
      description: 'Post Graduate Diploma in Advanced Computing - Mobile Computing at CDAC',
      status: 'Completed',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Machine Learning',
      description: 'TensorFlow Lite and Core ML for mobile applications',
      status: 'In Progress',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Target size={32} />,
      title: 'Cloud Architecture',
      description: 'AWS and cloud-native development practices',
      status: 'Planned',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'System Design',
      description: 'Scalable architecture patterns and best practices',
      status: 'In Progress',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <GraduationCap size={32} />,
      title: 'TypeScript',
      description: 'Advanced TypeScript for type-safe development',
      status: 'In Progress',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Performance Optimization',
      description: 'Advanced techniques for web and mobile performance',
      status: 'Ongoing',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  return (
    <section id="learning" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Currently <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Exploring</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Continuous learning and growth mindset
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningItems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 text-xs text-gray-300 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Learning

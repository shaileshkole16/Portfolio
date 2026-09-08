import { Github, Star, GitFork, Eye, Code2 } from 'lucide-react'

function GitHubStats() {
  const stats = [
    { icon: <Code2 size={28} />, value: '15+', label: 'Repositories', color: 'from-blue-500 to-cyan-500' },
    { icon: <Star size={28} />, value: '50+', label: 'Stars Earned', color: 'from-yellow-500 to-orange-500' },
    { icon: <GitFork size={28} />, value: '20+', label: 'Forks', color: 'from-purple-500 to-pink-500' },
    { icon: <Eye size={28} />, value: '1K+', label: 'Profile Views', color: 'from-green-500 to-emerald-500' }
  ]

  const languages = [
    { name: 'JavaScript', percentage: 40, color: 'bg-yellow-400' },
    { name: 'Java', percentage: 25, color: 'bg-red-500' },
    { name: 'Dart', percentage: 15, color: 'bg-blue-400' },
    { name: 'Python', percentage: 10, color: 'bg-green-400' },
    { name: 'Other', percentage: 10, color: 'bg-gray-400' }
  ]

  return (
    <section id="github-stats" className="py-20 px-4 bg-gradient-to-b from-dark to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            GitHub <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Statistics</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Active development and contribution history
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 animate-slide-up">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Github className="text-primary" size={28} />
            Top Languages
          </h3>
          <div className="space-y-4">
            {languages.map((lang, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300 font-medium">{lang.name}</span>
                  <span className="text-gray-400">{lang.percentage}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${lang.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GitHubStats
